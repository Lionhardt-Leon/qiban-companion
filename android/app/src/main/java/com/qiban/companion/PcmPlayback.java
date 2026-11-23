package com.qiban.companion;

import java.io.IOException;
import java.util.function.BooleanSupplier;
import java.util.function.IntBinaryOperator;
import java.util.function.LongSupplier;

final class PcmPlayback {
    private static final long STALL_NANOS = 2_000_000_000L;
    private static final int CHUNK = 3200;

    // A zero-length write is backpressure. A short write advances by accepted samples only.
    static void play(int sampleCount, IntBinaryOperator write, LongSupplier position,
                     BooleanSupplier cancelled, Runnable start) throws Exception {
        if (sampleCount == 0 || cancelled.getAsBoolean()) return;
        int offset = checkedWrite(write, 0, Math.min(512, sampleCount));
        if (cancelled.getAsBoolean()) return;
        start.run();
        long lastProgress = System.nanoTime();
        while (offset < sampleCount && !cancelled.getAsBoolean()) {
            int accepted = checkedWrite(write, offset, Math.min(CHUNK, sampleCount - offset));
            if (accepted > 0) {
                offset += accepted;
                lastProgress = System.nanoTime();
            } else {
                awaitProgress(lastProgress);
            }
        }
        long played = 0;
        while (!cancelled.getAsBoolean()) {
            long head = position.getAsLong();
            if (head >= offset) return;
            if (head > played) {
                played = head;
                lastProgress = System.nanoTime();
            }
            awaitProgress(lastProgress);
        }
    }

    private static int checkedWrite(IntBinaryOperator write, int offset, int size) throws IOException {
        int count = write.applyAsInt(offset, size);
        if (count < 0 || count > size) throw new IOException("音频播放中断。");
        return count;
    }

    private static void awaitProgress(long lastProgress) throws IOException, InterruptedException {
        if (System.nanoTime() - lastProgress >= STALL_NANOS) throw new IOException("音频播放超时。");
        Thread.sleep(10);
    }
}
