package com.qiban.companion;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import org.json.JSONObject;
import org.mozilla.javascript.*;

/** Exactly the shared RoomCore with a private, non-reflective crypto host. One owner thread. */
public final class RoomEngine {
    private final Scriptable scope;
    private final Scriptable runtime;
    private final SecureRandom random = new SecureRandom();
    public RoomEngine(String source) throws Exception {
        Context cx=enter();
        try {
            scope=cx.initSafeStandardObjects();
            Scriptable crypto=cx.newObject(scope);
            ScriptableObject.putProperty(crypto,"token",function(args -> {
                int count=Math.max(1,Math.min(64,((Number)args[0]).intValue()));byte[] bytes=new byte[count];random.nextBytes(bytes);return hex(bytes);
            }));
            ScriptableObject.putProperty(crypto,"hash",function(args -> hex(digest(Context.toString(args[0])))));
            ScriptableObject.putProperty(crypto,"equal",function(args -> MessageDigest.isEqual(digest(Context.toString(args[0])),digest(Context.toString(args[1])))));
            ScriptableObject.putProperty(crypto,"random",function(args -> random.nextDouble()));
            ScriptableObject.putProperty(scope,"qibanCrypto",crypto);
            cx.evaluateString(scope,source,"shared-room-runtime",1,null);
            runtime=(Scriptable)cx.evaluateString(scope,"(function(){const c=qibanCrypto;const r=new globalThis.QibanRoomRuntime.RoomCore({crypto:c,random:()=>c.random()});return {request(text){try{return JSON.stringify(r.request(JSON.parse(text)))}catch(e){return JSON.stringify({error:String(e.message||e)})}},tick(){r.tick()}}})()","phone-host",1,null);
        } finally {Context.exit();}
    }
    interface HostCall { Object call(Object[] args) throws Exception; }
    private BaseFunction function(HostCall host) {return new BaseFunction(){@Override public Object call(Context cx,Scriptable s,Scriptable self,Object[] args){try{return host.call(args);}catch(Exception e){throw Context.throwAsScriptRuntimeEx(e);}}};}
    private static Context enter(){Context c=Context.enter();c.setLanguageVersion(Context.VERSION_ES6);c.setOptimizationLevel(-1);c.setClassShutter(name->false);return c;}
    public JSONObject request(JSONObject input) throws Exception {
        Context c=enter();try {Object result=((Function)runtime.get("request",runtime)).call(c,scope,runtime,new Object[]{input.toString()});return new JSONObject(Context.toString(result));}finally{Context.exit();}
    }
    public void tick(){Context c=enter();try{((Function)runtime.get("tick",runtime)).call(c,scope,runtime,new Object[]{});}finally{Context.exit();}}
    public static String hex(byte[] bytes){StringBuilder b=new StringBuilder();for(byte x:bytes)b.append(String.format(java.util.Locale.ROOT,"%02x",x&255));return b.toString();}
    private static byte[] digest(String s) throws Exception {return MessageDigest.getInstance("SHA-256").digest(s.getBytes(StandardCharsets.UTF_8));}
}
