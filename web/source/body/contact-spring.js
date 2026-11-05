// Semi-implicit, bounded mass/spring/damper. Units are model world units.
export const CONTACT_PROFILES={
 chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},
 hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},
 head:{frequency:5,damping:.9,compression:.0005,limit:.001,radius:.045},
 face:{frequency:5,damping:.9,compression:.0003,limit:.0007,radius:.03},
 body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}
};
export class ContactSpring {
 constructor(region='body'){region=({forehead:'head',hair:'head',left_cheek:'face',right_cheek:'face'})[region]||region;this.profile=CONTACT_PROFILES[region]||CONTACT_PROFILES.body;this.offset=0;this.velocity=0;this.pressed=false;}
 press(){this.pressed=true;this.velocity=Math.min(.12,this.velocity+this.profile.compression*8);}
 release(){this.pressed=false;}
 step(dt){
  if(!Number.isFinite(dt)||dt<=0||dt>.15){this.offset=this.velocity=0;return;}
  const p=this.profile,omega=2*Math.PI*p.frequency,n=Math.ceil(dt*240),h=dt/n;
  for(let i=0;i<n;i++){
   this.velocity+=((this.pressed?p.compression:0)-this.offset)*omega*omega*h-2*p.damping*omega*this.velocity*h;
   this.velocity=Math.max(-.12,Math.min(.12,this.velocity));this.offset+=this.velocity*h;
   if(Math.abs(this.offset)>p.limit){this.offset=Math.sign(this.offset)*p.limit;if(this.offset*this.velocity>0)this.velocity=0;}
  }
  if(!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<.00001)this.offset=this.velocity=0;
 }
 get active(){return this.pressed||this.offset!==0||this.velocity!==0;}
}
