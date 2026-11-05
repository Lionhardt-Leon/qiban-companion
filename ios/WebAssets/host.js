(()=>{var qm=Object.defineProperty;var Ym=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Zm=(i,e)=>{for(var t in e)qm(i,t,{get:e[t],enumerable:!0})};var $f={};Zm($f,{AsyncCompress:()=>ng,AsyncDecompress:()=>ag,AsyncDeflate:()=>Of,AsyncGunzip:()=>kf,AsyncGzip:()=>ng,AsyncInflate:()=>Cc,AsyncUnzipInflate:()=>xg,AsyncUnzlib:()=>Vf,AsyncZipDeflate:()=>fg,AsyncZlib:()=>rg,Compress:()=>mc,DecodeUTF8:()=>cg,Decompress:()=>yc,Deflate:()=>Ln,EncodeUTF8:()=>ug,FlateErrorCode:()=>eg,Gunzip:()=>$a,Gzip:()=>mc,Inflate:()=>un,Unzip:()=>_g,UnzipInflate:()=>gg,UnzipPassThrough:()=>Kf,Unzlib:()=>ja,Zip:()=>dg,ZipDeflate:()=>hg,ZipPassThrough:()=>zs,Zlib:()=>xc,compress:()=>ig,compressSync:()=>gc,decompress:()=>og,decompressSync:()=>lg,deflate:()=>Bf,deflateSync:()=>Ws,gunzip:()=>zf,gunzipSync:()=>Ja,gzip:()=>ig,gzipSync:()=>gc,inflate:()=>Ic,inflateSync:()=>Wr,strFromU8:()=>Lc,strToU8:()=>ki,unzip:()=>yg,unzipSync:()=>vg,unzlib:()=>Hf,unzlibSync:()=>Qa,zip:()=>pg,zipSync:()=>mg,zlib:()=>sg,zlibSync:()=>_c});function rr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function Bf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[Vr],function(n){return zi(Ws(n.data[0],n.data[1]))},0,t)}function Ws(i,e){return ir(i,e||{},0,0)}function Ic(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[zr],function(n){return zi(Wr(n.data[0],Sc(n.data[1])))},1,t)}function Wr(i,e){return Hs(i,{i:2},e&&e.out,e&&e.dictionary)}function ig(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[Vr,Lf,function(){return[gc]}],function(n){return zi(gc(n.data[0],n.data[1]))},2,t)}function gc(i,e){e||(e={});var t=kr(),n=i.length;t.p(i);var r=ir(i,e,Tc(e),8),s=r.length;return wc(r,e),pt(r,s-8,t.d()),pt(r,s-4,n),r}function zf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[zr,Nf,function(){return[Ja]}],function(n){return zi(Ja(n.data[0],n.data[1]))},3,t)}function Ja(i,e){var t=Ec(i);return t+8>i.length&&We(6,"invalid gzip data"),Hs(i.subarray(t,-8),{i:2},e&&e.out||new nt(Ff(i)),e&&e.dictionary)}function sg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[Vr,Df,function(){return[_c]}],function(n){return zi(_c(n.data[0],n.data[1]))},4,t)}function _c(i,e){e||(e={});var t=to();t.p(i);var n=ir(i,e,e.dictionary?6:2,4);return Ac(n,e),pt(n,n.length-4,t.d()),n}function Hf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),Hr(i,e,[zr,Uf,function(){return[Qa]}],function(n){return zi(Qa(n.data[0],Sc(n.data[1])))},5,t)}function Qa(i,e){return Hs(i.subarray(Rc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function og(i,e,t){return t||(t=e,e={}),typeof t!="function"&&We(7),i[0]==31&&i[1]==139&&i[2]==8?zf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Ic(i,e,t):Hf(i,e,t)}function lg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?Ja(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Wr(i,e):Qa(i,e)}function ki(i,e){if(e){for(var t=new nt(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(_f)return _f.encode(i);for(var r=i.length,s=new nt(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new nt(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Pn(s,0,a)}function Lc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(vc)return vc.decode(i);var r=Wf(i),s=r.s,t=r.r;return t.length&&We(8),s}}function pg(i,e,t){t||(t=e,e={}),typeof t!="function"&&We(7);var n={};Pc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},f=function(m,p){eo(function(){t(m,p)})};eo(function(){f=t});var d=function(){var m=new nt(o+22),p=a,M=o-a;o=0;for(var E=0;E<c;++E){var y=l[E];try{var b=y.c.length;Ur(m,o,y,y.f,y.u,b);var w=30+y.f.length+Bi(y.extra),S=o+w;m.set(y.c,S),Ur(m,a,y,y.f,y.u,b,o,y.m),a+=16+w+(y.m?y.m.length:0),o=S+b}catch(x){return f(x,null)}}Nc(m,a,l.length,M,p),f(null,m)};s||d();for(var g=function(m){var p=r[m],M=n[p],E=M[0],y=M[1],b=kr(),w=E.length;b.p(E);var S=ki(p),x=S.length,T=y.comment,C=T&&ki(T),R=C&&C.length,U=Bi(y.extra),D=y.level==0?0:8,I=function(F,P){if(F)h(),f(F,null);else{var k=P.length;l[m]=Gs(y,{size:w,crc:b.d(),c:P,f:S,m:C,u:x!=p.length||C&&T.length!=R,compression:D}),a+=30+x+U+k,o+=76+2*(x+U)+(R||0)+k,--s||d()}};if(x>65535&&I(We(11,0,1),null),!D)I(null,E);else if(w<16e4)try{I(null,Ws(E,y))}catch(F){I(F,null)}else u.push(Bf(E,y,I))},_=0;_<c;++_)g(_);return h}function mg(i,e){e||(e={});var t={},n=[];Pc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=ki(a),f=h.length,d=l.comment,g=d&&ki(d),_=g&&g.length,m=Bi(l.extra);f>65535&&We(11);var p=u?Ws(c,l):c,M=p.length,E=kr();E.p(c),n.push(Gs(l,{size:c.length,crc:E.d(),c:p,f:h,m:g,u:f!=a.length||g&&d.length!=_,o:r,compression:u})),r+=30+f+m+M,s+=76+2*(f+m)+(_||0)+M}for(var y=new nt(s+22),b=r,w=s-r,S=0;S<n.length;++S){var h=n[S];Ur(y,h.o,h,h.f,h.u,h.c.length);var x=30+h.f.length+Bi(h.extra);y.set(h.c,h.o+x),Ur(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+x+(h.m?h.m.length:0)}return Nc(y,r,n.length,w,b),y}function yg(i,e,t){t||(t=e,e={}),typeof t!="function"&&We(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,p){eo(function(){t(m,p)})};eo(function(){a=t});for(var o=i.length-22;Dt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(We(13,0,1),null),r;var c=nn(i,o+8);if(c){var l=c,u=Dt(i,o+16),h=u==4294967295||l==65535;if(h){var f=Dt(i,o-12);h=Dt(i,f)==101075792,h&&(l=c=Dt(i,f+32),u=Dt(i,f+48))}for(var d=e&&e.filter,g=function(m){var p=Yf(i,u,h),M=p[0],E=p[1],y=p[2],b=p[3],w=p[4],S=p[5],x=qf(i,S);u=w;var T=function(R,U){R?(r(),a(R,null)):(U&&(s[b]=U),--c||a(null,s))};if(!d||d({name:b,size:E,originalSize:y,compression:M}))if(!M)T(null,Pn(i,x,x+E));else if(M==8){var C=i.subarray(x,x+E);if(y<524288||E>.8*y)try{T(null,Wr(C,{out:new nt(y)}))}catch(R){T(R,null)}else n.push(Ic(C,{size:y},T))}else T(We(14,"unknown compression type "+M,1),null);else T(null,null)},_=0;_<l;++_)g(_)}else a(null,{});return r}function vg(i,e){for(var t={},n=i.length-22;Dt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&We(13);var r=nn(i,n+8);if(!r)return{};var s=Dt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Dt(i,n-12);a=Dt(i,o)==101075792,a&&(r=Dt(i,o+32),s=Dt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=Yf(i,s,a),h=u[0],f=u[1],d=u[2],g=u[3],_=u[4],m=u[5],p=qf(i,m);s=_,(!c||c({name:g,size:f,originalSize:d,compression:h}))&&(h?h==8?t[g]=Wr(i.subarray(p,p+f),{out:new nt(d)}):We(14,"unknown compression type "+h):t[g]=Pn(i,p,p+f))}return t}var gf,Qm,nt,rn,Vs,Fr,Or,Bs,yf,vf,Mc,Za,Mf,bf,fc,ks,mi,mt,In,gi,mt,mt,mt,mt,Dr,mt,Sf,wf,Ef,Tf,Xa,Cn,qa,Br,Pn,eg,Af,We,Hs,Qn,Lr,Ya,Ka,dc,Nr,bc,pc,Rf,Oi,Cf,If,kr,to,ir,Gs,xf,Wa,tg,Pf,zr,Vr,Lf,Nf,Df,Uf,zi,Sc,Hr,Nn,Gr,nn,Dt,hc,pt,wc,Ec,Ff,Tc,Ac,Rc,Ln,Of,un,Cc,mc,ng,$a,kf,xc,rg,ja,Vf,yc,ag,Pc,_f,vc,Gf,Wf,cg,ug,Xf,qf,Yf,Zf,Bi,Ur,Nc,zs,hg,fg,dg,Kf,gg,xg,_g,eo,Jf=Ym(()=>{gf={},Qm=(function(i,e,t,n,r){var s=new Worker(gf[e]||(gf[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),nt=Uint8Array,rn=Uint16Array,Vs=Int32Array,Fr=new nt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Or=new nt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bs=new nt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yf=function(i,e){for(var t=new rn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Vs(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},vf=yf(Fr,2),Mc=vf.b,Za=vf.r;Mc[28]=258,Za[258]=28;Mf=yf(Or,0),bf=Mf.b,fc=Mf.r,ks=new rn(32768);for(mt=0;mt<32768;++mt)mi=(mt&43690)>>1|(mt&21845)<<1,mi=(mi&52428)>>2|(mi&13107)<<2,mi=(mi&61680)>>4|(mi&3855)<<4,ks[mt]=((mi&65280)>>8|(mi&255)<<8)>>1;In=(function(i,e,t){for(var n=i.length,r=0,s=new rn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new rn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new rn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[ks[h]>>c]=l}else for(o=new rn(n),r=0;r<n;++r)i[r]&&(o[r]=ks[a[i[r]-1]++]>>15-i[r]);return o}),gi=new nt(288);for(mt=0;mt<144;++mt)gi[mt]=8;for(mt=144;mt<256;++mt)gi[mt]=9;for(mt=256;mt<280;++mt)gi[mt]=7;for(mt=280;mt<288;++mt)gi[mt]=8;Dr=new nt(32);for(mt=0;mt<32;++mt)Dr[mt]=5;Sf=In(gi,9,0),wf=In(gi,9,1),Ef=In(Dr,5,0),Tf=In(Dr,5,1),Xa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Cn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},qa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Br=function(i){return(i+7)/8|0},Pn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new nt(i.subarray(e,t))},eg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Af=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],We=function(i,e,t){var n=new Error(e||Af[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,We),!t)throw n;return n},Hs=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new nt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new nt(r*3));var l=function(ie){var le=t.length;if(ie>le){var ge=new nt(Math.max(le*2,ie));ge.set(t),t=ge}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,_=e.m,m=e.n,p=r*8;do{if(!d){u=Cn(i,h,1);var M=Cn(i,h+1,3);if(h+=3,M)if(M==1)d=wf,g=Tf,_=9,m=5;else if(M==2){var w=Cn(i,h,31)+257,S=Cn(i,h+10,15)+4,x=w+Cn(i,h+5,31)+1;h+=14;for(var T=new nt(x),C=new nt(19),R=0;R<S;++R)C[Bs[R]]=Cn(i,h+R*3,7);h+=S*3;for(var U=Xa(C),D=(1<<U)-1,I=In(C,U,1),R=0;R<x;){var F=I[Cn(i,h,D)];h+=F&15;var E=F>>4;if(E<16)T[R++]=E;else{var P=0,k=0;for(E==16?(k=3+Cn(i,h,3),h+=2,P=T[R-1]):E==17?(k=3+Cn(i,h,7),h+=3):E==18&&(k=11+Cn(i,h,127),h+=7);k--;)T[R++]=P}}var X=T.subarray(0,w),N=T.subarray(w);_=Xa(X),m=Xa(N),d=In(X,_,1),g=In(N,m,1)}else We(1);else{var E=Br(h)+4,y=i[E-4]|i[E-3]<<8,b=E+y;if(b>r){c&&We(0);break}o&&l(f+y),t.set(i.subarray(E,b),f),e.b=f+=y,e.p=h=b*8,e.f=u;continue}if(h>p){c&&We(0);break}}o&&l(f+131072);for(var z=(1<<_)-1,q=(1<<m)-1,de=h;;de=h){var P=d[qa(i,h)&z],oe=P>>4;if(h+=P&15,h>p){c&&We(0);break}if(P||We(2),oe<256)t[f++]=oe;else if(oe==256){de=h,d=null;break}else{var K=oe-254;if(oe>264){var R=oe-257,ne=Fr[R];K=Cn(i,h,(1<<ne)-1)+Mc[R],h+=ne}var ue=g[qa(i,h)&q],B=ue>>4;ue||We(3),h+=ue&15;var N=bf[B];if(B>3){var ne=Or[B];N+=qa(i,h)&(1<<ne)-1,h+=ne}if(h>p){c&&We(0);break}o&&l(f+131072);var Y=f+K;if(f<N){var fe=s-N,xe=Math.min(N,Y);for(fe+f<0&&We(3);f<xe;++f)t[f]=n[fe+f]}for(;f<Y;++f)t[f]=t[f-N]}}e.l=d,e.p=de,e.b=f,e.f=u,d&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return f!=t.length&&a?Pn(t,0,f):t.subarray(0,f)},Qn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Lr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Ya=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Oi,l:0};if(r==1){var a=new nt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(b,w){return b.f-w.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var d=new rn(f+1),g=Ka(t[u-1],d,0);if(g>e){var n=0,_=0,m=g-e,p=1<<m;for(s.sort(function(w,S){return d[S.s]-d[w.s]||w.f-S.f});n<r;++n){var M=s[n].s;if(d[M]>e)_+=p-(1<<g-d[M]),d[M]=e;else break}for(_>>=m;_>0;){var E=s[n].s;d[E]<e?_-=1<<e-d[E]++-1:++n}for(;n>=0&&_;--n){var y=s[n].s;d[y]==e&&(--d[y],++_)}g=e}return{t:new nt(d),l:g}},Ka=function(i,e,t){return i.s==-1?Math.max(Ka(i.l,e,t+1),Ka(i.r,e,t+1)):e[i.s]=t},dc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new rn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Nr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},bc=function(i,e,t){var n=t.length,r=Br(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},pc=function(i,e,t,n,r,s,a,o,c,l,u){Qn(e,u++,t),++r[256];for(var h=Ya(r,15),f=h.t,d=h.l,g=Ya(s,15),_=g.t,m=g.l,p=dc(f),M=p.c,E=p.n,y=dc(_),b=y.c,w=y.n,S=new rn(19),x=0;x<M.length;++x)++S[M[x]&31];for(var x=0;x<b.length;++x)++S[b[x]&31];for(var T=Ya(S,7),C=T.t,R=T.l,U=19;U>4&&!C[Bs[U-1]];--U);var D=l+5<<3,I=Nr(r,gi)+Nr(s,Dr)+a,F=Nr(r,f)+Nr(s,_)+a+14+3*U+Nr(S,C)+2*S[16]+3*S[17]+7*S[18];if(c>=0&&D<=I&&D<=F)return bc(e,u,i.subarray(c,c+l));var P,k,X,N;if(Qn(e,u,1+(F<I)),u+=2,F<I){P=In(f,d,0),k=f,X=In(_,m,0),N=_;var z=In(C,R,0);Qn(e,u,E-257),Qn(e,u+5,w-1),Qn(e,u+10,U-4),u+=14;for(var x=0;x<U;++x)Qn(e,u+3*x,C[Bs[x]]);u+=3*U;for(var q=[M,b],de=0;de<2;++de)for(var oe=q[de],x=0;x<oe.length;++x){var K=oe[x]&31;Qn(e,u,z[K]),u+=C[K],K>15&&(Qn(e,u,oe[x]>>5&127),u+=oe[x]>>12)}}else P=Sf,k=gi,X=Ef,N=Dr;for(var x=0;x<o;++x){var ne=n[x];if(ne>255){var K=ne>>18&31;Lr(e,u,P[K+257]),u+=k[K+257],K>7&&(Qn(e,u,ne>>23&31),u+=Fr[K]);var ue=ne&31;Lr(e,u,X[ue]),u+=N[ue],ue>3&&(Lr(e,u,ne>>5&8191),u+=Or[ue])}else Lr(e,u,P[ne]),u+=k[ne]}return Lr(e,u,P[256]),u+k[256]},Rf=new Vs([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Oi=new nt(0),Cf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new nt(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=Rf[e-1],f=h>>13,d=h&8191,g=(1<<t)-1,_=s.p||new rn(32768),m=s.h||new rn(g+1),p=Math.ceil(t/3),M=2*p,E=function(ce){return(i[ce]^i[ce+1]<<p^i[ce+2]<<M)&g},y=new Vs(25e3),b=new rn(288),w=new rn(32),S=0,x=0,T=s.i||0,C=0,R=s.w||0,U=0;T+2<a;++T){var D=E(T),I=T&32767,F=m[D];if(_[I]=F,m[D]=I,R<=T){var P=a-T;if((S>7e3||C>24576)&&(P>423||!l)){u=pc(i,c,0,y,b,w,x,C,U,T-U,u),C=S=x=0,U=T;for(var k=0;k<286;++k)b[k]=0;for(var k=0;k<30;++k)w[k]=0}var X=2,N=0,z=d,q=I-F&32767;if(P>2&&D==E(T-q))for(var de=Math.min(f,P)-1,oe=Math.min(32767,T),K=Math.min(258,P);q<=oe&&--z&&I!=F;){if(i[T+X]==i[T+X-q]){for(var ne=0;ne<K&&i[T+ne]==i[T+ne-q];++ne);if(ne>X){if(X=ne,N=q,ne>de)break;for(var ue=Math.min(q,ne-2),B=0,k=0;k<ue;++k){var Y=T-q+k&32767,fe=_[Y],xe=Y-fe&32767;xe>B&&(B=xe,F=Y)}}}I=F,F=_[I],q+=I-F&32767}if(N){y[C++]=268435456|Za[X]<<18|fc[N];var ie=Za[X]&31,le=fc[N]&31;x+=Fr[ie]+Or[le],++b[257+ie],++w[le],R=T+X,++S}else y[C++]=i[T],++b[i[T]]}}for(T=Math.max(T,R);T<a;++T)y[C++]=i[T],++b[i[T]];u=pc(i,c,l,y,b,w,x,C,U,T-U,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=_,s.i=T,s.w=R)}else{for(var T=s.w||0;T<a+l;T+=65535){var ge=T+65535;ge>=a&&(c[u/8|0]=l,ge=a),u=bc(c,u+1,i.subarray(T,ge))}s.i=a}return Pn(o,0,n+Br(u)+r)},If=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),kr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=If[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},to=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},ir=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new nt(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Cf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},Gs=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},xf=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var h in o.prototype)e+=";"+c+".prototype."+h+"="+o.prototype[h].toString()}else e+=l}else t[c]=o}return e},Wa=[],tg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Pf=function(i,e,t,n){if(!Wa[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=xf(i[o],r,s);Wa[t]={c:xf(i[a],r,s),e:s}}var c=Gs({},Wa[t].e);return Qm(Wa[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,tg(c),n)},zr=function(){return[nt,rn,Vs,Fr,Or,Bs,Mc,bf,wf,Tf,ks,Af,In,Xa,Cn,qa,Br,Pn,We,Hs,Wr,zi,Sc]},Vr=function(){return[nt,rn,Vs,Fr,Or,Bs,Za,fc,Sf,gi,Ef,Dr,ks,Rf,Oi,In,Qn,Lr,Ya,Ka,dc,Nr,bc,pc,Br,Pn,Cf,ir,Ws,zi]},Lf=function(){return[wc,Tc,pt,kr,If]},Nf=function(){return[Ec,Ff]},Df=function(){return[Ac,pt,to]},Uf=function(){return[Rc]},zi=function(i){return postMessage(i,[i.buffer])},Sc=function(i){return i&&{out:i.size&&new nt(i.size),dictionary:i.dictionary}},Hr=function(i,e,t,n,r,s){var a=Pf(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Nn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},Gr=function(i,e,t,n,r,s,a){var o,c=Pf(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||We(5),o&&e.ondata(We(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},nn=function(i,e){return i[e]|i[e+1]<<8},Dt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},hc=function(i,e){return Dt(i,e)+Dt(i,e+4)*4294967296},pt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},wc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&pt(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Ec=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&We(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Ff=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Tc=function(i){return 10+(i.filename?i.filename.length+1:0)},Ac=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=to();r.p(e.dictionary),pt(i,2,r.d())}},Rc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&We(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&We(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Ln=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new nt(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(ir(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||We(5),this.s.l&&We(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new nt(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||We(5),this.s.l&&We(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),Of=(function(){function i(e,t){Gr([Vr,function(){return[Nn,Ln]}],this,rr.call(this,e,t),function(n){var r=new Ln(n.data);onmessage=Nn(r)},6,1)}return i})();un=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new nt(32768),this.p=new nt(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||We(5),this.d&&We(4),!this.p.length)this.p=e;else if(e.length){var t=new nt(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=Hs(this.p,this.s,this.o);this.ondata(Pn(n,t,this.s.b),this.d),this.o=Pn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Pn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Cc=(function(){function i(e,t){Gr([zr,function(){return[Nn,un]}],this,rr.call(this,e,t),function(n){var r=new un(n.data);onmessage=Nn(r)},7,0)}return i})();mc=(function(){function i(e,t){this.c=kr(),this.l=0,this.v=1,Ln.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Ln.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ir(e,this.o,this.v&&Tc(this.o),t&&8,this.s);this.v&&(wc(n,this.o),this.v=0),t&&(pt(n,n.length-8,this.c.d()),pt(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Ln.prototype.flush.call(this)},i})(),ng=(function(){function i(e,t){Gr([Vr,Lf,function(){return[Nn,Ln,mc]}],this,rr.call(this,e,t),function(n){var r=new mc(n.data);onmessage=Nn(r)},8,1)}return i})();$a=(function(){function i(e,t){this.v=1,this.r=0,un.call(this,e,t)}return i.prototype.push=function(e,t){if(un.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?Ec(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}un.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Br(this.s.p)+9,this.s={i:0},this.o=new nt(0),this.push(new nt(0),t))},i})(),kf=(function(){function i(e,t){var n=this;Gr([zr,Nf,function(){return[Nn,un,$a]}],this,rr.call(this,e,t),function(r){var s=new $a(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Nn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();xc=(function(){function i(e,t){this.c=to(),this.v=1,Ln.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Ln.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ir(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Ac(n,this.o),this.v=0),t&&pt(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Ln.prototype.flush.call(this)},i})(),rg=(function(){function i(e,t){Gr([Vr,Df,function(){return[Nn,Ln,xc]}],this,rr.call(this,e,t),function(n){var r=new xc(n.data);onmessage=Nn(r)},10,1)}return i})();ja=(function(){function i(e,t){un.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(un.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Rc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&We(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),un.prototype.c.call(this,t)},i})(),Vf=(function(){function i(e,t){Gr([zr,Uf,function(){return[Nn,un,ja]}],this,rr.call(this,e,t),function(n){var r=new ja(n.data);onmessage=Nn(r)},11,0)}return i})();yc=(function(){function i(e,t){this.o=rr.call(this,e,t)||{},this.G=$a,this.I=un,this.Z=ja}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||We(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new nt(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),ag=(function(){function i(e,t){yc.call(this,e,t),this.queuedSize=0,this.G=kf,this.I=Cc,this.Z=Vf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,yc.prototype.push.call(this,e,t)},i})();Pc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=Gs(n,s[1]),s=s[0]),s instanceof nt?t[a]=[s,o]:(t[a+="/"]=[new nt(0),o],Pc(s,a,t,n))}},_f=typeof TextEncoder<"u"&&new TextEncoder,vc=typeof TextDecoder<"u"&&new TextDecoder,Gf=0;try{vc.decode(Oi,{stream:!0}),Gf=1}catch{}Wf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Pn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},cg=(function(){function i(e){this.ondata=e,Gf?this.t=new TextDecoder:this.p=Oi}return i.prototype.push=function(e,t){if(this.ondata||We(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&We(8),this.t=null);return}this.p||We(4);var n=new nt(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=Wf(n),s=r.s,a=r.r;t?(a.length&&We(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),ug=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||We(5),this.d&&We(4),this.ondata(ki(e),this.d=t||!1)},i})();Xf=function(i){return i==1?3:i<6?2:i==9?1:0},qf=function(i,e){return e+30+nn(i,e+26)+nn(i,e+28)},Yf=function(i,e,t){var n=nn(i,e+28),r=Lc(i.subarray(e+46,e+46+n),!(nn(i,e+8)&2048)),s=e+46+n,a=Dt(i,e+20),o=t&&a==4294967295?Zf(i,s):[a,Dt(i,e+24),Dt(i,e+42)],c=o[0],l=o[1],u=o[2];return[nn(i,e+10),c,l,r,s+nn(i,e+30)+nn(i,e+32),u]},Zf=function(i,e){for(;nn(i,e)!=1;e+=4+nn(i,e+2));return[hc(i,e+12),hc(i,e+4),hc(i,e+20)]},Bi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&We(9),e+=n+4}return e},Ur=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=Bi(l);pt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&We(10),pt(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(pt(i,e,t.crc),pt(i,e+4,s<0?-s-2:s),pt(i,e+8,t.size)),pt(i,e+12,c),pt(i,e+14,h),e+=16,a!=null&&(pt(i,e,u),pt(i,e+6,t.attrs),pt(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var g in l){var _=l[g],m=_.length;pt(i,e,+g),pt(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},Nc=function(i,e,t,n,r){pt(i,e,101010256),pt(i,e+8,t),pt(i,e+10,t),pt(i,e+12,n),pt(i,e+16,r)},zs=(function(){function i(e){this.filename=e,this.c=kr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||We(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),hg=(function(){function i(e,t){var n=this;t||(t={}),zs.call(this,e),this.d=new Ln(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Xf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){zs.prototype.push.call(this,e,t)},i})(),fg=(function(){function i(e,t){var n=this;t||(t={}),zs.call(this,e),this.d=new Of(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=Xf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){zs.prototype.push.call(this,e,t)},i})(),dg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||We(5),this.d&2)this.ondata(We(4+(this.d&1)*8,0,1),null,!1);else{var n=ki(e.filename),r=n.length,s=e.comment,a=s&&ki(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Bi(e.extra)+30;r>65535&&this.ondata(We(11,0,1),null,!1);var l=new nt(c);Ur(l,0,e,n,o,-1);var u=[l],h=function(){for(var m=0,p=u;m<p.length;m++){var M=p[m];t.ondata(null,M,!1)}u=[]},f=this.d;this.d=0;var d=this.u.length,g=Gs(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var m=t.u[d+1];m?m.r():t.d=1}f=1}}),_=0;e.ondata=function(m,p,M){if(m)t.ondata(m,p,M),t.terminate();else if(_+=p.length,u.push(p),M){var E=new nt(16);pt(E,0,134695760),pt(E,4,e.crc),pt(E,8,_),pt(E,12,e.size),u.push(E),g.c=_,g.b=c+_+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(We(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Bi(a.extra)+(a.o?a.o.length:0)}for(var o=new nt(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Ur(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Bi(a.extra)+(a.o?a.o.length:0),t+=a.b}Nc(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();Kf=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),gg=(function(){function i(){var e=this;this.i=new un(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),xg=(function(){function i(e,t){var n=this;t<32e4?this.i=new un(function(r,s){n.ondata(null,r,s)}):(this.i=new Cc(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Pn(e,0)),this.i.push(e,t)},i.compression=8,i})(),_g=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:Kf},this.p=Oi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||We(5),this.p||We(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new nt(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,h=this.c,f=h&&this.d,d=function(){var p,M=Dt(l,o);if(M==67324752){a=1,c=o,g.d=null,g.c=0;var E=nn(l,o+6),y=nn(l,o+8),b=E&2048,w=E&8,S=nn(l,o+26),x=nn(l,o+28);if(u>o+30+S+x){var T=[];g.k.unshift(T),a=2;var C=Dt(l,o+18),R=Dt(l,o+22),U=Lc(l.subarray(o+30,o+=30+S),!b);C==4294967295?(p=w?[-2]:Zf(l,o),C=p[0],R=p[1]):w&&(C=-1),o+=x,g.c=C;var D,I={name:U,compression:y,start:function(){if(I.ondata||We(5),!C)I.ondata(null,Oi,!0);else{var F=n.o[y];F||I.ondata(We(14,"unknown compression type "+y,1),null,!1),D=C<0?new F(U):new F(U,C,R),D.ondata=function(N,z,q){I.ondata(N,z,q)};for(var P=0,k=T;P<k.length;P++){var X=k[P];D.push(X,!1)}n.k[0]==T&&n.c?n.d=D:D.push(Oi,!0)}},terminate:function(){D&&D.terminate&&D.terminate()}};C>=0&&(I.size=C,I.originalSize=R),g.onfile(I)}return"break"}else if(h){if(M==134695760)return c=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(M==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var _=d();if(_==="break")break}if(this.p=Oi,h<0){var m=a?l.subarray(0,c-12-(h==-2&&8)-(Dt(l,c-16)==134695760&&4)):l.subarray(0,o);f?f.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&We(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),eo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function of(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0},a;function o(){let f=i.lightingState();for(let[d,g]of r)g.value=f[d];a&&(a.checked=f.shadows)}function c(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),o()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,d,g,_]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5]]){let m=document.createElement("label");m.textContent=d;let p=document.createElement("input");p.id="lighting_"+f,p.type="range",p.min=g,p.max=_,p.step=".01",p.style.width="100%",p.oninput=()=>c({[f]:Number(p.value)}),r.set(f,p),m.append(p),t.append(m)}for(let[f,d]of[["\u6062\u590D\u67D4\u5149",()=>c(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let g=document.createElement("button");g.textContent=f,g.onclick=d,t.append(g)}let l=document.createElement("label");l.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>c({shadows:a.checked}),l.append(a),t.append(l);let u=document.createElement("label");u.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");return h.id="lighting_resolution",h.add(new Option("4K \xB7 \u7CBE\u7EC6","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),u.append(h),t.append(u),document.body.append(t),o(),{toggle(){t.hidden=!t.hidden},close(){t.hidden=!0},dispose(){t.remove()}}}function lf(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var Km=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jn=(i,e)=>i>>>e|i<<32-e;function $m(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let p=t[m-15],M=t[m-2];t[m]=(jn(p,7)^jn(p,18)^p>>>3)+t[m-16]+(jn(M,17)^jn(M,19)^M>>>10)+t[m-7]}let[o,c,l,u,h,f,d,g]=e;for(let m=0;m<64;m++){let p=g+(jn(h,6)^jn(h,11)^jn(h,25))+(h&f^~h&d)+Km[m]+t[m]>>>0,M=(jn(o,2)^jn(o,13)^jn(o,22))+(o&c^o&l^c&l)>>>0;g=d,d=f,f=h,h=u+p>>>0,u=l,l=c,c=o,o=p+M>>>0}let _=[o,c,l,u,h,f,d,g];for(let m=0;m<8;m++)e[m]+=_[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function cc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):$m(i)}var Pr={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},cf=new TextDecoder("utf-8",{fatal:!0});function uf(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Pr.archive,n=Pr.total){if(![Pr.total,192*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Pr.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let f=i.length-22;f>=Math.max(0,i.length-65557);f--)if(r.getUint32(f,!0)===101010256&&f+22+r.getUint16(f+20,!0)===i.length){s=f;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>Pr.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=o,h=0;for(let f=0;f<a;f++){if(u+46>s||r.getUint32(u,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let d=r.getUint16(u+8,!0),g=r.getUint16(u+10,!0),_=r.getUint16(u+28,!0),m=r.getUint16(u+30,!0),p=r.getUint16(u+32,!0),M=r.getUint32(u+24,!0);if(u+46+_+m+p>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let E=cf.decode(i.subarray(u+46,u+46+_));if(!lf(E)||l.has(E)||!e.test(E))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(E),h+=M;let y=r.getUint32(u+38,!0)>>>16;if(d&1||![0,8].includes(g)||(y&61440)===40960||M>Pr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(E==="manifest.json"&&M>1024*1024)throw new Error("manifest \u8FC7\u5927");let b=r.getUint32(u+42,!0);if(b+30>o||r.getUint32(b,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let w=r.getUint16(b+26,!0),S=r.getUint16(b+28,!0),x=r.getUint32(u+20,!0);if(b+30+w+S+x>o||cf.decode(i.subarray(b+30,b+30+w))!==E)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u+=46+_+m+p}if(u!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h}}var uc=/^[a-zA-Z0-9_-]{1,96}$/,Jm=/^[a-f0-9]{64}$/,jm=new Set(["geometry","animation","texture","audio","config"]);function Ga(i){if(i?.schema!=="snowbreak-skin/1"||!uc.test(i.characterId)||!uc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!uc.test(n.role)||e.has(n.role)||!Jm.test(n.assetId)||!jm.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function hf({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:f,descriptor:d})=>Promise.resolve().then(()=>e(f,d))));for(let f of h)if(f.status==="rejected")try{t(f.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let h=Ga(u),f=++n;s?.abort();let d=new AbortController;s=d;let g=await Promise.allSettled(h.resources.map(M=>Promise.resolve().then(()=>i(M,{signal:d.signal})))),_=g.flatMap((M,E)=>M.status==="fulfilled"?[{asset:M.value,descriptor:h.resources[E]}]:[]),m=g.find(M=>M.status==="rejected");if(f!==n||a||m){if(await o(_),f===n&&(s=null),f!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let p=r;return r={manifest:h,resources:_},s=null,p&&await o(p.resources),f!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function ff(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=f=>i[f]|i[f+1]<<8|i[f+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function df(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var pf={geometry:20,animation:32,texture:16,audio:8,config:2};function mf(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(pf,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>pf[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await cc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=ff(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=df(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function jf(i){let e=uf(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728,201326592),{unzipSync:t}=await Promise.resolve().then(()=>(Jf(),$f)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(r.characterId!=="Enya"||!Array.isArray(r.variants)||r.variants.length!==4)throw new Error("Invalid Enya collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!["normal","nude"].includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:Ga(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!=="Enya"))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[Ga(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function c(u){let h=s?.find(g=>g.id===u);if(s&&!h)throw new Error("Variant unavailable");let f=h?.manifest||a[0],d=hf(mf(async g=>n["assets/"+g]));return await d.load(f),{runtime:d,manifest:f,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:g,mode:_,outfit:m})=>({id:g,mode:_,outfit:m}))||[],selectVariant:c}}let l;try{l=localStorage.getItem("enya-collection-selection")}catch{}return c(s?.some(u=>u.id===l)?l:r.defaultVariant)}var Bd=0,xu=1,kd=2;var Ma=1,il=2,Es=3,mn=0,ln=1,cn=2,li=0,Ts=1,_u=2,yu=3,vu=4,zd=5;var _r=100,Vd=101,Hd=102,Gd=103,Wd=104,Xd=200,qd=201,Yd=202,Zd=203,Mu=204,bu=205,Kd=206,$d=207,Jd=208,jd=209,Qd=210,ep=211,tp=212,np=213,ip=214,Po=0,Lo=1,No=2,as=3,Do=4,Uo=5,Fo=6,Oo=7,Su=0,rp=1,sp=2,Wn=0,wu=1,Eu=2,Tu=3,ba=4,Au=5,Ru=6,Cu=7,ru="attached",ap="detached",Iu=300,ji=301,yr=302,rl=303,sl=304,Sa=306,Yi=1e3,Un=1001,os=1002,Ut=1003,al=1004;var vr=1005;var Ft=1006,As=1007;var Xn=1008;var gn=1009,Pu=1010,Lu=1011,Rs=1012,ol=1013,qn=1014,Sn=1015,Yn=1016,ll=1017,cl=1018,Cs=1020,Nu=35902,Du=35899,Uu=1021,Fu=1022,wn=1023,ii=1026,Qi=1027,ul=1028,hl=1029,er=1030,fl=1031;var dl=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,yl=37492,vl=37496,Ml=37488,bl=37489,Ra=37490,Sl=37491,wl=37808,El=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Il=37814,Pl=37815,Ll=37816,Nl=37817,Dl=37818,Ul=37819,Fl=37820,Ol=37821,Bl=36492,kl=36494,zl=36495,Vl=36283,Hl=36284,Ca=36285,Gl=36286;var ur=2300,hr=2301,Ro=2302,su=2303,au=2400,ou=2401,lu=2402,op=2500;var Ou=0,Ia=1,Is=2,lp=3200;var Wl=0,cp=1,Zn="",It="srgb",on="srgb-linear",ta="linear",_t="srgb";var Co=7680;var up=519,hp=512,fp=513,dp=514,Xl=515,pp=516,mp=517,ql=518,gp=519,Bu=35044,ku=35048;var zu="300 es",Hn=2e3,ls=2001;function Mg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=cs("canvas");return i.style.display="block",i}var Qf={},us=null;function na(...i){let e="THREE."+i.shift();us?us("log",e,...i):console.log(e,...i)}function _p(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=_p(i);let e="THREE."+i.shift();if(us)us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=_p(i);let e="THREE."+i.shift();if(us)us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cr(...i){let e=i.join(" ");e in Qf||(Qf[e]=!0,Xe(...i))}function yp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var vp={[Po]:Lo,[No]:Fo,[Do]:Oo,[as]:Uo,[Lo]:Po,[Fo]:No,[Oo]:Do,[Uo]:as},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,Qs=Math.PI/180,fr=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Vu(i,e){return(i%e+e)%e}function Sg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wg(i,e,t){return i!==e?(t-i)/(e-i):0}function ea(i,e,t){return(1-t)*i+t*e}function Eg(i,e,t,n){return ea(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(Vu(i,e*2)-e)}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ig(i,e){return i+Math.random()*(e-i)}function Pg(i){return i*(.5-Math.random())}function Lg(i){i!==void 0&&(ed=i);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*Qs}function Dg(i){return i*fr}function Ug(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Og(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ve={DEG2RAD:Qs,RAD2DEG:fr,generateUUID:Gn,clamp:ut,euclideanModulo:Vu,mapLinear:Sg,inverseLerp:wg,lerp:ea,damp:Eg,pingpong:Tg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Ig,randFloatSpread:Pg,seededRandom:Lg,degToRad:Ng,radToDeg:Dg,isPowerOfTwo:Ug,ceilPowerOfTwo:Fg,floorPowerOfTwo:Og,setQuaternionFromProperEuler:Bg,normalize:yt,denormalize:Vn},qu=class qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qu.prototype.isVector2=!0;var Je=qu,De=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||c!==f||l!==d||u!==g){let m=c*f+l*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+_*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+_*o;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yu=class Yu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yu.prototype.isVector3=!0;var O=Yu,Dc=new O,td=new De,Zu=class Zu{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],E=r[4],y=r[7],b=r[2],w=r[5],S=r[8];return s[0]=a*_+o*M+c*b,s[3]=a*m+o*E+c*w,s[6]=a*p+o*y+c*S,s[1]=l*_+u*M+h*b,s[4]=l*m+u*E+h*w,s[7]=l*p+u*y+h*S,s[2]=f*_+d*M+g*b,s[5]=f*m+d*E+g*w,s[8]=f*p+d*y+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zu.prototype.isMatrix3=!0;var Qe=Zu,Uc=new Qe,nd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var ot=kg();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,Bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=cs("canvas")),Xr.width=e.width,Xr.height=e.height;let r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zg=0,hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fc(r[a].image)):s.push(Fc(r[a]))}else s=Fc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Vg=0,Oc=new O,qt=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,r=Un,s=Ft,a=Xn,o=wn,c=gn,l=i.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Gn(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Iu;qt.DEFAULT_ANISOTROPY=1;var Ku=class Ku{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(d+1)/2,b=(p+1)/2,w=(u+f)/4,S=(h+_)/4,x=(g+m)/4;return E>y&&E>b?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=S/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=x/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=S/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ku.prototype.isVector4=!0;var vt=Ku,ko=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new qt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new hs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nl=class nl{constructor(e,t,n,r,s,a,o,c,l,u,h,f,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,d,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(n,yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(n,yn)),Vi.normalize(),no.crossVectors(yn,Vi),r[0]=Vi.x,r[4]=no.x,r[8]=yn.x,r[1]=Vi.y,r[5]=no.y,r[9]=yn.y,r[2]=Vi.z,r[6]=no.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],E=n[7],y=n[11],b=n[15],w=r[0],S=r[4],x=r[8],T=r[12],C=r[1],R=r[5],U=r[9],D=r[13],I=r[2],F=r[6],P=r[10],k=r[14],X=r[3],N=r[7],z=r[11],q=r[15];return s[0]=a*w+o*C+c*I+l*X,s[4]=a*S+o*R+c*F+l*N,s[8]=a*x+o*U+c*P+l*z,s[12]=a*T+o*D+c*k+l*q,s[1]=u*w+h*C+f*I+d*X,s[5]=u*S+h*R+f*F+d*N,s[9]=u*x+h*U+f*P+d*z,s[13]=u*T+h*D+f*k+d*q,s[2]=g*w+_*C+m*I+p*X,s[6]=g*S+_*R+m*F+p*N,s[10]=g*x+_*U+m*P+p*z,s[14]=g*T+_*D+m*k+p*q,s[3]=M*w+E*C+y*I+b*X,s[7]=M*S+E*R+y*F+b*N,s[11]=M*x+E*U+y*P+b*z,s[15]=M*T+E*D+y*k+b*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*d-l*f,E=o*d-l*h,y=o*f-c*h,b=a*d-l*u,w=a*f-c*u,S=a*h-o*u;return t*(_*M-m*E+p*y)-n*(g*M-m*b+p*w)+r*(g*E-_*b+p*S)-s*(g*y-_*w+m*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-n*a,E=t*c-r*a,y=t*l-s*a,b=n*c-r*o,w=n*l-s*o,S=r*l-s*c,x=u*_-h*g,T=u*m-f*g,C=u*p-d*g,R=h*m-f*_,U=h*p-d*_,D=f*p-d*m,I=M*D-E*U+y*R+b*C-w*T+S*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(o*D-c*U+l*R)*F,e[1]=(r*U-n*D-s*R)*F,e[2]=(_*S-m*w+p*b)*F,e[3]=(f*w-h*S-d*b)*F,e[4]=(c*C-a*D-l*T)*F,e[5]=(t*D-r*C+s*T)*F,e[6]=(m*y-g*S-p*E)*F,e[7]=(u*S-f*y+d*E)*F,e[8]=(a*U-o*C+l*x)*F,e[9]=(n*C-t*U-s*x)*F,e[10]=(g*w-_*y+p*M)*F,e[11]=(h*y-u*w-d*M)*F,e[12]=(o*T-a*R-c*x)*F,e[13]=(t*R-n*T+r*x)*F,e[14]=(_*E-g*b-m*M)*F,e[15]=(u*b-h*E+f*M)*F,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,M=c*l,E=c*u,y=c*h,b=n.x,w=n.y,S=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+y)*b,r[2]=(g-E)*b,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+E)*S,r[9]=(m-M)*S,r[10]=(1-(f+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=qr.set(r[0],r[1],r[2]).length(),o=qr.set(r[4],r[5],r[6]).length(),c=qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Bn.copy(this);let l=1/a,u=1/o,h=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Hn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Hn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ls)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Hn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Hn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ls)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nl.prototype.isMatrix4=!0;var Be=nl,qr=new O,Bn=new Be,Hg=new O(0,0,0),Gg=new O(1,1,1),Vi=new O,no=new O,yn=new O,rd=new Be,sd=new De,wi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wg=0,ad=new O,Yr=new De,xi=new Be,io=new O,Xs=new O,Xg=new O,qg=new De,od=new O(1,0,0),ld=new O(0,1,0),cd=new O(0,0,1),ud={type:"added"},Yg={type:"removed"},Zr={type:"childadded",child:null},Bc={type:"childremoved",child:null},Ct=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new wi,n=new De,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new Qe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Xs,io,this.up):xi.lookAt(io,Xs,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(xi),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=Vu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=kc(a,s,e+1/3),this.g=kc(a,s,e),this.b=kc(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ot.workingToColorSpace(Jt.copy(this),e),Math.round(ut(Jt.r*255,0,255))*65536+Math.round(ut(Jt.g*255,0,255))*256+Math.round(ut(Jt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=It){ot.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,r=Jt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ro);let n=ea(Hi.h,ro.h,t),r=ea(Hi.s,ro.s,t),s=ea(Hi.l,ro.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ye;Ye.NAMES=Mp;var dr=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new O,_i=new O,zc=new O,yi=new O,Kr=new O,$r=new O,hd=new O,Vc=new O,Hc=new O,Gc=new O,Wc=new vt,Xc=new vt,qc=new vt,ti=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kn.subVectors(r,t),_i.subVectors(n,t),zc.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(_i),c=kn.dot(zc),l=_i.dot(_i),u=_i.dot(zc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wc,s.x),a.addScaledVector(Xc,s.y),a.addScaledVector(qc,s.z),a}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),_i.subVectors(e,t),kn.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),kn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Kr.subVectors(r,n),$r.subVectors(s,n),Vc.subVectors(e,n);let c=Kr.dot(Vc),l=$r.dot(Vc);if(c<=0&&l<=0)return t.copy(n);Hc.subVectors(e,r);let u=Kr.dot(Hc),h=$r.dot(Hc);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Kr,a);Gc.subVectors(e,s);let d=Kr.dot(Gc),g=$r.dot(Gc);if(g>=0&&d<=g)return t.copy(s);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector($r,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return hd.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(hd,o);let p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Kr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),ao.subVectors(this.max,qs),Jr.subVectors(e.a,qs),jr.subVectors(e.b,qs),Qr.subVectors(e.c,qs),Gi.subVectors(jr,Jr),Wi.subVectors(Qr,jr),sr.subVectors(Jr,Qr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-sr.z,sr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,sr.z,0,-sr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-sr.y,sr.x,0];return!Yc(t,Jr,jr,Qr,ao)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Jr,jr,Qr,ao))?!1:(oo.crossVectors(Gi,Wi),t=[oo.x,oo.y,oo.z],Yc(t,Jr,jr,Qr,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,so=new Zt,Jr=new O,jr=new O,Qr=new O,Gi=new O,Wi=new O,sr=new O,qs=new O,ao=new O,oo=new O,ar=new O;function Yc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ar.fromArray(i,s);let o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var zt=new O,lo=new Je,Kg=0,Pt=class extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var an=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$g=new Zt,Ys=new O,Zc=new O,fn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$g.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ys,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Zc)),this.expandByPoint(Ys.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jg=0,Dn=new Be,Kc=new Ct,es=new O,vn=new Zt,Zs=new Zt,Xt=new O,Yt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?sa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,Zs.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,Zs.max),vn.expandByPoint(Xt)):(vn.expandByPoint(Zs.min),vn.expandByPoint(Zs.max))}vn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Xt.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(e,l),Xt.add(es)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new O,c[x]=new O;let l=new O,u=new O,h=new O,f=new Je,d=new Je,g=new Je,_=new O,m=new O;function p(x,T,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(s,x),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[x].add(_),o[T].add(_),o[C].add(_),c[x].add(m),c[T].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let C=M[x],R=C.start,U=C.count;for(let D=R,I=R+U;D<I;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let E=new O,y=new O,b=new O,w=new O;function S(x){b.fromBufferAttribute(r,x),w.copy(b);let T=o[x];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(w,T);let R=y.dot(c[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,T=M.length;x<T;++x){let C=M[x],R=C.start,U=C.count;for(let D=R,I=R+U;D<I;D+=3)S(e.getX(D+0)),S(e.getX(D+1)),S(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Pt(f,u,h)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},sn=new O,ms=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$c=new O,jg=new O,Qg=new Qe,Mn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$c.subVectors(n,t).cross(jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta($c),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qg.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},e0=0,dn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Ts,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=bu,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Mi=new O,Jc=new O,co=new O,uo=new O,Zi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jc.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(Jc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(co),o=uo.dot(this.direction),c=-uo.dot(co),l=uo.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Jc).addScaledVector(co,f),d}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,y=Math.abs(c),b=Math.abs(l),w=Math.abs(u),S,x,T,C,R,U,D,I,F,P,k,X;if(y>=b&&y>=w?(T=c,U=h,F=g,X=p,c>=0?(S=l,x=u,C=f,R=d,D=_,I=m,P=M,k=E):(S=u,x=l,C=d,R=f,D=m,I=_,P=E,k=M)):b>=w?(T=l,U=f,F=_,X=M,l>=0?(S=u,x=c,C=d,R=h,D=m,I=g,P=E,k=p):(S=c,x=u,C=h,R=d,D=g,I=m,P=p,k=E)):(T=u,U=d,F=m,X=E,u>=0?(S=c,x=l,C=h,R=f,D=g,I=_,P=p,k=M):(S=l,x=c,C=f,R=h,D=_,I=g,P=M,k=p)),T===0)return null;let N=S/T,z=x/T,q=1/T,de=C-N*U,oe=R-z*U,K=D-N*F,ne=I-z*F,ue=P-N*X,B=k-z*X,Y=ue*ne-B*K,fe=de*B-oe*ue,xe=K*oe-ne*de;if(r){if(Y<0||fe<0||xe<0)return null}else if((Y<0||fe<0||xe<0)&&(Y>0||fe>0||xe>0))return null;let ie=Y+fe+xe;if(ie===0)return null;let le=q*(Y*U+fe*F+xe*X);return(ie>0?le<0:le>0)?null:this.at(le/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fd=new Be,or=new Zi,ho=new fn,dd=new O,fo=new O,po=new O,mo=new O,jc=new O,go=new O,pd=new O,xo=new O,Ot=class extends Ct{constructor(e=new Yt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){go.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(jc.fromBufferAttribute(h,e),a?go.addScaledVector(jc,u):go.addScaledVector(jc.sub(t),u))}t.add(go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(ho.containsPoint(or.origin)===!1&&(or.intersectSphere(ho,dd)===null||or.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(fd.copy(s).invert(),or.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=E;y<b;y+=3){let w=o.getX(y),S=o.getX(y+1),x=o.getX(y+2);r=_o(this,p,e,n,l,u,h,w,S,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);r=_o(this,a,e,n,l,u,h,M,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=E;y<b;y+=3){let w=y,S=y+1,x=y+2;r=_o(this,p,e,n,l,u,h,w,S,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,E=m+1,y=m+2;r=_o(this,a,e,n,l,u,h,M,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function t0(i,e,t,n,r,s,a,o){let c;if(e.side===ln?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===mn,o),c===null)return null;xo.copy(o),xo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:i}}function _o(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,fo),i.getVertexPosition(c,po),i.getVertexPosition(l,mo);let u=t0(i,e,t,n,fo,po,mo,pd);if(u){let h=new O;ti.getBarycoord(pd,fo,po,mo,h),r&&(u.uv=ti.getInterpolatedAttribute(r,o,c,l,h,new Je)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,c,l,h,new Je)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new O,materialIndex:0};ti.getNormal(fo,po,mo,f.normal),u.face=f,u.barycoord=h}return u}var Ks=new vt,md=new vt,gd=new vt,n0=new vt,xd=new Be,yo=new O,Qc=new fn,_d=new Be,eu=new Zi,aa=class extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yo),this.boundingSphere.expandByPoint(yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qc.copy(this.boundingSphere),Qc.applyMatrix4(r),e.ray.intersectsSphere(Qc)!==!1&&(_d.copy(r).invert(),eu.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;md.fromBufferAttribute(r.attributes.skinIndex,e),gd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ks.copy(t),t.set(0,0,0,0)):(Ks.set(...t,1),t.set(0,0,0)),Ks.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=gd.getComponent(s);if(a!==0){let o=md.getComponent(s);xd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(n0.copy(Ks).applyMatrix4(xd),a)}}return t.isVector4&&(t.w=Ks.w),t.applyMatrix4(this.bindMatrixInverse)}},gs=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},xs=class extends qt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ut,u=Ut,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yd=new Be,i0=new Be,oa=class i{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:i0;yd.multiplyMatrices(o,t[s]),yd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xs(t,e,e,wn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Xe("Skeleton: No bone found with UUID:",s),a=new gs),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ei=class extends Pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Be,vd=new Be,vo=[],Md=new Zt,r0=new Be,$s=new Ot,Js=new fn,la=class extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,r0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Md.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(Md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Js.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ts),vd.multiplyMatrices(n,ts),$s.matrixWorld=vd,$s.raycast(e,vo);for(let a=0,o=vo.length;a<o;a++){let c=vo[a];c.instanceId=s,c.object=this,t.push(c)}vo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(r*this.count),r,this.count,ul,Sn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lr=new fn,s0=new Je(.5,.5),Mo=new O,_s=class{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],E=s[13],y=s[14],b=s[15];if(r[0].setComponents(l-a,d-u,p-g,b-M).normalize(),r[1].setComponents(l+a,d+u,p+g,b+M).normalize(),r[2].setComponents(l+o,d+h,p+_,b+E).normalize(),r[3].setComponents(l-o,d-h,p-_,b-E).normalize(),n)r[4].setComponents(c,f,m,y).normalize(),r[5].setComponents(l-c,d-f,p-m,b-y).normalize();else if(r[4].setComponents(l-c,d-f,p-m,b-y).normalize(),t===Hn)r[5].setComponents(l+c,d+f,p+m,b+y).normalize();else if(t===ls)r[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=s0.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Mo.x=r.normal.x>0?e.max.x:e.min.x,Mo.y=r.normal.y>0?e.max.y:e.min.y,Mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ys=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vo=new O,Ho=new O,bd=new Be,js=new Zi,bo=new fn,tu=new O,Sd=new O,pr=class extends Ct{constructor(e=new Yt,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Vo.fromBufferAttribute(t,r-1),Ho.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Vo.distanceTo(Ho);e.setAttribute("lineDistance",new an(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),bo.radius+=s,e.ray.intersectsSphere(bo)===!1)return;bd.copy(r).invert(),js.copy(e.ray).applyMatrix4(bd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){let p=u.getX(_),M=u.getX(_+1),E=So(this,e,js,c,p,M,_);E&&t.push(E)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),p=So(this,e,js,c,_,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){let p=So(this,e,js,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=So(this,e,js,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function So(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Vo.fromBufferAttribute(o,r),Ho.fromBufferAttribute(o,s),t.distanceSqToSegment(Vo,Ho,tu,Sd)>n)return;tu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tu);if(!(l<e.near||l>e.far))return{distance:l,point:Sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wd=new O,Ed=new O,ca=class extends pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)wd.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wd.distanceTo(Ed);e.setAttribute("lineDistance",new an(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vs=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new Be,cu=new Zi,wo=new fn,Eo=new O,ha=class extends Ct{constructor(e=new Yt,t=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Td.copy(r).invert(),cu.copy(e.ray).applyMatrix4(Td);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let m=l.getX(g);Eo.fromBufferAttribute(h,m),Ad(Eo,m,c,r,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Eo.fromBufferAttribute(h,g),Ad(Eo,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ad(i,e,t,n,r,s,a){let o=cu.distanceSqToPoint(i);if(o<t){let c=new O;cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fa=class extends qt{constructor(e=[],t=ji,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ki=class extends qt{constructor(e,t,n=qn,r,s,a,o=Ut,c=Ut,l,u=ii,h=1){if(u!==ii&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Go=class extends Ki{constructor(e,t=qn,n=ji,r,s,a=Ut,o=Ut,c,l=ii){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},da=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ms=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(_,m,p,M,E,y,b,w,S,x,T){let C=y/S,R=b/x,U=y/2,D=b/2,I=w/2,F=S+1,P=x+1,k=0,X=0,N=new O;for(let z=0;z<P;z++){let q=z*R-D;for(let de=0;de<F;de++){let oe=de*C-U;N[_]=oe*M,N[m]=q*E,N[p]=I,l.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[p]=w>0?1:-1,u.push(N.x,N.y,N.z),h.push(de/S),h.push(1-z/x),k+=1}}for(let z=0;z<x;z++)for(let q=0;q<S;q++){let de=f+q+F*z,oe=f+q+F*(z+1),K=f+(q+1)+F*(z+1),ne=f+(q+1)+F*z;c.push(de,oe,ne),c.push(oe,K,ne),X+=6}o.addGroup(d,X,T),d+=X,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mr=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*f-a;for(let E=0;E<l;E++){let y=E*h-s;g.push(y,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let E=M+l*p,y=M+l*(p+1),b=M+1+l*(p+1),w=M+1+l*p;d.push(E,y,w),d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Rd(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Rd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Mr(i[t]);for(let r in n)e[r]=n[r]}return e}function Rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function a0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var bp={clone:Mr,merge:en},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wo=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gr=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qt=class extends gr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xo=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qo=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Io(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function c0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Cd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function u0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var si=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends si{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:s=e,o=2*t-n;break;case lu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:a=e,c=2*n-t;break;case lu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let b=0;b!==o;++b)s[b]=p*a[u+b]+M*a[l+b]+E*a[c+b]+y*a[h+b];return s}},Zo=class extends si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}},Ko=class extends si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$o=class extends si{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(r-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*_+a[c+m]*g;return s}let f=o*2,d=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=d*f+g*2,M=h[p],E=h[p+1],y=e*f+g*2,b=u[y],w=u[y+1],S=f0(n,t,M,b,r);s[g]=Sp(S,_,E,w,m)}return s}};function Sp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function h0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function f0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Sp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=h0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var pn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Io(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break;case su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Ro;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Io(this.settings)&&(Id(this.settings.inTangents,e),Id(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&bg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ro,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Io(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Id(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=hr;var Ti=class extends pn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=ur;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};pa.prototype.ValueTypeName="color";var Ai=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Ai.prototype.ValueTypeName="number";var Jo=class extends si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)De.slerpFlat(s,0,a,l-o,a,l,c);return s}},ai=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends pn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ur;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};Ci.prototype.ValueTypeName="vector";var bs=class{constructor(e="",t=-1,n=[],r=op){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(pn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=c0(c);c=Cd(c,1,u),l=Cd(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ai(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function d0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return pa;case"quaternion":return ai;case"bool":case"boolean":return Ti;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function p0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=d0(i.type);if(i.times===void 0){let n=[],r=[];u0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Io(i.settings)&&(t.settings={inTangents:qi(i.settings.inTangents,Float32Array),outTangents:qi(i.settings.outTangents,Float32Array)}),t}var ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var jo=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wp=new jo,oi=class{constructor(e){this.manager=e!==void 0?e:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},uu=class extends Error{constructor(e,t){super(e),this.response=t}},Ss=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ni.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=bi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,S=u.length;w<S;w++){let x=u[w];x.onProgress&&x.onProgress(b)}p.enqueue(y),M()}},E=>{p.error(E)})}}});return new Response(m)}else throw new uu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ni.add(`file:${e}`,l);let u=bi[e];delete bi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=bi[e];if(u===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ns=new WeakMap,Qo=class extends oi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ns.get(a);h===void 0&&(h=[],ns.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=cs("img");function c(){u(),t&&t(this);let h=ns.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}ns.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),ni.remove(`image:${e}`);let f=ns.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}ns.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var $i=class extends oi{constructor(e){super(e)}load(e,t,n,r){let s=new qt,a=new Qo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},xr=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ma=class extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nu=new Be,Ld=new O,Nd=new O,ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},To=new O,Ao=new De,ei=new O,ga=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,Ao,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Ao,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,Ao,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Ao,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new O,Dd=new Je,Ud=new Je,Vt=class extends ga{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ud),t.subVectors(Ud,Dd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hu=class extends ws{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},xa=class extends xr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},fu=class extends ws{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},_a=class extends xr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ji=class extends ga{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},du=class extends ws{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var iu=new WeakMap,ya=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ni.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{iu.has(a)===!0?(r&&r(iu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),iu.set(c,l),ni.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var is=-90,rs=1,el=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(is,rs,e,t);r.layers=this.layers,this.add(r);let s=new Vt(is,rs,e,t);s.layers=this.layers,this.add(s);let a=new Vt(is,rs,e,t);a.layers=this.layers,this.add(a);let o=new Vt(is,rs,e,t);o.layers=this.layers,this.add(o);let c=new Vt(is,rs,e,t);c.layers=this.layers,this.add(c);let l=new Vt(is,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},tl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Gu="\\[\\]\\.:\\/",m0=new RegExp("["+Gu+"]","g"),Wu="[^"+Gu+"]",g0="[^"+Gu.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",Wu),_0=/(WCOD+)?/.source.replace("WCOD",g0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),M0=new RegExp("^"+x0+_0+y0+v0+"$"),b0=["material","materials","bones","map"],pu=class{constructor(e,t,n){let r=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);b0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=pu;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _b=new Float32Array(1);var Fd=new Be,va=class{constructor(e,t,n=0,r=1/0){this.ray=new Zi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fd),this}intersectObject(e,t=!0,n=[]){return mu(e,this,n,t),n.sort(Od),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)mu(e[r],this,n,t);return n.sort(Od),n}};function Od(i,e){return i.distance-e.distance}function mu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)mu(s[a],e,t,!0)}}var $u=class $u{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};$u.prototype.isMatrix2=!0;var gu=$u;function Xu(i,e,t,n){let r=S0(n);switch(t){case Uu:return i*e;case ul:return i*e/r.components*r.byteLength;case hl:return i*e/r.components*r.byteLength;case er:return i*e*2/r.components*r.byteLength;case fl:return i*e*2/r.components*r.byteLength;case Fu:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case dl:return i*e*4/r.components*r.byteLength;case wa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:case xl:return Math.max(i,16)*Math.max(e,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(e,8)/2;case _l:case yl:case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:case Ra:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case kl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S0(i){switch(i){case gn:case Pu:return{byteLength:1,components:1};case Rs:case Lu:case Yn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case qn:case ol:case Sn:return{byteLength:4,components:1};case Nu:case Du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function A0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q0=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,U_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,$_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:I0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:N0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:K0,color_vertex:$0,common:J0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:rx,colorspace_pars_fragment:sx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:vx,envmap_vertex:ux,fog_vertex:hx,fog_pars_vertex:fx,fog_fragment:dx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:_x,lights_pars_begin:yx,lights_toon_fragment:Mx,lights_toon_pars_fragment:bx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,lightprobes_pars_fragment:Ix,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Dx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:Bx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Vx,morphcolor_vertex:Hx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:Kx,normal_vertex:$x,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:r_,project_vertex:s_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:h_,shadowmap_vertex:f_,shadowmask_pars_fragment:d_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:x_,specularmap_fragment:__,specularmap_pars_fragment:y_,tonemapping_fragment:v_,tonemapping_pars_fragment:M_,transmission_fragment:b_,transmission_pars_fragment:S_,uv_pars_fragment:w_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:I_,backgroundCube_frag:P_,cube_vert:L_,cube_frag:N_,depth_vert:D_,depth_frag:U_,distance_vert:F_,distance_frag:O_,equirect_vert:B_,equirect_frag:k_,linedashed_vert:z_,linedashed_frag:V_,meshbasic_vert:H_,meshbasic_frag:G_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:K_,meshphong_vert:$_,meshphong_frag:J_,meshphysical_vert:j_,meshphysical_frag:Q_,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:ry,shadow_frag:sy,sprite_vert:ay,sprite_frag:oy},Te={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ui={basic:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:en([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:en([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:en([Te.points,Te.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:en([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:en([Te.common,Te.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:en([Te.sprite,Te.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:en([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:en([Te.lights,Te.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ui.physical={uniforms:en([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Yl={r:0,b:0,g:0},ly=new Be,Yp=new Qe;Yp.set(-1,0,0,0,1,0,0,0,1);function cy(i,e,t,n,r,s){let a=new Ye(0),o=r===!0?0:1,c,l,u=null,h=0,f=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(M){let E=!1,y=d(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let y=d(E);y&&(y.isCubeTexture||y.mapping===Sa)?(l===void 0&&(l=new Ot(new Ms(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Mr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yp),l.material.toneMapped=ot.getTransfer(y.colorSpace)!==_t,(u!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ot(new mr(2,2),new bn({name:"BackgroundMaterial",uniforms:Mr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(Yl,Hu(i)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function uy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(R,U,D,I,F){let P=!1,k=h(R,I,D,U);s!==k&&(s=k,l(s.object)),P=d(R,I,D,F),P&&g(R,I,D,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,y(R,U,D,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,U,D,I){let F=I.wireframe===!0,P=n[U.id];P===void 0&&(P={},n[U.id]=P);let k=R.isInstancedMesh===!0?R.id:0,X=P[k];X===void 0&&(X={},P[k]=X);let N=X[D.id];N===void 0&&(N={},X[D.id]=N);let z=N[F];return z===void 0&&(z=f(c()),N[F]=z),z}function f(R){let U=[],D=[],I=[];for(let F=0;F<t;F++)U[F]=0,D[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:I,object:R,attributes:{},index:null}}function d(R,U,D,I){let F=s.attributes,P=U.attributes,k=0,X=D.getAttributes();for(let N in X)if(X[N].location>=0){let q=F[N],de=P[N];if(de===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),q===void 0||q.attribute!==de||de&&q.data!==de.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(R,U,D,I){let F={},P=U.attributes,k=0,X=D.getAttributes();for(let N in X)if(X[N].location>=0){let q=P[N];q===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));let de={};de.attribute=q,q&&q.data&&(de.data=q.data),F[N]=de,k++}s.attributes=F,s.attributesNum=k,s.index=I}function _(){let R=s.newAttributes;for(let U=0,D=R.length;U<D;U++)R[U]=0}function m(R){p(R,0)}function p(R,U){let D=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;D[R]=1,I[R]===0&&(i.enableVertexAttribArray(R),I[R]=1),F[R]!==U&&(i.vertexAttribDivisor(R,U),F[R]=U)}function M(){let R=s.newAttributes,U=s.enabledAttributes;for(let D=0,I=U.length;D<I;D++)U[D]!==R[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function E(R,U,D,I,F,P,k){k===!0?i.vertexAttribIPointer(R,U,D,F,P):i.vertexAttribPointer(R,U,D,I,F,P)}function y(R,U,D,I){_();let F=I.attributes,P=D.getAttributes(),k=U.defaultAttributeValues;for(let X in P){let N=P[X];if(N.location>=0){let z=F[X];if(z===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let q=z.normalized,de=z.itemSize,oe=e.get(z);if(oe===void 0)continue;let K=oe.buffer,ne=oe.type,ue=oe.bytesPerElement,B=ne===i.INT||ne===i.UNSIGNED_INT||z.gpuType===ol;if(z.isInterleavedBufferAttribute){let Y=z.data,fe=Y.stride,xe=z.offset;if(Y.isInstancedInterleavedBuffer){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,Y.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ie=0;ie<N.locationSize;ie++)E(N.location+ie,de/N.locationSize,ne,q,fe*ue,(xe+de/N.locationSize*ie)*ue,B)}else{if(z.isInstancedBufferAttribute){for(let Y=0;Y<N.locationSize;Y++)p(N.location+Y,z.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Y=0;Y<N.locationSize;Y++)m(N.location+Y);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Y=0;Y<N.locationSize;Y++)E(N.location+Y,de/N.locationSize,ne,q,de*ue,de/N.locationSize*Y*ue,B)}}else if(k!==void 0){let q=k[X];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(N.location,q);break;case 3:i.vertexAttrib3fv(N.location,q);break;case 4:i.vertexAttrib4fv(N.location,q);break;default:i.vertexAttrib1fv(N.location,q)}}}}M()}function b(){T();for(let R in n){let U=n[R];for(let D in U){let I=U[D];for(let F in I){let P=I[F];for(let k in P)u(P[k].object),delete P[k];delete I[F]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let D in U){let I=U[D];for(let F in I){let P=I[F];for(let k in P)u(P[k].object),delete P[k];delete I[F]}}delete n[R.id]}function S(R){for(let U in n){let D=n[U];for(let I in D){let F=D[I];if(F[R.id]===void 0)continue;let P=F[R.id];for(let k in P)u(P[k].object),delete P[k];delete F[R.id]}}}function x(R){for(let U in n){let D=n[U],I=R.isInstancedMesh===!0?R.id:0,F=D[I];if(F!==void 0){for(let P in F){let k=F[P];for(let X in k)u(k[X].object),delete k[X];delete F[P]}delete D[I],Object.keys(D).length===0&&delete n[U]}}}function T(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function hy(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==wn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let x=S===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==gn&&S!==Sn&&!x&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Xe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:w}}function dy(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:n,E=M*4,y=p.clippingState||null;c.value=y,y=u(g,f,E,d);for(let b=0;b!==E;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ls=4,py=6,my=20,gy=256,Pa=new Ji,Ep=new Ye,Ju=null,ju=0,Qu=0,eh=!1,xy=new O,br=new O,Ds=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=xy}=s;Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ju,Qu),this._renderer.xr.enabled=eh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Yn,format:wn,colorSpace:on,depthBuffer:!1},r=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_y(s)),this._blurMaterial=vy(s,e,t),this._ggxMaterial=yy(s,e,t)}return r}_compileMaterial(e){let t=new Ot(new Yt,e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,r,s){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ep),h.toneMapping=Wn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Ms,new jt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ep),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));let b=this._cubeSize;Ps(r,y*b,E>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(_,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ji||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ls?n-g+Ls:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Ps(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,Pa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ps(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,Pa)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Ls?r-this._lodMax+Ls:0),f=4*(this._cubeSize-u);Ps(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,Pa)}};function _y(i){let e=[],t=[],n=i,r=i-Ls+1+py;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,g=new Float32Array(d*f*h),_=new Float32Array(d*f*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,E=p>2?0:-1,y=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(y,d*f*p);for(let b=0;b<f;b++){let w=u[b*2]*2-1,S=u[b*2+1]*2-1;p===0?br.set(1,S,w):p===1?br.set(-w,1,-S):p===2?br.set(-w,S,1):p===3?br.set(-1,S,-w):p===4?br.set(-w,-1,S):br.set(w,S,-1),br.toArray(_,(p*f+b)*d)}}let m=new Yt;m.setAttribute("position",new Pt(g,d)),m.setAttribute("outputDirection",new Pt(_,d)),t.push(new Ot(m,null)),n>Ls&&n--}return{lodMeshes:t,sizeLods:e}}function Tp(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yy(i,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function vy(i,e,t){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ap(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Rp(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ms(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:li});s.uniforms.tEquirect.value=t;let a=new Ot(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Ft),new el(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function My(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===rl||d===sl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Kl(g.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===rl||d===sl,_=d===ji||d===yr;if(g||_){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ds(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new Ds(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===rl?f.mapping=ji:d===sl&&(f.mapping=yr),f}function c(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function by(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&cr("WebGLRenderer: "+n+" extension not supported."),r}}}function Sy(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(d!==null){let M=d.array;_=d.version;for(let E=0,y=M.length;E<y;E+=3){let b=M[E+0],w=M[E+1],S=M[E+2];f.push(b,w,w,S,S,b)}}else{let M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let b=E+0,w=E+1,S=E+2;f.push(b,w,w,S,S,b)}}let m=new(g.count>=65535?sa:ra)(f,1);m.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function wy(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ey(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ty(i,e,t){let n=new WeakMap,r=new vt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*h),S=new ia(w,y,b,h);S.type=Sn,S.needsUpdate=!0;let x=E*4;for(let C=0;C<h;C++){let R=m[C],U=p[C],D=M[C],I=y*b*4*C;for(let F=0;F<R.count;F++){let P=F*x;d===!0&&(r.fromBufferAttribute(R,F),w[I+P+0]=r.x,w[I+P+1]=r.y,w[I+P+2]=r.z,w[I+P+3]=0),g===!0&&(r.fromBufferAttribute(U,F),w[I+P+4]=r.x,w[I+P+5]=r.y,w[I+P+6]=r.z,w[I+P+7]=0),_===!0&&(r.fromBufferAttribute(D,F),w[I+P+8]=r.x,w[I+P+9]=r.y,w[I+P+10]=r.z,w[I+P+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new Je(y,b)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ay(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ry={[wu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Tu]:"CINEON_TONE_MAPPING",[ba]:"ACES_FILMIC_TONE_MAPPING",[Ru]:"AGX_TONE_MAPPING",[Cu]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function Cy(i,e,t,n,r,s){let a=new hn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Yt;l.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new an([0,2,0,0,2,0],2));let u=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ot(l,u),f=new Ji(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,M=[],E=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),c!==null&&c.setSize(y,b);for(let w=0;w<M.length;w++){let S=M[w];S.setSize&&S.setSize(y,b)}},this.setEffects=function(y){M=y,E=M.length>0&&M[0].isRenderPass===!0;let b=a.width,w=a.height;M.length>0&&o===null&&(o=new hn(b,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(b,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<M.length;S++){let x=M[S];x.setSize&&x.setSize(b,w)}},this.begin=function(y,b){if(_||y.toneMapping===Wn&&M.length===0)return!1;if(p=b,b!==null){let w=b.width,S=b.height;(a.width!==w||a.height!==S)&&this.setSize(w,S)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Wn,!0},this.hasRenderPass=function(){return E},this.end=function(y,b){y.toneMapping=m,_=!0;let w=a,S=o;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(y,S,w,b),T.needsSwap!==!1&&(w=S,S=S===o?c:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,u.defines={},ot.getTransfer(d)===_t&&(u.defines.SRGB_TRANSFER="");let x=Ry[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(h,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Zp=new qt,ih=new Ki(1,1),Kp=new ia,$p=new zo,Jp=new fa,Cp=[],Ip=[],Pp=new Float32Array(16),Lp=new Float32Array(9),Np=new Float32Array(4);function Us(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Cp[r];if(s===void 0&&(s=new Float32Array(r),Cp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jl(i,e){let t=Ip[e];t===void 0&&(t=new Int32Array(e),Ip[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),Wt(t,n)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),Wt(t,n)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Pp.set(n),i.uniformMatrix4fv(this.addr,!1,Pp),Wt(t,n)}}function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Xy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=t.isReversedDepthBuffer()?ql:Xl,s=ih):s=Zp,t.setTexture2D(e||s,r)}function qy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$p,r)}function Yy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jp,r)}function Zy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kp,r)}function Ky(i){switch(i){case 5126:return Iy;case 35664:return Py;case 35665:return Ly;case 35666:return Ny;case 35674:return Dy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return zy;case 5125:return Vy;case 36294:return Hy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Zy}}function $y(i,e){i.uniform1fv(this.addr,e)}function Jy(i,e){let t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function jy(i,e){let t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function Qy(i,e){let t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function ev(i,e){let t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tv(i,e){let t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nv(i,e){let t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iv(i,e){i.uniform1iv(this.addr,e)}function rv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function av(i,e){i.uniform4iv(this.addr,e)}function ov(i,e){i.uniform1uiv(this.addr,e)}function lv(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function uv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){let n=this.cache,r=e.length,s=jl(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ih:a=Zp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function fv(i,e,t){let n=this.cache,r=e.length,s=jl(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$p,s[a])}function dv(i,e,t){let n=this.cache,r=e.length,s=jl(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jp,s[a])}function pv(i,e,t){let n=this.cache,r=e.length,s=jl(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kp,s[a])}function mv(i){switch(i){case 5126:return $y;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}var rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}},sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function Dp(i,e){i.seq.push(e),i.map[e.id]=e}function gv(i,e,t){let n=i.name,r=n.length;for(th.lastIndex=0;;){let s=th.exec(n),a=th.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Dp(t,l===void 0?new rh(o,i,e):new sh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ah(o),Dp(t,h)),t=h}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xv=37297,_v=0;function yv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Fp=new Qe;function vv(i){ot._getMatrix(Fp,ot.workingColorSpace,i);let e=`mat3( ${Fp.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Op(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+yv(i.getShaderSource(e),o)}else return s}function Mv(i,e){let t=vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bv={[wu]:"Linear",[Eu]:"Reinhard",[Tu]:"Cineon",[ba]:"ACESFilmic",[Ru]:"AgX",[Cu]:"Neutral",[Au]:"Custom"};function Sv(i,e){let t=bv[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zl=new O;function wv(){ot.getLuminanceCoefficients(Zl);let i=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function Tv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Na(i){return i!==""}function Bp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(Rv,Iv)}var Cv=new Map;function Iv(i,e){let t=rt[e];if(t===void 0){let n=Cv.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return oh(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(i){return i.replace(Pv,Lv)}function Lv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Nv={[Ma]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Dv(i){return Nv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uv={[ji]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function Fv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ov={[yr]:"ENVMAP_MODE_REFRACTION"};function Bv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ov[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kv={[Su]:"ENVMAP_BLENDING_MULTIPLY",[rp]:"ENVMAP_BLENDING_MIX",[sp]:"ENVMAP_BLENDING_ADD"};function zv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kv[i.combine]||"ENVMAP_BLENDING_NONE"}function Vv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Dv(t),l=Fv(t),u=Bv(t),h=zv(t),f=Vv(t),d=Ev(t),g=Tv(s),_=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(m=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=oh(a),a=Bp(a,t),a=kp(a,t),o=oh(o),o=Bp(o,t),o=kp(o,t),a=zp(a),o=zp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+m+a,y=M+p+o,b=Up(r,r.VERTEX_SHADER,E),w=Up(r,r.FRAGMENT_SHADER,y);r.attachShader(_,b),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function S(R){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(b)||"",I=r.getShaderInfoLog(w)||"",F=U.trim(),P=D.trim(),k=I.trim(),X=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,w);else{let z=Op(r,b,"vertex"),q=Op(r,w,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+z+`
`+q)}else F!==""?Xe("WebGLProgram: Program Info Log:",F):(P===""||k==="")&&(N=!1);N&&(R.diagnostics={runnable:X,programLog:F,vertexShader:{log:P,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(b),r.deleteShader(w),x=new Ns(r,_),T=Av(r,_)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,xv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var Gv=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ch(e),t.set(e,n)),n}},ch=class{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}};function Wv(i){return i===er||i===Ra||i===Ca}function Xv(i,e,t,n,r,s){let a=new fs,o=new lh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,R,U,D){let I=R.fog,F=U.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||P,k),N=X&&X.mapping===Sa?X.image.height:null,z=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=q!==void 0?q.length:0,oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let K,ne,ue,B;if(z){let Pe=ui[z];K=Pe.vertexShader,ne=Pe.fragmentShader}else{K=x.vertexShader,ne=x.fragmentShader;let Pe=o.getVertexShaderStage(x),ke=o.getFragmentShaderStage(x);o.update(x,Pe,ke),ue=Pe.id,B=ke.id}let Y=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),xe=U.isInstancedMesh===!0,ie=U.isBatchedMesh===!0,le=!!x.map,ge=!!x.matcap,ce=!!X,ye=!!x.aoMap,ve=!!x.lightMap,pe=!!x.bumpMap&&x.wireframe===!1,Ge=!!x.normalMap,Ke=!!x.displacementMap,ht=!!x.emissiveMap,je=!!x.metalnessMap,dt=!!x.roughnessMap,V=x.anisotropy>0,et=x.clearcoat>0,$e=x.dispersion>0,L=x.retroreflectivity>0,v=x.iridescence>0,H=x.sheen>0,$=x.transmission>0,te=V&&!!x.anisotropyMap,me=et&&!!x.clearcoatMap,_e=et&&!!x.clearcoatNormalMap,Q=et&&!!x.clearcoatRoughnessMap,se=v&&!!x.iridescenceMap,Me=v&&!!x.iridescenceThicknessMap,Ne=H&&!!x.sheenColorMap,be=H&&!!x.sheenRoughnessMap,Se=!!x.specularMap,Ue=!!x.specularColorMap,qe=!!x.specularIntensityMap,tt=$&&!!x.transmissionMap,W=$&&!!x.thicknessMap,we=!!x.gradientMap,ae=!!x.alphaMap,Ee=x.alphaTest>0,Re=!!x.alphaHash,he=!!x.extensions,re=Wn;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(re=i.toneMapping);let Z={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:ne,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ie,batchingColor:ie&&U._colorsTexture!==null,instancing:xe,instancingColor:xe&&U.instanceColor!==null,instancingMorph:xe&&U.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:le,matcap:ge,envMap:ce,envMapMode:ce&&X.mapping,envMapCubeUVHeight:N,aoMap:ye,lightMap:ve,bumpMap:pe,normalMap:Ge,displacementMap:Ke,emissiveMap:ht,normalMapObjectSpace:Ge&&x.normalMapType===cp,normalMapTangentSpace:Ge&&x.normalMapType===Wl,packedNormalMap:Ge&&x.normalMapType===Wl&&Wv(x.normalMap.format),metalnessMap:je,roughnessMap:dt,anisotropy:V,anisotropyMap:te,clearcoat:et,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:Q,dispersion:$e,retroreflection:L,iridescence:v,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:H,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:Se,specularColorMap:Ue,specularIntensityMap:qe,transmission:$,transmissionMap:tt,thicknessMap:W,gradientMap:we,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:Re,combine:x.combine,mapUv:le&&g(x.map.channel),aoMapUv:ye&&g(x.aoMap.channel),lightMapUv:ve&&g(x.lightMap.channel),bumpMapUv:pe&&g(x.bumpMap.channel),normalMapUv:Ge&&g(x.normalMap.channel),displacementMapUv:Ke&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:je&&g(x.metalnessMap.channel),roughnessMapUv:dt&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(x.sheenRoughnessMap.channel),specularMapUv:Se&&g(x.specularMap.channel),specularColorMapUv:Ue&&g(x.specularColorMap.channel),specularIntensityMapUv:qe&&g(x.specularIntensityMap.channel),transmissionMapUv:tt&&g(x.transmissionMap.channel),thicknessMapUv:W&&g(x.thicknessMap.channel),alphaMapUv:ae&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ge||V),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(le||ae),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:oe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Z.vertexUv1s=c.has(1),Z.vertexUv2s=c.has(2),Z.vertexUv3s=c.has(3),c.clear(),Z}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=d[x.type],C;if(T){let R=ui[T];C=bp.clone(R.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Hv(i,T,x,r),l.push(C),u.set(T,C)),C}function b(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function S(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:S}}function qv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,m,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=a(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function c(f,d,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);let E=o(f,d,g,_,m,p);g.transmission>0?n.push(E):g.transparent===!0?r.push(E):t.push(E)}function l(f,d,g,_,m,p){let M=o(f,d,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(f,d){t.length>1&&t.sort(f||Yv),n.length>1&&n.sort(d||Hp),r.length>1&&r.sort(d||Hp)}function h(){for(let f=e,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function Zv(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Gp,i.set(n,[a])):r>=s.length?(a=new Gp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function $v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jv=0;function jv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qv(i){let e=new Kv,t=$v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let r=new O,s=new Be,a=new Be;function o(l){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,E=0,y=0,b=0,w=0,S=0,x=0,T=0,C=0;l.sort(jv);for(let U=0,D=l.length;U<D;U++){let I=l[U],F=I.color,P=I.intensity,k=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===er?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*P,h+=F.g*P,f+=F.b*P;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],P);C++}else if(I.isSunLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[g]=q,n.sunShadowMap[g]=X;let de=z.getViewportCount();for(let oe=0;oe<de;oe++)n.sunShadowMatrix[_+oe]=z.getMatrix(oe),n.sunShadowCascade[_+oe]=z._cascadeData[oe];_+=de,g++}n.sun[d]=N,d++}else if(I.isDirectionalLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=N,m++}else if(I.isSpotLight){let N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(F).multiplyScalar(P),N.distance=k,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[M]=N;let z=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=z.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=X,S++}M++}else if(I.isRectAreaLight){let N=e.get(I);N.color.copy(F).multiplyScalar(P),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=N,E++}else if(I.isPointLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){let z=I.shadow,q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=N,p++}else if(I.isHemisphereLight){let N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(P),N.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[y]=N,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==M||R.rectAreaLength!==E||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==S||R.numSpotMaps!==x||R.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,R.sunLength=d,R.directionalLength=m,R.pointLength=p,R.spotLength=M,R.rectAreaLength=E,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=S,R.numSpotMaps=x,R.numLightProbes=C,n.version=Jv++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let y=l[M];if(y.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),h++}else if(y.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Wp(i){let e=new Qv(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function eM(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Wp(i),e.set(r,[o])):s>=a.length?(o=new Wp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
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
}`,iM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],rM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Xp=new Be,La=new O,nh=new O;function sM(i,e,t){let n=new _s,r=new Je,s=new Je,a=new vt,o=new Xo,c=new qo,l={},u=t.maxTextureSize,h={[mn]:ln,[ln]:mn,[cn]:cn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let p=this.type;this.render=function(w,S,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===il&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ma);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(li),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=p!==this.type;D&&S.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=w.length;I<F;I++){let P=w[I],k=P.shadow;if(k===void 0){Xe("WebGLShadowMap:",P,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let X=k.getFrameExtents();r.multiply(X),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,k.mapSize.y=s.y));let N=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=N,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Es){if(P.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new hn(r.x,r.y,{format:er,type:Yn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),k.map.texture.name=P.name+".shadowMap",k.map.depthTexture=new Ki(r.x,r.y,Sn),k.map.depthTexture.name=P.name+".shadowMapDepth",k.map.depthTexture.format=ii,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ut,k.map.depthTexture.magFilter=Ut}else P.isPointLight?(k.map=new Kl(r.x),k.map.depthTexture=new Go(r.x,qn)):(k.map=new hn(r.x,r.y),k.map.depthTexture=new Ki(r.x,r.y,qn)),k.map.depthTexture.name=P.name+".shadowMap",k.map.depthTexture.format=ii,this.type===Ma?(k.map.depthTexture.compareFunction=N?ql:Xl,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ut,k.map.depthTexture.magFilter=Ut);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();P.isPointLight!==!0&&k.updateMatrices(P,x);for(let q=0;q<z;q++){let de=k.getCamera(q);if(P.isPointLight){let oe=k.camera,K=k.matrix,ne=P.distance||oe.far;ne!==oe.far&&(oe.far=ne,oe.updateProjectionMatrix()),La.setFromMatrixPosition(P.matrixWorld),oe.position.copy(La),nh.copy(oe.position),nh.add(iM[q]),oe.up.copy(rM[q]),oe.lookAt(nh),oe.updateMatrixWorld(),K.makeTranslation(-La.x,-La.y,-La.z),Xp.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Xp,oe.coordinateSystem,oe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,q),i.clear();else{q===0&&(i.setRenderTarget(k.map),i.clear());let oe=k.getViewport(q);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),U.viewport(a)}n=k.getFrustum(q),y(S,x,de,P,this.type)}k.isPointLightShadow!==!0&&this.type===Es&&M(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,R)};function M(w,S){let x=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(r.x,r.y,{format:er,type:Yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,x,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,x,d,_,null)}function E(w,S,x,T){let C=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)C=R;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let U=C.uuid,D=S.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let F=I[D];F===void 0&&(F=C.clone(),I[D]=F,S.addEventListener("dispose",b)),C=F}if(C.visible=S.visible,C.wireframe=S.wireframe,T===Es?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:h[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=x}return C}function y(w,S,x,T,C){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Es)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let D=e.update(w),I=w.material;if(Array.isArray(I)){let F=D.groups;for(let P=0,k=F.length;P<k;P++){let X=F[P],N=I[X.materialIndex];if(N&&N.visible){let z=E(w,N,T,C);w.onBeforeShadow(i,w,S,x,D,z,X),i.renderBufferDirect(x,null,D,z,w,X),w.onAfterShadow(i,w,S,x,D,z,X)}}}else if(I.visible){let F=E(w,I,T,C);w.onBeforeShadow(i,w,S,x,D,F,null),i.renderBufferDirect(x,null,D,F,w,null),w.onAfterShadow(i,w,S,x,D,F,null)}}let U=w.children;for(let D=0,I=U.length;D<I;D++)y(U[D],S,x,T,C)}function b(w){w.target.removeEventListener("dispose",b);for(let x in l){let T=l[x],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function aM(i,e){function t(){let W=!1,we=new vt,ae=null,Ee=new vt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!W&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){W=Re},setClear:function(Re,he,re,Z,Pe){Pe===!0&&(Re*=Z,he*=Z,re*=Z),we.set(Re,he,re,Z),Ee.equals(we)===!1&&(i.clearColor(Re,he,re,Z),Ee.copy(we))},reset:function(){W=!1,ae=null,Ee.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,ae=null,Ee=null,Re=null;return{setReversed:function(he){if(we!==he){let re=e.get("EXT_clip_control");he?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),we=he;let Z=Re;Re=null,this.setClear(Z)}},getReversed:function(){return we},setTest:function(he){he?Y(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(he){ae!==he&&!W&&(i.depthMask(he),ae=he)},setFunc:function(he){if(we&&(he=vp[he]),Ee!==he){switch(he){case Po:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case Fo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=he}},setLocked:function(he){W=he},setClear:function(he){Re!==he&&(Re=he,we&&(he=1-he),i.clearDepth(he))},reset:function(){W=!1,ae=null,Ee=null,Re=null,we=!1}}}function r(){let W=!1,we=null,ae=null,Ee=null,Re=null,he=null,re=null,Z=null,Pe=null;return{setTest:function(ke){W||(ke?Y(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ke){we!==ke&&!W&&(i.stencilMask(ke),we=ke)},setFunc:function(ke,ze,gt){(ae!==ke||Ee!==ze||Re!==gt)&&(i.stencilFunc(ke,ze,gt),ae=ke,Ee=ze,Re=gt)},setOp:function(ke,ze,gt){(he!==ke||re!==ze||Z!==gt)&&(i.stencilOp(ke,ze,gt),he=ke,re=ze,Z=gt)},setLocked:function(ke){W=ke},setClear:function(ke){Pe!==ke&&(i.clearStencil(ke),Pe=ke)},reset:function(){W=!1,we=null,ae=null,Ee=null,Re=null,he=null,re=null,Z=null,Pe=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,M=null,E=null,y=null,b=null,w=null,S=null,x=new Ye(0,0,0),T=0,C=!1,R=null,U=null,D=null,I=null,F=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,X=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=X>=2);let z=null,q={},de=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),K=new vt().fromArray(de),ne=new vt().fromArray(oe);function ue(W,we,ae,Ee){let Re=new Uint8Array(4),he=i.createTexture();i.bindTexture(W,he),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<ae;re++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(we+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return he}let B={};B[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(as),pe(!1),Ge(xu),Y(i.CULL_FACE),ye(li);function Y(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function fe(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function xe(W,we){return f[W]!==we?(i.bindFramebuffer(W,we),f[W]=we,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ie(W,we){let ae=g,Ee=!1;if(W){ae=d.get(we),ae===void 0&&(ae=[],d.set(we,ae));let Re=W.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let he=0,re=Re.length;he<re;he++)ae[he]=i.COLOR_ATTACHMENT0+he;ae.length=Re.length,Ee=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ae)}function le(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let ge={[_r]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};ge[Gd]=i.MIN,ge[Wd]=i.MAX;let ce={[Xd]:i.ZERO,[qd]:i.ONE,[Yd]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[Kd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(W,we,ae,Ee,Re,he,re,Z,Pe,ke){if(W===li){m===!0&&(fe(i.BLEND),m=!1);return}if(m===!1&&(Y(i.BLEND),m=!0),W!==zd){if(W!==p||ke!==C){if((M!==_r||b!==_r)&&(i.blendEquation(i.FUNC_ADD),M=_r,b=_r),ke)switch(W){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",W);break}else switch(W){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",W);break}E=null,y=null,w=null,S=null,x.set(0,0,0),T=0,p=W,C=ke}return}Re=Re||we,he=he||ae,re=re||Ee,(we!==M||Re!==b)&&(i.blendEquationSeparate(ge[we],ge[Re]),M=we,b=Re),(ae!==E||Ee!==y||he!==w||re!==S)&&(i.blendFuncSeparate(ce[ae],ce[Ee],ce[he],ce[re]),E=ae,y=Ee,w=he,S=re),(Z.equals(x)===!1||Pe!==T)&&(i.blendColor(Z.r,Z.g,Z.b,Pe),x.copy(Z),T=Pe),p=W,C=!1}function ve(W,we){W.side===cn?fe(i.CULL_FACE):Y(i.CULL_FACE);let ae=W.side===ln;we&&(ae=!ae),pe(ae),W.blending===Ts&&W.transparent===!1?ye(li):ye(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let Ee=W.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ht(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(W){R!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),R=W)}function Ge(W){W!==Bd?(Y(i.CULL_FACE),W!==U&&(W===xu?i.cullFace(i.BACK):W===kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),U=W}function Ke(W){W!==D&&(k&&i.lineWidth(W),D=W)}function ht(W,we,ae){W?(Y(i.POLYGON_OFFSET_FILL),(I!==we||F!==ae)&&(I=we,F=ae,a.getReversed()&&(we=-we),i.polygonOffset(we,ae))):fe(i.POLYGON_OFFSET_FILL)}function je(W){W?Y(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function dt(W){W===void 0&&(W=i.TEXTURE0+P-1),z!==W&&(i.activeTexture(W),z=W)}function V(W,we,ae){ae===void 0&&(z===null?ae=i.TEXTURE0+P-1:ae=z);let Ee=q[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},q[ae]=Ee),(Ee.type!==W||Ee.texture!==we)&&(z!==ae&&(i.activeTexture(ae),z=ae),i.bindTexture(W,we||B[W]),Ee.type=W,Ee.texture=we)}function et(){let W=q[z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(W){Ze("WebGLState:",W)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(W){Ze("WebGLState:",W)}}function v(){try{i.texSubImage2D(...arguments)}catch(W){Ze("WebGLState:",W)}}function H(){try{i.texSubImage3D(...arguments)}catch(W){Ze("WebGLState:",W)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ze("WebGLState:",W)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ze("WebGLState:",W)}}function me(){try{i.texStorage2D(...arguments)}catch(W){Ze("WebGLState:",W)}}function _e(){try{i.texStorage3D(...arguments)}catch(W){Ze("WebGLState:",W)}}function Q(){try{i.texImage2D(...arguments)}catch(W){Ze("WebGLState:",W)}}function se(){try{i.texImage3D(...arguments)}catch(W){Ze("WebGLState:",W)}}function Me(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Ne(W,we){h[W]!==we&&(i.pixelStorei(W,we),h[W]=we)}function be(W){K.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),K.copy(W))}function Se(W){ne.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function Ue(W,we){let ae=l.get(we);ae===void 0&&(ae=new WeakMap,l.set(we,ae));let Ee=ae.get(W);Ee===void 0&&(Ee=i.getUniformBlockIndex(we,W.name),ae.set(W,Ee))}function qe(W,we){let Ee=l.get(we).get(W);c.get(we)!==Ee&&(i.uniformBlockBinding(we,Ee,W.__bindingPointIndex),c.set(we,Ee))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,q={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,M=null,E=null,y=null,b=null,w=null,S=null,x=new Ye(0,0,0),T=0,C=!1,R=null,U=null,D=null,I=null,F=null,K.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:fe,bindFramebuffer:xe,drawBuffers:ie,useProgram:le,setBlending:ye,setMaterial:ve,setFlipSided:pe,setCullFace:Ge,setLineWidth:Ke,setPolygonOffset:ht,setScissorTest:je,activeTexture:dt,bindTexture:V,unbindTexture:et,compressedTexImage2D:$e,compressedTexImage3D:L,texImage2D:Q,texImage3D:se,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Ue,uniformBlockBinding:qe,texStorage2D:me,texStorage3D:_e,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:be,viewport:Se,reset:tt}}function oM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,v){return g?new OffscreenCanvas(L,v):cs("canvas")}function m(L,v,H){let $=1,te=$e(L);if((te.width>H||te.height>H)&&($=H/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let me=Math.floor($*te.width),_e=Math.floor($*te.height);f===void 0&&(f=_(me,_e));let Q=v?_(me,_e):f;return Q.width=me,Q.height=_e,Q.getContext("2d").drawImage(L,0,0,me,_e),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+_e+")."),Q}else return"data"in L&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function p(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,v,H,$,te,me=!1){if(L!==null){if(i[L]!==void 0)return i[L];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e;$&&(_e=e.get("EXT_texture_norm16"),_e||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8),H===i.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),H===i.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),v===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8),H===i.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),H===i.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),H===i.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let se=me?ta:ot.getTransfer(te);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=se===_t?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),H===i.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(L,v){let H;return L?v===null||v===qn||v===Cs?H=i.DEPTH24_STENCIL8:v===Sn?H=i.DEPTH32F_STENCIL8:v===Rs&&(H=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===Cs?H=i.DEPTH_COMPONENT24:v===Sn?H=i.DEPTH_COMPONENT32F:v===Rs&&(H=i.DEPTH_COMPONENT16),H}function w(L,v){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==Ft?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function S(L){let v=L.target;v.removeEventListener("dispose",S),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function x(L){let v=L.target;v.removeEventListener("dispose",x),R(v)}function T(L){let v=n.get(L);if(v.__webglInit===void 0)return;let H=L.source,$=d.get(H);if($){let te=$[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(L),Object.keys($).length===0&&d.delete(H)}n.remove(L)}function C(L){let v=n.get(L);i.deleteTexture(v.__webglTexture);let H=L.source,$=d.get(H);delete $[v.__cacheKey],a.memory.textures--}function R(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let te=0;te<v.__webglFramebuffer[$].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[$][te]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=L.textures;for(let $=0,te=H.length;$<te;$++){let me=n.get(H[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(L)}let U=0;function D(){U=0}function I(){return U}function F(L){U=L}function P(){let L=U;return L>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,L}function k(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function X(L,v){let H=n.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){let $=L.image;if($===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,L,v);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function N(L,v){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){fe(H,L,v);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function z(L,v){let H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){fe(H,L,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function q(L,v){let H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){xe(H,L,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let de={[Yi]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[os]:i.MIRRORED_REPEAT},oe={[Ut]:i.NEAREST,[al]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[As]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},K={[hp]:i.NEVER,[gp]:i.ALWAYS,[fp]:i.LESS,[Xl]:i.LEQUAL,[dp]:i.EQUAL,[ql]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function ne(L,v){if(v.type===Sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ft||v.magFilter===As||v.magFilter===vr||v.magFilter===Xn||v.minFilter===Ft||v.minFilter===As||v.minFilter===vr||v.minFilter===Xn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,de[v.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,de[v.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,de[v.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[v.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==vr&&v.minFilter!==Xn||v.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ue(L,v){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",S));let $=v.source,te=d.get($);te===void 0&&(te={},d.set($,te));let me=k(v);if(me!==L.__cacheKey){te[me]===void 0&&(te[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[me].usedTimes++;let _e=te[L.__cacheKey];_e!==void 0&&(te[L.__cacheKey].usedTimes--,_e.usedTimes===0&&C(v)),L.__cacheKey=me,L.__webglTexture=te[me].texture}return H}function B(L,v,H){return Math.floor(Math.floor(L/H)/v)}function Y(L,v,H,$){let me=L.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,$,v.data);else{me.sort((Ne,be)=>Ne.start-be.start);let _e=0;for(let Ne=1;Ne<me.length;Ne++){let be=me[_e],Se=me[Ne],Ue=be.start+be.count,qe=B(Se.start,v.width,4),tt=B(be.start,v.width,4);Se.start<=Ue+1&&qe===tt&&B(Se.start+Se.count-1,v.width,4)===qe?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++_e,me[_e]=Se)}me.length=_e+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,be=me.length;Ne<be;Ne++){let Se=me[Ne],Ue=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),tt=Ue%v.width,W=Math.floor(Ue/v.width),we=qe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,tt,W,we,ae,H,$,v.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function fe(L,v,H){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let te=ue(L,v),me=v.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+H);let _e=n.get(me);if(me.version!==_e.__version||te===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ae=ot.getPrimaries(ot.workingColorSpace),Ee=v.colorSpace===Zn?null:ot.getPrimaries(v.colorSpace),Re=v.colorSpace===Zn||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let se=m(v.image,!1,r.maxTextureSize);se=et(v,se);let Me=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type),be=y(v.internalFormat,Me,Ne,v.normalized,v.colorSpace,v.isVideoTexture);ne($,v);let Se,Ue=v.mipmaps,qe=v.isVideoTexture!==!0,tt=_e.__version===void 0||te===!0,W=me.dataReady,we=w(v,se);if(v.isDepthTexture)be=b(v.format===Qi,v.type),tt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,be,se.width,se.height,0,Me,Ne,null));else if(v.isDataTexture)if(Ue.length>0){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,we,be,Ue[0].width,Ue[0].height);for(let ae=0,Ee=Ue.length;ae<Ee;ae++)Se=Ue[ae],qe?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,ae,be,Se.width,Se.height,0,Me,Ne,Se.data);v.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,we,be,se.width,se.height),W&&Y(v,se,Me,Ne)):t.texImage2D(i.TEXTURE_2D,0,be,se.width,se.height,0,Me,Ne,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,be,Ue[0].width,Ue[0].height,se.depth);for(let ae=0,Ee=Ue.length;ae<Ee;ae++)if(Se=Ue[ae],v.format!==wn)if(Me!==null)if(qe){if(W)if(v.layerUpdates.size>0){let Re=Xu(Se.width,Se.height,v.format,v.type);for(let he of v.layerUpdates){let re=Se.data.subarray(he*Re/Se.data.BYTES_PER_ELEMENT,(he+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,he,Se.width,Se.height,1,Me,re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,be,Se.width,Se.height,se.depth,0,Se.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,se.depth,Me,Ne,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,be,Se.width,Se.height,se.depth,0,Me,Ne,Se.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qe&&tt&&t.texStorage2D(i.TEXTURE_2D,we,be,Ue[0].width,Ue[0].height);for(let ae=0,Ee=Ue.length;ae<Ee;ae++)Se=Ue[ae],v.format!==wn?Me!==null?qe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,be,Se.width,Se.height,0,Se.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,ae,be,Se.width,Se.height,0,Me,Ne,Se.data)}else if(v.isDataArrayTexture)if(qe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,be,se.width,se.height,se.depth),W)if(v.layerUpdates.size>0){let ae=Xu(se.width,se.height,v.format,v.type);for(let Ee of v.layerUpdates){let Re=se.data.subarray(Ee*ae/se.data.BYTES_PER_ELEMENT,(Ee+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,se.width,se.height,1,Me,Ne,Re)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ne,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,Me,Ne,se.data);else if(v.isData3DTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_3D,we,be,se.width,se.height,se.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ne,se.data)):t.texImage3D(i.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,Me,Ne,se.data);else if(v.isFramebufferTexture){if(tt)if(qe)t.texStorage2D(i.TEXTURE_2D,we,be,se.width,se.height);else{let ae=se.width,Ee=se.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,be,ae,Ee,0,Me,Ne,null),ae>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),se.parentNode!==ae){ae.appendChild(se),h.add(v),ae.onpaint=Ee=>{let Re=Ee.changedElements;for(let he of h)Re.includes(he.image)&&(he.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Re=i.RGBA,he=i.RGBA,re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,he,re,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(qe&&tt){let ae=$e(Ue[0]);t.texStorage2D(i.TEXTURE_2D,we,be,ae.width,ae.height)}for(let ae=0,Ee=Ue.length;ae<Ee;ae++)Se=Ue[ae],qe?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me,Ne,Se):t.texImage2D(i.TEXTURE_2D,ae,be,Me,Ne,Se);v.generateMipmaps=!1}else if(qe){if(tt){let ae=$e(se);t.texStorage2D(i.TEXTURE_2D,we,be,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ne,se)}else t.texImage2D(i.TEXTURE_2D,0,be,Me,Ne,se);p(v)&&M($),_e.__version=me.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function xe(L,v,H){if(v.image.length!==6)return;let $=ue(L,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);let me=n.get(te);if(te.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let _e=ot.getPrimaries(ot.workingColorSpace),Q=v.colorSpace===Zn?null:ot.getPrimaries(v.colorSpace),se=v.colorSpace===Zn||_e===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,be=[];for(let he=0;he<6;he++)!Me&&!Ne?be[he]=m(v.image[he],!0,r.maxCubemapSize):be[he]=Ne?v.image[he].image:v.image[he],be[he]=et(v,be[he]);let Se=be[0],Ue=s.convert(v.format,v.colorSpace),qe=s.convert(v.type),tt=y(v.internalFormat,Ue,qe,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,we=me.__version===void 0||$===!0,ae=te.dataReady,Ee=w(v,Se);ne(i.TEXTURE_CUBE_MAP,v);let Re;if(Me){W&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,tt,Se.width,Se.height);for(let he=0;he<6;he++){Re=be[he].mipmaps;for(let re=0;re<Re.length;re++){let Z=Re[re];v.format!==wn?Ue!==null?W?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re,0,0,Z.width,Z.height,Ue,Z.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re,tt,Z.width,Z.height,0,Z.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re,0,0,Z.width,Z.height,Ue,qe,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re,tt,Z.width,Z.height,0,Ue,qe,Z.data)}}}else{if(Re=v.mipmaps,W&&we){Re.length>0&&Ee++;let he=$e(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,tt,he.width,he.height)}for(let he=0;he<6;he++)if(Ne){W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,be[he].width,be[he].height,Ue,qe,be[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,be[he].width,be[he].height,0,Ue,qe,be[he].data);for(let re=0;re<Re.length;re++){let Pe=Re[re].image[he].image;W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re+1,0,0,Pe.width,Pe.height,Ue,qe,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re+1,tt,Pe.width,Pe.height,0,Ue,qe,Pe.data)}}else{W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue,qe,be[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,Ue,qe,be[he]);for(let re=0;re<Re.length;re++){let Z=Re[re];W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re+1,0,0,Ue,qe,Z.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,re+1,tt,Ue,qe,Z.image[he])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),me.__version=te.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function ie(L,v,H,$,te,me){let _e=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),se=y(H.internalFormat,_e,Q,H.normalized,H.colorSpace),Me=n.get(v),Ne=n.get(H);if(Ne.__renderTarget=v,!Me.__hasExternalTextures){let be=Math.max(1,v.width>>me),Se=Math.max(1,v.height>>me);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,me,se,be,Se,v.depth,0,_e,Q,null):t.texImage2D(te,me,se,be,Se,0,_e,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,te,Ne.__webglTexture,0,je(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,te,Ne.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(L,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),v.depthBuffer){let $=v.depthTexture,te=$&&$.isDepthTexture?$.type:null,me=b(v.stencilBuffer,te),_e=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(v),me,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(v),me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,me,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,L)}else{let $=v.textures;for(let te=0;te<$.length;te++){let me=$[te],_e=s.convert(me.format,me.colorSpace),Q=s.convert(me.type),se=y(me.internalFormat,_e,Q,me.normalized,me.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(v),se,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(L,v,H){let $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",S)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ne(i.TEXTURE_CUBE_MAP,v.depthTexture);let Me=s.convert(v.depthTexture.format),Ne=s.convert(v.depthTexture.type),be;v.depthTexture.format===ii?be=i.DEPTH_COMPONENT24:v.depthTexture.format===Qi&&(be=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,v.width,v.height,0,Me,Ne,null)}}else X(v.depthTexture,0);let me=te.__webglTexture,_e=je(v),Q=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,se=v.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ii)dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,Q,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,se,Q,me,0);else if(v.depthTexture.format===Qi)dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,Q,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,se,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(L){let v=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=$}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)ge(v.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?ge(v.__webglFramebuffer[0],L,0):ge(v.__webglFramebuffer,L,0)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),le(v.__webglDepthbuffer[$],L,!1);else{let te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}else{let $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),le(v.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(L,v,H){let $=n.get(L);v!==void 0&&ie($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ce(L)}function ve(L){let v=L.texture,H=n.get(L),$=n.get(v);L.addEventListener("dispose",x);let te=L.textures,me=L.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),me){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let se=0;se<v.mipmaps.length;se++)H.__webglFramebuffer[Q][se]=i.createFramebuffer()}else H.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)H.__webglFramebuffer[Q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(_e)for(let Q=0,se=te.length;Q<se;Q++){let Me=n.get(te[Q]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&dt(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){let se=te[Q];H.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);let Me=s.convert(se.format,se.colorSpace),Ne=s.convert(se.type),be=y(se.internalFormat,Me,Ne,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),Se=je(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,be,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),le(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ne(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)ie(H.__webglFramebuffer[Q][se],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se);else ie(H.__webglFramebuffer[Q],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Q=0,se=te.length;Q<se;Q++){let Me=te[Q],Ne=n.get(Me),be=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Ne.__webglTexture),ne(be,Me),ie(H.__webglFramebuffer,L,Me,i.COLOR_ATTACHMENT0+Q,be,0),p(Me)&&M(be)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,$.__webglTexture),ne(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)ie(H.__webglFramebuffer[se],L,v,i.COLOR_ATTACHMENT0,Q,se);else ie(H.__webglFramebuffer,L,v,i.COLOR_ATTACHMENT0,Q,0);p(v)&&M(Q),t.unbindTexture()}L.depthBuffer&&ce(L)}function pe(L){let v=L.textures;for(let H=0,$=v.length;H<$;H++){let te=v[H];if(p(te)){let me=E(L),_e=n.get(te).__webglTexture;t.bindTexture(me,_e),M(me),t.unbindTexture()}}}let Ge=[],Ke=[];function ht(L){if(L.samples>0){if(dt(L)===!1){let v=L.textures,H=L.width,$=L.height,te=i.COLOR_BUFFER_BIT,me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(L),Q=v.length>1;if(Q)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let se=L.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);let Ne=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,te,i.NEAREST),c===!0&&(Ge.length=0,Ke.length=0,Ge.push(i.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ge.push(me),Ke.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);let Ne=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let v=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function je(L){return Math.min(r.maxSamples,L.samples)}function dt(L){let v=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function V(L){let v=a.render.frame;u.get(L)!==v&&(u.set(L,v),L.update())}function et(L,v){let H=L.colorSpace,$=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==on&&H!==Zn&&(ot.getTransfer(H)===_t?($!==wn||te!==gn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",H)),v}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=ye,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lM(i,e){function t(n,r=Zn){let s,a=ot.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===wn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===er)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===wa||n===Ea||n===Ta||n===Aa)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===vl||n===Ml||n===bl||n===Ra||n===Sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_l||n===yl)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return s.COMPRESSED_R11_EAC;if(n===bl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return s.COMPRESSED_RG11_EAC;if(n===Sl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Nl||n===Dl||n===Ul||n===Fl||n===Ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===kl||n===zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Bl)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Hl||n===Ca||n===Gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:cM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends ri{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new uh,p={},M=t.getContextAttributes(),E=null,y=null,b=[],w=[],S=new Je,x=null,T=null,C=new Vt;C.viewport=new vt;let R=new Vt;R.viewport=new vt;let U=[C,R],D=new tl,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=b[B];return Y===void 0&&(Y=new ds,b[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=b[B];return Y===void 0&&(Y=new ds,b[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=b[B];return Y===void 0&&(Y=new ds,b[B]=Y),Y.getHandSpace()};function P(B){let Y=w.indexOf(B.inputSource);if(Y===-1)return;let fe=b[Y];fe!==void 0&&(fe.update(B.inputSource,B.frame,l||a),fe.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let B=0;B<b.length;B++){let Y=w[B];Y!==null&&(w[B]=null,b[B].disconnect(Y))}I=null,F=null,m.reset();for(let B in p)delete p[B];if(e.setRenderTarget(E),d=null,f=null,h=null,r=null,y=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(S.width,S.height,!1),T!==null){let B=T.camera;B.fov=T.fov,B.zoom=T.zoom,B.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,xe=null,ie=null;M.depth&&(ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Qi:ii,xe=M.stencil?Cs:qn);let le={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new hn(f.textureWidth,f.textureHeight,{format:wn,type:gn,depthTexture:new Ki(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(B){for(let Y=0;Y<B.removed.length;Y++){let fe=B.removed[Y],xe=w.indexOf(fe);xe>=0&&(w[xe]=null,b[xe].disconnect(fe))}for(let Y=0;Y<B.added.length;Y++){let fe=B.added[Y],xe=w.indexOf(fe);if(xe===-1){for(let le=0;le<b.length;le++)if(le>=w.length){w.push(fe),xe=le;break}else if(w[le]===null){w[le]=fe,xe=le;break}if(xe===-1)break}let ie=b[xe];ie&&ie.connect(fe)}}let N=new O,z=new O;function q(B,Y,fe){N.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(fe.matrixWorld);let xe=N.distanceTo(z),ie=Y.projectionMatrix.elements,le=fe.projectionMatrix.elements,ge=ie[14]/(ie[10]-1),ce=ie[14]/(ie[10]+1),ye=(ie[9]+1)/ie[5],ve=(ie[9]-1)/ie[5],pe=(ie[8]-1)/ie[0],Ge=(le[8]+1)/le[0],Ke=ge*pe,ht=ge*Ge,je=xe/(-pe+Ge),dt=je*-pe;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(dt),B.translateZ(je),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ie[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let V=ge+je,et=ce+je,$e=Ke-dt,L=ht+(xe-dt),v=ye*ce/et*V,H=ve*ce/et*V;B.projectionMatrix.makePerspective($e,L,v,H,V,et),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function de(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let Y=B.near,fe=B.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),D.near=R.near=C.near=Y,D.far=R.far=C.far=fe,(I!==D.near||F!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,F=D.far),D.layers.mask=B.layers.mask|6,C.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let xe=B.parent,ie=D.cameras;de(D,xe);for(let le=0;le<ie.length;le++)de(ie[le],xe);ie.length===2?q(D,C,R):D.projectionMatrix.copy(C.projectionMatrix),T===null&&B.isPerspectiveCamera&&(T={camera:B,fov:B.fov,zoom:B.zoom}),oe(B,D,xe)};function oe(B,Y,fe){fe===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=fr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(B){return p[B]};let K=null;function ne(B,Y){if(u=Y.getViewerPose(l||a),g=Y,u!==null){let fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let xe=!1;fe.length!==D.cameras.length&&(D.cameras.length=0,xe=!0);for(let ce=0;ce<fe.length;ce++){let ye=fe[ce],ve=null;if(d!==null)ve=d.getViewport(ye);else{let Ge=h.getViewSubImage(f,ye);ve=Ge.viewport,ce===0&&(e.setRenderTargetTextures(y,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(y))}let pe=U[ce];pe===void 0&&(pe=new Vt,pe.layers.enable(ce),pe.viewport=new vt,U[ce]=pe),pe.matrix.fromArray(ye.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ye.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ve.x,ve.y,ve.width,ve.height),ce===0&&(D.matrix.copy(pe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xe===!0&&D.cameras.push(pe)}let ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let ce=h.getDepthInformation(fe[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,r.renderState)}if(ie&&ie.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let ce=0;ce<fe.length;ce++){let ye=fe[ce].camera;if(ye){let ve=p[ye];ve||(ve=new da,p[ye]=ve);let pe=h.getCameraImage(ye);ve.sourceTexture=pe}}}}for(let fe=0;fe<b.length;fe++){let xe=w[fe],ie=b[fe];xe!==null&&ie!==void 0&&ie.update(xe,Y,l||a)}K&&K(B,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ue=new qp;ue.setAnimationLoop(ne),this.setAnimationLoop=function(B){K=B},this.dispose=function(){}}},hM=new Be,jp=new Qe;jp.set(-1,0,0,0,1,0,0,0,1);function fM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,y=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function l(y,b){let w=r[y.id];w===void 0&&(m(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",M));let S=b.program;n.updateUBOMapping(y,S);let x=e.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function u(y){let b=h();y.__bindingPointIndex=b;let w=i.createBuffer(),S=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=r[y.id],w=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=w.length;x<T;x++){let C=w[x];if(Array.isArray(C))for(let R=0,U=C.length;R<U;R++)d(C[R],x,R,S);else d(C,x,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,w,S){if(_(y,b,w,S)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let R=0;R<T.length;R++){let U=T[R],D=p(U);g(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function _(y,b,w,S){let x=y.value,T=b+"_"+w;if(S[T]===void 0)return typeof x=="number"||typeof x=="boolean"?S[T]=x:ArrayBuffer.isView(x)?S[T]=x.slice():S[T]=x.clone(),!0;{let C=S[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return S[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let b=y.uniforms,w=0,S=16;for(let T=0,C=b.length;T<C;T++){let R=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,D=R.length;U<D;U++){let I=R[U],F=Array.isArray(I.value)?I.value:[I.value];for(let P=0,k=F.length;P<k;P++){let X=F[P],N=p(X),z=w%S,q=z%N.boundary,de=z+q;w+=q,de!==0&&S-de<N.storage&&(w+=S-de),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=N.storage}}}let x=w%S;return x>0&&(w+=S-x),y.__size=w,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){let b=y.target;b.removeEventListener("dispose",M);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:E}}var pM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function mM(){return ci===null&&(ci=new xs(pM,16,16,er,Yn),ci.name="DFG_LUT",ci.minFilter=Ft,ci.magFilter=Ft,ci.wrapS=Un,ci.wrapT=Un,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var $l=class{constructor(e={}){let{canvas:t=xp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=d,m=new Set([dl,fl,hl]),p=new Set([gn,qn,Rs,Cs,ll,cl]),M=new Uint32Array(4),E=new Int32Array(4),y=new O,b=null,w=null,S=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,U=null,D=null,I=null,F=null;this._outputColorSpace=It;let P=0,k=0,X=null,N=-1,z=null,q=new vt,de=new vt,oe=null,K=new Ye(0),ne=0,ue=t.width,B=t.height,Y=1,fe=null,xe=null,ie=new vt(0,0,ue,B),le=new vt(0,0,ue,B),ge=!1,ce=new _s,ye=!1,ve=!1,pe=new Be,Ge=new O,Ke=new vt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function dt(){return X===null?Y:1}let V=n;function et(A,G){return t.getContext(A,G)}let $e,L,v,H,$,te,me,_e,Q,se,Me,Ne,be,Se,Ue,qe,tt,W,we,ae,Ee,Re,he;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ze,!1),V===null){let G="webgl2";if(V=et(G,A),V===null)throw et(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Ze("WebGLRenderer: "+A.message),A}function re(){$e=new by(V),$e.init(),Ee=new lM(V,$e),L=new fy(V,$e,e,Ee),v=new aM(V,$e),L.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),D=V.createFramebuffer(),I=V.createFramebuffer(),F=V.createFramebuffer(),H=new Ey(V),$=new qv,te=new oM(V,$e,v,$,L,Ee,H),me=new My(C),_e=new A0(V),Re=new uy(V,_e),Q=new Sy(V,_e,H,Re),se=new Ay(V,Q,_e,Re,H),W=new Ty(V,L,te),Ue=new dy($),Me=new Xv(C,me,$e,L,Re,Ue),Ne=new fM(C,$),be=new Zv,Se=new eM($e),tt=new cy(C,me,v,se,g,c),qe=new sM(C,se,L),he=new dM(V,H,L,v),we=new hy(V,$e,H),ae=new wy(V,$e,H),H.programs=Me.programs,C.capabilities=L,C.extensions=$e,C.properties=$,C.renderLists=be,C.shadowMap=qe,C.state=v,C.info=H}_!==gn&&(T=new Cy(_,t.width,t.height,o,r,s));let Z=new hh(C,V);this.xr=Z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(ue,B,!1))},this.getSize=function(A){return A.set(ue,B)},this.setSize=function(A,G,ee=!0){if(Z.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,B=G,t.width=Math.floor(A*Y),t.height=Math.floor(G*Y),ee===!0&&(t.style.width=A+"px",t.style.height=G+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ue*Y,B*Y).floor()},this.setDrawingBufferSize=function(A,G,ee){ue=A,B=G,Y=ee,t.width=Math.floor(A*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(_===gn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,G,ee,J){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,ee,J),v.viewport(q.copy(ie).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,G,ee,J){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,G,ee,J),v.scissor(de.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){v.setScissorTest(ge=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,ee=!0){let J=0;if(A){let j=!1;if(X!==null){let Ce=X.texture.format;j=m.has(Ce)}if(j){let Ce=X.texture.type,Le=p.has(Ce),Ae=tt.getClearColor(),Fe=tt.getClearAlpha(),He=Ae.r,it=Ae.g,ct=Ae.b;Le?(M[0]=He,M[1]=it,M[2]=ct,M[3]=Fe,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=He,E[1]=it,E[2]=ct,E[3]=Fe,V.clearBufferiv(V.COLOR,0,E))}else J|=V.COLOR_BUFFER_BIT}G&&(J|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),tt.dispose(),be.dispose(),Se.dispose(),$.dispose(),me.dispose(),se.dispose(),Re.dispose(),he.dispose(),Me.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",An),Z.removeEventListener("sessionend",_n),nr.stop()};function Pe(A){A.preventDefault(),na("WebGLRenderer: Context Lost."),R=!0}function ke(){na("WebGLRenderer: Context Restored."),R=!1;let A=H.autoReset,G=qe.enabled,ee=qe.autoUpdate,J=qe.needsUpdate,j=qe.type;re(),H.autoReset=A,qe.enabled=G,qe.autoUpdate=ee,qe.needsUpdate=J,qe.type=j}function ze(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){let G=A.target;G.removeEventListener("dispose",gt),Rt(G)}function Rt(A){Et(A),$.remove(A)}function Et(A){let G=$.get(A).programs;G!==void 0&&(G.forEach(function(ee){Me.releaseProgram(ee)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ee,J,j,Ce){G===null&&(G=ht);let Le=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ae=Gm(A,G,ee,J,j);v.setMaterial(J,Le);let Fe=ee.index,He=1;if(J.wireframe===!0){if(Fe=Q.getWireframeAttribute(ee),Fe===void 0)return;He=2}let it=ee.drawRange,ct=ee.attributes.position,Oe=it.start*He,xt=(it.start+it.count)*He;Ce!==null&&(Oe=Math.max(Oe,Ce.start*He),xt=Math.min(xt,(Ce.start+Ce.count)*He)),Fe!==null?(Oe=Math.max(Oe,0),xt=Math.min(xt,Fe.count)):ct!=null&&(Oe=Math.max(Oe,0),xt=Math.min(xt,ct.count));let kt=xt-Oe;if(kt<0||kt===1/0)return;Re.setup(j,J,Ae,ee,Fe);let At,St=we;if(Fe!==null&&(At=_e.get(Fe),St=ae,St.setIndex(At)),j.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*dt()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(j.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),v.setLineWidth(Kt*dt()),j.isLineSegments?St.setMode(V.LINES):j.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else j.isPoints?St.setMode(V.POINTS):j.isSprite&&St.setMode(V.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Kt=j._multiDrawStarts,Ie=j._multiDrawCounts,tn=j._multiDrawCount,ft=Fe?_e.get(Fe).bytesPerElement:1,Rn=$.get(J).currentProgram.getUniforms();for(let Jn=0;Jn<tn;Jn++)Rn.setValue(V,"_gl_DrawID",Jn),St.render(Kt[Jn]/ft,Ie[Jn])}else if(j.isInstancedMesh)St.renderInstances(Oe,kt,j.count);else if(ee.isInstancedBufferGeometry){let Kt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ie=Math.min(ee.instanceCount,Kt);St.renderInstances(Oe,kt,Ie)}else St.render(Oe,kt)};function Tn(A,G,ee,J){U!==null&&A.isNodeMaterial&&U.setObject(J,A),ye===!0&&Ue.setState(A,ee,!1),A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Ha(A,G,J),A.side=mn,A.needsUpdate=!0,Ha(A,G,J),A.side=cn):Ha(A,G,J)}this.compile=function(A,G,ee=null){ee===null&&(ee=A),U!==null&&U.renderStart(A,G,ee),w=Se.get(ee),w.init(G),x.push(w),ee.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),A!==ee&&A.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),ve=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,ve),ye===!0&&Ue.setGlobalState(this.clippingPlanes,G),U!==null&&qe.render(w.state.shadowsArray,ee,G);let J=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){let Ae=Ce[Le];Tn(Ae,ee,G,j),J.add(Ae)}else Tn(Ce,ee,G,j),J.add(Ce)}),w=x.pop(),U!==null&&U.renderEnd(),J},this.compileAsync=function(A,G,ee=null){let J=this.compile(A,G,ee);return new Promise(j=>{function Ce(){if(J.forEach(function(Le){let Fe=$.get(Le).currentProgram;(Fe===void 0||Fe.isReady())&&J.delete(Le)}),J.size===0){j(A);return}setTimeout(Ce,10)}$e.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let On=null;function xn(A){On&&On(A)}function An(){nr.stop()}function _n(){nr.start()}let nr=new qp;nr.setAnimationLoop(xn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(A){On=A,Z.setAnimationLoop(A),A===null?nr.stop():nr.start()},Z.addEventListener("sessionstart",An),Z.addEventListener("sessionend",_n),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(A,G);let ee=Z.enabled===!0&&Z.isPresenting===!0,J=T!==null&&(X===null||ee)&&T.begin(C,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,G,X),w=Se.get(A,x.length),w.init(G),w.state.textureUnits=te.getTextureUnits(),x.push(w),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix(pe,Hn,G.reversedDepth),ve=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,ve),b=be.get(A,S.length),b.init(),S.push(b),Z.enabled===!0&&Z.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&lc(Le,G,-1/0,C.sortObjects)}lc(A,G,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&b.sort(fe,xe),je=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,je&&tt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Ue.beginShadows();let j=w.state.shadowsArray;if(qe.render(j,A,G),ye===!0&&Ue.endShadows(),(J&&T.hasRenderPass())===!1){let Le=b.opaque,Ae=b.transmissive;if(w.setupLights(),G.isArrayCamera){let Fe=G.cameras;if(Ae.length>0)for(let He=0,it=Fe.length;He<it;He++){let ct=Fe[He];ef(Le,Ae,A,ct)}je&&tt.render(A);for(let He=0,it=Fe.length;He<it;He++){let ct=Fe[He];Qh(b,A,ct,ct.viewport)}}else Ae.length>0&&ef(Le,Ae,A,G),je&&tt.render(A),Qh(b,A,G)}X!==null&&k===0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X)),J&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,G),Re.resetDefaultState(),N=-1,z=null,x.pop(),x.length>0?(w=x[x.length-1],te.setTextureUnits(w.state.textureUnits),ye===!0&&Ue.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,U!==null&&U.renderEnd()};function lc(A,G,ee,J){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){J&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);let Le=se.update(A),Ae=A.material;Ae.visible&&b.push(A,Le,Ae,ee,Ke.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){let Le=se.update(A),Ae=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ke.copy(Le.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Ae)){let Fe=Le.groups;for(let He=0,it=Fe.length;He<it;He++){let ct=Fe[He],Oe=Ae[ct.materialIndex];Oe&&Oe.visible&&b.push(A,Le,Oe,ee,Ke.z,ct,G)}}else Ae.visible&&b.push(A,Le,Ae,ee,Ke.z,null,G)}}let Ce=A.children;for(let Le=0,Ae=Ce.length;Le<Ae;Le++)lc(Ce[Le],G,ee,J)}function Qh(A,G,ee,J){let{opaque:j,transmissive:Ce,transparent:Le}=A;w.setupLightsView(ee),ye===!0&&Ue.setGlobalState(C.clippingPlanes,ee),J&&v.viewport(q.copy(J)),j.length>0&&Va(j,G,ee),Ce.length>0&&Va(Ce,G,ee),Le.length>0&&Va(Le,G,ee),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ef(A,G,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Oe=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new hn(1,1,{generateMipmaps:!0,type:Oe?Yn:gn,minFilter:Xn,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Ce=w.state.transmissionRenderTarget[J.id],Le=J.viewport||q;Ce.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let Ae=C.getRenderTarget(),Fe=C.getActiveCubeFace(),He=C.getActiveMipmapLevel();C.setRenderTarget(Ce),C.getClearColor(K),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),je&&tt.render(ee);let it=C.toneMapping;C.toneMapping=Wn;let ct=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),ye===!0&&Ue.setGlobalState(C.clippingPlanes,J),Va(A,ee,J),te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let xt=0,kt=G.length;xt<kt;xt++){let At=G[xt],{object:St,geometry:Kt,material:Ie,group:tn}=At;if(Ie.side===cn&&St.layers.test(J.layers)){let ft=Ie.side;Ie.side=ln,Ie.needsUpdate=!0,tf(St,ee,J,Kt,Ie,tn),Ie.side=ft,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Ae,Fe,He),C.setClearColor(K,ne),ct!==void 0&&(J.viewport=ct),C.toneMapping=it}function Va(A,G,ee){let J=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Ce=A.length;j<Ce;j++){let Le=A[j],{object:Ae,geometry:Fe,group:He}=Le,it=Le.material;it.allowOverride===!0&&J!==null&&(it=J),Ae.layers.test(ee.layers)&&tf(Ae,G,ee,Fe,it,He)}}function tf(A,G,ee,J,j,Ce){U!==null&&j.isNodeMaterial&&U.setObject(A,j),A.onBeforeRender(C,G,ee,J,j,Ce),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,G,ee,J,A,Ce),j.transparent===!0&&j.side===cn&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,C.renderBufferDirect(ee,G,J,j,A,Ce),j.side=mn,j.needsUpdate=!0,C.renderBufferDirect(ee,G,J,j,A,Ce),j.side=cn):C.renderBufferDirect(ee,G,J,j,A,Ce),A.onAfterRender(C,G,ee,J,j,Ce)}function Ha(A,G,ee){G.isScene!==!0&&(G=ht);let J=$.get(A),j=w.state.lights,Ce=w.state.shadowsArray,Le=j.state.version,Ae=Me.getParameters(A,j.state,Ce,G,ee,w.state.lightProbeGridArray),Fe=Me.getProgramCacheKey(Ae),He=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=me.get(A.envMap||J.environment,it),J.envMapRotation=J.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",gt),He=new Map,J.programs=He);let ct=He.get(Fe);if(ct!==void 0){if(J.currentProgram===ct&&J.lightsStateVersion===Le)return rf(A,Ae),ct}else Ae.uniforms=Me.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,ee,Ae),A.onBeforeCompile(Ae,C),ct=Me.acquireProgram(Ae,Fe),He.set(Fe,ct),J.uniforms=Ae.uniforms;let Oe=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=Ue.uniform),rf(A,Ae),J.needsLights=Xm(A),J.lightsStateVersion=Le,J.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.sunLights.value=j.state.sun,Oe.sunLightShadows.value=j.state.sunShadow,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.sunShadowMatrix.value=j.state.sunShadowMatrix,Oe.sunShadowCascade.value=j.state.sunShadowCascade,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotLightMatrix.value=j.state.spotLightMatrix,Oe.spotLightMap.value=j.state.spotLightMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=w.state.lightProbeGridArray.length>0,J.currentProgram=ct,J.uniformsList=null,ct}function nf(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Ns.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function rf(A,G){let ee=$.get(A);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Hm(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let ee=0,J=A.length;ee<J;ee++){let j=A[ee];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function Gm(A,G,ee,J,j){G.isScene!==!0&&(G=ht),te.resetTextureUnits();let Ce=G.fog,Le=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,Ae=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ot.workingColorSpace,Fe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,He=me.get(J.envMap||Le,Fe),it=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ct=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,kt=!!ee.morphAttributes.color,At=Wn;J.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=C.toneMapping);let St=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Kt=St!==void 0?St.length:0,Ie=$.get(J),tn=w.state.lights;if(ye===!0&&(ve===!0||A!==z)){let Tt=A===z&&J.id===N;Ue.setState(J,A,Tt)}let ft=!1;J.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==tn.state.version||Ie.outputColorSpace!==Ae||j.isBatchedMesh&&Ie.batching===!1||!j.isBatchedMesh&&Ie.batching===!0||j.isBatchedMesh&&Ie.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ie.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||j.isInstancedMesh&&Ie.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ie.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ie.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ie.instancingMorph===!1&&j.morphTexture!==null||Ie.envMap!==He||J.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ue.numPlanes||Ie.numIntersection!==Ue.numIntersection)||Ie.vertexAlphas!==it||Ie.vertexTangents!==ct||Ie.morphTargets!==Oe||Ie.morphNormals!==xt||Ie.morphColors!==kt||Ie.toneMapping!==At||Ie.morphTargetsCount!==Kt||!!Ie.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ie.__version=J.version);let Rn=Ie.currentProgram;ft===!0&&(Rn=Ha(J,G,j),U&&J.isNodeMaterial&&U.onUpdateProgram(J,Rn,Ie));let Jn=!1,Di=!1,Cr=!1,bt=Rn.getUniforms(),Nt=Ie.uniforms;if(v.useProgram(Rn.program)&&(Jn=!0,Di=!0,Cr=!0),J.id!==N&&(N=J.id,Di=!0),Ie.needsLights){let Tt=Hm(w.state.lightProbeGridArray,j);Ie.lightProbeGrid!==Tt&&(Ie.lightProbeGrid=Tt,Di=!0)}if(Jn||z!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(V,"projectionMatrix",A.projectionMatrix),bt.setValue(V,"viewMatrix",A.matrixWorldInverse);let Fi=bt.map.cameraPosition;Fi!==void 0&&Fi.setValue(V,Ge.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&bt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Di=!0,Cr=!0)}if(Ie.needsLights&&(tn.state.sunShadowMap.length>0&&bt.setValue(V,"sunShadowMap",tn.state.sunShadowMap,te),tn.state.directionalShadowMap.length>0&&bt.setValue(V,"directionalShadowMap",tn.state.directionalShadowMap,te),tn.state.spotShadowMap.length>0&&bt.setValue(V,"spotShadowMap",tn.state.spotShadowMap,te),tn.state.pointShadowMap.length>0&&bt.setValue(V,"pointShadowMap",tn.state.pointShadowMap,te)),j.isSkinnedMesh){bt.setOptional(V,j,"bindMatrix"),bt.setOptional(V,j,"bindMatrixInverse");let Tt=j.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),bt.setValue(V,"boneTexture",Tt.boneTexture,te))}j.isBatchedMesh&&(bt.setOptional(V,j,"batchingTexture"),bt.setValue(V,"batchingTexture",j._matricesTexture,te),bt.setOptional(V,j,"batchingIdTexture"),bt.setValue(V,"batchingIdTexture",j._indirectTexture,te),bt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(V,"batchingColorTexture",j._colorsTexture,te));let Ui=ee.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&W.update(j,ee,Rn),(Di||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,bt.setValue(V,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(Nt.envMapIntensity.value=G.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=mM()),Di){if(bt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&Wm(Nt,Cr),Ce&&J.fog===!0&&Ne.refreshFogUniforms(Nt,Ce),Ne.refreshMaterialUniforms(Nt,J,Y,B,w.state.transmissionRenderTarget[A.id]),Ie.needsLights&&Ie.lightProbeGrid){let Tt=Ie.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}Ns.upload(V,nf(Ie),Nt,te)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ns.upload(V,nf(Ie),Nt,te),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&bt.setValue(V,"center",j.center),bt.setValue(V,"modelViewMatrix",j.modelViewMatrix),bt.setValue(V,"normalMatrix",j.normalMatrix),bt.setValue(V,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Tt=J.uniformsGroups;for(let Fi=0,Ir=Tt.length;Fi<Ir;Fi++){let af=Tt[Fi];he.update(af,Rn),he.bind(af,Rn)}}return Rn}function Wm(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Xm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,G,ee){let J=$.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=G,$.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let ee=$.get(A);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ee=0){X=A,P=G,k=ee;let J=null,j=!1,Ce=!1;if(A){let Ae=$.get(A);if(Ae.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),q.copy(A.viewport),de.copy(A.scissor),oe=A.scissorTest,v.viewport(q),v.scissor(de),v.setScissorTest(oe),N=-1;return}else if(Ae.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Ae.__hasExternalTextures)te.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ce=!0);let He=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[G])?J=He[G][ee]:J=He[G],j=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?J=$.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?J=He[ee]:J=He,q.copy(A.viewport),de.copy(A.scissor),oe=A.scissorTest}else q.copy(ie).multiplyScalar(Y).floor(),de.copy(le).multiplyScalar(Y).floor(),oe=ge;if(ee!==0&&(J=D),v.bindFramebuffer(V.FRAMEBUFFER,J)&&v.drawBuffers(A,J),v.viewport(q),v.scissor(de),v.setScissorTest(oe),j){let Ae=$.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,ee)}else if(Ce){let Ae=G;for(let Fe=0;Fe<A.textures.length;Fe++){let He=$.get(A.textures[Fe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Fe,He.__webglTexture,ee,Ae)}}else if(A!==null&&ee!==0){let Ae=$.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,ee)}N=-1};function sf(A){let G=$.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=L.textureFormatReadable(A.format),G.__typeReadable=L.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,ee,J,j,Ce,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){v.bindFramebuffer(V.FRAMEBUFFER,Fe);try{let He=A.textures[Ae],it=He.format,ct=He.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let Oe=sf(He);if(Oe.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-J&&ee>=0&&ee<=A.height-j&&V.readPixels(G,ee,J,j,Ee.convert(it),Ee.convert(ct),Ce)}finally{let He=X!==null?$.get(X).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,G,ee,J,j,Ce,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(G>=0&&G<=A.width-J&&ee>=0&&ee<=A.height-j){v.bindFramebuffer(V.FRAMEBUFFER,Fe);let He=A.textures[Ae],it=He.format,ct=He.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let Oe=sf(He);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(G,ee,J,j,Ee.convert(it),Ee.convert(ct),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let kt=X!==null?$.get(X).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,kt);let At=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yp(V,At,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(xt),V.deleteSync(At),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,ee=0){let J=Math.pow(2,-ee),j=Math.floor(A.image.width*J),Ce=Math.floor(A.image.height*J),Le=G!==null?G.x:0,Ae=G!==null?G.y:0;te.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ee,0,0,Le,Ae,j,Ce),v.unbindTexture()},this.copyTextureToTexture=function(A,G,ee=null,J=null,j=0,Ce=0){let Le,Ae,Fe,He,it,ct,Oe,xt,kt,At=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(ee!==null)Le=ee.max.x-ee.min.x,Ae=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,it=ee.min.y,ct=ee.isBox3?ee.min.z:0;else{let Nt=Math.pow(2,-j);Le=Math.floor(At.width*Nt),Ae=Math.floor(At.height*Nt),A.isDataArrayTexture?Fe=At.depth:A.isData3DTexture?Fe=Math.floor(At.depth*Nt):Fe=1,He=0,it=0,ct=0}J!==null?(Oe=J.x,xt=J.y,kt=J.z):(Oe=0,xt=0,kt=0);let St=Ee.convert(G.format),Kt=Ee.convert(G.type),Ie;G.isData3DTexture?(te.setTexture3D(G,0),Ie=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(te.setTexture2DArray(G,0),Ie=V.TEXTURE_2D_ARRAY):(te.setTexture2D(G,0),Ie=V.TEXTURE_2D),v.activeTexture(V.TEXTURE0),v.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let tn=v.getParameter(V.UNPACK_ROW_LENGTH),ft=v.getParameter(V.UNPACK_IMAGE_HEIGHT),Rn=v.getParameter(V.UNPACK_SKIP_PIXELS),Jn=v.getParameter(V.UNPACK_SKIP_ROWS),Di=v.getParameter(V.UNPACK_SKIP_IMAGES);v.pixelStorei(V.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(V.UNPACK_SKIP_PIXELS,He),v.pixelStorei(V.UNPACK_SKIP_ROWS,it),v.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);let Cr=A.isDataArrayTexture||A.isData3DTexture,bt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let Nt=$.get(A),Ui=$.get(G),Tt=$.get(Nt.__renderTarget),Fi=$.get(Ui.__renderTarget);v.bindFramebuffer(V.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ir=0;Ir<Fe;Ir++)Cr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(A).__webglTexture,j,ct+Ir),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(G).__webglTexture,Ce,kt+Ir)),V.blitFramebuffer(He,it,Le,Ae,Oe,xt,Le,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||$.has(A)){let Nt=$.get(A),Ui=$.get(G);v.bindFramebuffer(V.READ_FRAMEBUFFER,I),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let Tt=0;Tt<Fe;Tt++)Cr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nt.__webglTexture,j,ct+Tt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,j),bt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ui.__webglTexture,Ce,kt+Tt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ui.__webglTexture,Ce),j!==0?V.blitFramebuffer(He,it,Le,Ae,Oe,xt,Le,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):bt?V.copyTexSubImage3D(Ie,Ce,Oe,xt,kt+Tt,He,it,Le,Ae):V.copyTexSubImage2D(Ie,Ce,Oe,xt,He,it,Le,Ae);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ie,Ce,Oe,xt,kt,Le,Ae,Fe,St,Kt,At.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ie,Ce,Oe,xt,kt,Le,Ae,Fe,St,At.data):V.texSubImage3D(Ie,Ce,Oe,xt,kt,Le,Ae,Fe,St,Kt,At):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,Oe,xt,Le,Ae,St,Kt,At.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,Oe,xt,At.width,At.height,St,At.data):V.texSubImage2D(V.TEXTURE_2D,Ce,Oe,xt,Le,Ae,St,Kt,At);v.pixelStorei(V.UNPACK_ROW_LENGTH,tn),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(V.UNPACK_SKIP_PIXELS,Rn),v.pixelStorei(V.UNPACK_SKIP_ROWS,Jn),v.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),Ce===0&&G.generateMipmaps&&V.generateMipmap(Ie),v.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){P=0,k=0,X=null,v.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function Qp(i,e,t,n,r){let s=r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(s)||s.length>8)throw new Error("Invalid scene profiles");let a={},o=null,c=null,l=[],u=performance.now(),h=null,f=!1,d=null,g=document.createElement("div");g.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(g);function _(){return(p()?.contacts||[]).map(R=>{let U=i.getObjectByName(R.bone);if(!U)return null;let D=m(U).project(e),I=t.getBoundingClientRect();return{id:R.id,label:/Foot/.test(R.bone)?R.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(R.bone)?R.bone.includes("-L-")?"\u5DE6\u624B":"\u53F3\u624B":/Pelvis/.test(R.bone)?"\u9AA8\u76C6":"\u5934\u90E8",x:I.left+(D.x+1)*I.width/2,y:I.top+(1-D.y)*I.height/2,supportedIK:R.kind==="ik"}}).filter(Boolean)}let m=R=>R.getWorldPosition(new O),p=()=>s.find(R=>R.id===(a.scene?.()||"main"));function M(){for(let R of l)R.bone.quaternion.angleTo(R.applied)<1e-6&&R.bone.quaternion.copy(R.base);l=[]}function E(R){if(!R?.alphaVerified)return null;for(let U of p()?.contacts||[]){if(U.kind!=="ik")continue;let D=i.getObjectByName(U.ikBone||U.bone);if(!D)continue;let I=D.worldToLocal(new O().fromArray(R.point)),F=U.sizeCm;if(Math.abs(I.x)<F.X*.01&&Math.abs(I.y)<F.Z*.01&&Math.abs(I.z)<F.Y*.01)return{contact:U,bone:D}}return null}function y(R=!1){if(!o)return;let U=o;o=null,c={...U,weight:1},t.hasPointerCapture(U.pointerId)&&t.releasePointerCapture(U.pointerId),R||a.event?.({type:"touch",region:"leg",label:U.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09":"\u53F3\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09",gesture:"stroke",source:"original-scene-collision",confidence:1,completed:!0})}function b(R){if(o||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;let U=E(n(R.clientX,R.clientY));if(d={contact:U?.contact.id},!U)return;let D=U.bone,I=D.parent,F=I?.parent;d.chain=[D,I,F].map(P=>({name:P?.name,isBone:P?.isBone})),!(!F?.isBone||!I?.isBone)&&(R.stopImmediatePropagation(),a.beforeDrag?.(),c=null,o={...U,foot:D,calf:I,thigh:F,pointerId:R.pointerId,x:R.clientX,y:R.clientY,dx:0,dy:0,offset:new O,triggered:!1},t.setPointerCapture(R.pointerId),U.contact.voiceId&&a.voice?.(U.contact.voiceId))}function w(R,U,D){return D?.endsWith("::Less")?R<U:D?.endsWith("::Greater")?R>U:null}function S(R){if(o?.pointerId!==R.pointerId)return;R.stopImmediatePropagation();let U=o,D=t.getBoundingClientRect(),I=U.contact.drag,F=(R.clientX-U.x)/Math.max(1,D.width)*(I.ScreenPercentToWorld?.X||0),P=(R.clientY-U.y)/Math.max(1,D.height)*(I.ScreenPercentToWorld?.Y||0);U.dx=Ve.clamp(F,-(I.WorldSpaceLmitLeftUp?.X||0),I.WorldSpaceLimit?.X||0),U.dy=Ve.clamp(P,-(I.WorldSpaceLmitLeftUp?.Y||0),I.WorldSpaceLimit?.Y||0);let k=new O().setFromMatrixColumn(e.matrixWorld,0),X=new O().setFromMatrixColumn(e.matrixWorld,1);U.offset.copy(k).multiplyScalar(U.dx*.01).addScaledVector(X,-U.dy*.01);for(let N of U.contact.thresholds||[]){let z=[w(U.dx,N.limit.X,N.xCompare),w(U.dy,N.limit.Y,N.yCompare)].filter(q=>q!==null);if(!U.triggered&&z.length&&z.every(Boolean)){U.triggered=!0,h={sampleId:N.sampleId,dx:U.dx,dy:U.dy,source:"serialized-drag-threshold"},y(),a.reaction?.(N.sampleId);break}}}function x(R){o?.pointerId===R.pointerId&&(R.stopImmediatePropagation(),y())}function T(){y(!0),c=null,M()}function C(){let R=performance.now(),U=Math.min(.05,(R-u)/1e3);if(u=R,f){g.replaceChildren();for(let de of _()){let oe=document.createElement("span");oe.textContent=de.label+(de.supportedIK?" \u2195":""),oe.style.cssText=`position:absolute;left:${de.x}px;top:${de.y}px;transform:translate(-50%,-50%);border:2px solid ${de.supportedIK?"#5ef0a0":"#ddd"};border-radius:20px;padding:6px;background:#222a;color:white;font-size:11px`,g.append(oe)}}let D=o||c;if(!D)return;if(!o&&(D.weight=Math.max(0,D.weight-U/Math.max(.1,D.contact.drag.DragRecoverTime||.25)),D.weight===0)){c=null;return}i.updateWorldMatrix(!0,!0);let I=m(D.thigh),F=m(D.calf),P=m(D.foot),k=P.clone().sub(I).normalize();if(F.clone().sub(I).addScaledVector(k,-F.clone().sub(I).dot(k)).length()<1e-5)return;let N=P.clone().addScaledVector(D.offset,o?1:D.weight),z=D.foot.getWorldQuaternion(new De),q=[D.thigh,D.calf,D.foot].map(de=>({bone:de,base:de.quaternion.clone()}));try{let de=(K,ne,ue)=>{let B=K.parent;B.updateWorldMatrix(!0,!1);let Y=K.position,fe=B.worldToLocal(m(D.foot)).sub(Y),xe=B.worldToLocal(N.clone()).sub(Y);if(Math.min(fe.length(),xe.length())<1e-6)return;let ie=K.quaternion.clone().premultiply(new De().setFromUnitVectors(fe.normalize(),xe.normalize())).normalize(),le=ne.angleTo(ie);K.quaternion.copy(ne).slerp(ie,Math.min(1,ue/Math.max(le,1e-8))),i.updateWorldMatrix(!0,!0)};for(let K=0;K<12&&(de(D.calf,q[1].base,Math.PI/3),de(D.thigh,q[0].base,Math.PI/4),!(m(D.foot).distanceTo(N)<.001));K++);D.foot.quaternion.copy(D.foot.parent.getWorldQuaternion(new De).invert().multiply(z));for(let K of q)l.push({...K,applied:K.bone.quaternion.clone()});i.updateWorldMatrix(!0,!0);let oe=new Set;i.traverse(K=>{K.isSkinnedMesh&&!oe.has(K.skeleton)&&(K.skeleton.update(),oe.add(K.skeleton))})}catch(de){d={...d,error:de.message};for(let oe of q)oe.bone.quaternion.copy(oe.base);T()}}for(let[R,U]of[["pointerdown",b],["pointermove",S],["pointerup",x],["pointercancel",T]])t.addEventListener(R,U);return{configure:R=>a=R,hitTest:(R,U)=>E(n(R,U))?.contact.id,restore:M,tick:C,cancel:T,profile:p,points:_,togglePoints(){return f=!f,f||g.replaceChildren(),_().length},headReaction:()=>p()?.contacts.find(R=>/hari|Head/.test(R.bone))?.thresholds?.[0]?.sampleId,snapshot:()=>({scene:p()?.id,lastPick:d,active:!!o,offset:o?[o.dx,o.dy]:null,recovering:!!c,lastEvent:h}),dispose(){T(),g.remove();for(let[R,U]of[["pointerdown",b],["pointermove",S],["pointerup",x],["pointercancel",T]])t.removeEventListener(R,U)}}}var em={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},Ql=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=em[e]||em.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function tm(i,e,t){let n=new Je,r=new Je,s=0,a=0,o=!1,c=0,l=0,u=!1,h=!0,f=!1,d=0,g=[],_=new Map,m={value:Array.from({length:4},()=>new O)},p={value:Array.from({length:4},()=>new O)},M={value:[.05,.05,.05,.05]},E=new O,y=null;i.traverse(F=>{F.isMesh&&F.userData.snowbreakSurfaceKey&&_.set(F.userData.snowbreakSurfaceKey,F)});function b(F){let P=F.hit,k=_.get(P.mesh);if(!k||!P.barycentric)return new O().fromArray(P.point);let X=k.geometry.index,N=new O;for(let z=0;z<3;z++){let q=X?X.getX(P.triangle*3+z):P.triangle*3+z;N.addScaledVector(k.getVertexPosition(q,new O),P.barycentric[z])}return k.localToWorld(N)}let w=[],S=new Map;i.traverse(F=>{if(F.isBone&&/^EyeJoint_[LR]$/.test(F.name)&&w.push(F),!F.isSkinnedMesh||!["skin","cloth-or-room"].includes(F.material?.userData.profile))return;let P=F.material,k=P.onBeforeCompile,X=P.customProgramCacheKey.bind(P);P.onBeforeCompile=N=>{k(N),Object.assign(N.uniforms,{senseCenters:m,senseOffsets:p,senseRadii:M}),N.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},P.customProgramCacheKey=()=>X()+"-surface-spring-v2",P.needsUpdate=!0});function x(F,P,k="camera"){k==="camera"&&(f||performance.now()<d)||!Number.isFinite(F)||!Number.isFinite(P)||(n.set(Ve.clamp(F,-1,1),Ve.clamp(P,-1,1)),s=performance.now()+1600)}function T(F){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let P=t.getBoundingClientRect();d=performance.now()+1600,x((F.clientX-P.left)/P.width*2-1,1-(F.clientY-P.top)/P.height*2,"touch")}function C(F,P){if(!h||!F?.alphaVerified||!Array.isArray(F.point)||!_.has(F.mesh))return!1;y?.spring.release();let k=P?.id||F.anatomy?.id||"body",X=g.find(N=>!N.spring.pressed&&N.region===k&&b(N).distanceTo(new O().fromArray(F.point))<.04);return X?(y=X,y.hit=F):(g.length===4&&g.shift(),y={hit:F,region:k,spring:new Ql(k),direction:e.getWorldDirection(new O)},g.push(y)),y.spring.press(),o=u=!0,!0}let R=F=>{f=!0,T(F)},U=()=>{o=!1,f=!1,y?.spring.release(),y=null,d=performance.now()+1e3};t.addEventListener("pointerdown",R),t.addEventListener("pointermove",T),t.addEventListener("pointerup",U),t.addEventListener("pointercancel",U);function D(F=performance.now()){let P=Math.min(.04,Math.max(0,(F-a)/1e3));a=F,F>s&&n.set(0,0),r.lerp(n,1-Math.exp(-P*12));let k=new O().setFromMatrixColumn(e.matrixWorld,1),X=new O().setFromMatrixColumn(e.matrixWorld,0);for(let z of w){let q=z.quaternion.clone(),de=new Be().extractRotation(z.parent.matrixWorld),oe=new Be().makeRotationFromQuaternion(new De().setFromAxisAngle(k,r.x*.07).multiply(new De().setFromAxisAngle(X,-r.y*.05))),K=de.clone().invert().multiply(oe).multiply(de);z.quaternion.premultiply(new De().setFromRotationMatrix(K)).normalize(),z.updateWorldMatrix(!1,!0),S.set(z,{base:q,applied:z.quaternion.clone()})}for(let z=g.length-1;z>=0;z--)g[z].spring.step(P),g[z].spring.active||g.splice(z,1);l=0,c=0,u=g.length>0;for(let z=0;z<4;z++){let q=g[z];p.value[z].set(0,0,0),q&&(m.value[z].copy(b(q)),M.value[z]=q.spring.profile.radius,p.value[z].copy(q.direction).multiplyScalar(q.spring.offset),Math.abs(q.spring.offset)>Math.abs(l)&&(l=q.spring.offset),c+=Math.abs(q.spring.velocity))}let N=new Set;w.length&&i.traverse(z=>{z.isSkinnedMesh&&!N.has(z.skeleton)&&(z.skeleton.update(),N.add(z.skeleton))})}function I(){for(let[F,P]of S)F.quaternion.angleTo(P.applied)<1e-6&&F.quaternion.copy(P.base);S.clear()}return{gaze:x,touch:C,tick:D,restore:I,reset(){I(),o=u=f=!1,d=0,l=c=0,g.length=0,y=null;for(let F of p.value)F.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:w.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(F=>({region:F.region,offset:F.spring.offset,velocity:F.spring.velocity,pressed:F.spring.pressed,center:b(F).toArray()}))}),dispose(){for(let[F,P]of[["pointerdown",R],["pointermove",T],["pointerup",U],["pointercancel",U]])t.removeEventListener(F,P)}}}function fh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=w=>w.getWorldPosition(new O);i.updateWorldMatrix(!0,!0);for(let w of[i,e,t]){let S=w.getWorldScale(new O);if(Math.min(S.x,S.y,S.z)<=0||Math.max(S.x,S.y,S.z)-Math.min(S.x,S.y,S.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),h=c.distanceTo(l),f=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,f].every(Number.isFinite)||Math.min(h,f)<1e-6)throw new Error("Invalid arm geometry");let d=n.clone().sub(c),g=d.length();if(g<1e-7)throw new Error("Arm target at shoulder");d.normalize();let _=w=>Math.sqrt(Math.max(0,h*h+f*f+2*h*f*Math.cos(Ve.degToRad(w)))),m=Ve.clamp(g,Math.max(Math.abs(h-f)+1e-6,_(a)),Math.min(h+f-1e-6,_(s))),p=r.clone().sub(c).addScaledVector(d,-r.clone().sub(c).dot(d));if(p.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");p.normalize();let M=(h*h-f*f+m*m)/(2*m),E=c.clone().addScaledVector(d,M).addScaledVector(p,Math.sqrt(Math.max(0,h*h-M*M))),y=c.clone().addScaledVector(d,m);function b(w,S,x){let T=o(w),C=o(S).sub(T).normalize(),R=x.clone().sub(T).normalize(),U=w.getWorldQuaternion(new De);U.premultiply(new De().setFromUnitVectors(C,R)),w.quaternion.copy(w.parent.getWorldQuaternion(new De).invert().multiply(U)).normalize(),w.updateWorldMatrix(!0,!0)}return b(i,e,E),b(e,t,y),{requested:n.toArray(),reachable:y.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(y),elbowFlex:Ve.radToDeg(Math.acos(Ve.clamp((m*m-h*h-f*f)/(2*h*f),-1,1)))}}var Sr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function dh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new O);function h(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function f(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),_=u(r),m=u(s),p=u(a),M=g.distanceTo(_)+_.distanceTo(m),E=g.clone().sub(p);if(E.y=0,E.length()<1e-5)throw new Error("Ambiguous shoulder direction");E.normalize();let y=p.clone().addScaledVector(E,M*.55);y.y+=M*.15;let b=g.clone().addScaledVector(E,M);b.y-=M*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new De),start:m,target:y,pole:b},l=null}function d(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let _=Ve.clamp(g,0,1),m=_<.3?_/.3:_>.7?(1-_)/.3:1,p=m*m*(3-2*m);if(p<1e-6)return;l=fh(n,r,s,c.target,c.pole,Sr);let M={},E=[];function y(b,w,S,x,T){let C=b.quaternion.clone(),R=w.angleTo(C),U=Ve.degToRad(S);R>U&&E.push(T),b.quaternion.copy(w).slerp(C,x*Math.min(1,U/Math.max(R,1e-10))).normalize(),M[T]=Ve.radToDeg(w.angleTo(b.quaternion))}y(n,c.upper,Sr.upper,p,"upper"),y(r,c.lower,Sr.lower,p,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new De).invert().multiply(c.wristWorld)),y(s,c.wrist,Sr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:M,limited:E,weight:p}}return{begin:f,apply:d,restore:h,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Sr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function nm(i,e,t=()=>0){let n={};for(let[P,k]of[["left","L"],["right","R"]]){let X=i.getObjectByName(`Bip001-${k}-UpperArm`),N=i.getObjectByName(`Bip001-${k}-Forearm`),z=i.getObjectByName(`Bip001-${k}-Hand`);X?.isBone&&N?.parent===X&&z?.parent===N&&(n[P]={upper:X,lower:N,hand:z})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(P=>{P.isSkinnedMesh&&a.add(P.skeleton)}),i.traverse(P=>{if(P.isMesh&&P.morphTargetInfluences)for(let k of["L_Eye_close","R_Eye_close"]){let X=P.morphTargetDictionary?.[k];Number.isInteger(X)&&s.push({mesh:P,index:X,name:k})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(P=>P.name==="L_Eye_close")&&s.some(P=>P.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,h=0,f=[],d=[];i.traverse(P=>{if(P.isMesh&&P.morphTargetDictionary&&P.morphTargetInfluences){let k=P.morphTargetDictionary.Viseme_A;Number.isInteger(k)&&d.push({mesh:P,index:k})}});function g(P,k){if(!o.includes(P)||!P.startsWith("gesture_")||!Number.isFinite(k?.duration)||k.duration<1||k.duration>8||!Array.isArray(k.poses)||k.poses.length<2||k.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let X=-1;for(let N of k.poses){if(N.smile!==void 0&&(!Number.isFinite(N.smile)||N.smile<0||N.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(N.time)||N.time<=X||N.time<0||N.time>k.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");X=N.time;for(let[z,q]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(N[z]&&(!Array.isArray(N[z])||N[z].length!==3||N[z].some((de,oe)=>!Number.isFinite(de)||Math.abs(de)>q[oe])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(k.poses[0].time!==0||X!==k.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:P,plan:k,start:performance.now()},b="\u6B63\u5728\u6267\u884C\uFF1A"+P}function _(P){if(!l)return null;let{plan:k}=l,X=(P-l.start)/1e3;if(X>=k.duration)return b="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let N=Math.max(0,k.poses.findIndex(ne=>ne.time>=X)-1),z=k.poses[N],q=k.poses[N+1],de=Ve.clamp((X-z.time)/(q.time-z.time),0,1),oe=de*de*(3-2*de),K={};for(let ne of["head","torso","leftHand","rightHand"])(z[ne]||q[ne])&&(K[ne]=[0,1,2].map(ue=>(z[ne]?.[ue]||0)+((q[ne]?.[ue]||0)-(z[ne]?.[ue]||0))*oe));return K.smile=(z.smile||0)+((q.smile||0)-(z.smile||0))*oe,K}let m=new Set,p=!1,M=0,E=0,y=performance.now(),b="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",w={left:0,right:0},S=0,x=[],T=[],C={left:!1,right:!1};function R(){for(let P of x)P.bone.quaternion.angleTo(P.applied)<1e-6&&P.bone.quaternion.copy(P.base);x.length=0;for(let P of[...T,...f])Math.abs(P.mesh.morphTargetInfluences[P.index]-P.applied)<1e-6&&(P.mesh.morphTargetInfluences[P.index]=P.base);T.length=f.length=0}function U(P){if(!o.includes(P))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,P==="raise_left_hand"&&m.add("left"),P==="raise_right_hand"&&m.add("right"),P==="raise_both_hands"&&(m=new Set(["left","right"])),P==="lower_hands"&&m.clear(),P==="close_eyes"&&(p=!0),P==="open_eyes"&&(p=!1),P==="turn_left"&&(E+=90),P==="turn_right"&&(E-=90),P==="turn_back"&&(E=180-t()),P==="face_front"&&(E=-t()),b="\u5DF2\u63A5\u6536\uFF1A"+P,I()}function D(){let P=performance.now(),k=Math.min(.25,(P-y)/1e3);y=P;let X=1-Math.exp(-9*k),N=_(P);if(N){i.updateWorldMatrix(!0,!0);let K=ie=>ie.getWorldPosition(new O),ne=i.getObjectByName("Bip001-Pelvis"),ue=r&&ne?K(r).sub(K(ne)).normalize():new O(0,1,0),B=new O(0,0,1).applyQuaternion(i.getWorldQuaternion(new De)),Y=i.getObjectByName("EyeJoint_L"),fe=i.getObjectByName("EyeJoint_R");if(r&&Y&&fe){let ie=K(Y).add(K(fe)).multiplyScalar(.5).sub(K(r));ie.addScaledVector(ue,-ie.dot(ue)),ie.length()>1e-5&&(B=ie.normalize())}let xe=new O().crossVectors(ue,B).normalize();B.crossVectors(xe,ue).normalize();for(let[ie,le]of[[r,N.head],[c,N.torso]])if(ie&&le){let ge=ie.quaternion.clone(),ce=ie.parent.getWorldQuaternion(new De),ye=new De().setFromAxisAngle(ue,Ve.degToRad(-le[0])).multiply(new De().setFromAxisAngle(xe,Ve.degToRad(le[1]))).multiply(new De().setFromAxisAngle(B,Ve.degToRad(le[2])));ie.quaternion.premultiply(ce.clone().invert().multiply(ye).multiply(ce)).normalize(),x.push({bone:ie,base:ge,applied:ie.quaternion.clone()}),ie.updateWorldMatrix(!1,!0)}}M+=(E-M)*X,e(M),C={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let z=new O(0,1,0),q=i.getObjectByName("EyeJoint_L"),de=i.getObjectByName("EyeJoint_R"),oe=new O(0,0,1).applyQuaternion(i.getWorldQuaternion(new De));r&&q&&de&&(oe.copy(q.getWorldPosition(new O).add(de.getWorldPosition(new O)).multiplyScalar(.5).sub(r.getWorldPosition(new O))),oe.y=0,oe.length()<1e-5&&oe.set(0,0,1),oe.normalize());for(let K of["left","right"]){w[K]+=((m.has(K)?1:0)-w[K])*X;let ne=N?.[K+"Hand"],ue=ne?Ve.smoothstep(Math.hypot(...ne),0,.25):w[K],B=n[K];if(!B||!r||ue<.001)continue;let Y=pe=>pe.getWorldPosition(new O),fe=Y(r),xe=Y(B.upper),ie=xe.distanceTo(Y(B.lower))+Y(B.lower).distanceTo(Y(B.hand)),le=xe.clone().sub(fe);if(le.y=0,le.length()<1e-6)continue;le.normalize();let ge=fe.clone().addScaledVector(le,ie*.45);ge.y+=ie*.18,ne&&(ge.copy(Y(B.hand)).addScaledVector(le,Math.abs(ne[0])*ie),ge.y+=ne[1]*ie,ge.addScaledVector(oe,ne[2]*ie));let ce=xe.clone().addScaledVector(oe,ie*.7).addScaledVector(le,ie*.2).addScaledVector(z,-ie*.2),ye=B.hand.getWorldQuaternion(new De),ve=[B.upper,B.lower,B.hand].map(pe=>({bone:pe,base:pe.quaternion.clone()}));try{fh(B.upper,B.lower,B.hand,ge,ce,Sr);for(let[et,$e]of[B.upper,B.lower].entries()){let L=ve[et].base,v=$e.quaternion.clone(),H=L.angleTo(v),$=Ve.degToRad([100,140][et]);$e.quaternion.copy(L).slerp(v,ue*Math.min(1,$/Math.max(H,1e-8))).normalize(),$e.updateWorldMatrix(!1,!0)}let pe=ye.clone(),Ge=et=>i.getObjectByName(`Bip001-${K==="left"?"L":"R"}-Finger${et}`),Ke=Ge(1),ht=Ge(2),je=Ge(4);if(Ke&&ht&&je){let et=Y(Ke).sub(Y(je)).normalize(),$e=Y(ht).sub(Y(B.hand));$e.addScaledVector(et,-$e.dot(et)).normalize();let L=new Be().makeBasis(et,$e,new O().crossVectors(et,$e).normalize()),v=l?.id==="gesture_open_arms"?le.clone():z.clone(),H=oe.clone().multiplyScalar(K==="left"?1:-1),$=new O().crossVectors(v,H).normalize();v.crossVectors(H,$).normalize();let te=new Be().makeBasis($,v,new O().crossVectors($,v).normalize());pe=new De().setFromRotationMatrix(te.multiply(L.invert())).multiply(B.hand.getWorldQuaternion(new De));let me=pe.clone().multiply(B.hand.getWorldQuaternion(new De).invert()),_e=Y(B.hand).sub(Y(B.lower)).normalize(),Q=new O(me.x,me.y,me.z).dot(_e),se=Ve.clamp(2*Math.atan2(Q,me.w),-Math.PI/2,Math.PI/2)*.6*ue;B.lower.quaternion.multiply(new De().setFromAxisAngle(B.hand.position.clone().normalize(),se)).normalize(),B.lower.updateWorldMatrix(!1,!0)}let dt=B.hand.parent.getWorldQuaternion(new De).invert().multiply(pe),V=ve[2].base.angleTo(dt);B.hand.quaternion.copy(ve[2].base).slerp(dt,ue*Math.min(1,Ve.degToRad(90)/Math.max(V,1e-8))).normalize(),B.hand.updateWorldMatrix(!1,!0);for(let et of ve)x.push({...et,applied:et.bone.quaternion.clone()});C[K]=Y(B.hand).y>xe.y+ie*.25}catch(pe){for(let Ge of ve)Ge.bone.quaternion.copy(Ge.base);b="\u4E3E\u624B\u5931\u8D25\uFF1A"+pe.message,m.delete(K)}}S+=((p?1:0)-S)*X;for(let K of s){let ne=K.mesh.morphTargetInfluences[K.index]||0,ue=Ve.lerp(ne,p?1:0,S);T.push({...K,base:ne,applied:ue}),K.mesh.morphTargetInfluences[K.index]=ue}N?.smile&&i.traverse(K=>{if(!(!K.isMesh||!K.morphTargetInfluences))for(let ne of["L_Eye_smile","R_Eye_smile"]){let ue=K.morphTargetDictionary?.[ne];if(!Number.isInteger(ue))continue;let B=K.morphTargetInfluences[ue]||0,Y=Math.max(B,Math.min(.5,N.smile));f.push({mesh:K,index:ue,base:B,applied:Y}),K.morphTargetInfluences[ue]=Y}}),h+=(u-h)*(1-Math.exp(-k*(u>h?24:16)));for(let K of d){let ne=K.mesh.morphTargetInfluences[K.index]||0,ue=Math.max(ne,h*.85);f.push({...K,base:ne,applied:ue}),K.mesh.morphTargetInfluences[K.index]=ue}i.updateWorldMatrix(!0,!0);for(let K of a)K.update()}function I(){i.updateWorldMatrix(!0,!0);for(let X of["left","right"]){let N=n[X];if(!N)continue;let z=N.upper.getWorldPosition(new O),q=N.lower.getWorldPosition(new O),de=N.hand.getWorldPosition(new O);C[X]=de.y>z.y+(z.distanceTo(q)+q.distanceTo(de))*.25}let P=s.length?s.reduce((X,N)=>X+(N.mesh.morphTargetInfluences[N.index]||0),0)/s.length:0,k=M+t();return{available:[...o],eyes:s.length?P>.95?"\u5DF2\u95ED\u5408":P<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...C},hands:C.left&&C.right?"\u53CC\u624B\u62AC\u8D77":C.left?"\u5DE6\u624B\u62AC\u8D77":C.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(M-E)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((k%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(k%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(k)}\u5EA6`,yaw:k,lastResult:b}}function F(){R(),u=h=0,l=null,m.clear(),p=!1,w.left=w.right=S=0,M=E=0,e(0),b="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:U,playGesture:g,tick:D,restore:R,snapshot:I,reset:F,setSpeechLevel:P=>{u=Number.isFinite(P)?Ve.clamp(P,0,1):0},speechState:()=>({level:h,targets:d.length,weights:d.map(P=>P.mesh.morphTargetInfluences[P.index])}),releaseHands:()=>{m.clear(),l=null}}}function im(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let f=0;f<3;f++)u[f]=n[f]+(.2*o[f]+.6*c[f]+.2*l[f]-n[f])*t;let h=new De().fromArray(o,3).slerp(new De().fromArray(c,3),.75).slerp(new De().fromArray(l,3),.2);return new De().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function rm(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i),c={color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?mn:cn},l;return r?l=new jt(c):(l=new Qt({...c,normalMap:t||null,normalScale:new Je(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},l.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(l.polygonOffset=!0,l.polygonOffsetFactor=-.5,l.polygonOffsetUnits=-.5),l.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",l}function sm(i,e){e.outputColorSpace=It,e.toneMapping=ba,e.toneMappingExposure=1.05;let t=new ma(16774379,10596036,1.4);i.add(t);let n=new Ii(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=il;let r=new Ii(14674687,1);r.position.set(3,2,4),i.add(r);let s=new Ii(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new dr;a.background=new Ye(.18,.18,.2);let o=new mr(1,1),c=[];for(let[g,_,m,p]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let M=new jt({color:m,side:cn});M.color.multiplyScalar(p),c.push(M);let E=new Ot(o,M);E.position.fromArray(g),E.scale.set(_[0],_[1],1),E.lookAt(0,1,0),a.add(E)}let l=new Ds(e),u=l.fromScene(a,.08,.1,30);l.dispose(),o.dispose();for(let g of c)g.dispose();i.environment=u.texture;let h={exposure:1.05,warmth:.5,reflection:1,shadows:!0};function f(g){let _={...h,...g};if(![_.exposure,_.warmth,_.reflection].every(Number.isFinite)||typeof _.shadows!="boolean"||_.exposure<.65||_.exposure>1.45||_.warmth<0||_.warmth>1||_.reflection<0||_.reflection>1.5)throw new Error("Invalid lighting settings");return h={exposure:_.exposure,warmth:_.warmth,reflection:_.reflection,shadows:_.shadows},e.toneMappingExposure=h.exposure,e.shadowMap.enabled=h.shadows,n.color.set(15331839).lerp(new Ye(16770247),h.warmth),i.environmentIntensity=h.reflection,{...h}}function d(g){let _=g.getCenter(new O),m=Math.max(1.5,g.getSize(new O).length()*.7);n.target.position.copy(_),n.position.copy(_).add(new O(-2,4,5).normalize().multiplyScalar(m*3)),Object.assign(n.shadow.camera,{left:-m,right:m,top:m,bottom:-m,near:.1,far:m*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:f,frame:d,snapshot:()=>({...h,environment:!0,shadowMapSize:1024}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let g of[t,n,r,s])g.removeFromParent()}}}function am(i,e,t,n){if(!t)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};if(!["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(t.schema)||t.sourceCharacter!=="Yuki"||t.targetCharacter!=="Enya"||!Array.isArray(t.clips)||t.clips.length>8)throw new Error("Invalid learned motion catalog");let r=t.schema.endsWith("/3")&&t.stance==="standing";if(t.schema.endsWith("/3")&&(!r||n!=="standing"))throw new Error("Standing motion requires standing source");let s=S=>{let x=[];if(i.traverse(T=>{T.isBone&&T.name===S&&x.push(T)}),x.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+S);return x[0]},a=s("Bip001-Head"),o=s("Bip001-Spine3"),c={};for(let[S,x]of[["left","L"],["right","R"]]){let T=s(`Bip001-${x}-UpperArm`),C=s(`Bip001-${x}-Forearm`),R=s(`Bip001-${x}-Hand`);if(C.parent!==T||R.parent!==C)throw new Error("Learned arm binding mismatch");c[S]={upper:T,lower:C,hand:R}}let l=S=>S.getWorldPosition(new O);i.updateWorldMatrix(!0,!0);let u=1,h=l(c.right.upper).sub(l(c.left.upper)).normalize(),f=l(a).sub(l(o)).normalize();new O().crossVectors(h,f).dot(e.position.clone().sub(l(o)))<0&&(u=-1);let d=new Map;for(let S of t.clips){if(!["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(S.id)||d.has(S.id)||!Number.isInteger(S.frames)||S.frames<2||S.frames>1800||!Number.isFinite(S.fps)||S.fps<=0||S.fps>60)throw new Error("Invalid learned clip");let x={};for(let[U,D]of Object.entries(S.channels||{})){let I=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(U)?1:["headDelta","chestDelta",...r?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(U)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...r?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(U)||/^(left|right)Finger[0-4]_[0-2]$/.test(U)?3:0;if(!I||typeof D!="string")throw new Error("Invalid learned channel");let F=Uint8Array.from(atob(D),k=>k.charCodeAt(0));if(F.byteLength!==S.frames*I*4)throw new Error("Learned channel truncated");let P=new Float32Array(F.buffer);if(!P.every(Number.isFinite))throw new Error("Non-finite learned pose");if(I===1&&P.some(k=>k<-.31||k>1.11))throw new Error("Invalid learned finger angle");for(let k=0;I>1&&k<S.frames;k++){let X=0;for(let N=0;N<I;N++)X+=P[k*I+N]**2;if(Math.abs(X-1)>.01)throw new Error("Invalid learned direction/quaternion")}x[U]={values:P,width:I}}if(!x.headDelta)throw new Error("Missing learned head reference");let T=S.id.includes("dance"),C=T?r?"standing-dance":"seated-dance":S.id==="yuki_Peace_hand"?"peace":S.id==="yuki_hello"?"greeting":"head",R=T?["left","right"]:C==="head"?[]:["right"];if(!t.schema.endsWith("/1")&&(S.motionKind!==C||JSON.stringify(S.arms)!==JSON.stringify(R)))throw new Error("Invalid learned action capability");if(!(T&&!r)){if(T&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(U=>!x[U]))throw new Error("Missing standing body channels");d.set(S.id,{...S,kind:C,arms:R,channels:x,duration:(S.frames-1)/S.fps})}}let g=Object.fromEntries([["left","L"],["right","R"]].map(([S,x])=>[S,Array.from({length:5},(T,C)=>[s(`Bip001-${x}-Finger${C}`),s(`Bip001-${x}-Finger${C}1`),s(`Bip001-${x}-Finger${C}2`)])])),_=r?s("Bip001-Pelvis"):null,m=r?Object.fromEntries([["left","L"],["right","R"]].map(([S,x])=>[S,{thigh:s(`Bip001-${x}-Thigh`),calf:s(`Bip001-${x}-Calf`),foot:s(`Bip001-${x}-Foot`),toe:s(`Bip001-${x}-Toe0`)}])):{},p={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function M(){let S=l(c.right.upper).sub(l(c.left.upper)).normalize(),x=l(a).sub(l(o));x.addScaledVector(S,-x.dot(S)).normalize();let T=new O().crossVectors(S,x).multiplyScalar(u).normalize();return{right:S,up:x,front:T,vector:C=>S.clone().multiplyScalar(C[0]).addScaledVector(x,C[1]).addScaledVector(T,C[2])}}let E=new Map,y=null,b=-1;function w(S,x,T){let C=d.get(S);if(!C||T<=0)return;p.fingerWrites=0,p.armWrites=0,p.chestWrites=0,p.workspaceAdjusted=0,(S!==y||x<=b||x-b>.2)&&E.clear(),y=S,b=x,i.updateWorldMatrix(!0,!0);let R=M(),U=Ve.clamp(x*C.fps,0,C.frames-1),D=Math.floor(U),I=Math.min(D+1,C.frames-1),F=U-D;function P(B){let Y=C.channels[B];if(!Y)return null;if(Y.width===1){let xe=0;for(let ie of[-2,-1,0,1,2]){let le=Ve.clamp(U+ie,0,C.frames-1),ge=Math.floor(le),ce=Math.min(ge+1,C.frames-1);xe+=(Y.values[ge]+(Y.values[ce]-Y.values[ge])*(le-ge))*(ie===0?.4:Math.abs(ie)===1?.2:.1)}return[xe]}if(Y.width===4)return new De().fromArray(Y.values,D*4).slerp(new De().fromArray(Y.values,I*4),F).normalize().toArray();let fe=new O;for(let xe of[-2,-1,0,1,2]){let ie=Ve.clamp(U+xe,0,C.frames-1),le=Math.floor(ie),ge=Math.min(le+1,C.frames-1);fe.add(new O().fromArray(Y.values,le*3).lerp(new O().fromArray(Y.values,ge*3),ie-le).multiplyScalar(xe===0?.4:Math.abs(xe)===1?.2:.1))}return fe.normalize().toArray()}function k(B,Y,fe,xe,ie=T){let le=Y.angleTo(fe),ge=Ve.degToRad(xe);le>ge&&p.limited++,B.quaternion.copy(Y).slerp(fe,ie*Math.min(1,ge/Math.max(le,1e-8))).normalize()}function X(B,Y,fe,xe,ie=T){B.parent.updateWorldMatrix(!0,!1);let le=B.quaternion.clone(),ge=le.clone(),ce=(Y?Y.position.clone():new O(1,0,0)).multiply(B.scale).applyQuaternion(ge).normalize(),ye=fe.clone().transformDirection(B.parent.matrixWorld.clone().invert()),ve=new De().setFromUnitVectors(ce,ye).multiply(ge).normalize();E.set(B,ve.clone()),k(B,le,ve,xe,ie),B.updateWorldMatrix(!1,!0)}function N(B,Y,fe,xe){let ie=new Be().makeBasis(R.right,R.up,R.front),le=new Be().makeRotationFromQuaternion(new De(...Y)),ge=ie.clone().multiply(le).multiply(ie.clone().invert());B.parent.updateWorldMatrix(!0,!1);let ce=new Be().extractRotation(B.parent.matrixWorld),ye=ce.clone().invert().multiply(ge).multiply(ce),ve=B.quaternion.clone(),pe=new De().setFromRotationMatrix(ye).multiply(ve).normalize();k(B,ve,pe,fe,xe),B.updateWorldMatrix(!1,!0)}let z=C.kind==="standing-dance",q=new O(0,1,0).transformDirection(i.parent.matrixWorld),de=z?Math.min(...Object.values(m).map(B=>l(B.foot).dot(q))):0;p.legWrites=0,p.groundCorrection=0,z&&(N(_,P("pelvisDelta"),18,T*.8),R=M());let oe=P("chestDelta");if(oe&&(N(o,oe,z?25:10,T*(z?.75:.35)),R=M(),p.chestWrites=1),z){for(let[ie,le]of Object.entries(m)){if(le.calf.parent!==le.thigh||le.foot.parent!==le.calf)throw new Error("Standing leg hierarchy mismatch");X(le.thigh,le.calf,R.vector(P(ie+"Thigh")),110,T),X(le.calf,le.foot,R.vector(P(ie+"Calf")),150,T),N(le.foot,P(ie+"FootDelta"),35,T*.65),p.legWrites+=3}let B=Ve.clamp(de-Math.min(...Object.values(m).map(ie=>l(ie.foot).dot(q))),-.18,.18),Y=l(_),fe=_.parent.matrixWorld.clone().invert(),xe=Y.clone().addScaledVector(q,B).applyMatrix4(fe).sub(Y.clone().applyMatrix4(fe));_.position.add(xe),_.updateWorldMatrix(!1,!0),p.groundCorrection=B}function K(B,Y,fe,xe){let ie=l(B.upper),le=l(B.lower).distanceTo(ie),ge=l(B.hand).distanceTo(l(B.lower)),ce=ie.clone().addScaledVector(R.vector(Y),le),ye=ce.clone().addScaledVector(R.vector(fe),ge),ve=l(o),pe=ye.clone().sub(ve),Ge=pe.dot(R.right),Ke=pe.dot(R.up),ht=pe.dot(R.front),je=[Ge,Ke,ht];Ke=Ve.clamp(Ke,-.16,.6);let dt=(1-Ve.smoothstep(Math.abs(Ge),.16,.28))*Ve.smoothstep(Ke,-.42,-.32)*(1-Ve.smoothstep(Ke,.18,.32));ht+=Math.max(0,.23-ht)*dt,ye.copy(ve).addScaledVector(R.right,Ge).addScaledVector(R.up,Ke).addScaledVector(R.front,ht);let V=ye.clone().sub(l(a));V.length()<.14&&ye.copy(l(a)).add(V.length()>.001?V.setLength(.14):R.front.clone().multiplyScalar(.14)),(je[1]!==Ke||je[2]!==ht)&&p.workspaceAdjusted++;let et=ye.clone().sub(ie),$e=Ve.clamp(et.length(),Math.abs(le-ge)+.015,(le+ge)*.98);et.normalize(),ye.copy(ie).addScaledVector(et,$e);let L=R.right.clone().multiplyScalar(xe==="right"?1:-1),v=L.clone().addScaledVector(R.front,.3).addScaledVector(R.up,.2);v.addScaledVector(et,-v.dot(et)),v.length()<1e-4&&v.copy(R.front).addScaledVector(et,-R.front.dot(et)),v.normalize();let H=(le*le-ge*ge+$e*$e)/(2*$e),$=Math.sqrt(Math.max(0,le*le-H*H)),te=ie.clone().addScaledVector(et,H).addScaledVector(v,$);return{upper:te.clone().sub(ie).normalize(),lower:ye.sub(te).normalize()}}for(let B of C.arms){let ve=function(){let L=l(fe[1][0]).sub(l(fe[4][0])).normalize(),v=l(fe[2][0]).sub(l(Y.hand));return v.addScaledVector(L,-v.dot(L)).normalize(),new Be().makeBasis(L,v,new O().crossVectors(L,v).normalize())},Y=c[B],fe=g[B],xe=P(B+"Upper"),ie=P(B+"Lower");if(!xe||!ie)continue;let le=["greeting","peace"].includes(C.kind)?T*Ve.smoothstep(ie[1],-1,1):T*.72,ge=C.kind==="seated-dance"?K(Y,xe,ie,B):{upper:R.vector(xe),lower:R.vector(ie)};X(Y.upper,Y.lower,ge.upper,120,le),X(Y.lower,Y.hand,ge.lower,170,le),p.armWrites+=2;let ce=P(B+"HandWidth"),ye=P(B+"HandForward");if(!ce||!ye)continue;i.updateWorldMatrix(!0,!0);let pe=R.vector(ce).normalize(),Ge=R.vector(ye);Ge.addScaledVector(pe,-Ge.dot(pe)).normalize();let Ke=new Be().makeBasis(pe,Ge,new O().crossVectors(pe,Ge).normalize()),ht=Ke.multiply(ve().invert()),je=Y.hand,dt=new Be().extractRotation(je.parent.matrixWorld),V=dt.clone().invert().multiply(ht).multiply(dt),et=je.quaternion.clone(),$e=new De().setFromRotationMatrix(V).multiply(et).normalize();k(je,et,$e,C.kind==="greeting"?110:C.kind==="seated-dance"?75:110,le*(C.kind==="seated-dance"?.7:1)),je.updateWorldMatrix(!1,!0);for(let L=0;L<5;L++)for(let v=0;v<3;v++){let H=P(`${B}Finger${L}_${v}`);if(!H)continue;let $=new O(...H).normalize(),te=v?new O(...P(`${B}Finger${L}_${v-1}`)).normalize():new O(0,1,0),me=Ve.clamp(Math.atan2(-$.z,Math.max(.1,$.y))-Math.atan2(-te.z,Math.max(.1,te.y)),-.15,L===0?.45:1.1),_e=v===0&&L!==0?Ve.clamp(Math.atan2($.x,$.y),-.3,.3):0,Q=P(`${B}Curl${L}_${v}`),se=P(`${B}Spread${L}`);Q&&(me=Q[0]),v===0&&L!==0&&se&&(_e=se[0]),C.kind==="peace"&&(me=L===1||L===2?.02:L===0?.4:.95,v===0&&(_e=L===1?.14:L===2?-.08:0));let Me=B==="left"?-1:1,Ne=fe[L][v],be=Ne.quaternion.clone(),Ue=new De().fromArray(Ne.userData.bindLocalQuaternion||be.toArray()).multiply(new De().setFromAxisAngle(new O(0,0,1),_e*Me)).multiply(new De().setFromAxisAngle(new O(0,1,0),me*Me));Ne.quaternion.copy(be).slerp(Ue,T).normalize(),p.fingerWrites++}}let ne=P("headDelta");if(ne){let B=new Be().makeBasis(R.right,R.up,R.front),Y=new Be().makeRotationFromQuaternion(new De(...ne)),fe=B.clone().multiply(Y).multiply(B.clone().invert());a.parent.updateWorldMatrix(!0,!1);let xe=new Be().extractRotation(a.parent.matrixWorld),ie=xe.clone().invert().multiply(fe).multiply(xe),le=a.quaternion.clone(),ge=new De().setFromRotationMatrix(ie).multiply(le).normalize();k(a,le,ge,40)}i.updateWorldMatrix(!0,!0);let ue=new Set;i.traverse(B=>{B.isSkinnedMesh&&!ue.has(B.skeleton)&&(B.skeleton.update(),ue.add(B.skeleton))})}return{available:()=>[...d.values()].map(S=>({id:S.id,label:S.label,duration:S.duration,arms:[...S.arms],kind:S.kind})),apply:w,snapshot:()=>{i.updateWorldMatrix(!0,!0);let S=M(),x=c.right;return{...p,parentDeterminant:x.upper.parent.matrixWorld.determinant(),rightUpper:l(x.lower).sub(l(x.upper)).normalize().toArray(),rightLower:l(x.hand).sub(l(x.lower)).normalize().toArray(),handHeight:l(x.hand).sub(l(x.lower)).dot(S.up)}}}}function ph(i,e){if(e===Ou)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Is||e===Ia){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Is)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function om(i){let e=new Map,t=new Map,n=i.clone();return lm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function lm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)lm(i.children[n],e.children[n],t)}var Er=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new ec(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ec(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dh(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Pi.extractUrlBase(e);a=Pi.resolveURL(l,this.path)}else a=Pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ss(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dm){try{a[lt.KHR_BINARY_GLTF]=new Uh(e)}catch(h){r&&r(h);return}s=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:a[h]=new yh;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Fh(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[h]=new Oh;break;case lt.KHR_MESH_QUANTIZATION:a[h]=new Bh;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function gM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Bt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_h=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new Ye(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],on);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ii(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new _a(u),l.distance=h;break;case"spot":l=new xa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},yh=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let r=[];e.color=new Ye(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(s,s)}return Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Sh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,It)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(s[0],s[1],s[2],on),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(s[0],s[1],s[2],on),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,It)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Lh=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Nh=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ec=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Dh=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Fn.TRIANGLES&&l.mode!==Fn.TRIANGLE_STRIP&&l.mode!==Fn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let _=new Be,m=new O,p=new De,M=new O(1,1,1),E=new la(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),E.setMatrixAt(b,_.compose(m,p,M));let y=null;for(let b in c)if(b==="_COLOR_0"){let w=c[b];E.instanceColor=new Ei(w.array,w.itemSize,w.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(y===null){let S=E.geometry;y=new Yt,y.name=S.name;for(let x in S.attributes)y.setAttribute(x,S.attributes[x]);for(let x in S.morphAttributes)y.morphAttributes[x]=S.morphAttributes[x];S.index!==null&&y.setIndex(S.index),y.morphTargetsRelative=S.morphTargetsRelative;for(let x of S.groups)y.addGroup(x.start,x.count,x.materialIndex);S.boundingBox!==null&&(y.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(y.boundingSphere=S.boundingSphere.clone()),y.drawRange.start=S.drawRange.start,y.drawRange.count=S.drawRange.count,y.userData=Object.assign({},S.userData),E.geometry=y}let w=c[b];y.setAttribute(b,new Ei(w.array,w.itemSize,w.normalized))}Ct.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},dm="glTF",Da=12,cm={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Da,s=new DataView(e,Da),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===cm.JSON){let l=new Uint8Array(e,Da+a,o);this.content=n.decode(l)}else if(c===cm.BIN){let l=Da+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Fh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=zh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=zh[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Fs[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let g in d.attributes){let _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(d)},o,l,on,f)})})}},Oh=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Bh=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},tc=class extends si{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,M=1-m,E=p-f+h;for(let y=0;y!==o;y++){let b=a[_+y+o],w=a[_+y+c]*u,S=a[g+y+o],x=a[g+y]*u;s[y]=M*b+E*w+m*S+p*x}return s}},xM=new De,kh=class extends tc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return xM.fromArray(s).normalize().toArray(s),s}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:Ut,9729:Ft,9984:al,9985:As,9986:vr,9987:Xn},hm={33071:Un,33648:os,10497:Yi},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_M={CUBICSPLINE:void 0,LINEAR:hr,STEP:ur},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),i.DefaultMaterial}function wr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vM(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function MM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bM(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=i.indices+":"+xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+xh(i.targets[n]);return e}function xh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Vh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wM=new Be,Hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new $i(this.options.manager):this.textureLoader=new ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ss(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return wr(s,o,r),hi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Pi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=mh[r.type],o=Fs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Pt(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=mh[r.type],l=Fs[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,E=t.cache.get(M);E||(_=new l(o,p*d,r.count*d/u),E=new ps(_,d/u),t.cache.add(M,E)),m=new ms(E,c,f%d/u,g)}else o===null?_=new l(r.count*c):_=new l(o,f,r.count*c),m=new Pt(_,c,g);if(r.sparse!==void 0){let p=mh.SCALAR,M=Fs[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,b=new M(a[1],E,r.sparse.count*p),w=new l(a[2],y,r.sparse.count*c);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,x=b.length;S<x;S++){let T=b[S];if(m.setX(T,w[S*c]),c>=2&&m.setY(T,w[S*c+1]),c>=3&&m.setZ(T,w[S*c+2]),c>=4&&m.setW(T,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=um[f.magFilter]||Ft,u.minFilter=um[f.minFilter]||Xn,u.wrapS=hm[f.wrapS]||Yi,u.wrapT=hm[f.wrapT]||Yi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==Ft,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new qt(_);m.needsUpdate=!0,f(m)}),t.load(Pi.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),hi(h,a),h.userData.mimeType=a.mimeType||SM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new vs,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ys,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gr}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let h=r[lt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],on),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,It)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=cn);let u=s.alphaMode||gh.OPAQUE;if(u===gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==jt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==jt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==jt){let h=s.emissiveFactor;o.emissive=new Ye().setRGB(h[0],h[1],h[2],on)}return s.emissiveTexture!==void 0&&a!==jt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,It)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),hi(h,s),t.associations.set(h,{materials:e}),s.extensions&&wr(r,h,s),h})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=bM(l),h=r[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=fm(new Yt,l,t),l.mode===Fn.TRIANGLE_STRIP?f=f.then(d=>ph(d,Ia)):l.mode===Fn.TRIANGLE_FAN&&(f=f.then(d=>ph(d,Is))),r[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?yM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=a[d],p,M=l[d];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0){let E=s.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&y?new aa(_,M):new Ot(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Fn.LINES)p=new ca(_,M);else if(m.mode===Fn.LINE_STRIP)p=new pr(_,M);else if(m.mode===Fn.LINE_LOOP)p=new ua(_,M);else if(m.mode===Fn.POINTS)p=new ha(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&MM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),hi(p,s),m.extensions&&wr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&wr(r,h[0],s),h[0];let f=new Ht;s.extensions&&wr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Ve.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ji(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new Be;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,y=f.length;E<y;E++){let b=f[E],w=d[E],S=g[E],x=_[E],T=m[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let C=n._createAnimationTracks(b,w,S,x,T);if(C)for(let R=0;R<C.length;R++)p.push(C[R])}let M=new bs(s,void 0,p);return hi(M,r),M})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,wM)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,g=h[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new gs:l.length>1?u=new Ht:l.length===1?u=l[0]:u=new Ct,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),hi(u,s),s.extensions&&wr(n,u,s),s.matrix!==void 0){let h=new Be;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new Ht;n.name&&(s.name=r.createUniqueName(n.name)),hi(s,n),n.extensions&&wr(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];f.parent!==null?s.add(om(f)):s.add(f)}let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof dn||f instanceof qt)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}tr[s.path]===tr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(tr[s.path]){case tr.weights:u=Ai;break;case tr.rotation:u=ai;break;case tr.translation:case tr.scale:u=Ci;break;default:n.itemSize===1?u=Ai:u=Ci;break}let h=r.interpolation!==void 0?_M[r.interpolation]:hr,f=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){let _=new u(c[d]+"."+tr[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ai?kh:tc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function EM(i,e,t){let n=e.attributes,r=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){let u=Vh(Fs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new O,c=new O;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Vh(Fs[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new fn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function fm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=zh[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return ot.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),hi(i,e),EM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?vM(i,e.targets,t):i})}function pm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,h=-l*r*o-c*s*a,f=l*s*a-c*r*o,d=l*s*o+c*r*a;return[-u,-f,-h,d]}function TM(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function mm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=TM(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function gm(i,e,t,n=null){let r=new va,s=new WeakMap,a=new Map,o=0,c=document.createElement("canvas");c.width=c.height=32;let l=c.getContext("2d",{willReadFrequently:!0});function u(d,g){if(!["torso","leg"].includes(d?.id))return d;let _=N=>i.getObjectByName(N),m=N=>_(N)?.getWorldPosition(new O),p=m("Bip001-Pelvis"),M=m("Bip001-Neck"),E=m("Bip001-L-UpperArm"),y=m("Bip001-R-UpperArm"),b=m("Bip001-Head"),w=m("EyeJoint_L"),S=m("EyeJoint_R");if(!p||!M||!E||!y||!b||!w||!S)return d;let x=M.distanceTo(p);if(x<1e-5)return d;let T=M.clone().sub(p).normalize(),C=y.clone().sub(E).normalize(),R=new O().crossVectors(C,T).normalize(),D=w.add(S).multiplyScalar(.5).sub(b).dot(R);if(Math.abs(D)<x*.002)return d;D<0&&R.negate();let I=g.clone().sub(p),F=I.dot(T)/x,P=I.dot(R)/x;if(Math.abs(I.dot(C))/x>.7)return d;let X=null;return F>-.4&&F<.16&&P<-.025?X="hips":d.id==="torso"&&(F>.45&&F<.95&&P>.06?X="chest":F>.05&&F<.46&&P>.06?X="abdomen":F>.16&&F<.95&&P<-.06&&(X="back")),X?{id:X,confidence:.75,source:"rig-surface-estimate"}:d}function h(d){for(let g=d;g;g=g.parent)if(!g.visible)return!1;return!0}function f(d,g){if(!d||!g)return 1;try{let _=d.image,m=_.width,p=_.height;if(!m||!p||!l)return null;let M=g.clone();d.transformUv(M);let E=Math.min(m-1,Math.max(0,Math.floor(M.x*m))),y=Math.min(p-1,Math.max(0,Math.floor(M.y*p))),b=Math.floor(E/32)*32,w=Math.floor(y/32)*32;s.has(d)||s.set(d,++o);let S=s.get(d)+":"+b+":"+w,x=a.get(S);if(x)a.delete(S),a.set(S,x);else{l.clearRect(0,0,32,32),l.drawImage(_,b,w,Math.min(32,m-b),Math.min(32,p-w),0,0,Math.min(32,m-b),Math.min(32,p-w));let T=l.getImageData(0,0,32,32).data;x=new Uint8Array(1024);for(let C=0;C<1024;C++)x[C]=T[C*4+3];a.set(S,x),a.size>128&&a.delete(a.keys().next().value)}return x[(y-w)*32+E-b]/255}catch{return null}}return(d,g)=>{let _=t.getBoundingClientRect();if(!Number.isFinite(d)||!Number.isFinite(g)||!_.width||!_.height||d<_.left||d>_.right||g<_.top||g>_.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let m=[];i.traverse(M=>{M.isMesh&&h(M)&&(M.isSkinnedMesh&&(M.skeleton.update(),M.computeBoundingSphere(),M.computeBoundingBox()),m.push(M))});let p=new Set;n?.traverse(M=>{M.isMesh&&h(M)&&(m.push(M),p.add(M))}),r.setFromCamera(new Je((d-_.left)/_.width*2-1,-(g-_.top)/_.height*2+1),e);for(let M of r.intersectObjects(m,!1)){let E=M.object,y=E.material,b=f(E.userData.previewMap,M.uv),w=y.alphaTest||(y.transparent?.1:0);if(y.clippingPlanes?.some(I=>I.distanceToPoint(M.point)<0)||b!==null&&b<w)continue;if(p.has(E))return null;let S=[M.face.a,M.face.b,M.face.c],x=S.map(I=>E.getVertexPosition(I,new O)),T=E.worldToLocal(M.point.clone()),C=ti.getBarycoord(T,...x,new O),R=[],U=E.geometry.getAttribute("skinIndex"),D=E.geometry.getAttribute("skinWeight");if(E.isSkinnedMesh&&U&&D&&C)for(let I=0;I<3;I++)for(let F=0;F<4;F++)R.push({name:E.skeleton.bones[U.getComponent(S[I],F)]?.name,weight:D.getComponent(S[I],F)*C.getComponent(I)});return{mesh:E.userData.snowbreakSurfaceKey,triangle:M.faceIndex,barycentric:C?.toArray(),anatomy:u(mm(R),M.point),uv:M.uv?.toArray()||null,point:M.point.toArray(),distance:M.distance,alphaVerified:b!==null,material:E.userData.snowbreakMaterialName}}return null}}var Li={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Ua(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Tr(i,e){let t=Ua(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(Li,i.anatomy.id))return{...i.anatomy,label:Li[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(Li,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:Li[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:Li[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var Gh={head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function xm(i,e,t){let n=new Ht;n.visible=!1,e.add(n);let r=new Map;i.traverse(p=>{p.isMesh&&p.userData.snowbreakSurfaceKey&&r.set(p.userData.snowbreakSurfaceKey,p)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function h(){for(let p of c)p.overlay.geometry.dispose(),p.overlay.material.dispose(),p.overlay.removeFromParent();c=[],l=0}function f(){h(),u=!1;let p=new Map;for(let[M,E]of Object.entries(s)){let y=/^(surface_\d+):(\d+)$/.exec(M);if(!y)continue;let b=r.get(y[1]),w=Number(y[2]);if(!b)continue;let S=b.geometry,x=S.getAttribute("position"),T=S.index,C=S.getAttribute("uv"),R=Tr({mesh:y[1],triangle:w,alphaVerified:!0},{[M]:E});if(!R||w*3+2>=(T?T.count:x.count)||b.userData.previewMap&&!C)continue;if(l>=5e3){u=!0;continue}l++;let U=y[1]+":"+R.id,D=p.get(U);D||(D={source:b,region:R.id,vertices:[],keys:[]},p.set(U,D)),D.keys.push(M);for(let I=0;I<3;I++)D.vertices.push(T?T.getX(w*3+I):w*3+I)}for(let M of p.values()){let E=new Yt;E.setAttribute("position",new Pt(new Float32Array(M.vertices.length*3),3).setUsage(ku));let y=M.source.geometry.getAttribute("uv");if(y){let x=new Float32Array(M.vertices.length*2);M.vertices.forEach((T,C)=>{x[C*2]=y.getX(T),x[C*2+1]=y.getY(T)}),E.setAttribute("uv",new Pt(x,2))}let b=M.source.material,w=new jt({color:Gh[M.region],map:M.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(b.alphaTest||(b.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:b.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),S=new Ot(E,w);S.frustumCulled=!1,S.renderOrder=100,n.add(S),c.push({...M,overlay:S})}o=!1}function d(p){for(let M=p;M;M=M.parent)if(!M.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&f(),i.updateWorldMatrix(!0,!0);let p=new O,M=new Map;for(let E of c){let{source:y,overlay:b}=E;if(b.visible=d(y),!b.visible)continue;y.updateMatrixWorld(!0),y.isSkinnedMesh&&y.skeleton.update();let w=M.get(y);w||(w=new Map,M.set(y,w));let S=b.geometry.getAttribute("position");E.vertices.forEach((x,T)=>{let C=w.get(x);C||(y.getVertexPosition(x,p).applyMatrix4(y.matrixWorld),C=p.toArray(),w.set(x,C)),S.setXYZ(T,...C)}),S.needsUpdate=!0}}function _(){let p=c.find(E=>E.overlay.visible),M=p?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:p&&M?{key:p.keys[0],vertices:[0,1,2].map(E=>new O().fromBufferAttribute(M,E).toArray()),screen:[0,1,2].map(E=>new O().fromBufferAttribute(M,E).project(t).toArray())}:null}}function m(p){let M=n.visible;n.visible=!1;try{return p()}finally{n.visible=M}}return{set(p,M=a){return s=p,a=!!M,o=!0,a||h(),g(),_()},update:g,snapshot:_,hideForCapture:m,dispose(){h(),n.removeFromParent()}}}function _m(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Be().compose(new O(...i.position),new De(...i.quaternion).normalize(),new O(...i.scale))}async function ym(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(n.schema!=="snowbreak-local-scene/1"||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=_m(n.characterWorld).invert(),s=new Ht,a=new Ht,o=new Set,c=[],l=[];s.add(a);let u=new Mn,h=!0;for(let g of n.objects){let _=i.getAsset(g.assetRole);if(typeof g.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(g.id)||o.has(g.id)||_?.kind!=="geometry")throw new Error("Invalid scene object");if(g.group!==void 0&&!["room","furniture"].includes(g.group)||g.cutaway!==void 0&&typeof g.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(g.id);let m=r.clone().multiply(_m(g.world)),p=(await new Er().parseAsync(_.bytes.slice().buffer,"")).scene,M=0;p.traverse(y=>{if(y.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");y.isMesh&&(M+=(y.geometry.index?.count||y.geometry.attributes.position.count)/3)});let E=new Ht;E.name=g.id,E.matrixAutoUpdate=!1,E.matrix.copy(m),E.add(p),(g.group==="room"?a:s).add(E),t(p),p.traverse(y=>{y.isMesh&&(g.group==="room"&&(y.material.side=mn),g.cutaway&&(y.material.clippingPlanes=[u],l.push(y.material)),(g.group==="room"||g.cutaway)&&(y.material.needsUpdate=!0))}),c.push({id:g.id,assetRole:g.assetRole,group:g.group||"furniture",cutaway:!!g.cutaway,triangles:M,matrix:m.toArray()})}e.add(s),s.updateMatrixWorld(!0);function f(g,_){if(!l.length)return;let m=g.position.clone().sub(_),p=m.length();if(p<.001)return;m.divideScalar(p);let M=_.clone().addScaledVector(m,Math.min(.65,p*.5));u.setFromNormalAndCoplanarPoint(m.negate(),M)}function d(g){let _=!!g;if(_!==h){h=_;for(let m of l)m.clippingPlanes=h?[u]:null,m.needsUpdate=!0}}return{root:s,hasCutaway:l.length>0,updateView:f,setRoomVisible:g=>{a.visible=!!g},setCutaway:d,setVisible:g=>{s.visible=!!g},snapshot:()=>({available:!0,visible:s.visible,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:h,clipPlane:[...u.normal.toArray(),u.constant],objects:c.map(g=>({...g,matrix:[...g.matrix]})),originalSceneVerified:!1})}}var AM=new Set(["head","left_hand","right_hand"]),RM=new Set(["tap","double_tap","long_press","stroke"]);function vm(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!AM.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!RM.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Mm(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function CM(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function bm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let f of i.clips){let d=e.getAsset(f.animationRole),g=e.current.resources.find(m=>m.role===f.animationRole);if(d?.kind!=="animation"||f.sourceSha256!==(d.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(f.sourceSha256)||n.has(f.sourceSha256)||f.frames!==d.data.frames||f.fps!==d.data.fps||!Array.isArray(f.curves)||f.curves.length>64)throw new Error("Morph curve animation mismatch");let _=new Set;for(let m of f.curves){if(typeof m.name!="string"||!m.name.length||m.name.length>128||_.has(m.name)||!Array.isArray(m.keys)||!m.keys.length||m.keys.length>4096)throw new Error("Invalid morph curve identity");_.add(m.name),s.add(m.name);let p=-1/0;for(let M of m.keys){if(!Array.isArray(M)||M.length!==5||!M.every(Number.isFinite)||M[0]<0||M[0]>120||M[0]<=p||Math.abs(M[1])>4||Math.abs(M[2])>1e6||Math.abs(M[3])>1e6||![0,1,2].includes(M[4]))throw new Error("Invalid morph curve key");if(p=M[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(f.sourceSha256,f),r.set(d.data,f.sourceSha256)}let o=[];if(t.traverse(f=>{if(!f.isMesh||!f.morphTargetDictionary||!f.morphTargetInfluences)return;let d=new Map;for(let g of s){let _=f.morphTargetDictionary[g];if(_!==void 0){if(!Number.isInteger(_)||_<0||_>=f.morphTargetInfluences.length)throw new Error("Invalid morph target index");d.set(g,_)}}d.size&&o.push({mesh:f,indices:d})}),[...s].some(f=>!o.some(d=>d.indices.has(f))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function h(f,d){l=d,c=f&&r.get(f)||null,u={};let g=n.get(c);for(let _ of g?.curves||[])u[_.name]=CM(_.keys,d);for(let{mesh:_,indices:m}of o)for(let[p,M]of m)_.morphTargetInfluences[M]=u[p]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:f,indices:d})=>Object.fromEntries([...d].map(([g,_])=>[g,f.morphTargetInfluences[_]]))),originalExpressionFidelity:!1})}}function Wh(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function Sm(i,e){let t=new $l({canvas:i,alpha:!0,antialias:!0}),n=new dr,r=new Ht,s=new Vt(32,1,.01,100);r.rotation.y=-Math.PI/2,n.add(r);let a=sm(n,t),o,c,l,u,h,f,d=null,g=null,_=null,m=null,p=!1,M=null,E=0,y=[],b=new Set,w=new Set,S=new Set,x=new Map,T=new Map,C=new Map,R=new Set,U=new Map,D=e.getAsset("rootMotionPolicy")?.data,I=0,F=0,P=0,k=0,X=null,N=null,z={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},q=0,de=0,oe=null;function K(){r.rotation.set(Ve.degToRad(z.pitch),-Math.PI/2+q+Ve.degToRad(z.yaw+de),Ve.degToRad(z.roll)),r.updateMatrixWorld(!0)}function ne(ge){let ce={...z,...ge};for(let ye of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(ce[ye]))throw new Error("Invalid framing");return z={scale:Ve.clamp(ce.scale,.3,4),x:Ve.clamp(ce.x,-1.5,1.5),y:Ve.clamp(ce.y,-1.5,1.5),yaw:((ce.yaw+180)%360+360)%360-180,pitch:Ve.clamp(ce.pitch,-65,65),roll:Ve.clamp(ce.roll,-45,45),stretchX:Ve.clamp(ce.stretchX,.65,1.5),stretchY:Ve.clamp(ce.stretchY,.65,1.5)},K(),le(),{...z}}function ue(){if(!oe)return;r.rotation.y=-Math.PI/2,r.updateMatrixWorld(!0);let ge=oe.bone.getWorldQuaternion(new De),ce=oe.axis.clone().applyQuaternion(ge);Math.hypot(ce.x,ce.z)>.1&&(q=oe.heading-Math.atan2(ce.x,ce.z)),K()}function B(){return z.yaw=0,ue(),le(),{...z}}function Y(ge){ge.traverse(ce=>{if(ce.isBone&&(ce.userData.bindLocalQuaternion=ce.quaternion.toArray()),!ce.isMesh)return;b.add(ce.geometry);for(let Ge of Array.isArray(ce.material)?ce.material:[ce.material]){w.add(Ge);for(let Ke of Object.values(Ge))Ke?.isTexture&&S.add(Ke)}let ye=ce.material.name,ve=x.get(ye)||null,pe=C.get(ye)||{};if(ce.userData.snowbreakSurfaceKey="surface_"+F++,ce.userData.snowbreakMaterialName=ye,ce.userData.previewMap=ve,pe.transparent!==void 0&&typeof pe.transparent!="boolean")throw new Error("Invalid transparent override");if(pe.renderOrder!==void 0&&(!Number.isInteger(pe.renderOrder)||Math.abs(pe.renderOrder)>100))throw new Error("Invalid material sorting");ce.renderOrder=pe.renderOrder||0,ce.material=rm(ye,ve,T.get(ye),pe),w.add(ce.material),ce.castShadow=ce.isSkinnedMesh&&!pe.transparent,ce.receiveShadow=ce.material.userData.profile==="cloth-or-room"})}function fe(ge,ce){if(!ce)return;let ye=new Map(ce.tracks.map(ve=>[ve.bone,ve]));ge.traverse(ve=>{if(!ve.isBone)return;let pe=ye.get(ve.name)?.keys?.[0];if(!pe||pe.length!==10||!pe.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");ve.position.fromArray(pe),ve.quaternion.fromArray(pe,3),ve.scale.fromArray(pe,7)})}function xe(ge,ce,ye=y){if(!ce)return;let ve=new Map(ce.tracks.map(pe=>[pe.bone,pe]));if(ve.size!==ce.tracks.length)throw new Error("Duplicate animation bones");ge.traverse(pe=>{if(!pe.isBone||ge===l&&!R.has(pe))return;let Ge=ve.get(pe.name);if(!Ge||Ge.keys.length!==ce.frames||Ge.keys.some(Ke=>Ke.length!==10||!Ke.every(Number.isFinite)||Math.abs(Ke.slice(3,7).reduce((ht,je)=>ht+je*je,0)-1)>.05))throw new Error("Invalid bone animation");ye.push({bone:pe,track:Ge,clip:ce})})}function ie(){if(!p){p=!0,removeEventListener("resize",le),t.setAnimationLoop(null),f?.dispose(),o?.dispose(),c?.dispose(),a.dispose();for(let ge of b)ge.dispose();for(let ge of w)ge.dispose();for(let ge of S)ge.dispose();l?.removeFromParent(),h?.root?.removeFromParent(),t.dispose()}}function le(){if(p||!l)return;k++;let ge=i.clientWidth||innerWidth,ce=i.clientHeight||innerHeight,ye=Math.min(devicePixelRatio||1,3);(!X||X.w!==ge||X.h!==ce||X.ratio!==ye)&&(t.setPixelRatio(ye),t.setSize(ge,ce,!1),X={w:ge,h:ce,ratio:ye},P++),s.aspect=ge/ce,r.updateMatrixWorld(!0),!d&&!N&&(l.traverse(je=>{je.isSkinnedMesh&&(je.skeleton.update(),je.computeBoundingBox())}),N=new Zt().setFromObject(l).applyMatrix4(r.matrixWorld.clone().invert()));let ve=(g||d||N).clone().applyMatrix4(r.matrixWorld),pe=ve.getSize(new O),Ge=ve.getCenter(new O);a.frame(ve);let Ke=Math.tan(Ve.degToRad(16)),ht=Math.max(pe.y/(2*Ke),pe.x/(2*Ke*s.aspect))*1.25+pe.z;if(d){ht=0;for(let je of[ve.min.x,ve.max.x])for(let dt of[ve.min.y,ve.max.y])for(let V of[ve.min.z,ve.max.z])ht=Math.max(ht,V-Ge.z+Math.max(Math.abs(je-Ge.x)/(Ke*s.aspect),Math.abs(dt-Ge.y)/Ke)*1.12)}s.position.copy(Ge).add(new O(0,0,ht)),s.lookAt(Ge),s.zoom=g?1.05:z.scale,s.setViewOffset(ge,ce,g?0:-z.x*ge,g?0:-z.y*ce,ge,ce),s.updateProjectionMatrix(),s.projectionMatrix.elements[0]*=z.stretchX,s.projectionMatrix.elements[5]*=z.stretchY,s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),h?.updateView(s,Ge)}try{let Me=function(re){let Z=_e.get(re);if(!Z)throw new Error("Unknown sample");me=re,$=Z.bindings,te=Z.duration;let Pe=_e.get(Z.sceneOf)||Z,ke=Pe.sceneFraming?U.get(Pe.sourceSha256):null;if(Z.sceneFraming&&!ke)throw new Error("Scene framing envelope missing");let ze=g!==ke;return g=ke,Ne(0),ze&&le(),{id:re,label:Z.label,duration:Z.duration}},Ne=function(re,Z=$,Pe=te){if(p||!Number.isFinite(re))return;let ke=L;m=Z[0]?.clip?.generatorMetadata?.sourceSha256||null,L=Z===v&&V>0?"standby":"sample",E=Math.max(0,Math.min(Pe,re));for(let{bone:ze,track:gt,clip:Rt}of Z){let Et=E*Rt.fps,Tn=Math.min(Math.floor(Et),Rt.frames-1),On=Math.min(Tn+1,Rt.frames-1),xn=Et-Tn,An=gt.keys[Tn],_n=gt.keys[On];ze.position.set(Ve.lerp(An[0],_n[0],xn),Ve.lerp(An[1],_n[1],xn),Ve.lerp(An[2],_n[2],xn)),ze.quaternion.copy(je.fromArray(An,3).slerp(dt.fromArray(_n,3),xn)),ze.scale.set(Ve.lerp(An[7],_n[7],xn),Ve.lerp(An[8],_n[8],xn),Ve.lerp(An[9],_n[9],xn))}if(Ge.apply(Z.find(ze=>!R.has(ze.bone))?.clip,E),D){l.position.x=l.position.z=0,r.updateMatrixWorld(!0);let ze=l.getObjectByName(D.bone).getWorldPosition(new O).applyMatrix4(l.matrixWorld.clone().invert());l.position.x=D.reference[0]-ze.x,l.position.z=D.reference[1]-ze.z}r.updateMatrixWorld(!0),I=Ke.length;for(let ze of Ke)ze.update()};if(D&&(D.schema!=="snowbreak-home-root-lock/1"||D.bone!=="Bip001"||!Array.isArray(D.reference)||D.reference.length!==2||!D.reference.every(re=>Number.isFinite(re)&&Math.abs(re)<10)))throw new Error("Invalid home root motion policy");let ge=e.getAsset("materials")?.data;if(ge){if(ge.schema!=="snowbreak-material-preview/1"||ge.originalShaderVerified!==!1||!Array.isArray(ge.materials)||ge.materials.length>64)throw new Error("Invalid material preview");let re=new Map;for(let Z of ge.materials){if(typeof Z.name!="string"||Z.name.length>256||C.has(Z.name))throw new Error("Invalid material identity");let Pe=Z.renderState||{};if(Pe.alphaCutoff!==void 0&&(!Number.isFinite(Pe.alphaCutoff)||Pe.alphaCutoff<0||Pe.alphaCutoff>1))throw new Error("Invalid material alpha");if(Pe.doubleSided!==void 0&&typeof Pe.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(C.set(Z.name,Pe),!Z.diffuseAssetId)continue;let ke=e.getAsset("texture_"+Z.diffuseAssetId);if(ke?.kind!=="texture")throw new Error("Missing local diffuse texture");let ze=re.get(Z.diffuseAssetId);if(!ze){let gt=URL.createObjectURL(new Blob([ke.bytes],{type:ke.data?.mime||"image/png"}));try{ze=await new $i().loadAsync(gt)}finally{URL.revokeObjectURL(gt)}let Rt=localStorage.getItem("snowTextureLimit")==="2048"?2048:4096;if(ze.image.width>Rt||ze.image.height>Rt){let Et=document.createElement("canvas"),Tn=Math.min(Rt/ze.image.width,Rt/ze.image.height);Et.width=Math.round(ze.image.width*Tn),Et.height=Math.round(ze.image.height*Tn),Et.getContext("2d").drawImage(ze.image,0,0,Et.width,Et.height),ze.image=Et,ze.needsUpdate=!0}ze.colorSpace=It,ze.anisotropy=t.capabilities.getMaxAnisotropy(),ze.flipY=!1,re.set(Z.diffuseAssetId,ze),S.add(ze)}if(x.set(Z.name,ze),Z.normalAssetId){if(!/^[a-f0-9]{64}$/.test(Z.normalAssetId)||ge.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let gt=e.getAsset("texture_"+Z.normalAssetId);if(gt?.kind!=="texture")throw new Error("Missing original normal texture");let Rt=re.get("normal:"+Z.normalAssetId);if(!Rt){let Et=URL.createObjectURL(new Blob([gt.bytes],{type:gt.data?.mime||"image/png"}));try{Rt=await new $i().loadAsync(Et)}finally{URL.revokeObjectURL(Et)}Rt.flipY=!1,Rt.colorSpace=Zn,Rt.anisotropy=t.capabilities.getMaxAnisotropy(),re.set("normal:"+Z.normalAssetId,Rt),S.add(Rt)}T.set(Z.name,Rt)}}}let ce=e.getAsset("body");if(!ce)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let ye=e.getAsset("framingBounds")?.data;if(ye){let re=Z=>Array.isArray(Z)&&Z.length===3&&Z.every(Pe=>Number.isFinite(Pe)&&Math.abs(Pe)<=100);if(ye.schema!=="snowbreak-framing-bounds/1"||ye.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||ye.bodySha256!==e.current.resources.find(Z=>Z.role==="body")?.assetId||!re(ye.min)||!re(ye.max)||ye.min.some((Z,Pe)=>Z>=ye.max[Pe])||!Number.isInteger(ye.evaluatedFrames)||ye.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(d=new Zt(new O(...ye.min),new O(...ye.max)),_=ye,ye.clips){if(!Array.isArray(ye.clips)||ye.clips.length>16)throw new Error("Invalid clip envelopes");for(let Z of ye.clips){if(!/^[a-f0-9]{64}$/.test(Z.sourceSha256)||U.has(Z.sourceSha256)||!re(Z.min)||!re(Z.max)||Z.min.some((Pe,ke)=>Pe>=Z.max[ke]))throw new Error("Invalid clip envelope");U.set(Z.sourceSha256,new Zt(new O(...Z.min),new O(...Z.max)))}}}l=(await new Er().register(Wh).parseAsync(ce.bytes.slice().buffer,"")).scene,r.add(l),Y(l),l.traverse(re=>{re.isBone&&R.add(re)});let ve=e.getAsset("bodyAnimation")?.data;m=ve?.generatorMetadata?.sourceSha256||null,fe(l,ve),xe(l,ve);let pe=e.getAsset("faceAttachment")?.data;if(pe){if(pe.schema!=="snowbreak-face-attachment/1"||pe.candidateOnly!==!0||pe.originalAssemblyVerified!==!1||pe.boneName!=="Bip001-Head"||pe.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let re=l.getObjectByName(pe.boneName),Z=pe.relativeLocationCm;if(!re?.isBone||!Z||![Z.X,Z.Y,Z.Z].every(gt=>Number.isFinite(gt)&&Math.abs(gt)<100))throw new Error("Invalid socket parent or position");let Pe=e.getAsset("face");if(!Pe)throw new Error("Missing face geometry");u=(await new Er().register(Wh).parseAsync(Pe.bytes.slice().buffer,"")).scene,Y(u),fe(u,e.getAsset("faceAnimation")?.data);let ke=e.getAsset("faceAnimation")?.data;if(!ke||!ve||ke.frames!==ve.frames||ke.fps!==ve.fps)throw new Error("Face/body sample timing mismatch");xe(u,ke);let ze=new Ht;if(ze.position.set(Z.X*.01,Z.Z*.01,Z.Y*.01),ze.quaternion.fromArray(pm(pe.relativeRotationDegrees)),re.add(ze),ze.add(u),pe.defaultVisible!==void 0&&typeof pe.defaultVisible!="boolean")throw new Error("Invalid face visibility");u.visible=pe.defaultVisible===!0}h=await ym(e,r,Y),t.localClippingEnabled=!!h.hasCutaway;let Ge=bm(e.getAsset("morphCurves")?.data,e,u),Ke=[];l.traverse(re=>{re.isSkinnedMesh&&!Ke.includes(re.skeleton)&&Ke.push(re.skeleton),re.isSkinnedMesh&&(re.frustumCulled=!1)});let ht=ve?(ve.frames-1)/ve.fps:0,je=new De,dt=new De,V=0,et="D\u5F85\u673A",$e=!1,L="sample",v=[],H=e.getAsset("stateTransition")?.data;if(H){let re=H.schema==="snowbreak-state-preview/1"&&H.show==="Sc01_Hand_A_D"&&H.fromState==="A"&&H.toState==="D",Z=H.schema==="snowbreak-standby-preview/1"&&H.characterId===e.current.characterId&&Number.isInteger(H.standbyConfigId)&&H.standbyConfigId>0&&Number.isInteger(H.sourceSkinId)&&/^[a-f0-9]{64}$/.test(H.sourceTableSha256)&&typeof H.label=="string"&&H.label.length<=40&&typeof H.startAsStandby=="boolean",Pe=H.schema==="snowbreak-standby-preview/2"&&H.stance==="standing"&&H.characterId===e.current.characterId&&H.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&H.startAsStandby===!0;if(!re&&!Z&&!Pe||H.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(Z||Pe)&&(et=H.label,$e=H.startAsStandby);let ke=e.getAsset("standbyBody")?.data,ze=e.getAsset("standbyFace")?.data;if(!ke||!ze||ke.frames!==ze.frames||ke.fps!==ze.fps)throw new Error("Standby clip timing mismatch");let gt=new Map(ke.tracks.map(Et=>[Et.bone,Et])),Rt=new Map(ze.tracks.map(Et=>[Et.bone,Et]));v=y.map(Et=>{let Tn=Et.clip===ve?ke:ze,On=(Et.clip===ve?gt:Rt).get(Et.bone.name);if(!On||On.keys.length!==Tn.frames||On.keys.some(xn=>xn.length!==10||!xn.every(Number.isFinite)||Math.abs(xn.slice(3,7).reduce((An,_n)=>An+_n*_n,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:Et.bone,track:R.has(Et.bone)?im(On):On,clip:Tn}}),V=(ke.frames-1)/ke.fps}let $=y,te=ht,me="default",_e=new Map([["default",{bindings:y,duration:ht,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),Q=e.getAsset("sampleCatalog")?.data;if(Q){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(Q.schema)||Q.characterId!==e.current.characterId||Q.originalInteractionVerified!==!1||!Array.isArray(Q.samples)||!Q.samples.length||Q.samples.length>24||!/^[a-f0-9]{64}$/.test(Q.sourceTableSha256))throw new Error("Invalid sample catalog");_e.clear();for(let Z of Q.samples){if(typeof Z.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(Z.id)||_e.has(Z.id)||typeof Z.label!="string"||Z.label.length>64||Q.schema.endsWith("/1")&&(!Number.isInteger(Z.sourceShowElementId)||Z.sourceShowElementId<1))throw new Error("Invalid sample identity");let Pe=e.getAsset(Z.bodyRole),ke=e.getAsset(Z.faceRole);if(Pe?.kind!=="animation"||ke?.kind!=="animation"||(Pe.data.frames!==ke.data.frames||Pe.data.fps!==ke.data.fps)&&!(Z.independentFaceTiming===!0&&Number.isInteger(Z.sourceShowElementId)&&Z.sourceShowElementId>0))throw new Error("Sample body/face mismatch");if(Q.schema.endsWith("/2")&&Z.sourceBodySha256!==(Pe.data.generatorMetadata?.sourceSha256||e.current.resources.find(gt=>gt.role===Z.bodyRole)?.assetId))throw new Error("Sample source mismatch");let ze=y;if(Z.bodyRole!=="bodyAnimation"||Z.faceRole!=="faceAnimation"){if(ze=[],xe(l,Pe.data,ze),!u)throw new Error("Sample requires face");xe(u,ke.data,ze)}_e.set(Z.id,{bindings:ze,duration:(Pe.data.frames-1)/Pe.data.fps,label:Z.label,sourceShowElementId:Z.sourceShowElementId,sceneFraming:Z.sceneFraming===!0,sourceSha256:Pe.data.generatorMetadata?.sourceSha256,sceneOf:Z.sceneOf})}let re=_e.get(Q.defaultId);if(!re||re.bindings!==y)throw new Error("Default sample must reference primary clip");me=Q.defaultId}let se=vm(Q);r.updateMatrixWorld(!0);let be=l.getObjectByName("Bip001-Pelvis")||l.getObjectByName("Bip001");if(be){let re=be.getWorldQuaternion(new De),Z=[new O(1,0,0),new O(0,1,0),new O(0,0,1)].sort((ke,ze)=>{let gt=ke.clone().applyQuaternion(re),Rt=ze.clone().applyQuaternion(re);return Math.hypot(Rt.x,Rt.z)-Math.hypot(gt.x,gt.z)})[0],Pe=Z.clone().applyQuaternion(re);oe={bone:be,axis:Z,heading:Math.atan2(Pe.x,Pe.z)}}f=xm(l,n,s);let Se=nm(l,re=>{de=re,K()},()=>z.yaw),Ue=gm(l,s,i,h.root);c=Qp(l,s,i,Ue,e.getAsset("sceneInteractions")?.data),o=tm(l,s,i),le(),await t.compileAsync(n,s),addEventListener("resize",le),t.setAnimationLoop(()=>{i.dataset.snowbreakPaused!=="true"&&(Se.restore(),c.restore(),o.restore(),M?.(),Se.tick(),c.tick(),o.tick(),f.update(),t.render(n,s))});let qe=()=>{let re=[];return l.traverse(Z=>{Z.isMesh&&re.push({name:Z.userData.snowbreakMaterialName,textured:!!Z.userData.previewMap,normalMapped:!!Z.material.normalMap,diffuseSize:Z.material.map?[Z.material.map.image.width,Z.material.map.image.height]:null,normalSize:Z.material.normalMap?[Z.material.normalMap.image.width,Z.material.normalMap.image.height]:null,anisotropy:Z.material.map?.anisotropy||0,profile:Z.material.userData.profile,alphaTest:Z.material.alphaTest})}),re},tt=re=>l.traverse(Z=>{Z.isMesh&&(Z.material.map=re?Z.userData.previewMap:null,Z.material.color.set(Z.material.map?16777215:13289411),Z.material.needsUpdate=!0)}),W=()=>({available:!!u,visible:!!u?.visible,originalAssemblyVerified:!1}),we=re=>(u&&(u.visible=!!re,le()),W()),ae=(re,Z,Pe)=>{if(p)throw new Error("Renderer disposed");f.hideForCapture(()=>{t.render(n,s),re.drawImage(i,0,0,Z,Pe)})},Ee=dh(l),Re=dh(l,{side:"left"}),he=am(l,s,e.getAsset("learnedMotions")?.data,H?.stance);return{embodiment:Se,sceneInteractions:c,sensesState:o.snapshot,setGaze:o.gaze,senseTouch:o.touch,resetSenses:o.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(re=>[re,l.getObjectByName(re)?.getWorldPosition(new O).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:a.snapshot,setLighting:a.set,boneWorldPoints:re=>Object.fromEntries(re.slice(0,32).map(Z=>[Z,l.getObjectByName(Z)?.getWorldPosition(new O).toArray()])),bonePoseState:()=>{let re=[];return l.traverse(Z=>{Z.isBone&&re.push({name:Z.name,position:Z.position.toArray(),quaternion:Z.quaternion.toArray(),scale:Z.scale.toArray()})}),re},cameraState:()=>({position:s.position.toArray(),projection:s.projectionMatrix.toArray()}),learnedOptions:he.available,applyLearnedMotion:he.apply,learnedDiagnostics:he.snapshot,presentationDiagnostics:()=>({resizeCount:P,fitCount:k}),touchBindings:()=>se.map(re=>({...re,gestures:[...re.gestures]})),setRoomVisible:h.setRoomVisible,setSceneCutaway:h.setCutaway,sceneState:h.snapshot,setSceneVisible:h.setVisible,morphState:Ge.snapshot,framingEnvelopeState:()=>({precomputed:!!d,evaluatedFrames:_?.evaluatedFrames||0,perClip:U.size,activeSource:m}),resourceState:()=>({sourceTextures:S.size,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures}),setSurfaceLabels:f.set,surfaceOverlayState:f.snapshot,armPreview:Ee,leftArmPreview:Re,dispose:ie,pickSurface:Ue,drawSnapshot:ae,faceViewer:B,setFrame:ne,frameState:()=>({...z}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:qe,setTexturePreview:tt,faceCandidateState:W,showFaceCandidate:we,selectSample:Me,sampleOptions:()=>[..._e].map(([re,Z])=>({id:re,label:Z.label,duration:Z.duration,sourceShowElementId:Z.sourceShowElementId})),get duration(){return te},seek:Ne,standbyDuration:V,standbyLabel:et,startAsStandby:$e,seekStandby:re=>{g&&(g=null,le()),V>0&&Ne(re%V,v,V)},setFrameHandler:re=>M=re,sampleState:()=>({lastSkeletonUpdates:I,sampleId:me,time:E,poseMode:L,standbyDuration:V,nativeInitializationVerified:!1,viewYaw:r.rotation.y,autoYaw:q,bodyBones:y.filter(re=>re.clip===ve).length,faceBones:y.filter(re=>re.clip!==ve).length,hand:l.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new O).toArray()})}}catch(ge){throw ie(),ge}}var IM="action-plan/1",PM=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],LM={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},NM={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},DM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,UM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},FM={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},wm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},nc=(i,e,t)=>Math.max(e,Math.min(t,i));function OM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function BM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function kM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function Xh(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:nc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var Am=i=>!!i&&DM.test(i);function zM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=NM[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||Am(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Em(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=Am(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function Tm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of wm[s]||[])r.push(a);for(let s of wm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function VM(i,e){let t=e&&e.channels||{},n=UM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function HM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*nc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,h=nc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:h,curve:[[0,l],[.18,h],[.75,h],[1,l]]})}return s}function GM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Fa(i,e,t={}){let n=Xh(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:IM,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||FM[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+OM(kM(n)+"||"+(a?BM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!PM.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Em(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=GM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=zM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(h)&&l.push(...h),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Em(n,a,c.motion)}else{let l=LM[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let f=VM(n,a);if(f.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let d=HM(a,n.intensity);d.length&&o.tracks.push(...d)}o.tracks.push(...f),o.owns=o.tracks.filter(d=>d.id).map(d=>d.ch)}else{let d=Tm(n,a);d?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:d.name,index:d.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=Tm(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:nc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var ic=(i,e,t)=>Math.max(e,Math.min(t,i));function WM(i){return i*i*(3-2*i)}function XM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*WM(ic(o,0,1))}}return i[i.length-1][1]}function Rm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(E,y,b){a.push({at:e(),kind:E,planId:y.planId,type:y.action.type,...b||{}}),a.length>40&&a.shift()}function l(E,y,...b){if(typeof y=="function")try{y(...b)}catch{}}function u(E,y){let b={plan:E,t0:y,done:!1};r.push(b),c("start",E);for(let w of E.tracks)w.ch==="motion"?l("motion",t.onMotion,w.group,w.index,E):w.ch==="pose"?l("pose",t.onPose,w.name,E):w.ch==="expression"?l("expression",t.onExpression,w,E):w.ch==="speech"&&l("speech",t.onSpeech,w.text,E);return b}function h(E,y,b){if(E.done)return;E.done=!0;let w=r.indexOf(E);w>=0&&r.splice(w,1),c("end",E.plan,{reason:b}),l("end",t.onEnd,E.plan,b)}function f(E,y,b){let w=e(),S=b||Fa(E,y);if(!S||S.stopped||!S.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:S&&S.planId};let x=Number.isFinite(S.action.priority)?S.action.priority:50,T=r[0];if(T){let C=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(x<C)return s.length>=n&&s.shift(),s.push({plan:S,at:w}),c("queued",S,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:S.planId};h(T,w,"preempted")}return u(S,w),{accepted:!0,queued:!1,planId:S.planId,plan:S}}function d(E,y){let b=Math.max(1,E.duration),w=Math.max(0,Math.min(E.fadeIn||0,b*.5)),S=Math.max(0,Math.min(E.fadeOut||0,b*.5)),x=y*b,T=b-S,C=1;return w>0&&x<w&&(C=x/w),S>0&&x>T&&(C=Math.min(C,(b-x)/S)),ic(C,0,1)}function g(E,y,b,w){for(let S of y.tracks){if(!S.curve||!S.id)continue;let T=XM(S.curve,b)*(S.weight===void 0?1:S.weight)*w,C=E[S.id];S.blend==="set"?(!C||w>=C.weight)&&(E[S.id]={id:S.id,value:T,blend:"set",weight:w,ch:S.ch}):C&&C.blend==="set"?C.value+=T:E[S.id]={id:S.id,value:(C?C.value:0)+T,blend:"add",weight:Math.max(C?C.weight:0,w),ch:S.ch}}}function _(E){let y=e(),b={t:y,channels:{},actions:[],finished:[]};for(let w of r.slice()){let S=ic((y-w.t0)/Math.max(1,w.plan.duration),0,1),x=d(w.plan,S);x>0&&g(b.channels,w.plan,S,x),b.actions.push({planId:w.plan.planId,type:w.plan.action.type,progress:S,weight:x}),S>=1&&(b.finished.push(w.plan.planId),h(w,y,"done"))}if(!r.length&&s.length){let w=s.shift();u(w.plan,y),c("dequeued",w.plan)}return o=b,b}function m(E,y){let b=r.find(w=>w.plan.planId===E);return b?(h(b,e(),y||"interrupt"),!0):!1}function p(E){for(let y of r.slice())h(y,e(),E||"clear");s.length=0}function M(){return{active:r.map(E=>({planId:E.plan.planId,type:E.plan.action.type,progress:ic((e()-E.t0)/Math.max(1,E.plan.duration),0,1)})),queue:s.map(E=>({planId:E.plan.planId,type:E.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:f,tick:_,interrupt:m,clear:p,snapshot:M,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var qM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function qh(i,e={}){let t=qM[i]||i;return Xh({type:t,...e})}function Cm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,h="stopped",f=0,d=!1,g=!1,_=null,m=null,p=null,M=i.touchBindings?.()||[],E=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(E())||E()<=0)throw new Error("Audio metadata unavailable");let y=()=>d?t.ended?t.duration>=i.duration?E()*1e3:(_||(_={at:e(),time:t.duration*1e3}),Math.min(E()*1e3,_.time+Math.max(0,e()-_.at))):t.currentTime*1e3:e(),b={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(K=>(K==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},w=i.sampleOptions?.()||[];b.localActions.surface_reaction={enabled:M.length>0,bindings:Object.fromEntries(M.map(K=>{let ne=w.find(B=>B.id===K.sampleId),ue=n?.(K.sampleId);return[K.region,{sampleId:K.sampleId,animationDuration:(ne?.duration||0)*1e3,voiceDuration:(ue?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function S(K,ne,ue="",B=!1){p={schema:"local-surface-reaction/1",id:ne.id,kind:K,sampleId:ne.sampleId,region:ne.touch.region,touch:ne.touch,withOriginalVoice:ne.withVoice,recovered:B,reason:ue,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(p)}catch{}}let x=Rm({now:y,handlers:{onMotion:K=>h=K==="local-arm-preview"?"local-arm-preview":K==="standby-D"||K==="standby-local"?"standby-preview":"playing",onPose:(K,ne)=>{if(K!=="snowbreak-raise-hand")return;let ue=ne.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),ue.begin(),o=ue,h="local-arm-preview"}catch{ue?.restore(),h="arm-failed"}},onEnd:(K,ne)=>{if(f++,K.action.type==="surface_reaction"&&m?.id===K.planId){let ue=m;if(m=null,d&&(t.pause(),ne!=="done"&&(t.currentTime=0),d=!1,_=null,s(!1)),ne==="done"){let B=!1;try{B=!!D().accepted&&h==="standby-preview"}catch{x.clear("restore-failed"),h="restore-failed"}S(B?"completed":"failed",ue,B?"local-standby-restored":"local-standby-failed",B)}else S(ne.startsWith("audio-")?"failed":"cancelled",ue,ne);return}if(K.action.type==="snowbreak_standby"&&ne==="done"){D();return}if(K.action.type==="snowbreak_arm_preview"||K.action.type==="raise_hand"){o?.restore(),o=null,h="stopped",i.seek(0),ne==="done"&&i.startAsStandby&&D();return}if(d&&(t.pause(),ne!=="done"&&(t.currentTime=0),d=!1,_=null,s(!1)),ne==="done"&&l){let ue=l;l=null,C(ue.id,ue.time);return}h=ne==="done"?"sample-ended":"stopped",i.seek(ne==="done"?i.duration:0),ne==="done"&&(K.action.type==="snowbreak_standby"||g)&&D()}}});function T(){if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};let K={type:"snowbreak_sample",source:"manual-preview",priority:80};return x.dispatch(K,b,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:K,duration:(d?E():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function C(K,ne=0){return I(),i.selectSample(K),c={id:K,time:ne},h="scene-preview",i.seek(Math.min(ne,i.duration)),{accepted:!0}}async function R(K,{withVoice:ne=!0}={}){let ue=c;return ue?(I(),i.selectSample(K),oe(n?.(K)),l=ue,g=!1,ne&&t?z():T()):{accepted:!1}}function U(K){if(c&&h==="scene-preview")return c.time+=Math.max(0,Math.min(100,K))/1e3,i.seek(c.id==="show_03"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let ne=d?y()/1e3:null,ue=x.tick(K);if(h==="arm-failed")return I(),h="arm-failed",ue;if(ue.actions.length){let B=ue.actions[0];if(B.type==="snowbreak_arm_preview"||B.type==="raise_hand"){if(h==="local-arm-preview")try{o.apply(B.progress)}catch{I(),h="arm-failed"}return ue}B.type==="snowbreak_standby"&&h==="standby-preview"?i.seekStandby(B.progress*i.standbyDuration):h!=="standby-preview"&&i.seek(ne===null?B.progress*i.duration:Math.min(i.duration,ne))}return ue}function D(){if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};x.clear("standby-switch");let K={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),x.dispatch(K,b,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:K,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function I(K="sample-stop"){c=null,l=null,o?.restore(),o=null,f++,x.clear(K),t&&(t.pause(),t.currentTime=0),d=!1,_=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),h="stopped"}function F(K="right"){if(!["left","right"].includes(K))return{accepted:!1,reason:"invalid-arm-side"};let ne=K==="left"?i.leftArmPreview:i.armPreview;if(!ne?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{ne.begin(),o=ne}catch{return ne.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let ue={type:"snowbreak_arm_preview",side:K,source:"manual-preview",priority:80};return x.dispatch(ue,b,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:ue,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function P(K){b.localActions.raise_hand.enabled=!!K,!K&&o&&I()}function k(K,ne={}){let ue=qh(K,ne);if(ue.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let B=Fa(ue,b);if(B.stopped||!B.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:B};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy",plan:B};let Y=x.dispatch(ue,b,B);return h==="arm-failed"?(I(),h="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:B}):Y}async function X(K,{withVoice:ne=!0}={}){if(!M.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(x.activeCount&&h!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let ue=Mm(K,M);if(!ue)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(K.frequency)||K.frequency<1||K.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let B=n?.(ue.sampleId)||null;if(ne&&!B)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let Y=qh("surface_reaction",{target:ue.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!ne}),fe=Fa(Y,b,{planId:"surface-reaction-"+ ++u});if(fe.stopped||!fe.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};I();try{i.selectSample(ue.sampleId),oe(B)}catch{try{D()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let xe={id:fe.planId,sampleId:ue.sampleId,touch:K,withVoice:!!ne},ie=++f;m=xe,_=null,d=!!ne,ne&&(r(),t.currentTime=0,s(!0));let le=x.dispatch(Y,b,fe);if(!le.accepted)return m=null,d=!1,s(!1),{...le,handled:!1};if(S("started",xe),!ne)return{...le,handled:!0};try{return await t.play(),ie!==f?{accepted:!1,handled:!0,reason:"superseded"}:{...le,handled:!0}}catch{return ie===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function N(K){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};I();try{let ne=i.selectSample(K);return n&&oe(n(K)),i.startAsStandby&&D(),{accepted:!0,...ne}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function z(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(h==="standby-preview"&&I(),x.activeCount||d)return{accepted:!1,reason:"sample-busy"};let K=++f;r(),t.currentTime=0,_=null,d=!0,s(!0);let ne=T();try{return await t.play(),K!==f?{accepted:!1,reason:"superseded"}:ne}catch{return K===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let q=()=>{d&&U(0)},de=()=>{d&&(I("audio-error"),h="audio-failed")};function oe(K){if(K&&(!Number.isFinite(K.duration)||K.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",q),t?.removeEventListener("error",de),t=K||null,_=null,t?.addEventListener("ended",q),t?.addEventListener("error",de)}return oe(t),{bus:x,capability:b,enterScene:C,playSceneReaction:R,dispatchSurfaceTouch:X,selectSample:N,setLocalActionsEnabled:P,dispatchSemantic:k,playArmPreview:F,playSample:T,playWithVoice:z,tick:U,stop:I,enterStandby:D,setStandbyAfterSample:K=>g=!!K,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:p?{...p,touch:void 0}:null,sampleDuration:i.duration,status:h,active:x.activeCount,voiceMode:d,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!_,originalInteractionVerified:!1})}}async function YM(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Im(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(h=>h.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>YM(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}var Pm=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function Lm(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(d,g){let _=/^(surface_\d+):(\d+)$/.exec(d);return!!_&&!!Tr({mesh:_[1],triangle:Number(_[2]),alphaVerified:!0},{[d]:g})}for(let[d,g]of Object.entries(i||{})){if(t.size>=e)break;a(d,g)&&t.set(d,typeof g=="object"?Object.freeze({...g}):g)}function o(d,g){g===void 0?t.delete(d):t.set(d,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(d,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(d,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(d)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let _=t.get(d);if(Pm(_,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(d)?s.get(d).after=g:s.set(d,{key:d,before:_,after:g});let m=s.get(d);return Pm(m.before,m.after)&&s.delete(d),o(d,g),!0}function u(){if(!s)return!1;let d=[...s.values()];return s=null,d.length?(n.push(d),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let d of s.values())o(d.key,d.before);s=null}}function f(d,g,_){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=d.pop();if(!m)return!1;for(let p of m)o(p.key,p[_]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:h,undo:()=>f(n,r,"before"),redo:()=>f(r,n,"after"),get:d=>t.get(d),has:d=>t.has(d),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function Nm(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=Lm(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),f=document.createElement("input");f.type="checkbox",f.id="snowSurfaceEdit",h.append(f,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let d=document.createElement("select");d.id="snowSurfaceRegion";for(let[N,z]of Object.entries(Li))d.add(new Option(z,N));d.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(d);let g=document.createElement("label"),_=document.createElement("input");_.type="checkbox",_.id="snowSurfaceShow",g.append(_,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[N,z]of Object.entries(Li)){let q=document.createElement("span");q.textContent="\u25A0 "+z+" ",q.style.color="#"+Gh[N].toString(16).padStart(6,"0"),m.appendChild(q)}t.appendChild(m);let p=document.createElement("button"),M=document.createElement("button");p.id="snowSurfaceUndo",M.id="snowSurfaceRedo",p.textContent="\u64A4\u9500\u6807\u6CE8",M.textContent="\u91CD\u505A\u6807\u6CE8",t.append(p,M);let E=document.createElement("p");E.id="snowSurfaceOverlayInfo",t.appendChild(E);let y=document.createElement("p");y.id="snowSurfaceStatus",y.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u8499\u76AE\u6743\u91CD\u4FDD\u5B88\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(y);let b=null,w=0,S=!1,x=N=>{let z=Ua(N);return Tr(N,z?{[z]:l.get(z)}:{})};function T(){if(S)return;let N=l.state();p.disabled=!N.undo,M.disabled=!N.redo;let z=i.setSurfaceLabels?.(l.snapshot(),_.checked);E.textContent=_.checked?`\u5DF2\u663E\u793A ${z?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${z?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function C(){w||(w=requestAnimationFrame(()=>{w=0,T()}))}function R(){r(l.snapshot()),T()}function U(){if(!b)return;b.mode==="paint"&&l.cancel(),s.cancel();let N=b.id;b=null,e.hasPointerCapture(N)&&e.releasePointerCapture(N),T()}f.onchange=()=>{U(),f.checked&&(_.checked=!0),T()},d.onchange=U,_.onchange=T,p.onclick=()=>{U(),l.undo()&&(R(),y.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},M.onclick=()=>{U(),l.redo()&&(R(),y.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")};function D(N){let z=Ua(N);!z||!N.alphaVerified||(l.set(z,b.region||void 0),C(),y.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${Li[b.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function I(N){if(b||e.dataset.snowbreakFrameEdit==="true"||!f.checked&&!o())return;N.stopPropagation();let z=i.pickSurface(N.clientX,N.clientY);if(b={id:N.pointerId,mode:f.checked?"paint":"touch",region:d.value},e.setPointerCapture(N.pointerId),b.mode==="paint"){l.begin();try{D(z)}catch(q){y.textContent=q.message}}else{let q=x(z);i.senseTouch?.(z,q),q?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:q,source:"skinned-surface"}),b.known=!0,b.hit=z):z?.alphaVerified?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),b.known=!0,b.hit=z):y.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function F(N){if(b?.id===N.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){U();return}if(N.stopPropagation(),b.mode==="paint")try{D(i.pickSurface(N.clientX,N.clientY))}catch(z){y.textContent=z.message}else b.known&&s.move({pointerId:N.pointerId,x:N.clientX,y:N.clientY})}}function P(N){if(b?.id!==N.pointerId)return;N.stopPropagation();let z=b;if(b=null,z.mode==="paint")l.commit()&&R(),y.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(z.known&&o()){let q=s.finish({pointerId:N.pointerId,x:N.clientX,y:N.clientY});q&&(q.surface=z.hit,y.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+q.regionLabel,a(q))}else s.cancel();e.hasPointerCapture(N.pointerId)&&e.releasePointerCapture(N.pointerId)}function k(N){b?.id===N.pointerId&&U()}for(let[N,z]of[["pointerdown",I],["pointermove",F],["pointerup",P],["pointercancel",k]])e.addEventListener(N,z);function X(N){if(!Array.isArray(N)||N.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");U(),l.begin();let z=0;try{for(let q of N){let de=Ua(q.hit);if(!de||!q.hit.alphaVerified||l.has(de)||l.state().count>=3e4)continue;let oe={id:q.id,source:"vision-reviewed",confidence:q.confidence,model:String(q.model||"").slice(0,128),visible:!0};Tr(q.hit,{[de]:oe})&&(l.set(de,oe),z++)}l.commit()&&R()}catch(q){throw l.cancel(),T(),q}return y.textContent=`\u5DF2\u91C7\u7528 ${z} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,z}return T(),{applyReviewed:X,classify:x,state:l.state,dispose(){U(),S=!0,w&&cancelAnimationFrame(w);for(let[N,z]of[["pointerdown",I],["pointermove",F],["pointerup",P],["pointercancel",k]])e.removeEventListener(N,z)}}}var Mt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),Um=[Mt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Mt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Mt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Mt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Mt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Mt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Mt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Mt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Mt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Mt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Mt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Mt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Mt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Mt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Mt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Mt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Mt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Mt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Mt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Mt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Mt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Mt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Mt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Mt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Mt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Mt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Mt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Mt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Mt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Dm=Object.freeze(Object.fromEntries(Um.map(i=>[i.id,Object.freeze({...i})]))),C1=Object.freeze(Um.map(i=>i.id));function Fm(i){return Dm[i]&&Dm[i].label||String(i||"\u8EAB\u4F53")}var ZM="body-touch/1",KM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function Om(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...KM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(p){a=String(p||"")}function l(p){o=String(p||"screen")}function u(p){return p?(n={pointerId:p.pointerId,x0:Number(p.x)||0,y0:Number(p.y)||0,x:Number(p.x)||0,y:Number(p.y)||0,t0:e(),path:[[Number(p.x)||0,Number(p.y)||0]],region:p.region||null,confidence:Number(p.confidence)||0,source:p.source||o},{...n}):null}function h(p){if(!n||!p)return null;let M=Number(p.x)||0,E=Number(p.y)||0;return n.x=M,n.y=E,n.path.length<t.maxPath&&n.path.push([M,E]),{x:M,y:E,moved:Math.hypot(M-n.x0,E-n.y0)}}function f(){let p=0;for(let M=1;M<n.path.length;M++)p+=Math.hypot(n.path[M][0]-n.path[M-1][0],n.path[M][1]-n.path[M-1][1]);return{length:p,points:n.path.length}}function d(p,M){if(!n)return null;p&&h(p);let E=e(),y=Math.max(0,E-n.t0),b=n.x-n.x0,w=n.y-n.y0,S=Math.hypot(b,w),x=f(),T=M||"";if(!T)if(y>=t.longMinMs&&S<=t.moveTolerancePx)T="long_press";else if(S>=t.strokeMinPx&&y>=t.strokeMinMs&&x.length>=t.strokeMinPx)T="stroke";else if(S<=t.moveTolerancePx&&y<=t.tapMaxMs){let I=n.region&&(n.region.id||n.region)||"body";r&&E-r.at<=t.doubleGapMs&&r.region===I?(T="double_tap",r=null):(T="tap",r={at:E,region:I})}else T="drag";let C=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},R=typeof C=="string"?C:C.id||"body";s.push({at:E,region:R}),s=s.filter(I=>E-I.at<=t.frequencyWindowMs);let U=s.filter(I=>I.region===R).length,D={schema:ZM,type:"body_touch",modelId:a,region:R,regionLabel:C.label||Fm(R),side:C.side||"",group:C.group||"",gesture:T,durationMs:Math.round(y),confidence:Number(C.confidence)||0,regionSource:C.source||"fallback",source:n.source||o,frequency:U,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+b.toFixed(1),y:+w.toFixed(1)},distance:+S.toFixed(1),pathLength:+x.length.toFixed(1),at:Math.round(E)};return n=null,D}function g(){n=null}function _(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:d,cancel:g,reset:_,state:m,setModelId:c,setSource:l,config:t}}var Kh=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),Yh=Object.freeze({...Kh,scale:3,x:-.12,y:-.02});function Zh(i){return i&&Object.keys(Kh).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function Bm(i,e,t,{onEditing:n=()=>{},initialFrame:r=Yh}={}){let s;try{s=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(Zh(s)?s:Zh(r)?r:Yh);let a=document.createElement("section");a.id="presentationEditor",a.hidden=!0,a.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let o=document.createElement("button");o.id="finishPresentation",o.textContent="\u5B8C\u6210\u5C55\u793A\u8C03\u6574",o.hidden=!0,o.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(a,o);let c=!1,l=null,u=0,h=null,f=null,d=new Map,g=new Map,_=document.createElement("select");_.id="presentationDragMode",_.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),_.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let m=document.createElement("div");m.textContent="\u5C55\u793A\u7F16\u8F91",a.append(m,_);let p=(D,I,F)=>{let P=document.createElement("button");return P.textContent=D,P.id=I,P.onclick=F,a.append(P),P};function M(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let D=i.frameState();for(let[I,F]of g)F.value=D[I]}function y(D){i.setFrame({...i.frameState(),...D}),E()}function b(){u=0,h&&(y(h),h=null)}function w(D){h={...h||{},...D},u||(u=requestAnimationFrame(b))}function S(D){u&&(cancelAnimationFrame(u),b()),!D&&l&&y(l),M(),c=!1,a.hidden=!0,o.hidden=!0,d.clear(),f=null,e.dataset.snowbreakFrameEdit="false",n(!1)}p("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{y(Zh(r)?r:Yh),M()}),p("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{y(Kh),M()}),p("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{a.hidden=!0,o.hidden=!1}),p("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>S(!0)),p("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>S(!1)),o.onclick=()=>S(!0);for(let[D,I,F,P,k]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]){let X=document.createElement("label");X.textContent=I;let N=document.createElement("input");N.type="range",N.min=F,N.max=P,N.step=k,N.id="presentation_"+D,N.style.width="100%",N.oninput=()=>w({[D]:Number(N.value)}),N.onchange=()=>{b(),M()},g.set(D,N),X.append(N),a.append(X)}let x=D=>({x:D.clientX,y:D.clientY});function T(D){c&&(D.preventDefault(),D.stopImmediatePropagation(),d.set(D.pointerId,x(D)),e.setPointerCapture(D.pointerId),f={frame:i.frameState(),points:[...d.values()]})}function C(D){if(!c||!d.has(D.pointerId)||!f)return;D.preventDefault(),D.stopImmediatePropagation(),d.set(D.pointerId,x(D));let I=[...d.values()],F=f.points,P=f.frame;if(I.length>=2&&F.length>=2){let k=X=>Math.hypot(X[0].x-X[1].x,X[0].y-X[1].y);w({scale:P.scale*k(I)/Math.max(5,k(F))})}else if(I.length===1&&F.length===1){let k=(I[0].x-F[0].x)/e.clientWidth,X=(I[0].y-F[0].y)/e.clientHeight;w(_.value==="rotate"?{yaw:P.yaw+k*300,pitch:P.pitch+X*100}:{x:P.x+k,y:P.y+X})}}function R(D){!c||!d.has(D.pointerId)||(D.preventDefault(),D.stopImmediatePropagation(),d.delete(D.pointerId),e.hasPointerCapture(D.pointerId)&&e.releasePointerCapture(D.pointerId),u&&(cancelAnimationFrame(u),b()),M(),f={frame:i.frameState(),points:[...d.values()]})}let U=[["pointerdown",T],["pointermove",C],["pointerup",R],["pointercancel",R]];for(let[D,I]of U)e.addEventListener(D,I,!0);return{get active(){return c},toggle(){if(c){S(!0);return}c=!0,l=i.frameState(),E(),a.hidden=!1,o.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{c&&S(!0)},dispose(){c&&S(!0);for(let[D,I]of U)e.removeEventListener(D,I,!0);a.remove(),o.remove()},state:()=>i.frameState()}}var Vm=!0,di=document.querySelector("#stage"),km=document.querySelector("#status"),Ni=document.querySelector("#editor"),Ar=null,rc=null,Oa=0,jh="",Jh,at,st,Rr,ac,fi,za,Lt,sc=0,$n=!1,Ba=!0,pi=document.createElement("button");pi.id="finishPaint";pi.hidden=!0;pi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(pi);function Os(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),pi.hidden=!0,Ni.classList.remove("open")}pi.onclick=Os;var En=i=>{let e={...i,nonce:jh};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},$h=i=>{km.textContent=i,km.hidden=!i};function oc(){Lt=null,pi.hidden=!0,fi?.dispose(),za?.dispose(),ac?.dispose(),st?.stop("renderer-close"),Rr?.dispose(),at?.dispose(),Jh?.dispose(),za=fi=ac=st=Rr=at=Jh=null,Ni.replaceChildren()}async function zm(i,e,t){let n=++Oa;jh=e,$n=!1,di.dataset.snowbreakPaused="false",oc(),$h("\u6B63\u5728\u52A0\u8F7D\u6069\u96C5\u548C\u75C5\u623F\u2026");let r,s,a;try{if(t){if(!Ar)throw new Error("\u8BF7\u5148\u5BFC\u5165\u6069\u96C5\u6574\u5408\u5305");r=await Ar.selectVariant(t)}else{Ar=null;let g=await fetch(i);if(!g.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await jf(new Uint8Array(await g.arrayBuffer()))}if(r.manifest.characterId!=="Enya")throw new Error("\u6B64\u5165\u53E3\u5F53\u524D\u53EA\u652F\u6301\u6069\u96C5\u62A4\u58EB\u5305");if(s=await Sm(di,r.runtime),a=r.runtime.getAsset("voiceCatalog")?await Im(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==Oa){s.dispose(),a.dispose(),r.runtime.dispose();return}Ar=r.variants.length?r:null,r.selection&&localStorage.setItem("enya-collection-selection",r.selection.id),Jh=r.runtime,at=s,Rr=a;let o=at.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,st=Cm(at,{audioForSample:g=>Rr.getAudio(g)}),at.sceneInteractions.configure({scene:()=>st.snapshot().sceneId,reaction:g=>{st.playSceneReaction(g,{withVoice:Ba})},voice:g=>{if(Ba){let _=Rr.getAudio(g);_&&(_.currentTime=0,_.play().catch(()=>{}))}},event:En}),at.showFaceCandidate(!0),st.enterStandby(),at.faceViewer(),sc=performance.now(),fi=Bm(at,di,"presentation:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId),{initialFrame:at.presentationDefault,onEditing:g=>{g?(st.stop("presentation-edit"),Os()):$n||st.enterStandby()}}),za=of(at,"lighting:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId));let c="";at.setFrameHandler(()=>{let g=performance.now();if($n||st.tick(Math.min(100,Math.max(0,g-sc))),sc=g,!$n&&Lt){let p=(g-Lt.start)/1e3,M=Math.min(Lt.duration,Lt.stop===void 0?1/0:(Lt.stop-Lt.start)/1e3+.3);if(p>=M)Lt=null;else{let E=Math.max(0,Math.min(1,p/.3,(M-p)/.3)),y=E*E*(3-2*E);at.applyLearnedMotion(Lt.id,p,y)}}let _=st.snapshot(),m=Lt?"learned:"+Lt.id:_.status;m!==c&&(c=m,En({type:"selfState",state:ka()}),En({type:"playback",active:!!Lt||["playing","scene-preview","local-arm-preview"].includes(_.status),status:m}))});let l=r.manifest.resources.filter(g=>g.kind==="geometry").map(g=>g.assetId).join("-"),u="surface:"+r.manifest.skinId+":"+l;ac=Nm(at,di,Ni,{load:()=>JSON.parse(localStorage.getItem(u)||"{}"),save:g=>localStorage.setItem(u,JSON.stringify(g)),tracker:Om({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!$n,onEvent:async g=>{En({type:"touch",region:g.region,label:g.regionLabel,gesture:g.gesture,confidence:g.confidence,source:g.regionSource,durationMs:g.durationMs,frequency:g.frequency,completed:!0}),Vm||await st.dispatchSurfaceTouch(g,{withVoice:Ba})}});let h=document.createElement("button");h.textContent="\u5173\u95ED\u5DE5\u5177",h.onclick=Os,Ni.prepend(h);let f=Ni.querySelector("#snowSurfaceRegion"),d=Ni.querySelector("#snowSurfaceEdit");d.addEventListener("change",()=>{d.checked&&(Ni.classList.remove("open"),pi.textContent="\u5B8C\u6210"+f.selectedOptions[0].textContent+"\u6807\u6CE8",pi.hidden=!1)}),$h(""),En({type:"ready",bodyActions:at.embodiment.snapshot().available,selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:at.sampleOptions().map(g=>g.id),voices:Rr.snapshot().available,learned:at.learnedOptions().map(g=>g.id)}),window.__snowbreakMigration={display:at,adapter:st,editor:ac,presentation:fi,manifest:r.manifest}}catch(o){if(n!==Oa){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}oc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),$h("\u6069\u96C5\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),En({type:"error",message:String(o.message||o)})}}async function $M(i){if(i.type==="dispose"){Oa++,oc();return}if(i.type==="load")return zm(i.url,i.nonce);if(i.type==="variant")return Ar?.variants.some(e=>e.id===i.id)?zm(null,jh,i.id):void 0;if(st){if(i.type==="body"){if($n)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Lt=null,st.snapshot().sceneId||(st.stop("body-command"),st.enterStandby()),at.embodiment.command(i.id),await new Promise(e=>setTimeout(e,750)),En({type:"selfState",state:ka(),requestId:i.requestId});return}if(i.type==="gesture"){if($n)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Lt=null,st.snapshot().sceneId||(st.stop("ai-gesture"),st.enterStandby()),at.embodiment.playGesture(i.id,i.plan),En({type:"selfState",state:ka()});return}if(i.type==="touchPolicy"){Vm=!!i.aiControlled;return}if(i.type==="speechLevel"){at.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){at.setGaze(i.x,i.y);return}if(i.type==="pause"){rc=st.snapshot().sceneId,at.sceneInteractions.cancel(),at.embodiment.reset(),at.resetSenses(),Lt=null,$n=!0,za?.close(),fi?.close(),di.dataset.snowbreakPaused="true",st.stop("background"),Os();return}if(i.type==="resume"){$n=!1,di.dataset.snowbreakPaused="false",sc=performance.now(),rc?(st.enterScene(rc),rc=null):st.enterStandby();return}if(i.type==="stop"){if(at.embodiment.reset(),Lt){Lt.stop=performance.now();return}st.stop(),st.enterStandby();return}if(i.type==="officialTouchPoints"){at.sceneInteractions.togglePoints()||En({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){Lt=null,fi.close(),Ni.classList.contains("open")||!pi.hidden?Os():Ni.classList.add("open");return}if(i.type==="lightingEdit"){fi.close(),Os(),za.toggle();return}if(i.type==="frameEdit"){Lt=null,fi.toggle();return}if(i.type==="scene")return at.setSceneVisible(!!i.visible);if(i.type==="room")return at.setRoomVisible(!!i.visible);if(i.type==="voice"){if(Ba=!!i.enabled,!Ba){let e=st.snapshot().sceneId;st.stop("voice-disabled"),e?st.enterScene(e):st.enterStandby()}return}if(i.type==="sample"&&at.sampleOptions().some(e=>e.id===i.id)){if(at.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)){Lt=null,at.embodiment.reset(),st.enterScene(i.id),En({type:"selfState",state:ka()});return}if(st.snapshot().sceneId){let t=i.id==="head"?at.sceneInteractions.headReaction():null;await st.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}at.embodiment.releaseHands(),Lt=null,fi.close(),$n=!1,st.stop(),st.selectSample(i.id),st.setStandbyAfterSample(!0),(i.withVoice&&Rr.getAudio(i.id)?await st.playWithVoice():st.playSample()).accepted||En({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){at.embodiment.releaseHands();let e=at.learnedOptions().find(t=>t.id===i.id);if(!e)return;fi.close(),st.stop("learned-motion"),st.enterStandby(),Lt={id:e.id,duration:e.duration,start:performance.now()}}}}function ka(){return at?{...at.embodiment.snapshot(),interactionScene:st?.snapshot().sceneId||null,outfit:Ar?.selection?.outfit||"unknown",mode:Ar?.selection?.mode||"unknown"}:null}function JM(){if(!at||$n)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(di.width,di.height);i.width=Math.round(di.width*e),i.height=Math.round(di.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),at.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:ka,portrait:JM,receive:i=>{$M(i).catch(e=>En({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{Oa++,oc()});En({type:"pageReady"});})();
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
