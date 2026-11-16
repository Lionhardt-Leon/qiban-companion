import * as esbuild from 'esbuild';
import {fileURLToPath} from 'node:url';
await esbuild.build({entryPoints:['web/generic-host.js'],outfile:'android/app/src/main/assets/mobile/generic.js',bundle:true,minify:true,format:'iife',target:'chrome106',alias:{three:fileURLToPath(new URL('../web/vendor/three.module.js',import.meta.url))},legalComments:'eof'});
console.log('Android generic skeleton / action renderer generated');
