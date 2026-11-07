// The cached CUE exporter serializes mesh extras as a JSON string. Three's
// GLTFLoader expects an object and otherwise assigns numeric Morph names.
// Decode only the explicit targetNames form. CUE's mesh.UseMorphTarget(i)
// retains original indices; individual primitives can omit trailing targets
// with no deltas (the nurse face has 21/15/15/0). Never pad or reorder deltas.
export function cueMorphTargetNamesPlugin(parser){
  const decoded=new Map();
  return {name:'SnowbreakMorphTargetNames',beforeRoot(){
    for(const [index,mesh] of (parser.json.meshes||[]).entries()){
      if(typeof mesh.extras!=='string'||!mesh.extras.trimStart().startsWith('{'))continue;
      if(mesh.extras.length>65536)throw new Error('Morph metadata size limit');
      const extras=JSON.parse(mesh.extras);
      if(!Object.hasOwn(extras,'targetNames'))continue;
      const names=extras.targetNames;
      if(Array.isArray(names)&&names.length===0&&mesh.primitives?.length&&mesh.primitives.every(p=>!(p.targets?.length))){const {targetNames,...other}=extras;mesh.extras=other;continue;}
      if(!Array.isArray(names)||!names.length||names.length>128||new Set(names).size!==names.length||names.some(n=>typeof n!=='string'||!n.length||n.length>128)||!mesh.primitives?.length||mesh.primitives.some(p=>(p.targets?.length||0)>names.length))throw new Error('Invalid exported morph names');
      decoded.set(index,names);
      const {targetNames,...other}=extras;mesh.extras=other;
    }
  },afterRoot(result){
    for(const scene of result.scenes)scene.traverse(mesh=>{
      if(!mesh.isMesh||!mesh.morphTargetInfluences)return;
      const ref=parser.associations.get(mesh),names=decoded.get(ref?.meshes);if(!names)return;
      const count=parser.json.meshes[ref.meshes].primitives[ref.primitives].targets?.length||0;
      if(mesh.morphTargetInfluences.length!==count)throw new Error('Morph primitive index mismatch');
      mesh.morphTargetDictionary=Object.fromEntries(names.slice(0,count).map((name,index)=>[name,index]));
    });
  }};
}
