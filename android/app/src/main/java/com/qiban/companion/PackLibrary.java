package com.qiban.companion;
import android.graphics.BitmapFactory;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.zip.*;
import org.json.*;

/** Streamed, verified imports. A failed import cannot replace the working library. */
final class PackLibrary {
    static final List<String> SUPPORTED_CHARACTERS = List.of("Enya","Fenny","Katya","Cherno","Longyan","Nerida","Mia","Clarina","HeimdallQ");
    static final long MAX_SNOWBREAK_BYTES = 1024L * 1024 * 1024;
    static String displayName(String id) {
        if (id == null) return "本地伙伴";
        return switch (id) {
            case "Enya" -> "恩雅护士";
            case "Fenny" -> "芬妮婚皮";
            case "Katya" -> "凯茜娅 · 婚约";
            case "Cherno" -> "琴诺 · 见习侍奉";
            case "Longyan" -> "胧嫣 · 珠光曳影";
            case "Nerida" -> "奈莉德 · 热沙激浪";
            case "Mia" -> "米娅 · 星空魅影";
            case "Clarina" -> "克罗瑞娜 · 绯月";
            case "HeimdallQ" -> "海姆达尔 · Q版小人";
            default -> "本地伙伴";
        };
    }
    final File root,chat,art,voice,models;
    private File state,game;
    PackLibrary(File root){this.root=root;chat=new File(root,"chat");art=new File(root,"art");voice=new File(root,"voice");models=new File(root,"models");state=new File(root,"chat-state");game=new File(root,"game-state.json");root.mkdirs();state.mkdirs();models.mkdirs();art.mkdirs();for(String dep:List.of("Augusta.snowbreak","Qingxiao.snowbreak")){File f=new File(models,dep);if(f.isFile())f.delete();}}
    File universalMotionsFile(){return new File(models,"universal-motions.json");}
    boolean hasUniversalMotions(){return universalMotionsFile().isFile();}
    JSONObject loadUniversalMotions(){try{File f=universalMotionsFile();if(!f.isFile())return null;return FilesSupport.json(f,16*1024*1024);}catch(Exception e){return null;}}
    JSONObject saveUniversalMotions(File input)throws Exception {
        if(input.length()<16||input.length()>16L*1024*1024)throw new IOException("通用动作包超过 16 MB 或为空。");
        JSONObject incoming=FilesSupport.json(input,16*1024*1024);
        String schema=incoming.optString("schema");
        JSONArray incomingClips=incoming.optJSONArray("clips");
        if(!schema.startsWith("companion-upper-body-transfer/")||incomingClips==null||incomingClips.length()==0)throw new IOException("请选择有效的通用动作包（.qmotion）。");
        JSONObject merged=loadUniversalMotions();
        if(merged==null)merged=FilesSupport.copy(incoming);
        LinkedHashMap<String,JSONObject> byId=new LinkedHashMap<>();
        JSONArray existingClips=merged.optJSONArray("clips");
        if(existingClips!=null)for(int i=0;i<existingClips.length();i++){JSONObject c=existingClips.optJSONObject(i);if(c!=null&&!c.optString("id").isEmpty())byId.put(c.getString("id"),c);}
        for(int i=0;i<incomingClips.length();i++){JSONObject c=incomingClips.optJSONObject(i);if(c!=null&&!c.optString("id").isEmpty())byId.put(c.getString("id"),c);}
        JSONArray outClips=new JSONArray();for(JSONObject c:byId.values())outClips.put(c);
        merged.put("schema",schema).put("sourceCharacter",incoming.optString("sourceCharacter","UniversalMMD")).put("targetCharacter","Universal").put("stance",incoming.optString("stance","standing")).put("clips",outClips);
        FilesSupport.atomic(universalMotionsFile(),merged.toString());
        return merged;
    }
    boolean hasChat(){try{return FilesSupport.text(new File(chat,"package.sha256"),100).equals(BuildConfig.CHAT_SHA256);}catch(Exception e){return false;}}
    JSONObject install(File input,String name,java.util.function.Consumer<String> progress)throws Exception {
        if(name.toLowerCase(Locale.ROOT).endsWith(".qstage"))return new PortraitLibrary(root).install(input);
        String lower=name.toLowerCase(Locale.ROOT);
        if(lower.endsWith(".qmotion")){JSONObject catalog=saveUniversalMotions(input);return new JSONObject().put("type","qmotion").put("catalog",catalog);}
        if(lower.endsWith(".snowbreak")){
            if(input.length()>MAX_SNOWBREAK_BYTES||input.length()<22)throw new IOException("角色包须完整且不超过 1 GB。");
            try(ZipFile zip=new ZipFile(input)){JSONObject manifest=readJSON(zip,"manifest.json",4*1024*1024);if(!List.of("snowbreak-collection/1","snowbreak-skin/1","snowbreak-chibi-collection/1").contains(manifest.optString("schema")))throw new IOException("不支持的角色包版本。");}
            String ticket=UUID.randomUUID().toString();File staged=new File(models,"staged-"+ticket+".snowbreak");Files.copy(input.toPath(),staged.toPath());return new JSONObject().put("type","model").put("staged",staged.getName()).put("ticket",ticket);
        }
        if(!lower.endsWith(".qchat")&&!lower.endsWith(".qcards")&&!lower.endsWith(".qvoice"))throw new IOException("请选择 .snowbreak、.qmotion、.qstage、.qcards、.qchat 或 .qvoice 包。");
        boolean isChat=lower.endsWith(".qchat"),isArt=lower.endsWith(".qcards");long max=isChat?200L*1024*1024:isArt?500L*1024*1024:3L*1024*1024*1024;if(input.length()>max)throw new IOException("素材包超过大小上限。");
        if(isChat&&!FilesSupport.sha(input).equals(BuildConfig.CHAT_SHA256))throw new IOException("请选择随本版 App 提供的 .qchat 模块；摘要不匹配，原模块已保留。");
        File staging=new File(root,".import-"+UUID.randomUUID());staging.mkdirs();try(ZipFile zip=new ZipFile(input)){
            String manifestName=isChat?"module.json":isArt?"catalog.json":"manifest.json";JSONObject manifest=readJSON(zip,manifestName,2*1024*1024),files=manifest.getJSONObject("files");String schema=manifest.getString("schema");if(isChat&&!schema.equals("qiban-chat-module/1")||isArt&&!List.of("qiban-card-art/1","qiban-card-art/2").contains(schema)||!isChat&&!isArt&&!schema.equals("qiban-offline-voice/1"))throw new IOException("素材包索引不兼容。");
            Set<String> entries=new HashSet<>();long total=0;Enumeration<? extends ZipEntry> rows=zip.entries();while(rows.hasMoreElements()){ZipEntry e=rows.nextElement();if(e.isDirectory())continue;if(!FilesSupport.safe(e.getName())||!entries.add(e.getName())||e.getSize()<0)throw new IOException("包中有重复或不安全路径。");total+=e.getSize();}if(entries.size()!=files.length()+1||!entries.contains(manifestName)||files.length()>(isChat?3000:2048)||total>max*2||root.getUsableSpace()<total+64L*1024*1024)throw new IOException("包索引、大小或可用空间不足。");
            if(isArt)validateArt(manifest);if(!isChat&&!isArt)validateVoice(manifest);
            Iterator<String> keys=files.keys();int done=0;while(keys.hasNext()){
                String path=keys.next();ZipEntry entry=zip.getEntry(path);long fileMax=isChat?64L*1024*1024:isArt?20L*1024*1024:768L*1024*1024;if(entry==null||entry.getSize()>fileMax)throw new IOException("包内文件缺失或过大。");Object record=files.get(path);String expected=record instanceof String?(String)record:((JSONObject)record).getString("sha256");if(record instanceof JSONObject&&((JSONObject)record).getLong("bytes")!=entry.getSize())throw new IOException("文件长度与索引不一致。");if(!expected.matches("[a-f0-9]{64}"))throw new IOException("文件摘要格式无效。");
                if(isArt&&!path.matches("(?:images/.+\\.(?:png|jpe?g|webp)|audio/.+\\.m4a)"))throw new IOException("立绘包只允许图片和 AAC 音频数据。");
                File output=FilesSupport.child(staging,path);output.getParentFile().mkdirs();MessageDigest hash=MessageDigest.getInstance("SHA-256");CRC32 crc=new CRC32();long bytes=0;try(InputStream in=zip.getInputStream(entry);OutputStream out=new FileOutputStream(output)){byte[] b=new byte[65536];int n;while((n=in.read(b))!=-1){bytes+=n;if(bytes>entry.getSize()||bytes>fileMax)throw new IOException("解压文件超过限制。");out.write(b,0,n);hash.update(b,0,n);crc.update(b,0,n);}}if(bytes!=entry.getSize()||crc.getValue()!=entry.getCrc()||!RoomEngine.hex(hash.digest()).equals(expected))throw new IOException("文件校验失败："+path);
                if(isArt&&path.startsWith("images/")){BitmapFactory.Options bounds=new BitmapFactory.Options();bounds.inJustDecodeBounds=true;BitmapFactory.decodeFile(output.getPath(),bounds);if(bounds.outWidth<1||bounds.outHeight<1||bounds.outWidth>8192||bounds.outHeight>8192||(long)bounds.outWidth*bounds.outHeight>24L*1024*1024)throw new IOException("立绘尺寸无效或超过上限。");}
                if(++done%25==0)progress.accept("正在校验素材 "+done+" / "+files.length());
            }
            FilesSupport.atomic(new File(staging,manifestName),manifest.toString());File target;
            if(isChat){if(!new File(staging,"site/index.html").isFile())throw new IOException("模块缺少入口。");FilesSupport.atomic(new File(staging,"package.sha256"),BuildConfig.CHAT_SHA256);target=chat;}
            else if(isArt){String id=manifest.getString("id");if(!id.matches("[A-Za-z0-9_-]{1,80}"))throw new IOException("立绘库标识无效。");target=new File(art,id);File old=new File(target,"catalog.json");if(old.isFile()&&!manifest.has("theme")&&FilesSupport.json(old,2*1024*1024).has("theme"))throw new IOException("已安装完整视听包，不能被旧版立绘包覆盖。");}else target=voice;
            replace(staging,target);return new JSONObject().put("type",isChat?"chat":isArt?"art":"voice").put("title",manifest.optString("title","素材包")).put("files",files.length());
        }finally{if(staging.exists())FilesSupport.deleteTree(staging,root);}
    }
    private void replace(File from,File target)throws Exception {File previous=new File(root,".previous-"+UUID.randomUUID());boolean moved=false;try{if(target.exists()){Files.move(target.toPath(),previous.toPath());moved=true;}Files.move(from.toPath(),target.toPath());}catch(Exception e){if(moved&&!target.exists())Files.move(previous.toPath(),target.toPath());throw e;}if(previous.exists())FilesSupport.deleteTree(previous,root);}
    void commitModel(String staged,String character)throws Exception {if(staged.matches("staged-[a-f0-9-]+\\.json")&&character.equals("generic")){File source=FilesSupport.child(models,staged);FilesSupport.atomic(new File(models,"generic.json"),java.nio.file.Files.readAllBytes(source.toPath()));java.nio.file.Files.delete(source.toPath());return;}if(!staged.matches("staged-[a-f0-9-]+\\.snowbreak")||!SUPPORTED_CHARACTERS.contains(character))throw new IOException("角色验证失败。");File source=FilesSupport.child(models,staged);File target=new File(models,character+".snowbreak");File copy=new File(models,".current.tmp");Files.copy(source.toPath(),copy.toPath(),StandardCopyOption.REPLACE_EXISTING);Files.move(copy.toPath(),target.toPath(),StandardCopyOption.REPLACE_EXISTING);FilesSupport.atomic(new File(models,"selection.txt"),character);Files.delete(source.toPath());}
    File model(String character){return new File(models,character+".snowbreak");}
    JSONObject catalog()throws Exception {JSONArray characters=new JSONArray(),themes=new JSONArray();File[] folders=art.listFiles();if(folders!=null)for(File folder:folders){File file=new File(folder,"catalog.json");if(!file.isFile())continue;JSONObject m=FilesSupport.json(file,2*1024*1024);String prefix="art/"+m.getString("id")+"/";JSONArray list=m.getJSONArray("characters");for(int i=0;i<list.length();i++){JSONObject c=FilesSupport.copy(list.getJSONObject(i));c.put("id",m.getString("id")+"/"+c.getString("id"));for(String key:List.of("portrait","avatar"))if(c.has(key))c.put(key,prefix+c.getString(key));for(String key:List.of("states","stateLayers","blinkLayers"))if(c.has(key))c.put(key,prefix(c.getJSONObject(key),prefix));if(c.has("layers"))c.put("layers",paths(c.getJSONArray("layers"),prefix));characters.put(c);}if(m.has("theme")){JSONObject t=FilesSupport.copy(m.getJSONObject("theme"));t.put("images",prefix(t.getJSONObject("images"),prefix)).put("audio",prefix(t.getJSONObject("audio"),prefix));themes.put(t);}}return new JSONObject().put("characters",characters).put("themes",themes);}
    private JSONObject prefix(JSONObject object,String prefix)throws Exception{JSONObject out=new JSONObject();Iterator<String> keys=object.keys();while(keys.hasNext()){String key=keys.next();Object v=object.get(key);out.put(key,v instanceof JSONArray?paths((JSONArray)v,prefix):prefix+v);}return out;}
    private JSONArray paths(JSONArray values,String prefix)throws Exception{JSONArray out=new JSONArray();for(int i=0;i<values.length();i++)out.put(prefix+values.getString(i));return out;}
    synchronized void useState(File active) {
        state=new File(active,"chat-state");
        game=new File(active,"game-state.json");
    }
    synchronized String game()throws Exception {
        return game.isFile()?FilesSupport.text(game,FilesSupport.GAME_LIMIT):null;
    }
    synchronized void saveGame(String value)throws Exception {
        writeGame(game,value);
    }
    static void writeGame(File file,String value)throws Exception {
        FilesSupport.requireBytes(value,FilesSupport.GAME_LIMIT);
        JSONObject parsed=new JSONObject(value);
        if(!parsed.has("preferences"))throw new IOException("牌桌存档无效。");
        FilesSupport.atomic(file,value);
    }

    synchronized JSONObject storage(SecretVault.Settings settings)throws Exception {
        JSONObject out=new JSONObject();
        long total=0;
        for(File item:records(state)) {
            total+=item.length();
            if(total>2L*FilesSupport.CHAT_TOTAL_LIMIT)throw new IOException("旧版通讯存档超过恢复上限。");
            JSONObject row=FilesSupport.json(item,2*FilesSupport.CHAT_RECORD_LIMIT+2048);
            String key=row.getString("key"), value=row.getString("value"),safe=settings.apply(key,value);
            if(!safe.equals(value))persist(key,safe);
            out.put(key,safe);
        }
        return out;
    }
    private static File[] records(File folder)throws IOException {
        File[] result=folder.listFiles(f->f.isFile()&&f.getName().matches("[a-f0-9]{64}\\.json"));
        if(result==null)throw new IOException("无法读取通讯存档目录。");
        return result;
    }
    static File recordFile(File dir,String key)throws Exception {
        if(!(key.startsWith("fritia_")||key.startsWith("fritia-"))||key.length()>200)throw new IOException("通讯存储键无效。");
        return new File(dir,RoomEngine.hex(MessageDigest.getInstance("SHA-256").digest(key.getBytes(StandardCharsets.UTF_8)))+".json");
    }
    static String record(String key,String value)throws Exception {
        String record=new JSONObject().put("key",key).put("value",value).toString();
        FilesSupport.requireBytes(record,FilesSupport.CHAT_RECORD_LIMIT);
        return record;
    }
    synchronized void persist(String key,String value)throws Exception {
        File file=recordFile(state,key);
        if(value==null){Files.deleteIfExists(file.toPath());return;}
        String record=record(key,value);
        long total=FilesSupport.utf8Length(record);
        for(File existing:records(state))if(!existing.equals(file))total+=existing.length();
        if(total>FilesSupport.CHAT_TOTAL_LIMIT)throw new IOException("通讯文字超过128MiB，请先导出。");
        FilesSupport.atomic(file,record);
    }
    private static JSONObject readJSON(ZipFile zip,String path,int max)throws Exception{ZipEntry e=zip.getEntry(path);if(e==null||e.getSize()>max)throw new IOException("包中缺少有效索引。");try(InputStream in=zip.getInputStream(e)){byte[] b=FilesSupport.read(in,max+1);if(b.length>max)throw new IOException("索引过大。");return new JSONObject(new String(b,StandardCharsets.UTF_8));}}
    private static void validateArt(JSONObject m)throws Exception{JSONArray characters=m.getJSONArray("characters");if(characters.length()<1||characters.length()>200)throw new IOException("立绘角色数量无效。");JSONObject files=m.getJSONObject("files");Set<String> ids=new HashSet<>();for(int i=0;i<characters.length();i++){JSONObject c=characters.getJSONObject(i);if(!ids.add(c.getString("id"))||!c.getString("id").matches("[A-Za-z0-9_-]{1,80}")||c.getString("name").length()>80)throw new IOException("角色标识无效。");for(String key:List.of("portrait","avatar"))if(c.has(key)&&!files.has(c.getString(key)))throw new IOException("角色图片缺失。");}if(m.has("theme")){JSONObject t=m.getJSONObject("theme");if(!t.getString("id").equals("p5-original")||t.getInt("width")!=1600||t.getInt("height")!=900)throw new IOException("原版牌桌尺寸不兼容。");for(String section:List.of("images","audio")){JSONObject map=t.getJSONObject(section);Iterator<String> keys=map.keys();while(keys.hasNext())if(!files.has(map.getString(keys.next())))throw new IOException("原版视听资源缺失。");}}}
    private static void validateVoice(JSONObject m)throws Exception {if(!m.optString("frontendRevision").equals("384a2f995c48ef1903373ac8814569a8925779ba"))throw new IOException("语音前端版本不兼容。");JSONArray voices=m.getJSONArray("voices");if(voices.length()!=2)throw new IOException("请选择完整的中日语音包。");JSONObject files=m.getJSONObject("files");for(int i=0;i<voices.length();i++){JSONObject v=voices.getJSONObject(i);if(!List.of("zh","ja").contains(v.getString("language")))throw new IOException("音色语言无效。");String d=v.getString("directory");for(String name:List.of("config.json","conditioning.json","reference_bert.bin","prompt_semantic.bin","refer_spec.bin","gpt_encoder.onnx","gpt_step.onnx","sovits.onnx"))if(!files.has(d+"/"+name))throw new IOException("语音参考或模型不完整。");}if(!files.has("shared/bert.onnx")||!files.has("shared/tokenizer.json"))throw new IOException("共用语音模型缺失。");}
}
