package com.qiban.companion;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.*;
import android.hardware.*;
import android.hardware.camera2.*;
import android.media.ExifInterface;
import android.media.Image;
import android.media.ImageReader;
import android.opengl.Matrix;
import android.os.*;
import android.util.Size;
import android.view.*;
import org.json.*;
import java.io.*;
import java.nio.ByteBuffer;
import java.util.*;
import java.util.concurrent.*;

/**
 * Pure Android Camera2 full-screen AR passthrough + hardware Rotation Vector (Gyro/Accel)
 * + Ambient Light Sensor. Requires zero GMS / ARCore so it runs on 100% of Android 11+ phones.
 */
final class AndroidAR implements SensorEventListener, AutoCloseable {
    private final MainActivity app;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final HandlerThread workerThread = new HandlerThread("qiban-ar");
    private final Handler worker;
    private final SensorManager sensorManager;
    private final Sensor rotationSensor;
    private final Sensor lightSensor;

    private TextureView previewView;
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
    private Surface previewSurface;
    private int sensorOrientation = 90;
    private int previewW = 1280, previewH = 720;
    private volatile long generation = 0;
    private volatile boolean active = false;
    private volatile boolean placed = false;
    private volatile boolean paused = false;
    private volatile boolean closed = false;
    private volatile String scalePreset = "tabletop";
    private volatile float userScale = 0.28f;
    private volatile float userYaw = 0f;
    private volatile float heightOffset = 0f;
    private volatile float exposure = 1.06f;
    private volatile float warmth = 0.50f;
    private volatile boolean hasSensor = false;
    private volatile long lastEmitNs = 0;

    private final float[] rotMat = new float[16];
    private final float[] remappedRot = new float[16];
    private final float[] anchorCamInv = new float[16];
    private final float[] projMat = new float[16];
    private final float[] modelMat = new float[16];
    private final float[] mvMat = new float[16];
    private volatile boolean hasAnchorOrientation = false;
    private CompletableFuture<Sensors.Snapshot> pendingCapture;
    private CompletableFuture<Boolean> permissionFuture;

    AndroidAR(MainActivity activity) {
        this.app = activity;
        workerThread.start();
        worker = new Handler(workerThread.getLooper());
        sensorManager = (SensorManager) activity.getSystemService(Context.SENSOR_SERVICE);
        Sensor rv = sensorManager != null ? sensorManager.getDefaultSensor(Sensor.TYPE_ROTATION_VECTOR) : null;
        if (rv == null && sensorManager != null) rv = sensorManager.getDefaultSensor(Sensor.TYPE_GAME_ROTATION_VECTOR);
        rotationSensor = rv;
        lightSensor = sensorManager != null ? sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT) : null;
        Matrix.setIdentityM(rotMat, 0);
        Matrix.setIdentityM(remappedRot, 0);
        Matrix.setIdentityM(anchorCamInv, 0);
    }

    boolean isActive() { return active; }

    JSONObject stateJson() {
        return MainActivity.json(
            "active", active,
            "placed", placed,
            "scalePreset", scalePreset,
            "userScale", (double) userScale,
            "heightOffset", (double) heightOffset,
            "hasGyro", rotationSensor != null
        );
    }

    CompletableFuture<Boolean> start() {
        CompletableFuture<Boolean> result = new CompletableFuture<>();
        main.post(() -> {
            if (closed) { result.complete(false); return; }
            if (active) { result.complete(true); return; }
            if (app.checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                permissionFuture = result;
                app.requestPermissions(new String[]{Manifest.permission.CAMERA}, 304);
                return;
            }
            beginSession(result);
        });
        return result;
    }

    void onPermissionResult(int[] grants) {
        CompletableFuture<Boolean> f = permissionFuture;
        permissionFuture = null;
        if (f == null) return;
        boolean ok = grants != null && grants.length > 0 && grants[0] == PackageManager.PERMISSION_GRANTED;
        if (ok && !closed) beginSession(f);
        else { app.notice("请允许后置主摄权限以开启 AR 模式。"); f.complete(false); }
    }

    private void beginSession(CompletableFuture<Boolean> result) {
        active = true;
        placed = false;
        paused = false;
        hasAnchorOrientation = false;
        userYaw = 0f;
        heightOffset = 0f;
        userScale = "realScale".equals(scalePreset) ? 1.0f : 0.28f;
        app.setHomeWebViewTransparent(true);

        TextureView tv = new TextureView(app);
        tv.setOpaque(true);
        previewView = tv;
        app.attachARBackground(tv);

        long gen = ++generation;
        tv.setSurfaceTextureListener(new TextureView.SurfaceTextureListener() {
            @Override public void onSurfaceTextureAvailable(SurfaceTexture surface, int width, int height) {
                applyAspectFillTransform(tv, width, height);
                worker.post(() -> openCamera(surface, gen, result));
            }
            @Override public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int width, int height) {
                applyAspectFillTransform(tv, width, height);
            }
            @Override public boolean onSurfaceTextureDestroyed(SurfaceTexture surface) {
                worker.post(() -> {
                    if (gen == generation) closeCamera();
                    surface.release();
                });
                return false;
            }
            @Override public void onSurfaceTextureUpdated(SurfaceTexture surface) {}
        });

        registerSensors();
        main.post(frameTicker);
    }

    private void registerSensors() {
        if (sensorManager == null) return;
        if (rotationSensor != null) sensorManager.registerListener(this, rotationSensor, SensorManager.SENSOR_DELAY_GAME);
        if (lightSensor != null) sensorManager.registerListener(this, lightSensor, SensorManager.SENSOR_DELAY_UI);
    }

    private void unregisterSensors() {
        if (sensorManager != null) sensorManager.unregisterListener(this);
    }

    private void applyAspectFillTransform(TextureView tv, int viewW, int viewH) {
        if (viewW <= 0 || viewH <= 0 || previewW <= 0 || previewH <= 0) return;
        int rot = app.getWindowManager().getDefaultDisplay().getRotation();
        boolean landscape = (rot == Surface.ROTATION_90 || rot == Surface.ROTATION_270);
        float bufW = landscape ? previewW : previewH;
        float bufH = landscape ? previewH : previewW;
        float scaleX = viewW / bufW;
        float scaleY = viewH / bufH;
        float scale = Math.max(scaleX, scaleY);
        float finalW = bufW * scale;
        float finalH = bufH * scale;
        android.graphics.Matrix m = new android.graphics.Matrix();
        m.setScale(finalW / viewW, finalH / viewH, viewW * 0.5f, viewH * 0.5f);
        if (rot == Surface.ROTATION_90 || rot == Surface.ROTATION_270) {
            float cx = viewW * 0.5f, cy = viewH * 0.5f;
            m.postRotate(90f * (rot == Surface.ROTATION_90 ? -1 : 1), cx, cy);
            float ratio = Math.max((float) viewW / viewH, (float) viewH / viewW);
            m.postScale(ratio, ratio, cx, cy);
        } else if (rot == Surface.ROTATION_180) {
            m.postRotate(180f, viewW * 0.5f, viewH * 0.5f);
        }
        tv.setTransform(m);
    }

    @android.annotation.SuppressLint("MissingPermission")
    private void openCamera(SurfaceTexture texture, long gen, CompletableFuture<Boolean> result) {
        if (gen != generation || closed) return;
        try {
            CameraManager cm = (CameraManager) app.getSystemService(Context.CAMERA_SERVICE);
            String backId = null;
            for (String id : cm.getCameraIdList()) {
                CameraCharacteristics cc = cm.getCameraCharacteristics(id);
                if (Objects.equals(cc.get(CameraCharacteristics.LENS_FACING), CameraCharacteristics.LENS_FACING_BACK)) {
                    backId = id;
                    Integer ori = cc.get(CameraCharacteristics.SENSOR_ORIENTATION);
                    sensorOrientation = ori == null ? 90 : ori;
                    break;
                }
            }
            if (backId == null) throw new IOException("未找到后置主摄。");
            CameraCharacteristics cc = cm.getCameraCharacteristics(backId);
            Size[] prevSizes = cc.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP).getOutputSizes(SurfaceTexture.class);
            Size chosenPrev = Arrays.stream(prevSizes)
                .filter(s -> s.getWidth() <= 1920 && s.getHeight() <= 1080)
                .max(Comparator.comparingLong(s -> (long) s.getWidth() * s.getHeight()))
                .orElse(prevSizes[0]);
            previewW = chosenPrev.getWidth();
            previewH = chosenPrev.getHeight();
            texture.setDefaultBufferSize(previewW, previewH);
            main.post(() -> {
                if (previewView != null && gen == generation) applyAspectFillTransform(previewView, previewView.getWidth(), previewView.getHeight());
            });

            Size[] jpegSizes = cc.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP).getOutputSizes(ImageFormat.JPEG);
            Size chosenJpeg = Arrays.stream(jpegSizes)
                .filter(s -> s.getWidth() <= 1280 && s.getHeight() <= 1280)
                .max(Comparator.comparingLong(s -> (long) s.getWidth() * s.getHeight()))
                .orElse(jpegSizes[jpegSizes.length - 1]);
            reader = ImageReader.newInstance(chosenJpeg.getWidth(), chosenJpeg.getHeight(), ImageFormat.JPEG, 2);
            reader.setOnImageAvailableListener(this::onImageAvailable, worker);
            previewSurface = new Surface(texture);

            if (app.checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                throw new IOException("缺少相机权限。");
            }
            cm.openCamera(backId, new CameraDevice.StateCallback() {
                @Override public void onOpened(CameraDevice dev) {
                    if (gen != generation || closed) { dev.close(); return; }
                    camera = dev;
                    try {
                        dev.createCaptureSession(List.of(previewSurface, reader.getSurface()), new CameraCaptureSession.StateCallback() {
                            @Override public void onConfigured(CameraCaptureSession s) {
                                if (gen != generation || camera != dev) { s.close(); return; }
                                try {
                                    CaptureRequest.Builder req = dev.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                                    req.addTarget(previewSurface);
                                    req.set(CaptureRequest.CONTROL_AF_MODE, CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE);
                                    s.setRepeatingRequest(req.build(), null, worker);
                                    session = s;
                                    main.post(() -> {
                                        if (!result.isDone()) result.complete(true);
                                        app.homeEvent(MainActivity.json("type", "arState", "state", stateJson()));
                                    });
                                } catch (Exception e) { s.close(); fail(gen, result, e); }
                            }
                            @Override public void onConfigureFailed(CameraCaptureSession s) {
                                s.close(); fail(gen, result, new IOException("AR 相机预览配置失败。"));
                            }
                        }, worker);
                    } catch (Exception e) { fail(gen, result, e); }
                }
                @Override public void onDisconnected(CameraDevice dev) { dev.close(); fail(gen, result, new IOException("AR 相机已断开。")); }
                @Override public void onError(CameraDevice dev, int err) { dev.close(); fail(gen, result, new IOException("AR 相机不可用：" + err)); }
            }, worker);
        } catch (Exception e) { fail(gen, result, e); }
    }

    private void fail(long gen, CompletableFuture<Boolean> result, Exception e) {
        if (gen != generation) return;
        closeCamera();
        main.post(() -> {
            if (!result.isDone()) result.complete(false);
            app.notice(e.getMessage());
            stop();
        });
    }

    private void closeCamera() {
        if (pendingCapture != null) { pendingCapture.cancel(false); pendingCapture = null; }
        if (session != null) { try { session.close(); } catch (Exception ignored) {} session = null; }
        if (camera != null) { try { camera.close(); } catch (Exception ignored) {} camera = null; }
        if (reader != null) { try { reader.close(); } catch (Exception ignored) {} reader = null; }
        if (previewSurface != null) { try { previewSurface.release(); } catch (Exception ignored) {} previewSurface = null; }
    }

    void stop() {
        main.post(() -> {
            generation++;
            active = false;
            placed = false;
            hasAnchorOrientation = false;
            main.removeCallbacks(frameTicker);
            unregisterSensors();
            worker.post(this::closeCamera);
            TextureView old = previewView;
            previewView = null;
            if (old != null) app.detachARBackground(old);
            app.setHomeWebViewTransparent(false);
            app.homeEvent(MainActivity.json("type", "arState", "state", stateJson()));
        });
    }

    void pause() {
        if (!active) return;
        paused = true;
        main.removeCallbacks(frameTicker);
        unregisterSensors();
        worker.post(this::closeCamera);
    }

    void resume() {
        if (!active || !paused || closed) return;
        paused = false;
        registerSensors();
        main.post(frameTicker);
        TextureView tv = previewView;
        if (tv != null && tv.isAvailable()) {
            long gen = ++generation;
            CompletableFuture<Boolean> dummy = new CompletableFuture<>();
            worker.post(() -> openCamera(tv.getSurfaceTexture(), gen, dummy));
        }
    }

    JSONObject command(JSONObject b) {
        String action = b.optString("action");
        switch (action) {
            case "place" -> {
                placed = true;
                captureAnchorOrientation();
            }
            case "reset" -> {
                placed = false;
                hasAnchorOrientation = false;
                userYaw = 0f;
                heightOffset = 0f;
            }
            case "preset" -> {
                scalePreset = "realScale".equals(b.optString("preset")) ? "realScale" : "tabletop";
                userScale = "realScale".equals(scalePreset) ? 1.0f : 0.28f;
            }
            case "scale" -> userScale = Math.max(0.10f, Math.min(2.4f, userScale * (float) b.optDouble("factor", 1.0)));
            case "yaw" -> userYaw += (float) b.optDouble("radians", 0.0);
            case "height" -> heightOffset = Math.max(-1.5f, Math.min(1.5f, heightOffset + (float) b.optDouble("delta", 0.0)));
            case "snapFloor" -> {
                heightOffset = 0f;
                if (!placed) { placed = true; captureAnchorOrientation(); }
            }
        }
        return stateJson();
    }

    private void captureAnchorOrientation() {
        synchronized (rotMat) {
            if (hasSensor) {
                Matrix.transposeM(anchorCamInv, 0, remappedRot, 0);
                hasAnchorOrientation = true;
            } else {
                Matrix.setIdentityM(anchorCamInv, 0);
                hasAnchorOrientation = true;
            }
        }
    }

    @Override public void onSensorChanged(SensorEvent event) {
        if (!active || paused) return;
        if (event.sensor.getType() == Sensor.TYPE_LIGHT) {
            float lux = Math.max(1f, event.values[0]);
            // Map room lux (10..1200) smoothly to exposure (0.86..1.26)
            float norm = (float) Math.min(1.0, Math.max(0.0, (Math.log10(lux) - 1.0) / 2.2));
            exposure = 0.86f + norm * 0.40f;
            warmth = 0.48f;
            return;
        }
        if (event.sensor.getType() == Sensor.TYPE_ROTATION_VECTOR || event.sensor.getType() == Sensor.TYPE_GAME_ROTATION_VECTOR) {
            float[] raw = new float[16];
            SensorManager.getRotationMatrixFromVector(raw, event.values);
            int rot = app.getWindowManager().getDefaultDisplay().getRotation();
            int axisX = SensorManager.AXIS_X, axisY = SensorManager.AXIS_Z;
            switch (rot) {
                case Surface.ROTATION_90 -> { axisX = SensorManager.AXIS_Z; axisY = SensorManager.AXIS_MINUS_X; }
                case Surface.ROTATION_180 -> { axisX = SensorManager.AXIS_MINUS_X; axisY = SensorManager.AXIS_MINUS_Z; }
                case Surface.ROTATION_270 -> { axisX = SensorManager.AXIS_MINUS_Z; axisY = SensorManager.AXIS_X; }
                default -> { axisX = SensorManager.AXIS_X; axisY = SensorManager.AXIS_Z; }
            }
            synchronized (rotMat) {
                SensorManager.remapCoordinateSystem(raw, axisX, axisY, remappedRot);
                hasSensor = true;
            }
        }
    }

    @Override public void onAccuracyChanged(Sensor sensor, int accuracy) {}

    private final Runnable frameTicker = new Runnable() {
        @Override public void run() {
            if (!active || paused || closed) return;
            pushFrame();
            main.postDelayed(this, 16);
        }
    };

    private void pushFrame() {
        long now = System.nanoTime();
        if (now - lastEmitNs < 14_000_000L) return;
        lastEmitNs = now;
        TextureView tv = previewView;
        if (tv == null || tv.getWidth() < 2 || tv.getHeight() < 2) return;
        float aspect = (float) tv.getWidth() / (float) tv.getHeight();
        Matrix.perspectiveM(projMat, 0, 56f, aspect, 0.05f, 50f);

        float dist = "realScale".equals(scalePreset) ? 1.85f : 0.78f;
        float drop = "realScale".equals(scalePreset) ? 0.92f : 0.28f;

        if (placed && hasAnchorOrientation && hasSensor) {
            float[] relCam = new float[16];
            synchronized (rotMat) {
                // Relative camera rotation from placement pose: viewRot = (R_now * R_anchor^T)^T = R_anchor * R_now^T
                float[] curT = new float[16];
                Matrix.transposeM(curT, 0, remappedRot, 0);
                float[] anchorR = new float[16];
                Matrix.transposeM(anchorR, 0, anchorCamInv, 0);
                Matrix.multiplyMM(relCam, 0, curT, 0, anchorR, 0);
            }
            Matrix.setIdentityM(modelMat, 0);
            Matrix.translateM(modelMat, 0, 0f, -drop + heightOffset, -dist);
            Matrix.rotateM(modelMat, 0, (float) Math.toDegrees(userYaw), 0f, 1f, 0f);
            Matrix.scaleM(modelMat, 0, userScale, userScale, userScale);
            Matrix.multiplyMM(mvMat, 0, relCam, 0, modelMat, 0);
        } else {
            Matrix.setIdentityM(mvMat, 0);
            Matrix.translateM(mvMat, 0, 0f, -drop + heightOffset, -dist);
            Matrix.rotateM(mvMat, 0, (float) Math.toDegrees(userYaw), 0f, 1f, 0f);
            Matrix.scaleM(mvMat, 0, userScale, userScale, userScale);
        }

        StringBuilder sb = new StringBuilder(320);
        sb.append("window.QibanHome?.arFrame([");
        for (int i = 0; i < 16; i++) { if (i > 0) sb.append(','); sb.append(String.format(Locale.US, "%.5f", projMat[i])); }
        sb.append("],[");
        for (int i = 0; i < 16; i++) { if (i > 0) sb.append(','); sb.append(String.format(Locale.US, "%.5f", mvMat[i])); }
        sb.append("],").append(String.format(Locale.US, "%.4f,%.4f)", exposure, warmth));
        app.script("home", sb.toString());
    }

    Sensors.Snapshot snapshot() throws Exception {
        if (!active || paused) return null;
        CompletableFuture<Sensors.Snapshot> req = new CompletableFuture<>();
        long gen = generation;
        worker.post(() -> {
            if (gen != generation || session == null || camera == null || reader == null) { req.complete(null); return; }
            if (pendingCapture != null && !pendingCapture.isDone()) { req.complete(null); return; }
            pendingCapture = req;
            try {
                CaptureRequest.Builder b = camera.createCaptureRequest(CameraDevice.TEMPLATE_STILL_CAPTURE);
                b.addTarget(reader.getSurface());
                int rot = app.getWindowManager().getDefaultDisplay().getRotation() * 90;
                b.set(CaptureRequest.JPEG_ORIENTATION, (sensorOrientation - rot + 360) % 360);
                b.set(CaptureRequest.JPEG_QUALITY, (byte) 76);
                session.capture(b.build(), null, worker);
            } catch (Exception e) { req.completeExceptionally(e); }
        });
        try { return req.get(8, TimeUnit.SECONDS); }
        catch (TimeoutException e) { return null; }
    }

    private void onImageAvailable(ImageReader source) {
        if (source != reader) return;
        CompletableFuture<Sensors.Snapshot> req = pendingCapture;
        try (Image img = source.acquireLatestImage()) {
            if (img == null || req == null || req.isDone()) return;
            ByteBuffer buf = img.getPlanes()[0].getBuffer();
            byte[] bytes = new byte[buf.remaining()];
            buf.get(bytes);
            Bitmap raw = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
            if (raw == null) { req.complete(null); pendingCapture = null; return; }
            ExifInterface exif = new ExifInterface(new ByteArrayInputStream(bytes));
            int ori = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL);
            android.graphics.Matrix rotM = new android.graphics.Matrix();
            switch (ori) {
                case ExifInterface.ORIENTATION_ROTATE_90 -> rotM.postRotate(90);
                case ExifInterface.ORIENTATION_ROTATE_180 -> rotM.postRotate(180);
                case ExifInterface.ORIENTATION_ROTATE_270 -> rotM.postRotate(270);
            }
            Bitmap upright = rotM.isIdentity() ? raw : Bitmap.createBitmap(raw, 0, 0, raw.getWidth(), raw.getHeight(), rotM, true);
            if (upright != raw) raw.recycle();
            float ratio = Math.min(1f, 1024f / Math.max(upright.getWidth(), upright.getHeight()));
            Bitmap small = ratio < 1f ? Bitmap.createScaledBitmap(upright, Math.max(1, (int)(upright.getWidth()*ratio)), Math.max(1, (int)(upright.getHeight()*ratio)), true) : upright;
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            small.compress(Bitmap.CompressFormat.JPEG, 72, out);
            String b64 = android.util.Base64.encodeToString(out.toByteArray(), android.util.Base64.NO_WRAP);
            small.recycle();
            if (upright != small) upright.recycle();
            pendingCapture = null;
            req.complete(new Sensors.Snapshot(b64, ""));
        } catch (Exception e) {
            if (req != null && !req.isDone()) req.completeExceptionally(e);
            pendingCapture = null;
        }
    }

    @Override public void close() {
        closed = true;
        stop();
        workerThread.quitSafely();
    }
}
