import * as esbuild from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';
await esbuild.build({entryPoints:['web/host.js'],outfile:'ios/WebAssets/host.js',bundle:true,minify:true,
  format:'iife',target:'safari16',legalComments:'eof',metafile:true,alias:{
    three:path.resolve('web/vendor/three.module.js'),
    'three/addons/loaders/GLTFLoader.js':path.resolve('web/vendor/addons/loaders/GLTFLoader.js')
  },plugins:[{name:'local-fflate',setup(build){build.onResolve({filter:/^\/vendor\/addons\/libs\/fflate\.module\.js$/},()=>({path:path.resolve('web/vendor/addons/libs/fflate.module.js')}));}}]});
fs.copyFileSync('web/THIRD-PARTY-LICENSES.txt','ios/WebAssets/THIRD-PARTY-LICENSES.txt');
fs.mkdirSync('ios/WebAssets/stage2d',{recursive:true});
await esbuild.build({entryPoints:['web/stage2d/host.mjs'],outfile:'ios/WebAssets/stage2d/host.js',bundle:true,minify:true,format:'iife',target:['safari16','chrome90'],legalComments:'eof'});
const stageHTML=fs.readFileSync('web/stage2d/index.html','utf8').replace(/<script type="module">[\s\S]*?<\/script>/,'<script defer src="./host.js"></script>');
fs.writeFileSync('ios/WebAssets/stage2d/index.html',stageHTML);
