import Foundation

enum AppIdentity {
    static var storageNamespace:String { Bundle.main.object(forInfoDictionaryKey:"StorageNamespace") as? String ?? "QibanCompanion" }
    static var keychainService:String { Bundle.main.object(forInfoDictionaryKey:"KeychainService") as? String ?? "com.local.qibancompanion.api" }
}
