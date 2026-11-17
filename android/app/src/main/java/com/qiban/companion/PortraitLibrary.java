package com.qiban.companion;
import android.graphics.BitmapFactory;
import org.json.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.zip.*;

/** A data-only, atomic library for original 2D skeletons and custom artwork. */
final class PortraitLibrary {
    final File root;
    PortraitLibrary(File libraries){root=new File(libraries,"portraits");root.mkdirs();}
    private static boolean id(String s){return s.matches("[A-Za-z0-9_-]{1,80}");}
    static boolean dataPath(String s){return FilesSupport.safe(s)&&s.matches("[A-Za-z0-9_./-]+\\.(?:json|atlas|png|jpe?g|webp)");}
    JSONObject catalog()throws Exception{
        JSONArray models=new JSONArray(),scenes=new JSONArray();File[] folders=root.listFiles();if(folders!=null){Arrays.sort(folders,Comparator.comparing(File::getName));for(File f:folders){if(!id(f.getName()))continue;File file=new File(f,"stage.json");if(!file.isFile())continue;JSONObject m=FilesSupport.json(file,2*1024*1024);JSONArray list=m.getJSONArray("models");for(int i=0;i<list.length();i++){JSONObject row=FilesSupport.copy(list.getJSONObject(i));row.put("id",f.getName()+"/"+row.getString("id"));row.put("base","presentation-data/"+f.getName()+"/"+row.getString("directory")+"/");models.put(row);}list=m.optJSONArray("scenes");if(list!=null)for(int i=0;i<list.length();i++){JSONObject s=FilesSupport.copy(list.getJSONObject(i));s.put("id",f.getName()+"/"+s.getString("id")).put("path","presentation-data/"+f.getName()+"/"+s.getString("path"));scenes.put(s);}}}
        return new JSONObject().put("models",models).put("scenes",scenes);
    }
    JSONObject install(File input)throws Exception{
        if(input.length()>512L*1024*1024)throw new IOException("2D 素材包超过512MB。");File staging=new File(root,".stage-"+UUID.randomUUID());staging.mkdirs();
        try(ZipFile zip=new ZipFile(input)){
            ZipEntry meta=zip.getEntry("stage.json");if(meta==null||meta.getSize()>2*1024*1024)throw new IOException("2D 素材包缺少索引。");JSONObject m;
            try(InputStream in=zip.getInputStream(meta)){m=new JSONObject(new String(FilesSupport.read(in,2*1024*1024+1),StandardCharsets.UTF_8));}
            JSONObject files=m.getJSONObject("files");JSONArray models=m.getJSONArray("models");if(!m.optString("schema").equals("qiban-stage/1")||!id(m.optString("id"))||models.length()<1||models.length()>100||files.length()>1500)throw new IOException("2D 素材包索引无效。");
            Set<String> names=new HashSet<>();long total=0;Enumeration<? extends ZipEntry> entries=zip.entries();while(entries.hasMoreElements()){ZipEntry e=entries.nextElement();if(e.isDirectory())continue;if(!names.add(e.getName())||!FilesSupport.safe(e.getName())||e.getSize()<0||e.getSize()>20L*1024*1024)throw new IOException("2D 素材文件路径或大小无效。");total+=e.getSize();}
            if(names.size()!=files.length()+1||total>512L*1024*1024||root.getUsableSpace()<total+64L*1024*1024)throw new IOException("2D 素材大小或空间不足。");
            Set<String> ids=new HashSet<>();for(int i=0;i<models.length();i++){JSONObject c=models.getJSONObject(i);String dir=c.getString("directory");if(!id(c.getString("id"))||!ids.add(c.getString("id"))||c.getString("name").length()>80||!FilesSupport.safe(dir)||!c.getString("renderer").equals("spine-json"))throw new IOException("2D 角色记录无效。");for(String k:List.of("skeleton","atlas"))if(!files.has(dir+"/"+c.getString(k)))throw new IOException("2D 角色数据缺失。");JSONArray tex=c.getJSONArray("textures");if(tex.length()<1||tex.length()>8)throw new IOException("2D 图页数量无效。");for(int n=0;n<tex.length();n++)if(!files.has(dir+"/"+tex.getString(n)))throw new IOException("2D 图页缺失。");}
            JSONArray scenes=m.optJSONArray("scenes");if(scenes!=null){if(scenes.length()>100)throw new IOException("场景数量过多。");for(int i=0;i<scenes.length();i++)if(!files.has(scenes.getJSONObject(i).getString("path")))throw new IOException("场景图片缺失。");}
            Iterator<String> keys=files.keys();while(keys.hasNext()){String path=keys.next(),expected=files.getString(path);ZipEntry entry=zip.getEntry(path);if(!dataPath(path)||entry==null||!expected.matches("[a-f0-9]{64}"))throw new IOException("2D 素材只允许图片、骨骼 JSON 和图集数据。");File output=FilesSupport.child(staging,path);output.getParentFile().mkdirs();MessageDigest hash=MessageDigest.getInstance("SHA-256");CRC32 crc=new CRC32();long bytes=0;try(InputStream in=zip.getInputStream(entry);OutputStream out=new FileOutputStream(output)){byte[] b=new byte[65536];int n;while((n=in.read(b))!=-1){bytes+=n;if(bytes>entry.getSize())throw new IOException("2D 文件长度不符。");out.write(b,0,n);hash.update(b,0,n);crc.update(b,0,n);}}
                if(bytes!=entry.getSize()||crc.getValue()!=entry.getCrc()||!RoomEngine.hex(hash.digest()).equals(expected))throw new IOException("2D 文件校验失败。");
                if(path.matches(".+\\.(?:png|jpe?g|webp)")){BitmapFactory.Options b=new BitmapFactory.Options();b.inJustDecodeBounds=true;BitmapFactory.decodeFile(output.getPath(),b);if(b.outWidth<1||b.outHeight<1||b.outWidth>8192||b.outHeight>8192||(long)b.outWidth*b.outHeight>32L*1024*1024)throw new IOException("2D 图页尺寸无效。");}
            }
            FilesSupport.atomic(new File(staging,"stage.json"),m.toString());File target=new File(root,m.getString("id")),old=new File(root,".previous-"+UUID.randomUUID());boolean moved=target.exists();if(moved)Files.move(target.toPath(),old.toPath());try{Files.move(staging.toPath(),target.toPath());}catch(Exception e){if(moved)Files.move(old.toPath(),target.toPath());throw e;}if(old.exists())FilesSupport.deleteTree(old,root);
            return new JSONObject().put("type","portrait").put("title",m.optString("title","2D 素材")).put("models",models.length());
        }finally{if(staging.exists())FilesSupport.deleteTree(staging,root);}
    }
}
