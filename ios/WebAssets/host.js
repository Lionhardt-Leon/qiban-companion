(()=>{var wg=Object.defineProperty;var Eg=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Tg=(i,e)=>{for(var t in e)wg(i,t,{get:e[t],enumerable:!0})};var Tf={};Tg(Tf,{AsyncCompress:()=>Ug,AsyncDecompress:()=>Bg,AsyncDeflate:()=>ff,AsyncGunzip:()=>mf,AsyncGzip:()=>Ug,AsyncInflate:()=>su,AsyncUnzipInflate:()=>Kg,AsyncUnzlib:()=>xf,AsyncZipDeflate:()=>Wg,AsyncZlib:()=>Fg,Compress:()=>Xc,DecodeUTF8:()=>Hg,Decompress:()=>Kc,Deflate:()=>$n,EncodeUTF8:()=>Vg,FlateErrorCode:()=>Lg,Gunzip:()=>wo,Gzip:()=>Xc,Inflate:()=>Rn,Unzip:()=>$g,UnzipInflate:()=>Zg,UnzipPassThrough:()=>Ef,Unzlib:()=>To,Zip:()=>Xg,ZipDeflate:()=>Gg,ZipPassThrough:()=>ca,Zlib:()=>Yc,compress:()=>Dg,compressSync:()=>qc,decompress:()=>kg,decompressSync:()=>zg,deflate:()=>pf,deflateSync:()=>fa,gunzip:()=>gf,gunzipSync:()=>Eo,gzip:()=>Dg,gzipSync:()=>qc,inflate:()=>au,inflateSync:()=>os,strFromU8:()=>lu,strToU8:()=>nr,unzip:()=>jg,unzipSync:()=>Jg,unzlib:()=>yf,unzlibSync:()=>Ao,zip:()=>qg,zipSync:()=>Yg,zlib:()=>Og,zlibSync:()=>Zc});function br(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function pf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[rs],function(n){return ir(fa(n.data[0],n.data[1]))},0,t)}function fa(i,e){return vr(i,e||{},0,0)}function au(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[is],function(n){return ir(os(n.data[0],Qc(n.data[1])))},1,t)}function os(i,e){return ha(i,{i:2},e&&e.out,e&&e.dictionary)}function Dg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[rs,lf,function(){return[qc]}],function(n){return ir(qc(n.data[0],n.data[1]))},2,t)}function qc(i,e){e||(e={});var t=ns(),n=i.length;t.p(i);var r=vr(i,e,nu(e),8),s=r.length;return eu(r,e),St(r,s-8,t.d()),St(r,s-4,n),r}function gf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[is,cf,function(){return[Eo]}],function(n){return ir(Eo(n.data[0],n.data[1]))},3,t)}function Eo(i,e){var t=tu(i);return t+8>i.length&&rt(6,"invalid gzip data"),ha(i.subarray(t,-8),{i:2},e&&e.out||new pt(df(i)),e&&e.dictionary)}function Og(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[rs,uf,function(){return[Zc]}],function(n){return ir(Zc(n.data[0],n.data[1]))},4,t)}function Zc(i,e){e||(e={});var t=Co();t.p(i);var n=vr(i,e,e.dictionary?6:2,4);return iu(n,e),St(n,n.length-4,t.d()),n}function yf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),ss(i,e,[is,hf,function(){return[Ao]}],function(n){return ir(Ao(n.data[0],Qc(n.data[1])))},5,t)}function Ao(i,e){return ha(i.subarray(ru(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function kg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&rt(7),i[0]==31&&i[1]==139&&i[2]==8?gf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?au(i,e,t):yf(i,e,t)}function zg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?Eo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?os(i,e):Ao(i,e)}function nr(i,e){if(e){for(var t=new pt(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Yd)return Yd.encode(i);for(var r=i.length,s=new pt(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new pt(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Kn(s,0,a)}function lu(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if($c)return $c.decode(i);var r=vf(i),s=r.s,t=r.r;return t.length&&rt(8),s}}function qg(i,e,t){t||(t=e,e={}),typeof t!="function"&&rt(7);var n={};ou(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],d=function(){for(var m=0;m<u.length;++m)u[m]()},h=function(m,f){Ro(function(){t(m,f)})};Ro(function(){h=t});var p=function(){var m=new pt(o+22),f=a,M=o-a;o=0;for(var _=0;_<c;++_){var x=l[_];try{var S=x.c.length;Jr(m,o,x,x.f,x.u,S);var b=30+x.f.length+tr(x.extra),w=o+b;m.set(x.c,w),Jr(m,a,x,x.f,x.u,S,o,x.m),a+=16+b+(x.m?x.m.length:0),o=w+S}catch(y){return h(y,null)}}cu(m,a,l.length,M,f),h(null,m)};s||p();for(var g=function(m){var f=r[m],M=n[f],_=M[0],x=M[1],S=ns(),b=_.length;S.p(_);var w=nr(f),y=w.length,T=x.comment,A=T&&nr(T),C=A&&A.length,F=tr(x.extra),O=x.level==0?0:8,N=function(k,L){if(k)d(),h(k,null);else{var I=L.length;l[m]=da(x,{size:b,crc:S.d(),c:L,f:w,m:A,u:y!=f.length||A&&T.length!=C,compression:O}),a+=30+y+F+I,o+=76+2*(y+F)+(C||0)+I,--s||p()}};if(y>65535&&N(rt(11,0,1),null),!O)N(null,_);else if(b<16e4)try{N(null,fa(_,x))}catch(k){N(k,null)}else u.push(pf(_,x,N))},v=0;v<c;++v)g(v);return d}function Yg(i,e){e||(e={});var t={},n=[];ou(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,d=nr(a),h=d.length,p=l.comment,g=p&&nr(p),v=g&&g.length,m=tr(l.extra);h>65535&&rt(11);var f=u?fa(c,l):c,M=f.length,_=ns();_.p(c),n.push(da(l,{size:c.length,crc:_.d(),c:f,f:d,m:g,u:h!=a.length||g&&p.length!=v,o:r,compression:u})),r+=30+h+m+M,s+=76+2*(h+m)+(v||0)+M}for(var x=new pt(s+22),S=r,b=s-r,w=0;w<n.length;++w){var d=n[w];Jr(x,d.o,d,d.f,d.u,d.c.length);var y=30+d.f.length+tr(d.extra);x.set(d.c,d.o+y),Jr(x,r,d,d.f,d.u,d.c.length,d.o,d.m),r+=16+y+(d.m?d.m.length:0)}return cu(x,r,n.length,b,S),x}function jg(i,e,t){t||(t=e,e={}),typeof t!="function"&&rt(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,f){Ro(function(){t(m,f)})};Ro(function(){a=t});for(var o=i.length-22;qt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(rt(13,0,1),null),r;var c=vn(i,o+8);if(c){var l=c,u=qt(i,o+16),d=u==4294967295||l==65535;if(d){var h=qt(i,o-12);d=qt(i,h)==101075792,d&&(l=c=qt(i,h+32),u=qt(i,h+48))}for(var p=e&&e.filter,g=function(m){var f=Sf(i,u,d),M=f[0],_=f[1],x=f[2],S=f[3],b=f[4],w=f[5],y=Mf(i,w);u=b;var T=function(C,F){C?(r(),a(C,null)):(F&&(s[S]=F),--c||a(null,s))};if(!p||p({name:S,size:_,originalSize:x,compression:M}))if(!M)T(null,Kn(i,y,y+_));else if(M==8){var A=i.subarray(y,y+_);if(x<524288||_>.8*x)try{T(null,os(A,{out:new pt(x)}))}catch(C){T(C,null)}else n.push(au(A,{size:x},T))}else T(rt(14,"unknown compression type "+M,1),null);else T(null,null)},v=0;v<l;++v)g(v)}else a(null,{});return r}function Jg(i,e){for(var t={},n=i.length-22;qt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&rt(13);var r=vn(i,n+8);if(!r)return{};var s=qt(i,n+16),a=s==4294967295||r==65535;if(a){var o=qt(i,n-12);a=qt(i,o)==101075792,a&&(r=qt(i,o+32),s=qt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=Sf(i,s,a),d=u[0],h=u[1],p=u[2],g=u[3],v=u[4],m=u[5],f=Mf(i,m);s=v,(!c||c({name:g,size:h,originalSize:p,compression:d}))&&(d?d==8?t[g]=os(i.subarray(f,f+h),{out:new pt(p)}):rt(14,"unknown compression type "+d):t[g]=Kn(i,f,f+h))}return t}var Xd,Pg,pt,bn,ua,Qr,es,oa,Zd,Kd,jc,Mo,$d,jd,Vc,la,Li,wt,Zn,Ni,wt,wt,wt,wt,jr,wt,Jd,Qd,ef,tf,_o,Yn,vo,ts,Kn,Lg,nf,rt,ha,mi,Kr,bo,So,Gc,$r,Jc,Wc,rf,er,sf,af,ns,Co,vr,da,qd,yo,Ng,of,is,rs,lf,cf,uf,hf,ir,Qc,ss,jn,as,vn,qt,Hc,St,eu,tu,df,nu,iu,ru,$n,ff,Rn,su,Xc,Ug,wo,mf,Yc,Fg,To,xf,Kc,Bg,ou,Yd,$c,_f,vf,Hg,Vg,bf,Mf,Sf,wf,tr,Jr,cu,ca,Gg,Wg,Xg,Ef,Zg,Kg,$g,Ro,Af=Eg(()=>{Xd={},Pg=(function(i,e,t,n,r){var s=new Worker(Xd[e]||(Xd[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),pt=Uint8Array,bn=Uint16Array,ua=Int32Array,Qr=new pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),es=new pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),oa=new pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zd=function(i,e){for(var t=new bn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ua(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Kd=Zd(Qr,2),jc=Kd.b,Mo=Kd.r;jc[28]=258,Mo[258]=28;$d=Zd(es,0),jd=$d.b,Vc=$d.r,la=new bn(32768);for(wt=0;wt<32768;++wt)Li=(wt&43690)>>1|(wt&21845)<<1,Li=(Li&52428)>>2|(Li&13107)<<2,Li=(Li&61680)>>4|(Li&3855)<<4,la[wt]=((Li&65280)>>8|(Li&255)<<8)>>1;Zn=(function(i,e,t){for(var n=i.length,r=0,s=new bn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new bn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new bn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],d=a[i[r]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)o[la[d]>>c]=l}else for(o=new bn(n),r=0;r<n;++r)i[r]&&(o[r]=la[a[i[r]-1]++]>>15-i[r]);return o}),Ni=new pt(288);for(wt=0;wt<144;++wt)Ni[wt]=8;for(wt=144;wt<256;++wt)Ni[wt]=9;for(wt=256;wt<280;++wt)Ni[wt]=7;for(wt=280;wt<288;++wt)Ni[wt]=8;jr=new pt(32);for(wt=0;wt<32;++wt)jr[wt]=5;Jd=Zn(Ni,9,0),Qd=Zn(Ni,9,1),ef=Zn(jr,5,0),tf=Zn(jr,5,1),_o=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Yn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},vo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},ts=function(i){return(i+7)/8|0},Kn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new pt(i.subarray(e,t))},Lg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},nf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],rt=function(i,e,t){var n=new Error(e||nf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,rt),!t)throw n;return n},ha=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new pt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new pt(r*3));var l=function(ye){var ge=t.length;if(ye>ge){var Re=new pt(Math.max(ge*2,ye));Re.set(t),t=Re}},u=e.f||0,d=e.p||0,h=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,f=r*8;do{if(!p){u=Yn(i,d,1);var M=Yn(i,d+1,3);if(d+=3,M)if(M==1)p=Qd,g=tf,v=9,m=5;else if(M==2){var b=Yn(i,d,31)+257,w=Yn(i,d+10,15)+4,y=b+Yn(i,d+5,31)+1;d+=14;for(var T=new pt(y),A=new pt(19),C=0;C<w;++C)A[oa[C]]=Yn(i,d+C*3,7);d+=w*3;for(var F=_o(A),O=(1<<F)-1,N=Zn(A,F,1),C=0;C<y;){var k=N[Yn(i,d,O)];d+=k&15;var _=k>>4;if(_<16)T[C++]=_;else{var L=0,I=0;for(_==16?(I=3+Yn(i,d,3),d+=2,L=T[C-1]):_==17?(I=3+Yn(i,d,7),d+=3):_==18&&(I=11+Yn(i,d,127),d+=7);I--;)T[C++]=L}}var G=T.subarray(0,b),D=T.subarray(b);v=_o(G),m=_o(D),p=Zn(G,v,1),g=Zn(D,m,1)}else rt(1);else{var _=ts(d)+4,x=i[_-4]|i[_-3]<<8,S=_+x;if(S>r){c&&rt(0);break}o&&l(h+x),t.set(i.subarray(_,S),h),e.b=h+=x,e.p=d=S*8,e.f=u;continue}if(d>f){c&&rt(0);break}}o&&l(h+131072);for(var H=(1<<v)-1,B=(1<<m)-1,Q=d;;Q=d){var L=p[vo(i,d)&H],ce=L>>4;if(d+=L&15,d>f){c&&rt(0);break}if(L||rt(2),ce<256)t[h++]=ce;else if(ce==256){Q=d,p=null;break}else{var pe=ce-254;if(ce>264){var C=ce-257,q=Qr[C];pe=Yn(i,d,(1<<q)-1)+jc[C],d+=q}var oe=g[vo(i,d)&B],z=oe>>4;oe||rt(3),d+=oe&15;var D=jd[z];if(z>3){var q=es[z];D+=vo(i,d)&(1<<q)-1,d+=q}if(d>f){c&&rt(0);break}o&&l(h+131072);var $=h+pe;if(h<D){var ve=s-D,Ve=Math.min(D,$);for(ve+h<0&&rt(3);h<Ve;++h)t[h]=n[ve+h]}for(;h<$;++h)t[h]=t[h-D]}}e.l=p,e.p=Q,e.b=h,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=m)}while(!u);return h!=t.length&&a?Kn(t,0,h):t.subarray(0,h)},mi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Kr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},bo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:er,l:0};if(r==1){var a=new pt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,b){return S.f-b.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,d=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[d].f?l++:d++],c=t[l!=u&&t[l].f<t[d].f?l++:d++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var p=new bn(h+1),g=So(t[u-1],p,0);if(g>e){var n=0,v=0,m=g-e,f=1<<m;for(s.sort(function(b,w){return p[w.s]-p[b.s]||b.f-w.f});n<r;++n){var M=s[n].s;if(p[M]>e)v+=f-(1<<g-p[M]),p[M]=e;else break}for(v>>=m;v>0;){var _=s[n].s;p[_]<e?v-=1<<e-p[_]++-1:++n}for(;n>=0&&v;--n){var x=s[n].s;p[x]==e&&(--p[x],++v)}g=e}return{t:new pt(p),l:g}},So=function(i,e,t){return i.s==-1?Math.max(So(i.l,e,t+1),So(i.r,e,t+1)):e[i.s]=t},Gc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new bn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},$r=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Jc=function(i,e,t){var n=t.length,r=ts(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Wc=function(i,e,t,n,r,s,a,o,c,l,u){mi(e,u++,t),++r[256];for(var d=bo(r,15),h=d.t,p=d.l,g=bo(s,15),v=g.t,m=g.l,f=Gc(h),M=f.c,_=f.n,x=Gc(v),S=x.c,b=x.n,w=new bn(19),y=0;y<M.length;++y)++w[M[y]&31];for(var y=0;y<S.length;++y)++w[S[y]&31];for(var T=bo(w,7),A=T.t,C=T.l,F=19;F>4&&!A[oa[F-1]];--F);var O=l+5<<3,N=$r(r,Ni)+$r(s,jr)+a,k=$r(r,h)+$r(s,v)+a+14+3*F+$r(w,A)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&O<=N&&O<=k)return Jc(e,u,i.subarray(c,c+l));var L,I,G,D;if(mi(e,u,1+(k<N)),u+=2,k<N){L=Zn(h,p,0),I=h,G=Zn(v,m,0),D=v;var H=Zn(A,C,0);mi(e,u,_-257),mi(e,u+5,b-1),mi(e,u+10,F-4),u+=14;for(var y=0;y<F;++y)mi(e,u+3*y,A[oa[y]]);u+=3*F;for(var B=[M,S],Q=0;Q<2;++Q)for(var ce=B[Q],y=0;y<ce.length;++y){var pe=ce[y]&31;mi(e,u,H[pe]),u+=A[pe],pe>15&&(mi(e,u,ce[y]>>5&127),u+=ce[y]>>12)}}else L=Jd,I=Ni,G=ef,D=jr;for(var y=0;y<o;++y){var q=n[y];if(q>255){var pe=q>>18&31;Kr(e,u,L[pe+257]),u+=I[pe+257],pe>7&&(mi(e,u,q>>23&31),u+=Qr[pe]);var oe=q&31;Kr(e,u,G[oe]),u+=D[oe],oe>3&&(Kr(e,u,q>>5&8191),u+=es[oe])}else Kr(e,u,L[q]),u+=I[q]}return Kr(e,u,L[256]),u+I[256]},rf=new ua([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),er=new pt(0),sf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new pt(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var d=rf[e-1],h=d>>13,p=d&8191,g=(1<<t)-1,v=s.p||new bn(32768),m=s.h||new bn(g+1),f=Math.ceil(t/3),M=2*f,_=function(Oe){return(i[Oe]^i[Oe+1]<<f^i[Oe+2]<<M)&g},x=new ua(25e3),S=new bn(288),b=new bn(32),w=0,y=0,T=s.i||0,A=0,C=s.w||0,F=0;T+2<a;++T){var O=_(T),N=T&32767,k=m[O];if(v[N]=k,m[O]=N,C<=T){var L=a-T;if((w>7e3||A>24576)&&(L>423||!l)){u=Wc(i,c,0,x,S,b,y,A,F,T-F,u),A=w=y=0,F=T;for(var I=0;I<286;++I)S[I]=0;for(var I=0;I<30;++I)b[I]=0}var G=2,D=0,H=p,B=N-k&32767;if(L>2&&O==_(T-B))for(var Q=Math.min(h,L)-1,ce=Math.min(32767,T),pe=Math.min(258,L);B<=ce&&--H&&N!=k;){if(i[T+G]==i[T+G-B]){for(var q=0;q<pe&&i[T+q]==i[T+q-B];++q);if(q>G){if(G=q,D=B,q>Q)break;for(var oe=Math.min(B,q-2),z=0,I=0;I<oe;++I){var $=T-B+I&32767,ve=v[$],Ve=$-ve&32767;Ve>z&&(z=Ve,k=$)}}}N=k,k=v[N],B+=N-k&32767}if(D){x[A++]=268435456|Mo[G]<<18|Vc[D];var ye=Mo[G]&31,ge=Vc[D]&31;y+=Qr[ye]+es[ge],++S[257+ye],++b[ge],C=T+G,++w}else x[A++]=i[T],++S[i[T]]}}for(T=Math.max(T,C);T<a;++T)x[A++]=i[T],++S[i[T]];u=Wc(i,c,l,x,S,b,y,A,F,T-F,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=T,s.w=C)}else{for(var T=s.w||0;T<a+l;T+=65535){var Re=T+65535;Re>=a&&(c[u/8|0]=l,Re=a),u=Jc(c,u+1,i.subarray(T,Re))}s.i=a}return Kn(o,0,n+ts(u)+r)},af=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),ns=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=af[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Co=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},vr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new pt(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return sf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},da=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},qd=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var d in o.prototype)e+=";"+c+".prototype."+d+"="+o.prototype[d].toString()}else e+=l}else t[c]=o}return e},yo=[],Ng=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},of=function(i,e,t,n){if(!yo[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=qd(i[o],r,s);yo[t]={c:qd(i[a],r,s),e:s}}var c=da({},yo[t].e);return Pg(yo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Ng(c),n)},is=function(){return[pt,bn,ua,Qr,es,oa,jc,jd,Qd,tf,la,nf,Zn,_o,Yn,vo,ts,Kn,rt,ha,os,ir,Qc]},rs=function(){return[pt,bn,ua,Qr,es,oa,Mo,Vc,Jd,Ni,ef,jr,la,rf,er,Zn,mi,Kr,bo,So,Gc,$r,Jc,Wc,ts,Kn,sf,vr,fa,ir]},lf=function(){return[eu,nu,St,ns,af]},cf=function(){return[tu,df]},uf=function(){return[iu,St,Co]},hf=function(){return[ru]},ir=function(i){return postMessage(i,[i.buffer])},Qc=function(i){return i&&{out:i.size&&new pt(i.size),dictionary:i.dictionary}},ss=function(i,e,t,n,r,s){var a=of(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},jn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},as=function(i,e,t,n,r,s,a){var o,c=of(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||rt(5),o&&e.ondata(rt(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},vn=function(i,e){return i[e]|i[e+1]<<8},qt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Hc=function(i,e){return qt(i,e)+qt(i,e+4)*4294967296},St=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},eu=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&St(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},tu=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&rt(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},df=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},nu=function(i){return 10+(i.filename?i.filename.length+1:0)},iu=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=Co();r.p(e.dictionary),St(i,2,r.d())}},ru=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&rt(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&rt(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};$n=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new pt(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(vr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||rt(5),this.s.l&&rt(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new pt(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||rt(5),this.s.l&&rt(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),ff=(function(){function i(e,t){as([rs,function(){return[jn,$n]}],this,br.call(this,e,t),function(n){var r=new $n(n.data);onmessage=jn(r)},6,1)}return i})();Rn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new pt(32768),this.p=new pt(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||rt(5),this.d&&rt(4),!this.p.length)this.p=e;else if(e.length){var t=new pt(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=ha(this.p,this.s,this.o);this.ondata(Kn(n,t,this.s.b),this.d),this.o=Kn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Kn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),su=(function(){function i(e,t){as([is,function(){return[jn,Rn]}],this,br.call(this,e,t),function(n){var r=new Rn(n.data);onmessage=jn(r)},7,0)}return i})();Xc=(function(){function i(e,t){this.c=ns(),this.l=0,this.v=1,$n.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,$n.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=vr(e,this.o,this.v&&nu(this.o),t&&8,this.s);this.v&&(eu(n,this.o),this.v=0),t&&(St(n,n.length-8,this.c.d()),St(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){$n.prototype.flush.call(this)},i})(),Ug=(function(){function i(e,t){as([rs,lf,function(){return[jn,$n,Xc]}],this,br.call(this,e,t),function(n){var r=new Xc(n.data);onmessage=jn(r)},8,1)}return i})();wo=(function(){function i(e,t){this.v=1,this.r=0,Rn.call(this,e,t)}return i.prototype.push=function(e,t){if(Rn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?tu(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}Rn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=ts(this.s.p)+9,this.s={i:0},this.o=new pt(0),this.push(new pt(0),t))},i})(),mf=(function(){function i(e,t){var n=this;as([is,cf,function(){return[jn,Rn,wo]}],this,br.call(this,e,t),function(r){var s=new wo(r.data);s.onmember=function(a){return postMessage(a)},onmessage=jn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Yc=(function(){function i(e,t){this.c=Co(),this.v=1,$n.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),$n.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=vr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(iu(n,this.o),this.v=0),t&&St(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){$n.prototype.flush.call(this)},i})(),Fg=(function(){function i(e,t){as([rs,uf,function(){return[jn,$n,Yc]}],this,br.call(this,e,t),function(n){var r=new Yc(n.data);onmessage=jn(r)},10,1)}return i})();To=(function(){function i(e,t){Rn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(Rn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(ru(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&rt(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),Rn.prototype.c.call(this,t)},i})(),xf=(function(){function i(e,t){as([is,hf,function(){return[jn,Rn,To]}],this,br.call(this,e,t),function(n){var r=new To(n.data);onmessage=jn(r)},11,0)}return i})();Kc=(function(){function i(e,t){this.o=br.call(this,e,t)||{},this.G=wo,this.I=Rn,this.Z=To}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||rt(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new pt(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),Bg=(function(){function i(e,t){Kc.call(this,e,t),this.queuedSize=0,this.G=mf,this.I=su,this.Z=xf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,Kc.prototype.push.call(this,e,t)},i})();ou=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=da(n,s[1]),s=s[0]),s instanceof pt?t[a]=[s,o]:(t[a+="/"]=[new pt(0),o],ou(s,a,t,n))}},Yd=typeof TextEncoder<"u"&&new TextEncoder,$c=typeof TextDecoder<"u"&&new TextDecoder,_f=0;try{$c.decode(er,{stream:!0}),_f=1}catch{}vf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Kn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Hg=(function(){function i(e){this.ondata=e,_f?this.t=new TextDecoder:this.p=er}return i.prototype.push=function(e,t){if(this.ondata||rt(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&rt(8),this.t=null);return}this.p||rt(4);var n=new pt(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=vf(n),s=r.s,a=r.r;t?(a.length&&rt(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),Vg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||rt(5),this.d&&rt(4),this.ondata(nr(e),this.d=t||!1)},i})();bf=function(i){return i==1?3:i<6?2:i==9?1:0},Mf=function(i,e){return e+30+vn(i,e+26)+vn(i,e+28)},Sf=function(i,e,t){var n=vn(i,e+28),r=lu(i.subarray(e+46,e+46+n),!(vn(i,e+8)&2048)),s=e+46+n,a=qt(i,e+20),o=t&&a==4294967295?wf(i,s):[a,qt(i,e+24),qt(i,e+42)],c=o[0],l=o[1],u=o[2];return[vn(i,e+10),c,l,r,s+vn(i,e+30)+vn(i,e+32),u]},wf=function(i,e){for(;vn(i,e)!=1;e+=4+vn(i,e+2));return[Hc(i,e+12),Hc(i,e+4),Hc(i,e+20)]},tr=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&rt(9),e+=n+4}return e},Jr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,d=tr(l);St(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),p=h.getFullYear()-1980;if((p<0||p>119)&&rt(10),St(i,e,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,s!=-1&&(St(i,e,t.crc),St(i,e+4,s<0?-s-2:s),St(i,e+8,t.size)),St(i,e+12,c),St(i,e+14,d),e+=16,a!=null&&(St(i,e,u),St(i,e+6,t.attrs),St(i,e+10,a),e+=14),i.set(n,e),e+=c,d)for(var g in l){var v=l[g],m=v.length;St(i,e,+g),St(i,e+2,m),i.set(v,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},cu=function(i,e,t,n,r){St(i,e,101010256),St(i,e+8,t),St(i,e+10,t),St(i,e+12,n),St(i,e+16,r)},ca=(function(){function i(e){this.filename=e,this.c=ns(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||rt(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),Gg=(function(){function i(e,t){var n=this;t||(t={}),ca.call(this,e),this.d=new $n(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=bf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ca.prototype.push.call(this,e,t)},i})(),Wg=(function(){function i(e,t){var n=this;t||(t={}),ca.call(this,e),this.d=new ff(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=bf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ca.prototype.push.call(this,e,t)},i})(),Xg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||rt(5),this.d&2)this.ondata(rt(4+(this.d&1)*8,0,1),null,!1);else{var n=nr(e.filename),r=n.length,s=e.comment,a=s&&nr(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+tr(e.extra)+30;r>65535&&this.ondata(rt(11,0,1),null,!1);var l=new pt(c);Jr(l,0,e,n,o,-1);var u=[l],d=function(){for(var m=0,f=u;m<f.length;m++){var M=f[m];t.ondata(null,M,!1)}u=[]},h=this.d;this.d=0;var p=this.u.length,g=da(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(d(),h){var m=t.u[p+1];m?m.r():t.d=1}h=1}}),v=0;e.ondata=function(m,f,M){if(m)t.ondata(m,f,M),t.terminate();else if(v+=f.length,u.push(f),M){var _=new pt(16);St(_,0,134695760),St(_,4,e.crc),St(_,8,v),St(_,12,e.size),u.push(_),g.c=v,g.b=c+v+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&d()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(rt(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+tr(a.extra)+(a.o?a.o.length:0)}for(var o=new pt(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Jr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+tr(a.extra)+(a.o?a.o.length:0),t+=a.b}cu(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();Ef=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Zg=(function(){function i(){var e=this;this.i=new Rn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Kg=(function(){function i(e,t){var n=this;t<32e4?this.i=new Rn(function(r,s){n.ondata(null,r,s)}):(this.i=new su(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Kn(e,0)),this.i.push(e,t)},i.compression=8,i})(),$g=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:Ef},this.p=er}return i.prototype.push=function(e,t){var n=this;if(this.onfile||rt(5),this.p||rt(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new pt(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,d=this.c,h=d&&this.d,p=function(){var f,M=qt(l,o);if(M==67324752){a=1,c=o,g.d=null,g.c=0;var _=vn(l,o+6),x=vn(l,o+8),S=_&2048,b=_&8,w=vn(l,o+26),y=vn(l,o+28);if(u>o+30+w+y){var T=[];g.k.unshift(T),a=2;var A=qt(l,o+18),C=qt(l,o+22),F=lu(l.subarray(o+30,o+=30+w),!S);A==4294967295?(f=b?[-2]:wf(l,o),A=f[0],C=f[1]):b&&(A=-1),o+=y,g.c=A;var O,N={name:F,compression:x,start:function(){if(N.ondata||rt(5),!A)N.ondata(null,er,!0);else{var k=n.o[x];k||N.ondata(rt(14,"unknown compression type "+x,1),null,!1),O=A<0?new k(F):new k(F,A,C),O.ondata=function(D,H,B){N.ondata(D,H,B)};for(var L=0,I=T;L<I.length;L++){var G=I[L];O.push(G,!1)}n.k[0]==T&&n.c?n.d=O:O.push(er,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};A>=0&&(N.size=A,N.originalSize=C),g.onfile(N)}return"break"}else if(d){if(M==134695760)return c=o+=12+(d==-2&&8),a=3,g.c=0,"break";if(M==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var v=p();if(v==="break")break}if(this.p=er,d<0){var m=a?l.subarray(0,c-12-(d==-2&&8)-(qt(l,c-16)==134695760&&4)):l.subarray(0,o);h?h.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&rt(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),Ro=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function go(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function Fd(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=go(i,t),i.start=t,i.rate=e)}function Od(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,d,h){return Number.isFinite(l)?Math.max(u,Math.min(d,l)):h}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let d of Object.keys(r))r[d].input.value=t[d],r[d].output.textContent=t[d].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[d,h,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let v=document.createElement("label"),m=document.createElement("span"),f=document.createElement("output"),M=document.createElement("input");m.textContent=h+" ",f.textContent=t[d].toFixed(2)+"\xD7",M.type="range",M.min=p,M.max=g,M.step=.05,M.value=t[d],M.style.cssText="display:block;width:100%;margin:14px 0",M.setAttribute("aria-label",h),M.oninput=()=>a({...t,[d]:Number(M.value)}),v.append(m,f,M),n.append(v),r[d]={input:M,output:f}}for(let[d,h]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=d,p.onclick=h,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function Bd(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function c(){let f=i.lightingState();for(let[M,_]of r)_.value=f[M];a&&(a.checked=f.shadows),o&&(o.value=f.shadowSize)}function l(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),c()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,M,_,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let S=document.createElement("label");S.textContent=M;let b=document.createElement("input");b.id="lighting_"+f,b.type="range",b.min=_,b.max=x,b.step=".01",b.style.width="100%",b.oninput=()=>l({[f]:Number(b.value)}),r.set(f,b),S.append(b),t.append(S)}for(let[f,M]of[["\u6062\u590D\u67D4\u5149",()=>l(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let _=document.createElement("button");_.textContent=f,_.onclick=M,t.append(_)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>l({shadows:a.checked}),u.append(a),t.append(u);let d=document.createElement("label");d.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");h.id="lighting_resolution",h.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),d.append(h),t.append(d),o=document.createElement("select"),o.id="lighting_shadowSize";for(let f of[512,1024,2048])o.add(new Option(f+" \xB7 \u9634\u5F71",String(f)));o.value=i.lightingState().shadowSize,o.onchange=()=>l({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[f,M]of[["quality","\u6027\u80FD\u6A21\u5F0F \xB7 60\u5E27\u6EE1\u753B\u8D28 / 1G\u663E\u5B58"],["adaptive","\u666E\u901A\u6A21\u5F0F \xB7 \u667A\u80FD\u5E73\u8861 / 512M\u663E\u5B58"],["battery","\u7701\u7535\u6A21\u5F0F \xB7 30\u5E27\u4F4E\u8017 / 192M\u663E\u5B58"]])p.add(new Option(M,f));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let v=()=>{let f=i.performanceState(),M=i.textureBudgetState?.(),_=f.mode==="quality"?"\u6027\u80FD\u6A21\u5F0F":f.mode==="battery"?"\u7701\u7535\u6A21\u5F0F":"\u666E\u901A\u6A21\u5F0F";g.textContent=`GPU \u6E32\u67D3 \xB7 ${_} \xB7 ${f.fps}\u5E27\uFF08\u76EE\u6807${f.targetFPS}\uFF09
\u7F13\u51B2 ${f.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${f.pixelRatio.toFixed(2)}
\u8D34\u56FE\u9884\u7B97 ${M?`${M.estimatedMiB}/${M.budgetMiB} MiB`:"\u2014"} \xB7 \u9634\u5F71 ${i.lightingState().shadowMapSize}px
\u7ED8\u5236 ${f.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${f.triangles}
\u70ED\u72B6\u6001 ${f.thermal} \xB7 ${f.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}`},m=setInterval(()=>{t.hidden||v()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),c(),{toggle(){t.hidden=!t.hidden,v()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function kd(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var Ag=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),pi=(i,e)=>i>>>e|i<<32-e;function Rg(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let f=t[m-15],M=t[m-2];t[m]=(pi(f,7)^pi(f,18)^f>>>3)+t[m-16]+(pi(M,17)^pi(M,19)^M>>>10)+t[m-7]}let[o,c,l,u,d,h,p,g]=e;for(let m=0;m<64;m++){let f=g+(pi(d,6)^pi(d,11)^pi(d,25))+(d&h^~d&p)+Ag[m]+t[m]>>>0,M=(pi(o,2)^pi(o,13)^pi(o,22))+(o&c^o&l^c&l)>>>0;g=p,p=h,h=d,d=u+f>>>0,u=l,l=c,c=o,o=f+M>>>0}let v=[o,c,l,u,d,h,p,g];for(let m=0;m<8;m++)e[m]+=v[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function Oc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):Rg(i)}var Zr={entries:1024,file:128*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},zd=new TextDecoder("utf-8",{fatal:!0});function Hd(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Zr.archive,n=Zr.total){if(![Zr.total,192*1024*1024,384*1024*1024,1536*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Zr.archive,128*1024*1024,256*1024*1024,1024*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let p=i.length-22;p>=Math.max(0,i.length-65557);p--)if(r.getUint32(p,!0)===101010256&&p+22+r.getUint16(p+20,!0)===i.length){s=p;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>Zr.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=new Map,d=o,h=0;for(let p=0;p<a;p++){if(d+46>s||r.getUint32(d,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let g=r.getUint16(d+8,!0),v=r.getUint16(d+10,!0),m=r.getUint16(d+28,!0),f=r.getUint16(d+30,!0),M=r.getUint16(d+32,!0),_=r.getUint32(d+24,!0);if(d+46+m+f+M>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let x=zd.decode(i.subarray(d+46,d+46+m));if(!kd(x)||l.has(x)||!e.test(x))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(x),h+=_;let S=r.getUint32(d+38,!0)>>>16;if(g&1||![0,8].includes(v)||(S&61440)===40960||_>Zr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(x==="manifest.json"&&_>1024*1024)throw new Error("manifest \u8FC7\u5927");let b=r.getUint32(d+42,!0);if(b+30>o||r.getUint32(b,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let w=r.getUint16(b+26,!0),y=r.getUint16(b+28,!0),T=r.getUint32(d+20,!0);if(b+30+w+y+T>o||zd.decode(i.subarray(b+30,b+30+w))!==x)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u.set(x,{offset:b+30+w+y,compressed:T,original:_,method:v}),d+=46+m+f+M}if(d!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h,entries:u}}var Bc=/^[a-zA-Z0-9_-]{1,96}$/,Cg=/^[a-f0-9]{64}$/,Ig=new Set(["geometry","animation","texture","audio","config"]);function xo(i){if(i?.schema!=="snowbreak-skin/1"||!Bc.test(i.characterId)||!Bc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Bc.test(n.role)||e.has(n.role)||!Cg.test(n.assetId)||!Ig.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function kc({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let d=await Promise.allSettled(u.map(({asset:h,descriptor:p})=>Promise.resolve().then(()=>e(h,p))));for(let h of d)if(h.status==="rejected")try{t(h.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let d=xo(u),h=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(d.resources.map(M=>Promise.resolve().then(()=>i(M,{signal:p.signal})))),v=g.flatMap((M,_)=>M.status==="fulfilled"?[{asset:M.value,descriptor:d.resources[_]}]:[]),m=g.find(M=>M.status==="rejected");if(h!==n||a||m){if(await o(v),h===n&&(s=null),h!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let f=r;return r={manifest:d,resources:v},s=null,f&&await o(f.resources),h!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:d.characterId,skinId:d.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(d=>d.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Vd(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let d=h=>i[h]|i[h+1]<<8|i[h+2]<<16;a=[d(u+4)+1,d(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let d=e.getUint32(u+1,!0);if(d>>>29)throw new Error("Unknown WebP version");s=[(d&16383)+1,(d>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Gd(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Wd={geometry:64,animation:64,texture:32,audio:16,config:8};function zc(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Wd,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Wd[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await Oc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Vd(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Gd(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}function Rf(i,e){let t=null;if(i.schema==="snowbreak-collection/1"){if(!/^[A-Za-z0-9_-]{1,64}$/.test(i.characterId)||!Array.isArray(i.variants)||![1,2,4].includes(i.variants.length))throw new Error("Invalid character collection");let s=new Set;if(t=i.variants.map(a=>{if(!["standing","interaction"].includes(a.mode)||!["normal","nude","underwear","lv2"].includes(a.outfit)||a.id!==a.mode+"_"+a.outfit||s.has(a.id))throw new Error("Invalid collection variant");return s.add(a.id),{...a,manifest:xo(a.manifest)}}),!s.has(i.defaultVariant)||t.some(a=>a.manifest.characterId!==i.characterId))throw new Error("Invalid collection default")}let n=t?t.map(s=>s.manifest):[xo(i)],r=new Set(["manifest.json",...n.flatMap(s=>s.resources.map(a=>"assets/"+a.assetId))]);if(r.size!==e.size||[...r].some(s=>!e.has(s)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");return{variants:t,manifests:n}}async function Cf(i){let e=await fetch("companion-snowbreak://local/pkg-index/"+encodeURIComponent(i));if(!e.ok)throw new Error("\u6D41\u5F0F\u89D2\u8272\u5305\u7D22\u5F15\u8BFB\u53D6\u5931\u8D25");let t=await e.json();if(!Array.isArray(t.names)||!t.manifest||typeof t.total!="number"||t.total>1536*1024*1024)throw new Error("\u89D2\u8272\u5305\u7D22\u5F15\u683C\u5F0F\u6216\u5927\u5C0F\u975E\u6CD5");let n=t.manifest,{variants:r,manifests:s}=Rf(n,new Set(t.names));async function a(l){let u=await fetch("companion-snowbreak://local/pkg-entry/"+encodeURIComponent(i)+"/"+l);if(!u.ok)throw new Error("\u8D44\u6E90\u8BFB\u53D6\u5931\u8D25\uFF1A"+l.slice(0,12));return new Uint8Array(await u.arrayBuffer())}async function o(l){let u=r?.find(p=>p.id===l);if(r&&!u)throw new Error("Variant unavailable");let d=u?.manifest||s[0],h=kc(zc(a));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:r?.map(({id:p,mode:g,outfit:v})=>({id:p,mode:g,outfit:v}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(n.characterId.toLowerCase()+"-collection-selection")}catch{}return o(r?.some(l=>l.id===c)?c:n.defaultVariant)}async function If(i){let e=Hd(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,1073741824,1610612736),{inflateSync:t}=await Promise.resolve().then(()=>(Af(),Tf));function n(l){let u=e.entries.get(l);if(!u)throw new Error("\u7F3A\u5C11\u8D44\u6E90\uFF1A"+l);let d=i.subarray(u.offset,u.offset+u.compressed),h=u.method===0?d.slice():t(d);if(h.length!==u.original)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");return h}let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n("manifest.json"))),{variants:s,manifests:a}=Rf(r,e.names);async function o(l){let u=s?.find(p=>p.id===l);if(s&&!u)throw new Error("Variant unavailable");let d=u?.manifest||a[0],h=kc(zc(async p=>n("assets/"+p)));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:s?.map(({id:p,mode:g,outfit:v})=>({id:p,mode:g,outfit:v}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return o(s?.some(l=>l.id===c)?c:r.defaultVariant)}function Pf(i,e,t=4096,n=null){let r=n==="quality"||n==="performance",s=n==="battery"||n==="powersave",a=s||t===2048?2048:4096,c=(r?1024:s?192:n==="adaptive"||n==="balanced"?512:e.current.characterId==="Fenny"?256:320)*(a===2048&&!s?.5:1)*1024**2,l=new Map,u=r?4096:s?512:1024,d=r?2048:s?512:1024;for(let v of i?.materials||[])if(v.renderState?.opacity!==0)for(let[m,f]of[["diffuseAssetId",!1],["normalAssetId",!0],["ormAssetId",!0],["hairHighlightAssetId",!0],["faceShadowAssetId",!0]]){let M=v[m];if(!M)continue;let _=(f?"normal:":"")+M,x=e.getAsset("texture_"+M)?.data;if(!x||![x.width,x.height].every(T=>Number.isInteger(T)&&T>0&&T<=4096))throw new Error("Missing texture dimensions");let S=/^(ma_|house_)/i.test(v.name),b=f?10:S?r?150:5:/head|face|eye/i.test(v.name)?1e3:/body00/i.test(v.name)?500:/body01/i.test(v.name)?400:/hair/i.test(v.name)?120:60,w=Math.min(a,f?u:S?d:4096),y=l.get(_);if(y){y.priority=Math.max(y.priority,b),y.cap=Math.max(y.cap,w);continue}l.set(_,{key:_,id:M,normal:f,width:x.width,height:x.height,cap:w,priority:b})}function h(v){let m=Math.min(1,v.cap/Math.max(v.width,v.height));return[Math.max(1,Math.round(v.width*m)),Math.max(1,Math.round(v.height*m))]}let p=v=>{let[m,f]=h(v);return m*f*4*4/3},g=()=>[...l.values()].reduce((v,m)=>v+p(m),0);for(;g()>c;){let v=[...l.values()].filter(m=>m.cap>512&&Math.max(m.width,m.height)>512).map(m=>({e:m,saving:p(m)-p({...m,cap:m.cap/2})})).filter(m=>m.saving>0).sort((m,f)=>m.e.priority/m.saving-f.e.priority/f.saving);if(!v.length)throw new Error("Texture memory budget exceeded");v[0].e.cap/=2}return{limitFor:(v,m=!1)=>l.get((m?"normal:":"")+v)?.cap||1024,snapshot:()=>({requestedLimit:a,budgetMiB:c/1024**2,estimatedMiB:Math.round(g()/1024**2*10)/10,textures:[...l.values()].map(v=>({id:v.id,normal:v.normal,source:[v.width,v.height],size:h(v)}))})}}var Qg={performance:"quality",balanced:"adaptive",powersave:"battery"};function e0(i){return Qg[i]||(["adaptive","quality","battery"].includes(i)?i:"adaptive")}function Lf({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,c=0,l=0,u=0,d=0,h=0,p=0,g=()=>e==="quality"?t==="critical"?30:60:e==="battery"?t==="critical"?20:30:t==="critical"?20:n||t==="serious"?30:60;function v(_,x,S){let b=e==="quality"?9e6:e==="battery"?14e5:45e5,w=e==="quality"?t==="critical"?3e6:b:t==="critical"?12e5:t==="serious"?22e5:b,y=e==="quality"?1:r;return Math.max(.5,Math.min(S||1,3,Math.sqrt(w/Math.max(1,_*x)))*y)}function m(_={}){return _.mode&&(e=e0(_.mode),e==="quality"&&(r=1)),_.thermal&&["nominal","fair","serious","critical"].includes(_.thermal)&&(t=_.thermal),typeof _.lowPower=="boolean"&&(n=_.lowPower),s=0,a=0,o=0,d=h=0,M()}function f(_=i()){let x=1e3/g();return s&&_-s<x-.75?!1:(s&&_-s<1e3&&(c+=_-s,l++),s=_,o++,a||(a=_),_-a>=2e3&&(u=o*1e3/(_-a),e==="adaptive"&&(d=u<g()*.78?d+1:0,h=u>g()*.94?h+1:0,d>=2&&r>.65?(r=Math.max(.65,r-.1),d=0,p++):h>=4&&r<1&&(r=Math.min(1,r+.05),h=0,p++)),a=_,o=0),!0)}function M(){return{mode:e,thermal:t,lowPower:n,targetFPS:g(),fps:Math.round(u*10)/10,meanFrameMs:l?Math.round(c/l*10)/10:0,scale:r,changes:p}}return{begin:f,configure:m,ratio:v,snapshot:M,resetClock(){s=0,a=0,o=0}}}var yp=0,Yu=1,_p=2;var Wa=1,Il=2,Vs=3,Pn=0,Tn=1,hn=2,Ti=0,Gs=1,Zu=2,Ku=3,$u=4,vp=5;var Ur=100,bp=101,Mp=102,Sp=103,wp=104,Ep=200,Tp=201,Ap=202,Rp=203,ju=204,Ju=205,Cp=206,Ip=207,Pp=208,Lp=209,Np=210,Up=211,Dp=212,Fp=213,Op=214,rl=0,sl=1,al=2,Ss=3,ol=4,ll=5,cl=6,ul=7,Qu=0,Bp=1,kp=2,zn=0,eh=1,th=2,nh=3,Xa=4,ih=5,rh=6,sh=7,Uu="attached",zp="detached",ah=300,dr=301,Dr=302,Pl=303,Ll=304,qa=306,kn=1e3,Qn=1001,ws=1002,Zt=1003,Nl=1004;var Fr=1005;var Dt=1006,Ws=1007;var ui=1008;var gn=1009,oh=1010,lh=1011,Xs=1012,Ul=1013,hi=1014,Hn=1015,Vn=1016,Dl=1017,Fl=1018,qs=1020,ch=35902,uh=35899,hh=1021,dh=1022,xn=1023,_i=1026,fr=1027,Ol=1028,Bl=1029,pr=1030,kl=1031;var zl=1033,Ya=33776,Za=33777,Ka=33778,$a=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,Kl=37489,ja=37490,$l=37491,jl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,ac=37817,oc=37818,lc=37819,cc=37820,uc=37821,hc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Ja=36285,gc=36286;var Ar=2300,Rr=2301,tl=2302,Du=2303,Fu=2400,Ou=2401,Bu=2402,Hp=2500;var fh=0,Qa=1,Ys=2,Vp=3200;var xc=0,Gp=1,Gn="",Ht="srgb",wn="srgb-linear",wa="linear",At="srgb";var nl=7680;var Wp=519,Xp=512,qp=513,Yp=514,yc=515,Zp=516,Kp=517,_c=518,$p=519,ph=35044,mh=35048;var gh="300 es",oi=2e3,Es=2001;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function n0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jp(){let i=Ts("canvas");return i.style.display="block",i}var Nf={},As=null;function Ea(...i){let e="THREE."+i.shift();As?As("log",e,...i):console.log(e,...i)}function Jp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=Jp(i);let e="THREE."+i.shift();if(As)As("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ut(...i){i=Jp(i);let e="THREE."+i.shift();if(As)As("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Tr(...i){let e=i.join(" ");e in Nf||(Nf[e]=!0,st(...i))}function Qp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var em={[rl]:sl,[al]:cl,[ol]:ul,[Ss]:ll,[sl]:rl,[cl]:al,[ul]:ol,[ll]:Ss},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,Ma=Math.PI/180,Cr=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function i0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function r0(i,e,t){return i!==e?(t-i)/(e-i):0}function Sa(i,e,t){return(1-t)*i+t*e}function s0(i,e,t,n){return Sa(i,e,1-Math.exp(-t*n))}function a0(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function c0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function h0(i){return i*(.5-Math.random())}function d0(i){i!==void 0&&(Uf=i);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f0(i){return i*Ma}function p0(i){return i*Cr}function m0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function g0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee={DEG2RAD:Ma,RAD2DEG:Cr,generateUUID:li,clamp:_t,euclideanModulo:xh,mapLinear:i0,inverseLerp:r0,lerp:Sa,damp:s0,pingpong:a0,smoothstep:o0,smootherstep:l0,randInt:c0,randFloat:u0,randFloatSpread:h0,seededRandom:d0,degToRad:f0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:y0,normalize:Ct,denormalize:ai},Mh=class Mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;var ct=Mh,Ke=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){let M=Math.acos(m),_=Math.sin(M);f=Math.sin(f*M)/_,o=Math.sin(o*M)/_,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),h=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sh=class Sh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;var U=Sh,uu=new U,Df=new Ke,wh=class wh{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],M=r[1],_=r[4],x=r[7],S=r[2],b=r[5],w=r[8];return s[0]=a*v+o*M+c*S,s[3]=a*m+o*_+c*b,s[6]=a*f+o*x+c*w,s[1]=l*v+u*M+d*S,s[4]=l*m+u*_+d*b,s[7]=l*f+u*x+d*w,s[2]=h*v+p*M+g*S,s[5]=h*m+p*_+g*b,s[8]=h*f+p*x+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*d+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hu.makeScale(e,t)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hu.makeRotation(-e)),this}translate(e,t){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wh.prototype.isMatrix3=!0;var dt=wh,hu=new dt,Ff=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===At&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var xt=_0();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Ts("canvas")),ls.width=e.width,ls.height=e.height;let r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v0=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(du(r[a].image)):s.push(du(r[a]))}else s=du(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var b0=0,fu=new U,an=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,r=Qn,s=Dt,a=ui,o=xn,c=gn,l=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=li(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ah;an.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(p+1)/2,S=(f+1)/2,b=(u+h)/4,w=(d+v)/4,y=(g+m)/4;return _>x&&_>S?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=b/n,s=w/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=y/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var It=Eh,dl=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new an(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ta=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Cl=class Cl{constructor(e,t,n,r,s,a,o,c,l,u,d,h,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,d,h,p,g,v,m)}set(e,t,n,r,s,a,o,c,l,u,d,h,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,S0)}lookAt(e,t,n){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),rr.crossVectors(n,Fn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),rr.crossVectors(n,Fn)),rr.normalize(),Io.crossVectors(Fn,rr),r[0]=rr.x,r[4]=Io.x,r[8]=Fn.x,r[1]=rr.y,r[5]=Io.y,r[9]=Fn.y,r[2]=rr.z,r[6]=Io.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],M=n[3],_=n[7],x=n[11],S=n[15],b=r[0],w=r[4],y=r[8],T=r[12],A=r[1],C=r[5],F=r[9],O=r[13],N=r[2],k=r[6],L=r[10],I=r[14],G=r[3],D=r[7],H=r[11],B=r[15];return s[0]=a*b+o*A+c*N+l*G,s[4]=a*w+o*C+c*k+l*D,s[8]=a*y+o*F+c*L+l*H,s[12]=a*T+o*O+c*I+l*B,s[1]=u*b+d*A+h*N+p*G,s[5]=u*w+d*C+h*k+p*D,s[9]=u*y+d*F+h*L+p*H,s[13]=u*T+d*O+h*I+p*B,s[2]=g*b+v*A+m*N+f*G,s[6]=g*w+v*C+m*k+f*D,s[10]=g*y+v*F+m*L+f*H,s[14]=g*T+v*O+m*I+f*B,s[3]=M*b+_*A+x*N+S*G,s[7]=M*w+_*C+x*k+S*D,s[11]=M*y+_*F+x*L+S*H,s[15]=M*T+_*O+x*I+S*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],M=c*p-l*h,_=o*p-l*d,x=o*h-c*d,S=a*p-l*u,b=a*h-c*u,w=a*d-o*u;return t*(v*M-m*_+f*x)-n*(g*M-m*S+f*b)+r*(g*_-v*S+f*w)-s*(g*x-v*b+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=t*o-n*a,_=t*c-r*a,x=t*l-s*a,S=n*c-r*o,b=n*l-s*o,w=r*l-s*c,y=u*v-d*g,T=u*m-h*g,A=u*f-p*g,C=d*m-h*v,F=d*f-p*v,O=h*f-p*m,N=M*O-_*F+x*C+S*A-b*T+w*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*O-c*F+l*C)*k,e[1]=(r*F-n*O-s*C)*k,e[2]=(v*w-m*b+f*S)*k,e[3]=(h*b-d*w-p*S)*k,e[4]=(c*A-a*O-l*T)*k,e[5]=(t*O-r*A+s*T)*k,e[6]=(m*x-g*w-f*_)*k,e[7]=(u*w-h*x+p*_)*k,e[8]=(a*F-o*A+l*y)*k,e[9]=(n*A-t*F-s*y)*k,e[10]=(g*b-v*x+f*M)*k,e[11]=(d*x-u*b-p*M)*k,e[12]=(o*T-a*C-c*y)*k,e[13]=(t*C-n*T+r*y)*k,e[14]=(v*_-g*S-m*M)*k,e[15]=(u*S-d*_+h*M)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,p=s*u,g=s*d,v=a*u,m=a*d,f=o*d,M=c*l,_=c*u,x=c*d,S=n.x,b=n.y,w=n.z;return r[0]=(1-(v+f))*S,r[1]=(p+x)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(h+f))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(g+_)*w,r[9]=(m-M)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(r[0],r[1],r[2]).length(),o=cs.set(r[4],r[5],r[6]).length(),c=cs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ii.copy(this);let l=1/a,u=1/o,d=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=oi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===oi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Es)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=oi,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===oi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Es)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cl.prototype.isMatrix4=!0;var et=Cl,cs=new U,ii=new et,M0=new U(0,0,0),S0=new U(1,1,1),rr=new U,Io=new U,Fn=new U,Bf=new et,kf=new Ke,Hi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,zf=new U,us=new Ke,Ui=new et,Po=new U,pa=new U,E0=new U,T0=new Ke,Hf=new U(1,0,0),Vf=new U(0,1,0),Gf=new U(0,0,1),Wf={type:"added"},A0={type:"removed"},hs={type:"childadded",child:null},pu={type:"childremoved",child:null},Ot=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Hi,n=new Ke,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new dt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Hf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(pa,Po,this.up):Ui.lookAt(Po,pa,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ui),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),hs.child=e,this.dispatchEvent(hs),hs.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function mu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=xh(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return xt.workingToColorSpace(pn.copy(this),e),Math.round(_t(pn.r*255,0,255))*65536+Math.round(_t(pn.g*255,0,255))*256+Math.round(_t(pn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(pn.copy(this),t);let n=pn.r,r=pn.g,s=pn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ht){xt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,r=pn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Lo);let n=Sa(sr.h,Lo.h,t),r=Sa(sr.s,Lo.s,t),s=Sa(sr.l,Lo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new it;it.NAMES=tm;var Vi=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new U,Di=new U,gu=new U,Fi=new U,ds=new U,fs=new U,Xf=new U,xu=new U,yu=new U,_u=new U,vu=new It,bu=new It,Mu=new It,xi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ri.subVectors(r,t),Di.subVectors(n,t),gu.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Di),c=ri.dot(gu),l=Di.dot(Di),u=Di.dot(gu),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fi.x),c.addScaledVector(a,Fi.y),c.addScaledVector(o,Fi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return vu.setScalar(0),bu.setScalar(0),Mu.setScalar(0),vu.fromBufferAttribute(e,t),bu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vu,s.x),a.addScaledVector(bu,s.y),a.addScaledVector(Mu,s.z),a}static isFrontFacing(e,t,n,r){return ri.subVectors(n,t),Di.subVectors(e,t),ri.cross(Di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ri.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ds.subVectors(r,n),fs.subVectors(s,n),xu.subVectors(e,n);let c=ds.dot(xu),l=fs.dot(xu);if(c<=0&&l<=0)return t.copy(n);yu.subVectors(e,r);let u=ds.dot(yu),d=fs.dot(yu);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ds,a);_u.subVectors(e,s);let p=ds.dot(_u),g=fs.dot(_u);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fs,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Xf.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Xf,o);let f=1/(m+v+h);return a=v*f,o=h*f,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Uo.subVectors(this.max,ma),ps.subVectors(e.a,ma),ms.subVectors(e.b,ma),gs.subVectors(e.c,ma),ar.subVectors(ms,ps),or.subVectors(gs,ms),Mr.subVectors(ps,gs);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Mr.z,Mr.y,ar.z,0,-ar.x,or.z,0,-or.x,Mr.z,0,-Mr.x,-ar.y,ar.x,0,-or.y,or.x,0,-Mr.y,Mr.x,0];return!Su(t,ps,ms,gs,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,ps,ms,gs,Uo))?!1:(Do.crossVectors(ar,or),t=[Do.x,Do.y,Do.z],Su(t,ps,ms,gs,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,No=new Kt,ps=new U,ms=new U,gs=new U,ar=new U,or=new U,Mr=new U,ma=new U,Uo=new U,Do=new U,Sr=new U;function Su(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Sr.fromArray(i,s);let o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=e.dot(Sr),l=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Jt=new U,Fo=new ct,C0=0,Gt=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Aa=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ra=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Sn=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},I0=new Kt,ga=new U,wu=new U,Cn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):I0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ga,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(wu)),this.expandByPoint(ga.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},P0=0,Jn=new et,Eu=new Ot,xs=new U,On=new Kt,xa=new Kt,sn=new U,ln=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?Ra:Aa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(On.min,xa.min),On.expandByPoint(sn),sn.addVectors(On.max,xa.max),On.expandByPoint(sn)):(On.expandByPoint(xa.min),On.expandByPoint(xa.max))}On.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)sn.fromBufferAttribute(o,l),c&&(xs.fromBufferAttribute(e,l),sn.add(xs)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new U,c[y]=new U;let l=new U,u=new U,d=new U,h=new ct,p=new ct,g=new ct,v=new U,m=new U;function f(y,T,A){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,A),u.sub(l),d.sub(l),p.sub(h),g.sub(h);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[y].add(v),o[T].add(v),o[A].add(v),c[y].add(m),c[T].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,T=M.length;y<T;++y){let A=M[y],C=A.start,F=A.count;for(let O=C,N=C+F;O<N;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let _=new U,x=new U,S=new U,b=new U;function w(y){S.fromBufferAttribute(r,y),b.copy(S);let T=o[y];_.copy(T),_.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(b,T);let C=x.dot(c[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,C)}for(let y=0,T=M.length;y<T;++y){let A=M[y],C=A.start,F=A.count;for(let O=C,N=C+F;O<N;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Gt(h,u,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mn=new U,Ls=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tu=new U,L0=new U,N0=new dt,Bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Tu.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Tu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||N0.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},U0=0,En=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Gs,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Ju,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Bi=new U,Au=new U,Oo=new U,Bo=new U,ur=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Au.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Bo.copy(this.origin).sub(Au);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=Bo.dot(this.direction),c=-Bo.dot(Oo),l=Bo.lengthSq(),u=Math.abs(1-a*a),d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Au).addScaledVector(Oo,h),p}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);let n=Bi.dot(this.direction),r=Bi.dot(Bi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,f=n.x-a.x,M=n.y-a.y,_=n.z-a.z,x=Math.abs(c),S=Math.abs(l),b=Math.abs(u),w,y,T,A,C,F,O,N,k,L,I,G;if(x>=S&&x>=b?(T=c,F=d,k=g,G=f,c>=0?(w=l,y=u,A=h,C=p,O=v,N=m,L=M,I=_):(w=u,y=l,A=p,C=h,O=m,N=v,L=_,I=M)):S>=b?(T=l,F=h,k=v,G=M,l>=0?(w=u,y=c,A=p,C=d,O=m,N=g,L=_,I=f):(w=c,y=u,A=d,C=p,O=g,N=m,L=f,I=_)):(T=u,F=p,k=m,G=_,u>=0?(w=c,y=l,A=d,C=h,O=g,N=v,L=f,I=M):(w=l,y=c,A=h,C=d,O=v,N=g,L=M,I=f)),T===0)return null;let D=w/T,H=y/T,B=1/T,Q=A-D*F,ce=C-H*F,pe=O-D*k,q=N-H*k,oe=L-D*G,z=I-H*G,$=oe*q-z*pe,ve=Q*z-ce*oe,Ve=pe*ce-q*Q;if(r){if($<0||ve<0||Ve<0)return null}else if(($<0||ve<0||Ve<0)&&($>0||ve>0||Ve>0))return null;let ye=$+ve+Ve;if(ye===0)return null;let ge=B*($*F+ve*k+Ve*G);return(ye>0?ge<0:ge>0)?null:this.at(ge/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qf=new et,wr=new ur,ko=new Cn,Yf=new U,zo=new U,Ho=new U,Vo=new U,Ru=new U,Go=new U,Zf=new U,Wo=new U,Ft=class extends Ot{constructor(e=new ln,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Go.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],d=s[c];u!==0&&(Ru.fromBufferAttribute(d,e),a?Go.addScaledVector(Ru,u):Go.addScaledVector(Ru.sub(t),u))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(ko.containsPoint(wr.origin)===!1&&(wr.intersectSphere(ko,Yf)===null||wr.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(s).invert(),wr.copy(e.ray).applyMatrix4(qf),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,S=_;x<S;x+=3){let b=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);r=Xo(this,f,e,n,l,u,d,b,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Xo(this,a,e,n,l,u,d,M,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,S=_;x<S;x+=3){let b=x,w=x+1,y=x+2;r=Xo(this,f,e,n,l,u,d,b,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=m,_=m+1,x=m+2;r=Xo(this,a,e,n,l,u,d,M,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function D0(i,e,t,n,r,s,a,o){let c;if(e.side===Tn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;Wo.copy(o),Wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,zo),i.getVertexPosition(c,Ho),i.getVertexPosition(l,Vo);let u=D0(i,e,t,n,zo,Ho,Vo,Zf);if(u){let d=new U;xi.getBarycoord(Zf,zo,Ho,Vo,d),r&&(u.uv=xi.getInterpolatedAttribute(r,o,c,l,d,new ct)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,c,l,d,new ct)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,c,l,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new U,materialIndex:0};xi.getNormal(zo,Ho,Vo,h.normal),u.face=h,u.barycoord=d}return u}var ya=new It,Kf=new It,$f=new It,F0=new It,jf=new et,qo=new U,Cu=new Cn,Jf=new et,Iu=new ur,Ca=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cu.copy(this.boundingSphere),Cu.applyMatrix4(r),e.ray.intersectsSphere(Cu)!==!1&&(Jf.copy(r).invert(),Iu.copy(e.ray).applyMatrix4(Jf),!(this.boundingBox!==null&&Iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Iu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():st("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Kf.fromBufferAttribute(r.attributes.skinIndex,e),$f.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ya.copy(t),t.set(0,0,0,0)):(ya.set(...t,1),t.set(0,0,0)),ya.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=$f.getComponent(s);if(a!==0){let o=Kf.getComponent(s);jf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(F0.copy(ya).applyMatrix4(jf),a)}}return t.isVector4&&(t.w=ya.w),t.applyMatrix4(this.bindMatrixInverse)}},Ns=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Us=class extends an{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Zt,u=Zt,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qf=new et,O0=new et,Ia=class i{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){st("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:O0;Qf.multiplyMatrices(o,t[s]),Qf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Us(t,e,e,xn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(st("Skeleton: No bone found with UUID:",s),a=new Ns),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Gi=class extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new et,ep=new et,Yo=[],tp=new Kt,B0=new et,_a=new Ft,va=new Cn,Pa=class extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,B0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),tp.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),va.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),e.ray.intersectsSphere(va)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ys),ep.multiplyMatrices(n,ys),_a.matrixWorld=ep,_a.raycast(e,Yo);for(let a=0,o=Yo.length;a<o;a++){let c=Yo[a];c.instanceId=s,c.object=this,t.push(c)}Yo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(r*this.count),r,this.count,Ol,Hn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new Cn,k0=new ct(.5,.5),Zo=new U,Ds=class{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],M=s[12],_=s[13],x=s[14],S=s[15];if(r[0].setComponents(l-a,p-u,f-g,S-M).normalize(),r[1].setComponents(l+a,p+u,f+g,S+M).normalize(),r[2].setComponents(l+o,p+d,f+v,S+_).normalize(),r[3].setComponents(l-o,p-d,f-v,S-_).normalize(),n)r[4].setComponents(c,h,m,x).normalize(),r[5].setComponents(l-c,p-h,f-m,S-x).normalize();else if(r[4].setComponents(l-c,p-h,f-m,S-x).normalize(),t===oi)r[5].setComponents(l+c,p+h,f+m,S+x).normalize();else if(t===Es)r[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=k0.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zo.x=r.normal.x>0?e.max.x:e.min.x,Zo.y=r.normal.y>0?e.max.y:e.min.y,Zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fs=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pl=new U,ml=new U,np=new et,ba=new ur,Ko=new Cn,Pu=new U,ip=new U,Ir=class extends Ot{constructor(e=new ln,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pl.fromBufferAttribute(t,r-1),ml.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new Sn(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;np.copy(r).invert(),ba.copy(e.ray).applyMatrix4(np);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=u.getX(v),M=u.getX(v+1),_=$o(this,e,ba,c,f,M,v);_&&t.push(_)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),f=$o(this,e,ba,c,v,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=$o(this,e,ba,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=$o(this,e,ba,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $o(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(pl.fromBufferAttribute(o,r),ml.fromBufferAttribute(o,s),t.distanceSqToSegment(pl,ml,Pu,ip)>n)return;Pu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pu);if(!(l<e.near||l>e.far))return{distance:l,point:ip.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var rp=new U,sp=new U,La=class extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)rp.fromBufferAttribute(t,r),sp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+rp.distanceTo(sp);e.setAttribute("lineDistance",new Sn(n,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Na=class extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Os=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ap=new et,ku=new ur,jo=new Cn,Jo=new U,Ua=class extends Ot{constructor(e=new ln,t=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;ap.copy(r).invert(),ku.copy(e.ray).applyMatrix4(ap);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,v=p;g<v;g++){let m=l.getX(g);Jo.fromBufferAttribute(d,m),op(Jo,m,c,r,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=h,v=p;g<v;g++)Jo.fromBufferAttribute(d,g),op(Jo,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function op(i,e,t,n,r,s,a){let o=ku.distanceSqToPoint(i);if(o<t){let c=new U;ku.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends an{constructor(e=[],t=dr,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var hr=class extends an{constructor(e,t,n=hi,r,s,a,o=Zt,c=Zt,l,u=_i,d=1){if(u!==_i&&u!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gl=class extends hr{constructor(e,t=hi,n=dr,r,s,a=Zt,o=Zt,c,l=_i){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bs=class i extends ln{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(d,2));function g(v,m,f,M,_,x,S,b,w,y,T){let A=x/w,C=S/y,F=x/2,O=S/2,N=b/2,k=w+1,L=y+1,I=0,G=0,D=new U;for(let H=0;H<L;H++){let B=H*C-O;for(let Q=0;Q<k;Q++){let ce=Q*A-F;D[v]=ce*M,D[m]=B*_,D[f]=N,l.push(D.x,D.y,D.z),D[v]=0,D[m]=0,D[f]=b>0?1:-1,u.push(D.x,D.y,D.z),d.push(Q/w),d.push(1-H/y),I+=1}}for(let H=0;H<y;H++)for(let B=0;B<w;B++){let Q=h+B+k*H,ce=h+B+k*(H+1),pe=h+(B+1)+k*(H+1),q=h+(B+1)+k*H;c.push(Q,ce,q),c.push(ce,pe,q),G+=6}o.addGroup(p,G,T),p+=G,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ci=class i extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let M=f*h-a;for(let _=0;_<l;_++){let x=_*d-s;g.push(x,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let _=M+l*f,x=M+l*(f+1),S=M+1+l*(f+1),b=M+1+l*f;p.push(_,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Oa=class extends En{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(lp(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(lp(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Or(i[t]);for(let r in n)e[r]=n[r]}return e}function lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function z0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var nm={clone:Or,merge:yn},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(r.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new It().fromArray(r.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new et().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xl=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pr=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mn=class extends Pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var yl=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function G0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function cp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function W0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:s=e,o=2*t-n;break;case Bu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ou:a=e,c=2*n-t;break;case Bu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,f=-h*m+2*h*v-h*g,M=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let S=0;S!==o;++S)s[S]=f*a[u+S]+M*a[l+S]+_*a[c+S]+x*a[d+S];return s}},bl=class extends bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}},Ml=class extends bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends bi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(r-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*v+a[c+m]*g;return s}let h=o*2,p=e-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],f=p*h+g*2,M=d[f],_=d[f+1],x=e*h+g*2,S=u[x],b=u[x+1],w=q0(n,t,M,S,r);s[g]=im(w,v,_,b,m)}return s}};function im(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function X0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function q0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=im(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=X0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var In=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),il(e.settings)&&(n.settings={inTangents:cr(e.settings.inTangents,Array),outTangents:cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break;case Du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;il(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ut("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ut("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&n0(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ut("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,il(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function up(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Rr;var Wi=class extends In{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName="color";var Xi=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};Xi.prototype.ValueTypeName="number";var wl=class extends bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)Ke.slerpFlat(s,0,a,l-o,a,l,c);return s}},Mi=class extends In{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends In{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ar;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};Yi.prototype.ValueTypeName="vector";var ks=class{constructor(e="",t=-1,n=[],r=Hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Z0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(In.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=G0(c);c=cp(c,1,u),l=cp(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let d=u[1],h=r[d];h||(r[d]=h=[]),h.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Y0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return Ba;case"quaternion":return Mi;case"bool":case"boolean":return Wi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Z0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Y0(i.type);if(i.times===void 0){let n=[],r=[];W0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),il(i.settings)&&(t.settings={inTangents:cr(i.settings.inTangents,Float32Array),outTangents:cr(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(hp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!hp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function hp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var El=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new El,Si=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},zu=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=yi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&st("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ki[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0,v=0,m=new ReadableStream({start(f){M();function M(){d.read().then(({done:_,value:x})=>{if(_)f.close();else{v+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,w=u.length;b<w;b++){let y=u[b];y.onProgress&&y.onProgress(S)}f.enqueue(x),M()}},_=>{f.error(_)})}}});return new Response(m)}else throw new zu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{yi.add(`file:${e}`,l);let u=ki[e];delete ki[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=ki[e];if(u===void 0)throw this.manager.itemError(e),l;delete ki[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=new WeakMap,Tl=class extends Si{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=_s.get(a);d===void 0&&(d=[],_s.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=Ts("img");function c(){u(),t&&t(this);let d=_s.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onLoad&&p.onLoad(this)}_s.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),yi.remove(`image:${e}`);let h=_s.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(d)}_s.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var wi=class extends Si{constructor(e){super(e)}load(e,t,n,r){let s=new an,a=new Tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Lr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ka=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lu=new et,dp=new U,fp=new U,Hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Es||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qo=new U,el=new Ke,gi=new U,za=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,el,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qo,el,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},lr=new U,pp=new ct,mp=new ct,Qt=class extends za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hu=class extends Hs{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ha=class extends Lr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Vu=class extends Hs{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends Lr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ei=class extends za{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gu=class extends Hs{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Gu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nu=new WeakMap,Ga=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&st("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&st("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{Nu.has(a)===!0?(r&&r(Nu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Nu.set(c,l),yi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var vs=-90,bs=1,Al=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qt(vs,bs,e,t);r.layers=this.layers,this.add(r);let s=new Qt(vs,bs,e,t);s.layers=this.layers,this.add(s);let a=new Qt(vs,bs,e,t);a.layers=this.layers,this.add(a);let o=new Qt(vs,bs,e,t);o.layers=this.layers,this.add(o);let c=new Qt(vs,bs,e,t);c.layers=this.layers,this.add(c);let l=new Qt(vs,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rl=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _h="\\[\\]\\.:\\/",K0=new RegExp("["+_h+"]","g"),vh="[^"+_h+"]",$0="[^"+_h.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",vh),J0=/(WCOD+)?/.source.replace("WCOD",$0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),tx=new RegExp("^"+j0+J0+Q0+ex+"$"),nx=["material","materials","bones","map"],Wu=class{constructor(e,t,n){let r=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){let t=tx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);nx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;ut("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Wu;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var gp=new et,Nr=class{constructor(e,t,n=0,r=1/0){this.ray=new ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return Xu(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Xu(e[r],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function Xu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Xu(s[a],e,t,!0)}}var Th=class Th{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Th.prototype.isMatrix2=!0;var qu=Th;function bh(i,e,t,n){let r=ix(n);switch(t){case hh:return i*e;case Ol:return i*e/r.components*r.byteLength;case Bl:return i*e/r.components*r.byteLength;case pr:return i*e*2/r.components*r.byteLength;case kl:return i*e*2/r.components*r.byteLength;case dh:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case zl:return i*e*4/r.components*r.byteLength;case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(i,8)*Math.max(e,8)/2;case Xl:case ql:case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ja:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ja:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(i){switch(i){case gn:case oh:return{byteLength:1,components:1};case Xs:case lh:case Vn:return{byteLength:2,components:1};case Dl:case Fl:return{byteLength:2,components:4};case hi:case Ul:case Hn:return{byteLength:4,components:1};case ch:case uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ox(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ey=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ay=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:dx,alphatest_pars_fragment:fx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:bx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Ix,common:Px,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Dx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:Bx,colorspace_pars_fragment:kx,envmap_fragment:zx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ey,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:Yx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:$x,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ty,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:ay,lights_fragment_begin:oy,lights_fragment_maps:ly,lights_fragment_end:cy,lightprobes_pars_fragment:uy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:vy,morphinstance_vertex:by,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:wy,morphtarget_vertex:Ey,normal_fragment_begin:Ty,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:Iy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Dy,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:By,project_vertex:ky,dithering_fragment:zy,dithering_pars_fragment:Hy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:Zy,skinning_pars_vertex:Ky,skinning_vertex:$y,skinnormal_vertex:jy,specularmap_fragment:Jy,specularmap_pars_fragment:Qy,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:r_,uv_pars_vertex:s_,uv_vertex:a_,worldpos_vertex:o_,background_vert:l_,background_frag:c_,backgroundCube_vert:u_,backgroundCube_frag:h_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distance_vert:g_,distance_frag:x_,equirect_vert:y_,equirect_frag:__,linedashed_vert:v_,linedashed_frag:b_,meshbasic_vert:M_,meshbasic_frag:S_,meshlambert_vert:w_,meshlambert_frag:E_,meshmatcap_vert:T_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:I_,meshphong_frag:P_,meshphysical_vert:L_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:D_,points_vert:F_,points_frag:O_,shadow_vert:B_,shadow_frag:k_,sprite_vert:z_,sprite_frag:H_},ze={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ri={basic:{uniforms:yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:yn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:yn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:yn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new it(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:yn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:yn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:yn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:yn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:yn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:yn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:yn([ze.common,ze.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:yn([ze.lights,ze.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ri.physical={uniforms:yn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var vc={r:0,b:0,g:0},V_=new et,Am=new dt;Am.set(-1,0,0,0,1,0,0,0,1);function G_(i,e,t,n,r,s){let a=new it(0),o=r===!0?0:1,c,l,u=null,d=0,h=null;function p(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let x=M.backgroundBlurriness>0;_=e.get(_,x)}return _}function g(M){let _=!1,x=p(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,_){let x=p(_);x&&(x.isCubeTexture||x.mapping===qa)?(l===void 0&&(l=new Ft(new Bs(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Or(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Am),l.material.toneMapped=xt.getTransfer(x.colorSpace)!==At,(u!==x||d!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ft(new ci(2,2),new un({name:"BackgroundMaterial",uniforms:Or(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=xt.getTransfer(x.colorSpace)!==At,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(vc,yh(i)),t.buffers.color.setClear(vc.r,vc.g,vc.b,_,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:f}}function W_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(C,F,O,N,k){let L=!1,I=d(C,N,O,F);s!==I&&(s=I,l(s.object)),L=p(C,N,O,k),L&&g(C,N,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(C,F,O,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function d(C,F,O,N){let k=N.wireframe===!0,L=n[F.id];L===void 0&&(L={},n[F.id]=L);let I=C.isInstancedMesh===!0?C.id:0,G=L[I];G===void 0&&(G={},L[I]=G);let D=G[O.id];D===void 0&&(D={},G[O.id]=D);let H=D[k];return H===void 0&&(H=h(c()),D[k]=H),H}function h(C){let F=[],O=[],N=[];for(let k=0;k<t;k++)F[k]=0,O[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:N,object:C,attributes:{},index:null}}function p(C,F,O,N){let k=s.attributes,L=F.attributes,I=0,G=O.getAttributes();for(let D in G)if(G[D].location>=0){let B=k[D],Q=L[D];if(Q===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;I++}return s.attributesNum!==I||s.index!==N}function g(C,F,O,N){let k={},L=F.attributes,I=0,G=O.getAttributes();for(let D in G)if(G[D].location>=0){let B=L[D];B===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));let Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),k[D]=Q,I++}s.attributes=k,s.attributesNum=I,s.index=N}function v(){let C=s.newAttributes;for(let F=0,O=C.length;F<O;F++)C[F]=0}function m(C){f(C,0)}function f(C,F){let O=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;O[C]=1,N[C]===0&&(i.enableVertexAttribArray(C),N[C]=1),k[C]!==F&&(i.vertexAttribDivisor(C,F),k[C]=F)}function M(){let C=s.newAttributes,F=s.enabledAttributes;for(let O=0,N=F.length;O<N;O++)F[O]!==C[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function _(C,F,O,N,k,L,I){I===!0?i.vertexAttribIPointer(C,F,O,k,L):i.vertexAttribPointer(C,F,O,N,k,L)}function x(C,F,O,N){v();let k=N.attributes,L=O.getAttributes(),I=F.defaultAttributeValues;for(let G in L){let D=L[G];if(D.location>=0){let H=k[G];if(H===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){let B=H.normalized,Q=H.itemSize,ce=e.get(H);if(ce===void 0)continue;let pe=ce.buffer,q=ce.type,oe=ce.bytesPerElement,z=q===i.INT||q===i.UNSIGNED_INT||H.gpuType===Ul;if(H.isInterleavedBufferAttribute){let $=H.data,ve=$.stride,Ve=H.offset;if($.isInstancedInterleavedBuffer){for(let ye=0;ye<D.locationSize;ye++)f(D.location+ye,$.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ye=0;ye<D.locationSize;ye++)m(D.location+ye);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ye=0;ye<D.locationSize;ye++)_(D.location+ye,Q/D.locationSize,q,B,ve*oe,(Ve+Q/D.locationSize*ye)*oe,z)}else{if(H.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)f(D.location+$,H.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let $=0;$<D.locationSize;$++)m(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let $=0;$<D.locationSize;$++)_(D.location+$,Q/D.locationSize,q,B,Q*oe,Q/D.locationSize*$*oe,z)}}else if(I!==void 0){let B=I[G];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(D.location,B);break;case 3:i.vertexAttrib3fv(D.location,B);break;case 4:i.vertexAttrib4fv(D.location,B);break;default:i.vertexAttrib1fv(D.location,B)}}}}M()}function S(){T();for(let C in n){let F=n[C];for(let O in F){let N=F[O];for(let k in N){let L=N[k];for(let I in L)u(L[I].object),delete L[I];delete N[k]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let F=n[C.id];for(let O in F){let N=F[O];for(let k in N){let L=N[k];for(let I in L)u(L[I].object),delete L[I];delete N[k]}}delete n[C.id]}function w(C){for(let F in n){let O=n[F];for(let N in O){let k=O[N];if(k[C.id]===void 0)continue;let L=k[C.id];for(let I in L)u(L[I].object),delete L[I];delete k[C.id]}}}function y(C){for(let F in n){let O=n[F],N=C.isInstancedMesh===!0?C.id:0,k=O[N];if(k!==void 0){for(let L in k){let I=k[L];for(let G in I)u(I[G].object),delete I[G];delete k[L]}delete O[N],Object.keys(O).length===0&&delete n[F]}}}function T(){A(),a=!0,s!==r&&(s=r,l(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function X_(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function q_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gn&&w!==Hn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(st("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Y_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Bn,o=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:n,_=M*4,x=f.clippingState||null;c.value=x,x=u(g,h,_,p);for(let S=0;S!==_;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)a.copy(d[_]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Ks=4,Z_=6,K_=20,$_=256,eo=new Ei,sm=new it,Ah=null,Rh=0,Ch=0,Ih=!1,j_=new U,Br=new U,js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=j_}=s;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ih,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Vn,format:xn,colorSpace:wn,depthBuffer:!1},r=am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J_(s)),this._blurMaterial=ev(s,e,t),this._ggxMaterial=Q_(s,e,t)}return r}_compileMaterial(e){let t=new Ft(new ln,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,r,s){let c=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(sm),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Bs,new cn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(sm),f=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));let S=this._cubeSize;Zs(r,x*S,_>2?S:0,S,S),d.setRenderTarget(r),f&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===dr||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ks?n-g+Ks:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Zs(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,eo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Zs(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,eo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-Ks?r-this._lodMax+Ks:0),h=4*(this._cubeSize-u);Zs(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,eo)}};function J_(i){let e=[],t=[],n=i,r=i-Ks+1+Z_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,g=new Float32Array(p*h*d),v=new Float32Array(p*h*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,_=f>2?0:-1,x=[M,_,0,M+2/3,_,0,M+2/3,_+1,0,M,_,0,M+2/3,_+1,0,M,_+1,0];g.set(x,p*h*f);for(let S=0;S<h;S++){let b=u[S*2]*2-1,w=u[S*2+1]*2-1;f===0?Br.set(1,w,b):f===1?Br.set(-b,1,-w):f===2?Br.set(-b,w,1):f===3?Br.set(-1,w,-b):f===4?Br.set(-b,-1,w):Br.set(b,w,-1),Br.toArray(v,(f*h+S)*p)}}let m=new ln;m.setAttribute("position",new Gt(g,p)),m.setAttribute("outputDirection",new Gt(v,p)),t.push(new Ft(m,null)),n>Ks&&n--}return{lodMeshes:t,sizeLods:e}}function am(i,e,t){let n=new on(i,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Q_(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ev(i,e,t){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:K_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function om(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lm(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mc=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Da(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bs(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ti});s.uniforms.tEquirect.value=t;let a=new Ft(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Dt),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function tv(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Pl||p===Ll)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Mc(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===Pl||p===Ll,v=p===dr||p===Dr;if(g||v){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new js(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new js(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Pl?h.mapping=dr:p===Ll&&(h.mapping=Dr),h}function c(h){let p=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){let p=h.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function nv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Tr("WebGLRenderer: "+n+" extension not supported."),r}}}function iv(i,e,t,n){let r={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let M=p.array;v=p.version;for(let _=0,x=M.length;_<x;_+=3){let S=M[_+0],b=M[_+1],w=M[_+2];h.push(S,b,b,w,w,S)}}else{let M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){let S=_+0,b=_+1,w=_+2;h.push(S,b,b,w,w,S)}}let m=new(g.count>=65535?Ra:Aa)(h,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function rv(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,d*a,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function av(i,e,t){let n=new WeakMap,r=new It;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*S*4*d),w=new Ta(b,x,S,d);w.type=Hn,w.needsUpdate=!0;let y=_*4;for(let A=0;A<d;A++){let C=m[A],F=f[A],O=M[A],N=x*S*4*A;for(let k=0;k<C.count;k++){let L=k*y;p===!0&&(r.fromBufferAttribute(C,k),b[N+L+0]=r.x,b[N+L+1]=r.y,b[N+L+2]=r.z,b[N+L+3]=0),g===!0&&(r.fromBufferAttribute(F,k),b[N+L+4]=r.x,b[N+L+5]=r.y,b[N+L+6]=r.z,b[N+L+7]=0),v===!0&&(r.fromBufferAttribute(O,k),b[N+L+8]=r.x,b[N+L+9]=r.y,b[N+L+10]=r.z,b[N+L+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new ct(x,S)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function ov(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var lv={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function cv(i,e,t,n,r,s){let a=new on(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ln;l.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let u=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(l,u),h=new Ei(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,M=[],_=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let b=0;b<M.length;b++){let w=M[b];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){M=x,_=M.length>0&&M[0].isRenderPass===!0;let S=a.width,b=a.height;M.length>0&&o===null&&(o=new on(S,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new on(S,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let y=M[w];y.setSize&&y.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===zn&&M.length===0)return!1;if(f=S,S!==null){let b=S.width,w=S.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return _===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return _},this.end=function(x,S){x.toneMapping=m,v=!0;let b=a,w=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(x,w,b,S),T.needsSwap!==!1&&(b=w,w=w===o?c:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,u.defines={},xt.getTransfer(p)===At&&(u.defines.SRGB_TRANSFER="");let y=lv[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(f),x.render(d,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rm=new an,Nh=new hr(1,1),Cm=new Ta,Im=new fl,Pm=new Da,cm=[],um=[],hm=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function Js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=um[e];t===void 0&&(t=new Int32Array(e),um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;fm.set(n),i.uniformMatrix2fv(this.addr,!1,fm),nn(t,n)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;dm.set(n),i.uniformMatrix3fv(this.addr,!1,dm),nn(t,n)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;hm.set(n),i.uniformMatrix4fv(this.addr,!1,hm),nn(t,n)}}function xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Ev(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?_c:yc,s=Nh):s=Rm,t.setTexture2D(e||s,r)}function Tv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Im,r)}function Av(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pm,r)}function Rv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cm,r)}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return yv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return bv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Iv(i,e){i.uniform1fv(this.addr,e)}function Pv(i,e){let t=Js(e,this.size,2);i.uniform2fv(this.addr,t)}function Lv(i,e){let t=Js(e,this.size,3);i.uniform3fv(this.addr,t)}function Nv(i,e){let t=Js(e,this.size,4);i.uniform4fv(this.addr,t)}function Uv(i,e){let t=Js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dv(i,e){let t=Js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fv(i,e){let t=Js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ov(i,e){i.uniform1iv(this.addr,e)}function Bv(i,e){i.uniform2iv(this.addr,e)}function kv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function Hv(i,e){i.uniform1uiv(this.addr,e)}function Vv(i,e){i.uniform2uiv(this.addr,e)}function Gv(i,e){i.uniform3uiv(this.addr,e)}function Wv(i,e){i.uniform4uiv(this.addr,e)}function Xv(i,e,t){let n=this.cache,r=e.length,s=Ec(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nh:a=Rm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function qv(i,e,t){let n=this.cache,r=e.length,s=Ec(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Im,s[a])}function Yv(i,e,t){let n=this.cache,r=e.length,s=Ec(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pm,s[a])}function Zv(i,e,t){let n=this.cache,r=e.length,s=Ec(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cm,s[a])}function Kv(i){switch(i){case 5126:return Iv;case 35664:return Pv;case 35665:return Lv;case 35666:return Nv;case 35674:return Uv;case 35675:return Dv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Zv}}var Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}},Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}},Fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function pm(i,e){i.seq.push(e),i.map[e.id]=e}function $v(i,e,t){let n=i.name,r=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),a=Ph.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){pm(t,l===void 0?new Uh(o,i,e):new Dh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Fh(o),pm(t,d)),t=d}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$v(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function mm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jv=37297,Jv=0;function Qv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var gm=new dt;function eb(i){xt._getMatrix(gm,xt.workingColorSpace,i);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Qv(i.getShaderSource(e),o)}else return s}function tb(i,e){let t=eb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var nb={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[Xa]:"ACESFilmic",[rh]:"AgX",[sh]:"Neutral",[ih]:"Custom"};function ib(i,e){let t=nb[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new U;function rb(){xt.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function ab(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ob(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function no(i){return i!==""}function ym(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(i){return i.replace(lb,ub)}var cb=new Map;function ub(i,e){let t=gt[e];if(t===void 0){let n=cb.get(e);if(n!==void 0)t=gt[n],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(t)}var hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(i){return i.replace(hb,db)}function db(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var fb={[Wa]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function pb(i){return fb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mb={[dr]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function gb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xb={[Dr]:"ENVMAP_MODE_REFRACTION"};function yb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _b={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function vb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_b[i.combine]||"ENVMAP_BLENDING_NONE"}function bb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mb(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=pb(t),l=gb(t),u=yb(t),d=vb(t),h=bb(t),p=sb(t),g=ab(s),v=r.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),f.length>0&&(f+=`
`)):(m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),f=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?gt.tonemapping_pars_fragment:"",t.toneMapping!==zn?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Oh(a),a=ym(a,t),a=_m(a,t),o=Oh(o),o=ym(o,t),o=_m(o,t),a=vm(a),o=vm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=M+m+a,x=M+f+o,S=mm(r,r.VERTEX_SHADER,_),b=mm(r,r.FRAGMENT_SHADER,x);r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(C){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(b)||"",k=F.trim(),L=O.trim(),I=N.trim(),G=!0,D=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,b);else{let H=xm(r,S,"vertex"),B=xm(r,b,"fragment");ut("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+H+`
`+B)}else k!==""?st("WebGLProgram: Program Info Log:",k):(L===""||I==="")&&(D=!1);D&&(C.diagnostics={runnable:G,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:I,prefix:f}})}r.deleteShader(S),r.deleteShader(b),y=new $s(r,v),T=ob(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,jv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Sb=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kh(e),t.set(e,n)),n}},kh=class{constructor(e){this.id=Sb++,this.code=e,this.usedTimes=0}};function wb(i){return i===pr||i===ja||i===Ja}function Eb(i,e,t,n,r,s){let a=new Cs,o=new Bh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,T,A,C,F,O){let N=C.fog,k=F.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||L,I),D=G&&G.mapping===qa?G.image.height:null,H=p[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&st("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let B=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=B!==void 0?B.length:0,ce=0;k.morphAttributes.position!==void 0&&(ce=1),k.morphAttributes.normal!==void 0&&(ce=2),k.morphAttributes.color!==void 0&&(ce=3);let pe,q,oe,z;if(H){let We=Ri[H];pe=We.vertexShader,q=We.fragmentShader}else{pe=y.vertexShader,q=y.fragmentShader;let We=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,We,at),oe=We.id,z=at.id}let $=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ve=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,ge=!!y.map,Re=!!y.matcap,Oe=!!G,Ze=!!y.aoMap,Fe=!!y.lightMap,Se=!!y.bumpMap&&y.wireframe===!1,J=!!y.normalMap,he=!!y.displacementMap,se=!!y.emissiveMap,me=!!y.metalnessMap,Me=!!y.roughnessMap,V=y.anisotropy>0,Je=y.clearcoat>0,Ge=y.dispersion>0,P=y.retroreflectivity>0,E=y.iridescence>0,W=y.sheen>0,j=y.transmission>0,ie=V&&!!y.anisotropyMap,re=Je&&!!y.clearcoatMap,ue=Je&&!!y.clearcoatNormalMap,te=Je&&!!y.clearcoatRoughnessMap,le=E&&!!y.iridescenceMap,be=E&&!!y.iridescenceThicknessMap,Pe=W&&!!y.sheenColorMap,Le=W&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Qe=!!y.specularColorMap,ot=!!y.specularIntensityMap,lt=j&&!!y.transmissionMap,Z=j&&!!y.thicknessMap,Ie=!!y.gradientMap,fe=!!y.alphaMap,Ae=y.alphaTest>0,xe=!!y.alphaHash,K=!!y.extensions,we=zn;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(we=i.toneMapping);let _e={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:pe,fragmentShader:q,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&F.instanceColor!==null,instancingMorph:Ve&&F.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ge,matcap:Re,envMap:Oe,envMapMode:Oe&&G.mapping,envMapCubeUVHeight:D,aoMap:Ze,lightMap:Fe,bumpMap:Se,normalMap:J,displacementMap:he,emissiveMap:se,normalMapObjectSpace:J&&y.normalMapType===Gp,normalMapTangentSpace:J&&y.normalMapType===xc,packedNormalMap:J&&y.normalMapType===xc&&wb(y.normalMap.format),metalnessMap:me,roughnessMap:Me,anisotropy:V,anisotropyMap:ie,clearcoat:Je,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:te,dispersion:Ge,retroreflection:P,iridescence:E,iridescenceMap:le,iridescenceThicknessMap:be,sheen:W,sheenColorMap:Pe,sheenRoughnessMap:Le,specularMap:Ne,specularColorMap:Qe,specularIntensityMap:ot,transmission:j,transmissionMap:lt,thicknessMap:Z,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:xe,combine:y.combine,mapUv:ge&&g(y.map.channel),aoMapUv:Ze&&g(y.aoMap.channel),lightMapUv:Fe&&g(y.lightMap.channel),bumpMapUv:Se&&g(y.bumpMap.channel),normalMapUv:J&&g(y.normalMap.channel),displacementMapUv:he&&g(y.displacementMap.channel),emissiveMapUv:se&&g(y.emissiveMap.channel),metalnessMapUv:me&&g(y.metalnessMap.channel),roughnessMapUv:Me&&g(y.roughnessMap.channel),anisotropyMapUv:ie&&g(y.anisotropyMap.channel),clearcoatMapUv:re&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(y.sheenRoughnessMap.channel),specularMapUv:Ne&&g(y.specularMap.channel),specularColorMapUv:Qe&&g(y.specularColorMap.channel),specularIntensityMapUv:ot&&g(y.specularIntensityMap.channel),transmissionMapUv:lt&&g(y.transmissionMap.channel),thicknessMapUv:Z&&g(y.thicknessMap.channel),alphaMapUv:fe&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(J||V),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(ge||fe),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&J===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===At,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===At,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:K&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)T.push(A),T.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(f(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function f(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function _(y){let T=p[y.type],A;if(T){let C=Ri[T];A=nm.clone(C.uniforms)}else A=y.uniforms;return A}function x(y,T){let A=u.get(T);return A!==void 0?++A.usedTimes:(A=new Mb(i,T,y,r),l.push(A),u.set(T,A)),A}function S(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:w}}function Tb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ab(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,m,f){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},i[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=a(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function c(h,p,g,v,m,f,M){M.reversedDepth===!0&&(m=-m);let _=o(h,p,g,v,m,f);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):t.push(_)}function l(h,p,g,v,m,f){let M=o(h,p,g,v,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||Ab),n.length>1&&n.sort(p||Mm),r.length>1&&r.sort(p||Mm)}function d(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function Rb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Sm,i.set(n,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new it};break;case"SpotLight":t={position:new U,direction:new U,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Ib(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Pb=0;function Lb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nb(i){let e=new Cb,t=Ib(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let r=new U,s=new et,a=new et;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,M=0,_=0,x=0,S=0,b=0,w=0,y=0,T=0,A=0;l.sort(Lb);for(let F=0,O=l.length;F<O;F++){let N=l[F],k=N.color,L=N.intensity,I=N.distance,G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===pr?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*L,d+=k.g*L,h+=k.b*L;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],L);A++}else if(N.isSunLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let H=N.shadow,B=t.get(N);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=G;let Q=H.getViewportCount();for(let ce=0;ce<Q;ce++)n.sunShadowMatrix[v+ce]=H.getMatrix(ce),n.sunShadowCascade[v+ce]=H._cascadeData[ce];v+=Q,g++}n.sun[p]=D,p++}else if(N.isDirectionalLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let H=N.shadow,B=t.get(N);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=D,m++}else if(N.isSpotLight){let D=e.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(k).multiplyScalar(L),D.distance=I,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[M]=D;let H=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,H.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[M]=H.matrix,N.castShadow){let B=t.get(N);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=G,w++}M++}else if(N.isRectAreaLight){let D=e.get(N);D.color.copy(k).multiplyScalar(L),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=D,_++}else if(N.isPointLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let H=N.shadow,B=t.get(N);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[f]=B,n.pointShadowMap[f]=G,n.pointShadowMatrix[f]=N.shadow.matrix,b++}n.point[f]=D,f++}else if(N.isHemisphereLight){let D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(L),D.groundColor.copy(N.groundColor).multiplyScalar(L),n.hemi[x]=D,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==f||C.spotLength!==M||C.rectAreaLength!==_||C.hemiLength!==x||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==y||C.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.sunLength=p,C.directionalLength=m,C.pointLength=f,C.spotLength=M,C.rectAreaLength=_,C.hemiLength=x,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=y,C.numLightProbes=A,n.version=Pb++)}function c(l,u){let d=0,h=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=l.length;M<_;M++){let x=l[M];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),h++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function wm(i){let e=new Nb(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ub(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new wm(i),e.set(r,[o])):s>=a.length?(o=new wm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ob=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Bb=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Em=new et,to=new U,Lh=new U;function kb(i,e,t){let n=new Ds,r=new ct,s=new ct,a=new It,o=new yl,c=new _l,l={},u=t.maxTextureSize,d={[Pn]:Tn,[Tn]:Pn,[hn]:hn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Db,fragmentShader:Fb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let f=this.type;this.render=function(b,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Il&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wa);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=f!==this.type;O&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){let L=b[N],I=L.shadow;if(I===void 0){st("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let G=I.getFrameExtents();r.multiply(G),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,I.mapSize.y=s.y));let D=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=D,I.map===null||O===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Vs){if(L.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new on(r.x,r.y,{format:pr,type:Vn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new hr(r.x,r.y,Hn),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=_i,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Zt,I.map.depthTexture.magFilter=Zt}else L.isPointLight?(I.map=new Mc(r.x),I.map.depthTexture=new gl(r.x,hi)):(I.map=new on(r.x,r.y),I.map.depthTexture=new hr(r.x,r.y,hi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=_i,this.type===Wa?(I.map.depthTexture.compareFunction=D?_c:yc,I.map.depthTexture.minFilter=Dt,I.map.depthTexture.magFilter=Dt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Zt,I.map.depthTexture.magFilter=Zt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let H=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();L.isPointLight!==!0&&I.updateMatrices(L,y);for(let B=0;B<H;B++){let Q=I.getCamera(B);if(L.isPointLight){let ce=I.camera,pe=I.matrix,q=L.distance||ce.far;q!==ce.far&&(ce.far=q,ce.updateProjectionMatrix()),to.setFromMatrixPosition(L.matrixWorld),ce.position.copy(to),Lh.copy(ce.position),Lh.add(Ob[B]),ce.up.copy(Bb[B]),ce.lookAt(Lh),ce.updateMatrixWorld(),pe.makeTranslation(-to.x,-to.y,-to.z),Em.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Em,ce.coordinateSystem,ce.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,B),i.clear();else{B===0&&(i.setRenderTarget(I.map),i.clear());let ce=I.getViewport(B);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),F.viewport(a)}n=I.getFrustum(B),x(w,y,Q,L,this.type)}I.isPointLightShadow!==!0&&this.type===Vs&&M(I,y),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,A,C)};function M(b,w){let y=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new on(r.x,r.y,{format:pr,type:Vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,y,p,v,null)}function _(b,w,y,T){let A=null,C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)A=C;else if(A=y.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=A.uuid,O=w.uuid,N=l[F];N===void 0&&(N={},l[F]=N);let k=N[O];k===void 0&&(k=A.clone(),N[O]=k,w.addEventListener("dispose",S)),A=k}if(A.visible=w.visible,A.wireframe=w.wireframe,T===Vs?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=y}return A}function x(b,w,y,T,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Vs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let O=e.update(b),N=b.material;if(Array.isArray(N)){let k=O.groups;for(let L=0,I=k.length;L<I;L++){let G=k[L],D=N[G.materialIndex];if(D&&D.visible){let H=_(b,D,T,A);b.onBeforeShadow(i,b,w,y,O,H,G),i.renderBufferDirect(y,null,O,H,b,G),b.onAfterShadow(i,b,w,y,O,H,G)}}}else if(N.visible){let k=_(b,N,T,A);b.onBeforeShadow(i,b,w,y,O,k,null),i.renderBufferDirect(y,null,O,k,b,null),b.onAfterShadow(i,b,w,y,O,k,null)}}let F=b.children;for(let O=0,N=F.length;O<N;O++)x(F[O],w,y,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let y in l){let T=l[y],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function zb(i,e){function t(){let Z=!1,Ie=new It,fe=null,Ae=new It(0,0,0,0);return{setMask:function(xe){fe!==xe&&!Z&&(i.colorMask(xe,xe,xe,xe),fe=xe)},setLocked:function(xe){Z=xe},setClear:function(xe,K,we,_e,We){We===!0&&(xe*=_e,K*=_e,we*=_e),Ie.set(xe,K,we,_e),Ae.equals(Ie)===!1&&(i.clearColor(xe,K,we,_e),Ae.copy(Ie))},reset:function(){Z=!1,fe=null,Ae.set(-1,0,0,0)}}}function n(){let Z=!1,Ie=!1,fe=null,Ae=null,xe=null;return{setReversed:function(K){if(Ie!==K){let we=e.get("EXT_clip_control");K?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ie=K;let _e=xe;xe=null,this.setClear(_e)}},getReversed:function(){return Ie},setTest:function(K){K?$(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(K){fe!==K&&!Z&&(i.depthMask(K),fe=K)},setFunc:function(K){if(Ie&&(K=em[K]),Ae!==K){switch(K){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=K}},setLocked:function(K){Z=K},setClear:function(K){xe!==K&&(xe=K,Ie&&(K=1-K),i.clearDepth(K))},reset:function(){Z=!1,fe=null,Ae=null,xe=null,Ie=!1}}}function r(){let Z=!1,Ie=null,fe=null,Ae=null,xe=null,K=null,we=null,_e=null,We=null;return{setTest:function(at){Z||(at?$(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(at){Ie!==at&&!Z&&(i.stencilMask(at),Ie=at)},setFunc:function(at,Tt,Vt){(fe!==at||Ae!==Tt||xe!==Vt)&&(i.stencilFunc(at,Tt,Vt),fe=at,Ae=Tt,xe=Vt)},setOp:function(at,Tt,Vt){(K!==at||we!==Tt||_e!==Vt)&&(i.stencilOp(at,Tt,Vt),K=at,we=Tt,_e=Vt)},setLocked:function(at){Z=at},setClear:function(at){We!==at&&(i.clearStencil(at),We=at)},reset:function(){Z=!1,Ie=null,fe=null,Ae=null,xe=null,K=null,we=null,_e=null,We=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],v=null,m=!1,f=null,M=null,_=null,x=null,S=null,b=null,w=null,y=new it(0,0,0),T=0,A=!1,C=null,F=null,O=null,N=null,k=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,G=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(D)[1]),I=G>=1):D.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),I=G>=2);let H=null,B={},Q=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),pe=new It().fromArray(Q),q=new It().fromArray(ce);function oe(Z,Ie,fe,Ae){let xe=new Uint8Array(4),K=i.createTexture();i.bindTexture(Z,K),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<fe;we++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Ie+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return K}let z={};z[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Ss),Se(!1),J(Yu),$(i.CULL_FACE),Ze(Ti);function $(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function ve(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function Ve(Z,Ie){return h[Z]!==Ie?(i.bindFramebuffer(Z,Ie),h[Z]=Ie,Z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ie),Z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ye(Z,Ie){let fe=g,Ae=!1;if(Z){fe=p.get(Ie),fe===void 0&&(fe=[],p.set(Ie,fe));let xe=Z.textures;if(fe.length!==xe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let K=0,we=xe.length;K<we;K++)fe[K]=i.COLOR_ATTACHMENT0+K;fe.length=xe.length,Ae=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(fe)}function ge(Z){return v!==Z?(i.useProgram(Z),v=Z,!0):!1}let Re={[Ur]:i.FUNC_ADD,[bp]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};Re[Sp]=i.MIN,Re[wp]=i.MAX;let Oe={[Ep]:i.ZERO,[Tp]:i.ONE,[Ap]:i.SRC_COLOR,[ju]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Rp]:i.ONE_MINUS_SRC_COLOR,[Ju]:i.ONE_MINUS_SRC_ALPHA,[Lp]:i.ONE_MINUS_DST_COLOR,[Ip]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Fp]:i.CONSTANT_ALPHA,[Op]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(Z,Ie,fe,Ae,xe,K,we,_e,We,at){if(Z===Ti){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),Z!==vp){if(Z!==f||at!==A){if((M!==Ur||S!==Ur)&&(i.blendEquation(i.FUNC_ADD),M=Ur,S=Ur),at)switch(Z){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ut("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ku:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",Z);break}_=null,x=null,b=null,w=null,y.set(0,0,0),T=0,f=Z,A=at}return}xe=xe||Ie,K=K||fe,we=we||Ae,(Ie!==M||xe!==S)&&(i.blendEquationSeparate(Re[Ie],Re[xe]),M=Ie,S=xe),(fe!==_||Ae!==x||K!==b||we!==w)&&(i.blendFuncSeparate(Oe[fe],Oe[Ae],Oe[K],Oe[we]),_=fe,x=Ae,b=K,w=we),(_e.equals(y)===!1||We!==T)&&(i.blendColor(_e.r,_e.g,_e.b,We),y.copy(_e),T=We),f=Z,A=!1}function Fe(Z,Ie){Z.side===hn?ve(i.CULL_FACE):$(i.CULL_FACE);let fe=Z.side===Tn;Ie&&(fe=!fe),Se(fe),Z.blending===Gs&&Z.transparent===!1?Ze(Ti):Ze(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),s.setMask(Z.colorWrite);let Ae=Z.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),se(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(Z){C!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),C=Z)}function J(Z){Z!==yp?($(i.CULL_FACE),Z!==F&&(Z===Yu?i.cullFace(i.BACK):Z===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=Z}function he(Z){Z!==O&&(I&&i.lineWidth(Z),O=Z)}function se(Z,Ie,fe){Z?($(i.POLYGON_OFFSET_FILL),(N!==Ie||k!==fe)&&(N=Ie,k=fe,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,fe))):ve(i.POLYGON_OFFSET_FILL)}function me(Z){Z?$(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Me(Z){Z===void 0&&(Z=i.TEXTURE0+L-1),H!==Z&&(i.activeTexture(Z),H=Z)}function V(Z,Ie,fe){fe===void 0&&(H===null?fe=i.TEXTURE0+L-1:fe=H);let Ae=B[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},B[fe]=Ae),(Ae.type!==Z||Ae.texture!==Ie)&&(H!==fe&&(i.activeTexture(fe),H=fe),i.bindTexture(Z,Ie||z[Z]),Ae.type=Z,Ae.texture=Ie)}function Je(){let Z=B[H];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function E(){try{i.texSubImage2D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function W(){try{i.texSubImage3D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function re(){try{i.texStorage2D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function ue(){try{i.texStorage3D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function te(){try{i.texImage2D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function le(){try{i.texImage3D(...arguments)}catch(Z){ut("WebGLState:",Z)}}function be(Z){return d[Z]!==void 0?d[Z]:i.getParameter(Z)}function Pe(Z,Ie){d[Z]!==Ie&&(i.pixelStorei(Z,Ie),d[Z]=Ie)}function Le(Z){pe.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),pe.copy(Z))}function Ne(Z){q.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),q.copy(Z))}function Qe(Z,Ie){let fe=l.get(Ie);fe===void 0&&(fe=new WeakMap,l.set(Ie,fe));let Ae=fe.get(Z);Ae===void 0&&(Ae=i.getUniformBlockIndex(Ie,Z.name),fe.set(Z,Ae))}function ot(Z,Ie){let Ae=l.get(Ie).get(Z);c.get(Ie)!==Ae&&(i.uniformBlockBinding(Ie,Ae,Z.__bindingPointIndex),c.set(Ie,Ae))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},H=null,B={},h={},p=new WeakMap,g=[],v=null,m=!1,f=null,M=null,_=null,x=null,S=null,b=null,w=null,y=new it(0,0,0),T=0,A=!1,C=null,F=null,O=null,N=null,k=null,pe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:ve,bindFramebuffer:Ve,drawBuffers:ye,useProgram:ge,setBlending:Ze,setMaterial:Fe,setFlipSided:Se,setCullFace:J,setLineWidth:he,setPolygonOffset:se,setScissorTest:me,activeTexture:Me,bindTexture:V,unbindTexture:Je,compressedTexImage2D:Ge,compressedTexImage3D:P,texImage2D:te,texImage3D:le,pixelStorei:Pe,getParameter:be,updateUBOMapping:Qe,uniformBlockBinding:ot,texStorage2D:re,texStorage3D:ue,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:Le,viewport:Ne,reset:lt}}function Hb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap,d=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return g?new OffscreenCanvas(P,E):Ts("canvas")}function m(P,E,W){let j=1,ie=Ge(P);if((ie.width>W||ie.height>W)&&(j=W/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let re=Math.floor(j*ie.width),ue=Math.floor(j*ie.height);h===void 0&&(h=v(re,ue));let te=E?v(re,ue):h;return te.width=re,te.height=ue,te.getContext("2d").drawImage(P,0,0,re,ue),st("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+ue+")."),te}else return"data"in P&&st("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function f(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,E,W,j,ie,re=!1){if(P!==null){if(i[P]!==void 0)return i[P];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;j&&(ue=e.get("EXT_texture_norm16"),ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8),W===i.UNSIGNED_SHORT&&ue&&(te=ue.R16_EXT),W===i.SHORT&&ue&&(te=ue.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),E===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8),W===i.UNSIGNED_SHORT&&ue&&(te=ue.RG16_EXT),W===i.SHORT&&ue&&(te=ue.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&ue&&(te=ue.RGB16_EXT),W===i.SHORT&&ue&&(te=ue.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),E===i.RGBA){let le=re?wa:xt.getTransfer(ie);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=le===At?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ue&&(te=ue.RGBA16_EXT),W===i.SHORT&&ue&&(te=ue.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(P,E){let W;return P?E===null||E===hi||E===qs?W=i.DEPTH24_STENCIL8:E===Hn?W=i.DEPTH32F_STENCIL8:E===Xs&&(W=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hi||E===qs?W=i.DEPTH_COMPONENT24:E===Hn?W=i.DEPTH_COMPONENT32F:E===Xs&&(W=i.DEPTH_COMPONENT16),W}function b(P,E){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Dt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){let E=P.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function y(P){let E=P.target;E.removeEventListener("dispose",y),C(E)}function T(P){let E=n.get(P);if(E.__webglInit===void 0)return;let W=P.source,j=p.get(W);if(j){let ie=j[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(P),Object.keys(j).length===0&&p.delete(W)}n.remove(P)}function A(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let W=P.source,j=p.get(W);delete j[E.__cacheKey],a.memory.textures--}function C(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let ie=0;ie<E.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=P.textures;for(let j=0,ie=W.length;j<ie;j++){let re=n.get(W[j]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(P)}let F=0;function O(){F=0}function N(){return F}function k(P){F=P}function L(){let P=F;return P>=r.maxTextures&&st("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function I(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function G(P,E){let W=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let j=P.image;if(j===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function D(P,E){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ve(W,P,E);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function H(P,E){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ve(W,P,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function B(P,E){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Ve(W,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let Q={[kn]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[ws]:i.MIRRORED_REPEAT},ce={[Zt]:i.NEAREST,[Nl]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Ws]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},pe={[Xp]:i.NEVER,[$p]:i.ALWAYS,[qp]:i.LESS,[yc]:i.LEQUAL,[Yp]:i.EQUAL,[_c]:i.GEQUAL,[Zp]:i.GREATER,[Kp]:i.NOTEQUAL};function q(P,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dt||E.magFilter===Ws||E.magFilter===Fr||E.magFilter===ui||E.minFilter===Dt||E.minFilter===Ws||E.minFilter===Fr||E.minFilter===ui)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==Fr&&E.minFilter!==ui||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function oe(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let j=E.source,ie=p.get(j);ie===void 0&&(ie={},p.set(j,ie));let re=I(E);if(re!==P.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[re].usedTimes++;let ue=ie[P.__cacheKey];ue!==void 0&&(ie[P.__cacheKey].usedTimes--,ue.usedTimes===0&&A(E)),P.__cacheKey=re,P.__webglTexture=ie[re].texture}return W}function z(P,E,W){return Math.floor(Math.floor(P/W)/E)}function $(P,E,W,j){let re=P.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,j,E.data);else{re.sort((Pe,Le)=>Pe.start-Le.start);let ue=0;for(let Pe=1;Pe<re.length;Pe++){let Le=re[ue],Ne=re[Pe],Qe=Le.start+Le.count,ot=z(Ne.start,E.width,4),lt=z(Le.start,E.width,4);Ne.start<=Qe+1&&ot===lt&&z(Ne.start+Ne.count-1,E.width,4)===ot?Le.count=Math.max(Le.count,Ne.start+Ne.count-Le.start):(++ue,re[ue]=Ne)}re.length=ue+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Le=re.length;Pe<Le;Pe++){let Ne=re[Pe],Qe=Math.floor(Ne.start/4),ot=Math.ceil(Ne.count/4),lt=Qe%E.width,Z=Math.floor(Qe/E.width),Ie=ot,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,lt,Z,Ie,fe,W,j,E.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function ve(P,E,W){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);let ie=oe(P,E),re=E.source;t.bindTexture(j,P.__webglTexture,i.TEXTURE0+W);let ue=n.get(re);if(re.version!==ue.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let fe=xt.getPrimaries(xt.workingColorSpace),Ae=E.colorSpace===Gn?null:xt.getPrimaries(E.colorSpace),xe=E.colorSpace===Gn||fe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let le=m(E.image,!1,r.maxTextureSize);le=Je(E,le);let be=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),Le=x(E.internalFormat,be,Pe,E.normalized,E.colorSpace,E.isVideoTexture);q(j,E);let Ne,Qe=E.mipmaps,ot=E.isVideoTexture!==!0,lt=ue.__version===void 0||ie===!0,Z=re.dataReady,Ie=b(E,le);if(E.isDepthTexture)Le=S(E.format===fr,E.type),lt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,be,Pe,null));else if(E.isDataTexture)if(Qe.length>0){ot&&lt&&t.texStorage2D(i.TEXTURE_2D,Ie,Le,Qe[0].width,Qe[0].height);for(let fe=0,Ae=Qe.length;fe<Ae;fe++)Ne=Qe[fe],ot?Z&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ne.width,Ne.height,be,Pe,Ne.data):t.texImage2D(i.TEXTURE_2D,fe,Le,Ne.width,Ne.height,0,be,Pe,Ne.data);E.generateMipmaps=!1}else ot?(lt&&t.texStorage2D(i.TEXTURE_2D,Ie,Le,le.width,le.height),Z&&$(E,le,be,Pe)):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,be,Pe,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Le,Qe[0].width,Qe[0].height,le.depth);for(let fe=0,Ae=Qe.length;fe<Ae;fe++)if(Ne=Qe[fe],E.format!==xn)if(be!==null)if(ot){if(Z)if(E.layerUpdates.size>0){let xe=bh(Ne.width,Ne.height,E.format,E.type);for(let K of E.layerUpdates){let we=Ne.data.subarray(K*xe/Ne.data.BYTES_PER_ELEMENT,(K+1)*xe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,K,Ne.width,Ne.height,1,be,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ne.width,Ne.height,le.depth,be,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Le,Ne.width,Ne.height,le.depth,0,Ne.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ne.width,Ne.height,le.depth,be,Pe,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Le,Ne.width,Ne.height,le.depth,0,be,Pe,Ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ot&&lt&&t.texStorage2D(i.TEXTURE_2D,Ie,Le,Qe[0].width,Qe[0].height);for(let fe=0,Ae=Qe.length;fe<Ae;fe++)Ne=Qe[fe],E.format!==xn?be!==null?ot?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Ne.width,Ne.height,be,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Le,Ne.width,Ne.height,0,Ne.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Z&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ne.width,Ne.height,be,Pe,Ne.data):t.texImage2D(i.TEXTURE_2D,fe,Le,Ne.width,Ne.height,0,be,Pe,Ne.data)}else if(E.isDataArrayTexture)if(ot){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Le,le.width,le.height,le.depth),Z)if(E.layerUpdates.size>0){let fe=bh(le.width,le.height,E.format,E.type);for(let Ae of E.layerUpdates){let xe=le.data.subarray(Ae*fe/le.data.BYTES_PER_ELEMENT,(Ae+1)*fe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,le.width,le.height,1,be,Pe,xe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Pe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,be,Pe,le.data);else if(E.isData3DTexture)ot?(lt&&t.texStorage3D(i.TEXTURE_3D,Ie,Le,le.width,le.height,le.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Pe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,be,Pe,le.data);else if(E.isFramebufferTexture){if(lt)if(ot)t.texStorage2D(i.TEXTURE_2D,Ie,Le,le.width,le.height);else{let fe=le.width,Ae=le.height;for(let xe=0;xe<Ie;xe++)t.texImage2D(i.TEXTURE_2D,xe,Le,fe,Ae,0,be,Pe,null),fe>>=1,Ae>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),le.parentNode!==fe){fe.appendChild(le),d.add(E),fe.onpaint=Ae=>{let xe=Ae.changedElements;for(let K of d)xe.includes(K.image)&&(K.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let xe=i.RGBA,K=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,K,we,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(ot&&lt){let fe=Ge(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Le,fe.width,fe.height)}for(let fe=0,Ae=Qe.length;fe<Ae;fe++)Ne=Qe[fe],ot?Z&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be,Pe,Ne):t.texImage2D(i.TEXTURE_2D,fe,Le,be,Pe,Ne);E.generateMipmaps=!1}else if(ot){if(lt){let fe=Ge(le);t.texStorage2D(i.TEXTURE_2D,Ie,Le,fe.width,fe.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Pe,le)}else t.texImage2D(i.TEXTURE_2D,0,Le,be,Pe,le);f(E)&&M(j),ue.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ve(P,E,W){if(E.image.length!==6)return;let j=oe(P,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let re=n.get(ie);if(ie.version!==re.__version||j===!0){t.activeTexture(i.TEXTURE0+W);let ue=xt.getPrimaries(xt.workingColorSpace),te=E.colorSpace===Gn?null:xt.getPrimaries(E.colorSpace),le=E.colorSpace===Gn||ue===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let be=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let K=0;K<6;K++)!be&&!Pe?Le[K]=m(E.image[K],!0,r.maxCubemapSize):Le[K]=Pe?E.image[K].image:E.image[K],Le[K]=Je(E,Le[K]);let Ne=Le[0],Qe=s.convert(E.format,E.colorSpace),ot=s.convert(E.type),lt=x(E.internalFormat,Qe,ot,E.normalized,E.colorSpace),Z=E.isVideoTexture!==!0,Ie=re.__version===void 0||j===!0,fe=ie.dataReady,Ae=b(E,Ne);q(i.TEXTURE_CUBE_MAP,E);let xe;if(be){Z&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,lt,Ne.width,Ne.height);for(let K=0;K<6;K++){xe=Le[K].mipmaps;for(let we=0;we<xe.length;we++){let _e=xe[we];E.format!==xn?Qe!==null?Z?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,_e.width,_e.height,Qe,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,lt,_e.width,_e.height,0,_e.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,0,0,_e.width,_e.height,Qe,ot,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we,lt,_e.width,_e.height,0,Qe,ot,_e.data)}}}else{if(xe=E.mipmaps,Z&&Ie){xe.length>0&&Ae++;let K=Ge(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,lt,K.width,K.height)}for(let K=0;K<6;K++)if(Pe){Z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le[K].width,Le[K].height,Qe,ot,Le[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,lt,Le[K].width,Le[K].height,0,Qe,ot,Le[K].data);for(let we=0;we<xe.length;we++){let We=xe[we].image[K].image;Z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,We.width,We.height,Qe,ot,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,lt,We.width,We.height,0,Qe,ot,We.data)}}else{Z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Qe,ot,Le[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,lt,Qe,ot,Le[K]);for(let we=0;we<xe.length;we++){let _e=xe[we];Z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,0,0,Qe,ot,_e.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,we+1,lt,Qe,ot,_e.image[K])}}}f(E)&&M(i.TEXTURE_CUBE_MAP),re.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,W,j,ie,re){let ue=s.convert(W.format,W.colorSpace),te=s.convert(W.type),le=x(W.internalFormat,ue,te,W.normalized,W.colorSpace),be=n.get(E),Pe=n.get(W);if(Pe.__renderTarget=E,!be.__hasExternalTextures){let Le=Math.max(1,E.width>>re),Ne=Math.max(1,E.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,le,Le,Ne,E.depth,0,ue,te,null):t.texImage2D(ie,re,le,Le,Ne,0,ue,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,Pe.__webglTexture,0,me(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,Pe.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let j=E.depthTexture,ie=j&&j.isDepthTexture?j.type:null,re=S(E.stencilBuffer,ie),ue=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(E),re,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,P)}else{let j=E.textures;for(let ie=0;ie<j.length;ie++){let re=j[ie],ue=s.convert(re.format,re.colorSpace),te=s.convert(re.type),le=x(re.internalFormat,ue,te,re.normalized,re.colorSpace);Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(E),le,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(E),le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(P,E,W){let j=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(E.depthTexture);if(ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),q(i.TEXTURE_CUBE_MAP,E.depthTexture);let be=s.convert(E.depthTexture.format),Pe=s.convert(E.depthTexture.type),Le;E.depthTexture.format===_i?Le=i.DEPTH_COMPONENT24:E.depthTexture.format===fr&&(Le=i.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Le,E.width,E.height,0,be,Pe,null)}}else G(E.depthTexture,0);let re=ie.__webglTexture,ue=me(E),te=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,le=E.depthTexture.format===fr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===_i)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,re,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,le,te,re,0);else if(E.depthTexture.format===fr)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,re,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,le,te,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(P){let E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=j}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let j=0;j<6;j++)Re(E.__webglFramebuffer[j],P,j);else{let j=P.texture.mipmaps;j&&j.length>0?Re(E.__webglFramebuffer[0],P,0):Re(E.__webglFramebuffer,P,0)}else if(W){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[j],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(P,E,W){let j=n.get(P);E!==void 0&&ye(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Oe(P)}function Fe(P){let E=P.texture,W=n.get(P),j=n.get(E);P.addEventListener("dispose",y);let ie=P.textures,re=P.isWebGLCubeRenderTarget===!0,ue=ie.length>1;if(ue||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,a.memory.textures++),re){W.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[te]=[];for(let le=0;le<E.mipmaps.length;le++)W.__webglFramebuffer[te][le]=i.createFramebuffer()}else W.__webglFramebuffer[te]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)W.__webglFramebuffer[te]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ue)for(let te=0,le=ie.length;te<le;te++){let be=n.get(ie[te]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let te=0;te<ie.length;te++){let le=ie[te];W.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let be=s.convert(le.format,le.colorSpace),Pe=s.convert(le.type),Le=x(le.internalFormat,be,Pe,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),Ne=me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,W.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ye(W.__webglFramebuffer[te][le],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,le);else ye(W.__webglFramebuffer[te],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(E)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let te=0,le=ie.length;te<le;te++){let be=ie[te],Pe=n.get(be),Le=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Pe.__webglTexture),q(Le,be),ye(W.__webglFramebuffer,P,be,i.COLOR_ATTACHMENT0+te,Le,0),f(be)&&M(Le)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,j.__webglTexture),q(te,E),E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ye(W.__webglFramebuffer[le],P,E,i.COLOR_ATTACHMENT0,te,le);else ye(W.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,te,0);f(E)&&M(te),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Se(P){let E=P.textures;for(let W=0,j=E.length;W<j;W++){let ie=E[W];if(f(ie)){let re=_(P),ue=n.get(ie).__webglTexture;t.bindTexture(re,ue),M(re),t.unbindTexture()}}}let J=[],he=[];function se(P){if(P.samples>0){if(Me(P)===!1){let E=P.textures,W=P.width,j=P.height,ie=i.COLOR_BUFFER_BIT,re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(P),te=E.length>1;if(te)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let le=P.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<E.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);let Pe=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,ie,i.NEAREST),c===!0&&(J.length=0,he.length=0,J.push(i.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(J.push(re),he.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);let Pe=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function me(P){return Math.min(r.maxSamples,P.samples)}function Me(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(P){let E=a.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Je(P,E){let W=P.colorSpace,j=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==wn&&W!==Gn&&(xt.getTransfer(W)===At?(j!==xn||ie!==gn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",W)),E}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vb(i,e){function t(n,r=Gn){let s,a=xt.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===dh)return i.RGB;if(n===xn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===pr)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===Ya||n===Za||n===Ka||n===$a)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===ja||n===$l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xl||n===ql)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return s.COMPRESSED_R11_EAC;if(n===Kl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return s.COMPRESSED_RG11_EAC;if(n===$l)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===dc||n===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hc)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Ja||n===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:Gb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends vi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new zh,f={},M=t.getContextAttributes(),_=null,x=null,S=[],b=[],w=new ct,y=null,T=null,A=new Qt;A.viewport=new It;let C=new Qt;C.viewport=new It;let F=[A,C],O=new Rl,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=S[z];return $===void 0&&($=new Is,S[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=S[z];return $===void 0&&($=new Is,S[z]=$),$.getGripSpace()},this.getHand=function(z){let $=S[z];return $===void 0&&($=new Is,S[z]=$),$.getHandSpace()};function L(z){let $=b.indexOf(z.inputSource);if($===-1)return;let ve=S[$];ve!==void 0&&(ve.update(z.inputSource,z.frame,l||a),ve.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",G);for(let z=0;z<S.length;z++){let $=b[z];$!==null&&(b[z]=null,S[z].disconnect($))}N=null,k=null,m.reset();for(let z in f)delete f[z];if(e.setRenderTarget(_),p=null,h=null,d=null,r=null,x=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),T!==null){let z=T.camera;z.fov=T.fov,z.zoom=T.zoom,z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ve=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?fr:_i,Ve=M.stencil?qs:hi);let ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new on(h.textureWidth,h.textureHeight,{format:xn,type:gn,depthTexture:new hr(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new on(p.framebufferWidth,p.framebufferHeight,{format:xn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(z){for(let $=0;$<z.removed.length;$++){let ve=z.removed[$],Ve=b.indexOf(ve);Ve>=0&&(b[Ve]=null,S[Ve].disconnect(ve))}for(let $=0;$<z.added.length;$++){let ve=z.added[$],Ve=b.indexOf(ve);if(Ve===-1){for(let ge=0;ge<S.length;ge++)if(ge>=b.length){b.push(ve),Ve=ge;break}else if(b[ge]===null){b[ge]=ve,Ve=ge;break}if(Ve===-1)break}let ye=S[Ve];ye&&ye.connect(ve)}}let D=new U,H=new U;function B(z,$,ve){D.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ve.matrixWorld);let Ve=D.distanceTo(H),ye=$.projectionMatrix.elements,ge=ve.projectionMatrix.elements,Re=ye[14]/(ye[10]-1),Oe=ye[14]/(ye[10]+1),Ze=(ye[9]+1)/ye[5],Fe=(ye[9]-1)/ye[5],Se=(ye[8]-1)/ye[0],J=(ge[8]+1)/ge[0],he=Re*Se,se=Re*J,me=Ve/(-Se+J),Me=me*-Se;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Me),z.translateZ(me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ye[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let V=Re+me,Je=Oe+me,Ge=he-Me,P=se+(Ve-Me),E=Ze*Oe/Je*V,W=Fe*Oe/Je*V;z.projectionMatrix.makePerspective(Ge,P,E,W,V,Je),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Q(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let $=z.near,ve=z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=C.near=A.near=$,O.far=C.far=A.far=ve,(N!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,k=O.far),O.layers.mask=z.layers.mask|6,A.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let Ve=z.parent,ye=O.cameras;Q(O,Ve);for(let ge=0;ge<ye.length;ge++)Q(ye[ge],Ve);ye.length===2?B(O,A,C):O.projectionMatrix.copy(A.projectionMatrix),T===null&&z.isPerspectiveCamera&&(T={camera:z,fov:z.fov,zoom:z.zoom}),ce(z,O,Ve)};function ce(z,$,ve){ve===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(ve.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Cr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(z){return f[z]};let pe=null;function q(z,$){if(u=$.getViewerPose(l||a),g=$,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ve=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Ve=!0);for(let Oe=0;Oe<ve.length;Oe++){let Ze=ve[Oe],Fe=null;if(p!==null)Fe=p.getViewport(Ze);else{let J=d.getViewSubImage(h,Ze);Fe=J.viewport,Oe===0&&(e.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(x))}let Se=F[Oe];Se===void 0&&(Se=new Qt,Se.layers.enable(Oe),Se.viewport=new It,F[Oe]=Se),Se.matrix.fromArray(Ze.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ze.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Oe===0&&(O.matrix.copy(Se.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ve===!0&&O.cameras.push(Se)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){let Ze=ve[Oe].camera;if(Ze){let Fe=f[Ze];Fe||(Fe=new Fa,f[Ze]=Fe);let Se=d.getCameraImage(Ze);Fe.sourceTexture=Se}}}}for(let ve=0;ve<S.length;ve++){let Ve=b[ve],ye=S[ve];Ve!==null&&ye!==void 0&&ye.update(Ve,$,l||a)}pe&&pe(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let oe=new Tm;oe.setAnimationLoop(q),this.setAnimationLoop=function(z){pe=z},this.dispose=function(){}}},Xb=new et,Lm=new dt;Lm.set(-1,0,0,0,1,0,0,0,1);function qb(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,_,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),_=M.envMap,x=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yb(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function l(x,S){let b=r[x.id];b===void 0&&(m(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(x,w);let y=e.render.frame;s[x.id]!==y&&(h(x),s[x.id]=y)}function u(x){let S=d();x.__bindingPointIndex=S;let b=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=r[x.id],b=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=b.length;y<T;y++){let A=b[y];if(Array.isArray(A))for(let C=0,F=A.length;C<F;C++)p(A[C],y,C,w);else p(A,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,S,b,w){if(v(x,S,b,w)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let A=0;for(let C=0;C<T.length;C++){let F=T[C],O=f(F);g(F,x.__data,A),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,w){let y=x.value,T=S+"_"+b;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let A=w[T];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(x){let S=x.uniforms,b=0,w=16;for(let T=0,A=S.length;T<A;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,O=C.length;F<O;F++){let N=C[F],k=Array.isArray(N.value)?N.value:[N.value];for(let L=0,I=k.length;L<I;L++){let G=k[L],D=f(G),H=b%w,B=H%D.boundary,Q=H+B;b+=B,Q!==0&&w-Q<D.storage&&(b+=w-Q),N.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=D.storage}}}let y=b%w;return y>0&&(b+=w-y),x.__size=b,x.__cache={},this}function f(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):st("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function _(){for(let x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}var Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Kb(){return Ai===null&&(Ai=new Us(Zb,16,16,pr,Vn),Ai.name="DFG_LUT",Ai.minFilter=Dt,Ai.magFilter=Dt,Ai.wrapS=Qn,Ai.wrapT=Qn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Sc=class{constructor(e={}){let{canvas:t=jp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,m=new Set([zl,kl,Bl]),f=new Set([gn,hi,Xs,qs,Dl,Fl]),M=new Uint32Array(4),_=new Int32Array(4),x=new U,S=null,b=null,w=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,F=null,O=null,N=null,k=null;this._outputColorSpace=Ht;let L=0,I=0,G=null,D=-1,H=null,B=new It,Q=new It,ce=null,pe=new it(0),q=0,oe=t.width,z=t.height,$=1,ve=null,Ve=null,ye=new It(0,0,oe,z),ge=new It(0,0,oe,z),Re=!1,Oe=new Ds,Ze=!1,Fe=!1,Se=new et,J=new U,he=new It,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Me(){return G===null?$:1}let V=n;function Je(R,X){return t.getContext(R,X)}let Ge,P,E,W,j,ie,re,ue,te,le,be,Pe,Le,Ne,Qe,ot,lt,Z,Ie,fe,Ae,xe,K;try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),V===null){let X="webgl2";if(V=Je(X,R),V===null)throw Je(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(R){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),ut("WebGLRenderer: "+R.message),R}function we(){Ge=new nv(V),Ge.init(),Ae=new Vb(V,Ge),P=new q_(V,Ge,e,Ae),E=new zb(V,Ge),P.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),O=V.createFramebuffer(),N=V.createFramebuffer(),k=V.createFramebuffer(),W=new sv(V),j=new Tb,ie=new Hb(V,Ge,E,j,P,Ae,W),re=new tv(A),ue=new ox(V),xe=new W_(V,ue),te=new iv(V,ue,W,xe),le=new ov(V,te,ue,xe,W),Z=new av(V,P,ie),Qe=new Y_(j),be=new Eb(A,re,Ge,P,xe,Qe),Pe=new qb(A,j),Le=new Rb,Ne=new Ub(Ge),lt=new G_(A,re,E,le,g,c),ot=new kb(A,le,P),K=new Yb(V,W,P,E),Ie=new X_(V,Ge,W),fe=new rv(V,Ge,W),W.programs=be.programs,A.capabilities=P,A.extensions=Ge,A.properties=j,A.renderLists=Le,A.shadowMap=ot,A.state=E,A.info=W}v!==gn&&(T=new cv(v,t.width,t.height,o,r,s));let _e=new Hh(A,V);this.xr=_e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=Ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(oe,z,!1))},this.getSize=function(R){return R.set(oe,z)},this.setSize=function(R,X,ae=!0){if(_e.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,z=X,t.width=Math.floor(R*$),t.height=Math.floor(X*$),ae===!0&&(t.style.width=R+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(oe*$,z*$).floor()},this.setDrawingBufferSize=function(R,X,ae){oe=R,z=X,$=ae,t.width=Math.floor(R*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(v===gn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,X,ae,ee){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,X,ae,ee),E.viewport(B.copy(ye).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,X,ae,ee){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,X,ae,ee),E.scissor(Q.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){E.setScissorTest(Re=R)},this.setOpaqueSort=function(R){ve=R},this.setTransparentSort=function(R){Ve=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ae=!0){let ee=0;if(R){let ne=!1;if(G!==null){let Be=G.texture.format;ne=m.has(Be)}if(ne){let Be=G.texture.type,qe=f.has(Be),ke=lt.getClearColor(),$e=lt.getClearAlpha(),tt=ke.r,ft=ke.g,mt=ke.b;qe?(M[0]=tt,M[1]=ft,M[2]=mt,M[3]=$e,V.clearBufferuiv(V.COLOR,0,M)):(_[0]=tt,_[1]=ft,_[2]=mt,_[3]=$e,V.clearBufferiv(V.COLOR,0,_))}else ee|=V.COLOR_BUFFER_BIT}X&&(ee|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),F=R},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),lt.dispose(),Le.dispose(),Ne.dispose(),j.dispose(),re.dispose(),le.dispose(),xe.dispose(),K.dispose(),be.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ti),_e.removeEventListener("sessionend",xr),bt.stop()};function We(R){R.preventDefault(),Ea("WebGLRenderer: Context Lost."),C=!0}function at(){Ea("WebGLRenderer: Context Restored."),C=!1;let R=W.autoReset,X=ot.enabled,ae=ot.autoUpdate,ee=ot.needsUpdate,ne=ot.type;we(),W.autoReset=R,ot.enabled=X,ot.autoUpdate=ae,ot.needsUpdate=ee,ot.type=ne}function Tt(R){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Vt(R){let X=R.target;X.removeEventListener("dispose",Vt),gr(X)}function gr(R){Ji(R),j.remove(R)}function Ji(R){let X=j.get(R).programs;X!==void 0&&(X.forEach(function(ae){be.releaseProgram(ae)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ae,ee,ne,Be){X===null&&(X=se);let qe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,ke=ra(R,X,ae,ee,ne);E.setMaterial(ee,qe);let $e=ae.index,tt=1;if(ee.wireframe===!0){if($e=te.getWireframeAttribute(ae),$e===void 0)return;tt=2}let ft=ae.drawRange,mt=ae.attributes.position,je=ft.start*tt,Mt=(ft.start+ft.count)*tt;Be!==null&&(je=Math.max(je,Be.start*tt),Mt=Math.min(Mt,(Be.start+Be.count)*tt)),$e!==null?(je=Math.max(je,0),Mt=Math.min(Mt,$e.count)):mt!=null&&(je=Math.max(je,0),Mt=Math.min(Mt,mt.count));let Bt=Mt-je;if(Bt<0||Bt===1/0)return;xe.setup(ne,ee,ke,ae,$e);let Nt,Rt=Ie;if($e!==null&&(Nt=ue.get($e),Rt=fe,Rt.setIndex(Nt)),ne.isMesh)ee.wireframe===!0?(E.setLineWidth(ee.wireframeLinewidth*Me()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(ne.isLine){let rn=ee.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Me()),ne.isLineSegments?Rt.setMode(V.LINES):ne.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else ne.isPoints?Rt.setMode(V.POINTS):ne.isSprite&&Rt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let rn=ne._multiDrawStarts,Xe=ne._multiDrawCounts,Wt=ne._multiDrawCount,vt=$e?ue.get($e).bytesPerElement:1,An=j.get(ee).currentProgram.getUniforms();for(let de=0;de<Wt;de++)An.setValue(V,"_gl_DrawID",de),Rt.render(rn[de]/vt,Xe[de])}else if(ne.isInstancedMesh)Rt.renderInstances(je,Bt,ne.count);else if(ae.isInstancedBufferGeometry){let rn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xe=Math.min(ae.instanceCount,rn);Rt.renderInstances(je,Bt,Xe)}else Rt.render(je,Bt)};function _n(R,X,ae,ee){F!==null&&R.isNodeMaterial&&F.setObject(ee,R),Ze===!0&&Qe.setState(R,ae,!1),R.transparent===!0&&R.side===hn&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,jt(R,X,ee),R.side=Pn,R.needsUpdate=!0,jt(R,X,ee),R.side=hn):jt(R,X,ee)}this.compile=function(R,X,ae=null){ae===null&&(ae=R),F!==null&&F.renderStart(R,X,ae),b=Ne.get(ae),b.init(X),y.push(b),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),R!==ae&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),Fe=this.localClippingEnabled,Ze=Qe.init(this.clippingPlanes,Fe),Ze===!0&&Qe.setGlobalState(this.clippingPlanes,X),F!==null&&ot.render(b.state.shadowsArray,ae,X);let ee=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Be=ne.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){let ke=Be[qe];_n(ke,ae,X,ne),ee.add(ke)}else _n(Be,ae,X,ne),ee.add(Be)}),b=y.pop(),F!==null&&F.renderEnd(),ee},this.compileAsync=function(R,X,ae=null){let ee=this.compile(R,X,ae);return new Promise(ne=>{function Be(){if(ee.forEach(function(qe){let $e=j.get(qe).currentProgram;($e===void 0||$e.isReady())&&ee.delete(qe)}),ee.size===0){ne(R);return}setTimeout(Be,10)}Ge.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let qn=null;function Xr(R){qn&&qn(R)}function ti(){bt.stop()}function xr(){bt.start()}let bt=new Tm;bt.setAnimationLoop(Xr),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(R){qn=R,_e.setAnimationLoop(R),R===null?bt.stop():bt.start()},_e.addEventListener("sessionstart",ti),_e.addEventListener("sessionend",xr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(R,X);let ae=_e.enabled===!0&&_e.isPresenting===!0,ee=T!==null&&(G===null||ae)&&T.begin(A,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,X,G),b=Ne.get(R,y.length),b.init(X),b.state.textureUnits=ie.getTextureUnits(),y.push(b),Se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Oe.setFromProjectionMatrix(Se,oi,X.reversedDepth),Fe=this.localClippingEnabled,Ze=Qe.init(this.clippingPlanes,Fe),S=Le.get(R,w.length),S.init(),w.push(S),_e.enabled===!0&&_e.isPresenting===!0){let qe=A.xr.getDepthSensingMesh();qe!==null&&Qi(qe,X,-1/0,A.sortObjects)}Qi(R,X,0,A.sortObjects),S.finish(),F!==null&&F.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(ve,Ve),me=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,me&&lt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Qe.beginShadows();let ne=b.state.shadowsArray;if(ot.render(ne,R,X),Ze===!0&&Qe.endShadows(),(ee&&T.hasRenderPass())===!1){let qe=S.opaque,ke=S.transmissive;if(b.setupLights(),X.isArrayCamera){let $e=X.cameras;if(ke.length>0)for(let tt=0,ft=$e.length;tt<ft;tt++){let mt=$e[tt];qr(qe,ke,R,mt)}me&&lt.render(R);for(let tt=0,ft=$e.length;tt<ft;tt++){let mt=$e[tt];yr(S,R,mt,mt.viewport)}}else ke.length>0&&qr(qe,ke,R,X),me&&lt.render(R),yr(S,R,X)}G!==null&&I===0&&(ie.updateMultisampleRenderTarget(G),ie.updateRenderTargetMipmap(G)),ee&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,X),xe.resetDefaultState(),D=-1,H=null,y.pop(),y.length>0?(b=y[y.length-1],ie.setTextureUnits(b.state.textureUnits),Ze===!0&&Qe.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,F!==null&&F.renderEnd()};function Qi(R,X,ae,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Oe)){ee&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);let qe=le.update(R),ke=R.material;ke.visible&&S.push(R,qe,ke,ae,he.z,null,X)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Oe))){let qe=le.update(R),ke=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),he.copy(qe.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(ke)){let $e=qe.groups;for(let tt=0,ft=$e.length;tt<ft;tt++){let mt=$e[tt],je=ke[mt.materialIndex];je&&je.visible&&S.push(R,qe,je,ae,he.z,mt,X)}}else ke.visible&&S.push(R,qe,ke,ae,he.z,null,X)}}let Be=R.children;for(let qe=0,ke=Be.length;qe<ke;qe++)Qi(Be[qe],X,ae,ee)}function yr(R,X,ae,ee){let{opaque:ne,transmissive:Be,transparent:qe}=R;b.setupLightsView(ae),Ze===!0&&Qe.setGlobalState(A.clippingPlanes,ae),ee&&E.viewport(B.copy(ee)),ne.length>0&&ni(ne,X,ae),Be.length>0&&ni(Be,X,ae),qe.length>0&&ni(qe,X,ae),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function qr(R,X,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ee.id]===void 0){let je=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ee.id]=new on(1,1,{generateMipmaps:!0,type:je?Vn:gn,minFilter:ui,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Be=b.state.transmissionRenderTarget[ee.id],qe=ee.viewport||B;Be.setSize(qe.z*A.transmissionResolutionScale,qe.w*A.transmissionResolutionScale);let ke=A.getRenderTarget(),$e=A.getActiveCubeFace(),tt=A.getActiveMipmapLevel();A.setRenderTarget(Be),A.getClearColor(pe),q=A.getClearAlpha(),q<1&&A.setClearColor(16777215,.5),A.clear(),me&&lt.render(ae);let ft=A.toneMapping;A.toneMapping=zn;let mt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),b.setupLightsView(ee),Ze===!0&&Qe.setGlobalState(A.clippingPlanes,ee),ni(R,ae,ee),ie.updateMultisampleRenderTarget(Be),ie.updateRenderTargetMipmap(Be),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Mt=0,Bt=X.length;Mt<Bt;Mt++){let Nt=X[Mt],{object:Rt,geometry:rn,material:Xe,group:Wt}=Nt;if(Xe.side===hn&&Rt.layers.test(ee.layers)){let vt=Xe.side;Xe.side=Tn,Xe.needsUpdate=!0,Dn(Rt,ae,ee,rn,Xe,Wt),Xe.side=vt,Xe.needsUpdate=!0,je=!0}}je===!0&&(ie.updateMultisampleRenderTarget(Be),ie.updateRenderTargetMipmap(Be))}A.setRenderTarget(ke,$e,tt),A.setClearColor(pe,q),mt!==void 0&&(ee.viewport=mt),A.toneMapping=ft}function ni(R,X,ae){let ee=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Be=R.length;ne<Be;ne++){let qe=R[ne],{object:ke,geometry:$e,group:tt}=qe,ft=qe.material;ft.allowOverride===!0&&ee!==null&&(ft=ee),ke.layers.test(ae.layers)&&Dn(ke,X,ae,$e,ft,tt)}}function Dn(R,X,ae,ee,ne,Be){F!==null&&ne.isNodeMaterial&&F.setObject(R,ne),R.onBeforeRender(A,X,ae,ee,ne,Be),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(A,X,ae,ee,R,Be),ne.transparent===!0&&ne.side===hn&&ne.forceSinglePass===!1?(ne.side=Tn,ne.needsUpdate=!0,A.renderBufferDirect(ae,X,ee,ne,R,Be),ne.side=Pn,ne.needsUpdate=!0,A.renderBufferDirect(ae,X,ee,ne,R,Be),ne.side=hn):A.renderBufferDirect(ae,X,ee,ne,R,Be),R.onAfterRender(A,X,ae,ee,ne,Be)}function jt(R,X,ae){X.isScene!==!0&&(X=se);let ee=j.get(R),ne=b.state.lights,Be=b.state.shadowsArray,qe=ne.state.version,ke=be.getParameters(R,ne.state,Be,X,ae,b.state.lightProbeGridArray),$e=be.getProgramCacheKey(ke),tt=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;let ft=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=re.get(R.envMap||ee.environment,ft),ee.envMapRotation=ee.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Vt),tt=new Map,ee.programs=tt);let mt=tt.get($e);if(mt!==void 0){if(ee.currentProgram===mt&&ee.lightsStateVersion===qe)return po(R,ke),mt}else ke.uniforms=be.getUniforms(R),F!==null&&R.isNodeMaterial&&F.build(R,ae,ke),R.onBeforeCompile(ke,A),mt=be.acquireProgram(ke,$e),tt.set($e,mt),ee.uniforms=ke.uniforms;let je=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Qe.uniform),po(R,ke),ee.needsLights=mo(R),ee.lightsStateVersion=qe,ee.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.sunLights.value=ne.state.sun,je.sunLightShadows.value=ne.state.sunShadow,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.sunShadowMatrix.value=ne.state.sunShadowMatrix,je.sunShadowCascade.value=ne.state.sunShadowCascade,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.lightProbeGrid=b.state.lightProbeGridArray.length>0,ee.currentProgram=mt,ee.uniformsList=null,mt}function fo(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=$s.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function po(R,X){let ae=j.get(R);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Yr(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let ae=0,ee=R.length;ae<ee;ae++){let ne=R[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(x))return ne}return null}function ra(R,X,ae,ee,ne){X.isScene!==!0&&(X=se),ie.resetTextureUnits();let Be=X.fog,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,ke=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xt.workingColorSpace,$e=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,tt=re.get(ee.envMap||qe,$e),ft=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,Bt=!!ae.morphAttributes.color,Nt=zn;ee.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let Rt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rn=Rt!==void 0?Rt.length:0,Xe=j.get(ee),Wt=b.state.lights;if(Ze===!0&&(Fe===!0||R!==H)){let nt=R===H&&ee.id===D;Qe.setState(ee,R,nt)}let vt=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Wt.state.version||Xe.outputColorSpace!==ke||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==tt||ee.fog===!0&&Xe.fog!==Be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Qe.numPlanes||Xe.numIntersection!==Qe.numIntersection)||Xe.vertexAlphas!==ft||Xe.vertexTangents!==mt||Xe.morphTargets!==je||Xe.morphNormals!==Mt||Xe.morphColors!==Bt||Xe.toneMapping!==Nt||Xe.morphTargetsCount!==rn||!!Xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Xe.__version=ee.version);let An=Xe.currentProgram;vt===!0&&(An=jt(ee,X,ne),F&&ee.isNodeMaterial&&F.onUpdateProgram(ee,An,Xe));let de=!1,Y=!1,De=!1,Ce=An.getUniforms(),Ue=Xe.uniforms;if(E.useProgram(An.program)&&(de=!0,Y=!0,De=!0),ee.id!==D&&(D=ee.id,Y=!0),Xe.needsLights){let nt=Yr(b.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==nt&&(Xe.lightProbeGrid=nt,Y=!0)}if(de||H!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ce.setValue(V,"projectionMatrix",R.projectionMatrix),Ce.setValue(V,"viewMatrix",R.matrixWorldInverse);let He=Ce.map.cameraPosition;He!==void 0&&He.setValue(V,J.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&Ce.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ce.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,Y=!0,De=!0)}if(Xe.needsLights&&(Wt.state.sunShadowMap.length>0&&Ce.setValue(V,"sunShadowMap",Wt.state.sunShadowMap,ie),Wt.state.directionalShadowMap.length>0&&Ce.setValue(V,"directionalShadowMap",Wt.state.directionalShadowMap,ie),Wt.state.spotShadowMap.length>0&&Ce.setValue(V,"spotShadowMap",Wt.state.spotShadowMap,ie),Wt.state.pointShadowMap.length>0&&Ce.setValue(V,"pointShadowMap",Wt.state.pointShadowMap,ie)),ne.isSkinnedMesh){Ce.setOptional(V,ne,"bindMatrix"),Ce.setOptional(V,ne,"bindMatrixInverse");let nt=ne.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),Ce.setValue(V,"boneTexture",nt.boneTexture,ie))}ne.isBatchedMesh&&(Ce.setOptional(V,ne,"batchingTexture"),Ce.setValue(V,"batchingTexture",ne._matricesTexture,ie),Ce.setOptional(V,ne,"batchingIdTexture"),Ce.setValue(V,"batchingIdTexture",ne._indirectTexture,ie),Ce.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ce.setValue(V,"batchingColorTexture",ne._colorsTexture,ie));let Ye=ae.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&Z.update(ne,ae,An),(Y||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,Ce.setValue(V,"receiveShadow",ne.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Ue.envMapIntensity.value=X.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Kb()),Y){if(Ce.setValue(V,"toneMappingExposure",A.toneMappingExposure),Xe.needsLights&&sa(Ue,De),Be&&ee.fog===!0&&Pe.refreshFogUniforms(Ue,Be),Pe.refreshMaterialUniforms(Ue,ee,$,z,b.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.lightProbeGrid){let nt=Xe.lightProbeGrid;Ue.probesSH.value=nt.texture,Ue.probesMin.value.copy(nt.boundingBox.min),Ue.probesMax.value.copy(nt.boundingBox.max),Ue.probesResolution.value.copy(nt.resolution)}$s.upload(V,fo(Xe),Ue,ie)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&($s.upload(V,fo(Xe),Ue,ie),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ce.setValue(V,"center",ne.center),Ce.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Ce.setValue(V,"normalMatrix",ne.normalMatrix),Ce.setValue(V,"modelMatrix",ne.matrixWorld),ee.uniformsGroups!==void 0){let nt=ee.uniformsGroups;for(let He=0,Lt=nt.length;He<Lt;He++){let kt=nt[He];K.update(kt,An),K.bind(kt,An)}}return An}function sa(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.sunLights.needsUpdate=X,R.sunLightShadows.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,X,ae){let ee=j.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),j.get(R.texture).__webglTexture=X,j.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){let ae=j.get(R);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ae=0){G=R,L=X,I=ae;let ee=null,ne=!1,Be=!1;if(R){let ke=j.get(R);if(ke.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,ke.__webglFramebuffer),B.copy(R.viewport),Q.copy(R.scissor),ce=R.scissorTest,E.viewport(B),E.scissor(Q),E.setScissorTest(ce),D=-1;return}else if(ke.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(ke.__hasExternalTextures)ie.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ft=R.depthTexture;if(ke.__boundDepthTexture!==ft){if(ft!==null&&j.has(ft)&&(R.width!==ft.image.width||R.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}let $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);let tt=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?ee=tt[X][ae]:ee=tt[X],ne=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?ee=j.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?ee=tt[ae]:ee=tt,B.copy(R.viewport),Q.copy(R.scissor),ce=R.scissorTest}else B.copy(ye).multiplyScalar($).floor(),Q.copy(ge).multiplyScalar($).floor(),ce=Re;if(ae!==0&&(ee=O),E.bindFramebuffer(V.FRAMEBUFFER,ee)&&E.drawBuffers(R,ee),E.viewport(B),E.scissor(Q),E.setScissorTest(ce),ne){let ke=j.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,ae)}else if(Be){let ke=X;for(let $e=0;$e<R.textures.length;$e++){let tt=j.get(R.textures[$e]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ae,ke)}}else if(R!==null&&ae!==0){let ke=j.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ke.__webglTexture,ae)}D=-1};function aa(R){let X=j.get(R);return(X.__readFormat!==R.format||X.__readType!==R.type)&&(X.__readFormat=R.format,X.__readType=R.type,X.__formatReadable=P.textureFormatReadable(R.format),X.__typeReadable=P.textureTypeReadable(R.type)),X}this.readRenderTargetPixels=function(R,X,ae,ee,ne,Be,qe,ke=0){if(!(R&&R.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e){E.bindFramebuffer(V.FRAMEBUFFER,$e);try{let tt=R.textures[ke],ft=tt.format,mt=tt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke);let je=aa(tt);if(je.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&ae>=0&&ae<=R.height-ne&&V.readPixels(X,ae,ee,ne,Ae.convert(ft),Ae.convert(mt),Be)}finally{let tt=G!==null?j.get(G).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,X,ae,ee,ne,Be,qe,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e)if(X>=0&&X<=R.width-ee&&ae>=0&&ae<=R.height-ne){E.bindFramebuffer(V.FRAMEBUFFER,$e);let tt=R.textures[ke],ft=tt.format,mt=tt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke);let je=aa(tt);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.bufferData(V.PIXEL_PACK_BUFFER,Be.byteLength,V.STREAM_READ),V.readPixels(X,ae,ee,ne,Ae.convert(ft),Ae.convert(mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Bt=G!==null?j.get(G).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Bt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Qp(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Be),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Mt),V.deleteSync(Nt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ae=0){let ee=Math.pow(2,-ae),ne=Math.floor(R.image.width*ee),Be=Math.floor(R.image.height*ee),qe=X!==null?X.x:0,ke=X!==null?X.y:0;ie.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,qe,ke,ne,Be),E.unbindTexture()},this.copyTextureToTexture=function(R,X,ae=null,ee=null,ne=0,Be=0){let qe,ke,$e,tt,ft,mt,je,Mt,Bt,Nt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ae!==null)qe=ae.max.x-ae.min.x,ke=ae.max.y-ae.min.y,$e=ae.isBox3?ae.max.z-ae.min.z:1,tt=ae.min.x,ft=ae.min.y,mt=ae.isBox3?ae.min.z:0;else{let Ue=Math.pow(2,-ne);qe=Math.floor(Nt.width*Ue),ke=Math.floor(Nt.height*Ue),R.isDataArrayTexture?$e=Nt.depth:R.isData3DTexture?$e=Math.floor(Nt.depth*Ue):$e=1,tt=0,ft=0,mt=0}ee!==null?(je=ee.x,Mt=ee.y,Bt=ee.z):(je=0,Mt=0,Bt=0);let Rt=Ae.convert(X.format),rn=Ae.convert(X.type),Xe;X.isData3DTexture?(ie.setTexture3D(X,0),Xe=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ie.setTexture2DArray(X,0),Xe=V.TEXTURE_2D_ARRAY):(ie.setTexture2D(X,0),Xe=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);let Wt=E.getParameter(V.UNPACK_ROW_LENGTH),vt=E.getParameter(V.UNPACK_IMAGE_HEIGHT),An=E.getParameter(V.UNPACK_SKIP_PIXELS),de=E.getParameter(V.UNPACK_SKIP_ROWS),Y=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(V.UNPACK_SKIP_ROWS,ft),E.pixelStorei(V.UNPACK_SKIP_IMAGES,mt);let De=R.isDataArrayTexture||R.isData3DTexture,Ce=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){let Ue=j.get(R),Ye=j.get(X),nt=j.get(Ue.__renderTarget),He=j.get(Ye.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,nt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Lt=0;Lt<$e;Lt++)De&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(R).__webglTexture,ne,mt+Lt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(X).__webglTexture,Be,Bt+Lt)),V.blitFramebuffer(tt,ft,qe,ke,je,Mt,qe,ke,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||j.has(R)){let Ue=j.get(R),Ye=j.get(X);E.bindFramebuffer(V.READ_FRAMEBUFFER,N),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,k);for(let nt=0;nt<$e;nt++)De?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.__webglTexture,ne,mt+nt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,ne),Ce?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ye.__webglTexture,Be,Bt+nt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ye.__webglTexture,Be),ne!==0?V.blitFramebuffer(tt,ft,qe,ke,je,Mt,qe,ke,V.COLOR_BUFFER_BIT,V.NEAREST):Ce?V.copyTexSubImage3D(Xe,Be,je,Mt,Bt+nt,tt,ft,qe,ke):V.copyTexSubImage2D(Xe,Be,je,Mt,tt,ft,qe,ke);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Xe,Be,je,Mt,Bt,qe,ke,$e,Rt,rn,Nt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,Be,je,Mt,Bt,qe,ke,$e,Rt,Nt.data):V.texSubImage3D(Xe,Be,je,Mt,Bt,qe,ke,$e,Rt,rn,Nt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Be,je,Mt,qe,ke,Rt,rn,Nt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Be,je,Mt,Nt.width,Nt.height,Rt,Nt.data):V.texSubImage2D(V.TEXTURE_2D,Be,je,Mt,qe,ke,Rt,rn,Nt);E.pixelStorei(V.UNPACK_ROW_LENGTH,Wt),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(V.UNPACK_SKIP_PIXELS,An),E.pixelStorei(V.UNPACK_SKIP_ROWS,de),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Y),Be===0&&X.generateMipmaps&&V.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(R){j.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){L=0,I=0,G=null,E.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function Nm(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:c=0,iterations:l=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=I=>I.getWorldPosition(new U),d=[i,e,t].map(I=>I.quaternion.clone());i.updateWorldMatrix(!0,!0);let h=u(i),p=u(e),g=u(t),v=h.distanceTo(p)+p.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),v].every(Number.isFinite)||v<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,v*s));let f=g.clone().add(m),M=p.clone().sub(h).cross(g.clone().sub(p));if(M.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};M.normalize();function _(I,G){let D=u(I);return I.worldToLocal(D.clone().add(G)).sub(I.worldToLocal(D)).normalize()}let x=_(i,M),S=_(e,M),b=p.clone().sub(h).normalize(),w=_(i,new U().crossVectors(M,b).normalize()),y=Math.PI-h.clone().sub(p).angleTo(g.clone().sub(p)),T=c?[0,0,0,0]:[0,0,0],A=[Ee.degToRad(a[0]),Ee.degToRad(a[1]),...c?[Ee.degToRad(c)]:[],Ee.degToRad(o)],C=_(i,b);function F(I){return i.quaternion.copy(d[0]).multiply(new Ke().setFromAxisAngle(x,I[0])).multiply(new Ke().setFromAxisAngle(w,I[1])),c&&i.quaternion.multiply(new Ke().setFromAxisAngle(C,I[2])),e.quaternion.copy(d[1]).multiply(new Ke().setFromAxisAngle(S,I[I.length-1])),t.quaternion.copy(d[2]),i.updateWorldMatrix(!0,!0),u(t)}function O(){let I=u(i),G=u(e),D=u(t),H=G.clone().sub(I).cross(D.clone().sub(G)),B=Math.PI-I.clone().sub(G).angleTo(D.clone().sub(G));return H.dot(M)>0&&B>=Math.min(y,Ee.degToRad(5))-.001&&B<=Math.max(y,Ee.degToRad(150))+.001}let N=T.slice(),k=g.distanceToSquared(f),L=.001;for(let I=0;I<l;I++){let G=F(T),D=f.clone().sub(G);if(D.length()<8e-4)break;let H=T.map((q,oe)=>{let z=T.slice();return z[oe]+=L,F(z).sub(G).multiplyScalar(1/L)});F(T);let B=new dt().set(...[0,1,2].flatMap(q=>[0,1,2].map(oe=>H.reduce((z,$)=>z+$.getComponent(q)*$.getComponent(oe),0)+(q===oe?5e-4:0)))),Q=D.clone().applyMatrix3(B.invert()),ce=H.map(q=>q.dot(Q)),pe=!1;for(let q of[1,.5,.25,.125]){let oe=T.map(($,ve)=>Ee.clamp($+Ee.clamp(ce[ve],-.15,.15)*q,-A[ve],A[ve]));if(F(oe),!O())continue;let z=u(t).distanceToSquared(f);if(!(z>=k)){N=oe.slice(),k=z,T.splice(0,T.length,...oe),pe=!0;break}}if(!pe)break}return F(N),{accepted:!0,angles:N,offset:m.length(),error:Math.sqrt(k),nativeFlex:y,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(M)}}function Um(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let c=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(c)||c.length>16||new Set(c.map(J=>J.id)).size!==c.length)throw new Error("Invalid scene profiles");if(o)for(let J of c){if(typeof J.id!="string"||!Array.isArray(J.contacts)||J.contacts.length>16)throw new Error("Invalid source contacts");for(let he of J.contacts){if(typeof he.bone!="string"||!["ik","unsupported"].includes(he.kind))throw new Error("Unknown source contact");if(he.kind==="ik"&&(!i.getObjectByName(he.ikBone)||!he.drag||!he.sizeCm||![he.sizeCm.X,he.sizeCm.Y,he.sizeCm.Z,...Object.values(he.drag.ScreenPercentToWorld||{}),...Object.values(he.drag.WorldSpaceLimit||{}),...Object.values(he.drag.WorldSpaceLmitLeftUp||{}),he.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let l={},u=[],d=null,h=!1,p=null,g=[],v=null,m={},f="",M=!0,_=new Map,x=new Map,S=new Map,b=new Map,w=new Map,y=J=>J.getWorldPosition(new U),T=()=>c.find(J=>J.id===(l.scene?.()||"main")),A=()=>a==="Enya"&&["show_04","show_05"].includes(T()?.id),C=()=>A()||M,F=()=>(T()?.contacts||[]).filter(J=>J.kind==="ik"),O=document.createElement("div");O.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(O);let N=document.createElement("div");O.append(N);let k=document.createElement("button");k.textContent="\u8FD8\u539F\u817F\u90E8",k.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",k.onclick=()=>Ve("lower_legs"),O.append(k);function L(){for(let J of u)J.bone.quaternion.copy(J.base);u=[]}function I(){return(T()?.contacts||[]).map(J=>{let he=i.getObjectByName(J.bone);if(!he)return null;let se=y(he).project(e),me=t.getBoundingClientRect();return{id:J.id,label:/Foot/.test(J.bone)?J.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(J.bone)?"\u624B\u90E8":"\u5934\u90E8",x:me.left+(se.x+1)*me.width/2,y:me.top+(1-se.y)*me.height/2,supportedIK:J.kind==="ik"}}).filter(Boolean)}function G(J){let he=i.getObjectByName(J.ikBone),se=he?.parent,me=se?.parent;if(!me?.isBone||!se?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:J,foot:he,calf:se,thigh:me,base:[me,se,he].map(Me=>Me.quaternion.clone()),anchor:i.worldToLocal(y(he)),offset:new U,dx:0,dy:0}}function D(J){if(!J?.alphaVerified)return null;for(let he of F()){let se=i.getObjectByName(he.ikBone),me=se?.worldToLocal(new U().fromArray(J.point)),Me=he.sizeCm;if(me&&Math.abs(me.x)<Me.X*.01&&Math.abs(me.y)<Me.Z*.01&&Math.abs(me.z)<Me.Y*.01)return he}for(let he of F()){let se=he.ikBone.includes("-L-")?"L":"R";if((J.skinBones||[]).some(me=>me?.startsWith("Bip001-"+se+"-")&&/Thigh|Calf|Foot/.test(me)))return he}return null}function H(J,he){if(!he||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[V,Je]of _)Je.contact.ikBone===he.ikBone&&Q(V,!0);J.preventDefault(),J.stopImmediatePropagation(),l.beforeDrag?.();let se=x.get(he.ikBone),me=se?i.worldToLocal(y(se.foot)):null;L();let Me=G(he);se&&(Me.base=se.base,Me.anchor=me),S.delete(he.ikBone),Object.assign(Me,{pointerId:J.pointerId,x:J.clientX,y:J.clientY,dragging:!1,triggered:!1,pendingTrigger:null,pendingVoiceId:he.voiceId||null}),_.set(J.pointerId,Me),t.setPointerCapture(J.pointerId),p={contact:he.id,handle:J.target?.dataset?.legHandle||null},l.interacting?.(!0),!M&&he.voiceId&&l.voice?.(he.voiceId)}function B(J){H(J,D(n(J.clientX,J.clientY)))}function Q(J,he=!1){let se=_.get(J);se&&(_.delete(J),t.hasPointerCapture(J)&&t.releasePointerCapture(J),_.size===0&&l.interacting?.(!1),se.dragging&&(!he&&(A()||M&&!se.pendingTrigger)?(x.set(se.contact.ikBone,se),f="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u677E\u624B\u540E\u518D\u56DE\u5E94\uFF0C\u53EF\u968F\u65F6\u8FD8\u539F\u817F\u90E8\u3002"):x.has(se.contact.ikBone)||S.set(se.contact.ikBone,{...se,releasedAt:performance.now()})),he||(se.pendingTrigger?(d=se.pendingTrigger,l.reaction?.(se.pendingTrigger.sampleId)):!se.dragging&&se.pendingVoiceId&&!M&&l.voice?.(se.pendingVoiceId),l.event?.({type:"touch",region:"leg",label:se.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:se.dragging?"drag":"tap",dx:Math.round(se.dx*10)/10,dy:Math.round(se.dy*10)/10,held:x.has(se.contact.ikBone),source:"bounded-leg-control",confidence:1,completed:!0})))}function ce(J,he,se){return se?.endsWith("::Less")?J<he:se?.endsWith("::Greater")?J>he:null}function pe(J){let he=_.get(J.pointerId);if(!he||(J.stopImmediatePropagation(),!he.dragging&&Math.hypot(J.clientX-he.x,J.clientY-he.y)<5))return;he.dragging=!0;let se=t.getBoundingClientRect(),me=he.contact.drag,Me=C()?55:0,V=(J.clientX-he.x)/Math.max(1,se.width)*(C()?100:me.ScreenPercentToWorld?.X||0),Je=(J.clientY-he.y)/Math.max(1,se.height)*(C()?100:me.ScreenPercentToWorld?.Y||0);he.dx=Ee.clamp(V,-Math.max(Me,me.WorldSpaceLmitLeftUp?.X||0),Math.max(Me,me.WorldSpaceLimit?.X||0)),he.dy=Ee.clamp(Je,-Math.max(Me,me.WorldSpaceLmitLeftUp?.Y||0),Math.max(Me,me.WorldSpaceLimit?.Y||0));let Ge=new U().setFromMatrixColumn(e.matrixWorld,0),P=new U().setFromMatrixColumn(e.matrixWorld,1),E=Ge.multiplyScalar(he.dx*.01).addScaledVector(P,-he.dy*.01);if(he.offset.copy(i.worldToLocal(i.getWorldPosition(new U).add(E))),!A())for(let W of he.contact.thresholds||[]){let j=[ce(he.dx,W.limit.X,W.xCompare),ce(he.dy,W.limit.Y,W.yCompare)].filter(ie=>ie!==null);if(!he.triggered&&j.length&&j.every(Boolean)){he.triggered=!0;let ie={sampleId:W.sampleId,dx:he.dx,dy:he.dy,source:"serialized-drag-threshold"};M?he.pendingTrigger=ie:(d=ie,Q(J.pointerId),l.reaction?.(W.sampleId));break}}}function q(J){_.has(J.pointerId)&&(J.stopImmediatePropagation(),Q(J.pointerId))}function oe(J){Q(J.pointerId,!0)}function z(){for(let J of[..._.keys()])Q(J,!0);L()}function $(){z(),x.clear(),S.clear(),w.clear(),f=""}function ve(){let J=F().map(he=>he.ikBone.includes("-L-")?"left":"right");return[...new Set(J.map(he=>"raise_"+he+"_leg")),...J.includes("left")&&J.includes("right")?["spread_legs"]:[],...J.length?["lower_legs"]:[]]}function Ve(J){if(!ve().includes(J))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(z(),J==="lower_legs"){for(let[me,Me]of x)S.set(me,{...Me,releasedAt:performance.now()});x.clear(),f="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}L();let he=F(),se=he.filter(me=>J==="spread_legs"||J.includes(me.ikBone.includes("-L-")?"left":"right"));for(let me of se){let Me=G(me),V=i.getObjectByName(me.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),Je=y(Me.thigh).sub(y(V||Me.thigh.parent));if(Je.lengthSq()<1e-8)continue;Je.normalize();let Ge=new U(0,1,0).transformDirection(i.matrixWorld),P=y(Me.thigh).distanceTo(y(Me.calf))+y(Me.calf).distanceTo(y(Me.foot)),E=J==="spread_legs"?Je.multiplyScalar(P*(A()?.48:.18)).addScaledVector(Ge,P*.08):Ge.multiplyScalar(P*(A()?.36:.18)).addScaledVector(y(Me.thigh).sub(y(Me.foot)).normalize(),P*(A()?.2:0));Me.offset.copy(i.worldToLocal(i.getWorldPosition(new U).add(E))),Me.startedAt=performance.now(),x.set(me.ikBone,Me),S.delete(me.ikBone)}f=J==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":J.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let ye=new Map;function ge(J,he=!1){if(!ye.has(J.name)){let me=[];i.traverse(Me=>{if(!Me.isSkinnedMesh)return;let V=Me.geometry.getAttribute("skinIndex"),Je=Me.geometry.getAttribute("skinWeight");if(!V||!Je)return;let Ge=new Set(Me.skeleton.bones.map((E,W)=>E.name===J.name||E.name===J.name.replace("-Foot","-Toe0")?W:-1).filter(E=>E>=0)),P=[];for(let E=0;E<V.count;E++){let W=0;for(let j=0;j<4;j++)Ge.has(V.getComponent(E,j))&&(W+=Je.getComponent(E,j));W>.45&&P.push(E)}if(P.length){let E=Me.geometry.getAttribute("position"),W=new Set;for(let j of[-1,0,1])for(let ie of[-1,0,1])for(let re of[-1,0,1]){if(j===0&&ie===0&&re===0)continue;let ue=-1/0,te=P[0];for(let le of P){let be=E.getX(le)*j+E.getY(le)*ie+E.getZ(le)*re;be>ue&&(ue=be,te=le)}W.add(te)}me.push({mesh:Me,vertices:P,probes:[...W]})}}),ye.set(J.name,me)}let se=[];for(let{mesh:me,vertices:Me,probes:V}of ye.get(J.name))for(let Je of he?Me:V)se.push(me.getVertexPosition(Je,new U).applyMatrix4(me.matrixWorld));return se}function Re(J,he){let se=y(J).dot(he);return Ee.clamp(Math.max(.04,...ge(J).map(me=>se-me.dot(he)))+.015,.055,.16)}function Oe(){let J=F(),he=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[se,me]of b)J.some(Me=>Me.id===se)||(me.remove(),b.delete(se));for(let se of J){let me=i.getObjectByName(se.ikBone);if(!me)continue;let Me=b.get(se.id);Me||(Me=document.createElement("button"),Me.dataset.legHandle=String(se.id),Me.textContent=se.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",Me.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",Me.addEventListener("pointerdown",Ge=>H(Ge,se)),b.set(se.id,Me),O.append(Me));let V=t.getBoundingClientRect(),Je=y(me).lerp(y(me.parent),.5).project(e);Me.hidden=!!he,Me.style.left=Ee.clamp(V.left+(Je.x+1)*V.width/2,55,V.right-55)+"px",Me.style.top=Ee.clamp(V.top+(1-Je.y)*V.height/2,100,V.bottom-150)+"px"}k.hidden=he||!x.size}function Ze(){let J=performance.now();for(let[se]of _)t.hasPointerCapture(se)||Q(se,!0);if(Oe(),h){N.replaceChildren();for(let se of I()){let me=document.createElement("span");me.textContent=se.label,me.style.cssText=`position:absolute;left:${se.x}px;top:${se.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,N.append(me)}}let he=new Map(x);for(let se of _.values())se.dragging&&he.set(se.contact.ikBone,se);for(let[se,me]of S)me.weight=Math.max(0,1-(J-me.releasedAt)/(1e3*Math.max(.15,me.contact.drag.DragRecoverTime||.35))),me.weight===0?S.delete(se):he.has(se)||he.set(se,me);if(A()){for(let se of F())if(!he.has(se.ikBone)){let me=G(se);me.passive=!0,he.set(se.ikBone,me)}}g=[],m={};for(let se of he.values()){let me=[se.thigh,se.calf,se.foot],Me=me.map(re=>re.quaternion.clone()),V=se.weight??(se.startedAt?Ee.smoothstep(Math.min(1,(J-se.startedAt)/450),0,1):1);me.forEach((re,ue)=>re.quaternion.copy(se.base[ue])),i.updateWorldMatrix(!0,!0);let Je=y(se.calf),Ge=y(se.foot),P=i.localToWorld(se.anchor.clone().add(se.offset)),E=0,W=.055,j=[...se.thigh.parent.matrixWorld.elements,...se.base.flatMap(re=>re.toArray()),...P.toArray(),...me.flatMap(re=>[...re.position.toArray(),...re.scale.toArray()])],ie=w.get(se.contact.ikBone);if(ie&&ie.key.length===j.length&&j.every((re,ue)=>Math.abs(re-ie.key[ue])<1e-4)){me.forEach((re,ue)=>{re.quaternion.copy(Me[ue]).slerp(ie.quaternions[ue],V).normalize(),u.push({bone:re,base:Me[ue],applied:re.quaternion.clone()})}),v={...ie.report,cached:!0},m[se.contact.ikBone]=v;continue}if(A()&&s){let re=s(Ge);if(re&&re.clearance>-.5&&re.clearance<.5){W=Re(se.foot,re.normal);for(let ue=0;ue<3;ue++){let te=0,le=re.normal;for(let be of[.7,.85,1]){let Pe=s(Je.clone().lerp(P,be));Pe&&(te=Math.max(te,(W-Pe.clearance)/be),le=Pe.normal)}if(te=Ee.clamp(te,0,.65-E),te<5e-4)break;P.addScaledVector(le,te),E+=te}}}E>0&&g.push({bone:se.foot.name,correction:E,radius:W});try{let re=A()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let ue=0;ue<4&&(me.forEach((be,Pe)=>be.quaternion.copy(se.base[Pe])),v=Nm(se.thigh,se.calf,se.foot,P,re),i.updateWorldMatrix(!0,!0),!(!A()||!s));ue++){let te=1/0,le=new U(0,1,0);for(let be of ge(se.foot)){let Pe=s(be);Pe&&Pe.clearance<te&&(te=Pe.clearance,le=Pe.normal)}if(v.footClearance=Number.isFinite(te)?te:null,te>=.012)break;P.addScaledVector(le,Math.min(.2,.018-te))}w.set(se.contact.ikBone,{key:j,quaternions:me.map(ue=>ue.quaternion.clone()),report:{...v}}),m[se.contact.ikBone]={...v,target:P.toArray(),actual:y(se.foot).toArray()},me.forEach((ue,te)=>{let le=ue.quaternion.clone();ue.quaternion.copy(Me[te]).slerp(le,V).normalize(),u.push({bone:ue,base:Me[te],applied:ue.quaternion.clone()})})}catch(re){me.forEach((ue,te)=>ue.quaternion.copy(Me[te])),f="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+re.message}}if(he.size){i.updateWorldMatrix(!0,!0);let se=new Set;i.traverse(me=>{me.isSkinnedMesh&&!se.has(me.skeleton)&&(me.skeleton.update(),se.add(me.skeleton))})}}let Fe=[["pointerdown",B],["pointermove",pe],["pointerup",q],["pointercancel",oe],["lostpointercapture",oe]];for(let[J,he]of Fe)t.addEventListener(J,he);let Se=()=>z();return window.addEventListener("blur",Se),{configure:J=>l=J,setDeferredFeedback:J=>(M=!!J,M),hitTest:(J,he)=>D(n(J,he))?.id,restore:L,tick:Ze,cancel:$,suspend:z,command:Ve,available:ve,profile:T,points:I,togglePoints(){return h=!h,h||N.replaceChildren(),I().length},headReaction:()=>T()?.contacts.find(J=>/hari|Head/.test(J.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:x.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[...x.keys()].map(J=>J.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):S.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:f,available:ve()}),footMeshContacts:()=>Object.fromEntries(F().map(J=>{let he=i.getObjectByName(J.ikBone),se=he?ge(he,!0).map(me=>s?.(me)?.clearance).filter(Number.isFinite):[];return[J.ikBone,{samples:se.length,minClearance:se.length?Math.min(...se):null}]})),snapshot:()=>({scene:T()?.id,deferredFeedback:M,legSolve:v,solves:m,bedCorrections:g,lastPick:p,active:_.size>0,offset:_.size?[_.values().next().value.dx,_.values().next().value.dy]:null,recovering:S.size>0,held:[...x.keys()],lastEvent:d}),dispose(){$(),O.remove();for(let[J,he]of Fe)t.removeEventListener(J,he);window.removeEventListener("blur",Se)}}}var Dm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},Tc=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=Dm[e]||Dm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function Fm(i,e,t){let n=new ct,r=new ct,s=0,a=0,o=!1,c=0,l=0,u=!1,d=!0,h=!1,p=0,g=[],v=new Map,m={value:Array.from({length:4},()=>new U)},f={value:Array.from({length:4},()=>new U)},M={value:[.05,.05,.05,.05]},_=new U,x=null;i.traverse(L=>{L.isMesh&&L.userData.snowbreakSurfaceKey&&v.set(L.userData.snowbreakSurfaceKey,L)});function S(L){let I=L.hit,G=v.get(I.mesh);if(!G||!I.barycentric)return new U().fromArray(I.point);let D=G.geometry.index,H=new U;for(let B=0;B<3;B++){let Q=D?D.getX(I.triangle*3+B):I.triangle*3+B;H.addScaledVector(G.getVertexPosition(Q,new U),I.barycentric[B])}return G.localToWorld(H)}let b=[],w=new Map,y=new Set;i.traverse(L=>{if(L.isSkinnedMesh&&y.add(L.skeleton),L.isBone&&/^EyeJoint_[LR]$/.test(L.name)&&b.push(L),!L.isSkinnedMesh||!["skin","cloth-or-room"].includes(L.material?.userData.profile))return;let I=L.material,G=I.onBeforeCompile,D=I.customProgramCacheKey.bind(I);I.onBeforeCompile=H=>{G(H),Object.assign(H.uniforms,{senseCenters:m,senseOffsets:f,senseRadii:M}),H.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+H.vertexShader,H.vertexShader=H.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},I.customProgramCacheKey=()=>D()+"-surface-spring-v2",I.needsUpdate=!0});function T(L,I,G="camera"){G==="camera"&&(h||performance.now()<p)||!Number.isFinite(L)||!Number.isFinite(I)||(n.set(Ee.clamp(L,-1,1),Ee.clamp(I,-1,1)),s=performance.now()+1600)}function A(L){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let I=t.getBoundingClientRect();p=performance.now()+1600,T((L.clientX-I.left)/I.width*2-1,1-(L.clientY-I.top)/I.height*2,"touch")}function C(L,I){if(!d||!L?.alphaVerified||!Array.isArray(L.point)||!v.has(L.mesh))return!1;x?.spring.release();let G=I?.id||L.anatomy?.id||"body",D=g.find(H=>!H.spring.pressed&&H.region===G&&S(H).distanceTo(new U().fromArray(L.point))<.04);return D?(x=D,x.hit=L):(g.length===4&&g.shift(),x={hit:L,region:G,spring:new Tc(G),direction:e.getWorldDirection(new U)},g.push(x)),x.spring.press(),o=u=!0,!0}let F=L=>{h=!0,A(L)},O=()=>{o=!1,h=!1,x?.spring.release(),x=null,p=performance.now()+1e3};t.addEventListener("pointerdown",F),t.addEventListener("pointermove",A),t.addEventListener("pointerup",O),t.addEventListener("pointercancel",O),t.addEventListener("lostpointercapture",O);function N(L=performance.now()){let I=Math.min(.04,Math.max(0,(L-a)/1e3));a=L,L>s&&n.set(0,0),r.lerp(n,1-Math.exp(-I*12));let G=new U().setFromMatrixColumn(e.matrixWorld,1),D=new U().setFromMatrixColumn(e.matrixWorld,0);for(let H of b){let B=H.quaternion.clone(),Q=new et().extractRotation(H.parent.matrixWorld),ce=new et().makeRotationFromQuaternion(new Ke().setFromAxisAngle(G,r.x*.07).multiply(new Ke().setFromAxisAngle(D,-r.y*.05))),pe=Q.clone().invert().multiply(ce).multiply(Q);H.quaternion.premultiply(new Ke().setFromRotationMatrix(pe)).normalize(),H.updateWorldMatrix(!1,!0),w.set(H,{base:B,applied:H.quaternion.clone()})}for(let H=g.length-1;H>=0;H--)g[H].spring.step(I),g[H].spring.active||g.splice(H,1);l=0,c=0,u=g.length>0;for(let H=0;H<4;H++){let B=g[H];f.value[H].set(0,0,0),B&&(m.value[H].copy(S(B)),M.value[H]=B.spring.profile.radius,f.value[H].copy(B.direction).multiplyScalar(B.spring.offset),Math.abs(B.spring.offset)>Math.abs(l)&&(l=B.spring.offset),c+=Math.abs(B.spring.velocity))}if(b.length)for(let H of y)H.update()}function k(){for(let[L,I]of w)L.quaternion.angleTo(I.applied)<1e-6&&L.quaternion.copy(I.base);w.clear()}return{gaze:T,touch:C,tick:N,restore:k,reset(){k(),o=u=h=!1,p=0,l=c=0,g.length=0,x=null;for(let L of f.value)L.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:b.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(L=>({region:L.region,offset:L.spring.offset,velocity:L.spring.velocity,pressed:L.spring.pressed,center:S(L).toArray()}))}),dispose(){for(let[L,I]of[["pointerdown",F],["pointermove",A],["pointerup",O],["pointercancel",O],["lostpointercapture",O]])t.removeEventListener(L,I)}}}function Vh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=b=>b.getWorldPosition(new U);i.updateWorldMatrix(!0,!0);for(let b of[i,e,t]){let w=b.getWorldScale(new U);if(Math.min(w.x,w.y,w.z)<=0||Math.max(w.x,w.y,w.z)-Math.min(w.x,w.y,w.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),d=c.distanceTo(l),h=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),d,h].every(Number.isFinite)||Math.min(d,h)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(c),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let v=b=>Math.sqrt(Math.max(0,d*d+h*h+2*d*h*Math.cos(Ee.degToRad(b)))),m=Ee.clamp(g,Math.max(Math.abs(d-h)+1e-6,v(a)),Math.min(d+h-1e-6,v(s))),f=r.clone().sub(c).addScaledVector(p,-r.clone().sub(c).dot(p));if(f.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");f.normalize();let M=(d*d-h*h+m*m)/(2*m),_=c.clone().addScaledVector(p,M).addScaledVector(f,Math.sqrt(Math.max(0,d*d-M*M))),x=c.clone().addScaledVector(p,m);function S(b,w,y){let T=o(b),A=o(w).sub(T).normalize(),C=y.clone().sub(T).normalize(),F=b.getWorldQuaternion(new Ke);F.premultiply(new Ke().setFromUnitVectors(A,C)),b.quaternion.copy(b.parent.getWorldQuaternion(new Ke).invert().multiply(F)).normalize(),b.updateWorldMatrix(!0,!0)}return S(i,e,_),S(e,t,x),{requested:n.toArray(),reachable:x.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(x),elbowFlex:Ee.radToDeg(Math.acos(Ee.clamp((m*m-d*d-h*h)/(2*d*h),-1,1)))}}var kr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Gh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new U);function d(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function h(){if(d(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),v=u(r),m=u(s),f=u(a),M=g.distanceTo(v)+v.distanceTo(m),_=g.clone().sub(f);if(_.y=0,_.length()<1e-5)throw new Error("Ambiguous shoulder direction");_.normalize();let x=f.clone().addScaledVector(_,M*.55);x.y+=M*.15;let S=g.clone().addScaledVector(_,M);S.y-=M*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new Ke),start:m,target:x,pole:S},l=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let v=Ee.clamp(g,0,1),m=v<.3?v/.3:v>.7?(1-v)/.3:1,f=m*m*(3-2*m);if(f<1e-6)return;l=Vh(n,r,s,c.target,c.pole,kr);let M={},_=[];function x(S,b,w,y,T){let A=S.quaternion.clone(),C=b.angleTo(A),F=Ee.degToRad(w);C>F&&_.push(T),S.quaternion.copy(b).slerp(A,y*Math.min(1,F/Math.max(C,1e-10))).normalize(),M[T]=Ee.radToDeg(b.angleTo(S.quaternion))}x(n,c.upper,kr.upper,f,"upper"),x(r,c.lower,kr.lower,f,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new Ke).invert().multiply(c.wristWorld)),x(s,c.wrist,kr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:M,limited:_,weight:f}}return{begin:h,apply:p,restore:d,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:kr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function Om(i,e,t=()=>0){let n={};for(let[L,I]of[["left","L"],["right","R"]]){let G=i.getObjectByName(`Bip001-${I}-UpperArm`),D=i.getObjectByName(`Bip001-${I}-Forearm`),H=i.getObjectByName(`Bip001-${I}-Hand`);G?.isBone&&D?.parent===G&&H?.parent===D&&(n[L]={upper:G,lower:D,hand:H})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(L=>{L.isSkinnedMesh&&a.add(L.skeleton)}),i.traverse(L=>{if(L.isMesh&&L.morphTargetInfluences){let I=L.morphTargetDictionary||{},G=I.L_Eye_close??I.L_eye_close??I.eyecloseL??I.L_Eye_close_Spcl_Ty_neg_1,D=I.R_Eye_close??I.R_eye_close??I.eyecloseR??I.R_Eye_close_Spcl_Ty_neg_1;Number.isInteger(G)&&s.push({mesh:L,index:G,name:"L_Eye_close"}),Number.isInteger(D)&&s.push({mesh:L,index:D,name:"R_Eye_close"})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(L=>L.name==="L_Eye_close")&&s.some(L=>L.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,d=0,h=[],p=[];i.traverse(L=>{if(L.isMesh&&L.morphTargetDictionary&&L.morphTargetInfluences){let I=L.morphTargetDictionary.Viseme_A;if(!Number.isInteger(I))return;let G=0,D=L.geometry?.morphAttributes?.position?.[I];if(D)for(let B=0;B<D.count;B++){let Q=Math.hypot(D.getX(B),D.getY(B),D.getZ(B));Q>G&&(G=Q)}let H=G>.001?Ee.clamp(.0125/G,.85,2.2):.85;p.push({mesh:L,index:I,gain:H})}});function g(L,I){if(!o.includes(L)||!L.startsWith("gesture_")||!Number.isFinite(I?.duration)||I.duration<1||I.duration>8||!Array.isArray(I.poses)||I.poses.length<2||I.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let G=-1;for(let D of I.poses){if(D.smile!==void 0&&(!Number.isFinite(D.smile)||D.smile<0||D.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(D.time)||D.time<=G||D.time<0||D.time>I.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");G=D.time;for(let[H,B]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(D[H]&&(!Array.isArray(D[H])||D[H].length!==3||D[H].some((Q,ce)=>!Number.isFinite(Q)||Math.abs(Q)>B[ce])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(I.poses[0].time!==0||G!==I.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:L,plan:I,start:performance.now()},S="\u6B63\u5728\u6267\u884C\uFF1A"+L}function v(L){if(!l)return null;let{plan:I}=l,G=(L-l.start)/1e3;if(G>=I.duration)return S="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let D=Math.max(0,I.poses.findIndex(q=>q.time>=G)-1),H=I.poses[D],B=I.poses[D+1],Q=Ee.clamp((G-H.time)/(B.time-H.time),0,1),ce=Q*Q*(3-2*Q),pe={};for(let q of["head","torso","leftHand","rightHand"])(H[q]||B[q])&&(pe[q]=[0,1,2].map(oe=>(H[q]?.[oe]||0)+((B[q]?.[oe]||0)-(H[q]?.[oe]||0))*ce));return pe.smile=(H.smile||0)+((B.smile||0)-(H.smile||0))*ce,pe}let m=new Set,f=!1,M=0,_=0,x=performance.now(),S="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",b={left:0,right:0},w=0,y=[],T=[],A={left:!1,right:!1};function C(){for(let L of y)L.bone.quaternion.angleTo(L.applied)<1e-6&&L.bone.quaternion.copy(L.base);y.length=0;for(let L of[...T,...h])Math.abs(L.mesh.morphTargetInfluences[L.index]-L.applied)<1e-6&&(L.mesh.morphTargetInfluences[L.index]=L.base);T.length=h.length=0}function F(L){if(!o.includes(L))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,L==="raise_left_hand"&&m.add("left"),L==="raise_right_hand"&&m.add("right"),L==="raise_both_hands"&&(m=new Set(["left","right"])),L==="lower_hands"&&m.clear(),L==="close_eyes"&&(f=!0),L==="open_eyes"&&(f=!1),L==="turn_left"&&(_+=90),L==="turn_right"&&(_-=90),L==="turn_back"&&(_=180-t()),L==="face_front"&&(_=-t()),S="\u5DF2\u63A5\u6536\uFF1A"+L,N()}function O(){let L=performance.now(),I=Math.min(.25,(L-x)/1e3);x=L;let G=1-Math.exp(-9*I),D=v(L);if(D){i.updateWorldMatrix(!0,!0);let pe=ye=>ye.getWorldPosition(new U),q=i.getObjectByName("Bip001-Pelvis"),oe=r&&q?pe(r).sub(pe(q)).normalize():new U(0,1,0),z=new U(0,0,1).applyQuaternion(i.getWorldQuaternion(new Ke)),$=i.getObjectByName("EyeJoint_L"),ve=i.getObjectByName("EyeJoint_R");if(r&&$&&ve){let ye=pe($).add(pe(ve)).multiplyScalar(.5).sub(pe(r));ye.addScaledVector(oe,-ye.dot(oe)),ye.length()>1e-5&&(z=ye.normalize())}let Ve=new U().crossVectors(oe,z).normalize();z.crossVectors(Ve,oe).normalize();for(let[ye,ge]of[[r,D.head],[c,D.torso]])if(ye&&ge){let Re=ye.quaternion.clone(),Oe=ye.parent.getWorldQuaternion(new Ke),Ze=new Ke().setFromAxisAngle(oe,Ee.degToRad(-ge[0])).multiply(new Ke().setFromAxisAngle(Ve,Ee.degToRad(ge[1]))).multiply(new Ke().setFromAxisAngle(z,Ee.degToRad(ge[2])));ye.quaternion.premultiply(Oe.clone().invert().multiply(Ze).multiply(Oe)).normalize(),y.push({bone:ye,base:Re,applied:ye.quaternion.clone()}),ye.updateWorldMatrix(!1,!0)}}M+=(_-M)*G,e(M),A={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let H=new U(0,1,0),B=i.getObjectByName("EyeJoint_L"),Q=i.getObjectByName("EyeJoint_R"),ce=new U(0,0,1).applyQuaternion(i.getWorldQuaternion(new Ke));r&&B&&Q&&(ce.copy(B.getWorldPosition(new U).add(Q.getWorldPosition(new U)).multiplyScalar(.5).sub(r.getWorldPosition(new U))),ce.y=0,ce.length()<1e-5&&ce.set(0,0,1),ce.normalize());for(let pe of["left","right"]){b[pe]+=((m.has(pe)?1:0)-b[pe])*G;let q=D?.[pe+"Hand"],oe=q?Ee.smoothstep(Math.hypot(...q),0,.25):b[pe],z=n[pe];if(!z||!r||oe<.001)continue;let $=Se=>Se.getWorldPosition(new U),ve=$(r),Ve=$(z.upper),ye=Ve.distanceTo($(z.lower))+$(z.lower).distanceTo($(z.hand)),ge=Ve.clone().sub(ve);if(ge.y=0,ge.length()<1e-6)continue;ge.normalize();let Re=ve.clone().addScaledVector(ge,ye*.45);Re.y+=ye*.18,q&&(Re.copy($(z.hand)).addScaledVector(ge,Math.abs(q[0])*ye),Re.y+=q[1]*ye,Re.addScaledVector(ce,q[2]*ye));let Oe=Ve.clone().addScaledVector(ce,ye*.7).addScaledVector(ge,ye*.2).addScaledVector(H,-ye*.2),Ze=z.hand.getWorldQuaternion(new Ke),Fe=[z.upper,z.lower,z.hand].map(Se=>({bone:Se,base:Se.quaternion.clone()}));try{Vh(z.upper,z.lower,z.hand,Re,Oe,kr);for(let[Je,Ge]of[z.upper,z.lower].entries()){let P=Fe[Je].base,E=Ge.quaternion.clone(),W=P.angleTo(E),j=Ee.degToRad([100,140][Je]);Ge.quaternion.copy(P).slerp(E,oe*Math.min(1,j/Math.max(W,1e-8))).normalize(),Ge.updateWorldMatrix(!1,!0)}let Se=Ze.clone(),J=Je=>i.getObjectByName(`Bip001-${pe==="left"?"L":"R"}-Finger${Je}`),he=J(1),se=J(2),me=J(4);if(he&&se&&me){let Je=$(he).sub($(me)).normalize(),Ge=$(se).sub($(z.hand));Ge.addScaledVector(Je,-Ge.dot(Je)).normalize();let P=new et().makeBasis(Je,Ge,new U().crossVectors(Je,Ge).normalize()),E=l?.id==="gesture_open_arms"?ge.clone():H.clone(),W=ce.clone().multiplyScalar(pe==="left"?1:-1),j=new U().crossVectors(E,W).normalize();E.crossVectors(W,j).normalize();let ie=new et().makeBasis(j,E,new U().crossVectors(j,E).normalize());Se=new Ke().setFromRotationMatrix(ie.multiply(P.invert())).multiply(z.hand.getWorldQuaternion(new Ke));let re=Se.clone().multiply(z.hand.getWorldQuaternion(new Ke).invert()),ue=$(z.hand).sub($(z.lower)).normalize(),te=new U(re.x,re.y,re.z).dot(ue),le=Ee.clamp(2*Math.atan2(te,re.w),-Math.PI/2,Math.PI/2)*.6*oe;z.lower.quaternion.multiply(new Ke().setFromAxisAngle(z.hand.position.clone().normalize(),le)).normalize(),z.lower.updateWorldMatrix(!1,!0)}let Me=z.hand.parent.getWorldQuaternion(new Ke).invert().multiply(Se),V=Fe[2].base.angleTo(Me);z.hand.quaternion.copy(Fe[2].base).slerp(Me,oe*Math.min(1,Ee.degToRad(90)/Math.max(V,1e-8))).normalize(),z.hand.updateWorldMatrix(!1,!0);for(let Je of Fe)y.push({...Je,applied:Je.bone.quaternion.clone()});A[pe]=$(z.hand).y>Ve.y+ye*.25}catch(Se){for(let J of Fe)J.bone.quaternion.copy(J.base);S="\u4E3E\u624B\u5931\u8D25\uFF1A"+Se.message,m.delete(pe)}}w+=((f?1:0)-w)*G;for(let pe of s){let q=pe.mesh.morphTargetInfluences[pe.index]||0,oe=Ee.lerp(q,f?1:0,w);T.push({...pe,base:q,applied:oe}),pe.mesh.morphTargetInfluences[pe.index]=oe}D?.smile&&i.traverse(pe=>{if(!pe.isMesh||!pe.morphTargetInfluences)return;let q=pe.morphTargetDictionary||{};for(let oe of[q.L_Eye_smile??q.L_eye_smile??q.eyemileL??q.eyesmileL,q.R_Eye_smile??q.R_eye_smile??q.eyemileR??q.eyesmileR]){if(!Number.isInteger(oe))continue;let z=pe.morphTargetInfluences[oe]||0,$=Math.max(z,Math.min(.5,D.smile));h.push({mesh:pe,index:oe,base:z,applied:$}),pe.morphTargetInfluences[oe]=$}}),d+=(u-d)*(1-Math.exp(-I*(u>d?24:16)));for(let pe of p){let q=pe.mesh.morphTargetInfluences[pe.index]||0,oe=Math.max(q,d*(pe.gain||.85));h.push({...pe,base:q,applied:oe}),pe.mesh.morphTargetInfluences[pe.index]=oe}i.updateWorldMatrix(!0,!0);for(let pe of a)pe.update()}function N(){i.updateWorldMatrix(!0,!0);for(let G of["left","right"]){let D=n[G];if(!D)continue;let H=D.upper.getWorldPosition(new U),B=D.lower.getWorldPosition(new U),Q=D.hand.getWorldPosition(new U);A[G]=Q.y>H.y+(H.distanceTo(B)+B.distanceTo(Q))*.25}let L=s.length?s.reduce((G,D)=>G+(D.mesh.morphTargetInfluences[D.index]||0),0)/s.length:0,I=M+t();return{available:[...o],eyes:s.length?L>.95?"\u5DF2\u95ED\u5408":L<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...A},hands:A.left&&A.right?"\u53CC\u624B\u62AC\u8D77":A.left?"\u5DE6\u624B\u62AC\u8D77":A.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(M-_)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((I%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(I%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(I)}\u5EA6`,yaw:I,lastResult:S}}function k(){C(),u=d=0,l=null,m.clear(),f=!1,b.left=b.right=w=0,M=_=0,e(0),S="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:F,playGesture:g,tick:O,restore:C,snapshot:N,reset:k,setSpeechLevel:L=>{u=Number.isFinite(L)?Ee.clamp(L,0,1):0},speechState:()=>({level:d,targets:p.length,weights:p.map(L=>L.mesh.morphTargetInfluences[L.index])}),releaseHands:()=>{m.clear(),l=null}}}function Bm(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:Wh(i)}function Wh(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let h=0;h<3;h++)u[h]=n[h]+(.2*o[h]+.6*c[h]+.2*l[h]-n[h])*t;let d=new Ke().fromArray(o,3).slerp(new Ke().fromArray(c,3),.75).slerp(new Ke().fromArray(l,3),.2);return new Ke().fromArray(n,3).slerp(d,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function km(i,e,t,n,r=null,s=null){if(n.opacity===0){let M=new cn({visible:!1,transparent:!0,opacity:0,depthWrite:!1});return M.userData.profile="hidden",M}let a=/eye01/.test(i),o=/eye01_shadow/.test(i),c=/face01_inst_2/.test(i),l=/face01/.test(i),u=/hair01/.test(i),d=/body00(?:_ma)?_inst|face01/.test(i),h=n.surface||"",p=h==="black-stocking",g=h==="white-stocking",v=p||g;if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let m={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?Pn:hn},f;if(a&&!o)f=new cn(m),f.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vEyeNormal;
varying vec3 vEyeViewDir;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vec3 eyeObjNormal=objectNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
vEyeNormal=normalize(normalMatrix*eyeObjNormal);
vEyeViewDir=normalize(-mvPosition.xyz);`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vEyeNormal;
varying vec3 vEyeViewDir;`).replace("#include <dithering_fragment>",`
     vec3 eN=normalize(vEyeNormal);
     vec3 eV=normalize(vEyeViewDir);
     vec3 eL1=normalize(vec3(-0.38,0.62,0.68));
     vec3 eL2=normalize(vec3(0.45,0.32,0.83));
     vec3 eH1=normalize(eL1+eV);
     vec3 eH2=normalize(eL2+eV);
     float wetGlint=pow(max(dot(eN,eH1),0.0),110.0)*0.65+pow(max(dot(eN,eH2),0.0),36.0)*0.16;
     float wetRim=pow(1.0-clamp(abs(dot(eN,eV)),0.0,1.0),4.2)*0.14;
     gl_FragColor.rgb+=vec3(1.0,0.98,0.96)*wetGlint+vec3(0.88,0.94,1.0)*wetRim;
     #include <dithering_fragment>
    `)},f.customProgramCacheKey=()=>"snowbreak-wet-eye-v1";else if(o)f=new cn(m);else{let M=l?.2:d?.28:v?.34:.58,_={...m,normalMap:t||null,normalScale:new ct(M,-M)};if(u?Object.assign(_,{roughness:.3,metalness:.05,clearcoat:.52,clearcoatRoughness:.22,sheen:.45,sheenRoughness:.4,sheenColor:new it(16777215),envMapIntensity:1.15}):l?Object.assign(_,{roughness:.48,metalness:0,clearcoat:.16,clearcoatRoughness:.38,sheen:.24,sheenRoughness:.52,sheenColor:new it(16770778),envMapIntensity:.48}):d?Object.assign(_,{roughness:.42,metalness:0,clearcoat:.28,clearcoatRoughness:.34,sheen:.32,sheenRoughness:.44,sheenColor:new it(16769748),envMapIntensity:.68}):p?Object.assign(_,{roughness:r?.9:.34,metalness:r?.3:.04,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.42,clearcoatRoughness:.24,sheen:.75,sheenRoughness:.34,sheenColor:new it(11058400),envMapIntensity:1.15}):g?Object.assign(_,{roughness:r?.9:.32,metalness:r?.18:.02,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.44,clearcoatRoughness:.24,sheen:.78,sheenRoughness:.32,sheenColor:new it(16185599),envMapIntensity:1.15}):r?Object.assign(_,{roughness:.92,metalness:.98,roughnessMap:r,metalnessMap:r,clearcoat:.55,clearcoatRoughnessMap:r,clearcoatRoughness:.52,envMapIntensity:1.55}):Object.assign(_,{roughness:.4,metalness:.12,clearcoat:.32,clearcoatRoughness:.32,envMapIntensity:1.05}),f=new mn(_),l||d){let x=!!(l&&s);f.onBeforeCompile=S=>{x&&(S.uniforms.uFaceShadowMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uFaceShadowMap;`)),S.fragmentShader=S.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${l?"0.72":"0.22"}));`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      {
       float dLuma=dot(reflectedLight.directDiffuse,vec3(0.299,0.587,0.114));
       float sssBand=smoothstep(0.02,0.40,dLuma)*(1.0-smoothstep(0.40,0.96,dLuma));
       // Official Snowbreak Ramp_skin warm peach-rose subsurface scatter along light-shadow terminator
       reflectedLight.directDiffuse+=diffuseColor.rgb*vec3(1.0,0.46,0.38)*sssBand*${l?"0.15":"0.26"};
       // Lift shadowed skin toward warm porcelain rose (never muddy cold grey)
       vec3 warmLift=mix(vec3(1.06,0.93,0.91),vec3(1.0),smoothstep(0.06,0.68,dLuma));
       reflectedLight.indirectDiffuse*=warmLift;
       // Delicate studio backlit skin contour rim (RimLightRange)
       float skinNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);
       float skinRim=pow(1.0-skinNdv,3.3)*smoothstep(-0.35,0.85,normal.y+0.35)*${l?"0.12":"0.24"};
       reflectedLight.indirectSpecular+=vec3(1.0,0.91,0.86)*skinRim;
       ${x?`
       #ifdef USE_MAP
        vec3 fSdf=texture2D(uFaceShadowMap,vMapUv).rgb;
        float jawSoft=mix(0.92,1.0,smoothstep(0.0,0.65,1.0-fSdf.b));
        reflectedLight.indirectDiffuse*=jawSoft;
       #endif`:""}
      }`)},f.customProgramCacheKey=()=>l?x?"sb-face-sss-sdf-v3":"sb-face-sss-v3":"sb-skin-sss-v3"}else if(u){let x=!!s;f.onBeforeCompile=S=>{x&&(S.uniforms.uHairHighlightMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uHairHighlightMap;`)),S.fragmentShader=S.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
     {
      vec3 hN=normalize(normal);
      vec3 hV=normalize(vViewPosition);
      float hNdv=clamp(abs(dot(hN,hV)),0.0,1.0);
      // View-responsive Angel-Ring crown band (matches matcap_hair01.png)
      float bandPos=hN.y-0.36+hN.x*0.08;
      float ringWave=sin(hN.x*26.0+hN.z*14.0)*0.032;
      float angelRing=exp(-pow((bandPos+ringWave)*7.2,2.0))*smoothstep(0.15,0.65,hN.z+0.35)*smoothstep(0.08,0.45,hNdv);
      float hairPaint=0.0;
      ${x?`
      #ifdef USE_MAP
       hairPaint=texture2D(uHairHighlightMap,vMapUv).r;
      #endif`:""}
      vec3 ringTint=mix(diffuseColor.rgb,vec3(1.0),0.62);
      float combinedSpec=angelRing*0.42+hairPaint*(0.38+angelRing*0.65);
      reflectedLight.directSpecular+=ringTint*combinedSpec*0.95;
      // Luminous anime hair rim backlight
      float hairRim=pow(1.0-hNdv,2.9)*smoothstep(-0.2,0.8,hN.y+0.4)*0.34;
      reflectedLight.indirectSpecular+=mix(diffuseColor.rgb,vec3(1.0,0.96,1.0),0.7)*hairRim;
     }`)},f.customProgramCacheKey=()=>x?"sb-hair-angelring-hl-v1":"sb-hair-angelring-v1"}else p?(f.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       // 5-stop Ramp_siwa_ui exact curve (linearized): velvety black edge -> charcoal navy -> warm skin peach center
       vec3 r0=vec3(0.002,0.003,0.006);
       vec3 r1=vec3(0.014,0.022,0.040);
       vec3 r2=vec3(0.240,0.185,0.168);
       vec3 r3=vec3(0.760,0.585,0.495);
       vec3 rampCol=ndv<0.45?mix(r0,r1,smoothstep(0.14,0.45,ndv)):(ndv<0.78?mix(r1,r2,smoothstep(0.45,0.78,ndv)):mix(r2,r3,smoothstep(0.78,1.0,ndv)));
       float baseLuma=dot(diffuseColor.rgb,vec3(0.299,0.587,0.114));
       // Preserve dark lace band texture while giving sheer nylon legs authentic deep 20D Ramp_siwa_ui skin-through depth
       vec3 sheerLeg=diffuseColor.rgb*0.18+rampCol*mix(0.16,0.34,smoothstep(0.03,0.28,baseLuma));
       diffuseColor.rgb=mix(diffuseColor.rgb*0.36,sheerLeg,smoothstep(0.02,0.16,baseLuma));
      }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       // Vertical silky nylon shin/thigh sheen strip + delicate rim luster
       float silkStrip=pow(max(0.0,1.0-abs(sN.x+0.14)),9.0)*smoothstep(0.18,0.85,ndv)*0.24;
       float silkRim=pow(1.0-ndv,3.2)*0.18;
       reflectedLight.directSpecular+=vec3(0.95,0.92,0.98)*silkStrip+vec3(0.75,0.82,0.96)*silkRim;
      }`)},f.customProgramCacheKey=()=>"sb-black-stocking-v2"):g?(f.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       vec3 coolEdge=vec3(0.36,0.50,0.76);
       vec3 warmMid=vec3(0.98,0.90,0.87);
       vec3 whitePeak=vec3(1.0,0.99,0.99);
       vec3 tint=ndv<0.55?mix(coolEdge,warmMid,smoothstep(0.05,0.55,ndv)):mix(warmMid,whitePeak,smoothstep(0.55,1.0,ndv));
       diffuseColor.rgb*=mix(vec3(1.0),tint,0.48);
      }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       float silkStrip=pow(max(0.0,1.0-abs(sN.x+0.12)),8.0)*smoothstep(0.2,0.9,ndv)*0.22;
       float silkRim=pow(1.0-ndv,3.0)*0.24;
       reflectedLight.directSpecular+=vec3(1.0,0.99,1.0)*(silkStrip+silkRim);
      }`)},f.customProgramCacheKey=()=>"sb-white-stocking-v2"):(f.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
     {
      vec3 eN=normalize(normal);
      vec3 eV=normalize(vViewPosition);
      float ndv=clamp(abs(dot(eN,eV)),0.0,1.0);
      float isGlossy=smoothstep(0.42,0.16,roughnessFactor)*(1.0-smoothstep(0.2,0.5,metalnessFactor));
      float isMetal=smoothstep(0.25,0.65,metalnessFactor);
      // Wet latex / patent leather crisp dual Fresnel gleam (Mia suit, Cherno shoes/straps)
      float latexRim=pow(1.0-ndv,3.4)*isGlossy*0.48;
      // Polished metal & jewelry HDR highlight glint (triggers soft optical bloom)
      vec3 mH=normalize(normalize(vec3(-0.42,0.62,0.66))+eV);
      float metalSpark=pow(max(dot(eN,mH),0.0),72.0)*isMetal*1.15;
      // Delicate anime contour rim separation on outfits (RimLightRange)
      float clothRim=pow(1.0-ndv,3.5)*smoothstep(-0.3,0.8,eN.y+0.35)*0.22;
      reflectedLight.directSpecular+=vec3(1.0,0.97,0.95)*(latexRim+metalSpark)+vec3(0.92,0.94,1.0)*clothRim;
     }`)},f.customProgramCacheKey=()=>r?"sb-equip-orm-v2":"sb-equip-v2")}return c?(f.polygonOffset=!0,f.polygonOffsetFactor=-1.5,f.polygonOffsetUnits=-1.5):n.transparent&&!o&&(f.polygonOffset=!0,f.polygonOffsetFactor=-.25,f.polygonOffsetUnits=-.25),f.userData.profile=a?"eye":l?"soft-face":u?"hair":d?"skin":"cloth-or-room",f}function zm(i,e){e.outputColorSpace=Ht,e.toneMapping=Xa,e.toneMappingExposure=1.06;let t=new ka(16774896,7242408,.94);i.add(t);let n=new Zi(16772569,2.25);n.position.set(-2.6,3.8,4.6),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-12e-5,n.shadow.normalBias=.006,n.shadow.radius=2.2,e.shadowMap.enabled=!0,e.shadowMap.type=Il;let r=new Zi(13689599,.84);r.position.set(3.6,1.8,3.8),i.add(r);let s=new Zi(16773375,1.55);s.position.set(1.2,3.4,-4.2),i.add(s);let a=new Vi;a.background=new it(.07,.08,.11);let o=new ci(1,1),c=[];for(let[m,f,M,_]of[[[-4.2,4,4.8],[3.8,7.2],16773858,7.5],[[5,2.2,3.4],[3.2,6.2],14084351,4.8],[[0,6.2,1.6],[6,1.8],16777215,5.8],[[-2.8,4.5,-4.6],[3.5,5.5],16770294,5.5],[[3.2,4.2,-4.4],[3.5,5.5],15003391,5.2],[[0,-3.5,2.5],[9,9],16771808,.45]]){let x=new cn({color:M,side:hn});x.color.multiplyScalar(_),c.push(x);let S=new Ft(o,x);S.position.fromArray(m),S.scale.set(f[0],f[1],1),S.lookAt(0,1,0),a.add(S)}let l=new js(e),u=l.fromScene(a,.025,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let d=2048;function h(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.06,warmth:.5,reflection:1,shadows:!0,shadowSize:2048,key:2.25,fill:.84,rim:1.55};function g(m){let f={...p,...m};if(![f.exposure,f.warmth,f.reflection].every(Number.isFinite)||typeof f.shadows!="boolean"||f.exposure<.65||f.exposure>1.45||f.warmth<0||f.warmth>1||f.reflection<0||f.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(f.shadowSize)||![f.key,f.fill,f.rim].every(M=>Number.isFinite(M)&&M>=0&&M<=3))throw new Error("Invalid light quality");return h(Math.min(f.shadowSize,d)),p={exposure:f.exposure,warmth:f.warmth,reflection:f.reflection,shadows:f.shadows,shadowSize:f.shadowSize,key:f.key,fill:f.fill,rim:f.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new it(16769214),p.warmth),i.environmentIntensity=p.reflection,{...p}}function v(m){let f=m.getCenter(new U),M=Math.max(1.5,m.getSize(new U).length()*.7);n.target.position.copy(f),n.position.copy(f).add(new U(-2.6,3.8,4.6).normalize().multiplyScalar(M*3)),Object.assign(n.shadow.camera,{left:-M,right:M,top:M,bottom:-M,near:.1,far:M*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:v,setBudget(m){let f=m.mode==="quality"||m.mode==="performance",M=m.mode==="battery"||m.mode==="powersave";d=f?2048:M||m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048;let _=f?2048:M?512:p.shadowSize;h(Math.min(_,d))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}var Xh=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,$b=`
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
`,jb=`
uniform sampler2D tDiffuse;
uniform vec2 uStep;
varying vec2 vUv;
void main(){
  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.22702703;
  sum += (texture2D(tDiffuse, vUv + uStep * 1.38461538).rgb + texture2D(tDiffuse, vUv - uStep * 1.38461538).rgb) * 0.31621622;
  sum += (texture2D(tDiffuse, vUv + uStep * 3.23076923).rgb + texture2D(tDiffuse, vUv - uStep * 3.23076923).rgb) * 0.07027027;
  gl_FragColor = vec4(sum, 1.0);
}
`,Jb=`
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
`;function Hm(i){let e=i.getContext(),t=i.capabilities.isWebGL2,n=t&&(!!e.getExtension("EXT_color_buffer_float")||!!e.getExtension("EXT_color_buffer_half_float")),r=n?Vn:gn,s=t?Math.min(4,i.capabilities.maxSamples||0):0,a=n,o=0,c=0,l=null,u=[],d=new Vi,h=new Ei(-1,1,1,-1,0,1),p=new ci(2,2),g=new un({vertexShader:Xh,fragmentShader:$b,uniforms:{tDiffuse:{value:null},uThreshold:{value:1.04},uKnee:{value:.36}},depthTest:!1,depthWrite:!1}),v=new un({vertexShader:Xh,fragmentShader:jb,uniforms:{tDiffuse:{value:null},uStep:{value:new ct(1,0)}},depthTest:!1,depthWrite:!1}),m=new un({vertexShader:Xh,fragmentShader:Jb,uniforms:{tScene:{value:null},tBloom1:{value:null},tBloom2:{value:null},tBloom3:{value:null},uTexelSize:{value:new ct(1/1e3,1/1e3)},uExposure:{value:1.06},uBloomStrength:{value:.24},uVibrance:{value:.08},uSharpness:{value:.85}},depthTest:!1,depthWrite:!1}),f=new Ft(p,m);d.add(f);function M(){l?.dispose(),l=null;for(let S of u)S.a.dispose(),S.b.dispose();u=[]}function _(S,b){if(a&&(S=Math.max(1,Math.round(S)),b=Math.max(1,Math.round(b)),!(l&&o===S&&c===b))){M(),o=S,c=b,l=new on(S,b,{type:r,format:xn,minFilter:Dt,magFilter:Dt,depthBuffer:!0,stencilBuffer:!1,samples:s});for(let w of[2,4,8]){let y=Math.max(1,Math.round(S/w)),T=Math.max(1,Math.round(b/w)),A={type:r,format:xn,minFilter:Dt,magFilter:Dt,depthBuffer:!1,stencilBuffer:!1};u.push({a:new on(y,T,A),b:new on(y,T,A),w:y,h:T})}}}function x(S,b){if(!a){i.render(S,b);return}let w=i.getDrawingBufferSize(new ct);_(w.x,w.y);let y=i.toneMapping,T=i.autoClear;i.toneMapping=zn,i.setRenderTarget(l),i.clear(!0,!0,!1),i.render(S,b),i.autoClear=!1,f.material=g,g.uniforms.tDiffuse.value=l.texture,i.setRenderTarget(u[0].a),i.clear(!0,!1,!1),i.render(d,h),f.material=v;for(let A=0;A<u.length;A++){let C=A===0?u[0].a.texture:u[A-1].a.texture;v.uniforms.tDiffuse.value=C,v.uniforms.uStep.value.set(1/u[A].w,0),i.setRenderTarget(u[A].b),i.render(d,h),v.uniforms.tDiffuse.value=u[A].b.texture,v.uniforms.uStep.value.set(0,1/u[A].h),i.setRenderTarget(u[A].a),i.render(d,h)}f.material=m,m.uniforms.tScene.value=l.texture,m.uniforms.tBloom1.value=u[0].a.texture,m.uniforms.tBloom2.value=u[1].a.texture,m.uniforms.tBloom3.value=u[2].a.texture,m.uniforms.uTexelSize.value.set(1/o,1/c),m.uniforms.uExposure.value=i.toneMappingExposure,i.setRenderTarget(null),i.clear(!0,!1,!1),i.render(d,h),i.toneMapping=y,i.autoClear=T}return{render:x,setEnabled(S){let b=n&&!!S;a!==b&&(a=b,a||M())},setBloom(S){Number.isFinite(S)&&(m.uniforms.uBloomStrength.value=Ee.clamp(S,0,.8))},snapshot:()=>({enabled:a,hasFloat:n,msaaSamples:a?s:0,bloomStrength:m.uniforms.uBloomStrength.value}),dispose(){M(),p.dispose(),g.dispose(),v.dispose(),m.dispose()}}}function qh(i,e,t,n,r=null){let s=[t,r].filter(Boolean);if(!s.length)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let a=A=>["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(A.schema)&&["Yuki","UniversalMMD","SnowbreakAR"].includes(A.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(A.targetCharacter)&&Array.isArray(A.clips)&&A.clips.length<=24;for(let A of s){if(!a(A))throw new Error("Invalid learned motion catalog");if(A.schema.endsWith("/3")&&A.targetCharacter!=="Universal"&&(A.stance!=="standing"||n!=="standing"))throw new Error("Standing motion requires standing source")}let o=n==="standing",c=A=>{let C=[];if(i.traverse(F=>{F.isBone&&F.name===A&&C.push(F)}),C.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+A);return C[0]},l=c("Bip001-Head"),u=i.getObjectByName("Bip001-Spine3")||i.getObjectByName("Bip001-Spine2")||c("Bip001-Spine"),d={};for(let[A,C]of[["left","L"],["right","R"]]){let F=c(`Bip001-${C}-UpperArm`),O=c(`Bip001-${C}-Forearm`),N=c(`Bip001-${C}-Hand`);if(O.parent!==F||N.parent!==O)throw new Error("Learned arm binding mismatch");d[A]={upper:F,lower:O,hand:N}}let h=A=>A.getWorldPosition(new U);i.updateWorldMatrix(!0,!0);let p=1,g=h(d.right.upper).sub(h(d.left.upper)).normalize(),v=h(l).sub(h(u)).normalize();new U().crossVectors(g,v).dot(e.position.clone().sub(h(u)))<0&&(p=-1);let m=new Map;for(let A of s){let C=A.schema.endsWith("/3")&&A.stance==="standing",F=A.targetCharacter==="Universal";for(let O of A.clips){if(!(["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(O.id)||/^(mmd|ar)_[a-zA-Z0-9_-]{1,48}$/.test(O.id))||m.has(O.id)||!Number.isInteger(O.frames)||O.frames<2||O.frames>1800||!Number.isFinite(O.fps)||O.fps<=0||O.fps>60)throw new Error("Invalid learned clip");let k={};for(let[B,Q]of Object.entries(O.channels||{})){let ce=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(B)?1:["headDelta","chestDelta",...C?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(B)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...C?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(B)||/^(left|right)Finger[0-4]_[0-2]$/.test(B)?3:0;if(!ce||typeof Q!="string")throw new Error("Invalid learned channel");let pe=Uint8Array.from(atob(Q),oe=>oe.charCodeAt(0));if(pe.byteLength!==O.frames*ce*4)throw new Error("Learned channel truncated");let q=new Float32Array(pe.buffer);if(!q.every(Number.isFinite))throw new Error("Non-finite learned pose");if(ce===1&&q.some(oe=>oe<-.31||oe>1.11))throw new Error("Invalid learned finger angle");for(let oe=0;ce>1&&oe<O.frames;oe++){let z=0;for(let $=0;$<ce;$++)z+=q[oe*ce+$]**2;if(Math.abs(z-1)>.01)throw new Error("Invalid learned direction/quaternion")}k[B]={values:q,width:ce}}if(!k.headDelta)throw new Error("Missing learned head reference");let L=O.id.startsWith("mmd_")||O.id.startsWith("ar_"),I=O.id.includes("dance")||L,G=I?C?"standing-dance":"seated-dance":O.id==="yuki_Peace_hand"?"peace":O.id==="yuki_hello"?"greeting":"head",D=I?["left","right"]:G==="head"?[]:["right"];if(!A.schema.endsWith("/1")&&(O.motionKind!==G||JSON.stringify(O.arms)!==JSON.stringify(D)))throw new Error("Invalid learned action capability");if(I&&!o&&!F)continue;let H=I?o&&C?"standing-dance":"seated-dance":G;if(H==="standing-dance"&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(B=>!k[B]))throw new Error("Missing standing body channels");m.set(O.id,{...O,kind:H,arms:D,channels:k,duration:(O.frames-1)/O.fps})}}let f=Object.fromEntries([["left","L"],["right","R"]].map(([A,C])=>[A,Array.from({length:5},(F,O)=>[c(`Bip001-${C}-Finger${O}`),c(`Bip001-${C}-Finger${O}1`),c(`Bip001-${C}-Finger${O}2`)])])),M=o?c("Bip001-Pelvis"):null,_=o?Object.fromEntries([["left","L"],["right","R"]].map(([A,C])=>[A,{thigh:c(`Bip001-${C}-Thigh`),calf:c(`Bip001-${C}-Calf`),foot:c(`Bip001-${C}-Foot`),toe:c(`Bip001-${C}-Toe0`)}])):{},x={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function S(){let A=h(d.right.upper).sub(h(d.left.upper)).normalize(),C=h(l).sub(h(u));C.addScaledVector(A,-C.dot(A)).normalize();let F=new U().crossVectors(A,C).multiplyScalar(p).normalize();return{right:A,up:C,front:F,vector:O=>A.clone().multiplyScalar(O[0]).addScaledVector(C,O[1]).addScaledVector(F,O[2])}}let b=new Map,w=null,y=-1;function T(A,C,F,O={}){let N=m.get(A);if(!N||F<=0)return;let k=N.kind==="standing-dance",L=k&&Number.isFinite(O.amplitude)?Ee.clamp(O.amplitude,.5,1.2):1;x.fingerWrites=0,x.armWrites=0,x.chestWrites=0,x.workspaceAdjusted=0,(A!==w||C<=y||C-y>.2)&&b.clear(),w=A,y=C,i.updateWorldMatrix(!0,!0);let I=S(),G=Ee.clamp(C*N.fps,0,N.frames-1),D=Math.floor(G),H=Math.min(D+1,N.frames-1),B=G-D;function Q(ge){let Re=N.channels[ge];if(!Re)return null;if(k&&Re.width===1)return[Ee.lerp(Re.values[D],Re.values[H],B)];if(k&&Re.width===3)return new U().fromArray(Re.values,D*3).lerp(new U().fromArray(Re.values,H*3),B).normalize().toArray();if(Re.width===1){let Ze=0;for(let Fe of[-2,-1,0,1,2]){let Se=Ee.clamp(G+Fe,0,N.frames-1),J=Math.floor(Se),he=Math.min(J+1,N.frames-1);Ze+=(Re.values[J]+(Re.values[he]-Re.values[J])*(Se-J))*(Fe===0?.4:Math.abs(Fe)===1?.2:.1)}return[Ze]}if(Re.width===4)return new Ke().fromArray(Re.values,D*4).slerp(new Ke().fromArray(Re.values,H*4),B).normalize().toArray();let Oe=new U;for(let Ze of[-2,-1,0,1,2]){let Fe=Ee.clamp(G+Ze,0,N.frames-1),Se=Math.floor(Fe),J=Math.min(Se+1,N.frames-1);Oe.add(new U().fromArray(Re.values,Se*3).lerp(new U().fromArray(Re.values,J*3),Fe-Se).multiplyScalar(Ze===0?.4:Math.abs(Ze)===1?.2:.1))}return Oe.normalize().toArray()}function ce(ge,Re,Oe,Ze,Fe=F){let Se=Re.angleTo(Oe),J=Ee.degToRad(Ze);Se>J&&x.limited++,ge.quaternion.copy(Re).slerp(Oe,Fe*Math.min(L,J/Math.max(Se,1e-8))).normalize()}function pe(ge,Re,Oe,Ze,Fe=F){ge.parent.updateWorldMatrix(!0,!1);let Se=ge.quaternion.clone(),J=Se.clone(),he=(Re?Re.position.clone():new U(1,0,0)).multiply(ge.scale).applyQuaternion(J).normalize(),se=Oe.clone().transformDirection(ge.parent.matrixWorld.clone().invert()),me=new Ke().setFromUnitVectors(he,se).multiply(J).normalize();b.set(ge,me.clone()),ce(ge,Se,me,Ze,Fe),ge.updateWorldMatrix(!1,!0)}function q(ge,Re,Oe,Ze){let Fe=new et().makeBasis(I.right,I.up,I.front),Se=new et().makeRotationFromQuaternion(new Ke(...Re)),J=Fe.clone().multiply(Se).multiply(Fe.clone().invert());ge.parent.updateWorldMatrix(!0,!1);let he=new et().extractRotation(ge.parent.matrixWorld),se=he.clone().invert().multiply(J).multiply(he),me=ge.quaternion.clone(),Me=new Ke().setFromRotationMatrix(se).multiply(me).normalize();ce(ge,me,Me,Oe,Ze),ge.updateWorldMatrix(!1,!0)}let oe=new U(0,1,0).transformDirection(i.parent.matrixWorld),z=k?Math.min(...Object.values(_).map(ge=>h(ge.foot).dot(oe))):0;x.legWrites=0,x.groundCorrection=0,x.sourceTime=C,x.sourceFrame=G,x.sourceFPS=N.fps,x.amplitude=L,x.sourceBPM=k?A.includes("90bpm")?90:A.includes("120bpm")?120:60:null,k&&(q(M,Q("pelvisDelta"),30,F),I=S());let $=Q("chestDelta");if($&&(q(u,$,k?35:10,F*(k?1:.35)),I=S(),x.chestWrites=1),k){for(let[Fe,Se]of Object.entries(_)){if(Se.calf.parent!==Se.thigh||Se.foot.parent!==Se.calf)throw new Error("Standing leg hierarchy mismatch");pe(Se.thigh,Se.calf,I.vector(Q(Fe+"Thigh")),110,F),pe(Se.calf,Se.foot,I.vector(Q(Fe+"Calf")),150,F),q(Se.foot,Q(Fe+"FootDelta"),45,F),x.legWrites+=3}let ge=Ee.clamp(z-Math.min(...Object.values(_).map(Fe=>h(Fe.foot).dot(oe))),-.18,.18),Re=h(M),Oe=M.parent.matrixWorld.clone().invert(),Ze=Re.clone().addScaledVector(oe,ge).applyMatrix4(Oe).sub(Re.clone().applyMatrix4(Oe));M.position.add(Ze),M.updateWorldMatrix(!1,!0),x.groundCorrection=ge}function ve(ge,Re,Oe,Ze){let Fe=h(ge.upper),Se=h(ge.lower).distanceTo(Fe),J=h(ge.hand).distanceTo(h(ge.lower)),he=Fe.clone().addScaledVector(I.vector(Re),Se),se=he.clone().addScaledVector(I.vector(Oe),J),me=h(u),Me=se.clone().sub(me),V=Me.dot(I.right),Je=Me.dot(I.up),Ge=Me.dot(I.front),P=[V,Je,Ge];Je=Ee.clamp(Je,-.16,.6);let E=(1-Ee.smoothstep(Math.abs(V),.16,.28))*Ee.smoothstep(Je,-.42,-.32)*(1-Ee.smoothstep(Je,.18,.32));Ge+=Math.max(0,.23-Ge)*E,se.copy(me).addScaledVector(I.right,V).addScaledVector(I.up,Je).addScaledVector(I.front,Ge);let W=se.clone().sub(h(l));W.length()<.14&&se.copy(h(l)).add(W.length()>.001?W.setLength(.14):I.front.clone().multiplyScalar(.14)),(P[1]!==Je||P[2]!==Ge)&&x.workspaceAdjusted++;let j=se.clone().sub(Fe),ie=Ee.clamp(j.length(),Math.abs(Se-J)+.015,(Se+J)*.98);j.normalize(),se.copy(Fe).addScaledVector(j,ie);let re=I.right.clone().multiplyScalar(Ze==="right"?1:-1),ue=re.clone().addScaledVector(I.front,.3).addScaledVector(I.up,.2);ue.addScaledVector(j,-ue.dot(j)),ue.length()<1e-4&&ue.copy(I.front).addScaledVector(j,-I.front.dot(j)),ue.normalize();let te=(Se*Se-J*J+ie*ie)/(2*ie),le=Math.sqrt(Math.max(0,Se*Se-te*te)),be=Fe.clone().addScaledVector(j,te).addScaledVector(ue,le);return{upper:be.clone().sub(Fe).normalize(),lower:se.sub(be).normalize()}}for(let ge of N.arms){let me=function(){let re=h(Oe[1][0]).sub(h(Oe[4][0])).normalize(),ue=h(Oe[2][0]).sub(h(Re.hand));return ue.addScaledVector(re,-ue.dot(re)).normalize(),new et().makeBasis(re,ue,new U().crossVectors(re,ue).normalize())},Re=d[ge],Oe=f[ge],Ze=Q(ge+"Upper"),Fe=Q(ge+"Lower");if(!Ze||!Fe)continue;let Se=["greeting","peace"].includes(N.kind)?F*Ee.smoothstep(Fe[1],-1,1):F*(k?1:.72),J=N.kind==="seated-dance"?ve(Re,Ze,Fe,ge):{upper:I.vector(Ze),lower:I.vector(Fe)};pe(Re.upper,Re.lower,J.upper,120,Se),pe(Re.lower,Re.hand,J.lower,170,Se),x.armWrites+=2;let he=Q(ge+"HandWidth"),se=Q(ge+"HandForward");if(!he||!se)continue;i.updateWorldMatrix(!0,!0);let Me=I.vector(he).normalize(),V=I.vector(se);V.addScaledVector(Me,-V.dot(Me)).normalize();let Je=new et().makeBasis(Me,V,new U().crossVectors(Me,V).normalize()),Ge=Je.multiply(me().invert()),P=Re.hand,E=new et().extractRotation(P.parent.matrixWorld),W=E.clone().invert().multiply(Ge).multiply(E),j=P.quaternion.clone(),ie=new Ke().setFromRotationMatrix(W).multiply(j).normalize();ce(P,j,ie,N.kind==="greeting"?110:N.kind==="seated-dance"?75:110,Se*(N.kind==="seated-dance"?.7:1)),P.updateWorldMatrix(!1,!0);for(let re=0;re<5;re++)for(let ue=0;ue<3;ue++){let te=Q(`${ge}Finger${re}_${ue}`);if(!te)continue;let le=new U(...te).normalize(),be=ue?new U(...Q(`${ge}Finger${re}_${ue-1}`)).normalize():new U(0,1,0),Pe=Ee.clamp(Math.atan2(-le.z,Math.max(.1,le.y))-Math.atan2(-be.z,Math.max(.1,be.y)),-.15,re===0?.45:1.1),Le=ue===0&&re!==0?Ee.clamp(Math.atan2(le.x,le.y),-.3,.3):0,Ne=Q(`${ge}Curl${re}_${ue}`),Qe=Q(`${ge}Spread${re}`);Ne&&(Pe=Ne[0]),ue===0&&re!==0&&Qe&&(Le=Qe[0]),N.kind==="peace"&&(Pe=re===1||re===2?.02:re===0?.4:.95,ue===0&&(Le=re===1?.14:re===2?-.08:0));let ot=ge==="left"?-1:1,lt=Oe[re][ue],Z=lt.quaternion.clone(),fe=new Ke().fromArray(lt.userData.bindLocalQuaternion||Z.toArray()).multiply(new Ke().setFromAxisAngle(new U(0,0,1),Le*ot)).multiply(new Ke().setFromAxisAngle(new U(0,1,0),Pe*ot));lt.quaternion.copy(Z).slerp(fe,F).normalize(),x.fingerWrites++}}let Ve=Q("headDelta");if(Ve){let ge=new et().makeBasis(I.right,I.up,I.front),Re=new et().makeRotationFromQuaternion(new Ke(...Ve)),Oe=ge.clone().multiply(Re).multiply(ge.clone().invert());l.parent.updateWorldMatrix(!0,!1);let Ze=new et().extractRotation(l.parent.matrixWorld),Fe=Ze.clone().invert().multiply(Oe).multiply(Ze),Se=l.quaternion.clone(),J=new Ke().setFromRotationMatrix(Fe).multiply(Se).normalize();ce(l,Se,J,40)}i.updateWorldMatrix(!0,!0);let ye=new Set;i.traverse(ge=>{ge.isSkinnedMesh&&!ye.has(ge.skeleton)&&(ge.skeleton.update(),ye.add(ge.skeleton))})}return{available:()=>[...m.values()].map(A=>({id:A.id,label:A.label,duration:A.duration,arms:[...A.arms],kind:A.kind})),apply:T,snapshot:()=>{i.updateWorldMatrix(!0,!0);let A=S(),C=d.right;return{...x,parentDeterminant:C.upper.parent.matrixWorld.determinant(),rightUpper:h(C.lower).sub(h(C.upper)).normalize().toArray(),rightLower:h(C.hand).sub(h(C.lower)).normalize().toArray(),handHeight:h(C.hand).sub(h(C.lower)).dot(A.up)}}}}function Yh(i,e){if(e===fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ys||e===Qa){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Ys)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Vm(i){let e=new Map,t=new Map,n=i.clone();return Gm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Gm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Gm(i.children[n],e.children[n],t)}var Hr=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Ac(t,yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ac(t,yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new fd(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ki.extractUrlBase(e);a=Ki.resolveURL(l,this.path)}else a=Ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new zs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Zm){try{a[yt.KHR_BINARY_GLTF]=new pd(e)}catch(d){r&&r(d);return}s=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case yt.KHR_MATERIALS_UNLIT:a[d]=new Jh;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[d]=new md(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[d]=new gd;break;case yt.KHR_MESH_QUANTIZATION:a[d]=new xd;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Qb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function $t(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jh=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new it(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],wn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Va(u),l.distance=d;break;case"spot":l=new Ha(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Jh=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let r=[];e.color=new it(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(s,s)}return Promise.all(r)}},td=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},id=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},rd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},sd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(s[0],s[1],s[2],wn),Promise.all(r)}},ad=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},od=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(s[0],s[1],s[2],wn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(r)}},ld=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},hd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},dd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ac=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}},fd=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,p=[];for(let g of d){let v=new et,m=new U,f=new Ke,M=new U(1,1,1),_=new Pa(g.geometry,g.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),_.setMatrixAt(S,v.compose(m,f,M));let x=null;for(let S in c)if(S==="_COLOR_0"){let b=c[S];_.instanceColor=new Gi(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(x===null){let w=_.geometry;x=new ln,x.name=w.name;for(let y in w.attributes)x.setAttribute(y,w.attributes[y]);for(let y in w.morphAttributes)x.morphAttributes[y]=w.morphAttributes[y];w.index!==null&&x.setIndex(w.index),x.morphTargetsRelative=w.morphTargetsRelative;for(let y of w.groups)x.addGroup(y.start,y.count,y.materialIndex);w.boundingBox!==null&&(x.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(x.boundingSphere=w.boundingSphere.clone()),x.drawRange.start=w.drawRange.start,x.drawRange.count=w.drawRange.count,x.userData=Object.assign({},w.userData),_.geometry=x}let b=c[S];x.setAttribute(S,new Gi(b.array,b.itemSize,b.normalized))}Ot.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Zm="glTF",io=12,Wm={JSON:1313821514,BIN:5130562},pd=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-io,s=new DataView(e,io),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Wm.JSON){let l=new Uint8Array(e,io+a,o);this.content=n.decode(l)}else if(c===Wm.BIN){let l=io+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let d=_d[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=_d[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],p=Qs[h.componentType];l[d]=p.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}d(p)},o,l,wn,h)})})}},gd=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},xd=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Rc=class extends bi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,d=(n-t)/u,h=d*d,p=h*d,g=e*l,v=g-l,m=-2*p+3*h,f=p-h,M=1-m,_=f-h+d;for(let x=0;x!==o;x++){let S=a[v+x+o],b=a[v+x+c]*u,w=a[g+x+o],y=a[g+x]*u;s[x]=M*S+_*b+m*w+f*y}return s}},eM=new Ke,yd=class extends Rc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return eM.fromArray(s).normalize().toArray(s),s}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xm={9728:Zt,9729:Dt,9984:Nl,9985:Ws,9986:Fr,9987:ui},qm={33071:Qn,33648:ws,10497:kn},Zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Ar},Kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),i.DefaultMaterial}function zr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(r){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(s){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function rM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(i){let e,t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oM=new et,bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new wi(this.options.manager):this.textureLoader=new Ga(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return zr(s,o,r),Ci(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Ki.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Zh[r.type],o=Qs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Gt(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Zh[r.type],l=Qs[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,v,m;if(p&&p!==d){let f=Math.floor(h/p),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,_=t.cache.get(M);_||(v=new l(o,f*p,r.count*p/u),_=new Ps(v,p/u),t.cache.add(M,_)),m=new Ls(_,c,h%p/u,g)}else o===null?v=new l(r.count*c):v=new l(o,h,r.count*c),m=new Gt(v,c,g);if(r.sparse!==void 0){let f=Zh.SCALAR,M=Qs[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new M(a[1],_,r.sparse.count*f),b=new l(a[2],x,r.sparse.count*c);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=S.length;w<y;w++){let T=S[w];if(m.setX(T,b[w*c]),c>=2&&m.setY(T,b[w*c+1]),c>=3&&m.setZ(T,b[w*c+2]),c>=4&&m.setW(T,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Xm[h.magFilter]||Dt,u.minFilter=Xm[h.minFilter]||ui,u.wrapS=qm[h.wrapS]||kn,u.wrapT=qm[h.wrapT]||kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==Dt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){let m=new an(v);m.needsUpdate=!0,h(m)}),t.load(Ki.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Ci(d,a),d.userData.mimeType=a.mimeType||aM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Os,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Fs,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Pr}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[yt.KHR_MATERIALS_UNLIT]){let d=r[yt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],wn),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ht)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=hn);let u=s.alphaMode||Kh.OPAQUE;if(u===Kh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Kh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==cn){let d=s.emissiveFactor;o.emissive=new it().setRGB(d[0],d[1],d[2],wn)}return s.emissiveTexture!==void 0&&a!==cn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(l).then(function(){let d=new a(o);return s.name&&(d.name=s.name),Ci(d,s),t.associations.set(d,{materials:e}),s.extensions&&zr(r,d,s),d})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ym(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=sM(l),d=r[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Ym(new ln,l,t),l.mode===ei.TRIANGLE_STRIP?h=h.then(p=>Yh(p,Qa)):l.mode===ei.TRIANGLE_FAN&&(h=h.then(p=>Yh(p,Ys))),r[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?nM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],f,M=l[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0){let _=s.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");_&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=_&&x?new Ca(v,M):new Ft(v,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===ei.LINES)f=new La(v,M);else if(m.mode===ei.LINE_STRIP)f=new Ir(v,M);else if(m.mode===ei.LINE_LOOP)f=new Na(v,M);else if(m.mode===ei.POINTS)f=new Ua(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&rM(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Ci(f,s),m.extensions&&zr(r,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&zr(r,d[0],s),d[0];let h=new Yt;s.extensions&&zr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Ee.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ei(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let d=a[l];if(d){o.push(d);let h=new et;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ia(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){let p=r.channels[d],g=r.samplers[p.sampler],v=p.target,m=v.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let h=d[0],p=d[1],g=d[2],v=d[3],m=d[4],f=[];for(let _=0,x=h.length;_<x;_++){let S=h[_],b=p[_],w=g[_],y=v[_],T=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let A=n._createAnimationTracks(S,b,w,y,T);if(A)for(let C=0;C<A.length;C++)f.push(A[C])}let M=new ks(s,void 0,f);return Ci(M,r),M})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,oM)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);if(u.userData.pivot!==void 0&&d.length>0){let p=u.userData.pivot,g=d[0];u.pivot=new U().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Ns:l.length>1?u=new Yt:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=a),Ci(u,s),s.extensions&&zr(n,u,s),s.matrix!==void 0){let d=new et;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Yt;n.name&&(s.name=r.createUniqueName(n.name)),Ci(s,n),n.extensions&&zr(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){let h=c[u];h.parent!==null?s.add(Vm(h)):s.add(h)}let l=u=>{let d=new Map;for(let[h,p]of r.associations)(h instanceof En||h instanceof an)&&d.set(h,p);return u.traverse(h=>{let p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}mr[s.path]===mr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(mr[s.path]){case mr.weights:u=Xi;break;case mr.rotation:u=Mi;break;case mr.translation:case mr.scale:u=Yi;break;default:n.itemSize===1?u=Xi:u=Yi;break}let d=r.interpolation!==void 0?tM[r.interpolation]:Rr,h=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let v=new u(c[p]+"."+mr[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vd(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Mi?yd:Rc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lM(i,e,t){let n=e.attributes,r=new Kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){let u=vd(Qs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new U,c=new U;for(let l=0,u=s.length;l<u;l++){let d=s[l];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let v=vd(Qs[h.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Cn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Ym(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=_d[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return xt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Ci(i,e),lM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?iM(i,e.targets,t):i})}function Km({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,d=-l*r*o-c*s*a,h=l*s*a-c*r*o,p=l*s*o+c*r*a;return[-u,-h,-d,p]}function $m(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((h,p)=>[h.name,new U().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new U().crossVectors(c,o).normalize(),u=new U;for(let h of["L","R"]){let p=e.get("Bip001-"+h+"-Foot"),g=e.get("Bip001-"+h+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(l)<0&&l.negate();let d=i.geometry.getAttribute("position");return(h,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let v=new U;for(let S=0;S<3;S++)v.addScaledVector(new U().fromBufferAttribute(d,h[S]),p.getComponent(S));let m=v.sub(t),f=Math.abs(m.dot(c))/a,M=m.dot(o)/a,_=m.dot(l)/a;if(f>.72)return null;let x=null;return M>-.38&&M<-.04&&f<.23&&_>.025?x="pelvis_front":M>-.35&&M<.18&&_<-.025?x="hips":M>.43&&M<1.02&&_>.025&&f<.67?x="chest":M>.1&&M<=.43&&_>.025?x=f>.48?"waist":"abdomen":M>.16&&M<1.02&&_<-.025&&(x="back"),x?{id:x,confidence:.85,source:"bind-pose-surface",coordinates:[f,M,_]}:null}}function cM(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function jm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=cM(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Jm(i,e,t,n=null){let r=new Nr,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function d(g,v){if(!["torso","leg"].includes(g?.id))return g;let m=H=>i.getObjectByName(H),f=H=>m(H)?.getWorldPosition(new U),M=f("Bip001-Pelvis"),_=f("Bip001-Neck"),x=f("Bip001-L-UpperArm"),S=f("Bip001-R-UpperArm"),b=f("Bip001-Head"),w=f("EyeJoint_L"),y=f("EyeJoint_R");if(!M||!_||!x||!S||!b||!w||!y)return g;let T=_.distanceTo(M);if(T<1e-5)return g;let A=_.clone().sub(M).normalize(),C=S.clone().sub(x).normalize(),F=new U().crossVectors(C,A).normalize(),N=w.add(y).multiplyScalar(.5).sub(b).dot(F);if(Math.abs(N)<T*.002)return g;N<0&&F.negate();let k=v.clone().sub(M),L=k.dot(A)/T,I=k.dot(F)/T;if(Math.abs(k.dot(C))/T>.7)return g;let D=null;return L>-.4&&L<.16&&I<-.025?D="hips":g.id==="torso"&&(L>.45&&L<.95&&I>.06?D="chest":L>.05&&L<.46&&I>.06?D="abdomen":L>.16&&L<.95&&I<-.06&&(D="back")),D?{id:D,confidence:.75,source:"rig-surface-estimate"}:g}function h(g){for(let v=g;v;v=v.parent)if(!v.visible)return!1;return!0}function p(g,v){if(!g||!v)return 1;try{let m=g.image,f=m.width,M=m.height;if(!f||!M||!u)return null;let _=v.clone();g.transformUv(_);let x=Math.min(f-1,Math.max(0,Math.floor(_.x*f))),S=Math.min(M-1,Math.max(0,Math.floor(_.y*M))),b=Math.floor(x/32)*32,w=Math.floor(S/32)*32;s.has(g)||s.set(g,++c);let y=s.get(g)+":"+b+":"+w,T=a.get(y);if(T)a.delete(y),a.set(y,T);else{u.clearRect(0,0,32,32),u.drawImage(m,b,w,Math.min(32,f-b),Math.min(32,M-w),0,0,Math.min(32,f-b),Math.min(32,M-w));let A=u.getImageData(0,0,32,32).data;T=new Uint8Array(1024);for(let C=0;C<1024;C++)T[C]=A[C*4+3];a.set(y,T),a.size>128&&a.delete(a.keys().next().value)}return T[(S-w)*32+x-b]/255}catch{return null}}return(g,v)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(v)||!m.width||!m.height||g<m.left||g>m.right||v<m.top||v>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let f=[];i.traverse(_=>{_.isMesh&&h(_)&&(_.isSkinnedMesh&&(_.skeleton.update(),_.computeBoundingSphere(),_.computeBoundingBox()),f.push(_))});let M=new Set;n?.traverse(_=>{_.isMesh&&h(_)&&(f.push(_),M.add(_))}),r.setFromCamera(new ct((g-m.left)/m.width*2-1,-(v-m.top)/m.height*2+1),e);for(let _ of r.intersectObjects(f,!1)){let x=_.object,S=x.material,b=p(x.userData.previewMap,_.uv),w=S.alphaTest||(S.transparent?.1:0);if(S.clippingPlanes?.some(I=>I.distanceToPoint(_.point)<0)||b!==null&&b<w)continue;if(M.has(x))return null;let y=[_.face.a,_.face.b,_.face.c],T=y.map(I=>x.getVertexPosition(I,new U)),A=x.worldToLocal(_.point.clone()),C=xi.getBarycoord(A,...T,new U),F=[],O=x.geometry.getAttribute("skinIndex"),N=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&O&&N&&C)for(let I=0;I<3;I++)for(let G=0;G<4;G++)F.push({name:x.skeleton.bones[O.getComponent(y[I],G)]?.name,weight:N.getComponent(y[I],G)*C.getComponent(I)});o.has(x)||o.set(x,$m(x));let k=jm(F),L=o.get(x)(y,C,k)||d(k,_.point);return{skinBones:F.filter(I=>I.weight>.05).map(I=>I.name),mesh:x.userData.snowbreakSurfaceKey,triangle:_.faceIndex,barycentric:C?.toArray(),anatomy:L,uv:_.uv?.toArray()||null,point:_.point.toArray(),distance:_.distance,alphaVerified:b!==null,material:x.userData.snowbreakMaterialName}}return null}}var $i={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function ro(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Vr(i,e){let t=ro(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn($i,i.anatomy.id))return{...i.anatomy,label:$i[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn($i,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:$i[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:$i[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var Md={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function Qm(i,e,t){let n=new Yt;n.visible=!1,e.add(n);let r=new Map;i.traverse(f=>{f.isMesh&&f.userData.snowbreakSurfaceKey&&r.set(f.userData.snowbreakSurfaceKey,f)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function d(){for(let f of c)f.overlay.geometry.dispose(),f.overlay.material.dispose(),f.overlay.removeFromParent();c=[],l=0}function h(){d(),u=!1;let f=new Map;for(let[M,_]of Object.entries(s)){let x=/^(surface_\d+):(\d+)$/.exec(M);if(!x)continue;let S=r.get(x[1]),b=Number(x[2]);if(!S)continue;let w=S.geometry,y=w.getAttribute("position"),T=w.index,A=w.getAttribute("uv"),C=Vr({mesh:x[1],triangle:b,alphaVerified:!0},{[M]:_});if(!C||b*3+2>=(T?T.count:y.count)||S.userData.previewMap&&!A)continue;if(l>=5e3){u=!0;continue}l++;let F=x[1]+":"+C.id,O=f.get(F);O||(O={source:S,region:C.id,vertices:[],keys:[]},f.set(F,O)),O.keys.push(M);for(let N=0;N<3;N++)O.vertices.push(T?T.getX(b*3+N):b*3+N)}for(let M of f.values()){let _=new ln;_.setAttribute("position",new Gt(new Float32Array(M.vertices.length*3),3).setUsage(mh));let x=M.source.geometry.getAttribute("uv");if(x){let y=new Float32Array(M.vertices.length*2);M.vertices.forEach((T,A)=>{y[A*2]=x.getX(T),y[A*2+1]=x.getY(T)}),_.setAttribute("uv",new Gt(y,2))}let S=M.source.material,b=new cn({color:Md[M.region],map:M.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),w=new Ft(_,b);w.frustumCulled=!1,w.renderOrder=100,n.add(w),c.push({...M,overlay:w})}o=!1}function p(f){for(let M=f;M;M=M.parent)if(!M.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&h(),i.updateWorldMatrix(!0,!0);let f=new U,M=new Map;for(let _ of c){let{source:x,overlay:S}=_;if(S.visible=p(x),!S.visible)continue;x.updateMatrixWorld(!0),x.isSkinnedMesh&&x.skeleton.update();let b=M.get(x);b||(b=new Map,M.set(x,b));let w=S.geometry.getAttribute("position");_.vertices.forEach((y,T)=>{let A=b.get(y);A||(x.getVertexPosition(y,f).applyMatrix4(x.matrixWorld),A=f.toArray(),b.set(y,A)),w.setXYZ(T,...A)}),w.needsUpdate=!0}}function v(){let f=c.find(_=>_.overlay.visible),M=f?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:f&&M?{key:f.keys[0],vertices:[0,1,2].map(_=>new U().fromBufferAttribute(M,_).toArray()),screen:[0,1,2].map(_=>new U().fromBufferAttribute(M,_).project(t).toArray())}:null}}function m(f){let M=n.visible;n.visible=!1;try{return f()}finally{n.visible=M}}return{set(f,M=a){return s=f,a=!!M,o=!0,a||d(),g(),v()},update:g,snapshot:v,hideForCapture:m,dispose(){d(),n.removeFromParent()}}}function Cc(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new et().compose(new U(...i.position),new Ke(...i.quaternion).normalize(),new U(...i.scale))}async function eg(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=Cc(n.characterWorld).invert(),s=new Yt,a=new Yt,o=new Set,c=[],l=[],u=[],d=new Map,h=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let b of n.anchors){if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(b.id)||d.has(b.id)||!Number.isFinite(b.viewYawDegrees)||Math.abs(b.viewYawDegrees)>180)throw new Error("Invalid scene anchor");d.set(b.id,{inverse:Cc(b.characterWorld).invert(),viewYawDegrees:b.viewYawDegrees})}if(!d.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Bn,g=!0;for(let b of n.objects){let w=i.getAsset(b.assetRole);if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(b.id)||o.has(b.id)||w?.kind!=="geometry")throw new Error("Invalid scene object");if(b.group!==void 0&&!["room","furniture"].includes(b.group)||b.cutaway!==void 0&&typeof b.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(b.id);let y=r.clone().multiply(Cc(b.world)),T=(await new Hr().parseAsync(w.bytes.slice().buffer,"")).scene,A=0;T.traverse(F=>{if(F.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");F.isMesh&&(A+=(F.geometry.index?.count||F.geometry.attributes.position.count)/3)});let C=new Yt;C.name=b.id,C.matrixAutoUpdate=!1,C.matrix.copy(y),C.add(T),(b.group==="room"?a:s).add(C),t(T),T.traverse(F=>{F.isMesh&&(b.group==="room"&&(F.material.side=Pn),b.cutaway&&(F.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&b.group==="furniture"&&(F.material.side=hn),l.push(F.material)),(b.group==="room"||b.cutaway)&&(F.material.needsUpdate=!0))}),b.group!=="room"&&T.traverse(F=>{F.isMesh&&u.push(F)}),c.push({id:b.id,assetRole:b.assetRole,group:b.group||"furniture",cutaway:!!b.cutaway,triangles:A,matrix:y.toArray(),holder:C,world:Cc(b.world)})}e.add(s),s.updateMatrixWorld(!0);function v(b,w){if(!l.length)return;let y=b.position.clone().sub(w),T=y.length();if(T<.001)return;y.divideScalar(T);let A=w.clone().addScaledVector(y,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,T*.5));p.setFromNormalAndCoplanarPoint(y.negate(),A)}function m(b){let w=!!b;if(w!==g){g=w;for(let y of l)y.clippingPlanes=g?[p]:null,y.needsUpdate=!0}}let f=new Map,M=new Nr,_=new U(0,1,0);function x(b){if(!d.size)return null;let w=d.get(b);if(!w)throw new Error("Unknown source scene anchor");if(h!==b){h=b;for(let y of c)y.holder.matrix.copy(w.inverse).multiply(y.world),y.matrix=y.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),f.clear()}return w.viewYawDegrees}d.size&&x(n.defaultAnchorId);function S(b){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let w=s.worldToLocal(b.clone()),y=Math.round(w.x/.015)+":"+Math.round(w.z/.015),T=f.get(y);if(T===void 0){let A=new Kt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),C=s.localToWorld(new U(w.x,A.max.y+.3,w.z)),F=_.clone().transformDirection(s.matrixWorld).negate();M.set(C,F),T=null;for(let O of M.intersectObjects(u,!1)){let N=O.face?.normal.clone().transformDirection(O.object.matrixWorld);if(N&&Math.abs(N.dot(F))>.65){T=s.worldToLocal(O.point.clone()).y;break}}f.set(y,T),f.size>512&&f.delete(f.keys().next().value)}return T===null?null:{clearance:w.y-T,normal:_.clone().transformDirection(s.matrixWorld),height:T}}return{root:s,contactSurface:S,setAnchor:x,hasCutaway:l.length>0,updateView:v,setRoomVisible:b=>{a.visible=!!b},setCutaway:m,setVisible:b=>{s.visible=!!b},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:h,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:c.map(({holder:b,world:w,...y})=>({...y,matrix:[...y.matrix]})),originalSceneVerified:!1})}}var uM=new Set(["head","left_hand","right_hand"]),hM=new Set(["tap","double_tap","long_press","stroke"]);function tg(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!uM.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!hM.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function ng(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function dM(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function ig(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let h of i.clips){let p=e.getAsset(h.animationRole),g=e.current.resources.find(f=>f.role===h.animationRole);if(p?.kind!=="animation"||h.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(h.sourceSha256)||h.frames!==p.data.frames||h.fps!==p.data.fps||!Array.isArray(h.curves)||h.curves.length>64)throw new Error("Morph curve animation mismatch");let v=n.get(h.sourceSha256);if(v){if(v.frames!==h.frames||v.fps!==h.fps||JSON.stringify(v.curves)!==JSON.stringify(h.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,h.sourceSha256);continue}let m=new Set;for(let f of h.curves){if(typeof f.name!="string"||!f.name.length||f.name.length>128||m.has(f.name)||!Array.isArray(f.keys)||!f.keys.length||f.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(f.name),s.add(f.name);let M=-1/0;for(let _ of f.keys){if(!Array.isArray(_)||_.length!==5||!_.every(Number.isFinite)||_[0]<-120||_[0]>120||_[0]<=M||Math.abs(_[1])>4||Math.abs(_[2])>1e6||Math.abs(_[3])>1e6||![0,1,2].includes(_[4]))throw new Error("Invalid morph curve key");if(M=_[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(h.sourceSha256,h),r.set(p.data,h.sourceSha256)}let o=[];if(t.traverse(h=>{if(!h.isMesh||!h.morphTargetDictionary||!h.morphTargetInfluences)return;let p=new Map;for(let g of s){let v=h.morphTargetDictionary[g];if(v!==void 0){if(!Number.isInteger(v)||v<0||v>=h.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,v)}}p.size&&o.push({mesh:h,indices:p})}),[...s].some(h=>!o.some(p=>p.indices.has(h))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function d(h,p){l=p,c=h&&r.get(h)||null,u={};let g=n.get(c);for(let v of g?.curves||[])u[v.name]=dM(v.keys,p);for(let{mesh:v,indices:m}of o)for(let[f,M]of m)v.morphTargetInfluences[M]=u[f]??0}return{apply:d,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:h,indices:p})=>Object.fromEntries([...p].map(([g,v])=>[g,h.morphTargetInfluences[v]]))),originalExpressionFidelity:!1})}}function Sd(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(c=>!c.targets?.length)){let{targetNames:c,...l}=r;n.extras=l;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function rg(i,e,{isCurrent:t=()=>!0,universalMotions:n=null,performanceMode:r=null}={}){let s=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};s();let a=e.getAsset("viewOrientation")?.data;if(a&&(a.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(a.yawDegrees)||Math.abs(a.yawDegrees)>180))throw new Error("Invalid view orientation");let o=-Math.PI/2+Ee.degToRad(a?.yawDegrees||0),c=new Sc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),l=new Vi,u=new Yt,d=new Yt,h=new Qt(32,1,.15,100);u.rotation.y=o,l.add(u),u.add(d);let p=zm(l,c),g=Hm(c),v=Lf();v.configure({mode:r||localStorage.getItem("snowRenderMode")||"adaptive"}),g.setEnabled(v.snapshot().mode!=="battery");let m=0;function f(xe){v.configure(xe);let K=v.snapshot();return p.setBudget(K),g.setEnabled(K.mode!=="battery"),m=0,Ae(),_()}function M(){k||c.renderLists?.dispose?.()}function _(){return{...v.snapshot(),postFx:g.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:c.getPixelRatio(),drawCalls:c.info.render.calls,triangles:c.info.render.triangles,gpuResources:{textures:c.info.memory.textures,geometries:c.info.memory.geometries},gpuTimingAvailable:!1}}let x=null,S,b,w,y,T,A,C=null,F=null,O=null,N=null,k=!1,L=null,I=0,G=[],D=new Set,H=new Set,B=new Set,Q=new Map,ce=new Map,pe=new Map,q=new Map,oe=new Map,z=new Set,$=new Map,ve=e.getAsset("rootMotionPolicy")?.data,Ve=0,ye=0,ge=0,Re=0,Oe=null,Ze=null,Fe=!1,Se=!0,J=null,he=null,se=null,me=1.06,Me=.5,V=0,Je="normal",Ge=0,P=0,E=[],W=new ci(8,8);W.rotateX(-Math.PI/2);let j=new Oa({opacity:.34,depthWrite:!1}),ie=new Ft(W,j);ie.receiveShadow=!0,ie.visible=!1,ie.renderOrder=-1,u.add(ie),D.add(W),H.add(j);let re={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},ue=0,te=0,le=null;function be(){Fe?(u.rotation.set(0,o+ue,0),d.rotation.set(0,Ee.degToRad(te),0)):(u.rotation.set(Ee.degToRad(re.pitch),o+ue+Ee.degToRad(re.yaw),Ee.degToRad(re.roll)),d.rotation.set(Ee.degToRad(Pe.pitch),Ee.degToRad(Pe.yaw+te),Ee.degToRad(Pe.roll))),u.updateMatrixWorld(!0)}let Pe={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function Le(xe){let K={...Pe,...xe};if(Object.values(K).some(We=>!Number.isFinite(We)))throw new Error("Invalid character placement");for(let We of["x","y","depth"])K[We]=Ee.clamp(K[We],-1.5,1.5);K.scale=Ee.clamp(K.scale,.3,4),K.yaw=Ee.clamp(K.yaw,-180,180),K.pitch=Ee.clamp(K.pitch,-65,65),K.roll=Ee.clamp(K.roll,-45,45),K.stretchX=K.stretchY=1,Pe=K,u.updateWorldMatrix(!0,!1),h.updateMatrixWorld();let we=new U(K.x,K.y,K.depth).applyQuaternion(h.quaternion),_e=u.matrixWorld.clone().invert();return d.position.copy(we.transformDirection(_e).multiplyScalar(Math.hypot(K.x,K.y,K.depth))),d.scale.setScalar(K.scale),be(),{...Pe}}function Ne(xe){let K={...re,...xe};for(let we of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(K[we]))throw new Error("Invalid framing");return re={scale:Ee.clamp(K.scale,.3,4),x:Ee.clamp(K.x,-1.5,1.5),y:Ee.clamp(K.y,-1.5,1.5),yaw:((K.yaw+180)%360+360)%360-180,pitch:Ee.clamp(K.pitch,-65,65),roll:Ee.clamp(K.roll,-45,45),stretchX:Ee.clamp(K.stretchX,.65,1.5),stretchY:Ee.clamp(K.stretchY,.65,1.5)},be(),Ae(),{...re}}function Qe(){if(w){u.rotation.y=o,u.updateMatrixWorld(!0);let we=w.getObjectByName("Bip001-L-UpperArm"),_e=w.getObjectByName("Bip001-R-UpperArm");if(we&&_e){let We=we.getWorldPosition(new U).sub(_e.getWorldPosition(new U)),at=new U().crossVectors(We,new U(0,1,0));if(Math.hypot(at.x,at.z)>.02){ue=-Math.atan2(at.x,at.z),be();return}}}if(!le)return;u.rotation.y=o,u.updateMatrixWorld(!0);let xe=le.bone.getWorldQuaternion(new Ke),K=le.axis.clone().applyQuaternion(xe);Math.hypot(K.x,K.z)>.1&&(ue=le.heading-Math.atan2(K.x,K.z)),be()}function ot(){return re.yaw=0,Qe(),Ae(),{...re}}function lt(xe){xe.traverse(K=>{if(K.isBone&&(K.userData.bindLocalQuaternion=K.quaternion.toArray()),!K.isMesh)return;D.add(K.geometry);for(let at of Array.isArray(K.material)?K.material:[K.material]){H.add(at);for(let Tt of Object.values(at))Tt?.isTexture&&B.add(Tt)}let we=K.material.name,_e=Q.get(we)||null,We=oe.get(we)||{};if(K.userData.snowbreakSurfaceKey="surface_"+ye++,K.userData.snowbreakMaterialName=we,K.userData.previewMap=_e,We.transparent!==void 0&&typeof We.transparent!="boolean")throw new Error("Invalid transparent override");if(We.renderOrder!==void 0&&(!Number.isInteger(We.renderOrder)||Math.abs(We.renderOrder)>100))throw new Error("Invalid material sorting");K.renderOrder=We.renderOrder||0,K.material=km(we,_e,ce.get(we),We,pe.get(we)||null,q.get(we)||null),H.add(K.material),K.castShadow=K.isSkinnedMesh&&!We.transparent,K.receiveShadow=K.material.userData.profile==="cloth-or-room"})}function Z(xe,K){if(!K)return;let we=new Map(K.tracks.map(_e=>[_e.bone,_e]));xe.traverse(_e=>{if(!_e.isBone)return;let We=we.get(_e.name)?.keys?.[0];if(!We||We.length!==10||!We.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");_e.position.fromArray(We),_e.quaternion.fromArray(We,3),_e.scale.fromArray(We,7)})}function Ie(xe,K,we=G,_e=!1){if(!K)return;let We=new Map(K.tracks.map(at=>[at.bone,at]));if(We.size!==K.tracks.length)throw new Error("Duplicate animation bones");xe.traverse(at=>{if(!at.isBone||xe===w&&!z.has(at)||_e&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(at.name))return;let Tt=We.get(at.name);if(!(_e&&!Tt)){if(!Tt||Tt.keys.length!==K.frames||Tt.keys.some(Vt=>Vt.length!==10||!Vt.every(Number.isFinite)||Math.abs(Vt.slice(3,7).reduce((gr,Ji)=>gr+Ji*Ji,0)-1)>.05))throw new Error("Invalid bone animation");we.push({bone:at,track:Tt,clip:K})}})}function fe(){if(!k){k=!0,removeEventListener("resize",Ae),c.setAnimationLoop(null),A?.dispose(),S?.dispose(),b?.dispose(),g.dispose(),p.dispose();for(let xe of D)xe.dispose();for(let xe of H)xe.dispose();for(let xe of B){xe.dispose();let K=xe.image;K?.close?K.close():K?.tagName==="CANVAS"?K.width=K.height=0:K?.tagName==="IMG"&&(K.src=""),xe.image=null}Q.clear(),ce.clear(),pe.clear(),q.clear(),oe.clear(),B.clear(),H.clear(),D.clear(),G.length=0,w?.removeFromParent(),T?.root?.removeFromParent(),c.renderLists?.dispose?.(),c.dispose()}}function Ae(){if(k||!w)return;Re++;let xe=i.clientWidth||innerWidth,K=i.clientHeight||innerHeight,we=v.ratio(xe,K,devicePixelRatio||1);(!Oe||Oe.w!==xe||Oe.h!==K||Oe.ratio!==we)&&(c.setPixelRatio(we),c.setSize(xe,K,!1),Oe={w:xe,h:K,ratio:we},ge++),u.updateMatrixWorld(!0),!C&&!Ze&&(w.traverse(qn=>{qn.isSkinnedMesh&&(qn.skeleton.update(),qn.computeBoundingBox())}),Ze=new Kt().setFromObject(w).applyMatrix4(u.matrixWorld.clone().invert()));let _e=(F||C||Ze).clone().applyMatrix4(u.matrixWorld),We=_e.getSize(new U),at=_e.getCenter(new U);if(p.frame(_e),Fe)return;h.aspect=xe/K;let Tt=Math.tan(Ee.degToRad(16)),Vt=Math.max(We.y/(2*Tt),We.x/(2*Tt*h.aspect))*1.25+We.z;if(C){Vt=0;for(let qn of[_e.min.x,_e.max.x])for(let Xr of[_e.min.y,_e.max.y])for(let ti of[_e.min.z,_e.max.z])Vt=Math.max(Vt,ti-at.z+Math.max(Math.abs(qn-at.x)/(Tt*h.aspect),Math.abs(Xr-at.y)/Tt)*1.12)}let gr=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2",Ji=!!T?.snapshot?.().available,_n=!!F&&Ji&&!gr;h.position.copy(at).add(new U(0,0,Vt)),h.lookAt(at),h.zoom=_n?1.05:re.scale,h.setViewOffset(xe,K,_n?0:-re.x*xe,_n?0:-re.y*K,xe,K),h.updateProjectionMatrix(),h.projectionMatrix.elements[0]*=re.stretchX,h.projectionMatrix.elements[5]*=re.stretchY,h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),T?.updateView(h,at)}try{let po=function(de){let Y=Dn.get(de);if(!Y)throw new Error("Unknown sample");ni=Y.overlay?ti==="sample"&&ni?ni:{bindings:ti==="standby"?xr:Qi,duration:ti==="standby"?_n:yr,time:I,envelope:F}:null,qr=de,Qi=Y.bindings,yr=Y.duration;let De=Dn.get(Y.sceneOf)||Y,Ce=Y.overlay?ni.envelope:De.sceneFraming?$.get(De.sourceSha256):null;if(Y.sceneFraming&&!Ce)throw new Error("Scene framing envelope missing");let Ue=T.setAnchor?.(De.id??de),Ye=F!==Ce;if(Ue!=null){let nt=-Math.PI/2+Ee.degToRad(Ue);Ye||=Math.abs(o-nt)>1e-8,o=nt,ue=0,be()}return F=Ce,Yr(0),!T.snapshot().available&&De.sceneFraming&&(Qe(),Ye=!0),Ye&&Ae(),{id:de,label:Y.label,duration:Y.duration}},Yr=function(de,Y=Qi,De=yr){if(k||!Number.isFinite(de))return;let Ce=ni&&Y===Qi?ni:null;Ce&&Ce.duration>0&&Yr((Ce.time+de)%Ce.duration,Ce.bindings,Ce.duration);let Ue=ti;N=Y[0]?.clip?.generatorMetadata?.sourceSha256||null,ti=Y===xr&&_n>0?"standby":"sample",I=Math.max(0,Math.min(De,de));for(let{bone:Ye,track:nt,clip:He}of Y){let Lt=I*He.fps,kt=Math.min(Math.floor(Lt),He.frames-1),Xt=Math.min(kt+1,He.frames-1),zt=Lt-kt,dn=nt.keys[kt],_r=nt.keys[Xt];(!Ce||!z.has(Ye))&&Ye.position.set(Ee.lerp(dn[0],_r[0],zt),Ee.lerp(dn[1],_r[1],zt),Ee.lerp(dn[2],_r[2],zt)),Ye.quaternion.copy(gr.fromArray(dn,3).slerp(Ji.fromArray(_r,3),zt)),(!Ce||!z.has(Ye))&&Ye.scale.set(Ee.lerp(dn[7],_r[7],zt),Ee.lerp(dn[8],_r[8],zt),Ee.lerp(dn[9],_r[9],zt))}if(at.apply((Y.find(Ye=>!z.has(Ye.bone))||Y[0])?.clip,I),ve){w.position.x=w.position.z=0,u.updateMatrixWorld(!0);let Ye=w.getObjectByName(ve.bone).getWorldPosition(new U).applyMatrix4(w.matrixWorld.clone().invert());w.position.x=ve.reference[0]-Ye.x,w.position.z=ve.reference[1]-Ye.z}u.updateMatrixWorld(!0),Ve=Tt.length;for(let Ye of Tt)Ye.update()},Be=function(){for(let de of E)de.bone.scale.copy(de.base);E=[],ee&&(w.position.copy(ae),ee=!1)},qe=function(){let de=performance.now(),Y=Math.min(.25,Math.max(.001,(de-ne)/1e3));if(ne=de,Ge+=(P-Ge)*(1-Math.exp(-Y*10)),Math.abs(Ge-P)<.002&&(Ge=P),Ge<=.001||!aa.length)return;let De=Ge*Ge*(3-2*Ge);u.updateMatrixWorld(!0);let Ce=R&&X?Math.min(R.getWorldPosition(new U).y,X.getWorldPosition(new U).y):null;ae.copy(w.position),ee=!0;for(let{bone:Ye,factor:nt}of aa){let He=Ye.scale.clone();E.push({bone:Ye,base:He}),Ye.scale.multiplyScalar(Ee.lerp(1,nt,De))}if(u.updateMatrixWorld(!0),Ce!==null){let Ye=Math.min(R.getWorldPosition(new U).y,X.getWorldPosition(new U).y),nt=Ce-Ye;w.position.y+=nt*(Fe?1:.88)}u.updateMatrixWorld(!0);let Ue=new Set;w.traverse(Ye=>{Ye.isSkinnedMesh&&!Ue.has(Ye.skeleton)&&(Ye.skeleton.update(),Ue.add(Ye.skeleton))})},ke=function(de){return Je=de==="chibi"?"chibi":"normal",P=Je==="chibi"?1:0,{mode:Je,blend:Ge}},$e=function(){Be(),u.updateMatrixWorld(!0);let de=new Kt;w.traverse(De=>{De.isSkinnedMesh&&(De.skeleton.update(),De.computeBoundingBox(),De.boundingBox&&de.union(De.boundingBox.clone().applyMatrix4(De.matrixWorld)))});let Y=de.isEmpty()?0:de.min.y;return Number.isFinite(Y)?-Y:0},tt=function(de,{hideRoom:Y=!0}={}){let De=!!de;if(De===Fe)return De&&Y!==Se&&(Se=!!Y,T?.snapshot?.().available&&(T.setVisible(!Se),T.setRoomVisible(!Se))),mt();if(Fe=De,Fe){Se=!!Y;let Ce=T?.snapshot?.();Ce?.available&&(he=Ce.visible,J=Ce.roomVisible,Se&&(T.setVisible(!1),T.setRoomVisible(!1))),se=p.snapshot(),me=se.exposure,Me=se.warmth,h.matrixAutoUpdate=!1,h.clearViewOffset?.(),h.zoom=1,V=$e(),d.position.set(0,V,0),d.scale.setScalar(1),ie.position.set(0,0,0),ie.visible=!0,be();let Ue=new Kt(new U(-.9,0,-.9),new U(.9,1.8,.9));p.frame(Ue)}else{if(h.matrixAutoUpdate=!0,ie.visible=!1,he!==null&&(T?.setVisible?.(he),he=null),J!==null&&(T?.setRoomVisible?.(J),J=null),se){try{p.set({exposure:se.exposure,warmth:se.warmth})}catch{}se=null}Le(Pe),be(),Ae()}return mt()},ft=function(de,Y,De,Ce){if(!(!Fe||k)&&(Array.isArray(de)&&de.length===16&&(h.projectionMatrix.fromArray(de),h.projectionMatrixInverse.copy(h.projectionMatrix).invert()),Array.isArray(Y)&&Y.length===16&&(h.matrixWorldInverse.fromArray(Y),h.matrixWorld.copy(h.matrixWorldInverse).invert(),h.matrixWorld.decompose(h.position,h.quaternion,h.scale)),Number.isFinite(De)&&Number.isFinite(Ce))){let Ue=Ee.clamp(De,.78,1.32),Ye=Ee.clamp(Ce,.12,.88);me+=(Ue-me)*.12,Me+=(Ye-Me)*.12;let nt=p.snapshot();if(Math.abs(nt.exposure-me)>.006||Math.abs(nt.warmth-Me)>.008)try{p.set({exposure:me,warmth:Me})}catch{}}},vt=function(de){return Wt=qh(w,h,e.getAsset("learnedMotions")?.data,bt?.stance,de),Wt.available()},An=function(){let de=[];return w.updateWorldMatrix(!0,!0),w.traverse(Y=>{Y.userData.sourceAttachment&&Y.traverse(De=>{if(!De.isSkinnedMesh)return;De.skeleton.update();let Ce=new U,Ue=De.geometry.attributes.position.count;for(let Ye=0;Ye<Ue;Ye++)Ce.add(De.getVertexPosition(Ye,new U).applyMatrix4(De.matrixWorld));de.push({kind:Y.userData.sourceAttachment,vertices:Ue,center:Ce.divideScalar(Ue).toArray(),sharedBones:De.skeleton.bones.every(Ye=>w.getObjectByName(Ye.name)===Ye)})})}),de};if(ve&&(ve.schema!=="snowbreak-home-root-lock/1"||ve.bone!=="Bip001"||!Array.isArray(ve.reference)||ve.reference.length!==2||!ve.reference.every(de=>Number.isFinite(de)&&Math.abs(de)<10)))throw new Error("Invalid home root motion policy");let xe=e.getAsset("materials")?.data;if(xe){if(xe.schema!=="snowbreak-material-preview/1"||xe.originalShaderVerified!==!1||!Array.isArray(xe.materials)||xe.materials.length>64)throw new Error("Invalid material preview");x=Pf(xe,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096,v.snapshot().mode);let de=new Map;for(let Y of xe.materials){if(s(),typeof Y.name!="string"||Y.name.length>256||oe.has(Y.name))throw new Error("Invalid material identity");let De=Y.renderState||{};if(De.alphaCutoff!==void 0&&(!Number.isFinite(De.alphaCutoff)||De.alphaCutoff<0||De.alphaCutoff>1))throw new Error("Invalid material alpha");if(De.doubleSided!==void 0&&typeof De.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(oe.set(Y.name,De),De.opacity===0||!Y.diffuseAssetId)continue;let Ce=e.getAsset("texture_"+Y.diffuseAssetId);if(Ce?.kind!=="texture")throw new Error("Missing local diffuse texture");let Ue=de.get(Y.diffuseAssetId);if(!Ue){let nt=URL.createObjectURL(new Blob([Ce.bytes],{type:Ce.data?.mime||"image/png"}));try{Ue=await new wi().loadAsync(nt)}finally{URL.revokeObjectURL(nt)}let He=x.limitFor(Y.diffuseAssetId);if(Ue.image.width>He||Ue.image.height>He){let Lt=document.createElement("canvas"),kt=Math.min(He/Ue.image.width,He/Ue.image.height);Lt.width=Math.round(Ue.image.width*kt),Lt.height=Math.round(Ue.image.height*kt),Lt.getContext("2d").drawImage(Ue.image,0,0,Lt.width,Lt.height);let Xt=Ue.image;Ue.image=Lt,Xt.src="",Ue.needsUpdate=!0}Ue.colorSpace=Ht,Ue.anisotropy=c.capabilities.getMaxAnisotropy(),Ue.wrapS=Ue.wrapT=kn,Ue.flipY=!1,de.set(Y.diffuseAssetId,Ue),B.add(Ue)}if(Q.set(Y.name,Ue),Y.normalAssetId){if(!/^[a-f0-9]{64}$/.test(Y.normalAssetId)||xe.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let nt=e.getAsset("texture_"+Y.normalAssetId);if(nt?.kind!=="texture")throw new Error("Missing original normal texture");let He=de.get("normal:"+Y.normalAssetId);if(!He){let Lt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/png"}));try{He=await new wi().loadAsync(Lt)}finally{URL.revokeObjectURL(Lt)}let kt=x.limitFor(Y.normalAssetId,!0);if(He.image.width>kt||He.image.height>kt){let Xt=He.image,zt=document.createElement("canvas"),dn=kt/Math.max(Xt.width,Xt.height);zt.width=Math.round(Xt.width*dn),zt.height=Math.round(Xt.height*dn),zt.getContext("2d").drawImage(Xt,0,0,zt.width,zt.height),He.image=zt,Xt.src="",He.needsUpdate=!0}He.flipY=!1,He.wrapS=He.wrapT=kn,He.colorSpace=Gn,He.anisotropy=c.capabilities.getMaxAnisotropy(),de.set("normal:"+Y.normalAssetId,He),B.add(He)}ce.set(Y.name,He)}if(Y.ormAssetId){if(!/^[a-f0-9]{64}$/.test(Y.ormAssetId))throw new Error("Invalid ORM texture declaration");let nt=e.getAsset("texture_"+Y.ormAssetId);if(nt?.kind!=="texture")throw new Error("Missing ORM material texture");let He=de.get("orm:"+Y.ormAssetId);if(!He){let Lt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/webp"}));try{He=await new wi().loadAsync(Lt)}finally{URL.revokeObjectURL(Lt)}let kt=x.limitFor(Y.ormAssetId,!0);if(He.image.width>kt||He.image.height>kt){let Xt=He.image,zt=document.createElement("canvas"),dn=kt/Math.max(Xt.width,Xt.height);zt.width=Math.round(Xt.width*dn),zt.height=Math.round(Xt.height*dn),zt.getContext("2d").drawImage(Xt,0,0,zt.width,zt.height),He.image=zt,Xt.src="",He.needsUpdate=!0}He.flipY=!1,He.wrapS=He.wrapT=kn,He.colorSpace=Gn,He.anisotropy=c.capabilities.getMaxAnisotropy(),de.set("orm:"+Y.ormAssetId,He),B.add(He)}pe.set(Y.name,He)}let Ye=Y.hairHighlightAssetId||Y.faceShadowAssetId;if(Ye){if(!/^[a-f0-9]{64}$/.test(Ye))throw new Error("Invalid auxiliary shader texture declaration");let nt=e.getAsset("texture_"+Ye);if(nt?.kind!=="texture")throw new Error("Missing auxiliary shader texture");let He=de.get("extra:"+Ye);if(!He){let Lt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/webp"}));try{He=await new wi().loadAsync(Lt)}finally{URL.revokeObjectURL(Lt)}He.flipY=!1,He.wrapS=He.wrapT=kn,He.colorSpace=Gn,He.anisotropy=c.capabilities.getMaxAnisotropy(),de.set("extra:"+Ye,He),B.add(He)}q.set(Y.name,He)}}}let K=e.getAsset("body");if(!K)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let we=e.getAsset("framingBounds")?.data;if(we){let de=Y=>Array.isArray(Y)&&Y.length===3&&Y.every(De=>Number.isFinite(De)&&Math.abs(De)<=100);if(we.schema!=="snowbreak-framing-bounds/1"||we.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||we.bodySha256!==e.current.resources.find(Y=>Y.role==="body")?.assetId||!de(we.min)||!de(we.max)||we.min.some((Y,De)=>Y>=we.max[De])||!Number.isInteger(we.evaluatedFrames)||we.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(C=new Kt(new U(...we.min),new U(...we.max)),O=we,we.clips){if(!Array.isArray(we.clips)||we.clips.length>16)throw new Error("Invalid clip envelopes");for(let Y of we.clips){if(!/^[a-f0-9]{64}$/.test(Y.sourceSha256)||$.has(Y.sourceSha256)||!de(Y.min)||!de(Y.max)||Y.min.some((De,Ce)=>De>=Y.max[Ce]))throw new Error("Invalid clip envelope");$.set(Y.sourceSha256,new Kt(new U(...Y.min),new U(...Y.max)))}}}w=(await new Hr().register(Sd).parseAsync(K.bytes.slice().buffer,"")).scene,d.add(w),s(),lt(w),w.traverse(de=>{de.isBone&&z.add(de)});let _e=e.getAsset("bodyAnimation")?.data;N=_e?.generatorMetadata?.sourceSha256||null,Z(w,_e),Ie(w,_e);let We=e.getAsset("faceAttachment")?.data;if(We){if(We.schema!=="snowbreak-face-attachment/1"||We.candidateOnly!==!0||We.originalAssemblyVerified!==!1||We.boneName!=="Bip001-Head"||We.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let de=w.getObjectByName(We.boneName),Y=We.relativeLocationCm;if(!de?.isBone||!Y||![Y.X,Y.Y,Y.Z].every(Ye=>Number.isFinite(Ye)&&Math.abs(Ye)<100))throw new Error("Invalid socket parent or position");let De=e.getAsset("face");if(!De)throw new Error("Missing face geometry");y=(await new Hr().register(Sd).parseAsync(De.bytes.slice().buffer,"")).scene,s(),lt(y),Z(y,e.getAsset("faceAnimation")?.data);let Ce=e.getAsset("faceAnimation")?.data;if(!Ce||!_e||Ce.frames!==_e.frames||Ce.fps!==_e.fps)throw new Error("Face/body sample timing mismatch");Ie(y,Ce);let Ue=new Yt;if(Ue.position.set(Y.X*.01,Y.Z*.01,Y.Y*.01),Ue.quaternion.fromArray(Km(We.relativeRotationDegrees)),de.add(Ue),Ue.add(y),We.defaultVisible!==void 0&&typeof We.defaultVisible!="boolean")throw new Error("Invalid face visibility");y.visible=We.defaultVisible===!0}T=await eg(e,u,lt),s(),c.localClippingEnabled=!!T.hasCutaway;let at=ig(e.getAsset("morphCurves")?.data,e,y||w),Tt=[];w.traverse(de=>{de.isSkinnedMesh&&!Tt.includes(de.skeleton)&&Tt.push(de.skeleton),de.isSkinnedMesh&&(de.frustumCulled=!1)});let Vt=_e?(_e.frames-1)/_e.fps:0,gr=new Ke,Ji=new Ke,_n=0,qn="D\u5F85\u673A",Xr=!1,ti="sample",xr=[],bt=e.getAsset("stateTransition")?.data;if(bt){let de=bt.schema==="snowbreak-state-preview/1"&&bt.show==="Sc01_Hand_A_D"&&bt.fromState==="A"&&bt.toState==="D",Y=bt.schema==="snowbreak-standby-preview/1"&&bt.characterId===e.current.characterId&&Number.isInteger(bt.standbyConfigId)&&bt.standbyConfigId>0&&Number.isInteger(bt.sourceSkinId)&&/^[a-f0-9]{64}$/.test(bt.sourceTableSha256)&&typeof bt.label=="string"&&bt.label.length<=40&&typeof bt.startAsStandby=="boolean",De=bt.schema==="snowbreak-standby-preview/2"&&bt.stance==="standing"&&bt.characterId===e.current.characterId&&bt.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&bt.startAsStandby===!0;if(!de&&!Y&&!De||bt.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(Y||De)&&(qn=bt.label,Xr=bt.startAsStandby);let Ce=e.getAsset("standbyBody")?.data,Ue=y?e.getAsset("standbyFace")?.data:null;if(!Ce||y&&(!Ue||Ce.frames!==Ue.frames||Ce.fps!==Ue.fps))throw new Error("Standby clip timing mismatch");let Ye=new Map(Ce.tracks.map(He=>[He.bone,He])),nt=Ue?new Map(Ue.tracks.map(He=>[He.bone,He])):new Map;xr=G.map(He=>{let Lt=He.clip===_e?Ce:Ue,kt=(He.clip===_e?Ye:nt).get(He.bone.name);if(!kt||kt.keys.length!==Lt.frames||kt.keys.some(Xt=>Xt.length!==10||!Xt.every(Number.isFinite)||Math.abs(Xt.slice(3,7).reduce((zt,dn)=>zt+dn*dn,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:He.bone,track:z.has(He.bone)?Wh(kt):kt,clip:Lt}}),_n=(Ce.frames-1)/Ce.fps}let Qi=G,yr=Vt,qr="default",ni=null,Dn=new Map([["default",{bindings:G,duration:Vt,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),jt=e.getAsset("sampleCatalog")?.data;if(jt){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(jt.schema)||jt.characterId!==e.current.characterId||jt.originalInteractionVerified!==!1||!Array.isArray(jt.samples)||!jt.samples.length||jt.samples.length>24||!/^[a-f0-9]{64}$/.test(jt.sourceTableSha256))throw new Error("Invalid sample catalog");Dn.clear();for(let Y of jt.samples){if(typeof Y.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(Y.id)||Dn.has(Y.id)||typeof Y.label!="string"||Y.label.length>64||jt.schema.endsWith("/1")&&(!Number.isInteger(Y.sourceShowElementId)||Y.sourceShowElementId<1))throw new Error("Invalid sample identity");let De=e.getAsset(Y.bodyRole),Ce=Y.faceRole?e.getAsset(Y.faceRole):null;if(De?.kind!=="animation"||y&&(Ce?.kind!=="animation"||(De.data.frames!==Ce.data.frames||De.data.fps!==Ce.data.fps)&&!(Y.independentFaceTiming===!0&&Number.isInteger(Y.sourceShowElementId)&&Y.sourceShowElementId>0)))throw new Error("Sample body/face mismatch");if(jt.schema.endsWith("/2")&&Y.sourceBodySha256!==(De.data.generatorMetadata?.sourceSha256||e.current.resources.find(Ye=>Ye.role===Y.bodyRole)?.assetId))throw new Error("Sample source mismatch");let Ue=G;if((Y.bodyRole!=="bodyAnimation"||y&&Y.faceRole!=="faceAnimation")&&(Ue=[],Ie(w,De.data,Ue,Y.overlay==="upper-body"),y)){if(!Ce)throw new Error("Sample requires face");Ie(y,Ce.data,Ue)}if(Y.persistentState===!0&&e.current.characterId==="Fenny")for(let Ye=0;Ye<Ue.length;Ye++)z.has(Ue[Ye].bone)&&(Ue[Ye]={...Ue[Ye],track:Bm(Ue[Ye].track)});if(Y.persistentState!==void 0&&typeof Y.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(Y.endPolicy!==void 0&&!["hold","loop"].includes(Y.endPolicy))throw new Error("Invalid scene end policy");Dn.set(Y.id,{id:Y.id,bindings:Ue,duration:Math.max((De.data.frames-1)/De.data.fps,Ce?(Ce.data.frames-1)/Ce.data.fps:0),overlay:Y.overlay==="upper-body",label:Y.label,sourceShowElementId:Y.sourceShowElementId,sceneFraming:Y.sceneFraming===!0,sourceSha256:De.data.generatorMetadata?.sourceSha256,sceneOf:Y.sceneOf,persistentState:Y.persistentState===!0,endPolicy:Y.endPolicy,afterScene:Y.afterScene})}let de=Dn.get(jt.defaultId);if(!de||de.bindings!==G)throw new Error("Default sample must reference primary clip");qr=jt.defaultId;for(let Y of Dn.values()){if(Y.sceneOf!==void 0&&(typeof Y.sceneOf!="string"||!Dn.has(Y.sceneOf)))throw new Error("Missing reaction scene");if(Y.afterScene!==void 0&&(typeof Y.afterScene!="string"||!Dn.get(Y.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let fo=tg(jt);u.updateMatrixWorld(!0);let ra=w.getObjectByName("Bip001-Pelvis")||w.getObjectByName("Bip001");if(ra){let de=ra.getWorldQuaternion(new Ke),Y=[new U(1,0,0),new U(0,1,0),new U(0,0,1)].sort((Ce,Ue)=>{let Ye=Ce.clone().applyQuaternion(de),nt=Ue.clone().applyQuaternion(de);return Math.hypot(nt.x,nt.z)-Math.hypot(Ye.x,Ye.z)})[0],De=Y.clone().applyQuaternion(de);le={bone:ra,axis:Y,heading:Math.atan2(De.x,De.z)}}A=Qm(w,l,h);let sa=Om(w,de=>{te=de,be()},()=>re.yaw+Pe.yaw),mo=Jm(w,h,i,T.root);b=Um(w,h,i,mo,e.getAsset("sceneInteractions")?.data,T.contactSurface,e.current.characterId),S=Fm(w,h,i);let aa=[["Bip001-Pelvis",.66],["Bip001-L-Thigh",.8],["Bip001-R-Thigh",.8],["Bip001-L-Foot",1.24],["Bip001-R-Foot",1.24],["Bip001-L-UpperArm",.84],["Bip001-R-UpperArm",.84],["Bip001-L-Hand",1.22],["Bip001-R-Hand",1.22],["Bip001-Neck",.86],["Bip001-Head",2.22]].map(([de,Y])=>({bone:w.getObjectByName(de),factor:Y})).filter(de=>de.bone),R=w.getObjectByName("Bip001-L-Foot"),X=w.getObjectByName("Bip001-R-Foot"),ae=new U,ee=!1,ne=performance.now(),mt=()=>({active:Fe,roomHidden:Se,shadowCatcher:ie.visible,groundOffsetY:V,proportionMode:Je,chibiBlend:Ge});Ae(),await c.compileAsync(l,h),s(),addEventListener("resize",Ae),c.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){v.resetClock();return}if(!v.begin())return;let de=v.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(de-m)>.02&&(m=de,Ae()),Be(),sa.restore(),b.restore(),S.restore(),L?.(),sa.tick(),b.tick(),S.tick(),qe(),A.update(),g.render(l,h)});let je=()=>{let de=[];return w.traverse(Y=>{Y.isMesh&&de.push({name:Y.userData.snowbreakMaterialName,textured:!!Y.userData.previewMap,normalMapped:!!Y.material.normalMap,diffuseSize:Y.material.map?[Y.material.map.image.width,Y.material.map.image.height]:null,normalSize:Y.material.normalMap?[Y.material.normalMap.image.width,Y.material.normalMap.image.height]:null,anisotropy:Y.material.map?.anisotropy||0,profile:Y.material.userData.profile,alphaTest:Y.material.alphaTest})}),de},Mt=de=>w.traverse(Y=>{Y.isMesh&&(Y.material.map=de?Y.userData.previewMap:null,Y.material.color.set(Y.material.map?16777215:13289411),Y.material.needsUpdate=!0)}),Bt=()=>({available:!!y,visible:!!y?.visible,originalAssemblyVerified:!1}),Nt=de=>(y&&(y.visible=!!de,Ae()),Bt()),Rt=(de,Y,De)=>{if(k)throw new Error("Renderer disposed");A.hideForCapture(()=>{g.render(l,h),de.drawImage(i,0,0,Y,De)})},rn=Gh(w),Xe=Gh(w,{side:"left"}),Wt=qh(w,h,e.getAsset("learnedMotions")?.data,bt?.stance,n);return{setARMode:tt,setARFrame:ft,arState:mt,setProportionMode:ke,proportionState:()=>({mode:Je,blend:Ge}),textureBudgetState:()=>x?.snapshot(),attachmentState:An,performanceState:_,setRenderBudget:f,releaseCache:M,setUniversalMotions:vt,projectedBone:de=>{let Y=w.getObjectByName(de)?.getWorldPosition(new U).project(h),De=i.getBoundingClientRect();return Y?[De.left+(Y.x+1)*De.width/2,De.top+(1-Y.y)*De.height/2]:null},modelDragScale:()=>{let de=Math.max(.05,w.getObjectByName("Bip001-Pelvis").getWorldPosition(new U).sub(h.position).dot(h.getWorldDirection(new U))),Y=2*de*Math.tan(Ee.degToRad(h.fov/2))/h.zoom;return{x:Y*h.aspect/re.stretchX,y:Y/re.stretchY}},furnitureContacts:de=>Object.fromEntries(de.map(Y=>{let De=w.getObjectByName(Y);return[Y,De?T.contactSurface?.(De.getWorldPosition(new U)):null]})),setModelFrame:Le,modelFrameState:()=>({...Pe}),placementState:()=>({model:d.matrixWorld.toArray(),room:T.root?.matrixWorld.toArray(),camera:h.matrixWorld.toArray()}),embodiment:sa,sceneInteractions:b,sensesState:S.snapshot,setGaze:S.gaze,senseTouch:S.touch,resetSenses:S.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(de=>[de,w.getObjectByName(de)?.getWorldPosition(new U).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:p.snapshot,setLighting:p.set,boneWorldPoints:de=>Object.fromEntries(de.slice(0,32).map(Y=>[Y,w.getObjectByName(Y)?.getWorldPosition(new U).toArray()])),bonePoseState:()=>{let de=[];return w.traverse(Y=>{Y.isBone&&de.push({name:Y.name,position:Y.position.toArray(),quaternion:Y.quaternion.toArray(),scale:Y.scale.toArray()})}),de},cameraState:()=>({position:h.position.toArray(),projection:h.projectionMatrix.toArray()}),learnedOptions:()=>Wt.available(),applyLearnedMotion:(...de)=>Wt.apply(...de),learnedDiagnostics:()=>Wt.snapshot(),presentationDiagnostics:()=>({resizeCount:ge,fitCount:Re}),touchBindings:()=>fo.map(de=>({...de,gestures:[...de.gestures]})),setRoomVisible:T.setRoomVisible,setSceneCutaway:T.setCutaway,sceneState:T.snapshot,setSceneVisible:T.setVisible,morphState:at.snapshot,framingEnvelopeState:()=>({precomputed:!!C,evaluatedFrames:O?.evaluatedFrames||0,perClip:$.size,activeSource:N}),resourceState:()=>({sourceTextures:B.size,drawCalls:c.info.render.calls,triangles:c.info.render.triangles,geometries:c.info.memory.geometries,textures:c.info.memory.textures}),setSurfaceLabels:A.set,surfaceOverlayState:A.snapshot,armPreview:rn,leftArmPreview:Xe,dispose:fe,pickSurface:mo,drawSnapshot:Rt,faceViewer:ot,setFrame:Ne,frameState:()=>({...re}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:je,setTexturePreview:Mt,faceCandidateState:Bt,showFaceCandidate:Nt,selectSample:po,sampleOptions:()=>[...Dn].map(([de,Y])=>({id:de,label:Y.label,duration:Y.duration,sourceShowElementId:Y.sourceShowElementId,persistentState:Y.persistentState,endPolicy:Y.endPolicy,afterScene:Y.afterScene})),get duration(){return yr},seek:Yr,standbyDuration:_n,standbyLabel:qn,startAsStandby:Xr,seekStandby:de=>{F&&(F=null,Ae());let Y=T.setAnchor?.(jt?.defaultId);Y!=null&&(o=-Math.PI/2+Ee.degToRad(Y),ue=0,be()),_n>0&&Yr(de%_n,xr,_n)},setFrameHandler:de=>L=de,sampleState:()=>({lastSkeletonUpdates:Ve,sampleId:qr,time:I,poseMode:ti,standbyDuration:_n,nativeInitializationVerified:!1,viewYaw:u.rotation.y,autoYaw:ue,bodyBones:G.filter(de=>de.clip===_e).length,faceBones:G.filter(de=>de.clip!==_e).length,hand:w.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new U).toArray()})}}catch(xe){throw fe(),xe}}var fM="action-plan/1",pM=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],mM={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},gM={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},xM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,yM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},_M={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},sg={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},Ic=(i,e,t)=>Math.max(e,Math.min(t,i));function vM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function bM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function MM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function wd(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:Ic(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var lg=i=>!!i&&xM.test(i);function SM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=gM[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||lg(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function ag(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=lg(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function og(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of sg[s]||[])r.push(a);for(let s of sg[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function wM(i,e){let t=e&&e.channels||{},n=yM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function EM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*Ic(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,d=Ic(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:d,curve:[[0,l],[.18,d],[.75,d],[1,l]]})}return s}function TM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function so(i,e,t={}){let n=wd(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:fM,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||_M[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+vM(MM(n)+"||"+(a?bM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!pM.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=ag(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=TM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=SM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,d=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(d)&&l.push(...d),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=ag(n,a,c.motion)}else{let l=mM[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let h=wM(n,a);if(h.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=EM(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...h),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=og(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=og(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:Ic(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var Pc=(i,e,t)=>Math.max(e,Math.min(t,i));function AM(i){return i*i*(3-2*i)}function RM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*AM(Pc(o,0,1))}}return i[i.length-1][1]}function cg(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(_,x,S){a.push({at:e(),kind:_,planId:x.planId,type:x.action.type,...S||{}}),a.length>40&&a.shift()}function l(_,x,...S){if(typeof x=="function")try{x(...S)}catch{}}function u(_,x){let S={plan:_,t0:x,done:!1};r.push(S),c("start",_);for(let b of _.tracks)b.ch==="motion"?l("motion",t.onMotion,b.group,b.index,_):b.ch==="pose"?l("pose",t.onPose,b.name,_):b.ch==="expression"?l("expression",t.onExpression,b,_):b.ch==="speech"&&l("speech",t.onSpeech,b.text,_);return S}function d(_,x,S){if(_.done)return;_.done=!0;let b=r.indexOf(_);b>=0&&r.splice(b,1),c("end",_.plan,{reason:S}),l("end",t.onEnd,_.plan,S)}function h(_,x,S){let b=e(),w=S||so(_,x);if(!w||w.stopped||!w.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:w&&w.planId};let y=Number.isFinite(w.action.priority)?w.action.priority:50,T=r[0];if(T){let A=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(y<A)return s.length>=n&&s.shift(),s.push({plan:w,at:b}),c("queued",w,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:w.planId};d(T,b,"preempted")}return u(w,b),{accepted:!0,queued:!1,planId:w.planId,plan:w}}function p(_,x){let S=Math.max(1,_.duration),b=Math.max(0,Math.min(_.fadeIn||0,S*.5)),w=Math.max(0,Math.min(_.fadeOut||0,S*.5)),y=x*S,T=S-w,A=1;return b>0&&y<b&&(A=y/b),w>0&&y>T&&(A=Math.min(A,(S-y)/w)),Pc(A,0,1)}function g(_,x,S,b){for(let w of x.tracks){if(!w.curve||!w.id)continue;let T=RM(w.curve,S)*(w.weight===void 0?1:w.weight)*b,A=_[w.id];w.blend==="set"?(!A||b>=A.weight)&&(_[w.id]={id:w.id,value:T,blend:"set",weight:b,ch:w.ch}):A&&A.blend==="set"?A.value+=T:_[w.id]={id:w.id,value:(A?A.value:0)+T,blend:"add",weight:Math.max(A?A.weight:0,b),ch:w.ch}}}function v(_){let x=e(),S={t:x,channels:{},actions:[],finished:[]};for(let b of r.slice()){let w=Pc((x-b.t0)/Math.max(1,b.plan.duration),0,1),y=p(b.plan,w);y>0&&g(S.channels,b.plan,w,y),S.actions.push({planId:b.plan.planId,type:b.plan.action.type,progress:w,weight:y}),w>=1&&(S.finished.push(b.plan.planId),d(b,x,"done"))}if(!r.length&&s.length){let b=s.shift();u(b.plan,x),c("dequeued",b.plan)}return o=S,S}function m(_,x){let S=r.find(b=>b.plan.planId===_);return S?(d(S,e(),x||"interrupt"),!0):!1}function f(_){for(let x of r.slice())d(x,e(),_||"clear");s.length=0}function M(){return{active:r.map(_=>({planId:_.plan.planId,type:_.plan.action.type,progress:Pc((e()-_.t0)/Math.max(1,_.plan.duration),0,1)})),queue:s.map(_=>({planId:_.plan.planId,type:_.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:h,tick:v,interrupt:m,clear:f,snapshot:M,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var CM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function Ed(i,e={}){let t=CM[i]||i;return wd({type:t,...e})}function ug(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,d="stopped",h=0,p=!1,g=!1,v=null,m=null,f=null,M=i.touchBindings?.()||[],_=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(_())||_()<=0)throw new Error("Audio metadata unavailable");let x=()=>p?t.ended?t.duration>=i.duration?_()*1e3:(v||(v={at:e(),time:t.duration*1e3}),Math.min(_()*1e3,v.time+Math.max(0,e()-v.at))):t.currentTime*1e3:e(),S={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(q=>(q==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},b=i.sampleOptions?.()||[],w=b.find(q=>q.persistentState)?.id||null;S.localActions.surface_reaction={enabled:M.length>0,bindings:Object.fromEntries(M.map(q=>{let oe=b.find($=>$.id===q.sampleId),z=n?.(q.sampleId);return[q.region,{sampleId:q.sampleId,animationDuration:(oe?.duration||0)*1e3,voiceDuration:(z?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function y(q,oe,z="",$=!1){f={schema:"local-surface-reaction/1",id:oe.id,kind:q,sampleId:oe.sampleId,region:oe.touch.region,touch:oe.touch,withOriginalVoice:oe.withVoice,recovered:$,reason:z,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(f)}catch{}}let T=cg({now:x,handlers:{onMotion:q=>d=q==="local-arm-preview"?"local-arm-preview":q==="standby-D"||q==="standby-local"?"standby-preview":"playing",onPose:(q,oe)=>{if(q!=="snowbreak-raise-hand")return;let z=oe.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),z.begin(),o=z,d="local-arm-preview"}catch{z?.restore(),d="arm-failed"}},onEnd:(q,oe)=>{if(h++,q.action.type==="surface_reaction"&&m?.id===q.planId){let z=m;if(m=null,p&&(t.pause(),oe!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),oe==="done"){let $=!1;try{$=!!N().accepted&&d==="standby-preview"}catch{T.clear("restore-failed"),d="restore-failed"}y($?"completed":"failed",z,$?"local-standby-restored":"local-standby-failed",$)}else y(oe.startsWith("audio-")?"failed":"cancelled",z,oe);return}if(q.action.type==="snowbreak_standby"&&oe==="done"){N();return}if(q.action.type==="snowbreak_arm_preview"||q.action.type==="raise_hand"){o?.restore(),o=null,d="stopped",i.seek(0),oe==="done"&&i.startAsStandby&&N();return}if(p&&(t.pause(),oe!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),oe==="done"&&l){let z=l;l=null,C(z.id,z.time);return}d=oe==="done"?"sample-ended":"stopped",i.seek(oe==="done"?i.duration:0),oe==="done"&&(q.action.type==="snowbreak_standby"||g)&&N()}}});function A(){if(d==="standby-preview"&&k(),T.activeCount)return{accepted:!1,reason:"sample-busy"};let q={type:"snowbreak_sample",source:"manual-preview",priority:80};return T.dispatch(q,S,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:q,duration:(p?_():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function C(q,oe=0){return b.find(z=>z.id===q)?.persistentState&&(w=q),k(),i.selectSample(q),c={id:q,time:oe},d="scene-preview",i.seek(Math.min(oe,i.duration)),{accepted:!0}}async function F(q,{withVoice:oe=!0}={}){let z=c||l;if(!z)return{accepted:!1};k(),i.selectSample(z.id),i.seek(z.time%i.duration),i.selectSample(q),pe(n?.(q));let $=i.sampleOptions?.().find(ve=>ve.id===q)?.afterScene;return l=$?{id:$,time:0}:z,g=!1,oe&&t?B():A()}function O(q){if(c&&d==="scene-preview")return c.time+=Math.max(0,Math.min(100,q))/1e3,i.seek(c.id==="show_03"||i.sampleOptions?.().find($=>$.id===c.id)?.endPolicy==="hold"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let oe=p?x()/1e3:null,z=T.tick(q);if(d==="arm-failed")return k(),d="arm-failed",z;if(z.actions.length){let $=z.actions[0];if($.type==="snowbreak_arm_preview"||$.type==="raise_hand"){if(d==="local-arm-preview")try{o.apply($.progress)}catch{k(),d="arm-failed"}return z}$.type==="snowbreak_standby"&&d==="standby-preview"?i.seekStandby($.progress*i.standbyDuration):d!=="standby-preview"&&i.seek(oe===null?$.progress*i.duration:Math.min(i.duration,oe))}return z}function N(){if(w)return C(w);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};T.clear("standby-switch");let q={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),T.dispatch(q,S,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:q,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function k(q="sample-stop"){c=null,l=null,o?.restore(),o=null,h++,T.clear(q),t&&(t.pause(),t.currentTime=0),p=!1,v=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),d="stopped"}function L(q="right"){if(!["left","right"].includes(q))return{accepted:!1,reason:"invalid-arm-side"};let oe=q==="left"?i.leftArmPreview:i.armPreview;if(!oe?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(d==="standby-preview"&&k(),T.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{oe.begin(),o=oe}catch{return oe.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let z={type:"snowbreak_arm_preview",side:q,source:"manual-preview",priority:80};return T.dispatch(z,S,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:z,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function I(q){S.localActions.raise_hand.enabled=!!q,!q&&o&&k()}function G(q,oe={}){let z=Ed(q,oe);if(z.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let $=so(z,S);if($.stopped||!$.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:$};if(d==="standby-preview"&&k(),T.activeCount)return{accepted:!1,reason:"sample-busy",plan:$};let ve=T.dispatch(z,S,$);return d==="arm-failed"?(k(),d="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:$}):ve}async function D(q,{withVoice:oe=!0}={}){if(!M.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(T.activeCount&&d!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let z=ng(q,M);if(!z)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(q.frequency)||q.frequency<1||q.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let $=n?.(z.sampleId)||null;if(oe&&!$)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let ve=Ed("surface_reaction",{target:z.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!oe}),Ve=so(ve,S,{planId:"surface-reaction-"+ ++u});if(Ve.stopped||!Ve.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};k();try{i.selectSample(z.sampleId),pe($)}catch{try{N()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let ye={id:Ve.planId,sampleId:z.sampleId,touch:q,withVoice:!!oe},ge=++h;m=ye,v=null,p=!!oe,oe&&(r(),t.currentTime=0,s(!0));let Re=T.dispatch(ve,S,Ve);if(!Re.accepted)return m=null,p=!1,s(!1),{...Re,handled:!1};if(y("started",ye),!oe)return{...Re,handled:!0};try{return await t.play(),ge!==h?{accepted:!1,handled:!0,reason:"superseded"}:{...Re,handled:!0}}catch{return ge===h&&(k("audio-play-failed"),d="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function H(q){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};k();try{let oe=i.selectSample(q);return n&&pe(n(q)),i.startAsStandby&&N(),{accepted:!0,...oe}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function B(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(d==="standby-preview"&&k(),T.activeCount||p)return{accepted:!1,reason:"sample-busy"};let q=++h;r(),t.currentTime=0,v=null,p=!0,s(!0);let oe=A();try{return await t.play(),q!==h?{accepted:!1,reason:"superseded"}:oe}catch{return q===h&&(k("audio-play-failed"),d="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let Q=()=>{p&&O(0)},ce=()=>{p&&(k("audio-error"),d="audio-failed")};function pe(q){if(q&&(!Number.isFinite(q.duration)||q.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",Q),t?.removeEventListener("error",ce),t=q||null,v=null,t?.addEventListener("ended",Q),t?.addEventListener("error",ce)}return pe(t),{bus:T,capability:S,enterScene:C,playSceneReaction:F,dispatchSurfaceTouch:D,selectSample:H,setLocalActionsEnabled:I,dispatchSemantic:G,playArmPreview:L,playSample:A,playWithVoice:B,tick:O,stop:k,enterStandby:N,setStandbyAfterSample:q=>g=!!q,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:f?{...f,touch:void 0}:null,sampleDuration:i.duration,status:d,active:T.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!v,originalInteractionVerified:!1})}}async function hg(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function dg(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return IM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(d=>d.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>hg(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}async function IM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,v]of[[e.samples,!0],[e.events,!1]])for(let m of g){let f=t.samples.find(b=>b.id===m.id),M=i.getAsset(m.assetRole),_=i.current.resources.find(b=>b.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||M?.kind!=="audio"||!_||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||v&&(!f||f.sourceShowElementId!==void 0&&(!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||f.sourceShowElementId!==m.sourceShowElementId)))throw new Error("Bilingual voice identity mismatch");let x=m.language+":"+m.id+":"+m.eventId;if(r.has(x))throw new Error("Duplicate bilingual voice choice");r.add(x);let S=m.language+":"+m.id;n.has(S)||n.set(S,[]),n.get(S).push({hash:_.assetId,weight:m.weight,eventId:m.eventId}),s.set(_.assetId,M)}if(!r.size)throw new Error("Empty bilingual voice catalog");let c=[...s],l=0;await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;l<c.length;){let[g,v]=c[l++];try{a.set(g,await hg(v))}catch{o.push(g)}}}));let u="Chinese",d=!1;function h(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(d)return null;let v=(n.get(u+":"+g)||[]).filter(M=>a.has(M.hash)),m=v.reduce((M,_)=>M+_.weight,0);if(!v.length||!Number.isFinite(m)||m<=0)return null;let f=Math.random()*m;for(let M of v)if(f-=M.weight,f<0)return a.get(M.hash).audio;return a.get(v.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:h,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(h(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,v])=>g.startsWith(u+":")&&v.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){d=!0;for(let g of a.values())g.dispose();a.clear()}}}var fg=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function pg(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let v=/^(surface_\d+):(\d+)$/.exec(p);return!!v&&!!Vr({mesh:v[1],triangle:Number(v[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let v=t.get(p);if(fg(v,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:v,after:g});let m=s.get(p);return fg(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function d(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function h(p,g,v){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let f of m)o(f.key,f[v]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:d,undo:()=>h(n,r,"before"),redo:()=>h(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function mg(i,e,t,{load:n,save:r,tracker:s,onEvent:a,onInteracting:o,enabled:c}){let l={};try{l=n()}catch{}let u=pg(l),d=document.createElement("h3");d.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(d);let h=document.createElement("label"),p=document.createElement("input");p.type="checkbox",p.id="snowSurfaceEdit",h.append(p,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let g=document.createElement("select");g.id="snowSurfaceRegion";for(let[B,Q]of Object.entries($i))g.add(new Option(Q,B));g.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(g);let v=document.createElement("label"),m=document.createElement("input");m.type="checkbox",m.id="snowSurfaceShow",v.append(m,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(v);let f=document.createElement("div");for(let[B,Q]of Object.entries($i)){let ce=document.createElement("span");ce.textContent="\u25A0 "+Q+" ",ce.style.color="#"+Md[B].toString(16).padStart(6,"0"),f.appendChild(ce)}t.appendChild(f);let M=document.createElement("button"),_=document.createElement("button");M.id="snowSurfaceUndo",_.id="snowSurfaceRedo",M.textContent="\u64A4\u9500\u6807\u6CE8",_.textContent="\u91CD\u505A\u6807\u6CE8",t.append(M,_);let x=document.createElement("p");x.id="snowSurfaceOverlayInfo",t.appendChild(x);let S=document.createElement("button");S.id="snowSurfaceReset",S.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(S);let b=document.createElement("p");b.id="snowSurfaceStatus",b.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(b);let w=null,y=0,T=!1,A=B=>{let Q=ro(B);return Vr(B,Q?{[Q]:u.get(Q)}:{})};function C(){if(T)return;let B=u.state();M.disabled=!B.undo,_.disabled=!B.redo;let Q=i.setSurfaceLabels?.(u.snapshot(),m.checked);x.textContent=m.checked?`\u5DF2\u663E\u793A ${Q?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${Q?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function F(){y||(y=requestAnimationFrame(()=>{y=0,C()}))}function O(){r(u.snapshot()),C()}function N(){if(!w)return;w.mode==="paint"?u.cancel():w.known&&o?.(!1),s.cancel();let B=w.id;w=null,e.hasPointerCapture(B)&&e.releasePointerCapture(B),C()}p.onchange=()=>{N(),p.checked&&(m.checked=!0),C()},g.onchange=N,m.onchange=C,M.onclick=()=>{N(),u.undo()&&(O(),b.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},_.onclick=()=>{N(),u.redo()&&(O(),b.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},S.onclick=()=>{N(),u.begin();for(let B of Object.keys(u.snapshot()))u.set(B,void 0);u.commit()&&O(),b.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function k(B){let Q=ro(B);!Q||!B.alphaVerified||(u.set(Q,w.region||void 0),F(),b.textContent=`\u5F53\u524D\u5171 ${u.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${$i[w.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function L(B){if(w||e.dataset.snowbreakFrameEdit==="true"||!p.checked&&!c())return;B.stopPropagation();let Q=i.pickSurface(B.clientX,B.clientY);if(w={id:B.pointerId,mode:p.checked?"paint":"touch",region:g.value},e.setPointerCapture(B.pointerId),w.mode==="paint"){u.begin();try{k(Q)}catch(ce){b.textContent=ce.message}}else{let ce=A(Q);i.senseTouch?.(Q,ce),ce?(s.begin({pointerId:B.pointerId,x:B.clientX,y:B.clientY,region:ce,source:"skinned-surface"}),w.known=!0,w.hit=Q,o?.(!0)):Q?.alphaVerified?(s.begin({pointerId:B.pointerId,x:B.clientX,y:B.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),w.known=!0,w.hit=Q,o?.(!0)):b.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function I(B){if(w?.id===B.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){N();return}if(B.stopPropagation(),w.mode==="paint")try{k(i.pickSurface(B.clientX,B.clientY))}catch(Q){b.textContent=Q.message}else w.known&&s.move({pointerId:B.pointerId,x:B.clientX,y:B.clientY})}}function G(B){if(w?.id!==B.pointerId)return;B.stopPropagation();let Q=w;if(w=null,Q.mode==="paint")u.commit()&&O(),b.textContent=`\u5DF2\u4FDD\u5B58 ${u.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(Q.known&&c()){o?.(!1);let ce=s.finish({pointerId:B.pointerId,x:B.clientX,y:B.clientY});ce&&(ce.surface=Q.hit,b.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+ce.regionLabel,a(ce))}else Q.known&&o?.(!1),s.cancel();e.hasPointerCapture(B.pointerId)&&e.releasePointerCapture(B.pointerId)}function D(B){w?.id===B.pointerId&&N()}for(let[B,Q]of[["pointerdown",L],["pointermove",I],["pointerup",G],["pointercancel",D],["lostpointercapture",D]])e.addEventListener(B,Q);function H(B){if(!Array.isArray(B)||B.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");N(),u.begin();let Q=0;try{for(let ce of B){let pe=ro(ce.hit);if(!pe||!ce.hit.alphaVerified||u.has(pe)||u.state().count>=3e4)continue;let q={id:ce.id,source:"vision-reviewed",confidence:ce.confidence,model:String(ce.model||"").slice(0,128),visible:!0};Vr(ce.hit,{[pe]:q})&&(u.set(pe,q),Q++)}u.commit()&&O()}catch(ce){throw u.cancel(),C(),ce}return b.textContent=`\u5DF2\u91C7\u7528 ${Q} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,Q}return C(),{applyReviewed:H,classify:A,state:u.state,dispose(){N(),T=!0,y&&cancelAnimationFrame(y);for(let[B,Q]of[["pointerdown",L],["pointermove",I],["pointerup",G],["pointercancel",D],["lostpointercapture",D]])e.removeEventListener(B,Q)}}}var Pt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),xg=[Pt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Pt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Pt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Pt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Pt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Pt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Pt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Pt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Pt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Pt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Pt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Pt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Pt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Pt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Pt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Pt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Pt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Pt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Pt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Pt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Pt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Pt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Pt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Pt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Pt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Pt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Pt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Pt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Pt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],gg=Object.freeze(Object.fromEntries(xg.map(i=>[i.id,Object.freeze({...i})]))),ST=Object.freeze(xg.map(i=>i.id));function yg(i){return gg[i]&&gg[i].label||String(i||"\u8EAB\u4F53")}var PM="body-touch/1",LM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function _g(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...LM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(f){a=String(f||"")}function l(f){o=String(f||"screen")}function u(f){return f?(n={pointerId:f.pointerId,x0:Number(f.x)||0,y0:Number(f.y)||0,x:Number(f.x)||0,y:Number(f.y)||0,t0:e(),path:[[Number(f.x)||0,Number(f.y)||0]],region:f.region||null,confidence:Number(f.confidence)||0,source:f.source||o},{...n}):null}function d(f){if(!n||!f)return null;let M=Number(f.x)||0,_=Number(f.y)||0;return n.x=M,n.y=_,n.path.length<t.maxPath&&n.path.push([M,_]),{x:M,y:_,moved:Math.hypot(M-n.x0,_-n.y0)}}function h(){let f=0;for(let M=1;M<n.path.length;M++)f+=Math.hypot(n.path[M][0]-n.path[M-1][0],n.path[M][1]-n.path[M-1][1]);return{length:f,points:n.path.length}}function p(f,M){if(!n)return null;f&&d(f);let _=e(),x=Math.max(0,_-n.t0),S=n.x-n.x0,b=n.y-n.y0,w=Math.hypot(S,b),y=h(),T=M||"";if(!T)if(x>=t.longMinMs&&w<=t.moveTolerancePx)T="long_press";else if(w>=t.strokeMinPx&&x>=t.strokeMinMs&&y.length>=t.strokeMinPx)T="stroke";else if(w<=t.moveTolerancePx&&x<=t.tapMaxMs){let N=n.region&&(n.region.id||n.region)||"body";r&&_-r.at<=t.doubleGapMs&&r.region===N?(T="double_tap",r=null):(T="tap",r={at:_,region:N})}else T="drag";let A=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},C=typeof A=="string"?A:A.id||"body";s.push({at:_,region:C}),s=s.filter(N=>_-N.at<=t.frequencyWindowMs);let F=s.filter(N=>N.region===C).length,O={schema:PM,type:"body_touch",modelId:a,region:C,regionLabel:A.label||yg(C),side:A.side||"",group:A.group||"",gesture:T,durationMs:Math.round(x),confidence:Number(A.confidence)||0,regionSource:A.source||"fallback",source:n.source||o,frequency:F,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+b.toFixed(1)},distance:+w.toFixed(1),pathLength:+y.length.toFixed(1),at:Math.round(_)};return n=null,O}function g(){n=null}function v(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:d,finish:p,cancel:g,reset:v,state:m,setModelId:c,setSource:l,config:t}}var ao=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),Td=Object.freeze({...ao,scale:3,x:-.12,y:-.02});function Ad(i){return i&&Object.keys(ao).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function Rd(i,e,t,{onEditing:n=()=>{},initialFrame:r=Td,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0,verticalSign:l=1,dragScale:u=()=>({x:1,y:1})}={}){let d;try{d=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(Ad(d)&&(!o||Number.isFinite(d.depth)&&Math.abs(d.depth)<=1.5)?d:Ad(r)?r:Td);let h=document.createElement("section");h.id=a+"Editor",h.hidden=!0,h.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(h,p);let g=!1,v=null,m=0,f=null,M=null,_=new Map,x=new Map,S=document.createElement("select");S.id=a+"DragMode",S.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),S.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let b=document.createElement("div");b.textContent=s,h.append(b,S);let w=(D,H,B)=>{let Q=document.createElement("button");return Q.textContent=D,Q.id=H.replace("presentation",a),Q.onclick=B,h.append(Q),Q};function y(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function T(){let D=i.frameState();for(let[H,B]of x)B.value=D[H]}function A(D){i.setFrame({...i.frameState(),...D}),T()}function C(){m=0,f&&(A(f),f=null)}function F(D){f={...f||{},...D},m||(m=requestAnimationFrame(C))}function O(D){m&&(cancelAnimationFrame(m),C()),!D&&v&&A(v),y(),g=!1,h.hidden=!0,p.hidden=!0;for(let H of _.keys())e.hasPointerCapture(H)&&e.releasePointerCapture(H);_.clear(),M=null,e.dataset.snowbreakFrameEdit="false",n(!1)}w("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{A(Ad(r)?r:Td),y()}),w("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{A(ao),y()}),w("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{h.hidden=!0,p.hidden=!1}),w("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>O(!0)),w("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>O(!1)),p.onclick=()=>O(!0);for(let[D,H,B,Q,ce]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let pe=document.createElement("label");pe.textContent=H;let q=document.createElement("input");q.type="range",q.min=B,q.max=Q,q.step=ce,q.id=a+"_"+D,q.style.width="100%",q.oninput=()=>F({[D]:Number(q.value)}),q.onchange=()=>{C(),y()},x.set(D,q),pe.append(q),h.append(pe)}let N=D=>({x:D.clientX,y:D.clientY});function k(D){g&&(D.preventDefault(),D.stopImmediatePropagation(),_.set(D.pointerId,N(D)),e.setPointerCapture(D.pointerId),M={frame:i.frameState(),points:[..._.values()]})}function L(D){if(!g||!_.has(D.pointerId)||!M)return;D.preventDefault(),D.stopImmediatePropagation(),_.set(D.pointerId,N(D));let H=[..._.values()],B=M.points,Q=M.frame;if(H.length>=2&&B.length>=2){let ce=pe=>Math.hypot(pe[0].x-pe[1].x,pe[0].y-pe[1].y);F({scale:Q.scale*ce(H)/Math.max(5,ce(B))})}else if(H.length===1&&B.length===1){let ce=(H[0].x-B[0].x)/e.clientWidth,pe=(H[0].y-B[0].y)/e.clientHeight;F(S.value==="rotate"?{yaw:Q.yaw+ce*300,pitch:Q.pitch+pe*100}:{x:Q.x+ce*u().x,y:Q.y+pe*l*u().y})}}function I(D){!g||!_.has(D.pointerId)||(D.preventDefault(),D.stopImmediatePropagation(),_.delete(D.pointerId),e.hasPointerCapture(D.pointerId)&&e.releasePointerCapture(D.pointerId),m&&(cancelAnimationFrame(m),C()),y(),M={frame:i.frameState(),points:[..._.values()]})}let G=[["pointerdown",k],["pointermove",L],["pointerup",I],["pointercancel",I]];for(let[D,H]of G)e.addEventListener(D,H,!0);return{get active(){return g},toggle(){if(g){O(!0);return}g=!0,v=i.frameState(),T(),h.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&O(!0)},dispose(){g&&O(!0);for(let[D,H]of G)e.removeEventListener(D,H,!0);h.remove(),p.remove()},state:()=>i.frameState()}}var Sg=!0,Nc=!1,Id=!0,Uc="normal",Pd=!0,oo=0,di=document.querySelector("#stage"),vg=document.querySelector("#status"),ji=document.querySelector("#editor"),Xn=null,lo=null,ta=null,bg=Promise.resolve(),co={},Ld="Chinese",Nd=null,fi=0,Gr="",Ud,Te,ht,Un,Dc,Wn,Ii,ho,Et,Lc=0,Nn=!1,uo=!0;function Mg(i){let e=oo>0;oo=Math.max(0,oo+(i?1:-1));let t=oo>0;e!==t&&en({type:"interacting",active:t})}function Dd(){let i=Nc||!Te?.sceneState?.().available?"transparent":"#201d29";document.body.style.background=i,document.documentElement.style.background=i}var Wr=Od(i=>Fd(Et,i.tempo,performance.now())),Pi=document.createElement("button");Pi.id="finishPaint";Pi.hidden=!0;Pi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(Pi);function ia(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),Pi.hidden=!0,ji.classList.remove("open")}Pi.onclick=ia;var en=i=>{let e={...i,nonce:Gr};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},Cd=i=>{vg.textContent=i,vg.hidden=!i};function Fc(){oo=0,window.__snowbreakMigration=null,ta=null,Ii?.dispose(),Ii=null,Wr.close(),Et=null,Pi.hidden=!0,Wn?.dispose(),ho?.dispose(),Dc?.dispose(),ht?.stop("renderer-close"),Un?.dispose(),Te?.dispose(),Ud?.dispose(),ho=Wn=Dc=ht=Un=Te=Ud=null,ji.replaceChildren()}function ea(i,e,t){let n=++fi,r=bg.catch(()=>{}).then(()=>n===fi?NM(i,e,t,n):void 0);return bg=r,r}async function NM(i,e,t,n){if(Gr=e,Nn=!1,di.dataset.snowbreakPaused="false",t&&Xn?.manifest?.characterId)try{localStorage.setItem(Xn.manifest.characterId.toLowerCase()+"-collection-selection",t)}catch{}if(Fc(),Cd("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026"),t&&await new Promise(o=>setTimeout(o,120)),n!==fi)return;let r,s,a;try{if(t){if(!Xn)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Xn.selectVariant(t)}else{Xn=null,lo=i;let _=typeof i=="string"?i.match(/^companion-snowbreak:\/\/local\/package\/([A-Za-z0-9._-]+)$/):null;if(_)r=await Cf(_[1]);else{let x=await fetch(i);if(!x.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await If(new Uint8Array(await x.arrayBuffer()))}}if(!/^[A-Za-z0-9_-]{1,64}$/.test(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await rg(di,r.runtime,{isCurrent:()=>n===fi,universalMotions:Nd,performanceMode:co.mode||null}),a=r.runtime.getAsset("voiceCatalog")?await dg(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==fi){s.dispose(),a.dispose(),r.runtime.dispose();return}Xn=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),Ud=r.runtime,Te=s,Un=a,Te.setRenderBudget(co),Un.setLanguage?.(Ld),Dd(),ht=ug(Te,{audioForSample:_=>Un.getAudio(_)}),Te.sceneInteractions.setDeferredFeedback?.(Pd),Te.sceneInteractions.configure({beforeDrag:()=>{Et=null,Te.embodiment.releaseHands(),Te.resetSenses()},interacting:Mg,scene:()=>ht.snapshot().sceneId||Te.editingScene,reaction:_=>{ht.playSceneReaction(_,{withVoice:uo})},voice:_=>{if(uo){let x=Un.getAudio(_);x&&(x.currentTime=0,x.play().catch(()=>{}))}},event:en}),Te.showFaceCandidate(!0);let o=Te.sampleOptions().find(_=>_.id===Te.sampleState().sampleId),c="resting-scene:"+r.manifest.characterId+":"+r.selection?.mode,l=localStorage.getItem(c);o?.persistentState?ht.enterScene(Te.sampleOptions().some(_=>_.id===l&&_.persistentState)?l:o.id):ht.enterStandby(),Te.sceneSelectionKey=c,Te.faceViewer(),Uc!=="normal"&&Te.setProportionMode?.(Uc),Nc&&(Te.setARMode?.(!0,{hideRoom:Id}),Dd()),Lc=performance.now();let u=null,d=_=>{if(en({type:"editing",active:_}),_){let x=ht.snapshot();u=x.sceneId?{id:x.sceneId,time:x.sceneTime}:null,Te.editingScene=u?.id||null,Te.sceneInteractions.cancel(),ht.stop("placement-edit"),u&&(Te.selectSample(u.id),Te.seek(u.time%Te.duration)),ia()}else Nn||(u?ht.enterScene(u.id,u.time):ht.enterStandby(),u=null,Te.editingScene=null)},h=()=>{Ii?.dispose();let _=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";Ii=Rd({setFrame:Te.setModelFrame,frameState:Te.modelFrameState},di,"model-placement:"+_+r.selection?.mode+":"+(ht.snapshot().sceneId||"main"),{initialFrame:{...ao,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Te.modelDragScale,onEditing:d})};Te.setupModelEditor=h,h(),Wn=Rd(Te,di,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:Te.presentationDefault,onEditing:d}),ho=Bd(Te,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let p="";Te.setFrameHandler(()=>{let _=performance.now();if(Nn||ht.tick(Math.min(100,Math.max(0,_-Lc))),Lc=_,!Nn&&Et){let w=go(Et,_),y=Et.duration,T=Et.stop===void 0?1:Math.max(0,1-(_-Et.stop)/300);if(w>=y||T===0)Et=null;else{let A=Math.max(0,Math.min(1,w/.3,(y-w)/(.3*Et.rate),T)),C=A*A*(3-2*A);Te.applyLearnedMotion(Et.id,w,C,{amplitude:Wr.get().amplitude})}}let x=ht.snapshot(),S=Et?"learned:"+Et.id:x.status,b=S+":"+(x.sceneId||"")+":"+Te.sampleState().sampleId;b!==p&&(p=b,en({type:"selfState",state:na()}),en({type:"playback",active:!!Et||["playing","scene-preview","local-arm-preview"].includes(x.status),status:S,label:Et?Te.learnedOptions().find(w=>w.id===Et.id)?.label:Te.sampleOptions().find(w=>w.id===Te.sampleState().sampleId)?.label}))});let g=r.manifest.resources.filter(_=>_.kind==="geometry").map(_=>_.assetId).join("-"),v="surface:"+r.manifest.skinId+":"+g;Dc=mg(Te,di,ji,{load:()=>JSON.parse(localStorage.getItem(v)||"{}"),save:_=>localStorage.setItem(v,JSON.stringify(_)),tracker:_g({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!Nn,onInteracting:Mg,onEvent:async _=>{n!==fi||Nn||(en({type:"touch",region:_.region,label:_.regionLabel,gesture:_.gesture,confidence:_.confidence,source:_.regionSource,durationMs:_.durationMs,frequency:_.frequency,completed:!0}),Sg||await ht.dispatchSurfaceTouch(_,{withVoice:uo}))}});let m=document.createElement("button");m.textContent="\u5173\u95ED\u5DE5\u5177",m.onclick=ia,ji.prepend(m);let f=ji.querySelector("#snowSurfaceRegion"),M=ji.querySelector("#snowSurfaceEdit");M.addEventListener("change",()=>{M.checked&&(ji.classList.remove("open"),Pi.textContent="\u5B8C\u6210"+f.selectedOptions[0].textContent+"\u6807\u6CE8",Pi.hidden=!1)}),Cd(""),en({type:"ready",bodyActions:[...Te.embodiment.snapshot().available,...Te.sceneInteractions.available()],selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Te.sampleOptions().map(_=>_.id),sampleLabels:Object.fromEntries(Te.sampleOptions().map(_=>[_.id,_.label])),voices:Un.snapshot().available,learned:Te.learnedOptions().map(_=>_.id),learnedLabels:Object.fromEntries(Te.learnedOptions().map(_=>[_.id,_.label]))}),window.__snowbreakMigration={display:Te,adapter:ht,voices:Un,editor:Dc,presentation:Wn,manifest:r.manifest}}catch(o){if(n!==fi){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}Fc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),Cd("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),en({type:"error",message:String(o.message||o)})}}async function UM(i){if(i.type==="hardwareBudget"){let e=co.mode;if(co={thermal:i.thermal,lowPower:i.lowPower,...i.mode?{mode:i.mode}:{}},i.mode)try{localStorage.setItem("snowRenderMode",i.mode)}catch{}if(Te?.setRenderBudget(co),Te&&i.reloadOnTierChange&&e&&i.mode&&e!==i.mode){if(Xn?.selection?.id)return ea(null,Gr,Xn.selection.id);if(lo)return ea(lo,Gr)}return}if(i.type==="releaseMemory"){if(Un?.stop?.(),Te?.releaseCache?.(),i.reload){if(Xn?.selection?.id)return ea(null,Gr,Xn.selection.id);if(lo)return ea(lo,Gr)}return}if(i.type==="universalMotions"){if(Nd=i.catalog||null,Te){let e=Te.setUniversalMotions(Nd);en({type:"universalReady",learned:e.map(t=>t.id),learnedLabels:Object.fromEntries(e.map(t=>[t.id,t.label]))})}return}if(i.type==="arMode"){if(Nc=!!i.enabled,i.hideRoom!==void 0&&(Id=!!i.hideRoom),Te){let e=Te.setARMode(Nc,{hideRoom:Id});Dd(),en({type:"arState",...e})}return}if(i.type==="proportionMode"){if(Uc=i.mode==="chibi"?"chibi":"normal",Te){let e=Te.setProportionMode(Uc);en({type:"proportionState",...e})}return}if(i.type==="deferredFeedback"){Pd=!!i.enabled,Te?.sceneInteractions.setDeferredFeedback?.(Pd);return}if(i.type==="dispose"){fi++,Fc();return}if(i.type==="load")return ea(i.url,i.nonce);if(i.type==="variant")return Xn?.variants.some(e=>e.id===i.id)?ea(null,Gr,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(Ld=i.language==="ja"?"Japanese":"Chinese",ht){let e=ht.snapshot();ht.stop("voice-language-change"),Un?.setLanguage?.(Ld),e.sceneId?ht.enterScene(e.sceneId,e.sceneTime):ht.enterStandby()}return}if(ht){if(["body","gesture","sample","learned","stop"].includes(i.type)){Un?.stop?.();let e=Te.sceneInteractions.snapshot();if(i.automatic&&(Ii?.active||Wn?.active||e.active||e.recovering)){en({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}Ii?.close(),Wn?.close()}if(i.type==="body"){if(Nn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Te.sceneInteractions.available().includes(i.id)){Te.sceneInteractions.command(i.id),en({type:"selfState",state:na(),requestId:i.requestId});return}let e=fi;if(Et=null,ht.snapshot().sceneId||(ht.stop("body-command"),ht.enterStandby()),Te.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==fi)return;en({type:"selfState",state:na(),requestId:i.requestId});return}if(i.type==="gesture"){if(Nn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Et=null,ht.snapshot().sceneId||(ht.stop("ai-gesture"),ht.enterStandby()),Te.embodiment.playGesture(i.id,i.plan),en({type:"selfState",state:na()});return}if(i.type==="touchPolicy"){Sg=!!i.aiControlled;return}if(i.type==="danceSettings"){Wr.set(i);return}if(i.type==="danceEdit"){Wr.toggle();return}if(i.type==="speechLevel"){Te.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Te.setGaze(i.x,i.y);return}if(i.type==="pause"){if(Nn)return;Un?.stop?.(),Ii?.close(),Wr.close();let e=ht.snapshot();ta=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Te.sceneInteractions.suspend(),Te.embodiment.reset(),Te.resetSenses(),Et=null,Nn=!0,ho?.close(),Wn?.close(),di.dataset.snowbreakPaused="true",ht.stop("background"),ia();return}if(i.type==="resume"){if(!Nn)return;Nn=!1,di.dataset.snowbreakPaused="false",Lc=performance.now(),ta?(ht.enterScene(ta.id,ta.time),ta=null):ht.enterStandby();return}if(i.type==="stop"){if(Te.embodiment.reset(),Et){Et.stop=performance.now();return}ht.stop(),ht.enterStandby();return}if(i.type==="officialTouchPoints"){Te.sceneInteractions.togglePoints()||en({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){Et=null,Wn.close(),ji.classList.contains("open")||!Pi.hidden?ia():ji.classList.add("open");return}if(i.type==="lightingEdit"){Wn.close(),ia(),ho.toggle();return}if(i.type==="modelEdit"){Et=null,Wn.close(),Ii.toggle();return}if(i.type==="modelFrame"){Te.setModelFrame(i.frame);return}if(i.type==="frameEdit"){Et=null,Ii.close(),Wn.toggle();return}if(i.type==="scene")return Te.setSceneVisible(!!i.visible);if(i.type==="room")return Te.setRoomVisible(!!i.visible);if(i.type==="voice"){if(uo=!!i.enabled,!uo){Un?.stop?.();let e=ht.snapshot().sceneId;ht.stop("voice-disabled"),e?ht.enterScene(e):ht.enterStandby()}return}if(i.type==="sample"&&Te.sampleOptions().some(e=>e.id===i.id)){if(Te.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Te.sampleOptions().find(t=>t.id===i.id)?.persistentState){Et=null,Ii.close(),Te.embodiment.reset(),ht.enterScene(i.id),Te.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Te.sceneSelectionKey,i.id),Te.setupModelEditor(),en({type:"selfState",state:na()});return}if(ht.snapshot().sceneId){let t=i.id==="head"?Te.sceneInteractions.headReaction():null;await ht.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Te.embodiment.releaseHands(),Et=null,Wn.close(),Nn=!1,ht.stop(),ht.selectSample(i.id),ht.setStandbyAfterSample(!0),(i.withVoice&&Un.getAudio(i.id)?await ht.playWithVoice():ht.playSample()).accepted||en({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Te.embodiment.releaseHands();let e=Te.learnedOptions().find(t=>t.id===i.id);if(!e)return;Wn.close(),ht.stop("learned-motion"),ht.enterStandby(),Et={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Wr.get().tempo:1}}}}function na(){if(!Te)return null;let i=Te.embodiment.snapshot(),e=ht?.snapshot(),t=Te.sampleOptions().find(r=>r.id===Te.sampleState().sampleId),n=Te.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:Et?{id:Et.id,time:go(Et,performance.now()),rate:Et.rate,amplitude:Wr.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Xn?.selection?.outfit||"unknown",mode:Xn?.selection?.mode||"unknown"}}function DM(){if(!Te||Nn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(di.width,di.height);i.width=Math.round(di.width*e),i.height=Math.round(di.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Te.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:na,portrait:DM,performance:()=>Te?.performanceState(),arFrame:(i,e,t,n)=>Te?.setARFrame?.(i,e,t,n),receive:i=>{UM(i).catch(e=>en({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{fi++,Fc()});en({type:"pageReady"});})();
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
