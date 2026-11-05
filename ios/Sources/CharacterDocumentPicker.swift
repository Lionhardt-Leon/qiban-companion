import SwiftUI
import UIKit
import UniformTypeIdentifiers

struct CharacterDocumentPicker: UIViewControllerRepresentable {
    let completion: (Result<URL?, Error>) -> Void
    func makeCoordinator() -> Coordinator { Coordinator(completion: completion) }
    func makeUIViewController(context: Context) -> UIDocumentPickerViewController {
        // Concrete file categories and copy mode avoid relying on an external in-place grant.
        let picker = UIDocumentPickerViewController(forOpeningContentTypes: [.data, .content, .json, .plainText], asCopy: true)
        picker.delegate = context.coordinator
        picker.allowsMultipleSelection = false
        picker.shouldShowFileExtensions = true
        return picker
    }
    func updateUIViewController(_ controller: UIDocumentPickerViewController, context: Context) {}
    final class Coordinator: NSObject, UIDocumentPickerDelegate {
        let completion: (Result<URL?, Error>) -> Void
        init(completion: @escaping (Result<URL?, Error>) -> Void) { self.completion = completion }
        func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
            guard let url = urls.first else {
                completion(.failure(CompanionError.message("系统没有返回选中的文件。")))
                return
            }
            completion(.success(url))
        }
        func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
            completion(.success(nil))
        }
    }
}

enum LocalCharacterFiles {
    static func directory() throws -> URL {
        let root = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("角色包", isDirectory: true)
        try FileManager.default.createDirectory(at: root, withIntermediateDirectories: true)
        return root
    }
    static func list() throws -> [URL] {
        try FileManager.default.contentsOfDirectory(at: directory(), includingPropertiesForKeys: [.isRegularFileKey], options: [.skipsHiddenFiles])
            .filter { (try? $0.resourceValues(forKeys: [.isRegularFileKey]).isRegularFile) == true }
            .sorted { $0.lastPathComponent.localizedStandardCompare($1.lastPathComponent) == .orderedAscending }
    }
}

struct LocalCharacterFileList: View {
    let choose: (URL) -> Void
    @Environment(\.dismiss) private var dismiss
    @State private var files: [URL] = []
    @State private var error: String?
    var body: some View {
        NavigationStack {
            List {
                Section {
                    Text("先在 iOS“文件”App，把角色 JSON 或 .snowbreak 包复制到“我的 iPhone → 陪伴 → 角色包”，然后点刷新。")
                        .font(.footnote)
                    Button("刷新文件列表") { refresh() }
                    if let error = error { Text(error).foregroundStyle(.red) }
                }
                Section("本机角色文件（\(files.count)）") {
                    if files.isEmpty { Text("此文件夹里还没有文件。") }
                    ForEach(files, id: \.self) { url in
                        Button(url.lastPathComponent) { dismiss(); choose(url) }
                    }
                }
            }.navigationTitle("App 文件夹")
                .toolbar { Button("关闭") { dismiss() } }
                .onAppear { refresh() }
        }
    }
    private func refresh() {
        do { files = try LocalCharacterFiles.list(); error = nil }
        catch { self.error = error.localizedDescription }
    }
}
