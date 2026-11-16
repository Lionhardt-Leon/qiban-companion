package com.qiban.companion;
import android.app.*;
import android.content.Intent;
import android.os.IBinder;
public final class RoomHostService extends Service {
    @Override public void onCreate(){super.onCreate();NotificationManager notifications=getSystemService(NotificationManager.class);notifications.createNotificationChannel(new NotificationChannel("phone-room","手机联机房间",NotificationManager.IMPORTANCE_LOW));PendingIntent open=PendingIntent.getActivity(this,0,new Intent(this,MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),PendingIntent.FLAG_IMMUTABLE|PendingIntent.FLAG_UPDATE_CURRENT);startForeground(17,new Notification.Builder(this,"phone-room").setSmallIcon(com.qiban.companion.R.drawable.ic_qiban).setContentTitle("栖伴手机房间正在运行").setContentText("点击回到牌桌；可在 App 中关闭房间。").setContentIntent(open).setOngoing(true).build());}
    @Override public int onStartCommand(Intent intent,int flags,int id){return START_NOT_STICKY;}
    @Override public IBinder onBind(Intent intent){return null;}
}
