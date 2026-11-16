package com.qiban.companion;
import org.json.*;
import java.io.IOException;
import java.util.*;

/** Matches DialogueMotion's explicit consent, trusted aliases and bounded motion decoding. */
final class DialogueDecision {
    static boolean hasDecision(JSONObject value){return List.of("accept","refuse","none").contains(value.optString("decision"));}
    static boolean contains(JSONArray values,String value){for(int i=0;i<values.length();i++)if(values.optString(i).equals(value))return true;return false;}
    static String action(JSONObject value,JSONArray actions){
        if(!value.optString("decision").equals("accept"))return "";
        String raw=value.optString("action"),intent=value.optString("intent",raw);
        JSONObject affect=value.optJSONObject("affect");if((raw.isEmpty()||raw.equals("none"))&&intent.equals(raw)&&affect!=null&&affect.optDouble("intensity")>=.45)intent=switch(affect.optString("emotion")){case "shy","害羞"->"shy";case "affectionate","亲近"->"invite";case "curious","好奇"->"nod";default->intent;};
        String[] choices=switch(intent){case "greet","招呼","farewell","告别"->new String[]{"snowbreak_home_login","hello","gesture_wave_right"};case "shy","害羞","羞一下"->new String[]{"snowbreak_home_shy","gesture_shy"};case "kiss","亲吻","亲亲"->new String[]{"snowbreak_home_kiss"};case "invite","邀请"->new String[]{"snowbreak_home_invite","gesture_open_arms"};case "comfort","安慰","nod","点头"->new String[]{"gesture_nod","Yes"};case "shake_head","摇头"->new String[]{"gesture_shake","No"};case "wave_left"->new String[]{"gesture_wave_left"};case "wave_right"->new String[]{"gesture_wave_right","hello"};case "open_arms","张开双臂"->new String[]{"gesture_open_arms"};default->new String[0];};
        for(String choice:choices)if(contains(actions,choice)){raw=choice;break;}
        if(raw.equals("stop"))return "stop";
        if(!contains(actions,raw))return "";
        if(raw.equals("procedural")&&!validMotion(value.optJSONObject("motion")))return "";
        return raw;
    }
    static boolean validMotion(JSONObject motion){try{
        if(motion==null)return false;double duration=motion.getDouble("duration");JSONArray poses=motion.getJSONArray("poses");if(!Double.isFinite(duration)||duration<1||duration>8||poses.length()<2||poses.length()>8||poses.getJSONObject(0).getDouble("time")!=0||poses.getJSONObject(poses.length()-1).getDouble("time")!=duration)return false;
        double previous=-1;for(int i=0;i<poses.length();i++){JSONObject pose=poses.getJSONObject(i);double time=pose.getDouble("time");if(!Double.isFinite(time)||time<=previous||time>duration)return false;previous=time;for(String key:List.of("leftHand","rightHand","leftFoot","rightFoot","head","torso")){if(!pose.has(key))continue;JSONArray v=pose.getJSONArray(key);if(v.length()!=3)return false;double[] limits=key.endsWith("Hand")?new double[]{1.5,2,1.5}:key.endsWith("Foot")?new double[]{.35,.35,.35}:key.equals("head")?new double[]{45,25,20}:new double[]{20,15,15};for(int j=0;j<3;j++)if(!Double.isFinite(v.getDouble(j))||Math.abs(v.getDouble(j))>limits[j])return false;if(key.endsWith("Hand")&&v.getDouble(1)<-.35)return false;}if(pose.has("smile")&&(!Double.isFinite(pose.getDouble("smile"))||pose.getDouble("smile")<0||pose.getDouble("smile")>1))return false;}return true;
    }catch(Exception error){return false;}}
    static JSONObject parse(String original)throws Exception {
        String text=original.trim();if(text.isEmpty()||text.length()>250000)throw new IOException("没有收到有效回复。");String payload=text.replaceAll("^```(?:json)?\\s*|\\s*```$","");JSONObject whole=object(payload);if(whole!=null)return validate(whole);
        int start=-1,depth=0,count=0;boolean string=false,escaped=false;
        for(int i=0;i<payload.length();i++){char c=payload.charAt(i);if(start<0){if(c=='{'){start=i;depth=1;}continue;}if(string){if(escaped)escaped=false;else if(c=='\\')escaped=true;else if(c=='"')string=false;continue;}if(c=='"')string=true;else if(c=='{')depth++;else if(c=='}')depth--;if(depth!=0)continue;int begin=start;start=-1;if(++count>8)break;String suffix=payload.substring(i+1).trim();if(!suffix.isEmpty()&&!suffix.equals("```"))continue;JSONObject value=object(payload.substring(begin,i+1));if(value==null||!value.has("reply"))continue;String prefix=payload.substring(0,begin).trim().replaceAll("```(?:json)?$","").trim();if(prefix.isEmpty()||prefix.replaceAll("\\s","").equals(value.optString("reply").replaceAll("\\s","")))return validate(value);}
        if(payload.startsWith("{")&&(payload.contains("\"reply\"")||payload.contains("\"action\"")))throw new IOException("模型返回的动作格式不完整，请重试。");return new JSONObject().put("reply",text);
    }
    private static JSONObject object(String text){try{JSONTokener source=new JSONTokener(text);Object value=source.nextValue();if(source.nextClean()!=0)return null;if(value instanceof String)value=new JSONTokener((String)value).nextValue();if(value instanceof JSONObject&&(((JSONObject)value).has("reply")||((JSONObject)value).has("action")))return(JSONObject)value;}catch(Exception ignored){}return null;}
    private static JSONObject validate(JSONObject value)throws Exception {if(value.optString("reply").trim().isEmpty()||value.optString("speech_zh").length()>8000||value.optString("speech_ja").length()>8000)throw new IOException("模型返回的回复格式不完整，请重试。");return value;}
}
