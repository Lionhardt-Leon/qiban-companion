import XCTest
import UIKit
import OnnxRuntimeBindings
@testable import QibanCompanion

final class AppleAccelerationTests:XCTestCase {
    func testComputeSettingsRemainBackwardCompatible() throws {
        let old=try JSONDecoder().decode(SpeechPreferences.self,from:Data(#"{"voiceID":"enya.zh","language":"zh","autoPlay":true,"speed":1,"volume":1}"#.utf8))
        try old.validate();XCTAssertEqual(old.acceleration,.automatic)
        var value=old;value.computeMode="gpu";XCTAssertEqual(try JSONDecoder().decode(SpeechPreferences.self,from:JSONEncoder().encode(value)).acceleration,.gpu)
        value.computeMode="unknown";XCTAssertThrowsError(try value.validate())
        XCTAssertTrue(VoiceComputeMode.automatic.accelerates("bert"));XCTAssertTrue(VoiceComputeMode.neural.accelerates("sovits"));XCTAssertFalse(VoiceComputeMode.automatic.accelerates("step"));XCTAssertFalse(VoiceComputeMode.gpu.accelerates("encoder"))
    }
    func testThermalPolicyKeepsANormalBudgetAndReducesPressure(){
        XCTAssertEqual(AppleHardwareBudget.frameRate(thermal:"nominal",lowPower:false),60)
        XCTAssertEqual(AppleHardwareBudget.frameRate(thermal:"serious",lowPower:false),30)
        XCTAssertEqual(AppleHardwareBudget.frameRate(thermal:"nominal",lowPower:true),30)
        XCTAssertEqual(AppleHardwareBudget.frameRate(thermal:"critical",lowPower:true),20)
    }
    func testVoiceCacheChangesWithPackageContent() throws {
        let root=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);try FileManager.default.createDirectory(at:root,withIntermediateDirectories:true);defer{try? FileManager.default.removeItem(at:root)}
        let manifest=root.appendingPathComponent("manifest.json");try Data("first".utf8).write(to:manifest);let first=try AcceleratedVoiceSession.cacheDirectory(root:root)
        XCTAssertEqual(first,try AcceleratedVoiceSession.cacheDirectory(root:root));try Data("second".utf8).write(to:manifest);XCTAssertNotEqual(first,try AcceleratedVoiceSession.cacheDirectory(root:root))
    }
    func testAccelerationWrapperRunsAnActualGraph() throws {
        let url=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString+".onnx");defer{try? FileManager.default.removeItem(at:url)}
        try XCTUnwrap(Data(base64Encoded:"CAk6TgoOCgF4CgF5EgF6IgNBZGQSCXN5bnRoZXRpY1oPCgF4EgoKCAgBEgQKAggCWg8KAXkSCgoICAESBAoCCAJiDwoBehIKCggIARIECgIIAkIECgAQFA==")).write(to:url)
        let env=try ORTEnv(loggingLevel:.warning),session=try AcceleratedVoiceSession(env:env,model:url,module:"bert",mode:.automatic,cache:FileManager.default.temporaryDirectory.appendingPathComponent("SyntheticCoreML"))
        func tensor(_ samples:[Float]) throws -> ORTValue {try samples.withUnsafeBufferPointer{try ORTValue(tensorData:NSMutableData(data:Data(buffer:$0)),elementType:.float,shape:[2])}}
        let output=try session.run(["x":tensor([1,2]),"y":tensor([3,4])],["z"]),data=try XCTUnwrap(output["z"]).tensorData() as Data
        XCTAssertEqual(data.withUnsafeBytes{$0.loadUnaligned(as:Float.self)},4);XCTAssertEqual(session.calls,1)
    }
    @MainActor func testLocalVisionReadsTextWithoutAChatEndpoint() async throws {
        let renderer=UIGraphicsImageRenderer(size:CGSize(width:800,height:260))
        let image=renderer.image {context in UIColor.white.setFill();context.fill(CGRect(x:0,y:0,width:800,height:260));("QIBAN 2026" as NSString).draw(at:CGPoint(x:30,y:75),withAttributes:[.font:UIFont.systemFont(ofSize:85),.foregroundColor:UIColor.black])}
        let result=try await AppleLocalVision.analyze(XCTUnwrap(image.jpegData(compressionQuality:0.8)))
        XCTAssertTrue(result.text.uppercased().contains("QIBAN"));XCTAssertTrue(result.milliseconds>0)
    }
}
