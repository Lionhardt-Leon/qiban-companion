import XCTest
import zlib
@testable import QibanCompanion

final class CharacterStickerTests: XCTestCase {
    private func makeZip(entries: [(nameBytes: Data, utf8Flag: Bool, data: Data, deflate: Bool)]) throws -> URL {
        func u16(_ v: UInt16) -> Data { Data([UInt8(v & 0xff), UInt8((v >> 8) & 0xff)]) }
        func u32(_ v: UInt32) -> Data { Data([UInt8(v & 0xff), UInt8((v >> 8) & 0xff), UInt8((v >> 16) & 0xff), UInt8((v >> 24) & 0xff)]) }
        func deflateRaw(_ input: Data) throws -> Data {
            var stream = z_stream()
            XCTAssertEqual(deflateInit2_(&stream, Z_DEFAULT_COMPRESSION, Z_DEFLATED, -MAX_WBITS, 8, Z_DEFAULT_STRATEGY, ZLIB_VERSION, Int32(MemoryLayout<z_stream>.size)), Z_OK)
            defer { deflateEnd(&stream) }
            var out = Data(count: input.count + 64)
            let status: Int32 = input.withUnsafeBytes { src in
                out.withUnsafeMutableBytes { dst in
                    stream.next_in = UnsafeMutablePointer(mutating: src.bindMemory(to: Bytef.self).baseAddress!)
                    stream.avail_in = uInt(input.count)
                    stream.next_out = dst.bindMemory(to: Bytef.self).baseAddress!
                    stream.avail_out = uInt(out.count)
                    return deflate(&stream, Z_FINISH)
                }
            }
            XCTAssertEqual(status, Z_STREAM_END)
            out.count = Int(stream.total_out)
            return out
        }

        var body = Data()
        var central = Data()
        for entry in entries {
            let offset = UInt32(body.count)
            let method: UInt16 = entry.deflate ? 8 : 0
            let flags: UInt16 = entry.utf8Flag ? 0x0800 : 0
            let payload = entry.deflate ? try deflateRaw(entry.data) : entry.data
            let crc = entry.data.withUnsafeBytes { UInt32(crc32(0, $0.bindMemory(to: Bytef.self).baseAddress, uInt(entry.data.count))) }

            body.append(u32(0x04034b50)); body.append(u16(20)); body.append(u16(flags)); body.append(u16(method))
            body.append(u16(0)); body.append(u16(0)); body.append(u32(crc))
            body.append(u32(UInt32(payload.count))); body.append(u32(UInt32(entry.data.count)))
            body.append(u16(UInt16(entry.nameBytes.count))); body.append(u16(0))
            body.append(entry.nameBytes); body.append(payload)

            central.append(u32(0x02014b50)); central.append(u16(20)); central.append(u16(20)); central.append(u16(flags)); central.append(u16(method))
            central.append(u16(0)); central.append(u16(0)); central.append(u32(crc))
            central.append(u32(UInt32(payload.count))); central.append(u32(UInt32(entry.data.count)))
            central.append(u16(UInt16(entry.nameBytes.count))); central.append(u16(0)); central.append(u16(0))
            central.append(u16(0)); central.append(u16(0)); central.append(u32(0)); central.append(u32(offset))
            central.append(entry.nameBytes)
        }
        let centralOffset = UInt32(body.count)
        body.append(central)
        body.append(u32(0x06054b50)); body.append(u16(0)); body.append(u16(0))
        body.append(u16(UInt16(entries.count))); body.append(u16(UInt16(entries.count)))
        body.append(u32(UInt32(central.count))); body.append(u32(centralOffset)); body.append(u16(0))

        let url = FileManager.default.temporaryDirectory.appendingPathComponent("emilia-\(UUID().uuidString).zip")
        try body.write(to: url)
        return url
    }

    func testZipImportExtractsDeflatedAndGBKIntoSpecificCharacterOnly() throws {
        let dir = FileManager.default.temporaryDirectory.appendingPathComponent("stickers-\(UUID().uuidString)", isDirectory: true)
        defer { try? FileManager.default.removeItem(at: dir) }
        let library = CharacterStickerLibrary(directory: dir)
        let emiliaID = UUID()
        let otherID = UUID()

        let fakePng = Data([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4])
        let gbkSurprised = Data([0xb3, 0xd4, 0xbe, 0xaa, 0x2e, 0x70, 0x6e, 0x67]) // "吃惊.png" in GBK
        let zipURL = try makeZip(entries: [
            (Data("爱蜜莉雅表情包/01_开心.png".utf8), true, fakePng, true),
            (gbkSurprised, false, fakePng, false),
            (Data("__MACOSX/._01_开心.png".utf8), true, fakePng, false),
            (Data("notes.txt".utf8), true, Data("ignore".utf8), true)
        ])
        defer { try? FileManager.default.removeItem(at: zipURL) }

        let result = try library.importFiles([zipURL], for: emiliaID)
        XCTAssertEqual(result.added, 2)
        XCTAssertEqual(result.pack.items.map(\.label), ["开心", "吃惊"])
        XCTAssertTrue(library.load(for: otherID).items.isEmpty)

        let renamed = try library.rename(stickerID: result.pack.items[0].id, label: "超开心", for: emiliaID)
        XCTAssertEqual(renamed.items[0].label, "超开心")

        let snapshot = library.webSnapshot(for: emiliaID)
        let items = try XCTUnwrap(snapshot["items"] as? [[String: Any]])
        XCTAssertEqual(items.count, 2)
        XCTAssertTrue((items[0]["url"] as? String)?.hasPrefix("qiban-stickers/\(emiliaID.uuidString)/") == true)

        try library.clear(for: emiliaID)
        XCTAssertTrue(library.load(for: emiliaID).items.isEmpty)
    }
}
