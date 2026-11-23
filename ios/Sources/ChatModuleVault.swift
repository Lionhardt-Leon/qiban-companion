import Foundation
import Security
import CryptoKit

enum ChatModuleVault {
    private struct Secret:Codable {let base:String;let value:String}
    private static let prefix="qiban-vault:"
    private static func query(_ id:String)->[String:Any] {
        [kSecClass as String:kSecClassGenericPassword,kSecAttrService as String:AppIdentity.keychainService,kSecAttrAccount as String:"chat-module-"+id]
    }
    private static func token(_ value:String,base:String) throws -> String {
        guard !value.isEmpty,!value.hasPrefix(prefix) else{return value}
        guard let endpoint=URLComponents(string:base), let host=endpoint.host, !host.isEmpty,
              ["http","https"].contains(endpoint.scheme?.lowercased() ?? "") else {
            throw CompanionError.message("保存通讯凭据需要有效的服务地址。")
        }
        if host=="qiban.app", value=="qiban-app-managed" {return value}
        let id=SHA256.hash(data:Data((base+"\n"+value).utf8)).map{String(format:"%02x",$0)}.joined()
        let data=try JSONEncoder().encode(Secret(base:base,value:value)),attributes:[String:Any]=[kSecValueData as String:data,kSecAttrAccessible as String:kSecAttrAccessibleWhenUnlockedThisDeviceOnly]
        let q=query(id),updated=SecItemUpdate(q as CFDictionary,attributes as CFDictionary)
        let status=updated==errSecItemNotFound ? SecItemAdd(q.merging(attributes){_,new in new} as CFDictionary,nil):updated
        guard status==errSecSuccess else{throw CompanionError.message("通讯密钥无法写入钥匙串。")}
        return prefix+id
    }
    static func protect(_ value:String,key:String) throws -> String {
        guard !value.isEmpty, ["fritia-settings","fritia_archive_sync","fritia_mcp_tool_config","fritia_settings","fritia_archive_config","fritia_mcp_config","fritia_tool_config"].contains(key) else{return value}
        let object=try JSONSerialization.jsonObject(with:Data(value.utf8))
        func walk(_ object:Any,base:String,headers:Bool=false) throws -> Any {
            if let list=object as? [Any] {return try list.map{try walk($0,base:base)}}
            guard var fields=object as? [String:Any] else{return object}
            let current=headers ? base : ((fields["baseUrl"] ?? fields["url"] ?? fields["serverUrl"]) as? String ?? base)
            for (name,item) in fields {
                if (headers || ["apikey","api_key","password","webdavpassword","authorization","api-key","x-api-key"].contains(name.lowercased())),let secret=item as? String {
                    fields[name]=try token(secret,base:current)
                }else if let text=item as? String,text.trimmingCharacters(in:.whitespacesAndNewlines).hasPrefix("{"),let embedded=try? JSONSerialization.jsonObject(with:Data(text.utf8)) {
                    fields[name]=String(decoding:try JSONSerialization.data(withJSONObject:walk(embedded,base:current),options:[.sortedKeys]),as:UTF8.self)
                }else if name=="configJson",let text=item as? String,text.trimmingCharacters(in:.whitespacesAndNewlines).hasPrefix("{") {
                    throw CompanionError.message("通讯工具配置格式无效。")
                }else{fields[name]=try walk(item,base:current,headers:name.lowercased()=="headers")}
            }
            return fields
        }
        return String(decoding:try JSONSerialization.data(withJSONObject:walk(object,base:""),options:[.sortedKeys]),as:UTF8.self)
    }
    private static func resolve(_ token:String,url:URL) throws -> String {
        guard token.hasPrefix(prefix) else{return token}
        let id=String(token.dropFirst(prefix.count));guard id.count==64 else{throw CompanionError.message("通讯密钥引用无效。")}
        var q=query(id);q[kSecReturnData as String]=true;q[kSecMatchLimit as String]=kSecMatchLimitOne
        var item:CFTypeRef?;let result=SecItemCopyMatching(q as CFDictionary,&item)
        guard result==errSecSuccess,let data=item as? Data,let secret=try? JSONDecoder().decode(Secret.self,from:data) else{throw CompanionError.message("该通讯接口密钥不在本设备，请在提供商或工具设置中重新填写。")}
        let base=secret.base.trimmingCharacters(in:CharacterSet(charactersIn:"/"))
        guard url.absoluteString==base || url.absoluteString.hasPrefix(base+"/") || url.absoluteString.hasPrefix(base+"?") else{throw CompanionError.message("通讯密钥与目标地址不匹配，请重新填写此地址的密钥。")}
        return secret.value
    }
    static func headers(_ input:[String:String],url:URL) throws -> [String:String] {
        var result=input
        for (name,value) in input {
            if value.hasPrefix(prefix) {result[name]=try resolve(value,url:url)}
            else if value.hasPrefix("Bearer "+prefix) {result[name]="Bearer "+(try resolve(String(value.dropFirst(7)),url:url))}
            else if value.hasPrefix("Basic "),let bytes=Data(base64Encoded:String(value.dropFirst(6))),let pair=String(data:bytes,encoding:.utf8),let split=pair.firstIndex(of:":") {
                let user=String(pair[..<split]),password=String(pair[pair.index(after:split)...])
                if password.hasPrefix(prefix){result[name]="Basic "+Data((user+":"+(try resolve(password,url:url))).utf8).base64EncodedString()}
            }
        }
        return result
    }
}
