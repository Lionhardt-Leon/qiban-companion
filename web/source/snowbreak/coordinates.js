// FRotator quaternion convention checked against CUE4Parse FRotator.cs at
// 85495b5e126203d68ae3bf84e37fe31abd56a0e5. Then reflect UE Y/Z to GLB XZY.
export function rotatorToGLBQuaternion({Pitch,Yaw,Roll}){
  if(![Pitch,Yaw,Roll].every(Number.isFinite))throw new Error('Invalid rotator');
  const d=Math.PI/360,sp=Math.sin(Pitch*d),cp=Math.cos(Pitch*d),sy=Math.sin(Yaw*d),cy=Math.cos(Yaw*d),sr=Math.sin(Roll*d),cr=Math.cos(Roll*d);
  const x=cr*sp*sy-sr*cp*cy,y=-cr*sp*cy-sr*cp*sy,z=cr*cp*sy-sr*sp*cy,w=cr*cp*cy+sr*sp*sy;
  return [-x,-z,-y,w];
}
