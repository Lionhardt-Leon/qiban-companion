// Rhino runs the identical authoritative engine on Android's JVM. Only syntax changes.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {transform} from 'esbuild';
import {transformAsync} from '@babel/core';
import env from '@babel/preset-env';
const root=new URL('../',import.meta.url);
const source=await readFile(new URL('games/tycoon/native-runtime.js',root),'utf8');
const lowered=await transform(source,{target:'es2015',format:'iife',legalComments:'inline'});
const result=await transformAsync(lowered.code,{presets:[[env,{targets:{ie:'11'},modules:false,useBuiltIns:false}]],configFile:false,babelrc:false,comments:true,compact:false});
await mkdir(new URL('android/app/src/main/assets/game/',root),{recursive:true});
await writeFile(new URL('android/app/src/main/assets/game/room-runtime.js',root),result.code);
console.log('Android room engine generated from the shared iOS / Node rules');
