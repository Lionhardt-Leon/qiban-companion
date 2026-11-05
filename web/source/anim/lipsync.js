/* anim/lipsync.js —— 真实音频驱动的口型电平
 *
 * 做法与 Komorebi/OLVT 一致：先把音频算成 20ms 一格的 RMS 包络，
 * 播放时用「播放时钟」查表，而不是每帧分析 AnalyserNode。
 *
 * 纯逻辑部分（computeEnvelope / update）可在 Node 测。
 */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function computeEnvelope(channelData, sampleRate, hopMs = 20) {
  const hop = Math.max(1, Math.floor(sampleRate * hopMs / 1000));
  const frames = Math.max(1, Math.ceil(channelData.length / hop));
  const env = new Float32Array(frames);
  for (let f = 0; f < frames; f++) {
    const start = f * hop;
    const end = Math.min(channelData.length, start + hop);
    let sum = 0;
    let n = 0;
    for (let i = start; i < end; i++) {
      const s = channelData[i];
      sum += s * s;
      n++;
    }
    env[f] = n ? Math.sqrt(sum / n) : 0;
  }
  return env;
}

/** 从 AudioBuffer 取单声道混合后的包络 */
export function envelopeFromBuffer(buf, hopMs = 20) {
  const chs = Math.max(1, buf.numberOfChannels || 1);
  const len = buf.length;
  const mix = new Float32Array(len);
  for (let c = 0; c < chs; c++) {
    const data = buf.getChannelData(c);
    for (let i = 0; i < len; i++) mix[i] += data[i] / chs;
  }
  return computeEnvelope(mix, buf.sampleRate, hopMs);
}

export function createLipSync(options = {}) {
  const hopMs = options.hopMs || 20;
  const gain = Number.isFinite(options.gain) ? options.gain : 3.2;
  const floor = Number.isFinite(options.floor) ? options.floor : 0.02;
  const attack = Number.isFinite(options.attack) ? options.attack : 0.35;
  const release = Number.isFinite(options.release) ? options.release : 0.18;

  let env = null;
  let clock = null;
  let duration = 0;
  let level = 0;
  let active = false;

  function attachBuffer(buf, clockFn) {
    if (!buf) return false;
    env = envelopeFromBuffer(buf, hopMs);
    duration = buf.duration || (buf.length / (buf.sampleRate || 1));
    clock = typeof clockFn === 'function' ? clockFn : null;
    active = true;
    level = 0;
    return true;
  }

  function stop() {
    env = null;
    clock = null;
    duration = 0;
    active = false;
    level = 0;
  }

  /** 每帧调用，返回 0..1 的口型开度 */
  function update(nowMs) {
    if (!active || !env) {
      level += (0 - level) * 0.25;
      return level < 0.002 ? 0 : level;
    }
    const t = clock ? Math.max(0, clock()) : 0;
    if (t > duration + 0.05) { stop(); return 0; }
    const idx = clamp(Math.floor((t * 1000) / hopMs), 0, env.length - 1);
    const rms = env[idx];
    let target = clamp((rms - floor) * gain, 0, 1);
    target = Math.pow(target, 0.7);
    const k = target > level ? attack : release;
    level += (target - level) * k;
    return level;
  }

  return {
    attachBuffer, stop, update,
    get active() { return active; },
    get level() { return level; },
    get duration() { return duration; },
  };
}
