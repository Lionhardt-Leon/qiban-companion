package com.qiban.companion;
import android.content.Context;
import android.content.SharedPreferences;
import android.security.keystore.*;
import android.util.Base64;
import java.nio.charset.StandardCharsets;
import java.security.KeyStore;
import java.util.*;
import javax.crypto.*;
import javax.crypto.spec.GCMParameterSpec;
import org.json.*;

/** Device-bound AES/GCM. Keys and provider credentials never enter a backup. */
final class SecretVault {
    private final SharedPreferences prefs;private final javax.crypto.SecretKey key;
    SecretVault(Context c)throws Exception {prefs=c.getSharedPreferences("private-vault",0);KeyStore ks=KeyStore.getInstance("AndroidKeyStore");ks.load(null);if(!ks.containsAlias("qiban-secrets")){KeyGenerator g=KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES,"AndroidKeyStore");g.init(new KeyGenParameterSpec.Builder("qiban-secrets",KeyProperties.PURPOSE_ENCRYPT|KeyProperties.PURPOSE_DECRYPT).setBlockModes(KeyProperties.BLOCK_MODE_GCM).setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE).setRandomizedEncryptionRequired(true).build());g.generateKey();}key=(javax.crypto.SecretKey)ks.getKey("qiban-secrets",null);}
    synchronized void put(String identity,String value)throws Exception {if(value.isEmpty()){prefs.edit().remove(identity).commit();return;}Cipher c=Cipher.getInstance("AES/GCM/NoPadding");c.init(Cipher.ENCRYPT_MODE,key);String record=Base64.encodeToString(c.getIV(),Base64.NO_WRAP)+":"+Base64.encodeToString(c.doFinal(value.getBytes(StandardCharsets.UTF_8)),Base64.NO_WRAP);if(!prefs.edit().putString(identity,record).commit())throw new java.io.IOException("密钥保存失败。");}
    synchronized String get(String identity)throws Exception {String record=prefs.getString(identity,"");if(record.isEmpty())return "";String[] p=record.split(":",2);Cipher c=Cipher.getInstance("AES/GCM/NoPadding");c.init(Cipher.DECRYPT_MODE,key,new GCMParameterSpec(128,Base64.decode(p[0],Base64.NO_WRAP)));return new String(c.doFinal(Base64.decode(p[1],Base64.NO_WRAP)),StandardCharsets.UTF_8);}
    private static final Set<String> SENSITIVE=Set.of("apikey","api_key","api-key","x-api-key","password","authorization","webdavpassword");
    // Keys used by the shipped Fritia module, followed by older mobile aliases.
    private static final Set<String> SETTING_KEYS = Set.of(
            "fritia-settings", "fritia_archive_sync", "fritia_mcp_tool_config",
            "fritia_settings", "fritia_archive_config", "fritia_mcp_config", "fritia_tool_config");
    interface Settings { String apply(String key,String value)throws Exception; }
    interface WriteSecret { void put(String identity,String value)throws Exception; }

    String setting(String key,String value)throws Exception {
        return setting(key,value,this::put);
    }

    static String setting(String key,String value,WriteSecret write)throws Exception {
        if(value==null||value.isEmpty()||!SETTING_KEYS.contains(key))return value;
        JSONTokener json=new JSONTokener(value);
        Object settings=json.nextValue();
        if(!(settings instanceof JSONObject || settings instanceof JSONArray)||json.nextClean()!=0)
            throw new java.io.IOException("通讯设置格式无效，原配置已保留。");
        return protect(settings,"",write,false).toString();
    }

    private static Object protect(Object value, String owner, WriteSecret write, boolean headers) throws Exception {
        if (value instanceof JSONArray) {
            JSONArray input=(JSONArray)value, out=new JSONArray();
            for (int i=0;i<input.length();i++) out.put(protect(input.get(i),owner,write,false));
            return out;
        }
        if (!(value instanceof JSONObject)) return value;
        JSONObject input=(JSONObject)value,out=new JSONObject();
        String base=headers ? owner : input.optString("baseUrl",input.optString("url",input.optString("serverUrl",owner)));
        for (Iterator<String> keys=input.keys();keys.hasNext();) {
            String key=keys.next();
            Object item=input.get(key);
            if ((headers || SENSITIVE.contains(key.toLowerCase(Locale.ROOT))) && item instanceof String) {
                String secret=(String)item;
                if (!secret.isEmpty() && !secret.startsWith("qiban-vault:")) {
                    java.net.URI endpoint=java.net.URI.create(base);
                    if (endpoint.getHost()==null || !("https".equalsIgnoreCase(endpoint.getScheme()) || "http".equalsIgnoreCase(endpoint.getScheme())))
                        throw new java.io.IOException("保存接口凭据需要有效的服务地址。");
                    if (!("qiban-app-managed".equals(secret) && "qiban.app".equalsIgnoreCase(endpoint.getHost()))) {
                        String reference=RoomEngine.hex(java.security.MessageDigest.getInstance("SHA-256")
                                .digest((base+"\n"+secret).getBytes(StandardCharsets.UTF_8)));
                        write.put("ref:"+reference,new JSONObject().put("base",base).put("value",secret).toString());
                        item="qiban-vault:"+reference;
                    }
                }
            } else if (item instanceof String && ((String)item).trim().startsWith("{")) {
                JSONObject nested;
                try { nested=new JSONObject((String)item); }
                catch(JSONException error) {
                    if ("configJson".equals(key)) throw new java.io.IOException("通讯工具配置格式无效。");
                    out.put(key,item);
                    continue;
                }
                item=protect(nested,base,write,false).toString();
            } else {
                item=protect(item,base,write,"headers".equalsIgnoreCase(key));
            }
            out.put(key,item);
        }
        return out;
    }
    String resolve(String value,String target)throws Exception {if(!value.startsWith("qiban-vault:"))return value;String raw=get("ref:"+value.substring(12));if(raw.isEmpty())throw new java.io.IOException("该接口密钥不在本设备，请重新填写。");JSONObject record=new JSONObject(raw);String base=record.getString("base").replaceAll("/+$","");if(!target.equals(base)&&!target.startsWith(base+"/")&&!target.startsWith(base+"?"))throw new java.io.IOException("密钥与目标地址不匹配，请重新填写该地址的密钥。");return record.getString("value");}
    String header(String value,String target)throws Exception {if(value.startsWith("Bearer qiban-vault:"))return "Bearer "+resolve(value.substring(7),target);if(value.startsWith("Basic ")){String decoded=new String(Base64.decode(value.substring(6),Base64.DEFAULT),StandardCharsets.UTF_8);int split=decoded.indexOf(':');if(split>=0&&decoded.substring(split+1).startsWith("qiban-vault:"))return "Basic "+Base64.encodeToString((decoded.substring(0,split+1)+resolve(decoded.substring(split+1),target)).getBytes(StandardCharsets.UTF_8),Base64.NO_WRAP);}return resolve(value,target);}
}
