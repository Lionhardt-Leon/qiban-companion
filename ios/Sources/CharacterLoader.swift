import Foundation
import SceneKit

/// Created entirely on a worker, then handed to the UI once; worker does not retain or mutate it.
struct LoadedCharacter: @unchecked Sendable {
    let scene: SCNScene
    let package: CharacterPackage?
    let skeleton: SkeletonPlayer?
    let name: String
}

enum CharacterLoader {
    private struct Descriptor: Decodable { let characterPackageVersion: Int? }

    static func load(url: URL, remember: Bool = false, library: CharacterLibrary = CharacterLibrary()) throws -> LoadedCharacter {
        let access = url.startAccessingSecurityScopedResource()
        defer { if access { url.stopAccessingSecurityScopedResource() } }
        var coordinationError: NSError?
        var content: Result<Data, Error>?
        NSFileCoordinator().coordinate(readingItemAt: url, options: [], error: &coordinationError) { readable in
            content = Result {
                let handle = try FileHandle(forReadingFrom: readable)
                defer { try? handle.close() }
                let data = try handle.read(upToCount: 60_000_001) ?? Data()
                guard !data.isEmpty else { throw CompanionError.message("所选文件为空。请先在“文件”App 中下载完整角色包。") }
                guard data.count <= 60_000_000 else { throw CompanionError.message("角色文件超过 60MB。") }
                return data
            }
        }
        if let error = coordinationError { throw error }
        guard let content = content else { throw CompanionError.message("无法读取所选文件。请先保存到“我的 iPhone”再导入。") }
        let data = try content.get()
        let loaded = try decode(data)
        if remember { try library.rememberValidatedData(data) }
        return loaded
    }

    static func decode(_ data: Data) throws -> LoadedCharacter {
        let decoder = JSONDecoder()
        let descriptor: Descriptor
        do { descriptor = try decoder.decode(Descriptor.self, from: data) }
        catch { throw CompanionError.message("文件不是有效的角色 JSON。请选取完整的 yuki-motion.character.json。") }
        if descriptor.characterPackageVersion != nil {
            let package = try decoder.decode(CharacterPackage.self, from: data)
            let scene = try package.scene()
            var skeleton: SkeletonPlayer?
            if package.motion != nil {
                skeleton = try SkeletonPlayer(package: package, scene: scene)
                try skeleton?.apply(frame: 0, blink: 0, mouth: 0, smile: 0)
            } else { try package.applyExpression(to: scene, blink: 0, mouth: 0, smile: 0) }
            return LoadedCharacter(scene: scene, package: package, skeleton: skeleton, name: package.name)
        }
        let mesh = try decoder.decode(ResearchMesh.self, from: data)
        return LoadedCharacter(scene: try mesh.scene(), package: nil, skeleton: nil, name: mesh.name)
    }
}
