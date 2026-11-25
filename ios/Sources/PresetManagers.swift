import Foundation
import Security

// MARK: - API Configuration Preset Manager (Secrets stored in iOS Keychain, never plaintext)

struct APIPreset: Codable, Identifiable, Equatable {
    var id = UUID()
    var name: String
    var endpoint: String
    var model: String
    var temperature: Double = 0.7
    var updatedAt = Date()
}

enum APIPresetStore {
    private static var fileURL: URL {
        FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace, isDirectory: true)
            .appendingPathComponent("api-presets-v1.json")
    }

    static func load() -> [APIPreset] {
        guard let data = try? Data(contentsOf: fileURL),
              let list = try? JSONDecoder().decode([APIPreset].self, from: data) else {
            return []
        }
        return list.sorted { $0.updatedAt > $1.updatedAt }
    }

    static func save(_ presets: [APIPreset]) throws {
        let dir = fileURL.deletingLastPathComponent()
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let data = try JSONEncoder().encode(presets)
        try data.write(to: fileURL, options: [.atomic, .completeFileProtection])
    }

    @discardableResult
    static func upsert(id: UUID? = nil, name: String, endpoint: String, model: String, temperature: Double, apiKey: String) throws -> [APIPreset] {
        let trimmedName = name.trimmingCharacters(in: .whitespacesAndNewlines)
        let trimmedEndpoint = endpoint.trimmingCharacters(in: .whitespacesAndNewlines)
        let trimmedModel = model.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedName.isEmpty, trimmedName.count <= 80 else {
            throw CompanionError.message("请输入 1～80 字的 API 配置名称。")
        }
        _ = try APIClient.endpoint(trimmedEndpoint)
        guard !trimmedModel.isEmpty else {
            throw CompanionError.message("请先填写模型名称再保存预设。")
        }
        var list = load()
        let presetID = id ?? UUID()
        let record = APIPreset(
            id: presetID,
            name: trimmedName,
            endpoint: trimmedEndpoint,
            model: trimmedModel,
            temperature: min(max(temperature, 0), 2),
            updatedAt: Date()
        )
        try APIKeyStore.writePresetKey(apiKey, id: presetID)
        if let idx = list.firstIndex(where: { $0.id == presetID }) {
            list[idx] = record
        } else {
            guard list.count < 60 else { throw CompanionError.message("最多保存 60 套 API 配置。") }
            list.insert(record, at: 0)
        }
        try save(list)
        return list.sorted { $0.updatedAt > $1.updatedAt }
    }

    @discardableResult
    static func delete(id: UUID) throws -> [APIPreset] {
        var list = load()
        list.removeAll { $0.id == id }
        try? APIKeyStore.deletePresetKey(id: id)
        try save(list)
        return list
    }

    static func readKey(id: UUID) throws -> String {
        try APIKeyStore.readPresetKey(id: id)
    }
}

// MARK: - System Rule / Prompt Preset Manager

struct SystemRulePreset: Codable, Identifiable, Equatable {
    var id = UUID()
    var name: String
    var content: String
    var updatedAt = Date()
}

enum SystemRulePresetStore {
    private static var fileURL: URL {
        FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace, isDirectory: true)
            .appendingPathComponent("system-rule-presets-v1.json")
    }

    static func load() -> [SystemRulePreset] {
        guard let data = try? Data(contentsOf: fileURL),
              let list = try? JSONDecoder().decode([SystemRulePreset].self, from: data) else {
            return []
        }
        return list.sorted { $0.updatedAt > $1.updatedAt }
    }

    static func save(_ presets: [SystemRulePreset]) throws {
        let dir = fileURL.deletingLastPathComponent()
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let data = try JSONEncoder().encode(presets)
        try data.write(to: fileURL, options: [.atomic, .completeFileProtection])
    }

    @discardableResult
    static func upsert(id: UUID? = nil, name: String, content: String) throws -> [SystemRulePreset] {
        let trimmedName = name.trimmingCharacters(in: .whitespacesAndNewlines)
        let trimmedContent = content.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedName.isEmpty, trimmedName.count <= 80 else {
            throw CompanionError.message("请输入 1～80 字的系统规则名称。")
        }
        guard !trimmedContent.isEmpty, trimmedContent.count <= PersonaLimits.fieldCharacters else {
            throw CompanionError.message("系统规则正文不能为空或超过 100 万字。")
        }
        var list = load()
        let presetID = id ?? UUID()
        let record = SystemRulePreset(id: presetID, name: trimmedName, content: trimmedContent, updatedAt: Date())
        if let idx = list.firstIndex(where: { $0.id == presetID }) {
            list[idx] = record
        } else {
            guard list.count < 80 else { throw CompanionError.message("最多保存 80 套系统规则预设。") }
            list.insert(record, at: 0)
        }
        try save(list)
        return list.sorted { $0.updatedAt > $1.updatedAt }
    }

    @discardableResult
    static func delete(id: UUID) throws -> [SystemRulePreset] {
        var list = load()
        list.removeAll { $0.id == id }
        try save(list)
        return list
    }
}
