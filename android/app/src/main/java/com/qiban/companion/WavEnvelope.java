package com.qiban.companion;

/** Audio levels for API WAV playback, sampled against MediaPlayer's clock. */
final class WavEnvelope {
    private final float[] bins;
    private WavEnvelope(float[] bins){this.bins=bins;}
    float at(int milliseconds){int i=Math.max(0,milliseconds/40);return i<bins.length?bins[i]:0;}
    private static int u16(byte[] b,int i){return (b[i]&255)|((b[i+1]&255)<<8);}
    private static long u32(byte[] b,int i){return (b[i]&255L)|((b[i+1]&255L)<<8)|((b[i+2]&255L)<<16)|((b[i+3]&255L)<<24);}
    static WavEnvelope parse(byte[] b){
        try {
            int format=0,channels=0,rate=0,bits=0,start=0,length=0;
            for(int p=12;p+8<=b.length;){long size=u32(b,p+4);if(size>b.length-p-8)return null;
                if(b[p]=='f'&&b[p+1]=='m'&&b[p+2]=='t'&&size>=16){format=u16(b,p+8);channels=u16(b,p+10);rate=(int)u32(b,p+12);bits=u16(b,p+22);}
                if(b[p]=='d'&&b[p+1]=='a'&&b[p+2]=='t'&&b[p+3]=='a'){start=p+8;length=(int)size;}
                p+=(int)(8+size+(size&1));
            }
            if(channels<1||channels>2||rate<8000||rate>192000||start==0||!(format==1&&bits==16||format==3&&bits==32))return null;
            int bytes=bits/8,frames=length/(bytes*channels),stride=Math.max(1,rate/25),count=(frames+stride-1)/stride;if(count>3000)return null;float[] levels=new float[count];
            for(int i=0;i<count;i++){double energy=0;int n=0;for(int f=i*stride;f<Math.min(frames,(i+1)*stride);f++)for(int c=0;c<channels;c++){int p=start+(f*channels+c)*bytes;double sample=format==1?(short)u16(b,p)/32768.0:Float.intBitsToFloat((int)u32(b,p));if(Double.isFinite(sample)){energy+=sample*sample;n++;}}levels[i]=(float)Math.min(1,Math.sqrt(energy/Math.max(1,n))*5);}
            return new WavEnvelope(levels);
        }catch(IndexOutOfBoundsException e){return null;}
    }
}
