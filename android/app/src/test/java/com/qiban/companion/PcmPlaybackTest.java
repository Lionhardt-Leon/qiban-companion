package com.qiban.companion;

import static org.junit.Assert.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import org.junit.Test;

public class PcmPlaybackTest {
    @Test public void shortPrimeAndBackpressureDoNotDropSamples() throws Exception {
        List<Integer> offsets = new ArrayList<>();
        int[] writes = {2, 0, 3, 4};
        AtomicInteger starts = new AtomicInteger();
        PcmPlayback.play(9, (offset, size) -> {
            offsets.add(offset);
            int accepted = writes[offsets.size() - 1];
            assertTrue(accepted <= size);
            return accepted;
        }, () -> 9, () -> false, starts::incrementAndGet);
        assertEquals(List.of(0, 2, 2, 5), offsets);
        assertEquals(1, starts.get());
    }

    @Test public void cancellationStopsBeforeDrain() throws Exception {
        AtomicBoolean cancelled = new AtomicBoolean();
        PcmPlayback.play(900, (offset, size) -> {
            if (offset > 0) cancelled.set(true);
            return size;
        }, () -> { throw new AssertionError("cancelled playback drained"); },
                cancelled::get, () -> {});
        assertTrue(cancelled.get());
    }

    @Test public void audioErrorAndStalledHeadDoNotTrapTheQueue() {
        assertThrows(IOException.class, () ->
                PcmPlayback.play(1, (offset, size) -> -1, () -> 0, () -> false, () -> {}));
        assertThrows(IOException.class, () ->
                PcmPlayback.play(1, (offset, size) -> size, () -> 0, () -> false, () -> {}));
    }
}
