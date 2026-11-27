package com.qiban.companion;
import android.content.Context;
import android.webkit.WebResourceResponse;
import org.json.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.net.URLConnection;
import java.util.*;
import java.util.zip.*;

final class LocalOrigin {
    private static final long MAX_DECODED_BYTES = 1536L * 1024 * 1024;
    final Context context;final PackLibrary packs;
    private final Object zipLock = new Object();
    private String cachedPath = "";
    private long cachedMtime = -1, cachedSize = -1;
    private ZipFile cachedZip;

    LocalOrigin(Context c,PackLibrary p){context=c;packs=p;}

    void clearCache() {
        synchronized (zipLock) {
            if (cachedZip != null) { try { cachedZip.close(); } catch (Exception ignored) {} cachedZip = null; }
            cachedPath = ""; cachedMtime = -1; cachedSize = -1;
        }
    }

    private static boolean validSnowbreakName(String name) {
        if (name == null || !name.endsWith(".snowbreak")) return false;
        String base = name.substring(0, name.length() - 10);
        return PackLibrary.SUPPORTED_CHARACTERS.contains(base) || base.matches("staged-[a-f0-9-]+");
    }

    private ZipFile openArchive(String name) throws IOException {
        if (!validSnowbreakName(name)) throw new IOException("模型路径无效");
        File file = FilesSupport.child(packs.models, name);
        if (!file.isFile()) throw new FileNotFoundException(name);
        long size = file.length(), mtime = file.lastModified();
        if (size < 22 || size > PackLibrary.MAX_SNOWBREAK_BYTES) throw new IOException("角色包超过大小上限");
        synchronized (zipLock) {
            if (cachedZip != null && cachedPath.equals(file.getPath()) && cachedSize == size && cachedMtime == mtime) {
                return cachedZip;
            }
            if (cachedZip != null) { try { cachedZip.close(); } catch (Exception ignored) {} cachedZip = null; }
            cachedZip = new ZipFile(file);
            cachedPath = file.getPath(); cachedSize = size; cachedMtime = mtime;
            return cachedZip;
        }
    }

    private WebResourceResponse streamIndex(String name) throws Exception {
        byte[] payload;
        synchronized (zipLock) {
            ZipFile zip = openArchive(name);
            JSONArray names = new JSONArray();
            long total = 0;
            Enumeration<? extends ZipEntry> rows = zip.entries();
            while (rows.hasMoreElements()) {
                ZipEntry e = rows.nextElement();
                if (e.isDirectory()) continue;
                String en = e.getName();
                if (!en.equals("manifest.json") && !en.matches("assets/[a-f0-9]{64}")) throw new IOException("包内路径非法");
                names.put(en);
                long sz = Math.max(0, e.getSize());
                total += sz;
                if (total > MAX_DECODED_BYTES) throw new IOException("解压总大小超限");
            }
            ZipEntry me = zip.getEntry("manifest.json");
            if (me == null) throw new FileNotFoundException("manifest.json");
            byte[] mBytes;
            try (InputStream in = zip.getInputStream(me)) { mBytes = FilesSupportBytes.read(in, 8 * 1024 * 1024); }
            JSONObject manifest = new JSONObject(new String(mBytes, StandardCharsets.UTF_8));
            JSONObject out = new JSONObject().put("names", names).put("total", total).put("manifest", manifest);
            payload = out.toString().getBytes(StandardCharsets.UTF_8);
        }
        Map<String,String> headers = new HashMap<>();
        headers.put("Cache-Control", "no-store");
        headers.put("X-Content-Type-Options", "nosniff");
        headers.put("Referrer-Policy", "no-referrer");
        return new WebResourceResponse("application/json", "utf-8", 200, "OK", headers, new ByteArrayInputStream(payload));
    }

    private WebResourceResponse streamEntry(String name, String assetId) throws Exception {
        if (!assetId.matches("[a-f0-9]{64}")) return error(403, "资产标识无效");
        byte[] data;
        synchronized (zipLock) {
            ZipFile zip = openArchive(name);
            ZipEntry entry = zip.getEntry("assets/" + assetId);
            if (entry == null) return error(404, "资产不存在");
            long maxLen = 128L * 1024 * 1024;
            if (entry.getSize() > maxLen) throw new IOException("单个资产超过上限");
            try (InputStream in = zip.getInputStream(entry)) {
                data = FilesSupportBytes.read(in, (int) Math.min(maxLen, Math.max(65536, entry.getSize() + 1024)));
            }
        }
        Map<String,String> headers = new HashMap<>();
        headers.put("Cache-Control", "no-store");
        headers.put("X-Content-Type-Options", "nosniff");
        headers.put("Referrer-Policy", "no-referrer");
        return new WebResourceResponse("application/octet-stream", "utf-8", 200, "OK", headers, new ByteArrayInputStream(data));
    }

    WebResourceResponse open(String surface,String raw)throws Exception {
        String path=raw.startsWith("/")?raw.substring(1):raw;if(path.isEmpty())path="index.html";if(!FilesSupport.safe(path))return error(403,"路径无效");
        if(path.startsWith("pkg-index/"))return streamIndex(path.substring(10));
        if(path.startsWith("pkg-entry/")){
            String rest=path.substring(10);int slash=rest.indexOf('/');
            if(slash<=0||slash>=rest.length()-1)return error(403,"资产路径无效");
            return streamEntry(rest.substring(0,slash),rest.substring(slash+1));
        }
        InputStream input;String filename=path;
        if(path.equals("android-bridge.js"))input=context.getAssets().open("mobile/android-bridge.js");
        else if(path.startsWith("presentation-data/")){File f=FilesSupport.child(new PortraitLibrary(packs.root).root,path.substring(18));if(!PortraitLibrary.dataPath(path.substring(18)))return error(403,"2D 路径无效");input=new FileInputStream(f);}
        else if(path.startsWith("presentation/")){input=context.getAssets().open("stage2d/"+path.substring(13));}
        else if(surface.equals("chat")){if(!packs.hasChat())return error(409,"请导入随本版 App 提供的通讯 .qchat 模块。");File f=FilesSupport.child(new File(packs.chat,"site"),path);if(!f.isFile())return error(404,"资源不存在："+path);input=new FileInputStream(f);}
        else if(surface.equals("game")){if(path.startsWith("tycoon/art/")){File f=FilesSupport.child(packs.art,path.substring(11));input=new FileInputStream(f);}else input=context.getAssets().open(path.startsWith("tycoon/")?path:"tycoon/"+path);}
        else if(path.startsWith("package/")){String name=path.substring(8);if(!name.equals("generic.json")&&!name.matches("staged-[a-f0-9-]+\\.json")&&!validSnowbreakName(name))return error(403,"模型路径无效");input=new FileInputStream(FilesSupport.child(packs.models,name));}
        else if(path.startsWith("stage/")){input=context.getAssets().open(path.substring(6));}
        else input=context.getAssets().open("mobile/"+path);
        String mime=filename.endsWith(".mjs")||filename.endsWith(".js")?"application/javascript":filename.endsWith(".html")?"text/html":filename.endsWith(".css")?"text/css":filename.endsWith(".json")?"application/json":filename.endsWith(".svg")?"image/svg+xml":filename.endsWith(".m4a")?"audio/mp4":filename.endsWith(".snowbreak")?"application/octet-stream":URLConnection.guessContentTypeFromName(filename);if(mime==null)mime="application/octet-stream";
        if(mime.equals("text/html")){try(InputStream htmlInput=input){String html=new String(FilesSupportBytes.read(htmlInput,3*1024*1024),StandardCharsets.UTF_8);String stageStyle=surface.equals("home")&&path.startsWith("stage/")?"<style>:root{color-scheme:dark}</style>":"";html=html.replace("<head>","<head>"+stageStyle+"<script src=\"/android-bridge.js\"></script>");html=html.replace("companion-snowbreak:","https:");input=new ByteArrayInputStream(html.getBytes(StandardCharsets.UTF_8));}}
        Map<String,String> headers=new HashMap<>();headers.put("Cache-Control","no-store");headers.put("X-Content-Type-Options","nosniff");headers.put("Referrer-Policy","no-referrer");return new WebResourceResponse(mime,"utf-8",200,"OK",headers,input);
    }
    static WebResourceResponse error(int code,String message){return new WebResourceResponse("text/plain","utf-8",code,"Unavailable",Map.of("Cache-Control","no-store"),new ByteArrayInputStream(message.getBytes(StandardCharsets.UTF_8)));}
}
final class FilesSupportBytes {
    static byte[] read(InputStream in,int max)throws IOException {ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] b=new byte[Math.min(65536,max)];int n;while(out.size()<max&&(n=in.read(b,0,Math.min(b.length,max-out.size())))!=-1)out.write(b,0,n);return out.toByteArray();}
}
