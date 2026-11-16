package com.qiban.companion;

import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;

/** Production phone listener. No Activity/WebView or PC participates in room authority. */
public final class PhoneRooms implements AutoCloseable {
    private final ScheduledExecutorService owner=Executors.newSingleThreadScheduledExecutor();
    private final ExecutorService clients=Executors.newFixedThreadPool(4);
    private final Semaphore slots=new Semaphore(12);
    private volatile ServerSocket listener;
    private RoomEngine engine;private String token="",code="",name="";
    public final String instance=UUID.randomUUID().toString();
    public JSONObject start(String source,JSONObject input) throws Exception {
        return owner.submit(()->{
            if(listener!=null)return withInfo(engine.request(new JSONObject().put("op","state").put("code",code).put("token",token)).put("token",token));
            RoomEngine next=new RoomEngine(source);
            JSONObject result=next.request(new JSONObject(input.toString()).put("op","create"));
            if(result.has("error"))throw new IOException(result.getString("error"));
            ServerSocket server=new ServerSocket();server.setReuseAddress(true);server.bind(new InetSocketAddress(0));
            engine=next;token=result.getString("token");code=result.getJSONObject("state").getString("code");name=input.optString("name","房主");listener=server;
            Thread accept=new Thread(()->accept(server),"qiban-phone-listener");accept.setDaemon(true);accept.start();
            return withInfo(result);
        }).get(15,TimeUnit.SECONDS);
    }
    public PhoneRooms(){owner.scheduleAtFixedRate(()->{if(engine!=null)try{engine.tick();}catch(RuntimeException ignored){}},250,250,TimeUnit.MILLISECONDS);}
    public JSONObject command(JSONObject input) throws Exception {return owner.submit(()->{if(engine==null)throw new IOException("本机没有房间。");return engine.request(input);}).get(12,TimeUnit.SECONDS);}
    private JSONObject withInfo(JSONObject result)throws Exception{return result.put("hostInfo",info());}
    public JSONObject info() throws Exception {
        JSONArray addresses=new JSONArray();Enumeration<NetworkInterface> all=NetworkInterface.getNetworkInterfaces();
        ServerSocket s=listener;int port=s==null?0:s.getLocalPort();
        if(all!=null)while(all.hasMoreElements()){NetworkInterface n=all.nextElement();if(!n.isUp()||n.isLoopback())continue;Enumeration<InetAddress> list=n.getInetAddresses();while(list.hasMoreElements()){InetAddress a=list.nextElement();if(a instanceof Inet4Address&&!a.isLoopbackAddress())addresses.put(new JSONObject().put("label",n.getName().startsWith("tun")?"VPN／UU":"Wi-Fi／热点").put("url","http://"+a.getHostAddress()+":"+port));}}
        return new JSONObject().put("hosting",s!=null).put("port",port).put("room",code).put("code",code).put("name",name).put("addresses",addresses).put("localAddress","http://127.0.0.1:"+port).put("id",instance);
    }
    private void accept(ServerSocket s){while(!s.isClosed())try{Socket c=s.accept();c.setSoTimeout(10000);if(!slots.tryAcquire()){c.close();continue;}clients.execute(()->{try(c){serve(c);}catch(Exception ignored){}finally{slots.release();}});}catch(IOException e){break;}}
    private void serve(Socket socket)throws Exception {
        InputStream in=socket.getInputStream();ByteArrayOutputStream h=new ByteArrayOutputStream();int match=0;
        while(match<4){int b=in.read();if(b<0)return;h.write(b);if(h.size()>16384)throw new IOException("Header too large");match=(b==new int[]{13,10,13,10}[match])?match+1:(b==13?1:0);}
        String[] headers=h.toString(StandardCharsets.US_ASCII).split("\r\n");
        if(!headers[0].equals("POST /api HTTP/1.1")&&!headers[0].equals("POST /api HTTP/1.0")){reply(socket,404,new JSONObject().put("error","Not found"));return;}
        int length=-1;for(int i=1;i<headers.length;i++){int colon=headers[i].indexOf(':');if(colon<1)continue;String k=headers[i].substring(0,colon).trim().toLowerCase(Locale.ROOT),v=headers[i].substring(colon+1).trim();if(k.equals("transfer-encoding"))throw new IOException("Unsupported transfer encoding");if(k.equals("content-length")){if(length!=-1)throw new IOException("Duplicate length");length=Integer.parseInt(v);}}
        if(length<0||length>2*1024*1024)throw new IOException("Invalid body length");
        byte[] body=in.readNBytes(length);if(body.length!=length)throw new EOFException();JSONObject request=new JSONObject(new String(body,StandardCharsets.UTF_8));
        if(request.optString("op").equals("create")){reply(socket,403,new JSONObject().put("error","请在房主手机上开房。"));return;}
        JSONObject result=command(request);reply(socket,200,result);
    }
    private static void reply(Socket s,int status,JSONObject value)throws IOException {byte[] body=value.toString().getBytes(StandardCharsets.UTF_8);OutputStream out=s.getOutputStream();out.write(("HTTP/1.1 "+status+" Result\r\nContent-Type: application/json; charset=utf-8\r\nContent-Length: "+body.length+"\r\nCache-Control: no-store\r\nConnection: close\r\n\r\n").getBytes(StandardCharsets.US_ASCII));out.write(body);out.flush();}
    public static JSONObject request(String address,String key,JSONObject body)throws Exception {
        URI uri=URI.create(address);if(!Arrays.asList("http","https").contains(uri.getScheme())||uri.getHost()==null||uri.getUserInfo()!=null||uri.getFragment()!=null)throw new IOException("联机地址无效。");
        HttpURLConnection c=(HttpURLConnection)uri.toURL().openConnection();try{c.setInstanceFollowRedirects(false);c.setConnectTimeout(10000);c.setReadTimeout(12000);c.setRequestMethod("POST");c.setDoOutput(true);c.setRequestProperty("Content-Type","application/json");if(!key.isEmpty())c.setRequestProperty("X-Qiban-Server-Key",key);byte[] b=body.toString().getBytes(StandardCharsets.UTF_8);if(b.length>2*1024*1024)throw new IOException("联机请求过大。");c.setFixedLengthStreamingMode(b.length);try(OutputStream out=c.getOutputStream()){out.write(b);}InputStream in=c.getResponseCode()<400?c.getInputStream():c.getErrorStream();if(in==null)throw new IOException("房主没有返回数据。");try(in){byte[] result=in.readNBytes(3*1024*1024+1);if(result.length>3*1024*1024)throw new IOException("房间数据过大。");return new JSONObject(new String(result,StandardCharsets.UTF_8));}}finally{c.disconnect();}
    }
    public void stop()throws Exception {owner.submit(()->{ServerSocket s=listener;listener=null;if(s!=null)try{s.close();}catch(IOException ignored){}engine=null;token="";code="";name="";}).get(5,TimeUnit.SECONDS);}
    @Override public void close(){try{stop();}catch(Exception ignored){}owner.shutdownNow();clients.shutdownNow();}
}
