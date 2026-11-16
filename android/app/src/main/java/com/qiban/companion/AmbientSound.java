package com.qiban.companion;
import android.Manifest;
import android.content.*;
import android.content.pm.PackageManager;
import android.content.res.AssetFileDescriptor;
import android.media.*;
import org.tensorflow.lite.Interpreter;
import org.json.*;
import java.io.*;
import java.nio.*;
import java.nio.channels.FileChannel;
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

/** Bounded local AudioSet observations; raw samples are never saved or uploaded. */
final class AmbientSound implements AutoCloseable {
    interface Observation{void value(String label,float confidence);}
    private final Context context;private final Observation observation;private final ExecutorService worker=Executors.newSingleThreadExecutor();private final AtomicInteger generation=new AtomicInteger();private volatile AudioRecord recorder;private Interpreter model;private JSONArray labels;
    AmbientSound(Context c,Observation o){context=c;observation=o;}
    void start(){int ticket=generation.incrementAndGet();worker.execute(()->listen(ticket));}
    private void listen(int ticket){if(ticket!=generation.get())return;AudioRecord audio=null;try{
        if(context.checkSelfPermission(Manifest.permission.RECORD_AUDIO)!=PackageManager.PERMISSION_GRANTED)throw new IOException("请先允许麦克风权限。");
        if(model==null){try(AssetFileDescriptor descriptor=context.getAssets().openFd("senses/yamnet.tflite");FileInputStream in=new FileInputStream(descriptor.getFileDescriptor())){MappedByteBuffer data=in.getChannel().map(FileChannel.MapMode.READ_ONLY,descriptor.getStartOffset(),descriptor.getDeclaredLength());model=new Interpreter(data,new Interpreter.Options().setNumThreads(2));model.resizeInput(0,new int[]{15600});model.allocateTensors();}try(InputStream in=context.getAssets().open("senses/labels.json")){labels=new JSONArray(new String(FilesSupport.read(in,100000),java.nio.charset.StandardCharsets.UTF_8));}if(labels.length()!=521)throw new IOException("声音分类索引无效。");}
        int min=AudioRecord.getMinBufferSize(16000,AudioFormat.CHANNEL_IN_MONO,AudioFormat.ENCODING_PCM_16BIT);int source="true".equals(((AudioManager)context.getSystemService(Context.AUDIO_SERVICE)).getProperty(AudioManager.PROPERTY_SUPPORT_AUDIO_SOURCE_UNPROCESSED))?MediaRecorder.AudioSource.UNPROCESSED:MediaRecorder.AudioSource.VOICE_RECOGNITION;audio=new AudioRecord(source,16000,AudioFormat.CHANNEL_IN_MONO,AudioFormat.ENCODING_PCM_16BIT,Math.max(min,32768));recorder=audio;if(audio.getState()!=AudioRecord.STATE_INITIALIZED)throw new IOException("麦克风正在被其他应用占用。");audio.startRecording();short[] samples=new short[15600];ByteBuffer input=ByteBuffer.allocateDirect(15600*4).order(ByteOrder.nativeOrder()),output=ByteBuffer.allocateDirect(model.getOutputTensor(0).numBytes()).order(ByteOrder.nativeOrder());int previous=-1;long last=0;
        while(ticket==generation.get()){int offset=0;while(offset<samples.length&&ticket==generation.get()){int n=audio.read(samples,offset,samples.length-offset);if(n<0)throw new IOException("环境听觉已中断。");offset+=n;}if(ticket!=generation.get())break;input.clear();double energy=0;for(short s:samples){float v=s/32768f;input.putFloat(v);energy+=v*v;}if(energy/samples.length<.000008)continue;input.rewind();output.clear();model.runForMultipleInputsOutputs(new Object[]{input},Map.of(0,output));output.rewind();FloatBuffer scores=output.asFloatBuffer();int frames=scores.remaining()/521;float[] average=new float[521];for(int f=0;f<frames;f++)for(int c=0;c<521;c++)average[c]+=scores.get()/frames;int best=0;for(int i=1;i<521;i++)if(average[i]>average[best])best=i;if(average[best]>=.35f&&!labels.getString(best).equals("Silence")&&(best!=previous||System.currentTimeMillis()-last>10000)){previous=best;last=System.currentTimeMillis();observation.value(labels.getString(best),average[best]);}}
    }catch(Exception|LinkageError error){if(ticket==generation.get())observation.value("本机环境听觉不可用："+error.getMessage(),-1);}finally{if(recorder==audio)recorder=null;if(audio!=null)audio.release();}}
    void stop(){generation.incrementAndGet();AudioRecord current=recorder;if(current!=null)try{current.stop();}catch(IllegalStateException ignored){}}
    public void close(){stop();worker.execute(()->{if(model!=null)model.close();model=null;});worker.shutdown();}
}
