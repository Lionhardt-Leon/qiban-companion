package com.qiban.companion;
import android.content.Context;
import android.webkit.WebResourceResponse;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.net.URLConnection;
import java.util.*;

final class LocalOrigin {
    final Context context;final PackLibrary packs;
    LocalOrigin(Context c,PackLibrary p){context=c;packs=p;}
    WebResourceResponse open(String surface,String raw)throws Exception {
        String path=raw.startsWith("/")?raw.substring(1):raw;if(path.isEmpty())path="index.html";if(!FilesSupport.safe(path))return error(403,"路径无效");
        InputStream input;String filename=path;
        if(path.equals("android-bridge.js"))input=context.getAssets().open("mobile/android-bridge.js");
        else if(path.startsWith("presentation-data/")){File f=FilesSupport.child(new PortraitLibrary(packs.root).root,path.substring(18));if(!PortraitLibrary.dataPath(path.substring(18)))return error(403,"2D 路径无效");input=new FileInputStream(f);}
        else if(path.startsWith("presentation/")){input=context.getAssets().open("stage2d/"+path.substring(13));}
        else if(surface.equals("chat")){if(!packs.hasChat())return error(409,"请导入随本版 App 提供的通讯 .qchat 模块。");File f=FilesSupport.child(new File(packs.chat,"site"),path);if(!f.isFile())return error(404,"资源不存在："+path);input=new FileInputStream(f);}
        else if(surface.equals("game")){if(path.startsWith("tycoon/art/")){File f=FilesSupport.child(packs.art,path.substring(11));input=new FileInputStream(f);}else input=context.getAssets().open(path.startsWith("tycoon/")?path:"tycoon/"+path);}
        else if(path.startsWith("package/")){String name=path.substring(8);if(!name.equals("generic.json")&&!name.matches("staged-[a-f0-9-]+\\.json")&&!name.matches("(?:Enya|Fenny|staged-[a-f0-9-]+)\\.snowbreak"))return error(403,"模型路径无效");input=new FileInputStream(FilesSupport.child(packs.models,name));}
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
