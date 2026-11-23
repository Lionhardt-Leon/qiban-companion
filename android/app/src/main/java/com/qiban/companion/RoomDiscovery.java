package com.qiban.companion;
import android.content.Context;
import android.net.nsd.*;
import android.net.wifi.WifiManager;
import android.os.Handler;
import android.os.Looper;
import org.json.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.BiConsumer;

final class RoomDiscovery implements AutoCloseable {
    private final NsdManager nsd;private final WifiManager.MulticastLock lock;
    private NsdManager.DiscoveryListener discovery;private NsdManager.RegistrationListener registration;
    private final Map<String,NsdServiceInfo> peers=new ConcurrentHashMap<>();private final Map<String,Pending> pending=new HashMap<>();
    private final ArrayDeque<Pending> queue=new ArrayDeque<>();
    private record Pending(NsdServiceInfo service) {}
    // Search state and NSD callbacks belong to the main thread. address() reads peers from IO.
    private final Handler main = new Handler(Looper.getMainLooper());
    private boolean resolving;
    private BiConsumer<JSONArray,String> changed;
    RoomDiscovery(Context c){nsd=(NsdManager)c.getSystemService(Context.NSD_SERVICE);WifiManager wifi=(WifiManager)c.getApplicationContext().getSystemService(Context.WIFI_SERVICE);lock=wifi.createMulticastLock("qiban-bonjour");lock.setReferenceCounted(false);}
    void advertise(JSONObject info){stopAdvertisement();NsdServiceInfo service=new NsdServiceInfo();service.setServiceName("Qiban-"+info.optString("code")+"-"+info.optString("id").substring(0,8));service.setServiceType("_qiban-cards._tcp.");service.setPort(info.optInt("port"));for(String key:List.of("id","name"))service.setAttribute(key,info.optString(key));service.setAttribute("room",info.optString("code"));service.setAttribute("version","1");registration=new NsdManager.RegistrationListener(){public void onServiceRegistered(NsdServiceInfo s){}public void onServiceUnregistered(NsdServiceInfo s){}public void onRegistrationFailed(NsdServiceInfo s,int e){}public void onUnregistrationFailed(NsdServiceInfo s,int e){}};nsd.registerService(service,NsdManager.PROTOCOL_DNS_SD,registration);}
    void start(BiConsumer<JSONArray,String> callback) {
        stop();
        changed = callback;
        discovery = new NsdManager.DiscoveryListener() {
            public void onDiscoveryStarted(String type) {}
            public void onDiscoveryStopped(String type) {}
            public void onStartDiscoveryFailed(String type, int error) {
                main.post(() -> fail(this));
            }
            public void onStopDiscoveryFailed(String type, int error) {}
            public void onServiceFound(NsdServiceInfo service) {
                main.post(() -> {
                    if (discovery != this) return;
                    Pending request = new Pending(service);
                    if (pending.putIfAbsent(service.getServiceName(), request) == null) queue.add(request);
                    next();
                });
            }
            public void onServiceLost(NsdServiceInfo service) {
                main.post(() -> {
                    if (discovery != this) return;
                    Pending lost = pending.remove(service.getServiceName());
                    if (lost != null) queue.removeIf(request -> request == lost);
                    peers.values().removeIf(peer -> peer.getServiceName().equals(service.getServiceName()));
                    publish();
                });
            }
        };
        try {
            lock.acquire();
            nsd.discoverServices("_qiban-cards._tcp.", NsdManager.PROTOCOL_DNS_SD, discovery);
        } catch (RuntimeException error) {
            fail(discovery);
        }
    }

    private void fail(NsdManager.DiscoveryListener session) {
        if (discovery != session) return;
        var callback = changed;
        stop();
        callback.accept(new JSONArray(), "无法搜索附近房间。请检查本地网络权限后重试，或使用手动地址连接。");
    }

    private void next() {
        var session = discovery;
        while (!resolving && session != null && !queue.isEmpty()) {
            Pending request = queue.remove();
            NsdServiceInfo service = request.service();
            resolving = true;
            try {
                nsd.resolveService(service, new NsdManager.ResolveListener() {
                    public void onResolveFailed(NsdServiceInfo value, int error) {
                        main.post(() -> finish(null));
                    }
                    public void onServiceResolved(NsdServiceInfo value) {
                        main.post(() -> finish(value));
                    }
                    private void finish(NsdServiceInfo value) {
                        // The previous resolve still occupies NSD until it calls back.
                        resolving = false;
                        if (discovery == session && pending.get(service.getServiceName()) == request) {
                            pending.remove(service.getServiceName());
                            if (value != null && "1".equals(attribute(value,"version"))
                                    && value.getHost() != null && value.getPort() > 0) {
                                peers.put(attribute(value,"id"), value);
                                publish();
                            }
                        }
                        next();
                    }
                });
            } catch (RuntimeException error) {
                pending.remove(service.getServiceName());
                resolving = false;
            }
        }
    }
    private static String attribute(NsdServiceInfo s,String k){byte[] b=s.getAttributes().get(k);return b==null?"":new String(b,StandardCharsets.UTF_8);}
    private void publish(){JSONArray rows=new JSONArray();for(Map.Entry<String,NsdServiceInfo> row:peers.entrySet())try{rows.put(new JSONObject().put("id",row.getKey()).put("code",attribute(row.getValue(),"room")).put("name",attribute(row.getValue(),"name")));}catch(JSONException ignored){}if(changed!=null)changed.accept(rows,null);}
    String address(String id)throws Exception {NsdServiceInfo s=peers.get(id);if(s==null||s.getHost()==null)throw new java.io.IOException("附近房间已变化，请重新搜索。");String host=s.getHost().getHostAddress();return "http://"+(host.contains(":")?"["+host+"]":host)+":"+s.getPort()+"/api";}
    // Closing the discovery dialog stops browsing, but play continues on the joined route.
    private String joinedId, joinedToken, joinedAddress;
    JSONObject request(String id, JSONObject body) throws Exception {
        String op = body.getString("op");
        String token = body.optString("token");
        String target;
        synchronized (this) {
            target = !op.equals("join") && id.equals(joinedId) && token.equals(joinedToken)
                    ? joinedAddress : address(id);
        }
        JSONObject result = PhoneRooms.request(target, "", body);
        synchronized (this) {
            if (op.equals("join") && !result.optString("token").isEmpty() && result.has("state")) {
                joinedId = id;
                joinedToken = result.getString("token");
                joinedAddress = target;
            } else if (op.equals("leave") && result.optBoolean("left") && id.equals(joinedId) && token.equals(joinedToken)) {
                joinedId = joinedToken = joinedAddress = null;
            }
        }
        return result;
    }
    void stop() {
        var session = discovery;
        discovery = null;
        changed = null;
        peers.clear();
        queue.clear();
        pending.clear();
        try {
            if (session != null) nsd.stopServiceDiscovery(session);
        } catch (RuntimeException ignored) {
            // NSD may have already stopped a failed search.
        } finally {
            if (lock.isHeld()) lock.release();
        }
    }
    void stopAdvertisement(){if(registration!=null){try{nsd.unregisterService(registration);}catch(RuntimeException ignored){}registration=null;}}
    public void close() {
        stop();
        stopAdvertisement();
        synchronized (this) {
            joinedId = joinedToken = joinedAddress = null;
        }
    }
}
