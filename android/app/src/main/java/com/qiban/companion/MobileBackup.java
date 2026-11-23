package com.qiban.companion;

import android.util.JsonReader;
import android.util.JsonToken;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;
import java.util.UUID;
import org.json.*;

/** Each generation owns all three mutable stores. Only the small pointer selects a generation. */
final class MobileBackup {
    static final String SCHEMA = "qiban-mobile-backup/1";
    private static final String POINTER = "active-storage";

    static File active(File root)throws Exception {
        File pointer=new File(root,POINTER);
        if(!pointer.exists())return root;
        String name=FilesSupport.text(pointer,100);
        if(!name.matches("storage-[a-f0-9-]{36}"))throw new IOException("资料代次索引无效。");
        File generation=new File(root,name);
        if(!new File(generation,"archive.json").isFile()||!new File(generation,"chat-state").isDirectory())
            throw new IOException("资料代次不完整。");
        return generation;
    }

    static JSONObject read(File file)throws Exception {
        if(file.length()>FilesSupport.BACKUP_LIMIT)throw new IOException("备份超过读取上限。");
        try(JsonReader reader=new JsonReader(new BufferedReader(new InputStreamReader(new FileInputStream(file),StandardCharsets.UTF_8)))) {
            Object value=readValue(reader,0);
            if(!(value instanceof JSONObject)||reader.peek()!=JsonToken.END_DOCUMENT)throw new IOException("备份格式无效。");
            return (JSONObject)value;
        }
    }

    private static Object readValue(JsonReader reader,int depth)throws Exception {
        if(depth>128)throw new IOException("备份嵌套过深。");
        switch(reader.peek()) {
        case BEGIN_OBJECT:
            JSONObject object=new JSONObject();
            reader.beginObject();
            while(reader.hasNext()) {
                String name=reader.nextName();
                if(object.has(name))throw new IOException("备份有重复字段。");
                object.put(name,readValue(reader,depth+1));
            }
            reader.endObject();
            return object;
        case BEGIN_ARRAY:
            JSONArray array=new JSONArray();
            reader.beginArray();
            while(reader.hasNext())array.put(readValue(reader,depth+1));
            reader.endArray();
            return array;
        case STRING:return reader.nextString();
        case BOOLEAN:return reader.nextBoolean();
        case NULL:reader.nextNull();return JSONObject.NULL;
        case NUMBER:return new JSONTokener(reader.nextString()).nextValue();
        default:throw new IOException("备份包含无效值。");
        }
    }

    static void exportTo(File destination,ArchiveStore store,PackLibrary packs,SecretVault.Settings settings)throws Exception {
        synchronized(store) {
            synchronized(packs) {
                try(Writer writer=new BufferedWriter(new OutputStreamWriter(new FileOutputStream(destination),StandardCharsets.UTF_8))) {
                    writer.write("{\"schema\":\""+SCHEMA+"\",\"nativeArchive\":");
                    writer.write(store.snapshot().toString());
                    writer.write(",\"chatStorage\":");
                    JSONObject chat=packs.storage(settings);
                    writer.write('{');
                    Iterator<String> keys=chat.keys();
                    while(keys.hasNext()) {
                        String key=keys.next();
                        writer.write(JSONObject.quote(key));writer.write(':');writer.write(JSONObject.quote(chat.getString(key)));
                        if(keys.hasNext())writer.write(',');
                    }
                    writer.write('}');
                    String game=packs.game();
                    if(game!=null){writer.write(",\"gameState\":");writer.write(JSONObject.quote(game));}
                    writer.write('}');
                }
                if(destination.length()>FilesSupport.BACKUP_LIMIT)throw new IOException("组合备份超过可恢复上限。");
            }
        }
    }

    static void restore(JSONObject data,ArchiveStore store,PackLibrary packs,SecretVault.Settings settings)throws Exception {
        boolean full=data.has("schema");
        if(full&&!SCHEMA.equals(data.getString("schema")))throw new IOException("不支持的备份版本。");
        JSONObject archive=data.has("nativeArchive")?data.getJSONObject("nativeArchive"):data;
        if(full&&!data.has("nativeArchive"))throw new IOException("完整备份缺少本体记录。");
        if(full&&!data.has("chatStorage"))throw new IOException("完整备份缺少通讯资料。");
        ArchiveStore.prepare(archive);
        ArchiveStore.validate(archive);
        File root=store.directory;
        synchronized(store) {
            synchronized(packs) {
                File next=new File(root,"storage-"+UUID.randomUUID());
                File chatDir=new File(next,"chat-state");
                if(!chatDir.mkdirs())throw new IOException("无法建立恢复暂存目录。");
                boolean active=false;
                try {
                    ArchiveStore staged=new ArchiveStore(next);
                    staged.save(archive);
                    JSONObject chat=data.has("chatStorage")?data.getJSONObject("chatStorage"):packs.storage(settings);
                    long total=0;
                    for(Iterator<String> keys=chat.keys();keys.hasNext();) {
                        String key=keys.next();
                        if(!(chat.get(key) instanceof String))throw new IOException("通讯记录值格式无效。");
                        String safe=settings.apply(key,chat.getString(key));
                        File file=PackLibrary.recordFile(chatDir,key);
                        String row=PackLibrary.record(key,safe);
                        total+=FilesSupport.utf8Length(row);
                        if(total>FilesSupport.CHAT_TOTAL_LIMIT)throw new IOException("通讯资料总量超过上限。");
                        FilesSupport.atomic(file,row);
                    }
                    String game=data.has("gameState")?data.getString("gameState"):full?null:packs.game();
                    if(game!=null)PackLibrary.writeGame(new File(next,"game-state.json"),game);
                    JSONObject detached=staged.snapshot();
                    FilesSupport.atomic(new File(root,POINTER),next.getName());
                    active=true;
                    store.activate(new File(next,"archive.json"),detached);
                    packs.useState(next);
                } finally {
                    if(!active)FilesSupport.deleteTree(next,root);
                }
            }
        }
    }
}
