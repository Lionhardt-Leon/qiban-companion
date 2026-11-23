package com.qiban.companion;
import org.json.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;

/** Console harness calls the unmodified production Android room and archive classes. */
public final class NativeProbe {
    static int checks;
    static void check(boolean value,String label){if(!value)throw new AssertionError(label);checks++;}
    static JSONObject selfcheck(JSONObject cases)throws Exception {
        for(String type:List.of("legacy","explicit")){JSONArray list=cases.getJSONArray(type);for(int i=0;i<list.length();i++){JSONArray pair=list.getJSONArray(i);String result=type.equals("legacy")?SpokenDialogue.dialogue(pair.getString(0)):SpokenDialogue.explicit(pair.getString(0));check(result.equals(pair.getString(1)),"speech "+type+" "+i+" expected "+pair.getString(1)+" got "+result);}}
        check(new JSONObject().put("value",JSONObject.NULL).optString("value").equals("null"),"harness uses Android JSON null semantics, not desktop JSON-java");
        File directory=Files.createTempDirectory("qiban-mobile-check-").toFile();try{
            ArchiveStore store=new ArchiveStore(directory);JSONObject a=store.snapshot();String owner=a.getString("personaSessionKey"),old=a.getJSONObject("activeSessionIDs").getString(owner);String message=ArchiveStore.uuid();a.getJSONArray("messages").put(new JSONObject().put("id",message).put("role","user").put("content","旧的你好").put("createdAt",ArchiveStore.now()));a.put("memories","只属于旧对话的记忆");a.getJSONArray("diary").put(new JSONObject().put("id",ArchiveStore.uuid()).put("text","旧日记").put("createdAt",ArchiveStore.now()));store.save(a);
            String source = a.getJSONArray("messages").toString();
            String memory = a.getString("memories");
            JSONObject concurrent = store.snapshot();
            concurrent.getJSONObject("settings").getJSONObject("speech").put("enabled", false);
            concurrent.getJSONArray("diary").put(new JSONObject().put("text","并发日记"));
            store.save(concurrent);
            JSONObject merged = store.commitSummary(owner,old,source,memory,"合成摘要",new JSONObject().put("text","摘要日记"));
            check(!merged.getJSONObject("settings").getJSONObject("speech").getBoolean("enabled")
                    && merged.getJSONArray("diary").length()==3, "summary preserves concurrent settings and diary");
            try {
                store.commitSummary(owner,old,source,memory,"迟到摘要",new JSONObject());
                throw new AssertionError("overwrote concurrent memory");
            } catch(IOException expected) { checks++; }
            store.newSession();
            try {
                store.commitSummary(owner,old,source,"合成摘要","错误会话",new JSONObject());
                throw new AssertionError("summary crossed sessions");
            } catch(IOException expected) { checks++; }
            // Restore the fixture for the independent session migration checks below.
            store.save(a);
            String next=store.newSession();a=store.snapshot();check(a.getJSONArray("messages").length()==0&&a.getString("memories").isEmpty()&&a.getJSONArray("diary").length()==0,"new session isolates message, memory and diary");check(ArchiveStore.contents(a,old).getJSONArray("messages").getJSONObject(0).getString("content").equals("旧的你好"),"old messages retained");check(ArchiveStore.contents(a,old).getString("memories").equals("只属于旧对话的记忆"),"old memory retained");
            ArchiveStore reopened=new ArchiveStore(directory);check(reopened.snapshot().getJSONObject("activeSessionIDs").getString(owner).equals(next),"selected session survives restart");reopened.chooseSession(old);check(reopened.snapshot().getString("memories").equals("只属于旧对话的记忆")&&reopened.snapshot().getJSONArray("diary").length()==1,"switch restores memory and diary");reopened.chooseSession(next);check(reopened.snapshot().getJSONArray("messages").length()==0,"switch back preserves empty session");
            String session=UUID.randomUUID().toString(),webMessage=UUID.randomUUID().toString();JSONObject change=new JSONObject().put("id","friend-custom-role").put("qibanId",JSONObject.NULL).put("name","秦天").put("prompt","自定义人设").put("examples","").put("promptEdited",true).put("sessionID",session).put("conversationID","private:"+session).put("sessionTitle","第一段").put("messages",new JSONArray().put(new JSONObject().put("id",webMessage).put("role","user").put("text","你好").put("createdAt",System.currentTimeMillis()))).put("removedIds",new JSONArray());JSONObject linked=reopened.sync(change,true);String roleID=linked.getString("qibanId"),nativeSession=linked.getString("sessionID");change.put("qibanId",roleID);reopened.sync(change,true);a=reopened.snapshot();check(ArchiveStore.contents(a,nativeSession).getJSONArray("messages").length()==1,"web/native retry does not duplicate persona user turn");check(linked.getJSONObject("messageIDs").getString(webMessage).equals(webMessage.toUpperCase(Locale.ROOT)),"message identity identical to iOS");
            a=reopened.snapshot();
            ArchiveStore.find(a.getJSONObject("settings").getJSONObject("personas").getJSONArray("cards"),roleID).put("personality","保留结构化性格");
            reopened.save(a);
            change.put("promptEdited",false).put("examplesEdited",true).put("examples","仅改示例").put("messages",new JSONArray());
            reopened.sync(change,true);
            var examplesCard=ArchiveStore.find(reopened.snapshot().getJSONObject("settings").getJSONObject("personas").getJSONArray("cards"),roleID);
            check(examplesCard.getString("examples").equals("仅改示例")&&examplesCard.getString("personality").equals("保留结构化性格"),"examples-only edits preserve structured persona");
            change.put("examples","");
            reopened.sync(change,true);
            check(ArchiveStore.find(reopened.snapshot().getJSONObject("settings").getJSONObject("personas").getJSONArray("cards"),roleID).getString("examples").isEmpty(),"examples can be cleared independently");
            change.remove("examplesEdited");
            String second=UUID.randomUUID().toString();change.put("sessionID",second).put("conversationID","private:"+second).put("sessionTitle","第二段").put("messages",new JSONArray()).put("removedIds",new JSONArray());reopened.sync(change,true);a=reopened.snapshot();check(ArchiveStore.contents(a,nativeSession).getJSONArray("messages").length()==1,"syncing another thread preserves first thread");check(ArchiveStore.contents(a,second.toUpperCase(Locale.ROOT)).getJSONArray("messages").length()==0,"new web thread starts empty");
            change.put("sessionID",nativeSession).put("removedIds",new JSONArray().put(webMessage));reopened.sync(change,false);check(ArchiveStore.contents(reopened.snapshot(),nativeSession).getJSONArray("messages").length()==0,"deletion targets only selected thread");
            Set<String> contacts=new HashSet<>();List<String> contactSessions=new ArrayList<>();
            for(String name:List.of("芬妮","芙提雅","肴","苔丝")){
                String sid=ArchiveStore.uuid();JSONObject input=new JSONObject().put("id","preset-"+name).put("qibanId",JSONObject.NULL).put("name",name).put("prompt",name+"自己的性格").put("promptEdited",true).put("sessionID",sid).put("conversationID","private:preset-"+name).put("sessionTitle","各自的问候").put("messages",new JSONArray().put(new JSONObject().put("id",ArchiveStore.uuid()).put("role","assistant").put("text",name+"独立的回答").put("createdAt",System.currentTimeMillis()))).put("removedIds",new JSONArray());
                JSONObject result=reopened.sync(input,true);contacts.add(result.getString("qibanId"));contactSessions.add(sid);check(ArchiveStore.contents(reopened.snapshot(),sid).getJSONArray("messages").getJSONObject(0).getString("content").equals(name+"独立的回答"),"Android null contact owns its own reply: "+name);
            }
            check(contacts.size()==4&&!contacts.contains(ArchiveStore.identifier("null")),"four unbound contacts create four native personas, never the null alias");
            reopened=new ArchiveStore(directory);for(int i=0;i<4;i++)check(ArchiveStore.contents(reopened.snapshot(),contactSessions.get(i)).getJSONArray("messages").length()==1,"contact remains isolated after restart "+i);
            a=reopened.snapshot();String broken=ArchiveStore.identifier("null");a.getJSONObject("settings").getJSONObject("personas").getJSONArray("cards").put(ArchiveStore.card(broken,"芬妮","旧版人设"));ArchiveStore.prepare(a);String brokenSession=a.getJSONObject("activeSessionIDs").getString(broken);JSONObject saved=ArchiveStore.empty();saved.getJSONArray("messages").put(new JSONObject().put("id",ArchiveStore.uuid()).put("role","assistant").put("content","保留的旧版混合记录").put("createdAt",ArchiveStore.now()));ArchiveStore.setContents(a,brokenSession,saved);a.getJSONObject("chatContactOrigins").put(broken,"preset-芬妮");reopened.save(a);
            reopened=new ArchiveStore(directory);a=reopened.snapshot();check(new File(directory,"archive-before-contact-repair.json").isFile(),"legacy repair saves a full original archive before changing aliases");check(a.getJSONObject("chatContactOrigins").getString(broken).equals("qiban_recovered_"+broken),"legacy mixed persona no longer overwrites the real Fenny contact");check(ArchiveStore.contents(a,brokenSession).getJSONArray("messages").getJSONObject(0).getString("content").equals("保留的旧版混合记录"),"legacy repair keeps every old message");check(!ArchiveStore.repairLegacyContact(a),"native contact repair is idempotent");
            JSONObject legacy=ArchiveStore.initial();legacy.put("schemaVersion",2);legacy.remove("conversationSessions");legacy.remove("activeSessionIDs");legacy.remove("sessionHistories");legacy.getJSONArray("messages").put(new JSONObject().put("id",ArchiveStore.uuid()).put("role","user").put("content","升级前").put("createdAt",ArchiveStore.now()));ArchiveStore.prepare(legacy);ArchiveStore.validate(legacy);check(legacy.getJSONArray("messages").length()==1&&legacy.getJSONArray("conversationSessions").length()==1,"0.29 archive migrates without losing original conversation");
        }finally{for(File f:directory.listFiles())f.delete();directory.delete();}
        return new JSONObject().put("checks",checks).put("passed",true);
    }
    public static void main(String[] args)throws Exception {PhoneRooms rooms=new PhoneRooms();String source=Files.readString(Path.of(args[0]),StandardCharsets.UTF_8);BufferedReader in=new BufferedReader(new InputStreamReader(System.in,StandardCharsets.UTF_8));PrintWriter out=new PrintWriter(new OutputStreamWriter(System.out,StandardCharsets.UTF_8),true);String line;try{while((line=in.readLine())!=null){try{JSONObject input=new JSONObject(line),value;switch(input.getString("command")){case "selfcheck":value=selfcheck(input.getJSONObject("cases"));break;case "host":value=rooms.start(source,input.getJSONObject("body"));break;case "local":value=rooms.command(input.getJSONObject("body"));break;case "wire":value=PhoneRooms.request(input.getString("url"),"",input.getJSONObject("body"));break;case "stop":rooms.stop();value=new JSONObject().put("stopped",true);break;default:throw new IOException("Unknown command");}out.println(new JSONObject().put("value",value));}catch(Throwable e){out.println(new JSONObject().put("error",e.toString()));}}}finally{rooms.close();}}
}
