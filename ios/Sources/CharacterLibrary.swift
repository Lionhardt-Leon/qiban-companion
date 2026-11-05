import Foundation

/// Private local storage, separate from shared Documents and from conversation data.
struct CharacterLibrary {
    let directory: URL
    init(directory: URL? = nil) {
        self.directory = directory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace+"/CharacterLibrary", isDirectory: true)
    }
    var currentURL: URL { directory.appendingPathComponent("current-character.json") }
    var hasCurrent: Bool { FileManager.default.fileExists(atPath: currentURL.path) }

    func rememberValidatedData(_ data: Data) throws {
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        // Only called after complete decoding and scene validation. Atomic replacement
        // leaves the previous usable character in place if a new import fails.
        try data.write(to: currentURL, options: [.atomic, .completeFileProtection])
    }
}
