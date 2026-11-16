package com.qiban.companion;
import java.io.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import org.json.*;

final class FilesSupport {
    static byte[] read(InputStream in,int max)throws IOException {ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] b=new byte[Math.min(65536,max)];int n;while(out.size()<max&&(n=in.read(b,0,Math.min(b.length,max-out.size())))!=-1)out.write(b,0,n);return out.toByteArray();}
    static void atomic(File file,byte[] data)throws Exception {file.getParentFile().mkdirs();File temp=new File(file.getParentFile(),"."+file.getName()+".tmp");try(FileOutputStream out=new FileOutputStream(temp)){out.write(data);out.getFD().sync();}try{Files.move(temp.toPath(),file.toPath(),StandardCopyOption.ATOMIC_MOVE,StandardCopyOption.REPLACE_EXISTING);}catch(AtomicMoveNotSupportedException e){Files.move(temp.toPath(),file.toPath(),StandardCopyOption.REPLACE_EXISTING);}}
    static void atomic(File file,String data)throws Exception{atomic(file,data.getBytes(StandardCharsets.UTF_8));}
    static String text(File file,int max)throws Exception{if(file.length()>max)throw new IOException("文件超过允许大小。");try(InputStream in=new FileInputStream(file)){return new String(FilesSupport.read(in,max+1),StandardCharsets.UTF_8);}}
    static JSONObject json(File file,int max)throws Exception{return new JSONObject(text(file,max));}
    static boolean safe(String path){return path.length()>0&&path.length()<240&&!path.startsWith("/")&&!path.contains("\\")&&!path.contains(":")&&java.util.Arrays.stream(path.split("/",-1)).noneMatch(p->p.equals("..")||p.equals(".")||p.isEmpty());}
    static File child(File root,String path)throws Exception{if(!safe(path))throw new IOException("文件路径无效。");File f=new File(root,path).getCanonicalFile();if(!f.toPath().startsWith(root.getCanonicalFile().toPath()))throw new IOException("文件越界。");return f;}
    static String sha(File file)throws Exception {MessageDigest d=MessageDigest.getInstance("SHA-256");try(InputStream in=new FileInputStream(file)){byte[] b=new byte[65536];int n;while((n=in.read(b))!=-1)d.update(b,0,n);}return RoomEngine.hex(d.digest());}
    static void deleteTree(File path,File boundary)throws Exception {File real=path.getCanonicalFile(),base=boundary.getCanonicalFile();if(!real.toPath().startsWith(base.toPath())||real.equals(base))throw new IOException("删除路径越界。");File[] list=real.listFiles();if(list!=null)for(File f:list)deleteTree(f,base);if(real.exists()&&!real.delete())throw new IOException("无法移除临时文件。");}
    static JSONObject copy(JSONObject j)throws JSONException{return new JSONObject(j.toString());}
    // Android's optString converts JSONObject.NULL to the literal "null".
    static String string(JSONObject j,String key){return j.isNull(key)?"":j.optString(key,"");}
    static JSONObject object(JSONObject p,String k)throws JSONException{JSONObject v=p.optJSONObject(k);if(v==null){v=new JSONObject();p.put(k,v);}return v;}
    static JSONArray array(JSONObject p,String k)throws JSONException{JSONArray v=p.optJSONArray(k);if(v==null){v=new JSONArray();p.put(k,v);}return v;}
}
