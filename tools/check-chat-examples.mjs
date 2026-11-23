import assert from 'node:assert/strict';
import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';

const fixture = await mkdtemp(join(tmpdir(), 'qiban-chat-examples-'));
try {
  const modules = {
    'package.json': '{"type":"module"}',
    'storage.js': `export const loadAppStore=()=>globalThis.fixtureStore;
      export const saveAppStore=value=>{globalThis.fixtureStore=value;};
      export const normalizeCharacterRecord=value=>value;`,
    'settings.js': 'export const getSettings=()=>({chatProviders:[]}); export const saveSettings=()=>{};',
    'qiban_identity.js': `export const signature=x=>JSON.stringify([x.text]);
      export const reconcileMessages=async messages=>({messages,nativeIDs:{}});
      export const decorateIdentities=x=>x;`,
    'qiban_contact_repair.js': 'export const repairContactBindings=()=>({changed:false}); export const recoveredContactID="recovered";',
    'native.js': await readFile(new URL('../chat-adapter/native.js', import.meta.url)),
  };
  await Promise.all(Object.entries(modules).map(([name, source])=>writeFile(join(fixture,name),source)));
  const storage = new Map();
  globalThis.localStorage = {getItem:key=>storage.get(key),setItem:(key,value)=>storage.set(key,value)};
  globalThis.document = {getElementById:()=>null,addEventListener:()=>{}};
  globalThis.fixtureStore = {characters:[],conversations:[],messages:{},activeConversationId:'private:card'};
  const changes = [];
  let pendingSync;
  let storageFailure = false;
  const bridge = {
    available:true,
    async flushStorage() {
      if (storageFailure) throw Error('fixture storage failure');
    },
    async call(name, body) {
      if (name === 'messages') return {messages:[],more:false};
      if (name === 'nativeArchive') return {archive:'{}'};
      assert.equal(name, 'syncContact');
      if (pendingSync) await pendingSync;
      changes.push(body.contact);
      return {linked:true,qibanId:'native-card',sessionID:'session',messageIDs:{}};
    },
  };
  globalThis.window = {QibanNative:bridge,QibanProfile:{nativeArchive:'{}',contacts:[
    {id:'card',qibanId:'native-card',name:'Card',prompt:'structured prompt',examples:'initial',
      sessions:[{id:'session',title:'Conversation',active:true}]},
  ]}};
  const {initQibanChat} = await import(pathToFileURL(join(fixture,'native.js')).href);
  await initQibanChat();
  // Establish any missing session flags on an older mirror before checking an examples-only update.
  await bridge.flush();
  const card = globalThis.fixtureStore.characters[0];
  const mirrorKey = 'fritia_qiban_mirrors';
  const mirror = JSON.parse(storage.get(mirrorKey));
  delete mirror['private:card'].examples;
  storage.set(mirrorKey, JSON.stringify(mirror));
  const before = changes.length;
  card.examples = 'edited';
  await bridge.flush();
  assert.equal(changes.length, before+1);
  assert.equal(changes.at(-1).examples, 'edited');
  assert.equal(changes.at(-1).examplesEdited, true);
  assert.equal(changes.at(-1).promptEdited, false);
  await bridge.flush();
  assert.equal(changes.length, before+1);
  card.examples = '';
  await bridge.flush();
  assert.equal(changes.at(-1).examples, '');
  assert.equal(changes.at(-1).examplesEdited, true);
  card.prompt = 'changed prompt';
  await bridge.flush();
  assert.equal(changes.at(-1).examplesEdited, false);
  assert.equal(changes.at(-1).promptEdited, true);
  let releaseSync;
  pendingSync = new Promise(resolve => {releaseSync = resolve;});
  card.examples = 'waiting to sync';
  let flushed = false;
  const flush = bridge.flush().then(() => {flushed = true;});
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(flushed, false, 'reload barrier waits for the bridge write');
  pendingSync = null;
  releaseSync();
  await flush;
  assert.equal(changes.at(-1).examples, 'waiting to sync');

  storageFailure = true;
  await assert.rejects(bridge.flush(), /fixture storage failure/);
  assert.equal(card.examples, 'waiting to sync');
  storageFailure = false;
  await bridge.flush();

  console.log('Chat examples and reload barrier: edit, clear, older mirror, retry and refused storage passed');
} finally {
  await rm(fixture,{recursive:true,force:true});
}
