import XCTest
@testable import QibanCompanion

final class ChatModuleLibraryTests: XCTestCase {
    func testQuotaUsesEncodedTotalAndLegacyRecoveryPreservesOriginals() throws {
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at:root) }
        let library = ChatModuleLibrary(directory:root,stateLimit:180)
        let large = String(repeating:"中文",count:19)
        try library.persist(key:"fritia_a",value:large)
        XCTAssertThrowsError(try library.persist(key:"fritia_b",value:large))
        XCTAssertEqual(try library.state(),["fritia_a":large])
        try library.persist(key:"fritia_a",value:"short")
        try library.persist(key:"fritia_b",value:large)
        try library.persist(key:"fritia_b",value:nil)
        XCTAssertEqual(try library.state(),["fritia_a":"short"])

        let legacy = ChatModuleLibrary(directory:root)
        try legacy.persist(key:"fritia_a",value:large)
        try legacy.persist(key:"fritia_b",value:large)
        XCTAssertThrowsError(try library.state())
        let output=root.appendingPathComponent("recovery")
        try library.exportStateRecords(to:output)
        let exported=try FileManager.default.contentsOfDirectory(at:output,includingPropertiesForKeys:nil)
        XCTAssertEqual(exported.count,2)
        for file in exported {
            let original=root.appendingPathComponent("state").appendingPathComponent(file.lastPathComponent)
            XCTAssertEqual(try Data(contentsOf:file),try Data(contentsOf:original))
        }
        try library.persist(key:"fritia_b",value:nil)
        XCTAssertEqual(try library.state(),["fritia_a":large])
    }

    func testConcurrentFinalSlotDoesNotOverfillArchive() throws {
        let root=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer {try? FileManager.default.removeItem(at:root)}
        let library=ChatModuleLibrary(directory:root,stateLimit:160)
        DispatchQueue.concurrentPerform(iterations:8) { i in
            do { try library.persist(key:"fritia_\(i)",value:String(repeating:"x",count:90)) }
            catch is ChatModuleLibrary.CapacityError {}
            catch { XCTFail(error.localizedDescription) }
        }
        XCTAssertEqual(try library.state().count,1)
    }

    func testRetainsOnePreviousProgramAndLeavesStateDuringUpgradeAndRollback() throws {
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString, isDirectory:true)
        let files = FileManager.default
        let library = ChatModuleLibrary(directory:root)
        defer { try? files.removeItem(at:root) }

        func program(_ url: URL, label: String) throws {
            let site = url.appendingPathComponent("site", isDirectory:true)
            try files.createDirectory(at:site,withIntermediateDirectories:true)
            try label.write(to:site.appendingPathComponent("index.html"),atomically:true,encoding:.utf8)
            try ChatModuleInfo.packageSHA256.write(to:url.appendingPathComponent("package.sha256"),atomically:true,encoding:.utf8)
        }

        let unknown = root.appendingPathComponent("previous-" + UUID().uuidString, isDirectory:true)
        try files.createDirectory(at:unknown,withIntermediateDirectories:true)
        try library.persist(key:"fritia_test",value:"用户通讯数据")
        try program(library.current,label:"original")
        XCTAssertThrowsError(try library.replaceCurrent(with:root.appendingPathComponent("missing-stage")))
        XCTAssertTrue(library.installed)

        for i in 0..<3 {
            let stage = root.appendingPathComponent("staging-" + UUID().uuidString,isDirectory:true)
            try program(stage,label:"upgrade \(i)")
            try library.replaceCurrent(with:stage)
            XCTAssertTrue(library.installed)
            let previous = try files.contentsOfDirectory(at:root,includingPropertiesForKeys:nil).filter {
                $0.lastPathComponent.hasPrefix("previous-") && $0.lastPathComponent != unknown.lastPathComponent
            }
            XCTAssertEqual(previous.count,1)
            let backup = try XCTUnwrap(previous.first).appendingPathComponent("site/index.html")
            XCTAssertEqual(try String(contentsOf:backup,encoding:.utf8), i == 0 ? "original" : "upgrade \(i-1)")
            XCTAssertEqual(try library.state()["fritia_test"],"用户通讯数据")
            XCTAssertTrue(files.fileExists(atPath:unknown.path))
        }
    }
}
