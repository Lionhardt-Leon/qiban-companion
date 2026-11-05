import SwiftUI
import SceneKit
import UniformTypeIdentifiers
import UIKit

/// Extracted geometry used by material and facial-expression migration previews.
struct ResearchMesh: Decodable {
    let name: String
    let vertices: [[Float]]
    let normals: [[Float]]?
    let uv0: [[Float]]?
    let trianglesBySubmesh: [[[Int]]]
    var uv1: [[Float]]? = nil

    func node(materials: [SCNMaterial]? = nil) throws -> SCNNode {
        guard !vertices.isEmpty, vertices.count <= 200_000,
              vertices.allSatisfy({ $0.count >= 3 && $0.prefix(3).allSatisfy { $0.isFinite && abs($0) < 1_000_000 } }) else {
            throw CompanionError.message("网格顶点无效或超过预览限制。")
        }
        let triangles = trianglesBySubmesh.flatMap { $0 }
        guard !triangles.isEmpty, triangles.count <= 500_000,
              triangles.allSatisfy({ $0.count == 3 && $0.allSatisfy { $0 >= 0 && $0 < vertices.count } }) else {
            throw CompanionError.message("网格三角形索引无效。")
        }
        // Convert Unity left-handed geometry by reflecting X and reversing triangle winding.
        let positions = vertices.map { SCNVector3(-$0[0], $0[1], $0[2]) }
        let elements = trianglesBySubmesh.map { group -> SCNGeometryElement in
            let indices: [Int32] = group.flatMap { [Int32($0[2]), Int32($0[1]), Int32($0[0])] }
            let data = indices.withUnsafeBufferPointer { Data(buffer: $0) }
            return SCNGeometryElement(data: data, primitiveType: .triangles,
                                      primitiveCount: group.count, bytesPerIndex: MemoryLayout<Int32>.size)
        }
        var sources = [SCNGeometrySource(vertices: positions)]
        if let normals = normals, normals.count == positions.count,
           normals.allSatisfy({ $0.count >= 3 && $0.prefix(3).allSatisfy(\.isFinite) }) {
            sources.append(SCNGeometrySource(normals: normals.map { SCNVector3(-$0[0], $0[1], $0[2]) }))
        }
        if let uv = uv0 {
            guard uv.count == positions.count, uv.allSatisfy({ $0.count >= 2 && $0.prefix(2).allSatisfy(\.isFinite) }) else {
                throw CompanionError.message("基础纹理坐标无效。")
            }
            sources.append(SCNGeometrySource(textureCoordinates: uv.map { CGPoint(x: CGFloat($0[0]), y: CGFloat($0[1])) }))
        }
        if let uv = uv1 {
            guard uv.count == positions.count, uv.allSatisfy({ $0.count == 2 && $0.allSatisfy(\.isFinite) }), uv0 != nil else {
                throw CompanionError.message("第二套纹理坐标无效。")
            }
            sources.append(SCNGeometrySource(textureCoordinates: uv.map { CGPoint(x: CGFloat($0[0]), y: CGFloat($0[1])) }))
        }
        let geometry = SCNGeometry(sources: sources, elements: elements)
        let material = SCNMaterial()
        material.diffuse.contents = UIColor(white: 0.8, alpha: 1)
        material.isDoubleSided = true
        geometry.materials = materials ?? [material]
        let model = SCNNode(geometry: geometry)
        model.name = name
        return model
    }

    func scene() throws -> SCNScene { try characterPreviewScene(nodes: [node()]) }
}

func characterPreviewScene(nodes: [SCNNode]) throws -> SCNScene {
        let model = SCNNode()
        nodes.forEach { model.addChildNode($0) }
        let bounds = model.boundingBox
        let center = SCNVector3((bounds.min.x + bounds.max.x) / 2,
                               (bounds.min.y + bounds.max.y) / 2, (bounds.min.z + bounds.max.z) / 2)
        let extent = max(bounds.max.x - bounds.min.x, max(bounds.max.y - bounds.min.y, bounds.max.z - bounds.min.z))
        guard extent > 0.000001 else { throw CompanionError.message("网格包围盒为空。") }
        model.position = SCNVector3(-center.x, -center.y, -center.z)
        let scene = SCNScene()
        scene.rootNode.addChildNode(model)
        let camera = SCNNode()
        camera.camera = SCNCamera()
        camera.camera?.zNear = Double(extent) / 1000
        camera.camera?.zFar = Double(extent) * 100
        camera.position = SCNVector3(0, 0, extent * 2.3)
        scene.rootNode.addChildNode(camera)
        scene.background.contents = UIColor(white: 0.12, alpha: 1)
        return scene
}

struct CharacterPackage: Decodable {
    struct EyeBinding: Decodable {
        let node: Int
        let pivot: Int
        let forward: [Float]
        let eyeToPupil: Float
        let pivotToPupil: Float
    }
    struct FaceDirection: Decodable { let node: Int; let axis: [Float]; var upAxis: [Float]? = nil }
    struct Part: Decodable {
        struct Material: Decodable {
            struct Color: Decodable { let r: Float; let g: Float; let b: Float; let a: Float }
            struct TextureInput: Decodable {
                let texture: String?
                let rawTexture: String?
                let scale: [Float]
                let offset: [Float]
                var sRGB: Bool? = nil
            }
            let name: String
            let texture: String?
            let scale: [Float]?
            let offset: [Float]?
            let cull: Int?
            let depthWrite: Bool?
            let surfaceType: Int?
            let alphaClip: Bool?
            let alphaOverride: Bool?
            let cutoff: Float?
            let shader: String?
            let keywords: [String]?
            let floats: [String: Float]?
            let colors: [String: Color]?
            let textureInputs: [String: TextureInput]?
        }
        let mesh: ResearchMesh
        let materials: [Material]
        let morphs: [MorphTarget]?
        let skin: SkinBinding?
    }
    let characterPackageVersion: Int
    let name: String
    let parts: [Part]
    let textures: [String: String]
    var motion: SkeletonMotion? = nil
    var backgrounds: [String: String]? = nil
    var faceDirection: FaceDirection? = nil
    var mainLightDirection: [Float]? = nil
    var eyes: [EyeBinding]? = nil
    var actions: [CharacterAction]? = nil

    func scene() throws -> SCNScene {
        if motion != nil, faceDirection == nil,
           parts.flatMap(\.materials).contains(where: { ($0.alphaOverride ?? false) && ($0.floats?["_ApplyAlphaOverrideOnlyWhenFaceForwardIsPointingToCamera"] ?? 0) > 0 }) {
            throw CompanionError.message("此角色包缺少脸部朝向配置，请导入新版 yuki-eye-alpha.character.json。")
        }
        guard [1, 2, 3].contains(characterPackageVersion), !parts.isEmpty, parts.count <= 64, textures.count <= 64,
              parts.reduce(0, { $0 + $1.mesh.vertices.count }) <= 500_000 else {
            throw CompanionError.message("角色包版本或大小超出预览范围。")
        }
        var images: [String: UIImage] = [:]
        for (key, value) in textures {
            guard let data = Data(base64Encoded: value), data.count <= 20_000_000,
                  let image = UIImage(data: data), image.size.width <= 8192, image.size.height <= 8192 else {
                throw CompanionError.message("角色贴图无效或尺寸超限。")
            }
            images[key] = image
        }
        let nodes = try parts.map { part -> SCNNode in
            guard part.materials.count >= part.mesh.trianglesBySubmesh.count else {
                throw CompanionError.message("材质槽与网格数量不匹配。")
            }
            let materials = try part.materials.map { source -> SCNMaterial in
                if motion != nil, MatCapRenderer.enabled(source), part.skin?.normals == nil {
                    throw CompanionError.message("角色包缺少动态法线，请导入新版 yuki-live.character.json。")
                }
                if source.keywords?.contains("_FACE_SHADOW_GRADIENTMAP") == true {
                    guard part.mesh.uv1 != nil, faceDirection?.upAxis != nil else {
                        throw CompanionError.message("角色包缺少面部阴影 UV 或朝上轴，请导入新版 yuki-face-sdf.character.json。")
                    }
                }
                return try CharacterMaterialRenderer.make(source, images: images, mainLightDirection: mainLightDirection)
            }
            return try part.mesh.node(materials: materials)
        }
        return try characterPreviewScene(nodes: nodes)
    }
}

struct CharacterPreview: View {
    @Environment(\.dismiss) private var dismiss
    @EnvironmentObject private var store: LocalStore
    @State private var importing = false
    @State private var browsingLocal = false
    @State private var scene: SCNScene?
    @State private var meshName = ""
    @State private var package: CharacterPackage?
    @State private var blink: Float = 0
    @State private var mouth: Float = 0
    @State private var smile: Float = 0
    @State private var autoBlink = false
    @State private var skeleton: SkeletonPlayer?
    @State private var playing = false
    @State private var frame = 0
    @State private var loading = false
    @State private var importStatus = ""
    var body: some View {
        NavigationStack {
            VStack(spacing: 14) {
                if loading {
                    ProgressView("正在读取角色并准备模型…")
                    Text("首次加载需要一些时间，请保持 App 打开。")
                        .font(.caption).foregroundStyle(.secondary)
                } else if !importStatus.isEmpty {
                    Text(importStatus).font(.caption).foregroundStyle(.secondary)
                }
                if let scene = scene {
                    SceneView(scene: scene, options: [.allowsCameraControl, .autoenablesDefaultLighting], antialiasingMode: .multisampling4X)
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                    Text(meshName).font(.caption)
                    Button("在主页面使用此伙伴") {
                        UserDefaults.standard.set("native",forKey:"characterEngine")
                        dismiss()
                    }.buttonStyle(.borderedProminent).accessibilityIdentifier("useNativeCharacter")
                    if let skeleton = skeleton {
                        HStack {
                            Button(playing ? "暂停待机" : "播放待机") { playing.toggle() }.disabled(loading)
                            Button("回到开头") { playing = false; frame = 0; updateExpression() }
                            Text("\(frame + 1)/\(skeleton.motion.frameCount)").font(.caption)
                        }
                    }
                } else {
                    Spacer()
                    Image(systemName: "person.crop.rectangle").font(.system(size: 64)).foregroundStyle(.secondary)
                    Text("角色资源迁移预览").font(.headline)
                    Text("导入角色包或单个网格 JSON。支持拖动旋转、双指缩放。")
                        .multilineTextAlignment(.center).foregroundStyle(.secondary).padding()
                    Spacer()
                }
                if package?.parts.contains(where: { !($0.morphs ?? []).isEmpty }) == true {
                    VStack {
                        Toggle("自动眨眼", isOn: $autoBlink)
                        HStack { Text("闭眼"); Slider(value: $blink, in: 0...1).disabled(autoBlink) }
                        HStack { Text("张嘴"); Slider(value: $mouth, in: 0...1) }
                        HStack { Text("微笑"); Slider(value: $smile, in: 0...1) }
                        Button("重置表情") { autoBlink = false; blink = 0; mouth = 0; smile = 0 }
                    }.padding(.horizontal).disabled(loading)
                }
                Text("迁移预览：新版角色包支持原生骨骼蒙皮、插值待机与双眼视线跟随；原版完整着色与物理仍在迁移中。")
                    .font(.caption).foregroundStyle(.secondary).padding(.horizontal)
                HStack {
                    Button(loading ? "正在导入…" : "选择角色文件") {
                        importStatus = "已打开系统文件选择器，等待返回文件。"
                        importing = true
                    }.buttonStyle(.borderedProminent)
                    Button("App 文件夹") { browsingLocal = true }.buttonStyle(.bordered)
                }.disabled(loading)
                Text("版本 \(Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "?") · 文件选择失败可使用 App 文件夹")
                    .font(.caption2).foregroundStyle(.secondary).padding(.bottom, 8)
            }.navigationTitle("角色预览")
                .sheet(isPresented: $importing) {
                    CharacterDocumentPicker { result in
                        importing = false
                        switch result {
                        case .success(let url):
                            if let url = url { loadCharacter(url) }
                            else { importStatus = "已取消选择文件。" }
                        case .failure(let error):
                            importStatus = "文件选择器返回错误：\(error.localizedDescription)"
                            store.error = importStatus
                        }
                    }
                }
                .sheet(isPresented: $browsingLocal) { LocalCharacterFileList { url in loadCharacter(url) } }
                .onAppear {
                    do {
                        _ = try LocalCharacterFiles.directory()
                        let library = CharacterLibrary()
                        if scene == nil, !loading, library.hasCurrent {
                            loadCharacter(library.currentURL, remember: false)
                        }
                    }
                    catch { importStatus = "创建本机角色目录失败：\(error.localizedDescription)" }
                }
                .onChange(of: blink) { _ in updateExpression() }
                .onChange(of: mouth) { _ in updateExpression() }
                .onChange(of: smile) { _ in updateExpression() }
                .onDisappear { playing = false }
                .task(id: playing) {
                    guard playing, let skeleton = skeleton else { return }
                    let start = ProcessInfo.processInfo.systemUptime - Double(frame) / Double(skeleton.motion.fps)
                    do {
                        while !Task.isCancelled {
                            let sample = skeleton.motion.sample(at: ProcessInfo.processInfo.systemUptime - start)
                            frame = Int(sample)
                            try skeleton.apply(sample: sample, blink: blink, mouth: mouth, smile: smile)
                            if frame == skeleton.motion.frameCount - 1, skeleton.motion.loop != true { playing = false; break }
                            try await Task.sleep(nanoseconds: skeleton.usesGPUSkinning ? 16_666_667 : 33_333_333)
                        }
                    } catch is CancellationError { }
                    catch { playing = false; store.error = error.localizedDescription }
                }
                .task(id: autoBlink) {
                    guard autoBlink else { return }
                    do {
                        while !Task.isCancelled {
                            try await Task.sleep(nanoseconds: 3_000_000_000)
                            for value in [Float(0.35), 0.8, 1, 0.8, 0.35, 0] {
                                try Task.checkCancellation()
                                blink = value
                                try await Task.sleep(nanoseconds: 25_000_000)
                            }
                        }
                    } catch { blink = 0 }
                }
        }
    }

    private func loadCharacter(_ url: URL, remember: Bool = true) {
        guard !loading else { return }
        loading = true
        playing = false; autoBlink = false
        importStatus = "已收到文件：\(url.lastPathComponent)"
        Task {
            defer { loading = false }
            do {
                let loaded = try await Task.detached(priority: .userInitiated) {
                    try CharacterLoader.load(url: url, remember: remember)
                }.value
                scene = loaded.scene; skeleton = loaded.skeleton
                package = loaded.package; meshName = loaded.name
                frame = 0; blink = 0; mouth = 0; smile = 0
                importStatus = "导入完成：\(loaded.name)"
                if remember { UserDefaults.standard.set("native",forKey:"characterEngine") }
            } catch {
                importStatus = "导入失败：\(error.localizedDescription)"
                store.error = importStatus
            }
        }
    }

    private func updateExpression() {
        guard !loading, let package = package, let scene = scene else { return }
        do {
            if let skeleton = skeleton { try skeleton.apply(frame: frame, blink: blink, mouth: mouth, smile: smile) }
            else { try package.applyExpression(to: scene, blink: blink, mouth: mouth, smile: smile) }
        }
        catch { store.error = error.localizedDescription }
    }
}
