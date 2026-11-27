(()=>{var Pg=Object.defineProperty;var Lg=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Ng=(i,e)=>{for(var t in e)Pg(i,t,{get:e[t],enumerable:!0})};var Lf={};Ng(Lf,{AsyncCompress:()=>Hg,AsyncDecompress:()=>Xg,AsyncDeflate:()=>_f,AsyncGunzip:()=>bf,AsyncGzip:()=>Hg,AsyncInflate:()=>du,AsyncUnzipInflate:()=>n0,AsyncUnzlib:()=>Sf,AsyncZipDeflate:()=>jg,AsyncZlib:()=>Gg,Compress:()=>Jc,DecodeUTF8:()=>Zg,Decompress:()=>nu,Deflate:()=>ei,EncodeUTF8:()=>Kg,FlateErrorCode:()=>kg,Gunzip:()=>Po,Gzip:()=>Jc,Inflate:()=>Pn,Unzip:()=>i0,UnzipInflate:()=>t0,UnzipPassThrough:()=>Pf,Unzlib:()=>No,Zip:()=>Jg,ZipDeflate:()=>$g,ZipPassThrough:()=>ga,Zlib:()=>eu,compress:()=>Vg,compressSync:()=>Qc,decompress:()=>qg,decompressSync:()=>Yg,deflate:()=>vf,deflateSync:()=>va,gunzip:()=>Mf,gunzipSync:()=>Lo,gzip:()=>Vg,gzipSync:()=>Qc,inflate:()=>fu,inflateSync:()=>ps,strFromU8:()=>mu,strToU8:()=>cr,unzip:()=>r0,unzipSync:()=>s0,unzlib:()=>wf,unzlibSync:()=>Uo,zip:()=>Qg,zipSync:()=>e0,zlib:()=>Wg,zlibSync:()=>tu});function Rr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function vf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[hs],function(n){return ur(va(n.data[0],n.data[1]))},0,t)}function va(i,e){return Ar(i,e||{},0,0)}function fu(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[us],function(n){return ur(ps(n.data[0],au(n.data[1])))},1,t)}function ps(i,e){return ya(i,{i:2},e&&e.out,e&&e.dictionary)}function Vg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[hs,pf,function(){return[Qc]}],function(n){return ur(Qc(n.data[0],n.data[1]))},2,t)}function Qc(i,e){e||(e={});var t=cs(),n=i.length;t.p(i);var r=Ar(i,e,cu(e),8),s=r.length;return ou(r,e),Et(r,s-8,t.d()),Et(r,s-4,n),r}function Mf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[us,mf,function(){return[Lo]}],function(n){return ur(Lo(n.data[0],n.data[1]))},3,t)}function Lo(i,e){var t=lu(i);return t+8>i.length&&nt(6,"invalid gzip data"),ya(i.subarray(t,-8),{i:2},e&&e.out||new ft(yf(i)),e&&e.dictionary)}function Wg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[hs,gf,function(){return[tu]}],function(n){return ur(tu(n.data[0],n.data[1]))},4,t)}function tu(i,e){e||(e={});var t=Fo();t.p(i);var n=Ar(i,e,e.dictionary?6:2,4);return uu(n,e),Et(n,n.length-4,t.d()),n}function wf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),ds(i,e,[us,xf,function(){return[Uo]}],function(n){return ur(Uo(n.data[0],au(n.data[1])))},5,t)}function Uo(i,e){return ya(i.subarray(hu(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function qg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&nt(7),i[0]==31&&i[1]==139&&i[2]==8?Mf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?fu(i,e,t):wf(i,e,t)}function Yg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?Lo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?ps(i,e):Uo(i,e)}function cr(i,e){if(e){for(var t=new ft(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Qd)return Qd.encode(i);for(var r=i.length,s=new ft(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new ft(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Qn(s,0,a)}function mu(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(iu)return iu.decode(i);var r=Tf(i),s=r.s,t=r.r;return t.length&&nt(8),s}}function Qg(i,e,t){t||(t=e,e={}),typeof t!="function"&&nt(7);var n={};pu(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],d=function(){for(var m=0;m<u.length;++m)u[m]()},h=function(m,p){Do(function(){t(m,p)})};Do(function(){h=t});var f=function(){var m=new ft(o+22),p=a,M=o-a;o=0;for(var b=0;b<c;++b){var x=l[b];try{var S=x.c.length;ss(m,o,x,x.f,x.u,S);var v=30+x.f.length+lr(x.extra),w=o+v;m.set(x.c,w),ss(m,a,x,x.f,x.u,S,o,x.m),a+=16+v+(x.m?x.m.length:0),o=w+S}catch(y){return h(y,null)}}gu(m,a,l.length,M,p),h(null,m)};s||f();for(var g=function(m){var p=r[m],M=n[p],b=M[0],x=M[1],S=cs(),v=b.length;S.p(b);var w=cr(p),y=w.length,T=x.comment,R=T&&cr(T),F=R&&R.length,I=lr(x.extra),B=x.level==0?0:8,U=function(O,C){if(O)d(),h(O,null);else{var N=C.length;l[m]=_a(x,{size:v,crc:S.d(),c:C,f:w,m:R,u:y!=p.length||R&&T.length!=F,compression:B}),a+=30+y+I+N,o+=76+2*(y+I)+(F||0)+N,--s||f()}};if(y>65535&&U(nt(11,0,1),null),!B)U(null,b);else if(v<16e4)try{U(null,va(b,x))}catch(O){U(O,null)}else u.push(vf(b,x,U))},_=0;_<c;++_)g(_);return d}function e0(i,e){e||(e={});var t={},n=[];pu(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,d=cr(a),h=d.length,f=l.comment,g=f&&cr(f),_=g&&g.length,m=lr(l.extra);h>65535&&nt(11);var p=u?va(c,l):c,M=p.length,b=cs();b.p(c),n.push(_a(l,{size:c.length,crc:b.d(),c:p,f:d,m:g,u:h!=a.length||g&&f.length!=_,o:r,compression:u})),r+=30+h+m+M,s+=76+2*(h+m)+(_||0)+M}for(var x=new ft(s+22),S=r,v=s-r,w=0;w<n.length;++w){var d=n[w];ss(x,d.o,d,d.f,d.u,d.c.length);var y=30+d.f.length+lr(d.extra);x.set(d.c,d.o+y),ss(x,r,d,d.f,d.u,d.c.length,d.o,d.m),r+=16+y+(d.m?d.m.length:0)}return gu(x,r,n.length,v,S),x}function r0(i,e,t){t||(t=e,e={}),typeof t!="function"&&nt(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,p){Do(function(){t(m,p)})};Do(function(){a=t});for(var o=i.length-22;Yt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(nt(13,0,1),null),r;var c=Sn(i,o+8);if(c){var l=c,u=Yt(i,o+16),d=u==4294967295||l==65535;if(d){var h=Yt(i,o-12);d=Yt(i,h)==101075792,d&&(l=c=Yt(i,h+32),u=Yt(i,h+48))}for(var f=e&&e.filter,g=function(m){var p=Cf(i,u,d),M=p[0],b=p[1],x=p[2],S=p[3],v=p[4],w=p[5],y=Rf(i,w);u=v;var T=function(F,I){F?(r(),a(F,null)):(I&&(s[S]=I),--c||a(null,s))};if(!f||f({name:S,size:b,originalSize:x,compression:M}))if(!M)T(null,Qn(i,y,y+b));else if(M==8){var R=i.subarray(y,y+b);if(x<524288||b>.8*x)try{T(null,ps(R,{out:new ft(x)}))}catch(F){T(F,null)}else n.push(fu(R,{size:x},T))}else T(nt(14,"unknown compression type "+M,1),null);else T(null,null)},_=0;_<l;++_)g(_)}else a(null,{});return r}function s0(i,e){for(var t={},n=i.length-22;Yt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&nt(13);var r=Sn(i,n+8);if(!r)return{};var s=Yt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Yt(i,n-12);a=Yt(i,o)==101075792,a&&(r=Yt(i,o+32),s=Yt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=Cf(i,s,a),d=u[0],h=u[1],f=u[2],g=u[3],_=u[4],m=u[5],p=Rf(i,m);s=_,(!c||c({name:g,size:h,originalSize:f,compression:d}))&&(d?d==8?t[g]=ps(i.subarray(p,p+h),{out:new ft(f)}):nt(14,"unknown compression type "+d):t[g]=Qn(i,p,p+h))}return t}var jd,Bg,ft,wn,xa,as,os,pa,ef,tf,ru,Co,nf,rf,Kc,ma,ki,Tt,Jn,zi,Tt,Tt,Tt,Tt,rs,Tt,sf,af,of,lf,To,jn,Ao,ls,Qn,kg,cf,nt,ya,bi,ns,Ro,Io,$c,is,su,jc,uf,or,hf,df,cs,Fo,Ar,_a,Jd,Eo,zg,ff,us,hs,pf,mf,gf,xf,ur,au,ds,ti,fs,Sn,Yt,Zc,Et,ou,lu,yf,cu,uu,hu,ei,_f,Pn,du,Jc,Hg,Po,bf,eu,Gg,No,Sf,nu,Xg,pu,Qd,iu,Ef,Tf,Zg,Kg,Af,Rf,Cf,If,lr,ss,gu,ga,$g,jg,Jg,Pf,t0,n0,i0,Do,Nf=Lg(()=>{jd={},Bg=(function(i,e,t,n,r){var s=new Worker(jd[e]||(jd[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),ft=Uint8Array,wn=Uint16Array,xa=Int32Array,as=new ft([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),os=new ft([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pa=new ft([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ef=function(i,e){for(var t=new wn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new xa(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},tf=ef(as,2),ru=tf.b,Co=tf.r;ru[28]=258,Co[258]=28;nf=ef(os,0),rf=nf.b,Kc=nf.r,ma=new wn(32768);for(Tt=0;Tt<32768;++Tt)ki=(Tt&43690)>>1|(Tt&21845)<<1,ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,ma[Tt]=((ki&65280)>>8|(ki&255)<<8)>>1;Jn=(function(i,e,t){for(var n=i.length,r=0,s=new wn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new wn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new wn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],d=a[i[r]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)o[ma[d]>>c]=l}else for(o=new wn(n),r=0;r<n;++r)i[r]&&(o[r]=ma[a[i[r]-1]++]>>15-i[r]);return o}),zi=new ft(288);for(Tt=0;Tt<144;++Tt)zi[Tt]=8;for(Tt=144;Tt<256;++Tt)zi[Tt]=9;for(Tt=256;Tt<280;++Tt)zi[Tt]=7;for(Tt=280;Tt<288;++Tt)zi[Tt]=8;rs=new ft(32);for(Tt=0;Tt<32;++Tt)rs[Tt]=5;sf=Jn(zi,9,0),af=Jn(zi,9,1),of=Jn(rs,5,0),lf=Jn(rs,5,1),To=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},jn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ao=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},ls=function(i){return(i+7)/8|0},Qn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ft(i.subarray(e,t))},kg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},cf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],nt=function(i,e,t){var n=new Error(e||cf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,nt),!t)throw n;return n},ya=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ft(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new ft(r*3));var l=function(ye){var ke=t.length;if(ye>ke){var ut=new ft(Math.max(ke*2,ye));ut.set(t),t=ut}},u=e.f||0,d=e.p||0,h=e.b||0,f=e.l,g=e.d,_=e.m,m=e.n,p=r*8;do{if(!f){u=jn(i,d,1);var M=jn(i,d+1,3);if(d+=3,M)if(M==1)f=af,g=lf,_=9,m=5;else if(M==2){var v=jn(i,d,31)+257,w=jn(i,d+10,15)+4,y=v+jn(i,d+5,31)+1;d+=14;for(var T=new ft(y),R=new ft(19),F=0;F<w;++F)R[pa[F]]=jn(i,d+F*3,7);d+=w*3;for(var I=To(R),B=(1<<I)-1,U=Jn(R,I,1),F=0;F<y;){var O=U[jn(i,d,B)];d+=O&15;var b=O>>4;if(b<16)T[F++]=b;else{var C=0,N=0;for(b==16?(N=3+jn(i,d,3),d+=2,C=T[F-1]):b==17?(N=3+jn(i,d,7),d+=3):b==18&&(N=11+jn(i,d,127),d+=7);N--;)T[F++]=C}}var X=T.subarray(0,v),P=T.subarray(v);_=To(X),m=To(P),f=Jn(X,_,1),g=Jn(P,m,1)}else nt(1);else{var b=ls(d)+4,x=i[b-4]|i[b-3]<<8,S=b+x;if(S>r){c&&nt(0);break}o&&l(h+x),t.set(i.subarray(b,S),h),e.b=h+=x,e.p=d=S*8,e.f=u;continue}if(d>p){c&&nt(0);break}}o&&l(h+131072);for(var H=(1<<_)-1,k=(1<<m)-1,ae=d;;ae=d){var C=f[Ao(i,d)&H],ce=C>>4;if(d+=C&15,d>p){c&&nt(0);break}if(C||nt(2),ce<256)t[h++]=ce;else if(ce==256){ae=d,f=null;break}else{var he=ce-254;if(ce>264){var F=ce-257,G=as[F];he=jn(i,d,(1<<G)-1)+ru[F],d+=G}var ue=g[Ao(i,d)&k],z=ue>>4;ue||nt(3),d+=ue&15;var P=rf[z];if(z>3){var G=os[z];P+=Ao(i,d)&(1<<G)-1,d+=G}if(d>p){c&&nt(0);break}o&&l(h+131072);var K=h+he;if(h<P){var _e=s-P,Fe=Math.min(P,K);for(_e+h<0&&nt(3);h<Fe;++h)t[h]=n[_e+h]}for(;h<K;++h)t[h]=t[h-P]}}e.l=f,e.p=ae,e.b=h,e.f=u,f&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return h!=t.length&&a?Qn(t,0,h):t.subarray(0,h)},bi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},ns=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Ro=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:or,l:0};if(r==1){var a=new ft(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,v){return S.f-v.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,d=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[d].f?l++:d++],c=t[l!=u&&t[l].f<t[d].f?l++:d++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var f=new wn(h+1),g=Io(t[u-1],f,0);if(g>e){var n=0,_=0,m=g-e,p=1<<m;for(s.sort(function(v,w){return f[w.s]-f[v.s]||v.f-w.f});n<r;++n){var M=s[n].s;if(f[M]>e)_+=p-(1<<g-f[M]),f[M]=e;else break}for(_>>=m;_>0;){var b=s[n].s;f[b]<e?_-=1<<e-f[b]++-1:++n}for(;n>=0&&_;--n){var x=s[n].s;f[x]==e&&(--f[x],++_)}g=e}return{t:new ft(f),l:g}},Io=function(i,e,t){return i.s==-1?Math.max(Io(i.l,e,t+1),Io(i.r,e,t+1)):e[i.s]=t},$c=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new wn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},is=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},su=function(i,e,t){var n=t.length,r=ls(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},jc=function(i,e,t,n,r,s,a,o,c,l,u){bi(e,u++,t),++r[256];for(var d=Ro(r,15),h=d.t,f=d.l,g=Ro(s,15),_=g.t,m=g.l,p=$c(h),M=p.c,b=p.n,x=$c(_),S=x.c,v=x.n,w=new wn(19),y=0;y<M.length;++y)++w[M[y]&31];for(var y=0;y<S.length;++y)++w[S[y]&31];for(var T=Ro(w,7),R=T.t,F=T.l,I=19;I>4&&!R[pa[I-1]];--I);var B=l+5<<3,U=is(r,zi)+is(s,rs)+a,O=is(r,h)+is(s,_)+a+14+3*I+is(w,R)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&B<=U&&B<=O)return su(e,u,i.subarray(c,c+l));var C,N,X,P;if(bi(e,u,1+(O<U)),u+=2,O<U){C=Jn(h,f,0),N=h,X=Jn(_,m,0),P=_;var H=Jn(R,F,0);bi(e,u,b-257),bi(e,u+5,v-1),bi(e,u+10,I-4),u+=14;for(var y=0;y<I;++y)bi(e,u+3*y,R[pa[y]]);u+=3*I;for(var k=[M,S],ae=0;ae<2;++ae)for(var ce=k[ae],y=0;y<ce.length;++y){var he=ce[y]&31;bi(e,u,H[he]),u+=R[he],he>15&&(bi(e,u,ce[y]>>5&127),u+=ce[y]>>12)}}else C=sf,N=zi,X=of,P=rs;for(var y=0;y<o;++y){var G=n[y];if(G>255){var he=G>>18&31;ns(e,u,C[he+257]),u+=N[he+257],he>7&&(bi(e,u,G>>23&31),u+=as[he]);var ue=G&31;ns(e,u,X[ue]),u+=P[ue],ue>3&&(ns(e,u,G>>5&8191),u+=os[ue])}else ns(e,u,C[G]),u+=N[G]}return ns(e,u,C[256]),u+N[256]},uf=new xa([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),or=new ft(0),hf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ft(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var d=uf[e-1],h=d>>13,f=d&8191,g=(1<<t)-1,_=s.p||new wn(32768),m=s.h||new wn(g+1),p=Math.ceil(t/3),M=2*p,b=function(be){return(i[be]^i[be+1]<<p^i[be+2]<<M)&g},x=new xa(25e3),S=new wn(288),v=new wn(32),w=0,y=0,T=s.i||0,R=0,F=s.w||0,I=0;T+2<a;++T){var B=b(T),U=T&32767,O=m[B];if(_[U]=O,m[B]=U,F<=T){var C=a-T;if((w>7e3||R>24576)&&(C>423||!l)){u=jc(i,c,0,x,S,v,y,R,I,T-I,u),R=w=y=0,I=T;for(var N=0;N<286;++N)S[N]=0;for(var N=0;N<30;++N)v[N]=0}var X=2,P=0,H=f,k=U-O&32767;if(C>2&&B==b(T-k))for(var ae=Math.min(h,C)-1,ce=Math.min(32767,T),he=Math.min(258,C);k<=ce&&--H&&U!=O;){if(i[T+X]==i[T+X-k]){for(var G=0;G<he&&i[T+G]==i[T+G-k];++G);if(G>X){if(X=G,P=k,G>ae)break;for(var ue=Math.min(k,G-2),z=0,N=0;N<ue;++N){var K=T-k+N&32767,_e=_[K],Fe=K-_e&32767;Fe>z&&(z=Fe,O=K)}}}U=O,O=_[U],k+=U-O&32767}if(P){x[R++]=268435456|Co[X]<<18|Kc[P];var ye=Co[X]&31,ke=Kc[P]&31;y+=as[ye]+os[ke],++S[257+ye],++v[ke],F=T+X,++w}else x[R++]=i[T],++S[i[T]]}}for(T=Math.max(T,F);T<a;++T)x[R++]=i[T],++S[i[T]];u=jc(i,c,l,x,S,v,y,R,I,T-I,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=_,s.i=T,s.w=F)}else{for(var T=s.w||0;T<a+l;T+=65535){var ut=T+65535;ut>=a&&(c[u/8|0]=l,ut=a),u=su(c,u+1,i.subarray(T,ut))}s.i=a}return Qn(o,0,n+ls(u)+r)},df=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),cs=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=df[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Fo=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},Ar=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ft(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return hf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},_a=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Jd=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var d in o.prototype)e+=";"+c+".prototype."+d+"="+o.prototype[d].toString()}else e+=l}else t[c]=o}return e},Eo=[],zg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},ff=function(i,e,t,n){if(!Eo[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Jd(i[o],r,s);Eo[t]={c:Jd(i[a],r,s),e:s}}var c=_a({},Eo[t].e);return Bg(Eo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,zg(c),n)},us=function(){return[ft,wn,xa,as,os,pa,ru,rf,af,lf,ma,cf,Jn,To,jn,Ao,ls,Qn,nt,ya,ps,ur,au]},hs=function(){return[ft,wn,xa,as,os,pa,Co,Kc,sf,zi,of,rs,ma,uf,or,Jn,bi,ns,Ro,Io,$c,is,su,jc,ls,Qn,hf,Ar,va,ur]},pf=function(){return[ou,cu,Et,cs,df]},mf=function(){return[lu,yf]},gf=function(){return[uu,Et,Fo]},xf=function(){return[hu]},ur=function(i){return postMessage(i,[i.buffer])},au=function(i){return i&&{out:i.size&&new ft(i.size),dictionary:i.dictionary}},ds=function(i,e,t,n,r,s){var a=ff(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},ti=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},fs=function(i,e,t,n,r,s,a){var o,c=ff(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||nt(5),o&&e.ondata(nt(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},Sn=function(i,e){return i[e]|i[e+1]<<8},Yt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Zc=function(i,e){return Yt(i,e)+Yt(i,e+4)*4294967296},Et=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},ou=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&Et(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},lu=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&nt(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},yf=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},cu=function(i){return 10+(i.filename?i.filename.length+1:0)},uu=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=Fo();r.p(e.dictionary),Et(i,2,r.d())}},hu=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&nt(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&nt(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};ei=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ft(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(Ar(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||nt(5),this.s.l&&nt(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ft(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||nt(5),this.s.l&&nt(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),_f=(function(){function i(e,t){fs([hs,function(){return[ti,ei]}],this,Rr.call(this,e,t),function(n){var r=new ei(n.data);onmessage=ti(r)},6,1)}return i})();Pn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ft(32768),this.p=new ft(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||nt(5),this.d&&nt(4),!this.p.length)this.p=e;else if(e.length){var t=new ft(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=ya(this.p,this.s,this.o);this.ondata(Qn(n,t,this.s.b),this.d),this.o=Qn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Qn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),du=(function(){function i(e,t){fs([us,function(){return[ti,Pn]}],this,Rr.call(this,e,t),function(n){var r=new Pn(n.data);onmessage=ti(r)},7,0)}return i})();Jc=(function(){function i(e,t){this.c=cs(),this.l=0,this.v=1,ei.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,ei.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=Ar(e,this.o,this.v&&cu(this.o),t&&8,this.s);this.v&&(ou(n,this.o),this.v=0),t&&(Et(n,n.length-8,this.c.d()),Et(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){ei.prototype.flush.call(this)},i})(),Hg=(function(){function i(e,t){fs([hs,pf,function(){return[ti,ei,Jc]}],this,Rr.call(this,e,t),function(n){var r=new Jc(n.data);onmessage=ti(r)},8,1)}return i})();Po=(function(){function i(e,t){this.v=1,this.r=0,Pn.call(this,e,t)}return i.prototype.push=function(e,t){if(Pn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?lu(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}Pn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=ls(this.s.p)+9,this.s={i:0},this.o=new ft(0),this.push(new ft(0),t))},i})(),bf=(function(){function i(e,t){var n=this;fs([us,mf,function(){return[ti,Pn,Po]}],this,Rr.call(this,e,t),function(r){var s=new Po(r.data);s.onmember=function(a){return postMessage(a)},onmessage=ti(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();eu=(function(){function i(e,t){this.c=Fo(),this.v=1,ei.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),ei.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=Ar(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(uu(n,this.o),this.v=0),t&&Et(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){ei.prototype.flush.call(this)},i})(),Gg=(function(){function i(e,t){fs([hs,gf,function(){return[ti,ei,eu]}],this,Rr.call(this,e,t),function(n){var r=new eu(n.data);onmessage=ti(r)},10,1)}return i})();No=(function(){function i(e,t){Pn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(Pn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(hu(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&nt(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),Pn.prototype.c.call(this,t)},i})(),Sf=(function(){function i(e,t){fs([us,xf,function(){return[ti,Pn,No]}],this,Rr.call(this,e,t),function(n){var r=new No(n.data);onmessage=ti(r)},11,0)}return i})();nu=(function(){function i(e,t){this.o=Rr.call(this,e,t)||{},this.G=Po,this.I=Pn,this.Z=No}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||nt(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ft(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),Xg=(function(){function i(e,t){nu.call(this,e,t),this.queuedSize=0,this.G=bf,this.I=du,this.Z=Sf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,nu.prototype.push.call(this,e,t)},i})();pu=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=_a(n,s[1]),s=s[0]),s instanceof ft?t[a]=[s,o]:(t[a+="/"]=[new ft(0),o],pu(s,a,t,n))}},Qd=typeof TextEncoder<"u"&&new TextEncoder,iu=typeof TextDecoder<"u"&&new TextDecoder,Ef=0;try{iu.decode(or,{stream:!0}),Ef=1}catch{}Tf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Qn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Zg=(function(){function i(e){this.ondata=e,Ef?this.t=new TextDecoder:this.p=or}return i.prototype.push=function(e,t){if(this.ondata||nt(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&nt(8),this.t=null);return}this.p||nt(4);var n=new ft(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=Tf(n),s=r.s,a=r.r;t?(a.length&&nt(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),Kg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||nt(5),this.d&&nt(4),this.ondata(cr(e),this.d=t||!1)},i})();Af=function(i){return i==1?3:i<6?2:i==9?1:0},Rf=function(i,e){return e+30+Sn(i,e+26)+Sn(i,e+28)},Cf=function(i,e,t){var n=Sn(i,e+28),r=mu(i.subarray(e+46,e+46+n),!(Sn(i,e+8)&2048)),s=e+46+n,a=Yt(i,e+20),o=t&&a==4294967295?If(i,s):[a,Yt(i,e+24),Yt(i,e+42)],c=o[0],l=o[1],u=o[2];return[Sn(i,e+10),c,l,r,s+Sn(i,e+30)+Sn(i,e+32),u]},If=function(i,e){for(;Sn(i,e)!=1;e+=4+Sn(i,e+2));return[Zc(i,e+12),Zc(i,e+4),Zc(i,e+20)]},lr=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&nt(9),e+=n+4}return e},ss=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,d=lr(l);Et(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),f=h.getFullYear()-1980;if((f<0||f>119)&&nt(10),Et(i,e,f<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,s!=-1&&(Et(i,e,t.crc),Et(i,e+4,s<0?-s-2:s),Et(i,e+8,t.size)),Et(i,e+12,c),Et(i,e+14,d),e+=16,a!=null&&(Et(i,e,u),Et(i,e+6,t.attrs),Et(i,e+10,a),e+=14),i.set(n,e),e+=c,d)for(var g in l){var _=l[g],m=_.length;Et(i,e,+g),Et(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},gu=function(i,e,t,n,r){Et(i,e,101010256),Et(i,e+8,t),Et(i,e+10,t),Et(i,e+12,n),Et(i,e+16,r)},ga=(function(){function i(e){this.filename=e,this.c=cs(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||nt(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),$g=(function(){function i(e,t){var n=this;t||(t={}),ga.call(this,e),this.d=new ei(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Af(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ga.prototype.push.call(this,e,t)},i})(),jg=(function(){function i(e,t){var n=this;t||(t={}),ga.call(this,e),this.d=new _f(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=Af(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ga.prototype.push.call(this,e,t)},i})(),Jg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||nt(5),this.d&2)this.ondata(nt(4+(this.d&1)*8,0,1),null,!1);else{var n=cr(e.filename),r=n.length,s=e.comment,a=s&&cr(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+lr(e.extra)+30;r>65535&&this.ondata(nt(11,0,1),null,!1);var l=new ft(c);ss(l,0,e,n,o,-1);var u=[l],d=function(){for(var m=0,p=u;m<p.length;m++){var M=p[m];t.ondata(null,M,!1)}u=[]},h=this.d;this.d=0;var f=this.u.length,g=_a(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(d(),h){var m=t.u[f+1];m?m.r():t.d=1}h=1}}),_=0;e.ondata=function(m,p,M){if(m)t.ondata(m,p,M),t.terminate();else if(_+=p.length,u.push(p),M){var b=new ft(16);Et(b,0,134695760),Et(b,4,e.crc),Et(b,8,_),Et(b,12,e.size),u.push(b),g.c=_,g.b=c+_+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&d()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(nt(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+lr(a.extra)+(a.o?a.o.length:0)}for(var o=new ft(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];ss(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+lr(a.extra)+(a.o?a.o.length:0),t+=a.b}gu(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();Pf=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),t0=(function(){function i(){var e=this;this.i=new Pn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),n0=(function(){function i(e,t){var n=this;t<32e4?this.i=new Pn(function(r,s){n.ondata(null,r,s)}):(this.i=new du(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Qn(e,0)),this.i.push(e,t)},i.compression=8,i})(),i0=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:Pf},this.p=or}return i.prototype.push=function(e,t){var n=this;if(this.onfile||nt(5),this.p||nt(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ft(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,d=this.c,h=d&&this.d,f=function(){var p,M=Yt(l,o);if(M==67324752){a=1,c=o,g.d=null,g.c=0;var b=Sn(l,o+6),x=Sn(l,o+8),S=b&2048,v=b&8,w=Sn(l,o+26),y=Sn(l,o+28);if(u>o+30+w+y){var T=[];g.k.unshift(T),a=2;var R=Yt(l,o+18),F=Yt(l,o+22),I=mu(l.subarray(o+30,o+=30+w),!S);R==4294967295?(p=v?[-2]:If(l,o),R=p[0],F=p[1]):v&&(R=-1),o+=y,g.c=R;var B,U={name:I,compression:x,start:function(){if(U.ondata||nt(5),!R)U.ondata(null,or,!0);else{var O=n.o[x];O||U.ondata(nt(14,"unknown compression type "+x,1),null,!1),B=R<0?new O(I):new O(I,R,F),B.ondata=function(P,H,k){U.ondata(P,H,k)};for(var C=0,N=T;C<N.length;C++){var X=N[C];B.push(X,!1)}n.k[0]==T&&n.c?n.d=B:B.push(or,!0)}},terminate:function(){B&&B.terminate&&B.terminate()}};R>=0&&(U.size=R,U.originalSize=F),g.onfile(U)}return"break"}else if(d){if(M==134695760)return c=o+=12+(d==-2&&8),a=3,g.c=0,"break";if(M==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var _=f();if(_==="break")break}if(this.p=or,d<0){var m=a?l.subarray(0,c-12-(d==-2&&8)-(Yt(l,c-16)==134695760&&4)):l.subarray(0,o);h?h.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&nt(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),Do=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function So(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function Vd(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=So(i,t),i.start=t,i.rate=e)}function Gd(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,d,h){return Number.isFinite(l)?Math.max(u,Math.min(d,l)):h}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let d of Object.keys(r))r[d].input.value=t[d],r[d].output.textContent=t[d].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[d,h,f,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let _=document.createElement("label"),m=document.createElement("span"),p=document.createElement("output"),M=document.createElement("input");m.textContent=h+" ",p.textContent=t[d].toFixed(2)+"\xD7",M.type="range",M.min=f,M.max=g,M.step=.05,M.value=t[d],M.style.cssText="display:block;width:100%;margin:14px 0",M.setAttribute("aria-label",h),M.oninput=()=>a({...t,[d]:Number(M.value)}),_.append(m,p,M),n.append(_),r[d]={input:M,output:p}}for(let[d,h]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let f=document.createElement("button");f.textContent=d,f.onclick=h,n.append(f)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function Wd(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function c(){let p=i.lightingState();for(let[M,b]of r)b.value=p[M];a&&(a.checked=p.shadows),o&&(o.value=p.shadowSize)}function l(p){i.setLighting(p),localStorage.setItem(e,JSON.stringify(i.lightingState())),c()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[p,M,b,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let S=document.createElement("label");S.textContent=M;let v=document.createElement("input");v.id="lighting_"+p,v.type="range",v.min=b,v.max=x,v.step=".01",v.style.width="100%",v.oninput=()=>l({[p]:Number(v.value)}),r.set(p,v),S.append(v),t.append(S)}for(let[p,M]of[["\u6062\u590D\u67D4\u5149",()=>l(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let b=document.createElement("button");b.textContent=p,b.onclick=M,t.append(b)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>l({shadows:a.checked}),u.append(a),t.append(u);let d=document.createElement("label");d.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");h.id="lighting_resolution",h.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),d.append(h),t.append(d),o=document.createElement("select"),o.id="lighting_shadowSize";for(let p of[512,1024,2048])o.add(new Option(p+" \xB7 \u9634\u5F71",String(p)));o.value=i.lightingState().shadowSize,o.onchange=()=>l({shadowSize:Number(o.value)}),t.append(o);let f=document.createElement("select");f.id="renderBudget";for(let[p,M]of[["quality","\u6027\u80FD\u6A21\u5F0F \xB7 60\u5E27\u6EE1\u753B\u8D28 / 1G\u663E\u5B58"],["adaptive","\u666E\u901A\u6A21\u5F0F \xB7 \u667A\u80FD\u5E73\u8861 / 512M\u663E\u5B58"],["battery","\u7701\u7535\u6A21\u5F0F \xB7 30\u5E27\u4F4E\u8017 / 192M\u663E\u5B58"]])f.add(new Option(M,p));f.value=i.performanceState().mode,f.onchange=()=>{localStorage.setItem("snowRenderMode",f.value),i.setRenderBudget({mode:f.value})},t.append(f);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let _=()=>{let p=i.performanceState(),M=i.textureBudgetState?.(),b=p.mode==="quality"?"\u6027\u80FD\u6A21\u5F0F":p.mode==="battery"?"\u7701\u7535\u6A21\u5F0F":"\u666E\u901A\u6A21\u5F0F";g.textContent=`GPU \u6E32\u67D3 \xB7 ${b} \xB7 ${p.fps}\u5E27\uFF08\u76EE\u6807${p.targetFPS}\uFF09
\u7F13\u51B2 ${p.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${p.pixelRatio.toFixed(2)}
\u8D34\u56FE\u9884\u7B97 ${M?`${M.estimatedMiB}/${M.budgetMiB} MiB`:"\u2014"} \xB7 \u9634\u5F71 ${i.lightingState().shadowMapSize}px
\u7ED8\u5236 ${p.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${p.triangles}
\u70ED\u72B6\u6001 ${p.thermal} \xB7 ${p.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}`},m=setInterval(()=>{t.hidden||_()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),c(),{toggle(){t.hidden=!t.hidden,_()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function Xd(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var Ug=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),vi=(i,e)=>i>>>e|i<<32-e;function Dg(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let p=t[m-15],M=t[m-2];t[m]=(vi(p,7)^vi(p,18)^p>>>3)+t[m-16]+(vi(M,17)^vi(M,19)^M>>>10)+t[m-7]}let[o,c,l,u,d,h,f,g]=e;for(let m=0;m<64;m++){let p=g+(vi(d,6)^vi(d,11)^vi(d,25))+(d&h^~d&f)+Ug[m]+t[m]>>>0,M=(vi(o,2)^vi(o,13)^vi(o,22))+(o&c^o&l^c&l)>>>0;g=f,f=h,h=d,d=u+p>>>0,u=l,l=c,c=o,o=p+M>>>0}let _=[o,c,l,u,d,h,f,g];for(let m=0;m<8;m++)e[m]+=_[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function Wc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):Dg(i)}var ts={entries:1024,file:128*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},qd=new TextDecoder("utf-8",{fatal:!0});function Yd(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=ts.archive,n=ts.total){if(![ts.total,192*1024*1024,384*1024*1024,1536*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![ts.archive,128*1024*1024,256*1024*1024,1024*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let f=i.length-22;f>=Math.max(0,i.length-65557);f--)if(r.getUint32(f,!0)===101010256&&f+22+r.getUint16(f+20,!0)===i.length){s=f;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>ts.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=new Map,d=o,h=0;for(let f=0;f<a;f++){if(d+46>s||r.getUint32(d,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let g=r.getUint16(d+8,!0),_=r.getUint16(d+10,!0),m=r.getUint16(d+28,!0),p=r.getUint16(d+30,!0),M=r.getUint16(d+32,!0),b=r.getUint32(d+24,!0);if(d+46+m+p+M>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let x=qd.decode(i.subarray(d+46,d+46+m));if(!Xd(x)||l.has(x)||!e.test(x))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(x),h+=b;let S=r.getUint32(d+38,!0)>>>16;if(g&1||![0,8].includes(_)||(S&61440)===40960||b>ts.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(x==="manifest.json"&&b>1024*1024)throw new Error("manifest \u8FC7\u5927");let v=r.getUint32(d+42,!0);if(v+30>o||r.getUint32(v,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let w=r.getUint16(v+26,!0),y=r.getUint16(v+28,!0),T=r.getUint32(d+20,!0);if(v+30+w+y+T>o||qd.decode(i.subarray(v+30,v+30+w))!==x)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u.set(x,{offset:v+30+w+y,compressed:T,original:b,method:_}),d+=46+m+p+M}if(d!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h,entries:u}}var Xc=/^[a-zA-Z0-9_-]{1,96}$/,Fg=/^[a-f0-9]{64}$/,Og=new Set(["geometry","animation","texture","audio","config"]);function wo(i){if(i?.schema!=="snowbreak-skin/1"||!Xc.test(i.characterId)||!Xc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Xc.test(n.role)||e.has(n.role)||!Fg.test(n.assetId)||!Og.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function qc({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let d=await Promise.allSettled(u.map(({asset:h,descriptor:f})=>Promise.resolve().then(()=>e(h,f))));for(let h of d)if(h.status==="rejected")try{t(h.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let d=wo(u),h=++n;s?.abort();let f=new AbortController;s=f;let g=await Promise.allSettled(d.resources.map(M=>Promise.resolve().then(()=>i(M,{signal:f.signal})))),_=g.flatMap((M,b)=>M.status==="fulfilled"?[{asset:M.value,descriptor:d.resources[b]}]:[]),m=g.find(M=>M.status==="rejected");if(h!==n||a||m){if(await o(_),h===n&&(s=null),h!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let p=r;return r={manifest:d,resources:_},s=null,p&&await o(p.resources),h!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:d.characterId,skinId:d.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(d=>d.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Zd(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let d=h=>i[h]|i[h+1]<<8|i[h+2]<<16;a=[d(u+4)+1,d(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let d=e.getUint32(u+1,!0);if(d>>>29)throw new Error("Unknown WebP version");s=[(d&16383)+1,(d>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Kd(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var $d={geometry:64,animation:64,texture:32,audio:16,config:8};function Yc(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn($d,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>$d[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await Wc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Zd(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Kd(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}function Uf(i,e){let t=null;if(i.schema==="snowbreak-collection/1"||i.schema==="snowbreak-chibi-collection/1"){let s=i.schema==="snowbreak-chibi-collection/1";if(!/^[A-Za-z0-9_-]{1,64}$/.test(i.characterId)||!Array.isArray(i.variants)||(s?i.variants.length<1||i.variants.length>16:![1,2,4].includes(i.variants.length)))throw new Error("Invalid character collection");let a=new Set;if(t=i.variants.map(o=>{let c=s?/^[a-z0-9_]{1,32}$/.test(o.outfit):["normal","nude","underwear","lv2"].includes(o.outfit);if(!(s?o.mode==="standing":["standing","interaction"].includes(o.mode))||!c||o.id!==o.mode+"_"+o.outfit||a.has(o.id))throw new Error("Invalid collection variant");return a.add(o.id),{...o,manifest:wo(o.manifest)}}),!a.has(i.defaultVariant)||t.some(o=>o.manifest.characterId!==i.characterId))throw new Error("Invalid collection default")}let n=t?t.map(s=>s.manifest):[wo(i)],r=new Set(["manifest.json",...n.flatMap(s=>s.resources.map(a=>"assets/"+a.assetId))]);if(r.size!==e.size||[...r].some(s=>!e.has(s)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");return{variants:t,manifests:n}}async function Df(i){let e=await fetch("companion-snowbreak://local/pkg-index/"+encodeURIComponent(i));if(!e.ok)throw new Error("\u6D41\u5F0F\u89D2\u8272\u5305\u7D22\u5F15\u8BFB\u53D6\u5931\u8D25");let t=await e.json();if(!Array.isArray(t.names)||!t.manifest||typeof t.total!="number"||t.total>1536*1024*1024)throw new Error("\u89D2\u8272\u5305\u7D22\u5F15\u683C\u5F0F\u6216\u5927\u5C0F\u975E\u6CD5");let n=t.manifest,{variants:r,manifests:s}=Uf(n,new Set(t.names));async function a(l){let u=await fetch("companion-snowbreak://local/pkg-entry/"+encodeURIComponent(i)+"/"+l);if(!u.ok)throw new Error("\u8D44\u6E90\u8BFB\u53D6\u5931\u8D25\uFF1A"+l.slice(0,12));return new Uint8Array(await u.arrayBuffer())}async function o(l){let u=r?.find(f=>f.id===l);if(r&&!u)throw new Error("Variant unavailable");let d=u?.manifest||s[0],h=qc(Yc(a));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit,...u.label?{label:u.label}:{}}:null,variants:r?.map(({id:f,mode:g,outfit:_,label:m})=>({id:f,mode:g,outfit:_,...m?{label:m}:{}}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(n.characterId.toLowerCase()+"-collection-selection")}catch{}return o(r?.some(l=>l.id===c)?c:n.defaultVariant)}async function Ff(i){let e=Yd(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,1073741824,1610612736),{inflateSync:t}=await Promise.resolve().then(()=>(Nf(),Lf));function n(l){let u=e.entries.get(l);if(!u)throw new Error("\u7F3A\u5C11\u8D44\u6E90\uFF1A"+l);let d=i.subarray(u.offset,u.offset+u.compressed),h=u.method===0?d.slice():t(d);if(h.length!==u.original)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");return h}let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n("manifest.json"))),{variants:s,manifests:a}=Uf(r,e.names);async function o(l){let u=s?.find(f=>f.id===l);if(s&&!u)throw new Error("Variant unavailable");let d=u?.manifest||a[0],h=qc(Yc(async f=>n("assets/"+f)));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit,...u.label?{label:u.label}:{}}:null,variants:s?.map(({id:f,mode:g,outfit:_,label:m})=>({id:f,mode:g,outfit:_,...m?{label:m}:{}}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return o(s?.some(l=>l.id===c)?c:r.defaultVariant)}function Of(i,e,t=4096,n=null){let r=n==="quality"||n==="performance",s=n==="battery"||n==="powersave",a=s||t===2048?2048:4096,c=(r?1024:s?192:n==="adaptive"||n==="balanced"?512:e.current.characterId==="Fenny"?256:320)*(a===2048&&!s?.5:1)*1024**2,l=new Map,u=r?4096:s?512:1024,d=r?2048:s?512:1024;for(let _ of i?.materials||[])if(_.renderState?.opacity!==0)for(let[m,p]of[["diffuseAssetId",!1],["normalAssetId",!0],["ormAssetId",!0],["hairHighlightAssetId",!0],["faceShadowAssetId",!0]]){let M=_[m];if(!M)continue;let b=(p?"normal:":"")+M,x=e.getAsset("texture_"+M)?.data;if(!x||![x.width,x.height].every(T=>Number.isInteger(T)&&T>0&&T<=4096))throw new Error("Missing texture dimensions");let S=/^(ma_|house_)/i.test(_.name),v=p?10:S?r?150:5:/head|face|eye/i.test(_.name)?1e3:/body00/i.test(_.name)?500:/body01/i.test(_.name)?400:/hair/i.test(_.name)?120:60,w=Math.min(a,p?u:S?d:4096),y=l.get(b);if(y){y.priority=Math.max(y.priority,v),y.cap=Math.max(y.cap,w);continue}l.set(b,{key:b,id:M,normal:p,width:x.width,height:x.height,cap:w,priority:v})}function h(_){let m=Math.min(1,_.cap/Math.max(_.width,_.height));return[Math.max(1,Math.round(_.width*m)),Math.max(1,Math.round(_.height*m))]}let f=_=>{let[m,p]=h(_);return m*p*4*4/3},g=()=>[...l.values()].reduce((_,m)=>_+f(m),0);for(;g()>c;){let _=[...l.values()].filter(m=>m.cap>512&&Math.max(m.width,m.height)>512).map(m=>({e:m,saving:f(m)-f({...m,cap:m.cap/2})})).filter(m=>m.saving>0).sort((m,p)=>m.e.priority/m.saving-p.e.priority/p.saving);if(!_.length)throw new Error("Texture memory budget exceeded");_[0].e.cap/=2}return{limitFor:(_,m=!1)=>l.get((m?"normal:":"")+_)?.cap||1024,snapshot:()=>({requestedLimit:a,budgetMiB:c/1024**2,estimatedMiB:Math.round(g()/1024**2*10)/10,textures:[...l.values()].map(_=>({id:_.id,normal:_.normal,source:[_.width,_.height],size:h(_)}))})}}var a0={performance:"quality",balanced:"adaptive",powersave:"battery"};function o0(i){return a0[i]||(["adaptive","quality","battery"].includes(i)?i:"adaptive")}function Bf({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,c=0,l=0,u=0,d=0,h=0,f=0,g=()=>e==="quality"?t==="critical"?30:60:e==="battery"?t==="critical"?20:30:t==="critical"?20:n||t==="serious"?30:60;function _(b,x,S){let v=e==="quality"?9e6:e==="battery"?14e5:45e5,w=e==="quality"?t==="critical"?3e6:v:t==="critical"?12e5:t==="serious"?22e5:v,y=e==="quality"?1:r;return Math.max(.5,Math.min(S||1,3,Math.sqrt(w/Math.max(1,b*x)))*y)}function m(b={}){return b.mode&&(e=o0(b.mode),e==="quality"&&(r=1)),b.thermal&&["nominal","fair","serious","critical"].includes(b.thermal)&&(t=b.thermal),typeof b.lowPower=="boolean"&&(n=b.lowPower),s=0,a=0,o=0,d=h=0,M()}function p(b=i()){let x=1e3/g();return s&&b-s<x-.75?!1:(s&&b-s<1e3&&(c+=b-s,l++),s=b,o++,a||(a=b),b-a>=2e3&&(u=o*1e3/(b-a),e==="adaptive"&&(d=u<g()*.78?d+1:0,h=u>g()*.94?h+1:0,d>=2&&r>.65?(r=Math.max(.65,r-.1),d=0,f++):h>=4&&r<1&&(r=Math.min(1,r+.05),h=0,f++)),a=b,o=0),!0)}function M(){return{mode:e,thermal:t,lowPower:n,targetFPS:g(),fps:Math.round(u*10)/10,meanFrameMs:l?Math.round(c/l*10)/10:0,scale:r,changes:f}}return{begin:p,configure:m,ratio:_,snapshot:M,resetClock(){s=0,a=0,o=0}}}var wp=0,eh=1,Ep=2;var ja=1,Ol=2,Ks=3,Un=0,Cn=1,pn=2,Li=0,$s=1,th=2,nh=3,ih=4,Tp=5;var Hr=100,Ap=101,Rp=102,Cp=103,Ip=104,Pp=200,Lp=201,Np=202,Up=203,rh=204,sh=205,Dp=206,Fp=207,Op=208,Bp=209,kp=210,zp=211,Hp=212,Vp=213,Gp=214,hl=0,dl=1,fl=2,Is=3,pl=4,ml=5,gl=6,xl=7,ah=0,Wp=1,Xp=2,Gn=0,oh=1,lh=2,ch=3,Ja=4,uh=5,hh=6,dh=7,Hu="attached",qp="detached",fh=300,_r=301,Vr=302,Bl=303,kl=304,Qa=306,Vn=1e3,ii=1001,Ps=1002,Kt=1003,zl=1004;var Gr=1005;var Ft=1006,js=1007;var pi=1008;var _n=1009,ph=1010,mh=1011,Js=1012,Hl=1013,mi=1014,Wn=1015,Xn=1016,Vl=1017,Gl=1018,Qs=1020,gh=35902,xh=35899,yh=1021,_h=1022,vn=1023,Ei=1026,vr=1027,Wl=1028,Xl=1029,br=1030,ql=1031;var Yl=1033,eo=33776,to=33777,no=33778,io=33779,Zl=35840,Kl=35841,$l=35842,jl=35843,Jl=36196,Ql=37492,ec=37496,tc=37488,nc=37489,ro=37490,ic=37491,rc=37808,sc=37809,ac=37810,oc=37811,lc=37812,cc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,yc=36492,_c=36494,vc=36495,bc=36283,Mc=36284,so=36285,Sc=36286;var Ur=2300,Dr=2301,ll=2302,Vu=2303,Gu=2400,Wu=2401,Xu=2402,Yp=2500;var vh=0,ao=1,ea=2,Zp=3200;var wc=0,Kp=1,qn="",Vt="srgb",An="srgb-linear",Pa="linear",Ct="srgb";var cl=7680;var $p=519,jp=512,Jp=513,Qp=514,Ec=515,em=516,tm=517,Tc=518,nm=519,bh=35044,Mh=35048;var Sh="300 es",hi=2e3,Ls=2001;function l0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function c0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function im(){let i=Ns("canvas");return i.style.display="block",i}var kf={},Us=null;function La(...i){let e="THREE."+i.shift();Us?Us("log",e,...i):console.log(e,...i)}function rm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=rm(i);let e="THREE."+i.shift();if(Us)Us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=rm(i);let e="THREE."+i.shift();if(Us)Us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Nr(...i){let e=i.join(" ");e in kf||(kf[e]=!0,it(...i))}function sm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var am={[hl]:dl,[fl]:gl,[pl]:xl,[Is]:ml,[dl]:hl,[gl]:fl,[xl]:pl,[ml]:Is},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=1234567,Ca=Math.PI/180,Fr=180/Math.PI;function di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function wh(i,e){return(i%e+e)%e}function u0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function h0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function d0(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function f0(i,e=1){return e-Math.abs(wh(i,e*2)-e)}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function m0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function g0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function x0(i,e){return i+Math.random()*(e-i)}function y0(i){return i*(.5-Math.random())}function _0(i){i!==void 0&&(zf=i);let e=zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(i){return i*Ca}function b0(i){return i*Fr}function M0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function S0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function E0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var we={DEG2RAD:Ca,RAD2DEG:Fr,generateUUID:di,clamp:yt,euclideanModulo:wh,mapLinear:u0,inverseLerp:h0,lerp:Ia,damp:d0,pingpong:f0,smoothstep:p0,smootherstep:m0,randInt:g0,randFloat:x0,randFloatSpread:y0,seededRandom:_0,degToRad:v0,radToDeg:b0,isPowerOfTwo:M0,ceilPowerOfTwo:S0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:E0,normalize:It,denormalize:ui},Ch=class Ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;var ot=Ch,qe=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var D=Ih,xu=new D,Hf=new qe,Ph=class Ph{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],b=r[4],x=r[7],S=r[2],v=r[5],w=r[8];return s[0]=a*_+o*M+c*S,s[3]=a*m+o*b+c*v,s[6]=a*p+o*x+c*w,s[1]=l*_+u*M+d*S,s[4]=l*m+u*b+d*v,s[7]=l*p+u*x+d*w,s[2]=h*_+f*M+g*S,s[5]=h*m+f*b+g*v,s[8]=h*p+f*x+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var ht=Ph,yu=new ht,Vf=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){let i={enabled:!0,workingColorSpace:An,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[An]:{primaries:e,whitePoint:n,transfer:Pa,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var gt=T0();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Ns("canvas")),ms.width=e.width,ms.height=e.height;let r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},A0=0,Ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(_u(r[a].image)):s.push(_u(r[a]))}else s=_u(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function _u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var R0=0,vu=new D,cn=class i extends Ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,r=ii,s=Ft,a=pi,o=vn,c=_n,l=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=di(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=fh;cn.DEFAULT_ANISOTROPY=1;var Lh=class Lh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,x=(f+1)/2,S=(p+1)/2,v=(u+h)/4,w=(d+_)/4,y=(g+m)/4;return b>x&&b>S?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=v/n,s=w/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=v/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=y/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;var Pt=Lh,_l=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new cn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fl=class Fl{constructor(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,I0)}lookAt(e,t,n){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),hr.crossVectors(n,kn),hr.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),hr.crossVectors(n,kn)),hr.normalize(),Oo.crossVectors(kn,hr),r[0]=hr.x,r[4]=Oo.x,r[8]=kn.x,r[1]=hr.y,r[5]=Oo.y,r[9]=kn.y,r[2]=hr.z,r[6]=Oo.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],b=n[7],x=n[11],S=n[15],v=r[0],w=r[4],y=r[8],T=r[12],R=r[1],F=r[5],I=r[9],B=r[13],U=r[2],O=r[6],C=r[10],N=r[14],X=r[3],P=r[7],H=r[11],k=r[15];return s[0]=a*v+o*R+c*U+l*X,s[4]=a*w+o*F+c*O+l*P,s[8]=a*y+o*I+c*C+l*H,s[12]=a*T+o*B+c*N+l*k,s[1]=u*v+d*R+h*U+f*X,s[5]=u*w+d*F+h*O+f*P,s[9]=u*y+d*I+h*C+f*H,s[13]=u*T+d*B+h*N+f*k,s[2]=g*v+_*R+m*U+p*X,s[6]=g*w+_*F+m*O+p*P,s[10]=g*y+_*I+m*C+p*H,s[14]=g*T+_*B+m*N+p*k,s[3]=M*v+b*R+x*U+S*X,s[7]=M*w+b*F+x*O+S*P,s[11]=M*y+b*I+x*C+S*H,s[15]=M*T+b*B+x*N+S*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*f-l*h,b=o*f-l*d,x=o*h-c*d,S=a*f-l*u,v=a*h-c*u,w=a*d-o*u;return t*(_*M-m*b+p*x)-n*(g*M-m*S+p*v)+r*(g*b-_*S+p*w)-s*(g*x-_*v+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-n*a,b=t*c-r*a,x=t*l-s*a,S=n*c-r*o,v=n*l-s*o,w=r*l-s*c,y=u*_-d*g,T=u*m-h*g,R=u*p-f*g,F=d*m-h*_,I=d*p-f*_,B=h*p-f*m,U=M*B-b*I+x*F+S*R-v*T+w*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/U;return e[0]=(o*B-c*I+l*F)*O,e[1]=(r*I-n*B-s*F)*O,e[2]=(_*w-m*v+p*S)*O,e[3]=(h*v-d*w-f*S)*O,e[4]=(c*R-a*B-l*T)*O,e[5]=(t*B-r*R+s*T)*O,e[6]=(m*x-g*w-p*b)*O,e[7]=(u*w-h*x+f*b)*O,e[8]=(a*I-o*R+l*y)*O,e[9]=(n*R-t*I-s*y)*O,e[10]=(g*v-_*x+p*M)*O,e[11]=(d*x-u*v-f*M)*O,e[12]=(o*T-a*F-c*y)*O,e[13]=(t*F-n*T+r*y)*O,e[14]=(_*b-g*S-m*M)*O,e[15]=(u*S-d*b+h*M)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,M=c*l,b=c*u,x=c*d,S=n.x,v=n.y,w=n.z;return r[0]=(1-(_+p))*S,r[1]=(f+x)*S,r[2]=(g-b)*S,r[3]=0,r[4]=(f-x)*v,r[5]=(1-(h+p))*v,r[6]=(m+M)*v,r[7]=0,r[8]=(g+b)*w,r[9]=(m-M)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=gs.set(r[0],r[1],r[2]).length(),o=gs.set(r[4],r[5],r[6]).length(),c=gs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),oi.copy(this);let l=1/a,u=1/o,d=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=hi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===hi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ls)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=hi,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===hi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ls)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fl.prototype.isMatrix4=!0;var Je=Fl,gs=new D,oi=new Je,C0=new D(0,0,0),I0=new D(1,1,1),hr=new D,Oo=new D,kn=new D,Wf=new Je,Xf=new qe,Zi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P0=0,qf=new D,xs=new qe,Hi=new Je,Bo=new D,ba=new D,L0=new D,N0=new qe,Yf=new D(1,0,0),Zf=new D(0,1,0),Kf=new D(0,0,1),$f={type:"added"},U0={type:"removed"},ys={type:"childadded",child:null},bu={type:"childremoved",child:null},Bt=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Zi,n=new qe,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new ht}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return qf.copy(e).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ba,Bo,this.up):Hi.lookAt(Bo,ba,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Hi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),ys.child=e,this.dispatchEvent(ys),ys.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new D(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Mu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=wh(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.workingToColorSpace(xn.copy(this),e),Math.round(yt(xn.r*255,0,255))*65536+Math.round(yt(xn.g*255,0,255))*256+Math.round(yt(xn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(xn.copy(this),t);let n=xn.r,r=xn.g,s=xn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Vt){gt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,r=xn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(ko);let n=Ia(dr.h,ko.h,t),r=Ia(dr.s,ko.s,t),s=Ia(dr.l,ko.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new tt;tt.NAMES=om;var Ki=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new D,Vi=new D,Su=new D,Gi=new D,_s=new D,vs=new D,jf=new D,wu=new D,Eu=new D,Tu=new D,Au=new Pt,Ru=new Pt,Cu=new Pt,Si=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){li.subVectors(r,t),Vi.subVectors(n,t),Su.subVectors(e,t);let a=li.dot(li),o=li.dot(Vi),c=li.dot(Su),l=Vi.dot(Vi),u=Vi.dot(Su),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Au.setScalar(0),Ru.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),Cu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Au,s.x),a.addScaledVector(Ru,s.y),a.addScaledVector(Cu,s.z),a}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Vi.subVectors(e,t),li.cross(Vi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),li.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;_s.subVectors(r,n),vs.subVectors(s,n),wu.subVectors(e,n);let c=_s.dot(wu),l=vs.dot(wu);if(c<=0&&l<=0)return t.copy(n);Eu.subVectors(e,r);let u=_s.dot(Eu),d=vs.dot(Eu);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_s,a);Tu.subVectors(e,s);let f=_s.dot(Tu),g=vs.dot(Tu);if(g>=0&&f<=g)return t.copy(s);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(vs,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return jf.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(jf,o);let p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Ho.subVectors(this.max,Ma),bs.subVectors(e.a,Ma),Ms.subVectors(e.b,Ma),Ss.subVectors(e.c,Ma),fr.subVectors(Ms,bs),pr.subVectors(Ss,Ms),Cr.subVectors(bs,Ss);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-Cr.z,Cr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,Cr.z,0,-Cr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-Cr.y,Cr.x,0];return!Iu(t,bs,Ms,Ss,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,bs,Ms,Ss,Ho))?!1:(Vo.crossVectors(fr,pr),t=[Vo.x,Vo.y,Vo.z],Iu(t,bs,Ms,Ss,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,zo=new $t,bs=new D,Ms=new D,Ss=new D,fr=new D,pr=new D,Cr=new D,Ma=new D,Ho=new D,Vo=new D,Ir=new D;function Iu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ir.fromArray(i,s);let o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),c=e.dot(Ir),l=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var en=new D,Go=new ot,F0=0,Wt=class extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ua=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tn=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},O0=new $t,Sa=new D,Pu=new D,Ln=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):O0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Pu)),this.expandByPoint(Sa.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},B0=0,ni=new Je,Lu=new Bt,ws=new D,zn=new $t,wa=new $t,ln=new D,hn=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?Da:Ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(zn.min,wa.min),zn.expandByPoint(ln),ln.addVectors(zn.max,wa.max),zn.expandByPoint(ln)):(zn.expandByPoint(wa.min),zn.expandByPoint(wa.max))}zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ln.fromBufferAttribute(o,l),c&&(ws.fromBufferAttribute(e,l),ln.add(ws)),r=Math.max(r,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new D,c[y]=new D;let l=new D,u=new D,d=new D,h=new ot,f=new ot,g=new ot,_=new D,m=new D;function p(y,T,R){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,y),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(F),o[y].add(_),o[T].add(_),o[R].add(_),c[y].add(m),c[T].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,T=M.length;y<T;++y){let R=M[y],F=R.start,I=R.count;for(let B=F,U=F+I;B<U;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new D,x=new D,S=new D,v=new D;function w(y){S.fromBufferAttribute(r,y),v.copy(S);let T=o[y];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(v,T);let F=x.dot(c[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,F)}for(let y=0,T=M.length;y<T;++y){let R=M[y],F=R.start,I=R.count;for(let B=F,U=F+I;B<U;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Wt(h,u,d)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},En=new D,ks=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nu=new D,k0=new D,z0=new ht,Hn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nu.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},H0=0,Rn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=di(),this.name="",this.type="Material",this.blending=$s,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xi=new D,Uu=new D,Wo=new D,Xo=new D,xr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uu.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Xo.copy(this.origin).sub(Uu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Wo),o=Xo.dot(this.direction),c=-Xo.dot(Wo),l=Xo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Uu).addScaledVector(Wo,h),f}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),r=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,b=n.z-a.z,x=Math.abs(c),S=Math.abs(l),v=Math.abs(u),w,y,T,R,F,I,B,U,O,C,N,X;if(x>=S&&x>=v?(T=c,I=d,O=g,X=p,c>=0?(w=l,y=u,R=h,F=f,B=_,U=m,C=M,N=b):(w=u,y=l,R=f,F=h,B=m,U=_,C=b,N=M)):S>=v?(T=l,I=h,O=_,X=M,l>=0?(w=u,y=c,R=f,F=d,B=m,U=g,C=b,N=p):(w=c,y=u,R=d,F=f,B=g,U=m,C=p,N=b)):(T=u,I=f,O=m,X=b,u>=0?(w=c,y=l,R=d,F=h,B=g,U=_,C=p,N=M):(w=l,y=c,R=h,F=d,B=_,U=g,C=M,N=p)),T===0)return null;let P=w/T,H=y/T,k=1/T,ae=R-P*I,ce=F-H*I,he=B-P*O,G=U-H*O,ue=C-P*X,z=N-H*X,K=ue*G-z*he,_e=ae*z-ce*ue,Fe=he*ce-G*ae;if(r){if(K<0||_e<0||Fe<0)return null}else if((K<0||_e<0||Fe<0)&&(K>0||_e>0||Fe>0))return null;let ye=K+_e+Fe;if(ye===0)return null;let ke=k*(K*I+_e*O+Fe*X);return(ye>0?ke<0:ke>0)?null:this.at(ke/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jf=new Je,Pr=new xr,qo=new Ln,Qf=new D,Yo=new D,Zo=new D,Ko=new D,Du=new D,$o=new D,ep=new D,jo=new D,Ot=class extends Bt{constructor(e=new hn,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){$o.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],d=s[c];u!==0&&(Du.fromBufferAttribute(d,e),a?$o.addScaledVector(Du,u):$o.addScaledVector(Du.sub(t),u))}t.add($o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(qo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(qo,Qf)===null||Pr.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(Jf.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=b;x<S;x+=3){let v=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);r=Jo(this,p,e,n,l,u,d,v,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);r=Jo(this,a,e,n,l,u,d,M,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=b;x<S;x+=3){let v=x,w=x+1,y=x+2;r=Jo(this,p,e,n,l,u,d,v,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,b=m+1,x=m+2;r=Jo(this,a,e,n,l,u,d,M,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function V0(i,e,t,n,r,s,a,o){let c;if(e.side===Cn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Un,o),c===null)return null;jo.copy(o),jo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(jo);return l<t.near||l>t.far?null:{distance:l,point:jo.clone(),object:i}}function Jo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Yo),i.getVertexPosition(c,Zo),i.getVertexPosition(l,Ko);let u=V0(i,e,t,n,Yo,Zo,Ko,ep);if(u){let d=new D;Si.getBarycoord(ep,Yo,Zo,Ko,d),r&&(u.uv=Si.getInterpolatedAttribute(r,o,c,l,d,new ot)),s&&(u.uv1=Si.getInterpolatedAttribute(s,o,c,l,d,new ot)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};Si.getNormal(Yo,Zo,Ko,h.normal),u.face=h,u.barycoord=d}return u}var Ea=new Pt,tp=new Pt,np=new Pt,G0=new Pt,ip=new Je,Qo=new D,Fu=new Ln,rp=new Je,Ou=new xr,Fa=class extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fu.copy(this.boundingSphere),Fu.applyMatrix4(r),e.ray.intersectsSphere(Fu)!==!1&&(rp.copy(r).invert(),Ou.copy(e.ray).applyMatrix4(rp),!(this.boundingBox!==null&&Ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ou)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;tp.fromBufferAttribute(r.attributes.skinIndex,e),np.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ea.copy(t),t.set(0,0,0,0)):(Ea.set(...t,1),t.set(0,0,0)),Ea.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=np.getComponent(s);if(a!==0){let o=tp.getComponent(s);ip.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(G0.copy(Ea).applyMatrix4(ip),a)}}return t.isVector4&&(t.w=Ea.w),t.applyMatrix4(this.bindMatrixInverse)}},zs=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hs=class extends cn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Kt,u=Kt,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sp=new Je,W0=new Je,Oa=class i{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:W0;sp.multiplyMatrices(o,t[s]),sp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hs(t,e,e,vn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(it("Skeleton: No bone found with UUID:",s),a=new zs),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},$i=class extends Wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new Je,ap=new Je,el=[],op=new $t,X0=new Je,Ta=new Ot,Aa=new Ln,Ba=class extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),op.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(op)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),Aa.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(n),e.ray.intersectsSphere(Aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),ap.multiplyMatrices(n,Es),Ta.matrixWorld=ap,Ta.raycast(e,el);for(let a=0,o=el.length;a<o;a++){let c=el[a];c.instanceId=s,c.object=this,t.push(c)}el.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(r*this.count),r,this.count,Wl,Wn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lr=new Ln,q0=new ot(.5,.5),tl=new D,Vs=class{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],b=s[13],x=s[14],S=s[15];if(r[0].setComponents(l-a,f-u,p-g,S-M).normalize(),r[1].setComponents(l+a,f+u,p+g,S+M).normalize(),r[2].setComponents(l+o,f+d,p+_,S+b).normalize(),r[3].setComponents(l-o,f-d,p-_,S-b).normalize(),n)r[4].setComponents(c,h,m,x).normalize(),r[5].setComponents(l-c,f-h,p-m,S-x).normalize();else if(r[4].setComponents(l-c,f-h,p-m,S-x).normalize(),t===hi)r[5].setComponents(l+c,f+h,p+m,S+x).normalize();else if(t===Ls)r[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);let t=q0.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bl=new D,Ml=new D,lp=new Je,Ra=new xr,nl=new Ln,Bu=new D,cp=new D,Or=class extends Bt{constructor(e=new hn,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)bl.fromBufferAttribute(t,r-1),Ml.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bl.distanceTo(Ml);e.setAttribute("lineDistance",new Tn(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;lp.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(lp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=u.getX(_),M=u.getX(_+1),b=il(this,e,Ra,c,p,M,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=il(this,e,Ra,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=il(this,e,Ra,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=il(this,e,Ra,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function il(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(bl.fromBufferAttribute(o,r),Ml.fromBufferAttribute(o,s),t.distanceSqToSegment(bl,Ml,Bu,cp)>n)return;Bu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Bu);if(!(l<e.near||l>e.far))return{distance:l,point:cp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var up=new D,hp=new D,ka=class extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)up.fromBufferAttribute(t,r),hp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+up.distanceTo(hp);e.setAttribute("lineDistance",new Tn(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ws=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dp=new Je,qu=new xr,rl=new Ln,sl=new D,Ha=class extends Bt{constructor(e=new hn,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;dp.copy(r).invert(),qu.copy(e.ray).applyMatrix4(dp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let m=l.getX(g);sl.fromBufferAttribute(d,m),fp(sl,m,c,r,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)sl.fromBufferAttribute(d,g),fp(sl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function fp(i,e,t,n,r,s,a){let o=qu.distanceSqToPoint(i);if(o<t){let c=new D;qu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Va=class extends cn{constructor(e=[],t=_r,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var yr=class extends cn{constructor(e,t,n=mi,r,s,a,o=Kt,c=Kt,l,u=Ei,d=1){if(u!==Ei&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sl=class extends yr{constructor(e,t=mi,n=_r,r,s,a=Kt,o=Kt,c,l=Ei){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ga=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xs=class i extends hn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(d,2));function g(_,m,p,M,b,x,S,v,w,y,T){let R=x/w,F=S/y,I=x/2,B=S/2,U=v/2,O=w+1,C=y+1,N=0,X=0,P=new D;for(let H=0;H<C;H++){let k=H*F-B;for(let ae=0;ae<O;ae++){let ce=ae*R-I;P[_]=ce*M,P[m]=k*b,P[p]=U,l.push(P.x,P.y,P.z),P[_]=0,P[m]=0,P[p]=v>0?1:-1,u.push(P.x,P.y,P.z),d.push(ae/w),d.push(1-H/y),N+=1}}for(let H=0;H<y;H++)for(let k=0;k<w;k++){let ae=h+k+O*H,ce=h+k+O*(H+1),he=h+(k+1)+O*(H+1),G=h+(k+1)+O*H;c.push(ae,ce,G),c.push(ce,he,G),X+=6}o.addGroup(f,X,T),f+=X,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fi=class i extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let b=0;b<l;b++){let x=b*d-s;g.push(x,-M,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let b=M+l*p,x=M+l*(p+1),S=M+1+l*(p+1),v=M+1+l*p;f.push(b,x,v),f.push(x,S,v)}this.setIndex(f),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wa=class extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new tt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Wr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(pp(r))r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(pp(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Wr(i[t]);for(let r in n)e[r]=n[r]}return e}function pp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Y0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var lm={clone:Wr,merge:bn},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wl=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Br=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends Br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var El=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ul(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function $0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function mp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function j0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Ai=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends Ai{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gu,endingEnd:Gu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wu:s=e,o=2*t-n;break;case Xu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wu:a=e,c=2*n-t;break;case Xu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let S=0;S!==o;++S)s[S]=p*a[u+S]+M*a[l+S]+b*a[c+S]+x*a[d+S];return s}},Rl=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}},Cl=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Il=class extends Ai{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(r-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*_+a[c+m]*g;return s}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=f*h+g*2,M=d[p],b=d[p+1],x=e*h+g*2,S=u[x],v=u[x+1],w=Q0(n,t,M,S,r);s[g]=cm(w,_,b,v,m)}return s}};function cm(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function J0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Q0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=cm(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=J0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Nn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),ul(e.settings)&&(n.settings={inTangents:gr(e.settings.inTangents,Array),outTangents:gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break;case Vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return Vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ul(this.settings)&&(gp(this.settings.inTangents,e),gp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ct("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&c0(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ll,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ul(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function gp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Dr;var ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ur;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};Xa.prototype.ValueTypeName="color";var Ji=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};Ji.prototype.ValueTypeName="number";var Pl=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)qe.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ri=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ur;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};er.prototype.ValueTypeName="vector";var qs=class{constructor(e="",t=-1,n=[],r=Yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tx(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Nn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=$0(c);c=mp(c,1,u),l=mp(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let d=u[1],h=r[d];h||(r[d]=h=[]),h.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ex(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return Xa;case"quaternion":return Ri;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ex(i.type);if(i.times===void 0){let n=[],r=[];j0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ul(i.settings)&&(t.settings={inTangents:gr(i.settings.inTangents,Float32Array),outTangents:gr(i.settings.outTangents,Float32Array)}),t}var wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(xp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!xp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ll=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},um=new Ll,Ci=class{constructor(e){this.manager=e!==void 0?e:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Yu=class extends Error{constructor(e,t){super(e),this.response=t}},Ys=class extends Ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:r});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=qi[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,_=0,m=new ReadableStream({start(p){M();function M(){d.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let v=0,w=u.length;v<w;v++){let y=u[v];y.onProgress&&y.onProgress(S)}p.enqueue(x),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Yu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{wi.add(`file:${e}`,l);let u=qi[e];delete qi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=qi[e];if(u===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=new WeakMap,Nl=class extends Ci{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ts.get(a);d===void 0&&(d=[],Ts.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=Ns("img");function c(){u(),t&&t(this);let d=Ts.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Ts.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),wi.remove(`image:${e}`);let h=Ts.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ii=class extends Ci{constructor(e){super(e)}load(e,t,n,r){let s=new cn,a=new Nl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},kr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qa=class extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ku=new Je,yp=new D,_p=new D,Zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),_p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_p),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ku.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ku,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=new D,ol=new qe,Mi=new D,Ya=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ol,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(al,ol,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mr=new D,vp=new ot,bp=new ot,tn=class extends Ya{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,vp,bp),t.subVectors(bp,vp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zu=class extends Zs{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Fr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Za=class extends kr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Zu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ku=class extends Zs{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Ka=class extends kr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends Ya{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$u=class extends Zs{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var nr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zu=new WeakMap,$a=class extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=wi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{zu.has(a)===!0?(r&&r(zu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return wi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),zu.set(c,l),wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var As=-90,Rs=1,Ul=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(As,Rs,e,t);r.layers=this.layers,this.add(r);let s=new tn(As,Rs,e,t);s.layers=this.layers,this.add(s);let a=new tn(As,Rs,e,t);a.layers=this.layers,this.add(a);let o=new tn(As,Rs,e,t);o.layers=this.layers,this.add(o);let c=new tn(As,Rs,e,t);c.layers=this.layers,this.add(c);let l=new tn(As,Rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Th="\\[\\]\\.:\\/",nx=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",ix="[^"+Th.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Ah),sx=/(WCOD+)?/.source.replace("WCOD",ix),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),lx=new RegExp("^"+rx+sx+ax+ox+"$"),cx=["material","materials","bones","map"],ju=class{constructor(e,t,n){let r=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(e){let t=lx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);cx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=ju;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dS=new Float32Array(1);var Mp=new Je,zr=class{constructor(e,t,n=0,r=1/0){this.ray=new xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mp),this}intersectObject(e,t=!0,n=[]){return Ju(e,this,n,t),n.sort(Sp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ju(e[r],this,n,t);return n.sort(Sp),n}};function Sp(i,e){return i.distance-e.distance}function Ju(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Ju(s[a],e,t,!0)}}var Nh=class Nh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Nh.prototype.isMatrix2=!0;var Qu=Nh;function Rh(i,e,t,n){let r=ux(n);switch(t){case yh:return i*e;case Wl:return i*e/r.components*r.byteLength;case Xl:return i*e/r.components*r.byteLength;case br:return i*e*2/r.components*r.byteLength;case ql:return i*e*2/r.components*r.byteLength;case _h:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case Yl:return i*e*4/r.components*r.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:case jl:return Math.max(i,16)*Math.max(e,8)/4;case Zl:case $l:return Math.max(i,8)*Math.max(e,8)/2;case Jl:case Ql:case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:case ro:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case _c:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case so:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ux(i){switch(i){case _n:case ph:return{byteLength:1,components:1};case Js:case mh:case Xn:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case mi:case Hl:case Wn:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Lm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function px(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
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
}`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dy=`PhysicalMaterial material;
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
#endif`,fy=`uniform sampler2D dfgLUT;
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
}`,py=`
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ey=`#if defined( USE_POINTS_UV )
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
#endif`,Ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e_=`float getShadowMask() {
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
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,M_=`#if DEPTH_PACKING == 3200
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
}`,S_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`uniform float scale;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,O_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,H_=`#define TOON
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
}`,V_=`#define TOON
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
}`,G_=`uniform float size;
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:xx,alphamap_pars_fragment:yx,alphatest_fragment:_x,alphatest_pars_fragment:vx,aomap_fragment:bx,aomap_pars_fragment:Mx,batching_pars_vertex:Sx,batching_vertex:wx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Dx,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Kx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:oy,envmap_vertex:jx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:ey,fog_pars_fragment:ty,gradientmap_pars_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:sy,lights_pars_begin:ay,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:hy,lights_physical_fragment:dy,lights_physical_pars_fragment:fy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,lightprobes_pars_fragment:xy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:by,map_fragment:My,map_pars_fragment:Sy,map_particle_fragment:wy,map_particle_pars_fragment:Ey,metalnessmap_fragment:Ty,metalnessmap_pars_fragment:Ay,morphinstance_vertex:Ry,morphcolor_vertex:Cy,morphnormal_vertex:Iy,morphtarget_pars_vertex:Py,morphtarget_vertex:Ly,normal_fragment_begin:Ny,normal_fragment_maps:Uy,normal_pars_fragment:Dy,normal_pars_vertex:Fy,normal_vertex:Oy,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:qy,dithering_fragment:Yy,dithering_pars_fragment:Zy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Jy,shadowmap_vertex:Qy,shadowmask_pars_fragment:e_,skinbase_vertex:t_,skinning_pars_vertex:n_,skinning_vertex:i_,skinnormal_vertex:r_,specularmap_fragment:s_,specularmap_pars_fragment:a_,tonemapping_fragment:o_,tonemapping_pars_fragment:l_,transmission_fragment:c_,transmission_pars_fragment:u_,uv_pars_fragment:h_,uv_pars_vertex:d_,uv_vertex:f_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,backgroundCube_vert:x_,backgroundCube_frag:y_,cube_vert:__,cube_frag:v_,depth_vert:b_,depth_frag:M_,distance_vert:S_,distance_frag:w_,equirect_vert:E_,equirect_frag:T_,linedashed_vert:A_,linedashed_frag:R_,meshbasic_vert:C_,meshbasic_frag:I_,meshlambert_vert:P_,meshlambert_frag:L_,meshmatcap_vert:N_,meshmatcap_frag:U_,meshnormal_vert:D_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:B_,meshphysical_vert:k_,meshphysical_frag:z_,meshtoon_vert:H_,meshtoon_frag:V_,points_vert:G_,points_frag:W_,shadow_vert:X_,shadow_frag:q_,sprite_vert:Y_,sprite_frag:Z_},Oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ui={basic:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:bn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:bn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:bn([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:bn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:bn([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:bn([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:bn([Oe.common,Oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:bn([Oe.lights,Oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ui.physical={uniforms:bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ac={r:0,b:0,g:0},K_=new Je,Nm=new ht;Nm.set(-1,0,0,0,1,0,0,0,1);function $_(i,e,t,n,r,s){let a=new tt(0),o=r===!0?0:1,c,l,u=null,d=0,h=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let x=M.backgroundBlurriness>0;b=e.get(b,x)}return b}function g(M){let b=!1,x=f(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===Qa)?(l===void 0&&(l=new Ot(new Xs(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Wr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nm),l.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,(u!==x||d!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ot(new fi(2,2),new fn({name:"BackgroundMaterial",uniforms:Wr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,b){M.getRGB(Ac,Eh(i)),t.buffers.color.setClear(Ac.r,Ac.g,Ac.b,b,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function j_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(F,I,B,U,O){let C=!1,N=d(F,U,B,I);s!==N&&(s=N,l(s.object)),C=f(F,U,B,O),C&&g(F,U,B,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,x(F,I,B,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function d(F,I,B,U){let O=U.wireframe===!0,C=n[I.id];C===void 0&&(C={},n[I.id]=C);let N=F.isInstancedMesh===!0?F.id:0,X=C[N];X===void 0&&(X={},C[N]=X);let P=X[B.id];P===void 0&&(P={},X[B.id]=P);let H=P[O];return H===void 0&&(H=h(c()),P[O]=H),H}function h(F){let I=[],B=[],U=[];for(let O=0;O<t;O++)I[O]=0,B[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:U,object:F,attributes:{},index:null}}function f(F,I,B,U){let O=s.attributes,C=I.attributes,N=0,X=B.getAttributes();for(let P in X)if(X[P].location>=0){let k=O[P],ae=C[P];if(ae===void 0&&(P==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),P==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),k===void 0||k.attribute!==ae||ae&&k.data!==ae.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(F,I,B,U){let O={},C=I.attributes,N=0,X=B.getAttributes();for(let P in X)if(X[P].location>=0){let k=C[P];k===void 0&&(P==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),P==="instanceColor"&&F.instanceColor&&(k=F.instanceColor));let ae={};ae.attribute=k,k&&k.data&&(ae.data=k.data),O[P]=ae,N++}s.attributes=O,s.attributesNum=N,s.index=U}function _(){let F=s.newAttributes;for(let I=0,B=F.length;I<B;I++)F[I]=0}function m(F){p(F,0)}function p(F,I){let B=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;B[F]=1,U[F]===0&&(i.enableVertexAttribArray(F),U[F]=1),O[F]!==I&&(i.vertexAttribDivisor(F,I),O[F]=I)}function M(){let F=s.newAttributes,I=s.enabledAttributes;for(let B=0,U=I.length;B<U;B++)I[B]!==F[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function b(F,I,B,U,O,C,N){N===!0?i.vertexAttribIPointer(F,I,B,O,C):i.vertexAttribPointer(F,I,B,U,O,C)}function x(F,I,B,U){_();let O=U.attributes,C=B.getAttributes(),N=I.defaultAttributeValues;for(let X in C){let P=C[X];if(P.location>=0){let H=O[X];if(H===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(H=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(H=F.instanceColor)),H!==void 0){let k=H.normalized,ae=H.itemSize,ce=e.get(H);if(ce===void 0)continue;let he=ce.buffer,G=ce.type,ue=ce.bytesPerElement,z=G===i.INT||G===i.UNSIGNED_INT||H.gpuType===Hl;if(H.isInterleavedBufferAttribute){let K=H.data,_e=K.stride,Fe=H.offset;if(K.isInstancedInterleavedBuffer){for(let ye=0;ye<P.locationSize;ye++)p(P.location+ye,K.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<P.locationSize;ye++)m(P.location+ye);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ye=0;ye<P.locationSize;ye++)b(P.location+ye,ae/P.locationSize,G,k,_e*ue,(Fe+ae/P.locationSize*ye)*ue,z)}else{if(H.isInstancedBufferAttribute){for(let K=0;K<P.locationSize;K++)p(P.location+K,H.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<P.locationSize;K++)m(P.location+K);i.bindBuffer(i.ARRAY_BUFFER,he);for(let K=0;K<P.locationSize;K++)b(P.location+K,ae/P.locationSize,G,k,ae*ue,ae/P.locationSize*K*ue,z)}}else if(N!==void 0){let k=N[X];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(P.location,k);break;case 3:i.vertexAttrib3fv(P.location,k);break;case 4:i.vertexAttrib4fv(P.location,k);break;default:i.vertexAttrib1fv(P.location,k)}}}}M()}function S(){T();for(let F in n){let I=n[F];for(let B in I){let U=I[B];for(let O in U){let C=U[O];for(let N in C)u(C[N].object),delete C[N];delete U[O]}}delete n[F]}}function v(F){if(n[F.id]===void 0)return;let I=n[F.id];for(let B in I){let U=I[B];for(let O in U){let C=U[O];for(let N in C)u(C[N].object),delete C[N];delete U[O]}}delete n[F.id]}function w(F){for(let I in n){let B=n[I];for(let U in B){let O=B[U];if(O[F.id]===void 0)continue;let C=O[F.id];for(let N in C)u(C[N].object),delete C[N];delete O[F.id]}}}function y(F){for(let I in n){let B=n[I],U=F.isInstancedMesh===!0?F.id:0,O=B[U];if(O!==void 0){for(let C in O){let N=O[C];for(let X in N)u(N[X].object),delete N[X];delete O[C]}delete B[U],Object.keys(B).length===0&&delete n[I]}}}function T(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function J_(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Q_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_n&&w!==Wn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(it("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:v}}function ev(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Hn,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:n,b=M*4,x=p.clippingState||null;c.value=x,x=u(g,h,b,f);for(let S=0;S!==b;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var na=4,tv=6,nv=20,iv=256,oo=new Pi,hm=new tt,Uh=null,Dh=0,Fh=0,Oh=!1,rv=new D,Xr=new D,ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=rv}=s;Uh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Dh,Fh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Xn,format:vn,colorSpace:An,depthBuffer:!1},r=dm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sv(s)),this._blurMaterial=ov(s,e,t),this._ggxMaterial=av(s,e,t)}return r}_compileMaterial(e){let t=new Ot(new hn,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,r,s){let c=new tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hm),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Xs,new dn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(hm),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let S=this._cubeSize;ta(r,x*S,b>2?S:0,S,S),d.setRenderTarget(r),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_r||e.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-na?n-g+na:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ta(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,oo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ta(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,oo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-na?r-this._lodMax+na:0),h=4*(this._cubeSize-u);ta(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,oo)}};function sv(i){let e=[],t=[],n=i,r=i-na+1+tv;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,b=p>2?0:-1,x=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];g.set(x,f*h*p);for(let S=0;S<h;S++){let v=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?Xr.set(1,w,v):p===1?Xr.set(-v,1,-w):p===2?Xr.set(-v,w,1):p===3?Xr.set(-1,w,-v):p===4?Xr.set(-v,-1,w):Xr.set(v,w,-1),Xr.toArray(_,(p*h+S)*f)}}let m=new hn;m.setAttribute("position",new Wt(g,f)),m.setAttribute("outputDirection",new Wt(_,f)),t.push(new Ot(m,null)),n>na&&n--}return{lodMeshes:t,sizeLods:e}}function dm(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function av(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ov(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function fm(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function pm(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Va(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xs(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Li});s.uniforms.tEquirect.value=t;let a=new Ot(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Ft),new Ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function lv(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Bl||f===kl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Cc(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Bl||f===kl,_=f===_r||f===Vr;if(g||_){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ra(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new ra(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Bl?h.mapping=_r:f===kl&&(h.mapping=Vr),h}function c(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function cv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Nr("WebGLRenderer: "+n+" extension not supported."),r}}}function uv(i,e,t,n){let r={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let b=0,x=M.length;b<x;b+=3){let S=M[b+0],v=M[b+1],w=M[b+2];h.push(S,v,v,w,w,S)}}else{let M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){let S=b+0,v=b+1,w=b+2;h.push(S,v,v,w,w,S)}}let m=new(g.count>=65535?Da:Ua)(h,1);m.version=_;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function hv(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function dv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function fv(i,e,t){let n=new WeakMap,r=new Pt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=o.attributes.position.count*b,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let v=new Float32Array(x*S*4*d),w=new Na(v,x,S,d);w.type=Wn,w.needsUpdate=!0;let y=b*4;for(let R=0;R<d;R++){let F=m[R],I=p[R],B=M[R],U=x*S*4*R;for(let O=0;O<F.count;O++){let C=O*y;f===!0&&(r.fromBufferAttribute(F,O),v[U+C+0]=r.x,v[U+C+1]=r.y,v[U+C+2]=r.z,v[U+C+3]=0),g===!0&&(r.fromBufferAttribute(I,O),v[U+C+4]=r.x,v[U+C+5]=r.y,v[U+C+6]=r.z,v[U+C+7]=0),_===!0&&(r.fromBufferAttribute(B,O),v[U+C+8]=r.x,v[U+C+9]=r.y,v[U+C+10]=r.z,v[U+C+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new ot(x,S)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function pv(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var mv={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function gv(i,e,t,n,r,s){let a=new un(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new hn;l.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let u=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(l,u),h=new Pi(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,M=[],b=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let v=0;v<M.length;v++){let w=M[v];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){M=x,b=M.length>0&&M[0].isRenderPass===!0;let S=a.width,v=a.height;M.length>0&&o===null&&(o=new un(S,v,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new un(S,v,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let y=M[w];y.setSize&&y.setSize(S,v)}},this.begin=function(x,S){if(_||x.toneMapping===Gn&&M.length===0)return!1;if(p=S,S!==null){let v=S.width,w=S.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return b===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Gn,!0},this.hasRenderPass=function(){return b},this.end=function(x,S){x.toneMapping=m,_=!0;let v=a,w=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(x,w,v,S),T.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},gt.getTransfer(f)===Ct&&(u.defines.SRGB_TRANSFER="");let y=mv[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(p),x.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Um=new cn,zh=new yr(1,1),Dm=new Na,Fm=new vl,Om=new Va,mm=[],gm=[],xm=new Float32Array(16),ym=new Float32Array(9),_m=new Float32Array(4);function sa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lc(i,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;_m.set(n),i.uniformMatrix2fv(this.addr,!1,_m),sn(t,n)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;ym.set(n),i.uniformMatrix3fv(this.addr,!1,ym),sn(t,n)}}function Sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;xm.set(n),i.uniformMatrix4fv(this.addr,!1,xm),sn(t,n)}}function wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function Lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zh.compareFunction=t.isReversedDepthBuffer()?Tc:Ec,s=zh):s=Um,t.setTexture2D(e||s,r)}function Nv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fm,r)}function Uv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Om,r)}function Dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dm,r)}function Fv(i){switch(i){case 5126:return xv;case 35664:return yv;case 35665:return _v;case 35666:return vv;case 35674:return bv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function Bv(i,e){let t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function kv(i,e){let t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){let t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function Hv(i,e){let t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vv(i,e){let t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){let t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wv(i,e){i.uniform1iv(this.addr,e)}function Xv(i,e){i.uniform2iv(this.addr,e)}function qv(i,e){i.uniform3iv(this.addr,e)}function Yv(i,e){i.uniform4iv(this.addr,e)}function Zv(i,e){i.uniform1uiv(this.addr,e)}function Kv(i,e){i.uniform2uiv(this.addr,e)}function $v(i,e){i.uniform3uiv(this.addr,e)}function jv(i,e){i.uniform4uiv(this.addr,e)}function Jv(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=zh:a=Um;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Qv(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Fm,s[a])}function eb(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Om,s[a])}function tb(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dm,s[a])}function nb(i){switch(i){case 5126:return Ov;case 35664:return Bv;case 35665:return kv;case 35666:return zv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Zv;case 36294:return Kv;case 36295:return $v;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}var Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}},Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nb(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Bh=/(\w+)(\])?(\[|\.)?/g;function vm(i,e){i.seq.push(e),i.map[e.id]=e}function ib(i,e,t){let n=i.name,r=n.length;for(Bh.lastIndex=0;;){let s=Bh.exec(n),a=Bh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){vm(t,l===void 0?new Hh(o,i,e):new Vh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Gh(o),vm(t,d)),t=d}}}var ia=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ib(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function bm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var rb=37297,sb=0;function ab(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Mm=new ht;function ob(i){gt._getMatrix(Mm,gt.workingColorSpace,i);let e=`mat3( ${Mm.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Pa:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ab(i.getShaderSource(e),o)}else return s}function lb(i,e){let t=ob(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cb={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[Ja]:"ACESFilmic",[hh]:"AgX",[dh]:"Neutral",[uh]:"Custom"};function ub(i,e){let t=cb[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rc=new D;function hb(){gt.getLuminanceCoefficients(Rc);let i=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function fb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function co(i){return i!==""}function wm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(mb,xb)}var gb=new Map;function xb(i,e){let t=pt[e];if(t===void 0){let n=gb.get(e);if(n!==void 0)t=pt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(t)}var yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(yb,_b)}function _b(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var vb={[ja]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function bb(i){return vb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mb={[_r]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function Sb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wb={[Vr]:"ENVMAP_MODE_REFRACTION"};function Eb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tb={[ah]:"ENVMAP_BLENDING_MULTIPLY",[Wp]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};function Ab(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tb[i.combine]||"ENVMAP_BLENDING_NONE"}function Rb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cb(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=bb(t),l=Sb(t),u=Eb(t),d=Ab(t),h=Rb(t),f=db(t),g=fb(s),_=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?pt.tonemapping_pars_fragment:"",t.toneMapping!==Gn?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,lb("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),a=Wh(a),a=wm(a,t),a=Em(a,t),o=Wh(o),o=wm(o,t),o=Em(o,t),a=Tm(a),o=Tm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+m+a,x=M+p+o,S=bm(r,r.VERTEX_SHADER,b),v=bm(r,r.FRAGMENT_SHADER,x);r.attachShader(_,S),r.attachShader(_,v),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(F){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(v)||"",O=I.trim(),C=B.trim(),N=U.trim(),X=!0,P=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,v);else{let H=Sm(r,S,"vertex"),k=Sm(r,v,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+H+`
`+k)}else O!==""?it("WebGLProgram: Program Info Log:",O):(C===""||N==="")&&(P=!1);P&&(F.diagnostics={runnable:X,programLog:O,vertexShader:{log:C,prefix:m},fragmentShader:{log:N,prefix:p}})}r.deleteShader(S),r.deleteShader(v),y=new ia(r,_),T=pb(r,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,rb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=v,this}var Ib=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qh(e),t.set(e,n)),n}},qh=class{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}};function Pb(i){return i===br||i===ro||i===so}function Lb(i,e,t,n,r,s){let a=new Fs,o=new Xh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,R,F,I,B){let U=F.fog,O=I.geometry,C=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=e.get(y.envMap||C,N),P=X&&X.mapping===Qa?X.image.height:null,H=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&it("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let k=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=k!==void 0?k.length:0,ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let he,G,ue,z;if(H){let Ve=Ui[H];he=Ve.vertexShader,G=Ve.fragmentShader}else{he=y.vertexShader,G=y.fragmentShader;let Ve=o.getVertexShaderStage(y),st=o.getFragmentShaderStage(y);o.update(y,Ve,st),ue=Ve.id,z=st.id}let K=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,ye=I.isBatchedMesh===!0,ke=!!y.map,ut=!!y.matcap,be=!!X,Pe=!!y.aoMap,Be=!!y.lightMap,Le=!!y.bumpMap&&y.wireframe===!1,J=!!y.normalMap,ee=!!y.displacementMap,ne=!!y.emissiveMap,pe=!!y.metalnessMap,Me=!!y.roughnessMap,V=y.anisotropy>0,Qe=y.clearcoat>0,ze=y.dispersion>0,L=y.retroreflectivity>0,E=y.iridescence>0,W=y.sheen>0,j=y.transmission>0,ie=V&&!!y.anisotropyMap,le=Qe&&!!y.clearcoatMap,me=Qe&&!!y.clearcoatNormalMap,se=Qe&&!!y.clearcoatRoughnessMap,Q=E&&!!y.iridescenceMap,ge=E&&!!y.iridescenceThicknessMap,Ae=W&&!!y.sheenColorMap,Ce=W&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,$e=!!y.specularColorMap,rt=!!y.specularIntensityMap,at=j&&!!y.transmissionMap,Y=j&&!!y.thicknessMap,Re=!!y.gradientMap,de=!!y.alphaMap,Ee=y.alphaTest>0,xe=!!y.alphaHash,$=!!y.extensions,Se=Gn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Se=i.toneMapping);let ve={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:he,fragmentShader:G,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ye,batchingColor:ye&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:ut,envMap:be,envMapMode:be&&X.mapping,envMapCubeUVHeight:P,aoMap:Pe,lightMap:Be,bumpMap:Le,normalMap:J,displacementMap:ee,emissiveMap:ne,normalMapObjectSpace:J&&y.normalMapType===Kp,normalMapTangentSpace:J&&y.normalMapType===wc,packedNormalMap:J&&y.normalMapType===wc&&Pb(y.normalMap.format),metalnessMap:pe,roughnessMap:Me,anisotropy:V,anisotropyMap:ie,clearcoat:Qe,clearcoatMap:le,clearcoatNormalMap:me,clearcoatRoughnessMap:se,dispersion:ze,retroreflection:L,iridescence:E,iridescenceMap:Q,iridescenceThicknessMap:ge,sheen:W,sheenColorMap:Ae,sheenRoughnessMap:Ce,specularMap:Ie,specularColorMap:$e,specularIntensityMap:rt,transmission:j,transmissionMap:at,thicknessMap:Y,gradientMap:Re,opaque:y.transparent===!1&&y.blending===$s&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Ee,alphaHash:xe,combine:y.combine,mapUv:ke&&g(y.map.channel),aoMapUv:Pe&&g(y.aoMap.channel),lightMapUv:Be&&g(y.lightMap.channel),bumpMapUv:Le&&g(y.bumpMap.channel),normalMapUv:J&&g(y.normalMap.channel),displacementMapUv:ee&&g(y.displacementMap.channel),emissiveMapUv:ne&&g(y.emissiveMap.channel),metalnessMapUv:pe&&g(y.metalnessMap.channel),roughnessMapUv:Me&&g(y.roughnessMap.channel),anisotropyMapUv:ie&&g(y.anisotropyMap.channel),clearcoatMapUv:le&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(y.sheenRoughnessMap.channel),specularMapUv:Ie&&g(y.specularMap.channel),specularColorMapUv:$e&&g(y.specularColorMap.channel),specularIntensityMapUv:rt&&g(y.specularIntensityMap.channel),transmissionMapUv:at&&g(y.transmissionMap.channel),thicknessMapUv:Y&&g(y.thicknessMap.channel),alphaMapUv:de&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(J||V),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(ke||de),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&J===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let T=f[y.type],R;if(T){let F=Ui[T];R=lm.clone(F.uniforms)}else R=y.uniforms;return R}function x(y,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new Cb(i,T,y,r),l.push(R),u.set(T,R)),R}function S(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function v(y){o.remove(y)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:v,programs:l,dispose:w}}function Nb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ub(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function c(h,f,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);let b=o(h,f,g,_,m,p);g.transmission>0?n.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(h,f,g,_,m,p){let M=o(h,f,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||Ub),n.length>1&&n.sort(f||Rm),r.length>1&&r.sort(f||Rm)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function Db(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Cm,i.set(n,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ob(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bb=0;function kb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zb(i){let e=new Fb,t=Ob(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Je,a=new Je;function o(l){let u=0,d=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,b=0,x=0,S=0,v=0,w=0,y=0,T=0,R=0;l.sort(kb);for(let I=0,B=l.length;I<B;I++){let U=l[I],O=U.color,C=U.intensity,N=U.distance,X=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===br?X=U.shadow.map.texture:X=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=O.r*C,d+=O.g*C,h+=O.b*C;else if(U.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(U.sh.coefficients[P],C);R++}else if(U.isSunLight){let P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let H=U.shadow,k=t.get(U);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=k,n.sunShadowMap[g]=X;let ae=H.getViewportCount();for(let ce=0;ce<ae;ce++)n.sunShadowMatrix[_+ce]=H.getMatrix(ce),n.sunShadowCascade[_+ce]=H._cascadeData[ce];_+=ae,g++}n.sun[f]=P,f++}else if(U.isDirectionalLight){let P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let H=U.shadow,k=t.get(U);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=U.shadow.matrix,S++}n.directional[m]=P,m++}else if(U.isSpotLight){let P=e.get(U);P.position.setFromMatrixPosition(U.matrixWorld),P.color.copy(O).multiplyScalar(C),P.distance=N,P.coneCos=Math.cos(U.angle),P.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),P.decay=U.decay,n.spot[M]=P;let H=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,H.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[M]=H.matrix,U.castShadow){let k=t.get(U);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=X,w++}M++}else if(U.isRectAreaLight){let P=e.get(U);P.color.copy(O).multiplyScalar(C),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),n.rectArea[b]=P,b++}else if(U.isPointLight){let P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),P.distance=U.distance,P.decay=U.decay,U.castShadow){let H=U.shadow,k=t.get(U);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=U.shadow.matrix,v++}n.point[p]=P,p++}else if(U.isHemisphereLight){let P=e.get(U);P.skyColor.copy(U.color).multiplyScalar(C),P.groundColor.copy(U.groundColor).multiplyScalar(C),n.hemi[x]=P,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==b||F.hemiLength!==x||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==v||F.numSpotShadows!==w||F.numSpotMaps!==y||F.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=b,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=b,F.hemiLength=x,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=v,F.numSpotShadows=w,F.numSpotMaps=y,F.numLightProbes=R,n.version=Bb++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let x=l[M];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Im(i){let e=new zb(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Hb(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Im(i),e.set(r,[o])):s>=a.length?(o=new Im(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
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
}`,Wb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Xb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Pm=new Je,lo=new D,kh=new D;function qb(i,e,t){let n=new Vs,r=new ot,s=new ot,a=new Pt,o=new El,c=new Tl,l={},u=t.maxTextureSize,d={[Un]:Cn,[Cn]:Un,[pn]:pn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Vb,fragmentShader:Gb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new hn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(v,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ol&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=p!==this.type;B&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(O=>O.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,O=v.length;U<O;U++){let C=v[U],N=C.shadow;if(N===void 0){it("WebGLShadowMap:",C,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let X=N.getFrameExtents();r.multiply(X),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,N.mapSize.y=s.y));let P=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=P,N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ks){if(C.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new un(r.x,r.y,{format:br,type:Xn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),N.map.texture.name=C.name+".shadowMap",N.map.depthTexture=new yr(r.x,r.y,Wn),N.map.depthTexture.name=C.name+".shadowMapDepth",N.map.depthTexture.format=Ei,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt}else C.isPointLight?(N.map=new Cc(r.x),N.map.depthTexture=new Sl(r.x,mi)):(N.map=new un(r.x,r.y),N.map.depthTexture=new yr(r.x,r.y,mi)),N.map.depthTexture.name=C.name+".shadowMap",N.map.depthTexture.format=Ei,this.type===ja?(N.map.depthTexture.compareFunction=P?Tc:Ec,N.map.depthTexture.minFilter=Ft,N.map.depthTexture.magFilter=Ft):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let H=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();C.isPointLight!==!0&&N.updateMatrices(C,y);for(let k=0;k<H;k++){let ae=N.getCamera(k);if(C.isPointLight){let ce=N.camera,he=N.matrix,G=C.distance||ce.far;G!==ce.far&&(ce.far=G,ce.updateProjectionMatrix()),lo.setFromMatrixPosition(C.matrixWorld),ce.position.copy(lo),kh.copy(ce.position),kh.add(Wb[k]),ce.up.copy(Xb[k]),ce.lookAt(kh),ce.updateMatrixWorld(),he.makeTranslation(-lo.x,-lo.y,-lo.z),Pm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Pm,ce.coordinateSystem,ce.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,k),i.clear();else{k===0&&(i.setRenderTarget(N.map),i.clear());let ce=N.getViewport(k);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a)}n=N.getFrustum(k),x(w,y,ae,C,this.type)}N.isPointLightShadow!==!0&&this.type===Ks&&M(N,y),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,F)};function M(v,w){let y=e.update(_);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new un(r.x,r.y,{format:br,type:Xn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,_,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,y,f,_,null)}function b(v,w,y,T){let R=null,F=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(F!==void 0)R=F;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,B=w.uuid,U=l[I];U===void 0&&(U={},l[I]=U);let O=U[B];O===void 0&&(O=R.clone(),U[B]=O,w.addEventListener("dispose",S)),R=O}if(R.visible=w.visible,R.wireframe=w.wireframe,T===Ks?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:d[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=y}return R}function x(v,w,y,T,R){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Ks)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let B=e.update(v),U=v.material;if(Array.isArray(U)){let O=B.groups;for(let C=0,N=O.length;C<N;C++){let X=O[C],P=U[X.materialIndex];if(P&&P.visible){let H=b(v,P,T,R);v.onBeforeShadow(i,v,w,y,B,H,X),i.renderBufferDirect(y,null,B,H,v,X),v.onAfterShadow(i,v,w,y,B,H,X)}}}else if(U.visible){let O=b(v,U,T,R);v.onBeforeShadow(i,v,w,y,B,O,null),i.renderBufferDirect(y,null,B,O,v,null),v.onAfterShadow(i,v,w,y,B,O,null)}}let I=v.children;for(let B=0,U=I.length;B<U;B++)x(I[B],w,y,T,R)}function S(v){v.target.removeEventListener("dispose",S);for(let y in l){let T=l[y],R=v.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Yb(i,e){function t(){let Y=!1,Re=new Pt,de=null,Ee=new Pt(0,0,0,0);return{setMask:function(xe){de!==xe&&!Y&&(i.colorMask(xe,xe,xe,xe),de=xe)},setLocked:function(xe){Y=xe},setClear:function(xe,$,Se,ve,Ve){Ve===!0&&(xe*=ve,$*=ve,Se*=ve),Re.set(xe,$,Se,ve),Ee.equals(Re)===!1&&(i.clearColor(xe,$,Se,ve),Ee.copy(Re))},reset:function(){Y=!1,de=null,Ee.set(-1,0,0,0)}}}function n(){let Y=!1,Re=!1,de=null,Ee=null,xe=null;return{setReversed:function($){if(Re!==$){let Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Re=$;let ve=xe;xe=null,this.setClear(ve)}},getReversed:function(){return Re},setTest:function($){$?K(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function($){de!==$&&!Y&&(i.depthMask($),de=$)},setFunc:function($){if(Re&&($=am[$]),Ee!==$){switch($){case hl:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=$}},setLocked:function($){Y=$},setClear:function($){xe!==$&&(xe=$,Re&&($=1-$),i.clearDepth($))},reset:function(){Y=!1,de=null,Ee=null,xe=null,Re=!1}}}function r(){let Y=!1,Re=null,de=null,Ee=null,xe=null,$=null,Se=null,ve=null,Ve=null;return{setTest:function(st){Y||(st?K(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(st){Re!==st&&!Y&&(i.stencilMask(st),Re=st)},setFunc:function(st,Rt,Gt){(de!==st||Ee!==Rt||xe!==Gt)&&(i.stencilFunc(st,Rt,Gt),de=st,Ee=Rt,xe=Gt)},setOp:function(st,Rt,Gt){($!==st||Se!==Rt||ve!==Gt)&&(i.stencilOp(st,Rt,Gt),$=st,Se=Rt,ve=Gt)},setLocked:function(st){Y=st},setClear:function(st){Ve!==st&&(i.clearStencil(st),Ve=st)},reset:function(){Y=!1,Re=null,de=null,Ee=null,xe=null,$=null,Se=null,ve=null,Ve=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,b=null,x=null,S=null,v=null,w=null,y=new tt(0,0,0),T=0,R=!1,F=null,I=null,B=null,U=null,O=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,X=0,P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=X>=1):P.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=X>=2);let H=null,k={},ae=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),he=new Pt().fromArray(ae),G=new Pt().fromArray(ce);function ue(Y,Re,de,Ee){let xe=new Uint8Array(4),$=i.createTexture();i.bindTexture(Y,$),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<de;Se++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Re+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return $}let z={};z[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Is),Le(!1),J(eh),K(i.CULL_FACE),Pe(Li);function K(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function _e(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function Fe(Y,Re){return h[Y]!==Re?(i.bindFramebuffer(Y,Re),h[Y]=Re,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(Y,Re){let de=g,Ee=!1;if(Y){de=f.get(Re),de===void 0&&(de=[],f.set(Re,de));let xe=Y.textures;if(de.length!==xe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Se=xe.length;$<Se;$++)de[$]=i.COLOR_ATTACHMENT0+$;de.length=xe.length,Ee=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(de)}function ke(Y){return _!==Y?(i.useProgram(Y),_=Y,!0):!1}let ut={[Hr]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};ut[Cp]=i.MIN,ut[Ip]=i.MAX;let be={[Pp]:i.ZERO,[Lp]:i.ONE,[Np]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[kp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Dp]:i.DST_ALPHA,[Up]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Fp]:i.ONE_MINUS_DST_ALPHA,[zp]:i.CONSTANT_COLOR,[Hp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[Gp]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(Y,Re,de,Ee,xe,$,Se,ve,Ve,st){if(Y===Li){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),Y!==Tp){if(Y!==p||st!==R){if((M!==Hr||S!==Hr)&&(i.blendEquation(i.FUNC_ADD),M=Hr,S=Hr),st)switch(Y){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",Y);break}else switch(Y){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",Y);break}b=null,x=null,v=null,w=null,y.set(0,0,0),T=0,p=Y,R=st}return}xe=xe||Re,$=$||de,Se=Se||Ee,(Re!==M||xe!==S)&&(i.blendEquationSeparate(ut[Re],ut[xe]),M=Re,S=xe),(de!==b||Ee!==x||$!==v||Se!==w)&&(i.blendFuncSeparate(be[de],be[Ee],be[$],be[Se]),b=de,x=Ee,v=$,w=Se),(ve.equals(y)===!1||Ve!==T)&&(i.blendColor(ve.r,ve.g,ve.b,Ve),y.copy(ve),T=Ve),p=Y,R=!1}function Be(Y,Re){Y.side===pn?_e(i.CULL_FACE):K(i.CULL_FACE);let de=Y.side===Cn;Re&&(de=!de),Le(de),Y.blending===$s&&Y.transparent===!1?Pe(Li):Pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let Ee=Y.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ne(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(Y){F!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),F=Y)}function J(Y){Y!==wp?(K(i.CULL_FACE),Y!==I&&(Y===eh?i.cullFace(i.BACK):Y===Ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),I=Y}function ee(Y){Y!==B&&(N&&i.lineWidth(Y),B=Y)}function ne(Y,Re,de){Y?(K(i.POLYGON_OFFSET_FILL),(U!==Re||O!==de)&&(U=Re,O=de,a.getReversed()&&(Re=-Re),i.polygonOffset(Re,de))):_e(i.POLYGON_OFFSET_FILL)}function pe(Y){Y?K(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Me(Y){Y===void 0&&(Y=i.TEXTURE0+C-1),H!==Y&&(i.activeTexture(Y),H=Y)}function V(Y,Re,de){de===void 0&&(H===null?de=i.TEXTURE0+C-1:de=H);let Ee=k[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},k[de]=Ee),(Ee.type!==Y||Ee.texture!==Re)&&(H!==de&&(i.activeTexture(de),H=de),i.bindTexture(Y,Re||z[Y]),Ee.type=Y,Ee.texture=Re)}function Qe(){let Y=k[H];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ze(){try{i.compressedTexImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function E(){try{i.texSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function W(){try{i.texSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function le(){try{i.texStorage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function me(){try{i.texStorage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function se(){try{i.texImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function Q(){try{i.texImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ge(Y){return d[Y]!==void 0?d[Y]:i.getParameter(Y)}function Ae(Y,Re){d[Y]!==Re&&(i.pixelStorei(Y,Re),d[Y]=Re)}function Ce(Y){he.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),he.copy(Y))}function Ie(Y){G.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function $e(Y,Re){let de=l.get(Re);de===void 0&&(de=new WeakMap,l.set(Re,de));let Ee=de.get(Y);Ee===void 0&&(Ee=i.getUniformBlockIndex(Re,Y.name),de.set(Y,Ee))}function rt(Y,Re){let Ee=l.get(Re).get(Y);c.get(Re)!==Ee&&(i.uniformBlockBinding(Re,Ee,Y.__bindingPointIndex),c.set(Re,Ee))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},H=null,k={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,b=null,x=null,S=null,v=null,w=null,y=new tt(0,0,0),T=0,R=!1,F=null,I=null,B=null,U=null,O=null,he.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:_e,bindFramebuffer:Fe,drawBuffers:ye,useProgram:ke,setBlending:Pe,setMaterial:Be,setFlipSided:Le,setCullFace:J,setLineWidth:ee,setPolygonOffset:ne,setScissorTest:pe,activeTexture:Me,bindTexture:V,unbindTexture:Qe,compressedTexImage2D:ze,compressedTexImage3D:L,texImage2D:se,texImage3D:Q,pixelStorei:Ae,getParameter:ge,updateUBOMapping:$e,uniformBlockBinding:rt,texStorage2D:le,texStorage3D:me,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:Ce,viewport:Ie,reset:at}}function Zb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return g?new OffscreenCanvas(L,E):Ns("canvas")}function m(L,E,W){let j=1,ie=ze(L);if((ie.width>W||ie.height>W)&&(j=W/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let le=Math.floor(j*ie.width),me=Math.floor(j*ie.height);h===void 0&&(h=_(le,me));let se=E?_(le,me):h;return se.width=le,se.height=me,se.getContext("2d").drawImage(L,0,0,le,me),it("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+le+"x"+me+")."),se}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function p(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,E,W,j,ie,le=!1){if(L!==null){if(i[L]!==void 0)return i[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me;j&&(me=e.get("EXT_texture_norm16"),me||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=E;if(E===i.RED&&(W===i.FLOAT&&(se=i.R32F),W===i.HALF_FLOAT&&(se=i.R16F),W===i.UNSIGNED_BYTE&&(se=i.R8),W===i.UNSIGNED_SHORT&&me&&(se=me.R16_EXT),W===i.SHORT&&me&&(se=me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.R8UI),W===i.UNSIGNED_SHORT&&(se=i.R16UI),W===i.UNSIGNED_INT&&(se=i.R32UI),W===i.BYTE&&(se=i.R8I),W===i.SHORT&&(se=i.R16I),W===i.INT&&(se=i.R32I)),E===i.RG&&(W===i.FLOAT&&(se=i.RG32F),W===i.HALF_FLOAT&&(se=i.RG16F),W===i.UNSIGNED_BYTE&&(se=i.RG8),W===i.UNSIGNED_SHORT&&me&&(se=me.RG16_EXT),W===i.SHORT&&me&&(se=me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RG8UI),W===i.UNSIGNED_SHORT&&(se=i.RG16UI),W===i.UNSIGNED_INT&&(se=i.RG32UI),W===i.BYTE&&(se=i.RG8I),W===i.SHORT&&(se=i.RG16I),W===i.INT&&(se=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RGB8UI),W===i.UNSIGNED_SHORT&&(se=i.RGB16UI),W===i.UNSIGNED_INT&&(se=i.RGB32UI),W===i.BYTE&&(se=i.RGB8I),W===i.SHORT&&(se=i.RGB16I),W===i.INT&&(se=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),W===i.UNSIGNED_INT&&(se=i.RGBA32UI),W===i.BYTE&&(se=i.RGBA8I),W===i.SHORT&&(se=i.RGBA16I),W===i.INT&&(se=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&me&&(se=me.RGB16_EXT),W===i.SHORT&&me&&(se=me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),E===i.RGBA){let Q=le?Pa:gt.getTransfer(ie);W===i.FLOAT&&(se=i.RGBA32F),W===i.HALF_FLOAT&&(se=i.RGBA16F),W===i.UNSIGNED_BYTE&&(se=Q===Ct?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&me&&(se=me.RGBA16_EXT),W===i.SHORT&&me&&(se=me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(L,E){let W;return L?E===null||E===mi||E===Qs?W=i.DEPTH24_STENCIL8:E===Wn?W=i.DEPTH32F_STENCIL8:E===Js&&(W=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mi||E===Qs?W=i.DEPTH_COMPONENT24:E===Wn?W=i.DEPTH_COMPONENT32F:E===Js&&(W=i.DEPTH_COMPONENT16),W}function v(L,E){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==Ft?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){let E=L.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function y(L){let E=L.target;E.removeEventListener("dispose",y),F(E)}function T(L){let E=n.get(L);if(E.__webglInit===void 0)return;let W=L.source,j=f.get(W);if(j){let ie=j[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(L),Object.keys(j).length===0&&f.delete(W)}n.remove(L)}function R(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let W=L.source,j=f.get(W);delete j[E.__cacheKey],a.memory.textures--}function F(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let ie=0;ie<E.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=L.textures;for(let j=0,ie=W.length;j<ie;j++){let le=n.get(W[j]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(L)}let I=0;function B(){I=0}function U(){return I}function O(L){I=L}function C(){let L=I;return L>=r.maxTextures&&it("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,L}function N(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function X(L,E){let W=n.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let j=L.image;if(j===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function P(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){_e(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function H(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){_e(W,L,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function k(L,E){let W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Fe(W,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let ae={[Vn]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Ps]:i.MIRRORED_REPEAT},ce={[Kt]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},he={[jp]:i.NEVER,[nm]:i.ALWAYS,[Jp]:i.LESS,[Ec]:i.LEQUAL,[Qp]:i.EQUAL,[Tc]:i.GEQUAL,[em]:i.GREATER,[tm]:i.NOTEQUAL};function G(L,E){if(E.type===Wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ft||E.magFilter===js||E.magFilter===Gr||E.magFilter===pi||E.minFilter===Ft||E.minFilter===js||E.minFilter===Gr||E.minFilter===pi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ae[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ae[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ae[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==Gr&&E.minFilter!==pi||E.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ue(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));let j=E.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let le=N(E);if(le!==L.__cacheKey){ie[le]===void 0&&(ie[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[le].usedTimes++;let me=ie[L.__cacheKey];me!==void 0&&(ie[L.__cacheKey].usedTimes--,me.usedTimes===0&&R(E)),L.__cacheKey=le,L.__webglTexture=ie[le].texture}return W}function z(L,E,W){return Math.floor(Math.floor(L/W)/E)}function K(L,E,W,j){let le=L.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,j,E.data);else{le.sort((Ae,Ce)=>Ae.start-Ce.start);let me=0;for(let Ae=1;Ae<le.length;Ae++){let Ce=le[me],Ie=le[Ae],$e=Ce.start+Ce.count,rt=z(Ie.start,E.width,4),at=z(Ce.start,E.width,4);Ie.start<=$e+1&&rt===at&&z(Ie.start+Ie.count-1,E.width,4)===rt?Ce.count=Math.max(Ce.count,Ie.start+Ie.count-Ce.start):(++me,le[me]=Ie)}le.length=me+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,Ce=le.length;Ae<Ce;Ae++){let Ie=le[Ae],$e=Math.floor(Ie.start/4),rt=Math.ceil(Ie.count/4),at=$e%E.width,Y=Math.floor($e/E.width),Re=rt,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,at,Y,Re,de,W,j,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function _e(L,E,W){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);let ie=ue(L,E),le=E.source;t.bindTexture(j,L.__webglTexture,i.TEXTURE0+W);let me=n.get(le);if(le.version!==me.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let de=gt.getPrimaries(gt.workingColorSpace),Ee=E.colorSpace===qn?null:gt.getPrimaries(E.colorSpace),xe=E.colorSpace===qn||de===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=m(E.image,!1,r.maxTextureSize);Q=Qe(E,Q);let ge=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Ce=x(E.internalFormat,ge,Ae,E.normalized,E.colorSpace,E.isVideoTexture);G(j,E);let Ie,$e=E.mipmaps,rt=E.isVideoTexture!==!0,at=me.__version===void 0||ie===!0,Y=le.dataReady,Re=v(E,Q);if(E.isDepthTexture)Ce=S(E.format===vr,E.type),at&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ge,Ae,null));else if(E.isDataTexture)if($e.length>0){rt&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,$e[0].width,$e[0].height);for(let de=0,Ee=$e.length;de<Ee;de++)Ie=$e[de],rt?Y&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ie.width,Ie.height,ge,Ae,Ie.data):t.texImage2D(i.TEXTURE_2D,de,Ce,Ie.width,Ie.height,0,ge,Ae,Ie.data);E.generateMipmaps=!1}else rt?(at&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,Q.width,Q.height),Y&&K(E,Q,ge,Ae)):t.texImage2D(i.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ge,Ae,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,$e[0].width,$e[0].height,Q.depth);for(let de=0,Ee=$e.length;de<Ee;de++)if(Ie=$e[de],E.format!==vn)if(ge!==null)if(rt){if(Y)if(E.layerUpdates.size>0){let xe=Rh(Ie.width,Ie.height,E.format,E.type);for(let $ of E.layerUpdates){let Se=Ie.data.subarray($*xe/Ie.data.BYTES_PER_ELEMENT,($+1)*xe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,$,Ie.width,Ie.height,1,ge,Se)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ie.width,Ie.height,Q.depth,ge,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ce,Ie.width,Ie.height,Q.depth,0,Ie.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ie.width,Ie.height,Q.depth,ge,Ae,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ce,Ie.width,Ie.height,Q.depth,0,ge,Ae,Ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{rt&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,$e[0].width,$e[0].height);for(let de=0,Ee=$e.length;de<Ee;de++)Ie=$e[de],E.format!==vn?ge!==null?rt?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Ie.width,Ie.height,ge,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ce,Ie.width,Ie.height,0,Ie.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ie.width,Ie.height,ge,Ae,Ie.data):t.texImage2D(i.TEXTURE_2D,de,Ce,Ie.width,Ie.height,0,ge,Ae,Ie.data)}else if(E.isDataArrayTexture)if(rt){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,Q.width,Q.height,Q.depth),Y)if(E.layerUpdates.size>0){let de=Rh(Q.width,Q.height,E.format,E.type);for(let Ee of E.layerUpdates){let xe=Q.data.subarray(Ee*de/Q.data.BYTES_PER_ELEMENT,(Ee+1)*de/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,Q.width,Q.height,1,ge,Ae,xe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ae,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,ge,Ae,Q.data);else if(E.isData3DTexture)rt?(at&&t.texStorage3D(i.TEXTURE_3D,Re,Ce,Q.width,Q.height,Q.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ae,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,ge,Ae,Q.data);else if(E.isFramebufferTexture){if(at)if(rt)t.texStorage2D(i.TEXTURE_2D,Re,Ce,Q.width,Q.height);else{let de=Q.width,Ee=Q.height;for(let xe=0;xe<Re;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ce,de,Ee,0,ge,Ae,null),de>>=1,Ee>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),Q.parentNode!==de){de.appendChild(Q),d.add(E),de.onpaint=Ee=>{let xe=Ee.changedElements;for(let $ of d)xe.includes($.image)&&($.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let xe=i.RGBA,$=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,$,Se,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(rt&&at){let de=ze($e[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ce,de.width,de.height)}for(let de=0,Ee=$e.length;de<Ee;de++)Ie=$e[de],rt?Y&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ge,Ae,Ie):t.texImage2D(i.TEXTURE_2D,de,Ce,ge,Ae,Ie);E.generateMipmaps=!1}else if(rt){if(at){let de=ze(Q);t.texStorage2D(i.TEXTURE_2D,Re,Ce,de.width,de.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ae,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ge,Ae,Q);p(E)&&M(j),me.__version=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,W){if(E.image.length!==6)return;let j=ue(L,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);let le=n.get(ie);if(ie.version!==le.__version||j===!0){t.activeTexture(i.TEXTURE0+W);let me=gt.getPrimaries(gt.workingColorSpace),se=E.colorSpace===qn?null:gt.getPrimaries(E.colorSpace),Q=E.colorSpace===qn||me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ge=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let $=0;$<6;$++)!ge&&!Ae?Ce[$]=m(E.image[$],!0,r.maxCubemapSize):Ce[$]=Ae?E.image[$].image:E.image[$],Ce[$]=Qe(E,Ce[$]);let Ie=Ce[0],$e=s.convert(E.format,E.colorSpace),rt=s.convert(E.type),at=x(E.internalFormat,$e,rt,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Re=le.__version===void 0||j===!0,de=ie.dataReady,Ee=v(E,Ie);G(i.TEXTURE_CUBE_MAP,E);let xe;if(ge){Y&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,at,Ie.width,Ie.height);for(let $=0;$<6;$++){xe=Ce[$].mipmaps;for(let Se=0;Se<xe.length;Se++){let ve=xe[Se];E.format!==vn?$e!==null?Y?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ve.width,ve.height,$e,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,at,ve.width,ve.height,0,ve.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ve.width,ve.height,$e,rt,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,at,ve.width,ve.height,0,$e,rt,ve.data)}}}else{if(xe=E.mipmaps,Y&&Re){xe.length>0&&Ee++;let $=ze(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,at,$.width,$.height)}for(let $=0;$<6;$++)if(Ae){Y?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce[$].width,Ce[$].height,$e,rt,Ce[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,at,Ce[$].width,Ce[$].height,0,$e,rt,Ce[$].data);for(let Se=0;Se<xe.length;Se++){let Ve=xe[Se].image[$].image;Y?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Ve.width,Ve.height,$e,rt,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,at,Ve.width,Ve.height,0,$e,rt,Ve.data)}}else{Y?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,$e,rt,Ce[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,at,$e,rt,Ce[$]);for(let Se=0;Se<xe.length;Se++){let ve=xe[Se];Y?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,$e,rt,ve.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,at,$e,rt,ve.image[$])}}}p(E)&&M(i.TEXTURE_CUBE_MAP),le.__version=ie.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ye(L,E,W,j,ie,le){let me=s.convert(W.format,W.colorSpace),se=s.convert(W.type),Q=x(W.internalFormat,me,se,W.normalized,W.colorSpace),ge=n.get(E),Ae=n.get(W);if(Ae.__renderTarget=E,!ge.__hasExternalTextures){let Ce=Math.max(1,E.width>>le),Ie=Math.max(1,E.height>>le);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,le,Q,Ce,Ie,E.depth,0,me,se,null):t.texImage2D(ie,le,Q,Ce,Ie,0,me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,Ae.__webglTexture,0,pe(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,Ae.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let j=E.depthTexture,ie=j&&j.isDepthTexture?j.type:null,le=S(E.stencilBuffer,ie),me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(E),le,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(E),le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,L)}else{let j=E.textures;for(let ie=0;ie<j.length;ie++){let le=j[ie],me=s.convert(le.format,le.colorSpace),se=s.convert(le.type),Q=x(le.internalFormat,me,se,le.normalized,le.colorSpace);Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(E),Q,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(E),Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,E,W){let j=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(E.depthTexture);if(ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),G(i.TEXTURE_CUBE_MAP,E.depthTexture);let ge=s.convert(E.depthTexture.format),Ae=s.convert(E.depthTexture.type),Ce;E.depthTexture.format===Ei?Ce=i.DEPTH_COMPONENT24:E.depthTexture.format===vr&&(Ce=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ce,E.width,E.height,0,ge,Ae,null)}}else X(E.depthTexture,0);let le=ie.__webglTexture,me=pe(E),se=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Q=E.depthTexture.format===vr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ei)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,se,le,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,Q,se,le,0);else if(E.depthTexture.format===vr)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,se,le,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,Q,se,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(L){let E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=j}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let j=0;j<6;j++)ut(E.__webglFramebuffer[j],L,j);else{let j=L.texture.mipmaps;j&&j.length>0?ut(E.__webglFramebuffer[0],L,0):ut(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),ke(E.__webglDepthbuffer[j],L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,le)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(L,E,W){let j=n.get(L);E!==void 0&&ye(j.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&be(L)}function Be(L){let E=L.texture,W=n.get(L),j=n.get(E);L.addEventListener("dispose",y);let ie=L.textures,le=L.isWebGLCubeRenderTarget===!0,me=ie.length>1;if(me||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,a.memory.textures++),le){W.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[se]=[];for(let Q=0;Q<E.mipmaps.length;Q++)W.__webglFramebuffer[se][Q]=i.createFramebuffer()}else W.__webglFramebuffer[se]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)W.__webglFramebuffer[se]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(me)for(let se=0,Q=ie.length;se<Q;se++){let ge=n.get(ie[se]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Me(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){let Q=ie[se];W.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[se]);let ge=s.convert(Q.format,Q.colorSpace),Ae=s.convert(Q.type),Ce=x(Q.internalFormat,ge,Ae,Q.normalized,Q.colorSpace,L.isXRRenderTarget===!0),Ie=pe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ce,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,W.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),G(i.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)ye(W.__webglFramebuffer[se][Q],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Q);else ye(W.__webglFramebuffer[se],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(E)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let se=0,Q=ie.length;se<Q;se++){let ge=ie[se],Ae=n.get(ge),Ce=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ae.__webglTexture),G(Ce,ge),ye(W.__webglFramebuffer,L,ge,i.COLOR_ATTACHMENT0+se,Ce,0),p(ge)&&M(Ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),G(se,E),E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)ye(W.__webglFramebuffer[Q],L,E,i.COLOR_ATTACHMENT0,se,Q);else ye(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,se,0);p(E)&&M(se),t.unbindTexture()}L.depthBuffer&&be(L)}function Le(L){let E=L.textures;for(let W=0,j=E.length;W<j;W++){let ie=E[W];if(p(ie)){let le=b(L),me=n.get(ie).__webglTexture;t.bindTexture(le,me),M(le),t.unbindTexture()}}}let J=[],ee=[];function ne(L){if(L.samples>0){if(Me(L)===!1){let E=L.textures,W=L.width,j=L.height,ie=i.COLOR_BUFFER_BIT,le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(L),se=E.length>1;if(se)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let Q=L.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);let Ae=n.get(E[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,ie,i.NEAREST),c===!0&&(J.length=0,ee.length=0,J.push(i.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(J.push(le),ee.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);let Ae=n.get(E[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function Me(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(L){let E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Qe(L,E){let W=L.colorSpace,j=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==An&&W!==qn&&(gt.getTransfer(W)===Ct?(j!==vn||ie!==_n)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",W)),E}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=B,this.getTextureUnits=U,this.setTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kb(i,e){function t(n,r=qn){let s,a=gt.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===_h)return i.RGB;if(n===vn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===br)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Kl||n===$l||n===jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ro||n===ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jl||n===Ql)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ec)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return s.COMPRESSED_R11_EAC;if(n===nc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ro)return s.COMPRESSED_RG11_EAC;if(n===ic)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===_c||n===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yc)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Mc||n===so||n===Sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:$b,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zh=class extends Ti{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Yh,p={},M=t.getContextAttributes(),b=null,x=null,S=[],v=[],w=new ot,y=null,T=null,R=new tn;R.viewport=new Pt;let F=new tn;F.viewport=new Pt;let I=[R,F],B=new Dl,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=S[z];return K===void 0&&(K=new Os,S[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=S[z];return K===void 0&&(K=new Os,S[z]=K),K.getGripSpace()},this.getHand=function(z){let K=S[z];return K===void 0&&(K=new Os,S[z]=K),K.getHandSpace()};function C(z){let K=v.indexOf(z.inputSource);if(K===-1)return;let _e=S[K];_e!==void 0&&(_e.update(z.inputSource,z.frame,l||a),_e.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let z=0;z<S.length;z++){let K=v[z];K!==null&&(v[z]=null,S[z].disconnect(K))}U=null,O=null,m.reset();for(let z in p)delete p[z];if(e.setRenderTarget(b),f=null,h=null,d=null,r=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),T!==null){let z=T.camera;z.fov=T.fov,z.zoom=T.zoom,z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?vr:Ei,Fe=M.stencil?Qs:mi);let ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new un(h.textureWidth,h.textureHeight,{format:vn,type:_n,depthTexture:new yr(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new un(f.framebufferWidth,f.framebufferHeight,{format:vn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(z){for(let K=0;K<z.removed.length;K++){let _e=z.removed[K],Fe=v.indexOf(_e);Fe>=0&&(v[Fe]=null,S[Fe].disconnect(_e))}for(let K=0;K<z.added.length;K++){let _e=z.added[K],Fe=v.indexOf(_e);if(Fe===-1){for(let ke=0;ke<S.length;ke++)if(ke>=v.length){v.push(_e),Fe=ke;break}else if(v[ke]===null){v[ke]=_e,Fe=ke;break}if(Fe===-1)break}let ye=S[Fe];ye&&ye.connect(_e)}}let P=new D,H=new D;function k(z,K,_e){P.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(_e.matrixWorld);let Fe=P.distanceTo(H),ye=K.projectionMatrix.elements,ke=_e.projectionMatrix.elements,ut=ye[14]/(ye[10]-1),be=ye[14]/(ye[10]+1),Pe=(ye[9]+1)/ye[5],Be=(ye[9]-1)/ye[5],Le=(ye[8]-1)/ye[0],J=(ke[8]+1)/ke[0],ee=ut*Le,ne=ut*J,pe=Fe/(-Le+J),Me=pe*-Le;if(K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Me),z.translateZ(pe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ye[10]===-1)z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let V=ut+pe,Qe=be+pe,ze=ee-Me,L=ne+(Fe-Me),E=Pe*be/Qe*V,W=Be*be/Qe*V;z.projectionMatrix.makePerspective(ze,L,E,W,V,Qe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ae(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let K=z.near,_e=z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=F.near=R.near=K,B.far=F.far=R.far=_e,(U!==B.near||O!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),U=B.near,O=B.far),B.layers.mask=z.layers.mask|6,R.layers.mask=B.layers.mask&-5,F.layers.mask=B.layers.mask&-3;let Fe=z.parent,ye=B.cameras;ae(B,Fe);for(let ke=0;ke<ye.length;ke++)ae(ye[ke],Fe);ye.length===2?k(B,R,F):B.projectionMatrix.copy(R.projectionMatrix),T===null&&z.isPerspectiveCamera&&(T={camera:z,fov:z.fov,zoom:z.zoom}),ce(z,B,Fe)};function ce(z,K,_e){_e===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(_e.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Fr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(z){return p[z]};let he=null;function G(z,K){if(u=K.getViewerPose(l||a),g=K,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Fe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let be=0;be<_e.length;be++){let Pe=_e[be],Be=null;if(f!==null)Be=f.getViewport(Pe);else{let J=d.getViewSubImage(h,Pe);Be=J.viewport,be===0&&(e.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(x))}let Le=I[be];Le===void 0&&(Le=new tn,Le.layers.enable(be),Le.viewport=new Pt,I[be]=Le),Le.matrix.fromArray(Pe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Pe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Be.x,Be.y,Be.width,Be.height),be===0&&(B.matrix.copy(Le.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(Le)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let be=d.getDepthInformation(_e[0]);be&&be.isValid&&be.texture&&m.init(be,r.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let be=0;be<_e.length;be++){let Pe=_e[be].camera;if(Pe){let Be=p[Pe];Be||(Be=new Ga,p[Pe]=Be);let Le=d.getCameraImage(Pe);Be.sourceTexture=Le}}}}for(let _e=0;_e<S.length;_e++){let Fe=v[_e],ye=S[_e];Fe!==null&&ye!==void 0&&ye.update(Fe,K,l||a)}he&&he(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ue=new Lm;ue.setAnimationLoop(G),this.setAnimationLoop=function(z){he=z},this.dispose=function(){}}},Jb=new Je,Bm=new ht;Bm.set(-1,0,0,0,1,0,0,0,1);function Qb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Eh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,b,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let v=S.program;n.uniformBlockBinding(x,v)}function l(x,S){let v=r[x.id];v===void 0&&(m(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(x,w);let y=e.render.frame;s[x.id]!==y&&(h(x),s[x.id]=y)}function u(x){let S=d();x.__bindingPointIndex=S;let v=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=r[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=v.length;y<T;y++){let R=v[y];if(Array.isArray(R))for(let F=0,I=R.length;F<I;F++)f(R[F],y,F,w);else f(R,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,v,w){if(_(x,S,v,w)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let F=0;F<T.length;F++){let I=T[F],B=p(I);g(I,x.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,S,v){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,v)}function _(x,S,v,w){let y=x.value,T=S+"_"+v;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let R=w[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let S=x.uniforms,v=0,w=16;for(let T=0,R=S.length;T<R;T++){let F=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,B=F.length;I<B;I++){let U=F[I],O=Array.isArray(U.value)?U.value:[U.value];for(let C=0,N=O.length;C<N;C++){let X=O[C],P=p(X),H=v%w,k=H%P.boundary,ae=H+k;v+=k,ae!==0&&w-ae<P.storage&&(v+=w-ae),U.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=P.storage}}}let y=v%w;return y>0&&(v+=w-y),x.__size=v,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):it("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function b(){for(let x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:b}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function nM(){return Ni===null&&(Ni=new Hs(tM,16,16,br,Xn),Ni.name="DFG_LUT",Ni.minFilter=Ft,Ni.magFilter=Ft,Ni.wrapS=ii,Ni.wrapT=ii,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Ic=class{constructor(e={}){let{canvas:t=im(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Yl,ql,Xl]),p=new Set([_n,mi,Js,Qs,Vl,Gl]),M=new Uint32Array(4),b=new Int32Array(4),x=new D,S=null,v=null,w=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,I=null,B=null,U=null,O=null;this._outputColorSpace=Vt;let C=0,N=0,X=null,P=-1,H=null,k=new Pt,ae=new Pt,ce=null,he=new tt(0),G=0,ue=t.width,z=t.height,K=1,_e=null,Fe=null,ye=new Pt(0,0,ue,z),ke=new Pt(0,0,ue,z),ut=!1,be=new Vs,Pe=!1,Be=!1,Le=new Je,J=new D,ee=new Pt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Me(){return X===null?K:1}let V=n;function Qe(A,q){return t.getContext(A,q)}let ze,L,E,W,j,ie,le,me,se,Q,ge,Ae,Ce,Ie,$e,rt,at,Y,Re,de,Ee,xe,$;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),V===null){let q="webgl2";if(V=Qe(q,A),V===null)throw Qe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(A){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),ct("WebGLRenderer: "+A.message),A}function Se(){ze=new cv(V),ze.init(),Ee=new Kb(V,ze),L=new Q_(V,ze,e,Ee),E=new Yb(V,ze),L.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),B=V.createFramebuffer(),U=V.createFramebuffer(),O=V.createFramebuffer(),W=new dv(V),j=new Nb,ie=new Zb(V,ze,E,j,L,Ee,W),le=new lv(R),me=new px(V),xe=new j_(V,me),se=new uv(V,me,W,xe),Q=new pv(V,se,me,xe,W),Y=new fv(V,L,ie),$e=new ev(j),ge=new Lb(R,le,ze,L,xe,$e),Ae=new Qb(R,j),Ce=new Db,Ie=new Hb(ze),at=new $_(R,le,E,Q,g,c),rt=new qb(R,Q,L),$=new eM(V,W,L,E),Re=new J_(V,ze,W),de=new hv(V,ze,W),W.programs=ge.programs,R.capabilities=L,R.extensions=ze,R.properties=j,R.renderLists=Ce,R.shadowMap=rt,R.state=E,R.info=W}_!==_n&&(T=new gv(_,t.width,t.height,o,r,s));let ve=new Zh(R,V);this.xr=ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(ue,z,!1))},this.getSize=function(A){return A.set(ue,z)},this.setSize=function(A,q,oe=!0){if(ve.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,z=q,t.width=Math.floor(A*K),t.height=Math.floor(q*K),oe===!0&&(t.style.width=A+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ue*K,z*K).floor()},this.setDrawingBufferSize=function(A,q,oe){ue=A,z=q,K=oe,t.width=Math.floor(A*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(_===_n){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,q,oe,te){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,q,oe,te),E.viewport(k.copy(ye).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,q,oe,te){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,q,oe,te),E.scissor(ae.copy(ke).multiplyScalar(K).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){E.setScissorTest(ut=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Fe=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let te=0;if(A){let re=!1;if(X!==null){let Ue=X.texture.format;re=m.has(Ue)}if(re){let Ue=X.texture.type,Xe=p.has(Ue),De=at.getClearColor(),Ze=at.getClearAlpha(),Ye=De.r,dt=De.g,mt=De.b;Xe?(M[0]=Ye,M[1]=dt,M[2]=mt,M[3]=Ze,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=Ye,b[1]=dt,b[2]=mt,b[3]=Ze,V.clearBufferiv(V.COLOR,0,b))}else te|=V.COLOR_BUFFER_BIT}q&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),at.dispose(),Ce.dispose(),Ie.dispose(),j.dispose(),le.dispose(),Q.dispose(),xe.dispose(),$.dispose(),ge.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",si),ve.removeEventListener("sessionend",wr),wt.stop()};function Ve(A){A.preventDefault(),La("WebGLRenderer: Context Lost."),F=!0}function st(){La("WebGLRenderer: Context Restored."),F=!1;let A=W.autoReset,q=rt.enabled,oe=rt.autoUpdate,te=rt.needsUpdate,re=rt.type;Se(),W.autoReset=A,rt.enabled=q,rt.autoUpdate=oe,rt.needsUpdate=te,rt.type=re}function Rt(A){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){let q=A.target;q.removeEventListener("dispose",Gt),Sr(q)}function Sr(A){sr(A),j.remove(A)}function sr(A){let q=j.get(A).programs;q!==void 0&&(q.forEach(function(oe){ge.releaseProgram(oe)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,te,re,Ue){q===null&&(q=ne);let Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,De=ha(A,q,oe,te,re);E.setMaterial(te,Xe);let Ze=oe.index,Ye=1;if(te.wireframe===!0){if(Ze=se.getWireframeAttribute(oe),Ze===void 0)return;Ye=2}let dt=oe.drawRange,mt=oe.attributes.position,Ke=dt.start*Ye,vt=(dt.start+dt.count)*Ye;Ue!==null&&(Ke=Math.max(Ke,Ue.start*Ye),vt=Math.min(vt,(Ue.start+Ue.count)*Ye)),Ze!==null?(Ke=Math.max(Ke,0),vt=Math.min(vt,Ze.count)):mt!=null&&(Ke=Math.max(Ke,0),vt=Math.min(vt,mt.count));let kt=vt-Ke;if(kt<0||kt===1/0)return;xe.setup(re,te,De,oe,Ze);let Nt,bt=Re;if(Ze!==null&&(Nt=me.get(Ze),bt=de,bt.setIndex(Nt)),re.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*Me()),bt.setMode(V.LINES)):bt.setMode(V.TRIANGLES);else if(re.isLine){let an=te.linewidth;an===void 0&&(an=1),E.setLineWidth(an*Me()),re.isLineSegments?bt.setMode(V.LINES):re.isLineLoop?bt.setMode(V.LINE_LOOP):bt.setMode(V.LINE_STRIP)}else re.isPoints?bt.setMode(V.POINTS):re.isSprite&&bt.setMode(V.TRIANGLES);if(re.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))bt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let an=re._multiDrawStarts,Ge=re._multiDrawCounts,on=re._multiDrawCount,_t=Ze?me.get(Ze).bytesPerElement:1,In=j.get(te).currentProgram.getUniforms();for(let $n=0;$n<on;$n++)In.setValue(V,"_gl_DrawID",$n),bt.render(an[$n]/_t,Ge[$n])}else if(re.isInstancedMesh)bt.renderInstances(Ke,kt,re.count);else if(oe.isInstancedBufferGeometry){let an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,an);bt.renderInstances(Ke,kt,Ge)}else bt.render(Ke,kt)};function Mn(A,q,oe,te){I!==null&&A.isNodeMaterial&&I.setObject(te,A),Pe===!0&&$e.setState(A,oe,!1),A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Cn,A.needsUpdate=!0,Jt(A,q,te),A.side=Un,A.needsUpdate=!0,Jt(A,q,te),A.side=pn):Jt(A,q,te)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),I!==null&&I.renderStart(A,q,oe),v=Ie.get(oe),v.init(q),y.push(v),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),v.setupLights(),I!==null&&I.updateLights(v.state.lightsArray),Be=this.localClippingEnabled,Pe=$e.init(this.clippingPlanes,Be),Pe===!0&&$e.setGlobalState(this.clippingPlanes,q),I!==null&&rt.render(v.state.shadowsArray,oe,q);let te=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let Ue=re.material;if(Ue)if(Array.isArray(Ue))for(let Xe=0;Xe<Ue.length;Xe++){let De=Ue[Xe];Mn(De,oe,q,re),te.add(De)}else Mn(Ue,oe,q,re),te.add(Ue)}),v=y.pop(),I!==null&&I.renderEnd(),te},this.compileAsync=function(A,q,oe=null){let te=this.compile(A,q,oe);return new Promise(re=>{function Ue(){if(te.forEach(function(Xe){let Ze=j.get(Xe).currentProgram;(Ze===void 0||Ze.isReady())&&te.delete(Xe)}),te.size===0){re(A);return}setTimeout(Ue,10)}ze.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Kn=null;function Jr(A){Kn&&Kn(A)}function si(){wt.stop()}function wr(){wt.start()}let wt=new Lm;wt.setAnimationLoop(Jr),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){Kn=A,ve.setAnimationLoop(A),A===null?wt.stop():wt.start()},ve.addEventListener("sessionstart",si),ve.addEventListener("sessionend",wr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;I!==null&&I.renderStart(A,q);let oe=ve.enabled===!0&&ve.isPresenting===!0,te=T!==null&&(X===null||oe)&&T.begin(R,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(q),q=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,X),v=Ie.get(A,y.length),v.init(q),v.state.textureUnits=ie.getTextureUnits(),y.push(v),Le.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),be.setFromProjectionMatrix(Le,hi,q.reversedDepth),Be=this.localClippingEnabled,Pe=$e.init(this.clippingPlanes,Be),S=Ce.get(A,w.length),S.init(),w.push(S),ve.enabled===!0&&ve.isPresenting===!0){let Xe=R.xr.getDepthSensingMesh();Xe!==null&&ar(Xe,q,-1/0,R.sortObjects)}ar(A,q,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(v.state.lightsArray),R.sortObjects===!0&&S.sort(_e,Fe),pe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,pe&&at.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&$e.beginShadows();let re=v.state.shadowsArray;if(rt.render(re,A,q),Pe===!0&&$e.endShadows(),(te&&T.hasRenderPass())===!1){let Xe=S.opaque,De=S.transmissive;if(v.setupLights(),q.isArrayCamera){let Ze=q.cameras;if(De.length>0)for(let Ye=0,dt=Ze.length;Ye<dt;Ye++){let mt=Ze[Ye];Qr(Xe,De,A,mt)}pe&&at.render(A);for(let Ye=0,dt=Ze.length;Ye<dt;Ye++){let mt=Ze[Ye];Er(S,A,mt,mt.viewport)}}else De.length>0&&Qr(Xe,De,A,q),pe&&at.render(A),Er(S,A,q)}X!==null&&N===0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X)),te&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),xe.resetDefaultState(),P=-1,H=null,y.pop(),y.length>0?(v=y[y.length-1],ie.setTextureUnits(v.state.textureUnits),Pe===!0&&$e.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,I!==null&&I.renderEnd()};function ar(A,q,oe,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(be)){te&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);let Xe=Q.update(A),De=A.material;De.visible&&S.push(A,Xe,De,oe,ee.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(be))){let Xe=Q.update(A),De=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ee.copy(Xe.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){let Ze=Xe.groups;for(let Ye=0,dt=Ze.length;Ye<dt;Ye++){let mt=Ze[Ye],Ke=De[mt.materialIndex];Ke&&Ke.visible&&S.push(A,Xe,Ke,oe,ee.z,mt,q)}}else De.visible&&S.push(A,Xe,De,oe,ee.z,null,q)}}let Ue=A.children;for(let Xe=0,De=Ue.length;Xe<De;Xe++)ar(Ue[Xe],q,oe,te)}function Er(A,q,oe,te){let{opaque:re,transmissive:Ue,transparent:Xe}=A;v.setupLightsView(oe),Pe===!0&&$e.setGlobalState(R.clippingPlanes,oe),te&&E.viewport(k.copy(te)),re.length>0&&ai(re,q,oe),Ue.length>0&&ai(Ue,q,oe),Xe.length>0&&ai(Xe,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Qr(A,q,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[te.id]===void 0){let Ke=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[te.id]=new un(1,1,{generateMipmaps:!0,type:Ke?Xn:_n,minFilter:pi,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ue=v.state.transmissionRenderTarget[te.id],Xe=te.viewport||k;Ue.setSize(Xe.z*R.transmissionResolutionScale,Xe.w*R.transmissionResolutionScale);let De=R.getRenderTarget(),Ze=R.getActiveCubeFace(),Ye=R.getActiveMipmapLevel();R.setRenderTarget(Ue),R.getClearColor(he),G=R.getClearAlpha(),G<1&&R.setClearColor(16777215,.5),R.clear(),pe&&at.render(oe);let dt=R.toneMapping;R.toneMapping=Gn;let mt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),Pe===!0&&$e.setGlobalState(R.clippingPlanes,te),ai(A,oe,te),ie.updateMultisampleRenderTarget(Ue),ie.updateRenderTargetMipmap(Ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let vt=0,kt=q.length;vt<kt;vt++){let Nt=q[vt],{object:bt,geometry:an,material:Ge,group:on}=Nt;if(Ge.side===pn&&bt.layers.test(te.layers)){let _t=Ge.side;Ge.side=Cn,Ge.needsUpdate=!0,Bn(bt,oe,te,an,Ge,on),Ge.side=_t,Ge.needsUpdate=!0,Ke=!0}}Ke===!0&&(ie.updateMultisampleRenderTarget(Ue),ie.updateRenderTargetMipmap(Ue))}R.setRenderTarget(De,Ze,Ye),R.setClearColor(he,G),mt!==void 0&&(te.viewport=mt),R.toneMapping=dt}function ai(A,q,oe){let te=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Ue=A.length;re<Ue;re++){let Xe=A[re],{object:De,geometry:Ze,group:Ye}=Xe,dt=Xe.material;dt.allowOverride===!0&&te!==null&&(dt=te),De.layers.test(oe.layers)&&Bn(De,q,oe,Ze,dt,Ye)}}function Bn(A,q,oe,te,re,Ue){I!==null&&re.isNodeMaterial&&I.setObject(A,re),A.onBeforeRender(R,q,oe,te,re,Ue),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(R,q,oe,te,A,Ue),re.transparent===!0&&re.side===pn&&re.forceSinglePass===!1?(re.side=Cn,re.needsUpdate=!0,R.renderBufferDirect(oe,q,te,re,A,Ue),re.side=Un,re.needsUpdate=!0,R.renderBufferDirect(oe,q,te,re,A,Ue),re.side=pn):R.renderBufferDirect(oe,q,te,re,A,Ue),A.onAfterRender(R,q,oe,te,re,Ue)}function Jt(A,q,oe){q.isScene!==!0&&(q=ne);let te=j.get(A),re=v.state.lights,Ue=v.state.shadowsArray,Xe=re.state.version,De=ge.getParameters(A,re.state,Ue,q,oe,v.state.lightProbeGridArray),Ze=ge.getProgramCacheKey(De),Ye=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;let dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=le.get(A.envMap||te.environment,dt),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",Gt),Ye=new Map,te.programs=Ye);let mt=Ye.get(Ze);if(mt!==void 0){if(te.currentProgram===mt&&te.lightsStateVersion===Xe)return bo(A,De),mt}else De.uniforms=ge.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,oe,De),A.onBeforeCompile(De,R),mt=ge.acquireProgram(De,Ze),Ye.set(Ze,mt),te.uniforms=De.uniforms;let Ke=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=$e.uniform),bo(A,De),te.needsLights=Mo(A),te.lightsStateVersion=Xe,te.needsLights&&(Ke.ambientLightColor.value=re.state.ambient,Ke.lightProbe.value=re.state.probe,Ke.sunLights.value=re.state.sun,Ke.sunLightShadows.value=re.state.sunShadow,Ke.directionalLights.value=re.state.directional,Ke.directionalLightShadows.value=re.state.directionalShadow,Ke.spotLights.value=re.state.spot,Ke.spotLightShadows.value=re.state.spotShadow,Ke.rectAreaLights.value=re.state.rectArea,Ke.ltc_1.value=re.state.rectAreaLTC1,Ke.ltc_2.value=re.state.rectAreaLTC2,Ke.pointLights.value=re.state.point,Ke.pointLightShadows.value=re.state.pointShadow,Ke.hemisphereLights.value=re.state.hemi,Ke.sunShadowMatrix.value=re.state.sunShadowMatrix,Ke.sunShadowCascade.value=re.state.sunShadowCascade,Ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ke.spotLightMatrix.value=re.state.spotLightMatrix,Ke.spotLightMap.value=re.state.spotLightMap,Ke.pointShadowMatrix.value=re.state.pointShadowMatrix),te.lightProbeGrid=v.state.lightProbeGridArray.length>0,te.currentProgram=mt,te.uniformsList=null,mt}function vo(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=ia.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function bo(A,q){let oe=j.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function es(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(q.matrixWorld);for(let oe=0,te=A.length;oe<te;oe++){let re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(x))return re}return null}function ha(A,q,oe,te,re){q.isScene!==!0&&(q=ne),ie.resetTextureUnits();let Ue=q.fog,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,De=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:gt.workingColorSpace,Ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ye=le.get(te.envMap||Xe,Ze),dt=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,mt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!oe.morphAttributes.position,vt=!!oe.morphAttributes.normal,kt=!!oe.morphAttributes.color,Nt=Gn;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=bt!==void 0?bt.length:0,Ge=j.get(te),on=v.state.lights;if(Pe===!0&&(Be===!0||A!==H)){let Ut=A===H&&te.id===P;$e.setState(te,A,Ut)}let _t=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==on.state.version||Ge.outputColorSpace!==De||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==Ye||te.fog===!0&&Ge.fog!==Ue||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==dt||Ge.vertexTangents!==mt||Ge.morphTargets!==Ke||Ge.morphNormals!==vt||Ge.morphColors!==kt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==an||!!Ge.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ge.__version=te.version);let In=Ge.currentProgram;_t===!0&&(In=Jt(te,q,re),I&&te.isNodeMaterial&&I.onUpdateProgram(te,In,Ge));let $n=!1,yi=!1,Bi=!1,Mt=In.getUniforms(),zt=Ge.uniforms;if(E.useProgram(In.program)&&($n=!0,yi=!0,Bi=!0),te.id!==P&&(P=te.id,yi=!0),Ge.needsLights){let Ut=es(v.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ut&&(Ge.lightProbeGrid=Ut,yi=!0)}if($n||H!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Mt.setValue(V,"projectionMatrix",A.projectionMatrix),Mt.setValue(V,"viewMatrix",A.matrixWorldInverse);let fe=Mt.map.cameraPosition;fe!==void 0&&fe.setValue(V,J.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Mt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Mt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,yi=!0,Bi=!0)}if(Ge.needsLights&&(on.state.sunShadowMap.length>0&&Mt.setValue(V,"sunShadowMap",on.state.sunShadowMap,ie),on.state.directionalShadowMap.length>0&&Mt.setValue(V,"directionalShadowMap",on.state.directionalShadowMap,ie),on.state.spotShadowMap.length>0&&Mt.setValue(V,"spotShadowMap",on.state.spotShadowMap,ie),on.state.pointShadowMap.length>0&&Mt.setValue(V,"pointShadowMap",on.state.pointShadowMap,ie)),re.isSkinnedMesh){Mt.setOptional(V,re,"bindMatrix"),Mt.setOptional(V,re,"bindMatrixInverse");let Ut=re.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Mt.setValue(V,"boneTexture",Ut.boneTexture,ie))}re.isBatchedMesh&&(Mt.setOptional(V,re,"batchingTexture"),Mt.setValue(V,"batchingTexture",re._matricesTexture,ie),Mt.setOptional(V,re,"batchingIdTexture"),Mt.setValue(V,"batchingIdTexture",re._indirectTexture,ie),Mt.setOptional(V,re,"batchingColorTexture"),re._colorsTexture!==null&&Mt.setValue(V,"batchingColorTexture",re._colorsTexture,ie));let _i=oe.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Y.update(re,oe,In),(yi||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Mt.setValue(V,"receiveShadow",re.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(zt.envMapIntensity.value=q.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=nM()),yi){if(Mt.setValue(V,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&da(zt,Bi),Ue&&te.fog===!0&&Ae.refreshFogUniforms(zt,Ue),Ae.refreshMaterialUniforms(zt,te,K,z,v.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){let Ut=Ge.lightProbeGrid;zt.probesSH.value=Ut.texture,zt.probesMin.value.copy(Ut.boundingBox.min),zt.probesMax.value.copy(Ut.boundingBox.max),zt.probesResolution.value.copy(Ut.resolution)}ia.upload(V,vo(Ge),zt,ie)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ia.upload(V,vo(Ge),zt,ie),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Mt.setValue(V,"center",re.center),Mt.setValue(V,"modelViewMatrix",re.modelViewMatrix),Mt.setValue(V,"normalMatrix",re.normalMatrix),Mt.setValue(V,"modelMatrix",re.matrixWorld),te.uniformsGroups!==void 0){let Ut=te.uniformsGroups;for(let fe=0,Z=Ut.length;fe<Z;fe++){let Ne=Ut[fe];$.update(Ne,In),$.bind(Ne,In)}}return In}function da(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Mo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,oe){let te=j.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),j.get(A.texture).__webglTexture=q,j.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){let oe=j.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,oe=0){X=A,C=q,N=oe;let te=null,re=!1,Ue=!1;if(A){let De=j.get(A);if(De.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),k.copy(A.viewport),ae.copy(A.scissor),ce=A.scissorTest,E.viewport(k),E.scissor(ae),E.setScissorTest(ce),P=-1;return}else if(De.__webglFramebuffer===void 0)ie.setupRenderTarget(A);else if(De.__hasExternalTextures)ie.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let dt=A.depthTexture;if(De.__boundDepthTexture!==dt){if(dt!==null&&j.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(A)}}let Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ue=!0);let Ye=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?te=Ye[q][oe]:te=Ye[q],re=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?te=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?te=Ye[oe]:te=Ye,k.copy(A.viewport),ae.copy(A.scissor),ce=A.scissorTest}else k.copy(ye).multiplyScalar(K).floor(),ae.copy(ke).multiplyScalar(K).floor(),ce=ut;if(oe!==0&&(te=B),E.bindFramebuffer(V.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(k),E.scissor(ae),E.setScissorTest(ce),re){let De=j.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,oe)}else if(Ue){let De=q;for(let Ze=0;Ze<A.textures.length;Ze++){let Ye=j.get(A.textures[Ze]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,oe,De)}}else if(A!==null&&oe!==0){let De=j.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,oe)}P=-1};function fa(A){let q=j.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=L.textureFormatReadable(A.format),q.__typeReadable=L.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,oe,te,re,Ue,Xe,De=0){if(!(A&&A.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){E.bindFramebuffer(V.FRAMEBUFFER,Ze);try{let Ye=A.textures[De],dt=Ye.format,mt=Ye.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);let Ke=fa(Ye);if(Ke.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&oe>=0&&oe<=A.height-re&&V.readPixels(q,oe,te,re,Ee.convert(dt),Ee.convert(mt),Ue)}finally{let Ye=X!==null?j.get(X).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,te,re,Ue,Xe,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if(q>=0&&q<=A.width-te&&oe>=0&&oe<=A.height-re){E.bindFramebuffer(V.FRAMEBUFFER,Ze);let Ye=A.textures[De],dt=Ye.format,mt=Ye.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);let Ke=fa(Ye);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,vt),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),V.readPixels(q,oe,te,re,Ee.convert(dt),Ee.convert(mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let kt=X!==null?j.get(X).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,kt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await sm(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,vt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(vt),V.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){let te=Math.pow(2,-oe),re=Math.floor(A.image.width*te),Ue=Math.floor(A.image.height*te),Xe=q!==null?q.x:0,De=q!==null?q.y:0;ie.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Xe,De,re,Ue),E.unbindTexture()},this.copyTextureToTexture=function(A,q,oe=null,te=null,re=0,Ue=0){let Xe,De,Ze,Ye,dt,mt,Ke,vt,kt,Nt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(oe!==null)Xe=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Ze=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,dt=oe.min.y,mt=oe.isBox3?oe.min.z:0;else{let zt=Math.pow(2,-re);Xe=Math.floor(Nt.width*zt),De=Math.floor(Nt.height*zt),A.isDataArrayTexture?Ze=Nt.depth:A.isData3DTexture?Ze=Math.floor(Nt.depth*zt):Ze=1,Ye=0,dt=0,mt=0}te!==null?(Ke=te.x,vt=te.y,kt=te.z):(Ke=0,vt=0,kt=0);let bt=Ee.convert(q.format),an=Ee.convert(q.type),Ge;q.isData3DTexture?(ie.setTexture3D(q,0),Ge=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ge=V.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ge=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);let on=E.getParameter(V.UNPACK_ROW_LENGTH),_t=E.getParameter(V.UNPACK_IMAGE_HEIGHT),In=E.getParameter(V.UNPACK_SKIP_PIXELS),$n=E.getParameter(V.UNPACK_SKIP_ROWS),yi=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ye),E.pixelStorei(V.UNPACK_SKIP_ROWS,dt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,mt);let Bi=A.isDataArrayTexture||A.isData3DTexture,Mt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){let zt=j.get(A),_i=j.get(q),Ut=j.get(zt.__renderTarget),fe=j.get(_i.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,Ut.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Z=0;Z<Ze;Z++)Bi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(A).__webglTexture,re,mt+Z),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(q).__webglTexture,Ue,kt+Z)),V.blitFramebuffer(Ye,dt,Xe,De,Ke,vt,Xe,De,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||j.has(A)){let zt=j.get(A),_i=j.get(q);E.bindFramebuffer(V.READ_FRAMEBUFFER,U),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,O);for(let Ut=0;Ut<Ze;Ut++)Bi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.__webglTexture,re,mt+Ut):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zt.__webglTexture,re),Mt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_i.__webglTexture,Ue,kt+Ut):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_i.__webglTexture,Ue),re!==0?V.blitFramebuffer(Ye,dt,Xe,De,Ke,vt,Xe,De,V.COLOR_BUFFER_BIT,V.NEAREST):Mt?V.copyTexSubImage3D(Ge,Ue,Ke,vt,kt+Ut,Ye,dt,Xe,De):V.copyTexSubImage2D(Ge,Ue,Ke,vt,Ye,dt,Xe,De);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ge,Ue,Ke,vt,kt,Xe,De,Ze,bt,an,Nt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,Ue,Ke,vt,kt,Xe,De,Ze,bt,Nt.data):V.texSubImage3D(Ge,Ue,Ke,vt,kt,Xe,De,Ze,bt,an,Nt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,Ke,vt,Xe,De,bt,an,Nt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,Ke,vt,Nt.width,Nt.height,bt,Nt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,Ke,vt,Xe,De,bt,an,Nt);E.pixelStorei(V.UNPACK_ROW_LENGTH,on),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),E.pixelStorei(V.UNPACK_SKIP_PIXELS,In),E.pixelStorei(V.UNPACK_SKIP_ROWS,$n),E.pixelStorei(V.UNPACK_SKIP_IMAGES,yi),Ue===0&&q.generateMipmaps&&V.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){C=0,N=0,X=null,E.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function km(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:c=0,iterations:l=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=N=>N.getWorldPosition(new D),d=[i,e,t].map(N=>N.quaternion.clone());i.updateWorldMatrix(!0,!0);let h=u(i),f=u(e),g=u(t),_=h.distanceTo(f)+f.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),_].every(Number.isFinite)||_<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,_*s));let p=g.clone().add(m),M=f.clone().sub(h).cross(g.clone().sub(f));if(M.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};M.normalize();function b(N,X){let P=u(N);return N.worldToLocal(P.clone().add(X)).sub(N.worldToLocal(P)).normalize()}let x=b(i,M),S=b(e,M),v=f.clone().sub(h).normalize(),w=b(i,new D().crossVectors(M,v).normalize()),y=Math.PI-h.clone().sub(f).angleTo(g.clone().sub(f)),T=c?[0,0,0,0]:[0,0,0],R=[we.degToRad(a[0]),we.degToRad(a[1]),...c?[we.degToRad(c)]:[],we.degToRad(o)],F=b(i,v);function I(N){return i.quaternion.copy(d[0]).multiply(new qe().setFromAxisAngle(x,N[0])).multiply(new qe().setFromAxisAngle(w,N[1])),c&&i.quaternion.multiply(new qe().setFromAxisAngle(F,N[2])),e.quaternion.copy(d[1]).multiply(new qe().setFromAxisAngle(S,N[N.length-1])),t.quaternion.copy(d[2]),i.updateWorldMatrix(!0,!0),u(t)}function B(){let N=u(i),X=u(e),P=u(t),H=X.clone().sub(N).cross(P.clone().sub(X)),k=Math.PI-N.clone().sub(X).angleTo(P.clone().sub(X));return H.dot(M)>0&&k>=Math.min(y,we.degToRad(5))-.001&&k<=Math.max(y,we.degToRad(150))+.001}let U=T.slice(),O=g.distanceToSquared(p),C=.001;for(let N=0;N<l;N++){let X=I(T),P=p.clone().sub(X);if(P.length()<8e-4)break;let H=T.map((G,ue)=>{let z=T.slice();return z[ue]+=C,I(z).sub(X).multiplyScalar(1/C)});I(T);let k=new ht().set(...[0,1,2].flatMap(G=>[0,1,2].map(ue=>H.reduce((z,K)=>z+K.getComponent(G)*K.getComponent(ue),0)+(G===ue?5e-4:0)))),ae=P.clone().applyMatrix3(k.invert()),ce=H.map(G=>G.dot(ae)),he=!1;for(let G of[1,.5,.25,.125]){let ue=T.map((K,_e)=>we.clamp(K+we.clamp(ce[_e],-.15,.15)*G,-R[_e],R[_e]));if(I(ue),!B())continue;let z=u(t).distanceToSquared(p);if(!(z>=O)){U=ue.slice(),O=z,T.splice(0,T.length,...ue),he=!0;break}}if(!he)break}return I(U),{accepted:!0,angles:U,offset:m.length(),error:Math.sqrt(O),nativeFlex:y,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(M)}}function zm(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let c=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(c)||c.length>16||new Set(c.map(J=>J.id)).size!==c.length)throw new Error("Invalid scene profiles");if(o)for(let J of c){if(typeof J.id!="string"||!Array.isArray(J.contacts)||J.contacts.length>16)throw new Error("Invalid source contacts");for(let ee of J.contacts){if(typeof ee.bone!="string"||!["ik","unsupported"].includes(ee.kind))throw new Error("Unknown source contact");if(ee.kind==="ik"&&(!i.getObjectByName(ee.ikBone)||!ee.drag||!ee.sizeCm||![ee.sizeCm.X,ee.sizeCm.Y,ee.sizeCm.Z,...Object.values(ee.drag.ScreenPercentToWorld||{}),...Object.values(ee.drag.WorldSpaceLimit||{}),...Object.values(ee.drag.WorldSpaceLmitLeftUp||{}),ee.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let l={},u=[],d=null,h=!1,f=null,g=[],_=null,m={},p="",M=!0,b=new Map,x=new Map,S=new Map,v=new Map,w=new Map,y=J=>J.getWorldPosition(new D),T=()=>c.find(J=>J.id===(l.scene?.()||"main")),R=()=>a==="Enya"&&["show_04","show_05"].includes(T()?.id),F=()=>R()||M,I=()=>(T()?.contacts||[]).filter(J=>J.kind==="ik"),B=document.createElement("div");B.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(B);let U=document.createElement("div");B.append(U);let O=document.createElement("button");O.textContent="\u8FD8\u539F\u817F\u90E8",O.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",O.onclick=()=>Fe("lower_legs"),B.append(O);function C(){for(let J of u)J.bone.quaternion.copy(J.base);u=[]}function N(){return(T()?.contacts||[]).map(J=>{let ee=i.getObjectByName(J.bone);if(!ee)return null;let ne=y(ee).project(e),pe=t.getBoundingClientRect();return{id:J.id,label:/Foot/.test(J.bone)?J.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(J.bone)?"\u624B\u90E8":"\u5934\u90E8",x:pe.left+(ne.x+1)*pe.width/2,y:pe.top+(1-ne.y)*pe.height/2,supportedIK:J.kind==="ik"}}).filter(Boolean)}function X(J){let ee=i.getObjectByName(J.ikBone),ne=ee?.parent,pe=ne?.parent;if(!pe?.isBone||!ne?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:J,foot:ee,calf:ne,thigh:pe,base:[pe,ne,ee].map(Me=>Me.quaternion.clone()),anchor:i.worldToLocal(y(ee)),offset:new D,dx:0,dy:0}}function P(J){if(!J?.alphaVerified)return null;for(let ee of I()){let ne=i.getObjectByName(ee.ikBone),pe=ne?.worldToLocal(new D().fromArray(J.point)),Me=ee.sizeCm;if(pe&&Math.abs(pe.x)<Me.X*.01&&Math.abs(pe.y)<Me.Z*.01&&Math.abs(pe.z)<Me.Y*.01)return ee}for(let ee of I()){let ne=ee.ikBone.includes("-L-")?"L":"R";if((J.skinBones||[]).some(pe=>pe?.startsWith("Bip001-"+ne+"-")&&/Thigh|Calf|Foot/.test(pe)))return ee}return null}function H(J,ee){if(!ee||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[V,Qe]of b)Qe.contact.ikBone===ee.ikBone&&ae(V,!0);J.preventDefault(),J.stopImmediatePropagation(),l.beforeDrag?.();let ne=x.get(ee.ikBone),pe=ne?i.worldToLocal(y(ne.foot)):null;C();let Me=X(ee);ne&&(Me.base=ne.base,Me.anchor=pe),S.delete(ee.ikBone),Object.assign(Me,{pointerId:J.pointerId,x:J.clientX,y:J.clientY,dragging:!1,triggered:!1,pendingTrigger:null,pendingVoiceId:ee.voiceId||null}),b.set(J.pointerId,Me),t.setPointerCapture(J.pointerId),f={contact:ee.id,handle:J.target?.dataset?.legHandle||null},l.interacting?.(!0),!M&&ee.voiceId&&l.voice?.(ee.voiceId)}function k(J){H(J,P(n(J.clientX,J.clientY)))}function ae(J,ee=!1){let ne=b.get(J);ne&&(b.delete(J),t.hasPointerCapture(J)&&t.releasePointerCapture(J),b.size===0&&l.interacting?.(!1),ne.dragging&&(!ee&&(R()||M&&!ne.pendingTrigger)?(x.set(ne.contact.ikBone,ne),p="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u677E\u624B\u540E\u518D\u56DE\u5E94\uFF0C\u53EF\u968F\u65F6\u8FD8\u539F\u817F\u90E8\u3002"):x.has(ne.contact.ikBone)||S.set(ne.contact.ikBone,{...ne,releasedAt:performance.now()})),ee||(ne.pendingTrigger?(d=ne.pendingTrigger,l.reaction?.(ne.pendingTrigger.sampleId)):!ne.dragging&&ne.pendingVoiceId&&!M&&l.voice?.(ne.pendingVoiceId),l.event?.({type:"touch",region:"leg",label:ne.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:ne.dragging?"drag":"tap",dx:Math.round(ne.dx*10)/10,dy:Math.round(ne.dy*10)/10,held:x.has(ne.contact.ikBone),source:"bounded-leg-control",confidence:1,completed:!0})))}function ce(J,ee,ne){return ne?.endsWith("::Less")?J<ee:ne?.endsWith("::Greater")?J>ee:null}function he(J){let ee=b.get(J.pointerId);if(!ee||(J.stopImmediatePropagation(),!ee.dragging&&Math.hypot(J.clientX-ee.x,J.clientY-ee.y)<5))return;ee.dragging=!0;let ne=t.getBoundingClientRect(),pe=ee.contact.drag,Me=F()?55:0,V=(J.clientX-ee.x)/Math.max(1,ne.width)*(F()?100:pe.ScreenPercentToWorld?.X||0),Qe=(J.clientY-ee.y)/Math.max(1,ne.height)*(F()?100:pe.ScreenPercentToWorld?.Y||0);ee.dx=we.clamp(V,-Math.max(Me,pe.WorldSpaceLmitLeftUp?.X||0),Math.max(Me,pe.WorldSpaceLimit?.X||0)),ee.dy=we.clamp(Qe,-Math.max(Me,pe.WorldSpaceLmitLeftUp?.Y||0),Math.max(Me,pe.WorldSpaceLimit?.Y||0));let ze=new D().setFromMatrixColumn(e.matrixWorld,0),L=new D().setFromMatrixColumn(e.matrixWorld,1),E=ze.multiplyScalar(ee.dx*.01).addScaledVector(L,-ee.dy*.01);if(ee.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(E))),!R())for(let W of ee.contact.thresholds||[]){let j=[ce(ee.dx,W.limit.X,W.xCompare),ce(ee.dy,W.limit.Y,W.yCompare)].filter(ie=>ie!==null);if(!ee.triggered&&j.length&&j.every(Boolean)){ee.triggered=!0;let ie={sampleId:W.sampleId,dx:ee.dx,dy:ee.dy,source:"serialized-drag-threshold"};M?ee.pendingTrigger=ie:(d=ie,ae(J.pointerId),l.reaction?.(W.sampleId));break}}}function G(J){b.has(J.pointerId)&&(J.stopImmediatePropagation(),ae(J.pointerId))}function ue(J){ae(J.pointerId,!0)}function z(){for(let J of[...b.keys()])ae(J,!0);C()}function K(){z(),x.clear(),S.clear(),w.clear(),p=""}function _e(){let J=I().map(ee=>ee.ikBone.includes("-L-")?"left":"right");return[...new Set(J.map(ee=>"raise_"+ee+"_leg")),...J.includes("left")&&J.includes("right")?["spread_legs"]:[],...J.length?["lower_legs"]:[]]}function Fe(J){if(!_e().includes(J))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(z(),J==="lower_legs"){for(let[pe,Me]of x)S.set(pe,{...Me,releasedAt:performance.now()});x.clear(),p="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}C();let ee=I(),ne=ee.filter(pe=>J==="spread_legs"||J.includes(pe.ikBone.includes("-L-")?"left":"right"));for(let pe of ne){let Me=X(pe),V=i.getObjectByName(pe.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),Qe=y(Me.thigh).sub(y(V||Me.thigh.parent));if(Qe.lengthSq()<1e-8)continue;Qe.normalize();let ze=new D(0,1,0).transformDirection(i.matrixWorld),L=y(Me.thigh).distanceTo(y(Me.calf))+y(Me.calf).distanceTo(y(Me.foot)),E=J==="spread_legs"?Qe.multiplyScalar(L*(R()?.48:.18)).addScaledVector(ze,L*.08):ze.multiplyScalar(L*(R()?.36:.18)).addScaledVector(y(Me.thigh).sub(y(Me.foot)).normalize(),L*(R()?.2:0));Me.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(E))),Me.startedAt=performance.now(),x.set(pe.ikBone,Me),S.delete(pe.ikBone)}p=J==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":J.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let ye=new Map;function ke(J,ee=!1){if(!ye.has(J.name)){let pe=[];i.traverse(Me=>{if(!Me.isSkinnedMesh)return;let V=Me.geometry.getAttribute("skinIndex"),Qe=Me.geometry.getAttribute("skinWeight");if(!V||!Qe)return;let ze=new Set(Me.skeleton.bones.map((E,W)=>E.name===J.name||E.name===J.name.replace("-Foot","-Toe0")?W:-1).filter(E=>E>=0)),L=[];for(let E=0;E<V.count;E++){let W=0;for(let j=0;j<4;j++)ze.has(V.getComponent(E,j))&&(W+=Qe.getComponent(E,j));W>.45&&L.push(E)}if(L.length){let E=Me.geometry.getAttribute("position"),W=new Set;for(let j of[-1,0,1])for(let ie of[-1,0,1])for(let le of[-1,0,1]){if(j===0&&ie===0&&le===0)continue;let me=-1/0,se=L[0];for(let Q of L){let ge=E.getX(Q)*j+E.getY(Q)*ie+E.getZ(Q)*le;ge>me&&(me=ge,se=Q)}W.add(se)}pe.push({mesh:Me,vertices:L,probes:[...W]})}}),ye.set(J.name,pe)}let ne=[];for(let{mesh:pe,vertices:Me,probes:V}of ye.get(J.name))for(let Qe of ee?Me:V)ne.push(pe.getVertexPosition(Qe,new D).applyMatrix4(pe.matrixWorld));return ne}function ut(J,ee){let ne=y(J).dot(ee);return we.clamp(Math.max(.04,...ke(J).map(pe=>ne-pe.dot(ee)))+.015,.055,.16)}function be(){let J=I(),ee=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[ne,pe]of v)J.some(Me=>Me.id===ne)||(pe.remove(),v.delete(ne));for(let ne of J){let pe=i.getObjectByName(ne.ikBone);if(!pe)continue;let Me=v.get(ne.id);Me||(Me=document.createElement("button"),Me.dataset.legHandle=String(ne.id),Me.textContent=ne.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",Me.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",Me.addEventListener("pointerdown",ze=>H(ze,ne)),v.set(ne.id,Me),B.append(Me));let V=t.getBoundingClientRect(),Qe=y(pe).lerp(y(pe.parent),.5).project(e);Me.hidden=!!ee,Me.style.left=we.clamp(V.left+(Qe.x+1)*V.width/2,55,V.right-55)+"px",Me.style.top=we.clamp(V.top+(1-Qe.y)*V.height/2,100,V.bottom-150)+"px"}O.hidden=ee||!x.size}function Pe(){let J=performance.now();for(let[ne]of b)t.hasPointerCapture(ne)||ae(ne,!0);if(be(),h){U.replaceChildren();for(let ne of N()){let pe=document.createElement("span");pe.textContent=ne.label,pe.style.cssText=`position:absolute;left:${ne.x}px;top:${ne.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,U.append(pe)}}let ee=new Map(x);for(let ne of b.values())ne.dragging&&ee.set(ne.contact.ikBone,ne);for(let[ne,pe]of S)pe.weight=Math.max(0,1-(J-pe.releasedAt)/(1e3*Math.max(.15,pe.contact.drag.DragRecoverTime||.35))),pe.weight===0?S.delete(ne):ee.has(ne)||ee.set(ne,pe);if(R()){for(let ne of I())if(!ee.has(ne.ikBone)){let pe=X(ne);pe.passive=!0,ee.set(ne.ikBone,pe)}}g=[],m={};for(let ne of ee.values()){let pe=[ne.thigh,ne.calf,ne.foot],Me=pe.map(le=>le.quaternion.clone()),V=ne.weight??(ne.startedAt?we.smoothstep(Math.min(1,(J-ne.startedAt)/450),0,1):1);pe.forEach((le,me)=>le.quaternion.copy(ne.base[me])),i.updateWorldMatrix(!0,!0);let Qe=y(ne.calf),ze=y(ne.foot),L=i.localToWorld(ne.anchor.clone().add(ne.offset)),E=0,W=.055,j=[...ne.thigh.parent.matrixWorld.elements,...ne.base.flatMap(le=>le.toArray()),...L.toArray(),...pe.flatMap(le=>[...le.position.toArray(),...le.scale.toArray()])],ie=w.get(ne.contact.ikBone);if(ie&&ie.key.length===j.length&&j.every((le,me)=>Math.abs(le-ie.key[me])<1e-4)){pe.forEach((le,me)=>{le.quaternion.copy(Me[me]).slerp(ie.quaternions[me],V).normalize(),u.push({bone:le,base:Me[me],applied:le.quaternion.clone()})}),_={...ie.report,cached:!0},m[ne.contact.ikBone]=_;continue}if(R()&&s){let le=s(ze);if(le&&le.clearance>-.5&&le.clearance<.5){W=ut(ne.foot,le.normal);for(let me=0;me<3;me++){let se=0,Q=le.normal;for(let ge of[.7,.85,1]){let Ae=s(Qe.clone().lerp(L,ge));Ae&&(se=Math.max(se,(W-Ae.clearance)/ge),Q=Ae.normal)}if(se=we.clamp(se,0,.65-E),se<5e-4)break;L.addScaledVector(Q,se),E+=se}}}E>0&&g.push({bone:ne.foot.name,correction:E,radius:W});try{let le=R()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let me=0;me<4&&(pe.forEach((ge,Ae)=>ge.quaternion.copy(ne.base[Ae])),_=km(ne.thigh,ne.calf,ne.foot,L,le),i.updateWorldMatrix(!0,!0),!(!R()||!s));me++){let se=1/0,Q=new D(0,1,0);for(let ge of ke(ne.foot)){let Ae=s(ge);Ae&&Ae.clearance<se&&(se=Ae.clearance,Q=Ae.normal)}if(_.footClearance=Number.isFinite(se)?se:null,se>=.012)break;L.addScaledVector(Q,Math.min(.2,.018-se))}w.set(ne.contact.ikBone,{key:j,quaternions:pe.map(me=>me.quaternion.clone()),report:{..._}}),m[ne.contact.ikBone]={..._,target:L.toArray(),actual:y(ne.foot).toArray()},pe.forEach((me,se)=>{let Q=me.quaternion.clone();me.quaternion.copy(Me[se]).slerp(Q,V).normalize(),u.push({bone:me,base:Me[se],applied:me.quaternion.clone()})})}catch(le){pe.forEach((me,se)=>me.quaternion.copy(Me[se])),p="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+le.message}}if(ee.size){i.updateWorldMatrix(!0,!0);let ne=new Set;i.traverse(pe=>{pe.isSkinnedMesh&&!ne.has(pe.skeleton)&&(pe.skeleton.update(),ne.add(pe.skeleton))})}}let Be=[["pointerdown",k],["pointermove",he],["pointerup",G],["pointercancel",ue],["lostpointercapture",ue]];for(let[J,ee]of Be)t.addEventListener(J,ee);let Le=()=>z();return window.addEventListener("blur",Le),{configure:J=>l=J,setDeferredFeedback:J=>(M=!!J,M),hitTest:(J,ee)=>P(n(J,ee))?.id,restore:C,tick:Pe,cancel:K,suspend:z,command:Fe,available:_e,profile:T,points:N,togglePoints(){return h=!h,h||U.replaceChildren(),N().length},headReaction:()=>T()?.contacts.find(J=>/hari|Head/.test(J.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:x.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[...x.keys()].map(J=>J.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):S.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:p,available:_e()}),footMeshContacts:()=>Object.fromEntries(I().map(J=>{let ee=i.getObjectByName(J.ikBone),ne=ee?ke(ee,!0).map(pe=>s?.(pe)?.clearance).filter(Number.isFinite):[];return[J.ikBone,{samples:ne.length,minClearance:ne.length?Math.min(...ne):null}]})),snapshot:()=>({scene:T()?.id,deferredFeedback:M,legSolve:_,solves:m,bedCorrections:g,lastPick:f,active:b.size>0,offset:b.size?[b.values().next().value.dx,b.values().next().value.dy]:null,recovering:S.size>0,held:[...x.keys()],lastEvent:d}),dispose(){K(),B.remove();for(let[J,ee]of Be)t.removeEventListener(J,ee);window.removeEventListener("blur",Le)}}}var Hm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},Nc=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=Hm[e]||Hm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function Vm(i,e,t){let n=new ot,r=new ot,s=0,a=0,o=!1,c=0,l=0,u=!1,d=!0,h=!1,f=0,g=[],_=new Map,m={value:Array.from({length:4},()=>new D)},p={value:Array.from({length:4},()=>new D)},M={value:[.05,.05,.05,.05]},b=new D,x=null;i.traverse(C=>{C.isMesh&&C.userData.snowbreakSurfaceKey&&_.set(C.userData.snowbreakSurfaceKey,C)});function S(C){let N=C.hit,X=_.get(N.mesh);if(!X||!N.barycentric)return new D().fromArray(N.point);let P=X.geometry.index,H=new D;for(let k=0;k<3;k++){let ae=P?P.getX(N.triangle*3+k):N.triangle*3+k;H.addScaledVector(X.getVertexPosition(ae,new D),N.barycentric[k])}return X.localToWorld(H)}let v=[],w=new Map,y=new Set;i.traverse(C=>{if(C.isSkinnedMesh&&y.add(C.skeleton),C.isBone&&/^EyeJoint_[LR]$/.test(C.name)&&v.push(C),!C.isSkinnedMesh||!["skin","cloth-or-room"].includes(C.material?.userData.profile))return;let N=C.material,X=N.onBeforeCompile,P=N.customProgramCacheKey.bind(N);N.onBeforeCompile=H=>{X(H),Object.assign(H.uniforms,{senseCenters:m,senseOffsets:p,senseRadii:M}),H.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+H.vertexShader,H.vertexShader=H.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},N.customProgramCacheKey=()=>P()+"-surface-spring-v2",N.needsUpdate=!0});function T(C,N,X="camera"){X==="camera"&&(h||performance.now()<f)||!Number.isFinite(C)||!Number.isFinite(N)||(n.set(we.clamp(C,-1,1),we.clamp(N,-1,1)),s=performance.now()+1600)}function R(C){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let N=t.getBoundingClientRect();f=performance.now()+1600,T((C.clientX-N.left)/N.width*2-1,1-(C.clientY-N.top)/N.height*2,"touch")}function F(C,N){if(!d||!C?.alphaVerified||!Array.isArray(C.point)||!_.has(C.mesh))return!1;x?.spring.release();let X=N?.id||C.anatomy?.id||"body",P=g.find(H=>!H.spring.pressed&&H.region===X&&S(H).distanceTo(new D().fromArray(C.point))<.04);return P?(x=P,x.hit=C):(g.length===4&&g.shift(),x={hit:C,region:X,spring:new Nc(X),direction:e.getWorldDirection(new D)},g.push(x)),x.spring.press(),o=u=!0,!0}let I=C=>{h=!0,R(C)},B=()=>{o=!1,h=!1,x?.spring.release(),x=null,f=performance.now()+1e3};t.addEventListener("pointerdown",I),t.addEventListener("pointermove",R),t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B),t.addEventListener("lostpointercapture",B);function U(C=performance.now()){let N=Math.min(.04,Math.max(0,(C-a)/1e3));a=C,C>s&&n.set(0,0),r.lerp(n,1-Math.exp(-N*12));let X=new D().setFromMatrixColumn(e.matrixWorld,1),P=new D().setFromMatrixColumn(e.matrixWorld,0);for(let H of v){let k=H.quaternion.clone(),ae=new Je().extractRotation(H.parent.matrixWorld),ce=new Je().makeRotationFromQuaternion(new qe().setFromAxisAngle(X,r.x*.07).multiply(new qe().setFromAxisAngle(P,-r.y*.05))),he=ae.clone().invert().multiply(ce).multiply(ae);H.quaternion.premultiply(new qe().setFromRotationMatrix(he)).normalize(),H.updateWorldMatrix(!1,!0),w.set(H,{base:k,applied:H.quaternion.clone()})}for(let H=g.length-1;H>=0;H--)g[H].spring.step(N),g[H].spring.active||g.splice(H,1);l=0,c=0,u=g.length>0;for(let H=0;H<4;H++){let k=g[H];p.value[H].set(0,0,0),k&&(m.value[H].copy(S(k)),M.value[H]=k.spring.profile.radius,p.value[H].copy(k.direction).multiplyScalar(k.spring.offset),Math.abs(k.spring.offset)>Math.abs(l)&&(l=k.spring.offset),c+=Math.abs(k.spring.velocity))}if(v.length)for(let H of y)H.update()}function O(){for(let[C,N]of w)C.quaternion.angleTo(N.applied)<1e-6&&C.quaternion.copy(N.base);w.clear()}return{gaze:T,touch:F,tick:U,restore:O,reset(){O(),o=u=h=!1,f=0,l=c=0,g.length=0,x=null;for(let C of p.value)C.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:v.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(C=>({region:C.region,offset:C.spring.offset,velocity:C.spring.velocity,pressed:C.spring.pressed,center:S(C).toArray()}))}),dispose(){for(let[C,N]of[["pointerdown",I],["pointermove",R],["pointerup",B],["pointercancel",B],["lostpointercapture",B]])t.removeEventListener(C,N)}}}function Kh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=v=>v.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let v of[i,e,t]){let w=v.getWorldScale(new D);if(Math.min(w.x,w.y,w.z)<=0||Math.max(w.x,w.y,w.z)-Math.min(w.x,w.y,w.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),d=c.distanceTo(l),h=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),d,h].every(Number.isFinite)||Math.min(d,h)<1e-6)throw new Error("Invalid arm geometry");let f=n.clone().sub(c),g=f.length();if(g<1e-7)throw new Error("Arm target at shoulder");f.normalize();let _=v=>Math.sqrt(Math.max(0,d*d+h*h+2*d*h*Math.cos(we.degToRad(v)))),m=we.clamp(g,Math.max(Math.abs(d-h)+1e-6,_(a)),Math.min(d+h-1e-6,_(s))),p=r.clone().sub(c).addScaledVector(f,-r.clone().sub(c).dot(f));if(p.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");p.normalize();let M=(d*d-h*h+m*m)/(2*m),b=c.clone().addScaledVector(f,M).addScaledVector(p,Math.sqrt(Math.max(0,d*d-M*M))),x=c.clone().addScaledVector(f,m);function S(v,w,y){let T=o(v),R=o(w).sub(T).normalize(),F=y.clone().sub(T).normalize(),I=v.getWorldQuaternion(new qe);I.premultiply(new qe().setFromUnitVectors(R,F)),v.quaternion.copy(v.parent.getWorldQuaternion(new qe).invert().multiply(I)).normalize(),v.updateWorldMatrix(!0,!0)}return S(i,e,b),S(e,t,x),{requested:n.toArray(),reachable:x.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(x),elbowFlex:we.radToDeg(Math.acos(we.clamp((m*m-d*d-h*h)/(2*d*h),-1,1)))}}var qr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function $h(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new D);function d(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function h(){if(d(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),_=u(r),m=u(s),p=u(a),M=g.distanceTo(_)+_.distanceTo(m),b=g.clone().sub(p);if(b.y=0,b.length()<1e-5)throw new Error("Ambiguous shoulder direction");b.normalize();let x=p.clone().addScaledVector(b,M*.55);x.y+=M*.15;let S=g.clone().addScaledVector(b,M);S.y-=M*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new qe),start:m,target:x,pole:S},l=null}function f(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let _=we.clamp(g,0,1),m=_<.3?_/.3:_>.7?(1-_)/.3:1,p=m*m*(3-2*m);if(p<1e-6)return;l=Kh(n,r,s,c.target,c.pole,qr);let M={},b=[];function x(S,v,w,y,T){let R=S.quaternion.clone(),F=v.angleTo(R),I=we.degToRad(w);F>I&&b.push(T),S.quaternion.copy(v).slerp(R,y*Math.min(1,I/Math.max(F,1e-10))).normalize(),M[T]=we.radToDeg(v.angleTo(S.quaternion))}x(n,c.upper,qr.upper,p,"upper"),x(r,c.lower,qr.lower,p,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new qe).invert().multiply(c.wristWorld)),x(s,c.wrist,qr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:M,limited:b,weight:p}}return{begin:h,apply:f,restore:d,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:qr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function Gm(i,e,t=()=>0){let n={};for(let[C,N]of[["left","L"],["right","R"]]){let X=i.getObjectByName(`Bip001-${N}-UpperArm`),P=i.getObjectByName(`Bip001-${N}-Forearm`),H=i.getObjectByName(`Bip001-${N}-Hand`);X?.isBone&&P?.parent===X&&H?.parent===P&&(n[C]={upper:X,lower:P,hand:H})}let r=i.getObjectByName("Bip001-Head")||i.getObjectByName("Bone_head"),s=[],a=new Set;i.traverse(C=>{C.isSkinnedMesh&&a.add(C.skeleton)}),i.traverse(C=>{if(C.isMesh&&C.morphTargetInfluences){let N=C.morphTargetDictionary||{},X=N.L_Eye_close??N.L_eye_close??N.eyecloseL??N.L_Eye_close_Spcl_Ty_neg_1,P=N.R_Eye_close??N.R_eye_close??N.eyecloseR??N.R_Eye_close_Spcl_Ty_neg_1;Number.isInteger(X)&&s.push({mesh:C,index:X,name:"L_Eye_close"}),Number.isInteger(P)&&s.push({mesh:C,index:P,name:"R_Eye_close"})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(C=>C.name==="L_Eye_close")&&s.some(C=>C.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,d=0,h=[],f=[];i.traverse(C=>{if(C.isMesh&&C.morphTargetDictionary&&C.morphTargetInfluences){let N=C.morphTargetDictionary.Viseme_A;if(!Number.isInteger(N))return;let X=0,P=C.geometry?.morphAttributes?.position?.[N];if(P)for(let k=0;k<P.count;k++){let ae=Math.hypot(P.getX(k),P.getY(k),P.getZ(k));ae>X&&(X=ae)}let H=X>.001?we.clamp(.0125/X,.85,2.2):.85;f.push({mesh:C,index:N,gain:H})}});function g(C,N){if(!o.includes(C)||!C.startsWith("gesture_")||!Number.isFinite(N?.duration)||N.duration<1||N.duration>8||!Array.isArray(N.poses)||N.poses.length<2||N.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let X=-1;for(let P of N.poses){if(P.smile!==void 0&&(!Number.isFinite(P.smile)||P.smile<0||P.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(P.time)||P.time<=X||P.time<0||P.time>N.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");X=P.time;for(let[H,k]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(P[H]&&(!Array.isArray(P[H])||P[H].length!==3||P[H].some((ae,ce)=>!Number.isFinite(ae)||Math.abs(ae)>k[ce])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(N.poses[0].time!==0||X!==N.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:C,plan:N,start:performance.now()},S="\u6B63\u5728\u6267\u884C\uFF1A"+C}function _(C){if(!l)return null;let{plan:N}=l,X=(C-l.start)/1e3;if(X>=N.duration)return S="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let P=Math.max(0,N.poses.findIndex(G=>G.time>=X)-1),H=N.poses[P],k=N.poses[P+1],ae=we.clamp((X-H.time)/(k.time-H.time),0,1),ce=ae*ae*(3-2*ae),he={};for(let G of["head","torso","leftHand","rightHand"])(H[G]||k[G])&&(he[G]=[0,1,2].map(ue=>(H[G]?.[ue]||0)+((k[G]?.[ue]||0)-(H[G]?.[ue]||0))*ce));return he.smile=(H.smile||0)+((k.smile||0)-(H.smile||0))*ce,he}let m=new Set,p=!1,M=0,b=0,x=performance.now(),S="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",v={left:0,right:0},w=0,y=[],T=[],R={left:!1,right:!1};function F(){for(let C of y)C.bone.quaternion.angleTo(C.applied)<1e-6&&C.bone.quaternion.copy(C.base);y.length=0;for(let C of[...T,...h])Math.abs(C.mesh.morphTargetInfluences[C.index]-C.applied)<1e-6&&(C.mesh.morphTargetInfluences[C.index]=C.base);T.length=h.length=0}function I(C){if(!o.includes(C))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,C==="raise_left_hand"&&m.add("left"),C==="raise_right_hand"&&m.add("right"),C==="raise_both_hands"&&(m=new Set(["left","right"])),C==="lower_hands"&&m.clear(),C==="close_eyes"&&(p=!0),C==="open_eyes"&&(p=!1),C==="turn_left"&&(b+=90),C==="turn_right"&&(b-=90),C==="turn_back"&&(b=180-t()),C==="face_front"&&(b=-t()),S="\u5DF2\u63A5\u6536\uFF1A"+C,U()}function B(){let C=performance.now(),N=Math.min(.25,(C-x)/1e3);x=C;let X=1-Math.exp(-9*N),P=_(C);if(P){i.updateWorldMatrix(!0,!0);let he=ye=>ye.getWorldPosition(new D),G=i.getObjectByName("Bip001-Pelvis"),ue=r&&G?he(r).sub(he(G)).normalize():new D(0,1,0),z=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new qe)),K=i.getObjectByName("EyeJoint_L"),_e=i.getObjectByName("EyeJoint_R");if(r&&K&&_e){let ye=he(K).add(he(_e)).multiplyScalar(.5).sub(he(r));ye.addScaledVector(ue,-ye.dot(ue)),ye.length()>1e-5&&(z=ye.normalize())}let Fe=new D().crossVectors(ue,z).normalize();z.crossVectors(Fe,ue).normalize();for(let[ye,ke]of[[r,P.head],[c,P.torso]])if(ye&&ke){let ut=ye.quaternion.clone(),be=ye.parent.getWorldQuaternion(new qe),Pe=new qe().setFromAxisAngle(ue,we.degToRad(-ke[0])).multiply(new qe().setFromAxisAngle(Fe,we.degToRad(ke[1]))).multiply(new qe().setFromAxisAngle(z,we.degToRad(ke[2])));ye.quaternion.premultiply(be.clone().invert().multiply(Pe).multiply(be)).normalize(),y.push({bone:ye,base:ut,applied:ye.quaternion.clone()}),ye.updateWorldMatrix(!1,!0)}}M+=(b-M)*X,e(M),R={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let H=new D(0,1,0),k=i.getObjectByName("EyeJoint_L"),ae=i.getObjectByName("EyeJoint_R"),ce=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new qe));r&&k&&ae&&(ce.copy(k.getWorldPosition(new D).add(ae.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),ce.y=0,ce.length()<1e-5&&ce.set(0,0,1),ce.normalize());for(let he of["left","right"]){v[he]+=((m.has(he)?1:0)-v[he])*X;let G=P?.[he+"Hand"],ue=G?we.smoothstep(Math.hypot(...G),0,.25):v[he],z=n[he];if(!z||!r||ue<.001)continue;let K=Le=>Le.getWorldPosition(new D),_e=K(r),Fe=K(z.upper),ye=Fe.distanceTo(K(z.lower))+K(z.lower).distanceTo(K(z.hand)),ke=Fe.clone().sub(_e);if(ke.y=0,ke.length()<1e-6)continue;ke.normalize();let ut=_e.clone().addScaledVector(ke,ye*.45);ut.y+=ye*.18,G&&(ut.copy(K(z.hand)).addScaledVector(ke,Math.abs(G[0])*ye),ut.y+=G[1]*ye,ut.addScaledVector(ce,G[2]*ye));let be=Fe.clone().addScaledVector(ce,ye*.7).addScaledVector(ke,ye*.2).addScaledVector(H,-ye*.2),Pe=z.hand.getWorldQuaternion(new qe),Be=[z.upper,z.lower,z.hand].map(Le=>({bone:Le,base:Le.quaternion.clone()}));try{Kh(z.upper,z.lower,z.hand,ut,be,qr);for(let[Qe,ze]of[z.upper,z.lower].entries()){let L=Be[Qe].base,E=ze.quaternion.clone(),W=L.angleTo(E),j=we.degToRad([100,140][Qe]);ze.quaternion.copy(L).slerp(E,ue*Math.min(1,j/Math.max(W,1e-8))).normalize(),ze.updateWorldMatrix(!1,!0)}let Le=Pe.clone(),J=Qe=>i.getObjectByName(`Bip001-${he==="left"?"L":"R"}-Finger${Qe}`),ee=J(1),ne=J(2),pe=J(4);if(ee&&ne&&pe){let Qe=K(ee).sub(K(pe)).normalize(),ze=K(ne).sub(K(z.hand));ze.addScaledVector(Qe,-ze.dot(Qe)).normalize();let L=new Je().makeBasis(Qe,ze,new D().crossVectors(Qe,ze).normalize()),E=l?.id==="gesture_open_arms"?ke.clone():H.clone(),W=ce.clone().multiplyScalar(he==="left"?1:-1),j=new D().crossVectors(E,W).normalize();E.crossVectors(W,j).normalize();let ie=new Je().makeBasis(j,E,new D().crossVectors(j,E).normalize());Le=new qe().setFromRotationMatrix(ie.multiply(L.invert())).multiply(z.hand.getWorldQuaternion(new qe));let le=Le.clone().multiply(z.hand.getWorldQuaternion(new qe).invert()),me=K(z.hand).sub(K(z.lower)).normalize(),se=new D(le.x,le.y,le.z).dot(me),Q=we.clamp(2*Math.atan2(se,le.w),-Math.PI/2,Math.PI/2)*.6*ue;z.lower.quaternion.multiply(new qe().setFromAxisAngle(z.hand.position.clone().normalize(),Q)).normalize(),z.lower.updateWorldMatrix(!1,!0)}let Me=z.hand.parent.getWorldQuaternion(new qe).invert().multiply(Le),V=Be[2].base.angleTo(Me);z.hand.quaternion.copy(Be[2].base).slerp(Me,ue*Math.min(1,we.degToRad(90)/Math.max(V,1e-8))).normalize(),z.hand.updateWorldMatrix(!1,!0);for(let Qe of Be)y.push({...Qe,applied:Qe.bone.quaternion.clone()});R[he]=K(z.hand).y>Fe.y+ye*.25}catch(Le){for(let J of Be)J.bone.quaternion.copy(J.base);S="\u4E3E\u624B\u5931\u8D25\uFF1A"+Le.message,m.delete(he)}}w+=((p?1:0)-w)*X;for(let he of s){let G=he.mesh.morphTargetInfluences[he.index]||0,ue=we.lerp(G,p?1:0,w);T.push({...he,base:G,applied:ue}),he.mesh.morphTargetInfluences[he.index]=ue}P?.smile&&i.traverse(he=>{if(!he.isMesh||!he.morphTargetInfluences)return;let G=he.morphTargetDictionary||{};for(let ue of[G.L_Eye_smile??G.L_eye_smile??G.eyemileL??G.eyesmileL,G.R_Eye_smile??G.R_eye_smile??G.eyemileR??G.eyesmileR]){if(!Number.isInteger(ue))continue;let z=he.morphTargetInfluences[ue]||0,K=Math.max(z,Math.min(.5,P.smile));h.push({mesh:he,index:ue,base:z,applied:K}),he.morphTargetInfluences[ue]=K}}),d+=(u-d)*(1-Math.exp(-N*(u>d?24:16)));for(let he of f){let G=he.mesh.morphTargetInfluences[he.index]||0,ue=Math.max(G,d*(he.gain||.85));h.push({...he,base:G,applied:ue}),he.mesh.morphTargetInfluences[he.index]=ue}i.updateWorldMatrix(!0,!0);for(let he of a)he.update()}function U(){i.updateWorldMatrix(!0,!0);for(let X of["left","right"]){let P=n[X];if(!P)continue;let H=P.upper.getWorldPosition(new D),k=P.lower.getWorldPosition(new D),ae=P.hand.getWorldPosition(new D);R[X]=ae.y>H.y+(H.distanceTo(k)+k.distanceTo(ae))*.25}let C=s.length?s.reduce((X,P)=>X+(P.mesh.morphTargetInfluences[P.index]||0),0)/s.length:0,N=M+t();return{available:[...o],eyes:s.length?C>.95?"\u5DF2\u95ED\u5408":C<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...R},hands:R.left&&R.right?"\u53CC\u624B\u62AC\u8D77":R.left?"\u5DE6\u624B\u62AC\u8D77":R.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(M-b)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((N%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(N%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(N)}\u5EA6`,yaw:N,lastResult:S}}function O(){F(),u=d=0,l=null,m.clear(),p=!1,v.left=v.right=w=0,M=b=0,e(0),S="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:I,playGesture:g,tick:B,restore:F,snapshot:U,reset:O,setSpeechLevel:C=>{u=Number.isFinite(C)?we.clamp(C,0,1):0},speechState:()=>({level:d,targets:f.length,weights:f.map(C=>C.mesh.morphTargetInfluences[C.index])}),releaseHands:()=>{m.clear(),l=null}}}function Wm(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:jh(i)}function jh(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let h=0;h<3;h++)u[h]=n[h]+(.2*o[h]+.6*c[h]+.2*l[h]-n[h])*t;let d=new qe().fromArray(o,3).slerp(new qe().fromArray(c,3),.75).slerp(new qe().fromArray(l,3),.2);return new qe().fromArray(n,3).slerp(d,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function Xm(i,e,t,n,r=null,s=null){if(n.opacity===0){let M=new dn({visible:!1,transparent:!0,opacity:0,depthWrite:!1});return M.userData.profile="hidden",M}let a=/eye01/.test(i),o=/eye01_shadow/.test(i),c=/face01_inst_2/.test(i),l=/face01/.test(i),u=/hair01/.test(i),d=/body00(?:_ma)?_inst|face01/.test(i),h=n.surface||"",f=h==="black-stocking",g=h==="white-stocking",_=f||g;if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let m={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?Un:pn},p;if(a&&!o)p=new dn(m),p.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
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
    `)},p.customProgramCacheKey=()=>"snowbreak-wet-eye-v1";else if(o)p=new dn(m);else{let M=l?.2:d?.28:_?.34:.58,b={...m,normalMap:t||null,normalScale:new ot(M,-M)};if(u?Object.assign(b,{roughness:.3,metalness:.05,clearcoat:.52,clearcoatRoughness:.22,sheen:.45,sheenRoughness:.4,sheenColor:new tt(16777215),envMapIntensity:1.15}):l?Object.assign(b,{roughness:.48,metalness:0,clearcoat:.16,clearcoatRoughness:.38,sheen:.24,sheenRoughness:.52,sheenColor:new tt(16770778),envMapIntensity:.48}):d?Object.assign(b,{roughness:.42,metalness:0,clearcoat:.28,clearcoatRoughness:.34,sheen:.32,sheenRoughness:.44,sheenColor:new tt(16769748),envMapIntensity:.68}):f?Object.assign(b,{roughness:r?.9:.34,metalness:r?.3:.04,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.42,clearcoatRoughness:.24,sheen:.75,sheenRoughness:.34,sheenColor:new tt(11058400),envMapIntensity:1.15}):g?Object.assign(b,{roughness:r?.9:.32,metalness:r?.18:.02,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.44,clearcoatRoughness:.24,sheen:.78,sheenRoughness:.32,sheenColor:new tt(16185599),envMapIntensity:1.15}):r?Object.assign(b,{roughness:.92,metalness:.98,roughnessMap:r,metalnessMap:r,clearcoat:.55,clearcoatRoughnessMap:r,clearcoatRoughness:.52,envMapIntensity:1.55}):Object.assign(b,{roughness:.4,metalness:.12,clearcoat:.32,clearcoatRoughness:.32,envMapIntensity:1.05}),p=new yn(b),l||d){let x=!!(l&&s);p.onBeforeCompile=S=>{x&&(S.uniforms.uFaceShadowMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
      }`)},p.customProgramCacheKey=()=>l?x?"sb-face-sss-sdf-v3":"sb-face-sss-v3":"sb-skin-sss-v3"}else if(u){let x=!!s;p.onBeforeCompile=S=>{x&&(S.uniforms.uHairHighlightMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
     }`)},p.customProgramCacheKey=()=>x?"sb-hair-angelring-hl-v1":"sb-hair-angelring-v1"}else f?(p.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`)},p.customProgramCacheKey=()=>"sb-black-stocking-v2"):g?(p.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`)},p.customProgramCacheKey=()=>"sb-white-stocking-v2"):(p.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
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
     }`)},p.customProgramCacheKey=()=>r?"sb-equip-orm-v2":"sb-equip-v2")}return c?(p.polygonOffset=!0,p.polygonOffsetFactor=-1.5,p.polygonOffsetUnits=-1.5):n.transparent&&!o&&(p.polygonOffset=!0,p.polygonOffsetFactor=-.25,p.polygonOffsetUnits=-.25),p.userData.profile=a?"eye":l?"soft-face":u?"hair":d?"skin":"cloth-or-room",p}function qm(i,e){e.outputColorSpace=Vt,e.toneMapping=Ja,e.toneMappingExposure=1.06;let t=new qa(16774896,7242408,.94);i.add(t);let n=new tr(16772569,2.25);n.position.set(-2.6,3.8,4.6),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-12e-5,n.shadow.normalBias=.006,n.shadow.radius=2.2,e.shadowMap.enabled=!0,e.shadowMap.type=Ol;let r=new tr(13689599,.84);r.position.set(3.6,1.8,3.8),i.add(r);let s=new tr(16773375,1.55);s.position.set(1.2,3.4,-4.2),i.add(s);let a=new Ki;a.background=new tt(.07,.08,.11);let o=new fi(1,1),c=[];for(let[m,p,M,b]of[[[-4.2,4,4.8],[3.8,7.2],16773858,7.5],[[5,2.2,3.4],[3.2,6.2],14084351,4.8],[[0,6.2,1.6],[6,1.8],16777215,5.8],[[-2.8,4.5,-4.6],[3.5,5.5],16770294,5.5],[[3.2,4.2,-4.4],[3.5,5.5],15003391,5.2],[[0,-3.5,2.5],[9,9],16771808,.45]]){let x=new dn({color:M,side:pn});x.color.multiplyScalar(b),c.push(x);let S=new Ot(o,x);S.position.fromArray(m),S.scale.set(p[0],p[1],1),S.lookAt(0,1,0),a.add(S)}let l=new ra(e),u=l.fromScene(a,.025,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let d=2048;function h(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let f={exposure:1.06,warmth:.5,reflection:1,shadows:!0,shadowSize:2048,key:2.25,fill:.84,rim:1.55};function g(m){let p={...f,...m};if(![p.exposure,p.warmth,p.reflection].every(Number.isFinite)||typeof p.shadows!="boolean"||p.exposure<.65||p.exposure>1.45||p.warmth<0||p.warmth>1||p.reflection<0||p.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(p.shadowSize)||![p.key,p.fill,p.rim].every(M=>Number.isFinite(M)&&M>=0&&M<=3))throw new Error("Invalid light quality");return h(Math.min(p.shadowSize,d)),f={exposure:p.exposure,warmth:p.warmth,reflection:p.reflection,shadows:p.shadows,shadowSize:p.shadowSize,key:p.key,fill:p.fill,rim:p.rim},n.intensity=f.key,r.intensity=f.fill,s.intensity=f.rim,e.toneMappingExposure=f.exposure,e.shadowMap.enabled=f.shadows,n.color.set(15331839).lerp(new tt(16769214),f.warmth),i.environmentIntensity=f.reflection,{...f}}function _(m){let p=m.getCenter(new D),M=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(p),n.position.copy(p).add(new D(-2.6,3.8,4.6).normalize().multiplyScalar(M*3)),Object.assign(n.shadow.camera,{left:-M,right:M,top:M,bottom:-M,near:.1,far:M*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:_,setBudget(m){let p=m.mode==="quality"||m.mode==="performance",M=m.mode==="battery"||m.mode==="powersave";d=p?2048:M||m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048;let b=p?2048:M?512:f.shadowSize;h(Math.min(b,d))},snapshot:()=>({...f,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}var Jh=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,iM=`
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
`,rM=`
uniform sampler2D tDiffuse;
uniform vec2 uStep;
varying vec2 vUv;
void main(){
  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.22702703;
  sum += (texture2D(tDiffuse, vUv + uStep * 1.38461538).rgb + texture2D(tDiffuse, vUv - uStep * 1.38461538).rgb) * 0.31621622;
  sum += (texture2D(tDiffuse, vUv + uStep * 3.23076923).rgb + texture2D(tDiffuse, vUv - uStep * 3.23076923).rgb) * 0.07027027;
  gl_FragColor = vec4(sum, 1.0);
}
`,sM=`
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
`;function Ym(i){let e=i.getContext(),t=i.capabilities.isWebGL2,n=t&&(!!e.getExtension("EXT_color_buffer_float")||!!e.getExtension("EXT_color_buffer_half_float")),r=n?Xn:_n,s=t?Math.min(4,i.capabilities.maxSamples||0):0,a=n,o=0,c=0,l=null,u=[],d=new Ki,h=new Pi(-1,1,1,-1,0,1),f=new fi(2,2),g=new fn({vertexShader:Jh,fragmentShader:iM,uniforms:{tDiffuse:{value:null},uThreshold:{value:1.04},uKnee:{value:.36}},depthTest:!1,depthWrite:!1}),_=new fn({vertexShader:Jh,fragmentShader:rM,uniforms:{tDiffuse:{value:null},uStep:{value:new ot(1,0)}},depthTest:!1,depthWrite:!1}),m=new fn({vertexShader:Jh,fragmentShader:sM,uniforms:{tScene:{value:null},tBloom1:{value:null},tBloom2:{value:null},tBloom3:{value:null},uTexelSize:{value:new ot(1/1e3,1/1e3)},uExposure:{value:1.06},uBloomStrength:{value:.24},uVibrance:{value:.08},uSharpness:{value:.85}},depthTest:!1,depthWrite:!1}),p=new Ot(f,m);d.add(p);function M(){l?.dispose(),l=null;for(let S of u)S.a.dispose(),S.b.dispose();u=[]}function b(S,v){if(a&&(S=Math.max(1,Math.round(S)),v=Math.max(1,Math.round(v)),!(l&&o===S&&c===v))){M(),o=S,c=v,l=new un(S,v,{type:r,format:vn,minFilter:Ft,magFilter:Ft,depthBuffer:!0,stencilBuffer:!1,samples:s});for(let w of[2,4,8]){let y=Math.max(1,Math.round(S/w)),T=Math.max(1,Math.round(v/w)),R={type:r,format:vn,minFilter:Ft,magFilter:Ft,depthBuffer:!1,stencilBuffer:!1};u.push({a:new un(y,T,R),b:new un(y,T,R),w:y,h:T})}}}function x(S,v){if(!a){i.render(S,v);return}let w=i.getDrawingBufferSize(new ot);b(w.x,w.y);let y=i.toneMapping,T=i.autoClear;i.toneMapping=Gn,i.setRenderTarget(l),i.clear(!0,!0,!1),i.render(S,v),i.autoClear=!1,p.material=g,g.uniforms.tDiffuse.value=l.texture,i.setRenderTarget(u[0].a),i.clear(!0,!1,!1),i.render(d,h),p.material=_;for(let R=0;R<u.length;R++){let F=R===0?u[0].a.texture:u[R-1].a.texture;_.uniforms.tDiffuse.value=F,_.uniforms.uStep.value.set(1/u[R].w,0),i.setRenderTarget(u[R].b),i.render(d,h),_.uniforms.tDiffuse.value=u[R].b.texture,_.uniforms.uStep.value.set(0,1/u[R].h),i.setRenderTarget(u[R].a),i.render(d,h)}p.material=m,m.uniforms.tScene.value=l.texture,m.uniforms.tBloom1.value=u[0].a.texture,m.uniforms.tBloom2.value=u[1].a.texture,m.uniforms.tBloom3.value=u[2].a.texture,m.uniforms.uTexelSize.value.set(1/o,1/c),m.uniforms.uExposure.value=i.toneMappingExposure,i.setRenderTarget(null),i.clear(!0,!1,!1),i.render(d,h),i.toneMapping=y,i.autoClear=T}return{render:x,setEnabled(S){let v=n&&!!S;a!==v&&(a=v,a||M())},setBloom(S){Number.isFinite(S)&&(m.uniforms.uBloomStrength.value=we.clamp(S,0,.8))},snapshot:()=>({enabled:a,hasFloat:n,msaaSamples:a?s:0,bloomStrength:m.uniforms.uBloomStrength.value}),dispose(){M(),f.dispose(),g.dispose(),_.dispose(),m.dispose()}}}function Zm(i,e,t,n,r=null){let s=[t,r].filter(Boolean);if(!s.length)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let a=I=>["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(I.schema)&&["Yuki","UniversalMMD","SnowbreakAR"].includes(I.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(I.targetCharacter)&&Array.isArray(I.clips)&&I.clips.length<=24;for(let I of s){if(!a(I))throw new Error("Invalid learned motion catalog");if(I.schema.endsWith("/3")&&I.targetCharacter!=="Universal"&&(I.stance!=="standing"||n!=="standing"))throw new Error("Standing motion requires standing source")}let o=n==="standing",c=I=>{let B=[];if(i.traverse(U=>{U.isBone&&U.name===I&&B.push(U)}),B.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+I);return B[0]},l=I=>{let B=[];return i.traverse(U=>{U.isBone&&U.name===I&&B.push(U)}),B.length===1?B[0]:null},u=l("Bip001-Head")||l("Bone_head");if(!u)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let d=l("Bip001-Spine3")||l("Bip001-Spine2")||l("Bip001-Spine");if(!d)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let h={};for(let[I,B]of[["left","L"],["right","R"]]){let U=l(`Bip001-${B}-UpperArm`),O=l(`Bip001-${B}-Forearm`),C=l(`Bip001-${B}-Hand`);if(!U||!O||!C||O.parent!==U||C.parent!==O)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};h[I]={upper:U,lower:O,hand:C}}let f=I=>I.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let g=1,_=f(h.right.upper).sub(f(h.left.upper)).normalize(),m=f(u).sub(f(d)).normalize();new D().crossVectors(_,m).dot(e.position.clone().sub(f(d)))<0&&(g=-1);let p=new Map;for(let I of s){let B=I.schema.endsWith("/3")&&I.stance==="standing",U=I.targetCharacter==="Universal";for(let O of I.clips){if(!(["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(O.id)||/^(mmd|ar)_[a-zA-Z0-9_-]{1,48}$/.test(O.id))||p.has(O.id)||!Number.isInteger(O.frames)||O.frames<2||O.frames>1800||!Number.isFinite(O.fps)||O.fps<=0||O.fps>60)throw new Error("Invalid learned clip");let N={};for(let[ce,he]of Object.entries(O.channels||{})){let G=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(ce)?1:["headDelta","chestDelta",...B?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(ce)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...B?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(ce)||/^(left|right)Finger[0-4]_[0-2]$/.test(ce)?3:0;if(!G||typeof he!="string")throw new Error("Invalid learned channel");let ue=Uint8Array.from(atob(he),K=>K.charCodeAt(0));if(ue.byteLength!==O.frames*G*4)throw new Error("Learned channel truncated");let z=new Float32Array(ue.buffer);if(!z.every(Number.isFinite))throw new Error("Non-finite learned pose");if(G===1&&z.some(K=>K<-.31||K>1.11))throw new Error("Invalid learned finger angle");for(let K=0;G>1&&K<O.frames;K++){let _e=0;for(let Fe=0;Fe<G;Fe++)_e+=z[K*G+Fe]**2;if(Math.abs(_e-1)>.01)throw new Error("Invalid learned direction/quaternion")}N[ce]={values:z,width:G}}if(!N.headDelta)throw new Error("Missing learned head reference");let X=O.id.startsWith("mmd_")||O.id.startsWith("ar_"),P=O.id.includes("dance")||X,H=P?B?"standing-dance":"seated-dance":O.id==="yuki_Peace_hand"?"peace":O.id==="yuki_hello"?"greeting":"head",k=P?["left","right"]:H==="head"?[]:["right"];if(!I.schema.endsWith("/1")&&(O.motionKind!==H||JSON.stringify(O.arms)!==JSON.stringify(k)))throw new Error("Invalid learned action capability");if(P&&!o&&!U)continue;let ae=P?o&&B?"standing-dance":"seated-dance":H;if(ae==="standing-dance"&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(ce=>!N[ce]))throw new Error("Missing standing body channels");p.set(O.id,{...O,kind:ae,arms:k,channels:N,duration:(O.frames-1)/O.fps})}}let M=Object.fromEntries([["left","L"],["right","R"]].map(([I,B])=>[I,Array.from({length:5},(U,O)=>[l(`Bip001-${B}-Finger${O}`),l(`Bip001-${B}-Finger${O}1`),l(`Bip001-${B}-Finger${O}2`)])])),b=o?l("Bip001-Pelvis"):null,x=o?Object.fromEntries([["left","L"],["right","R"]].map(([I,B])=>[I,{thigh:l(`Bip001-${B}-Thigh`),calf:l(`Bip001-${B}-Calf`),foot:l(`Bip001-${B}-Foot`),toe:l(`Bip001-${B}-Toe0`)}])):{},S=!!b&&Object.values(x).every(I=>I.thigh&&I.calf&&I.foot&&I.calf.parent===I.thigh&&I.foot.parent===I.calf),v={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function w(){let I=f(h.right.upper).sub(f(h.left.upper)).normalize(),B=f(u).sub(f(d));B.addScaledVector(I,-B.dot(I)).normalize();let U=new D().crossVectors(I,B).multiplyScalar(g).normalize();return{right:I,up:B,front:U,vector:O=>I.clone().multiplyScalar(O[0]).addScaledVector(B,O[1]).addScaledVector(U,O[2])}}let y=new Map,T=null,R=-1;function F(I,B,U,O={}){let C=p.get(I);if(!C||U<=0)return;let N=C.kind==="standing-dance"&&S,X=N&&Number.isFinite(O.amplitude)?we.clamp(O.amplitude,.5,1.2):1;v.fingerWrites=0,v.armWrites=0,v.chestWrites=0,v.workspaceAdjusted=0,(I!==T||B<=R||B-R>.2)&&y.clear(),T=I,R=B,i.updateWorldMatrix(!0,!0);let P=w(),H=we.clamp(B*C.fps,0,C.frames-1),k=Math.floor(H),ae=Math.min(k+1,C.frames-1),ce=H-k;function he(be){let Pe=C.channels[be];if(!Pe)return null;if(N&&Pe.width===1)return[we.lerp(Pe.values[k],Pe.values[ae],ce)];if(N&&Pe.width===3)return new D().fromArray(Pe.values,k*3).lerp(new D().fromArray(Pe.values,ae*3),ce).normalize().toArray();if(Pe.width===1){let Le=0;for(let J of[-2,-1,0,1,2]){let ee=we.clamp(H+J,0,C.frames-1),ne=Math.floor(ee),pe=Math.min(ne+1,C.frames-1);Le+=(Pe.values[ne]+(Pe.values[pe]-Pe.values[ne])*(ee-ne))*(J===0?.4:Math.abs(J)===1?.2:.1)}return[Le]}if(Pe.width===4)return new qe().fromArray(Pe.values,k*4).slerp(new qe().fromArray(Pe.values,ae*4),ce).normalize().toArray();let Be=new D;for(let Le of[-2,-1,0,1,2]){let J=we.clamp(H+Le,0,C.frames-1),ee=Math.floor(J),ne=Math.min(ee+1,C.frames-1);Be.add(new D().fromArray(Pe.values,ee*3).lerp(new D().fromArray(Pe.values,ne*3),J-ee).multiplyScalar(Le===0?.4:Math.abs(Le)===1?.2:.1))}return Be.normalize().toArray()}function G(be,Pe,Be,Le,J=U){let ee=Pe.angleTo(Be),ne=we.degToRad(Le);ee>ne&&v.limited++,be.quaternion.copy(Pe).slerp(Be,J*Math.min(X,ne/Math.max(ee,1e-8))).normalize()}function ue(be,Pe,Be,Le,J=U){be.parent.updateWorldMatrix(!0,!1);let ee=be.quaternion.clone(),ne=ee.clone(),pe=(Pe?Pe.position.clone():new D(1,0,0)).multiply(be.scale).applyQuaternion(ne).normalize(),Me=Be.clone().transformDirection(be.parent.matrixWorld.clone().invert()),V=new qe().setFromUnitVectors(pe,Me).multiply(ne).normalize();y.set(be,V.clone()),G(be,ee,V,Le,J),be.updateWorldMatrix(!1,!0)}function z(be,Pe,Be,Le){let J=new Je().makeBasis(P.right,P.up,P.front),ee=new Je().makeRotationFromQuaternion(new qe(...Pe)),ne=J.clone().multiply(ee).multiply(J.clone().invert());be.parent.updateWorldMatrix(!0,!1);let pe=new Je().extractRotation(be.parent.matrixWorld),Me=pe.clone().invert().multiply(ne).multiply(pe),V=be.quaternion.clone(),Qe=new qe().setFromRotationMatrix(Me).multiply(V).normalize();G(be,V,Qe,Be,Le),be.updateWorldMatrix(!1,!0)}let K=new D(0,1,0).transformDirection(i.parent.matrixWorld),_e=N?Math.min(...Object.values(x).map(be=>f(be.foot).dot(K))):0;v.legWrites=0,v.groundCorrection=0,v.sourceTime=B,v.sourceFrame=H,v.sourceFPS=C.fps,v.amplitude=X,v.sourceBPM=N?I.includes("90bpm")?90:I.includes("120bpm")?120:60:null,N&&(z(b,he("pelvisDelta"),30,U),P=w());let Fe=he("chestDelta");if(Fe&&(z(d,Fe,N?35:10,U*(N?1:.35)),P=w(),v.chestWrites=1),N){for(let[J,ee]of Object.entries(x)){if(ee.calf.parent!==ee.thigh||ee.foot.parent!==ee.calf)throw new Error("Standing leg hierarchy mismatch");ue(ee.thigh,ee.calf,P.vector(he(J+"Thigh")),110,U),ue(ee.calf,ee.foot,P.vector(he(J+"Calf")),150,U),z(ee.foot,he(J+"FootDelta"),45,U),v.legWrites+=3}let be=we.clamp(_e-Math.min(...Object.values(x).map(J=>f(J.foot).dot(K))),-.18,.18),Pe=f(b),Be=b.parent.matrixWorld.clone().invert(),Le=Pe.clone().addScaledVector(K,be).applyMatrix4(Be).sub(Pe.clone().applyMatrix4(Be));b.position.add(Le),b.updateWorldMatrix(!1,!0),v.groundCorrection=be}function ye(be,Pe,Be,Le){let J=f(be.upper),ee=f(be.lower).distanceTo(J),ne=f(be.hand).distanceTo(f(be.lower)),pe=J.clone().addScaledVector(P.vector(Pe),ee),Me=pe.clone().addScaledVector(P.vector(Be),ne),V=f(d),Qe=Me.clone().sub(V),ze=Qe.dot(P.right),L=Qe.dot(P.up),E=Qe.dot(P.front),W=[ze,L,E];L=we.clamp(L,-.16,.6);let j=(1-we.smoothstep(Math.abs(ze),.16,.28))*we.smoothstep(L,-.42,-.32)*(1-we.smoothstep(L,.18,.32));E+=Math.max(0,.23-E)*j,Me.copy(V).addScaledVector(P.right,ze).addScaledVector(P.up,L).addScaledVector(P.front,E);let ie=Me.clone().sub(f(u));ie.length()<.14&&Me.copy(f(u)).add(ie.length()>.001?ie.setLength(.14):P.front.clone().multiplyScalar(.14)),(W[1]!==L||W[2]!==E)&&v.workspaceAdjusted++;let le=Me.clone().sub(J),me=we.clamp(le.length(),Math.abs(ee-ne)+.015,(ee+ne)*.98);le.normalize(),Me.copy(J).addScaledVector(le,me);let se=P.right.clone().multiplyScalar(Le==="right"?1:-1),Q=se.clone().addScaledVector(P.front,.3).addScaledVector(P.up,.2);Q.addScaledVector(le,-Q.dot(le)),Q.length()<1e-4&&Q.copy(P.front).addScaledVector(le,-P.front.dot(le)),Q.normalize();let ge=(ee*ee-ne*ne+me*me)/(2*me),Ae=Math.sqrt(Math.max(0,ee*ee-ge*ge)),Ce=J.clone().addScaledVector(le,ge).addScaledVector(Q,Ae);return{upper:Ce.clone().sub(J).normalize(),lower:Me.sub(Ce).normalize()}}for(let be of C.arms){let Qe=function(){let Q=f(Be[1][0]).sub(f(Be[4][0])).normalize(),ge=f(Be[2][0]).sub(f(Pe.hand));return ge.addScaledVector(Q,-ge.dot(Q)).normalize(),new Je().makeBasis(Q,ge,new D().crossVectors(Q,ge).normalize())},Pe=h[be],Be=M[be],Le=he(be+"Upper"),J=he(be+"Lower");if(!Le||!J)continue;let ee=["greeting","peace"].includes(C.kind)?U*we.smoothstep(J[1],-1,1):U*(N?1:.72),ne=C.kind==="seated-dance"?ye(Pe,Le,J,be):{upper:P.vector(Le),lower:P.vector(J)};ue(Pe.upper,Pe.lower,ne.upper,120,ee),ue(Pe.lower,Pe.hand,ne.lower,170,ee),v.armWrites+=2;let pe=he(be+"HandWidth"),Me=he(be+"HandForward"),V=Be[1]?.[0]&&Be[2]?.[0]&&Be[4]?.[0];if(!pe||!Me||!V)continue;i.updateWorldMatrix(!0,!0);let ze=P.vector(pe).normalize(),L=P.vector(Me);L.addScaledVector(ze,-L.dot(ze)).normalize();let E=new Je().makeBasis(ze,L,new D().crossVectors(ze,L).normalize()),W=E.multiply(Qe().invert()),j=Pe.hand,ie=new Je().extractRotation(j.parent.matrixWorld),le=ie.clone().invert().multiply(W).multiply(ie),me=j.quaternion.clone(),se=new qe().setFromRotationMatrix(le).multiply(me).normalize();G(j,me,se,C.kind==="greeting"?110:C.kind==="seated-dance"?75:110,ee*(C.kind==="seated-dance"?.7:1)),j.updateWorldMatrix(!1,!0);for(let Q=0;Q<5;Q++)for(let ge=0;ge<3;ge++){let Ae=Be[Q]?.[ge];if(!Ae)continue;let Ce=he(`${be}Finger${Q}_${ge}`);if(!Ce)continue;let Ie=new D(...Ce).normalize(),$e=ge?new D(...he(`${be}Finger${Q}_${ge-1}`)).normalize():new D(0,1,0),rt=we.clamp(Math.atan2(-Ie.z,Math.max(.1,Ie.y))-Math.atan2(-$e.z,Math.max(.1,$e.y)),-.15,Q===0?.45:1.1),at=ge===0&&Q!==0?we.clamp(Math.atan2(Ie.x,Ie.y),-.3,.3):0,Y=he(`${be}Curl${Q}_${ge}`),Re=he(`${be}Spread${Q}`);Y&&(rt=Y[0]),ge===0&&Q!==0&&Re&&(at=Re[0]),C.kind==="peace"&&(rt=Q===1||Q===2?.02:Q===0?.4:.95,ge===0&&(at=Q===1?.14:Q===2?-.08:0));let de=be==="left"?-1:1,Ee=Ae.quaternion.clone(),$=new qe().fromArray(Ae.userData.bindLocalQuaternion||Ee.toArray()).multiply(new qe().setFromAxisAngle(new D(0,0,1),at*de)).multiply(new qe().setFromAxisAngle(new D(0,1,0),rt*de));Ae.quaternion.copy(Ee).slerp($,U).normalize(),v.fingerWrites++}}let ke=he("headDelta");if(ke){let be=new Je().makeBasis(P.right,P.up,P.front),Pe=new Je().makeRotationFromQuaternion(new qe(...ke)),Be=be.clone().multiply(Pe).multiply(be.clone().invert());u.parent.updateWorldMatrix(!0,!1);let Le=new Je().extractRotation(u.parent.matrixWorld),J=Le.clone().invert().multiply(Be).multiply(Le),ee=u.quaternion.clone(),ne=new qe().setFromRotationMatrix(J).multiply(ee).normalize();G(u,ee,ne,40)}i.updateWorldMatrix(!0,!0);let ut=new Set;i.traverse(be=>{be.isSkinnedMesh&&!ut.has(be.skeleton)&&(be.skeleton.update(),ut.add(be.skeleton))})}return{available:()=>[...p.values()].map(I=>({id:I.id,label:I.label,duration:I.duration,arms:[...I.arms],kind:I.kind})),apply:F,snapshot:()=>{i.updateWorldMatrix(!0,!0);let I=w(),B=h.right;return{...v,parentDeterminant:B.upper.parent.matrixWorld.determinant(),rightUpper:f(B.lower).sub(f(B.upper)).normalize().toArray(),rightLower:f(B.hand).sub(f(B.lower)).normalize().toArray(),handHeight:f(B.hand).sub(f(B.lower)).dot(I.up)}}}}function Qh(i,e){if(e===vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ea||e===ao){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===ea)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Km(i){let e=new Map,t=new Map,n=i.clone();return $m(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function $m(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)$m(i.children[n],e.children[n],t)}var Zr=class extends Ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Uc(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uc(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new _d(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=nr.extractUrlBase(e);a=nr.resolveURL(l,this.path)}else a=nr.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ys(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===tg){try{a[xt.KHR_BINARY_GLTF]=new vd(e)}catch(d){r&&r(d);return}s=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ad(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case xt.KHR_MATERIALS_UNLIT:a[d]=new rd;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[d]=new bd(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[d]=new Md;break;case xt.KHR_MESH_QUANTIZATION:a[d]=new Sd;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function aM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},id=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new tt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],An);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new tr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ka(u),l.distance=d;break;case"spot":l=new Za(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},rd=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let r=[];e.color=new tt(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],An),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Vt))}return Promise.all(r)}},sd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(s,s)}return Promise.all(r)}},od=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],An)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},hd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(s[0],s[1],s[2],An),Promise.all(r)}},dd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(s[0],s[1],s[2],An),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},xd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},yd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Uc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}},_d=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(let g of d){let _=new Je,m=new D,p=new qe,M=new D(1,1,1),b=new Ba(g.geometry,g.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),b.setMatrixAt(S,_.compose(m,p,M));let x=null;for(let S in c)if(S==="_COLOR_0"){let v=c[S];b.instanceColor=new $i(v.array,v.itemSize,v.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(x===null){let w=b.geometry;x=new hn,x.name=w.name;for(let y in w.attributes)x.setAttribute(y,w.attributes[y]);for(let y in w.morphAttributes)x.morphAttributes[y]=w.morphAttributes[y];w.index!==null&&x.setIndex(w.index),x.morphTargetsRelative=w.morphTargetsRelative;for(let y of w.groups)x.addGroup(y.start,y.count,y.materialIndex);w.boundingBox!==null&&(x.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(x.boundingSphere=w.boundingSphere.clone()),x.drawRange.start=w.drawRange.start,x.drawRange.count=w.drawRange.count,x.userData=Object.assign({},w.userData),b.geometry=x}let v=c[S];x.setAttribute(S,new $i(v.array,v.itemSize,v.normalized))}Bt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},tg="glTF",uo=12,jm={JSON:1313821514,BIN:5130562},vd=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-uo,s=new DataView(e,uo),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===jm.JSON){let l=new Uint8Array(e,uo+a,o);this.content=n.decode(l)}else if(c===jm.BIN){let l=uo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let d=Ed[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Ed[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],f=aa[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},o,l,An,h)})})}},Md=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Sd=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Dc=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,d=(n-t)/u,h=d*d,f=h*d,g=e*l,_=g-l,m=-2*f+3*h,p=f-h,M=1-m,b=p-h+d;for(let x=0;x!==o;x++){let S=a[_+x+o],v=a[_+x+c]*u,w=a[g+x+o],y=a[g+x]*u;s[x]=M*S+b*v+m*w+p*y}return s}},oM=new qe,wd=class extends Dc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return oM.fromArray(s).normalize().toArray(s),s}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jm={9728:Kt,9729:Ft,9984:zl,9985:js,9986:Gr,9987:pi},Qm={33071:ii,33648:Ps,10497:Vn},ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lM={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Ur},td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Br({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function Yr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uM(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(r){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(s){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function hM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dM(i){let e,t=i.extensions&&i.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nd(t.attributes):e=i.indices+":"+nd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+nd(i.targets[n]);return e}function nd(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Td(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var pM=new Je,Ad=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Ii(this.options.manager):this.textureLoader=new $a(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ys(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Yr(s,o,r),Di(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(nr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=ed[r.type],o=aa[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Wt(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=ed[r.type],l=aa[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,m;if(f&&f!==d){let p=Math.floor(h/f),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,b=t.cache.get(M);b||(_=new l(o,p*f,r.count*f/u),b=new Bs(_,f/u),t.cache.add(M,b)),m=new ks(b,c,h%f/u,g)}else o===null?_=new l(r.count*c):_=new l(o,h,r.count*c),m=new Wt(_,c,g);if(r.sparse!==void 0){let p=ed.SCALAR,M=aa[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new M(a[1],b,r.sparse.count*p),v=new l(a[2],x,r.sparse.count*c);o!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=S.length;w<y;w++){let T=S[w];if(m.setX(T,v[w*c]),c>=2&&m.setY(T,v[w*c+1]),c>=3&&m.setZ(T,v[w*c+2]),c>=4&&m.setW(T,v[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Jm[h.magFilter]||Ft,u.minFilter=Jm[h.minFilter]||pi,u.wrapS=Qm[h.wrapS]||Vn,u.wrapT=Qm[h.wrapT]||Vn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==Ft,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){let m=new cn(_);m.needsUpdate=!0,h(m)}),t.load(nr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Di(d,a),d.userData.mimeType=a.mimeType||fM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ws,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gs,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Br}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[xt.KHR_MATERIALS_UNLIT]){let d=r[xt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],An),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Vt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=pn);let u=s.alphaMode||td.OPAQUE;if(u===td.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===td.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ot(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==dn){let d=s.emissiveFactor;o.emissive=new tt().setRGB(d[0],d[1],d[2],An)}return s.emissiveTexture!==void 0&&a!==dn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Vt)),Promise.all(l).then(function(){let d=new a(o);return s.name&&(d.name=s.name),Di(d,s),t.associations.set(d,{materials:e}),s.extensions&&Yr(r,d,s),d})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return eg(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=dM(l),d=r[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=eg(new hn,l,t),l.mode===ri.TRIANGLE_STRIP?h=h.then(f=>Qh(f,ao)):l.mode===ri.TRIANGLE_FAN&&(h=h.then(f=>Qh(f,ea))),r[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?cM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=a[f],p,M=l[f];if(m.mode===ri.TRIANGLES||m.mode===ri.TRIANGLE_STRIP||m.mode===ri.TRIANGLE_FAN||m.mode===void 0){let b=s.isSkinnedMesh===!0,x=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=b&&x?new Fa(_,M):new Ot(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ri.LINES)p=new ka(_,M);else if(m.mode===ri.LINE_STRIP)p=new Or(_,M);else if(m.mode===ri.LINE_LOOP)p=new za(_,M);else if(m.mode===ri.POINTS)p=new Ha(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Di(p,s),m.extensions&&Yr(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Yr(r,d[0],s),d[0];let h=new Zt;s.extensions&&Yr(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(we.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Pi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let d=a[l];if(d){o.push(d);let h=new Je;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Oa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){let f=r.channels[d],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let b=0,x=h.length;b<x;b++){let S=h[b],v=f[b],w=g[b],y=_[b],T=m[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,v,w,y,T);if(R)for(let F=0;F<R.length;F++)p.push(R[F])}let M=new qs(s,void 0,p);return Di(M,r),M})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,pM)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){let f=u.userData.pivot,g=d[0];u.pivot=new D().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new zs:l.length>1?u=new Zt:l.length===1?u=l[0]:u=new Bt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=a),Di(u,s),s.extensions&&Yr(n,u,s),s.matrix!==void 0){let d=new Je;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Zt;n.name&&(s.name=r.createUniqueName(n.name)),Di(s,n),n.extensions&&Yr(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){let h=c[u];h.parent!==null?s.add(Km(h)):s.add(h)}let l=u=>{let d=new Map;for(let[h,f]of r.associations)(h instanceof Rn||h instanceof cn)&&d.set(h,f);return u.traverse(h=>{let f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Mr[s.path]===Mr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(Mr[s.path]){case Mr.weights:u=Ji;break;case Mr.rotation:u=Ri;break;case Mr.translation:case Mr.scale:u=er;break;default:n.itemSize===1?u=Ji:u=er;break}let d=r.interpolation!==void 0?lM[r.interpolation]:Dr,h=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new u(c[f]+"."+Mr[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Td(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Ri?wd:Dc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mM(i,e,t){let n=e.attributes,r=new $t;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=Td(aa[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let d=s[l];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let _=Td(aa[h.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Ln;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function eg(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Ed[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return gt.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Di(i,e),mM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?uM(i,e.targets,t):i})}function ng({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,d=-l*r*o-c*s*a,h=l*s*a-c*r*o,f=l*s*o+c*r*a;return[-u,-h,-d,f]}function ig(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((h,f)=>[h.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[f].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new D().crossVectors(c,o).normalize(),u=new D;for(let h of["L","R"]){let f=e.get("Bip001-"+h+"-Foot"),g=e.get("Bip001-"+h+"-Toe0");f&&g&&u.add(g.clone().sub(f))}u.dot(l)<0&&l.negate();let d=i.geometry.getAttribute("position");return(h,f,g)=>{if(!f||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let _=new D;for(let S=0;S<3;S++)_.addScaledVector(new D().fromBufferAttribute(d,h[S]),f.getComponent(S));let m=_.sub(t),p=Math.abs(m.dot(c))/a,M=m.dot(o)/a,b=m.dot(l)/a;if(p>.72)return null;let x=null;return M>-.38&&M<-.04&&p<.23&&b>.025?x="pelvis_front":M>-.35&&M<.18&&b<-.025?x="hips":M>.43&&M<1.02&&b>.025&&p<.67?x="chest":M>.1&&M<=.43&&b>.025?x=p>.48?"waist":"abdomen":M>.16&&M<1.02&&b<-.025&&(x="back"),x?{id:x,confidence:.85,source:"bind-pose-surface",coordinates:[p,M,b]}:null}}function gM(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function rg(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=gM(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function sg(i,e,t,n=null){let r=new zr,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function d(g,_){if(!["torso","leg"].includes(g?.id))return g;let m=H=>i.getObjectByName(H),p=H=>m(H)?.getWorldPosition(new D),M=p("Bip001-Pelvis"),b=p("Bip001-Neck"),x=p("Bip001-L-UpperArm"),S=p("Bip001-R-UpperArm"),v=p("Bip001-Head"),w=p("EyeJoint_L"),y=p("EyeJoint_R");if(!M||!b||!x||!S||!v||!w||!y)return g;let T=b.distanceTo(M);if(T<1e-5)return g;let R=b.clone().sub(M).normalize(),F=S.clone().sub(x).normalize(),I=new D().crossVectors(F,R).normalize(),U=w.add(y).multiplyScalar(.5).sub(v).dot(I);if(Math.abs(U)<T*.002)return g;U<0&&I.negate();let O=_.clone().sub(M),C=O.dot(R)/T,N=O.dot(I)/T;if(Math.abs(O.dot(F))/T>.7)return g;let P=null;return C>-.4&&C<.16&&N<-.025?P="hips":g.id==="torso"&&(C>.45&&C<.95&&N>.06?P="chest":C>.05&&C<.46&&N>.06?P="abdomen":C>.16&&C<.95&&N<-.06&&(P="back")),P?{id:P,confidence:.75,source:"rig-surface-estimate"}:g}function h(g){for(let _=g;_;_=_.parent)if(!_.visible)return!1;return!0}function f(g,_){if(!g||!_)return 1;try{let m=g.image,p=m.width,M=m.height;if(!p||!M||!u)return null;let b=_.clone();g.transformUv(b);let x=Math.min(p-1,Math.max(0,Math.floor(b.x*p))),S=Math.min(M-1,Math.max(0,Math.floor(b.y*M))),v=Math.floor(x/32)*32,w=Math.floor(S/32)*32;s.has(g)||s.set(g,++c);let y=s.get(g)+":"+v+":"+w,T=a.get(y);if(T)a.delete(y),a.set(y,T);else{u.clearRect(0,0,32,32),u.drawImage(m,v,w,Math.min(32,p-v),Math.min(32,M-w),0,0,Math.min(32,p-v),Math.min(32,M-w));let R=u.getImageData(0,0,32,32).data;T=new Uint8Array(1024);for(let F=0;F<1024;F++)T[F]=R[F*4+3];a.set(y,T),a.size>128&&a.delete(a.keys().next().value)}return T[(S-w)*32+x-v]/255}catch{return null}}return(g,_)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(_)||!m.width||!m.height||g<m.left||g>m.right||_<m.top||_>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let p=[];i.traverse(b=>{b.isMesh&&h(b)&&(b.isSkinnedMesh&&(b.skeleton.update(),b.computeBoundingSphere(),b.computeBoundingBox()),p.push(b))});let M=new Set;n?.traverse(b=>{b.isMesh&&h(b)&&(p.push(b),M.add(b))}),r.setFromCamera(new ot((g-m.left)/m.width*2-1,-(_-m.top)/m.height*2+1),e);for(let b of r.intersectObjects(p,!1)){let x=b.object,S=x.material,v=f(x.userData.previewMap,b.uv),w=S.alphaTest||(S.transparent?.1:0);if(S.clippingPlanes?.some(N=>N.distanceToPoint(b.point)<0)||v!==null&&v<w)continue;if(M.has(x))return null;let y=[b.face.a,b.face.b,b.face.c],T=y.map(N=>x.getVertexPosition(N,new D)),R=x.worldToLocal(b.point.clone()),F=Si.getBarycoord(R,...T,new D),I=[],B=x.geometry.getAttribute("skinIndex"),U=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&B&&U&&F)for(let N=0;N<3;N++)for(let X=0;X<4;X++)I.push({name:x.skeleton.bones[B.getComponent(y[N],X)]?.name,weight:U.getComponent(y[N],X)*F.getComponent(N)});o.has(x)||o.set(x,ig(x));let O=rg(I),C=o.get(x)(y,F,O)||d(O,b.point);return{skinBones:I.filter(N=>N.weight>.05).map(N=>N.name),mesh:x.userData.snowbreakSurfaceKey,triangle:b.faceIndex,barycentric:F?.toArray(),anatomy:C,uv:b.uv?.toArray()||null,point:b.point.toArray(),distance:b.distance,alphaVerified:v!==null,material:x.userData.snowbreakMaterialName}}return null}}var ir={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function ho(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Kr(i,e){let t=ho(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(ir,i.anatomy.id))return{...i.anatomy,label:ir[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(ir,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:ir[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:ir[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var Rd={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function ag(i,e,t){let n=new Zt;n.visible=!1,e.add(n);let r=new Map;i.traverse(p=>{p.isMesh&&p.userData.snowbreakSurfaceKey&&r.set(p.userData.snowbreakSurfaceKey,p)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function d(){for(let p of c)p.overlay.geometry.dispose(),p.overlay.material.dispose(),p.overlay.removeFromParent();c=[],l=0}function h(){d(),u=!1;let p=new Map;for(let[M,b]of Object.entries(s)){let x=/^(surface_\d+):(\d+)$/.exec(M);if(!x)continue;let S=r.get(x[1]),v=Number(x[2]);if(!S)continue;let w=S.geometry,y=w.getAttribute("position"),T=w.index,R=w.getAttribute("uv"),F=Kr({mesh:x[1],triangle:v,alphaVerified:!0},{[M]:b});if(!F||v*3+2>=(T?T.count:y.count)||S.userData.previewMap&&!R)continue;if(l>=5e3){u=!0;continue}l++;let I=x[1]+":"+F.id,B=p.get(I);B||(B={source:S,region:F.id,vertices:[],keys:[]},p.set(I,B)),B.keys.push(M);for(let U=0;U<3;U++)B.vertices.push(T?T.getX(v*3+U):v*3+U)}for(let M of p.values()){let b=new hn;b.setAttribute("position",new Wt(new Float32Array(M.vertices.length*3),3).setUsage(Mh));let x=M.source.geometry.getAttribute("uv");if(x){let y=new Float32Array(M.vertices.length*2);M.vertices.forEach((T,R)=>{y[R*2]=x.getX(T),y[R*2+1]=x.getY(T)}),b.setAttribute("uv",new Wt(y,2))}let S=M.source.material,v=new dn({color:Rd[M.region],map:M.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),w=new Ot(b,v);w.frustumCulled=!1,w.renderOrder=100,n.add(w),c.push({...M,overlay:w})}o=!1}function f(p){for(let M=p;M;M=M.parent)if(!M.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&h(),i.updateWorldMatrix(!0,!0);let p=new D,M=new Map;for(let b of c){let{source:x,overlay:S}=b;if(S.visible=f(x),!S.visible)continue;x.updateMatrixWorld(!0),x.isSkinnedMesh&&x.skeleton.update();let v=M.get(x);v||(v=new Map,M.set(x,v));let w=S.geometry.getAttribute("position");b.vertices.forEach((y,T)=>{let R=v.get(y);R||(x.getVertexPosition(y,p).applyMatrix4(x.matrixWorld),R=p.toArray(),v.set(y,R)),w.setXYZ(T,...R)}),w.needsUpdate=!0}}function _(){let p=c.find(b=>b.overlay.visible),M=p?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:p&&M?{key:p.keys[0],vertices:[0,1,2].map(b=>new D().fromBufferAttribute(M,b).toArray()),screen:[0,1,2].map(b=>new D().fromBufferAttribute(M,b).project(t).toArray())}:null}}function m(p){let M=n.visible;n.visible=!1;try{return p()}finally{n.visible=M}}return{set(p,M=a){return s=p,a=!!M,o=!0,a||d(),g(),_()},update:g,snapshot:_,hideForCapture:m,dispose(){d(),n.removeFromParent()}}}function Fc(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Je().compose(new D(...i.position),new qe(...i.quaternion).normalize(),new D(...i.scale))}async function og(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=Fc(n.characterWorld).invert(),s=new Zt,a=new Zt,o=new Set,c=[],l=[],u=[],d=new Map,h=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let v of n.anchors){if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(v.id)||d.has(v.id)||!Number.isFinite(v.viewYawDegrees)||Math.abs(v.viewYawDegrees)>180)throw new Error("Invalid scene anchor");d.set(v.id,{inverse:Fc(v.characterWorld).invert(),viewYawDegrees:v.viewYawDegrees})}if(!d.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let f=new Hn,g=!0;for(let v of n.objects){let w=i.getAsset(v.assetRole);if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(v.id)||o.has(v.id)||w?.kind!=="geometry")throw new Error("Invalid scene object");if(v.group!==void 0&&!["room","furniture"].includes(v.group)||v.cutaway!==void 0&&typeof v.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(v.id);let y=r.clone().multiply(Fc(v.world)),T=(await new Zr().parseAsync(w.bytes.slice().buffer,"")).scene,R=0;T.traverse(I=>{if(I.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");I.isMesh&&(R+=(I.geometry.index?.count||I.geometry.attributes.position.count)/3)});let F=new Zt;F.name=v.id,F.matrixAutoUpdate=!1,F.matrix.copy(y),F.add(T),(v.group==="room"?a:s).add(F),t(T),T.traverse(I=>{I.isMesh&&(v.group==="room"&&(I.material.side=Un),v.cutaway&&(I.material.clippingPlanes=[f],n.schema==="snowbreak-local-scene/2"&&v.group==="furniture"&&(I.material.side=pn),l.push(I.material)),(v.group==="room"||v.cutaway)&&(I.material.needsUpdate=!0))}),v.group!=="room"&&T.traverse(I=>{I.isMesh&&u.push(I)}),c.push({id:v.id,assetRole:v.assetRole,group:v.group||"furniture",cutaway:!!v.cutaway,triangles:R,matrix:y.toArray(),holder:F,world:Fc(v.world)})}e.add(s),s.updateMatrixWorld(!0);function _(v,w){if(!l.length)return;let y=v.position.clone().sub(w),T=y.length();if(T<.001)return;y.divideScalar(T);let R=w.clone().addScaledVector(y,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,T*.5));f.setFromNormalAndCoplanarPoint(y.negate(),R)}function m(v){let w=!!v;if(w!==g){g=w;for(let y of l)y.clippingPlanes=g?[f]:null,y.needsUpdate=!0}}let p=new Map,M=new zr,b=new D(0,1,0);function x(v){if(!d.size)return null;let w=d.get(v);if(!w)throw new Error("Unknown source scene anchor");if(h!==v){h=v;for(let y of c)y.holder.matrix.copy(w.inverse).multiply(y.world),y.matrix=y.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),p.clear()}return w.viewYawDegrees}d.size&&x(n.defaultAnchorId);function S(v){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let w=s.worldToLocal(v.clone()),y=Math.round(w.x/.015)+":"+Math.round(w.z/.015),T=p.get(y);if(T===void 0){let R=new $t().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),F=s.localToWorld(new D(w.x,R.max.y+.3,w.z)),I=b.clone().transformDirection(s.matrixWorld).negate();M.set(F,I),T=null;for(let B of M.intersectObjects(u,!1)){let U=B.face?.normal.clone().transformDirection(B.object.matrixWorld);if(U&&Math.abs(U.dot(I))>.65){T=s.worldToLocal(B.point.clone()).y;break}}p.set(y,T),p.size>512&&p.delete(p.keys().next().value)}return T===null?null:{clearance:w.y-T,normal:b.clone().transformDirection(s.matrixWorld),height:T}}return{root:s,contactSurface:S,setAnchor:x,hasCutaway:l.length>0,updateView:_,setRoomVisible:v=>{a.visible=!!v},setCutaway:m,setVisible:v=>{s.visible=!!v},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:h,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:g,clipPlane:[...f.normal.toArray(),f.constant],objects:c.map(({holder:v,world:w,...y})=>({...y,matrix:[...y.matrix]})),originalSceneVerified:!1})}}var xM=new Set(["head","left_hand","right_hand"]),yM=new Set(["tap","double_tap","long_press","stroke"]);function lg(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!xM.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!yM.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function cg(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function _M(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function ug(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let h of i.clips){let f=e.getAsset(h.animationRole),g=e.current.resources.find(p=>p.role===h.animationRole);if(f?.kind!=="animation"||h.sourceSha256!==(f.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(h.sourceSha256)||h.frames!==f.data.frames||h.fps!==f.data.fps||!Array.isArray(h.curves)||h.curves.length>64)throw new Error("Morph curve animation mismatch");let _=n.get(h.sourceSha256);if(_){if(_.frames!==h.frames||_.fps!==h.fps||JSON.stringify(_.curves)!==JSON.stringify(h.curves))throw new Error("Conflicting morph curve alias");r.set(f.data,h.sourceSha256);continue}let m=new Set;for(let p of h.curves){if(typeof p.name!="string"||!p.name.length||p.name.length>128||m.has(p.name)||!Array.isArray(p.keys)||!p.keys.length||p.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(p.name),s.add(p.name);let M=-1/0;for(let b of p.keys){if(!Array.isArray(b)||b.length!==5||!b.every(Number.isFinite)||b[0]<-120||b[0]>120||b[0]<=M||Math.abs(b[1])>4||Math.abs(b[2])>1e6||Math.abs(b[3])>1e6||![0,1,2].includes(b[4]))throw new Error("Invalid morph curve key");if(M=b[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(h.sourceSha256,h),r.set(f.data,h.sourceSha256)}let o=[];if(t.traverse(h=>{if(!h.isMesh||!h.morphTargetDictionary||!h.morphTargetInfluences)return;let f=new Map;for(let g of s){let _=h.morphTargetDictionary[g];if(_!==void 0){if(!Number.isInteger(_)||_<0||_>=h.morphTargetInfluences.length)throw new Error("Invalid morph target index");f.set(g,_)}}f.size&&o.push({mesh:h,indices:f})}),[...s].some(h=>!o.some(f=>f.indices.has(h))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function d(h,f){l=f,c=h&&r.get(h)||null,u={};let g=n.get(c);for(let _ of g?.curves||[])u[_.name]=_M(_.keys,f);for(let{mesh:_,indices:m}of o)for(let[p,M]of m)_.morphTargetInfluences[M]=u[p]??0}return{apply:d,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:h,indices:f})=>Object.fromEntries([...f].map(([g,_])=>[g,h.morphTargetInfluences[_]]))),originalExpressionFidelity:!1})}}function Cd(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(c=>!c.targets?.length)){let{targetNames:c,...l}=r;n.extras=l;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function hg(i,e,{isCurrent:t=()=>!0,universalMotions:n=null,performanceMode:r=null}={}){let s=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};s();let a=e.getAsset("viewOrientation")?.data;if(a&&(a.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(a.yawDegrees)||Math.abs(a.yawDegrees)>180))throw new Error("Invalid view orientation");let o=-Math.PI/2+we.degToRad(a?.yawDegrees||0),c=new Ic({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),l=new Ki,u=new Zt,d=new Zt,h=new tn(32,1,.15,100);u.rotation.y=o,l.add(u),u.add(d);let f=qm(l,c),g=Ym(c),_=Bf();_.configure({mode:r||localStorage.getItem("snowRenderMode")||"adaptive"}),g.setEnabled(_.snapshot().mode!=="battery");let m=0;function p(xe){_.configure(xe);let $=_.snapshot();return f.setBudget($),g.setEnabled($.mode!=="battery"),m=0,Ee(),b()}function M(){O||c.renderLists?.dispose?.()}function b(){return{..._.snapshot(),postFx:g.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:c.getPixelRatio(),drawCalls:c.info.render.calls,triangles:c.info.render.triangles,gpuResources:{textures:c.info.memory.textures,geometries:c.info.memory.geometries},gpuTimingAvailable:!1}}let x=null,S,v,w,y,T,R,F=null,I=null,B=null,U=null,O=!1,C=null,N=0,X=[],P=new Set,H=new Set,k=new Set,ae=new Map,ce=new Map,he=new Map,G=new Map,ue=new Map,z=new Set,K=new Map,_e=e.getAsset("rootMotionPolicy")?.data,Fe=0,ye=0,ke=0,ut=0,be=null,Pe=null,Be=!1,Le=!0,J=null,ee=null,ne=null,pe=1.06,Me=.5,V=0,Qe="normal",ze=0,L=0,E=[],W=new fi(8,8);W.rotateX(-Math.PI/2);let j=new Wa({opacity:.34,depthWrite:!1}),ie=new Ot(W,j);ie.receiveShadow=!0,ie.visible=!1,ie.renderOrder=-1,u.add(ie),P.add(W),H.add(j);let le={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},me=0,se=0,Q=null;function ge(){Be?(u.rotation.set(0,o+me,0),d.rotation.set(0,we.degToRad(se),0)):(u.rotation.set(we.degToRad(le.pitch),o+me+we.degToRad(le.yaw),we.degToRad(le.roll)),d.rotation.set(we.degToRad(Ae.pitch),we.degToRad(Ae.yaw+se),we.degToRad(Ae.roll))),u.updateMatrixWorld(!0)}let Ae={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function Ce(xe){let $={...Ae,...xe};if(Object.values($).some(Ve=>!Number.isFinite(Ve)))throw new Error("Invalid character placement");for(let Ve of["x","y","depth"])$[Ve]=we.clamp($[Ve],-1.5,1.5);$.scale=we.clamp($.scale,.3,4),$.yaw=we.clamp($.yaw,-180,180),$.pitch=we.clamp($.pitch,-65,65),$.roll=we.clamp($.roll,-45,45),$.stretchX=$.stretchY=1,Ae=$,u.updateWorldMatrix(!0,!1),h.updateMatrixWorld();let Se=new D($.x,$.y,$.depth).applyQuaternion(h.quaternion),ve=u.matrixWorld.clone().invert();return d.position.copy(Se.transformDirection(ve).multiplyScalar(Math.hypot($.x,$.y,$.depth))),d.scale.setScalar($.scale),ge(),{...Ae}}function Ie(xe){let $={...le,...xe};for(let Se of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite($[Se]))throw new Error("Invalid framing");return le={scale:we.clamp($.scale,.3,4),x:we.clamp($.x,-1.5,1.5),y:we.clamp($.y,-1.5,1.5),yaw:(($.yaw+180)%360+360)%360-180,pitch:we.clamp($.pitch,-65,65),roll:we.clamp($.roll,-45,45),stretchX:we.clamp($.stretchX,.65,1.5),stretchY:we.clamp($.stretchY,.65,1.5)},ge(),Ee(),{...le}}function $e(){if(w){u.rotation.y=o,u.updateMatrixWorld(!0);let Se=w.getObjectByName("Bip001-L-UpperArm"),ve=w.getObjectByName("Bip001-R-UpperArm");if(Se&&ve){let Ve=Se.getWorldPosition(new D).sub(ve.getWorldPosition(new D)),st=new D().crossVectors(Ve,new D(0,1,0));if(Math.hypot(st.x,st.z)>.02){me=-Math.atan2(st.x,st.z),ge();return}}}if(!Q)return;u.rotation.y=o,u.updateMatrixWorld(!0);let xe=Q.bone.getWorldQuaternion(new qe),$=Q.axis.clone().applyQuaternion(xe);Math.hypot($.x,$.z)>.1&&(me=Q.heading-Math.atan2($.x,$.z)),ge()}function rt(){return le.yaw=0,$e(),Ee(),{...le}}function at(xe){xe.traverse($=>{if($.isBone&&($.userData.bindLocalQuaternion=$.quaternion.toArray()),!$.isMesh)return;P.add($.geometry);for(let st of Array.isArray($.material)?$.material:[$.material]){H.add(st);for(let Rt of Object.values(st))Rt?.isTexture&&k.add(Rt)}let Se=$.material.name,ve=ae.get(Se)||null,Ve=ue.get(Se)||{};if($.userData.snowbreakSurfaceKey="surface_"+ye++,$.userData.snowbreakMaterialName=Se,$.userData.previewMap=ve,Ve.transparent!==void 0&&typeof Ve.transparent!="boolean")throw new Error("Invalid transparent override");if(Ve.renderOrder!==void 0&&(!Number.isInteger(Ve.renderOrder)||Math.abs(Ve.renderOrder)>100))throw new Error("Invalid material sorting");$.renderOrder=Ve.renderOrder||0,$.material=Xm(Se,ve,ce.get(Se),Ve,he.get(Se)||null,G.get(Se)||null),H.add($.material),$.castShadow=$.isSkinnedMesh&&!Ve.transparent,$.receiveShadow=$.material.userData.profile==="cloth-or-room"})}function Y(xe,$){if(!$)return;let Se=new Map($.tracks.map(ve=>[ve.bone,ve]));xe.traverse(ve=>{if(!ve.isBone)return;let Ve=Se.get(ve.name)?.keys?.[0];if(!Ve||Ve.length!==10||!Ve.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");ve.position.fromArray(Ve),ve.quaternion.fromArray(Ve,3),ve.scale.fromArray(Ve,7)})}function Re(xe,$,Se=X,ve=!1){if(!$)return;let Ve=new Map($.tracks.map(st=>[st.bone,st]));if(Ve.size!==$.tracks.length)throw new Error("Duplicate animation bones");xe.traverse(st=>{if(!st.isBone||xe===w&&!z.has(st)||ve&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(st.name))return;let Rt=Ve.get(st.name);if(!(ve&&!Rt)){if(!Rt||Rt.keys.length!==$.frames||Rt.keys.some(Gt=>Gt.length!==10||!Gt.every(Number.isFinite)||Math.abs(Gt.slice(3,7).reduce((Sr,sr)=>Sr+sr*sr,0)-1)>.05))throw new Error("Invalid bone animation");Se.push({bone:st,track:Rt,clip:$})}})}function de(){if(!O){O=!0,removeEventListener("resize",Ee),c.setAnimationLoop(null),R?.dispose(),S?.dispose(),v?.dispose(),g.dispose(),f.dispose();for(let xe of P)xe.dispose();for(let xe of H)xe.dispose();for(let xe of k){xe.dispose();let $=xe.image;$?.close?$.close():$?.tagName==="CANVAS"?$.width=$.height=0:$?.tagName==="IMG"&&($.src=""),xe.image=null}ae.clear(),ce.clear(),he.clear(),G.clear(),ue.clear(),k.clear(),H.clear(),P.clear(),X.length=0,w?.removeFromParent(),T?.root?.removeFromParent(),c.renderLists?.dispose?.(),c.dispose()}}function Ee(){if(O||!w)return;ut++;let xe=i.clientWidth||innerWidth,$=i.clientHeight||innerHeight,Se=_.ratio(xe,$,devicePixelRatio||1);(!be||be.w!==xe||be.h!==$||be.ratio!==Se)&&(c.setPixelRatio(Se),c.setSize(xe,$,!1),be={w:xe,h:$,ratio:Se},ke++),u.updateMatrixWorld(!0),!F&&!Pe&&(w.traverse(Kn=>{Kn.isSkinnedMesh&&(Kn.skeleton.update(),Kn.computeBoundingBox())}),Pe=new $t().setFromObject(w).applyMatrix4(u.matrixWorld.clone().invert()));let ve=(I||F||Pe).clone().applyMatrix4(u.matrixWorld),Ve=ve.getSize(new D),st=ve.getCenter(new D);if(f.frame(ve),Be)return;h.aspect=xe/$;let Rt=Math.tan(we.degToRad(16)),Gt=Math.max(Ve.y/(2*Rt),Ve.x/(2*Rt*h.aspect))*1.25+Ve.z;if(F){Gt=0;for(let Kn of[ve.min.x,ve.max.x])for(let Jr of[ve.min.y,ve.max.y])for(let si of[ve.min.z,ve.max.z])Gt=Math.max(Gt,si-st.z+Math.max(Math.abs(Kn-st.x)/(Rt*h.aspect),Math.abs(Jr-st.y)/Rt)*1.12)}let Sr=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2",sr=!!T?.snapshot?.().available,Mn=!!I&&sr&&!Sr;h.position.copy(st).add(new D(0,0,Gt)),h.lookAt(st),h.zoom=Mn?1.05:le.scale,h.setViewOffset(xe,$,Mn?0:-le.x*xe,Mn?0:-le.y*$,xe,$),h.updateProjectionMatrix(),h.projectionMatrix.elements[0]*=le.stretchX,h.projectionMatrix.elements[5]*=le.stretchY,h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),T?.updateView(h,st)}try{let bo=function(fe){let Z=Bn.get(fe);if(!Z)throw new Error("Unknown sample");ai=Z.overlay?si==="sample"&&ai?ai:{bindings:si==="standby"?wr:ar,duration:si==="standby"?Mn:Er,time:N,envelope:I}:null,Qr=fe,ar=Z.bindings,Er=Z.duration;let Ne=Bn.get(Z.sceneOf)||Z,et=Z.overlay?ai.envelope:Ne.sceneFraming?K.get(Ne.sourceSha256):null;if(Z.sceneFraming&&!et)throw new Error("Scene framing envelope missing");let He=T.setAnchor?.(Ne.id??fe),je=I!==et;if(He!=null){let St=-Math.PI/2+we.degToRad(He);je||=Math.abs(o-St)>1e-8,o=St,me=0,ge()}return I=et,es(0),Be&&(Ye=!0),!T.snapshot().available&&Ne.sceneFraming&&($e(),je=!0),je&&Ee(),{id:fe,label:Z.label,duration:Z.duration}},es=function(fe,Z=ar,Ne=Er){if(O||!Number.isFinite(fe))return;let et=ai&&Z===ar?ai:null;et&&et.duration>0&&es((et.time+fe)%et.duration,et.bindings,et.duration);let He=si;U=Z[0]?.clip?.generatorMetadata?.sourceSha256||null,si=Z===wr&&Mn>0?"standby":"sample",N=Math.max(0,Math.min(Ne,fe));for(let{bone:je,track:St,clip:We}of Z){let Xt=N*We.fps,Qt=Math.min(Math.floor(Xt),We.frames-1),qt=Math.min(Qt+1,We.frames-1),Ht=Xt-Qt,mn=St.keys[Qt],Tr=St.keys[qt];(!et||!z.has(je))&&je.position.set(we.lerp(mn[0],Tr[0],Ht),we.lerp(mn[1],Tr[1],Ht),we.lerp(mn[2],Tr[2],Ht)),je.quaternion.copy(Sr.fromArray(mn,3).slerp(sr.fromArray(Tr,3),Ht)),(!et||!z.has(je))&&je.scale.set(we.lerp(mn[7],Tr[7],Ht),we.lerp(mn[8],Tr[8],Ht),we.lerp(mn[9],Tr[9],Ht))}if(st.apply((Z.find(je=>!z.has(je.bone))||Z[0])?.clip,N),_e){w.position.x=w.position.z=0,u.updateMatrixWorld(!0);let je=w.getObjectByName(_e.bone).getWorldPosition(new D).applyMatrix4(w.matrixWorld.clone().invert());w.position.x=_e.reference[0]-je.x,w.position.z=_e.reference[1]-je.z}u.updateMatrixWorld(!0),Fe=Rt.length;for(let je of Rt)je.update()},Ue=function(){for(let fe of E)fe.bone.scale.copy(fe.base);E=[],te&&(w.position.copy(oe),te=!1)},Xe=function(){let fe=performance.now(),Z=Math.min(.25,Math.max(.001,(fe-re)/1e3));if(re=fe,ze+=(L-ze)*(1-Math.exp(-Z*10)),Math.abs(ze-L)<.002&&(ze=L),ze<=.001||!fa.length)return;let Ne=ze*ze*(3-2*ze);u.updateMatrixWorld(!0);let et=A&&q?Math.min(A.getWorldPosition(new D).y,q.getWorldPosition(new D).y):null;oe.copy(w.position),te=!0;for(let{bone:je,factor:St}of fa){let We=je.scale.clone();E.push({bone:je,base:We}),je.scale.multiplyScalar(we.lerp(1,St,Ne))}if(u.updateMatrixWorld(!0),et!==null){let je=Math.min(A.getWorldPosition(new D).y,q.getWorldPosition(new D).y),St=et-je;w.position.y+=St*(Be?1:.88)}u.updateMatrixWorld(!0);let He=new Set;w.traverse(je=>{je.isSkinnedMesh&&!He.has(je.skeleton)&&(je.skeleton.update(),He.add(je.skeleton))})},De=function(fe){return Qe=fe==="chibi"?"chibi":"normal",L=Qe==="chibi"?1:0,{mode:Qe,blend:ze}},Ze=function(){Ue();let fe=d.position.clone(),Z=d.scale.clone();d.position.set(0,0,0),d.scale.setScalar(1),u.updateMatrixWorld(!0);let Ne=1/0,et=new D;if(w.traverse(He=>{if(!He.isSkinnedMesh||!He.geometry?.attributes?.position)return;He.skeleton.update();let je=He.geometry.attributes.position.count,St=Math.max(1,Math.floor(je/900));for(let We=0;We<je;We+=St)He.getVertexPosition(We,et).applyMatrix4(He.matrixWorld),Number.isFinite(et.y)&&et.y<Ne&&(Ne=et.y)}),!Number.isFinite(Ne)){let He=new $t().setFromObject(w);Ne=He.isEmpty()?0:He.min.y}return d.position.copy(fe),d.scale.copy(Z),u.updateMatrixWorld(!0),Number.isFinite(Ne)?-Ne:0},dt=function(){!Be||O||(V=Ze(),d.position.set(0,V,0),d.scale.setScalar(1),ie.position.set(0,0,0),ge(),Ye=!1)},mt=function(fe,{hideRoom:Z=!0}={}){let Ne=!!fe;if(Ne===Be)return Ne&&Z!==Le&&(Le=!!Z,T?.snapshot?.().available&&(T.setVisible(!Le),T.setRoomVisible(!Le))),Ne&&dt(),vt();if(Be=Ne,Be){Le=!!Z;let et=T?.snapshot?.();et?.available&&(ee=et.visible,J=et.roomVisible,Le&&(T.setVisible(!1),T.setRoomVisible(!1))),ne=f.snapshot(),pe=ne.exposure,Me=ne.warmth,h.matrixAutoUpdate=!1,h.clearViewOffset?.(),h.zoom=1,ie.position.set(0,0,0),ie.visible=!0,dt(),Ye=!0;let He=new $t(new D(-.9,0,-.9),new D(.9,1.8,.9));f.frame(He)}else{if(h.matrixAutoUpdate=!0,ie.visible=!1,Ye=!1,ee!==null&&(T?.setVisible?.(ee),ee=null),J!==null&&(T?.setRoomVisible?.(J),J=null),ne){try{f.set({exposure:ne.exposure,warmth:ne.warmth})}catch{}ne=null}Ce(Ae),ge(),Ee()}return vt()},Ke=function(fe,Z,Ne,et){if(!(!Be||O)&&(Array.isArray(fe)&&fe.length===16&&(h.projectionMatrix.fromArray(fe),h.projectionMatrixInverse.copy(h.projectionMatrix).invert()),Array.isArray(Z)&&Z.length===16&&(h.matrixWorldInverse.fromArray(Z),h.matrixWorld.copy(h.matrixWorldInverse).invert(),h.matrixWorld.decompose(h.position,h.quaternion,h.scale)),Number.isFinite(Ne)&&Number.isFinite(et))){let He=we.clamp(Ne,.78,1.32),je=we.clamp(et,.12,.88);pe+=(He-pe)*.12,Me+=(je-Me)*.12;let St=f.snapshot();if(Math.abs(St.exposure-pe)>.006||Math.abs(St.warmth-Me)>.008)try{f.set({exposure:pe,warmth:Me})}catch{}}},Nt=function(){O||(_.resetClock(),c.setAnimationLoop(null),c.setAnimationLoop(kt))},zt=function(fe){return Mt=Bi(fe),Mt.available()},_i=function(){let fe=[];return w.updateWorldMatrix(!0,!0),w.traverse(Z=>{Z.userData.sourceAttachment&&Z.traverse(Ne=>{if(!Ne.isSkinnedMesh)return;Ne.skeleton.update();let et=new D,He=Ne.geometry.attributes.position.count;for(let je=0;je<He;je++)et.add(Ne.getVertexPosition(je,new D).applyMatrix4(Ne.matrixWorld));fe.push({kind:Z.userData.sourceAttachment,vertices:He,center:et.divideScalar(He).toArray(),sharedBones:Ne.skeleton.bones.every(je=>w.getObjectByName(je.name)===je)})})}),fe};if(_e&&(_e.schema!=="snowbreak-home-root-lock/1"||_e.bone!=="Bip001"||!Array.isArray(_e.reference)||_e.reference.length!==2||!_e.reference.every(fe=>Number.isFinite(fe)&&Math.abs(fe)<10)))throw new Error("Invalid home root motion policy");let xe=e.getAsset("materials")?.data;if(xe){if(xe.schema!=="snowbreak-material-preview/1"||xe.originalShaderVerified!==!1||!Array.isArray(xe.materials)||xe.materials.length>64)throw new Error("Invalid material preview");x=Of(xe,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096,_.snapshot().mode);let fe=new Map;for(let Z of xe.materials){if(s(),typeof Z.name!="string"||Z.name.length>256||ue.has(Z.name))throw new Error("Invalid material identity");let Ne=Z.renderState||{};if(Ne.alphaCutoff!==void 0&&(!Number.isFinite(Ne.alphaCutoff)||Ne.alphaCutoff<0||Ne.alphaCutoff>1))throw new Error("Invalid material alpha");if(Ne.doubleSided!==void 0&&typeof Ne.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(ue.set(Z.name,Ne),Ne.opacity===0||!Z.diffuseAssetId)continue;let et=e.getAsset("texture_"+Z.diffuseAssetId);if(et?.kind!=="texture")throw new Error("Missing local diffuse texture");let He=fe.get(Z.diffuseAssetId);if(!He){let St=URL.createObjectURL(new Blob([et.bytes],{type:et.data?.mime||"image/png"}));try{He=await new Ii().loadAsync(St)}finally{URL.revokeObjectURL(St)}let We=x.limitFor(Z.diffuseAssetId);if(He.image.width>We||He.image.height>We){let Xt=document.createElement("canvas"),Qt=Math.min(We/He.image.width,We/He.image.height);Xt.width=Math.round(He.image.width*Qt),Xt.height=Math.round(He.image.height*Qt),Xt.getContext("2d").drawImage(He.image,0,0,Xt.width,Xt.height);let qt=He.image;He.image=Xt,qt.src="",He.needsUpdate=!0}He.colorSpace=Vt,He.anisotropy=c.capabilities.getMaxAnisotropy(),He.wrapS=He.wrapT=Vn,He.flipY=!1,fe.set(Z.diffuseAssetId,He),k.add(He)}if(ae.set(Z.name,He),Z.normalAssetId){if(!/^[a-f0-9]{64}$/.test(Z.normalAssetId)||xe.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let St=e.getAsset("texture_"+Z.normalAssetId);if(St?.kind!=="texture")throw new Error("Missing original normal texture");let We=fe.get("normal:"+Z.normalAssetId);if(!We){let Xt=URL.createObjectURL(new Blob([St.bytes],{type:St.data?.mime||"image/png"}));try{We=await new Ii().loadAsync(Xt)}finally{URL.revokeObjectURL(Xt)}let Qt=x.limitFor(Z.normalAssetId,!0);if(We.image.width>Qt||We.image.height>Qt){let qt=We.image,Ht=document.createElement("canvas"),mn=Qt/Math.max(qt.width,qt.height);Ht.width=Math.round(qt.width*mn),Ht.height=Math.round(qt.height*mn),Ht.getContext("2d").drawImage(qt,0,0,Ht.width,Ht.height),We.image=Ht,qt.src="",We.needsUpdate=!0}We.flipY=!1,We.wrapS=We.wrapT=Vn,We.colorSpace=qn,We.anisotropy=c.capabilities.getMaxAnisotropy(),fe.set("normal:"+Z.normalAssetId,We),k.add(We)}ce.set(Z.name,We)}if(Z.ormAssetId){if(!/^[a-f0-9]{64}$/.test(Z.ormAssetId))throw new Error("Invalid ORM texture declaration");let St=e.getAsset("texture_"+Z.ormAssetId);if(St?.kind!=="texture")throw new Error("Missing ORM material texture");let We=fe.get("orm:"+Z.ormAssetId);if(!We){let Xt=URL.createObjectURL(new Blob([St.bytes],{type:St.data?.mime||"image/webp"}));try{We=await new Ii().loadAsync(Xt)}finally{URL.revokeObjectURL(Xt)}let Qt=x.limitFor(Z.ormAssetId,!0);if(We.image.width>Qt||We.image.height>Qt){let qt=We.image,Ht=document.createElement("canvas"),mn=Qt/Math.max(qt.width,qt.height);Ht.width=Math.round(qt.width*mn),Ht.height=Math.round(qt.height*mn),Ht.getContext("2d").drawImage(qt,0,0,Ht.width,Ht.height),We.image=Ht,qt.src="",We.needsUpdate=!0}We.flipY=!1,We.wrapS=We.wrapT=Vn,We.colorSpace=qn,We.anisotropy=c.capabilities.getMaxAnisotropy(),fe.set("orm:"+Z.ormAssetId,We),k.add(We)}he.set(Z.name,We)}let je=Z.hairHighlightAssetId||Z.faceShadowAssetId;if(je){if(!/^[a-f0-9]{64}$/.test(je))throw new Error("Invalid auxiliary shader texture declaration");let St=e.getAsset("texture_"+je);if(St?.kind!=="texture")throw new Error("Missing auxiliary shader texture");let We=fe.get("extra:"+je);if(!We){let Xt=URL.createObjectURL(new Blob([St.bytes],{type:St.data?.mime||"image/webp"}));try{We=await new Ii().loadAsync(Xt)}finally{URL.revokeObjectURL(Xt)}We.flipY=!1,We.wrapS=We.wrapT=Vn,We.colorSpace=qn,We.anisotropy=c.capabilities.getMaxAnisotropy(),fe.set("extra:"+je,We),k.add(We)}G.set(Z.name,We)}}}let $=e.getAsset("body");if(!$)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let Se=e.getAsset("framingBounds")?.data;if(Se){let fe=Z=>Array.isArray(Z)&&Z.length===3&&Z.every(Ne=>Number.isFinite(Ne)&&Math.abs(Ne)<=100);if(Se.schema!=="snowbreak-framing-bounds/1"||Se.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||Se.bodySha256!==e.current.resources.find(Z=>Z.role==="body")?.assetId||!fe(Se.min)||!fe(Se.max)||Se.min.some((Z,Ne)=>Z>=Se.max[Ne])||!Number.isInteger(Se.evaluatedFrames)||Se.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(F=new $t(new D(...Se.min),new D(...Se.max)),B=Se,Se.clips){if(!Array.isArray(Se.clips)||Se.clips.length>16)throw new Error("Invalid clip envelopes");for(let Z of Se.clips){if(!/^[a-f0-9]{64}$/.test(Z.sourceSha256)||K.has(Z.sourceSha256)||!fe(Z.min)||!fe(Z.max)||Z.min.some((Ne,et)=>Ne>=Z.max[et]))throw new Error("Invalid clip envelope");K.set(Z.sourceSha256,new $t(new D(...Z.min),new D(...Z.max)))}}}w=(await new Zr().register(Cd).parseAsync($.bytes.slice().buffer,"")).scene,d.add(w),s(),at(w),w.traverse(fe=>{fe.isBone&&z.add(fe)});let ve=e.getAsset("bodyAnimation")?.data;U=ve?.generatorMetadata?.sourceSha256||null,Y(w,ve),Re(w,ve);let Ve=e.getAsset("faceAttachment")?.data;if(Ve){if(Ve.schema!=="snowbreak-face-attachment/1"||Ve.candidateOnly!==!0||Ve.originalAssemblyVerified!==!1||Ve.boneName!=="Bip001-Head"||Ve.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let fe=w.getObjectByName(Ve.boneName),Z=Ve.relativeLocationCm;if(!fe?.isBone||!Z||![Z.X,Z.Y,Z.Z].every(je=>Number.isFinite(je)&&Math.abs(je)<100))throw new Error("Invalid socket parent or position");let Ne=e.getAsset("face");if(!Ne)throw new Error("Missing face geometry");y=(await new Zr().register(Cd).parseAsync(Ne.bytes.slice().buffer,"")).scene,s(),at(y),Y(y,e.getAsset("faceAnimation")?.data);let et=e.getAsset("faceAnimation")?.data;if(!et||!ve||et.frames!==ve.frames||et.fps!==ve.fps)throw new Error("Face/body sample timing mismatch");Re(y,et);let He=new Zt;if(He.position.set(Z.X*.01,Z.Z*.01,Z.Y*.01),He.quaternion.fromArray(ng(Ve.relativeRotationDegrees)),fe.add(He),He.add(y),Ve.defaultVisible!==void 0&&typeof Ve.defaultVisible!="boolean")throw new Error("Invalid face visibility");y.visible=Ve.defaultVisible===!0}T=await og(e,u,at),s(),c.localClippingEnabled=!!T.hasCutaway;let st=ug(e.getAsset("morphCurves")?.data,e,y||w),Rt=[];w.traverse(fe=>{fe.isSkinnedMesh&&!Rt.includes(fe.skeleton)&&Rt.push(fe.skeleton),fe.isSkinnedMesh&&(fe.frustumCulled=!1)});let Gt=ve?(ve.frames-1)/ve.fps:0,Sr=new qe,sr=new qe,Mn=0,Kn="D\u5F85\u673A",Jr=!1,si="sample",wr=[],wt=e.getAsset("stateTransition")?.data;if(wt){let fe=wt.schema==="snowbreak-state-preview/1"&&wt.show==="Sc01_Hand_A_D"&&wt.fromState==="A"&&wt.toState==="D",Z=wt.schema==="snowbreak-standby-preview/1"&&wt.characterId===e.current.characterId&&Number.isInteger(wt.standbyConfigId)&&wt.standbyConfigId>0&&Number.isInteger(wt.sourceSkinId)&&/^[a-f0-9]{64}$/.test(wt.sourceTableSha256)&&typeof wt.label=="string"&&wt.label.length<=40&&typeof wt.startAsStandby=="boolean",Ne=wt.schema==="snowbreak-standby-preview/2"&&wt.stance==="standing"&&wt.characterId===e.current.characterId&&wt.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&wt.startAsStandby===!0;if(!fe&&!Z&&!Ne||wt.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(Z||Ne)&&(Kn=wt.label,Jr=wt.startAsStandby);let et=e.getAsset("standbyBody")?.data,He=y?e.getAsset("standbyFace")?.data:null;if(!et||y&&(!He||et.frames!==He.frames||et.fps!==He.fps))throw new Error("Standby clip timing mismatch");let je=new Map(et.tracks.map(We=>[We.bone,We])),St=He?new Map(He.tracks.map(We=>[We.bone,We])):new Map;wr=X.map(We=>{let Xt=We.clip===ve?et:He,Qt=(We.clip===ve?je:St).get(We.bone.name);if(!Qt||Qt.keys.length!==Xt.frames||Qt.keys.some(qt=>qt.length!==10||!qt.every(Number.isFinite)||Math.abs(qt.slice(3,7).reduce((Ht,mn)=>Ht+mn*mn,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:We.bone,track:z.has(We.bone)?jh(Qt):Qt,clip:Xt}}),Mn=(et.frames-1)/et.fps}let ar=X,Er=Gt,Qr="default",ai=null,Bn=new Map([["default",{bindings:X,duration:Gt,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),Jt=e.getAsset("sampleCatalog")?.data;if(Jt){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(Jt.schema)||Jt.characterId!==e.current.characterId||Jt.originalInteractionVerified!==!1||!Array.isArray(Jt.samples)||!Jt.samples.length||Jt.samples.length>24||!/^[a-f0-9]{64}$/.test(Jt.sourceTableSha256))throw new Error("Invalid sample catalog");Bn.clear();for(let Z of Jt.samples){if(typeof Z.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(Z.id)||Bn.has(Z.id)||typeof Z.label!="string"||Z.label.length>64||Jt.schema.endsWith("/1")&&(!Number.isInteger(Z.sourceShowElementId)||Z.sourceShowElementId<1))throw new Error("Invalid sample identity");let Ne=e.getAsset(Z.bodyRole),et=Z.faceRole?e.getAsset(Z.faceRole):null;if(Ne?.kind!=="animation"||y&&(et?.kind!=="animation"||(Ne.data.frames!==et.data.frames||Ne.data.fps!==et.data.fps)&&!(Z.independentFaceTiming===!0&&Number.isInteger(Z.sourceShowElementId)&&Z.sourceShowElementId>0)))throw new Error("Sample body/face mismatch");if(Jt.schema.endsWith("/2")&&Z.sourceBodySha256!==(Ne.data.generatorMetadata?.sourceSha256||e.current.resources.find(je=>je.role===Z.bodyRole)?.assetId))throw new Error("Sample source mismatch");let He=X;if((Z.bodyRole!=="bodyAnimation"||y&&Z.faceRole!=="faceAnimation")&&(He=[],Re(w,Ne.data,He,Z.overlay==="upper-body"),y)){if(!et)throw new Error("Sample requires face");Re(y,et.data,He)}if(Z.persistentState===!0&&e.current.characterId==="Fenny")for(let je=0;je<He.length;je++)z.has(He[je].bone)&&(He[je]={...He[je],track:Wm(He[je].track)});if(Z.persistentState!==void 0&&typeof Z.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(Z.endPolicy!==void 0&&!["hold","loop"].includes(Z.endPolicy))throw new Error("Invalid scene end policy");Bn.set(Z.id,{id:Z.id,bindings:He,duration:Math.max((Ne.data.frames-1)/Ne.data.fps,et?(et.data.frames-1)/et.data.fps:0),overlay:Z.overlay==="upper-body",label:Z.label,sourceShowElementId:Z.sourceShowElementId,sceneFraming:Z.sceneFraming===!0,sourceSha256:Ne.data.generatorMetadata?.sourceSha256,sceneOf:Z.sceneOf,persistentState:Z.persistentState===!0,endPolicy:Z.endPolicy,afterScene:Z.afterScene})}let fe=Bn.get(Jt.defaultId);if(!fe||fe.bindings!==X)throw new Error("Default sample must reference primary clip");Qr=Jt.defaultId;for(let Z of Bn.values()){if(Z.sceneOf!==void 0&&(typeof Z.sceneOf!="string"||!Bn.has(Z.sceneOf)))throw new Error("Missing reaction scene");if(Z.afterScene!==void 0&&(typeof Z.afterScene!="string"||!Bn.get(Z.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let vo=lg(Jt);u.updateMatrixWorld(!0);let ha=w.getObjectByName("Bip001-Pelvis")||w.getObjectByName("Bip001");if(ha){let fe=ha.getWorldQuaternion(new qe),Z=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((et,He)=>{let je=et.clone().applyQuaternion(fe),St=He.clone().applyQuaternion(fe);return Math.hypot(St.x,St.z)-Math.hypot(je.x,je.z)})[0],Ne=Z.clone().applyQuaternion(fe);Q={bone:ha,axis:Z,heading:Math.atan2(Ne.x,Ne.z)}}R=ag(w,l,h);let da=Gm(w,fe=>{se=fe,ge()},()=>le.yaw+Ae.yaw),Mo=sg(w,h,i,T.root);v=zm(w,h,i,Mo,e.getAsset("sceneInteractions")?.data,T.contactSurface,e.current.characterId),S=Vm(w,h,i);let fa=[["Bip001-Pelvis",.66],["Bip001-L-Thigh",.8],["Bip001-R-Thigh",.8],["Bip001-L-Foot",1.24],["Bip001-R-Foot",1.24],["Bip001-L-UpperArm",.84],["Bip001-R-UpperArm",.84],["Bip001-L-Hand",1.22],["Bip001-R-Hand",1.22],["Bip001-Neck",.86],["Bip001-Head",2.22]].map(([fe,Z])=>({bone:w.getObjectByName(fe),factor:Z})).filter(fe=>fe.bone),A=w.getObjectByName("Bip001-L-Foot"),q=w.getObjectByName("Bip001-R-Foot"),oe=new D,te=!1,re=performance.now(),Ye=!1,vt=()=>({active:Be,roomHidden:Le,shadowCatcher:ie.visible,groundOffsetY:V,proportionMode:Qe,chibiBlend:ze}),kt=()=>{if(O||i.dataset.snowbreakPaused==="true"||document.hidden){_.resetClock();return}if(!_.begin())return;let fe=_.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(fe-m)>.02&&(m=fe,Ee()),Ue(),da.restore(),v.restore(),S.restore(),C?.(),da.tick(),v.tick(),S.tick(),Be&&Ye&&dt(),Xe(),R.update(),g.render(l,h)},bt=()=>{!O&&!document.hidden&&i.dataset.snowbreakPaused!=="true"&&Nt()};document.addEventListener("visibilitychange",bt),addEventListener("focus",bt),addEventListener("pageshow",bt),Ee(),await c.compileAsync(l,h),s(),addEventListener("resize",Ee),c.setAnimationLoop(kt);let an=()=>{let fe=[];return w.traverse(Z=>{Z.isMesh&&fe.push({name:Z.userData.snowbreakMaterialName,textured:!!Z.userData.previewMap,normalMapped:!!Z.material.normalMap,diffuseSize:Z.material.map?[Z.material.map.image.width,Z.material.map.image.height]:null,normalSize:Z.material.normalMap?[Z.material.normalMap.image.width,Z.material.normalMap.image.height]:null,anisotropy:Z.material.map?.anisotropy||0,profile:Z.material.userData.profile,alphaTest:Z.material.alphaTest})}),fe},Ge=fe=>w.traverse(Z=>{Z.isMesh&&(Z.material.map=fe?Z.userData.previewMap:null,Z.material.color.set(Z.material.map?16777215:13289411),Z.material.needsUpdate=!0)}),on=()=>({available:!!y,visible:!!y?.visible,originalAssemblyVerified:!1}),_t=fe=>(y&&(y.visible=!!fe,Ee()),on()),In=(fe,Z,Ne)=>{if(O)throw new Error("Renderer disposed");R.hideForCapture(()=>{g.render(l,h),fe.drawImage(i,0,0,Z,Ne)})},$n=$h(w),yi=$h(w,{side:"left"}),Bi=fe=>{try{return Zm(w,h,e.getAsset("learnedMotions")?.data,wt?.stance,fe)}catch{return{available:()=>[],apply(){},snapshot:()=>({available:!1})}}},Mt=Bi(n),Ut=()=>{document.removeEventListener("visibilitychange",bt),removeEventListener("focus",bt),removeEventListener("pageshow",bt),de()};return{kickLoop:Nt,setARMode:mt,setARFrame:Ke,arState:vt,setProportionMode:De,proportionState:()=>({mode:Qe,blend:ze}),textureBudgetState:()=>x?.snapshot(),attachmentState:_i,performanceState:b,setRenderBudget:p,releaseCache:M,setUniversalMotions:zt,projectedBone:fe=>{let Z=w.getObjectByName(fe)?.getWorldPosition(new D).project(h),Ne=i.getBoundingClientRect();return Z?[Ne.left+(Z.x+1)*Ne.width/2,Ne.top+(1-Z.y)*Ne.height/2]:null},modelDragScale:()=>{let fe=Math.max(.05,w.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(h.position).dot(h.getWorldDirection(new D))),Z=2*fe*Math.tan(we.degToRad(h.fov/2))/h.zoom;return{x:Z*h.aspect/le.stretchX,y:Z/le.stretchY}},furnitureContacts:fe=>Object.fromEntries(fe.map(Z=>{let Ne=w.getObjectByName(Z);return[Z,Ne?T.contactSurface?.(Ne.getWorldPosition(new D)):null]})),setModelFrame:Ce,modelFrameState:()=>({...Ae}),placementState:()=>({model:d.matrixWorld.toArray(),room:T.root?.matrixWorld.toArray(),camera:h.matrixWorld.toArray()}),embodiment:da,sceneInteractions:v,sensesState:S.snapshot,setGaze:S.gaze,senseTouch:S.touch,resetSenses:S.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(fe=>[fe,w.getObjectByName(fe)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:f.snapshot,setLighting:f.set,boneWorldPoints:fe=>Object.fromEntries(fe.slice(0,32).map(Z=>[Z,w.getObjectByName(Z)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let fe=[];return w.traverse(Z=>{Z.isBone&&fe.push({name:Z.name,position:Z.position.toArray(),quaternion:Z.quaternion.toArray(),scale:Z.scale.toArray()})}),fe},cameraState:()=>({position:h.position.toArray(),projection:h.projectionMatrix.toArray()}),learnedOptions:()=>Mt.available(),applyLearnedMotion:(...fe)=>Mt.apply(...fe),learnedDiagnostics:()=>Mt.snapshot(),presentationDiagnostics:()=>({resizeCount:ke,fitCount:ut}),touchBindings:()=>vo.map(fe=>({...fe,gestures:[...fe.gestures]})),setRoomVisible:T.setRoomVisible,setSceneCutaway:T.setCutaway,sceneState:T.snapshot,setSceneVisible:T.setVisible,morphState:st.snapshot,framingEnvelopeState:()=>({precomputed:!!F,evaluatedFrames:B?.evaluatedFrames||0,perClip:K.size,activeSource:U}),resourceState:()=>({sourceTextures:k.size,drawCalls:c.info.render.calls,triangles:c.info.render.triangles,geometries:c.info.memory.geometries,textures:c.info.memory.textures}),setSurfaceLabels:R.set,surfaceOverlayState:R.snapshot,armPreview:$n,leftArmPreview:yi,dispose:Ut,pickSurface:Mo,drawSnapshot:In,faceViewer:rt,setFrame:Ie,frameState:()=>({...le}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:an,setTexturePreview:Ge,faceCandidateState:on,showFaceCandidate:_t,selectSample:bo,sampleOptions:()=>[...Bn].map(([fe,Z])=>({id:fe,label:Z.label,duration:Z.duration,sourceShowElementId:Z.sourceShowElementId,persistentState:Z.persistentState,endPolicy:Z.endPolicy,afterScene:Z.afterScene})),get duration(){return Er},seek:es,standbyDuration:Mn,standbyLabel:Kn,startAsStandby:Jr,seekStandby:fe=>{I&&(I=null,Ee());let Z=T.setAnchor?.(Jt?.defaultId);Z!=null&&(o=-Math.PI/2+we.degToRad(Z),me=0,ge()),Mn>0&&es(fe%Mn,wr,Mn)},setFrameHandler:fe=>C=fe,sampleState:()=>({lastSkeletonUpdates:Fe,sampleId:Qr,time:N,poseMode:si,standbyDuration:Mn,nativeInitializationVerified:!1,viewYaw:u.rotation.y,autoYaw:me,bodyBones:X.filter(fe=>fe.clip===ve).length,faceBones:X.filter(fe=>fe.clip!==ve).length,hand:w.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(xe){throw de(),xe}}var vM="action-plan/1",bM=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],MM={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},SM={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},wM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,EM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},TM={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},dg={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},Oc=(i,e,t)=>Math.max(e,Math.min(t,i));function AM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function RM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function CM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function Id(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:Oc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var mg=i=>!!i&&wM.test(i);function IM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=SM[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||mg(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function fg(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=mg(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function pg(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of dg[s]||[])r.push(a);for(let s of dg[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function PM(i,e){let t=e&&e.channels||{},n=EM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function LM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*Oc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,d=Oc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:d,curve:[[0,l],[.18,d],[.75,d],[1,l]]})}return s}function NM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function fo(i,e,t={}){let n=Id(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:vM,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||TM[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+AM(CM(n)+"||"+(a?RM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!bM.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=fg(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=NM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=IM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,d=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(d)&&l.push(...d),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=fg(n,a,c.motion)}else{let l=MM[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let h=PM(n,a);if(h.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let f=LM(a,n.intensity);f.length&&o.tracks.push(...f)}o.tracks.push(...h),o.owns=o.tracks.filter(f=>f.id).map(f=>f.ch)}else{let f=pg(n,a);f?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:f.name,index:f.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=pg(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:Oc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var Bc=(i,e,t)=>Math.max(e,Math.min(t,i));function UM(i){return i*i*(3-2*i)}function DM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*UM(Bc(o,0,1))}}return i[i.length-1][1]}function gg(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(b,x,S){a.push({at:e(),kind:b,planId:x.planId,type:x.action.type,...S||{}}),a.length>40&&a.shift()}function l(b,x,...S){if(typeof x=="function")try{x(...S)}catch{}}function u(b,x){let S={plan:b,t0:x,done:!1};r.push(S),c("start",b);for(let v of b.tracks)v.ch==="motion"?l("motion",t.onMotion,v.group,v.index,b):v.ch==="pose"?l("pose",t.onPose,v.name,b):v.ch==="expression"?l("expression",t.onExpression,v,b):v.ch==="speech"&&l("speech",t.onSpeech,v.text,b);return S}function d(b,x,S){if(b.done)return;b.done=!0;let v=r.indexOf(b);v>=0&&r.splice(v,1),c("end",b.plan,{reason:S}),l("end",t.onEnd,b.plan,S)}function h(b,x,S){let v=e(),w=S||fo(b,x);if(!w||w.stopped||!w.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:w&&w.planId};let y=Number.isFinite(w.action.priority)?w.action.priority:50,T=r[0];if(T){let R=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(y<R)return s.length>=n&&s.shift(),s.push({plan:w,at:v}),c("queued",w,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:w.planId};d(T,v,"preempted")}return u(w,v),{accepted:!0,queued:!1,planId:w.planId,plan:w}}function f(b,x){let S=Math.max(1,b.duration),v=Math.max(0,Math.min(b.fadeIn||0,S*.5)),w=Math.max(0,Math.min(b.fadeOut||0,S*.5)),y=x*S,T=S-w,R=1;return v>0&&y<v&&(R=y/v),w>0&&y>T&&(R=Math.min(R,(S-y)/w)),Bc(R,0,1)}function g(b,x,S,v){for(let w of x.tracks){if(!w.curve||!w.id)continue;let T=DM(w.curve,S)*(w.weight===void 0?1:w.weight)*v,R=b[w.id];w.blend==="set"?(!R||v>=R.weight)&&(b[w.id]={id:w.id,value:T,blend:"set",weight:v,ch:w.ch}):R&&R.blend==="set"?R.value+=T:b[w.id]={id:w.id,value:(R?R.value:0)+T,blend:"add",weight:Math.max(R?R.weight:0,v),ch:w.ch}}}function _(b){let x=e(),S={t:x,channels:{},actions:[],finished:[]};for(let v of r.slice()){let w=Bc((x-v.t0)/Math.max(1,v.plan.duration),0,1),y=f(v.plan,w);y>0&&g(S.channels,v.plan,w,y),S.actions.push({planId:v.plan.planId,type:v.plan.action.type,progress:w,weight:y}),w>=1&&(S.finished.push(v.plan.planId),d(v,x,"done"))}if(!r.length&&s.length){let v=s.shift();u(v.plan,x),c("dequeued",v.plan)}return o=S,S}function m(b,x){let S=r.find(v=>v.plan.planId===b);return S?(d(S,e(),x||"interrupt"),!0):!1}function p(b){for(let x of r.slice())d(x,e(),b||"clear");s.length=0}function M(){return{active:r.map(b=>({planId:b.plan.planId,type:b.plan.action.type,progress:Bc((e()-b.t0)/Math.max(1,b.plan.duration),0,1)})),queue:s.map(b=>({planId:b.plan.planId,type:b.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:h,tick:_,interrupt:m,clear:p,snapshot:M,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var FM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function Pd(i,e={}){let t=FM[i]||i;return Id({type:t,...e})}function xg(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,d="stopped",h=0,f=!1,g=!1,_=null,m=null,p=null,M=i.touchBindings?.()||[],b=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(b())||b()<=0)throw new Error("Audio metadata unavailable");let x=()=>f?t.ended?t.duration>=i.duration?b()*1e3:(_||(_={at:e(),time:t.duration*1e3}),Math.min(b()*1e3,_.time+Math.max(0,e()-_.at))):t.currentTime*1e3:e(),S={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(G=>(G==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},v=i.sampleOptions?.()||[],w=v.find(G=>G.persistentState)?.id||null;S.localActions.surface_reaction={enabled:M.length>0,bindings:Object.fromEntries(M.map(G=>{let ue=v.find(K=>K.id===G.sampleId),z=n?.(G.sampleId);return[G.region,{sampleId:G.sampleId,animationDuration:(ue?.duration||0)*1e3,voiceDuration:(z?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function y(G,ue,z="",K=!1){p={schema:"local-surface-reaction/1",id:ue.id,kind:G,sampleId:ue.sampleId,region:ue.touch.region,touch:ue.touch,withOriginalVoice:ue.withVoice,recovered:K,reason:z,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(p)}catch{}}let T=gg({now:x,handlers:{onMotion:G=>d=G==="local-arm-preview"?"local-arm-preview":G==="standby-D"||G==="standby-local"?"standby-preview":"playing",onPose:(G,ue)=>{if(G!=="snowbreak-raise-hand")return;let z=ue.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),z.begin(),o=z,d="local-arm-preview"}catch{z?.restore(),d="arm-failed"}},onEnd:(G,ue)=>{if(h++,G.action.type==="surface_reaction"&&m?.id===G.planId){let z=m;if(m=null,f&&(t.pause(),ue!=="done"&&(t.currentTime=0),f=!1,_=null,s(!1)),ue==="done"){let K=!1;try{K=!!U().accepted&&d==="standby-preview"}catch{T.clear("restore-failed"),d="restore-failed"}y(K?"completed":"failed",z,K?"local-standby-restored":"local-standby-failed",K)}else y(ue.startsWith("audio-")?"failed":"cancelled",z,ue);return}if(G.action.type==="snowbreak_standby"&&ue==="done"){U();return}if(G.action.type==="snowbreak_arm_preview"||G.action.type==="raise_hand"){o?.restore(),o=null,d="stopped",i.seek(0),ue==="done"&&i.startAsStandby&&U();return}if(f&&(t.pause(),ue!=="done"&&(t.currentTime=0),f=!1,_=null,s(!1)),ue==="done"&&l){let z=l;l=null,F(z.id,z.time);return}d=ue==="done"?"sample-ended":"stopped",i.seek(ue==="done"?i.duration:0),ue==="done"&&(G.action.type==="snowbreak_standby"||g)&&U()}}});function R(){if(d==="standby-preview"&&O(),T.activeCount)return{accepted:!1,reason:"sample-busy"};let G={type:"snowbreak_sample",source:"manual-preview",priority:80};return T.dispatch(G,S,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:G,duration:(f?b():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function F(G,ue=0){return v.find(z=>z.id===G)?.persistentState&&(w=G),O(),i.selectSample(G),c={id:G,time:ue},d="scene-preview",i.seek(Math.min(ue,i.duration)),{accepted:!0}}async function I(G,{withVoice:ue=!0}={}){let z=c||l;if(!z)return{accepted:!1};O(),i.selectSample(z.id),i.seek(z.time%i.duration),i.selectSample(G),he(n?.(G));let K=i.sampleOptions?.().find(_e=>_e.id===G)?.afterScene;return l=K?{id:K,time:0}:z,g=!1,ue&&t?k():R()}function B(G){if(c&&d==="scene-preview")return c.time+=Math.max(0,Math.min(100,G))/1e3,i.seek(c.id==="show_03"||i.sampleOptions?.().find(K=>K.id===c.id)?.endPolicy==="hold"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let ue=f?x()/1e3:null,z=T.tick(G);if(d==="arm-failed")return O(),d="arm-failed",z;if(z.actions.length){let K=z.actions[0];if(K.type==="snowbreak_arm_preview"||K.type==="raise_hand"){if(d==="local-arm-preview")try{o.apply(K.progress)}catch{O(),d="arm-failed"}return z}K.type==="snowbreak_standby"&&d==="standby-preview"?i.seekStandby(K.progress*i.standbyDuration):d!=="standby-preview"&&i.seek(ue===null?K.progress*i.duration:Math.min(i.duration,ue))}return z}function U(){if(w)return F(w);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};T.clear("standby-switch");let G={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),T.dispatch(G,S,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:G,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function O(G="sample-stop"){c=null,l=null,o?.restore(),o=null,h++,T.clear(G),t&&(t.pause(),t.currentTime=0),f=!1,_=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),d="stopped"}function C(G="right"){if(!["left","right"].includes(G))return{accepted:!1,reason:"invalid-arm-side"};let ue=G==="left"?i.leftArmPreview:i.armPreview;if(!ue?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(d==="standby-preview"&&O(),T.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{ue.begin(),o=ue}catch{return ue.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let z={type:"snowbreak_arm_preview",side:G,source:"manual-preview",priority:80};return T.dispatch(z,S,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:z,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function N(G){S.localActions.raise_hand.enabled=!!G,!G&&o&&O()}function X(G,ue={}){let z=Pd(G,ue);if(z.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let K=fo(z,S);if(K.stopped||!K.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:K};if(d==="standby-preview"&&O(),T.activeCount)return{accepted:!1,reason:"sample-busy",plan:K};let _e=T.dispatch(z,S,K);return d==="arm-failed"?(O(),d="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:K}):_e}async function P(G,{withVoice:ue=!0}={}){if(!M.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(T.activeCount&&d!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let z=cg(G,M);if(!z)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(G.frequency)||G.frequency<1||G.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let K=n?.(z.sampleId)||null;if(ue&&!K)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let _e=Pd("surface_reaction",{target:z.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!ue}),Fe=fo(_e,S,{planId:"surface-reaction-"+ ++u});if(Fe.stopped||!Fe.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};O();try{i.selectSample(z.sampleId),he(K)}catch{try{U()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let ye={id:Fe.planId,sampleId:z.sampleId,touch:G,withVoice:!!ue},ke=++h;m=ye,_=null,f=!!ue,ue&&(r(),t.currentTime=0,s(!0));let ut=T.dispatch(_e,S,Fe);if(!ut.accepted)return m=null,f=!1,s(!1),{...ut,handled:!1};if(y("started",ye),!ue)return{...ut,handled:!0};try{return await t.play(),ke!==h?{accepted:!1,handled:!0,reason:"superseded"}:{...ut,handled:!0}}catch{return ke===h&&(O("audio-play-failed"),d="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function H(G){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};O();try{let ue=i.selectSample(G);return n&&he(n(G)),i.startAsStandby&&U(),{accepted:!0,...ue}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function k(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(d==="standby-preview"&&O(),T.activeCount||f)return{accepted:!1,reason:"sample-busy"};let G=++h;r(),t.currentTime=0,_=null,f=!0,s(!0);let ue=R();try{return await t.play(),G!==h?{accepted:!1,reason:"superseded"}:ue}catch{return G===h&&(O("audio-play-failed"),d="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let ae=()=>{f&&B(0)},ce=()=>{f&&(O("audio-error"),d="audio-failed")};function he(G){if(G&&(!Number.isFinite(G.duration)||G.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",ae),t?.removeEventListener("error",ce),t=G||null,_=null,t?.addEventListener("ended",ae),t?.addEventListener("error",ce)}return he(t),{bus:T,capability:S,enterScene:F,playSceneReaction:I,dispatchSurfaceTouch:P,selectSample:H,setLocalActionsEnabled:N,dispatchSemantic:X,playArmPreview:C,playSample:R,playWithVoice:k,tick:B,stop:O,enterStandby:U,setStandbyAfterSample:G=>g=!!G,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:p?{...p,touch:void 0}:null,sampleDuration:i.duration,status:d,active:T.activeCount,voiceMode:f,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!_,originalInteractionVerified:!1})}}async function yg(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function _g(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return OM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(d=>d.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>yg(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}async function OM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,_]of[[e.samples,!0],[e.events,!1]])for(let m of g){let p=t.samples.find(v=>v.id===m.id),M=i.getAsset(m.assetRole),b=i.current.resources.find(v=>v.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||M?.kind!=="audio"||!b||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||_&&(!p||p.sourceShowElementId!==void 0&&(!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||p.sourceShowElementId!==m.sourceShowElementId)))throw new Error("Bilingual voice identity mismatch");let x=m.language+":"+m.id+":"+m.eventId;if(r.has(x))throw new Error("Duplicate bilingual voice choice");r.add(x);let S=m.language+":"+m.id;n.has(S)||n.set(S,[]),n.get(S).push({hash:b.assetId,weight:m.weight,eventId:m.eventId}),s.set(b.assetId,M)}if(!r.size)throw new Error("Empty bilingual voice catalog");let c=[...s],l=0;await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;l<c.length;){let[g,_]=c[l++];try{a.set(g,await yg(_))}catch{o.push(g)}}}));let u="Chinese",d=!1;function h(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function f(g){if(d)return null;let _=(n.get(u+":"+g)||[]).filter(M=>a.has(M.hash)),m=_.reduce((M,b)=>M+b.weight,0);if(!_.length||!Number.isFinite(m)||m<=0)return null;let p=Math.random()*m;for(let M of _)if(p-=M.weight,p<0)return a.get(M.hash).audio;return a.get(_.at(-1).hash).audio}return{get audio(){return f(e.defaultId)},getAudio:f,stop:h,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(h(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,_])=>g.startsWith(u+":")&&_.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){d=!0;for(let g of a.values())g.dispose();a.clear()}}}var vg=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function bg(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(f,g){let _=/^(surface_\d+):(\d+)$/.exec(f);return!!_&&!!Kr({mesh:_[1],triangle:Number(_[2]),alphaVerified:!0},{[f]:g})}for(let[f,g]of Object.entries(i||{})){if(t.size>=e)break;a(f,g)&&t.set(f,typeof g=="object"?Object.freeze({...g}):g)}function o(f,g){g===void 0?t.delete(f):t.set(f,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(f,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(f,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(f)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let _=t.get(f);if(vg(_,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(f)?s.get(f).after=g:s.set(f,{key:f,before:_,after:g});let m=s.get(f);return vg(m.before,m.after)&&s.delete(f),o(f,g),!0}function u(){if(!s)return!1;let f=[...s.values()];return s=null,f.length?(n.push(f),n.length>30&&n.shift(),r.length=0,!0):!1}function d(){if(s){for(let f of s.values())o(f.key,f.before);s=null}}function h(f,g,_){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=f.pop();if(!m)return!1;for(let p of m)o(p.key,p[_]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:d,undo:()=>h(n,r,"before"),redo:()=>h(r,n,"after"),get:f=>t.get(f),has:f=>t.has(f),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function Mg(i,e,t,{load:n,save:r,tracker:s,onEvent:a,onInteracting:o,enabled:c}){let l={};try{l=n()}catch{}let u=bg(l),d=document.createElement("h3");d.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(d);let h=document.createElement("label"),f=document.createElement("input");f.type="checkbox",f.id="snowSurfaceEdit",h.append(f,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let g=document.createElement("select");g.id="snowSurfaceRegion";for(let[k,ae]of Object.entries(ir))g.add(new Option(ae,k));g.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(g);let _=document.createElement("label"),m=document.createElement("input");m.type="checkbox",m.id="snowSurfaceShow",_.append(m,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(_);let p=document.createElement("div");for(let[k,ae]of Object.entries(ir)){let ce=document.createElement("span");ce.textContent="\u25A0 "+ae+" ",ce.style.color="#"+Rd[k].toString(16).padStart(6,"0"),p.appendChild(ce)}t.appendChild(p);let M=document.createElement("button"),b=document.createElement("button");M.id="snowSurfaceUndo",b.id="snowSurfaceRedo",M.textContent="\u64A4\u9500\u6807\u6CE8",b.textContent="\u91CD\u505A\u6807\u6CE8",t.append(M,b);let x=document.createElement("p");x.id="snowSurfaceOverlayInfo",t.appendChild(x);let S=document.createElement("button");S.id="snowSurfaceReset",S.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(S);let v=document.createElement("p");v.id="snowSurfaceStatus",v.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(v);let w=null,y=0,T=!1,R=k=>{let ae=ho(k);return Kr(k,ae?{[ae]:u.get(ae)}:{})};function F(){if(T)return;let k=u.state();M.disabled=!k.undo,b.disabled=!k.redo;let ae=i.setSurfaceLabels?.(u.snapshot(),m.checked);x.textContent=m.checked?`\u5DF2\u663E\u793A ${ae?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${ae?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function I(){y||(y=requestAnimationFrame(()=>{y=0,F()}))}function B(){r(u.snapshot()),F()}function U(){if(!w)return;w.mode==="paint"?u.cancel():w.known&&o?.(!1),s.cancel();let k=w.id;w=null,e.hasPointerCapture(k)&&e.releasePointerCapture(k),F()}f.onchange=()=>{U(),f.checked&&(m.checked=!0),F()},g.onchange=U,m.onchange=F,M.onclick=()=>{U(),u.undo()&&(B(),v.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},b.onclick=()=>{U(),u.redo()&&(B(),v.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},S.onclick=()=>{U(),u.begin();for(let k of Object.keys(u.snapshot()))u.set(k,void 0);u.commit()&&B(),v.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function O(k){let ae=ho(k);!ae||!k.alphaVerified||(u.set(ae,w.region||void 0),I(),v.textContent=`\u5F53\u524D\u5171 ${u.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${ir[w.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function C(k){if(w||e.dataset.snowbreakFrameEdit==="true"||!f.checked&&!c())return;k.stopPropagation();let ae=i.pickSurface(k.clientX,k.clientY);if(w={id:k.pointerId,mode:f.checked?"paint":"touch",region:g.value},e.setPointerCapture(k.pointerId),w.mode==="paint"){u.begin();try{O(ae)}catch(ce){v.textContent=ce.message}}else{let ce=R(ae);i.senseTouch?.(ae,ce),ce?(s.begin({pointerId:k.pointerId,x:k.clientX,y:k.clientY,region:ce,source:"skinned-surface"}),w.known=!0,w.hit=ae,o?.(!0)):ae?.alphaVerified?(s.begin({pointerId:k.pointerId,x:k.clientX,y:k.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),w.known=!0,w.hit=ae,o?.(!0)):v.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function N(k){if(w?.id===k.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){U();return}if(k.stopPropagation(),w.mode==="paint")try{O(i.pickSurface(k.clientX,k.clientY))}catch(ae){v.textContent=ae.message}else w.known&&s.move({pointerId:k.pointerId,x:k.clientX,y:k.clientY})}}function X(k){if(w?.id!==k.pointerId)return;k.stopPropagation();let ae=w;if(w=null,ae.mode==="paint")u.commit()&&B(),v.textContent=`\u5DF2\u4FDD\u5B58 ${u.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(ae.known&&c()){o?.(!1);let ce=s.finish({pointerId:k.pointerId,x:k.clientX,y:k.clientY});ce&&(ce.surface=ae.hit,v.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+ce.regionLabel,a(ce))}else ae.known&&o?.(!1),s.cancel();e.hasPointerCapture(k.pointerId)&&e.releasePointerCapture(k.pointerId)}function P(k){w?.id===k.pointerId&&U()}for(let[k,ae]of[["pointerdown",C],["pointermove",N],["pointerup",X],["pointercancel",P],["lostpointercapture",P]])e.addEventListener(k,ae);function H(k){if(!Array.isArray(k)||k.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");U(),u.begin();let ae=0;try{for(let ce of k){let he=ho(ce.hit);if(!he||!ce.hit.alphaVerified||u.has(he)||u.state().count>=3e4)continue;let G={id:ce.id,source:"vision-reviewed",confidence:ce.confidence,model:String(ce.model||"").slice(0,128),visible:!0};Kr(ce.hit,{[he]:G})&&(u.set(he,G),ae++)}u.commit()&&B()}catch(ce){throw u.cancel(),F(),ce}return v.textContent=`\u5DF2\u91C7\u7528 ${ae} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,ae}return F(),{applyReviewed:H,classify:R,state:u.state,dispose(){U(),T=!0,y&&cancelAnimationFrame(y);for(let[k,ae]of[["pointerdown",C],["pointermove",N],["pointerup",X],["pointercancel",P],["lostpointercapture",P]])e.removeEventListener(k,ae)}}}var Lt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),wg=[Lt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Lt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Lt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Lt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Lt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Lt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Lt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Lt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Lt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Lt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Lt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Lt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Lt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Lt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Lt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Lt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Lt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Lt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Lt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Lt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Lt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Lt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Lt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Lt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Lt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Lt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Lt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Lt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Lt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Sg=Object.freeze(Object.fromEntries(wg.map(i=>[i.id,Object.freeze({...i})]))),IT=Object.freeze(wg.map(i=>i.id));function Eg(i){return Sg[i]&&Sg[i].label||String(i||"\u8EAB\u4F53")}var BM="body-touch/1",kM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function Tg(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...kM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(p){a=String(p||"")}function l(p){o=String(p||"screen")}function u(p){return p?(n={pointerId:p.pointerId,x0:Number(p.x)||0,y0:Number(p.y)||0,x:Number(p.x)||0,y:Number(p.y)||0,t0:e(),path:[[Number(p.x)||0,Number(p.y)||0]],region:p.region||null,confidence:Number(p.confidence)||0,source:p.source||o},{...n}):null}function d(p){if(!n||!p)return null;let M=Number(p.x)||0,b=Number(p.y)||0;return n.x=M,n.y=b,n.path.length<t.maxPath&&n.path.push([M,b]),{x:M,y:b,moved:Math.hypot(M-n.x0,b-n.y0)}}function h(){let p=0;for(let M=1;M<n.path.length;M++)p+=Math.hypot(n.path[M][0]-n.path[M-1][0],n.path[M][1]-n.path[M-1][1]);return{length:p,points:n.path.length}}function f(p,M){if(!n)return null;p&&d(p);let b=e(),x=Math.max(0,b-n.t0),S=n.x-n.x0,v=n.y-n.y0,w=Math.hypot(S,v),y=h(),T=M||"";if(!T)if(x>=t.longMinMs&&w<=t.moveTolerancePx)T="long_press";else if(w>=t.strokeMinPx&&x>=t.strokeMinMs&&y.length>=t.strokeMinPx)T="stroke";else if(w<=t.moveTolerancePx&&x<=t.tapMaxMs){let U=n.region&&(n.region.id||n.region)||"body";r&&b-r.at<=t.doubleGapMs&&r.region===U?(T="double_tap",r=null):(T="tap",r={at:b,region:U})}else T="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},F=typeof R=="string"?R:R.id||"body";s.push({at:b,region:F}),s=s.filter(U=>b-U.at<=t.frequencyWindowMs);let I=s.filter(U=>U.region===F).length,B={schema:BM,type:"body_touch",modelId:a,region:F,regionLabel:R.label||Eg(F),side:R.side||"",group:R.group||"",gesture:T,durationMs:Math.round(x),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:I,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+v.toFixed(1)},distance:+w.toFixed(1),pathLength:+y.length.toFixed(1),at:Math.round(b)};return n=null,B}function g(){n=null}function _(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:d,finish:f,cancel:g,reset:_,state:m,setModelId:c,setSource:l,config:t}}var po=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),Ld=Object.freeze({...po,scale:3,x:-.12,y:-.02});function Nd(i){return i&&Object.keys(po).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function Ud(i,e,t,{onEditing:n=()=>{},initialFrame:r=Ld,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0,verticalSign:l=1,dragScale:u=()=>({x:1,y:1})}={}){let d;try{d=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(Nd(d)&&(!o||Number.isFinite(d.depth)&&Math.abs(d.depth)<=1.5)?d:Nd(r)?r:Ld);let h=document.createElement("section");h.id=a+"Editor",h.hidden=!0,h.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let f=document.createElement("button");f.id=a==="presentation"?"finishPresentation":"finishModel",f.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",f.hidden=!0,f.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(h,f);let g=!1,_=null,m=0,p=null,M=null,b=new Map,x=new Map,S=document.createElement("select");S.id=a+"DragMode",S.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),S.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let v=document.createElement("div");v.textContent=s,h.append(v,S);let w=(P,H,k)=>{let ae=document.createElement("button");return ae.textContent=P,ae.id=H.replace("presentation",a),ae.onclick=k,h.append(ae),ae};function y(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function T(){let P=i.frameState();for(let[H,k]of x)k.value=P[H]}function R(P){i.setFrame({...i.frameState(),...P}),T()}function F(){m=0,p&&(R(p),p=null)}function I(P){p={...p||{},...P},m||(m=requestAnimationFrame(F))}function B(P){m&&(cancelAnimationFrame(m),F()),!P&&_&&R(_),y(),g=!1,h.hidden=!0,f.hidden=!0;for(let H of b.keys())e.hasPointerCapture(H)&&e.releasePointerCapture(H);b.clear(),M=null,e.dataset.snowbreakFrameEdit="false",n(!1)}w("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{R(Nd(r)?r:Ld),y()}),w("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{R(po),y()}),w("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{h.hidden=!0,f.hidden=!1}),w("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>B(!0)),w("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>B(!1)),f.onclick=()=>B(!0);for(let[P,H,k,ae,ce]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let he=document.createElement("label");he.textContent=H;let G=document.createElement("input");G.type="range",G.min=k,G.max=ae,G.step=ce,G.id=a+"_"+P,G.style.width="100%",G.oninput=()=>I({[P]:Number(G.value)}),G.onchange=()=>{F(),y()},x.set(P,G),he.append(G),h.append(he)}let U=P=>({x:P.clientX,y:P.clientY});function O(P){g&&(P.preventDefault(),P.stopImmediatePropagation(),b.set(P.pointerId,U(P)),e.setPointerCapture(P.pointerId),M={frame:i.frameState(),points:[...b.values()]})}function C(P){if(!g||!b.has(P.pointerId)||!M)return;P.preventDefault(),P.stopImmediatePropagation(),b.set(P.pointerId,U(P));let H=[...b.values()],k=M.points,ae=M.frame;if(H.length>=2&&k.length>=2){let ce=he=>Math.hypot(he[0].x-he[1].x,he[0].y-he[1].y);I({scale:ae.scale*ce(H)/Math.max(5,ce(k))})}else if(H.length===1&&k.length===1){let ce=(H[0].x-k[0].x)/e.clientWidth,he=(H[0].y-k[0].y)/e.clientHeight;I(S.value==="rotate"?{yaw:ae.yaw+ce*300,pitch:ae.pitch+he*100}:{x:ae.x+ce*u().x,y:ae.y+he*l*u().y})}}function N(P){!g||!b.has(P.pointerId)||(P.preventDefault(),P.stopImmediatePropagation(),b.delete(P.pointerId),e.hasPointerCapture(P.pointerId)&&e.releasePointerCapture(P.pointerId),m&&(cancelAnimationFrame(m),F()),y(),M={frame:i.frameState(),points:[...b.values()]})}let X=[["pointerdown",O],["pointermove",C],["pointerup",N],["pointercancel",N]];for(let[P,H]of X)e.addEventListener(P,H,!0);return{get active(){return g},toggle(){if(g){B(!0);return}g=!0,_=i.frameState(),T(),h.hidden=!1,f.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&B(!0)},dispose(){g&&B(!0);for(let[P,H]of X)e.removeEventListener(P,H,!0);h.remove(),f.remove()},state:()=>i.frameState()}}var Ig=!0,zc=!1,Fd=!0,Hc="normal",Od=!0,mo=0,gi=document.querySelector("#stage"),Ag=document.querySelector("#status"),rr=document.querySelector("#editor"),Zn=null,go=null,la=null,Rg=Promise.resolve(),xo={},Bd="Chinese",kd=null,xi=0,$r="",zd,Te,lt,On,Vc,Yn,Fi,_o,At,kc=0,Fn=!1,yo=!0;function Cg(i){let e=mo>0;mo=Math.max(0,mo+(i?1:-1));let t=mo>0;e!==t&&nn({type:"interacting",active:t})}function Hd(){let i=zc||!Te?.sceneState?.().available?"transparent":"#201d29";document.body.style.background=i,document.documentElement.style.background=i}var jr=Gd(i=>Vd(At,i.tempo,performance.now())),Oi=document.createElement("button");Oi.id="finishPaint";Oi.hidden=!0;Oi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(Oi);function ua(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),Oi.hidden=!0,rr.classList.remove("open")}Oi.onclick=ua;var nn=i=>{let e={...i,nonce:$r};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},Dd=i=>{Ag.textContent=i,Ag.hidden=!i};function Gc(){mo=0,window.__snowbreakMigration=null,la=null,Fi?.dispose(),Fi=null,jr.close(),At=null,Oi.hidden=!0,Yn?.dispose(),_o?.dispose(),Vc?.dispose(),lt?.stop("renderer-close"),On?.dispose(),Te?.dispose(),zd?.dispose(),_o=Yn=Vc=lt=On=Te=zd=null,rr.replaceChildren()}function oa(i,e,t,n){let r=++xi,s=Rg.catch(()=>{}).then(()=>r===xi?zM(i,e,t,r,n):void 0);return Rg=s,s}async function zM(i,e,t,n,r){if($r=e,Fn=!1,gi.dataset.snowbreakPaused="false",t&&Zn?.manifest?.characterId)try{localStorage.setItem(Zn.manifest.characterId.toLowerCase()+"-collection-selection",t)}catch{}if(Gc(),Dd("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026"),t&&await new Promise(c=>setTimeout(c,120)),n!==xi)return;let s,a,o;try{if(t){if(!Zn)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");s=await Zn.selectVariant(t)}else{Zn=null,go=i;let x=typeof i=="string"?i.match(/^companion-snowbreak:\/\/local\/package\/([A-Za-z0-9._-]+)$/):null;if(x)s=await Df(x[1]);else{let S=await fetch(i);if(!S.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");s=await Ff(new Uint8Array(await S.arrayBuffer()))}r&&s.variants?.some(S=>S.id===r)&&s.selection?.id!==r&&(s.runtime.dispose(),s=await s.selectVariant(r))}if(!/^[A-Za-z0-9_-]{1,64}$/.test(s.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(a=await hg(gi,s.runtime,{isCurrent:()=>n===xi,universalMotions:kd,performanceMode:xo.mode||null}),o=s.runtime.getAsset("voiceCatalog")?await _g(s.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==xi){a.dispose(),o.dispose(),s.runtime.dispose();return}Zn=s.variants.length?s:null,s.selection&&localStorage.setItem(s.manifest.characterId.toLowerCase()+"-collection-selection",s.selection.id),zd=s.runtime,Te=a,On=o,Te.setRenderBudget(xo),On.setLanguage?.(Bd),Hd(),lt=xg(Te,{audioForSample:x=>On.getAudio(x)}),Te.sceneInteractions.setDeferredFeedback?.(Od),Te.sceneInteractions.configure({beforeDrag:()=>{At=null,Te.embodiment.releaseHands(),Te.resetSenses()},interacting:Cg,scene:()=>lt.snapshot().sceneId||Te.editingScene,reaction:x=>{lt.playSceneReaction(x,{withVoice:yo})},voice:x=>{if(yo){let S=On.getAudio(x);S&&(S.currentTime=0,S.play().catch(()=>{}))}},event:nn}),Te.showFaceCandidate(!0);let c=Te.sampleOptions().find(x=>x.id===Te.sampleState().sampleId),l="resting-scene:"+s.manifest.characterId+":"+s.selection?.mode,u=localStorage.getItem(l);c?.persistentState?lt.enterScene(Te.sampleOptions().some(x=>x.id===u&&x.persistentState)?u:c.id):lt.enterStandby(),Te.sceneSelectionKey=l,Te.faceViewer(),Hc!=="normal"&&Te.setProportionMode?.(Hc),zc&&(Te.setARMode?.(!0,{hideRoom:Fd}),Hd()),kc=performance.now();let d=null,h=x=>{if(nn({type:"editing",active:x}),x){let S=lt.snapshot();d=S.sceneId?{id:S.sceneId,time:S.sceneTime}:null,Te.editingScene=d?.id||null,Te.sceneInteractions.cancel(),lt.stop("placement-edit"),d&&(Te.selectSample(d.id),Te.seek(d.time%Te.duration)),ua()}else Fn||(d?lt.enterScene(d.id,d.time):lt.enterStandby(),d=null,Te.editingScene=null)},f=()=>{Fi?.dispose();let x=s.manifest.characterId==="Enya"?"":s.manifest.characterId.toLowerCase()+":";Fi=Ud({setFrame:Te.setModelFrame,frameState:Te.modelFrameState},gi,"model-placement:"+x+s.selection?.mode+":"+(lt.snapshot().sceneId||"main"),{initialFrame:{...po,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Te.modelDragScale,onEditing:h})};Te.setupModelEditor=f,f(),Yn=Ud(Te,gi,"presentation:"+(s.selection?s.manifest.characterId.toLowerCase()+"-"+s.selection.mode:s.manifest.skinId),{initialFrame:Te.presentationDefault,onEditing:h}),_o=Wd(Te,"lighting:"+(s.selection?s.manifest.characterId.toLowerCase()+"-"+s.selection.mode:s.manifest.skinId));let g="";Te.setFrameHandler(()=>{let x=performance.now();if(Fn||lt.tick(Math.min(100,Math.max(0,x-kc))),kc=x,!Fn&&At){let y=So(At,x),T=At.duration,R=At.stop===void 0?1:Math.max(0,1-(x-At.stop)/300);if(y>=T||R===0)At=null;else{let F=Math.max(0,Math.min(1,y/.3,(T-y)/(.3*At.rate),R)),I=F*F*(3-2*F);Te.applyLearnedMotion(At.id,y,I,{amplitude:jr.get().amplitude})}}let S=lt.snapshot(),v=At?"learned:"+At.id:S.status,w=v+":"+(S.sceneId||"")+":"+Te.sampleState().sampleId;w!==g&&(g=w,nn({type:"selfState",state:ca()}),nn({type:"playback",active:!!At||["playing","scene-preview","local-arm-preview"].includes(S.status),status:v,label:At?Te.learnedOptions().find(y=>y.id===At.id)?.label:Te.sampleOptions().find(y=>y.id===Te.sampleState().sampleId)?.label}))});let _=s.manifest.resources.filter(x=>x.kind==="geometry").map(x=>x.assetId).join("-"),m="surface:"+s.manifest.skinId+":"+_;Vc=Mg(Te,gi,rr,{load:()=>JSON.parse(localStorage.getItem(m)||"{}"),save:x=>localStorage.setItem(m,JSON.stringify(x)),tracker:Tg({modelId:s.manifest.skinId,source:"skinned-surface"}),enabled:()=>!Fn,onInteracting:Cg,onEvent:async x=>{n!==xi||Fn||(nn({type:"touch",region:x.region,label:x.regionLabel,gesture:x.gesture,confidence:x.confidence,source:x.regionSource,durationMs:x.durationMs,frequency:x.frequency,completed:!0}),Ig||await lt.dispatchSurfaceTouch(x,{withVoice:yo}))}});let p=document.createElement("button");p.textContent="\u5173\u95ED\u5DE5\u5177",p.onclick=ua,rr.prepend(p);let M=rr.querySelector("#snowSurfaceRegion"),b=rr.querySelector("#snowSurfaceEdit");b.addEventListener("change",()=>{b.checked&&(rr.classList.remove("open"),Oi.textContent="\u5B8C\u6210"+M.selectedOptions[0].textContent+"\u6807\u6CE8",Oi.hidden=!1)}),Dd(""),nn({type:"ready",bodyActions:[...Te.embodiment.snapshot().available,...Te.sceneInteractions.available()],selection:s.selection,variants:s.variants,characterId:s.manifest.characterId,skinId:s.manifest.skinId,stance:s.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Te.sampleOptions().map(x=>x.id),sampleLabels:Object.fromEntries(Te.sampleOptions().map(x=>[x.id,x.label])),voices:On.snapshot().available,learned:Te.learnedOptions().map(x=>x.id),learnedLabels:Object.fromEntries(Te.learnedOptions().map(x=>[x.id,x.label]))}),window.__snowbreakMigration={display:Te,adapter:lt,voices:On,editor:Vc,presentation:Yn,manifest:s.manifest}}catch(c){if(n!==xi){a?.dispose(),o?.dispose(),s?.runtime.dispose();return}Gc(),a?.dispose(),o?.dispose(),s?.runtime.dispose(),Dd("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(c.message||c)),nn({type:"error",message:String(c.message||c)})}}async function HM(i){if(i.type==="hardwareBudget"){let e=xo.mode;if(xo={thermal:i.thermal,lowPower:i.lowPower,...i.mode?{mode:i.mode}:{}},i.mode)try{localStorage.setItem("snowRenderMode",i.mode)}catch{}if(Te?.setRenderBudget(xo),Te&&i.reloadOnTierChange&&e&&i.mode&&e!==i.mode){if(Zn?.selection?.id)return oa(null,$r,Zn.selection.id);if(go)return oa(go,$r)}return}if(i.type==="releaseMemory"){if(On?.stop?.(),Te?.releaseCache?.(),i.reload){if(Zn?.selection?.id)return oa(null,$r,Zn.selection.id);if(go)return oa(go,$r)}return}if(i.type==="universalMotions"){if(kd=i.catalog||null,Te){let e=Te.setUniversalMotions(kd);nn({type:"universalReady",learned:e.map(t=>t.id),learnedLabels:Object.fromEntries(e.map(t=>[t.id,t.label]))})}return}if(i.type==="arMode"){if(zc=!!i.enabled,i.hideRoom!==void 0&&(Fd=!!i.hideRoom),Te){let e=Te.setARMode(zc,{hideRoom:Fd});Hd(),nn({type:"arState",...e})}return}if(i.type==="proportionMode"){if(Hc=i.mode==="chibi"?"chibi":"normal",Te){let e=Te.setProportionMode(Hc);nn({type:"proportionState",...e})}return}if(i.type==="deferredFeedback"){Od=!!i.enabled,Te?.sceneInteractions.setDeferredFeedback?.(Od);return}if(i.type==="dispose"){xi++,Gc();return}if(i.type==="load")return oa(i.url,i.nonce,null,i.preferredVariant||null);if(i.type==="variant")return Zn?.variants.some(e=>e.id===i.id)?oa(null,$r,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(Bd=i.language==="ja"?"Japanese":"Chinese",lt){let e=lt.snapshot();lt.stop("voice-language-change"),On?.setLanguage?.(Bd),e.sceneId?lt.enterScene(e.sceneId,e.sceneTime):lt.enterStandby()}return}if(lt){if(["body","gesture","sample","learned","stop"].includes(i.type)){On?.stop?.();let e=Te.sceneInteractions.snapshot();if(i.automatic&&(Fi?.active||Yn?.active||e.active||e.recovering)){nn({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}Fi?.close(),Yn?.close()}if(i.type==="body"){if(Fn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Te.sceneInteractions.available().includes(i.id)){Te.sceneInteractions.command(i.id),nn({type:"selfState",state:ca(),requestId:i.requestId});return}let e=xi;if(At=null,lt.snapshot().sceneId||(lt.stop("body-command"),lt.enterStandby()),Te.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==xi)return;nn({type:"selfState",state:ca(),requestId:i.requestId});return}if(i.type==="gesture"){if(Fn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");At=null,lt.snapshot().sceneId||(lt.stop("ai-gesture"),lt.enterStandby()),Te.embodiment.playGesture(i.id,i.plan),nn({type:"selfState",state:ca()});return}if(i.type==="touchPolicy"){Ig=!!i.aiControlled;return}if(i.type==="danceSettings"){jr.set(i);return}if(i.type==="danceEdit"){jr.toggle();return}if(i.type==="speechLevel"){Te.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Te.setGaze(i.x,i.y);return}if(i.type==="pause"){if(Fn)return;On?.stop?.(),Fi?.close(),jr.close();let e=lt.snapshot();la=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Te.sceneInteractions.suspend(),Te.embodiment.reset(),Te.resetSenses(),At=null,Fn=!0,_o?.close(),Yn?.close(),gi.dataset.snowbreakPaused="true",lt.stop("background"),ua();return}if(i.type==="resume"){let e=Fn;Fn=!1,gi.dataset.snowbreakPaused="false",kc=performance.now(),Te?.kickLoop?.(),(e||lt.snapshot().status==="stopped")&&(la?(lt.enterScene(la.id,la.time),la=null):lt.enterStandby());return}if(i.type==="stop"){if(Te.embodiment.reset(),At){At.stop=performance.now();return}lt.stop(),lt.enterStandby();return}if(i.type==="officialTouchPoints"){Te.sceneInteractions.togglePoints()||nn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){At=null,Yn.close(),rr.classList.contains("open")||!Oi.hidden?ua():rr.classList.add("open");return}if(i.type==="lightingEdit"){Yn.close(),ua(),_o.toggle();return}if(i.type==="modelEdit"){At=null,Yn.close(),Fi.toggle();return}if(i.type==="modelFrame"){Te.setModelFrame(i.frame);return}if(i.type==="frameEdit"){At=null,Fi.close(),Yn.toggle();return}if(i.type==="scene")return Te.setSceneVisible(!!i.visible);if(i.type==="room")return Te.setRoomVisible(!!i.visible);if(i.type==="voice"){if(yo=!!i.enabled,!yo){On?.stop?.();let e=lt.snapshot().sceneId;lt.stop("voice-disabled"),e?lt.enterScene(e):lt.enterStandby()}return}if(i.type==="sample"&&Te.sampleOptions().some(e=>e.id===i.id)){if(Te.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Te.sampleOptions().find(t=>t.id===i.id)?.persistentState){At=null,Fi.close(),Te.embodiment.reset(),lt.enterScene(i.id),Te.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Te.sceneSelectionKey,i.id),Te.setupModelEditor(),nn({type:"selfState",state:ca()});return}if(lt.snapshot().sceneId){let t=i.id==="head"?Te.sceneInteractions.headReaction():null;await lt.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Te.embodiment.releaseHands(),At=null,Yn.close(),Fn=!1,lt.stop(),lt.selectSample(i.id),lt.setStandbyAfterSample(!0),(i.withVoice&&On.getAudio(i.id)?await lt.playWithVoice():lt.playSample()).accepted||nn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Te.embodiment.releaseHands();let e=Te.learnedOptions().find(t=>t.id===i.id);if(!e)return;Yn.close(),lt.stop("learned-motion"),lt.enterStandby(),At={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?jr.get().tempo:1}}}}function ca(){if(!Te)return null;let i=Te.embodiment.snapshot(),e=lt?.snapshot(),t=Te.sampleOptions().find(r=>r.id===Te.sampleState().sampleId),n=Te.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:At?{id:At.id,time:So(At,performance.now()),rate:At.rate,amplitude:jr.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Zn?.selection?.outfit||"unknown",mode:Zn?.selection?.mode||"unknown"}}function VM(){if(!Te||Fn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(gi.width,gi.height);i.width=Math.round(gi.width*e),i.height=Math.round(gi.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Te.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:ca,portrait:VM,performance:()=>Te?.performanceState(),arFrame:(i,e,t,n)=>Te?.setARFrame?.(i,e,t,n),receive:i=>{HM(i).catch(e=>nn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{xi++,Gc()});nn({type:"pageReady"});})();
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
