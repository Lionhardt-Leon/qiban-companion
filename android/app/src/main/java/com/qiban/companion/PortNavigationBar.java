package com.qiban.companion;

import android.content.Context;
import android.graphics.*;
import android.view.*;
import android.widget.*;

/** The navigation chrome of ChatModuleView / CardGameView, in Android density units. */
final class PortNavigationBar extends FrameLayout {
    final TextView title,tts,back,importArt;
    final View menu;
    private final LinearLayout trailing;
    private final int accent=Color.rgb(76,69,158);
    private int dp(int value){return Math.round(value*getResources().getDisplayMetrics().density);}
    PortNavigationBar(Context context,Runnable returnHome,Runnable toggleTTS,View.OnClickListener showMenu,Runnable importCards){
        super(context);setBackgroundColor(Color.rgb(250,250,253));
        title=text("通讯",17,Color.rgb(68,62,146));title.setTypeface(null,Typeface.BOLD);
        LayoutParams center=new LayoutParams(-2,-1,Gravity.CENTER);addView(title,center);
        back=text("‹ 陪伴",17,accent);back.setContentDescription("返回陪伴");back.setOnClickListener(v->returnHome.run());
        addView(back,new LayoutParams(dp(92),-1,Gravity.START));
        trailing=new LinearLayout(context);trailing.setGravity(Gravity.CENTER_VERTICAL);
        tts=text("TTS",17,accent);tts.setPadding(dp(6),0,dp(6),0);tts.setOnClickListener(v->toggleTTS.run());trailing.addView(tts,new LinearLayout.LayoutParams(-2,-1));
        menu=new View(context){final Paint p=new Paint(3);@Override protected void onDraw(Canvas c){p.setColor(accent);p.setStrokeWidth(dp(1));p.setStyle(Paint.Style.STROKE);float x=getWidth()/2f,y=getHeight()/2f,r=dp(10);c.drawCircle(x,y,r,p);p.setStyle(Paint.Style.FILL);for(int i=-1;i<=1;i++)c.drawCircle(x+i*dp(4),y,dp(1),p);}};
        menu.setContentDescription("更多");menu.setOnClickListener(showMenu);trailing.addView(menu,new LinearLayout.LayoutParams(dp(44),-1));
        importArt=text("导入立绘",17,accent);importArt.setPadding(dp(8),0,dp(14),0);importArt.setOnClickListener(v->importCards.run());trailing.addView(importArt,new LinearLayout.LayoutParams(-2,-1));
        addView(trailing,new LayoutParams(-2,-1,Gravity.END));
    }
    private TextView text(String value,int size,int color){TextView v=new TextView(getContext());v.setText(value);v.setTextSize(size);v.setTextColor(color);v.setGravity(Gravity.CENTER);v.setMinHeight(dp(44));return v;}
    void surface(String page){boolean chat=page.equals("chat");title.setText(chat?"通讯":"游戏");tts.setVisibility(chat?VISIBLE:GONE);menu.setVisibility(chat?VISIBLE:GONE);importArt.setVisibility(chat?GONE:VISIBLE);}
    @Override protected void onDraw(Canvas canvas){super.onDraw(canvas);Paint p=new Paint();p.setColor(0x1a000000);canvas.drawRect(0,getHeight()-1,getWidth(),getHeight(),p);}
}
