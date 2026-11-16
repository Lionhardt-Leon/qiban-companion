package com.qiban.companion;
import android.content.Context;
import android.net.nsd.*;
import android.net.wifi.WifiManager;
import org.json.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

final class RoomDiscovery implements AutoCloseable {
    private final NsdManager nsd;private final WifiManager.MulticastLock lock;
    private NsdManager.DiscoveryListener discovery;private NsdManager.RegistrationListener registration;
    private final Map<String,NsdServiceInfo> peers=new ConcurrentHashMap<>();private final Set<String> pending=new HashSet<>();
    private final ArrayDeque<NsdServiceInfo> queue=new ArrayDeque<>();private boolean resolving=false;private java.util.function.Consumer<JSONArray> changed;
    RoomDiscovery(Context c){nsd=(NsdManager)c.getSystemService(Context.NSD_SERVICE);WifiManager wifi=(WifiManager)c.getApplicationContext().getSystemService(Context.WIFI_SERVICE);lock=wifi.createMulticastLock("qiban-bonjour");lock.setReferenceCounted(false);}
    void advertise(JSONObject info){stopAdvertisement();NsdServiceInfo service=new NsdServiceInfo();service.setServiceName("Qiban-"+info.optString("code")+"-"+info.optString("id").substring(0,8));service.setServiceType("_qiban-cards._tcp.");service.setPort(info.optInt("port"));for(String key:List.of("id","name"))service.setAttribute(key,info.optString(key));service.setAttribute("room",info.optString("code"));service.setAttribute("version","1");registration=new NsdManager.RegistrationListener(){public void onServiceRegistered(NsdServiceInfo s){}public void onServiceUnregistered(NsdServiceInfo s){}public void onRegistrationFailed(NsdServiceInfo s,int e){}public void onUnregistrationFailed(NsdServiceInfo s,int e){}};nsd.registerService(service,NsdManager.PROTOCOL_DNS_SD,registration);}
    void start(java.util.function.Consumer<JSONArray> callback){stop();changed=callback;lock.acquire();discovery=new NsdManager.DiscoveryListener(){public void onDiscoveryStarted(String t){}public void onDiscoveryStopped(String t){}public void onStartDiscoveryFailed(String t,int e){publish();}public void onStopDiscoveryFailed(String t,int e){}public void onServiceFound(NsdServiceInfo s){enqueue(s);}public void onServiceLost(NsdServiceInfo s){peers.values().removeIf(p->p.getServiceName().equals(s.getServiceName()));publish();}};nsd.discoverServices("_qiban-cards._tcp.",NsdManager.PROTOCOL_DNS_SD,discovery);}
    private synchronized void enqueue(NsdServiceInfo service){if(pending.add(service.getServiceName()))queue.add(service);next();}
    private synchronized void next(){if(resolving||queue.isEmpty()||discovery==null)return;resolving=true;NsdServiceInfo s=queue.remove();nsd.resolveService(s,new NsdManager.ResolveListener(){public void onResolveFailed(NsdServiceInfo v,int e){finish(v);}public void onServiceResolved(NsdServiceInfo v){if("1".equals(attribute(v,"version"))&&v.getHost()!=null&&v.getPort()>0)peers.put(attribute(v,"id"),v);publish();finish(v);}private void finish(NsdServiceInfo v){synchronized(RoomDiscovery.this){pending.remove(s.getServiceName());resolving=false;next();}}});}
    private static String attribute(NsdServiceInfo s,String k){byte[] b=s.getAttributes().get(k);return b==null?"":new String(b,StandardCharsets.UTF_8);}
    private void publish(){JSONArray rows=new JSONArray();for(Map.Entry<String,NsdServiceInfo> row:peers.entrySet())try{rows.put(new JSONObject().put("id",row.getKey()).put("code",attribute(row.getValue(),"room")).put("name",attribute(row.getValue(),"name")));}catch(JSONException ignored){}if(changed!=null)changed.accept(rows);}
    String address(String id)throws Exception {NsdServiceInfo s=peers.get(id);if(s==null||s.getHost()==null)throw new java.io.IOException("附近房间已变化，请重新搜索。");String host=s.getHost().getHostAddress();return "http://"+(host.contains(":")?"["+host+"]":host)+":"+s.getPort()+"/api";}
    synchronized void stop(){if(discovery!=null){try{nsd.stopServiceDiscovery(discovery);}catch(RuntimeException ignored){}discovery=null;}peers.clear();queue.clear();pending.clear();if(lock.isHeld())lock.release();}
    void stopAdvertisement(){if(registration!=null){try{nsd.unregisterService(registration);}catch(RuntimeException ignored){}registration=null;}}
    public void close(){stop();stopAdvertisement();}
}
