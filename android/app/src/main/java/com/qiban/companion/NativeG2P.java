package com.qiban.companion;
public final class NativeG2P {
    static {System.loadLibrary("qiban_g2p");}
    public static native boolean initialize(byte[] resources,byte[] config);
    public static native byte[] process(byte[] text,byte[] language);
}
