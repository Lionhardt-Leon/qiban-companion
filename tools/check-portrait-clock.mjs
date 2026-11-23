import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {PortraitPlayer} from '../web/stage2d/player.mjs';

let now = 1000;
Object.defineProperty(globalThis, 'performance', {value: {now: () => now}, configurable: true});
globalThis.ResizeObserver = class { observe() {} disconnect() {} };
const handlers = new Map();
const canvas = {addEventListener: (name, callback) => handlers.set(name, callback)};
const player = new PortraitPlayer(canvas);
player.animationStart = now;
player.skeleton = {animations:new Map([['blink', {}]])};
player.gpu = {};
let ticks = 0;
player.tick = () => { ticks++; player.frame = ticks; };

now = 1200;
player.pause();
now = 2000;
player.pause();
now = 4000;
player.pause(false);
assert.equal(now - player.animationStart, 200);
player.pause(false);
assert.equal(ticks, 1);

globalThis.cancelAnimationFrame = () => {};
now = 4200;
player.pause();
now = 4500;
assert.equal(player.expression('blink', true), true);
now = 5000;
player.pause(false);
assert.equal(now - player.animationStart, 0, 'a new expression starts upon resume');

const atlas = 'page.png\nsize: 64,64\nformat: RGBA8888\nfilter: Linear,Linear\nrepeat: none\nface\n  rotate: false\n  xy: 0,0\n  size: 64,64\n  orig: 64,64\n  offset: 0,0\n  index: -1\n';
const data = {
  skeleton:{spine:'3.8.86'},
  bones:[{name:'root'}],
  slots:[{name:'face',bone:'root',attachment:'face'}],
  skins:[{name:'default',attachments:{face:{face:{type:'mesh',uvs:[0,0,1,0,0,1],triangles:[0,1,2],vertices:[0,0,4,0,0,4]}}}}],
  animations:{rest:{}},
};
const model = {id:'fixture',name:'Fixture',renderer:'spine-json',skeleton:'model.json',atlas:'model.atlas',textures:['page.png']};
globalThis.fetch = async () => ({ok:true, json:async () => data, text:async () => atlas});
globalThis.Image = class {width=64;height=64;async decode() {}};
player.release = () => {player.gpu = null;};
player.initGPU = () => {player.gpu = {};};
player.size = () => {};
const originalTick = PortraitPlayer.prototype.tick.bind(player);
player.tick = time => {if(player.paused) originalTick(time); else ticks++;};
now = 5600;
player.pause();
now = 6300;
await player.load(model, 'https://fixture.invalid/');
const beforeRestore = ticks;
let restored;
const load = player.load.bind(player);
player.load = (...args) => (restored = load(...args));
handlers.get('webglcontextrestored')();
await restored;
assert.equal(ticks, beforeRestore);
now = 7000;
player.pause(false);
assert.equal(now - player.animationStart, 0);
assert.equal(ticks, beforeRestore + 1);

const events = [];
const window = {webkit:{messageHandlers:{qibanStage:{postMessage:value=>events.push(value)}}}};
const visibility = new Map();
const document = {hidden:true,querySelector:()=>({addEventListener(){}}),
  addEventListener:(name,fn)=>visibility.set(name,fn)};
const bundle = await readFile(new URL('../ios/WebAssets/stage2d/host.js',import.meta.url),'utf8');
vm.runInNewContext(bundle, {window,parent:window,document,addEventListener(){},ResizeObserver:globalThis.ResizeObserver,
  performance:globalThis.performance,location:{origin:'https://fixture.invalid'}});
const host = window.QibanPortrait;
assert.equal(host.player.paused, true);
await host.receive({type:'pause',value:true});
document.hidden = false;
visibility.get('visibilitychange')();
assert.equal(host.player.paused, true, 'visibility cannot override native pause');
await host.receive({type:'pause',value:false});
assert.equal(host.player.paused, false);
host.player.load = async m => host.player.onReady({id:m.id});
await host.receive({type:'load',model:{id:'native'},loadToken:'request'});
assert.equal(events.at(-1).loadToken,'request');
await host.receive({type:'load',model:{id:'android'}});
assert.equal(events.at(-1).id,'android');
assert.equal(events.at(-1).loadToken,undefined);
console.log('Portrait clock: repeat pause/resume, expression, hidden model/context load and packed host compatibility passed');

// Exercise context negotiation separately from GPU drawing, which is checked on the emulator.
for (const supported of [['webgl', 'webgl2'], ['webgl2'], []]) {
  const attempts = [];
  const shaderStage = new Error('context acquired');
  const probe = Object.create(PortraitPlayer.prototype);
  probe.canvas = {
    getContext(type) {
      attempts.push(type);
      return supported.includes(type) ? {createShader() {throw shaderStage;}} : null;
    },
  };
  if (supported.length) {
    assert.throws(() => probe.initGPU(), error => error === shaderStage);
    assert.equal(probe.renderer, supported[0] === 'webgl' ? 'webgl1' : 'webgl2');
  } else {
    assert.throws(() => probe.initGPU(), /图形上下文/);
  }
  assert.deepEqual(attempts, supported.includes('webgl') ? ['webgl'] : ['webgl', 'webgl2']);
}
console.log('Portrait GL context selection: preferred, fallback and unavailable paths passed');
