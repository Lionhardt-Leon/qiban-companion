package com.qiban.companion;
import android.Manifest;
import android.content.*;
import android.content.pm.PackageManager;
import android.graphics.*;
import android.hardware.camera2.*;
import android.media.*;
import android.os.*;
import android.speech.*;
import android.util.Size;
import android.view.*;
import android.widget.FrameLayout;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.label.*;
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions;
import org.json.*;
import java.io.*;
import java.nio.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;

final class Sensors implements AutoCloseable {
    static final class Snapshot {final String base64,labels;Snapshot(String b,String l){base64=b;labels=l;}}
    private final MainActivity app;private final Handler main=new Handler(Looper.getMainLooper());private final HandlerThread cameraThread=new HandlerThread("qiban-camera");private final Handler cameraHandler;
    private final AmbientSound ambient;private boolean wantedHearing=false,pendingHearing=false;private volatile boolean foreground=true;private volatile String sound="";private volatile long soundAt=0;private final java.util.concurrent.atomic.AtomicInteger asrGeneration=new java.util.concurrent.atomic.AtomicInteger();
    private final ImageLabeler labeler=ImageLabeling.getClient(new ImageLabelerOptions.Builder().setConfidenceThreshold(.6f).build());
    private CameraDevice camera;private CameraCaptureSession session;private ImageReader reader;private TextureView preview;private FrameLayout cameraFrame;private Surface previewSurface;
    private boolean wanted=false;private CompletableFuture<Boolean> permissionCamera;private CompletableFuture<Snapshot> captured;private int sensorOrientation=90;
    private SpeechRecognizer recognizer;private boolean listening=false,pendingVoice=false,resumeMicrophone=false,stagePlaying=false,closed=false;private volatile boolean wantedVoice=false;private final AtomicBoolean recording=new AtomicBoolean();private volatile AudioRecord recorder;private final ExecutorService audioWorker=Executors.newSingleThreadExecutor();
    Sensors(MainActivity a){app=a;cameraThread.start();cameraHandler=new Handler(cameraThread.getLooper());ambient=new AmbientSound(a,(label,confidence)->{if(confidence<0){app.notice(label);return;}sound=label+" · "+Math.round(confidence*100)+"%";soundAt=System.currentTimeMillis();app.homeEvent(MainActivity.json("type","sound","label",sound));});}
    String soundSummary(){return System.currentTimeMillis()-soundAt<30000?sound:"最近没有环境声音观察";}
    void toggleHearing(){wantedHearing=!wantedHearing;if(wantedHearing&&app.checkSelfPermission(Manifest.permission.RECORD_AUDIO)!=PackageManager.PERMISSION_GRANTED){pendingHearing=true;app.requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO},302);return;}if(wantedHearing)resumeHearing();else ambient.stop();app.homeEvent(MainActivity.json("type","hearing","enabled",wantedHearing));}
    void speechChanged(){main.post(this::playbackChanged);}
    void stagePlayback(boolean playing){
        main.post(()->{if(foreground&&!closed){stagePlaying=playing;playbackChanged();}});
    }
    private void playbackChanged(){
        if(!foreground||closed)return;
        if(stagePlaying||app.speech.isBusy()){ambient.stop();cancelRecognition();}
        else {main.postDelayed(this::resumeHearing,400);replyFinished();}
    }
    private void resumeHearing(){if(foreground&&!closed&&!stagePlaying&&wantedHearing&&!listening&&!recording.get()&&!app.speech.isBusy()&&app.checkSelfPermission(Manifest.permission.RECORD_AUDIO)==PackageManager.PERMISSION_GRANTED)ambient.start();}
    void toggleCamera(CompletableFuture<Boolean> result){
        if(closed||!foreground){result.complete(false);return;}
        wanted=!wanted;
        if(!wanted){if(permissionCamera!=null){permissionCamera.complete(false);permissionCamera=null;}pauseCamera();result.complete(false);return;}
        if(app.checkSelfPermission(Manifest.permission.CAMERA)!=PackageManager.PERMISSION_GRANTED){
            permissionCamera=result;app.requestPermissions(new String[]{Manifest.permission.CAMERA},301);return;
        }
        open(result);
    }
    private void open(CompletableFuture<Boolean> result){
        if(cameraFrame!=null)return;
        opening=result;
        long generation=++cameraGeneration;
        main.postDelayed(()->{if(cameraGeneration==generation&&!result.isDone()){
            result.completeExceptionally(new IOException("镜头启动超时。"));wanted=false;pauseCamera();
        }},25000);
        try{cameraFrame=new FrameLayout(app);android.widget.LinearLayout column=new android.widget.LinearLayout(app);column.setOrientation(android.widget.LinearLayout.VERTICAL);FrameLayout previewBox=new FrameLayout(app);preview=new TextureView(app);previewBox.addView(preview,new FrameLayout.LayoutParams(-1,-1));android.widget.TextView label=new android.widget.TextView(app);label.setText("后置主摄 · 1×");label.setTextColor(Color.WHITE);label.setTextSize(9);label.setPadding(app.dp(5),app.dp(5),app.dp(5),app.dp(5));label.setBackgroundColor(0x80000000);FrameLayout.LayoutParams caption=new FrameLayout.LayoutParams(-2,-2,Gravity.TOP|Gravity.START);caption.topMargin=caption.leftMargin=app.dp(5);previewBox.addView(label,caption);column.addView(previewBox,new android.widget.LinearLayout.LayoutParams(-1,app.dp(164)));android.widget.TextView describe=new android.widget.TextView(app);describe.setText("看看镜头");describe.setTextColor(Color.WHITE);describe.setTextSize(13);describe.setGravity(Gravity.CENTER);describe.setPadding(app.dp(7),app.dp(7),app.dp(7),app.dp(7));describe.setOnClickListener(v->{if(!app.conversation.busy())app.homeEvent(MainActivity.json("type","cameraDescribe"));});android.graphics.drawable.GradientDrawable glass=new android.graphics.drawable.GradientDrawable();glass.setColor(0xcc332d3b);glass.setCornerRadius(app.dp(18));describe.setBackground(glass);android.widget.LinearLayout.LayoutParams action=new android.widget.LinearLayout.LayoutParams(-1,-2);action.topMargin=app.dp(6);column.addView(describe,action);cameraFrame.addView(column,new FrameLayout.LayoutParams(-1,-2));FrameLayout.LayoutParams params=new FrameLayout.LayoutParams(app.dp(112),-2,Gravity.END|Gravity.TOP);params.topMargin=app.dp(124);params.rightMargin=app.dp(18);app.overlay().addView(cameraFrame,params);preview.setSurfaceTextureListener(new TextureView.SurfaceTextureListener(){public void onSurfaceTextureAvailable(SurfaceTexture t,int w,int h){cameraHandler.post(()->openCamera(t,generation,result));}public void onSurfaceTextureSizeChanged(SurfaceTexture t,int w,int h){}public boolean onSurfaceTextureDestroyed(SurfaceTexture t){main.post(()->{if(generation==cameraGeneration){wanted=false;pauseCamera();}if(!cameraHandler.post(t::release))t.release();});return false;}public void onSurfaceTextureUpdated(SurfaceTexture t){}});}catch(Exception e){result.completeExceptionally(e);wanted=false;pauseCamera();}}
    // All Camera2 handles are owned by cameraHandler. The UI invalidates a generation
    // before removing its TextureView so delayed callbacks cannot publish into its successor.
    private volatile long cameraGeneration;
    private CompletableFuture<Boolean> opening;
    private int pendingDevices;
    private boolean retiring;

    private void openCamera(SurfaceTexture texture, long generation, CompletableFuture<Boolean> result){
        if(generation!=cameraGeneration)return;
        try {
            CameraManager manager=(CameraManager)app.getSystemService(Context.CAMERA_SERVICE);
            String selected=null;
            for(String id:manager.getCameraIdList()){
                CameraCharacteristics info=manager.getCameraCharacteristics(id);
                if(Objects.equals(info.get(CameraCharacteristics.LENS_FACING),CameraCharacteristics.LENS_FACING_BACK)){
                    selected=id;
                    Integer orientation=info.get(CameraCharacteristics.SENSOR_ORIENTATION);
                    sensorOrientation=orientation==null?90:orientation;
                    break;
                }
            }
            if(selected==null)throw new IOException("未找到后置摄像头。");
            CameraCharacteristics info=manager.getCameraCharacteristics(selected);
            Size[] sizes=info.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP).getOutputSizes(ImageFormat.JPEG);
            Size chosen=Arrays.stream(sizes).filter(s->s.getWidth()<=1280&&s.getHeight()<=1280)
                .max(Comparator.comparingLong(s->(long)s.getWidth()*s.getHeight())).orElse(sizes[sizes.length-1]);
            reader=ImageReader.newInstance(chosen.getWidth(),chosen.getHeight(),ImageFormat.JPEG,2);
            reader.setOnImageAvailableListener(this::image,cameraHandler);
            texture.setDefaultBufferSize(640,480);previewSurface=new Surface(texture);
            if(app.checkSelfPermission(Manifest.permission.CAMERA)!=PackageManager.PERMISSION_GRANTED)
                throw new IOException("请允许摄像头权限。");
            manager.openCamera(selected,new CameraDevice.StateCallback(){
                private boolean awaitingDevice=true;
                private void arrived(){
                    if(awaitingDevice){awaitingDevice=false;pendingDevices--;}
                }
                public void onOpened(CameraDevice device){
                    arrived();
                    if(generation!=cameraGeneration){device.close();finishRetirement();return;}
                    camera=device;
                    try {
                        device.createCaptureSession(List.of(previewSurface,reader.getSurface()),new CameraCaptureSession.StateCallback(){
                            public void onConfigured(CameraCaptureSession configured){
                                if(generation!=cameraGeneration||camera!=device){configured.close();return;}
                                try {
                                    CaptureRequest.Builder request=device.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                                    request.addTarget(previewSurface);
                                    request.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE);
                                    configured.setRepeatingRequest(request.build(),null,cameraHandler);
                                    session=configured;
                                    main.post(()->{if(generation==cameraGeneration){
                                        result.complete(true);
                                        app.homeEvent(MainActivity.json("type","camera","enabled",true));
                                    }});
                                } catch(Exception e){configured.close();failCamera(generation,result,e);}
                            }
                            public void onConfigureFailed(CameraCaptureSession failed){
                                failed.close();failCamera(generation,result,new IOException("镜头预览启动失败。"));
                            }
                        },cameraHandler);
                    } catch(Exception e){failCamera(generation,result,e);}
                }
                private void lost(CameraDevice device,Exception error){
                    arrived();device.close();failCamera(generation,result,error);finishRetirement();
                }
                public void onDisconnected(CameraDevice device){lost(device,new IOException("镜头已断开。"));}
                public void onError(CameraDevice device,int error){lost(device,new IOException("镜头被占用或不可用："+error));}
            },cameraHandler);
            pendingDevices++;
        } catch(Exception e){failCamera(generation,result,e);}
    }
    private void failCamera(long generation,CompletableFuture<Boolean> result,Exception error){
        if(generation!=cameraGeneration)return;
        closeCameraResources();
        main.post(()->{
            if(generation!=cameraGeneration)return;
            if(!result.completeExceptionally(error))app.notice(error.getMessage());
            wanted=false;pauseCamera();
        });
    }
    private void finishRetirement(){if(retiring&&pendingDevices==0)cameraThread.quitSafely();}
    private static Bitmap uprightJPEG(byte[] bytes)throws Exception {Bitmap bitmap=BitmapFactory.decodeByteArray(bytes,0,bytes.length);if(bitmap==null)return null;ExifInterface exif=new ExifInterface(new ByteArrayInputStream(bytes));int value=exif.getAttributeInt(ExifInterface.TAG_ORIENTATION,ExifInterface.ORIENTATION_NORMAL);Matrix rotation=new Matrix();switch(value){case ExifInterface.ORIENTATION_ROTATE_90:rotation.postRotate(90);break;case ExifInterface.ORIENTATION_ROTATE_180:rotation.postRotate(180);break;case ExifInterface.ORIENTATION_ROTATE_270:rotation.postRotate(270);break;case ExifInterface.ORIENTATION_FLIP_HORIZONTAL:rotation.postScale(-1,1);break;case ExifInterface.ORIENTATION_FLIP_VERTICAL:rotation.postScale(1,-1);break;default:return bitmap;}Bitmap upright=Bitmap.createBitmap(bitmap,0,0,bitmap.getWidth(),bitmap.getHeight(),rotation,true);if(upright!=bitmap)bitmap.recycle();return upright;}
    private void image(ImageReader source){
        if(source!=reader)return;
        CompletableFuture<Snapshot> request=captured;
        try(Image image=source.acquireLatestImage()){
            if(image==null||request==null||request.isDone())return;
            ByteBuffer buffer=image.getPlanes()[0].getBuffer();byte[] bytes=new byte[buffer.remaining()];buffer.get(bytes);
            Bitmap raw=uprightJPEG(bytes);if(raw==null){captured=null;request.completeExceptionally(new IOException("镜头画面未能解码。"));return;}int width=raw.getWidth(),height=raw.getHeight();float ratio=Math.min(1f,1024f/Math.max(width,height));Bitmap small=ratio<1?Bitmap.createScaledBitmap(raw,Math.max(1,(int)(width*ratio)),Math.max(1,(int)(height*ratio)),true):raw;ByteArrayOutputStream out=new ByteArrayOutputStream();small.compress(Bitmap.CompressFormat.JPEG,78,out);String base64=android.util.Base64.encodeToString(out.toByteArray(),android.util.Base64.NO_WRAP);labeler.process(InputImage.fromBitmap(small,0)).addOnSuccessListener(labels->{String text=labels.stream().limit(8).map(l->l.getText()+" ("+Math.round(l.getConfidence()*100)+"%)").collect(java.util.stream.Collectors.joining(", "));finishImage(request,new Snapshot(base64,text));small.recycle();if(raw!=small)raw.recycle();}).addOnFailureListener(error->{finishImage(request,new Snapshot(base64,""));small.recycle();if(raw!=small)raw.recycle();});
        }catch(Exception error){if(request!=null){captured=null;request.completeExceptionally(error);}}
    }
    private void finishImage(CompletableFuture<Snapshot> request,Snapshot value){
        cameraHandler.post(()->{if(captured==request){request.complete(value);captured=null;}});
    }
    Snapshot snapshot()throws Exception {
        CompletableFuture<Snapshot> result=new CompletableFuture<>();
        long generation=cameraGeneration;
        if(!cameraHandler.post(()->{
            if(generation!=cameraGeneration||session==null){result.complete(null);return;}
            if(captured!=null&&!captured.isDone()){result.completeExceptionally(new IOException("上一张镜头画面仍在处理中。"));return;}
            captured=result;
            try{
                CaptureRequest.Builder request=camera.createCaptureRequest(CameraDevice.TEMPLATE_STILL_CAPTURE);
                request.addTarget(reader.getSurface());int rotation=app.getWindowManager().getDefaultDisplay().getRotation()*90;
                request.set(CaptureRequest.JPEG_ORIENTATION,(sensorOrientation-rotation+360)%360);
                request.set(CaptureRequest.JPEG_QUALITY,(byte)80);session.capture(request.build(),null,cameraHandler);
            }catch(Exception e){result.completeExceptionally(e);}
        }))return null;
        try{Snapshot value=result.get(10,TimeUnit.SECONDS);return generation==cameraGeneration?value:null;}
        catch(TimeoutException|InterruptedException e){
            cameraHandler.post(()->{if(result==captured&&!result.isDone()){
                // Retire the reader before accepting another capture: a late JPEG has no request ID.
                closeCameraResources();
                main.post(()->{if(generation==cameraGeneration){wanted=false;pauseCamera();}});
            }});
            throw e;
        }
    }
    private void closeCameraResources(){
        if(captured!=null){captured.cancel(false);captured=null;}
        if(session!=null){session.close();session=null;}
        if(camera!=null){camera.close();camera=null;}
        if(reader!=null){reader.close();reader=null;}
        if(previewSurface!=null){previewSurface.release();previewSurface=null;}
    }
    private void pauseCamera(){
        cameraGeneration++;
        if(opening!=null){opening.complete(false);opening=null;}
        cameraHandler.post(this::closeCameraResources);
        FrameLayout old=cameraFrame;cameraFrame=null;preview=null;
        if(old!=null)app.overlay().removeView(old);
        app.homeEvent(MainActivity.json("type","camera","enabled",false));
    }
    void voiceCall(boolean enabled){if(closed)return;wantedVoice=enabled;if(!enabled){pendingVoice=false;resumeMicrophone=false;cancelRecognition();app.homeEvent(MainActivity.json("type","voiceCall","enabled",false));return;}if(app.checkSelfPermission(Manifest.permission.RECORD_AUDIO)!=PackageManager.PERMISSION_GRANTED){pendingVoice=true;app.requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO},302);return;}app.homeEvent(MainActivity.json("type","voiceCall","enabled",true));listen();}
    private final Runnable resumeVoice=this::continueCall;
    private void continueCall(){
        if(!foreground||!wantedVoice||listening||recording.get()||closed)return;
        if(stagePlaying||app.conversation.busy()||app.speech.isBusy()){replyFinished();return;}
        listen();
    }
    void replyFinished(){
        main.removeCallbacks(resumeVoice);
        if(wantedVoice&&foreground&&!closed)main.postDelayed(resumeVoice,700);
    }
    String localVision(String dataURL)throws Exception {
        if(dataURL==null||dataURL.isEmpty()){Snapshot current=snapshot();if(current==null)throw new IOException("请先选一张照片或开启后置镜头。");dataURL="data:image/jpeg;base64,"+current.base64;}
        if(!dataURL.startsWith("data:image/jpeg;base64,")||dataURL.length()>5_000_000)throw new IOException("图片无效或过大。");byte[] bytes=android.util.Base64.decode(dataURL.substring(dataURL.indexOf(',')+1),android.util.Base64.DEFAULT);Bitmap bitmap=BitmapFactory.decodeByteArray(bytes,0,bytes.length);if(bitmap==null||bitmap.getWidth()>2048||bitmap.getHeight()>2048)throw new IOException("图片尺寸无效。");String result=LocalVision.analyze(bitmap);bitmap.recycle();return result;
    }
    void listen(){if(!foreground||closed)return;if(listening||recording.get()){stopListening();return;}if(app.checkSelfPermission(Manifest.permission.RECORD_AUDIO)!=PackageManager.PERMISSION_GRANTED){app.requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO},302);return;}ambient.stop();app.speech.stop();int ticket=asrGeneration.incrementAndGet();listening=true;audioWorker.execute(()->{try{JSONObject remote=app.network.service("asr");if(remote!=null&&remote.optBoolean("enabled")){remoteRecord(remote,ticket);return;}main.post(()->{if(ticket!=asrGeneration.get()||!foreground)return;try{systemListen();}catch(RuntimeException e){finishRecognition();app.notice(e.getMessage());}});}catch(Exception e){main.post(()->{if(ticket==asrGeneration.get()){recording.set(false);finishRecognition();app.notice(e.getMessage());}});}});}
    private void systemListen(){if(!SpeechRecognizer.isRecognitionAvailable(app)){finishRecognition();app.notice("手机没有系统识别服务，可在独立接口中配置 ASR。");return;}listening=true;boolean offline=Build.VERSION.SDK_INT>=31&&SpeechRecognizer.isOnDeviceRecognitionAvailable(app);recognizer=offline?SpeechRecognizer.createOnDeviceSpeechRecognizer(app):SpeechRecognizer.createSpeechRecognizer(app);final SpeechRecognizer owner=recognizer;recognizer.setRecognitionListener(new RecognitionListener(){public void onReadyForSpeech(Bundle p){if(recognizer!=owner)return;app.homeEvent(MainActivity.json("type","listening","value",true,"mode",offline?"本机离线识别":"系统识别 · 优先离线"));}public void onBeginningOfSpeech(){}public void onRmsChanged(float rms){if(recognizer!=owner)return;app.homeEvent(MainActivity.json("type","sound","label",rms>4?"正在说话":"倾听中"));}public void onBufferReceived(byte[] b){}public void onEndOfSpeech(){}public void onError(int error){if(recognizer!=owner)return;wantedVoice=false;app.homeEvent(MainActivity.json("type","voiceCall","enabled",false));finishRecognition();app.notice("语音识别未完成："+error+"。可重试或配置独立 ASR。");}public void onResults(Bundle result){if(recognizer!=owner)return;ArrayList<String> values=result.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);finishRecognition();if(values!=null&&!values.isEmpty())app.homeEvent(MainActivity.json("type","transcript","text",values.get(0)));}public void onPartialResults(Bundle result){}public void onEvent(int type,Bundle p){}});Intent intent=new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,RecognizerIntent.LANGUAGE_MODEL_FREE_FORM).putExtra(RecognizerIntent.EXTRA_LANGUAGE,"zh-CN").putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE,true).putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS,false);recognizer.startListening(intent);}
    private void finishRecognition(){listening=false;if(recognizer!=null){recognizer.destroy();recognizer=null;}app.homeEvent(MainActivity.json("type","listening","value",false));resumeHearing();}
    private void remoteRecord(JSONObject profile,int ticket)throws Exception {if(app.checkSelfPermission(Manifest.permission.RECORD_AUDIO)!=PackageManager.PERMISSION_GRANTED)throw new IOException("请先允许麦克风权限。");if(!recording.compareAndSet(false,true))return;if(ticket!=asrGeneration.get()){recording.set(false);return;}int min=AudioRecord.getMinBufferSize(16000,AudioFormat.CHANNEL_IN_MONO,AudioFormat.ENCODING_PCM_16BIT);AudioRecord audio=new AudioRecord(MediaRecorder.AudioSource.VOICE_RECOGNITION,16000,AudioFormat.CHANNEL_IN_MONO,AudioFormat.ENCODING_PCM_16BIT,Math.max(min,8192));recorder=audio;ByteArrayOutputStream pcm=new ByteArrayOutputStream();try{audio.startRecording();app.homeEvent(MainActivity.json("type","listening","value",true,"mode","独立 ASR · 最长30秒，再次点击结束"));byte[] buffer=new byte[4096];boolean heard=false;long silence=System.currentTimeMillis();while(ticket==asrGeneration.get()&&recording.get()&&pcm.size()<16000*2*30){int n=audio.read(buffer,0,Math.min(buffer.length,16000*2*30-pcm.size()));if(n<0)throw new IOException("录音中断。");pcm.write(buffer,0,n);double energy=0;for(int i=0;i+1<n;i+=2){short sample=(short)((buffer[i]&255)|(buffer[i+1]<<8));energy+=(double)sample*sample;}double rms=Math.sqrt(energy/Math.max(1,n/2));if(rms>420){heard=true;silence=System.currentTimeMillis();}else if(heard&&wantedVoice&&System.currentTimeMillis()-silence>900)break;}}finally{recording.set(false);recorder=null;audio.release();app.homeEvent(MainActivity.json("type","listening","value",false));}if(ticket!=asrGeneration.get()||!foreground)return;if(pcm.size()<3200){main.post(()->{if(ticket==asrGeneration.get())finishRecognition();});return;}
        ByteBuffer wav=ByteBuffer.allocate(44+pcm.size()).order(ByteOrder.LITTLE_ENDIAN);wav.put("RIFF".getBytes(StandardCharsets.US_ASCII)).putInt(36+pcm.size()).put("WAVEfmt ".getBytes(StandardCharsets.US_ASCII)).putInt(16).putShort((short)1).putShort((short)1).putInt(16000).putInt(32000).putShort((short)2).putShort((short)16).put("data".getBytes(StandardCharsets.US_ASCII)).putInt(pcm.size()).put(pcm.toByteArray());String boundary="qiban-"+UUID.randomUUID();ByteArrayOutputStream body=new ByteArrayOutputStream();if(profile.optString("apiProtocol").equals("openAITranscription")){body.write(("--"+boundary+"\r\nContent-Disposition: form-data; name=\"model\"\r\n\r\n"+profile.optString("model")+"\r\n--"+boundary+"\r\nContent-Disposition: form-data; name=\"response_format\"\r\n\r\njson\r\n").getBytes(StandardCharsets.UTF_8));}body.write(("--"+boundary+"\r\nContent-Disposition: form-data; name=\"file\"; filename=\"speech.wav\"\r\nContent-Type: audio/wav\r\n\r\n").getBytes(StandardCharsets.UTF_8));body.write(wav.array());body.write(("\r\n--"+boundary+"--\r\n").getBytes(StandardCharsets.UTF_8));String result=new JSONObject(new String(app.network.exchange(app.network.serviceURL(profile),Map.of("Authorization","Bearer "+app.network.key(profile),"Content-Type","multipart/form-data; boundary="+boundary),body.toByteArray(),"POST",64000),StandardCharsets.UTF_8)).getString("text");main.post(()->{if(ticket!=asrGeneration.get()||!foreground)return;finishRecognition();app.homeEvent(MainActivity.json("type","transcript","text",result));});}
    void stopListening(){
        if(!recording.getAndSet(false))cancelRecognition();
    }
    private void cancelRecognition(){
        asrGeneration.incrementAndGet();recording.set(false);
        if(recognizer!=null){SpeechRecognizer old=recognizer;recognizer=null;old.cancel();old.destroy();}
        if(listening)finishRecognition();
    }
    void permissions(int request,int[] grants){boolean granted=grants.length>0&&grants[0]==PackageManager.PERMISSION_GRANTED;if(request==301&&permissionCamera!=null){CompletableFuture<Boolean> result=permissionCamera;permissionCamera=null;if(granted&&wanted&&!closed){if(foreground)open(result);else permissionCamera=result;}else{wanted=false;result.complete(false);}}if(request==302&&!closed){if(pendingVoice){pendingVoice=false;if(granted&&!foreground){wantedVoice=true;resumeMicrophone=true;}else voiceCall(granted);}else if(pendingHearing){pendingHearing=false;wantedHearing=granted;if(granted)resumeHearing();app.homeEvent(MainActivity.json("type","hearing","enabled",wantedHearing));}else if(granted){if(foreground)listen();else resumeMicrophone=true;}}}
    void pause(){foreground=false;resumeMicrophone=false;stagePlaying=false;main.removeCallbacks(resumeVoice);if(permissionCamera==null)wanted=false;wantedVoice=false;app.homeEvent(MainActivity.json("type","voiceCall","enabled",false));ambient.stop();cancelRecognition();pauseCamera();}
    void resume(){if(closed)return;foreground=true;if(resumeMicrophone){resumeMicrophone=false;if(wantedVoice)voiceCall(true);else listen();}resumeHearing();if(wanted&&!closed&&cameraFrame==null&&app.checkSelfPermission(Manifest.permission.CAMERA)==PackageManager.PERMISSION_GRANTED){CompletableFuture<Boolean> result=permissionCamera!=null?permissionCamera:new CompletableFuture<>();permissionCamera=null;result.exceptionally(error->{app.notice(error.getMessage());return false;});open(result);}}
    public void close(){closed=true;main.removeCallbacksAndMessages(null);wanted=false;wantedHearing=false;pause();ambient.close();if(permissionCamera!=null){permissionCamera.complete(false);permissionCamera=null;}cameraHandler.post(()->{retiring=true;labeler.close();finishRetirement();});audioWorker.shutdownNow();}
}
