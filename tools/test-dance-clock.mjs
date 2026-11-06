import assert from 'node:assert/strict';
import {motionTime,retimeDance} from '../web/dance-controls.js';
for(const hz of [15,30,60,120]){
 const state={kind:'standing-dance',start:0,offset:0,rate:1};for(let i=0;i<=hz*10;i++)assert.ok(Math.abs(motionTime(state,i*1000/hz)-i/hz)<1e-10);
 retimeDance(state,.5,10000);assert.equal(motionTime(state,10000),10);assert.equal(motionTime(state,12000),11);
 retimeDance(state,1.5,12000);assert.equal(motionTime(state,12000),11);assert.equal(motionTime(state,14000),14);
}
console.log('Dance source time is independent of display FPS; tempo changes preserve phase.');
