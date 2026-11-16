package com.qiban.companion;
import org.json.*;

public final class NativePromptProbe {
    private static int passed;
    private static void check(boolean value){if(!value)throw new AssertionError("Android/iOS body contract "+(passed+1));passed++;}
    public static void main(String[] args)throws Exception {
        JSONArray actions=new JSONArray().put("raise_right_hand").put("gesture_nod").put("snowbreak_home_shy").put("procedural");
        JSONObject reply=new JSONObject().put("reply","我愿意。").put("decision","accept").put("action","raise_right_hand");
        check(DialogueDecision.action(reply,actions).equals("raise_right_hand"));reply.put("decision","refuse");check(DialogueDecision.action(reply,actions).isEmpty());reply.remove("decision");check(DialogueDecision.action(reply,actions).isEmpty());
        reply.put("decision","accept").put("action","none").put("intent","nod");check(DialogueDecision.action(reply,actions).equals("gesture_nod"));reply.put("intent","shy");check(DialogueDecision.action(reply,actions).equals("snowbreak_home_shy"));reply.put("decision","refuse");check(DialogueDecision.action(reply,actions).isEmpty());
        JSONObject motion=new JSONObject("{\"duration\":2,\"poses\":[{\"time\":0},{\"time\":2,\"head\":[10,0,0]}]}");check(DialogueDecision.validMotion(motion));motion.getJSONArray("poses").getJSONObject(1).put("head",new JSONArray().put(90).put(0).put(0));check(!DialogueDecision.validMotion(motion));
        check(DialogueDecision.parse("只是普通台词。").getString("reply").equals("只是普通台词。"));
        JSONObject envelope=DialogueDecision.parse("你好。\n```json\n{\"reply\":\"你好。\",\"decision\":\"none\",\"action\":\"none\"}\n```");check(envelope.getString("reply").equals("你好。"));
        String story="这是故事中的示例：{\"reply\":\"举手\",\"decision\":\"accept\",\"action\":\"raise_right_hand\"}";check(!DialogueDecision.hasDecision(DialogueDecision.parse(story)));
        JSONObject archive=ArchiveStore.initial();ArchiveStore.prepare(archive);JSONObject library=archive.getJSONObject("settings").getJSONObject("personas"),card=library.getJSONArray("cards").getJSONObject(0);
        library.put("userName","全局用户").put("userDescription","全局描述").put("systemPrompt","你好 {{char}}，{{user}}。");card.put("name","角色{{user}}").put("userName","秦天").put("userDescription","专属描述").put("notes","绝对不发送的创作者备注").put("replyRules","简洁回复");String text=PersonaPrompt.character(library,card.getString("id"));
        check(text.contains("角色{{user}}，秦天"));check(text.contains("专属描述")&&!text.contains("全局描述"));check(text.contains("简洁回复")&&!text.contains("绝对不发送的创作者备注"));
        archive.put("memories","M".repeat(13000));String combined=PersonaPrompt.compose(archive,actions,new JSONObject(),false);check(combined.contains("M".repeat(12000))&&!combined.contains("M".repeat(12001)));check(combined.contains("拒绝时")&&combined.contains("speech_zh"));check(!combined.contains("{MAP}")&&!combined.contains("{SPEECH}"));check(new JSONObject(IOSPromptText.CATALOG).has("raise_right_hand"));
        System.out.println("Native iOS/Android persona and body checks: "+passed);
    }
}
