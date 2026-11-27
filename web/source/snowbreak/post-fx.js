import * as THREE from 'three';

const FULLSCREEN_VERT = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const THRESHOLD_FRAG = `
uniform sampler2D tDiffuse;
uniform float uThreshold;
uniform float uKnee;
varying vec2 vUv;
void main(){
  vec4 c = texture2D(tDiffuse, vUv);
  // Premultiply by alpha so transparent background never leaks bloom
  vec3 rgb = c.rgb * c.a;
  float br = max(rgb.r, max(rgb.g, rgb.b));
  float soft = br - uThreshold + uKnee;
  soft = clamp(soft, 0.0, 2.0 * uKnee);
  soft = soft * soft / max(4.0 * uKnee, 1e-5);
  float contrib = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(rgb * max(contrib, 0.0), 1.0);
}
`;

const BLUR_FRAG = `
uniform sampler2D tDiffuse;
uniform vec2 uStep;
varying vec2 vUv;
void main(){
  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.22702703;
  sum += (texture2D(tDiffuse, vUv + uStep * 1.38461538).rgb + texture2D(tDiffuse, vUv - uStep * 1.38461538).rgb) * 0.31621622;
  sum += (texture2D(tDiffuse, vUv + uStep * 3.23076923).rgb + texture2D(tDiffuse, vUv - uStep * 3.23076923).rgb) * 0.07027027;
  gl_FragColor = vec4(sum, 1.0);
}
`;

const COMPOSITE_FRAG = `
uniform sampler2D tScene;
uniform sampler2D tBloom1;
uniform sampler2D tBloom2;
uniform sampler2D tBloom3;
uniform vec2 uTexelSize;
uniform float uExposure;
uniform float uBloomStrength;
uniform float uVibrance;
uniform float uSharpness;
varying vec2 vUv;

// Narkowicz / UE4 ACES Filmic fit (keeps highlights pearlescent and colors saturated)
vec3 acesFilmic(vec3 x){
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

vec3 linearToSRGB(vec3 c){
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}

vec3 sampleTone(vec2 uv){
  vec4 b = texture2D(tScene, uv);
  vec3 bl = texture2D(tBloom1, uv).rgb * 0.48
          + texture2D(tBloom2, uv).rgb * 0.34
          + texture2D(tBloom3, uv).rgb * 0.18;
  return acesFilmic((b.rgb + bl * uBloomStrength) * uExposure);
}

void main(){
  vec4 base = texture2D(tScene, vUv);
  vec3 bloom = texture2D(tBloom1, vUv).rgb * 0.48
             + texture2D(tBloom2, vUv).rgb * 0.34
             + texture2D(tBloom3, vUv).rgb * 0.18;
  float alpha = clamp(base.a, 0.0, 1.0);
  vec3 c = acesFilmic((base.rgb + bloom * uBloomStrength) * uExposure);
  // FidelityFX-style Contrast-Adaptive Sharpening (CAS) inside opaque character pixels (zero background halo!)
  if (uSharpness > 0.001 && alpha > 0.96) {
    vec3 n = sampleTone(vUv + vec2(0.0, uTexelSize.y));
    vec3 s = sampleTone(vUv - vec2(0.0, uTexelSize.y));
    vec3 e = sampleTone(vUv + vec2(uTexelSize.x, 0.0));
    vec3 w = sampleTone(vUv - vec2(uTexelSize.x, 0.0));
    float aN = texture2D(tScene, vUv + vec2(0.0, uTexelSize.y)).a;
    float aS = texture2D(tScene, vUv - vec2(0.0, uTexelSize.y)).a;
    float aE = texture2D(tScene, vUv + vec2(uTexelSize.x, 0.0)).a;
    float aW = texture2D(tScene, vUv - vec2(uTexelSize.x, 0.0)).a;
    float interior = step(0.95, min(min(aN, aS), min(aE, aW)));
    vec3 mn = min(c, min(min(n, s), min(e, w)));
    vec3 mx = max(c, max(max(n, s), max(e, w)));
    vec3 amp = clamp(min(mn, 1.0 - mx) / max(mx, vec3(1e-4)), 0.0, 1.0);
    vec3 weight = sqrt(amp) * (-0.18 * uSharpness * interior);
    c = clamp((c + (n + s + e + w) * weight) / (1.0 + 4.0 * weight), 0.0, 1.0);
  }
  // Subtle anime vibrance & clean contrast polish (preserves skin porcelain warmth)
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float sat = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
  c = mix(vec3(luma), c, 1.0 + uVibrance * (1.0 - sat));
  c = clamp(c, 0.0, 1.0);
  vec3 srgb = linearToSRGB(c);
  float bloomAlpha = clamp(max(bloom.r, max(bloom.g, bloom.b)) * uBloomStrength * 0.85, 0.0, 1.0);
  float outAlpha = clamp(max(alpha, bloomAlpha), 0.0, 1.0);
  gl_FragColor = vec4(srgb, outAlpha);
}
`;

/**
 * Zero-dependency WebGL2 HDR MSAA 4x + 3-level Selective Bloom + UE4 ACES Filmic post-processor.
 * Preserves alpha transparency cleanly and gracefully falls back to direct rendering if unsupported.
 */
export function createSnowbreakPostFX(renderer) {
  const gl = renderer.getContext();
  const isWebGL2 = renderer.capabilities.isWebGL2;
  const hasFloat = isWebGL2 && (!!gl.getExtension('EXT_color_buffer_float') || !!gl.getExtension('EXT_color_buffer_half_float'));
  const rtType = hasFloat ? THREE.HalfFloatType : THREE.UnsignedByteType;
  const maxSamples = isWebGL2 ? Math.min(4, renderer.capabilities.maxSamples || 0) : 0;

  let enabled = hasFloat;
  let width = 0, height = 0;
  let sceneRT = null;
  let mips = []; // [{a, b, w, h}]

  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadGeo = new THREE.PlaneGeometry(2, 2);

  const thresholdMat = new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: THRESHOLD_FRAG,
    uniforms: { tDiffuse: { value: null }, uThreshold: { value: 1.04 }, uKnee: { value: 0.36 } },
    depthTest: false, depthWrite: false,
  });
  const blurMat = new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: BLUR_FRAG,
    uniforms: { tDiffuse: { value: null }, uStep: { value: new THREE.Vector2(1, 0) } },
    depthTest: false, depthWrite: false,
  });
  const compositeMat = new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: COMPOSITE_FRAG,
    uniforms: {
      tScene: { value: null },
      tBloom1: { value: null },
      tBloom2: { value: null },
      tBloom3: { value: null },
      uTexelSize: { value: new THREE.Vector2(1 / 1000, 1 / 1000) },
      uExposure: { value: 1.06 },
      uBloomStrength: { value: 0.24 },
      uVibrance: { value: 0.08 },
      uSharpness: { value: 0.85 },
    },
    depthTest: false, depthWrite: false,
  });
  const quad = new THREE.Mesh(quadGeo, compositeMat);
  quadScene.add(quad);

  function disposeTargets() {
    sceneRT?.dispose(); sceneRT = null;
    for (const m of mips) { m.a.dispose(); m.b.dispose(); }
    mips = [];
  }

  function ensureSize(w, h) {
    if (!enabled) return;
    w = Math.max(1, Math.round(w));
    h = Math.max(1, Math.round(h));
    if (sceneRT && width === w && height === h) return;
    disposeTargets();
    width = w; height = h;
    sceneRT = new THREE.WebGLRenderTarget(w, h, {
      type: rtType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
      samples: maxSamples,
    });
    for (const div of [2, 4, 8]) {
      const mw = Math.max(1, Math.round(w / div));
      const mh = Math.max(1, Math.round(h / div));
      const opts = { type: rtType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, stencilBuffer: false };
      mips.push({ a: new THREE.WebGLRenderTarget(mw, mh, opts), b: new THREE.WebGLRenderTarget(mw, mh, opts), w: mw, h: mh });
    }
  }

  function render(scene, camera) {
    if (!enabled) {
      renderer.render(scene, camera);
      return;
    }
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    ensureSize(size.x, size.y);

    const prevTone = renderer.toneMapping;
    const prevAutoClear = renderer.autoClear;
    // 1. Render scene into MSAA HDR HalfFloat target (linear space, no premature tone mapping)
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.setRenderTarget(sceneRT);
    renderer.clear(true, true, false);
    renderer.render(scene, camera);

    // 2. Extract HDR bloom peaks into mip 0
    renderer.autoClear = false;
    quad.material = thresholdMat;
    thresholdMat.uniforms.tDiffuse.value = sceneRT.texture;
    renderer.setRenderTarget(mips[0].a);
    renderer.clear(true, false, false);
    renderer.render(quadScene, quadCam);

    // 3. Separable Gaussian blur across 3 mip levels (1/2, 1/4, 1/8)
    quad.material = blurMat;
    for (let i = 0; i < mips.length; i++) {
      const src = i === 0 ? mips[0].a.texture : mips[i - 1].a.texture;
      // Horizontal -> b
      blurMat.uniforms.tDiffuse.value = src;
      blurMat.uniforms.uStep.value.set(1.0 / mips[i].w, 0.0);
      renderer.setRenderTarget(mips[i].b);
      renderer.render(quadScene, quadCam);
      // Vertical -> a
      blurMat.uniforms.tDiffuse.value = mips[i].b.texture;
      blurMat.uniforms.uStep.value.set(0.0, 1.0 / mips[i].h);
      renderer.setRenderTarget(mips[i].a);
      renderer.render(quadScene, quadCam);
    }

    // 4. Composite HDR scene + 3-tier optical bloom + UE4 ACES Filmic -> default framebuffer
    quad.material = compositeMat;
    compositeMat.uniforms.tScene.value = sceneRT.texture;
    compositeMat.uniforms.tBloom1.value = mips[0].a.texture;
    compositeMat.uniforms.tBloom2.value = mips[1].a.texture;
    compositeMat.uniforms.tBloom3.value = mips[2].a.texture;
    compositeMat.uniforms.uTexelSize.value.set(1.0 / width, 1.0 / height);
    compositeMat.uniforms.uExposure.value = renderer.toneMappingExposure;
    renderer.setRenderTarget(null);
    renderer.clear(true, false, false);
    renderer.render(quadScene, quadCam);

    renderer.toneMapping = prevTone;
    renderer.autoClear = prevAutoClear;
  }

  return {
    render,
    setEnabled(flag) {
      const next = hasFloat && !!flag;
      if (enabled === next) return;
      enabled = next;
      if (!enabled) disposeTargets();
    },
    setBloom(strength) {
      if (Number.isFinite(strength)) compositeMat.uniforms.uBloomStrength.value = THREE.MathUtils.clamp(strength, 0, 0.8);
    },
    snapshot: () => ({ enabled, hasFloat, msaaSamples: enabled ? maxSamples : 0, bloomStrength: compositeMat.uniforms.uBloomStrength.value }),
    dispose() {
      disposeTargets();
      quadGeo.dispose();
      thresholdMat.dispose();
      blurMat.dispose();
      compositeMat.dispose();
    },
  };
}
