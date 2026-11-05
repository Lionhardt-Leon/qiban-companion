(()=>{var Wm=Object.defineProperty;var Xm=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var qm=(i,e)=>{for(var t in e)Wm(i,t,{get:e[t],enumerable:!0})};var Kf={};qm(Kf,{AsyncCompress:()=>eg,AsyncDecompress:()=>rg,AsyncDeflate:()=>Ff,AsyncGunzip:()=>Bf,AsyncGzip:()=>eg,AsyncInflate:()=>wc,AsyncUnzipInflate:()=>mg,AsyncUnzlib:()=>zf,AsyncZipDeflate:()=>ug,AsyncZlib:()=>ng,Compress:()=>uc,DecodeUTF8:()=>og,Decompress:()=>pc,Deflate:()=>Rn,EncodeUTF8:()=>lg,FlateErrorCode:()=>jm,Gunzip:()=>qa,Gzip:()=>uc,Inflate:()=>cn,Unzip:()=>gg,UnzipInflate:()=>pg,UnzipPassThrough:()=>Zf,Unzlib:()=>Za,Zip:()=>hg,ZipDeflate:()=>cg,ZipPassThrough:()=>Bs,Zlib:()=>fc,compress:()=>tg,compressSync:()=>hc,decompress:()=>sg,decompressSync:()=>ag,deflate:()=>Of,deflateSync:()=>Hs,gunzip:()=>kf,gunzipSync:()=>Ya,gzip:()=>tg,gzipSync:()=>hc,inflate:()=>Ec,inflateSync:()=>zr,strFromU8:()=>Ac,strToU8:()=>Oi,unzip:()=>xg,unzipSync:()=>_g,unzlib:()=>Vf,unzlibSync:()=>Ka,zip:()=>fg,zipSync:()=>dg,zlib:()=>ig,zlibSync:()=>dc});function nr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function Of(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Or],function(n){return Bi(Hs(n.data[0],n.data[1]))},0,t)}function Hs(i,e){return tr(i,e||{},0,0)}function Ec(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Fr],function(n){return Bi(zr(n.data[0],_c(n.data[1])))},1,t)}function zr(i,e){return zs(i,{i:2},e&&e.out,e&&e.dictionary)}function tg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Or,Pf,function(){return[hc]}],function(n){return Bi(hc(n.data[0],n.data[1]))},2,t)}function hc(i,e){e||(e={});var t=Ur(),n=i.length;t.p(i);var r=tr(i,e,Mc(e),8),s=r.length;return yc(r,e),pt(r,s-8,t.d()),pt(r,s-4,n),r}function kf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Fr,Lf,function(){return[Ya]}],function(n){return Bi(Ya(n.data[0],n.data[1]))},3,t)}function Ya(i,e){var t=vc(i);return t+8>i.length&&Be(6,"invalid gzip data"),zs(i.subarray(t,-8),{i:2},e&&e.out||new Je(Uf(i)),e&&e.dictionary)}function ig(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Or,Nf,function(){return[dc]}],function(n){return Bi(dc(n.data[0],n.data[1]))},4,t)}function dc(i,e){e||(e={});var t=Ja();t.p(i);var n=tr(i,e,e.dictionary?6:2,4);return bc(n,e),pt(n,n.length-4,t.d()),n}function Vf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),Br(i,e,[Fr,Df,function(){return[Ka]}],function(n){return Bi(Ka(n.data[0],_c(n.data[1])))},5,t)}function Ka(i,e){return zs(i.subarray(Sc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function sg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Be(7),i[0]==31&&i[1]==139&&i[2]==8?kf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Ec(i,e,t):Vf(i,e,t)}function ag(i,e){return i[0]==31&&i[1]==139&&i[2]==8?Ya(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?zr(i,e):Ka(i,e)}function Oi(i,e){if(e){for(var t=new Je(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(xf)return xf.encode(i);for(var r=i.length,s=new Je(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new Je(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return An(s,0,a)}function Ac(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(mc)return mc.decode(i);var r=Gf(i),s=r.s,t=r.r;return t.length&&Be(8),s}}function fg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Be(7);var n={};Tc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],h=function(){for(var g=0;g<u.length;++g)u[g]()},f=function(g,p){$a(function(){t(g,p)})};$a(function(){f=t});var d=function(){var g=new Je(o+22),p=a,M=o-a;o=0;for(var E=0;E<c;++E){var y=l[E];try{var S=y.c.length;Pr(g,o,y,y.f,y.u,S);var b=30+y.f.length+Fi(y.extra),w=o+b;g.set(y.c,w),Pr(g,a,y,y.f,y.u,S,o,y.m),a+=16+b+(y.m?y.m.length:0),o=w+S}catch(_){return f(_,null)}}Rc(g,a,l.length,M,p),f(null,g)};s||d();for(var m=function(g){var p=r[g],M=n[p],E=M[0],y=M[1],S=Ur(),b=E.length;S.p(E);var w=Oi(p),_=w.length,T=y.comment,R=T&&Oi(T),L=R&&R.length,I=Fi(y.extra),O=y.level==0?0:8,P=function(D,F){if(D)h(),f(D,null);else{var k=F.length;l[g]=Vs(y,{size:b,crc:S.d(),c:F,f:w,m:R,u:_!=p.length||R&&T.length!=L,compression:O}),a+=30+_+I+k,o+=76+2*(_+I)+(L||0)+k,--s||d()}};if(_>65535&&P(Be(11,0,1),null),!O)P(null,E);else if(b<16e4)try{P(null,Hs(E,y))}catch(D){P(D,null)}else u.push(Of(E,y,P))},x=0;x<c;++x)m(x);return h}function dg(i,e){e||(e={});var t={},n=[];Tc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=Oi(a),f=h.length,d=l.comment,m=d&&Oi(d),x=m&&m.length,g=Fi(l.extra);f>65535&&Be(11);var p=u?Hs(c,l):c,M=p.length,E=Ur();E.p(c),n.push(Vs(l,{size:c.length,crc:E.d(),c:p,f:h,m,u:f!=a.length||m&&d.length!=x,o:r,compression:u})),r+=30+f+g+M,s+=76+2*(f+g)+(x||0)+M}for(var y=new Je(s+22),S=r,b=s-r,w=0;w<n.length;++w){var h=n[w];Pr(y,h.o,h,h.f,h.u,h.c.length);var _=30+h.f.length+Fi(h.extra);y.set(h.c,h.o+_),Pr(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+_+(h.m?h.m.length:0)}return Rc(y,r,n.length,b,S),y}function xg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Be(7);var n=[],r=function(){for(var g=0;g<n.length;++g)n[g]()},s={},a=function(g,p){$a(function(){t(g,p)})};$a(function(){a=t});for(var o=i.length-22;Pt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(Be(13,0,1),null),r;var c=en(i,o+8);if(c){var l=c,u=Pt(i,o+16),h=u==4294967295||l==65535;if(h){var f=Pt(i,o-12);h=Pt(i,f)==101075792,h&&(l=c=Pt(i,f+32),u=Pt(i,f+48))}for(var d=e&&e.filter,m=function(g){var p=qf(i,u,h),M=p[0],E=p[1],y=p[2],S=p[3],b=p[4],w=p[5],_=Xf(i,w);u=b;var T=function(L,I){L?(r(),a(L,null)):(I&&(s[S]=I),--c||a(null,s))};if(!d||d({name:S,size:E,originalSize:y,compression:M}))if(!M)T(null,An(i,_,_+E));else if(M==8){var R=i.subarray(_,_+E);if(y<524288||E>.8*y)try{T(null,zr(R,{out:new Je(y)}))}catch(L){T(L,null)}else n.push(Ec(R,{size:y},T))}else T(Be(14,"unknown compression type "+M,1),null);else T(null,null)},x=0;x<l;++x)m(x)}else a(null,{});return r}function _g(i,e){for(var t={},n=i.length-22;Pt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Be(13);var r=en(i,n+8);if(!r)return{};var s=Pt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Pt(i,n-12);a=Pt(i,o)==101075792,a&&(r=Pt(i,o+32),s=Pt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=qf(i,s,a),h=u[0],f=u[1],d=u[2],m=u[3],x=u[4],g=u[5],p=Xf(i,g);s=x,(!c||c({name:m,size:f,originalSize:d,compression:h}))&&(h?h==8?t[m]=zr(i.subarray(p,p+f),{out:new Je(d)}):Be(14,"unknown compression type "+h):t[m]=An(i,p,p+f))}return t}var mf,Jm,Je,tn,ks,Lr,Nr,Fs,_f,yf,gc,Wa,vf,Mf,oc,Os,di,mt,Tn,pi,mt,mt,mt,mt,Ir,mt,bf,Sf,wf,Ef,Va,En,Ha,Dr,An,jm,Tf,Be,zs,Kn,Rr,Ga,Xa,lc,Cr,xc,cc,Af,Ui,Rf,Cf,Ur,Ja,tr,Vs,gf,za,Qm,If,Fr,Or,Pf,Lf,Nf,Df,Bi,_c,Br,Cn,kr,en,Pt,ac,pt,yc,vc,Uf,Mc,bc,Sc,Rn,Ff,cn,wc,uc,eg,qa,Bf,fc,ng,Za,zf,pc,rg,Tc,xf,mc,Hf,Gf,og,lg,Wf,Xf,qf,Yf,Fi,Pr,Rc,Bs,cg,ug,hg,Zf,pg,mg,gg,$a,$f=Xm(()=>{mf={},Jm=(function(i,e,t,n,r){var s=new Worker(mf[e]||(mf[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),Je=Uint8Array,tn=Uint16Array,ks=Int32Array,Lr=new Je([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nr=new Je([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fs=new Je([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_f=function(i,e){for(var t=new tn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ks(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},yf=_f(Lr,2),gc=yf.b,Wa=yf.r;gc[28]=258,Wa[258]=28;vf=_f(Nr,0),Mf=vf.b,oc=vf.r,Os=new tn(32768);for(mt=0;mt<32768;++mt)di=(mt&43690)>>1|(mt&21845)<<1,di=(di&52428)>>2|(di&13107)<<2,di=(di&61680)>>4|(di&3855)<<4,Os[mt]=((di&65280)>>8|(di&255)<<8)>>1;Tn=(function(i,e,t){for(var n=i.length,r=0,s=new tn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new tn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new tn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Os[h]>>c]=l}else for(o=new tn(n),r=0;r<n;++r)i[r]&&(o[r]=Os[a[i[r]-1]++]>>15-i[r]);return o}),pi=new Je(288);for(mt=0;mt<144;++mt)pi[mt]=8;for(mt=144;mt<256;++mt)pi[mt]=9;for(mt=256;mt<280;++mt)pi[mt]=7;for(mt=280;mt<288;++mt)pi[mt]=8;Ir=new Je(32);for(mt=0;mt<32;++mt)Ir[mt]=5;bf=Tn(pi,9,0),Sf=Tn(pi,9,1),wf=Tn(Ir,5,0),Ef=Tn(Ir,5,1),Va=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},En=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ha=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Dr=function(i){return(i+7)/8|0},An=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Je(i.subarray(e,t))},jm={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Tf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Be=function(i,e,t){var n=new Error(e||Tf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Be),!t)throw n;return n},zs=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Je(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Je(r*3));var l=function(oe){var re=t.length;if(oe>re){var ce=new Je(Math.max(re*2,oe));ce.set(t),t=ce}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,m=e.d,x=e.m,g=e.n,p=r*8;do{if(!d){u=En(i,h,1);var M=En(i,h+1,3);if(h+=3,M)if(M==1)d=Sf,m=Ef,x=9,g=5;else if(M==2){var b=En(i,h,31)+257,w=En(i,h+10,15)+4,_=b+En(i,h+5,31)+1;h+=14;for(var T=new Je(_),R=new Je(19),L=0;L<w;++L)R[Fs[L]]=En(i,h+L*3,7);h+=w*3;for(var I=Va(R),O=(1<<I)-1,P=Tn(R,I,1),L=0;L<_;){var D=P[En(i,h,O)];h+=D&15;var E=D>>4;if(E<16)T[L++]=E;else{var F=0,k=0;for(E==16?(k=3+En(i,h,3),h+=2,F=T[L-1]):E==17?(k=3+En(i,h,7),h+=3):E==18&&(k=11+En(i,h,127),h+=7);k--;)T[L++]=F}}var Y=T.subarray(0,b),N=T.subarray(b);x=Va(Y),g=Va(N),d=Tn(Y,x,1),m=Tn(N,g,1)}else Be(1);else{var E=Dr(h)+4,y=i[E-4]|i[E-3]<<8,S=E+y;if(S>r){c&&Be(0);break}o&&l(f+y),t.set(i.subarray(E,S),f),e.b=f+=y,e.p=h=S*8,e.f=u;continue}if(h>p){c&&Be(0);break}}o&&l(f+131072);for(var U=(1<<x)-1,V=(1<<g)-1,se=h;;se=h){var F=d[Ha(i,h)&U],ae=F>>4;if(h+=F&15,h>p){c&&Be(0);break}if(F||Be(2),ae<256)t[f++]=ae;else if(ae==256){se=h,d=null;break}else{var Oe=ae-254;if(ae>264){var L=ae-257,Ee=Lr[L];Oe=En(i,h,(1<<Ee)-1)+gc[L],h+=Ee}var Ve=m[Ha(i,h)&V],X=Ve>>4;Ve||Be(3),h+=Ve&15;var N=Mf[X];if(X>3){var Ee=Nr[X];N+=Ha(i,h)&(1<<Ee)-1,h+=Ee}if(h>p){c&&Be(0);break}o&&l(f+131072);var Z=f+Oe;if(f<N){var le=s-N,ve=Math.min(N,Z);for(le+f<0&&Be(3);f<ve;++f)t[f]=n[le+f]}for(;f<Z;++f)t[f]=t[f-N]}}e.l=d,e.p=se,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=m,e.n=g)}while(!u);return f!=t.length&&a?An(t,0,f):t.subarray(0,f)},Kn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Rr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Ga=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Ui,l:0};if(r==1){var a=new Je(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,b){return S.f-b.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var d=new tn(f+1),m=Xa(t[u-1],d,0);if(m>e){var n=0,x=0,g=m-e,p=1<<g;for(s.sort(function(b,w){return d[w.s]-d[b.s]||b.f-w.f});n<r;++n){var M=s[n].s;if(d[M]>e)x+=p-(1<<m-d[M]),d[M]=e;else break}for(x>>=g;x>0;){var E=s[n].s;d[E]<e?x-=1<<e-d[E]++-1:++n}for(;n>=0&&x;--n){var y=s[n].s;d[y]==e&&(--d[y],++x)}m=e}return{t:new Je(d),l:m}},Xa=function(i,e,t){return i.s==-1?Math.max(Xa(i.l,e,t+1),Xa(i.r,e,t+1)):e[i.s]=t},lc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new tn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Cr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},xc=function(i,e,t){var n=t.length,r=Dr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},cc=function(i,e,t,n,r,s,a,o,c,l,u){Kn(e,u++,t),++r[256];for(var h=Ga(r,15),f=h.t,d=h.l,m=Ga(s,15),x=m.t,g=m.l,p=lc(f),M=p.c,E=p.n,y=lc(x),S=y.c,b=y.n,w=new tn(19),_=0;_<M.length;++_)++w[M[_]&31];for(var _=0;_<S.length;++_)++w[S[_]&31];for(var T=Ga(w,7),R=T.t,L=T.l,I=19;I>4&&!R[Fs[I-1]];--I);var O=l+5<<3,P=Cr(r,pi)+Cr(s,Ir)+a,D=Cr(r,f)+Cr(s,x)+a+14+3*I+Cr(w,R)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&O<=P&&O<=D)return xc(e,u,i.subarray(c,c+l));var F,k,Y,N;if(Kn(e,u,1+(D<P)),u+=2,D<P){F=Tn(f,d,0),k=f,Y=Tn(x,g,0),N=x;var U=Tn(R,L,0);Kn(e,u,E-257),Kn(e,u+5,b-1),Kn(e,u+10,I-4),u+=14;for(var _=0;_<I;++_)Kn(e,u+3*_,R[Fs[_]]);u+=3*I;for(var V=[M,S],se=0;se<2;++se)for(var ae=V[se],_=0;_<ae.length;++_){var Oe=ae[_]&31;Kn(e,u,U[Oe]),u+=R[Oe],Oe>15&&(Kn(e,u,ae[_]>>5&127),u+=ae[_]>>12)}}else F=bf,k=pi,Y=wf,N=Ir;for(var _=0;_<o;++_){var Ee=n[_];if(Ee>255){var Oe=Ee>>18&31;Rr(e,u,F[Oe+257]),u+=k[Oe+257],Oe>7&&(Kn(e,u,Ee>>23&31),u+=Lr[Oe]);var Ve=Ee&31;Rr(e,u,Y[Ve]),u+=N[Ve],Ve>3&&(Rr(e,u,Ee>>5&8191),u+=Nr[Ve])}else Rr(e,u,F[Ee]),u+=k[Ee]}return Rr(e,u,F[256]),u+k[256]},Af=new ks([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ui=new Je(0),Rf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new Je(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=Af[e-1],f=h>>13,d=h&8191,m=(1<<t)-1,x=s.p||new tn(32768),g=s.h||new tn(m+1),p=Math.ceil(t/3),M=2*p,E=function(pe){return(i[pe]^i[pe+1]<<p^i[pe+2]<<M)&m},y=new ks(25e3),S=new tn(288),b=new tn(32),w=0,_=0,T=s.i||0,R=0,L=s.w||0,I=0;T+2<a;++T){var O=E(T),P=T&32767,D=g[O];if(x[P]=D,g[O]=P,L<=T){var F=a-T;if((w>7e3||R>24576)&&(F>423||!l)){u=cc(i,c,0,y,S,b,_,R,I,T-I,u),R=w=_=0,I=T;for(var k=0;k<286;++k)S[k]=0;for(var k=0;k<30;++k)b[k]=0}var Y=2,N=0,U=d,V=P-D&32767;if(F>2&&O==E(T-V))for(var se=Math.min(f,F)-1,ae=Math.min(32767,T),Oe=Math.min(258,F);V<=ae&&--U&&P!=D;){if(i[T+Y]==i[T+Y-V]){for(var Ee=0;Ee<Oe&&i[T+Ee]==i[T+Ee-V];++Ee);if(Ee>Y){if(Y=Ee,N=V,Ee>se)break;for(var Ve=Math.min(V,Ee-2),X=0,k=0;k<Ve;++k){var Z=T-V+k&32767,le=x[Z],ve=Z-le&32767;ve>X&&(X=ve,D=Z)}}}P=D,D=x[P],V+=P-D&32767}if(N){y[R++]=268435456|Wa[Y]<<18|oc[N];var oe=Wa[Y]&31,re=oc[N]&31;_+=Lr[oe]+Nr[re],++S[257+oe],++b[re],L=T+Y,++w}else y[R++]=i[T],++S[i[T]]}}for(T=Math.max(T,L);T<a;++T)y[R++]=i[T],++S[i[T]];u=cc(i,c,l,y,S,b,_,R,I,T-I,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=g,s.p=x,s.i=T,s.w=L)}else{for(var T=s.w||0;T<a+l;T+=65535){var ce=T+65535;ce>=a&&(c[u/8|0]=l,ce=a),u=xc(c,u+1,i.subarray(T,ce))}s.i=a}return An(o,0,n+Dr(u)+r)},Cf=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Ur=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Cf[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Ja=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},tr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new Je(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Rf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},Vs=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},gf=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var h in o.prototype)e+=";"+c+".prototype."+h+"="+o.prototype[h].toString()}else e+=l}else t[c]=o}return e},za=[],Qm=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},If=function(i,e,t,n){if(!za[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=gf(i[o],r,s);za[t]={c:gf(i[a],r,s),e:s}}var c=Vs({},za[t].e);return Jm(za[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Qm(c),n)},Fr=function(){return[Je,tn,ks,Lr,Nr,Fs,gc,Mf,Sf,Ef,Os,Tf,Tn,Va,En,Ha,Dr,An,Be,zs,zr,Bi,_c]},Or=function(){return[Je,tn,ks,Lr,Nr,Fs,Wa,oc,bf,pi,wf,Ir,Os,Af,Ui,Tn,Kn,Rr,Ga,Xa,lc,Cr,xc,cc,Dr,An,Rf,tr,Hs,Bi]},Pf=function(){return[yc,Mc,pt,Ur,Cf]},Lf=function(){return[vc,Uf]},Nf=function(){return[bc,pt,Ja]},Df=function(){return[Sc]},Bi=function(i){return postMessage(i,[i.buffer])},_c=function(i){return i&&{out:i.size&&new Je(i.size),dictionary:i.dictionary}},Br=function(i,e,t,n,r,s){var a=If(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Cn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},kr=function(i,e,t,n,r,s,a){var o,c=If(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||Be(5),o&&e.ondata(Be(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},en=function(i,e){return i[e]|i[e+1]<<8},Pt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ac=function(i,e){return Pt(i,e)+Pt(i,e+4)*4294967296},pt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},yc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&pt(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},vc=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Be(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Uf=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Mc=function(i){return 10+(i.filename?i.filename.length+1:0)},bc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=Ja();r.p(e.dictionary),pt(i,2,r.d())}},Sc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Be(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Be(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Rn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new Je(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(tr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||Be(5),this.s.l&&Be(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new Je(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||Be(5),this.s.l&&Be(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),Ff=(function(){function i(e,t){kr([Or,function(){return[Cn,Rn]}],this,nr.call(this,e,t),function(n){var r=new Rn(n.data);onmessage=Cn(r)},6,1)}return i})();cn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new Je(32768),this.p=new Je(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||Be(5),this.d&&Be(4),!this.p.length)this.p=e;else if(e.length){var t=new Je(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=zs(this.p,this.s,this.o);this.ondata(An(n,t,this.s.b),this.d),this.o=An(n,this.s.b-32768),this.s.b=this.o.length,this.p=An(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),wc=(function(){function i(e,t){kr([Fr,function(){return[Cn,cn]}],this,nr.call(this,e,t),function(n){var r=new cn(n.data);onmessage=Cn(r)},7,0)}return i})();uc=(function(){function i(e,t){this.c=Ur(),this.l=0,this.v=1,Rn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Rn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=tr(e,this.o,this.v&&Mc(this.o),t&&8,this.s);this.v&&(yc(n,this.o),this.v=0),t&&(pt(n,n.length-8,this.c.d()),pt(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Rn.prototype.flush.call(this)},i})(),eg=(function(){function i(e,t){kr([Or,Pf,function(){return[Cn,Rn,uc]}],this,nr.call(this,e,t),function(n){var r=new uc(n.data);onmessage=Cn(r)},8,1)}return i})();qa=(function(){function i(e,t){this.v=1,this.r=0,cn.call(this,e,t)}return i.prototype.push=function(e,t){if(cn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?vc(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}cn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Dr(this.s.p)+9,this.s={i:0},this.o=new Je(0),this.push(new Je(0),t))},i})(),Bf=(function(){function i(e,t){var n=this;kr([Fr,Lf,function(){return[Cn,cn,qa]}],this,nr.call(this,e,t),function(r){var s=new qa(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Cn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();fc=(function(){function i(e,t){this.c=Ja(),this.v=1,Rn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Rn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=tr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(bc(n,this.o),this.v=0),t&&pt(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Rn.prototype.flush.call(this)},i})(),ng=(function(){function i(e,t){kr([Or,Nf,function(){return[Cn,Rn,fc]}],this,nr.call(this,e,t),function(n){var r=new fc(n.data);onmessage=Cn(r)},10,1)}return i})();Za=(function(){function i(e,t){cn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(cn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Sc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&Be(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),cn.prototype.c.call(this,t)},i})(),zf=(function(){function i(e,t){kr([Fr,Df,function(){return[Cn,cn,Za]}],this,nr.call(this,e,t),function(n){var r=new Za(n.data);onmessage=Cn(r)},11,0)}return i})();pc=(function(){function i(e,t){this.o=nr.call(this,e,t)||{},this.G=qa,this.I=cn,this.Z=Za}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||Be(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new Je(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),rg=(function(){function i(e,t){pc.call(this,e,t),this.queuedSize=0,this.G=Bf,this.I=wc,this.Z=zf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,pc.prototype.push.call(this,e,t)},i})();Tc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=Vs(n,s[1]),s=s[0]),s instanceof Je?t[a]=[s,o]:(t[a+="/"]=[new Je(0),o],Tc(s,a,t,n))}},xf=typeof TextEncoder<"u"&&new TextEncoder,mc=typeof TextDecoder<"u"&&new TextDecoder,Hf=0;try{mc.decode(Ui,{stream:!0}),Hf=1}catch{}Gf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:An(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},og=(function(){function i(e){this.ondata=e,Hf?this.t=new TextDecoder:this.p=Ui}return i.prototype.push=function(e,t){if(this.ondata||Be(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&Be(8),this.t=null);return}this.p||Be(4);var n=new Je(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=Gf(n),s=r.s,a=r.r;t?(a.length&&Be(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),lg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||Be(5),this.d&&Be(4),this.ondata(Oi(e),this.d=t||!1)},i})();Wf=function(i){return i==1?3:i<6?2:i==9?1:0},Xf=function(i,e){return e+30+en(i,e+26)+en(i,e+28)},qf=function(i,e,t){var n=en(i,e+28),r=Ac(i.subarray(e+46,e+46+n),!(en(i,e+8)&2048)),s=e+46+n,a=Pt(i,e+20),o=t&&a==4294967295?Yf(i,s):[a,Pt(i,e+24),Pt(i,e+42)],c=o[0],l=o[1],u=o[2];return[en(i,e+10),c,l,r,s+en(i,e+30)+en(i,e+32),u]},Yf=function(i,e){for(;en(i,e)!=1;e+=4+en(i,e+2));return[ac(i,e+12),ac(i,e+4),ac(i,e+20)]},Fi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Be(9),e+=n+4}return e},Pr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=Fi(l);pt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Be(10),pt(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(pt(i,e,t.crc),pt(i,e+4,s<0?-s-2:s),pt(i,e+8,t.size)),pt(i,e+12,c),pt(i,e+14,h),e+=16,a!=null&&(pt(i,e,u),pt(i,e+6,t.attrs),pt(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var m in l){var x=l[m],g=x.length;pt(i,e,+m),pt(i,e+2,g),i.set(x,e+4),e+=4+g}return u&&(i.set(o,e),e+=u),e},Rc=function(i,e,t,n,r){pt(i,e,101010256),pt(i,e+8,t),pt(i,e+10,t),pt(i,e+12,n),pt(i,e+16,r)},Bs=(function(){function i(e){this.filename=e,this.c=Ur(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||Be(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),cg=(function(){function i(e,t){var n=this;t||(t={}),Bs.call(this,e),this.d=new Rn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Wf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){Bs.prototype.push.call(this,e,t)},i})(),ug=(function(){function i(e,t){var n=this;t||(t={}),Bs.call(this,e),this.d=new Ff(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=Wf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){Bs.prototype.push.call(this,e,t)},i})(),hg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||Be(5),this.d&2)this.ondata(Be(4+(this.d&1)*8,0,1),null,!1);else{var n=Oi(e.filename),r=n.length,s=e.comment,a=s&&Oi(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Fi(e.extra)+30;r>65535&&this.ondata(Be(11,0,1),null,!1);var l=new Je(c);Pr(l,0,e,n,o,-1);var u=[l],h=function(){for(var g=0,p=u;g<p.length;g++){var M=p[g];t.ondata(null,M,!1)}u=[]},f=this.d;this.d=0;var d=this.u.length,m=Vs(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var g=t.u[d+1];g?g.r():t.d=1}f=1}}),x=0;e.ondata=function(g,p,M){if(g)t.ondata(g,p,M),t.terminate();else if(x+=p.length,u.push(p),M){var E=new Je(16);pt(E,0,134695760),pt(E,4,e.crc),pt(E,8,x),pt(E,12,e.size),u.push(E),m.c=x,m.b=c+x+16,m.crc=e.crc,m.size=e.size,f&&m.r(),f=1}else f&&h()},this.u.push(m)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Be(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Fi(a.extra)+(a.o?a.o.length:0)}for(var o=new Je(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Pr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Fi(a.extra)+(a.o?a.o.length:0),t+=a.b}Rc(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();Zf=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),pg=(function(){function i(){var e=this;this.i=new cn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),mg=(function(){function i(e,t){var n=this;t<32e4?this.i=new cn(function(r,s){n.ondata(null,r,s)}):(this.i=new wc(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=An(e,0)),this.i.push(e,t)},i.compression=8,i})(),gg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:Zf},this.p=Ui}return i.prototype.push=function(e,t){var n=this;if(this.onfile||Be(5),this.p||Be(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new Je(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,h=this.c,f=h&&this.d,d=function(){var p,M=Pt(l,o);if(M==67324752){a=1,c=o,m.d=null,m.c=0;var E=en(l,o+6),y=en(l,o+8),S=E&2048,b=E&8,w=en(l,o+26),_=en(l,o+28);if(u>o+30+w+_){var T=[];m.k.unshift(T),a=2;var R=Pt(l,o+18),L=Pt(l,o+22),I=Ac(l.subarray(o+30,o+=30+w),!S);R==4294967295?(p=b?[-2]:Yf(l,o),R=p[0],L=p[1]):b&&(R=-1),o+=_,m.c=R;var O,P={name:I,compression:y,start:function(){if(P.ondata||Be(5),!R)P.ondata(null,Ui,!0);else{var D=n.o[y];D||P.ondata(Be(14,"unknown compression type "+y,1),null,!1),O=R<0?new D(I):new D(I,R,L),O.ondata=function(N,U,V){P.ondata(N,U,V)};for(var F=0,k=T;F<k.length;F++){var Y=k[F];O.push(Y,!1)}n.k[0]==T&&n.c?n.d=O:O.push(Ui,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};R>=0&&(P.size=R,P.originalSize=L),m.onfile(P)}return"break"}else if(h){if(M==134695760)return c=o+=12+(h==-2&&8),a=3,m.c=0,"break";if(M==33639248)return c=o-=4,a=3,m.c=0,"break"}},m=this;o<u-4;++o){var x=d();if(x==="break")break}if(this.p=Ui,h<0){var g=a?l.subarray(0,c-12-(h==-2&&8)-(Pt(l,c-16)==134695760&&4)):l.subarray(0,o);f?f.push(g,!!a):this.k[+(a==2)].push(g)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&Be(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),$a=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function af(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0},a;function o(){let f=i.lightingState();for(let[d,m]of r)m.value=f[d];a&&(a.checked=f.shadows)}function c(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),o()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,d,m,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5]]){let g=document.createElement("label");g.textContent=d;let p=document.createElement("input");p.id="lighting_"+f,p.type="range",p.min=m,p.max=x,p.step=".01",p.style.width="100%",p.oninput=()=>c({[f]:Number(p.value)}),r.set(f,p),g.append(p),t.append(g)}for(let[f,d]of[["\u6062\u590D\u67D4\u5149",()=>c(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let m=document.createElement("button");m.textContent=f,m.onclick=d,t.append(m)}let l=document.createElement("label");l.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>c({shadows:a.checked}),l.append(a),t.append(l);let u=document.createElement("label");u.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");return h.id="lighting_resolution",h.add(new Option("4K \xB7 \u7CBE\u7EC6","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),u.append(h),t.append(u),document.body.append(t),o(),{toggle(){t.hidden=!t.hidden},close(){t.hidden=!0},dispose(){t.remove()}}}function of(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var Ym=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Zn=(i,e)=>i>>>e|i<<32-e;function Zm(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let g=0;g<16;g++)t[g]=s.getUint32(g*4);for(let g=16;g<64;g++){let p=t[g-15],M=t[g-2];t[g]=(Zn(p,7)^Zn(p,18)^p>>>3)+t[g-16]+(Zn(M,17)^Zn(M,19)^M>>>10)+t[g-7]}let[o,c,l,u,h,f,d,m]=e;for(let g=0;g<64;g++){let p=m+(Zn(h,6)^Zn(h,11)^Zn(h,25))+(h&f^~h&d)+Ym[g]+t[g]>>>0,M=(Zn(o,2)^Zn(o,13)^Zn(o,22))+(o&c^o&l^c&l)>>>0;m=d,d=f,f=h,h=u+p>>>0,u=l,l=c,c=o,o=p+M>>>0}let x=[o,c,l,u,h,f,d,m];for(let g=0;g<8;g++)e[g]+=x[g]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function rc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):Zm(i)}var Us={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},lf=new TextDecoder("utf-8",{fatal:!0});function cf(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Us.archive){if(![Us.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let n=new DataView(i.buffer,i.byteOffset,i.byteLength),r=-1;for(let h=i.length-22;h>=Math.max(0,i.length-65557);h--)if(n.getUint32(h,!0)===101010256&&h+22+n.getUint16(h+20,!0)===i.length){r=h;break}if(r<0||n.getUint16(r+4,!0)||n.getUint16(r+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let s=n.getUint16(r+10,!0),a=n.getUint32(r+16,!0),o=n.getUint32(r+12,!0);if(!s||s>Us.entries||a+o!==r||n.getUint16(r+8,!0)!==s)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let c=new Set,l=a,u=0;for(let h=0;h<s;h++){if(l+46>r||n.getUint32(l,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let f=n.getUint16(l+8,!0),d=n.getUint16(l+10,!0),m=n.getUint16(l+28,!0),x=n.getUint16(l+30,!0),g=n.getUint16(l+32,!0),p=n.getUint32(l+24,!0);if(l+46+m+x+g>r)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let M=lf.decode(i.subarray(l+46,l+46+m));if(!of(M)||c.has(M)||!e.test(M))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");c.add(M),u+=p;let E=n.getUint32(l+38,!0)>>>16;if(f&1||![0,8].includes(d)||(E&61440)===40960||p>Us.file||u>Us.total)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(M==="manifest.json"&&p>1024*1024)throw new Error("manifest \u8FC7\u5927");let y=n.getUint32(l+42,!0);if(y+30>a||n.getUint32(y,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let S=n.getUint16(y+26,!0),b=n.getUint16(y+28,!0),w=n.getUint32(l+20,!0);if(y+30+S+b+w>a||lf.decode(i.subarray(y+30,y+30+S))!==M)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");l+=46+m+x+g}if(l!==r||!c.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:c,total:u}}var sc=/^[a-zA-Z0-9_-]{1,96}$/,Km=/^[a-f0-9]{64}$/,$m=new Set(["geometry","animation","texture","audio","config"]);function ka(i){if(i?.schema!=="snowbreak-skin/1"||!sc.test(i.characterId)||!sc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!sc.test(n.role)||e.has(n.role)||!Km.test(n.assetId)||!$m.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function uf({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:f,descriptor:d})=>Promise.resolve().then(()=>e(f,d))));for(let f of h)if(f.status==="rejected")try{t(f.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let h=ka(u),f=++n;s?.abort();let d=new AbortController;s=d;let m=await Promise.allSettled(h.resources.map(M=>Promise.resolve().then(()=>i(M,{signal:d.signal})))),x=m.flatMap((M,E)=>M.status==="fulfilled"?[{asset:M.value,descriptor:h.resources[E]}]:[]),g=m.find(M=>M.status==="rejected");if(f!==n||a||g){if(await o(x),f===n&&(s=null),f!==n||a)return{accepted:!1,reason:"superseded"};throw g.reason}let p=r;return r={manifest:h,resources:x},s=null,p&&await o(p.resources),f!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function hf(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=f=>i[f]|i[f+1]<<8|i[f+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function ff(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var df={geometry:20,animation:32,texture:16,audio:8,config:2};function pf(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(df,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>df[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await rc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=hf(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=ff(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function Jf(i){let e=cf(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728),{unzipSync:t}=await Promise.resolve().then(()=>($f(),Kf)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(r.characterId!=="Enya"||!Array.isArray(r.variants)||r.variants.length!==4)throw new Error("Invalid Enya collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!["normal","nude"].includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:ka(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!=="Enya"))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[ka(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function c(u){let h=s?.find(m=>m.id===u);if(s&&!h)throw new Error("Variant unavailable");let f=h?.manifest||a[0],d=uf(pf(async m=>n["assets/"+m]));return await d.load(f),{runtime:d,manifest:f,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:m,mode:x,outfit:g})=>({id:m,mode:x,outfit:g}))||[],selectVariant:c}}let l;try{l=localStorage.getItem("enya-collection-selection")}catch{}return c(s?.some(u=>u.id===l)?l:r.defaultVariant)}var Od=0,fu=1,Bd=2;var ya=1,Qo=2,Ms=3,pn=0,an=1,on=2,ri=0,bs=1,du=2,pu=3,mu=4,kd=5;var gr=100,zd=101,Vd=102,Hd=103,Gd=104,Wd=200,Xd=201,qd=202,Yd=203,gu=204,xu=205,Zd=206,Kd=207,$d=208,Jd=209,jd=210,Qd=211,ep=212,tp=213,np=214,Ao=0,Ro=1,Co=2,ns=3,Io=4,Po=5,Lo=6,No=7,_u=0,ip=1,rp=2,Vn=0,yu=1,vu=2,Mu=3,va=4,bu=5,Su=6,wu=7,Qc="attached",sp="detached",Eu=300,$i=301,xr=302,el=303,tl=304,Ma=306,Xi=1e3,Pn=1001,is=1002,Lt=1003,nl=1004;var _r=1005;var Nt=1006,Ss=1007;var Hn=1008;var mn=1009,Tu=1010,Au=1011,ws=1012,il=1013,Gn=1014,Mn=1015,Wn=1016,rl=1017,sl=1018,Es=1020,Ru=35902,Cu=35899,Iu=1021,Pu=1022,bn=1023,Qn=1026,Ji=1027,al=1028,ol=1029,ji=1030,ll=1031;var cl=1033,ba=33776,Sa=33777,wa=33778,Ea=33779,ul=35840,hl=35841,fl=35842,dl=35843,pl=36196,ml=37492,gl=37496,xl=37488,_l=37489,Ta=37490,yl=37491,vl=37808,Ml=37809,bl=37810,Sl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Il=37818,Pl=37819,Ll=37820,Nl=37821,Dl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,Aa=36285,kl=36286;var lr=2300,cr=2301,wo=2302,eu=2303,tu=2400,nu=2401,iu=2402,ap=2500;var Lu=0,Ra=1,Ts=2,op=3200;var zl=0,lp=1,Xn="",Rt="srgb",sn="srgb-linear",Qs="linear",xt="srgb";var Eo=7680;var cp=519,up=512,hp=513,fp=514,Vl=515,dp=516,pp=517,Hl=518,mp=519,Nu=35044,Du=35048;var Uu="300 es",Bn=2e3,rs=2001;function yg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=ss("canvas");return i.style.display="block",i}var jf={},as=null;function ea(...i){let e="THREE."+i.shift();as?as("log",e,...i):console.log(e,...i)}function xp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=xp(i);let e="THREE."+i.shift();if(as)as("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=xp(i);let e="THREE."+i.shift();if(as)as("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function or(...i){let e=i.join(" ");e in jf||(jf[e]=!0,ke(...i))}function _p(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var yp={[Ao]:Ro,[Co]:Lo,[Io]:No,[ns]:Po,[Ro]:Ao,[Lo]:Co,[No]:Io,[Po]:ns},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,Js=Math.PI/180,ur=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Fu(i,e){return(i%e+e)%e}function Mg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bg(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function Sg(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function wg(i,e=1){return e-Math.abs(Fu(i,e*2)-e)}function Eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ag(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rg(i,e){return i+Math.random()*(e-i)}function Cg(i){return i*(.5-Math.random())}function Ig(i){i!==void 0&&(Qf=i);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(i){return i*Js}function Lg(i){return i*ur}function Ng(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Dg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge={DEG2RAD:Js,RAD2DEG:ur,generateUUID:kn,clamp:st,euclideanModulo:Fu,mapLinear:Mg,inverseLerp:bg,lerp:js,damp:Sg,pingpong:wg,smoothstep:Eg,smootherstep:Tg,randInt:Ag,randFloat:Rg,randFloatSpread:Cg,seededRandom:Ig,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:Ng,ceilPowerOfTwo:Dg,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Fg,normalize:_t,denormalize:On},Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;var Ze=Vu,We=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(h!==x||c!==f||l!==d||u!==m){let g=c*f+l*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+f*o,l=l*p+d*o,u=u*p+m*o,h=h*p+x*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+m*o,h=h*p+x*o;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-o*d,e[t+2]=l*m+u*d+o*f-c*h,e[t+3]=u*m-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),d=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hu=class Hu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hu.prototype.isVector3=!0;var B=Hu,Cc=new B,ed=new We,Gu=class Gu{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=r[0],g=r[3],p=r[6],M=r[1],E=r[4],y=r[7],S=r[2],b=r[5],w=r[8];return s[0]=a*x+o*M+c*S,s[3]=a*g+o*E+c*b,s[6]=a*p+o*y+c*w,s[1]=l*x+u*M+h*S,s[4]=l*g+u*E+h*b,s[7]=l*p+u*y+h*w,s[2]=f*x+d*M+m*S,s[5]=f*g+d*E+m*b,s[8]=f*p+d*y+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;var Ke=Gu,Ic=new Ke,td=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Og(){let i={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sn]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var tt=Og();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,Do=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=ss("canvas")),Vr.width=e.width,Vr.height=e.height;let r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bg=0,os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pc(r[a].image)):s.push(Pc(r[a]))}else s=Pc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var kg=0,Lc=new B,Wt=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,r=Pn,s=Nt,a=Hn,o=bn,c=mn,l=i.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=kn(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Eu;Wt.DEFAULT_ANISOTROPY=1;var Wu=class Wu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(d+1)/2,S=(p+1)/2,b=(u+f)/4,w=(h+x)/4,_=(m+g)/4;return E>y&&E>S?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=b/n,s=w/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-x)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;var yt=Wu,Uo=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Wt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new os(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jo=class jo{constructor(e,t,n,r,s,a,o,c,l,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,d,m,x,g)}set(e,t,n,r,s,a,o,c,l,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,m=l*u,x=l*h;t[0]=f+x*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,m=l*u,x=l*h;t[0]=f-x*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,Vg)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(n,xn),ki.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(n,xn)),ki.normalize(),ja.crossVectors(xn,ki),r[0]=ki.x,r[4]=ja.x,r[8]=xn.x,r[1]=ki.y,r[5]=ja.y,r[9]=xn.y,r[2]=ki.z,r[6]=ja.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],E=n[7],y=n[11],S=n[15],b=r[0],w=r[4],_=r[8],T=r[12],R=r[1],L=r[5],I=r[9],O=r[13],P=r[2],D=r[6],F=r[10],k=r[14],Y=r[3],N=r[7],U=r[11],V=r[15];return s[0]=a*b+o*R+c*P+l*Y,s[4]=a*w+o*L+c*D+l*N,s[8]=a*_+o*I+c*F+l*U,s[12]=a*T+o*O+c*k+l*V,s[1]=u*b+h*R+f*P+d*Y,s[5]=u*w+h*L+f*D+d*N,s[9]=u*_+h*I+f*F+d*U,s[13]=u*T+h*O+f*k+d*V,s[2]=m*b+x*R+g*P+p*Y,s[6]=m*w+x*L+g*D+p*N,s[10]=m*_+x*I+g*F+p*U,s[14]=m*T+x*O+g*k+p*V,s[3]=M*b+E*R+y*P+S*Y,s[7]=M*w+E*L+y*D+S*N,s[11]=M*_+E*I+y*F+S*U,s[15]=M*T+E*O+y*k+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],M=c*d-l*f,E=o*d-l*h,y=o*f-c*h,S=a*d-l*u,b=a*f-c*u,w=a*h-o*u;return t*(x*M-g*E+p*y)-n*(m*M-g*S+p*b)+r*(m*E-x*S+p*w)-s*(m*y-x*b+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=t*o-n*a,E=t*c-r*a,y=t*l-s*a,S=n*c-r*o,b=n*l-s*o,w=r*l-s*c,_=u*x-h*m,T=u*g-f*m,R=u*p-d*m,L=h*g-f*x,I=h*p-d*x,O=f*p-d*g,P=M*O-E*I+y*L+S*R-b*T+w*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=(o*O-c*I+l*L)*D,e[1]=(r*I-n*O-s*L)*D,e[2]=(x*w-g*b+p*S)*D,e[3]=(f*b-h*w-d*S)*D,e[4]=(c*R-a*O-l*T)*D,e[5]=(t*O-r*R+s*T)*D,e[6]=(g*y-m*w-p*E)*D,e[7]=(u*w-f*y+d*E)*D,e[8]=(a*I-o*R+l*_)*D,e[9]=(n*R-t*I-s*_)*D,e[10]=(m*b-x*y+p*M)*D,e[11]=(h*y-u*b-d*M)*D,e[12]=(o*T-a*L-c*_)*D,e[13]=(t*L-n*T+r*_)*D,e[14]=(x*E-m*S-g*M)*D,e[15]=(u*S-h*E+f*M)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,m=s*h,x=a*u,g=a*h,p=o*h,M=c*l,E=c*u,y=c*h,S=n.x,b=n.y,w=n.z;return r[0]=(1-(x+p))*S,r[1]=(d+y)*S,r[2]=(m-E)*S,r[3]=0,r[4]=(d-y)*b,r[5]=(1-(f+p))*b,r[6]=(g+M)*b,r[7]=0,r[8]=(m+E)*w,r[9]=(g-M)*w,r[10]=(1-(f+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Hr.set(r[0],r[1],r[2]).length(),o=Hr.set(r[4],r[5],r[6]).length(),c=Hr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Dn.copy(this);let l=1/a,u=1/o,h=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Bn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),m,x;if(c)m=s/(a-s),x=a*s/(a-s);else if(o===Bn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===rs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Bn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),m,x;if(c)m=1/(a-s),x=a/(a-s);else if(o===Bn)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===rs)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jo.prototype.isMatrix4=!0;var Fe=jo,Hr=new B,Dn=new Fe,zg=new B(0,0,0),Vg=new B(1,1,1),ki=new B,ja=new B,xn=new B,id=new Fe,rd=new We,zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hg=0,sd=new B,Gr=new We,mi=new Fe,Qa=new B,Gs=new B,Gg=new B,Wg=new We,ad=new B(1,0,0),od=new B(0,1,0),ld=new B(0,0,1),cd={type:"added"},Xg={type:"removed"},Wr={type:"childadded",child:null},Nc={type:"childremoved",child:null},At=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new zn,n=new We,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ke}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Gs,Qa,this.up):mi.lookAt(Qa,Gs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(mi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},qg={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Fu(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Dc(a,s,e+1/3),this.g=Dc(a,s,e),this.b=Dc(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return tt.workingToColorSpace(Kt.copy(this),e),Math.round(st(Kt.r*255,0,255))*65536+Math.round(st(Kt.g*255,0,255))*256+Math.round(st(Kt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Rt){tt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,r=Kt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(eo);let n=js(zi.h,eo.h,t),r=js(zi.s,eo.s,t),s=js(zi.l,eo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new He;He.NAMES=vp;var hr=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new B,gi=new B,Uc=new B,xi=new B,Xr=new B,qr=new B,ud=new B,Fc=new B,Oc=new B,Bc=new B,kc=new yt,zc=new yt,Vc=new yt,Jn=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Un.subVectors(r,t),gi.subVectors(n,t),Uc.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(gi),c=Un.dot(Uc),l=gi.dot(gi),u=gi.dot(Uc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,m=(a*u-o*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return kc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kc,s.x),a.addScaledVector(zc,s.y),a.addScaledVector(Vc,s.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),gi.subVectors(e,t),Un.cross(gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Un.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Xr.subVectors(r,n),qr.subVectors(s,n),Fc.subVectors(e,n);let c=Xr.dot(Fc),l=qr.dot(Fc);if(c<=0&&l<=0)return t.copy(n);Oc.subVectors(e,r);let u=Xr.dot(Oc),h=qr.dot(Oc);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Xr,a);Bc.subVectors(e,s);let d=Xr.dot(Bc),m=qr.dot(Bc);if(m>=0&&d<=m)return t.copy(s);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(qr,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return ud.subVectors(s,r),o=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(ud,o);let p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),no.subVectors(this.max,Ws),Yr.subVectors(e.a,Ws),Zr.subVectors(e.b,Ws),Kr.subVectors(e.c,Ws),Vi.subVectors(Zr,Yr),Hi.subVectors(Kr,Zr),ir.subVectors(Yr,Kr);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-ir.z,ir.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,ir.z,0,-ir.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-ir.y,ir.x,0];return!Hc(t,Yr,Zr,Kr,no)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Yr,Zr,Kr,no))?!1:(io.crossVectors(Vi,Hi),t=[io.x,io.y,io.z],Hc(t,Yr,Zr,Kr,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,to=new qt,Yr=new B,Zr=new B,Kr=new B,Vi=new B,Hi=new B,ir=new B,Ws=new B,no=new B,io=new B,rr=new B;function Hc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rr.fromArray(i,s);let o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=e.dot(rr),l=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Bt=new B,ro=new Ze,Yg=0,Ct=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var na=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rn=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zg=new qt,Xs=new B,Gc=new B,hn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Gc)),this.expandByPoint(Xs.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kg=0,In=new Fe,Wc=new At,$r=new B,_n=new qt,qs=new qt,Gt=new B,Xt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?ia:na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(_n.min,qs.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,qs.max),_n.expandByPoint(Gt)):(_n.expandByPoint(qs.min),_n.expandByPoint(qs.max))}_n.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Gt.fromBufferAttribute(o,l),c&&($r.fromBufferAttribute(e,l),Gt.add($r)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new B,c[_]=new B;let l=new B,u=new B,h=new B,f=new Ze,d=new Ze,m=new Ze,x=new B,g=new B;function p(_,T,R){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,R),f.fromBufferAttribute(s,_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),u.sub(l),h.sub(l),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),o[_].add(x),o[T].add(x),o[R].add(x),c[_].add(g),c[T].add(g),c[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){let R=M[_],L=R.start,I=R.count;for(let O=L,P=L+I;O<P;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let E=new B,y=new B,S=new B,b=new B;function w(_){S.fromBufferAttribute(r,_),b.copy(S);let T=o[_];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);let L=y.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,T=M.length;_<T;++_){let R=M[_],L=R.start,I=R.count;for(let O=L,P=L+I;O<P;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new Ct(f,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},us=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new B,hs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xc=new B,$g=new B,Jg=new Ke,yn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xc.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Xc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jg.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jg=0,fn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=bs,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=xu,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var yi=new B,qc=new B,so=new B,ao=new B,qi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qc.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(qc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=ao.dot(this.direction),c=-ao.dot(so),l=ao.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*c-o,f=a*o-c,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qc).addScaledVector(so,f),d}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),r=yi.dot(yi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,y=Math.abs(c),S=Math.abs(l),b=Math.abs(u),w,_,T,R,L,I,O,P,D,F,k,Y;if(y>=S&&y>=b?(T=c,I=h,D=m,Y=p,c>=0?(w=l,_=u,R=f,L=d,O=x,P=g,F=M,k=E):(w=u,_=l,R=d,L=f,O=g,P=x,F=E,k=M)):S>=b?(T=l,I=f,D=x,Y=M,l>=0?(w=u,_=c,R=d,L=h,O=g,P=m,F=E,k=p):(w=c,_=u,R=h,L=d,O=m,P=g,F=p,k=E)):(T=u,I=d,D=g,Y=E,u>=0?(w=c,_=l,R=h,L=f,O=m,P=x,F=p,k=M):(w=l,_=c,R=f,L=h,O=x,P=m,F=M,k=p)),T===0)return null;let N=w/T,U=_/T,V=1/T,se=R-N*I,ae=L-U*I,Oe=O-N*D,Ee=P-U*D,Ve=F-N*Y,X=k-U*Y,Z=Ve*Ee-X*Oe,le=se*X-ae*Ve,ve=Oe*ae-Ee*se;if(r){if(Z<0||le<0||ve<0)return null}else if((Z<0||le<0||ve<0)&&(Z>0||le>0||ve>0))return null;let oe=Z+le+ve;if(oe===0)return null;let re=V*(Z*I+le*D+ve*Y);return(oe>0?re<0:re>0)?null:this.at(re/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new Fe,sr=new qi,oo=new hn,fd=new B,lo=new B,co=new B,uo=new B,Yc=new B,ho=new B,dd=new B,fo=new B,Dt=class extends At{constructor(e=new Xt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ho.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(Yc.fromBufferAttribute(h,e),a?ho.addScaledVector(Yc,u):ho.addScaledVector(Yc.sub(t),u))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(oo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(oo,fd)===null||sr.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(hd.copy(s).invert(),sr.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=E;y<S;y+=3){let b=o.getX(y),w=o.getX(y+1),_=o.getX(y+2);r=po(this,p,e,n,l,u,h,b,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);r=po(this,a,e,n,l,u,h,M,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=E;y<S;y+=3){let b=y,w=y+1,_=y+2;r=po(this,p,e,n,l,u,h,b,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=g,E=g+1,y=g+2;r=po(this,a,e,n,l,u,h,M,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Qg(i,e,t,n,r,s,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===pn,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,co),i.getVertexPosition(l,uo);let u=Qg(i,e,t,n,lo,co,uo,dd);if(u){let h=new B;Jn.getBarycoord(dd,lo,co,uo,h),r&&(u.uv=Jn.getInterpolatedAttribute(r,o,c,l,h,new Ze)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,o,c,l,h,new Ze)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,c,l,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new B,materialIndex:0};Jn.getNormal(lo,co,uo,f.normal),u.face=f,u.barycoord=h}return u}var Ys=new yt,pd=new yt,md=new yt,e0=new yt,gd=new Fe,mo=new B,Zc=new hn,xd=new Fe,Kc=new qi,ra=class extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qc,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(r),e.ray.intersectsSphere(Zc)!==!1&&(xd.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;pd.fromBufferAttribute(r.attributes.skinIndex,e),md.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ys.copy(t),t.set(0,0,0,0)):(Ys.set(...t,1),t.set(0,0,0)),Ys.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=md.getComponent(s);if(a!==0){let o=pd.getComponent(s);gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(e0.copy(Ys).applyMatrix4(gd),a)}}return t.isVector4&&(t.w=Ys.w),t.applyMatrix4(this.bindMatrixInverse)}},fs=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},ds=class extends Wt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Lt,u=Lt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_d=new Fe,t0=new Fe,sa=class i{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:t0;_d.multiplyMatrices(o,t[s]),_d.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ds(t,e,e,bn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(ke("Skeleton: No bone found with UUID:",s),a=new fs),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},bi=class extends Ct{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Jr=new Fe,yd=new Fe,go=[],vd=new qt,n0=new Fe,Zs=new Dt,Ks=new hn,aa=class extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,n0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),vd.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),Ks.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),yd.multiplyMatrices(n,Jr),Zs.matrixWorld=yd,Zs.raycast(e,go);for(let a=0,o=go.length;a<o;a++){let c=go[a];c.instanceId=s,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(r*this.count),r,this.count,al,Mn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new hn,i0=new Ze(.5,.5),xo=new B,ps=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],M=s[12],E=s[13],y=s[14],S=s[15];if(r[0].setComponents(l-a,d-u,p-m,S-M).normalize(),r[1].setComponents(l+a,d+u,p+m,S+M).normalize(),r[2].setComponents(l+o,d+h,p+x,S+E).normalize(),r[3].setComponents(l-o,d-h,p-x,S-E).normalize(),n)r[4].setComponents(c,f,g,y).normalize(),r[5].setComponents(l-c,d-f,p-g,S-y).normalize();else if(r[4].setComponents(l-c,d-f,p-g,S-y).normalize(),t===Bn)r[5].setComponents(l+c,d+f,p+g,S+y).normalize();else if(t===rs)r[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=i0.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oo=new B,Bo=new B,Md=new Fe,$s=new qi,_o=new hn,$c=new B,bd=new B,fr=class extends At{constructor(e=new Xt,t=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Oo.fromBufferAttribute(t,r-1),Bo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Oo.distanceTo(Bo);e.setAttribute("lineDistance",new rn(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Md.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=l){let p=u.getX(x),M=u.getX(x+1),E=yo(this,e,$s,c,p,M,x);E&&t.push(E)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=yo(this,e,$s,c,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=l){let p=yo(this,e,$s,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=yo(this,e,$s,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function yo(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,r),Bo.fromBufferAttribute(o,s),t.distanceSqToSegment(Oo,Bo,$c,bd)>n)return;$c.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($c);if(!(l<e.near||l>e.far))return{distance:l,point:bd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Sd=new B,wd=new B,oa=class extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Sd.fromBufferAttribute(t,r),wd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sd.distanceTo(wd);e.setAttribute("lineDistance",new rn(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gs=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ed=new Fe,ru=new qi,vo=new hn,Mo=new B,ca=class extends At{constructor(e=new Xt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Ed.copy(r).invert(),ru.copy(e.ray).applyMatrix4(Ed);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=l.getX(m);Mo.fromBufferAttribute(h,g),Td(Mo,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Mo.fromBufferAttribute(h,m),Td(Mo,m,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Td(i,e,t,n,r,s,a){let o=ru.distanceSqToPoint(i);if(o<t){let c=new B;ru.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ua=class extends Wt{constructor(e=[],t=$i,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Yi=class extends Wt{constructor(e,t,n=Gn,r,s,a,o=Lt,c=Lt,l,u=Qn,h=1){if(u!==Qn&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ko=class extends Yi{constructor(e,t=Gn,n=$i,r,s,a=Lt,o=Lt,c,l=Qn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class i extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function m(x,g,p,M,E,y,S,b,w,_,T){let R=y/w,L=S/_,I=y/2,O=S/2,P=b/2,D=w+1,F=_+1,k=0,Y=0,N=new B;for(let U=0;U<F;U++){let V=U*L-O;for(let se=0;se<D;se++){let ae=se*R-I;N[x]=ae*M,N[g]=V*E,N[p]=P,l.push(N.x,N.y,N.z),N[x]=0,N[g]=0,N[p]=b>0?1:-1,u.push(N.x,N.y,N.z),h.push(se/w),h.push(1-U/_),k+=1}}for(let U=0;U<_;U++)for(let V=0;V<w;V++){let se=f+V+D*U,ae=f+V+D*(U+1),Oe=f+(V+1)+D*(U+1),Ee=f+(V+1)+D*U;c.push(se,ae,Ee),c.push(ae,Oe,Ee),Y+=6}o.addGroup(d,Y,T),d+=Y,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var dr=class i extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let M=p*f-a;for(let E=0;E<l;E++){let y=E*h-s;m.push(y,-M,0),x.push(0,0,1),g.push(E/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let E=M+l*p,y=M+l*(p+1),S=M+1+l*(p+1),b=M+1+l*p;d.push(E,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ad(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ad(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let r in n)e[r]=n[r]}return e}function Ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Mp={clone:yr,merge:jt},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new B().fromArray(r.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pr=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vo=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ho=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function To(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function o0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Rd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function l0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var ti=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Go=class extends ti{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nu:s=e,o=2*t-n;break;case iu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nu:a=e,c=2*n-t;break;case iu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,E=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==o;++S)s[S]=p*a[u+S]+M*a[l+S]+E*a[c+S]+y*a[h+S];return s}},Wo=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}},Xo=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends ti{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(r-t),x=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*x+a[c+g]*m;return s}let f=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=d*f+m*2,M=h[p],E=h[p+1],y=e*f+m*2,S=u[y],b=u[y+1],w=u0(n,t,M,S,r);s[m]=bp(w,x,E,b,g)}return s}};function bp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function c0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function u0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=bp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=c0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var dn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),To(e.settings)&&(n.settings={inTangents:Wi(e.settings.inTangents,Array),outTangents:Wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;To(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&vg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===wo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,To(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=cr;var Si=class extends dn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=lr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName="color";var wi=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};wi.prototype.ValueTypeName="number";var Yo=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)We.slerpFlat(s,0,a,l-o,a,l,c);return s}},ni=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion";ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends dn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=lr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};Ti.prototype.ValueTypeName="vector";var _s=class{constructor(e="",t=-1,n=[],r=ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(f0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(dn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=o0(c);c=Rd(c,1,u),l=Rd(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function h0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return fa;case"quaternion":return ni;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function f0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=h0(i.type);if(i.times===void 0){let n=[],r=[];l0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),To(i.settings)&&(t.settings={inTangents:Wi(i.settings.inTangents,Float32Array),outTangents:Wi(i.settings.outTangents,Float32Array)}),t}var jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Id(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Id(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Id(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Zo=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new Zo,ii=class{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},su=class extends Error{constructor(e,t){super(e),this.response=t}},ys=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=jn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:r});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=vi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:E,value:y})=>{if(E)p.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let b=0,w=u.length;b<w;b++){let _=u[b];_.onProgress&&_.onProgress(S)}p.enqueue(y),M()}},E=>{p.error(E)})}}});return new Response(g)}else throw new su(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{jn.add(`file:${e}`,l);let u=vi[e];delete vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var jr=new WeakMap,Ko=class extends ii{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=jr.get(a);h===void 0&&(h=[],jr.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=ss("img");function c(){u(),t&&t(this);let h=jr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}jr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),jn.remove(`image:${e}`);let f=jr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}jr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Zi=class extends ii{constructor(e){super(e)}load(e,t,n,r){let s=new Wt,a=new Ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},mr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},da=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jc=new Fe,Pd=new B,Ld=new B,vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=new B,So=new We,$n=new B,pa=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,So,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,So,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bo,So,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,So,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new B,Nd=new Ze,Dd=new Ze,kt=class extends pa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Dd),t.subVectors(Dd,Nd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},au=class extends vs{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ma=class extends mr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ou=class extends vs{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},ga=class extends mr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ou}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ki=class extends pa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lu=class extends vs{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ri=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var jc=new WeakMap,xa=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=jn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{jc.has(a)===!0?(r&&r(jc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return jn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),jc.set(c,l),jn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qr=-90,es=1,$o=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new kt(Qr,es,e,t);r.layers=this.layers,this.add(r);let s=new kt(Qr,es,e,t);s.layers=this.layers,this.add(s);let a=new kt(Qr,es,e,t);a.layers=this.layers,this.add(a);let o=new kt(Qr,es,e,t);o.layers=this.layers,this.add(o);let c=new kt(Qr,es,e,t);c.layers=this.layers,this.add(c);let l=new kt(Qr,es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Jo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bu="\\[\\]\\.:\\/",d0=new RegExp("["+Bu+"]","g"),ku="[^"+Bu+"]",p0="[^"+Bu.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",ku),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),y0=new RegExp("^"+m0+g0+x0+_0+"$"),v0=["material","materials","bones","map"],cu=class{constructor(e,t,n){let r=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=y0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);v0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=cu;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gb=new Float32Array(1);var Ud=new Fe,_a=class{constructor(e,t,n=0,r=1/0){this.ray=new qi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ud),this}intersectObject(e,t=!0,n=[]){return uu(e,this,n,t),n.sort(Fd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)uu(e[r],this,n,t);return n.sort(Fd),n}};function Fd(i,e){return i.distance-e.distance}function uu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)uu(s[a],e,t,!0)}}var Xu=class Xu{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Xu.prototype.isMatrix2=!0;var hu=Xu;function zu(i,e,t,n){let r=M0(n);switch(t){case Iu:return i*e;case al:return i*e/r.components*r.byteLength;case ol:return i*e/r.components*r.byteLength;case ji:return i*e*2/r.components*r.byteLength;case ll:return i*e*2/r.components*r.byteLength;case Pu:return i*e*3/r.components*r.byteLength;case bn:return i*e*4/r.components*r.byteLength;case cl:return i*e*4/r.components*r.byteLength;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(e,8)/4;case ul:case fl:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:case xl:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:case Ta:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(i){switch(i){case mn:case Tu:return{byteLength:1,components:1};case ws:case Au:case Wn:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case Gn:case il:case Mn:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function E0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_x=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,wx=`uniform sampler2D dfgLUT;
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
}`,Ex=`
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,W_=`#define MATCAP
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
}`,X_=`#define MATCAP
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,j_=`#define TOON
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
}`,Q_=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,ry=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:I0,alphatest_pars_fragment:P0,aomap_fragment:L0,aomap_pars_fragment:N0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:k0,bumpmap_pars_fragment:z0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:K0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:J0,displacementmap_pars_vertex:j0,displacementmap_vertex:Q0,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:xx,lights_toon_fragment:yx,lights_toon_pars_fragment:vx,lights_phong_fragment:Mx,lights_phong_pars_fragment:bx,lights_physical_fragment:Sx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:Ax,lightprobes_pars_fragment:Rx,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Lx,map_fragment:Nx,map_pars_fragment:Dx,map_particle_fragment:Ux,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:kx,morphcolor_vertex:zx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:qx,normal_pars_vertex:Yx,normal_vertex:Zx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Qx,opaque_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:r_,dithering_pars_fragment:s_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:u_,shadowmask_pars_fragment:h_,skinbase_vertex:f_,skinning_pars_vertex:d_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:x_,tonemapping_fragment:__,tonemapping_pars_fragment:y_,transmission_fragment:v_,transmission_pars_fragment:M_,uv_pars_fragment:b_,uv_pars_vertex:S_,uv_vertex:w_,worldpos_vertex:E_,background_vert:T_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:I_,cube_frag:P_,depth_vert:L_,depth_frag:N_,distance_vert:D_,distance_frag:U_,equirect_vert:F_,equirect_frag:O_,linedashed_vert:B_,linedashed_frag:k_,meshbasic_vert:z_,meshbasic_frag:V_,meshlambert_vert:H_,meshlambert_frag:G_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:Y_,meshphong_vert:Z_,meshphong_frag:K_,meshphysical_vert:$_,meshphysical_frag:J_,meshtoon_vert:j_,meshtoon_frag:Q_,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:ry,sprite_frag:sy},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ai={basic:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:jt([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:jt([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:jt([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:jt([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:jt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ai.physical={uniforms:jt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Gl={r:0,b:0,g:0},ay=new Fe,qp=new Ke;qp.set(-1,0,0,0,1,0,0,0,1);function oy(i,e,t,n,r,s){let a=new He(0),o=r===!0?0:1,c,l,u=null,h=0,f=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(M){let E=!1,y=d(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,E){let y=d(E);y&&(y.isCubeTexture||y.mapping===Ma)?(l===void 0&&(l=new Dt(new xs(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:yr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qp),l.material.toneMapped=tt.getTransfer(y.colorSpace)!==xt,(u!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Dt(new dr(2,2),new vn({name:"BackgroundMaterial",uniforms:yr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,E){M.getRGB(Gl,Ou(i)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:x,dispose:p}}function ly(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(L,I,O,P,D){let F=!1,k=h(L,P,O,I);s!==k&&(s=k,l(s.object)),F=d(L,P,O,D),F&&m(L,P,O,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(L,I,O,P),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,I,O,P){let D=P.wireframe===!0,F=n[I.id];F===void 0&&(F={},n[I.id]=F);let k=L.isInstancedMesh===!0?L.id:0,Y=F[k];Y===void 0&&(Y={},F[k]=Y);let N=Y[O.id];N===void 0&&(N={},Y[O.id]=N);let U=N[D];return U===void 0&&(U=f(c()),N[D]=U),U}function f(L){let I=[],O=[],P=[];for(let D=0;D<t;D++)I[D]=0,O[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,I,O,P){let D=s.attributes,F=I.attributes,k=0,Y=O.getAttributes();for(let N in Y)if(Y[N].location>=0){let V=D[N],se=F[N];if(se===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),V===void 0||V.attribute!==se||se&&V.data!==se.data)return!0;k++}return s.attributesNum!==k||s.index!==P}function m(L,I,O,P){let D={},F=I.attributes,k=0,Y=O.getAttributes();for(let N in Y)if(Y[N].location>=0){let V=F[N];V===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));let se={};se.attribute=V,V&&V.data&&(se.data=V.data),D[N]=se,k++}s.attributes=D,s.attributesNum=k,s.index=P}function x(){let L=s.newAttributes;for(let I=0,O=L.length;I<O;I++)L[I]=0}function g(L){p(L,0)}function p(L,I){let O=s.newAttributes,P=s.enabledAttributes,D=s.attributeDivisors;O[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),D[L]!==I&&(i.vertexAttribDivisor(L,I),D[L]=I)}function M(){let L=s.newAttributes,I=s.enabledAttributes;for(let O=0,P=I.length;O<P;O++)I[O]!==L[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function E(L,I,O,P,D,F,k){k===!0?i.vertexAttribIPointer(L,I,O,D,F):i.vertexAttribPointer(L,I,O,P,D,F)}function y(L,I,O,P){x();let D=P.attributes,F=O.getAttributes(),k=I.defaultAttributeValues;for(let Y in F){let N=F[Y];if(N.location>=0){let U=D[Y];if(U===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){let V=U.normalized,se=U.itemSize,ae=e.get(U);if(ae===void 0)continue;let Oe=ae.buffer,Ee=ae.type,Ve=ae.bytesPerElement,X=Ee===i.INT||Ee===i.UNSIGNED_INT||U.gpuType===il;if(U.isInterleavedBufferAttribute){let Z=U.data,le=Z.stride,ve=U.offset;if(Z.isInstancedInterleavedBuffer){for(let oe=0;oe<N.locationSize;oe++)p(N.location+oe,Z.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let oe=0;oe<N.locationSize;oe++)E(N.location+oe,se/N.locationSize,Ee,V,le*Ve,(ve+se/N.locationSize*oe)*Ve,X)}else{if(U.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)p(N.location+Z,U.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Z=0;Z<N.locationSize;Z++)g(N.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Z=0;Z<N.locationSize;Z++)E(N.location+Z,se/N.locationSize,Ee,V,se*Ve,se/N.locationSize*Z*Ve,X)}}else if(k!==void 0){let V=k[Y];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}M()}function S(){T();for(let L in n){let I=n[L];for(let O in I){let P=I[O];for(let D in P){let F=P[D];for(let k in F)u(F[k].object),delete F[k];delete P[D]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let I=n[L.id];for(let O in I){let P=I[O];for(let D in P){let F=P[D];for(let k in F)u(F[k].object),delete F[k];delete P[D]}}delete n[L.id]}function w(L){for(let I in n){let O=n[I];for(let P in O){let D=O[P];if(D[L.id]===void 0)continue;let F=D[L.id];for(let k in F)u(F[k].object),delete F[k];delete D[L.id]}}}function _(L){for(let I in n){let O=n[I],P=L.isInstancedMesh===!0?L.id:0,D=O[P];if(D!==void 0){for(let F in D){let k=D[F];for(let Y in k)u(k[Y].object),delete k[Y];delete D[F]}delete O[P],Object.keys(O).length===0&&delete n[I]}}}function T(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function cy(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mn&&w!==Mn&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:b}}function hy(i){let e=this,t=null,n=0,r=!1,s=!1,a=new yn,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{let M=s?0:n,E=M*4,y=p.clippingState||null;c.value=y,y=u(m,f,E,d);for(let S=0;S!==E;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=d;E!==x;++E,y+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Rs=4,fy=6,dy=20,py=256,Ca=new Ki,wp=new He,qu=null,Yu=0,Zu=0,Ku=!1,my=new B,vr=new B,Is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=my}=s;qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Yu,Zu),this._renderer.xr.enabled=Ku,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Wn,format:bn,colorSpace:sn,depthBuffer:!1},r=Ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gy(s)),this._blurMaterial=_y(s,e,t),this._ggxMaterial=xy(s,e,t)}return r}_compileMaterial(e){let t=new Dt(new Xt,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,r,s){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(wp),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new xs,new $t({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(wp),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));let S=this._cubeSize;As(r,y*S,E>2?S:0,S,S),h.setRenderTarget(r),p&&h.render(x,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===$i||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;As(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Rs?n-m+Rs:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,As(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(o,Ca),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,As(e,g,p,3*x,2*x),r.setRenderTarget(e),r.render(o,Ca)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Rs?r-this._lodMax+Rs:0),f=4*(this._cubeSize-u);As(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,Ca)}};function gy(i){let e=[],t=[],n=i,r=i-Rs+1+fy;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,E=p>2?0:-1,y=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(y,d*f*p);for(let S=0;S<f;S++){let b=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?vr.set(1,w,b):p===1?vr.set(-b,1,-w):p===2?vr.set(-b,w,1):p===3?vr.set(-1,w,-b):p===4?vr.set(-b,-1,w):vr.set(b,w,-1),vr.toArray(x,(p*f+S)*d)}}let g=new Xt;g.setAttribute("position",new Ct(m,d)),g.setAttribute("outputDirection",new Ct(x,d)),t.push(new Dt(g,null)),n>Rs&&n--}return{lodMeshes:t,sizeLods:e}}function Ep(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xy(i,e,t){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _y(i,e,t){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tp(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ap(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xl=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ua(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xs(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ri});s.uniforms.tEquirect.value=t;let a=new Dt(r,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Nt),new $o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function yy(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===el||d===tl)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Xl(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===el||d===tl,x=d===$i||d===xr;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Is(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let M=f.image;return m&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Is(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,d){return d===el?f.mapping=$i:d===tl&&(f.mapping=xr),f}function c(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function vy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&or("WebGLRenderer: "+n+" extension not supported."),r}}}function My(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let E=0,y=M.length;E<y;E+=3){let S=M[E+0],b=M[E+1],w=M[E+2];f.push(S,b,b,w,w,S)}}else{let M=m.array;x=m.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let S=E+0,b=E+1,w=E+2;f.push(S,b,b,w,w,S)}}let g=new(m.count>=65535?ia:na)(f,1);g.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function by(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Sy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wy(i,e,t){let n=new WeakMap,r=new yt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*h),w=new ta(b,y,S,h);w.type=Mn,w.needsUpdate=!0;let _=E*4;for(let R=0;R<h;R++){let L=g[R],I=p[R],O=M[R],P=y*S*4*R;for(let D=0;D<L.count;D++){let F=D*_;d===!0&&(r.fromBufferAttribute(L,D),b[P+F+0]=r.x,b[P+F+1]=r.y,b[P+F+2]=r.z,b[P+F+3]=0),m===!0&&(r.fromBufferAttribute(I,D),b[P+F+4]=r.x,b[P+F+5]=r.y,b[P+F+6]=r.z,b[P+F+7]=0),x===!0&&(r.fromBufferAttribute(O,D),b[P+F+8]=r.x,b[P+F+9]=r.y,b[P+F+10]=r.z,b[P+F+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new Ze(y,S)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ey(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ty={[yu]:"LINEAR_TONE_MAPPING",[vu]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[va]:"ACES_FILMIC_TONE_MAPPING",[Su]:"AGX_TONE_MAPPING",[wu]:"NEUTRAL_TONE_MAPPING",[bu]:"CUSTOM_TONE_MAPPING"};function Ay(i,e,t,n,r,s){let a=new un(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Xt;l.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new rn([0,2,0,0,2,0],2));let u=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Dt(l,u),f=new Ki(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,M=[],E=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let b=0;b<M.length;b++){let w=M[b];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){M=y,E=M.length>0&&M[0].isRenderPass===!0;let S=a.width,b=a.height;M.length>0&&o===null&&(o=new un(S,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new un(S,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let _=M[w];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(x||y.toneMapping===Vn&&M.length===0)return!1;if(p=S,S!==null){let b=S.width,w=S.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return E===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=g,x=!0;let b=a,w=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(y,w,b,S),T.needsSwap!==!1&&(b=w,w=w===o?c:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,u.defines={},tt.getTransfer(d)===xt&&(u.defines.SRGB_TRANSFER="");let _=Ty[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Yp=new Wt,ju=new Yi(1,1),Zp=new ta,Kp=new Fo,$p=new ua,Rp=[],Cp=[],Ip=new Float32Array(16),Pp=new Float32Array(9),Lp=new Float32Array(4);function Ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Rp[r];if(s===void 0&&(s=new Float32Array(r),Rp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zl(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),Ht(t,n)}}function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),Ht(t,n)}}function Dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Ip.set(n),i.uniformMatrix4fv(this.addr,!1,Ip),Ht(t,n)}}function Uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Gy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=t.isReversedDepthBuffer()?Hl:Vl,s=ju):s=Yp,t.setTexture2D(e||s,r)}function Wy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kp,r)}function Xy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$p,r)}function qy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zp,r)}function Yy(i){switch(i){case 5126:return Ry;case 35664:return Cy;case 35665:return Iy;case 35666:return Py;case 35674:return Ly;case 35675:return Ny;case 35676:return Dy;case 5124:case 35670:return Uy;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Zy(i,e){i.uniform1fv(this.addr,e)}function Ky(i,e){let t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function $y(i,e){let t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Jy(i,e){let t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function jy(i,e){let t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qy(i,e){let t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){let t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function sv(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function ov(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function cv(i,e,t){let n=this.cache,r=e.length,s=Zl(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ju:a=Yp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function uv(i,e,t){let n=this.cache,r=e.length,s=Zl(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Kp,s[a])}function hv(i,e,t){let n=this.cache,r=e.length,s=Zl(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$p,s[a])}function fv(i,e,t){let n=this.cache,r=e.length,s=Zl(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zp,s[a])}function dv(i){switch(i){case 5126:return Zy;case 35664:return Ky;case 35665:return $y;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}var Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yy(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dv(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Np(i,e){i.seq.push(e),i.map[e.id]=e}function pv(i,e,t){let n=i.name,r=n.length;for($u.lastIndex=0;;){let s=$u.exec(n),a=$u.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Np(t,l===void 0?new Qu(o,i,e):new eh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new th(o),Np(t,h)),t=h}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Dp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mv=37297,gv=0;function xv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Up=new Ke;function _v(i){tt._getMatrix(Up,tt.workingColorSpace,i);let e=`mat3( ${Up.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Qs:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xv(i.getShaderSource(e),o)}else return s}function yv(i,e){let t=_v(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vv={[yu]:"Linear",[vu]:"Reinhard",[Mu]:"Cineon",[va]:"ACESFilmic",[Su]:"AgX",[wu]:"Neutral",[bu]:"Custom"};function Mv(i,e){let t=vv[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wl=new B;function bv(){tt.getLuminanceCoefficients(Wl);let i=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function wv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ev(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pa(i){return i!==""}function Op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(Tv,Rv)}var Av=new Map;function Rv(i,e){let t=et[e];if(t===void 0){let n=Av.get(e);if(n!==void 0)t=et[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nh(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(i){return i.replace(Cv,Iv)}function Iv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pv={[ya]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function Lv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[$i]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function Dv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uv={[xr]:"ENVMAP_MODE_REFRACTION"};function Fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[_u]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function kv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lv(t),l=Dv(t),u=Fv(t),h=Bv(t),f=kv(t),d=Sv(t),m=wv(s),x=r.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(g=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?et.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=nh(a),a=Op(a,t),a=Bp(a,t),o=nh(o),o=Op(o,t),o=Bp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+a,y=M+p+o,S=Dp(r,r.VERTEX_SHADER,E),b=Dp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,S),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(L){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(S)||"",P=r.getShaderInfoLog(b)||"",D=I.trim(),F=O.trim(),k=P.trim(),Y=!0,N=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,b);else{let U=Fp(r,S,"vertex"),V=Fp(r,b,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+U+`
`+V)}else D!==""?ke("WebGLProgram: Program Info Log:",D):(F===""||k==="")&&(N=!1);N&&(L.diagnostics={runnable:Y,programLog:D,vertexShader:{log:F,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(S),r.deleteShader(b),_=new Cs(r,x),T=Ev(r,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,mv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var Vv=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rh(e),t.set(e,n)),n}},rh=class{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}};function Hv(i){return i===ji||i===Ta||i===Aa}function Gv(i,e,t,n,r,s){let a=new ls,o=new ih,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,R,L,I,O){let P=L.fog,D=I.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||F,k),N=Y&&Y.mapping===Ma?Y.image.height:null,U=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=V!==void 0?V.length:0,ae=0;D.morphAttributes.position!==void 0&&(ae=1),D.morphAttributes.normal!==void 0&&(ae=2),D.morphAttributes.color!==void 0&&(ae=3);let Oe,Ee,Ve,X;if(U){let Te=ai[U];Oe=Te.vertexShader,Ee=Te.fragmentShader}else{Oe=_.vertexShader,Ee=_.fragmentShader;let Te=o.getVertexShaderStage(_),qe=o.getFragmentShaderStage(_);o.update(_,Te,qe),Ve=Te.id,X=qe.id}let Z=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),ve=I.isInstancedMesh===!0,oe=I.isBatchedMesh===!0,re=!!_.map,ce=!!_.matcap,pe=!!Y,me=!!_.aoMap,be=!!_.lightMap,Ie=!!_.bumpMap&&_.wireframe===!1,Xe=!!_.normalMap,nt=!!_.displacementMap,ut=!!_.emissiveMap,at=!!_.metalnessMap,ot=!!_.roughnessMap,H=_.anisotropy>0,dt=_.clearcoat>0,je=_.dispersion>0,C=_.retroreflectivity>0,v=_.iridescence>0,q=_.sheen>0,K=_.transmission>0,ee=H&&!!_.anisotropyMap,fe=dt&&!!_.clearcoatMap,ue=dt&&!!_.clearcoatNormalMap,te=dt&&!!_.clearcoatRoughnessMap,ne=v&&!!_.iridescenceMap,ge=v&&!!_.iridescenceThicknessMap,Pe=q&&!!_.sheenColorMap,xe=q&&!!_.sheenRoughnessMap,ye=!!_.specularMap,De=!!_.specularColorMap,ze=!!_.specularIntensityMap,$e=K&&!!_.transmissionMap,W=K&&!!_.thicknessMap,Me=!!_.gradientMap,ie=!!_.alphaMap,_e=_.alphaTest>0,Q=!!_.alphaHash,z=!!_.extensions,he=Vn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(he=i.toneMapping);let de={shaderID:U,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:Ee,defines:_.defines,customVertexShaderID:Ve,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:oe,batchingColor:oe&&I._colorsTexture!==null,instancing:ve,instancingColor:ve&&I.instanceColor!==null,instancingMorph:ve&&I.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:re,matcap:ce,envMap:pe,envMapMode:pe&&Y.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:be,bumpMap:Ie,normalMap:Xe,displacementMap:nt,emissiveMap:ut,normalMapObjectSpace:Xe&&_.normalMapType===lp,normalMapTangentSpace:Xe&&_.normalMapType===zl,packedNormalMap:Xe&&_.normalMapType===zl&&Hv(_.normalMap.format),metalnessMap:at,roughnessMap:ot,anisotropy:H,anisotropyMap:ee,clearcoat:dt,clearcoatMap:fe,clearcoatNormalMap:ue,clearcoatRoughnessMap:te,dispersion:je,retroreflection:C,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:De,specularIntensityMap:ze,transmission:K,transmissionMap:$e,thicknessMap:W,gradientMap:Me,opaque:_.transparent===!1&&_.blending===bs&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:_e,alphaHash:Q,combine:_.combine,mapUv:re&&m(_.map.channel),aoMapUv:me&&m(_.aoMap.channel),lightMapUv:be&&m(_.lightMap.channel),bumpMapUv:Ie&&m(_.bumpMap.channel),normalMapUv:Xe&&m(_.normalMap.channel),displacementMapUv:nt&&m(_.displacementMap.channel),emissiveMapUv:ut&&m(_.emissiveMap.channel),metalnessMapUv:at&&m(_.metalnessMap.channel),roughnessMapUv:ot&&m(_.roughnessMap.channel),anisotropyMapUv:ee&&m(_.anisotropyMap.channel),clearcoatMapUv:fe&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(_.sheenRoughnessMap.channel),specularMapUv:ye&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:ze&&m(_.specularIntensityMap.channel),transmissionMapUv:$e&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:ie&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Xe||H),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(re||ie),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:re&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===on,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:z&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&_.extensions.multiDraw===!0||oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let T=d[_.type],R;if(T){let L=ai[T];R=Mp.clone(L.uniforms)}else R=_.uniforms;return R}function y(_,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new zv(i,T,_,r),l.push(R),u.set(T,R)),R}function S(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:w}}function Wv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,x,g,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=m,M.materialVariant=a(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=g,M.group=p),e++,M}function c(f,d,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);let E=o(f,d,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?r.push(E):t.push(E)}function l(f,d,m,x,g,p){let M=o(f,d,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?r.unshift(M):t.unshift(M)}function u(f,d){t.length>1&&t.sort(f||Xv),n.length>1&&n.sort(d||Vp),r.length>1&&r.sort(d||Vp)}function h(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function qv(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Hp,i.set(n,[a])):r>=s.length?(a=new Hp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kv=0;function $v(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jv(i){let e=new Yv,t=Zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let r=new B,s=new Fe,a=new Fe;function o(l){let u=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,E=0,y=0,S=0,b=0,w=0,_=0,T=0,R=0;l.sort($v);for(let I=0,O=l.length;I<O;I++){let P=l[I],D=P.color,F=P.intensity,k=P.distance,Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ji?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*F,h+=D.g*F,f+=D.b*F;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],F);R++}else if(P.isSunLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let U=P.shadow,V=t.get(P);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=Y;let se=U.getViewportCount();for(let ae=0;ae<se;ae++)n.sunShadowMatrix[x+ae]=U.getMatrix(ae),n.sunShadowCascade[x+ae]=U._cascadeData[ae];x+=se,m++}n.sun[d]=N,d++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let U=P.shadow,V=t.get(P);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=P.shadow.matrix,S++}n.directional[g]=N,g++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(D).multiplyScalar(F),N.distance=k,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[M]=N;let U=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,U.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=U.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=Y,w++}M++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=N,E++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let U=P.shadow,V=t.get(P);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=P.shadow.matrix,b++}n.point[p]=N,p++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(F),N.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[y]=N,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=_,L.numLightProbes=R,n.version=Kv++)}function c(l,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let y=l[M];if(y.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),h++}else if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Gp(i){let e=new Jv(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function jv(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Gp(i),e.set(r,[o])):s>=a.length?(o=new Gp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`,tM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],nM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wp=new Fe,Ia=new B,Ju=new B;function iM(i,e,t){let n=new ps,r=new Ze,s=new Ze,a=new yt,o=new Vo,c=new Ho,l={},u=t.maxTextureSize,h={[pn]:an,[an]:pn,[on]:on},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Qv,fragmentShader:eM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Xt;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let p=this.type;this.render=function(b,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Qo&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ya);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ri),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=p!==this.type;O&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=b.length;P<D;P++){let F=b[P],k=F.shadow;if(k===void 0){ke("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let Y=k.getFrameExtents();r.multiply(Y),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y));let N=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=N,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ms){if(F.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(r.x,r.y,{format:ji,type:Wn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new Yi(r.x,r.y,Mn),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Qn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Lt,k.map.depthTexture.magFilter=Lt}else F.isPointLight?(k.map=new Xl(r.x),k.map.depthTexture=new ko(r.x,Gn)):(k.map=new un(r.x,r.y),k.map.depthTexture=new Yi(r.x,r.y,Gn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Qn,this.type===ya?(k.map.depthTexture.compareFunction=N?Hl:Vl,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Lt,k.map.depthTexture.magFilter=Lt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let U=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,_);for(let V=0;V<U;V++){let se=k.getCamera(V);if(F.isPointLight){let ae=k.camera,Oe=k.matrix,Ee=F.distance||ae.far;Ee!==ae.far&&(ae.far=Ee,ae.updateProjectionMatrix()),Ia.setFromMatrixPosition(F.matrixWorld),ae.position.copy(Ia),Ju.copy(ae.position),Ju.add(tM[V]),ae.up.copy(nM[V]),ae.lookAt(Ju),ae.updateMatrixWorld(),Oe.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Wp.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wp,ae.coordinateSystem,ae.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,V),i.clear();else{V===0&&(i.setRenderTarget(k.map),i.clear());let ae=k.getViewport(V);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),I.viewport(a)}n=k.getFrustum(V),y(w,_,se,F,this.type)}k.isPointLightShadow!==!0&&this.type===Ms&&M(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,L)};function M(b,w){let _=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new un(r.x,r.y,{format:ji,type:Wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,_,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,_,d,x,null)}function E(b,w,_,T){let R=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,O=w.uuid,P=l[I];P===void 0&&(P={},l[I]=P);let D=P[O];D===void 0&&(D=R.clone(),P[O]=D,w.addEventListener("dispose",S)),R=D}if(R.visible=w.visible,R.wireframe=w.wireframe,T===Ms?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=_}return R}function y(b,w,_,T,R){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ms)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let O=e.update(b),P=b.material;if(Array.isArray(P)){let D=O.groups;for(let F=0,k=D.length;F<k;F++){let Y=D[F],N=P[Y.materialIndex];if(N&&N.visible){let U=E(b,N,T,R);b.onBeforeShadow(i,b,w,_,O,U,Y),i.renderBufferDirect(_,null,O,U,b,Y),b.onAfterShadow(i,b,w,_,O,U,Y)}}}else if(P.visible){let D=E(b,P,T,R);b.onBeforeShadow(i,b,w,_,O,D,null),i.renderBufferDirect(_,null,O,D,b,null),b.onAfterShadow(i,b,w,_,O,D,null)}}let I=b.children;for(let O=0,P=I.length;O<P;O++)y(I[O],w,_,T,R)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in l){let T=l[_],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function rM(i,e){function t(){let W=!1,Me=new yt,ie=null,_e=new yt(0,0,0,0);return{setMask:function(Q){ie!==Q&&!W&&(i.colorMask(Q,Q,Q,Q),ie=Q)},setLocked:function(Q){W=Q},setClear:function(Q,z,he,de,Te){Te===!0&&(Q*=de,z*=de,he*=de),Me.set(Q,z,he,de),_e.equals(Me)===!1&&(i.clearColor(Q,z,he,de),_e.copy(Me))},reset:function(){W=!1,ie=null,_e.set(-1,0,0,0)}}}function n(){let W=!1,Me=!1,ie=null,_e=null,Q=null;return{setReversed:function(z){if(Me!==z){let he=e.get("EXT_clip_control");z?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Me=z;let de=Q;Q=null,this.setClear(de)}},getReversed:function(){return Me},setTest:function(z){z?Z(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(z){ie!==z&&!W&&(i.depthMask(z),ie=z)},setFunc:function(z){if(Me&&(z=yp[z]),_e!==z){switch(z){case Ao:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=z}},setLocked:function(z){W=z},setClear:function(z){Q!==z&&(Q=z,Me&&(z=1-z),i.clearDepth(z))},reset:function(){W=!1,ie=null,_e=null,Q=null,Me=!1}}}function r(){let W=!1,Me=null,ie=null,_e=null,Q=null,z=null,he=null,de=null,Te=null;return{setTest:function(qe){W||(qe?Z(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(qe){Me!==qe&&!W&&(i.stencilMask(qe),Me=qe)},setFunc:function(qe,ct,lt){(ie!==qe||_e!==ct||Q!==lt)&&(i.stencilFunc(qe,ct,lt),ie=qe,_e=ct,Q=lt)},setOp:function(qe,ct,lt){(z!==qe||he!==ct||de!==lt)&&(i.stencilOp(qe,ct,lt),z=qe,he=ct,de=lt)},setLocked:function(qe){W=qe},setClear:function(qe){Te!==qe&&(i.clearStencil(qe),Te=qe)},reset:function(){W=!1,Me=null,ie=null,_e=null,Q=null,z=null,he=null,de=null,Te=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,y=null,S=null,b=null,w=null,_=new He(0,0,0),T=0,R=!1,L=null,I=null,O=null,P=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=Y>=1):N.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=Y>=2);let U=null,V={},se=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Oe=new yt().fromArray(se),Ee=new yt().fromArray(ae);function Ve(W,Me,ie,_e){let Q=new Uint8Array(4),z=i.createTexture();i.bindTexture(W,z),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ie;he++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(Me+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return z}let X={};X[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ns),Ie(!1),Xe(fu),Z(i.CULL_FACE),me(ri);function Z(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function le(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function ve(W,Me){return f[W]!==Me?(i.bindFramebuffer(W,Me),f[W]=Me,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Me),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function oe(W,Me){let ie=m,_e=!1;if(W){ie=d.get(Me),ie===void 0&&(ie=[],d.set(Me,ie));let Q=W.textures;if(ie.length!==Q.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let z=0,he=Q.length;z<he;z++)ie[z]=i.COLOR_ATTACHMENT0+z;ie.length=Q.length,_e=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ie)}function re(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let ce={[gr]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};ce[Hd]=i.MIN,ce[Gd]=i.MAX;let pe={[Wd]:i.ZERO,[Xd]:i.ONE,[qd]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[xu]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Me,ie,_e,Q,z,he,de,Te,qe){if(W===ri){g===!0&&(le(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),W!==kd){if(W!==p||qe!==R){if((M!==gr||S!==gr)&&(i.blendEquation(i.FUNC_ADD),M=gr,S=gr),qe)switch(W){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",W);break}else switch(W){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",W);break}E=null,y=null,b=null,w=null,_.set(0,0,0),T=0,p=W,R=qe}return}Q=Q||Me,z=z||ie,he=he||_e,(Me!==M||Q!==S)&&(i.blendEquationSeparate(ce[Me],ce[Q]),M=Me,S=Q),(ie!==E||_e!==y||z!==b||he!==w)&&(i.blendFuncSeparate(pe[ie],pe[_e],pe[z],pe[he]),E=ie,y=_e,b=z,w=he),(de.equals(_)===!1||Te!==T)&&(i.blendColor(de.r,de.g,de.b,Te),_.copy(de),T=Te),p=W,R=!1}function be(W,Me){W.side===on?le(i.CULL_FACE):Z(i.CULL_FACE);let ie=W.side===an;Me&&(ie=!ie),Ie(ie),W.blending===bs&&W.transparent===!1?me(ri):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let _e=W.stencilWrite;o.setTest(_e),_e&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(W){L!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),L=W)}function Xe(W){W!==Od?(Z(i.CULL_FACE),W!==I&&(W===fu?i.cullFace(i.BACK):W===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),I=W}function nt(W){W!==O&&(k&&i.lineWidth(W),O=W)}function ut(W,Me,ie){W?(Z(i.POLYGON_OFFSET_FILL),(P!==Me||D!==ie)&&(P=Me,D=ie,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,ie))):le(i.POLYGON_OFFSET_FILL)}function at(W){W?Z(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function ot(W){W===void 0&&(W=i.TEXTURE0+F-1),U!==W&&(i.activeTexture(W),U=W)}function H(W,Me,ie){ie===void 0&&(U===null?ie=i.TEXTURE0+F-1:ie=U);let _e=V[ie];_e===void 0&&(_e={type:void 0,texture:void 0},V[ie]=_e),(_e.type!==W||_e.texture!==Me)&&(U!==ie&&(i.activeTexture(ie),U=ie),i.bindTexture(W,Me||X[W]),_e.type=W,_e.texture=Me)}function dt(){let W=V[U];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function v(){try{i.texSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function fe(){try{i.texStorage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ue(){try{i.texStorage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function te(){try{i.texImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ne(){try{i.texImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ge(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Pe(W,Me){h[W]!==Me&&(i.pixelStorei(W,Me),h[W]=Me)}function xe(W){Oe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function ye(W){Ee.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function De(W,Me){let ie=l.get(Me);ie===void 0&&(ie=new WeakMap,l.set(Me,ie));let _e=ie.get(W);_e===void 0&&(_e=i.getUniformBlockIndex(Me,W.name),ie.set(W,_e))}function ze(W,Me){let _e=l.get(Me).get(W);c.get(Me)!==_e&&(i.uniformBlockBinding(Me,_e,W.__bindingPointIndex),c.set(Me,_e))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,V={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,y=null,S=null,b=null,w=null,_=new He(0,0,0),T=0,R=!1,L=null,I=null,O=null,P=null,D=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:le,bindFramebuffer:ve,drawBuffers:oe,useProgram:re,setBlending:me,setMaterial:be,setFlipSided:Ie,setCullFace:Xe,setLineWidth:nt,setPolygonOffset:ut,setScissorTest:at,activeTexture:ot,bindTexture:H,unbindTexture:dt,compressedTexImage2D:je,compressedTexImage3D:C,texImage2D:te,texImage3D:ne,pixelStorei:Pe,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:fe,texStorage3D:ue,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:xe,viewport:ye,reset:$e}}function sM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return m?new OffscreenCanvas(C,v):ss("canvas")}function g(C,v,q){let K=1,ee=je(C);if((ee.width>q||ee.height>q)&&(K=q/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(K*ee.width),ue=Math.floor(K*ee.height);f===void 0&&(f=x(fe,ue));let te=v?x(fe,ue):f;return te.width=fe,te.height=ue,te.getContext("2d").drawImage(C,0,0,fe,ue),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+fe+"x"+ue+")."),te}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,v,q,K,ee,fe=!1){if(C!==null){if(i[C]!==void 0)return i[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=v;if(v===i.RED&&(q===i.FLOAT&&(te=i.R32F),q===i.HALF_FLOAT&&(te=i.R16F),q===i.UNSIGNED_BYTE&&(te=i.R8),q===i.UNSIGNED_SHORT&&ue&&(te=ue.R16_EXT),q===i.SHORT&&ue&&(te=ue.R16_SNORM_EXT)),v===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.R8UI),q===i.UNSIGNED_SHORT&&(te=i.R16UI),q===i.UNSIGNED_INT&&(te=i.R32UI),q===i.BYTE&&(te=i.R8I),q===i.SHORT&&(te=i.R16I),q===i.INT&&(te=i.R32I)),v===i.RG&&(q===i.FLOAT&&(te=i.RG32F),q===i.HALF_FLOAT&&(te=i.RG16F),q===i.UNSIGNED_BYTE&&(te=i.RG8),q===i.UNSIGNED_SHORT&&ue&&(te=ue.RG16_EXT),q===i.SHORT&&ue&&(te=ue.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RG8UI),q===i.UNSIGNED_SHORT&&(te=i.RG16UI),q===i.UNSIGNED_INT&&(te=i.RG32UI),q===i.BYTE&&(te=i.RG8I),q===i.SHORT&&(te=i.RG16I),q===i.INT&&(te=i.RG32I)),v===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGB8UI),q===i.UNSIGNED_SHORT&&(te=i.RGB16UI),q===i.UNSIGNED_INT&&(te=i.RGB32UI),q===i.BYTE&&(te=i.RGB8I),q===i.SHORT&&(te=i.RGB16I),q===i.INT&&(te=i.RGB32I)),v===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),q===i.UNSIGNED_INT&&(te=i.RGBA32UI),q===i.BYTE&&(te=i.RGBA8I),q===i.SHORT&&(te=i.RGBA16I),q===i.INT&&(te=i.RGBA32I)),v===i.RGB&&(q===i.UNSIGNED_SHORT&&ue&&(te=ue.RGB16_EXT),q===i.SHORT&&ue&&(te=ue.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),v===i.RGBA){let ne=fe?Qs:tt.getTransfer(ee);q===i.FLOAT&&(te=i.RGBA32F),q===i.HALF_FLOAT&&(te=i.RGBA16F),q===i.UNSIGNED_BYTE&&(te=ne===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ue&&(te=ue.RGBA16_EXT),q===i.SHORT&&ue&&(te=ue.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(C,v){let q;return C?v===null||v===Gn||v===Es?q=i.DEPTH24_STENCIL8:v===Mn?q=i.DEPTH32F_STENCIL8:v===ws&&(q=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===Es?q=i.DEPTH_COMPONENT24:v===Mn?q=i.DEPTH_COMPONENT32F:v===ws&&(q=i.DEPTH_COMPONENT16),q}function b(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function _(C){let v=C.target;v.removeEventListener("dispose",_),L(v)}function T(C){let v=n.get(C);if(v.__webglInit===void 0)return;let q=C.source,K=d.get(q);if(K){let ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(K).length===0&&d.delete(q)}n.remove(C)}function R(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let q=C.source,K=d.get(q);delete K[v.__cacheKey],a.memory.textures--}function L(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=C.textures;for(let K=0,ee=q.length;K<ee;K++){let fe=n.get(q[K]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(q[K])}n.remove(C)}let I=0;function O(){I=0}function P(){return I}function D(C){I=C}function F(){let C=I;return C>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function k(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Y(C,v){let q=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let K=C.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,C,v);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+v)}function N(C,v){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){le(q,C,v);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+v)}function U(C,v){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){le(q,C,v);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+v)}function V(C,v){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){ve(q,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+v)}let se={[Xi]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},ae={[Lt]:i.NEAREST,[nl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Ss]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Oe={[up]:i.NEVER,[mp]:i.ALWAYS,[hp]:i.LESS,[Vl]:i.LEQUAL,[fp]:i.EQUAL,[Hl]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function Ee(C,v){if(v.type===Mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===Ss||v.magFilter===_r||v.magFilter===Hn||v.minFilter===Nt||v.minFilter===Ss||v.minFilter===_r||v.minFilter===Hn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,se[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,se[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,se[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==_r&&v.minFilter!==Hn||v.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(C,v){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let K=v.source,ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));let fe=k(v);if(fe!==C.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ee[fe].usedTimes++;let ue=ee[C.__cacheKey];ue!==void 0&&(ee[C.__cacheKey].usedTimes--,ue.usedTimes===0&&R(v)),C.__cacheKey=fe,C.__webglTexture=ee[fe].texture}return q}function X(C,v,q){return Math.floor(Math.floor(C/q)/v)}function Z(C,v,q,K){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,q,K,v.data);else{fe.sort((Pe,xe)=>Pe.start-xe.start);let ue=0;for(let Pe=1;Pe<fe.length;Pe++){let xe=fe[ue],ye=fe[Pe],De=xe.start+xe.count,ze=X(ye.start,v.width,4),$e=X(xe.start,v.width,4);ye.start<=De+1&&ze===$e&&X(ye.start+ye.count-1,v.width,4)===ze?xe.count=Math.max(xe.count,ye.start+ye.count-xe.start):(++ue,fe[ue]=ye)}fe.length=ue+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Pe=0,xe=fe.length;Pe<xe;Pe++){let ye=fe[Pe],De=Math.floor(ye.start/4),ze=Math.ceil(ye.count/4),$e=De%v.width,W=Math.floor(De/v.width),Me=ze,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,$e,W,Me,ie,q,K,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function le(C,v,q){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let ee=Ve(C,v),fe=v.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+q);let ue=n.get(fe);if(fe.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ie=tt.getPrimaries(tt.workingColorSpace),_e=v.colorSpace===Xn?null:tt.getPrimaries(v.colorSpace),Q=v.colorSpace===Xn||ie===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=g(v.image,!1,r.maxTextureSize);ne=dt(v,ne);let ge=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),xe=y(v.internalFormat,ge,Pe,v.normalized,v.colorSpace,v.isVideoTexture);Ee(K,v);let ye,De=v.mipmaps,ze=v.isVideoTexture!==!0,$e=ue.__version===void 0||ee===!0,W=fe.dataReady,Me=b(v,ne);if(v.isDepthTexture)xe=S(v.format===Ji,v.type),$e&&(ze?t.texStorage2D(i.TEXTURE_2D,1,xe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,xe,ne.width,ne.height,0,ge,Pe,null));else if(v.isDataTexture)if(De.length>0){ze&&$e&&t.texStorage2D(i.TEXTURE_2D,Me,xe,De[0].width,De[0].height);for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],ze?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,ie,xe,ye.width,ye.height,0,ge,Pe,ye.data);v.generateMipmaps=!1}else ze?($e&&t.texStorage2D(i.TEXTURE_2D,Me,xe,ne.width,ne.height),W&&Z(v,ne,ge,Pe)):t.texImage2D(i.TEXTURE_2D,0,xe,ne.width,ne.height,0,ge,Pe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,xe,De[0].width,De[0].height,ne.depth);for(let ie=0,_e=De.length;ie<_e;ie++)if(ye=De[ie],v.format!==bn)if(ge!==null)if(ze){if(W)if(v.layerUpdates.size>0){let Q=zu(ye.width,ye.height,v.format,v.type);for(let z of v.layerUpdates){let he=ye.data.subarray(z*Q/ye.data.BYTES_PER_ELEMENT,(z+1)*Q/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,z,ye.width,ye.height,1,ge,he)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ne.depth,ge,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,xe,ye.width,ye.height,ne.depth,0,ye.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ne.depth,ge,Pe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,xe,ye.width,ye.height,ne.depth,0,ge,Pe,ye.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ze&&$e&&t.texStorage2D(i.TEXTURE_2D,Me,xe,De[0].width,De[0].height);for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],v.format!==bn?ge!==null?ze?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,xe,ye.width,ye.height,0,ye.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,ie,xe,ye.width,ye.height,0,ge,Pe,ye.data)}else if(v.isDataArrayTexture)if(ze){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,xe,ne.width,ne.height,ne.depth),W)if(v.layerUpdates.size>0){let ie=zu(ne.width,ne.height,v.format,v.type);for(let _e of v.layerUpdates){let Q=ne.data.subarray(_e*ie/ne.data.BYTES_PER_ELEMENT,(_e+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ne.width,ne.height,1,ge,Pe,Q)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Pe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ne.width,ne.height,ne.depth,0,ge,Pe,ne.data);else if(v.isData3DTexture)ze?($e&&t.texStorage3D(i.TEXTURE_3D,Me,xe,ne.width,ne.height,ne.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Pe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ne.width,ne.height,ne.depth,0,ge,Pe,ne.data);else if(v.isFramebufferTexture){if($e)if(ze)t.texStorage2D(i.TEXTURE_2D,Me,xe,ne.width,ne.height);else{let ie=ne.width,_e=ne.height;for(let Q=0;Q<Me;Q++)t.texImage2D(i.TEXTURE_2D,Q,xe,ie,_e,0,ge,Pe,null),ie>>=1,_e>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),h.add(v),ie.onpaint=_e=>{let Q=_e.changedElements;for(let z of h)Q.includes(z.image)&&(z.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Q=i.RGBA,z=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Q,z,he,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(ze&&$e){let ie=je(De[0]);t.texStorage2D(i.TEXTURE_2D,Me,xe,ie.width,ie.height)}for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],ze?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge,Pe,ye):t.texImage2D(i.TEXTURE_2D,ie,xe,ge,Pe,ye);v.generateMipmaps=!1}else if(ze){if($e){let ie=je(ne);t.texStorage2D(i.TEXTURE_2D,Me,xe,ie.width,ie.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,ne)}else t.texImage2D(i.TEXTURE_2D,0,xe,ge,Pe,ne);p(v)&&M(K),ue.__version=fe.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ve(C,v,q){if(v.image.length!==6)return;let K=Ve(C,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let fe=n.get(ee);if(ee.version!==fe.__version||K===!0){t.activeTexture(i.TEXTURE0+q);let ue=tt.getPrimaries(tt.workingColorSpace),te=v.colorSpace===Xn?null:tt.getPrimaries(v.colorSpace),ne=v.colorSpace===Xn||ue===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let z=0;z<6;z++)!ge&&!Pe?xe[z]=g(v.image[z],!0,r.maxCubemapSize):xe[z]=Pe?v.image[z].image:v.image[z],xe[z]=dt(v,xe[z]);let ye=xe[0],De=s.convert(v.format,v.colorSpace),ze=s.convert(v.type),$e=y(v.internalFormat,De,ze,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,Me=fe.__version===void 0||K===!0,ie=ee.dataReady,_e=b(v,ye);Ee(i.TEXTURE_CUBE_MAP,v);let Q;if(ge){W&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,ye.width,ye.height);for(let z=0;z<6;z++){Q=xe[z].mipmaps;for(let he=0;he<Q.length;he++){let de=Q[he];v.format!==bn?De!==null?W?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,$e,de.width,de.height,0,de.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,0,0,de.width,de.height,De,ze,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,$e,de.width,de.height,0,De,ze,de.data)}}}else{if(Q=v.mipmaps,W&&Me){Q.length>0&&_e++;let z=je(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,$e,z.width,z.height)}for(let z=0;z<6;z++)if(Pe){W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xe[z].width,xe[z].height,De,ze,xe[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,$e,xe[z].width,xe[z].height,0,De,ze,xe[z].data);for(let he=0;he<Q.length;he++){let Te=Q[he].image[z].image;W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,0,0,Te.width,Te.height,De,ze,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,$e,Te.width,Te.height,0,De,ze,Te.data)}}else{W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,De,ze,xe[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,$e,De,ze,xe[z]);for(let he=0;he<Q.length;he++){let de=Q[he];W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,0,0,De,ze,de.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,$e,De,ze,de.image[z])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),fe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function oe(C,v,q,K,ee,fe){let ue=s.convert(q.format,q.colorSpace),te=s.convert(q.type),ne=y(q.internalFormat,ue,te,q.normalized,q.colorSpace),ge=n.get(v),Pe=n.get(q);if(Pe.__renderTarget=v,!ge.__hasExternalTextures){let xe=Math.max(1,v.width>>fe),ye=Math.max(1,v.height>>fe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,fe,ne,xe,ye,v.depth,0,ue,te,null):t.texImage2D(ee,fe,ne,xe,ye,0,ue,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,Pe.__webglTexture,0,at(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,Pe.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,v,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,fe=S(v.stencilBuffer,ee),ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),fe,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,fe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,C)}else{let K=v.textures;for(let ee=0;ee<K.length;ee++){let fe=K[ee],ue=s.convert(fe.format,fe.colorSpace),te=s.convert(fe.type),ne=y(fe.internalFormat,ue,te,fe.normalized,fe.colorSpace);ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),ne,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(C,v,q){let K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,v.depthTexture);let ge=s.convert(v.depthTexture.format),Pe=s.convert(v.depthTexture.type),xe;v.depthTexture.format===Qn?xe=i.DEPTH_COMPONENT24:v.depthTexture.format===Ji&&(xe=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,xe,v.width,v.height,0,ge,Pe,null)}}else Y(v.depthTexture,0);let fe=ee.__webglTexture,ue=at(v),te=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ne=v.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qn)ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,fe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,fe,0);else if(v.depthTexture.format===Ji)ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,fe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(C){let v=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)ce(v.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?ce(v.__webglFramebuffer[0],C,0):ce(v.__webglFramebuffer,C,0)}else if(q){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),re(v.__webglDepthbuffer[K],C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,fe)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),re(v.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,v,q){let K=n.get(C);v!==void 0&&oe(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&pe(C)}function be(C){let v=C.texture,q=n.get(C),K=n.get(v);C.addEventListener("dispose",_);let ee=C.textures,fe=C.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,a.memory.textures++),fe){q.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[te]=[];for(let ne=0;ne<v.mipmaps.length;ne++)q.__webglFramebuffer[te][ne]=i.createFramebuffer()}else q.__webglFramebuffer[te]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)q.__webglFramebuffer[te]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ue)for(let te=0,ne=ee.length;te<ne;te++){let ge=n.get(ee[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ot(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let ne=ee[te];q.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[te]);let ge=s.convert(ne.format,ne.colorSpace),Pe=s.convert(ne.type),xe=y(ne.internalFormat,ge,Pe,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),ye=at(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,xe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,q.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),re(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)oe(q.__webglFramebuffer[te][ne],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else oe(q.__webglFramebuffer[te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let te=0,ne=ee.length;te<ne;te++){let ge=ee[te],Pe=n.get(ge),xe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),Ee(xe,ge),oe(q.__webglFramebuffer,C,ge,i.COLOR_ATTACHMENT0+te,xe,0),p(ge)&&M(xe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,K.__webglTexture),Ee(te,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)oe(q.__webglFramebuffer[ne],C,v,i.COLOR_ATTACHMENT0,te,ne);else oe(q.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,te,0);p(v)&&M(te),t.unbindTexture()}C.depthBuffer&&pe(C)}function Ie(C){let v=C.textures;for(let q=0,K=v.length;q<K;q++){let ee=v[q];if(p(ee)){let fe=E(C),ue=n.get(ee).__webglTexture;t.bindTexture(fe,ue),M(fe),t.unbindTexture()}}}let Xe=[],nt=[];function ut(C){if(C.samples>0){if(ot(C)===!1){let v=C.textures,q=C.width,K=C.height,ee=i.COLOR_BUFFER_BIT,fe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(C),te=v.length>1;if(te)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);let Pe=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,ee,i.NEAREST),c===!0&&(Xe.length=0,nt.length=0,Xe.push(i.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Xe.push(fe),nt.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);let Pe=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(C){return Math.min(r.maxSamples,C.samples)}function ot(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(C){let v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function dt(C,v){let q=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==sn&&q!==Xn&&(tt.getTransfer(q)===xt?(K!==bn||ee!==mn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",q)),v}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=me,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aM(i,e){function t(n,r=Xn){let s,a=tt.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tu)return i.BYTE;if(n===Au)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Pu)return i.RGB;if(n===bn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===ol)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===ba||n===Sa||n===wa||n===Ea)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===hl||n===fl||n===dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===xl||n===_l||n===Ta||n===yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pl||n===ml)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===xl)return s.COMPRESSED_R11_EAC;if(n===_l)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ta)return s.COMPRESSED_RG11_EAC;if(n===yl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ul||n===Fl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Dl)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Bl||n===Aa||n===kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:oM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends ei{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new sh,p={},M=t.getContextAttributes(),E=null,y=null,S=[],b=[],w=new Ze,_=null,T=null,R=new kt;R.viewport=new yt;let L=new kt;L.viewport=new yt;let I=[R,L],O=new Jo,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=S[X];return Z===void 0&&(Z=new cs,S[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=S[X];return Z===void 0&&(Z=new cs,S[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=S[X];return Z===void 0&&(Z=new cs,S[X]=Z),Z.getHandSpace()};function F(X){let Z=b.indexOf(X.inputSource);if(Z===-1)return;let le=S[Z];le!==void 0&&(le.update(X.inputSource,X.frame,l||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){let Z=b[X];Z!==null&&(b[X]=null,S[X].disconnect(Z))}P=null,D=null,g.reset();for(let X in p)delete p[X];if(e.setRenderTarget(E),d=null,f=null,h=null,r=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),T!==null){let X=T.camera;X.fov=T.fov,X.zoom=T.zoom,X.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ve=null,oe=null;M.depth&&(oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Ji:Qn,ve=M.stencil?Es:Gn);let re={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new un(f.textureWidth,f.textureHeight,{format:bn,type:mn,depthTexture:new Yi(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new un(d.framebufferWidth,d.framebufferHeight,{format:bn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(X){for(let Z=0;Z<X.removed.length;Z++){let le=X.removed[Z],ve=b.indexOf(le);ve>=0&&(b[ve]=null,S[ve].disconnect(le))}for(let Z=0;Z<X.added.length;Z++){let le=X.added[Z],ve=b.indexOf(le);if(ve===-1){for(let re=0;re<S.length;re++)if(re>=b.length){b.push(le),ve=re;break}else if(b[re]===null){b[re]=le,ve=re;break}if(ve===-1)break}let oe=S[ve];oe&&oe.connect(le)}}let N=new B,U=new B;function V(X,Z,le){N.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);let ve=N.distanceTo(U),oe=Z.projectionMatrix.elements,re=le.projectionMatrix.elements,ce=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),me=(oe[9]+1)/oe[5],be=(oe[9]-1)/oe[5],Ie=(oe[8]-1)/oe[0],Xe=(re[8]+1)/re[0],nt=ce*Ie,ut=ce*Xe,at=ve/(-Ie+Xe),ot=at*-Ie;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),oe[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let H=ce+at,dt=pe+at,je=nt-ot,C=ut+(ve-ot),v=me*pe/dt*H,q=be*pe/dt*H;X.projectionMatrix.makePerspective(je,C,v,q,H,dt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,le=X.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(le=g.depthFar)),O.near=L.near=R.near=Z,O.far=L.far=R.far=le,(P!==O.near||D!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,D=O.far),O.layers.mask=X.layers.mask|6,R.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let ve=X.parent,oe=O.cameras;se(O,ve);for(let re=0;re<oe.length;re++)se(oe[re],ve);oe.length===2?V(O,R,L):O.projectionMatrix.copy(R.projectionMatrix),T===null&&X.isPerspectiveCamera&&(T={camera:X,fov:X.fov,zoom:X.zoom}),ae(X,O,ve)};function ae(X,Z,le){le===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ur*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(X){return p[X]};let Oe=null;function Ee(X,Z){if(u=Z.getViewerPose(l||a),m=Z,u!==null){let le=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ve=!1;le.length!==O.cameras.length&&(O.cameras.length=0,ve=!0);for(let pe=0;pe<le.length;pe++){let me=le[pe],be=null;if(d!==null)be=d.getViewport(me);else{let Xe=h.getViewSubImage(f,me);be=Xe.viewport,pe===0&&(e.setRenderTargetTextures(y,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(y))}let Ie=I[pe];Ie===void 0&&(Ie=new kt,Ie.layers.enable(pe),Ie.viewport=new yt,I[pe]=Ie),Ie.matrix.fromArray(me.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(me.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(O.matrix.copy(Ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ve===!0&&O.cameras.push(Ie)}let oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let pe=h.getDepthInformation(le[0]);pe&&pe.isValid&&pe.texture&&g.init(pe,r.renderState)}if(oe&&oe.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<le.length;pe++){let me=le[pe].camera;if(me){let be=p[me];be||(be=new ha,p[me]=be);let Ie=h.getCameraImage(me);be.sourceTexture=Ie}}}}for(let le=0;le<S.length;le++){let ve=b[le],oe=S[le];ve!==null&&oe!==void 0&&oe.update(ve,Z,l||a)}Oe&&Oe(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let Ve=new Xp;Ve.setAnimationLoop(Ee),this.setAnimationLoop=function(X){Oe=X},this.dispose=function(){}}},cM=new Fe,Jp=new Ke;Jp.set(-1,0,0,0,1,0,0,0,1);function uM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ou(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,M,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,y=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function l(y,S){let b=r[y.id];b===void 0&&(g(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(y,w);let _=e.render.frame;s[y.id]!==_&&(f(y),s[y.id]=_)}function u(y){let S=h();y.__bindingPointIndex=S;let b=i.createBuffer(),w=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=r[y.id],b=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,T=b.length;_<T;_++){let R=b[_];if(Array.isArray(R))for(let L=0,I=R.length;L<I;L++)d(R[L],_,L,w);else d(R,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,b,w){if(x(y,S,b,w)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let I=T[L],O=p(I);m(I,y.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function x(y,S,b,w){let _=y.value,T=S+"_"+b;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:ArrayBuffer.isView(_)?w[T]=_.slice():w[T]=_.clone(),!0;{let R=w[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return w[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(y){let S=y.uniforms,b=0,w=16;for(let T=0,R=S.length;T<R;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,O=L.length;I<O;I++){let P=L[I],D=Array.isArray(P.value)?P.value:[P.value];for(let F=0,k=D.length;F<k;F++){let Y=D[F],N=p(Y),U=b%w,V=U%N.boundary,se=U+V;b+=V,se!==0&&w-se<N.storage&&(b+=w-se),P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=N.storage}}}let _=b%w;return _>0&&(b+=w-_),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function E(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:E}}var fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function dM(){return si===null&&(si=new ds(fM,16,16,ji,Wn),si.name="DFG_LUT",si.minFilter=Nt,si.magFilter=Nt,si.wrapS=Pn,si.wrapT=Pn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var ql=class{constructor(e={}){let{canvas:t=gp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([cl,ll,ol]),p=new Set([mn,Gn,ws,Es,rl,sl]),M=new Uint32Array(4),E=new Int32Array(4),y=new B,S=null,b=null,w=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,I=null,O=null,P=null,D=null;this._outputColorSpace=Rt;let F=0,k=0,Y=null,N=-1,U=null,V=new yt,se=new yt,ae=null,Oe=new He(0),Ee=0,Ve=t.width,X=t.height,Z=1,le=null,ve=null,oe=new yt(0,0,Ve,X),re=new yt(0,0,Ve,X),ce=!1,pe=new ps,me=!1,be=!1,Ie=new Fe,Xe=new B,nt=new yt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function ot(){return Y===null?Z:1}let H=n;function dt(A,G){return t.getContext(A,G)}let je,C,v,q,K,ee,fe,ue,te,ne,ge,Pe,xe,ye,De,ze,$e,W,Me,ie,_e,Q,z;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ct,!1),H===null){let G="webgl2";if(H=dt(G,A),H===null)throw dt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(A){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Ye("WebGLRenderer: "+A.message),A}function he(){je=new vy(H),je.init(),_e=new aM(H,je),C=new uy(H,je,e,_e),v=new rM(H,je),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),O=H.createFramebuffer(),P=H.createFramebuffer(),D=H.createFramebuffer(),q=new Sy(H),K=new Wv,ee=new sM(H,je,v,K,C,_e,q),fe=new yy(R),ue=new E0(H),Q=new ly(H,ue),te=new My(H,ue,q,Q),ne=new Ey(H,te,ue,Q,q),W=new wy(H,C,ee),De=new hy(K),ge=new Gv(R,fe,je,C,Q,De),Pe=new uM(R,K),xe=new qv,ye=new jv(je),$e=new oy(R,fe,v,ne,m,c),ze=new iM(R,ne,C),z=new hM(H,q,C,v),Me=new cy(H,je,q),ie=new by(H,je,q),q.programs=ge.programs,R.capabilities=C,R.extensions=je,R.properties=K,R.renderLists=xe,R.shadowMap=ze,R.state=v,R.info=q}x!==mn&&(T=new Ay(x,t.width,t.height,o,r,s));let de=new ah(R,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(Ve,X,!1))},this.getSize=function(A){return A.set(Ve,X)},this.setSize=function(A,G,j=!0){if(de.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=A,X=G,t.width=Math.floor(A*Z),t.height=Math.floor(G*Z),j===!0&&(t.style.width=A+"px",t.style.height=G+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Ve*Z,X*Z).floor()},this.setDrawingBufferSize=function(A,G,j){Ve=A,X=G,Z=j,t.width=Math.floor(A*j),t.height=Math.floor(G*j),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(x===mn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,G,j,$){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,G,j,$),v.viewport(V.copy(oe).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,G,j,$){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,G,j,$),v.scissor(se.copy(re).multiplyScalar(Z).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){v.setScissorTest(ce=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,j=!0){let $=0;if(A){let J=!1;if(Y!==null){let Ae=Y.texture.format;J=g.has(Ae)}if(J){let Ae=Y.texture.type,Ce=p.has(Ae),we=$e.getClearColor(),Le=$e.getClearAlpha(),Ue=we.r,Qe=we.g,rt=we.b;Ce?(M[0]=Ue,M[1]=Qe,M[2]=rt,M[3]=Le,H.clearBufferuiv(H.COLOR,0,M)):(E[0]=Ue,E[1]=Qe,E[2]=rt,E[3]=Le,H.clearBufferiv(H.COLOR,0,E))}else $|=H.COLOR_BUFFER_BIT}G&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),$e.dispose(),xe.dispose(),ye.dispose(),K.dispose(),fe.dispose(),ne.dispose(),Q.dispose(),z.dispose(),ge.dispose(),de.dispose(),de.removeEventListener("sessionstart",$h),de.removeEventListener("sessionend",Jh),er.stop()};function Te(A){A.preventDefault(),ea("WebGLRenderer: Context Lost."),L=!0}function qe(){ea("WebGLRenderer: Context Restored."),L=!1;let A=q.autoReset,G=ze.enabled,j=ze.autoUpdate,$=ze.needsUpdate,J=ze.type;he(),q.autoReset=A,ze.enabled=G,ze.autoUpdate=j,ze.needsUpdate=$,ze.type=J}function ct(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){let G=A.target;G.removeEventListener("dispose",lt),Nn(G)}function Nn(A){fi(A),K.remove(A)}function fi(A){let G=K.get(A).programs;G!==void 0&&(G.forEach(function(j){ge.releaseProgram(j)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,j,$,J,Ae){G===null&&(G=ut);let Ce=J.isMesh&&J.matrixWorld.determinantAffine()<0,we=Vm(A,G,j,$,J);v.setMaterial($,Ce);let Le=j.index,Ue=1;if($.wireframe===!0){if(Le=te.getWireframeAttribute(j),Le===void 0)return;Ue=2}let Qe=j.drawRange,rt=j.attributes.position,Ne=Qe.start*Ue,gt=(Qe.start+Qe.count)*Ue;Ae!==null&&(Ne=Math.max(Ne,Ae.start*Ue),gt=Math.min(gt,(Ae.start+Ae.count)*Ue)),Le!==null?(Ne=Math.max(Ne,0),gt=Math.min(gt,Le.count)):rt!=null&&(Ne=Math.max(Ne,0),gt=Math.min(gt,rt.count));let Ot=gt-Ne;if(Ot<0||Ot===1/0)return;Q.setup(J,$,we,j,Le);let Tt,St=Me;if(Le!==null&&(Tt=ue.get(Le),St=ie,St.setIndex(Tt)),J.isMesh)$.wireframe===!0?(v.setLineWidth($.wireframeLinewidth*ot()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(J.isLine){let Yt=$.linewidth;Yt===void 0&&(Yt=1),v.setLineWidth(Yt*ot()),J.isLineSegments?St.setMode(H.LINES):J.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else J.isPoints?St.setMode(H.POINTS):J.isSprite&&St.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(je.get("WEBGL_multi_draw"))St.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Yt=J._multiDrawStarts,Re=J._multiDrawCounts,Qt=J._multiDrawCount,ht=Le?ue.get(Le).bytesPerElement:1,wn=K.get($).currentProgram.getUniforms();for(let Yn=0;Yn<Qt;Yn++)wn.setValue(H,"_gl_DrawID",Yn),St.render(Yt[Yn]/ht,Re[Yn])}else if(J.isInstancedMesh)St.renderInstances(Ne,Ot,J.count);else if(j.isInstancedBufferGeometry){let Yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Re=Math.min(j.instanceCount,Yt);St.renderInstances(Ne,Ot,Re)}else St.render(Ne,Ot)};function ln(A,G,j,$){I!==null&&A.isNodeMaterial&&I.setObject($,A),me===!0&&De.setState(A,j,!1),A.transparent===!0&&A.side===on&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,Ba(A,G,$),A.side=pn,A.needsUpdate=!0,Ba(A,G,$),A.side=on):Ba(A,G,$)}this.compile=function(A,G,j=null){j===null&&(j=A),I!==null&&I.renderStart(A,G,j),b=ye.get(j),b.init(G),_.push(b),j.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),A!==j&&A.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),be=this.localClippingEnabled,me=De.init(this.clippingPlanes,be),me===!0&&De.setGlobalState(this.clippingPlanes,G),I!==null&&ze.render(b.state.shadowsArray,j,G);let $=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Ce=0;Ce<Ae.length;Ce++){let we=Ae[Ce];ln(we,j,G,J),$.add(we)}else ln(Ae,j,G,J),$.add(Ae)}),b=_.pop(),I!==null&&I.renderEnd(),$},this.compileAsync=function(A,G,j=null){let $=this.compile(A,G,j);return new Promise(J=>{function Ae(){if($.forEach(function(Ce){let Le=K.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&$.delete(Ce)}),$.size===0){J(A);return}setTimeout(Ae,10)}je.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let gn=null;function Sn(A){gn&&gn(A)}function $h(){er.stop()}function Jh(){er.start()}let er=new Xp;er.setAnimationLoop(Sn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(A){gn=A,de.setAnimationLoop(A),A===null?er.stop():er.start()},de.addEventListener("sessionstart",$h),de.addEventListener("sessionend",Jh),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(A,G);let j=de.enabled===!0&&de.isPresenting===!0,$=T!==null&&(Y===null||j)&&T.begin(R,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,Y),b=ye.get(A,_.length),b.init(G),b.state.textureUnits=ee.getTextureUnits(),_.push(b),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),pe.setFromProjectionMatrix(Ie,Bn,G.reversedDepth),be=this.localClippingEnabled,me=De.init(this.clippingPlanes,be),S=xe.get(A,w.length),S.init(),w.push(S),de.enabled===!0&&de.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&ic(Ce,G,-1/0,R.sortObjects)}ic(A,G,0,R.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(le,ve),at=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,at&&$e.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&De.beginShadows();let J=b.state.shadowsArray;if(ze.render(J,A,G),me===!0&&De.endShadows(),($&&T.hasRenderPass())===!1){let Ce=S.opaque,we=S.transmissive;if(b.setupLights(),G.isArrayCamera){let Le=G.cameras;if(we.length>0)for(let Ue=0,Qe=Le.length;Ue<Qe;Ue++){let rt=Le[Ue];Qh(Ce,we,A,rt)}at&&$e.render(A);for(let Ue=0,Qe=Le.length;Ue<Qe;Ue++){let rt=Le[Ue];jh(S,A,rt,rt.viewport)}}else we.length>0&&Qh(Ce,we,A,G),at&&$e.render(A),jh(S,A,G)}Y!==null&&k===0&&(ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y)),$&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,G),Q.resetDefaultState(),N=-1,U=null,_.pop(),_.length>0?(b=_[_.length-1],ee.setTextureUnits(b.state.textureUnits),me===!0&&De.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,I!==null&&I.renderEnd()};function ic(A,G,j,$){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(pe)){$&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);let Ce=ne.update(A),we=A.material;we.visible&&S.push(A,Ce,we,j,nt.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(pe))){let Ce=ne.update(A),we=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),nt.copy(Ce.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)),Array.isArray(we)){let Le=Ce.groups;for(let Ue=0,Qe=Le.length;Ue<Qe;Ue++){let rt=Le[Ue],Ne=we[rt.materialIndex];Ne&&Ne.visible&&S.push(A,Ce,Ne,j,nt.z,rt,G)}}else we.visible&&S.push(A,Ce,we,j,nt.z,null,G)}}let Ae=A.children;for(let Ce=0,we=Ae.length;Ce<we;Ce++)ic(Ae[Ce],G,j,$)}function jh(A,G,j,$){let{opaque:J,transmissive:Ae,transparent:Ce}=A;b.setupLightsView(j),me===!0&&De.setGlobalState(R.clippingPlanes,j),$&&v.viewport(V.copy($)),J.length>0&&Oa(J,G,j),Ae.length>0&&Oa(Ae,G,j),Ce.length>0&&Oa(Ce,G,j),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Qh(A,G,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){let Ne=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new un(1,1,{generateMipmaps:!0,type:Ne?Wn:mn,minFilter:Hn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Ae=b.state.transmissionRenderTarget[$.id],Ce=$.viewport||V;Ae.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let we=R.getRenderTarget(),Le=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Ae),R.getClearColor(Oe),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),at&&$e.render(j);let Qe=R.toneMapping;R.toneMapping=Vn;let rt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),me===!0&&De.setGlobalState(R.clippingPlanes,$),Oa(A,j,$),ee.updateMultisampleRenderTarget(Ae),ee.updateRenderTargetMipmap(Ae),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let gt=0,Ot=G.length;gt<Ot;gt++){let Tt=G[gt],{object:St,geometry:Yt,material:Re,group:Qt}=Tt;if(Re.side===on&&St.layers.test($.layers)){let ht=Re.side;Re.side=an,Re.needsUpdate=!0,ef(St,j,$,Yt,Re,Qt),Re.side=ht,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(ee.updateMultisampleRenderTarget(Ae),ee.updateRenderTargetMipmap(Ae))}R.setRenderTarget(we,Le,Ue),R.setClearColor(Oe,Ee),rt!==void 0&&($.viewport=rt),R.toneMapping=Qe}function Oa(A,G,j){let $=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Ae=A.length;J<Ae;J++){let Ce=A[J],{object:we,geometry:Le,group:Ue}=Ce,Qe=Ce.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),we.layers.test(j.layers)&&ef(we,G,j,Le,Qe,Ue)}}function ef(A,G,j,$,J,Ae){I!==null&&J.isNodeMaterial&&I.setObject(A,J),A.onBeforeRender(R,G,j,$,J,Ae),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(R,G,j,$,A,Ae),J.transparent===!0&&J.side===on&&J.forceSinglePass===!1?(J.side=an,J.needsUpdate=!0,R.renderBufferDirect(j,G,$,J,A,Ae),J.side=pn,J.needsUpdate=!0,R.renderBufferDirect(j,G,$,J,A,Ae),J.side=on):R.renderBufferDirect(j,G,$,J,A,Ae),A.onAfterRender(R,G,j,$,J,Ae)}function Ba(A,G,j){G.isScene!==!0&&(G=ut);let $=K.get(A),J=b.state.lights,Ae=b.state.shadowsArray,Ce=J.state.version,we=ge.getParameters(A,J.state,Ae,G,j,b.state.lightProbeGridArray),Le=ge.getProgramCacheKey(we),Ue=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=fe.get(A.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",lt),Ue=new Map,$.programs=Ue);let rt=Ue.get(Le);if(rt!==void 0){if($.currentProgram===rt&&$.lightsStateVersion===Ce)return nf(A,we),rt}else we.uniforms=ge.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,j,we),A.onBeforeCompile(we,R),rt=ge.acquireProgram(we,Le),Ue.set(Le,rt),$.uniforms=we.uniforms;let Ne=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=De.uniform),nf(A,we),$.needsLights=Gm(A),$.lightsStateVersion=Ce,$.needsLights&&(Ne.ambientLightColor.value=J.state.ambient,Ne.lightProbe.value=J.state.probe,Ne.sunLights.value=J.state.sun,Ne.sunLightShadows.value=J.state.sunShadow,Ne.directionalLights.value=J.state.directional,Ne.directionalLightShadows.value=J.state.directionalShadow,Ne.spotLights.value=J.state.spot,Ne.spotLightShadows.value=J.state.spotShadow,Ne.rectAreaLights.value=J.state.rectArea,Ne.ltc_1.value=J.state.rectAreaLTC1,Ne.ltc_2.value=J.state.rectAreaLTC2,Ne.pointLights.value=J.state.point,Ne.pointLightShadows.value=J.state.pointShadow,Ne.hemisphereLights.value=J.state.hemi,Ne.sunShadowMatrix.value=J.state.sunShadowMatrix,Ne.sunShadowCascade.value=J.state.sunShadowCascade,Ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ne.spotLightMatrix.value=J.state.spotLightMatrix,Ne.spotLightMap.value=J.state.spotLightMap,Ne.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=b.state.lightProbeGridArray.length>0,$.currentProgram=rt,$.uniformsList=null,rt}function tf(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Cs.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function nf(A,G){let j=K.get(A);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function zm(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let j=0,$=A.length;j<$;j++){let J=A[j];if(J.texture!==null&&J.boundingBox.containsPoint(y))return J}return null}function Vm(A,G,j,$,J){G.isScene!==!0&&(G=ut),ee.resetTextureUnits();let Ae=G.fog,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,we=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:tt.workingColorSpace,Le=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ue=fe.get($.envMap||Ce,Le),Qe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,rt=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color,Tt=Vn;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Tt=R.toneMapping);let St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=St!==void 0?St.length:0,Re=K.get($),Qt=b.state.lights;if(me===!0&&(be===!0||A!==U)){let Et=A===U&&$.id===N;De.setState($,A,Et)}let ht=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Qt.state.version||Re.outputColorSpace!==we||J.isBatchedMesh&&Re.batching===!1||!J.isBatchedMesh&&Re.batching===!0||J.isBatchedMesh&&Re.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Re.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Re.instancing===!1||!J.isInstancedMesh&&Re.instancing===!0||J.isSkinnedMesh&&Re.skinning===!1||!J.isSkinnedMesh&&Re.skinning===!0||J.isInstancedMesh&&Re.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Re.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Re.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Re.instancingMorph===!1&&J.morphTexture!==null||Re.envMap!==Ue||$.fog===!0&&Re.fog!==Ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==De.numPlanes||Re.numIntersection!==De.numIntersection)||Re.vertexAlphas!==Qe||Re.vertexTangents!==rt||Re.morphTargets!==Ne||Re.morphNormals!==gt||Re.morphColors!==Ot||Re.toneMapping!==Tt||Re.morphTargetsCount!==Yt||!!Re.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Re.__version=$.version);let wn=Re.currentProgram;ht===!0&&(wn=Ba($,G,J),I&&$.isNodeMaterial&&I.onUpdateProgram($,wn,Re));let Yn=!1,Li=!1,Tr=!1,Mt=wn.getUniforms(),It=Re.uniforms;if(v.useProgram(wn.program)&&(Yn=!0,Li=!0,Tr=!0),$.id!==N&&(N=$.id,Li=!0),Re.needsLights){let Et=zm(b.state.lightProbeGridArray,J);Re.lightProbeGrid!==Et&&(Re.lightProbeGrid=Et,Li=!0)}if(Yn||U!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Mt.setValue(H,"projectionMatrix",A.projectionMatrix),Mt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Di=Mt.map.cameraPosition;Di!==void 0&&Di.setValue(H,Xe.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Mt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Li=!0,Tr=!0)}if(Re.needsLights&&(Qt.state.sunShadowMap.length>0&&Mt.setValue(H,"sunShadowMap",Qt.state.sunShadowMap,ee),Qt.state.directionalShadowMap.length>0&&Mt.setValue(H,"directionalShadowMap",Qt.state.directionalShadowMap,ee),Qt.state.spotShadowMap.length>0&&Mt.setValue(H,"spotShadowMap",Qt.state.spotShadowMap,ee),Qt.state.pointShadowMap.length>0&&Mt.setValue(H,"pointShadowMap",Qt.state.pointShadowMap,ee)),J.isSkinnedMesh){Mt.setOptional(H,J,"bindMatrix"),Mt.setOptional(H,J,"bindMatrixInverse");let Et=J.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(H,"boneTexture",Et.boneTexture,ee))}J.isBatchedMesh&&(Mt.setOptional(H,J,"batchingTexture"),Mt.setValue(H,"batchingTexture",J._matricesTexture,ee),Mt.setOptional(H,J,"batchingIdTexture"),Mt.setValue(H,"batchingIdTexture",J._indirectTexture,ee),Mt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Mt.setValue(H,"batchingColorTexture",J._colorsTexture,ee));let Ni=j.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&W.update(J,j,wn),(Li||Re.receiveShadow!==J.receiveShadow)&&(Re.receiveShadow=J.receiveShadow,Mt.setValue(H,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(It.envMapIntensity.value=G.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=dM()),Li){if(Mt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&Hm(It,Tr),Ae&&$.fog===!0&&Pe.refreshFogUniforms(It,Ae),Pe.refreshMaterialUniforms(It,$,Z,X,b.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.lightProbeGrid){let Et=Re.lightProbeGrid;It.probesSH.value=Et.texture,It.probesMin.value.copy(Et.boundingBox.min),It.probesMax.value.copy(Et.boundingBox.max),It.probesResolution.value.copy(Et.resolution)}Cs.upload(H,tf(Re),It,ee)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cs.upload(H,tf(Re),It,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(H,"center",J.center),Mt.setValue(H,"modelViewMatrix",J.modelViewMatrix),Mt.setValue(H,"normalMatrix",J.normalMatrix),Mt.setValue(H,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let Et=$.uniformsGroups;for(let Di=0,Ar=Et.length;Di<Ar;Di++){let sf=Et[Di];z.update(sf,wn),z.bind(sf,wn)}}return wn}function Hm(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Gm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,G,j){let $=K.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=G,K.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let j=K.get(A);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,j=0){Y=A,F=G,k=j;let $=null,J=!1,Ae=!1;if(A){let we=K.get(A);if(we.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,we.__webglFramebuffer),V.copy(A.viewport),se.copy(A.scissor),ae=A.scissorTest,v.viewport(V),v.scissor(se),v.setScissorTest(ae),N=-1;return}else if(we.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(we.__hasExternalTextures)ee.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Qe=A.depthTexture;if(we.__boundDepthTexture!==Qe){if(Qe!==null&&K.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let Ue=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[G])?$=Ue[G][j]:$=Ue[G],J=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?$=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[j]:$=Ue,V.copy(A.viewport),se.copy(A.scissor),ae=A.scissorTest}else V.copy(oe).multiplyScalar(Z).floor(),se.copy(re).multiplyScalar(Z).floor(),ae=ce;if(j!==0&&($=O),v.bindFramebuffer(H.FRAMEBUFFER,$)&&v.drawBuffers(A,$),v.viewport(V),v.scissor(se),v.setScissorTest(ae),J){let we=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,j)}else if(Ae){let we=G;for(let Le=0;Le<A.textures.length;Le++){let Ue=K.get(A.textures[Le]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,j,we)}}else if(A!==null&&j!==0){let we=K.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,we.__webglTexture,j)}N=-1};function rf(A){let G=K.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=C.textureFormatReadable(A.format),G.__typeReadable=C.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,j,$,J,Ae,Ce,we=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){v.bindFramebuffer(H.FRAMEBUFFER,Le);try{let Ue=A.textures[we],Qe=Ue.format,rt=Ue.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we);let Ne=rf(Ue);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-$&&j>=0&&j<=A.height-J&&H.readPixels(G,j,$,J,_e.convert(Qe),_e.convert(rt),Ae)}finally{let Ue=Y!==null?K.get(Y).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,G,j,$,J,Ae,Ce,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(G>=0&&G<=A.width-$&&j>=0&&j<=A.height-J){v.bindFramebuffer(H.FRAMEBUFFER,Le);let Ue=A.textures[we],Qe=Ue.format,rt=Ue.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we);let Ne=rf(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),H.readPixels(G,j,$,J,_e.convert(Qe),_e.convert(rt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ot=Y!==null?K.get(Y).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ot);let Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _p(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(gt),H.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,j=0){let $=Math.pow(2,-j),J=Math.floor(A.image.width*$),Ae=Math.floor(A.image.height*$),Ce=G!==null?G.x:0,we=G!==null?G.y:0;ee.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Ce,we,J,Ae),v.unbindTexture()},this.copyTextureToTexture=function(A,G,j=null,$=null,J=0,Ae=0){let Ce,we,Le,Ue,Qe,rt,Ne,gt,Ot,Tt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(j!==null)Ce=j.max.x-j.min.x,we=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Ue=j.min.x,Qe=j.min.y,rt=j.isBox3?j.min.z:0;else{let It=Math.pow(2,-J);Ce=Math.floor(Tt.width*It),we=Math.floor(Tt.height*It),A.isDataArrayTexture?Le=Tt.depth:A.isData3DTexture?Le=Math.floor(Tt.depth*It):Le=1,Ue=0,Qe=0,rt=0}$!==null?(Ne=$.x,gt=$.y,Ot=$.z):(Ne=0,gt=0,Ot=0);let St=_e.convert(G.format),Yt=_e.convert(G.type),Re;G.isData3DTexture?(ee.setTexture3D(G,0),Re=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ee.setTexture2DArray(G,0),Re=H.TEXTURE_2D_ARRAY):(ee.setTexture2D(G,0),Re=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let Qt=v.getParameter(H.UNPACK_ROW_LENGTH),ht=v.getParameter(H.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(H.UNPACK_SKIP_PIXELS),Yn=v.getParameter(H.UNPACK_SKIP_ROWS),Li=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Tt.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Ue),v.pixelStorei(H.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,rt);let Tr=A.isDataArrayTexture||A.isData3DTexture,Mt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let It=K.get(A),Ni=K.get(G),Et=K.get(It.__renderTarget),Di=K.get(Ni.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Et.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ar=0;Ar<Le;Ar++)Tr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(A).__webglTexture,J,rt+Ar),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(G).__webglTexture,Ae,Ot+Ar)),H.blitFramebuffer(Ue,Qe,Ce,we,Ne,gt,Ce,we,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||K.has(A)){let It=K.get(A),Ni=K.get(G);v.bindFramebuffer(H.READ_FRAMEBUFFER,P),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,D);for(let Et=0;Et<Le;Et++)Tr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,J,rt+Et):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,J),Mt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ni.__webglTexture,Ae,Ot+Et):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ni.__webglTexture,Ae),J!==0?H.blitFramebuffer(Ue,Qe,Ce,we,Ne,gt,Ce,we,H.COLOR_BUFFER_BIT,H.NEAREST):Mt?H.copyTexSubImage3D(Re,Ae,Ne,gt,Ot+Et,Ue,Qe,Ce,we):H.copyTexSubImage2D(Re,Ae,Ne,gt,Ue,Qe,Ce,we);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Mt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Re,Ae,Ne,gt,Ot,Ce,we,Le,St,Yt,Tt.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Re,Ae,Ne,gt,Ot,Ce,we,Le,St,Tt.data):H.texSubImage3D(Re,Ae,Ne,gt,Ot,Ce,we,Le,St,Yt,Tt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,Ne,gt,Ce,we,St,Yt,Tt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,Ne,gt,Tt.width,Tt.height,St,Tt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,Ne,gt,Ce,we,St,Yt,Tt);v.pixelStorei(H.UNPACK_ROW_LENGTH,Qt),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ht),v.pixelStorei(H.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(H.UNPACK_SKIP_ROWS,Yn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),Ae===0&&G.generateMipmaps&&H.generateMipmap(Re),v.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){F=0,k=0,Y=null,v.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var jp={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},Kl=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=jp[e]||jp.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function Qp(i,e,t){let n=new Ze,r=new Ze,s=0,a=0,o=!1,c=0,l=0,u=!1,h=!0,f=!1,d=0,m=[],x=new Map,g={value:Array.from({length:4},()=>new B)},p={value:Array.from({length:4},()=>new B)},M={value:[.05,.05,.05,.05]},E=new B,y=null;i.traverse(D=>{D.isMesh&&D.userData.snowbreakSurfaceKey&&x.set(D.userData.snowbreakSurfaceKey,D)});function S(D){let F=D.hit,k=x.get(F.mesh);if(!k||!F.barycentric)return new B().fromArray(F.point);let Y=k.geometry.index,N=new B;for(let U=0;U<3;U++){let V=Y?Y.getX(F.triangle*3+U):F.triangle*3+U;N.addScaledVector(k.getVertexPosition(V,new B),F.barycentric[U])}return k.localToWorld(N)}let b=[],w=new Map;i.traverse(D=>{if(D.isBone&&/^EyeJoint_[LR]$/.test(D.name)&&b.push(D),!D.isSkinnedMesh||!["skin","cloth-or-room"].includes(D.material?.userData.profile))return;let F=D.material,k=F.onBeforeCompile,Y=F.customProgramCacheKey.bind(F);F.onBeforeCompile=N=>{k(N),Object.assign(N.uniforms,{senseCenters:g,senseOffsets:p,senseRadii:M}),N.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},F.customProgramCacheKey=()=>Y()+"-surface-spring-v2",F.needsUpdate=!0});function _(D,F,k="camera"){k==="camera"&&(f||performance.now()<d)||!Number.isFinite(D)||!Number.isFinite(F)||(n.set(Ge.clamp(D,-1,1),Ge.clamp(F,-1,1)),s=performance.now()+1600)}function T(D){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let F=t.getBoundingClientRect();d=performance.now()+1600,_((D.clientX-F.left)/F.width*2-1,1-(D.clientY-F.top)/F.height*2,"touch")}function R(D,F){if(!h||!D?.alphaVerified||!Array.isArray(D.point)||!x.has(D.mesh))return!1;y?.spring.release();let k=F?.id||D.anatomy?.id||"body",Y=m.find(N=>!N.spring.pressed&&N.region===k&&S(N).distanceTo(new B().fromArray(D.point))<.04);return Y?(y=Y,y.hit=D):(m.length===4&&m.shift(),y={hit:D,region:k,spring:new Kl(k),direction:e.getWorldDirection(new B)},m.push(y)),y.spring.press(),o=u=!0,!0}let L=D=>{f=!0,T(D)},I=()=>{o=!1,f=!1,y?.spring.release(),y=null,d=performance.now()+1e3};t.addEventListener("pointerdown",L),t.addEventListener("pointermove",T),t.addEventListener("pointerup",I),t.addEventListener("pointercancel",I);function O(D=performance.now()){let F=Math.min(.04,Math.max(0,(D-a)/1e3));a=D,D>s&&n.set(0,0),r.lerp(n,1-Math.exp(-F*12));let k=new B().setFromMatrixColumn(e.matrixWorld,1),Y=new B().setFromMatrixColumn(e.matrixWorld,0);for(let U of b){let V=U.quaternion.clone(),se=new Fe().extractRotation(U.parent.matrixWorld),ae=new Fe().makeRotationFromQuaternion(new We().setFromAxisAngle(k,r.x*.07).multiply(new We().setFromAxisAngle(Y,-r.y*.05))),Oe=se.clone().invert().multiply(ae).multiply(se);U.quaternion.premultiply(new We().setFromRotationMatrix(Oe)).normalize(),U.updateWorldMatrix(!1,!0),w.set(U,{base:V,applied:U.quaternion.clone()})}for(let U=m.length-1;U>=0;U--)m[U].spring.step(F),m[U].spring.active||m.splice(U,1);l=0,c=0,u=m.length>0;for(let U=0;U<4;U++){let V=m[U];p.value[U].set(0,0,0),V&&(g.value[U].copy(S(V)),M.value[U]=V.spring.profile.radius,p.value[U].copy(V.direction).multiplyScalar(V.spring.offset),Math.abs(V.spring.offset)>Math.abs(l)&&(l=V.spring.offset),c+=Math.abs(V.spring.velocity))}let N=new Set;b.length&&i.traverse(U=>{U.isSkinnedMesh&&!N.has(U.skeleton)&&(U.skeleton.update(),N.add(U.skeleton))})}function P(){for(let[D,F]of w)D.quaternion.angleTo(F.applied)<1e-6&&D.quaternion.copy(F.base);w.clear()}return{gaze:_,touch:R,tick:O,restore:P,reset(){P(),o=u=f=!1,d=0,l=c=0,m.length=0,y=null;for(let D of p.value)D.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:b.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:m.map(D=>({region:D.region,offset:D.spring.offset,velocity:D.spring.velocity,pressed:D.spring.pressed,center:S(D).toArray()}))}),dispose(){for(let[D,F]of[["pointerdown",L],["pointermove",T],["pointerup",I],["pointercancel",I]])t.removeEventListener(D,F)}}}function oh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=b=>b.getWorldPosition(new B);i.updateWorldMatrix(!0,!0);for(let b of[i,e,t]){let w=b.getWorldScale(new B);if(Math.min(w.x,w.y,w.z)<=0||Math.max(w.x,w.y,w.z)-Math.min(w.x,w.y,w.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),h=c.distanceTo(l),f=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,f].every(Number.isFinite)||Math.min(h,f)<1e-6)throw new Error("Invalid arm geometry");let d=n.clone().sub(c),m=d.length();if(m<1e-7)throw new Error("Arm target at shoulder");d.normalize();let x=b=>Math.sqrt(Math.max(0,h*h+f*f+2*h*f*Math.cos(Ge.degToRad(b)))),g=Ge.clamp(m,Math.max(Math.abs(h-f)+1e-6,x(a)),Math.min(h+f-1e-6,x(s))),p=r.clone().sub(c).addScaledVector(d,-r.clone().sub(c).dot(d));if(p.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");p.normalize();let M=(h*h-f*f+g*g)/(2*g),E=c.clone().addScaledVector(d,M).addScaledVector(p,Math.sqrt(Math.max(0,h*h-M*M))),y=c.clone().addScaledVector(d,g);function S(b,w,_){let T=o(b),R=o(w).sub(T).normalize(),L=_.clone().sub(T).normalize(),I=b.getWorldQuaternion(new We);I.premultiply(new We().setFromUnitVectors(R,L)),b.quaternion.copy(b.parent.getWorldQuaternion(new We).invert().multiply(I)).normalize(),b.updateWorldMatrix(!0,!0)}return S(i,e,E),S(e,t,y),{requested:n.toArray(),reachable:y.toArray(),hand:o(t).toArray(),clamped:Math.abs(g-m)>1e-5,error:o(t).distanceTo(y),elbowFlex:Ge.radToDeg(Math.acos(Ge.clamp((g*g-h*h-f*f)/(2*h*f),-1,1)))}}var Mr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function lh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=m=>m.getWorldPosition(new B);function h(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function f(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let m=u(n),x=u(r),g=u(s),p=u(a),M=m.distanceTo(x)+x.distanceTo(g),E=m.clone().sub(p);if(E.y=0,E.length()<1e-5)throw new Error("Ambiguous shoulder direction");E.normalize();let y=p.clone().addScaledVector(E,M*.55);y.y+=M*.15;let S=m.clone().addScaledVector(E,M);S.y-=M*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new We),start:g,target:y,pole:S},l=null}function d(m){if(!Number.isFinite(m))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let x=Ge.clamp(m,0,1),g=x<.3?x/.3:x>.7?(1-x)/.3:1,p=g*g*(3-2*g);if(p<1e-6)return;l=oh(n,r,s,c.target,c.pole,Mr);let M={},E=[];function y(S,b,w,_,T){let R=S.quaternion.clone(),L=b.angleTo(R),I=Ge.degToRad(w);L>I&&E.push(T),S.quaternion.copy(b).slerp(R,_*Math.min(1,I/Math.max(L,1e-10))).normalize(),M[T]=Ge.radToDeg(b.angleTo(S.quaternion))}y(n,c.upper,Mr.upper,p,"upper"),y(r,c.lower,Mr.lower,p,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new We).invert().multiply(c.wristWorld)),y(s,c.wrist,Mr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:M,limited:E,weight:p}}return{begin:f,apply:d,restore:h,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Mr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function em(i,e,t=()=>0){let n={};for(let[I,O]of[["left","L"],["right","R"]]){let P=i.getObjectByName(`Bip001-${O}-UpperArm`),D=i.getObjectByName(`Bip001-${O}-Forearm`),F=i.getObjectByName(`Bip001-${O}-Hand`);P?.isBone&&D?.parent===P&&F?.parent===D&&(n[I]={upper:P,lower:D,hand:F})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(I=>{I.isSkinnedMesh&&a.add(I.skeleton)}),i.traverse(I=>{if(I.isMesh&&I.morphTargetInfluences)for(let O of["L_Eye_close","R_Eye_close"]){let P=I.morphTargetDictionary?.[O];Number.isInteger(P)&&s.push({mesh:I,index:P,name:O})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(I=>I.name==="L_Eye_close")&&s.some(I=>I.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null;function u(I,O){if(!o.includes(I)||!I.startsWith("gesture_")||!Number.isFinite(O?.duration)||O.duration<1||O.duration>8||!Array.isArray(O.poses)||O.poses.length<2||O.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let P=-1;for(let D of O.poses){if(!Number.isFinite(D.time)||D.time<=P||D.time<0||D.time>O.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");P=D.time;for(let[F,k]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(D[F]&&(!Array.isArray(D[F])||D[F].length!==3||D[F].some((Y,N)=>!Number.isFinite(Y)||Math.abs(Y)>k[N])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(O.poses[0].time!==0||P!==O.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");f.clear(),l={id:I,plan:O,start:performance.now()},p="\u6B63\u5728\u6267\u884C\uFF1A"+I}function h(I){if(!l)return null;let{plan:O}=l,P=(I-l.start)/1e3;if(P>=O.duration)return p="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let D=Math.max(0,O.poses.findIndex(V=>V.time>=P)-1),F=O.poses[D],k=O.poses[D+1],Y=Ge.clamp((P-F.time)/(k.time-F.time),0,1),N=Y*Y*(3-2*Y),U={};for(let V of["head","torso","leftHand","rightHand"])(F[V]||k[V])&&(U[V]=[0,1,2].map(se=>(F[V]?.[se]||0)+((k[V]?.[se]||0)-(F[V]?.[se]||0))*N));return U}let f=new Set,d=!1,m=0,x=0,g=performance.now(),p="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",M={left:0,right:0},E=0,y=[],S=[],b={left:!1,right:!1};function w(){for(let I of y)I.bone.quaternion.angleTo(I.applied)<1e-6&&I.bone.quaternion.copy(I.base);y.length=0;for(let I of S)Math.abs(I.mesh.morphTargetInfluences[I.index]-I.applied)<1e-6&&(I.mesh.morphTargetInfluences[I.index]=I.base);S.length=0}function _(I){if(!o.includes(I))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,I==="raise_left_hand"&&f.add("left"),I==="raise_right_hand"&&f.add("right"),I==="raise_both_hands"&&(f=new Set(["left","right"])),I==="lower_hands"&&f.clear(),I==="close_eyes"&&(d=!0),I==="open_eyes"&&(d=!1),I==="turn_left"&&(x+=90),I==="turn_right"&&(x-=90),I==="turn_back"&&(x=180-t()),I==="face_front"&&(x=-t()),p="\u5DF2\u63A5\u6536\uFF1A"+I,R()}function T(){let I=performance.now(),O=Math.min(.25,(I-g)/1e3);g=I;let P=1-Math.exp(-9*O),D=h(I);for(let[F,k]of[[r,D?.head],[c,D?.torso]])if(F&&k){let Y=F.quaternion.clone();F.quaternion.multiply(new We().setFromEuler(new zn(Ge.degToRad(k[1]),Ge.degToRad(k[0]),Ge.degToRad(k[2]),"YXZ"))).normalize(),y.push({bone:F,base:Y,applied:F.quaternion.clone()}),F.updateWorldMatrix(!1,!0)}m+=(x-m)*P,e(m),b={left:!1,right:!1},i.updateWorldMatrix(!0,!0);for(let F of["left","right"]){M[F]+=((f.has(F)?1:0)-M[F])*P;let k=D?.[F+"Hand"],Y=k?1:M[F],N=n[F];if(!N||!r||Y<.001)continue;let U=Z=>Z.getWorldPosition(new B),V=U(r),se=U(N.upper),ae=se.distanceTo(U(N.lower))+U(N.lower).distanceTo(U(N.hand)),Oe=se.clone().sub(V);if(Oe.y=0,Oe.length()<1e-6)continue;Oe.normalize();let Ee=V.clone().addScaledVector(Oe,ae*.45);Ee.y+=ae*.18,k&&(Ee.copy(U(N.hand)).addScaledVector(Oe,Math.abs(k[0])*ae),Ee.y+=k[1]*ae,Ee.addScaledVector(new B(0,0,1).applyQuaternion(i.getWorldQuaternion(new We)),k[2]*ae));let Ve=se.clone().addScaledVector(Oe,ae);Ve.y-=ae*.35;let X=[N.upper,N.lower,N.hand].map(Z=>({bone:Z,base:Z.quaternion.clone()}));try{oh(N.upper,N.lower,N.hand,Ee,Ve,Mr);for(let[Z,le]of X.entries()){let ve=le.bone.quaternion.clone(),oe=Ge.degToRad([100,140,60][Z]),re=le.base.angleTo(ve);le.bone.quaternion.copy(le.base).slerp(ve,Y*Math.min(1,oe/Math.max(re,1e-8))).normalize(),y.push({...le,applied:le.bone.quaternion.clone()}),le.bone.updateWorldMatrix(!1,!0)}b[F]=U(N.hand).y>se.y+ae*.25}catch(Z){for(let le of X)le.bone.quaternion.copy(le.base);p="\u4E3E\u624B\u5931\u8D25\uFF1A"+Z.message,f.delete(F)}}E+=((d?1:0)-E)*P;for(let F of s){let k=F.mesh.morphTargetInfluences[F.index]||0,Y=Ge.lerp(k,d?1:0,E);S.push({...F,base:k,applied:Y}),F.mesh.morphTargetInfluences[F.index]=Y}i.updateWorldMatrix(!0,!0);for(let F of a)F.update()}function R(){i.updateWorldMatrix(!0,!0);for(let P of["left","right"]){let D=n[P];if(!D)continue;let F=D.upper.getWorldPosition(new B),k=D.lower.getWorldPosition(new B),Y=D.hand.getWorldPosition(new B);b[P]=Y.y>F.y+(F.distanceTo(k)+k.distanceTo(Y))*.25}let I=s.length?s.reduce((P,D)=>P+(D.mesh.morphTargetInfluences[D.index]||0),0)/s.length:0,O=m+t();return{available:[...o],eyes:s.length?I>.95?"\u5DF2\u95ED\u5408":I<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...b},hands:b.left&&b.right?"\u53CC\u624B\u62AC\u8D77":b.left?"\u5DE6\u624B\u62AC\u8D77":b.right?"\u53F3\u624B\u62AC\u8D77":f.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(m-x)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((O%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(O%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(O)}\u5EA6`,yaw:O,lastResult:p}}function L(){w(),l=null,f.clear(),d=!1,M.left=M.right=E=0,m=x=0,e(0),p="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:_,playGesture:u,tick:T,restore:w,snapshot:R,reset:L,releaseHands:()=>{f.clear(),l=null}}}function tm(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let f=0;f<3;f++)u[f]=n[f]+(.2*o[f]+.6*c[f]+.2*l[f]-n[f])*t;let h=new We().fromArray(o,3).slerp(new We().fromArray(c,3),.75).slerp(new We().fromArray(l,3),.2);return new We().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function nm(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i),c={color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?pn:on},l;return r?l=new $t(c):(l=new Jt({...c,normalMap:t||null,normalScale:new Ze(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},l.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(l.polygonOffset=!0,l.polygonOffsetFactor=-.5,l.polygonOffsetUnits=-.5),l.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",l}function im(i,e){e.outputColorSpace=Rt,e.toneMapping=va,e.toneMappingExposure=1.05;let t=new da(16774379,10596036,1.4);i.add(t);let n=new Ai(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=Qo;let r=new Ai(14674687,1);r.position.set(3,2,4),i.add(r);let s=new Ai(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new hr;a.background=new He(.18,.18,.2);let o=new dr(1,1),c=[];for(let[m,x,g,p]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let M=new $t({color:g,side:on});M.color.multiplyScalar(p),c.push(M);let E=new Dt(o,M);E.position.fromArray(m),E.scale.set(x[0],x[1],1),E.lookAt(0,1,0),a.add(E)}let l=new Is(e),u=l.fromScene(a,.08,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let h={exposure:1.05,warmth:.5,reflection:1,shadows:!0};function f(m){let x={...h,...m};if(![x.exposure,x.warmth,x.reflection].every(Number.isFinite)||typeof x.shadows!="boolean"||x.exposure<.65||x.exposure>1.45||x.warmth<0||x.warmth>1||x.reflection<0||x.reflection>1.5)throw new Error("Invalid lighting settings");return h={exposure:x.exposure,warmth:x.warmth,reflection:x.reflection,shadows:x.shadows},e.toneMappingExposure=h.exposure,e.shadowMap.enabled=h.shadows,n.color.set(15331839).lerp(new He(16770247),h.warmth),i.environmentIntensity=h.reflection,{...h}}function d(m){let x=m.getCenter(new B),g=Math.max(1.5,m.getSize(new B).length()*.7);n.target.position.copy(x),n.position.copy(x).add(new B(-2,4,5).normalize().multiplyScalar(g*3)),Object.assign(n.shadow.camera,{left:-g,right:g,top:g,bottom:-g,near:.1,far:g*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:f,frame:d,snapshot:()=>({...h,environment:!0,shadowMapSize:1024}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}function rm(i,e,t,n){if(!t)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};if(!["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(t.schema)||t.sourceCharacter!=="Yuki"||t.targetCharacter!=="Enya"||!Array.isArray(t.clips)||t.clips.length>8)throw new Error("Invalid learned motion catalog");let r=t.schema.endsWith("/3")&&t.stance==="standing";if(t.schema.endsWith("/3")&&(!r||n!=="standing"))throw new Error("Standing motion requires standing source");let s=w=>{let _=[];if(i.traverse(T=>{T.isBone&&T.name===w&&_.push(T)}),_.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+w);return _[0]},a=s("Bip001-Head"),o=s("Bip001-Spine3"),c={};for(let[w,_]of[["left","L"],["right","R"]]){let T=s(`Bip001-${_}-UpperArm`),R=s(`Bip001-${_}-Forearm`),L=s(`Bip001-${_}-Hand`);if(R.parent!==T||L.parent!==R)throw new Error("Learned arm binding mismatch");c[w]={upper:T,lower:R,hand:L}}let l=w=>w.getWorldPosition(new B);i.updateWorldMatrix(!0,!0);let u=1,h=l(c.right.upper).sub(l(c.left.upper)).normalize(),f=l(a).sub(l(o)).normalize();new B().crossVectors(h,f).dot(e.position.clone().sub(l(o)))<0&&(u=-1);let d=new Map;for(let w of t.clips){if(!["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(w.id)||d.has(w.id)||!Number.isInteger(w.frames)||w.frames<2||w.frames>1800||!Number.isFinite(w.fps)||w.fps<=0||w.fps>60)throw new Error("Invalid learned clip");let _={};for(let[I,O]of Object.entries(w.channels||{})){let P=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(I)?1:["headDelta","chestDelta",...r?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(I)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...r?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(I)||/^(left|right)Finger[0-4]_[0-2]$/.test(I)?3:0;if(!P||typeof O!="string")throw new Error("Invalid learned channel");let D=Uint8Array.from(atob(O),k=>k.charCodeAt(0));if(D.byteLength!==w.frames*P*4)throw new Error("Learned channel truncated");let F=new Float32Array(D.buffer);if(!F.every(Number.isFinite))throw new Error("Non-finite learned pose");if(P===1&&F.some(k=>k<-.31||k>1.11))throw new Error("Invalid learned finger angle");for(let k=0;P>1&&k<w.frames;k++){let Y=0;for(let N=0;N<P;N++)Y+=F[k*P+N]**2;if(Math.abs(Y-1)>.01)throw new Error("Invalid learned direction/quaternion")}_[I]={values:F,width:P}}if(!_.headDelta)throw new Error("Missing learned head reference");let T=w.id.includes("dance"),R=T?r?"standing-dance":"seated-dance":w.id==="yuki_Peace_hand"?"peace":w.id==="yuki_hello"?"greeting":"head",L=T?["left","right"]:R==="head"?[]:["right"];if(!t.schema.endsWith("/1")&&(w.motionKind!==R||JSON.stringify(w.arms)!==JSON.stringify(L)))throw new Error("Invalid learned action capability");if(!(T&&!r)){if(T&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(I=>!_[I]))throw new Error("Missing standing body channels");d.set(w.id,{...w,kind:R,arms:L,channels:_,duration:(w.frames-1)/w.fps})}}let m=Object.fromEntries([["left","L"],["right","R"]].map(([w,_])=>[w,Array.from({length:5},(T,R)=>[s(`Bip001-${_}-Finger${R}`),s(`Bip001-${_}-Finger${R}1`),s(`Bip001-${_}-Finger${R}2`)])])),x=r?s("Bip001-Pelvis"):null,g=r?Object.fromEntries([["left","L"],["right","R"]].map(([w,_])=>[w,{thigh:s(`Bip001-${_}-Thigh`),calf:s(`Bip001-${_}-Calf`),foot:s(`Bip001-${_}-Foot`),toe:s(`Bip001-${_}-Toe0`)}])):{},p={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function M(){let w=l(c.right.upper).sub(l(c.left.upper)).normalize(),_=l(a).sub(l(o));_.addScaledVector(w,-_.dot(w)).normalize();let T=new B().crossVectors(w,_).multiplyScalar(u).normalize();return{right:w,up:_,front:T,vector:R=>w.clone().multiplyScalar(R[0]).addScaledVector(_,R[1]).addScaledVector(T,R[2])}}let E=new Map,y=null,S=-1;function b(w,_,T){let R=d.get(w);if(!R||T<=0)return;p.fingerWrites=0,p.armWrites=0,p.chestWrites=0,p.workspaceAdjusted=0,(w!==y||_<=S||_-S>.2)&&E.clear(),y=w,S=_,i.updateWorldMatrix(!0,!0);let L=M(),I=Ge.clamp(_*R.fps,0,R.frames-1),O=Math.floor(I),P=Math.min(O+1,R.frames-1),D=I-O;function F(X){let Z=R.channels[X];if(!Z)return null;if(Z.width===1){let ve=0;for(let oe of[-2,-1,0,1,2]){let re=Ge.clamp(I+oe,0,R.frames-1),ce=Math.floor(re),pe=Math.min(ce+1,R.frames-1);ve+=(Z.values[ce]+(Z.values[pe]-Z.values[ce])*(re-ce))*(oe===0?.4:Math.abs(oe)===1?.2:.1)}return[ve]}if(Z.width===4)return new We().fromArray(Z.values,O*4).slerp(new We().fromArray(Z.values,P*4),D).normalize().toArray();let le=new B;for(let ve of[-2,-1,0,1,2]){let oe=Ge.clamp(I+ve,0,R.frames-1),re=Math.floor(oe),ce=Math.min(re+1,R.frames-1);le.add(new B().fromArray(Z.values,re*3).lerp(new B().fromArray(Z.values,ce*3),oe-re).multiplyScalar(ve===0?.4:Math.abs(ve)===1?.2:.1))}return le.normalize().toArray()}function k(X,Z,le,ve,oe=T){let re=Z.angleTo(le),ce=Ge.degToRad(ve);re>ce&&p.limited++,X.quaternion.copy(Z).slerp(le,oe*Math.min(1,ce/Math.max(re,1e-8))).normalize()}function Y(X,Z,le,ve,oe=T){X.parent.updateWorldMatrix(!0,!1);let re=X.quaternion.clone(),ce=E.get(X)?.clone()||re.clone(),pe=(Z?Z.position.clone():new B(1,0,0)).multiply(X.scale).applyQuaternion(ce).normalize(),me=le.clone().transformDirection(X.parent.matrixWorld.clone().invert()),be=new We().setFromUnitVectors(pe,me).multiply(ce).normalize();E.set(X,be.clone()),k(X,re,be,ve,oe),X.updateWorldMatrix(!1,!0)}function N(X,Z,le,ve){let oe=new Fe().makeBasis(L.right,L.up,L.front),re=new Fe().makeRotationFromQuaternion(new We(...Z)),ce=oe.clone().multiply(re).multiply(oe.clone().invert());X.parent.updateWorldMatrix(!0,!1);let pe=new Fe().extractRotation(X.parent.matrixWorld),me=pe.clone().invert().multiply(ce).multiply(pe),be=X.quaternion.clone(),Ie=new We().setFromRotationMatrix(me).multiply(be).normalize();k(X,be,Ie,le,ve),X.updateWorldMatrix(!1,!0)}let U=R.kind==="standing-dance",V=new B(0,1,0).transformDirection(i.parent.matrixWorld),se=U?Math.min(...Object.values(g).map(X=>l(X.foot).dot(V))):0;p.legWrites=0,p.groundCorrection=0,U&&(N(x,F("pelvisDelta"),18,T*.8),L=M());let ae=F("chestDelta");if(ae&&(N(o,ae,U?25:10,T*(U?.75:.35)),L=M(),p.chestWrites=1),U){for(let[oe,re]of Object.entries(g)){if(re.calf.parent!==re.thigh||re.foot.parent!==re.calf)throw new Error("Standing leg hierarchy mismatch");Y(re.thigh,re.calf,L.vector(F(oe+"Thigh")),110,T),Y(re.calf,re.foot,L.vector(F(oe+"Calf")),150,T),N(re.foot,F(oe+"FootDelta"),35,T*.65),p.legWrites+=3}let X=Ge.clamp(se-Math.min(...Object.values(g).map(oe=>l(oe.foot).dot(V))),-.18,.18),Z=l(x),le=x.parent.matrixWorld.clone().invert(),ve=Z.clone().addScaledVector(V,X).applyMatrix4(le).sub(Z.clone().applyMatrix4(le));x.position.add(ve),x.updateWorldMatrix(!1,!0),p.groundCorrection=X}function Oe(X,Z,le,ve){let oe=l(X.upper),re=l(X.lower).distanceTo(oe),ce=l(X.hand).distanceTo(l(X.lower)),pe=oe.clone().addScaledVector(L.vector(Z),re),me=pe.clone().addScaledVector(L.vector(le),ce),be=l(o),Ie=me.clone().sub(be),Xe=Ie.dot(L.right),nt=Ie.dot(L.up),ut=Ie.dot(L.front),at=[Xe,nt,ut];nt=Ge.clamp(nt,-.16,.6);let ot=(1-Ge.smoothstep(Math.abs(Xe),.16,.28))*Ge.smoothstep(nt,-.42,-.32)*(1-Ge.smoothstep(nt,.18,.32));ut+=Math.max(0,.23-ut)*ot,me.copy(be).addScaledVector(L.right,Xe).addScaledVector(L.up,nt).addScaledVector(L.front,ut);let H=me.clone().sub(l(a));H.length()<.14&&me.copy(l(a)).add(H.length()>.001?H.setLength(.14):L.front.clone().multiplyScalar(.14)),(at[1]!==nt||at[2]!==ut)&&p.workspaceAdjusted++;let dt=me.clone().sub(oe),je=Ge.clamp(dt.length(),Math.abs(re-ce)+.015,(re+ce)*.98);dt.normalize(),me.copy(oe).addScaledVector(dt,je);let C=L.right.clone().multiplyScalar(ve==="right"?1:-1),v=C.clone().addScaledVector(L.front,.3).addScaledVector(L.up,.2);v.addScaledVector(dt,-v.dot(dt)),v.length()<1e-4&&v.copy(L.front).addScaledVector(dt,-L.front.dot(dt)),v.normalize();let q=(re*re-ce*ce+je*je)/(2*je),K=Math.sqrt(Math.max(0,re*re-q*q)),ee=oe.clone().addScaledVector(dt,q).addScaledVector(v,K);return{upper:ee.clone().sub(oe).normalize(),lower:me.sub(ee).normalize()}}for(let X of R.arms){let be=function(){let C=l(le[1][0]).sub(l(le[4][0])).normalize(),v=l(le[2][0]).sub(l(Z.hand));return v.addScaledVector(C,-v.dot(C)).normalize(),new Fe().makeBasis(C,v,new B().crossVectors(C,v).normalize())},Z=c[X],le=m[X],ve=F(X+"Upper"),oe=F(X+"Lower");if(!ve||!oe)continue;let re=["greeting","peace"].includes(R.kind)?T*Ge.smoothstep(oe[1],-1,1):T*.72,ce=R.kind==="seated-dance"?Oe(Z,ve,oe,X):{upper:L.vector(ve),lower:L.vector(oe)};Y(Z.upper,Z.lower,ce.upper,120,re),Y(Z.lower,Z.hand,ce.lower,170,re),p.armWrites+=2;let pe=F(X+"HandWidth"),me=F(X+"HandForward");if(!pe||!me)continue;i.updateWorldMatrix(!0,!0);let Ie=L.vector(pe).normalize(),Xe=L.vector(me);Xe.addScaledVector(Ie,-Xe.dot(Ie)).normalize();let nt=new Fe().makeBasis(Ie,Xe,new B().crossVectors(Ie,Xe).normalize()),ut=nt.multiply(be().invert()),at=Z.hand,ot=new Fe().extractRotation(at.parent.matrixWorld),H=ot.clone().invert().multiply(ut).multiply(ot),dt=at.quaternion.clone(),je=new We().setFromRotationMatrix(H).multiply(dt).normalize();k(at,dt,je,R.kind==="greeting"?110:R.kind==="seated-dance"?75:110,re*(R.kind==="seated-dance"?.7:1)),at.updateWorldMatrix(!1,!0);for(let C=0;C<5;C++)for(let v=0;v<3;v++){let q=F(`${X}Finger${C}_${v}`);if(!q)continue;let K=new B(...q).normalize(),ee=v?new B(...F(`${X}Finger${C}_${v-1}`)).normalize():new B(0,1,0),fe=Ge.clamp(Math.atan2(-K.z,Math.max(.1,K.y))-Math.atan2(-ee.z,Math.max(.1,ee.y)),-.15,C===0?.45:1.1),ue=v===0&&C!==0?Ge.clamp(Math.atan2(K.x,K.y),-.3,.3):0,te=F(`${X}Curl${C}_${v}`),ne=F(`${X}Spread${C}`);te&&(fe=te[0]),v===0&&C!==0&&ne&&(ue=ne[0]),R.kind==="peace"&&(fe=C===1||C===2?.02:C===0?.4:.95,v===0&&(ue=C===1?.14:C===2?-.08:0));let ge=X==="left"?-1:1,Pe=le[C][v],xe=Pe.quaternion.clone(),De=new We().fromArray(Pe.userData.bindLocalQuaternion||xe.toArray()).multiply(new We().setFromAxisAngle(new B(0,0,1),ue*ge)).multiply(new We().setFromAxisAngle(new B(0,1,0),fe*ge));Pe.quaternion.copy(xe).slerp(De,T).normalize(),p.fingerWrites++}}let Ee=F("headDelta");if(Ee){let X=new Fe().makeBasis(L.right,L.up,L.front),Z=new Fe().makeRotationFromQuaternion(new We(...Ee)),le=X.clone().multiply(Z).multiply(X.clone().invert());a.parent.updateWorldMatrix(!0,!1);let ve=new Fe().extractRotation(a.parent.matrixWorld),oe=ve.clone().invert().multiply(le).multiply(ve),re=a.quaternion.clone(),ce=new We().setFromRotationMatrix(oe).multiply(re).normalize();k(a,re,ce,40)}i.updateWorldMatrix(!0,!0);let Ve=new Set;i.traverse(X=>{X.isSkinnedMesh&&!Ve.has(X.skeleton)&&(X.skeleton.update(),Ve.add(X.skeleton))})}return{available:()=>[...d.values()].map(w=>({id:w.id,label:w.label,duration:w.duration,arms:[...w.arms],kind:w.kind})),apply:b,snapshot:()=>{i.updateWorldMatrix(!0,!0);let w=M(),_=c.right;return{...p,parentDeterminant:_.upper.parent.matrixWorld.determinant(),rightUpper:l(_.lower).sub(l(_.upper)).normalize().toArray(),rightLower:l(_.hand).sub(l(_.lower)).normalize().toArray(),handHeight:l(_.hand).sub(l(_.lower)).dot(w.up)}}}}function ch(i,e){if(e===Lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ts||e===Ra){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Ts)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function sm(i){let e=new Map,t=new Map,n=i.clone();return am(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function am(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)am(i.children[n],e.children[n],t)}var Sr=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new $l(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $l(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ch(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(e);a=Ri.resolveURL(l,this.path)}else a=Ri.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ys(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hm){try{a[it.KHR_BINARY_GLTF]=new Ih(e)}catch(h){r&&r(h);return}s=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Oh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:a[h]=new ph;break;case it.KHR_DRACO_MESH_COMPRESSION:a[h]=new Ph(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[h]=new Lh;break;case it.KHR_MESH_QUANTIZATION:a[h]=new Nh;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function pM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ut(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new He(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],sn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ai(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ga(u),l.distance=h;break;case"spot":l=new ma(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ph=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let r=[];e.color=new He(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(s,s)}return Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},_h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(s[0],s[1],s[2],sn),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(s[0],s[1],s[2],sn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=Ut(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Ah=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Rh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},$l=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Ch=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let m of h){let x=new Fe,g=new B,p=new We,M=new B(1,1,1),E=new aa(m.geometry,m.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,x.compose(g,p,M));let y=null;for(let S in c)if(S==="_COLOR_0"){let b=c[S];E.instanceColor=new bi(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let w=E.geometry;y=new Xt,y.name=w.name;for(let _ in w.attributes)y.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)y.morphAttributes[_]=w.morphAttributes[_];w.index!==null&&y.setIndex(w.index),y.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)y.addGroup(_.start,_.count,_.materialIndex);w.boundingBox!==null&&(y.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(y.boundingSphere=w.boundingSphere.clone()),y.drawRange.start=w.drawRange.start,y.drawRange.count=w.drawRange.count,y.userData=Object.assign({},w.userData),E.geometry=y}let b=c[S];y.setAttribute(S,new bi(b.array,b.itemSize,b.normalized))}At.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),d.push(E)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},hm="glTF",La=12,om={JSON:1313821514,BIN:5130562},Ih=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,La),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-La,s=new DataView(e,La),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===om.JSON){let l=new Uint8Array(e,La+a,o);this.content=n.decode(l)}else if(c===om.BIN){let l=La+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Uh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Uh[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Ls[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}h(d)},o,l,sn,f)})})}},Lh=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nh=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Jl=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,x=m-l,g=-2*d+3*f,p=d-f,M=1-g,E=p-f+h;for(let y=0;y!==o;y++){let S=a[x+y+o],b=a[x+y+c]*u,w=a[m+y+o],_=a[m+y]*u;s[y]=M*S+E*b+g*w+p*_}return s}},mM=new We,Dh=class extends Jl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return mM.fromArray(s).normalize().toArray(s),s}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:Lt,9729:Nt,9984:nl,9985:Ss,9986:_r,9987:Hn},cm={33071:Pn,33648:is,10497:Xi},uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gM={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),i.DefaultMaterial}function br(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _M(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vM(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fh(t.attributes):e=i.indices+":"+fh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+fh(i.targets[n]);return e}function fh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bM=new Fe,Oh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Zi(this.options.manager):this.textureLoader=new xa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ys(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return br(s,o,r),li(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Ri.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=uh[r.type],o=Ls[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ct(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=uh[r.type],l=Ls[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,E=t.cache.get(M);E||(x=new l(o,p*d,r.count*d/u),E=new us(x,d/u),t.cache.add(M,E)),g=new hs(E,c,f%d/u,m)}else o===null?x=new l(r.count*c):x=new l(o,f,r.count*c),g=new Ct(x,c,m);if(r.sparse!==void 0){let p=uh.SCALAR,M=Ls[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,S=new M(a[1],E,r.sparse.count*p),b=new l(a[2],y,r.sparse.count*c);o!==null&&(g=new Ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,_=S.length;w<_;w++){let T=S[w];if(g.setX(T,b[w*c]),c>=2&&g.setY(T,b[w*c+1]),c>=3&&g.setZ(T,b[w*c+2]),c>=4&&g.setW(T,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=lm[f.magFilter]||Nt,u.minFilter=lm[f.minFilter]||Hn,u.wrapS=cm[f.wrapS]||Xi,u.wrapT=cm[f.wrapT]||Xi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Lt&&u.minFilter!==Nt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Wt(x);g.needsUpdate=!0,f(g)}),t.load(Ri.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),li(h,a),h.userData.mimeType=a.mimeType||MM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new gs,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ms,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pr}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let h=r[it.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],sn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=on);let u=s.alphaMode||hh.OPAQUE;if(u===hh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===hh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==$t){let h=s.emissiveFactor;o.emissive=new He().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&a!==$t&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),li(h,s),t.associations.set(h,{materials:e}),s.extensions&&br(r,h,s),h})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return um(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=vM(l),h=r[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=um(new Xt,l,t),l.mode===Ln.TRIANGLE_STRIP?f=f.then(d=>ch(d,Ra)):l.mode===Ln.TRIANGLE_FAN&&(f=f.then(d=>ch(d,Ts))),r[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?xM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=a[d],p,M=l[d];if(g.mode===Ln.TRIANGLES||g.mode===Ln.TRIANGLE_STRIP||g.mode===Ln.TRIANGLE_FAN||g.mode===void 0){let E=s.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&y?new ra(x,M):new Dt(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Ln.LINES)p=new oa(x,M);else if(g.mode===Ln.LINE_STRIP)p=new fr(x,M);else if(g.mode===Ln.LINE_LOOP)p=new la(x,M);else if(g.mode===Ln.POINTS)p=new ca(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&yM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),li(p,s),g.extensions&&br(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&br(r,h[0],s),h[0];let f=new zt;s.extensions&&br(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Ge.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ki(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new Fe;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],m=r.samplers[d.sampler],x=d.target,g=x.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,M=r.parameters!==void 0?r.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let E=0,y=f.length;E<y;E++){let S=f[E],b=d[E],w=m[E],_=x[E],T=g[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,b,w,_,T);if(R)for(let L=0;L<R.length;L++)p.push(R[L])}let M=new _s(s,void 0,p);return li(M,r),M})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,bM)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new B().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new fs:l.length>1?u=new zt:l.length===1?u=l[0]:u=new At,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),li(u,s),s.extensions&&br(n,u,s),s.matrix!==void 0){let h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new zt;n.name&&(s.name=r.createUniqueName(n.name)),li(s,n),n.extensions&&br(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];f.parent!==null?s.add(sm(f)):s.add(f)}let l=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof fn||f instanceof Wt)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Qi[s.path]===Qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(Qi[s.path]){case Qi.weights:u=wi;break;case Qi.rotation:u=ni;break;case Qi.translation:case Qi.scale:u=Ti;break;default:n.itemSize===1?u=wi:u=Ti;break}let h=r.interpolation!==void 0?gM[r.interpolation]:cr,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let x=new u(c[d]+"."+Qi[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ni?Dh:Jl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function SM(i,e,t){let n=e.attributes,r=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),o.normalized){let u=Fh(Ls[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new B,c=new B;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Fh(Ls[f.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new hn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function um(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Uh[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return tt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),li(i,e),SM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?_M(i,e.targets,t):i})}function fm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,h=-l*r*o-c*s*a,f=l*s*a-c*r*o,d=l*s*o+c*r*a;return[-u,-f,-h,d]}function wM(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function dm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=wM(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function pm(i,e,t,n=null){let r=new _a,s=new WeakMap;function a(l,u){if(l?.id!=="torso")return l;let h=D=>i.getObjectByName(D),f=D=>h(D)?.getWorldPosition(new B),d=f("Bip001-Pelvis"),m=f("Bip001-Neck"),x=f("Bip001-L-UpperArm"),g=f("Bip001-R-UpperArm"),p=f("Bip001-Head"),M=f("EyeJoint_L"),E=f("EyeJoint_R");if(!d||!m||!x||!g||!p||!M||!E)return l;let y=m.distanceTo(d);if(y<1e-5)return l;let S=m.clone().sub(d).normalize(),b=g.clone().sub(x).normalize(),w=new B().crossVectors(b,S).normalize(),T=M.add(E).multiplyScalar(.5).sub(p).dot(w);if(Math.abs(T)<y*.002)return l;T<0&&w.negate();let R=u.clone().sub(d),L=R.dot(S)/y,I=R.dot(w)/y;if(Math.abs(R.dot(b))/y>.7)return l;let P=null;return L>.45&&L<.95&&I>.06?P="chest":L>-.32&&L<.16&&I<-.06?P="hips":L>.05&&L<.46&&I>.06?P="abdomen":L>.16&&L<.95&&I<-.06&&(P="back"),P?{id:P,confidence:.75,source:"rig-surface-estimate"}:l}function o(l){for(let u=l;u;u=u.parent)if(!u.visible)return!1;return!0}function c(l,u){if(!l||!u)return 1;let h=s.get(l);if(!h)try{let x=l.image,g=document.createElement("canvas");g.width=x.width,g.height=x.height;let p=g.getContext("2d",{willReadFrequently:!0});p.drawImage(x,0,0);let M=p.getImageData(0,0,g.width,g.height).data,E=new Uint8Array(g.width*g.height);for(let y=0;y<E.length;y++)E[y]=M[y*4+3];h={width:g.width,height:g.height,data:E},s.set(l,h),g.width=g.height=1}catch{return null}let f=u.clone();l.transformUv(f);let d=Math.min(h.width-1,Math.max(0,Math.floor(f.x*h.width))),m=Math.min(h.height-1,Math.max(0,Math.floor(f.y*h.height)));return h.data[m*h.width+d]/255}return(l,u)=>{let h=t.getBoundingClientRect();if(!Number.isFinite(l)||!Number.isFinite(u)||!h.width||!h.height||l<h.left||l>h.right||u<h.top||u>h.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let f=[];i.traverse(m=>{m.isMesh&&o(m)&&(m.isSkinnedMesh&&(m.skeleton.update(),m.computeBoundingSphere(),m.computeBoundingBox()),f.push(m))});let d=new Set;n?.traverse(m=>{m.isMesh&&o(m)&&(f.push(m),d.add(m))}),r.setFromCamera(new Ze((l-h.left)/h.width*2-1,-(u-h.top)/h.height*2+1),e);for(let m of r.intersectObjects(f,!1)){let x=m.object,g=x.material,p=c(x.userData.previewMap,m.uv),M=g.alphaTest||(g.transparent?.1:0);if(g.clippingPlanes?.some(R=>R.distanceToPoint(m.point)<0)||p!==null&&p<M)continue;if(d.has(x))return null;let E=[m.face.a,m.face.b,m.face.c],y=E.map(R=>x.getVertexPosition(R,new B)),S=x.worldToLocal(m.point.clone()),b=Jn.getBarycoord(S,...y,new B),w=[],_=x.geometry.getAttribute("skinIndex"),T=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&_&&T&&b)for(let R=0;R<3;R++)for(let L=0;L<4;L++)w.push({name:x.skeleton.bones[_.getComponent(E[R],L)]?.name,weight:T.getComponent(E[R],L)*b.getComponent(R)});return{mesh:x.userData.snowbreakSurfaceKey,triangle:m.faceIndex,barycentric:b?.toArray(),anatomy:a(dm(w),m.point),uv:m.uv?.toArray()||null,point:m.point.toArray(),distance:m.distance,alphaVerified:p!==null,material:x.userData.snowbreakMaterialName}}return null}}var Ci={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Na(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function wr(i,e){let t=Na(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(Ci,i.anatomy.id))return{...i.anatomy,label:Ci[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(Ci,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:Ci[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:Ci[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var Bh={head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function mm(i,e,t){let n=new zt;n.visible=!1,e.add(n);let r=new Map;i.traverse(p=>{p.isMesh&&p.userData.snowbreakSurfaceKey&&r.set(p.userData.snowbreakSurfaceKey,p)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function h(){for(let p of c)p.overlay.geometry.dispose(),p.overlay.material.dispose(),p.overlay.removeFromParent();c=[],l=0}function f(){h(),u=!1;let p=new Map;for(let[M,E]of Object.entries(s)){let y=/^(surface_\d+):(\d+)$/.exec(M);if(!y)continue;let S=r.get(y[1]),b=Number(y[2]);if(!S)continue;let w=S.geometry,_=w.getAttribute("position"),T=w.index,R=w.getAttribute("uv"),L=wr({mesh:y[1],triangle:b,alphaVerified:!0},{[M]:E});if(!L||b*3+2>=(T?T.count:_.count)||S.userData.previewMap&&!R)continue;if(l>=5e3){u=!0;continue}l++;let I=y[1]+":"+L.id,O=p.get(I);O||(O={source:S,region:L.id,vertices:[],keys:[]},p.set(I,O)),O.keys.push(M);for(let P=0;P<3;P++)O.vertices.push(T?T.getX(b*3+P):b*3+P)}for(let M of p.values()){let E=new Xt;E.setAttribute("position",new Ct(new Float32Array(M.vertices.length*3),3).setUsage(Du));let y=M.source.geometry.getAttribute("uv");if(y){let _=new Float32Array(M.vertices.length*2);M.vertices.forEach((T,R)=>{_[R*2]=y.getX(T),_[R*2+1]=y.getY(T)}),E.setAttribute("uv",new Ct(_,2))}let S=M.source.material,b=new $t({color:Bh[M.region],map:M.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),w=new Dt(E,b);w.frustumCulled=!1,w.renderOrder=100,n.add(w),c.push({...M,overlay:w})}o=!1}function d(p){for(let M=p;M;M=M.parent)if(!M.visible)return!1;return!0}function m(){if(n.visible=a,!a)return;o&&f(),i.updateWorldMatrix(!0,!0);let p=new B,M=new Map;for(let E of c){let{source:y,overlay:S}=E;if(S.visible=d(y),!S.visible)continue;y.updateMatrixWorld(!0),y.isSkinnedMesh&&y.skeleton.update();let b=M.get(y);b||(b=new Map,M.set(y,b));let w=S.geometry.getAttribute("position");E.vertices.forEach((_,T)=>{let R=b.get(_);R||(y.getVertexPosition(_,p).applyMatrix4(y.matrixWorld),R=p.toArray(),b.set(_,R)),w.setXYZ(T,...R)}),w.needsUpdate=!0}}function x(){let p=c.find(E=>E.overlay.visible),M=p?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:p&&M?{key:p.keys[0],vertices:[0,1,2].map(E=>new B().fromBufferAttribute(M,E).toArray()),screen:[0,1,2].map(E=>new B().fromBufferAttribute(M,E).project(t).toArray())}:null}}function g(p){let M=n.visible;n.visible=!1;try{return p()}finally{n.visible=M}}return{set(p,M=a){return s=p,a=!!M,o=!0,a||h(),m(),x()},update:m,snapshot:x,hideForCapture:g,dispose(){h(),n.removeFromParent()}}}function gm(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Fe().compose(new B(...i.position),new We(...i.quaternion).normalize(),new B(...i.scale))}async function xm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(n.schema!=="snowbreak-local-scene/1"||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=gm(n.characterWorld).invert(),s=new zt,a=new zt,o=new Set,c=[],l=[];s.add(a);let u=new yn,h=!0;for(let m of n.objects){let x=i.getAsset(m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(m.id)||o.has(m.id)||x?.kind!=="geometry")throw new Error("Invalid scene object");if(m.group!==void 0&&!["room","furniture"].includes(m.group)||m.cutaway!==void 0&&typeof m.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(m.id);let g=r.clone().multiply(gm(m.world)),p=(await new Sr().parseAsync(x.bytes.slice().buffer,"")).scene,M=0;p.traverse(y=>{if(y.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");y.isMesh&&(M+=(y.geometry.index?.count||y.geometry.attributes.position.count)/3)});let E=new zt;E.name=m.id,E.matrixAutoUpdate=!1,E.matrix.copy(g),E.add(p),(m.group==="room"?a:s).add(E),t(p),p.traverse(y=>{y.isMesh&&(m.group==="room"&&(y.material.side=pn),m.cutaway&&(y.material.clippingPlanes=[u],l.push(y.material)),(m.group==="room"||m.cutaway)&&(y.material.needsUpdate=!0))}),c.push({id:m.id,assetRole:m.assetRole,group:m.group||"furniture",cutaway:!!m.cutaway,triangles:M,matrix:g.toArray()})}e.add(s),s.updateMatrixWorld(!0);function f(m,x){if(!l.length)return;let g=m.position.clone().sub(x),p=g.length();if(p<.001)return;g.divideScalar(p);let M=x.clone().addScaledVector(g,Math.min(.65,p*.5));u.setFromNormalAndCoplanarPoint(g.negate(),M)}function d(m){let x=!!m;if(x!==h){h=x;for(let g of l)g.clippingPlanes=h?[u]:null,g.needsUpdate=!0}}return{root:s,hasCutaway:l.length>0,updateView:f,setRoomVisible:m=>{a.visible=!!m},setCutaway:d,setVisible:m=>{s.visible=!!m},snapshot:()=>({available:!0,visible:s.visible,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:h,clipPlane:[...u.normal.toArray(),u.constant],objects:c.map(m=>({...m,matrix:[...m.matrix]})),originalSceneVerified:!1})}}var EM=new Set(["head","left_hand","right_hand"]),TM=new Set(["tap","double_tap","long_press","stroke"]);function _m(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!EM.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!TM.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function ym(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function AM(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function vm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let f of i.clips){let d=e.getAsset(f.animationRole),m=e.current.resources.find(g=>g.role===f.animationRole);if(d?.kind!=="animation"||f.sourceSha256!==(d.data.generatorMetadata?.sourceSha256||m?.assetId)||!/^[a-f0-9]{64}$/.test(f.sourceSha256)||n.has(f.sourceSha256)||f.frames!==d.data.frames||f.fps!==d.data.fps||!Array.isArray(f.curves)||f.curves.length>64)throw new Error("Morph curve animation mismatch");let x=new Set;for(let g of f.curves){if(typeof g.name!="string"||!g.name.length||g.name.length>128||x.has(g.name)||!Array.isArray(g.keys)||!g.keys.length||g.keys.length>4096)throw new Error("Invalid morph curve identity");x.add(g.name),s.add(g.name);let p=-1/0;for(let M of g.keys){if(!Array.isArray(M)||M.length!==5||!M.every(Number.isFinite)||M[0]<0||M[0]>120||M[0]<=p||Math.abs(M[1])>4||Math.abs(M[2])>1e6||Math.abs(M[3])>1e6||![0,1,2].includes(M[4]))throw new Error("Invalid morph curve key");if(p=M[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(f.sourceSha256,f),r.set(d.data,f.sourceSha256)}let o=[];if(t.traverse(f=>{if(!f.isMesh||!f.morphTargetDictionary||!f.morphTargetInfluences)return;let d=new Map;for(let m of s){let x=f.morphTargetDictionary[m];if(x!==void 0){if(!Number.isInteger(x)||x<0||x>=f.morphTargetInfluences.length)throw new Error("Invalid morph target index");d.set(m,x)}}d.size&&o.push({mesh:f,indices:d})}),[...s].some(f=>!o.some(d=>d.indices.has(f))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function h(f,d){l=d,c=f&&r.get(f)||null,u={};let m=n.get(c);for(let x of m?.curves||[])u[x.name]=AM(x.keys,d);for(let{mesh:x,indices:g}of o)for(let[p,M]of g)x.morphTargetInfluences[M]=u[p]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:f,indices:d})=>Object.fromEntries([...d].map(([m,x])=>[m,f.morphTargetInfluences[x]]))),originalExpressionFidelity:!1})}}function kh(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function Mm(i,e){let t=new ql({canvas:i,alpha:!0,antialias:!0}),n=new hr,r=new zt,s=new kt(32,1,.01,100);r.rotation.y=-Math.PI/2,n.add(r);let a=im(n,t),o,c,l,u,h,f=null,d=null,m=null,x=null,g=!1,p=null,M=0,E=[],y=new Set,S=new Set,b=new Set,w=new Map,_=new Map,T=new Map,R=new Set,L=new Map,I=e.getAsset("rootMotionPolicy")?.data,O=0,P=0,D=0,F=0,k=null,Y=null,N={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},U=0,V=0,se=null;function ae(){r.rotation.set(Ge.degToRad(N.pitch),-Math.PI/2+U+Ge.degToRad(N.yaw+V),Ge.degToRad(N.roll)),r.updateMatrixWorld(!0)}function Oe(re){let ce={...N,...re};for(let pe of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(ce[pe]))throw new Error("Invalid framing");return N={scale:Ge.clamp(ce.scale,.3,4),x:Ge.clamp(ce.x,-1.5,1.5),y:Ge.clamp(ce.y,-1.5,1.5),yaw:((ce.yaw+180)%360+360)%360-180,pitch:Ge.clamp(ce.pitch,-65,65),roll:Ge.clamp(ce.roll,-45,45),stretchX:Ge.clamp(ce.stretchX,.65,1.5),stretchY:Ge.clamp(ce.stretchY,.65,1.5)},ae(),oe(),{...N}}function Ee(){if(!se)return;r.rotation.y=-Math.PI/2,r.updateMatrixWorld(!0);let re=se.bone.getWorldQuaternion(new We),ce=se.axis.clone().applyQuaternion(re);Math.hypot(ce.x,ce.z)>.1&&(U=se.heading-Math.atan2(ce.x,ce.z)),ae()}function Ve(){return N.yaw=0,Ee(),oe(),{...N}}function X(re){re.traverse(ce=>{if(ce.isBone&&(ce.userData.bindLocalQuaternion=ce.quaternion.toArray()),!ce.isMesh)return;y.add(ce.geometry);for(let Ie of Array.isArray(ce.material)?ce.material:[ce.material]){S.add(Ie);for(let Xe of Object.values(Ie))Xe?.isTexture&&b.add(Xe)}let pe=ce.material.name,me=w.get(pe)||null,be=T.get(pe)||{};if(ce.userData.snowbreakSurfaceKey="surface_"+P++,ce.userData.snowbreakMaterialName=pe,ce.userData.previewMap=me,be.transparent!==void 0&&typeof be.transparent!="boolean")throw new Error("Invalid transparent override");if(be.renderOrder!==void 0&&(!Number.isInteger(be.renderOrder)||Math.abs(be.renderOrder)>100))throw new Error("Invalid material sorting");ce.renderOrder=be.renderOrder||0,ce.material=nm(pe,me,_.get(pe),be),S.add(ce.material),ce.castShadow=ce.isSkinnedMesh&&!be.transparent,ce.receiveShadow=ce.material.userData.profile==="cloth-or-room"})}function Z(re,ce){if(!ce)return;let pe=new Map(ce.tracks.map(me=>[me.bone,me]));re.traverse(me=>{if(!me.isBone)return;let be=pe.get(me.name)?.keys?.[0];if(!be||be.length!==10||!be.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");me.position.fromArray(be),me.quaternion.fromArray(be,3),me.scale.fromArray(be,7)})}function le(re,ce,pe=E){if(!ce)return;let me=new Map(ce.tracks.map(be=>[be.bone,be]));if(me.size!==ce.tracks.length)throw new Error("Duplicate animation bones");re.traverse(be=>{if(!be.isBone||re===c&&!R.has(be))return;let Ie=me.get(be.name);if(!Ie||Ie.keys.length!==ce.frames||Ie.keys.some(Xe=>Xe.length!==10||!Xe.every(Number.isFinite)||Math.abs(Xe.slice(3,7).reduce((nt,ut)=>nt+ut*ut,0)-1)>.05))throw new Error("Invalid bone animation");pe.push({bone:be,track:Ie,clip:ce})})}function ve(){if(!g){g=!0,removeEventListener("resize",oe),t.setAnimationLoop(null),h?.dispose(),o?.dispose(),a.dispose();for(let re of y)re.dispose();for(let re of S)re.dispose();for(let re of b)re.dispose();c?.removeFromParent(),u?.root?.removeFromParent(),t.dispose()}}function oe(){if(g||!c)return;F++;let re=i.clientWidth||innerWidth,ce=i.clientHeight||innerHeight,pe=Math.min(devicePixelRatio||1,3);(!k||k.w!==re||k.h!==ce||k.ratio!==pe)&&(t.setPixelRatio(pe),t.setSize(re,ce,!1),k={w:re,h:ce,ratio:pe},D++),s.aspect=re/ce,r.updateMatrixWorld(!0),!f&&!Y&&(c.traverse(ut=>{ut.isSkinnedMesh&&(ut.skeleton.update(),ut.computeBoundingBox())}),Y=new qt().setFromObject(c).applyMatrix4(r.matrixWorld.clone().invert()));let me=(d||f||Y).clone().applyMatrix4(r.matrixWorld),be=me.getSize(new B),Ie=me.getCenter(new B);a.frame(me);let Xe=Math.tan(Ge.degToRad(16)),nt=Math.max(be.y/(2*Xe),be.x/(2*Xe*s.aspect))*1.25+be.z;if(f){nt=0;for(let ut of[me.min.x,me.max.x])for(let at of[me.min.y,me.max.y])for(let ot of[me.min.z,me.max.z])nt=Math.max(nt,ot-Ie.z+Math.max(Math.abs(ut-Ie.x)/(Xe*s.aspect),Math.abs(at-Ie.y)/Xe)*1.12)}s.position.copy(Ie).add(new B(0,0,nt)),s.lookAt(Ie),s.zoom=d?1.05:N.scale,s.setViewOffset(re,ce,d?0:-N.x*re,d?0:-N.y*ce,re,ce),s.updateProjectionMatrix(),s.projectionMatrix.elements[0]*=N.stretchX,s.projectionMatrix.elements[5]*=N.stretchY,s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),u?.updateView(s,Ie)}try{let ne=function(Q){let z=fe.get(Q);if(!z)throw new Error("Unknown sample");ee=Q,q=z.bindings,K=z.duration;let he=z.sceneFraming?L.get(z.sourceSha256):null;if(z.sceneFraming&&!he)throw new Error("Scene framing envelope missing");let de=d!==he;return d=he,ge(0),de&&oe(),{id:Q,label:z.label,duration:z.duration}},ge=function(Q,z=q,he=K){if(g||!Number.isFinite(Q))return;let de=je;x=z[0]?.clip?.generatorMetadata?.sourceSha256||null,je=z===C&&ot>0?"standby":"sample",M=Math.max(0,Math.min(he,Q));for(let{bone:Te,track:qe,clip:ct}of z){let lt=M*ct.fps,Nn=Math.min(Math.floor(lt),ct.frames-1),fi=Math.min(Nn+1,ct.frames-1),ln=lt-Nn,gn=qe.keys[Nn],Sn=qe.keys[fi];Te.position.set(Ge.lerp(gn[0],Sn[0],ln),Ge.lerp(gn[1],Sn[1],ln),Ge.lerp(gn[2],Sn[2],ln)),Te.quaternion.copy(ut.fromArray(gn,3).slerp(at.fromArray(Sn,3),ln)),Te.scale.set(Ge.lerp(gn[7],Sn[7],ln),Ge.lerp(gn[8],Sn[8],ln),Ge.lerp(gn[9],Sn[9],ln))}if(Ie.apply(z.find(Te=>!R.has(Te.bone))?.clip,M),I){c.position.x=c.position.z=0,r.updateMatrixWorld(!0);let Te=c.getObjectByName(I.bone).getWorldPosition(new B).applyMatrix4(c.matrixWorld.clone().invert());c.position.x=I.reference[0]-Te.x,c.position.z=I.reference[1]-Te.z}r.updateMatrixWorld(!0),O=Xe.length;for(let Te of Xe)Te.update()};if(I&&(I.schema!=="snowbreak-home-root-lock/1"||I.bone!=="Bip001"||!Array.isArray(I.reference)||I.reference.length!==2||!I.reference.every(Q=>Number.isFinite(Q)&&Math.abs(Q)<10)))throw new Error("Invalid home root motion policy");let re=e.getAsset("materials")?.data;if(re){if(re.schema!=="snowbreak-material-preview/1"||re.originalShaderVerified!==!1||!Array.isArray(re.materials)||re.materials.length>64)throw new Error("Invalid material preview");let Q=new Map;for(let z of re.materials){if(typeof z.name!="string"||z.name.length>256||T.has(z.name))throw new Error("Invalid material identity");let he=z.renderState||{};if(he.alphaCutoff!==void 0&&(!Number.isFinite(he.alphaCutoff)||he.alphaCutoff<0||he.alphaCutoff>1))throw new Error("Invalid material alpha");if(he.doubleSided!==void 0&&typeof he.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(T.set(z.name,he),!z.diffuseAssetId)continue;let de=e.getAsset("texture_"+z.diffuseAssetId);if(de?.kind!=="texture")throw new Error("Missing local diffuse texture");let Te=Q.get(z.diffuseAssetId);if(!Te){let qe=URL.createObjectURL(new Blob([de.bytes],{type:de.data?.mime||"image/png"}));try{Te=await new Zi().loadAsync(qe)}finally{URL.revokeObjectURL(qe)}let ct=localStorage.getItem("snowTextureLimit")==="2048"?2048:4096;if(Te.image.width>ct||Te.image.height>ct){let lt=document.createElement("canvas"),Nn=Math.min(ct/Te.image.width,ct/Te.image.height);lt.width=Math.round(Te.image.width*Nn),lt.height=Math.round(Te.image.height*Nn),lt.getContext("2d").drawImage(Te.image,0,0,lt.width,lt.height),Te.image=lt,Te.needsUpdate=!0}Te.colorSpace=Rt,Te.anisotropy=t.capabilities.getMaxAnisotropy(),Te.flipY=!1,Q.set(z.diffuseAssetId,Te),b.add(Te)}if(w.set(z.name,Te),z.normalAssetId){if(!/^[a-f0-9]{64}$/.test(z.normalAssetId)||re.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let qe=e.getAsset("texture_"+z.normalAssetId);if(qe?.kind!=="texture")throw new Error("Missing original normal texture");let ct=Q.get("normal:"+z.normalAssetId);if(!ct){let lt=URL.createObjectURL(new Blob([qe.bytes],{type:qe.data?.mime||"image/png"}));try{ct=await new Zi().loadAsync(lt)}finally{URL.revokeObjectURL(lt)}ct.flipY=!1,ct.colorSpace=Xn,ct.anisotropy=t.capabilities.getMaxAnisotropy(),Q.set("normal:"+z.normalAssetId,ct),b.add(ct)}_.set(z.name,ct)}}}let ce=e.getAsset("body");if(!ce)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let pe=e.getAsset("framingBounds")?.data;if(pe){let Q=z=>Array.isArray(z)&&z.length===3&&z.every(he=>Number.isFinite(he)&&Math.abs(he)<=100);if(pe.schema!=="snowbreak-framing-bounds/1"||pe.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||pe.bodySha256!==e.current.resources.find(z=>z.role==="body")?.assetId||!Q(pe.min)||!Q(pe.max)||pe.min.some((z,he)=>z>=pe.max[he])||!Number.isInteger(pe.evaluatedFrames)||pe.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(f=new qt(new B(...pe.min),new B(...pe.max)),m=pe,pe.clips){if(!Array.isArray(pe.clips)||pe.clips.length>16)throw new Error("Invalid clip envelopes");for(let z of pe.clips){if(!/^[a-f0-9]{64}$/.test(z.sourceSha256)||L.has(z.sourceSha256)||!Q(z.min)||!Q(z.max)||z.min.some((he,de)=>he>=z.max[de]))throw new Error("Invalid clip envelope");L.set(z.sourceSha256,new qt(new B(...z.min),new B(...z.max)))}}}c=(await new Sr().register(kh).parseAsync(ce.bytes.slice().buffer,"")).scene,r.add(c),X(c),c.traverse(Q=>{Q.isBone&&R.add(Q)});let me=e.getAsset("bodyAnimation")?.data;x=me?.generatorMetadata?.sourceSha256||null,Z(c,me),le(c,me);let be=e.getAsset("faceAttachment")?.data;if(be){if(be.schema!=="snowbreak-face-attachment/1"||be.candidateOnly!==!0||be.originalAssemblyVerified!==!1||be.boneName!=="Bip001-Head"||be.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let Q=c.getObjectByName(be.boneName),z=be.relativeLocationCm;if(!Q?.isBone||!z||![z.X,z.Y,z.Z].every(qe=>Number.isFinite(qe)&&Math.abs(qe)<100))throw new Error("Invalid socket parent or position");let he=e.getAsset("face");if(!he)throw new Error("Missing face geometry");l=(await new Sr().register(kh).parseAsync(he.bytes.slice().buffer,"")).scene,X(l),Z(l,e.getAsset("faceAnimation")?.data);let de=e.getAsset("faceAnimation")?.data;if(!de||!me||de.frames!==me.frames||de.fps!==me.fps)throw new Error("Face/body sample timing mismatch");le(l,de);let Te=new zt;if(Te.position.set(z.X*.01,z.Z*.01,z.Y*.01),Te.quaternion.fromArray(fm(be.relativeRotationDegrees)),Q.add(Te),Te.add(l),be.defaultVisible!==void 0&&typeof be.defaultVisible!="boolean")throw new Error("Invalid face visibility");l.visible=be.defaultVisible===!0}u=await xm(e,r,X),t.localClippingEnabled=!!u.hasCutaway;let Ie=vm(e.getAsset("morphCurves")?.data,e,l),Xe=[];c.traverse(Q=>{Q.isSkinnedMesh&&!Xe.includes(Q.skeleton)&&Xe.push(Q.skeleton),Q.isSkinnedMesh&&(Q.frustumCulled=!1)});let nt=me?(me.frames-1)/me.fps:0,ut=new We,at=new We,ot=0,H="D\u5F85\u673A",dt=!1,je="sample",C=[],v=e.getAsset("stateTransition")?.data;if(v){let Q=v.schema==="snowbreak-state-preview/1"&&v.show==="Sc01_Hand_A_D"&&v.fromState==="A"&&v.toState==="D",z=v.schema==="snowbreak-standby-preview/1"&&v.characterId===e.current.characterId&&Number.isInteger(v.standbyConfigId)&&v.standbyConfigId>0&&Number.isInteger(v.sourceSkinId)&&/^[a-f0-9]{64}$/.test(v.sourceTableSha256)&&typeof v.label=="string"&&v.label.length<=40&&typeof v.startAsStandby=="boolean",he=v.schema==="snowbreak-standby-preview/2"&&v.stance==="standing"&&v.characterId===e.current.characterId&&v.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&v.startAsStandby===!0;if(!Q&&!z&&!he||v.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(z||he)&&(H=v.label,dt=v.startAsStandby);let de=e.getAsset("standbyBody")?.data,Te=e.getAsset("standbyFace")?.data;if(!de||!Te||de.frames!==Te.frames||de.fps!==Te.fps)throw new Error("Standby clip timing mismatch");let qe=new Map(de.tracks.map(lt=>[lt.bone,lt])),ct=new Map(Te.tracks.map(lt=>[lt.bone,lt]));C=E.map(lt=>{let Nn=lt.clip===me?de:Te,fi=(lt.clip===me?qe:ct).get(lt.bone.name);if(!fi||fi.keys.length!==Nn.frames||fi.keys.some(ln=>ln.length!==10||!ln.every(Number.isFinite)||Math.abs(ln.slice(3,7).reduce((gn,Sn)=>gn+Sn*Sn,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:lt.bone,track:R.has(lt.bone)?tm(fi):fi,clip:Nn}}),ot=(de.frames-1)/de.fps}let q=E,K=nt,ee="default",fe=new Map([["default",{bindings:E,duration:nt,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),ue=e.getAsset("sampleCatalog")?.data;if(ue){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(ue.schema)||ue.characterId!==e.current.characterId||ue.originalInteractionVerified!==!1||!Array.isArray(ue.samples)||!ue.samples.length||ue.samples.length>24||!/^[a-f0-9]{64}$/.test(ue.sourceTableSha256))throw new Error("Invalid sample catalog");fe.clear();for(let z of ue.samples){if(typeof z.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(z.id)||fe.has(z.id)||typeof z.label!="string"||z.label.length>64||ue.schema.endsWith("/1")&&(!Number.isInteger(z.sourceShowElementId)||z.sourceShowElementId<1))throw new Error("Invalid sample identity");let he=e.getAsset(z.bodyRole),de=e.getAsset(z.faceRole);if(he?.kind!=="animation"||de?.kind!=="animation"||he.data.frames!==de.data.frames||he.data.fps!==de.data.fps)throw new Error("Sample body/face mismatch");if(ue.schema.endsWith("/2")&&z.sourceBodySha256!==(he.data.generatorMetadata?.sourceSha256||e.current.resources.find(qe=>qe.role===z.bodyRole)?.assetId))throw new Error("Sample source mismatch");let Te=E;if(z.bodyRole!=="bodyAnimation"||z.faceRole!=="faceAnimation"){if(Te=[],le(c,he.data,Te),!l)throw new Error("Sample requires face");le(l,de.data,Te)}fe.set(z.id,{bindings:Te,duration:(he.data.frames-1)/he.data.fps,label:z.label,sourceShowElementId:z.sourceShowElementId,sceneFraming:z.sceneFraming===!0,sourceSha256:he.data.generatorMetadata?.sourceSha256})}let Q=fe.get(ue.defaultId);if(!Q||Q.bindings!==E)throw new Error("Default sample must reference primary clip");ee=ue.defaultId}let te=_m(ue);r.updateMatrixWorld(!0);let Pe=c.getObjectByName("Bip001-Pelvis")||c.getObjectByName("Bip001");if(Pe){let Q=Pe.getWorldQuaternion(new We),z=[new B(1,0,0),new B(0,1,0),new B(0,0,1)].sort((de,Te)=>{let qe=de.clone().applyQuaternion(Q),ct=Te.clone().applyQuaternion(Q);return Math.hypot(ct.x,ct.z)-Math.hypot(qe.x,qe.z)})[0],he=z.clone().applyQuaternion(Q);se={bone:Pe,axis:z,heading:Math.atan2(he.x,he.z)}}h=mm(c,n,s);let xe=em(c,Q=>{V=Q,ae()},()=>N.yaw);o=Qp(c,s,i),oe(),await t.compileAsync(n,s),addEventListener("resize",oe),t.setAnimationLoop(()=>{i.dataset.snowbreakPaused!=="true"&&(xe.restore(),o.restore(),p?.(),xe.tick(),o.tick(),h.update(),t.render(n,s))});let ye=()=>{let Q=[];return c.traverse(z=>{z.isMesh&&Q.push({name:z.userData.snowbreakMaterialName,textured:!!z.userData.previewMap,normalMapped:!!z.material.normalMap,diffuseSize:z.material.map?[z.material.map.image.width,z.material.map.image.height]:null,normalSize:z.material.normalMap?[z.material.normalMap.image.width,z.material.normalMap.image.height]:null,anisotropy:z.material.map?.anisotropy||0,profile:z.material.userData.profile,alphaTest:z.material.alphaTest})}),Q},De=Q=>c.traverse(z=>{z.isMesh&&(z.material.map=Q?z.userData.previewMap:null,z.material.color.set(z.material.map?16777215:13289411),z.material.needsUpdate=!0)}),ze=()=>({available:!!l,visible:!!l?.visible,originalAssemblyVerified:!1}),$e=Q=>(l&&(l.visible=!!Q,oe()),ze()),W=(Q,z,he)=>{if(g)throw new Error("Renderer disposed");h.hideForCapture(()=>{t.render(n,s),Q.drawImage(i,0,0,z,he)})},Me=lh(c),ie=lh(c,{side:"left"}),_e=rm(c,s,e.getAsset("learnedMotions")?.data,v?.stance);return{embodiment:xe,sensesState:o.snapshot,setGaze:o.gaze,senseTouch:o.touch,resetSenses:o.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(Q=>[Q,c.getObjectByName(Q)?.getWorldPosition(new B).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:a.snapshot,setLighting:a.set,bonePoseState:()=>{let Q=[];return c.traverse(z=>{z.isBone&&Q.push({name:z.name,position:z.position.toArray(),quaternion:z.quaternion.toArray(),scale:z.scale.toArray()})}),Q},cameraState:()=>({position:s.position.toArray(),projection:s.projectionMatrix.toArray()}),learnedOptions:_e.available,applyLearnedMotion:_e.apply,learnedDiagnostics:_e.snapshot,presentationDiagnostics:()=>({resizeCount:D,fitCount:F}),touchBindings:()=>te.map(Q=>({...Q,gestures:[...Q.gestures]})),setRoomVisible:u.setRoomVisible,setSceneCutaway:u.setCutaway,sceneState:u.snapshot,setSceneVisible:u.setVisible,morphState:Ie.snapshot,framingEnvelopeState:()=>({precomputed:!!f,evaluatedFrames:m?.evaluatedFrames||0,perClip:L.size,activeSource:x}),resourceState:()=>({sourceTextures:b.size,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures}),setSurfaceLabels:h.set,surfaceOverlayState:h.snapshot,armPreview:Me,leftArmPreview:ie,dispose:ve,pickSurface:pm(c,s,i,u.root),drawSnapshot:W,faceViewer:Ve,setFrame:Oe,frameState:()=>({...N}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:ye,setTexturePreview:De,faceCandidateState:ze,showFaceCandidate:$e,selectSample:ne,sampleOptions:()=>[...fe].map(([Q,z])=>({id:Q,label:z.label,duration:z.duration,sourceShowElementId:z.sourceShowElementId})),get duration(){return K},seek:ge,standbyDuration:ot,standbyLabel:H,startAsStandby:dt,seekStandby:Q=>{d&&(d=null,oe()),ot>0&&ge(Q%ot,C,ot)},setFrameHandler:Q=>p=Q,sampleState:()=>({lastSkeletonUpdates:O,sampleId:ee,time:M,poseMode:je,standbyDuration:ot,nativeInitializationVerified:!1,viewYaw:r.rotation.y,autoYaw:U,bodyBones:E.filter(Q=>Q.clip===me).length,faceBones:E.filter(Q=>Q.clip!==me).length,hand:c.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new B).toArray()})}}catch(re){throw ve(),re}}var RM="action-plan/1",CM=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],IM={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},PM={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},LM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,NM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},DM={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},bm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},jl=(i,e,t)=>Math.max(e,Math.min(t,i));function UM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function FM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function OM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function zh(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:jl(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var Em=i=>!!i&&LM.test(i);function BM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=PM[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||Em(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Sm(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=Em(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function wm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of bm[s]||[])r.push(a);for(let s of bm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function kM(i,e){let t=e&&e.channels||{},n=NM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function zM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*jl(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,h=jl(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:h,curve:[[0,l],[.18,h],[.75,h],[1,l]]})}return s}function VM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Da(i,e,t={}){let n=zh(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:RM,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||DM[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+UM(OM(n)+"||"+(a?FM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!CM.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Sm(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=VM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=BM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(h)&&l.push(...h),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Sm(n,a,c.motion)}else{let l=IM[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let f=kM(n,a);if(f.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let d=zM(a,n.intensity);d.length&&o.tracks.push(...d)}o.tracks.push(...f),o.owns=o.tracks.filter(d=>d.id).map(d=>d.ch)}else{let d=wm(n,a);d?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:d.name,index:d.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=wm(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:jl(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var Ql=(i,e,t)=>Math.max(e,Math.min(t,i));function HM(i){return i*i*(3-2*i)}function GM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*HM(Ql(o,0,1))}}return i[i.length-1][1]}function Tm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(E,y,S){a.push({at:e(),kind:E,planId:y.planId,type:y.action.type,...S||{}}),a.length>40&&a.shift()}function l(E,y,...S){if(typeof y=="function")try{y(...S)}catch{}}function u(E,y){let S={plan:E,t0:y,done:!1};r.push(S),c("start",E);for(let b of E.tracks)b.ch==="motion"?l("motion",t.onMotion,b.group,b.index,E):b.ch==="pose"?l("pose",t.onPose,b.name,E):b.ch==="expression"?l("expression",t.onExpression,b,E):b.ch==="speech"&&l("speech",t.onSpeech,b.text,E);return S}function h(E,y,S){if(E.done)return;E.done=!0;let b=r.indexOf(E);b>=0&&r.splice(b,1),c("end",E.plan,{reason:S}),l("end",t.onEnd,E.plan,S)}function f(E,y,S){let b=e(),w=S||Da(E,y);if(!w||w.stopped||!w.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:w&&w.planId};let _=Number.isFinite(w.action.priority)?w.action.priority:50,T=r[0];if(T){let R=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(_<R)return s.length>=n&&s.shift(),s.push({plan:w,at:b}),c("queued",w,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:w.planId};h(T,b,"preempted")}return u(w,b),{accepted:!0,queued:!1,planId:w.planId,plan:w}}function d(E,y){let S=Math.max(1,E.duration),b=Math.max(0,Math.min(E.fadeIn||0,S*.5)),w=Math.max(0,Math.min(E.fadeOut||0,S*.5)),_=y*S,T=S-w,R=1;return b>0&&_<b&&(R=_/b),w>0&&_>T&&(R=Math.min(R,(S-_)/w)),Ql(R,0,1)}function m(E,y,S,b){for(let w of y.tracks){if(!w.curve||!w.id)continue;let T=GM(w.curve,S)*(w.weight===void 0?1:w.weight)*b,R=E[w.id];w.blend==="set"?(!R||b>=R.weight)&&(E[w.id]={id:w.id,value:T,blend:"set",weight:b,ch:w.ch}):R&&R.blend==="set"?R.value+=T:E[w.id]={id:w.id,value:(R?R.value:0)+T,blend:"add",weight:Math.max(R?R.weight:0,b),ch:w.ch}}}function x(E){let y=e(),S={t:y,channels:{},actions:[],finished:[]};for(let b of r.slice()){let w=Ql((y-b.t0)/Math.max(1,b.plan.duration),0,1),_=d(b.plan,w);_>0&&m(S.channels,b.plan,w,_),S.actions.push({planId:b.plan.planId,type:b.plan.action.type,progress:w,weight:_}),w>=1&&(S.finished.push(b.plan.planId),h(b,y,"done"))}if(!r.length&&s.length){let b=s.shift();u(b.plan,y),c("dequeued",b.plan)}return o=S,S}function g(E,y){let S=r.find(b=>b.plan.planId===E);return S?(h(S,e(),y||"interrupt"),!0):!1}function p(E){for(let y of r.slice())h(y,e(),E||"clear");s.length=0}function M(){return{active:r.map(E=>({planId:E.plan.planId,type:E.plan.action.type,progress:Ql((e()-E.t0)/Math.max(1,E.plan.duration),0,1)})),queue:s.map(E=>({planId:E.plan.planId,type:E.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:f,tick:x,interrupt:g,clear:p,snapshot:M,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var WM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function Vh(i,e={}){let t=WM[i]||i;return zh({type:t,...e})}function Am(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=0,l="stopped",u=0,h=!1,f=!1,d=null,m=null,x=null,g=i.touchBindings?.()||[],p=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(p())||p()<=0)throw new Error("Audio metadata unavailable");let M=()=>h?t.ended?t.duration>=i.duration?p()*1e3:(d||(d={at:e(),time:t.duration*1e3}),Math.min(p()*1e3,d.time+Math.max(0,e()-d.at))):t.currentTime*1e3:e(),E={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(U=>(U==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},y=i.sampleOptions?.()||[];E.localActions.surface_reaction={enabled:g.length>0,bindings:Object.fromEntries(g.map(U=>{let V=y.find(ae=>ae.id===U.sampleId),se=n?.(U.sampleId);return[U.region,{sampleId:U.sampleId,animationDuration:(V?.duration||0)*1e3,voiceDuration:(se?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function S(U,V,se="",ae=!1){x={schema:"local-surface-reaction/1",id:V.id,kind:U,sampleId:V.sampleId,region:V.touch.region,touch:V.touch,withOriginalVoice:V.withVoice,recovered:ae,reason:se,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(x)}catch{}}let b=Tm({now:M,handlers:{onMotion:U=>l=U==="local-arm-preview"?"local-arm-preview":U==="standby-D"||U==="standby-local"?"standby-preview":"playing",onPose:(U,V)=>{if(U!=="snowbreak-raise-hand")return;let se=V.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),se.begin(),o=se,l="local-arm-preview"}catch{se?.restore(),l="arm-failed"}},onEnd:(U,V)=>{if(u++,U.action.type==="surface_reaction"&&m?.id===U.planId){let se=m;if(m=null,h&&(t.pause(),V!=="done"&&(t.currentTime=0),h=!1,d=null,s(!1)),V==="done"){let ae=!1;try{ae=!!T().accepted&&l==="standby-preview"}catch{b.clear("restore-failed"),l="restore-failed"}S(ae?"completed":"failed",se,ae?"local-standby-restored":"local-standby-failed",ae)}else S(V.startsWith("audio-")?"failed":"cancelled",se,V);return}if(U.action.type==="snowbreak_standby"&&V==="done"){T();return}if(U.action.type==="snowbreak_arm_preview"||U.action.type==="raise_hand"){o?.restore(),o=null,l="stopped",i.seek(0),V==="done"&&i.startAsStandby&&T();return}h&&(t.pause(),V!=="done"&&(t.currentTime=0),h=!1,d=null,s(!1)),l=V==="done"?"sample-ended":"stopped",i.seek(V==="done"?i.duration:0),V==="done"&&(U.action.type==="snowbreak_standby"||f)&&T()}}});function w(){if(l==="standby-preview"&&R(),b.activeCount)return{accepted:!1,reason:"sample-busy"};let U={type:"snowbreak_sample",source:"manual-preview",priority:80};return b.dispatch(U,E,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++c,action:U,duration:(h?p():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function _(U){let V=h?M()/1e3:null,se=b.tick(U);if(l==="arm-failed")return R(),l="arm-failed",se;if(se.actions.length){let ae=se.actions[0];if(ae.type==="snowbreak_arm_preview"||ae.type==="raise_hand"){if(l==="local-arm-preview")try{o.apply(ae.progress)}catch{R(),l="arm-failed"}return se}ae.type==="snowbreak_standby"&&l==="standby-preview"?i.seekStandby(ae.progress*i.standbyDuration):l!=="standby-preview"&&i.seek(V===null?ae.progress*i.duration:Math.min(i.duration,V))}return se}function T(){if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};b.clear("standby-switch");let U={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),b.dispatch(U,E,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++c,action:U,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function R(U="sample-stop"){o?.restore(),o=null,u++,b.clear(U),t&&(t.pause(),t.currentTime=0),h=!1,d=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),l="stopped"}function L(U="right"){if(!["left","right"].includes(U))return{accepted:!1,reason:"invalid-arm-side"};let V=U==="left"?i.leftArmPreview:i.armPreview;if(!V?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(l==="standby-preview"&&R(),b.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{V.begin(),o=V}catch{return V.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let se={type:"snowbreak_arm_preview",side:U,source:"manual-preview",priority:80};return b.dispatch(se,E,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++c,action:se,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function I(U){E.localActions.raise_hand.enabled=!!U,!U&&o&&R()}function O(U,V={}){let se=Vh(U,V);if(se.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let ae=Da(se,E);if(ae.stopped||!ae.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:ae};if(l==="standby-preview"&&R(),b.activeCount)return{accepted:!1,reason:"sample-busy",plan:ae};let Oe=b.dispatch(se,E,ae);return l==="arm-failed"?(R(),l="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:ae}):Oe}async function P(U,{withVoice:V=!0}={}){if(!g.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(b.activeCount&&l!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let se=ym(U,g);if(!se)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(U.frequency)||U.frequency<1||U.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let ae=n?.(se.sampleId)||null;if(V&&!ae)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let Oe=Vh("surface_reaction",{target:se.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!V}),Ee=Da(Oe,E,{planId:"surface-reaction-"+ ++c});if(Ee.stopped||!Ee.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};R();try{i.selectSample(se.sampleId),N(ae)}catch{try{T()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let Ve={id:Ee.planId,sampleId:se.sampleId,touch:U,withVoice:!!V},X=++u;m=Ve,d=null,h=!!V,V&&(r(),t.currentTime=0,s(!0));let Z=b.dispatch(Oe,E,Ee);if(!Z.accepted)return m=null,h=!1,s(!1),{...Z,handled:!1};if(S("started",Ve),!V)return{...Z,handled:!0};try{return await t.play(),X!==u?{accepted:!1,handled:!0,reason:"superseded"}:{...Z,handled:!0}}catch{return X===u&&(R("audio-play-failed"),l="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function D(U){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};R();try{let V=i.selectSample(U);return n&&N(n(U)),i.startAsStandby&&T(),{accepted:!0,...V}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function F(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(l==="standby-preview"&&R(),b.activeCount||h)return{accepted:!1,reason:"sample-busy"};let U=++u;r(),t.currentTime=0,d=null,h=!0,s(!0);let V=w();try{return await t.play(),U!==u?{accepted:!1,reason:"superseded"}:V}catch{return U===u&&(R("audio-play-failed"),l="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let k=()=>{h&&_(0)},Y=()=>{h&&(R("audio-error"),l="audio-failed")};function N(U){if(U&&(!Number.isFinite(U.duration)||U.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",k),t?.removeEventListener("error",Y),t=U||null,d=null,t?.addEventListener("ended",k),t?.addEventListener("error",Y)}return N(t),{bus:b,capability:E,dispatchSurfaceTouch:P,selectSample:D,setLocalActionsEnabled:I,dispatchSemantic:O,playArmPreview:L,playSample:w,playWithVoice:F,tick:_,stop:R,enterStandby:T,setStandbyAfterSample:U=>f=!!U,snapshot:()=>({localReaction:x?{...x,touch:void 0}:null,sampleDuration:i.duration,status:l,active:b.activeCount,voiceMode:h,standbyAfterSample:f,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!d,originalInteractionVerified:!1})}}async function XM(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Rm(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>8||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(h=>h.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>XM(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}var Cm=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function Im(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(d,m){let x=/^(surface_\d+):(\d+)$/.exec(d);return!!x&&!!wr({mesh:x[1],triangle:Number(x[2]),alphaVerified:!0},{[d]:m})}for(let[d,m]of Object.entries(i||{})){if(t.size>=e)break;a(d,m)&&t.set(d,typeof m=="object"?Object.freeze({...m}):m)}function o(d,m){m===void 0?t.delete(d):t.set(d,m)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(d,m){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(m!==void 0&&!a(d,m))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(m!==void 0&&!t.has(d)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let x=t.get(d);if(Cm(x,m))return!1;m&&typeof m=="object"&&(m=Object.freeze({...m})),s.has(d)?s.get(d).after=m:s.set(d,{key:d,before:x,after:m});let g=s.get(d);return Cm(g.before,g.after)&&s.delete(d),o(d,m),!0}function u(){if(!s)return!1;let d=[...s.values()];return s=null,d.length?(n.push(d),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let d of s.values())o(d.key,d.before);s=null}}function f(d,m,x){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let g=d.pop();if(!g)return!1;for(let p of g)o(p.key,p[x]);return m.push(g),!0}return{begin:c,set:l,commit:u,cancel:h,undo:()=>f(n,r,"before"),redo:()=>f(r,n,"after"),get:d=>t.get(d),has:d=>t.has(d),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function Pm(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=Im(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),f=document.createElement("input");f.type="checkbox",f.id="snowSurfaceEdit",h.append(f,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let d=document.createElement("select");d.id="snowSurfaceRegion";for(let[N,U]of Object.entries(Ci))d.add(new Option(U,N));d.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(d);let m=document.createElement("label"),x=document.createElement("input");x.type="checkbox",x.id="snowSurfaceShow",m.append(x,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(m);let g=document.createElement("div");for(let[N,U]of Object.entries(Ci)){let V=document.createElement("span");V.textContent="\u25A0 "+U+" ",V.style.color="#"+Bh[N].toString(16).padStart(6,"0"),g.appendChild(V)}t.appendChild(g);let p=document.createElement("button"),M=document.createElement("button");p.id="snowSurfaceUndo",M.id="snowSurfaceRedo",p.textContent="\u64A4\u9500\u6807\u6CE8",M.textContent="\u91CD\u505A\u6807\u6CE8",t.append(p,M);let E=document.createElement("p");E.id="snowSurfaceOverlayInfo",t.appendChild(E);let y=document.createElement("p");y.id="snowSurfaceStatus",y.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u8499\u76AE\u6743\u91CD\u4FDD\u5B88\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(y);let S=null,b=0,w=!1,_=N=>{let U=Na(N);return wr(N,U?{[U]:l.get(U)}:{})};function T(){if(w)return;let N=l.state();p.disabled=!N.undo,M.disabled=!N.redo;let U=i.setSurfaceLabels?.(l.snapshot(),x.checked);E.textContent=x.checked?`\u5DF2\u663E\u793A ${U?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${U?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function R(){b||(b=requestAnimationFrame(()=>{b=0,T()}))}function L(){r(l.snapshot()),T()}function I(){if(!S)return;S.mode==="paint"&&l.cancel(),s.cancel();let N=S.id;S=null,e.hasPointerCapture(N)&&e.releasePointerCapture(N),T()}f.onchange=()=>{I(),f.checked&&(x.checked=!0),T()},d.onchange=I,x.onchange=T,p.onclick=()=>{I(),l.undo()&&(L(),y.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},M.onclick=()=>{I(),l.redo()&&(L(),y.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")};function O(N){let U=Na(N);!U||!N.alphaVerified||(l.set(U,S.region||void 0),R(),y.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${Ci[S.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function P(N){if(S||e.dataset.snowbreakFrameEdit==="true"||!f.checked&&!o())return;N.stopPropagation();let U=i.pickSurface(N.clientX,N.clientY);if(S={id:N.pointerId,mode:f.checked?"paint":"touch",region:d.value},e.setPointerCapture(N.pointerId),S.mode==="paint"){l.begin();try{O(U)}catch(V){y.textContent=V.message}}else{let V=_(U);i.senseTouch?.(U,V),V?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:V,source:"skinned-surface"}),S.known=!0,S.hit=U):U?.alphaVerified?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),S.known=!0,S.hit=U):y.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function D(N){if(S?.id===N.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){I();return}if(N.stopPropagation(),S.mode==="paint")try{O(i.pickSurface(N.clientX,N.clientY))}catch(U){y.textContent=U.message}else S.known&&s.move({pointerId:N.pointerId,x:N.clientX,y:N.clientY})}}function F(N){if(S?.id!==N.pointerId)return;N.stopPropagation();let U=S;if(S=null,U.mode==="paint")l.commit()&&L(),y.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(U.known&&o()){let V=s.finish({pointerId:N.pointerId,x:N.clientX,y:N.clientY});V&&(V.surface=U.hit,y.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+V.regionLabel,a(V))}else s.cancel();e.hasPointerCapture(N.pointerId)&&e.releasePointerCapture(N.pointerId)}function k(N){S?.id===N.pointerId&&I()}for(let[N,U]of[["pointerdown",P],["pointermove",D],["pointerup",F],["pointercancel",k]])e.addEventListener(N,U);function Y(N){if(!Array.isArray(N)||N.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");I(),l.begin();let U=0;try{for(let V of N){let se=Na(V.hit);if(!se||!V.hit.alphaVerified||l.has(se)||l.state().count>=3e4)continue;let ae={id:V.id,source:"vision-reviewed",confidence:V.confidence,model:String(V.model||"").slice(0,128),visible:!0};wr(V.hit,{[se]:ae})&&(l.set(se,ae),U++)}l.commit()&&L()}catch(V){throw l.cancel(),T(),V}return y.textContent=`\u5DF2\u91C7\u7528 ${U} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,U}return T(),{applyReviewed:Y,classify:_,state:l.state,dispose(){I(),w=!0,b&&cancelAnimationFrame(b);for(let[N,U]of[["pointerdown",P],["pointermove",D],["pointerup",F],["pointercancel",k]])e.removeEventListener(N,U)}}}var vt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),Nm=[vt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),vt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),vt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),vt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),vt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),vt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),vt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),vt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),vt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),vt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),vt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),vt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),vt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),vt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),vt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),vt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),vt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),vt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),vt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),vt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),vt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),vt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),vt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),vt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),vt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),vt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),vt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),vt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),vt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Lm=Object.freeze(Object.fromEntries(Nm.map(i=>[i.id,Object.freeze({...i})]))),E1=Object.freeze(Nm.map(i=>i.id));function Dm(i){return Lm[i]&&Lm[i].label||String(i||"\u8EAB\u4F53")}var qM="body-touch/1",YM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function Um(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...YM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(p){a=String(p||"")}function l(p){o=String(p||"screen")}function u(p){return p?(n={pointerId:p.pointerId,x0:Number(p.x)||0,y0:Number(p.y)||0,x:Number(p.x)||0,y:Number(p.y)||0,t0:e(),path:[[Number(p.x)||0,Number(p.y)||0]],region:p.region||null,confidence:Number(p.confidence)||0,source:p.source||o},{...n}):null}function h(p){if(!n||!p)return null;let M=Number(p.x)||0,E=Number(p.y)||0;return n.x=M,n.y=E,n.path.length<t.maxPath&&n.path.push([M,E]),{x:M,y:E,moved:Math.hypot(M-n.x0,E-n.y0)}}function f(){let p=0;for(let M=1;M<n.path.length;M++)p+=Math.hypot(n.path[M][0]-n.path[M-1][0],n.path[M][1]-n.path[M-1][1]);return{length:p,points:n.path.length}}function d(p,M){if(!n)return null;p&&h(p);let E=e(),y=Math.max(0,E-n.t0),S=n.x-n.x0,b=n.y-n.y0,w=Math.hypot(S,b),_=f(),T=M||"";if(!T)if(y>=t.longMinMs&&w<=t.moveTolerancePx)T="long_press";else if(w>=t.strokeMinPx&&y>=t.strokeMinMs&&_.length>=t.strokeMinPx)T="stroke";else if(w<=t.moveTolerancePx&&y<=t.tapMaxMs){let P=n.region&&(n.region.id||n.region)||"body";r&&E-r.at<=t.doubleGapMs&&r.region===P?(T="double_tap",r=null):(T="tap",r={at:E,region:P})}else T="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},L=typeof R=="string"?R:R.id||"body";s.push({at:E,region:L}),s=s.filter(P=>E-P.at<=t.frequencyWindowMs);let I=s.filter(P=>P.region===L).length,O={schema:qM,type:"body_touch",modelId:a,region:L,regionLabel:R.label||Dm(L),side:R.side||"",group:R.group||"",gesture:T,durationMs:Math.round(y),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:I,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+b.toFixed(1)},distance:+w.toFixed(1),pathLength:+_.length.toFixed(1),at:Math.round(E)};return n=null,O}function m(){n=null}function x(){n=null,r=null,s=[]}function g(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:d,cancel:m,reset:x,state:g,setModelId:c,setSource:l,config:t}}var Wh=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),Hh=Object.freeze({...Wh,scale:3,x:-.12,y:-.02});function Gh(i){return i&&Object.keys(Wh).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function Fm(i,e,t,{onEditing:n=()=>{},initialFrame:r=Hh}={}){let s;try{s=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(Gh(s)?s:Gh(r)?r:Hh);let a=document.createElement("section");a.id="presentationEditor",a.hidden=!0,a.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let o=document.createElement("button");o.id="finishPresentation",o.textContent="\u5B8C\u6210\u5C55\u793A\u8C03\u6574",o.hidden=!0,o.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(a,o);let c=!1,l=null,u=0,h=null,f=null,d=new Map,m=new Map,x=document.createElement("select");x.id="presentationDragMode",x.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),x.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let g=document.createElement("div");g.textContent="\u5C55\u793A\u7F16\u8F91",a.append(g,x);let p=(O,P,D)=>{let F=document.createElement("button");return F.textContent=O,F.id=P,F.onclick=D,a.append(F),F};function M(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let O=i.frameState();for(let[P,D]of m)D.value=O[P]}function y(O){i.setFrame({...i.frameState(),...O}),E()}function S(){u=0,h&&(y(h),h=null)}function b(O){h={...h||{},...O},u||(u=requestAnimationFrame(S))}function w(O){u&&(cancelAnimationFrame(u),S()),!O&&l&&y(l),M(),c=!1,a.hidden=!0,o.hidden=!0,d.clear(),f=null,e.dataset.snowbreakFrameEdit="false",n(!1)}p("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{y(Gh(r)?r:Hh),M()}),p("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{y(Wh),M()}),p("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{a.hidden=!0,o.hidden=!1}),p("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>w(!0)),p("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>w(!1)),o.onclick=()=>w(!0);for(let[O,P,D,F,k]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]){let Y=document.createElement("label");Y.textContent=P;let N=document.createElement("input");N.type="range",N.min=D,N.max=F,N.step=k,N.id="presentation_"+O,N.style.width="100%",N.oninput=()=>b({[O]:Number(N.value)}),N.onchange=()=>{S(),M()},m.set(O,N),Y.append(N),a.append(Y)}let _=O=>({x:O.clientX,y:O.clientY});function T(O){c&&(O.preventDefault(),O.stopImmediatePropagation(),d.set(O.pointerId,_(O)),e.setPointerCapture(O.pointerId),f={frame:i.frameState(),points:[...d.values()]})}function R(O){if(!c||!d.has(O.pointerId)||!f)return;O.preventDefault(),O.stopImmediatePropagation(),d.set(O.pointerId,_(O));let P=[...d.values()],D=f.points,F=f.frame;if(P.length>=2&&D.length>=2){let k=Y=>Math.hypot(Y[0].x-Y[1].x,Y[0].y-Y[1].y);b({scale:F.scale*k(P)/Math.max(5,k(D))})}else if(P.length===1&&D.length===1){let k=(P[0].x-D[0].x)/e.clientWidth,Y=(P[0].y-D[0].y)/e.clientHeight;b(x.value==="rotate"?{yaw:F.yaw+k*300,pitch:F.pitch+Y*100}:{x:F.x+k,y:F.y+Y})}}function L(O){!c||!d.has(O.pointerId)||(O.preventDefault(),O.stopImmediatePropagation(),d.delete(O.pointerId),e.hasPointerCapture(O.pointerId)&&e.releasePointerCapture(O.pointerId),u&&(cancelAnimationFrame(u),S()),M(),f={frame:i.frameState(),points:[...d.values()]})}let I=[["pointerdown",T],["pointermove",R],["pointerup",L],["pointercancel",L]];for(let[O,P]of I)e.addEventListener(O,P,!0);return{get active(){return c},toggle(){if(c){w(!0);return}c=!0,l=i.frameState(),E(),a.hidden=!1,o.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{c&&w(!0)},dispose(){c&&w(!0);for(let[O,P]of I)e.removeEventListener(O,P,!0);a.remove(),o.remove()},state:()=>i.frameState()}}var km=!0,ui=document.querySelector("#stage"),Om=document.querySelector("#status"),Ii=document.querySelector("#editor"),Er=null,Ua=0,Kh="",qh,ft,bt,Ns,tc,ci,Fa,Ft,ec=0,qn=!1,Yh=!0,hi=document.createElement("button");hi.id="finishPaint";hi.hidden=!0;hi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(hi);function Ds(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),hi.hidden=!0,Ii.classList.remove("open")}hi.onclick=Ds;var Pi=i=>{let e={...i,nonce:Kh};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},Xh=i=>{Om.textContent=i,Om.hidden=!i};function nc(){Ft=null,hi.hidden=!0,ci?.dispose(),Fa?.dispose(),tc?.dispose(),bt?.stop("renderer-close"),Ns?.dispose(),ft?.dispose(),qh?.dispose(),Fa=ci=tc=bt=Ns=ft=qh=null,Ii.replaceChildren()}async function Bm(i,e,t){let n=++Ua;Kh=e,qn=!1,ui.dataset.snowbreakPaused="false",nc(),Xh("\u6B63\u5728\u52A0\u8F7D\u6069\u96C5\u548C\u75C5\u623F\u2026");let r,s,a;try{if(t){if(!Er)throw new Error("\u8BF7\u5148\u5BFC\u5165\u6069\u96C5\u6574\u5408\u5305");r=await Er.selectVariant(t)}else{Er=null;let m=await fetch(i);if(!m.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await Jf(new Uint8Array(await m.arrayBuffer()))}if(r.manifest.characterId!=="Enya")throw new Error("\u6B64\u5165\u53E3\u5F53\u524D\u53EA\u652F\u6301\u6069\u96C5\u62A4\u58EB\u5305");if(s=await Mm(ui,r.runtime),a=r.runtime.getAsset("voiceCatalog")?await Rm(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==Ua){s.dispose(),a.dispose(),r.runtime.dispose();return}Er=r.variants.length?r:null,r.selection&&localStorage.setItem("enya-collection-selection",r.selection.id),qh=r.runtime,ft=s,Ns=a;let o=ft.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,bt=Am(ft,{audioForSample:m=>Ns.getAudio(m)}),ft.showFaceCandidate(!0),bt.enterStandby(),ft.faceViewer(),ec=performance.now(),ci=Fm(ft,ui,"presentation:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId),{initialFrame:ft.presentationDefault,onEditing:m=>{m?(bt.stop("presentation-edit"),Ds()):qn||bt.enterStandby()}}),Fa=af(ft,"lighting:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId));let c="";ft.setFrameHandler(()=>{let m=performance.now();if(qn||bt.tick(Math.min(100,Math.max(0,m-ec))),ec=m,!qn&&Ft){let p=(m-Ft.start)/1e3,M=Math.min(Ft.duration,Ft.stop===void 0?1/0:(Ft.stop-Ft.start)/1e3+.3);if(p>=M)Ft=null;else{let E=Math.max(0,Math.min(1,p/.3,(M-p)/.3)),y=E*E*(3-2*E);ft.applyLearnedMotion(Ft.id,p,y)}}let x=bt.snapshot(),g=Ft?"learned:"+Ft.id:x.status;g!==c&&(c=g,Pi({type:"playback",active:!!Ft||["playing","local-arm-preview"].includes(x.status),status:g}))});let l=r.manifest.resources.filter(m=>m.kind==="geometry").map(m=>m.assetId).join("-"),u="surface:"+r.manifest.skinId+":"+l;tc=Pm(ft,ui,Ii,{load:()=>JSON.parse(localStorage.getItem(u)||"{}"),save:m=>localStorage.setItem(u,JSON.stringify(m)),tracker:Um({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!qn,onEvent:async m=>{Pi({type:"touch",region:m.region,label:m.regionLabel,gesture:m.gesture,confidence:m.confidence,source:m.regionSource,durationMs:m.durationMs,frequency:m.frequency,completed:!0}),km||await bt.dispatchSurfaceTouch(m,{withVoice:Yh})}});let h=document.createElement("button");h.textContent="\u5173\u95ED\u5DE5\u5177",h.onclick=Ds,Ii.prepend(h);let f=Ii.querySelector("#snowSurfaceRegion"),d=Ii.querySelector("#snowSurfaceEdit");d.addEventListener("change",()=>{d.checked&&(Ii.classList.remove("open"),hi.textContent="\u5B8C\u6210"+f.selectedOptions[0].textContent+"\u6807\u6CE8",hi.hidden=!1)}),Xh(""),Pi({type:"ready",bodyActions:ft.embodiment.snapshot().available,selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:ft.sampleOptions().map(m=>m.id),voices:Ns.snapshot().available,learned:ft.learnedOptions().map(m=>m.id)}),window.__snowbreakMigration={display:ft,adapter:bt,editor:tc,presentation:ci,manifest:r.manifest}}catch(o){if(n!==Ua){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}nc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),Xh("\u6069\u96C5\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),Pi({type:"error",message:String(o.message||o)})}}async function ZM(i){if(i.type==="dispose"){Ua++,nc();return}if(i.type==="load")return Bm(i.url,i.nonce);if(i.type==="variant")return Er?.variants.some(e=>e.id===i.id)?Bm(null,Kh,i.id):void 0;if(bt){if(i.type==="body"){if(qn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Ft=null,bt.stop("body-command"),bt.enterStandby(),ft.embodiment.command(i.id),await new Promise(e=>setTimeout(e,750)),Pi({type:"selfState",state:Zh(),requestId:i.requestId});return}if(i.type==="gesture"){if(qn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Ft=null,bt.stop("ai-gesture"),bt.enterStandby(),ft.embodiment.playGesture(i.id,i.plan),Pi({type:"selfState",state:Zh()});return}if(i.type==="touchPolicy"){km=!!i.aiControlled;return}if(i.type==="gaze"){ft.setGaze(i.x,i.y);return}if(i.type==="pause"){ft.embodiment.reset(),ft.resetSenses(),Ft=null,qn=!0,Fa?.close(),ci?.close(),ui.dataset.snowbreakPaused="true",bt.stop("background"),Ds();return}if(i.type==="resume"){qn=!1,ui.dataset.snowbreakPaused="false",ec=performance.now(),bt.enterStandby();return}if(i.type==="stop"){if(ft.embodiment.reset(),Ft){Ft.stop=performance.now();return}bt.stop(),bt.enterStandby();return}if(i.type==="edit"){Ft=null,ci.close(),Ii.classList.contains("open")||!hi.hidden?Ds():Ii.classList.add("open");return}if(i.type==="lightingEdit"){ci.close(),Ds(),Fa.toggle();return}if(i.type==="frameEdit"){Ft=null,ci.toggle();return}if(i.type==="scene")return ft.setSceneVisible(!!i.visible);if(i.type==="room")return ft.setRoomVisible(!!i.visible);if(i.type==="voice"){Yh=!!i.enabled,Yh||(bt.stop("voice-disabled"),bt.enterStandby());return}if(i.type==="sample"&&ft.sampleOptions().some(e=>e.id===i.id)&&(ft.embodiment.releaseHands(),Ft=null,ci.close(),qn=!1,bt.stop(),bt.selectSample(i.id),bt.setStandbyAfterSample(!0),(i.withVoice&&Ns.getAudio(i.id)?await bt.playWithVoice():bt.playSample()).accepted||Pi({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})),i.type==="learned"){ft.embodiment.releaseHands();let e=ft.learnedOptions().find(t=>t.id===i.id);if(!e)return;ci.close(),bt.stop("learned-motion"),bt.enterStandby(),Ft={id:e.id,duration:e.duration,start:performance.now()}}}}function Zh(){return ft?{...ft.embodiment.snapshot(),outfit:Er?.selection?.outfit||"unknown",mode:Er?.selection?.mode||"unknown"}:null}function KM(){if(!ft||qn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ui.width,ui.height);i.width=Math.round(ui.width*e),i.height=Math.round(ui.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),ft.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:Zh,portrait:KM,receive:i=>{ZM(i).catch(e=>Pi({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{Ua++,nc()});Pi({type:"pageReady"});})();
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
