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
    Object protect(Object value,String owner)throws Exception {
        if(value instanceof JSONObject){JSONObject input=(JSONObject)value,out=new JSONObject();String base=input.optString("baseUrl",input.optString("url",input.optString("serverUrl",owner)));Iterator<String> keys=input.keys();while(keys.hasNext()){String k=keys.next();Object v=input.get(k);
            if(SENSITIVE.contains(k.toLowerCase(Locale.ROOT))&&v instanceof String&&!((String)v).isEmpty()&&!((String)v).startsWith("qiban-vault:")&&base.startsWith("http")&&!"qiban.app".equals(java.net.URI.create(base).getHost())){String ref=RoomEngine.hex(java.security.MessageDigest.getInstance("SHA-256").digest((base+"\n"+v).getBytes(StandardCharsets.UTF_8)));put("ref:"+ref,new JSONObject().put("base",base).put("value",v).toString());out.put(k,"qiban-vault:"+ref);}else if(v instanceof String&&((String)v).trim().startsWith("{")){try{out.put(k,protect(new JSONObject((String)v),base).toString());}catch(JSONException e){out.put(k,v);}}else out.put(k,protect(v,base));}return out;}
        if(value instanceof JSONArray){JSONArray a=(JSONArray)value,out=new JSONArray();for(int i=0;i<a.length();i++)out.put(protect(a.get(i),owner));return out;}return value;
    }
    String resolve(String value,String target)throws Exception {if(!value.startsWith("qiban-vault:"))return value;String raw=get("ref:"+value.substring(12));if(raw.isEmpty())throw new java.io.IOException("该接口密钥不在本设备，请重新填写。");JSONObject record=new JSONObject(raw);String base=record.getString("base").replaceAll("/+$","");if(!target.equals(base)&&!target.startsWith(base+"/")&&!target.startsWith(base+"?"))throw new java.io.IOException("密钥与目标地址不匹配，请重新填写该地址的密钥。");return record.getString("value");}
    String header(String value,String target)throws Exception {if(value.startsWith("Bearer qiban-vault:"))return "Bearer "+resolve(value.substring(7),target);if(value.startsWith("Basic ")){String decoded=new String(Base64.decode(value.substring(6),Base64.DEFAULT),StandardCharsets.UTF_8);int split=decoded.indexOf(':');if(split>=0&&decoded.substring(split+1).startsWith("qiban-vault:"))return "Basic "+Base64.encodeToString((decoded.substring(0,split+1)+resolve(decoded.substring(split+1),target)).getBytes(StandardCharsets.UTF_8),Base64.NO_WRAP);}return resolve(value,target);}
}
