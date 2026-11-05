import XCTest
import WebKit
@testable import QibanCompanion

final class SnowbreakTests:XCTestCase {
    private func library() throws -> SnowbreakLibrary {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        return SnowbreakLibrary(directory:directory)
    }
    func testImportStagingAndFailurePreserveExistingPackage() throws {
        let library = try library();defer { try? FileManager.default.removeItem(at:library.directory) }
        let data = SnowbreakFixture.data
        let stage = try library.stage(data)
        XCTAssertFalse(library.hasCurrent)
        try library.commit(stage)
        XCTAssertEqual(try Data(contentsOf:library.current),data)
        XCTAssertThrowsError(try library.stage(Data("not an archive".utf8)))
        XCTAssertEqual(try Data(contentsOf:library.current),data)
        XCTAssertThrowsError(try library.commit(library.current))
    }
    func testLocalSchemeRejectsExternalHostsAndPaths() throws {
        let library = try library();defer { try? FileManager.default.removeItem(at:library.directory) }
        let scheme = SnowbreakScheme(library:library)
        for url in ["https://example.com/index.html","companion-snowbreak://evil/index.html",
                    "companion-snowbreak://local/package/archive-v1.json","companion-snowbreak://local/host.js?key=secret"] {
            XCTAssertThrowsError(try scheme.resource(URL(string:url)!))
        }
        let (script,mime) = try scheme.resource(URL(string:"companion-snowbreak://local/host.js")!)
        XCTAssertEqual(mime,"application/javascript");XCTAssertGreaterThan(script.count,100_000)
    }
    @MainActor func testWebKitLoadsAndValidatesSyntheticEnyaThroughLocalScheme() async throws {
        let library = try library();defer { try? FileManager.default.removeItem(at:library.directory) }
        try SnowbreakFixture.data.write(to:library.current)
        let stage = SnowbreakStage(library:library),view = stage.makeView()
        let controller = UIViewController(),window = UIWindow(frame:UIScreen.main.bounds)
        controller.view.addSubview(view);view.frame = window.bounds;window.rootViewController = controller;window.makeKeyAndVisible()
        defer { stage.pause();window.isHidden = true }
        for _ in 0..<1500 {
            if stage.ready || stage.error != nil { break }
            try await Task.sleep(nanoseconds:20_000_000)
        }
        XCTAssertNil(stage.error)
        XCTAssertTrue(stage.ready,"WebKit local renderer must report an authenticated ready message")
        guard stage.ready else { return }
        XCTAssertEqual(try Data(contentsOf:library.current),SnowbreakFixture.data)
        try await evaluate("""
        void (async()=>{
          const image=new Image();await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('Lossless WebP decode failed'));image.src='data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvA8AAEAdQqCIXpYCBiOh/AAA=';});
          const canvas=document.createElement('canvas');canvas.width=4;canvas.height=4;const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);
          window.__testTexture={width:image.width,height:image.height,alpha:ctx.getImageData(0,0,1,1).data[3]};
        })().catch(error=>window.__testTexture={error:String(error)});
        """,in:view)
        var texture:[String:Any]?
        for _ in 0..<400 {
            texture = try await evaluate("window.__testTexture || null",in:view) as? [String:Any]
            if texture != nil { break }
            try await Task.sleep(nanoseconds:50_000_000)
        }
        XCTAssertNil(texture?["error"])
        XCTAssertEqual(texture?["width"] as? Int,4)
        XCTAssertEqual(texture?["height"] as? Int,4)
        XCTAssertEqual(texture?["alpha"] as? Int,128)
        try await evaluate("""
        void (async()=>{
        const a = new ArrayBuffer(44 + 8820), v = new DataView(a);
        const text = (at,s)=>{for(let i=0;i<s.length;i++)v.setUint8(at+i,s.charCodeAt(i));};
        text(0,'RIFF');v.setUint32(4,a.byteLength-8,true);text(8,'WAVE');text(12,'fmt ');
        v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);
        v.setUint32(24,44100,true);v.setUint32(28,88200,true);v.setUint16(32,2,true);v.setUint16(34,16,true);
        text(36,'data');v.setUint32(40,8820,true);
        const url=URL.createObjectURL(new Blob([a],{type:'audio/wav'})), audio=new Audio();audio.preload='auto';
        try { await new Promise((r,j)=>{const timer=setTimeout(()=>j(new Error('metadata timeout')),15000);audio.onloadedmetadata=()=>{clearTimeout(timer);r();};audio.onerror=()=>{clearTimeout(timer);j(new Error('audio decode failed'));};audio.src=url;audio.load();});
          await audio.play();window.__testSound={duration:audio.duration,playing:!audio.paused};
        } finally { audio.pause();URL.revokeObjectURL(url); }
        })().catch(error=>window.__testSound={error:String(error)});
        """,in:view)
        var sound:[String:Any]?
        for _ in 0..<400 {
            sound = try await evaluate("window.__testSound || null",in:view) as? [String:Any]
            if sound != nil { break }
            try await Task.sleep(nanoseconds:50_000_000)
        }
        XCTAssertNil(sound?["error"])
        XCTAssertEqual(sound?["playing"] as? Bool,true)
        XCTAssertEqual(sound?["duration"] as? Double ?? 0,0.1,accuracy:0.002)
    }
    @MainActor @discardableResult private func evaluate(_ script:String,in view:WKWebView) async throws -> Any? {
        try await withCheckedThrowingContinuation { continuation in
            view.evaluateJavaScript(script,completionHandler:{ value,error in
                if let error = error { continuation.resume(throwing:error) }
                else { continuation.resume(returning:value) }
            })
        }
    }
    func testEnyaCapabilitiesCannotSelectYukiMotions() throws {
        let allowed = ["snowbreak_head","snowbreak_left","snowbreak_right"]
        XCTAssertEqual(DialogueMotion.allowed(allowed),allowed)
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"好","decision":"accept","action":"hello"}"#,actions:allowed).action)
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"好","decision":"accept","action":"procedural","motion":{}}"#,actions:allowed).action)
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好","decision":"accept","action":"snowbreak_left"}"#,actions:allowed).action,"snowbreak_left")
    }
}
