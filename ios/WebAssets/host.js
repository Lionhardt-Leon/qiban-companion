(()=>{var jm=Object.defineProperty;var Qm=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var eg=(i,e)=>{for(var t in e)jm(i,t,{get:e[t],enumerable:!0})};var nd={};eg(nd,{AsyncCompress:()=>lg,AsyncDecompress:()=>fg,AsyncDeflate:()=>Gf,AsyncGunzip:()=>Xf,AsyncGzip:()=>lg,AsyncInflate:()=>Dc,AsyncUnzipInflate:()=>Sg,AsyncUnzlib:()=>Yf,AsyncZipDeflate:()=>_g,AsyncZlib:()=>ug,Compress:()=>bc,DecodeUTF8:()=>mg,Decompress:()=>Ec,Deflate:()=>Fn,EncodeUTF8:()=>gg,FlateErrorCode:()=>ag,Gunzip:()=>io,Gzip:()=>bc,Inflate:()=>mn,Unzip:()=>wg,UnzipInflate:()=>Mg,UnzipPassThrough:()=>td,Unzlib:()=>so,Zip:()=>yg,ZipDeflate:()=>xg,ZipPassThrough:()=>Ys,Zlib:()=>Sc,compress:()=>cg,compressSync:()=>Mc,decompress:()=>dg,decompressSync:()=>pg,deflate:()=>Wf,deflateSync:()=>Js,gunzip:()=>qf,gunzipSync:()=>ro,gzip:()=>cg,gzipSync:()=>Mc,inflate:()=>Fc,inflateSync:()=>Jr,strFromU8:()=>Bc,strToU8:()=>Wi,unzip:()=>Eg,unzipSync:()=>Tg,unzlib:()=>Zf,unzlibSync:()=>ao,zip:()=>vg,zipSync:()=>bg,zlib:()=>hg,zlibSync:()=>wc});function cr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function Wf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Zr],function(n){return Xi(Js(n.data[0],n.data[1]))},0,t)}function Js(i,e){return lr(i,e||{},0,0)}function Fc(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Yr],function(n){return Xi(Jr(n.data[0],Cc(n.data[1])))},1,t)}function Jr(i,e){return Ks(i,{i:2},e&&e.out,e&&e.dictionary)}function cg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Zr,Bf,function(){return[Mc]}],function(n){return Xi(Mc(n.data[0],n.data[1]))},2,t)}function Mc(i,e){e||(e={});var t=qr(),n=i.length;t.p(i);var r=lr(i,e,Lc(e),8),s=r.length;return Ic(r,e),_t(r,s-8,t.d()),_t(r,s-4,n),r}function qf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Yr,kf,function(){return[ro]}],function(n){return Xi(ro(n.data[0],n.data[1]))},3,t)}function ro(i,e){var t=Pc(i);return t+8>i.length&&qe(6,"invalid gzip data"),Ks(i.subarray(t,-8),{i:2},e&&e.out||new ot(Vf(i)),e&&e.dictionary)}function hg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Zr,zf,function(){return[wc]}],function(n){return Xi(wc(n.data[0],n.data[1]))},4,t)}function wc(i,e){e||(e={});var t=lo();t.p(i);var n=lr(i,e,e.dictionary?6:2,4);return Nc(n,e),_t(n,n.length-4,t.d()),n}function Zf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),Kr(i,e,[Yr,Hf,function(){return[ao]}],function(n){return Xi(ao(n.data[0],Cc(n.data[1])))},5,t)}function ao(i,e){return Ks(i.subarray(Uc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function dg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&qe(7),i[0]==31&&i[1]==139&&i[2]==8?qf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Fc(i,e,t):Zf(i,e,t)}function pg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?ro(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Jr(i,e):ao(i,e)}function Wi(i,e){if(e){for(var t=new ot(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(wf)return wf.encode(i);for(var r=i.length,s=new ot(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new ot(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Dn(s,0,a)}function Bc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Tc)return Tc.decode(i);var r=$f(i),s=r.s,t=r.r;return t.length&&qe(8),s}}function vg(i,e,t){t||(t=e,e={}),typeof t!="function"&&qe(7);var n={};Oc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},f=function(m,d){oo(function(){t(m,d)})};oo(function(){f=t});var p=function(){var m=new ot(o+22),d=a,v=o-a;o=0;for(var b=0;b<c;++b){var y=l[b];try{var M=y.c.length;Vr(m,o,y,y.f,y.u,M);var S=30+y.f.length+Gi(y.extra),E=o+S;m.set(y.c,E),Vr(m,a,y,y.f,y.u,M,o,y.m),a+=16+S+(y.m?y.m.length:0),o=E+M}catch(x){return f(x,null)}}kc(m,a,l.length,v,d),f(null,m)};s||p();for(var g=function(m){var d=r[m],v=n[d],b=v[0],y=v[1],M=qr(),S=b.length;M.p(b);var E=Wi(d),x=E.length,T=y.comment,C=T&&Wi(T),N=C&&C.length,k=Gi(y.extra),H=y.level==0?0:8,I=function(B,U){if(B)h(),f(B,null);else{var L=U.length;l[m]=$s(y,{size:S,crc:M.d(),c:U,f:E,m:C,u:x!=d.length||C&&T.length!=N,compression:H}),a+=30+x+k+L,o+=76+2*(x+k)+(N||0)+L,--s||p()}};if(x>65535&&I(qe(11,0,1),null),!H)I(null,b);else if(S<16e4)try{I(null,Js(b,y))}catch(B){I(B,null)}else u.push(Wf(b,y,I))},_=0;_<c;++_)g(_);return h}function bg(i,e){e||(e={});var t={},n=[];Oc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=Wi(a),f=h.length,p=l.comment,g=p&&Wi(p),_=g&&g.length,m=Gi(l.extra);f>65535&&qe(11);var d=u?Js(c,l):c,v=d.length,b=qr();b.p(c),n.push($s(l,{size:c.length,crc:b.d(),c:d,f:h,m:g,u:f!=a.length||g&&p.length!=_,o:r,compression:u})),r+=30+f+m+v,s+=76+2*(f+m)+(_||0)+v}for(var y=new ot(s+22),M=r,S=s-r,E=0;E<n.length;++E){var h=n[E];Vr(y,h.o,h,h.f,h.u,h.c.length);var x=30+h.f.length+Gi(h.extra);y.set(h.c,h.o+x),Vr(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+x+(h.m?h.m.length:0)}return kc(y,r,n.length,S,M),y}function Eg(i,e,t){t||(t=e,e={}),typeof t!="function"&&qe(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,d){oo(function(){t(m,d)})};oo(function(){a=t});for(var o=i.length-22;Bt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(qe(13,0,1),null),r;var c=ln(i,o+8);if(c){var l=c,u=Bt(i,o+16),h=u==4294967295||l==65535;if(h){var f=Bt(i,o-12);h=Bt(i,f)==101075792,h&&(l=c=Bt(i,f+32),u=Bt(i,f+48))}for(var p=e&&e.filter,g=function(m){var d=Qf(i,u,h),v=d[0],b=d[1],y=d[2],M=d[3],S=d[4],E=d[5],x=jf(i,E);u=S;var T=function(N,k){N?(r(),a(N,null)):(k&&(s[M]=k),--c||a(null,s))};if(!p||p({name:M,size:b,originalSize:y,compression:v}))if(!v)T(null,Dn(i,x,x+b));else if(v==8){var C=i.subarray(x,x+b);if(y<524288||b>.8*y)try{T(null,Jr(C,{out:new ot(y)}))}catch(N){T(N,null)}else n.push(Fc(C,{size:y},T))}else T(qe(14,"unknown compression type "+v,1),null);else T(null,null)},_=0;_<l;++_)g(_)}else a(null,{});return r}function Tg(i,e){for(var t={},n=i.length-22;Bt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&qe(13);var r=ln(i,n+8);if(!r)return{};var s=Bt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Bt(i,n-12);a=Bt(i,o)==101075792,a&&(r=Bt(i,o+32),s=Bt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=Qf(i,s,a),h=u[0],f=u[1],p=u[2],g=u[3],_=u[4],m=u[5],d=jf(i,m);s=_,(!c||c({name:g,size:f,originalSize:p,compression:h}))&&(h?h==8?t[g]=Jr(i.subarray(d,d+f),{out:new ot(p)}):qe(14,"unknown compression type "+h):t[g]=Dn(i,d,d+f))}return t}var Mf,sg,ot,cn,Zs,Gr,Wr,Xs,Ef,Tf,Ac,to,Af,Rf,_c,qs,vi,yt,Un,bi,yt,yt,yt,yt,Hr,yt,Cf,If,Pf,Lf,ja,Nn,Qa,Xr,Dn,ag,Nf,qe,Ks,si,kr,eo,no,yc,zr,Rc,vc,Uf,Vi,Df,Ff,qr,lo,lr,$s,Sf,Ja,og,Of,Yr,Zr,Bf,kf,zf,Hf,Xi,Cc,Kr,On,$r,ln,Bt,xc,_t,Ic,Pc,Vf,Lc,Nc,Uc,Fn,Gf,mn,Dc,bc,lg,io,Xf,Sc,ug,so,Yf,Ec,fg,Oc,wf,Tc,Kf,$f,mg,gg,Jf,jf,Qf,ed,Gi,Vr,kc,Ys,xg,_g,yg,td,Mg,Sg,wg,oo,id=Qm(()=>{Mf={},sg=(function(i,e,t,n,r){var s=new Worker(Mf[e]||(Mf[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),ot=Uint8Array,cn=Uint16Array,Zs=Int32Array,Gr=new ot([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wr=new ot([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xs=new ot([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ef=function(i,e){for(var t=new cn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Zs(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Tf=Ef(Gr,2),Ac=Tf.b,to=Tf.r;Ac[28]=258,to[258]=28;Af=Ef(Wr,0),Rf=Af.b,_c=Af.r,qs=new cn(32768);for(yt=0;yt<32768;++yt)vi=(yt&43690)>>1|(yt&21845)<<1,vi=(vi&52428)>>2|(vi&13107)<<2,vi=(vi&61680)>>4|(vi&3855)<<4,qs[yt]=((vi&65280)>>8|(vi&255)<<8)>>1;Un=(function(i,e,t){for(var n=i.length,r=0,s=new cn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new cn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new cn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[qs[h]>>c]=l}else for(o=new cn(n),r=0;r<n;++r)i[r]&&(o[r]=qs[a[i[r]-1]++]>>15-i[r]);return o}),bi=new ot(288);for(yt=0;yt<144;++yt)bi[yt]=8;for(yt=144;yt<256;++yt)bi[yt]=9;for(yt=256;yt<280;++yt)bi[yt]=7;for(yt=280;yt<288;++yt)bi[yt]=8;Hr=new ot(32);for(yt=0;yt<32;++yt)Hr[yt]=5;Cf=Un(bi,9,0),If=Un(bi,9,1),Pf=Un(Hr,5,0),Lf=Un(Hr,5,1),ja=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Nn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Qa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Xr=function(i){return(i+7)/8|0},Dn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ot(i.subarray(e,t))},ag={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Nf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qe=function(i,e,t){var n=new Error(e||Nf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,qe),!t)throw n;return n},Ks=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ot(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new ot(r*3));var l=function(ae){var ge=t.length;if(ae>ge){var we=new ot(Math.max(ge*2,ae));we.set(t),t=we}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,g=e.d,_=e.m,m=e.n,d=r*8;do{if(!p){u=Nn(i,h,1);var v=Nn(i,h+1,3);if(h+=3,v)if(v==1)p=If,g=Lf,_=9,m=5;else if(v==2){var S=Nn(i,h,31)+257,E=Nn(i,h+10,15)+4,x=S+Nn(i,h+5,31)+1;h+=14;for(var T=new ot(x),C=new ot(19),N=0;N<E;++N)C[Xs[N]]=Nn(i,h+N*3,7);h+=E*3;for(var k=ja(C),H=(1<<k)-1,I=Un(C,k,1),N=0;N<x;){var B=I[Nn(i,h,H)];h+=B&15;var b=B>>4;if(b<16)T[N++]=b;else{var U=0,L=0;for(b==16?(L=3+Nn(i,h,3),h+=2,U=T[N-1]):b==17?(L=3+Nn(i,h,7),h+=3):b==18&&(L=11+Nn(i,h,127),h+=7);L--;)T[N++]=U}}var Y=T.subarray(0,S),O=T.subarray(S);_=ja(Y),m=ja(O),p=Un(Y,_,1),g=Un(O,m,1)}else qe(1);else{var b=Xr(h)+4,y=i[b-4]|i[b-3]<<8,M=b+y;if(M>r){c&&qe(0);break}o&&l(f+y),t.set(i.subarray(b,M),f),e.b=f+=y,e.p=h=M*8,e.f=u;continue}if(h>d){c&&qe(0);break}}o&&l(f+131072);for(var R=(1<<_)-1,F=(1<<m)-1,$=h;;$=h){var U=p[Qa(i,h)&R],K=U>>4;if(h+=U&15,h>d){c&&qe(0);break}if(U||qe(2),K<256)t[f++]=K;else if(K==256){$=h,p=null;break}else{var G=K-254;if(K>264){var N=K-257,J=Gr[N];G=Nn(i,h,(1<<J)-1)+Ac[N],h+=J}var le=g[Qa(i,h)&F],V=le>>4;le||qe(3),h+=le&15;var O=Rf[V];if(V>3){var J=Wr[V];O+=Qa(i,h)&(1<<J)-1,h+=J}if(h>d){c&&qe(0);break}o&&l(f+131072);var j=f+G;if(f<O){var te=s-O,fe=Math.min(O,j);for(te+f<0&&qe(3);f<fe;++f)t[f]=n[te+f]}for(;f<j;++f)t[f]=t[f-O]}}e.l=p,e.p=$,e.b=f,e.f=u,p&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return f!=t.length&&a?Dn(t,0,f):t.subarray(0,f)},si=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},kr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},eo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Vi,l:0};if(r==1){var a=new ot(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(M,S){return M.f-S.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var p=new cn(f+1),g=no(t[u-1],p,0);if(g>e){var n=0,_=0,m=g-e,d=1<<m;for(s.sort(function(S,E){return p[E.s]-p[S.s]||S.f-E.f});n<r;++n){var v=s[n].s;if(p[v]>e)_+=d-(1<<g-p[v]),p[v]=e;else break}for(_>>=m;_>0;){var b=s[n].s;p[b]<e?_-=1<<e-p[b]++-1:++n}for(;n>=0&&_;--n){var y=s[n].s;p[y]==e&&(--p[y],++_)}g=e}return{t:new ot(p),l:g}},no=function(i,e,t){return i.s==-1?Math.max(no(i.l,e,t+1),no(i.r,e,t+1)):e[i.s]=t},yc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new cn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},zr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Rc=function(i,e,t){var n=t.length,r=Xr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},vc=function(i,e,t,n,r,s,a,o,c,l,u){si(e,u++,t),++r[256];for(var h=eo(r,15),f=h.t,p=h.l,g=eo(s,15),_=g.t,m=g.l,d=yc(f),v=d.c,b=d.n,y=yc(_),M=y.c,S=y.n,E=new cn(19),x=0;x<v.length;++x)++E[v[x]&31];for(var x=0;x<M.length;++x)++E[M[x]&31];for(var T=eo(E,7),C=T.t,N=T.l,k=19;k>4&&!C[Xs[k-1]];--k);var H=l+5<<3,I=zr(r,bi)+zr(s,Hr)+a,B=zr(r,f)+zr(s,_)+a+14+3*k+zr(E,C)+2*E[16]+3*E[17]+7*E[18];if(c>=0&&H<=I&&H<=B)return Rc(e,u,i.subarray(c,c+l));var U,L,Y,O;if(si(e,u,1+(B<I)),u+=2,B<I){U=Un(f,p,0),L=f,Y=Un(_,m,0),O=_;var R=Un(C,N,0);si(e,u,b-257),si(e,u+5,S-1),si(e,u+10,k-4),u+=14;for(var x=0;x<k;++x)si(e,u+3*x,C[Xs[x]]);u+=3*k;for(var F=[v,M],$=0;$<2;++$)for(var K=F[$],x=0;x<K.length;++x){var G=K[x]&31;si(e,u,R[G]),u+=C[G],G>15&&(si(e,u,K[x]>>5&127),u+=K[x]>>12)}}else U=Cf,L=bi,Y=Pf,O=Hr;for(var x=0;x<o;++x){var J=n[x];if(J>255){var G=J>>18&31;kr(e,u,U[G+257]),u+=L[G+257],G>7&&(si(e,u,J>>23&31),u+=Gr[G]);var le=J&31;kr(e,u,Y[le]),u+=O[le],le>3&&(kr(e,u,J>>5&8191),u+=Wr[le])}else kr(e,u,U[J]),u+=L[J]}return kr(e,u,U[256]),u+L[256]},Uf=new Zs([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Vi=new ot(0),Df=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ot(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=Uf[e-1],f=h>>13,p=h&8191,g=(1<<t)-1,_=s.p||new cn(32768),m=s.h||new cn(g+1),d=Math.ceil(t/3),v=2*d,b=function(me){return(i[me]^i[me+1]<<d^i[me+2]<<v)&g},y=new Zs(25e3),M=new cn(288),S=new cn(32),E=0,x=0,T=s.i||0,C=0,N=s.w||0,k=0;T+2<a;++T){var H=b(T),I=T&32767,B=m[H];if(_[I]=B,m[H]=I,N<=T){var U=a-T;if((E>7e3||C>24576)&&(U>423||!l)){u=vc(i,c,0,y,M,S,x,C,k,T-k,u),C=E=x=0,k=T;for(var L=0;L<286;++L)M[L]=0;for(var L=0;L<30;++L)S[L]=0}var Y=2,O=0,R=p,F=I-B&32767;if(U>2&&H==b(T-F))for(var $=Math.min(f,U)-1,K=Math.min(32767,T),G=Math.min(258,U);F<=K&&--R&&I!=B;){if(i[T+Y]==i[T+Y-F]){for(var J=0;J<G&&i[T+J]==i[T+J-F];++J);if(J>Y){if(Y=J,O=F,J>$)break;for(var le=Math.min(F,J-2),V=0,L=0;L<le;++L){var j=T-F+L&32767,te=_[j],fe=j-te&32767;fe>V&&(V=fe,B=j)}}}I=B,B=_[I],F+=I-B&32767}if(O){y[C++]=268435456|to[Y]<<18|_c[O];var ae=to[Y]&31,ge=_c[O]&31;x+=Gr[ae]+Wr[ge],++M[257+ae],++S[ge],N=T+Y,++E}else y[C++]=i[T],++M[i[T]]}}for(T=Math.max(T,N);T<a;++T)y[C++]=i[T],++M[i[T]];u=vc(i,c,l,y,M,S,x,C,k,T-k,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=_,s.i=T,s.w=N)}else{for(var T=s.w||0;T<a+l;T+=65535){var we=T+65535;we>=a&&(c[u/8|0]=l,we=a),u=Rc(c,u+1,i.subarray(T,we))}s.i=a}return Dn(o,0,n+Xr(u)+r)},Ff=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),qr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Ff[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},lo=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},lr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ot(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Df(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},$s=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Sf=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var h in o.prototype)e+=";"+c+".prototype."+h+"="+o.prototype[h].toString()}else e+=l}else t[c]=o}return e},Ja=[],og=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Of=function(i,e,t,n){if(!Ja[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Sf(i[o],r,s);Ja[t]={c:Sf(i[a],r,s),e:s}}var c=$s({},Ja[t].e);return sg(Ja[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,og(c),n)},Yr=function(){return[ot,cn,Zs,Gr,Wr,Xs,Ac,Rf,If,Lf,qs,Nf,Un,ja,Nn,Qa,Xr,Dn,qe,Ks,Jr,Xi,Cc]},Zr=function(){return[ot,cn,Zs,Gr,Wr,Xs,to,_c,Cf,bi,Pf,Hr,qs,Uf,Vi,Un,si,kr,eo,no,yc,zr,Rc,vc,Xr,Dn,Df,lr,Js,Xi]},Bf=function(){return[Ic,Lc,_t,qr,Ff]},kf=function(){return[Pc,Vf]},zf=function(){return[Nc,_t,lo]},Hf=function(){return[Uc]},Xi=function(i){return postMessage(i,[i.buffer])},Cc=function(i){return i&&{out:i.size&&new ot(i.size),dictionary:i.dictionary}},Kr=function(i,e,t,n,r,s){var a=Of(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},On=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},$r=function(i,e,t,n,r,s,a){var o,c=Of(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||qe(5),o&&e.ondata(qe(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},ln=function(i,e){return i[e]|i[e+1]<<8},Bt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},xc=function(i,e){return Bt(i,e)+Bt(i,e+4)*4294967296},_t=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Ic=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&_t(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Pc=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&qe(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Vf=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Lc=function(i){return 10+(i.filename?i.filename.length+1:0)},Nc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=lo();r.p(e.dictionary),_t(i,2,r.d())}},Uc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&qe(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&qe(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Fn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ot(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(lr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||qe(5),this.s.l&&qe(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ot(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||qe(5),this.s.l&&qe(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),Gf=(function(){function i(e,t){$r([Zr,function(){return[On,Fn]}],this,cr.call(this,e,t),function(n){var r=new Fn(n.data);onmessage=On(r)},6,1)}return i})();mn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ot(32768),this.p=new ot(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||qe(5),this.d&&qe(4),!this.p.length)this.p=e;else if(e.length){var t=new ot(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=Ks(this.p,this.s,this.o);this.ondata(Dn(n,t,this.s.b),this.d),this.o=Dn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Dn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Dc=(function(){function i(e,t){$r([Yr,function(){return[On,mn]}],this,cr.call(this,e,t),function(n){var r=new mn(n.data);onmessage=On(r)},7,0)}return i})();bc=(function(){function i(e,t){this.c=qr(),this.l=0,this.v=1,Fn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Fn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=lr(e,this.o,this.v&&Lc(this.o),t&&8,this.s);this.v&&(Ic(n,this.o),this.v=0),t&&(_t(n,n.length-8,this.c.d()),_t(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Fn.prototype.flush.call(this)},i})(),lg=(function(){function i(e,t){$r([Zr,Bf,function(){return[On,Fn,bc]}],this,cr.call(this,e,t),function(n){var r=new bc(n.data);onmessage=On(r)},8,1)}return i})();io=(function(){function i(e,t){this.v=1,this.r=0,mn.call(this,e,t)}return i.prototype.push=function(e,t){if(mn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?Pc(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}mn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Xr(this.s.p)+9,this.s={i:0},this.o=new ot(0),this.push(new ot(0),t))},i})(),Xf=(function(){function i(e,t){var n=this;$r([Yr,kf,function(){return[On,mn,io]}],this,cr.call(this,e,t),function(r){var s=new io(r.data);s.onmember=function(a){return postMessage(a)},onmessage=On(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Sc=(function(){function i(e,t){this.c=lo(),this.v=1,Fn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Fn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=lr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Nc(n,this.o),this.v=0),t&&_t(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Fn.prototype.flush.call(this)},i})(),ug=(function(){function i(e,t){$r([Zr,zf,function(){return[On,Fn,Sc]}],this,cr.call(this,e,t),function(n){var r=new Sc(n.data);onmessage=On(r)},10,1)}return i})();so=(function(){function i(e,t){mn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(mn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Uc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&qe(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),mn.prototype.c.call(this,t)},i})(),Yf=(function(){function i(e,t){$r([Yr,Hf,function(){return[On,mn,so]}],this,cr.call(this,e,t),function(n){var r=new so(n.data);onmessage=On(r)},11,0)}return i})();Ec=(function(){function i(e,t){this.o=cr.call(this,e,t)||{},this.G=io,this.I=mn,this.Z=so}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||qe(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ot(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),fg=(function(){function i(e,t){Ec.call(this,e,t),this.queuedSize=0,this.G=Xf,this.I=Dc,this.Z=Yf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,Ec.prototype.push.call(this,e,t)},i})();Oc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=$s(n,s[1]),s=s[0]),s instanceof ot?t[a]=[s,o]:(t[a+="/"]=[new ot(0),o],Oc(s,a,t,n))}},wf=typeof TextEncoder<"u"&&new TextEncoder,Tc=typeof TextDecoder<"u"&&new TextDecoder,Kf=0;try{Tc.decode(Vi,{stream:!0}),Kf=1}catch{}$f=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Dn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},mg=(function(){function i(e){this.ondata=e,Kf?this.t=new TextDecoder:this.p=Vi}return i.prototype.push=function(e,t){if(this.ondata||qe(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&qe(8),this.t=null);return}this.p||qe(4);var n=new ot(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=$f(n),s=r.s,a=r.r;t?(a.length&&qe(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),gg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||qe(5),this.d&&qe(4),this.ondata(Wi(e),this.d=t||!1)},i})();Jf=function(i){return i==1?3:i<6?2:i==9?1:0},jf=function(i,e){return e+30+ln(i,e+26)+ln(i,e+28)},Qf=function(i,e,t){var n=ln(i,e+28),r=Bc(i.subarray(e+46,e+46+n),!(ln(i,e+8)&2048)),s=e+46+n,a=Bt(i,e+20),o=t&&a==4294967295?ed(i,s):[a,Bt(i,e+24),Bt(i,e+42)],c=o[0],l=o[1],u=o[2];return[ln(i,e+10),c,l,r,s+ln(i,e+30)+ln(i,e+32),u]},ed=function(i,e){for(;ln(i,e)!=1;e+=4+ln(i,e+2));return[xc(i,e+12),xc(i,e+4),xc(i,e+20)]},Gi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&qe(9),e+=n+4}return e},Vr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=Gi(l);_t(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&qe(10),_t(i,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(_t(i,e,t.crc),_t(i,e+4,s<0?-s-2:s),_t(i,e+8,t.size)),_t(i,e+12,c),_t(i,e+14,h),e+=16,a!=null&&(_t(i,e,u),_t(i,e+6,t.attrs),_t(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var g in l){var _=l[g],m=_.length;_t(i,e,+g),_t(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},kc=function(i,e,t,n,r){_t(i,e,101010256),_t(i,e+8,t),_t(i,e+10,t),_t(i,e+12,n),_t(i,e+16,r)},Ys=(function(){function i(e){this.filename=e,this.c=qr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||qe(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),xg=(function(){function i(e,t){var n=this;t||(t={}),Ys.call(this,e),this.d=new Fn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Jf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){Ys.prototype.push.call(this,e,t)},i})(),_g=(function(){function i(e,t){var n=this;t||(t={}),Ys.call(this,e),this.d=new Gf(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=Jf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){Ys.prototype.push.call(this,e,t)},i})(),yg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||qe(5),this.d&2)this.ondata(qe(4+(this.d&1)*8,0,1),null,!1);else{var n=Wi(e.filename),r=n.length,s=e.comment,a=s&&Wi(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Gi(e.extra)+30;r>65535&&this.ondata(qe(11,0,1),null,!1);var l=new ot(c);Vr(l,0,e,n,o,-1);var u=[l],h=function(){for(var m=0,d=u;m<d.length;m++){var v=d[m];t.ondata(null,v,!1)}u=[]},f=this.d;this.d=0;var p=this.u.length,g=$s(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var m=t.u[p+1];m?m.r():t.d=1}f=1}}),_=0;e.ondata=function(m,d,v){if(m)t.ondata(m,d,v),t.terminate();else if(_+=d.length,u.push(d),v){var b=new ot(16);_t(b,0,134695760),_t(b,4,e.crc),_t(b,8,_),_t(b,12,e.size),u.push(b),g.c=_,g.b=c+_+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(qe(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Gi(a.extra)+(a.o?a.o.length:0)}for(var o=new ot(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Vr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Gi(a.extra)+(a.o?a.o.length:0),t+=a.b}kc(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();td=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Mg=(function(){function i(){var e=this;this.i=new mn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Sg=(function(){function i(e,t){var n=this;t<32e4?this.i=new mn(function(r,s){n.ondata(null,r,s)}):(this.i=new Dc(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Dn(e,0)),this.i.push(e,t)},i.compression=8,i})(),wg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:td},this.p=Vi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||qe(5),this.p||qe(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ot(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,h=this.c,f=h&&this.d,p=function(){var d,v=Bt(l,o);if(v==67324752){a=1,c=o,g.d=null,g.c=0;var b=ln(l,o+6),y=ln(l,o+8),M=b&2048,S=b&8,E=ln(l,o+26),x=ln(l,o+28);if(u>o+30+E+x){var T=[];g.k.unshift(T),a=2;var C=Bt(l,o+18),N=Bt(l,o+22),k=Bc(l.subarray(o+30,o+=30+E),!M);C==4294967295?(d=S?[-2]:ed(l,o),C=d[0],N=d[1]):S&&(C=-1),o+=x,g.c=C;var H,I={name:k,compression:y,start:function(){if(I.ondata||qe(5),!C)I.ondata(null,Vi,!0);else{var B=n.o[y];B||I.ondata(qe(14,"unknown compression type "+y,1),null,!1),H=C<0?new B(k):new B(k,C,N),H.ondata=function(O,R,F){I.ondata(O,R,F)};for(var U=0,L=T;U<L.length;U++){var Y=L[U];H.push(Y,!1)}n.k[0]==T&&n.c?n.d=H:H.push(Vi,!0)}},terminate:function(){H&&H.terminate&&H.terminate()}};C>=0&&(I.size=C,I.originalSize=N),g.onfile(I)}return"break"}else if(h){if(v==134695760)return c=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(v==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var _=p();if(_==="break")break}if(this.p=Vi,h<0){var m=a?l.subarray(0,c-12-(h==-2&&8)-(Bt(l,c-16)==134695760&&4)):l.subarray(0,o);f?f.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&qe(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),oo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function Ka(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function hf(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=Ka(i,t),i.start=t,i.rate=e)}function ff(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,h,f){return Number.isFinite(l)?Math.max(u,Math.min(h,l)):f}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let h of Object.keys(r))r[h].input.value=t[h],r[h].output.textContent=t[h].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[h,f,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let _=document.createElement("label"),m=document.createElement("span"),d=document.createElement("output"),v=document.createElement("input");m.textContent=f+" ",d.textContent=t[h].toFixed(2)+"\xD7",v.type="range",v.min=p,v.max=g,v.step=.05,v.value=t[h],v.style.cssText="display:block;width:100%;margin:14px 0",v.setAttribute("aria-label",f),v.oninput=()=>a({...t,[h]:Number(v.value)}),_.append(m,d,v),n.append(_),r[h]={input:v,output:d}}for(let[h,f]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=h,p.onclick=f,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function df(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0},a;function o(){let f=i.lightingState();for(let[p,g]of r)g.value=f[p];a&&(a.checked=f.shadows)}function c(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),o()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,p,g,_]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5]]){let m=document.createElement("label");m.textContent=p;let d=document.createElement("input");d.id="lighting_"+f,d.type="range",d.min=g,d.max=_,d.step=".01",d.style.width="100%",d.oninput=()=>c({[f]:Number(d.value)}),r.set(f,d),m.append(d),t.append(m)}for(let[f,p]of[["\u6062\u590D\u67D4\u5149",()=>c(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let g=document.createElement("button");g.textContent=f,g.onclick=p,t.append(g)}let l=document.createElement("label");l.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>c({shadows:a.checked}),l.append(a),t.append(l);let u=document.createElement("label");u.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");return h.id="lighting_resolution",h.add(new Option("4K \xB7 \u7CBE\u7EC6","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),u.append(h),t.append(u),document.body.append(t),o(),{toggle(){t.hidden=!t.hidden},close(){t.hidden=!0},dispose(){t.remove()}}}function pf(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var tg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ri=(i,e)=>i>>>e|i<<32-e;function ng(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let d=t[m-15],v=t[m-2];t[m]=(ri(d,7)^ri(d,18)^d>>>3)+t[m-16]+(ri(v,17)^ri(v,19)^v>>>10)+t[m-7]}let[o,c,l,u,h,f,p,g]=e;for(let m=0;m<64;m++){let d=g+(ri(h,6)^ri(h,11)^ri(h,25))+(h&f^~h&p)+tg[m]+t[m]>>>0,v=(ri(o,2)^ri(o,13)^ri(o,22))+(o&c^o&l^c&l)>>>0;g=p,p=f,f=h,h=u+d>>>0,u=l,l=c,c=o,o=d+v>>>0}let _=[o,c,l,u,h,f,p,g];for(let m=0;m<8;m++)e[m]+=_[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function mc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):ng(i)}var Br={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},mf=new TextDecoder("utf-8",{fatal:!0});function gf(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Br.archive,n=Br.total){if(![Br.total,192*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Br.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let f=i.length-22;f>=Math.max(0,i.length-65557);f--)if(r.getUint32(f,!0)===101010256&&f+22+r.getUint16(f+20,!0)===i.length){s=f;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>Br.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=o,h=0;for(let f=0;f<a;f++){if(u+46>s||r.getUint32(u,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let p=r.getUint16(u+8,!0),g=r.getUint16(u+10,!0),_=r.getUint16(u+28,!0),m=r.getUint16(u+30,!0),d=r.getUint16(u+32,!0),v=r.getUint32(u+24,!0);if(u+46+_+m+d>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let b=mf.decode(i.subarray(u+46,u+46+_));if(!pf(b)||l.has(b)||!e.test(b))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(b),h+=v;let y=r.getUint32(u+38,!0)>>>16;if(p&1||![0,8].includes(g)||(y&61440)===40960||v>Br.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(b==="manifest.json"&&v>1024*1024)throw new Error("manifest \u8FC7\u5927");let M=r.getUint32(u+42,!0);if(M+30>o||r.getUint32(M,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let S=r.getUint16(M+26,!0),E=r.getUint16(M+28,!0),x=r.getUint32(u+20,!0);if(M+30+S+E+x>o||mf.decode(i.subarray(M+30,M+30+S))!==b)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u+=46+_+m+d}if(u!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h}}var gc=/^[a-zA-Z0-9_-]{1,96}$/,ig=/^[a-f0-9]{64}$/,rg=new Set(["geometry","animation","texture","audio","config"]);function $a(i){if(i?.schema!=="snowbreak-skin/1"||!gc.test(i.characterId)||!gc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!gc.test(n.role)||e.has(n.role)||!ig.test(n.assetId)||!rg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function xf({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:f,descriptor:p})=>Promise.resolve().then(()=>e(f,p))));for(let f of h)if(f.status==="rejected")try{t(f.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let h=$a(u),f=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(h.resources.map(v=>Promise.resolve().then(()=>i(v,{signal:p.signal})))),_=g.flatMap((v,b)=>v.status==="fulfilled"?[{asset:v.value,descriptor:h.resources[b]}]:[]),m=g.find(v=>v.status==="rejected");if(f!==n||a||m){if(await o(_),f===n&&(s=null),f!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let d=r;return r={manifest:h,resources:_},s=null,d&&await o(d.resources),f!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function _f(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=f=>i[f]|i[f+1]<<8|i[f+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function yf(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var vf={geometry:20,animation:32,texture:16,audio:8,config:2};function bf(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(vf,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>vf[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await mc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=_f(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=yf(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function rd(i){let e=gf(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728,201326592),{unzipSync:t}=await Promise.resolve().then(()=>(id(),nd)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(r.characterId!=="Enya"||!Array.isArray(r.variants)||r.variants.length!==4)throw new Error("Invalid Enya collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!["normal","nude"].includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:$a(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!=="Enya"))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[$a(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function c(u){let h=s?.find(g=>g.id===u);if(s&&!h)throw new Error("Variant unavailable");let f=h?.manifest||a[0],p=xf(bf(async g=>n["assets/"+g]));return await p.load(f),{runtime:p,manifest:f,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:g,mode:_,outfit:m})=>({id:g,mode:_,outfit:m}))||[],selectVariant:c}}let l;try{l=localStorage.getItem("enya-collection-selection")}catch{}return c(s?.some(u=>u.id===l)?l:r.defaultVariant)}var Wd=0,Su=1,Xd=2;var Aa=1,ul=2,Ls=3,vn=0,dn=1,pn=2,pi=0,Ns=1,wu=2,Eu=3,Tu=4,qd=5;var wr=100,Yd=101,Zd=102,Kd=103,$d=104,Jd=200,jd=201,Qd=202,ep=203,Au=204,Ru=205,tp=206,np=207,ip=208,rp=209,sp=210,ap=211,op=212,lp=213,cp=214,Bo=0,ko=1,zo=2,ds=3,Ho=4,Vo=5,Go=6,Wo=7,Cu=0,up=1,hp=2,Kn=0,Iu=1,Pu=2,Lu=3,Ra=4,Nu=5,Uu=6,Du=7,uu="attached",fp="detached",Fu=300,ir=301,Er=302,hl=303,fl=304,Ca=306,ji=1e3,kn=1001,ps=1002,zt=1003,dl=1004;var Tr=1005;var Ht=1006,Us=1007;var $n=1008;var bn=1009,Ou=1010,Bu=1011,Ds=1012,pl=1013,Jn=1014,An=1015,jn=1016,ml=1017,gl=1018,Fs=1020,ku=35902,zu=35899,Hu=1021,Vu=1022,Rn=1023,ci=1026,rr=1027,xl=1028,_l=1029,sr=1030,yl=1031;var vl=1033,Ia=33776,Pa=33777,La=33778,Na=33779,bl=35840,Ml=35841,Sl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Rl=37488,Cl=37489,Ua=37490,Il=37491,Pl=37808,Ll=37809,Nl=37810,Ul=37811,Dl=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,zl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,Zl=36283,Kl=36284,Da=36285,$l=36286;var mr=2300,gr=2301,Do=2302,hu=2303,fu=2400,du=2401,pu=2402,dp=2500;var Gu=0,Fa=1,Os=2,pp=3200;var Jl=0,mp=1,Qn="",Dt="srgb",fn="srgb-linear",la="linear",bt="srgb";var Fo=7680;var gp=519,xp=512,_p=513,yp=514,jl=515,vp=516,bp=517,Ql=518,Mp=519,Wu=35044,Xu=35048;var qu="300 es",Yn=2e3,ms=2001;function Ag(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=gs("canvas");return i.style.display="block",i}var sd={},xs=null;function ca(...i){let e="THREE."+i.shift();xs?xs("log",e,...i):console.log(e,...i)}function wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=wp(i);let e="THREE."+i.shift();if(xs)xs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=wp(i);let e="THREE."+i.shift();if(xs)xs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function pr(...i){let e=i.join(" ");e in sd||(sd[e]=!0,Ye(...i))}function Ep(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Tp={[Bo]:ko,[zo]:Go,[Ho]:Wo,[ds]:Vo,[ko]:Bo,[Go]:zo,[Wo]:Ho,[Vo]:ds},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,aa=Math.PI/180,xr=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Yu(i,e){return(i%e+e)%e}function Cg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ig(i,e,t){return i!==e?(t-i)/(e-i):0}function oa(i,e,t){return(1-t)*i+t*e}function Pg(i,e,t,n){return oa(i,e,1-Math.exp(-t*n))}function Lg(i,e=1){return e-Math.abs(Yu(i,e*2)-e)}function Ng(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fg(i,e){return i+Math.random()*(e-i)}function Og(i){return i*(.5-Math.random())}function Bg(i){i!==void 0&&(ad=i);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kg(i){return i*aa}function zg(i){return i*xr}function Hg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Le={DEG2RAD:aa,RAD2DEG:xr,generateUUID:Zn,clamp:pt,euclideanModulo:Yu,mapLinear:Cg,inverseLerp:Ig,lerp:oa,damp:Pg,pingpong:Lg,smoothstep:Ng,smootherstep:Ug,randInt:Dg,randFloat:Fg,randFloatSpread:Og,seededRandom:Bg,degToRad:kg,radToDeg:zg,isPowerOfTwo:Hg,ceilPowerOfTwo:Vg,floorPowerOfTwo:Gg,setQuaternionFromProperEuler:Wg,normalize:Mt,denormalize:qn},ju=class ju{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ju.prototype.isVector2=!0;var nt=ju,Oe=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||c!==f||l!==p||u!==g){let m=c*f+l*p+u*g+h*_;m<0&&(f=-f,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);d=Math.sin(d*v)/b,o=Math.sin(o*v)/b,c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+_*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+_*o;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;var D=Qu,zc=new D,od=new Oe,eh=class eh{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],v=r[1],b=r[4],y=r[7],M=r[2],S=r[5],E=r[8];return s[0]=a*_+o*v+c*M,s[3]=a*m+o*b+c*S,s[6]=a*d+o*y+c*E,s[1]=l*_+u*v+h*M,s[4]=l*m+u*b+h*S,s[7]=l*d+u*y+h*E,s[2]=f*_+p*v+g*M,s[5]=f*m+p*b+g*S,s[8]=f*d+p*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var it=eh,Hc=new it,ld=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){let i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:la,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var ht=Xg();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=gs("canvas")),jr.width=e.width,jr.height=e.height;let r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qg=0,_s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Yg=0,Gc=new D,Jt=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,r=kn,s=Ht,a=$n,o=Rn,c=bn,l=i.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Zn(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Fu;Jt.DEFAULT_ANISOTROPY=1;var th=class th{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(p+1)/2,M=(d+1)/2,S=(u+f)/4,E=(h+_)/4,x=(g+m)/4;return b>y&&b>M?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=S/n,s=E/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=S/r,s=x/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=E/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;var St=th,qo=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Jt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ua=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var cl=class cl{constructor(e,t,n,r,s,a,o,c,l,u,h,f,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,p,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,h,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Kg)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),qi.crossVectors(n,Sn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),qi.crossVectors(n,Sn)),qi.normalize(),co.crossVectors(Sn,qi),r[0]=qi.x,r[4]=co.x,r[8]=Sn.x,r[1]=qi.y,r[5]=co.y,r[9]=Sn.y,r[2]=qi.z,r[6]=co.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],b=n[7],y=n[11],M=n[15],S=r[0],E=r[4],x=r[8],T=r[12],C=r[1],N=r[5],k=r[9],H=r[13],I=r[2],B=r[6],U=r[10],L=r[14],Y=r[3],O=r[7],R=r[11],F=r[15];return s[0]=a*S+o*C+c*I+l*Y,s[4]=a*E+o*N+c*B+l*O,s[8]=a*x+o*k+c*U+l*R,s[12]=a*T+o*H+c*L+l*F,s[1]=u*S+h*C+f*I+p*Y,s[5]=u*E+h*N+f*B+p*O,s[9]=u*x+h*k+f*U+p*R,s[13]=u*T+h*H+f*L+p*F,s[2]=g*S+_*C+m*I+d*Y,s[6]=g*E+_*N+m*B+d*O,s[10]=g*x+_*k+m*U+d*R,s[14]=g*T+_*H+m*L+d*F,s[3]=v*S+b*C+y*I+M*Y,s[7]=v*E+b*N+y*B+M*O,s[11]=v*x+b*k+y*U+M*R,s[15]=v*T+b*H+y*L+M*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],v=c*p-l*f,b=o*p-l*h,y=o*f-c*h,M=a*p-l*u,S=a*f-c*u,E=a*h-o*u;return t*(_*v-m*b+d*y)-n*(g*v-m*M+d*S)+r*(g*b-_*M+d*E)-s*(g*y-_*S+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=t*o-n*a,b=t*c-r*a,y=t*l-s*a,M=n*c-r*o,S=n*l-s*o,E=r*l-s*c,x=u*_-h*g,T=u*m-f*g,C=u*d-p*g,N=h*m-f*_,k=h*d-p*_,H=f*d-p*m,I=v*H-b*k+y*N+M*C-S*T+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*H-c*k+l*N)*B,e[1]=(r*k-n*H-s*N)*B,e[2]=(_*E-m*S+d*M)*B,e[3]=(f*S-h*E-p*M)*B,e[4]=(c*C-a*H-l*T)*B,e[5]=(t*H-r*C+s*T)*B,e[6]=(m*y-g*E-d*b)*B,e[7]=(u*E-f*y+p*b)*B,e[8]=(a*k-o*C+l*x)*B,e[9]=(n*C-t*k-s*x)*B,e[10]=(g*S-_*y+d*v)*B,e[11]=(h*y-u*S-p*v)*B,e[12]=(o*T-a*N-c*x)*B,e[13]=(t*N-n*T+r*x)*B,e[14]=(_*b-g*M-m*v)*B,e[15]=(u*M-h*b+f*v)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,v=c*l,b=c*u,y=c*h,M=n.x,S=n.y,E=n.z;return r[0]=(1-(_+d))*M,r[1]=(p+y)*M,r[2]=(g-b)*M,r[3]=0,r[4]=(p-y)*S,r[5]=(1-(f+d))*S,r[6]=(m+v)*S,r[7]=0,r[8]=(g+b)*E,r[9]=(m-v)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length(),o=Qr.set(r[4],r[5],r[6]).length(),c=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);let l=1/a,u=1/o,h=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Yn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Yn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ms)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Yn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Yn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ms)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};cl.prototype.isMatrix4=!0;var Ve=cl,Qr=new D,Gn=new Ve,Zg=new D(0,0,0),Kg=new D(1,1,1),qi=new D,co=new D,Sn=new D,ud=new Ve,hd=new Oe,Ci=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$g=0,fd=new D,es=new Oe,Mi=new Ve,uo=new D,js=new D,Jg=new D,jg=new Oe,dd=new D(1,0,0),pd=new D(0,1,0),md=new D(0,0,1),gd={type:"added"},Qg={type:"removed"},ts={type:"childadded",child:null},Wc={type:"childremoved",child:null},Nt=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ci,n=new Oe,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new it}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(js,uo,this.up):Mi.lookAt(uo,js,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Mi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),ts.child=e,this.dispatchEvent(ts),ts.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new D(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},e0={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Yu(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Xc(a,s,e+1/3),this.g=Xc(a,s,e),this.b=Xc(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ht.workingToColorSpace(nn.copy(this),e),Math.round(pt(nn.r*255,0,255))*65536+Math.round(pt(nn.g*255,0,255))*256+Math.round(pt(nn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Dt){ht.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ho);let n=oa(Yi.h,ho.h,t),r=oa(Yi.s,ho.s,t),s=oa(Yi.l,ho.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new $e;$e.NAMES=Ap;var _r=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new D,Si=new D,qc=new D,wi=new D,ns=new D,is=new D,xd=new D,Yc=new D,Zc=new D,Kc=new D,$c=new St,Jc=new St,jc=new St,oi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wn.subVectors(r,t),Si.subVectors(n,t),qc.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Si),c=Wn.dot(qc),l=Si.dot(Si),u=Si.dot(qc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return $c.setScalar(0),Jc.setScalar(0),jc.setScalar(0),$c.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($c,s.x),a.addScaledVector(Jc,s.y),a.addScaledVector(jc,s.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Si.subVectors(e,t),Wn.cross(Si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ns.subVectors(r,n),is.subVectors(s,n),Yc.subVectors(e,n);let c=ns.dot(Yc),l=is.dot(Yc);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,r);let u=ns.dot(Zc),h=is.dot(Zc);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ns,a);Kc.subVectors(e,s);let p=ns.dot(Kc),g=is.dot(Kc);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(is,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return xd.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(xd,o);let d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),po.subVectors(this.max,Qs),rs.subVectors(e.a,Qs),ss.subVectors(e.b,Qs),as.subVectors(e.c,Qs),Zi.subVectors(ss,rs),Ki.subVectors(as,ss),ur.subVectors(rs,as);let t=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-ur.z,ur.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,ur.z,0,-ur.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-ur.y,ur.x,0];return!Qc(t,rs,ss,as,po)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,rs,ss,as,po))?!1:(mo.crossVectors(Zi,Ki),t=[mo.x,mo.y,mo.z],Qc(t,rs,ss,as,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new D,new D,new D,new D,new D,new D,new D,new D],Xn=new D,fo=new Yt,rs=new D,ss=new D,as=new D,Zi=new D,Ki=new D,ur=new D,Qs=new D,po=new D,mo=new D,hr=new D;function Qc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hr.fromArray(i,s);let o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),c=e.dot(hr),l=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Xt=new D,go=new nt,t0=0,Ft=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fa=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var hn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},n0=new Yt,ea=new D,eu=new D,xn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ea,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(eu)),this.expandByPoint(ea.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},i0=0,Bn=new Ve,tu=new Nt,os=new D,wn=new Yt,ta=new Yt,$t=new D,jt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?fa:ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(wn.min,ta.min),wn.expandByPoint($t),$t.addVectors(wn.max,ta.max),wn.expandByPoint($t)):(wn.expandByPoint(ta.min),wn.expandByPoint(ta.max))}wn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),$t.add(os)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,u=new D,h=new D,f=new nt,p=new nt,g=new nt,_=new D,m=new D;function d(x,T,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),o[x].add(_),o[T].add(_),o[C].add(_),c[x].add(m),c[T].add(m),c[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,T=v.length;x<T;++x){let C=v[x],N=C.start,k=C.count;for(let H=N,I=N+k;H<I;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let b=new D,y=new D,M=new D,S=new D;function E(x){M.fromBufferAttribute(r,x),S.copy(M);let T=o[x];b.copy(T),b.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(S,T);let N=y.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,N)}for(let x=0,T=v.length;x<T;++x){let C=v[x],N=C.start,k=C.count;for(let H=N,I=N+k;H<I;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Ft(f,u,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},un=new D,Ms=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new D,r0=new D,s0=new it,En=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=nu.subVectors(n,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(nu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||s0.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},a0=0,_n=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ns,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ti=new D,iu=new D,xo=new D,_o=new D,Qi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){iu.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),_o.copy(this.origin).sub(iu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=_o.dot(this.direction),c=-_o.dot(xo),l=_o.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(iu).addScaledVector(xo,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,d=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(c),M=Math.abs(l),S=Math.abs(u),E,x,T,C,N,k,H,I,B,U,L,Y;if(y>=M&&y>=S?(T=c,k=h,B=g,Y=d,c>=0?(E=l,x=u,C=f,N=p,H=_,I=m,U=v,L=b):(E=u,x=l,C=p,N=f,H=m,I=_,U=b,L=v)):M>=S?(T=l,k=f,B=_,Y=v,l>=0?(E=u,x=c,C=p,N=h,H=m,I=g,U=b,L=d):(E=c,x=u,C=h,N=p,H=g,I=m,U=d,L=b)):(T=u,k=p,B=m,Y=b,u>=0?(E=c,x=l,C=h,N=f,H=g,I=_,U=d,L=v):(E=l,x=c,C=f,N=h,H=_,I=g,U=v,L=d)),T===0)return null;let O=E/T,R=x/T,F=1/T,$=C-O*k,K=N-R*k,G=H-O*B,J=I-R*B,le=U-O*Y,V=L-R*Y,j=le*J-V*G,te=$*V-K*le,fe=G*K-J*$;if(r){if(j<0||te<0||fe<0)return null}else if((j<0||te<0||fe<0)&&(j>0||te>0||fe>0))return null;let ae=j+te+fe;if(ae===0)return null;let ge=F*(j*k+te*B+fe*Y);return(ae>0?ge<0:ge>0)?null:this.at(ge/ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_d=new Ve,fr=new Qi,yo=new xn,yd=new D,vo=new D,bo=new D,Mo=new D,ru=new D,So=new D,vd=new D,wo=new D,Vt=class extends Nt{constructor(e=new jt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(ru.fromBufferAttribute(h,e),a?So.addScaledVector(ru,u):So.addScaledVector(ru.sub(t),u))}t.add(So)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(yo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(yo,yd)===null||fr.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(_d.copy(s).invert(),fr.copy(e.ray).applyMatrix4(_d),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=b;y<M;y+=3){let S=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);r=Eo(this,d,e,n,l,u,h,S,E,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Eo(this,a,e,n,l,u,h,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=b;y<M;y+=3){let S=y,E=y+1,x=y+2;r=Eo(this,d,e,n,l,u,h,S,E,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=m,b=m+1,y=m+2;r=Eo(this,a,e,n,l,u,h,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function o0(i,e,t,n,r,s,a,o){let c;if(e.side===dn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===vn,o),c===null)return null;wo.copy(o),wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(wo);return l<t.near||l>t.far?null:{distance:l,point:wo.clone(),object:i}}function Eo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,vo),i.getVertexPosition(c,bo),i.getVertexPosition(l,Mo);let u=o0(i,e,t,n,vo,bo,Mo,vd);if(u){let h=new D;oi.getBarycoord(vd,vo,bo,Mo,h),r&&(u.uv=oi.getInterpolatedAttribute(r,o,c,l,h,new nt)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,c,l,h,new nt)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};oi.getNormal(vo,bo,Mo,f.normal),u.face=f,u.barycoord=h}return u}var na=new St,bd=new St,Md=new St,l0=new St,Sd=new Ve,To=new D,su=new xn,wd=new Ve,au=new Qi,da=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),su.copy(this.boundingSphere),su.applyMatrix4(r),e.ray.intersectsSphere(su)!==!1&&(wd.copy(r).invert(),au.copy(e.ray).applyMatrix4(wd),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;bd.fromBufferAttribute(r.attributes.skinIndex,e),Md.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(na.copy(t),t.set(0,0,0,0)):(na.set(...t,1),t.set(0,0,0)),na.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Md.getComponent(s);if(a!==0){let o=bd.getComponent(s);Sd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(l0.copy(na).applyMatrix4(Sd),a)}}return t.isVector4&&(t.w=na.w),t.applyMatrix4(this.bindMatrixInverse)}},Ss=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ws=class extends Jt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=zt,u=zt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ed=new Ve,c0=new Ve,pa=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:c0;Ed.multiplyMatrices(o,t[s]),Ed.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ws(t,e,e,Rn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ye("Skeleton: No bone found with UUID:",s),a=new Ss),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ii=class extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ls=new Ve,Td=new Ve,Ao=[],Ad=new Yt,u0=new Ve,ia=new Vt,ra=new xn,ma=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,u0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ad.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),ra.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),Td.multiplyMatrices(n,ls),ia.matrixWorld=Td,ia.raycast(e,Ao);for(let a=0,o=Ao.length;a<o;a++){let c=Ao[a];c.instanceId=s,c.object=this,t.push(c)}Ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ws(new Float32Array(r*this.count),r,this.count,xl,An));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dr=new xn,h0=new nt(.5,.5),Ro=new D,Es=class{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,a=new En){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],v=s[12],b=s[13],y=s[14],M=s[15];if(r[0].setComponents(l-a,p-u,d-g,M-v).normalize(),r[1].setComponents(l+a,p+u,d+g,M+v).normalize(),r[2].setComponents(l+o,p+h,d+_,M+b).normalize(),r[3].setComponents(l-o,p-h,d-_,M-b).normalize(),n)r[4].setComponents(c,f,m,y).normalize(),r[5].setComponents(l-c,p-f,d-m,M-y).normalize();else if(r[4].setComponents(l-c,p-f,d-m,M-y).normalize(),t===Yn)r[5].setComponents(l+c,p+f,d+m,M+y).normalize();else if(t===ms)r[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=h0.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zo=new D,Ko=new D,Rd=new Ve,sa=new Qi,Co=new xn,ou=new D,Cd=new D,yr=class extends Nt{constructor(e=new jt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Zo.fromBufferAttribute(t,r-1),Ko.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Zo.distanceTo(Ko);e.setAttribute("lineDistance",new hn(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Rd.copy(r).invert(),sa.copy(e.ray).applyMatrix4(Rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){let d=u.getX(_),v=u.getX(_+1),b=Io(this,e,sa,c,d,v,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),d=Io(this,e,sa,c,_,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){let d=Io(this,e,sa,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=Io(this,e,sa,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Io(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Zo.fromBufferAttribute(o,r),Ko.fromBufferAttribute(o,s),t.distanceSqToSegment(Zo,Ko,ou,Cd)>n)return;ou.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ou);if(!(l<e.near||l>e.far))return{distance:l,point:Cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Id=new D,Pd=new D,ga=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Id.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Id.distanceTo(Pd);e.setAttribute("lineDistance",new hn(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},As=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ld=new Ve,mu=new Qi,Po=new xn,Lo=new D,_a=class extends Nt{constructor(e=new jt,t=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Ld.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Ld);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,_=p;g<_;g++){let m=l.getX(g);Lo.fromBufferAttribute(h,m),Nd(Lo,m,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Lo.fromBufferAttribute(h,g),Nd(Lo,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Nd(i,e,t,n,r,s,a){let o=mu.distanceSqToPoint(i);if(o<t){let c=new D;mu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ya=class extends Jt{constructor(e=[],t=ir,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var er=class extends Jt{constructor(e,t,n=Jn,r,s,a,o=zt,c=zt,l,u=ci,h=1){if(u!==ci&&u!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$o=class extends er{constructor(e,t=Jn,n=ir,r,s,a=zt,o=zt,c,l=ci){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},va=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rs=class i extends jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(h,2));function g(_,m,d,v,b,y,M,S,E,x,T){let C=y/E,N=M/x,k=y/2,H=M/2,I=S/2,B=E+1,U=x+1,L=0,Y=0,O=new D;for(let R=0;R<U;R++){let F=R*N-H;for(let $=0;$<B;$++){let K=$*C-k;O[_]=K*v,O[m]=F*b,O[d]=I,l.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[d]=S>0?1:-1,u.push(O.x,O.y,O.z),h.push($/E),h.push(1-R/x),L+=1}}for(let R=0;R<x;R++)for(let F=0;F<E;F++){let $=f+F+B*R,K=f+F+B*(R+1),G=f+(F+1)+B*(R+1),J=f+(F+1)+B*R;c.push($,K,J),c.push(K,G,J),Y+=6}o.addGroup(p,Y,T),p+=Y,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vr=class i extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let v=d*f-a;for(let b=0;b<l;b++){let y=b*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){let b=v+l*d,y=v+l*(d+1),M=v+1+l*(d+1),S=v+1+l*d;p.push(b,y,S),p.push(y,M,S)}this.setIndex(p),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ud(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ud(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let r in n)e[r]=n[r]}return e}function Ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function f0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Rp={clone:Ar,merge:an},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new St().fromArray(r.value);break;case"m3":this.uniforms[n].value=new it().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jo=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},br=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jo=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function m0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Dd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function g0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case du:s=e,o=2*t-n;break;case pu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case du:a=e,c=2*n-t;break;case pu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let M=0;M!==o;++M)s[M]=d*a[u+M]+v*a[l+M]+b*a[c+M]+y*a[h+M];return s}},tl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}},nl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends hi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(r-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*_+a[c+m]*g;return s}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],d=p*f+g*2,v=h[d],b=h[d+1],y=e*f+g*2,M=u[y],S=u[y+1],E=_0(n,t,v,M,r);s[g]=Cp(E,_,b,S,m)}return s}};function Cp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function x0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function _0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Cp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=x0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var yn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Oo(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case hu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return hu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Oo(this.settings)&&(Fd(this.settings.inTangents,e),Fd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Rg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Do,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Oo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=gr;var Pi=class extends yn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=mr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName="color";var Li=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};Li.prototype.ValueTypeName="number";var rl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)Oe.slerpFlat(s,0,a,l-o,a,l,c);return s}},fi=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends yn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=mr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};Ui.prototype.ValueTypeName="vector";var Cs=class{constructor(e="",t=-1,n=[],r=dp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(v0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(yn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=m0(c);c=Dd(c,1,u),l=Dd(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function y0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return ba;case"quaternion":return fi;case"bool":case"boolean":return Pi;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function v0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=y0(i.type);if(i.times===void 0){let n=[],r=[];g0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Oo(i.settings)&&(t.settings={inTangents:Ji(i.settings.inTangents,Float32Array),outTangents:Ji(i.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Od(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Od(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Od(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var sl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new sl,di=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},gu=class extends Error{constructor(e,t){super(e),this.response=t}},Is=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=li.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ai[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(d){v();function v(){h.read().then(({done:b,value:y})=>{if(b)d.close();else{_+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let S=0,E=u.length;S<E;S++){let x=u[S];x.onProgress&&x.onProgress(M)}d.enqueue(y),v()}},b=>{d.error(b)})}}});return new Response(m)}else throw new gu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{li.add(`file:${e}`,l);let u=Ai[e];delete Ai[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var cs=new WeakMap,al=class extends di{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=cs.get(a);h===void 0&&(h=[],cs.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=gs("img");function c(){u(),t&&t(this);let h=cs.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}cs.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),li.remove(`image:${e}`);let f=cs.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}cs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var tr=class extends di{constructor(e){super(e)}load(e,t,n,r){let s=new Jt,a=new al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Mr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lu=new Ve,Bd=new D,kd=new D,Ps=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ms||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new D,Uo=new Oe,ai=new D,Sa=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Uo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Uo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new D,zd=new nt,Hd=new nt,qt=class extends Sa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,zd,Hd),t.subVectors(Hd,zd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xu=class extends Ps{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wa=class extends Mr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_u=class extends Ps{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Ea=class extends Mr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},nr=class extends Sa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yu=class extends Ps{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cu=new WeakMap,Ta=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{cu.has(a)===!0?(r&&r(cu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return li.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),cu.set(c,l),li.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var us=-90,hs=1,ol=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(us,hs,e,t);r.layers=this.layers,this.add(r);let s=new qt(us,hs,e,t);s.layers=this.layers,this.add(s);let a=new qt(us,hs,e,t);a.layers=this.layers,this.add(a);let o=new qt(us,hs,e,t);o.layers=this.layers,this.add(o);let c=new qt(us,hs,e,t);c.layers=this.layers,this.add(c);let l=new qt(us,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ll=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ku="\\[\\]\\.:\\/",b0=new RegExp("["+Ku+"]","g"),$u="[^"+Ku+"]",M0="[^"+Ku.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",$u),w0=/(WCOD+)?/.source.replace("WCOD",M0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),A0=new RegExp("^"+S0+w0+E0+T0+"$"),R0=["material","materials","bones","map"],vu=class{constructor(e,t,n){let r=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(e){let t=A0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);R0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=vu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EM=new Float32Array(1);var Vd=new Ve,Sr=class{constructor(e,t,n=0,r=1/0){this.ray=new Qi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(e,t=!0,n=[]){return bu(e,this,n,t),n.sort(Gd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)bu(e[r],this,n,t);return n.sort(Gd),n}};function Gd(i,e){return i.distance-e.distance}function bu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)bu(s[a],e,t,!0)}}var nh=class nh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};nh.prototype.isMatrix2=!0;var Mu=nh;function Ju(i,e,t,n){let r=C0(n);switch(t){case Hu:return i*e;case xl:return i*e/r.components*r.byteLength;case _l:return i*e/r.components*r.byteLength;case sr:return i*e*2/r.components*r.byteLength;case yl:return i*e*2/r.components*r.byteLength;case Vu:return i*e*3/r.components*r.byteLength;case Rn:return i*e*4/r.components*r.byteLength;case vl:return i*e*4/r.components*r.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case wl:return Math.max(i,16)*Math.max(e,8)/4;case bl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case El:case Tl:case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:case Ua:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Da:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(i){switch(i){case bn:case Ou:return{byteLength:1,components:1};case Ds:case Bu:case jn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Jn:case pl:case An:return{byteLength:4,components:1};case ku:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function N0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Lx=`uniform sampler2D dfgLUT;
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
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
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
}`,V_=`#define DISTANCE
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
}`,G_=`#define DISTANCE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`uniform float scale;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,K_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,sy=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,oy=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,fy=`uniform float rotation;
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
}`,dy=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:U0,alphahash_pars_fragment:D0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:k0,aomap_fragment:z0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:q0,iridescence_fragment:Y0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:j0,color_fragment:Q0,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:rx,defaultnormal_vertex:sx,displacementmap_pars_vertex:ax,displacementmap_vertex:ox,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:hx,envmap_fragment:fx,envmap_common_pars_fragment:dx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Tx,envmap_vertex:gx,fog_vertex:xx,fog_pars_vertex:_x,fog_fragment:yx,fog_pars_fragment:vx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:wx,lights_pars_begin:Ex,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Ix,lights_physical_fragment:Px,lights_physical_pars_fragment:Lx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Dx,lightprobes_pars_fragment:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:zx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:Zx,morphnormal_vertex:Kx,morphtarget_pars_vertex:$x,morphtarget_vertex:Jx,normal_fragment_begin:jx,normal_fragment_maps:Qx,normal_pars_fragment:e_,normal_pars_vertex:t_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:a_,iridescence_pars_fragment:o_,opaque_fragment:l_,packing:c_,premultiplied_alpha_fragment:u_,project_vertex:h_,dithering_fragment:f_,dithering_pars_fragment:d_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:x_,shadowmap_vertex:__,shadowmask_pars_fragment:y_,skinbase_vertex:v_,skinning_pars_vertex:b_,skinning_vertex:M_,skinnormal_vertex:S_,specularmap_fragment:w_,specularmap_pars_fragment:E_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:I_,uv_pars_vertex:P_,uv_vertex:L_,worldpos_vertex:N_,background_vert:U_,background_frag:D_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:k_,depth_vert:z_,depth_frag:H_,distance_vert:V_,distance_frag:G_,equirect_vert:W_,equirect_frag:X_,linedashed_vert:q_,linedashed_frag:Y_,meshbasic_vert:Z_,meshbasic_frag:K_,meshlambert_vert:$_,meshlambert_frag:J_,meshmatcap_vert:j_,meshmatcap_frag:Q_,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:ry,meshphysical_frag:sy,meshtoon_vert:ay,meshtoon_frag:oy,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:fy,sprite_frag:dy},Re={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},gi={basic:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:an([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:an([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new $e(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:an([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:an([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:an([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:an([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:an([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:an([Re.lights,Re.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};gi.physical={uniforms:an([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var ec={r:0,b:0,g:0},py=new Ve,Qp=new it;Qp.set(-1,0,0,0,1,0,0,0,1);function my(i,e,t,n,r,s){let a=new $e(0),o=r===!0?0:1,c,l,u=null,h=0,f=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(v){let b=!1,y=p(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){let y=p(b);y&&(y.isCubeTexture||y.mapping===Ca)?(l===void 0&&(l=new Vt(new Rs(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ar(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qp),l.material.toneMapped=ht.getTransfer(y.colorSpace)!==bt,(u!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vt(new vr(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ar(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(ec,Zu(i)),t.buffers.color.setClear(ec.r,ec.g,ec.b,b,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:d}}function gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(N,k,H,I,B){let U=!1,L=h(N,I,H,k);s!==L&&(s=L,l(s.object)),U=p(N,I,H,B),U&&g(N,I,H,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(N,k,H,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function h(N,k,H,I){let B=I.wireframe===!0,U=n[k.id];U===void 0&&(U={},n[k.id]=U);let L=N.isInstancedMesh===!0?N.id:0,Y=U[L];Y===void 0&&(Y={},U[L]=Y);let O=Y[H.id];O===void 0&&(O={},Y[H.id]=O);let R=O[B];return R===void 0&&(R=f(c()),O[B]=R),R}function f(N){let k=[],H=[],I=[];for(let B=0;B<t;B++)k[B]=0,H[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,k,H,I){let B=s.attributes,U=k.attributes,L=0,Y=H.getAttributes();for(let O in Y)if(Y[O].location>=0){let F=B[O],$=U[O];if($===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;L++}return s.attributesNum!==L||s.index!==I}function g(N,k,H,I){let B={},U=k.attributes,L=0,Y=H.getAttributes();for(let O in Y)if(Y[O].location>=0){let F=U[O];F===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(F=N.instanceColor));let $={};$.attribute=F,F&&F.data&&($.data=F.data),B[O]=$,L++}s.attributes=B,s.attributesNum=L,s.index=I}function _(){let N=s.newAttributes;for(let k=0,H=N.length;k<H;k++)N[k]=0}function m(N){d(N,0)}function d(N,k){let H=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;H[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),B[N]!==k&&(i.vertexAttribDivisor(N,k),B[N]=k)}function v(){let N=s.newAttributes,k=s.enabledAttributes;for(let H=0,I=k.length;H<I;H++)k[H]!==N[H]&&(i.disableVertexAttribArray(H),k[H]=0)}function b(N,k,H,I,B,U,L){L===!0?i.vertexAttribIPointer(N,k,H,B,U):i.vertexAttribPointer(N,k,H,I,B,U)}function y(N,k,H,I){_();let B=I.attributes,U=H.getAttributes(),L=k.defaultAttributeValues;for(let Y in U){let O=U[Y];if(O.location>=0){let R=B[Y];if(R===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let F=R.normalized,$=R.itemSize,K=e.get(R);if(K===void 0)continue;let G=K.buffer,J=K.type,le=K.bytesPerElement,V=J===i.INT||J===i.UNSIGNED_INT||R.gpuType===pl;if(R.isInterleavedBufferAttribute){let j=R.data,te=j.stride,fe=R.offset;if(j.isInstancedInterleavedBuffer){for(let ae=0;ae<O.locationSize;ae++)d(O.location+ae,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<O.locationSize;ae++)m(O.location+ae);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ae=0;ae<O.locationSize;ae++)b(O.location+ae,$/O.locationSize,J,F,te*le,(fe+$/O.locationSize*ae)*le,V)}else{if(R.isInstancedBufferAttribute){for(let j=0;j<O.locationSize;j++)d(O.location+j,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let j=0;j<O.locationSize;j++)m(O.location+j);i.bindBuffer(i.ARRAY_BUFFER,G);for(let j=0;j<O.locationSize;j++)b(O.location+j,$/O.locationSize,J,F,$*le,$/O.locationSize*j*le,V)}}else if(L!==void 0){let F=L[Y];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(O.location,F);break;case 3:i.vertexAttrib3fv(O.location,F);break;case 4:i.vertexAttrib4fv(O.location,F);break;default:i.vertexAttrib1fv(O.location,F)}}}}v()}function M(){T();for(let N in n){let k=n[N];for(let H in k){let I=k[H];for(let B in I){let U=I[B];for(let L in U)u(U[L].object),delete U[L];delete I[B]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let k=n[N.id];for(let H in k){let I=k[H];for(let B in I){let U=I[B];for(let L in U)u(U[L].object),delete U[L];delete I[B]}}delete n[N.id]}function E(N){for(let k in n){let H=n[k];for(let I in H){let B=H[I];if(B[N.id]===void 0)continue;let U=B[N.id];for(let L in U)u(U[L].object),delete U[L];delete B[N.id]}}}function x(N){for(let k in n){let H=n[k],I=N.isInstancedMesh===!0?N.id:0,B=H[I];if(B!==void 0){for(let U in B){let L=B[U];for(let Y in L)u(L[Y].object),delete L[Y];delete B[U]}delete H[I],Object.keys(H).length===0&&delete n[k]}}}function T(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function xy(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let p=0;p<u;p++)f+=l[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _y(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bn&&E!==An&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ye("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:S}}function yy(i){let e=this,t=null,n=0,r=!1,s=!1,a=new En,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let v=s?0:n,b=v*4,y=d.clippingState||null;c.value=y,y=u(g,f,b,p);for(let M=0;M!==b;++M)y[M]=t[M];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,y=p;b!==_;++b,y+=4)a.copy(h[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ks=4,vy=6,by=20,My=256,Oa=new nr,Pp=new $e,ih=null,rh=0,sh=0,ah=!1,Sy=new D,Rr=new D,Hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Sy}=s;ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),this._renderer.xr.enabled=ah,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:jn,format:Rn,colorSpace:fn,depthBuffer:!1},r=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wy(s)),this._blurMaterial=Ty(s,e,t),this._ggxMaterial=Ey(s,e,t)}return r}_compileMaterial(e){let t=new Vt(new jt,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,r,s){let c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Pp),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Rs,new rn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(Pp),d=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let M=this._cubeSize;Bs(r,y*M,b>2?M:0,M,M),h.setRenderTarget(r),d&&h.render(_,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ir||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,p=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ks?n-g+ks:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Bs(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,Oa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Bs(e,m,d,3*_,2*_),r.setRenderTarget(e),r.render(o,Oa)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-ks?r-this._lodMax+ks:0),f=4*(this._cubeSize-u);Bs(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,Oa)}};function wy(i){let e=[],t=[],n=i,r=i-ks+1+vy;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,p=3,g=new Float32Array(p*f*h),_=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,b=d>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];g.set(y,p*f*d);for(let M=0;M<f;M++){let S=u[M*2]*2-1,E=u[M*2+1]*2-1;d===0?Rr.set(1,E,S):d===1?Rr.set(-S,1,-E):d===2?Rr.set(-S,E,1):d===3?Rr.set(-1,E,-S):d===4?Rr.set(-S,-1,E):Rr.set(S,E,-1),Rr.toArray(_,(d*f+M)*p)}}let m=new jt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(_,p)),t.push(new Vt(m,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function Lp(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ey(i,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:My,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ty(i,e,t){return new Tn({name:"SphericalGaussianBlur",defines:{SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Np(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Up(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nc=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ya(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rs(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:pi});s.uniforms.tEquirect.value=t;let a=new Vt(r,s),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Ht),new ol(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function Ay(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===hl||p===fl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new nc(g.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===hl||p===fl,_=p===ir||p===Er;if(g||_){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===hl?f.mapping=ir:p===fl&&(f.mapping=Er),f}function c(f){let p=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&p++;return p===g}function l(f){let p=f.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&pr("WebGLRenderer: "+n+" extension not supported."),r}}}function Cy(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(p!==null){let v=p.array;_=p.version;for(let b=0,y=v.length;b<y;b+=3){let M=v[b+0],S=v[b+1],E=v[b+2];f.push(M,S,S,E,E,M)}}else{let v=g.array;_=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let M=b+0,S=b+1,E=b+2;f.push(M,S,S,E,E,M)}}let m=new(g.count>=65535?fa:ha)(f,1);m.version=_;let d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Iy(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function l(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let _=0;for(let m=0;m<p;m++)_+=f[m];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Py(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ly(i,e,t){let n=new WeakMap,r=new St;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*M*4*h),E=new ua(S,y,M,h);E.type=An,E.needsUpdate=!0;let x=b*4;for(let C=0;C<h;C++){let N=m[C],k=d[C],H=v[C],I=y*M*4*C;for(let B=0;B<N.count;B++){let U=B*x;p===!0&&(r.fromBufferAttribute(N,B),S[I+U+0]=r.x,S[I+U+1]=r.y,S[I+U+2]=r.z,S[I+U+3]=0),g===!0&&(r.fromBufferAttribute(k,B),S[I+U+4]=r.x,S[I+U+5]=r.y,S[I+U+6]=r.z,S[I+U+7]=0),_===!0&&(r.fromBufferAttribute(H,B),S[I+U+8]=r.x,S[I+U+9]=r.y,S[I+U+10]=r.z,S[I+U+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new nt(y,M)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ny(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Uy={[Iu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Uu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Nu]:"CUSTOM_TONE_MAPPING"};function Dy(i,e,t,n,r,s){let a=new gn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new jt;l.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new hn([0,2,0,0,2,0],2));let u=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vt(l,u),f=new nr(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,d=null,v=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let S=0;S<v.length;S++){let E=v[S];E.setSize&&E.setSize(y,M)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let M=a.width,S=a.height;v.length>0&&o===null&&(o=new gn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){let x=v[E];x.setSize&&x.setSize(M,S)}},this.begin=function(y,M){if(_||y.toneMapping===Kn&&v.length===0)return!1;if(d=M,M!==null){let S=M.width,E=M.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return b===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Kn,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=m,_=!0;let S=a,E=o;for(let x=0;x<v.length;x++){let T=v[x];T.enabled!==!1&&(T.render(y,E,S,M),T.needsSwap!==!1&&(S=E,E=E===o?c:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},ht.getTransfer(p)===bt&&(u.defines.SRGB_TRANSFER="");let x=Uy[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(d),y.render(h,f),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var em=new Jt,ch=new er(1,1),tm=new ua,nm=new Yo,im=new ya,Dp=[],Fp=[],Op=new Float32Array(16),Bp=new Float32Array(9),kp=new Float32Array(4);function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;kp.set(n),i.uniformMatrix2fv(this.addr,!1,kp),Kt(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Bp.set(n),i.uniformMatrix3fv(this.addr,!1,Bp),Kt(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),Kt(t,n)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=t.isReversedDepthBuffer()?Ql:jl,s=ch):s=em,t.setTexture2D(e||s,r)}function jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nm,r)}function Qy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||im,r)}function ev(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tm,r)}function tv(i){switch(i){case 5126:return Fy;case 35664:return Oy;case 35665:return By;case 35666:return ky;case 35674:return zy;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return Ky;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(i,e){i.uniform1fv(this.addr,e)}function iv(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function rv(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function sv(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function av(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ov(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lv(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cv(i,e){i.uniform1iv(this.addr,e)}function uv(i,e){i.uniform2iv(this.addr,e)}function hv(i,e){i.uniform3iv(this.addr,e)}function fv(i,e){i.uniform4iv(this.addr,e)}function dv(i,e){i.uniform1uiv(this.addr,e)}function pv(i,e){i.uniform2uiv(this.addr,e)}function mv(i,e){i.uniform3uiv(this.addr,e)}function gv(i,e){i.uniform4uiv(this.addr,e)}function xv(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ch:a=em;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function _v(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nm,s[a])}function yv(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||im,s[a])}function vv(i,e,t){let n=this.cache,r=e.length,s=sc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tm,s[a])}function bv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return hv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return vv}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tv(t.type)}},hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}},fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function zp(i,e){i.seq.push(e),i.map[e.id]=e}function Mv(i,e,t){let n=i.name,r=n.length;for(oh.lastIndex=0;;){let s=oh.exec(n),a=oh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zp(t,l===void 0?new uh(o,i,e):new hh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new fh(o),zp(t,h)),t=h}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Mv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sv=37297,wv=0;function Ev(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Vp=new it;function Tv(i){ht._getMatrix(Vp,ht.workingColorSpace,i);let e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ev(i.getShaderSource(e),o)}else return s}function Av(i,e){let t=Tv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Rv={[Iu]:"Linear",[Pu]:"Reinhard",[Lu]:"Cineon",[Ra]:"ACESFilmic",[Uu]:"AgX",[Du]:"Neutral",[Nu]:"Custom"};function Cv(i,e){let t=Rv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tc=new D;function Iv(){ht.getLuminanceCoefficients(tc);let i=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function Lv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ka(i){return i!==""}function Wp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(Uv,Fv)}var Dv=new Map;function Fv(i,e){let t=ut[e];if(t===void 0){let n=Dv.get(e);if(n!==void 0)t=ut[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}var Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(i){return i.replace(Ov,Bv)}function Bv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var kv={[Aa]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function zv(i){return kv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hv={[ir]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};function Vv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Hv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gv={[Er]:"ENVMAP_MODE_REFRACTION"};function Wv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xv={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function qv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[i.combine]||"ENVMAP_BLENDING_NONE"}function Yv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zv(t),l=Vv(t),u=Wv(t),h=qv(t),f=Yv(t),p=Pv(t),g=Lv(s),_=r.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),d.length>0&&(d+=`
`)):(m=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),d=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?ut.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Av("linearToOutputTexel",t.outputColorSpace),Iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),a=dh(a),a=Wp(a,t),a=Xp(a,t),o=dh(o),o=Wp(o,t),o=Xp(o,t),a=qp(a),o=qp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=v+m+a,y=v+d+o,M=Hp(r,r.VERTEX_SHADER,b),S=Hp(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(N){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(M)||"",I=r.getShaderInfoLog(S)||"",B=k.trim(),U=H.trim(),L=I.trim(),Y=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,S);else{let R=Gp(r,M,"vertex"),F=Gp(r,S,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+R+`
`+F)}else B!==""?Ye("WebGLProgram: Program Info Log:",B):(U===""||L==="")&&(O=!1);O&&(N.diagnostics={runnable:Y,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(M),r.deleteShader(S),x=new zs(r,_),T=Nv(r,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,Sv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}var Kv=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}};function $v(i){return i===sr||i===Ua||i===Da}function Jv(i,e,t,n,r,s){let a=new ys,o=new ph,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,N,k,H){let I=N.fog,B=k.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||U,L),O=Y&&Y.mapping===Ca?Y.image.height:null,R=p[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let F=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$=F!==void 0?F.length:0,K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let G,J,le,V;if(R){let Et=gi[R];G=Et.vertexShader,J=Et.fragmentShader}else{G=x.vertexShader,J=x.fragmentShader;let Et=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,Et,mt),le=Et.id,V=mt.id}let j=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),fe=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,ge=!!x.map,we=!!x.matcap,me=!!Y,be=!!x.aoMap,de=!!x.lightMap,ne=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Te=!!x.displacementMap,Ce=!!x.emissiveMap,Ge=!!x.metalnessMap,Ke=!!x.roughnessMap,z=x.anisotropy>0,tt=x.clearcoat>0,je=x.dispersion>0,P=x.retroreflectivity>0,w=x.iridescence>0,W=x.sheen>0,Z=x.transmission>0,re=z&&!!x.anisotropyMap,he=tt&&!!x.clearcoatMap,_e=tt&&!!x.clearcoatNormalMap,oe=tt&&!!x.clearcoatRoughnessMap,ce=w&&!!x.iridescenceMap,ye=w&&!!x.iridescenceThicknessMap,Ue=W&&!!x.sheenColorMap,xe=W&&!!x.sheenRoughnessMap,Se=!!x.specularMap,Be=!!x.specularColorMap,Ze=!!x.specularIntensityMap,et=Z&&!!x.transmissionMap,q=Z&&!!x.thicknessMap,Ee=!!x.gradientMap,ue=!!x.alphaMap,Ae=x.alphaTest>0,Ie=!!x.alphaHash,pe=!!x.extensions,Xe=Kn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let ke={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:J,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:fe,instancingColor:fe&&k.instanceColor!==null,instancingMorph:fe&&k.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ge,matcap:we,envMap:me,envMapMode:me&&Y.mapping,envMapCubeUVHeight:O,aoMap:be,lightMap:de,bumpMap:ne,normalMap:Me,displacementMap:Te,emissiveMap:Ce,normalMapObjectSpace:Me&&x.normalMapType===mp,normalMapTangentSpace:Me&&x.normalMapType===Jl,packedNormalMap:Me&&x.normalMapType===Jl&&$v(x.normalMap.format),metalnessMap:Ge,roughnessMap:Ke,anisotropy:z,anisotropyMap:re,clearcoat:tt,clearcoatMap:he,clearcoatNormalMap:_e,clearcoatRoughnessMap:oe,dispersion:je,retroreflection:P,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:W,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Be,specularIntensityMap:Ze,transmission:Z,transmissionMap:et,thicknessMap:q,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ae,alphaHash:Ie,combine:x.combine,mapUv:ge&&g(x.map.channel),aoMapUv:be&&g(x.aoMap.channel),lightMapUv:de&&g(x.lightMap.channel),bumpMapUv:ne&&g(x.bumpMap.channel),normalMapUv:Me&&g(x.normalMap.channel),displacementMapUv:Te&&g(x.displacementMap.channel),emissiveMapUv:Ce&&g(x.emissiveMap.channel),metalnessMapUv:Ge&&g(x.metalnessMap.channel),roughnessMapUv:Ke&&g(x.roughnessMap.channel),anisotropyMapUv:re&&g(x.anisotropyMap.channel),clearcoatMapUv:he&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:Se&&g(x.specularMap.channel),specularColorMapUv:Be&&g(x.specularColorMap.channel),specularIntensityMapUv:Ze&&g(x.specularIntensityMap.channel),transmissionMapUv:et&&g(x.transmissionMap.channel),thicknessMapUv:q&&g(x.thicknessMap.channel),alphaMapUv:ue&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||z),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(ge||ue),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:te,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ge&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Ce&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(d(T,x),v(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let T=p[x.type],C;if(T){let N=gi[T];C=Rp.clone(N.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Zv(i,T,x,r),l.push(C),u.set(T,C)),C}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:E}}function jv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Qv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,_,m,d){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:d},i[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function c(f,p,g,_,m,d,v){v.reversedDepth===!0&&(m=-m);let b=o(f,p,g,_,m,d);g.transmission>0?n.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(f,p,g,_,m,d){let v=o(f,p,g,_,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,p){t.length>1&&t.sort(f||Qv),n.length>1&&n.sort(p||Zp),r.length>1&&r.sort(p||Zp)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function eb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Kp,i.set(n,[a])):r>=s.length?(a=new Kp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function nb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ib=0;function rb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sb(i){let e=new tb,t=nb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Ve,a=new Ve;function o(l){let u=0,h=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,b=0,y=0,M=0,S=0,E=0,x=0,T=0,C=0;l.sort(rb);for(let k=0,H=l.length;k<H;k++){let I=l[k],B=I.color,U=I.intensity,L=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===sr?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*U,h+=B.g*U,f+=B.b*U;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],U);C++}else if(I.isSunLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,F=t.get(I);F.shadowIntensity=R.intensity,F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=F,n.sunShadowMap[g]=Y;let $=R.getViewportCount();for(let K=0;K<$;K++)n.sunShadowMatrix[_+K]=R.getMatrix(K),n.sunShadowCascade[_+K]=R._cascadeData[K];_+=$,g++}n.sun[p]=O,p++}else if(I.isDirectionalLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,F=t.get(I);F.shadowIntensity=R.intensity,F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,n.directionalShadow[m]=F,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=O,m++}else if(I.isSpotLight){let O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(B).multiplyScalar(U),O.distance=L,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[v]=O;let R=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,R.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=R.intensity,F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=Y,E++}v++}else if(I.isRectAreaLight){let O=e.get(I);O.color.copy(B).multiplyScalar(U),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=O,b++}else if(I.isPointLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let R=I.shadow,F=t.get(I);F.shadowIntensity=R.intensity,F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,F.shadowCameraNear=R.camera.near,F.shadowCameraFar=R.camera.far,n.pointShadow[d]=F,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=I.shadow.matrix,S++}n.point[d]=O,d++}else if(I.isHemisphereLight){let O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(U),O.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[y]=O,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==v||N.rectAreaLength!==b||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==E||N.numSpotMaps!==x||N.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=d,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=v,N.rectAreaLength=b,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=E,N.numSpotMaps=x,N.numLightProbes=C,n.version=ib++)}function c(l,u){let h=0,f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let v=0,b=l.length;v<b;v++){let y=l[v];if(y.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),h++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),f++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function $p(i){let e=new sb(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ab(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new $p(i),e.set(r,[o])):s>=a.length?(o=new $p(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`,cb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ub=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Jp=new Ve,Ba=new D,lh=new D;function hb(i,e,t){let n=new Es,r=new nt,s=new nt,a=new St,o=new jo,c=new Qo,l={},u=t.maxTextureSize,h={[vn]:dn,[dn]:vn,[pn]:pn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new jt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let d=this.type;this.render=function(S,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===ul&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Aa);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(pi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=d!==this.type;H&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=S.length;I<B;I++){let U=S[I],L=U.shadow;if(L===void 0){Ye("WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let Y=L.getFrameExtents();r.multiply(Y),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=O,L.map===null||H===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ls){if(U.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new gn(r.x,r.y,{format:sr,type:jn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),L.map.texture.name=U.name+".shadowMap",L.map.depthTexture=new er(r.x,r.y,An),L.map.depthTexture.name=U.name+".shadowMapDepth",L.map.depthTexture.format=ci,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=zt,L.map.depthTexture.magFilter=zt}else U.isPointLight?(L.map=new nc(r.x),L.map.depthTexture=new $o(r.x,Jn)):(L.map=new gn(r.x,r.y),L.map.depthTexture=new er(r.x,r.y,Jn)),L.map.depthTexture.name=U.name+".shadowMap",L.map.depthTexture.format=ci,this.type===Aa?(L.map.depthTexture.compareFunction=O?Ql:jl,L.map.depthTexture.minFilter=Ht,L.map.depthTexture.magFilter=Ht):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=zt,L.map.depthTexture.magFilter=zt);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let R=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();U.isPointLight!==!0&&L.updateMatrices(U,x);for(let F=0;F<R;F++){let $=L.getCamera(F);if(U.isPointLight){let K=L.camera,G=L.matrix,J=U.distance||K.far;J!==K.far&&(K.far=J,K.updateProjectionMatrix()),Ba.setFromMatrixPosition(U.matrixWorld),K.position.copy(Ba),lh.copy(K.position),lh.add(cb[F]),K.up.copy(ub[F]),K.lookAt(lh),K.updateMatrixWorld(),G.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Jp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Jp,K.coordinateSystem,K.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,F),i.clear();else{F===0&&(i.setRenderTarget(L.map),i.clear());let K=L.getViewport(F);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(a)}n=L.getFrustum(F),y(E,x,$,U,this.type)}L.isPointLightShadow!==!0&&this.type===Ls&&v(L,x),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,N)};function v(S,E){let x=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new gn(r.x,r.y,{format:sr,type:jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,x,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,x,p,_,null)}function b(S,E,x,T){let C=null,N=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let k=C.uuid,H=E.uuid,I=l[k];I===void 0&&(I={},l[k]=I);let B=I[H];B===void 0&&(B=C.clone(),I[H]=B,E.addEventListener("dispose",M)),C=B}if(C.visible=E.visible,C.wireframe=E.wireframe,T===Ls?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:h[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=x}return C}function y(S,E,x,T,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ls)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let H=e.update(S),I=S.material;if(Array.isArray(I)){let B=H.groups;for(let U=0,L=B.length;U<L;U++){let Y=B[U],O=I[Y.materialIndex];if(O&&O.visible){let R=b(S,O,T,C);S.onBeforeShadow(i,S,E,x,H,R,Y),i.renderBufferDirect(x,null,H,R,S,Y),S.onAfterShadow(i,S,E,x,H,R,Y)}}}else if(I.visible){let B=b(S,I,T,C);S.onBeforeShadow(i,S,E,x,H,B,null),i.renderBufferDirect(x,null,H,B,S,null),S.onAfterShadow(i,S,E,x,H,B,null)}}let k=S.children;for(let H=0,I=k.length;H<I;H++)y(k[H],E,x,T,C)}function M(S){S.target.removeEventListener("dispose",M);for(let x in l){let T=l[x],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function fb(i,e){function t(){let q=!1,Ee=new St,ue=null,Ae=new St(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!q&&(i.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,pe,Xe,ke,Et){Et===!0&&(Ie*=ke,pe*=ke,Xe*=ke),Ee.set(Ie,pe,Xe,ke),Ae.equals(Ee)===!1&&(i.clearColor(Ie,pe,Xe,ke),Ae.copy(Ee))},reset:function(){q=!1,ue=null,Ae.set(-1,0,0,0)}}}function n(){let q=!1,Ee=!1,ue=null,Ae=null,Ie=null;return{setReversed:function(pe){if(Ee!==pe){let Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ee=pe;let ke=Ie;Ie=null,this.setClear(ke)}},getReversed:function(){return Ee},setTest:function(pe){pe?j(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!q&&(i.depthMask(pe),ue=pe)},setFunc:function(pe){if(Ee&&(pe=Tp[pe]),Ae!==pe){switch(pe){case Bo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=pe}},setLocked:function(pe){q=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,Ee&&(pe=1-pe),i.clearDepth(pe))},reset:function(){q=!1,ue=null,Ae=null,Ie=null,Ee=!1}}}function r(){let q=!1,Ee=null,ue=null,Ae=null,Ie=null,pe=null,Xe=null,ke=null,Et=null;return{setTest:function(mt){q||(mt?j(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(mt){Ee!==mt&&!q&&(i.stencilMask(mt),Ee=mt)},setFunc:function(mt,ve,se){(ue!==mt||Ae!==ve||Ie!==se)&&(i.stencilFunc(mt,ve,se),ue=mt,Ae=ve,Ie=se)},setOp:function(mt,ve,se){(pe!==mt||Xe!==ve||ke!==se)&&(i.stencilOp(mt,ve,se),pe=mt,Xe=ve,ke=se)},setLocked:function(mt){q=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){q=!1,Ee=null,ue=null,Ae=null,Ie=null,pe=null,Xe=null,ke=null,Et=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,b=null,y=null,M=null,S=null,E=null,x=new $e(0,0,0),T=0,C=!1,N=null,k=null,H=null,I=null,B=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,Y=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=Y>=2);let R=null,F={},$=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),G=new St().fromArray($),J=new St().fromArray(K);function le(q,Ee,ue,Ae){let Ie=new Uint8Array(4),pe=i.createTexture();i.bindTexture(q,pe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ue;Xe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Ee+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return pe}let V={};V[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ds),ne(!1),Me(Su),j(i.CULL_FACE),be(pi);function j(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function te(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function fe(q,Ee){return f[q]!==Ee?(i.bindFramebuffer(q,Ee),f[q]=Ee,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ae(q,Ee){let ue=g,Ae=!1;if(q){ue=p.get(Ee),ue===void 0&&(ue=[],p.set(Ee,ue));let Ie=q.textures;if(ue.length!==Ie.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Xe=Ie.length;pe<Xe;pe++)ue[pe]=i.COLOR_ATTACHMENT0+pe;ue.length=Ie.length,Ae=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ue)}function ge(q){return _!==q?(i.useProgram(q),_=q,!0):!1}let we={[wr]:i.FUNC_ADD,[Yd]:i.FUNC_SUBTRACT,[Zd]:i.FUNC_REVERSE_SUBTRACT};we[Kd]=i.MIN,we[$d]=i.MAX;let me={[Jd]:i.ZERO,[jd]:i.ONE,[Qd]:i.SRC_COLOR,[Au]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[ip]:i.DST_COLOR,[tp]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA,[ap]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function be(q,Ee,ue,Ae,Ie,pe,Xe,ke,Et,mt){if(q===pi){m===!0&&(te(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),q!==qd){if(q!==d||mt!==C){if((v!==wr||M!==wr)&&(i.blendEquation(i.FUNC_ADD),v=wr,M=wr),mt)switch(q){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",q);break}else switch(q){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",q);break}b=null,y=null,S=null,E=null,x.set(0,0,0),T=0,d=q,C=mt}return}Ie=Ie||Ee,pe=pe||ue,Xe=Xe||Ae,(Ee!==v||Ie!==M)&&(i.blendEquationSeparate(we[Ee],we[Ie]),v=Ee,M=Ie),(ue!==b||Ae!==y||pe!==S||Xe!==E)&&(i.blendFuncSeparate(me[ue],me[Ae],me[pe],me[Xe]),b=ue,y=Ae,S=pe,E=Xe),(ke.equals(x)===!1||Et!==T)&&(i.blendColor(ke.r,ke.g,ke.b,Et),x.copy(ke),T=Et),d=q,C=!1}function de(q,Ee){q.side===pn?te(i.CULL_FACE):j(i.CULL_FACE);let ue=q.side===dn;Ee&&(ue=!ue),ne(ue),q.blending===Ns&&q.transparent===!1?be(pi):be(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let Ae=q.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ce(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function Me(q){q!==Wd?(j(i.CULL_FACE),q!==k&&(q===Su?i.cullFace(i.BACK):q===Xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),k=q}function Te(q){q!==H&&(L&&i.lineWidth(q),H=q)}function Ce(q,Ee,ue){q?(j(i.POLYGON_OFFSET_FILL),(I!==Ee||B!==ue)&&(I=Ee,B=ue,a.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,ue))):te(i.POLYGON_OFFSET_FILL)}function Ge(q){q?j(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function Ke(q){q===void 0&&(q=i.TEXTURE0+U-1),R!==q&&(i.activeTexture(q),R=q)}function z(q,Ee,ue){ue===void 0&&(R===null?ue=i.TEXTURE0+U-1:ue=R);let Ae=F[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},F[ue]=Ae),(Ae.type!==q||Ae.texture!==Ee)&&(R!==ue&&(i.activeTexture(ue),R=ue),i.bindTexture(q,Ee||V[q]),Ae.type=q,Ae.texture=Ee)}function tt(){let q=F[R];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function w(){try{i.texSubImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function W(){try{i.texSubImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function he(){try{i.texStorage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function _e(){try{i.texStorage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function oe(){try{i.texImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function ce(){try{i.texImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function ye(q){return h[q]!==void 0?h[q]:i.getParameter(q)}function Ue(q,Ee){h[q]!==Ee&&(i.pixelStorei(q,Ee),h[q]=Ee)}function xe(q){G.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),G.copy(q))}function Se(q){J.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function Be(q,Ee){let ue=l.get(Ee);ue===void 0&&(ue=new WeakMap,l.set(Ee,ue));let Ae=ue.get(q);Ae===void 0&&(Ae=i.getUniformBlockIndex(Ee,q.name),ue.set(q,Ae))}function Ze(q,Ee){let Ae=l.get(Ee).get(q);c.get(Ee)!==Ae&&(i.uniformBlockBinding(Ee,Ae,q.__bindingPointIndex),c.set(Ee,Ae))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},R=null,F={},f={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,b=null,y=null,M=null,S=null,E=null,x=new $e(0,0,0),T=0,C=!1,N=null,k=null,H=null,I=null,B=null,G.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:te,bindFramebuffer:fe,drawBuffers:ae,useProgram:ge,setBlending:be,setMaterial:de,setFlipSided:ne,setCullFace:Me,setLineWidth:Te,setPolygonOffset:Ce,setScissorTest:Ge,activeTexture:Ke,bindTexture:z,unbindTexture:tt,compressedTexImage2D:je,compressedTexImage3D:P,texImage2D:oe,texImage3D:ce,pixelStorei:Ue,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:Ze,texStorage2D:he,texStorage3D:_e,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:re,scissor:xe,viewport:Se,reset:et}}function db(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return g?new OffscreenCanvas(P,w):gs("canvas")}function m(P,w,W){let Z=1,re=je(P);if((re.width>W||re.height>W)&&(Z=W/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(Z*re.width),_e=Math.floor(Z*re.height);f===void 0&&(f=_(he,_e));let oe=w?_(he,_e):f;return oe.width=he,oe.height=_e,oe.getContext("2d").drawImage(P,0,0,he,_e),Ye("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+_e+")."),oe}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function d(P){return P.generateMipmaps}function v(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,w,W,Z,re,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e;Z&&(_e=e.get("EXT_texture_norm16"),_e||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===i.RED&&(W===i.FLOAT&&(oe=i.R32F),W===i.HALF_FLOAT&&(oe=i.R16F),W===i.UNSIGNED_BYTE&&(oe=i.R8),W===i.UNSIGNED_SHORT&&_e&&(oe=_e.R16_EXT),W===i.SHORT&&_e&&(oe=_e.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.R8UI),W===i.UNSIGNED_SHORT&&(oe=i.R16UI),W===i.UNSIGNED_INT&&(oe=i.R32UI),W===i.BYTE&&(oe=i.R8I),W===i.SHORT&&(oe=i.R16I),W===i.INT&&(oe=i.R32I)),w===i.RG&&(W===i.FLOAT&&(oe=i.RG32F),W===i.HALF_FLOAT&&(oe=i.RG16F),W===i.UNSIGNED_BYTE&&(oe=i.RG8),W===i.UNSIGNED_SHORT&&_e&&(oe=_e.RG16_EXT),W===i.SHORT&&_e&&(oe=_e.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RG8UI),W===i.UNSIGNED_SHORT&&(oe=i.RG16UI),W===i.UNSIGNED_INT&&(oe=i.RG32UI),W===i.BYTE&&(oe=i.RG8I),W===i.SHORT&&(oe=i.RG16I),W===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),W===i.UNSIGNED_INT&&(oe=i.RGB32UI),W===i.BYTE&&(oe=i.RGB8I),W===i.SHORT&&(oe=i.RGB16I),W===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),W===i.UNSIGNED_INT&&(oe=i.RGBA32UI),W===i.BYTE&&(oe=i.RGBA8I),W===i.SHORT&&(oe=i.RGBA16I),W===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGB16_EXT),W===i.SHORT&&_e&&(oe=_e.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),w===i.RGBA){let ce=he?la:ht.getTransfer(re);W===i.FLOAT&&(oe=i.RGBA32F),W===i.HALF_FLOAT&&(oe=i.RGBA16F),W===i.UNSIGNED_BYTE&&(oe=ce===bt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGBA16_EXT),W===i.SHORT&&_e&&(oe=_e.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(P,w){let W;return P?w===null||w===Jn||w===Fs?W=i.DEPTH24_STENCIL8:w===An?W=i.DEPTH32F_STENCIL8:w===Ds&&(W=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jn||w===Fs?W=i.DEPTH_COMPONENT24:w===An?W=i.DEPTH_COMPONENT32F:w===Ds&&(W=i.DEPTH_COMPONENT16),W}function S(P,w){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){let w=P.target;w.removeEventListener("dispose",E),T(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function x(P){let w=P.target;w.removeEventListener("dispose",x),N(w)}function T(P){let w=n.get(P);if(w.__webglInit===void 0)return;let W=P.source,Z=p.get(W);if(Z){let re=Z[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(P),Object.keys(Z).length===0&&p.delete(W)}n.remove(P)}function C(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let W=P.source,Z=p.get(W);delete Z[w.__cacheKey],a.memory.textures--}function N(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let re=0;re<w.__webglFramebuffer[Z].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[Z][re]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let W=P.textures;for(let Z=0,re=W.length;Z<re;Z++){let he=n.get(W[Z]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(P)}let k=0;function H(){k=0}function I(){return k}function B(P){k=P}function U(){let P=k;return P>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,P}function L(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Y(P,w){let W=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let Z=P.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,P,w);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function O(P,w){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){te(W,P,w);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function R(P,w){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){te(W,P,w);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function F(P,w){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){fe(W,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}let $={[ji]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},K={[zt]:i.NEAREST,[dl]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},G={[xp]:i.NEVER,[Mp]:i.ALWAYS,[_p]:i.LESS,[jl]:i.LEQUAL,[yp]:i.EQUAL,[Ql]:i.GEQUAL,[vp]:i.GREATER,[bp]:i.NOTEQUAL};function J(P,w){if(w.type===An&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ht||w.magFilter===Us||w.magFilter===Tr||w.magFilter===$n||w.minFilter===Ht||w.minFilter===Us||w.minFilter===Tr||w.minFilter===$n)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,$[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,K[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zt||w.minFilter!==Tr&&w.minFilter!==$n||w.type===An&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(P,w){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));let Z=w.source,re=p.get(Z);re===void 0&&(re={},p.set(Z,re));let he=L(w);if(he!==P.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),re[he].usedTimes++;let _e=re[P.__cacheKey];_e!==void 0&&(re[P.__cacheKey].usedTimes--,_e.usedTimes===0&&C(w)),P.__cacheKey=he,P.__webglTexture=re[he].texture}return W}function V(P,w,W){return Math.floor(Math.floor(P/W)/w)}function j(P,w,W,Z){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,Z,w.data);else{he.sort((Ue,xe)=>Ue.start-xe.start);let _e=0;for(let Ue=1;Ue<he.length;Ue++){let xe=he[_e],Se=he[Ue],Be=xe.start+xe.count,Ze=V(Se.start,w.width,4),et=V(xe.start,w.width,4);Se.start<=Be+1&&Ze===et&&V(Se.start+Se.count-1,w.width,4)===Ze?xe.count=Math.max(xe.count,Se.start+Se.count-xe.start):(++_e,he[_e]=Se)}he.length=_e+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Ue=0,xe=he.length;Ue<xe;Ue++){let Se=he[Ue],Be=Math.floor(Se.start/4),Ze=Math.ceil(Se.count/4),et=Be%w.width,q=Math.floor(Be/w.width),Ee=Ze,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,et,q,Ee,ue,W,Z,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function te(P,w,W){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);let re=le(P,w),he=w.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+W);let _e=n.get(he);if(he.version!==_e.__version||re===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ue=ht.getPrimaries(ht.workingColorSpace),Ae=w.colorSpace===Qn?null:ht.getPrimaries(w.colorSpace),Ie=w.colorSpace===Qn||ue===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ce=m(w.image,!1,r.maxTextureSize);ce=tt(w,ce);let ye=s.convert(w.format,w.colorSpace),Ue=s.convert(w.type),xe=y(w.internalFormat,ye,Ue,w.normalized,w.colorSpace,w.isVideoTexture);J(Z,w);let Se,Be=w.mipmaps,Ze=w.isVideoTexture!==!0,et=_e.__version===void 0||re===!0,q=he.dataReady,Ee=S(w,ce);if(w.isDepthTexture)xe=M(w.format===rr,w.type),et&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,xe,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,xe,ce.width,ce.height,0,ye,Ue,null));else if(w.isDataTexture)if(Be.length>0){Ze&&et&&t.texStorage2D(i.TEXTURE_2D,Ee,xe,Be[0].width,Be[0].height);for(let ue=0,Ae=Be.length;ue<Ae;ue++)Se=Be[ue],Ze?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,ye,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,ue,xe,Se.width,Se.height,0,ye,Ue,Se.data);w.generateMipmaps=!1}else Ze?(et&&t.texStorage2D(i.TEXTURE_2D,Ee,xe,ce.width,ce.height),q&&j(w,ce,ye,Ue)):t.texImage2D(i.TEXTURE_2D,0,xe,ce.width,ce.height,0,ye,Ue,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,xe,Be[0].width,Be[0].height,ce.depth);for(let ue=0,Ae=Be.length;ue<Ae;ue++)if(Se=Be[ue],w.format!==Rn)if(ye!==null)if(Ze){if(q)if(w.layerUpdates.size>0){let Ie=Ju(Se.width,Se.height,w.format,w.type);for(let pe of w.layerUpdates){let Xe=Se.data.subarray(pe*Ie/Se.data.BYTES_PER_ELEMENT,(pe+1)*Ie/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,pe,Se.width,Se.height,1,ye,Xe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ce.depth,ye,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,xe,Se.width,Se.height,ce.depth,0,Se.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ce.depth,ye,Ue,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,xe,Se.width,Se.height,ce.depth,0,ye,Ue,Se.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ze&&et&&t.texStorage2D(i.TEXTURE_2D,Ee,xe,Be[0].width,Be[0].height);for(let ue=0,Ae=Be.length;ue<Ae;ue++)Se=Be[ue],w.format!==Rn?ye!==null?Ze?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,xe,Se.width,Se.height,0,Se.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,ye,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,ue,xe,Se.width,Se.height,0,ye,Ue,Se.data)}else if(w.isDataArrayTexture)if(Ze){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,xe,ce.width,ce.height,ce.depth),q)if(w.layerUpdates.size>0){let ue=Ju(ce.width,ce.height,w.format,w.type);for(let Ae of w.layerUpdates){let Ie=ce.data.subarray(Ae*ue/ce.data.BYTES_PER_ELEMENT,(Ae+1)*ue/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,ce.width,ce.height,1,ye,Ue,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ue,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ce.width,ce.height,ce.depth,0,ye,Ue,ce.data);else if(w.isData3DTexture)Ze?(et&&t.texStorage3D(i.TEXTURE_3D,Ee,xe,ce.width,ce.height,ce.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ue,ce.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ce.width,ce.height,ce.depth,0,ye,Ue,ce.data);else if(w.isFramebufferTexture){if(et)if(Ze)t.texStorage2D(i.TEXTURE_2D,Ee,xe,ce.width,ce.height);else{let ue=ce.width,Ae=ce.height;for(let Ie=0;Ie<Ee;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,xe,ue,Ae,0,ye,Ue,null),ue>>=1,Ae>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ce.parentNode!==ue){ue.appendChild(ce),h.add(w),ue.onpaint=Ae=>{let Ie=Ae.changedElements;for(let pe of h)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ie=i.RGBA,pe=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,Xe,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ze&&et){let ue=je(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ee,xe,ue.width,ue.height)}for(let ue=0,Ae=Be.length;ue<Ae;ue++)Se=Be[ue],Ze?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye,Ue,Se):t.texImage2D(i.TEXTURE_2D,ue,xe,ye,Ue,Se);w.generateMipmaps=!1}else if(Ze){if(et){let ue=je(ce);t.texStorage2D(i.TEXTURE_2D,Ee,xe,ue.width,ue.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ue,ce)}else t.texImage2D(i.TEXTURE_2D,0,xe,ye,Ue,ce);d(w)&&v(Z),_e.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,W){if(w.image.length!==6)return;let Z=le(P,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let he=n.get(re);if(re.version!==he.__version||Z===!0){t.activeTexture(i.TEXTURE0+W);let _e=ht.getPrimaries(ht.workingColorSpace),oe=w.colorSpace===Qn?null:ht.getPrimaries(w.colorSpace),ce=w.colorSpace===Qn||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let pe=0;pe<6;pe++)!ye&&!Ue?xe[pe]=m(w.image[pe],!0,r.maxCubemapSize):xe[pe]=Ue?w.image[pe].image:w.image[pe],xe[pe]=tt(w,xe[pe]);let Se=xe[0],Be=s.convert(w.format,w.colorSpace),Ze=s.convert(w.type),et=y(w.internalFormat,Be,Ze,w.normalized,w.colorSpace),q=w.isVideoTexture!==!0,Ee=he.__version===void 0||Z===!0,ue=re.dataReady,Ae=S(w,Se);J(i.TEXTURE_CUBE_MAP,w);let Ie;if(ye){q&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,Se.width,Se.height);for(let pe=0;pe<6;pe++){Ie=xe[pe].mipmaps;for(let Xe=0;Xe<Ie.length;Xe++){let ke=Ie[Xe];w.format!==Rn?Be!==null?q?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,et,ke.width,ke.height,0,ke.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,ke.width,ke.height,Be,Ze,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,et,ke.width,ke.height,0,Be,Ze,ke.data)}}}else{if(Ie=w.mipmaps,q&&Ee){Ie.length>0&&Ae++;let pe=je(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ue){q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,xe[pe].width,xe[pe].height,Be,Ze,xe[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,et,xe[pe].width,xe[pe].height,0,Be,Ze,xe[pe].data);for(let Xe=0;Xe<Ie.length;Xe++){let Et=Ie[Xe].image[pe].image;q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Et.width,Et.height,Be,Ze,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,et,Et.width,Et.height,0,Be,Ze,Et.data)}}else{q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,Ze,xe[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,et,Be,Ze,xe[pe]);for(let Xe=0;Xe<Ie.length;Xe++){let ke=Ie[Xe];q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Be,Ze,ke.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,et,Be,Ze,ke.image[pe])}}}d(w)&&v(i.TEXTURE_CUBE_MAP),he.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ae(P,w,W,Z,re,he){let _e=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ce=y(W.internalFormat,_e,oe,W.normalized,W.colorSpace),ye=n.get(w),Ue=n.get(W);if(Ue.__renderTarget=w,!ye.__hasExternalTextures){let xe=Math.max(1,w.width>>he),Se=Math.max(1,w.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,ce,xe,Se,w.depth,0,_e,oe,null):t.texImage2D(re,he,ce,xe,Se,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ke(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,re,Ue.__webglTexture,0,Ge(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,re,Ue.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let Z=w.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,he=M(w.stencilBuffer,re),_e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(w),he,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(w),he,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}else{let Z=w.textures;for(let re=0;re<Z.length;re++){let he=Z[re],_e=s.convert(he.format,he.colorSpace),oe=s.convert(he.type),ce=y(he.internalFormat,_e,oe,he.normalized,he.colorSpace);Ke(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(w),ce,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(w),ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(P,w,W){let Z=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);if(re.__renderTarget=w,(!re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(re.__webglInit===void 0&&(re.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),J(i.TEXTURE_CUBE_MAP,w.depthTexture);let ye=s.convert(w.depthTexture.format),Ue=s.convert(w.depthTexture.type),xe;w.depthTexture.format===ci?xe=i.DEPTH_COMPONENT24:w.depthTexture.format===rr&&(xe=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xe,w.width,w.height,0,ye,Ue,null)}}else Y(w.depthTexture,0);let he=re.__webglTexture,_e=Ge(w),oe=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ce=w.depthTexture.format===rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ci)Ke(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,he,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,he,0);else if(w.depthTexture.format===rr)Ke(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,he,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(P){let w=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=Z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)we(w.__webglFramebuffer[Z],P,Z);else{let Z=P.texture.mipmaps;Z&&Z.length>0?we(w.__webglFramebuffer[0],P,0):we(w.__webglFramebuffer,P,0)}else if(W){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),ge(w.__webglDepthbuffer[Z],P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ge(w.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(P,w,W){let Z=n.get(P);w!==void 0&&ae(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&me(P)}function de(P){let w=P.texture,W=n.get(P),Z=n.get(w);P.addEventListener("dispose",x);let re=P.textures,he=P.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,a.memory.textures++),he){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)W.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else W.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)W.__webglFramebuffer[oe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let oe=0,ce=re.length;oe<ce;oe++){let ye=n.get(re[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ke(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let ce=re[oe];W.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);let ye=s.convert(ce.format,ce.colorSpace),Ue=s.convert(ce.type),xe=y(ce.internalFormat,ye,Ue,ce.normalized,ce.colorSpace,P.isXRRenderTarget===!0),Se=Ge(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,xe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),J(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)ae(W.__webglFramebuffer[oe][ce],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ae(W.__webglFramebuffer[oe],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);d(w)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,ce=re.length;oe<ce;oe++){let ye=re[oe],Ue=n.get(ye),xe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ue.__webglTexture),J(xe,ye),ae(W.__webglFramebuffer,P,ye,i.COLOR_ATTACHMENT0+oe,xe,0),d(ye)&&v(xe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),J(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)ae(W.__webglFramebuffer[ce],P,w,i.COLOR_ATTACHMENT0,oe,ce);else ae(W.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,oe,0);d(w)&&v(oe),t.unbindTexture()}P.depthBuffer&&me(P)}function ne(P){let w=P.textures;for(let W=0,Z=w.length;W<Z;W++){let re=w[W];if(d(re)){let he=b(P),_e=n.get(re).__webglTexture;t.bindTexture(he,_e),v(he),t.unbindTexture()}}}let Me=[],Te=[];function Ce(P){if(P.samples>0){if(Ke(P)===!1){let w=P.textures,W=P.width,Z=P.height,re=i.COLOR_BUFFER_BIT,he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(P),oe=w.length>1;if(oe)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let ce=P.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ue=n.get(w[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,re,i.NEAREST),c===!0&&(Me.length=0,Te.length=0,Me.push(i.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Me.push(he),Te.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ue=n.get(w[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ge(P){return Math.min(r.maxSamples,P.samples)}function Ke(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(P){let w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function tt(P,w){let W=P.colorSpace,Z=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==fn&&W!==Qn&&(ht.getTransfer(W)===bt?(Z!==Rn||re!==bn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",W)),w}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=R,this.setTextureCube=F,this.rebindTextures=be,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(i,e){function t(n,r=Qn){let s,a=ht.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===Rn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===sr)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===La||n===Na)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Ml||n===Sl||n===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Ua||n===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===Tl)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Al)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return s.COMPRESSED_R11_EAC;if(n===Cl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return s.COMPRESSED_RG11_EAC;if(n===Il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Ll||n===Nl||n===Ul||n===Dl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xl)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Kl||n===Da||n===$l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends ui{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new gh,d={},v=t.getContextAttributes(),b=null,y=null,M=[],S=[],E=new nt,x=null,T=null,C=new qt;C.viewport=new St;let N=new qt;N.viewport=new St;let k=[C,N],H=new ll,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=M[V];return j===void 0&&(j=new vs,M[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=M[V];return j===void 0&&(j=new vs,M[V]=j),j.getGripSpace()},this.getHand=function(V){let j=M[V];return j===void 0&&(j=new vs,M[V]=j),j.getHandSpace()};function U(V){let j=S.indexOf(V.inputSource);if(j===-1)return;let te=M[j];te!==void 0&&(te.update(V.inputSource,V.frame,l||a),te.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<M.length;V++){let j=S[V];j!==null&&(S[V]=null,M[V].disconnect(j))}I=null,B=null,m.reset();for(let V in d)delete d[V];if(e.setRenderTarget(b),p=null,f=null,h=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),T!==null){let V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",L),r.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,fe=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?rr:ci,fe=v.stencil?Fs:Jn);let ge={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gn(f.textureWidth,f.textureHeight,{format:Rn,type:bn,depthTexture:new er(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gn(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(V){for(let j=0;j<V.removed.length;j++){let te=V.removed[j],fe=S.indexOf(te);fe>=0&&(S[fe]=null,M[fe].disconnect(te))}for(let j=0;j<V.added.length;j++){let te=V.added[j],fe=S.indexOf(te);if(fe===-1){for(let ge=0;ge<M.length;ge++)if(ge>=S.length){S.push(te),fe=ge;break}else if(S[ge]===null){S[ge]=te,fe=ge;break}if(fe===-1)break}let ae=M[fe];ae&&ae.connect(te)}}let O=new D,R=new D;function F(V,j,te){O.setFromMatrixPosition(j.matrixWorld),R.setFromMatrixPosition(te.matrixWorld);let fe=O.distanceTo(R),ae=j.projectionMatrix.elements,ge=te.projectionMatrix.elements,we=ae[14]/(ae[10]-1),me=ae[14]/(ae[10]+1),be=(ae[9]+1)/ae[5],de=(ae[9]-1)/ae[5],ne=(ae[8]-1)/ae[0],Me=(ge[8]+1)/ge[0],Te=we*ne,Ce=we*Me,Ge=fe/(-ne+Me),Ke=Ge*-ne;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ(Ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ae[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let z=we+Ge,tt=me+Ge,je=Te-Ke,P=Ce+(fe-Ke),w=be*me/tt*z,W=de*me/tt*z;V.projectionMatrix.makePerspective(je,P,w,W,z,tt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let j=V.near,te=V.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(te=m.depthFar)),H.near=N.near=C.near=j,H.far=N.far=C.far=te,(I!==H.near||B!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,B=H.far),H.layers.mask=V.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let fe=V.parent,ae=H.cameras;$(H,fe);for(let ge=0;ge<ae.length;ge++)$(ae[ge],fe);ae.length===2?F(H,C,N):H.projectionMatrix.copy(C.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),K(V,H,fe)};function K(V,j,te){te===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(te.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=xr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(V){return d[V]};let G=null;function J(V,j){if(u=j.getViewerPose(l||a),g=j,u!==null){let te=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let fe=!1;te.length!==H.cameras.length&&(H.cameras.length=0,fe=!0);for(let me=0;me<te.length;me++){let be=te[me],de=null;if(p!==null)de=p.getViewport(be);else{let Me=h.getViewSubImage(f,be);de=Me.viewport,me===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let ne=k[me];ne===void 0&&(ne=new qt,ne.layers.enable(me),ne.viewport=new St,k[me]=ne),ne.matrix.fromArray(be.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(be.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(de.x,de.y,de.width,de.height),me===0&&(H.matrix.copy(ne.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),fe===!0&&H.cameras.push(ne)}let ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let me=h.getDepthInformation(te[0]);me&&me.isValid&&me.texture&&m.init(me,r.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let me=0;me<te.length;me++){let be=te[me].camera;if(be){let de=d[be];de||(de=new va,d[be]=de);let ne=h.getCameraImage(be);de.sourceTexture=ne}}}}for(let te=0;te<M.length;te++){let fe=S[te],ae=M[te];fe!==null&&ae!==void 0&&ae.update(fe,j,l||a)}G&&G(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let le=new jp;le.setAnimationLoop(J),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}},xb=new Ve,rm=new it;rm.set(-1,0,0,0,1,0,0,0,1);function _b(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,b,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rm),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function yb(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let S=M.program;n.uniformBlockBinding(y,S)}function l(y,M){let S=r[y.id];S===void 0&&(m(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",v));let E=M.program;n.updateUBOMapping(y,E);let x=e.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function u(y){let M=h();y.__bindingPointIndex=M;let S=i.createBuffer(),E=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=r[y.id],S=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,T=S.length;x<T;x++){let C=S[x];if(Array.isArray(C))for(let N=0,k=C.length;N<k;N++)p(C[N],x,N,E);else p(C,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,M,S,E){if(_(y,M,S,E)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let k=T[N],H=d(k);g(k,y.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,S){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,S)}function _(y,M,S,E){let x=y.value,T=M+"_"+S;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let C=E[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let M=y.uniforms,S=0,E=16;for(let T=0,C=M.length;T<C;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let k=0,H=N.length;k<H;k++){let I=N[k],B=Array.isArray(I.value)?I.value:[I.value];for(let U=0,L=B.length;U<L;U++){let Y=B[U],O=d(Y),R=S%E,F=R%O.boundary,$=R+F;S+=F,$!==0&&E-$<O.storage&&(S+=E-$),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}let x=S%E;return x>0&&(S+=E-x),y.__size=S,y.__cache={},this}function d(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function b(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:b}}var vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function bb(){return mi===null&&(mi=new ws(vb,16,16,sr,jn),mi.name="DFG_LUT",mi.minFilter=Ht,mi.magFilter=Ht,mi.wrapS=kn,mi.wrapT=kn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var ic=class{constructor(e={}){let{canvas:t=Sp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=p,m=new Set([vl,yl,_l]),d=new Set([bn,Jn,Ds,Fs,ml,gl]),v=new Uint32Array(4),b=new Int32Array(4),y=new D,M=null,S=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,k=null,H=null,I=null,B=null;this._outputColorSpace=Dt;let U=0,L=0,Y=null,O=-1,R=null,F=new St,$=new St,K=null,G=new $e(0),J=0,le=t.width,V=t.height,j=1,te=null,fe=null,ae=new St(0,0,le,V),ge=new St(0,0,le,V),we=!1,me=new Es,be=!1,de=!1,ne=new Ve,Me=new D,Te=new St,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ke(){return Y===null?j:1}let z=n;function tt(A,X){return t.getContext(A,X)}let je,P,w,W,Z,re,he,_e,oe,ce,ye,Ue,xe,Se,Be,Ze,et,q,Ee,ue,Ae,Ie,pe;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let X="webgl2";if(z=tt(X,A),z===null)throw tt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(A){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Qe("WebGLRenderer: "+A.message),A}function Xe(){je=new Ry(z),je.init(),Ae=new pb(z,je),P=new _y(z,je,e,Ae),w=new fb(z,je),P.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),H=z.createFramebuffer(),I=z.createFramebuffer(),B=z.createFramebuffer(),W=new Py(z),Z=new jv,re=new db(z,je,w,Z,P,Ae,W),he=new Ay(C),_e=new N0(z),Ie=new gy(z,_e),oe=new Cy(z,_e,W,Ie),ce=new Ny(z,oe,_e,Ie,W),q=new Ly(z,P,re),Be=new yy(Z),ye=new Jv(C,he,je,P,Ie,Be),Ue=new _b(C,Z),xe=new eb,Se=new ab(je),et=new my(C,he,w,ce,g,c),Ze=new hb(C,ce,P),pe=new yb(z,W,P,w),Ee=new xy(z,je,W),ue=new Iy(z,je,W),W.programs=ye.programs,C.capabilities=P,C.extensions=je,C.properties=Z,C.renderLists=xe,C.shadowMap=Ze,C.state=w,C.info=W}_!==bn&&(T=new Dy(_,t.width,t.height,o,r,s));let ke=new xh(C,z);this.xr=ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(le,V,!1))},this.getSize=function(A){return A.set(le,V)},this.setSize=function(A,X,ie=!0){if(ke.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,V=X,t.width=Math.floor(A*j),t.height=Math.floor(X*j),ie===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*j,V*j).floor()},this.setDrawingBufferSize=function(A,X,ie){le=A,V=X,j=ie,t.width=Math.floor(A*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(_===bn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,X,ie,Q){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,X,ie,Q),w.viewport(F.copy(ae).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,X,ie,Q){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,X,ie,Q),w.scissor($.copy(ge).multiplyScalar(j).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){w.setScissorTest(we=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let Q=0;if(A){let ee=!1;if(Y!==null){let Ne=Y.texture.format;ee=m.has(Ne)}if(ee){let Ne=Y.texture.type,Fe=d.has(Ne),Pe=et.getClearColor(),ze=et.getClearAlpha(),We=Pe.r,ct=Pe.g,dt=Pe.b;Fe?(v[0]=We,v[1]=ct,v[2]=dt,v[3]=ze,z.clearBufferuiv(z.COLOR,0,v)):(b[0]=We,b[1]=ct,b[2]=dt,b[3]=ze,z.clearBufferiv(z.COLOR,0,b))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),et.dispose(),xe.dispose(),Se.dispose(),Z.dispose(),he.dispose(),ce.dispose(),Ie.dispose(),pe.dispose(),ye.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Tt),ke.removeEventListener("sessionend",Vn),Qt.stop()};function Et(A){A.preventDefault(),ca("WebGLRenderer: Context Lost."),N=!0}function mt(){ca("WebGLRenderer: Context Restored."),N=!1;let A=W.autoReset,X=Ze.enabled,ie=Ze.autoUpdate,Q=Ze.needsUpdate,ee=Ze.type;Xe(),W.autoReset=A,Ze.enabled=X,Ze.autoUpdate=ie,Ze.needsUpdate=Q,Ze.type=ee}function ve(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){let X=A.target;X.removeEventListener("dispose",se),rt(X)}function rt(A){at(A),Z.remove(A)}function at(A){let X=Z.get(A).programs;X!==void 0&&(X.forEach(function(ie){ye.releaseProgram(ie)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,Q,ee,Ne){X===null&&(X=Ce);let Fe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Pe=Km(A,X,ie,Q,ee);w.setMaterial(Q,Fe);let ze=ie.index,We=1;if(Q.wireframe===!0){if(ze=oe.getWireframeAttribute(ie),ze===void 0)return;We=2}let ct=ie.drawRange,dt=ie.attributes.position,He=ct.start*We,vt=(ct.start+ct.count)*We;Ne!==null&&(He=Math.max(He,Ne.start*We),vt=Math.min(vt,(Ne.start+Ne.count)*We)),ze!==null?(He=Math.max(He,0),vt=Math.min(vt,ze.count)):dt!=null&&(He=Math.max(He,0),vt=Math.min(vt,dt.count));let Wt=vt-He;if(Wt<0||Wt===1/0)return;Ie.setup(ee,Q,Pe,ie,ze);let Lt,Ct=Ee;if(ze!==null&&(Lt=_e.get(ze),Ct=ue,Ct.setIndex(Lt)),ee.isMesh)Q.wireframe===!0?(w.setLineWidth(Q.wireframeLinewidth*Ke()),Ct.setMode(z.LINES)):Ct.setMode(z.TRIANGLES);else if(ee.isLine){let en=Q.linewidth;en===void 0&&(en=1),w.setLineWidth(en*Ke()),ee.isLineSegments?Ct.setMode(z.LINES):ee.isLineLoop?Ct.setMode(z.LINE_LOOP):Ct.setMode(z.LINE_STRIP)}else ee.isPoints?Ct.setMode(z.POINTS):ee.isSprite&&Ct.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let en=ee._multiDrawStarts,De=ee._multiDrawCounts,on=ee._multiDrawCount,xt=ze?_e.get(ze).bytesPerElement:1,Ln=Z.get(Q).currentProgram.getUniforms();for(let ii=0;ii<on;ii++)Ln.setValue(z,"_gl_DrawID",ii),Ct.render(en[ii]/xt,De[ii])}else if(ee.isInstancedMesh)Ct.renderInstances(He,Wt,ee.count);else if(ie.isInstancedBufferGeometry){let en=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,De=Math.min(ie.instanceCount,en);Ct.renderInstances(He,Wt,De)}else Ct.render(He,Wt)};function lt(A,X,ie,Q){k!==null&&A.isNodeMaterial&&k.setObject(Q,A),be===!0&&Be.setState(A,ie,!1),A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,Za(A,X,Q),A.side=vn,A.needsUpdate=!0,Za(A,X,Q),A.side=pn):Za(A,X,Q)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),k!==null&&k.renderStart(A,X,ie),S=Se.get(ie),S.init(X),x.push(S),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),A!==ie&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),de=this.localClippingEnabled,be=Be.init(this.clippingPlanes,de),be===!0&&Be.setGlobalState(this.clippingPlanes,X),k!==null&&Ze.render(S.state.shadowsArray,ie,X);let Q=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){let Pe=Ne[Fe];lt(Pe,ie,X,ee),Q.add(Pe)}else lt(Ne,ie,X,ee),Q.add(Ne)}),S=x.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(A,X,ie=null){let Q=this.compile(A,X,ie);return new Promise(ee=>{function Ne(){if(Q.forEach(function(Fe){let ze=Z.get(Fe).currentProgram;(ze===void 0||ze.isReady())&&Q.delete(Fe)}),Q.size===0){ee(A);return}setTimeout(Ne,10)}je.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let gt=null;function Ut(A){gt&&gt(A)}function Tt(){Qt.stop()}function Vn(){Qt.start()}let Qt=new jp;Qt.setAnimationLoop(Ut),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(A){gt=A,ke.setAnimationLoop(A),A===null?Qt.stop():Qt.start()},ke.addEventListener("sessionstart",Tt),ke.addEventListener("sessionend",Vn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(A,X);let ie=ke.enabled===!0&&ke.isPresenting===!0,Q=T!==null&&(Y===null||ie)&&T.begin(C,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(X),X=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,Y),S=Se.get(A,x.length),S.init(X),S.state.textureUnits=re.getTextureUnits(),x.push(S),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),me.setFromProjectionMatrix(ne,Yn,X.reversedDepth),de=this.localClippingEnabled,be=Be.init(this.clippingPlanes,de),M=xe.get(A,E.length),M.init(),E.push(M),ke.enabled===!0&&ke.isPresenting===!0){let Fe=C.xr.getDepthSensingMesh();Fe!==null&&yi(Fe,X,-1/0,C.sortObjects)}yi(A,X,0,C.sortObjects),M.finish(),k!==null&&k.updateLights(S.state.lightsArray),C.sortObjects===!0&&M.sort(te,fe),Ge=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ge&&et.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Be.beginShadows();let ee=S.state.shadowsArray;if(Ze.render(ee,A,X),be===!0&&Be.endShadows(),(Q&&T.hasRenderPass())===!1){let Fe=M.opaque,Pe=M.transmissive;if(S.setupLights(),X.isArrayCamera){let ze=X.cameras;if(Pe.length>0)for(let We=0,ct=ze.length;We<ct;We++){let dt=ze[We];Mn(Fe,Pe,A,dt)}Ge&&et.render(A);for(let We=0,ct=ze.length;We<ct;We++){let dt=ze[We];In(M,A,dt,dt.viewport)}}else Pe.length>0&&Mn(Fe,Pe,A,X),Ge&&et.render(A),In(M,A,X)}Y!==null&&L===0&&(re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y)),Q&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,X),Ie.resetDefaultState(),O=-1,R=null,x.pop(),x.length>0?(S=x[x.length-1],re.setTextureUnits(S.state.textureUnits),be===!0&&Be.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,k!==null&&k.renderEnd()};function yi(A,X,ie,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(me)){Q&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);let Fe=ce.update(A),Pe=A.material;Pe.visible&&M.push(A,Fe,Pe,ie,Te.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(me))){let Fe=ce.update(A),Pe=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Te.copy(Fe.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Pe)){let ze=Fe.groups;for(let We=0,ct=ze.length;We<ct;We++){let dt=ze[We],He=Pe[dt.materialIndex];He&&He.visible&&M.push(A,Fe,He,ie,Te.z,dt,X)}}else Pe.visible&&M.push(A,Fe,Pe,ie,Te.z,null,X)}}let Ne=A.children;for(let Fe=0,Pe=Ne.length;Fe<Pe;Fe++)yi(Ne[Fe],X,ie,Q)}function In(A,X,ie,Q){let{opaque:ee,transmissive:Ne,transparent:Fe}=A;S.setupLightsView(ie),be===!0&&Be.setGlobalState(C.clippingPlanes,ie),Q&&w.viewport(F.copy(Q)),ee.length>0&&Pn(ee,X,ie),Ne.length>0&&Pn(Ne,X,ie),Fe.length>0&&Pn(Fe,X,ie),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Mn(A,X,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){let He=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new gn(1,1,{generateMipmaps:!0,type:He?jn:bn,minFilter:$n,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Ne=S.state.transmissionRenderTarget[Q.id],Fe=Q.viewport||F;Ne.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);let Pe=C.getRenderTarget(),ze=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(G),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),Ge&&et.render(ie);let ct=C.toneMapping;C.toneMapping=Kn;let dt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),be===!0&&Be.setGlobalState(C.clippingPlanes,Q),Pn(A,ie,Q),re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let vt=0,Wt=X.length;vt<Wt;vt++){let Lt=X[vt],{object:Ct,geometry:en,material:De,group:on}=Lt;if(De.side===pn&&Ct.layers.test(Q.layers)){let xt=De.side;De.side=dn,De.needsUpdate=!0,af(Ct,ie,Q,en,De,on),De.side=xt,De.needsUpdate=!0,He=!0}}He===!0&&(re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Pe,ze,We),C.setClearColor(G,J),dt!==void 0&&(Q.viewport=dt),C.toneMapping=ct}function Pn(A,X,ie){let Q=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Ne=A.length;ee<Ne;ee++){let Fe=A[ee],{object:Pe,geometry:ze,group:We}=Fe,ct=Fe.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Pe.layers.test(ie.layers)&&af(Pe,X,ie,ze,ct,We)}}function af(A,X,ie,Q,ee,Ne){k!==null&&ee.isNodeMaterial&&k.setObject(A,ee),A.onBeforeRender(C,X,ie,Q,ee,Ne),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(C,X,ie,Q,A,Ne),ee.transparent===!0&&ee.side===pn&&ee.forceSinglePass===!1?(ee.side=dn,ee.needsUpdate=!0,C.renderBufferDirect(ie,X,Q,ee,A,Ne),ee.side=vn,ee.needsUpdate=!0,C.renderBufferDirect(ie,X,Q,ee,A,Ne),ee.side=pn):C.renderBufferDirect(ie,X,Q,ee,A,Ne),A.onAfterRender(C,X,ie,Q,ee,Ne)}function Za(A,X,ie){X.isScene!==!0&&(X=Ce);let Q=Z.get(A),ee=S.state.lights,Ne=S.state.shadowsArray,Fe=ee.state.version,Pe=ye.getParameters(A,ee.state,Ne,X,ie,S.state.lightProbeGridArray),ze=ye.getProgramCacheKey(Pe),We=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,Q.fog=X.fog;let ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=he.get(A.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",se),We=new Map,Q.programs=We);let dt=We.get(ze);if(dt!==void 0){if(Q.currentProgram===dt&&Q.lightsStateVersion===Fe)return lf(A,Pe),dt}else Pe.uniforms=ye.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,ie,Pe),A.onBeforeCompile(Pe,C),dt=ye.acquireProgram(Pe,ze),We.set(ze,dt),Q.uniforms=Pe.uniforms;let He=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Be.uniform),lf(A,Pe),Q.needsLights=Jm(A),Q.lightsStateVersion=Fe,Q.needsLights&&(He.ambientLightColor.value=ee.state.ambient,He.lightProbe.value=ee.state.probe,He.sunLights.value=ee.state.sun,He.sunLightShadows.value=ee.state.sunShadow,He.directionalLights.value=ee.state.directional,He.directionalLightShadows.value=ee.state.directionalShadow,He.spotLights.value=ee.state.spot,He.spotLightShadows.value=ee.state.spotShadow,He.rectAreaLights.value=ee.state.rectArea,He.ltc_1.value=ee.state.rectAreaLTC1,He.ltc_2.value=ee.state.rectAreaLTC2,He.pointLights.value=ee.state.point,He.pointLightShadows.value=ee.state.pointShadow,He.hemisphereLights.value=ee.state.hemi,He.sunShadowMatrix.value=ee.state.sunShadowMatrix,He.sunShadowCascade.value=ee.state.sunShadowCascade,He.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,He.spotLightMatrix.value=ee.state.spotLightMatrix,He.spotLightMap.value=ee.state.spotLightMap,He.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=S.state.lightProbeGridArray.length>0,Q.currentProgram=dt,Q.uniformsList=null,dt}function of(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=zs.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function lf(A,X){let ie=Z.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Zm(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let ie=0,Q=A.length;ie<Q;ie++){let ee=A[ie];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Km(A,X,ie,Q,ee){X.isScene!==!0&&(X=Ce),re.resetTextureUnits();let Ne=X.fog,Fe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?X.environment:null,Pe=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ht.workingColorSpace,ze=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,We=he.get(Q.envMap||Fe,ze),ct=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,dt=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,Wt=!!ie.morphAttributes.color,Lt=Kn;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Lt=C.toneMapping);let Ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,en=Ct!==void 0?Ct.length:0,De=Z.get(Q),on=S.state.lights;if(be===!0&&(de===!0||A!==R)){let Pt=A===R&&Q.id===O;Be.setState(Q,A,Pt)}let xt=!1;Q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==on.state.version||De.outputColorSpace!==Pe||ee.isBatchedMesh&&De.batching===!1||!ee.isBatchedMesh&&De.batching===!0||ee.isBatchedMesh&&De.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&De.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&De.instancing===!1||!ee.isInstancedMesh&&De.instancing===!0||ee.isSkinnedMesh&&De.skinning===!1||!ee.isSkinnedMesh&&De.skinning===!0||ee.isInstancedMesh&&De.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&De.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&De.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&De.instancingMorph===!1&&ee.morphTexture!==null||De.envMap!==We||Q.fog===!0&&De.fog!==Ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Be.numPlanes||De.numIntersection!==Be.numIntersection)||De.vertexAlphas!==ct||De.vertexTangents!==dt||De.morphTargets!==He||De.morphNormals!==vt||De.morphColors!==Wt||De.toneMapping!==Lt||De.morphTargetsCount!==en||!!De.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,De.__version=Q.version);let Ln=De.currentProgram;xt===!0&&(Ln=Za(Q,X,ee),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,Ln,De));let ii=!1,ki=!1,Fr=!1,At=Ln.getUniforms(),Ot=De.uniforms;if(w.useProgram(Ln.program)&&(ii=!0,ki=!0,Fr=!0),Q.id!==O&&(O=Q.id,ki=!0),De.needsLights){let Pt=Zm(S.state.lightProbeGridArray,ee);De.lightProbeGrid!==Pt&&(De.lightProbeGrid=Pt,ki=!0)}if(ii||R!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(z,"projectionMatrix",A.projectionMatrix),At.setValue(z,"viewMatrix",A.matrixWorldInverse);let Hi=At.map.cameraPosition;Hi!==void 0&&Hi.setValue(z,Me.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,ki=!0,Fr=!0)}if(De.needsLights&&(on.state.sunShadowMap.length>0&&At.setValue(z,"sunShadowMap",on.state.sunShadowMap,re),on.state.directionalShadowMap.length>0&&At.setValue(z,"directionalShadowMap",on.state.directionalShadowMap,re),on.state.spotShadowMap.length>0&&At.setValue(z,"spotShadowMap",on.state.spotShadowMap,re),on.state.pointShadowMap.length>0&&At.setValue(z,"pointShadowMap",on.state.pointShadowMap,re)),ee.isSkinnedMesh){At.setOptional(z,ee,"bindMatrix"),At.setOptional(z,ee,"bindMatrixInverse");let Pt=ee.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),At.setValue(z,"boneTexture",Pt.boneTexture,re))}ee.isBatchedMesh&&(At.setOptional(z,ee,"batchingTexture"),At.setValue(z,"batchingTexture",ee._matricesTexture,re),At.setOptional(z,ee,"batchingIdTexture"),At.setValue(z,"batchingIdTexture",ee._indirectTexture,re),At.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(z,"batchingColorTexture",ee._colorsTexture,re));let zi=ie.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&q.update(ee,ie,Ln),(ki||De.receiveShadow!==ee.receiveShadow)&&(De.receiveShadow=ee.receiveShadow,At.setValue(z,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&X.environment!==null&&(Ot.envMapIntensity.value=X.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=bb()),ki){if(At.setValue(z,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&$m(Ot,Fr),Ne&&Q.fog===!0&&Ue.refreshFogUniforms(Ot,Ne),Ue.refreshMaterialUniforms(Ot,Q,j,V,S.state.transmissionRenderTarget[A.id]),De.needsLights&&De.lightProbeGrid){let Pt=De.lightProbeGrid;Ot.probesSH.value=Pt.texture,Ot.probesMin.value.copy(Pt.boundingBox.min),Ot.probesMax.value.copy(Pt.boundingBox.max),Ot.probesResolution.value.copy(Pt.resolution)}zs.upload(z,of(De),Ot,re)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(zs.upload(z,of(De),Ot,re),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(z,"center",ee.center),At.setValue(z,"modelViewMatrix",ee.modelViewMatrix),At.setValue(z,"normalMatrix",ee.normalMatrix),At.setValue(z,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Pt=Q.uniformsGroups;for(let Hi=0,Or=Pt.length;Hi<Or;Hi++){let uf=Pt[Hi];pe.update(uf,Ln),pe.bind(uf,Ln)}}return Ln}function $m(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Jm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,ie){let Q=Z.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=X,Z.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ie,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let ie=Z.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ie=0){Y=A,U=X,L=ie;let Q=null,ee=!1,Ne=!1;if(A){let Pe=Z.get(A);if(Pe.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,Pe.__webglFramebuffer),F.copy(A.viewport),$.copy(A.scissor),K=A.scissorTest,w.viewport(F),w.scissor($),w.setScissorTest(K),O=-1;return}else if(Pe.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Pe.__hasExternalTextures)re.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ct=A.depthTexture;if(Pe.__boundDepthTexture!==ct){if(ct!==null&&Z.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}let ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let We=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[X])?Q=We[X][ie]:Q=We[X],ee=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Q=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?Q=We[ie]:Q=We,F.copy(A.viewport),$.copy(A.scissor),K=A.scissorTest}else F.copy(ae).multiplyScalar(j).floor(),$.copy(ge).multiplyScalar(j).floor(),K=we;if(ie!==0&&(Q=H),w.bindFramebuffer(z.FRAMEBUFFER,Q)&&w.drawBuffers(A,Q),w.viewport(F),w.scissor($),w.setScissorTest(K),ee){let Pe=Z.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ie)}else if(Ne){let Pe=X;for(let ze=0;ze<A.textures.length;ze++){let We=Z.get(A.textures[ze]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ze,We.__webglTexture,ie,Pe)}}else if(A!==null&&ie!==0){let Pe=Z.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pe.__webglTexture,ie)}O=-1};function cf(A){let X=Z.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=P.textureFormatReadable(A.format),X.__typeReadable=P.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,ie,Q,ee,Ne,Fe,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){w.bindFramebuffer(z.FRAMEBUFFER,ze);try{let We=A.textures[Pe],ct=We.format,dt=We.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let He=cf(We);if(He.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&ie>=0&&ie<=A.height-ee&&z.readPixels(X,ie,Q,ee,Ae.convert(ct),Ae.convert(dt),Ne)}finally{let We=Y!==null?Z.get(Y).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,Q,ee,Ne,Fe,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if(X>=0&&X<=A.width-Q&&ie>=0&&ie<=A.height-ee){w.bindFramebuffer(z.FRAMEBUFFER,ze);let We=A.textures[Pe],ct=We.format,dt=We.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let He=cf(We);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),z.readPixels(X,ie,Q,ee,Ae.convert(ct),Ae.convert(dt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Wt=Y!==null?Z.get(Y).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Wt);let Lt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ep(z,Lt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(vt),z.deleteSync(Lt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ie=0){let Q=Math.pow(2,-ie),ee=Math.floor(A.image.width*Q),Ne=Math.floor(A.image.height*Q),Fe=X!==null?X.x:0,Pe=X!==null?X.y:0;re.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Fe,Pe,ee,Ne),w.unbindTexture()},this.copyTextureToTexture=function(A,X,ie=null,Q=null,ee=0,Ne=0){let Fe,Pe,ze,We,ct,dt,He,vt,Wt,Lt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ie!==null)Fe=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,ze=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,ct=ie.min.y,dt=ie.isBox3?ie.min.z:0;else{let Ot=Math.pow(2,-ee);Fe=Math.floor(Lt.width*Ot),Pe=Math.floor(Lt.height*Ot),A.isDataArrayTexture?ze=Lt.depth:A.isData3DTexture?ze=Math.floor(Lt.depth*Ot):ze=1,We=0,ct=0,dt=0}Q!==null?(He=Q.x,vt=Q.y,Wt=Q.z):(He=0,vt=0,Wt=0);let Ct=Ae.convert(X.format),en=Ae.convert(X.type),De;X.isData3DTexture?(re.setTexture3D(X,0),De=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),De=z.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),De=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);let on=w.getParameter(z.UNPACK_ROW_LENGTH),xt=w.getParameter(z.UNPACK_IMAGE_HEIGHT),Ln=w.getParameter(z.UNPACK_SKIP_PIXELS),ii=w.getParameter(z.UNPACK_SKIP_ROWS),ki=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,Lt.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,We),w.pixelStorei(z.UNPACK_SKIP_ROWS,ct),w.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);let Fr=A.isDataArrayTexture||A.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let Ot=Z.get(A),zi=Z.get(X),Pt=Z.get(Ot.__renderTarget),Hi=Z.get(zi.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,Pt.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Or=0;Or<ze;Or++)Fr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,ee,dt+Or),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(X).__webglTexture,Ne,Wt+Or)),z.blitFramebuffer(We,ct,Fe,Pe,He,vt,Fe,Pe,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||Z.has(A)){let Ot=Z.get(A),zi=Z.get(X);w.bindFramebuffer(z.READ_FRAMEBUFFER,I),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,B);for(let Pt=0;Pt<ze;Pt++)Fr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,ee,dt+Pt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,ee),At?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zi.__webglTexture,Ne,Wt+Pt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zi.__webglTexture,Ne),ee!==0?z.blitFramebuffer(We,ct,Fe,Pe,He,vt,Fe,Pe,z.COLOR_BUFFER_BIT,z.NEAREST):At?z.copyTexSubImage3D(De,Ne,He,vt,Wt+Pt,We,ct,Fe,Pe):z.copyTexSubImage2D(De,Ne,He,vt,We,ct,Fe,Pe);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(De,Ne,He,vt,Wt,Fe,Pe,ze,Ct,en,Lt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(De,Ne,He,vt,Wt,Fe,Pe,ze,Ct,Lt.data):z.texSubImage3D(De,Ne,He,vt,Wt,Fe,Pe,ze,Ct,en,Lt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ne,He,vt,Fe,Pe,Ct,en,Lt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ne,He,vt,Lt.width,Lt.height,Ct,Lt.data):z.texSubImage2D(z.TEXTURE_2D,Ne,He,vt,Fe,Pe,Ct,en,Lt);w.pixelStorei(z.UNPACK_ROW_LENGTH,on),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Ln),w.pixelStorei(z.UNPACK_SKIP_ROWS,ii),w.pixelStorei(z.UNPACK_SKIP_IMAGES,ki),Ne===0&&X.generateMipmaps&&z.generateMipmap(De),w.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){U=0,L=0,Y=null,w.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function sm(i,e,t,n,r,s){let a=r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(a)||a.length>8)throw new Error("Invalid scene profiles");let o={},c=null,l=null,u=[],h=performance.now(),f=null,p=!1,g=null,_=[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(m);let d=document.createElement("div");m.append(d);let v=new Map;function b(){return(x()?.contacts||[]).map(R=>{let F=i.getObjectByName(R.bone);if(!F)return null;let $=y(F).project(e),K=t.getBoundingClientRect();return{id:R.id,label:/Foot/.test(R.bone)?R.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(R.bone)?R.bone.includes("-L-")?"\u5DE6\u624B":"\u53F3\u624B":/Pelvis/.test(R.bone)?"\u9AA8\u76C6":"\u5934\u90E8",x:K.left+($.x+1)*K.width/2,y:K.top+(1-$.y)*K.height/2,supportedIK:R.kind==="ik"}}).filter(Boolean)}let y=R=>R.getWorldPosition(new D),M=new Map;function S(R,F=!1){if(!M.has(R.name)){let K=[];i.traverse(G=>{if(!G.isSkinnedMesh)return;let J=G.geometry.getAttribute("skinIndex"),le=G.geometry.getAttribute("skinWeight");if(!J||!le)return;let V=new Set(G.skeleton.bones.map((te,fe)=>te.name===R.name||te.name===R.name.replace("-Foot","-Toe0")?fe:-1).filter(te=>te>=0)),j=[];for(let te=0;te<J.count;te++){let fe=0;for(let ae=0;ae<4;ae++)V.has(J.getComponent(te,ae))&&(fe+=le.getComponent(te,ae));fe>.45&&j.push(te)}if(j.length){let te=G.geometry.getAttribute("position"),fe=new Set;for(let ae of[-1,0,1])for(let ge of[-1,0,1])for(let we of[-1,0,1]){if(ae===0&&ge===0&&we===0)continue;let me=-1/0,be=j[0];for(let de of j){let ne=te.getX(de)*ae+te.getY(de)*ge+te.getZ(de)*we;ne>me&&(me=ne,be=de)}fe.add(be)}K.push({mesh:G,vertices:j,probes:[...fe]})}}),M.set(R.name,K)}let $=[];for(let{mesh:K,vertices:G,probes:J}of M.get(R.name))for(let le of F?G:J)$.push(K.getVertexPosition(le,new D).applyMatrix4(K.matrixWorld));return $}function E(R,F){let $=y(R).dot(F);return Le.clamp(Math.max(.04,...S(R).map(K=>$-K.dot(F)))+.015,.055,.16)}let x=()=>a.find(R=>R.id===(o.scene?.()||"main"));function T(){for(let R of u)R.bone.quaternion.angleTo(R.applied)<1e-6&&R.bone.quaternion.copy(R.base);u=[]}function C(R){if(!R?.alphaVerified)return null;for(let $ of x()?.contacts||[]){if($.kind!=="ik")continue;let K=i.getObjectByName($.ikBone||$.bone);if(!K)continue;let G=K.worldToLocal(new D().fromArray(R.point)),J=$.sizeCm;if(Math.abs(G.x)<J.X*.01&&Math.abs(G.y)<J.Z*.01&&Math.abs(G.z)<J.Y*.01)return{contact:$,bone:K}}let F=R.skinBones||[];for(let $ of x()?.contacts||[]){if($.kind!=="ik")continue;let K=$.ikBone.includes("-L-")?"L":"R";if(F.some(G=>G?.startsWith("Bip001-"+K+"-")&&/Thigh|Calf|Foot/.test(G)))return{contact:$,bone:i.getObjectByName($.ikBone)}}return null}function N(R=!1){if(!c)return;let F=c;c=null,l={...F,weight:1},t.hasPointerCapture(F.pointerId)&&t.releasePointerCapture(F.pointerId),R||o.event?.({type:"touch",region:"leg",label:F.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09":"\u53F3\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09",gesture:"stroke",source:"original-scene-collision",confidence:1,completed:!0})}function k(R){if(c||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;let F=C(n(R.clientX,R.clientY));H(R,F)}function H(R,F){if(g={contact:F?.contact.id,handle:R.target?.dataset?.legHandle||null},!F||c)return;let $=F.bone,K=$.parent,G=K?.parent;g.chain=[$,K,G].map(J=>({name:J?.name,isBone:J?.isBone})),!(!G?.isBone||!K?.isBone)&&(R.preventDefault(),R.stopImmediatePropagation(),o.beforeDrag?.(),l=null,c={...F,foot:$,calf:K,thigh:G,pointerId:R.pointerId,x:R.clientX,y:R.clientY,dx:0,dy:0,offset:new D,triggered:!1},t.setPointerCapture(R.pointerId),F.contact.voiceId&&o.voice?.(F.contact.voiceId))}function I(){let R=(x()?.contacts||[]).filter($=>$.kind==="ik"),F=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[$,K]of v)R.some(G=>G.id===$)||(K.remove(),v.delete($));for(let $ of R){let K=i.getObjectByName($.ikBone||$.bone);if(!K)continue;let G=v.get($.id);G||(G=document.createElement("button"),G.dataset.legHandle=String($.id),G.textContent=$.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",G.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",G.addEventListener("pointerdown",V=>{F||H(V,{contact:$,bone:K})}),v.set($.id,G),m.append(G));let J=t.getBoundingClientRect(),le=y(K).lerp(y(K.parent),.5).project(e);G.hidden=!!F,G.style.left=Le.clamp(J.left+(le.x+1)*J.width/2,55,J.right-55)+"px",G.style.top=Le.clamp(J.top+(1-le.y)*J.height/2,100,J.bottom-150)+"px"}}function B(R,F,$){return $?.endsWith("::Less")?R<F:$?.endsWith("::Greater")?R>F:null}function U(R){if(c?.pointerId!==R.pointerId)return;R.stopImmediatePropagation();let F=c,$=t.getBoundingClientRect(),K=F.contact.drag,G=(R.clientX-F.x)/Math.max(1,$.width)*(K.ScreenPercentToWorld?.X||0),J=(R.clientY-F.y)/Math.max(1,$.height)*(K.ScreenPercentToWorld?.Y||0);F.dx=Le.clamp(G,-(K.WorldSpaceLmitLeftUp?.X||0),K.WorldSpaceLimit?.X||0),F.dy=Le.clamp(J,-(K.WorldSpaceLmitLeftUp?.Y||0),K.WorldSpaceLimit?.Y||0);let le=new D().setFromMatrixColumn(e.matrixWorld,0),V=new D().setFromMatrixColumn(e.matrixWorld,1);F.offset.copy(le).multiplyScalar(F.dx*.01).addScaledVector(V,-F.dy*.01);for(let j of F.contact.thresholds||[]){let te=[B(F.dx,j.limit.X,j.xCompare),B(F.dy,j.limit.Y,j.yCompare)].filter(fe=>fe!==null);if(!F.triggered&&te.length&&te.every(Boolean)){F.triggered=!0,f={sampleId:j.sampleId,dx:F.dx,dy:F.dy,source:"serialized-drag-threshold"},N(),o.reaction?.(j.sampleId);break}}}function L(R){c?.pointerId===R.pointerId&&(R.stopImmediatePropagation(),N())}function Y(){N(!0),l=null,T()}function O(){let R=performance.now(),F=Math.min(.05,(R-h)/1e3);if(h=R,I(),p){d.replaceChildren();for(let K of b()){let G=document.createElement("span");G.textContent=K.label+(K.supportedIK?" \u2195":""),G.style.cssText=`position:absolute;left:${K.x}px;top:${K.y}px;transform:translate(-50%,-50%);border:2px solid ${K.supportedIK?"#5ef0a0":"#ddd"};border-radius:20px;padding:6px;background:#222a;color:white;font-size:11px`,d.append(G)}}_=[],l&&(l.weight=Math.max(0,l.weight-F/Math.max(.1,l.contact.drag.DragRecoverTime||.25)),l.weight===0&&(l=null));let $=[];for(let K of x()?.contacts||[]){if(K.kind!=="ik")continue;let G=c?.contact.id===K.id?c:l?.contact.id===K.id?l:null;if(G)$.push(G);else if(x()?.id==="show_05"){let J=i.getObjectByName(K.ikBone);J?.parent?.parent?.isBone&&$.push({contact:K,foot:J,calf:J.parent,thigh:J.parent.parent,offset:new D,weight:0,passive:!0})}}for(let K of $){i.updateWorldMatrix(!0,!0);let G=y(K.thigh),J=y(K.calf),le=y(K.foot),V=le.clone().sub(G).normalize();if(J.clone().sub(G).addScaledVector(V,-J.clone().sub(G).dot(V)).length()<1e-5)return;let te=le.clone().addScaledVector(K.offset,K===c?1:K.weight),fe=0,ae=.055;if(x()?.id==="show_05"&&s){let me=s(le);if(me&&me.clearance>-.2&&me.clearance<.4){ae=E(K.foot,me.normal);for(let be=0;be<2;be++){let de=0,ne=me.normal;for(let Me of[.5,.75,1]){let Te=J.clone().lerp(te,Me),Ce=s(Te);Ce&&(de=Math.max(de,(ae-Ce.clearance)/Me),ne=Ce.normal)}if(de=Le.clamp(de,0,.6-fe),de<5e-4)break;te.addScaledVector(ne,de),fe+=de}}}if(fe>0&&_.push({bone:K.foot.name,correction:fe,radius:ae}),K.passive&&fe<5e-4)continue;let ge=K.foot.getWorldQuaternion(new Oe),we=[K.thigh,K.calf,K.foot].map(me=>({bone:me,base:me.quaternion.clone()}));try{let me=(de,ne,Me)=>{let Te=de.parent;Te.updateWorldMatrix(!0,!1);let Ce=de.position,Ge=Te.worldToLocal(y(K.foot)).sub(Ce),Ke=Te.worldToLocal(te.clone()).sub(Ce);if(Math.min(Ge.length(),Ke.length())<1e-6)return;let z=de.quaternion.clone().premultiply(new Oe().setFromUnitVectors(Ge.normalize(),Ke.normalize())).normalize(),tt=ne.angleTo(z);de.quaternion.copy(ne).slerp(z,Math.min(1,Me/Math.max(tt,1e-8))),i.updateWorldMatrix(!0,!0)};for(let de=0;de<12&&(me(K.calf,we[1].base,Math.PI/3),me(K.thigh,we[0].base,Math.PI/4),!(y(K.foot).distanceTo(te)<.001));de++);K.foot.quaternion.copy(K.foot.parent.getWorldQuaternion(new Oe).invert().multiply(ge));for(let de of we)u.push({...de,applied:de.bone.quaternion.clone()});i.updateWorldMatrix(!0,!0);let be=new Set;i.traverse(de=>{de.isSkinnedMesh&&!be.has(de.skeleton)&&(de.skeleton.update(),be.add(de.skeleton))})}catch(me){g={...g,error:me.message};for(let be of we)be.bone.quaternion.copy(be.base);Y()}}}for(let[R,F]of[["pointerdown",k],["pointermove",U],["pointerup",L],["pointercancel",Y]])t.addEventListener(R,F);return{footMeshContacts:()=>Object.fromEntries((x()?.contacts||[]).filter(R=>R.kind==="ik").map(R=>{let F=i.getObjectByName(R.ikBone),$=F?S(F,!0).map(K=>s?.(K)?.clearance).filter(Number.isFinite):[];return[R.ikBone,{samples:$.length,minClearance:$.length?Math.min(...$):null}]})),configure:R=>o=R,hitTest:(R,F)=>C(n(R,F))?.contact.id,restore:T,tick:O,cancel:Y,profile:x,points:b,togglePoints(){return p=!p,p||d.replaceChildren(),b().length},headReaction:()=>x()?.contacts.find(R=>/hari|Head/.test(R.bone))?.thresholds?.[0]?.sampleId,snapshot:()=>({scene:x()?.id,bedCorrections:_,lastPick:g,active:!!c,offset:c?[c.dx,c.dy]:null,recovering:!!l,lastEvent:f}),dispose(){Y(),m.remove();for(let[R,F]of[["pointerdown",k],["pointermove",U],["pointerup",L],["pointercancel",Y]])t.removeEventListener(R,F)}}}var am={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},ac=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=am[e]||am.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function om(i,e,t){let n=new nt,r=new nt,s=0,a=0,o=!1,c=0,l=0,u=!1,h=!0,f=!1,p=0,g=[],_=new Map,m={value:Array.from({length:4},()=>new D)},d={value:Array.from({length:4},()=>new D)},v={value:[.05,.05,.05,.05]},b=new D,y=null;i.traverse(B=>{B.isMesh&&B.userData.snowbreakSurfaceKey&&_.set(B.userData.snowbreakSurfaceKey,B)});function M(B){let U=B.hit,L=_.get(U.mesh);if(!L||!U.barycentric)return new D().fromArray(U.point);let Y=L.geometry.index,O=new D;for(let R=0;R<3;R++){let F=Y?Y.getX(U.triangle*3+R):U.triangle*3+R;O.addScaledVector(L.getVertexPosition(F,new D),U.barycentric[R])}return L.localToWorld(O)}let S=[],E=new Map;i.traverse(B=>{if(B.isBone&&/^EyeJoint_[LR]$/.test(B.name)&&S.push(B),!B.isSkinnedMesh||!["skin","cloth-or-room"].includes(B.material?.userData.profile))return;let U=B.material,L=U.onBeforeCompile,Y=U.customProgramCacheKey.bind(U);U.onBeforeCompile=O=>{L(O),Object.assign(O.uniforms,{senseCenters:m,senseOffsets:d,senseRadii:v}),O.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+O.vertexShader,O.vertexShader=O.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},U.customProgramCacheKey=()=>Y()+"-surface-spring-v2",U.needsUpdate=!0});function x(B,U,L="camera"){L==="camera"&&(f||performance.now()<p)||!Number.isFinite(B)||!Number.isFinite(U)||(n.set(Le.clamp(B,-1,1),Le.clamp(U,-1,1)),s=performance.now()+1600)}function T(B){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let U=t.getBoundingClientRect();p=performance.now()+1600,x((B.clientX-U.left)/U.width*2-1,1-(B.clientY-U.top)/U.height*2,"touch")}function C(B,U){if(!h||!B?.alphaVerified||!Array.isArray(B.point)||!_.has(B.mesh))return!1;y?.spring.release();let L=U?.id||B.anatomy?.id||"body",Y=g.find(O=>!O.spring.pressed&&O.region===L&&M(O).distanceTo(new D().fromArray(B.point))<.04);return Y?(y=Y,y.hit=B):(g.length===4&&g.shift(),y={hit:B,region:L,spring:new ac(L),direction:e.getWorldDirection(new D)},g.push(y)),y.spring.press(),o=u=!0,!0}let N=B=>{f=!0,T(B)},k=()=>{o=!1,f=!1,y?.spring.release(),y=null,p=performance.now()+1e3};t.addEventListener("pointerdown",N),t.addEventListener("pointermove",T),t.addEventListener("pointerup",k),t.addEventListener("pointercancel",k);function H(B=performance.now()){let U=Math.min(.04,Math.max(0,(B-a)/1e3));a=B,B>s&&n.set(0,0),r.lerp(n,1-Math.exp(-U*12));let L=new D().setFromMatrixColumn(e.matrixWorld,1),Y=new D().setFromMatrixColumn(e.matrixWorld,0);for(let R of S){let F=R.quaternion.clone(),$=new Ve().extractRotation(R.parent.matrixWorld),K=new Ve().makeRotationFromQuaternion(new Oe().setFromAxisAngle(L,r.x*.07).multiply(new Oe().setFromAxisAngle(Y,-r.y*.05))),G=$.clone().invert().multiply(K).multiply($);R.quaternion.premultiply(new Oe().setFromRotationMatrix(G)).normalize(),R.updateWorldMatrix(!1,!0),E.set(R,{base:F,applied:R.quaternion.clone()})}for(let R=g.length-1;R>=0;R--)g[R].spring.step(U),g[R].spring.active||g.splice(R,1);l=0,c=0,u=g.length>0;for(let R=0;R<4;R++){let F=g[R];d.value[R].set(0,0,0),F&&(m.value[R].copy(M(F)),v.value[R]=F.spring.profile.radius,d.value[R].copy(F.direction).multiplyScalar(F.spring.offset),Math.abs(F.spring.offset)>Math.abs(l)&&(l=F.spring.offset),c+=Math.abs(F.spring.velocity))}let O=new Set;S.length&&i.traverse(R=>{R.isSkinnedMesh&&!O.has(R.skeleton)&&(R.skeleton.update(),O.add(R.skeleton))})}function I(){for(let[B,U]of E)B.quaternion.angleTo(U.applied)<1e-6&&B.quaternion.copy(U.base);E.clear()}return{gaze:x,touch:C,tick:H,restore:I,reset(){I(),o=u=f=!1,p=0,l=c=0,g.length=0,y=null;for(let B of d.value)B.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:S.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(B=>({region:B.region,offset:B.spring.offset,velocity:B.spring.velocity,pressed:B.spring.pressed,center:M(B).toArray()}))}),dispose(){for(let[B,U]of[["pointerdown",N],["pointermove",T],["pointerup",k],["pointercancel",k]])t.removeEventListener(B,U)}}}function _h(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=S=>S.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let S of[i,e,t]){let E=S.getWorldScale(new D);if(Math.min(E.x,E.y,E.z)<=0||Math.max(E.x,E.y,E.z)-Math.min(E.x,E.y,E.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),h=c.distanceTo(l),f=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,f].every(Number.isFinite)||Math.min(h,f)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(c),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let _=S=>Math.sqrt(Math.max(0,h*h+f*f+2*h*f*Math.cos(Le.degToRad(S)))),m=Le.clamp(g,Math.max(Math.abs(h-f)+1e-6,_(a)),Math.min(h+f-1e-6,_(s))),d=r.clone().sub(c).addScaledVector(p,-r.clone().sub(c).dot(p));if(d.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");d.normalize();let v=(h*h-f*f+m*m)/(2*m),b=c.clone().addScaledVector(p,v).addScaledVector(d,Math.sqrt(Math.max(0,h*h-v*v))),y=c.clone().addScaledVector(p,m);function M(S,E,x){let T=o(S),C=o(E).sub(T).normalize(),N=x.clone().sub(T).normalize(),k=S.getWorldQuaternion(new Oe);k.premultiply(new Oe().setFromUnitVectors(C,N)),S.quaternion.copy(S.parent.getWorldQuaternion(new Oe).invert().multiply(k)).normalize(),S.updateWorldMatrix(!0,!0)}return M(i,e,b),M(e,t,y),{requested:n.toArray(),reachable:y.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(y),elbowFlex:Le.radToDeg(Math.acos(Le.clamp((m*m-h*h-f*f)/(2*h*f),-1,1)))}}var Cr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function yh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new D);function h(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function f(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),_=u(r),m=u(s),d=u(a),v=g.distanceTo(_)+_.distanceTo(m),b=g.clone().sub(d);if(b.y=0,b.length()<1e-5)throw new Error("Ambiguous shoulder direction");b.normalize();let y=d.clone().addScaledVector(b,v*.55);y.y+=v*.15;let M=g.clone().addScaledVector(b,v);M.y-=v*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new Oe),start:m,target:y,pole:M},l=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let _=Le.clamp(g,0,1),m=_<.3?_/.3:_>.7?(1-_)/.3:1,d=m*m*(3-2*m);if(d<1e-6)return;l=_h(n,r,s,c.target,c.pole,Cr);let v={},b=[];function y(M,S,E,x,T){let C=M.quaternion.clone(),N=S.angleTo(C),k=Le.degToRad(E);N>k&&b.push(T),M.quaternion.copy(S).slerp(C,x*Math.min(1,k/Math.max(N,1e-10))).normalize(),v[T]=Le.radToDeg(S.angleTo(M.quaternion))}y(n,c.upper,Cr.upper,d,"upper"),y(r,c.lower,Cr.lower,d,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new Oe).invert().multiply(c.wristWorld)),y(s,c.wrist,Cr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:v,limited:b,weight:d}}return{begin:f,apply:p,restore:h,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Cr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function lm(i,e,t=()=>0){let n={};for(let[U,L]of[["left","L"],["right","R"]]){let Y=i.getObjectByName(`Bip001-${L}-UpperArm`),O=i.getObjectByName(`Bip001-${L}-Forearm`),R=i.getObjectByName(`Bip001-${L}-Hand`);Y?.isBone&&O?.parent===Y&&R?.parent===O&&(n[U]={upper:Y,lower:O,hand:R})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(U=>{U.isSkinnedMesh&&a.add(U.skeleton)}),i.traverse(U=>{if(U.isMesh&&U.morphTargetInfluences)for(let L of["L_Eye_close","R_Eye_close"]){let Y=U.morphTargetDictionary?.[L];Number.isInteger(Y)&&s.push({mesh:U,index:Y,name:L})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(U=>U.name==="L_Eye_close")&&s.some(U=>U.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,h=0,f=[],p=[];i.traverse(U=>{if(U.isMesh&&U.morphTargetDictionary&&U.morphTargetInfluences){let L=U.morphTargetDictionary.Viseme_A;Number.isInteger(L)&&p.push({mesh:U,index:L})}});function g(U,L){if(!o.includes(U)||!U.startsWith("gesture_")||!Number.isFinite(L?.duration)||L.duration<1||L.duration>8||!Array.isArray(L.poses)||L.poses.length<2||L.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let Y=-1;for(let O of L.poses){if(O.smile!==void 0&&(!Number.isFinite(O.smile)||O.smile<0||O.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(O.time)||O.time<=Y||O.time<0||O.time>L.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");Y=O.time;for(let[R,F]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(O[R]&&(!Array.isArray(O[R])||O[R].length!==3||O[R].some(($,K)=>!Number.isFinite($)||Math.abs($)>F[K])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(L.poses[0].time!==0||Y!==L.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:U,plan:L,start:performance.now()},M="\u6B63\u5728\u6267\u884C\uFF1A"+U}function _(U){if(!l)return null;let{plan:L}=l,Y=(U-l.start)/1e3;if(Y>=L.duration)return M="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let O=Math.max(0,L.poses.findIndex(J=>J.time>=Y)-1),R=L.poses[O],F=L.poses[O+1],$=Le.clamp((Y-R.time)/(F.time-R.time),0,1),K=$*$*(3-2*$),G={};for(let J of["head","torso","leftHand","rightHand"])(R[J]||F[J])&&(G[J]=[0,1,2].map(le=>(R[J]?.[le]||0)+((F[J]?.[le]||0)-(R[J]?.[le]||0))*K));return G.smile=(R.smile||0)+((F.smile||0)-(R.smile||0))*K,G}let m=new Set,d=!1,v=0,b=0,y=performance.now(),M="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",S={left:0,right:0},E=0,x=[],T=[],C={left:!1,right:!1};function N(){for(let U of x)U.bone.quaternion.angleTo(U.applied)<1e-6&&U.bone.quaternion.copy(U.base);x.length=0;for(let U of[...T,...f])Math.abs(U.mesh.morphTargetInfluences[U.index]-U.applied)<1e-6&&(U.mesh.morphTargetInfluences[U.index]=U.base);T.length=f.length=0}function k(U){if(!o.includes(U))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,U==="raise_left_hand"&&m.add("left"),U==="raise_right_hand"&&m.add("right"),U==="raise_both_hands"&&(m=new Set(["left","right"])),U==="lower_hands"&&m.clear(),U==="close_eyes"&&(d=!0),U==="open_eyes"&&(d=!1),U==="turn_left"&&(b+=90),U==="turn_right"&&(b-=90),U==="turn_back"&&(b=180-t()),U==="face_front"&&(b=-t()),M="\u5DF2\u63A5\u6536\uFF1A"+U,I()}function H(){let U=performance.now(),L=Math.min(.25,(U-y)/1e3);y=U;let Y=1-Math.exp(-9*L),O=_(U);if(O){i.updateWorldMatrix(!0,!0);let G=ae=>ae.getWorldPosition(new D),J=i.getObjectByName("Bip001-Pelvis"),le=r&&J?G(r).sub(G(J)).normalize():new D(0,1,0),V=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new Oe)),j=i.getObjectByName("EyeJoint_L"),te=i.getObjectByName("EyeJoint_R");if(r&&j&&te){let ae=G(j).add(G(te)).multiplyScalar(.5).sub(G(r));ae.addScaledVector(le,-ae.dot(le)),ae.length()>1e-5&&(V=ae.normalize())}let fe=new D().crossVectors(le,V).normalize();V.crossVectors(fe,le).normalize();for(let[ae,ge]of[[r,O.head],[c,O.torso]])if(ae&&ge){let we=ae.quaternion.clone(),me=ae.parent.getWorldQuaternion(new Oe),be=new Oe().setFromAxisAngle(le,Le.degToRad(-ge[0])).multiply(new Oe().setFromAxisAngle(fe,Le.degToRad(ge[1]))).multiply(new Oe().setFromAxisAngle(V,Le.degToRad(ge[2])));ae.quaternion.premultiply(me.clone().invert().multiply(be).multiply(me)).normalize(),x.push({bone:ae,base:we,applied:ae.quaternion.clone()}),ae.updateWorldMatrix(!1,!0)}}v+=(b-v)*Y,e(v),C={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let R=new D(0,1,0),F=i.getObjectByName("EyeJoint_L"),$=i.getObjectByName("EyeJoint_R"),K=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new Oe));r&&F&&$&&(K.copy(F.getWorldPosition(new D).add($.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),K.y=0,K.length()<1e-5&&K.set(0,0,1),K.normalize());for(let G of["left","right"]){S[G]+=((m.has(G)?1:0)-S[G])*Y;let J=O?.[G+"Hand"],le=J?Le.smoothstep(Math.hypot(...J),0,.25):S[G],V=n[G];if(!V||!r||le<.001)continue;let j=ne=>ne.getWorldPosition(new D),te=j(r),fe=j(V.upper),ae=fe.distanceTo(j(V.lower))+j(V.lower).distanceTo(j(V.hand)),ge=fe.clone().sub(te);if(ge.y=0,ge.length()<1e-6)continue;ge.normalize();let we=te.clone().addScaledVector(ge,ae*.45);we.y+=ae*.18,J&&(we.copy(j(V.hand)).addScaledVector(ge,Math.abs(J[0])*ae),we.y+=J[1]*ae,we.addScaledVector(K,J[2]*ae));let me=fe.clone().addScaledVector(K,ae*.7).addScaledVector(ge,ae*.2).addScaledVector(R,-ae*.2),be=V.hand.getWorldQuaternion(new Oe),de=[V.upper,V.lower,V.hand].map(ne=>({bone:ne,base:ne.quaternion.clone()}));try{_h(V.upper,V.lower,V.hand,we,me,Cr);for(let[tt,je]of[V.upper,V.lower].entries()){let P=de[tt].base,w=je.quaternion.clone(),W=P.angleTo(w),Z=Le.degToRad([100,140][tt]);je.quaternion.copy(P).slerp(w,le*Math.min(1,Z/Math.max(W,1e-8))).normalize(),je.updateWorldMatrix(!1,!0)}let ne=be.clone(),Me=tt=>i.getObjectByName(`Bip001-${G==="left"?"L":"R"}-Finger${tt}`),Te=Me(1),Ce=Me(2),Ge=Me(4);if(Te&&Ce&&Ge){let tt=j(Te).sub(j(Ge)).normalize(),je=j(Ce).sub(j(V.hand));je.addScaledVector(tt,-je.dot(tt)).normalize();let P=new Ve().makeBasis(tt,je,new D().crossVectors(tt,je).normalize()),w=l?.id==="gesture_open_arms"?ge.clone():R.clone(),W=K.clone().multiplyScalar(G==="left"?1:-1),Z=new D().crossVectors(w,W).normalize();w.crossVectors(W,Z).normalize();let re=new Ve().makeBasis(Z,w,new D().crossVectors(Z,w).normalize());ne=new Oe().setFromRotationMatrix(re.multiply(P.invert())).multiply(V.hand.getWorldQuaternion(new Oe));let he=ne.clone().multiply(V.hand.getWorldQuaternion(new Oe).invert()),_e=j(V.hand).sub(j(V.lower)).normalize(),oe=new D(he.x,he.y,he.z).dot(_e),ce=Le.clamp(2*Math.atan2(oe,he.w),-Math.PI/2,Math.PI/2)*.6*le;V.lower.quaternion.multiply(new Oe().setFromAxisAngle(V.hand.position.clone().normalize(),ce)).normalize(),V.lower.updateWorldMatrix(!1,!0)}let Ke=V.hand.parent.getWorldQuaternion(new Oe).invert().multiply(ne),z=de[2].base.angleTo(Ke);V.hand.quaternion.copy(de[2].base).slerp(Ke,le*Math.min(1,Le.degToRad(90)/Math.max(z,1e-8))).normalize(),V.hand.updateWorldMatrix(!1,!0);for(let tt of de)x.push({...tt,applied:tt.bone.quaternion.clone()});C[G]=j(V.hand).y>fe.y+ae*.25}catch(ne){for(let Me of de)Me.bone.quaternion.copy(Me.base);M="\u4E3E\u624B\u5931\u8D25\uFF1A"+ne.message,m.delete(G)}}E+=((d?1:0)-E)*Y;for(let G of s){let J=G.mesh.morphTargetInfluences[G.index]||0,le=Le.lerp(J,d?1:0,E);T.push({...G,base:J,applied:le}),G.mesh.morphTargetInfluences[G.index]=le}O?.smile&&i.traverse(G=>{if(!(!G.isMesh||!G.morphTargetInfluences))for(let J of["L_Eye_smile","R_Eye_smile"]){let le=G.morphTargetDictionary?.[J];if(!Number.isInteger(le))continue;let V=G.morphTargetInfluences[le]||0,j=Math.max(V,Math.min(.5,O.smile));f.push({mesh:G,index:le,base:V,applied:j}),G.morphTargetInfluences[le]=j}}),h+=(u-h)*(1-Math.exp(-L*(u>h?24:16)));for(let G of p){let J=G.mesh.morphTargetInfluences[G.index]||0,le=Math.max(J,h*.85);f.push({...G,base:J,applied:le}),G.mesh.morphTargetInfluences[G.index]=le}i.updateWorldMatrix(!0,!0);for(let G of a)G.update()}function I(){i.updateWorldMatrix(!0,!0);for(let Y of["left","right"]){let O=n[Y];if(!O)continue;let R=O.upper.getWorldPosition(new D),F=O.lower.getWorldPosition(new D),$=O.hand.getWorldPosition(new D);C[Y]=$.y>R.y+(R.distanceTo(F)+F.distanceTo($))*.25}let U=s.length?s.reduce((Y,O)=>Y+(O.mesh.morphTargetInfluences[O.index]||0),0)/s.length:0,L=v+t();return{available:[...o],eyes:s.length?U>.95?"\u5DF2\u95ED\u5408":U<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...C},hands:C.left&&C.right?"\u53CC\u624B\u62AC\u8D77":C.left?"\u5DE6\u624B\u62AC\u8D77":C.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(v-b)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((L%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(L%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(L)}\u5EA6`,yaw:L,lastResult:M}}function B(){N(),u=h=0,l=null,m.clear(),d=!1,S.left=S.right=E=0,v=b=0,e(0),M="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:k,playGesture:g,tick:H,restore:N,snapshot:I,reset:B,setSpeechLevel:U=>{u=Number.isFinite(U)?Le.clamp(U,0,1):0},speechState:()=>({level:h,targets:p.length,weights:p.map(U=>U.mesh.morphTargetInfluences[U.index])}),releaseHands:()=>{m.clear(),l=null}}}function cm(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let f=0;f<3;f++)u[f]=n[f]+(.2*o[f]+.6*c[f]+.2*l[f]-n[f])*t;let h=new Oe().fromArray(o,3).slerp(new Oe().fromArray(c,3),.75).slerp(new Oe().fromArray(l,3),.2);return new Oe().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function um(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i),c={color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?vn:pn},l;return r?l=new rn(c):(l=new sn({...c,normalMap:t||null,normalScale:new nt(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},l.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(l.polygonOffset=!0,l.polygonOffsetFactor=-.5,l.polygonOffsetUnits=-.5),l.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",l}function hm(i,e){e.outputColorSpace=Dt,e.toneMapping=Ra,e.toneMappingExposure=1.05;let t=new Ma(16774379,10596036,1.4);i.add(t);let n=new Di(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=ul;let r=new Di(14674687,1);r.position.set(3,2,4),i.add(r);let s=new Di(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new _r;a.background=new $e(.18,.18,.2);let o=new vr(1,1),c=[];for(let[g,_,m,d]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let v=new rn({color:m,side:pn});v.color.multiplyScalar(d),c.push(v);let b=new Vt(o,v);b.position.fromArray(g),b.scale.set(_[0],_[1],1),b.lookAt(0,1,0),a.add(b)}let l=new Hs(e),u=l.fromScene(a,.08,.1,30);l.dispose(),o.dispose();for(let g of c)g.dispose();i.environment=u.texture;let h={exposure:1.05,warmth:.5,reflection:1,shadows:!0};function f(g){let _={...h,...g};if(![_.exposure,_.warmth,_.reflection].every(Number.isFinite)||typeof _.shadows!="boolean"||_.exposure<.65||_.exposure>1.45||_.warmth<0||_.warmth>1||_.reflection<0||_.reflection>1.5)throw new Error("Invalid lighting settings");return h={exposure:_.exposure,warmth:_.warmth,reflection:_.reflection,shadows:_.shadows},e.toneMappingExposure=h.exposure,e.shadowMap.enabled=h.shadows,n.color.set(15331839).lerp(new $e(16770247),h.warmth),i.environmentIntensity=h.reflection,{...h}}function p(g){let _=g.getCenter(new D),m=Math.max(1.5,g.getSize(new D).length()*.7);n.target.position.copy(_),n.position.copy(_).add(new D(-2,4,5).normalize().multiplyScalar(m*3)),Object.assign(n.shadow.camera,{left:-m,right:m,top:m,bottom:-m,near:.1,far:m*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:f,frame:p,snapshot:()=>({...h,environment:!0,shadowMapSize:1024}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let g of[t,n,r,s])g.removeFromParent()}}}function fm(i,e,t,n){if(!t)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};if(!["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(t.schema)||t.sourceCharacter!=="Yuki"||t.targetCharacter!=="Enya"||!Array.isArray(t.clips)||t.clips.length>8)throw new Error("Invalid learned motion catalog");let r=t.schema.endsWith("/3")&&t.stance==="standing";if(t.schema.endsWith("/3")&&(!r||n!=="standing"))throw new Error("Standing motion requires standing source");let s=E=>{let x=[];if(i.traverse(T=>{T.isBone&&T.name===E&&x.push(T)}),x.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+E);return x[0]},a=s("Bip001-Head"),o=s("Bip001-Spine3"),c={};for(let[E,x]of[["left","L"],["right","R"]]){let T=s(`Bip001-${x}-UpperArm`),C=s(`Bip001-${x}-Forearm`),N=s(`Bip001-${x}-Hand`);if(C.parent!==T||N.parent!==C)throw new Error("Learned arm binding mismatch");c[E]={upper:T,lower:C,hand:N}}let l=E=>E.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let u=1,h=l(c.right.upper).sub(l(c.left.upper)).normalize(),f=l(a).sub(l(o)).normalize();new D().crossVectors(h,f).dot(e.position.clone().sub(l(o)))<0&&(u=-1);let p=new Map;for(let E of t.clips){if(!["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(E.id)||p.has(E.id)||!Number.isInteger(E.frames)||E.frames<2||E.frames>1800||!Number.isFinite(E.fps)||E.fps<=0||E.fps>60)throw new Error("Invalid learned clip");let x={};for(let[k,H]of Object.entries(E.channels||{})){let I=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(k)?1:["headDelta","chestDelta",...r?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(k)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...r?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(k)||/^(left|right)Finger[0-4]_[0-2]$/.test(k)?3:0;if(!I||typeof H!="string")throw new Error("Invalid learned channel");let B=Uint8Array.from(atob(H),L=>L.charCodeAt(0));if(B.byteLength!==E.frames*I*4)throw new Error("Learned channel truncated");let U=new Float32Array(B.buffer);if(!U.every(Number.isFinite))throw new Error("Non-finite learned pose");if(I===1&&U.some(L=>L<-.31||L>1.11))throw new Error("Invalid learned finger angle");for(let L=0;I>1&&L<E.frames;L++){let Y=0;for(let O=0;O<I;O++)Y+=U[L*I+O]**2;if(Math.abs(Y-1)>.01)throw new Error("Invalid learned direction/quaternion")}x[k]={values:U,width:I}}if(!x.headDelta)throw new Error("Missing learned head reference");let T=E.id.includes("dance"),C=T?r?"standing-dance":"seated-dance":E.id==="yuki_Peace_hand"?"peace":E.id==="yuki_hello"?"greeting":"head",N=T?["left","right"]:C==="head"?[]:["right"];if(!t.schema.endsWith("/1")&&(E.motionKind!==C||JSON.stringify(E.arms)!==JSON.stringify(N)))throw new Error("Invalid learned action capability");if(!(T&&!r)){if(T&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(k=>!x[k]))throw new Error("Missing standing body channels");p.set(E.id,{...E,kind:C,arms:N,channels:x,duration:(E.frames-1)/E.fps})}}let g=Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,Array.from({length:5},(T,C)=>[s(`Bip001-${x}-Finger${C}`),s(`Bip001-${x}-Finger${C}1`),s(`Bip001-${x}-Finger${C}2`)])])),_=r?s("Bip001-Pelvis"):null,m=r?Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,{thigh:s(`Bip001-${x}-Thigh`),calf:s(`Bip001-${x}-Calf`),foot:s(`Bip001-${x}-Foot`),toe:s(`Bip001-${x}-Toe0`)}])):{},d={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function v(){let E=l(c.right.upper).sub(l(c.left.upper)).normalize(),x=l(a).sub(l(o));x.addScaledVector(E,-x.dot(E)).normalize();let T=new D().crossVectors(E,x).multiplyScalar(u).normalize();return{right:E,up:x,front:T,vector:C=>E.clone().multiplyScalar(C[0]).addScaledVector(x,C[1]).addScaledVector(T,C[2])}}let b=new Map,y=null,M=-1;function S(E,x,T,C={}){let N=p.get(E);if(!N||T<=0)return;let k=N.kind==="standing-dance",H=k&&Number.isFinite(C.amplitude)?Le.clamp(C.amplitude,.5,1.2):1;d.fingerWrites=0,d.armWrites=0,d.chestWrites=0,d.workspaceAdjusted=0,(E!==y||x<=M||x-M>.2)&&b.clear(),y=E,M=x,i.updateWorldMatrix(!0,!0);let I=v(),B=Le.clamp(x*N.fps,0,N.frames-1),U=Math.floor(B),L=Math.min(U+1,N.frames-1),Y=B-U;function O(te){let fe=N.channels[te];if(!fe)return null;if(k&&fe.width===1)return[Le.lerp(fe.values[U],fe.values[L],Y)];if(k&&fe.width===3)return new D().fromArray(fe.values,U*3).lerp(new D().fromArray(fe.values,L*3),Y).normalize().toArray();if(fe.width===1){let ge=0;for(let we of[-2,-1,0,1,2]){let me=Le.clamp(B+we,0,N.frames-1),be=Math.floor(me),de=Math.min(be+1,N.frames-1);ge+=(fe.values[be]+(fe.values[de]-fe.values[be])*(me-be))*(we===0?.4:Math.abs(we)===1?.2:.1)}return[ge]}if(fe.width===4)return new Oe().fromArray(fe.values,U*4).slerp(new Oe().fromArray(fe.values,L*4),Y).normalize().toArray();let ae=new D;for(let ge of[-2,-1,0,1,2]){let we=Le.clamp(B+ge,0,N.frames-1),me=Math.floor(we),be=Math.min(me+1,N.frames-1);ae.add(new D().fromArray(fe.values,me*3).lerp(new D().fromArray(fe.values,be*3),we-me).multiplyScalar(ge===0?.4:Math.abs(ge)===1?.2:.1))}return ae.normalize().toArray()}function R(te,fe,ae,ge,we=T){let me=fe.angleTo(ae),be=Le.degToRad(ge);me>be&&d.limited++,te.quaternion.copy(fe).slerp(ae,we*Math.min(H,be/Math.max(me,1e-8))).normalize()}function F(te,fe,ae,ge,we=T){te.parent.updateWorldMatrix(!0,!1);let me=te.quaternion.clone(),be=me.clone(),de=(fe?fe.position.clone():new D(1,0,0)).multiply(te.scale).applyQuaternion(be).normalize(),ne=ae.clone().transformDirection(te.parent.matrixWorld.clone().invert()),Me=new Oe().setFromUnitVectors(de,ne).multiply(be).normalize();b.set(te,Me.clone()),R(te,me,Me,ge,we),te.updateWorldMatrix(!1,!0)}function $(te,fe,ae,ge){let we=new Ve().makeBasis(I.right,I.up,I.front),me=new Ve().makeRotationFromQuaternion(new Oe(...fe)),be=we.clone().multiply(me).multiply(we.clone().invert());te.parent.updateWorldMatrix(!0,!1);let de=new Ve().extractRotation(te.parent.matrixWorld),ne=de.clone().invert().multiply(be).multiply(de),Me=te.quaternion.clone(),Te=new Oe().setFromRotationMatrix(ne).multiply(Me).normalize();R(te,Me,Te,ae,ge),te.updateWorldMatrix(!1,!0)}let K=new D(0,1,0).transformDirection(i.parent.matrixWorld),G=k?Math.min(...Object.values(m).map(te=>l(te.foot).dot(K))):0;d.legWrites=0,d.groundCorrection=0,d.sourceTime=x,d.sourceFrame=B,d.sourceFPS=N.fps,d.amplitude=H,d.sourceBPM=k?E.includes("90bpm")?90:E.includes("120bpm")?120:60:null,k&&($(_,O("pelvisDelta"),30,T),I=v());let J=O("chestDelta");if(J&&($(o,J,k?35:10,T*(k?1:.35)),I=v(),d.chestWrites=1),k){for(let[we,me]of Object.entries(m)){if(me.calf.parent!==me.thigh||me.foot.parent!==me.calf)throw new Error("Standing leg hierarchy mismatch");F(me.thigh,me.calf,I.vector(O(we+"Thigh")),110,T),F(me.calf,me.foot,I.vector(O(we+"Calf")),150,T),$(me.foot,O(we+"FootDelta"),45,T),d.legWrites+=3}let te=Le.clamp(G-Math.min(...Object.values(m).map(we=>l(we.foot).dot(K))),-.18,.18),fe=l(_),ae=_.parent.matrixWorld.clone().invert(),ge=fe.clone().addScaledVector(K,te).applyMatrix4(ae).sub(fe.clone().applyMatrix4(ae));_.position.add(ge),_.updateWorldMatrix(!1,!0),d.groundCorrection=te}function le(te,fe,ae,ge){let we=l(te.upper),me=l(te.lower).distanceTo(we),be=l(te.hand).distanceTo(l(te.lower)),de=we.clone().addScaledVector(I.vector(fe),me),ne=de.clone().addScaledVector(I.vector(ae),be),Me=l(o),Te=ne.clone().sub(Me),Ce=Te.dot(I.right),Ge=Te.dot(I.up),Ke=Te.dot(I.front),z=[Ce,Ge,Ke];Ge=Le.clamp(Ge,-.16,.6);let tt=(1-Le.smoothstep(Math.abs(Ce),.16,.28))*Le.smoothstep(Ge,-.42,-.32)*(1-Le.smoothstep(Ge,.18,.32));Ke+=Math.max(0,.23-Ke)*tt,ne.copy(Me).addScaledVector(I.right,Ce).addScaledVector(I.up,Ge).addScaledVector(I.front,Ke);let je=ne.clone().sub(l(a));je.length()<.14&&ne.copy(l(a)).add(je.length()>.001?je.setLength(.14):I.front.clone().multiplyScalar(.14)),(z[1]!==Ge||z[2]!==Ke)&&d.workspaceAdjusted++;let P=ne.clone().sub(we),w=Le.clamp(P.length(),Math.abs(me-be)+.015,(me+be)*.98);P.normalize(),ne.copy(we).addScaledVector(P,w);let W=I.right.clone().multiplyScalar(ge==="right"?1:-1),Z=W.clone().addScaledVector(I.front,.3).addScaledVector(I.up,.2);Z.addScaledVector(P,-Z.dot(P)),Z.length()<1e-4&&Z.copy(I.front).addScaledVector(P,-I.front.dot(P)),Z.normalize();let re=(me*me-be*be+w*w)/(2*w),he=Math.sqrt(Math.max(0,me*me-re*re)),_e=we.clone().addScaledVector(P,re).addScaledVector(Z,he);return{upper:_e.clone().sub(we).normalize(),lower:ne.sub(_e).normalize()}}for(let te of N.arms){let Me=function(){let W=l(ae[1][0]).sub(l(ae[4][0])).normalize(),Z=l(ae[2][0]).sub(l(fe.hand));return Z.addScaledVector(W,-Z.dot(W)).normalize(),new Ve().makeBasis(W,Z,new D().crossVectors(W,Z).normalize())},fe=c[te],ae=g[te],ge=O(te+"Upper"),we=O(te+"Lower");if(!ge||!we)continue;let me=["greeting","peace"].includes(N.kind)?T*Le.smoothstep(we[1],-1,1):T*(k?1:.72),be=N.kind==="seated-dance"?le(fe,ge,we,te):{upper:I.vector(ge),lower:I.vector(we)};F(fe.upper,fe.lower,be.upper,120,me),F(fe.lower,fe.hand,be.lower,170,me),d.armWrites+=2;let de=O(te+"HandWidth"),ne=O(te+"HandForward");if(!de||!ne)continue;i.updateWorldMatrix(!0,!0);let Te=I.vector(de).normalize(),Ce=I.vector(ne);Ce.addScaledVector(Te,-Ce.dot(Te)).normalize();let Ge=new Ve().makeBasis(Te,Ce,new D().crossVectors(Te,Ce).normalize()),Ke=Ge.multiply(Me().invert()),z=fe.hand,tt=new Ve().extractRotation(z.parent.matrixWorld),je=tt.clone().invert().multiply(Ke).multiply(tt),P=z.quaternion.clone(),w=new Oe().setFromRotationMatrix(je).multiply(P).normalize();R(z,P,w,N.kind==="greeting"?110:N.kind==="seated-dance"?75:110,me*(N.kind==="seated-dance"?.7:1)),z.updateWorldMatrix(!1,!0);for(let W=0;W<5;W++)for(let Z=0;Z<3;Z++){let re=O(`${te}Finger${W}_${Z}`);if(!re)continue;let he=new D(...re).normalize(),_e=Z?new D(...O(`${te}Finger${W}_${Z-1}`)).normalize():new D(0,1,0),oe=Le.clamp(Math.atan2(-he.z,Math.max(.1,he.y))-Math.atan2(-_e.z,Math.max(.1,_e.y)),-.15,W===0?.45:1.1),ce=Z===0&&W!==0?Le.clamp(Math.atan2(he.x,he.y),-.3,.3):0,ye=O(`${te}Curl${W}_${Z}`),Ue=O(`${te}Spread${W}`);ye&&(oe=ye[0]),Z===0&&W!==0&&Ue&&(ce=Ue[0]),N.kind==="peace"&&(oe=W===1||W===2?.02:W===0?.4:.95,Z===0&&(ce=W===1?.14:W===2?-.08:0));let xe=te==="left"?-1:1,Se=ae[W][Z],Be=Se.quaternion.clone(),et=new Oe().fromArray(Se.userData.bindLocalQuaternion||Be.toArray()).multiply(new Oe().setFromAxisAngle(new D(0,0,1),ce*xe)).multiply(new Oe().setFromAxisAngle(new D(0,1,0),oe*xe));Se.quaternion.copy(Be).slerp(et,T).normalize(),d.fingerWrites++}}let V=O("headDelta");if(V){let te=new Ve().makeBasis(I.right,I.up,I.front),fe=new Ve().makeRotationFromQuaternion(new Oe(...V)),ae=te.clone().multiply(fe).multiply(te.clone().invert());a.parent.updateWorldMatrix(!0,!1);let ge=new Ve().extractRotation(a.parent.matrixWorld),we=ge.clone().invert().multiply(ae).multiply(ge),me=a.quaternion.clone(),be=new Oe().setFromRotationMatrix(we).multiply(me).normalize();R(a,me,be,40)}i.updateWorldMatrix(!0,!0);let j=new Set;i.traverse(te=>{te.isSkinnedMesh&&!j.has(te.skeleton)&&(te.skeleton.update(),j.add(te.skeleton))})}return{available:()=>[...p.values()].map(E=>({id:E.id,label:E.label,duration:E.duration,arms:[...E.arms],kind:E.kind})),apply:S,snapshot:()=>{i.updateWorldMatrix(!0,!0);let E=v(),x=c.right;return{...d,parentDeterminant:x.upper.parent.matrixWorld.determinant(),rightUpper:l(x.lower).sub(l(x.upper)).normalize().toArray(),rightLower:l(x.hand).sub(l(x.lower)).normalize().toArray(),handHeight:l(x.hand).sub(l(x.lower)).dot(E.up)}}}}function vh(i,e){if(e===Gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Os||e===Fa){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Os)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function dm(i){let e=new Map,t=new Map,n=i.clone();return pm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function pm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)pm(i.children[n],e.children[n],t)}var Pr=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new oc(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new oc(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zh(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Fi.extractUrlBase(e);a=Fi.resolveURL(l,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Is(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ym){try{a[ft.KHR_BINARY_GLTF]=new Hh(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Zh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new Eh;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new Vh(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new Gh;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new Wh;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Mb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],fn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Di(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ea(u),l.distance=h;break;case"spot":l=new wa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Eh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let r=[];e.color=new $e(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(s,s)}return Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ch=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(s[0],s[1],s[2],fn),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(s[0],s[1],s[2],fn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Bh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},kh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}},zh=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let g of h){let _=new Ve,m=new D,d=new Oe,v=new D(1,1,1),b=new ma(g.geometry,g.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,_.compose(m,d,v));let y=null;for(let M in c)if(M==="_COLOR_0"){let S=c[M];b.instanceColor=new Ii(S.array,S.itemSize,S.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let E=b.geometry;y=new jt,y.name=E.name;for(let x in E.attributes)y.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)y.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)y.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),b.geometry=y}let S=c[M];y.setAttribute(M,new Ii(S.array,S.itemSize,S.normalized))}Nt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},ym="glTF",za=12,mm={JSON:1313821514,BIN:5130562},Hh=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-za,s=new DataView(e,za),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===mm.JSON){let l=new Uint8Array(e,za+a,o);this.content=n.decode(l)}else if(c===mm.BIN){let l=za+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=qh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=qh[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Gs[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(p)},o,l,fn,f)})})}},Gh=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Wh=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},lc=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,_=g-l,m=-2*p+3*f,d=p-f,v=1-m,b=d-f+h;for(let y=0;y!==o;y++){let M=a[_+y+o],S=a[_+y+c]*u,E=a[g+y+o],x=a[g+y]*u;s[y]=v*M+b*S+m*E+d*x}return s}},Sb=new Oe,Xh=class extends lc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Sb.fromArray(s).normalize().toArray(s),s}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gm={9728:zt,9729:Ht,9984:dl,9985:Us,9986:Tr,9987:$n},xm={33071:kn,33648:ps,10497:ji},bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ar={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wb={CUBICSPLINE:void 0,LINEAR:gr,STEP:mr},Mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Eb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new br({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),i.DefaultMaterial}function Ir(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Tb(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ab(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sh(t.attributes):e=i.indices+":"+Sh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Sh(i.targets[n]);return e}function Sh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ib=new Ve,Zh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new tr(this.options.manager):this.textureLoader=new Ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Is(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Ir(s,o,r),xi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Fi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=bh[r.type],o=Gs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ft(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=bh[r.type],l=Gs[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,m;if(p&&p!==h){let d=Math.floor(f/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count,b=t.cache.get(v);b||(_=new l(o,d*p,r.count*p/u),b=new bs(_,p/u),t.cache.add(v,b)),m=new Ms(b,c,f%p/u,g)}else o===null?_=new l(r.count*c):_=new l(o,f,r.count*c),m=new Ft(_,c,g);if(r.sparse!==void 0){let d=bh.SCALAR,v=Gs[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,M=new v(a[1],b,r.sparse.count*d),S=new l(a[2],y,r.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,x=M.length;E<x;E++){let T=M[E];if(m.setX(T,S[E*c]),c>=2&&m.setY(T,S[E*c+1]),c>=3&&m.setZ(T,S[E*c+2]),c>=4&&m.setW(T,S[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=gm[f.magFilter]||Ht,u.minFilter=gm[f.minFilter]||$n,u.wrapS=xm[f.wrapS]||ji,u.wrapT=xm[f.wrapT]||ji,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Ht,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Jt(_);m.needsUpdate=!0,f(m)}),t.load(Fi.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),xi(h,a),h.userData.mimeType=a.mimeType||Cb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new As,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ts,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return br}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=r[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],fn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=pn);let u=s.alphaMode||Mh.OPAQUE;if(u===Mh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Mh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rn){let h=s.emissiveFactor;o.emissive=new $e().setRGB(h[0],h[1],h[2],fn)}return s.emissiveTexture!==void 0&&a!==rn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),xi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ir(r,h,s),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return _m(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Rb(l),h=r[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=_m(new jt,l,t),l.mode===Hn.TRIANGLE_STRIP?f=f.then(p=>vh(p,Fa)):l.mode===Hn.TRIANGLE_FAN&&(f=f.then(p=>vh(p,Os))),r[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Eb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let _=u[p],m=a[p],d,v=l[p];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0){let b=s.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=b&&y?new da(_,v):new Vt(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(m.mode===Hn.LINES)d=new ga(_,v);else if(m.mode===Hn.LINE_STRIP)d=new yr(_,v);else if(m.mode===Hn.LINE_LOOP)d=new xa(_,v);else if(m.mode===Hn.POINTS)d=new _a(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ab(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),xi(d,s),m.extensions&&Ir(r,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Ir(r,h[0],s),h[0];let f=new kt;s.extensions&&Ir(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Le.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new nr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new Ve;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],g=r.samplers[p.sampler],_=p.target,m=_.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],_=h[3],m=h[4],d=[];for(let b=0,y=f.length;b<y;b++){let M=f[b],S=p[b],E=g[b],x=_[b],T=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,S,E,x,T);if(C)for(let N=0;N<C.length;N++)d.push(C[N])}let v=new Cs(s,void 0,d);return xi(v,r),v})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ib)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Ss:l.length>1?u=new kt:l.length===1?u=l[0]:u=new Nt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),xi(u,s),s.extensions&&Ir(n,u,s),s.matrix!==void 0){let h=new Ve;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),xi(s,n),n.extensions&&Ir(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let f=c[u];f.parent!==null?s.add(dm(f)):s.add(f)}let l=u=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof _n||f instanceof Jt)&&h.set(f,p);return u.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}ar[s.path]===ar.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(ar[s.path]){case ar.weights:u=Li;break;case ar.rotation:u=fi;break;case ar.translation:case ar.scale:u=Ui;break;default:n.itemSize===1?u=Li:u=Ui;break}let h=r.interpolation!==void 0?wb[r.interpolation]:gr,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let _=new u(c[p]+"."+ar[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof fi?Xh:lc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Pb(i,e,t){let n=e.attributes,r=new Yt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=Yh(Gs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let _=Yh(Gs[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new xn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function _m(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=qh[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return ht.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),xi(i,e),Pb(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Tb(i,e.targets,t):i})}function vm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,h=-l*r*o-c*s*a,f=l*s*a-c*r*o,p=l*s*o+c*r*a;return[-u,-f,-h,p]}function bm(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((f,p)=>[f.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new D().crossVectors(c,o).normalize(),u=new D;for(let f of["L","R"]){let p=e.get("Bip001-"+f+"-Foot"),g=e.get("Bip001-"+f+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(l)<0&&l.negate();let h=i.geometry.getAttribute("position");return(f,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let _=new D;for(let M=0;M<3;M++)_.addScaledVector(new D().fromBufferAttribute(h,f[M]),p.getComponent(M));let m=_.sub(t),d=Math.abs(m.dot(c))/a,v=m.dot(o)/a,b=m.dot(l)/a;if(d>.72)return null;let y=null;return v>-.38&&v<-.04&&d<.23&&b>.025?y="pelvis_front":v>-.35&&v<.18&&b<-.025?y="hips":v>.43&&v<1.02&&b>.025&&d<.67?y="chest":v>.1&&v<=.43&&b>.025?y=d>.48?"waist":"abdomen":v>.16&&v<1.02&&b<-.025&&(y="back"),y?{id:y,confidence:.85,source:"bind-pose-surface",coordinates:[d,v,b]}:null}}function Lb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function Mm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=Lb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Sm(i,e,t,n=null){let r=new Sr,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function h(g,_){if(!["torso","leg"].includes(g?.id))return g;let m=R=>i.getObjectByName(R),d=R=>m(R)?.getWorldPosition(new D),v=d("Bip001-Pelvis"),b=d("Bip001-Neck"),y=d("Bip001-L-UpperArm"),M=d("Bip001-R-UpperArm"),S=d("Bip001-Head"),E=d("EyeJoint_L"),x=d("EyeJoint_R");if(!v||!b||!y||!M||!S||!E||!x)return g;let T=b.distanceTo(v);if(T<1e-5)return g;let C=b.clone().sub(v).normalize(),N=M.clone().sub(y).normalize(),k=new D().crossVectors(N,C).normalize(),I=E.add(x).multiplyScalar(.5).sub(S).dot(k);if(Math.abs(I)<T*.002)return g;I<0&&k.negate();let B=_.clone().sub(v),U=B.dot(C)/T,L=B.dot(k)/T;if(Math.abs(B.dot(N))/T>.7)return g;let O=null;return U>-.4&&U<.16&&L<-.025?O="hips":g.id==="torso"&&(U>.45&&U<.95&&L>.06?O="chest":U>.05&&U<.46&&L>.06?O="abdomen":U>.16&&U<.95&&L<-.06&&(O="back")),O?{id:O,confidence:.75,source:"rig-surface-estimate"}:g}function f(g){for(let _=g;_;_=_.parent)if(!_.visible)return!1;return!0}function p(g,_){if(!g||!_)return 1;try{let m=g.image,d=m.width,v=m.height;if(!d||!v||!u)return null;let b=_.clone();g.transformUv(b);let y=Math.min(d-1,Math.max(0,Math.floor(b.x*d))),M=Math.min(v-1,Math.max(0,Math.floor(b.y*v))),S=Math.floor(y/32)*32,E=Math.floor(M/32)*32;s.has(g)||s.set(g,++c);let x=s.get(g)+":"+S+":"+E,T=a.get(x);if(T)a.delete(x),a.set(x,T);else{u.clearRect(0,0,32,32),u.drawImage(m,S,E,Math.min(32,d-S),Math.min(32,v-E),0,0,Math.min(32,d-S),Math.min(32,v-E));let C=u.getImageData(0,0,32,32).data;T=new Uint8Array(1024);for(let N=0;N<1024;N++)T[N]=C[N*4+3];a.set(x,T),a.size>128&&a.delete(a.keys().next().value)}return T[(M-E)*32+y-S]/255}catch{return null}}return(g,_)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(_)||!m.width||!m.height||g<m.left||g>m.right||_<m.top||_>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let d=[];i.traverse(b=>{b.isMesh&&f(b)&&(b.isSkinnedMesh&&(b.skeleton.update(),b.computeBoundingSphere(),b.computeBoundingBox()),d.push(b))});let v=new Set;n?.traverse(b=>{b.isMesh&&f(b)&&(d.push(b),v.add(b))}),r.setFromCamera(new nt((g-m.left)/m.width*2-1,-(_-m.top)/m.height*2+1),e);for(let b of r.intersectObjects(d,!1)){let y=b.object,M=y.material,S=p(y.userData.previewMap,b.uv),E=M.alphaTest||(M.transparent?.1:0);if(M.clippingPlanes?.some(L=>L.distanceToPoint(b.point)<0)||S!==null&&S<E)continue;if(v.has(y))return null;let x=[b.face.a,b.face.b,b.face.c],T=x.map(L=>y.getVertexPosition(L,new D)),C=y.worldToLocal(b.point.clone()),N=oi.getBarycoord(C,...T,new D),k=[],H=y.geometry.getAttribute("skinIndex"),I=y.geometry.getAttribute("skinWeight");if(y.isSkinnedMesh&&H&&I&&N)for(let L=0;L<3;L++)for(let Y=0;Y<4;Y++)k.push({name:y.skeleton.bones[H.getComponent(x[L],Y)]?.name,weight:I.getComponent(x[L],Y)*N.getComponent(L)});o.has(y)||o.set(y,bm(y));let B=Mm(k),U=o.get(y)(x,N,B)||h(B,b.point);return{skinBones:k.filter(L=>L.weight>.05).map(L=>L.name),mesh:y.userData.snowbreakSurfaceKey,triangle:b.faceIndex,barycentric:N?.toArray(),anatomy:U,uv:b.uv?.toArray()||null,point:b.point.toArray(),distance:b.distance,alphaVerified:S!==null,material:y.userData.snowbreakMaterialName}}return null}}var Oi={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Ha(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Lr(i,e){let t=Ha(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(Oi,i.anatomy.id))return{...i.anatomy,label:Oi[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(Oi,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:Oi[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:Oi[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var Kh={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function wm(i,e,t){let n=new kt;n.visible=!1,e.add(n);let r=new Map;i.traverse(d=>{d.isMesh&&d.userData.snowbreakSurfaceKey&&r.set(d.userData.snowbreakSurfaceKey,d)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function h(){for(let d of c)d.overlay.geometry.dispose(),d.overlay.material.dispose(),d.overlay.removeFromParent();c=[],l=0}function f(){h(),u=!1;let d=new Map;for(let[v,b]of Object.entries(s)){let y=/^(surface_\d+):(\d+)$/.exec(v);if(!y)continue;let M=r.get(y[1]),S=Number(y[2]);if(!M)continue;let E=M.geometry,x=E.getAttribute("position"),T=E.index,C=E.getAttribute("uv"),N=Lr({mesh:y[1],triangle:S,alphaVerified:!0},{[v]:b});if(!N||S*3+2>=(T?T.count:x.count)||M.userData.previewMap&&!C)continue;if(l>=5e3){u=!0;continue}l++;let k=y[1]+":"+N.id,H=d.get(k);H||(H={source:M,region:N.id,vertices:[],keys:[]},d.set(k,H)),H.keys.push(v);for(let I=0;I<3;I++)H.vertices.push(T?T.getX(S*3+I):S*3+I)}for(let v of d.values()){let b=new jt;b.setAttribute("position",new Ft(new Float32Array(v.vertices.length*3),3).setUsage(Xu));let y=v.source.geometry.getAttribute("uv");if(y){let x=new Float32Array(v.vertices.length*2);v.vertices.forEach((T,C)=>{x[C*2]=y.getX(T),x[C*2+1]=y.getY(T)}),b.setAttribute("uv",new Ft(x,2))}let M=v.source.material,S=new rn({color:Kh[v.region],map:v.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(M.alphaTest||(M.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:M.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),E=new Vt(b,S);E.frustumCulled=!1,E.renderOrder=100,n.add(E),c.push({...v,overlay:E})}o=!1}function p(d){for(let v=d;v;v=v.parent)if(!v.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&f(),i.updateWorldMatrix(!0,!0);let d=new D,v=new Map;for(let b of c){let{source:y,overlay:M}=b;if(M.visible=p(y),!M.visible)continue;y.updateMatrixWorld(!0),y.isSkinnedMesh&&y.skeleton.update();let S=v.get(y);S||(S=new Map,v.set(y,S));let E=M.geometry.getAttribute("position");b.vertices.forEach((x,T)=>{let C=S.get(x);C||(y.getVertexPosition(x,d).applyMatrix4(y.matrixWorld),C=d.toArray(),S.set(x,C)),E.setXYZ(T,...C)}),E.needsUpdate=!0}}function _(){let d=c.find(b=>b.overlay.visible),v=d?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:d&&v?{key:d.keys[0],vertices:[0,1,2].map(b=>new D().fromBufferAttribute(v,b).toArray()),screen:[0,1,2].map(b=>new D().fromBufferAttribute(v,b).project(t).toArray())}:null}}function m(d){let v=n.visible;n.visible=!1;try{return d()}finally{n.visible=v}}return{set(d,v=a){return s=d,a=!!v,o=!0,a||h(),g(),_()},update:g,snapshot:_,hideForCapture:m,dispose(){h(),n.removeFromParent()}}}function Em(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Ve().compose(new D(...i.position),new Oe(...i.quaternion).normalize(),new D(...i.scale))}async function Tm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(n.schema!=="snowbreak-local-scene/1"||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=Em(n.characterWorld).invert(),s=new kt,a=new kt,o=new Set,c=[],l=[],u=[];s.add(a);let h=new En,f=!0;for(let b of n.objects){let y=i.getAsset(b.assetRole);if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(b.id)||o.has(b.id)||y?.kind!=="geometry")throw new Error("Invalid scene object");if(b.group!==void 0&&!["room","furniture"].includes(b.group)||b.cutaway!==void 0&&typeof b.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(b.id);let M=r.clone().multiply(Em(b.world)),S=(await new Pr().parseAsync(y.bytes.slice().buffer,"")).scene,E=0;S.traverse(T=>{if(T.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");T.isMesh&&(E+=(T.geometry.index?.count||T.geometry.attributes.position.count)/3)});let x=new kt;x.name=b.id,x.matrixAutoUpdate=!1,x.matrix.copy(M),x.add(S),(b.group==="room"?a:s).add(x),t(S),S.traverse(T=>{T.isMesh&&(b.group==="room"&&(T.material.side=vn),b.cutaway&&(T.material.clippingPlanes=[h],l.push(T.material)),(b.group==="room"||b.cutaway)&&(T.material.needsUpdate=!0))}),b.group!=="room"&&S.traverse(T=>{T.isMesh&&u.push(T)}),c.push({id:b.id,assetRole:b.assetRole,group:b.group||"furniture",cutaway:!!b.cutaway,triangles:E,matrix:M.toArray()})}e.add(s),s.updateMatrixWorld(!0);function p(b,y){if(!l.length)return;let M=b.position.clone().sub(y),S=M.length();if(S<.001)return;M.divideScalar(S);let E=y.clone().addScaledVector(M,Math.min(.65,S*.5));h.setFromNormalAndCoplanarPoint(M.negate(),E)}function g(b){let y=!!b;if(y!==f){f=y;for(let M of l)M.clippingPlanes=f?[h]:null,M.needsUpdate=!0}}let _=new Map,m=new Sr,d=new D(0,1,0);function v(b){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let y=s.worldToLocal(b.clone()),M=Math.round(y.x/.015)+":"+Math.round(y.z/.015),S=_.get(M);if(S===void 0){let E=new Yt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),x=s.localToWorld(new D(y.x,E.max.y+.3,y.z)),T=d.clone().transformDirection(s.matrixWorld).negate();m.set(x,T),S=null;for(let C of m.intersectObjects(u,!1)){let N=C.face?.normal.clone().transformDirection(C.object.matrixWorld);if(N&&Math.abs(N.dot(T))>.65){S=s.worldToLocal(C.point.clone()).y;break}}_.set(M,S),_.size>512&&_.delete(_.keys().next().value)}return S===null?null:{clearance:y.y-S,normal:d.clone().transformDirection(s.matrixWorld),height:S}}return{root:s,contactSurface:v,hasCutaway:l.length>0,updateView:p,setRoomVisible:b=>{a.visible=!!b},setCutaway:g,setVisible:b=>{s.visible=!!b},snapshot:()=>({available:!0,visible:s.visible,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:f,clipPlane:[...h.normal.toArray(),h.constant],objects:c.map(b=>({...b,matrix:[...b.matrix]})),originalSceneVerified:!1})}}var Nb=new Set(["head","left_hand","right_hand"]),Ub=new Set(["tap","double_tap","long_press","stroke"]);function Am(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Nb.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Ub.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Rm(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function Db(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function Cm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let f of i.clips){let p=e.getAsset(f.animationRole),g=e.current.resources.find(m=>m.role===f.animationRole);if(p?.kind!=="animation"||f.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(f.sourceSha256)||n.has(f.sourceSha256)||f.frames!==p.data.frames||f.fps!==p.data.fps||!Array.isArray(f.curves)||f.curves.length>64)throw new Error("Morph curve animation mismatch");let _=new Set;for(let m of f.curves){if(typeof m.name!="string"||!m.name.length||m.name.length>128||_.has(m.name)||!Array.isArray(m.keys)||!m.keys.length||m.keys.length>4096)throw new Error("Invalid morph curve identity");_.add(m.name),s.add(m.name);let d=-1/0;for(let v of m.keys){if(!Array.isArray(v)||v.length!==5||!v.every(Number.isFinite)||v[0]<0||v[0]>120||v[0]<=d||Math.abs(v[1])>4||Math.abs(v[2])>1e6||Math.abs(v[3])>1e6||![0,1,2].includes(v[4]))throw new Error("Invalid morph curve key");if(d=v[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(f.sourceSha256,f),r.set(p.data,f.sourceSha256)}let o=[];if(t.traverse(f=>{if(!f.isMesh||!f.morphTargetDictionary||!f.morphTargetInfluences)return;let p=new Map;for(let g of s){let _=f.morphTargetDictionary[g];if(_!==void 0){if(!Number.isInteger(_)||_<0||_>=f.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,_)}}p.size&&o.push({mesh:f,indices:p})}),[...s].some(f=>!o.some(p=>p.indices.has(f))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function h(f,p){l=p,c=f&&r.get(f)||null,u={};let g=n.get(c);for(let _ of g?.curves||[])u[_.name]=Db(_.keys,p);for(let{mesh:_,indices:m}of o)for(let[d,v]of m)_.morphTargetInfluences[v]=u[d]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:f,indices:p})=>Object.fromEntries([...p].map(([g,_])=>[g,f.morphTargetInfluences[_]]))),originalExpressionFidelity:!1})}}function $h(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function Im(i,e){let t=new ic({canvas:i,alpha:!0,antialias:!0}),n=new _r,r=new kt,s=new kt,a=new qt(32,1,.01,100);r.rotation.y=-Math.PI/2,n.add(r),r.add(s);let o=hm(n,t),c,l,u,h,f,p,g=null,_=null,m=null,d=null,v=!1,b=null,y=0,M=[],S=new Set,E=new Set,x=new Set,T=new Map,C=new Map,N=new Map,k=new Set,H=new Map,I=e.getAsset("rootMotionPolicy")?.data,B=0,U=0,L=0,Y=0,O=null,R=null,F={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},$=0,K=0,G=null;function J(){r.rotation.set(Le.degToRad(F.pitch),-Math.PI/2+$+Le.degToRad(F.yaw),Le.degToRad(F.roll)),s.rotation.set(Le.degToRad(le.pitch),Le.degToRad(le.yaw+K),Le.degToRad(le.roll)),r.updateMatrixWorld(!0)}let le={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function V(de){let ne={...le,...de};if(Object.values(ne).some(Ce=>!Number.isFinite(Ce)))throw new Error("Invalid character placement");for(let Ce of["x","y","depth"])ne[Ce]=Le.clamp(ne[Ce],-1.5,1.5);ne.scale=Le.clamp(ne.scale,.3,4),ne.yaw=Le.clamp(ne.yaw,-180,180),ne.pitch=Le.clamp(ne.pitch,-65,65),ne.roll=Le.clamp(ne.roll,-45,45),ne.stretchX=ne.stretchY=1,le=ne,r.updateWorldMatrix(!0,!1),a.updateMatrixWorld();let Me=new D(ne.x,ne.y,ne.depth).applyQuaternion(a.quaternion),Te=r.matrixWorld.clone().invert();return s.position.copy(Me.transformDirection(Te).multiplyScalar(Math.hypot(ne.x,ne.y,ne.depth))),s.scale.setScalar(ne.scale),J(),{...le}}function j(de){let ne={...F,...de};for(let Me of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(ne[Me]))throw new Error("Invalid framing");return F={scale:Le.clamp(ne.scale,.3,4),x:Le.clamp(ne.x,-1.5,1.5),y:Le.clamp(ne.y,-1.5,1.5),yaw:((ne.yaw+180)%360+360)%360-180,pitch:Le.clamp(ne.pitch,-65,65),roll:Le.clamp(ne.roll,-45,45),stretchX:Le.clamp(ne.stretchX,.65,1.5),stretchY:Le.clamp(ne.stretchY,.65,1.5)},J(),be(),{...F}}function te(){if(!G)return;r.rotation.y=-Math.PI/2,r.updateMatrixWorld(!0);let de=G.bone.getWorldQuaternion(new Oe),ne=G.axis.clone().applyQuaternion(de);Math.hypot(ne.x,ne.z)>.1&&($=G.heading-Math.atan2(ne.x,ne.z)),J()}function fe(){return F.yaw=0,te(),be(),{...F}}function ae(de){de.traverse(ne=>{if(ne.isBone&&(ne.userData.bindLocalQuaternion=ne.quaternion.toArray()),!ne.isMesh)return;S.add(ne.geometry);for(let Ge of Array.isArray(ne.material)?ne.material:[ne.material]){E.add(Ge);for(let Ke of Object.values(Ge))Ke?.isTexture&&x.add(Ke)}let Me=ne.material.name,Te=T.get(Me)||null,Ce=N.get(Me)||{};if(ne.userData.snowbreakSurfaceKey="surface_"+U++,ne.userData.snowbreakMaterialName=Me,ne.userData.previewMap=Te,Ce.transparent!==void 0&&typeof Ce.transparent!="boolean")throw new Error("Invalid transparent override");if(Ce.renderOrder!==void 0&&(!Number.isInteger(Ce.renderOrder)||Math.abs(Ce.renderOrder)>100))throw new Error("Invalid material sorting");ne.renderOrder=Ce.renderOrder||0,ne.material=um(Me,Te,C.get(Me),Ce),E.add(ne.material),ne.castShadow=ne.isSkinnedMesh&&!Ce.transparent,ne.receiveShadow=ne.material.userData.profile==="cloth-or-room"})}function ge(de,ne){if(!ne)return;let Me=new Map(ne.tracks.map(Te=>[Te.bone,Te]));de.traverse(Te=>{if(!Te.isBone)return;let Ce=Me.get(Te.name)?.keys?.[0];if(!Ce||Ce.length!==10||!Ce.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");Te.position.fromArray(Ce),Te.quaternion.fromArray(Ce,3),Te.scale.fromArray(Ce,7)})}function we(de,ne,Me=M,Te=!1){if(!ne)return;let Ce=new Map(ne.tracks.map(Ge=>[Ge.bone,Ge]));if(Ce.size!==ne.tracks.length)throw new Error("Duplicate animation bones");de.traverse(Ge=>{if(!Ge.isBone||de===u&&!k.has(Ge)||Te&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(Ge.name))return;let Ke=Ce.get(Ge.name);if(!(Te&&!Ke)){if(!Ke||Ke.keys.length!==ne.frames||Ke.keys.some(z=>z.length!==10||!z.every(Number.isFinite)||Math.abs(z.slice(3,7).reduce((tt,je)=>tt+je*je,0)-1)>.05))throw new Error("Invalid bone animation");Me.push({bone:Ge,track:Ke,clip:ne})}})}function me(){if(!v){v=!0,removeEventListener("resize",be),t.setAnimationLoop(null),p?.dispose(),c?.dispose(),l?.dispose(),o.dispose();for(let de of S)de.dispose();for(let de of E)de.dispose();for(let de of x)de.dispose();u?.removeFromParent(),f?.root?.removeFromParent(),t.dispose()}}function be(){if(v||!u)return;Y++;let de=i.clientWidth||innerWidth,ne=i.clientHeight||innerHeight,Me=Math.min(devicePixelRatio||1,3);(!O||O.w!==de||O.h!==ne||O.ratio!==Me)&&(t.setPixelRatio(Me),t.setSize(de,ne,!1),O={w:de,h:ne,ratio:Me},L++),a.aspect=de/ne,r.updateMatrixWorld(!0),!g&&!R&&(u.traverse(tt=>{tt.isSkinnedMesh&&(tt.skeleton.update(),tt.computeBoundingBox())}),R=new Yt().setFromObject(u).applyMatrix4(r.matrixWorld.clone().invert()));let Te=(_||g||R).clone().applyMatrix4(r.matrixWorld),Ce=Te.getSize(new D),Ge=Te.getCenter(new D);o.frame(Te);let Ke=Math.tan(Le.degToRad(16)),z=Math.max(Ce.y/(2*Ke),Ce.x/(2*Ke*a.aspect))*1.25+Ce.z;if(g){z=0;for(let tt of[Te.min.x,Te.max.x])for(let je of[Te.min.y,Te.max.y])for(let P of[Te.min.z,Te.max.z])z=Math.max(z,P-Ge.z+Math.max(Math.abs(tt-Ge.x)/(Ke*a.aspect),Math.abs(je-Ge.y)/Ke)*1.12)}a.position.copy(Ge).add(new D(0,0,z)),a.lookAt(Ge),a.zoom=_?1.05:F.scale,a.setViewOffset(de,ne,_?0:-F.x*de,_?0:-F.y*ne,de,ne),a.updateProjectionMatrix(),a.projectionMatrix.elements[0]*=F.stretchX,a.projectionMatrix.elements[5]*=F.stretchY,a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),f?.updateView(a,Ge)}try{let Be=function(ve){let se=Ue.get(ve);if(!se)throw new Error("Unknown sample");ye=se.overlay?Z==="sample"&&ye?ye:{bindings:Z==="standby"?re:_e,duration:Z==="standby"?P:oe,time:y,envelope:_}:null,ce=ve,_e=se.bindings,oe=se.duration;let rt=Ue.get(se.sceneOf)||se,at=se.overlay?ye.envelope:rt.sceneFraming?H.get(rt.sourceSha256):null;if(se.sceneFraming&&!at)throw new Error("Scene framing envelope missing");let lt=_!==at;return _=at,Ze(0),lt&&be(),{id:ve,label:se.label,duration:se.duration}},Ze=function(ve,se=_e,rt=oe){if(v||!Number.isFinite(ve))return;let at=ye&&se===_e?ye:null;at&&at.duration>0&&Ze((at.time+ve)%at.duration,at.bindings,at.duration);let lt=Z;d=se[0]?.clip?.generatorMetadata?.sourceSha256||null,Z=se===re&&P>0?"standby":"sample",y=Math.max(0,Math.min(rt,ve));for(let{bone:gt,track:Ut,clip:Tt}of se){let Vn=y*Tt.fps,Qt=Math.min(Math.floor(Vn),Tt.frames-1),yi=Math.min(Qt+1,Tt.frames-1),In=Vn-Qt,Mn=Ut.keys[Qt],Pn=Ut.keys[yi];(!at||!k.has(gt))&&gt.position.set(Le.lerp(Mn[0],Pn[0],In),Le.lerp(Mn[1],Pn[1],In),Le.lerp(Mn[2],Pn[2],In)),gt.quaternion.copy(tt.fromArray(Mn,3).slerp(je.fromArray(Pn,3),In)),(!at||!k.has(gt))&&gt.scale.set(Le.lerp(Mn[7],Pn[7],In),Le.lerp(Mn[8],Pn[8],In),Le.lerp(Mn[9],Pn[9],In))}if(Ge.apply(se.find(gt=>!k.has(gt.bone))?.clip,y),I){u.position.x=u.position.z=0,r.updateMatrixWorld(!0);let gt=u.getObjectByName(I.bone).getWorldPosition(new D).applyMatrix4(u.matrixWorld.clone().invert());u.position.x=I.reference[0]-gt.x,u.position.z=I.reference[1]-gt.z}r.updateMatrixWorld(!0),B=Ke.length;for(let gt of Ke)gt.update()};if(I&&(I.schema!=="snowbreak-home-root-lock/1"||I.bone!=="Bip001"||!Array.isArray(I.reference)||I.reference.length!==2||!I.reference.every(ve=>Number.isFinite(ve)&&Math.abs(ve)<10)))throw new Error("Invalid home root motion policy");let de=e.getAsset("materials")?.data;if(de){if(de.schema!=="snowbreak-material-preview/1"||de.originalShaderVerified!==!1||!Array.isArray(de.materials)||de.materials.length>64)throw new Error("Invalid material preview");let ve=new Map;for(let se of de.materials){if(typeof se.name!="string"||se.name.length>256||N.has(se.name))throw new Error("Invalid material identity");let rt=se.renderState||{};if(rt.alphaCutoff!==void 0&&(!Number.isFinite(rt.alphaCutoff)||rt.alphaCutoff<0||rt.alphaCutoff>1))throw new Error("Invalid material alpha");if(rt.doubleSided!==void 0&&typeof rt.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(N.set(se.name,rt),!se.diffuseAssetId)continue;let at=e.getAsset("texture_"+se.diffuseAssetId);if(at?.kind!=="texture")throw new Error("Missing local diffuse texture");let lt=ve.get(se.diffuseAssetId);if(!lt){let gt=URL.createObjectURL(new Blob([at.bytes],{type:at.data?.mime||"image/png"}));try{lt=await new tr().loadAsync(gt)}finally{URL.revokeObjectURL(gt)}let Ut=localStorage.getItem("snowTextureLimit")==="2048"?2048:4096;if(lt.image.width>Ut||lt.image.height>Ut){let Tt=document.createElement("canvas"),Vn=Math.min(Ut/lt.image.width,Ut/lt.image.height);Tt.width=Math.round(lt.image.width*Vn),Tt.height=Math.round(lt.image.height*Vn),Tt.getContext("2d").drawImage(lt.image,0,0,Tt.width,Tt.height),lt.image=Tt,lt.needsUpdate=!0}lt.colorSpace=Dt,lt.anisotropy=t.capabilities.getMaxAnisotropy(),lt.flipY=!1,ve.set(se.diffuseAssetId,lt),x.add(lt)}if(T.set(se.name,lt),se.normalAssetId){if(!/^[a-f0-9]{64}$/.test(se.normalAssetId)||de.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let gt=e.getAsset("texture_"+se.normalAssetId);if(gt?.kind!=="texture")throw new Error("Missing original normal texture");let Ut=ve.get("normal:"+se.normalAssetId);if(!Ut){let Tt=URL.createObjectURL(new Blob([gt.bytes],{type:gt.data?.mime||"image/png"}));try{Ut=await new tr().loadAsync(Tt)}finally{URL.revokeObjectURL(Tt)}Ut.flipY=!1,Ut.colorSpace=Qn,Ut.anisotropy=t.capabilities.getMaxAnisotropy(),ve.set("normal:"+se.normalAssetId,Ut),x.add(Ut)}C.set(se.name,Ut)}}}let ne=e.getAsset("body");if(!ne)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let Me=e.getAsset("framingBounds")?.data;if(Me){let ve=se=>Array.isArray(se)&&se.length===3&&se.every(rt=>Number.isFinite(rt)&&Math.abs(rt)<=100);if(Me.schema!=="snowbreak-framing-bounds/1"||Me.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||Me.bodySha256!==e.current.resources.find(se=>se.role==="body")?.assetId||!ve(Me.min)||!ve(Me.max)||Me.min.some((se,rt)=>se>=Me.max[rt])||!Number.isInteger(Me.evaluatedFrames)||Me.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(g=new Yt(new D(...Me.min),new D(...Me.max)),m=Me,Me.clips){if(!Array.isArray(Me.clips)||Me.clips.length>16)throw new Error("Invalid clip envelopes");for(let se of Me.clips){if(!/^[a-f0-9]{64}$/.test(se.sourceSha256)||H.has(se.sourceSha256)||!ve(se.min)||!ve(se.max)||se.min.some((rt,at)=>rt>=se.max[at]))throw new Error("Invalid clip envelope");H.set(se.sourceSha256,new Yt(new D(...se.min),new D(...se.max)))}}}u=(await new Pr().register($h).parseAsync(ne.bytes.slice().buffer,"")).scene,s.add(u),ae(u),u.traverse(ve=>{ve.isBone&&k.add(ve)});let Te=e.getAsset("bodyAnimation")?.data;d=Te?.generatorMetadata?.sourceSha256||null,ge(u,Te),we(u,Te);let Ce=e.getAsset("faceAttachment")?.data;if(Ce){if(Ce.schema!=="snowbreak-face-attachment/1"||Ce.candidateOnly!==!0||Ce.originalAssemblyVerified!==!1||Ce.boneName!=="Bip001-Head"||Ce.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let ve=u.getObjectByName(Ce.boneName),se=Ce.relativeLocationCm;if(!ve?.isBone||!se||![se.X,se.Y,se.Z].every(gt=>Number.isFinite(gt)&&Math.abs(gt)<100))throw new Error("Invalid socket parent or position");let rt=e.getAsset("face");if(!rt)throw new Error("Missing face geometry");h=(await new Pr().register($h).parseAsync(rt.bytes.slice().buffer,"")).scene,ae(h),ge(h,e.getAsset("faceAnimation")?.data);let at=e.getAsset("faceAnimation")?.data;if(!at||!Te||at.frames!==Te.frames||at.fps!==Te.fps)throw new Error("Face/body sample timing mismatch");we(h,at);let lt=new kt;if(lt.position.set(se.X*.01,se.Z*.01,se.Y*.01),lt.quaternion.fromArray(vm(Ce.relativeRotationDegrees)),ve.add(lt),lt.add(h),Ce.defaultVisible!==void 0&&typeof Ce.defaultVisible!="boolean")throw new Error("Invalid face visibility");h.visible=Ce.defaultVisible===!0}f=await Tm(e,r,ae),t.localClippingEnabled=!!f.hasCutaway;let Ge=Cm(e.getAsset("morphCurves")?.data,e,h),Ke=[];u.traverse(ve=>{ve.isSkinnedMesh&&!Ke.includes(ve.skeleton)&&Ke.push(ve.skeleton),ve.isSkinnedMesh&&(ve.frustumCulled=!1)});let z=Te?(Te.frames-1)/Te.fps:0,tt=new Oe,je=new Oe,P=0,w="D\u5F85\u673A",W=!1,Z="sample",re=[],he=e.getAsset("stateTransition")?.data;if(he){let ve=he.schema==="snowbreak-state-preview/1"&&he.show==="Sc01_Hand_A_D"&&he.fromState==="A"&&he.toState==="D",se=he.schema==="snowbreak-standby-preview/1"&&he.characterId===e.current.characterId&&Number.isInteger(he.standbyConfigId)&&he.standbyConfigId>0&&Number.isInteger(he.sourceSkinId)&&/^[a-f0-9]{64}$/.test(he.sourceTableSha256)&&typeof he.label=="string"&&he.label.length<=40&&typeof he.startAsStandby=="boolean",rt=he.schema==="snowbreak-standby-preview/2"&&he.stance==="standing"&&he.characterId===e.current.characterId&&he.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&he.startAsStandby===!0;if(!ve&&!se&&!rt||he.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(se||rt)&&(w=he.label,W=he.startAsStandby);let at=e.getAsset("standbyBody")?.data,lt=e.getAsset("standbyFace")?.data;if(!at||!lt||at.frames!==lt.frames||at.fps!==lt.fps)throw new Error("Standby clip timing mismatch");let gt=new Map(at.tracks.map(Tt=>[Tt.bone,Tt])),Ut=new Map(lt.tracks.map(Tt=>[Tt.bone,Tt]));re=M.map(Tt=>{let Vn=Tt.clip===Te?at:lt,Qt=(Tt.clip===Te?gt:Ut).get(Tt.bone.name);if(!Qt||Qt.keys.length!==Vn.frames||Qt.keys.some(yi=>yi.length!==10||!yi.every(Number.isFinite)||Math.abs(yi.slice(3,7).reduce((In,Mn)=>In+Mn*Mn,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:Tt.bone,track:k.has(Tt.bone)?cm(Qt):Qt,clip:Vn}}),P=(at.frames-1)/at.fps}let _e=M,oe=z,ce="default",ye=null,Ue=new Map([["default",{bindings:M,duration:z,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),xe=e.getAsset("sampleCatalog")?.data;if(xe){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(xe.schema)||xe.characterId!==e.current.characterId||xe.originalInteractionVerified!==!1||!Array.isArray(xe.samples)||!xe.samples.length||xe.samples.length>24||!/^[a-f0-9]{64}$/.test(xe.sourceTableSha256))throw new Error("Invalid sample catalog");Ue.clear();for(let se of xe.samples){if(typeof se.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(se.id)||Ue.has(se.id)||typeof se.label!="string"||se.label.length>64||xe.schema.endsWith("/1")&&(!Number.isInteger(se.sourceShowElementId)||se.sourceShowElementId<1))throw new Error("Invalid sample identity");let rt=e.getAsset(se.bodyRole),at=e.getAsset(se.faceRole);if(rt?.kind!=="animation"||at?.kind!=="animation"||(rt.data.frames!==at.data.frames||rt.data.fps!==at.data.fps)&&!(se.independentFaceTiming===!0&&Number.isInteger(se.sourceShowElementId)&&se.sourceShowElementId>0))throw new Error("Sample body/face mismatch");if(xe.schema.endsWith("/2")&&se.sourceBodySha256!==(rt.data.generatorMetadata?.sourceSha256||e.current.resources.find(gt=>gt.role===se.bodyRole)?.assetId))throw new Error("Sample source mismatch");let lt=M;if(se.bodyRole!=="bodyAnimation"||se.faceRole!=="faceAnimation"){if(lt=[],we(u,rt.data,lt,se.overlay==="upper-body"),!h)throw new Error("Sample requires face");we(h,at.data,lt)}Ue.set(se.id,{bindings:lt,duration:Math.max((rt.data.frames-1)/rt.data.fps,(at.data.frames-1)/at.data.fps),overlay:se.overlay==="upper-body",label:se.label,sourceShowElementId:se.sourceShowElementId,sceneFraming:se.sceneFraming===!0,sourceSha256:rt.data.generatorMetadata?.sourceSha256,sceneOf:se.sceneOf})}let ve=Ue.get(xe.defaultId);if(!ve||ve.bindings!==M)throw new Error("Default sample must reference primary clip");ce=xe.defaultId}let Se=Am(xe);r.updateMatrixWorld(!0);let et=u.getObjectByName("Bip001-Pelvis")||u.getObjectByName("Bip001");if(et){let ve=et.getWorldQuaternion(new Oe),se=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((at,lt)=>{let gt=at.clone().applyQuaternion(ve),Ut=lt.clone().applyQuaternion(ve);return Math.hypot(Ut.x,Ut.z)-Math.hypot(gt.x,gt.z)})[0],rt=se.clone().applyQuaternion(ve);G={bone:et,axis:se,heading:Math.atan2(rt.x,rt.z)}}p=wm(u,n,a);let q=lm(u,ve=>{K=ve,J()},()=>F.yaw+le.yaw),Ee=Sm(u,a,i,f.root);l=sm(u,a,i,Ee,e.getAsset("sceneInteractions")?.data,f.contactSurface),c=om(u,a,i),be(),await t.compileAsync(n,a),addEventListener("resize",be),t.setAnimationLoop(()=>{i.dataset.snowbreakPaused!=="true"&&(q.restore(),l.restore(),c.restore(),b?.(),q.tick(),l.tick(),c.tick(),p.update(),t.render(n,a))});let ue=()=>{let ve=[];return u.traverse(se=>{se.isMesh&&ve.push({name:se.userData.snowbreakMaterialName,textured:!!se.userData.previewMap,normalMapped:!!se.material.normalMap,diffuseSize:se.material.map?[se.material.map.image.width,se.material.map.image.height]:null,normalSize:se.material.normalMap?[se.material.normalMap.image.width,se.material.normalMap.image.height]:null,anisotropy:se.material.map?.anisotropy||0,profile:se.material.userData.profile,alphaTest:se.material.alphaTest})}),ve},Ae=ve=>u.traverse(se=>{se.isMesh&&(se.material.map=ve?se.userData.previewMap:null,se.material.color.set(se.material.map?16777215:13289411),se.material.needsUpdate=!0)}),Ie=()=>({available:!!h,visible:!!h?.visible,originalAssemblyVerified:!1}),pe=ve=>(h&&(h.visible=!!ve,be()),Ie()),Xe=(ve,se,rt)=>{if(v)throw new Error("Renderer disposed");p.hideForCapture(()=>{t.render(n,a),ve.drawImage(i,0,0,se,rt)})},ke=yh(u),Et=yh(u,{side:"left"}),mt=fm(u,a,e.getAsset("learnedMotions")?.data,he?.stance);return{furnitureContacts:ve=>Object.fromEntries(ve.map(se=>{let rt=u.getObjectByName(se);return[se,rt?f.contactSurface?.(rt.getWorldPosition(new D)):null]})),setModelFrame:V,modelFrameState:()=>({...le}),placementState:()=>({model:s.matrixWorld.toArray(),room:f.root?.matrixWorld.toArray(),camera:a.matrixWorld.toArray()}),embodiment:q,sceneInteractions:l,sensesState:c.snapshot,setGaze:c.gaze,senseTouch:c.touch,resetSenses:c.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(ve=>[ve,u.getObjectByName(ve)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:o.snapshot,setLighting:o.set,boneWorldPoints:ve=>Object.fromEntries(ve.slice(0,32).map(se=>[se,u.getObjectByName(se)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let ve=[];return u.traverse(se=>{se.isBone&&ve.push({name:se.name,position:se.position.toArray(),quaternion:se.quaternion.toArray(),scale:se.scale.toArray()})}),ve},cameraState:()=>({position:a.position.toArray(),projection:a.projectionMatrix.toArray()}),learnedOptions:mt.available,applyLearnedMotion:mt.apply,learnedDiagnostics:mt.snapshot,presentationDiagnostics:()=>({resizeCount:L,fitCount:Y}),touchBindings:()=>Se.map(ve=>({...ve,gestures:[...ve.gestures]})),setRoomVisible:f.setRoomVisible,setSceneCutaway:f.setCutaway,sceneState:f.snapshot,setSceneVisible:f.setVisible,morphState:Ge.snapshot,framingEnvelopeState:()=>({precomputed:!!g,evaluatedFrames:m?.evaluatedFrames||0,perClip:H.size,activeSource:d}),resourceState:()=>({sourceTextures:x.size,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures}),setSurfaceLabels:p.set,surfaceOverlayState:p.snapshot,armPreview:ke,leftArmPreview:Et,dispose:me,pickSurface:Ee,drawSnapshot:Xe,faceViewer:fe,setFrame:j,frameState:()=>({...F}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:ue,setTexturePreview:Ae,faceCandidateState:Ie,showFaceCandidate:pe,selectSample:Be,sampleOptions:()=>[...Ue].map(([ve,se])=>({id:ve,label:se.label,duration:se.duration,sourceShowElementId:se.sourceShowElementId})),get duration(){return oe},seek:Ze,standbyDuration:P,standbyLabel:w,startAsStandby:W,seekStandby:ve=>{_&&(_=null,be()),P>0&&Ze(ve%P,re,P)},setFrameHandler:ve=>b=ve,sampleState:()=>({lastSkeletonUpdates:B,sampleId:ce,time:y,poseMode:Z,standbyDuration:P,nativeInitializationVerified:!1,viewYaw:r.rotation.y,autoYaw:$,bodyBones:M.filter(ve=>ve.clip===Te).length,faceBones:M.filter(ve=>ve.clip!==Te).length,hand:u.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(de){throw me(),de}}var Fb="action-plan/1",Ob=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],Bb={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},kb={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},zb=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,Hb={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},Vb={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},Pm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},cc=(i,e,t)=>Math.max(e,Math.min(t,i));function Gb(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function Wb(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function Xb(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function Jh(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:cc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var Um=i=>!!i&&zb.test(i);function qb(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=kb[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||Um(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Lm(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=Um(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function Nm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of Pm[s]||[])r.push(a);for(let s of Pm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function Yb(i,e){let t=e&&e.channels||{},n=Hb[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function Zb(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*cc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,h=cc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:h,curve:[[0,l],[.18,h],[.75,h],[1,l]]})}return s}function Kb(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Va(i,e,t={}){let n=Jh(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:Fb,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||Vb[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+Gb(Xb(n)+"||"+(a?Wb(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!Ob.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Lm(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=Kb(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=qb(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(h)&&l.push(...h),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Lm(n,a,c.motion)}else{let l=Bb[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let f=Yb(n,a);if(f.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=Zb(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...f),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=Nm(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=Nm(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:cc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var uc=(i,e,t)=>Math.max(e,Math.min(t,i));function $b(i){return i*i*(3-2*i)}function Jb(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*$b(uc(o,0,1))}}return i[i.length-1][1]}function Dm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(b,y,M){a.push({at:e(),kind:b,planId:y.planId,type:y.action.type,...M||{}}),a.length>40&&a.shift()}function l(b,y,...M){if(typeof y=="function")try{y(...M)}catch{}}function u(b,y){let M={plan:b,t0:y,done:!1};r.push(M),c("start",b);for(let S of b.tracks)S.ch==="motion"?l("motion",t.onMotion,S.group,S.index,b):S.ch==="pose"?l("pose",t.onPose,S.name,b):S.ch==="expression"?l("expression",t.onExpression,S,b):S.ch==="speech"&&l("speech",t.onSpeech,S.text,b);return M}function h(b,y,M){if(b.done)return;b.done=!0;let S=r.indexOf(b);S>=0&&r.splice(S,1),c("end",b.plan,{reason:M}),l("end",t.onEnd,b.plan,M)}function f(b,y,M){let S=e(),E=M||Va(b,y);if(!E||E.stopped||!E.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:E&&E.planId};let x=Number.isFinite(E.action.priority)?E.action.priority:50,T=r[0];if(T){let C=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(x<C)return s.length>=n&&s.shift(),s.push({plan:E,at:S}),c("queued",E,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:E.planId};h(T,S,"preempted")}return u(E,S),{accepted:!0,queued:!1,planId:E.planId,plan:E}}function p(b,y){let M=Math.max(1,b.duration),S=Math.max(0,Math.min(b.fadeIn||0,M*.5)),E=Math.max(0,Math.min(b.fadeOut||0,M*.5)),x=y*M,T=M-E,C=1;return S>0&&x<S&&(C=x/S),E>0&&x>T&&(C=Math.min(C,(M-x)/E)),uc(C,0,1)}function g(b,y,M,S){for(let E of y.tracks){if(!E.curve||!E.id)continue;let T=Jb(E.curve,M)*(E.weight===void 0?1:E.weight)*S,C=b[E.id];E.blend==="set"?(!C||S>=C.weight)&&(b[E.id]={id:E.id,value:T,blend:"set",weight:S,ch:E.ch}):C&&C.blend==="set"?C.value+=T:b[E.id]={id:E.id,value:(C?C.value:0)+T,blend:"add",weight:Math.max(C?C.weight:0,S),ch:E.ch}}}function _(b){let y=e(),M={t:y,channels:{},actions:[],finished:[]};for(let S of r.slice()){let E=uc((y-S.t0)/Math.max(1,S.plan.duration),0,1),x=p(S.plan,E);x>0&&g(M.channels,S.plan,E,x),M.actions.push({planId:S.plan.planId,type:S.plan.action.type,progress:E,weight:x}),E>=1&&(M.finished.push(S.plan.planId),h(S,y,"done"))}if(!r.length&&s.length){let S=s.shift();u(S.plan,y),c("dequeued",S.plan)}return o=M,M}function m(b,y){let M=r.find(S=>S.plan.planId===b);return M?(h(M,e(),y||"interrupt"),!0):!1}function d(b){for(let y of r.slice())h(y,e(),b||"clear");s.length=0}function v(){return{active:r.map(b=>({planId:b.plan.planId,type:b.plan.action.type,progress:uc((e()-b.t0)/Math.max(1,b.plan.duration),0,1)})),queue:s.map(b=>({planId:b.plan.planId,type:b.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:f,tick:_,interrupt:m,clear:d,snapshot:v,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var jb={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function jh(i,e={}){let t=jb[i]||i;return Jh({type:t,...e})}function Fm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,h="stopped",f=0,p=!1,g=!1,_=null,m=null,d=null,v=i.touchBindings?.()||[],b=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(b())||b()<=0)throw new Error("Audio metadata unavailable");let y=()=>p?t.ended?t.duration>=i.duration?b()*1e3:(_||(_={at:e(),time:t.duration*1e3}),Math.min(b()*1e3,_.time+Math.max(0,e()-_.at))):t.currentTime*1e3:e(),M={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(G=>(G==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},S=i.sampleOptions?.()||[];M.localActions.surface_reaction={enabled:v.length>0,bindings:Object.fromEntries(v.map(G=>{let J=S.find(V=>V.id===G.sampleId),le=n?.(G.sampleId);return[G.region,{sampleId:G.sampleId,animationDuration:(J?.duration||0)*1e3,voiceDuration:(le?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function E(G,J,le="",V=!1){d={schema:"local-surface-reaction/1",id:J.id,kind:G,sampleId:J.sampleId,region:J.touch.region,touch:J.touch,withOriginalVoice:J.withVoice,recovered:V,reason:le,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(d)}catch{}}let x=Dm({now:y,handlers:{onMotion:G=>h=G==="local-arm-preview"?"local-arm-preview":G==="standby-D"||G==="standby-local"?"standby-preview":"playing",onPose:(G,J)=>{if(G!=="snowbreak-raise-hand")return;let le=J.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),le.begin(),o=le,h="local-arm-preview"}catch{le?.restore(),h="arm-failed"}},onEnd:(G,J)=>{if(f++,G.action.type==="surface_reaction"&&m?.id===G.planId){let le=m;if(m=null,p&&(t.pause(),J!=="done"&&(t.currentTime=0),p=!1,_=null,s(!1)),J==="done"){let V=!1;try{V=!!H().accepted&&h==="standby-preview"}catch{x.clear("restore-failed"),h="restore-failed"}E(V?"completed":"failed",le,V?"local-standby-restored":"local-standby-failed",V)}else E(J.startsWith("audio-")?"failed":"cancelled",le,J);return}if(G.action.type==="snowbreak_standby"&&J==="done"){H();return}if(G.action.type==="snowbreak_arm_preview"||G.action.type==="raise_hand"){o?.restore(),o=null,h="stopped",i.seek(0),J==="done"&&i.startAsStandby&&H();return}if(p&&(t.pause(),J!=="done"&&(t.currentTime=0),p=!1,_=null,s(!1)),J==="done"&&l){let le=l;l=null,C(le.id,le.time);return}h=J==="done"?"sample-ended":"stopped",i.seek(J==="done"?i.duration:0),J==="done"&&(G.action.type==="snowbreak_standby"||g)&&H()}}});function T(){if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};let G={type:"snowbreak_sample",source:"manual-preview",priority:80};return x.dispatch(G,M,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:G,duration:(p?b():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function C(G,J=0){return I(),i.selectSample(G),c={id:G,time:J},h="scene-preview",i.seek(Math.min(J,i.duration)),{accepted:!0}}async function N(G,{withVoice:J=!0}={}){let le=c||l;return le?(I(),i.selectSample(le.id),i.seek(le.time%i.duration),i.selectSample(G),K(n?.(G)),l=le,g=!1,J&&t?R():T()):{accepted:!1}}function k(G){if(c&&h==="scene-preview")return c.time+=Math.max(0,Math.min(100,G))/1e3,i.seek(c.id==="show_03"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let J=p?y()/1e3:null,le=x.tick(G);if(h==="arm-failed")return I(),h="arm-failed",le;if(le.actions.length){let V=le.actions[0];if(V.type==="snowbreak_arm_preview"||V.type==="raise_hand"){if(h==="local-arm-preview")try{o.apply(V.progress)}catch{I(),h="arm-failed"}return le}V.type==="snowbreak_standby"&&h==="standby-preview"?i.seekStandby(V.progress*i.standbyDuration):h!=="standby-preview"&&i.seek(J===null?V.progress*i.duration:Math.min(i.duration,J))}return le}function H(){if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};x.clear("standby-switch");let G={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),x.dispatch(G,M,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:G,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function I(G="sample-stop"){c=null,l=null,o?.restore(),o=null,f++,x.clear(G),t&&(t.pause(),t.currentTime=0),p=!1,_=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),h="stopped"}function B(G="right"){if(!["left","right"].includes(G))return{accepted:!1,reason:"invalid-arm-side"};let J=G==="left"?i.leftArmPreview:i.armPreview;if(!J?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{J.begin(),o=J}catch{return J.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let le={type:"snowbreak_arm_preview",side:G,source:"manual-preview",priority:80};return x.dispatch(le,M,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:le,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function U(G){M.localActions.raise_hand.enabled=!!G,!G&&o&&I()}function L(G,J={}){let le=jh(G,J);if(le.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let V=Va(le,M);if(V.stopped||!V.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:V};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy",plan:V};let j=x.dispatch(le,M,V);return h==="arm-failed"?(I(),h="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:V}):j}async function Y(G,{withVoice:J=!0}={}){if(!v.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(x.activeCount&&h!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let le=Rm(G,v);if(!le)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(G.frequency)||G.frequency<1||G.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let V=n?.(le.sampleId)||null;if(J&&!V)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let j=jh("surface_reaction",{target:le.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!J}),te=Va(j,M,{planId:"surface-reaction-"+ ++u});if(te.stopped||!te.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};I();try{i.selectSample(le.sampleId),K(V)}catch{try{H()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let fe={id:te.planId,sampleId:le.sampleId,touch:G,withVoice:!!J},ae=++f;m=fe,_=null,p=!!J,J&&(r(),t.currentTime=0,s(!0));let ge=x.dispatch(j,M,te);if(!ge.accepted)return m=null,p=!1,s(!1),{...ge,handled:!1};if(E("started",fe),!J)return{...ge,handled:!0};try{return await t.play(),ae!==f?{accepted:!1,handled:!0,reason:"superseded"}:{...ge,handled:!0}}catch{return ae===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function O(G){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};I();try{let J=i.selectSample(G);return n&&K(n(G)),i.startAsStandby&&H(),{accepted:!0,...J}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function R(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(h==="standby-preview"&&I(),x.activeCount||p)return{accepted:!1,reason:"sample-busy"};let G=++f;r(),t.currentTime=0,_=null,p=!0,s(!0);let J=T();try{return await t.play(),G!==f?{accepted:!1,reason:"superseded"}:J}catch{return G===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let F=()=>{p&&k(0)},$=()=>{p&&(I("audio-error"),h="audio-failed")};function K(G){if(G&&(!Number.isFinite(G.duration)||G.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",F),t?.removeEventListener("error",$),t=G||null,_=null,t?.addEventListener("ended",F),t?.addEventListener("error",$)}return K(t),{bus:x,capability:M,enterScene:C,playSceneReaction:N,dispatchSurfaceTouch:Y,selectSample:O,setLocalActionsEnabled:U,dispatchSemantic:L,playArmPreview:B,playSample:T,playWithVoice:R,tick:k,stop:I,enterStandby:H,setStandbyAfterSample:G=>g=!!G,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:d?{...d,touch:void 0}:null,sampleDuration:i.duration,status:h,active:x.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!_,originalInteractionVerified:!1})}}async function Qb(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Om(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(h=>h.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>Qb(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}var Bm=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function km(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let _=/^(surface_\d+):(\d+)$/.exec(p);return!!_&&!!Lr({mesh:_[1],triangle:Number(_[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let _=t.get(p);if(Bm(_,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:_,after:g});let m=s.get(p);return Bm(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function f(p,g,_){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let d of m)o(d.key,d[_]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:h,undo:()=>f(n,r,"before"),redo:()=>f(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function zm(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=km(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),f=document.createElement("input");f.type="checkbox",f.id="snowSurfaceEdit",h.append(f,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[R,F]of Object.entries(Oi))p.add(new Option(F,R));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),_=document.createElement("input");_.type="checkbox",_.id="snowSurfaceShow",g.append(_,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[R,F]of Object.entries(Oi)){let $=document.createElement("span");$.textContent="\u25A0 "+F+" ",$.style.color="#"+Kh[R].toString(16).padStart(6,"0"),m.appendChild($)}t.appendChild(m);let d=document.createElement("button"),v=document.createElement("button");d.id="snowSurfaceUndo",v.id="snowSurfaceRedo",d.textContent="\u64A4\u9500\u6807\u6CE8",v.textContent="\u91CD\u505A\u6807\u6CE8",t.append(d,v);let b=document.createElement("p");b.id="snowSurfaceOverlayInfo",t.appendChild(b);let y=document.createElement("button");y.id="snowSurfaceReset",y.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(y);let M=document.createElement("p");M.id="snowSurfaceStatus",M.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(M);let S=null,E=0,x=!1,T=R=>{let F=Ha(R);return Lr(R,F?{[F]:l.get(F)}:{})};function C(){if(x)return;let R=l.state();d.disabled=!R.undo,v.disabled=!R.redo;let F=i.setSurfaceLabels?.(l.snapshot(),_.checked);b.textContent=_.checked?`\u5DF2\u663E\u793A ${F?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${F?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function N(){E||(E=requestAnimationFrame(()=>{E=0,C()}))}function k(){r(l.snapshot()),C()}function H(){if(!S)return;S.mode==="paint"&&l.cancel(),s.cancel();let R=S.id;S=null,e.hasPointerCapture(R)&&e.releasePointerCapture(R),C()}f.onchange=()=>{H(),f.checked&&(_.checked=!0),C()},p.onchange=H,_.onchange=C,d.onclick=()=>{H(),l.undo()&&(k(),M.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},v.onclick=()=>{H(),l.redo()&&(k(),M.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},y.onclick=()=>{H(),l.begin();for(let R of Object.keys(l.snapshot()))l.set(R,void 0);l.commit()&&k(),M.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function I(R){let F=Ha(R);!F||!R.alphaVerified||(l.set(F,S.region||void 0),N(),M.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${Oi[S.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function B(R){if(S||e.dataset.snowbreakFrameEdit==="true"||!f.checked&&!o())return;R.stopPropagation();let F=i.pickSurface(R.clientX,R.clientY);if(S={id:R.pointerId,mode:f.checked?"paint":"touch",region:p.value},e.setPointerCapture(R.pointerId),S.mode==="paint"){l.begin();try{I(F)}catch($){M.textContent=$.message}}else{let $=T(F);i.senseTouch?.(F,$),$?(s.begin({pointerId:R.pointerId,x:R.clientX,y:R.clientY,region:$,source:"skinned-surface"}),S.known=!0,S.hit=F):F?.alphaVerified?(s.begin({pointerId:R.pointerId,x:R.clientX,y:R.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),S.known=!0,S.hit=F):M.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function U(R){if(S?.id===R.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){H();return}if(R.stopPropagation(),S.mode==="paint")try{I(i.pickSurface(R.clientX,R.clientY))}catch(F){M.textContent=F.message}else S.known&&s.move({pointerId:R.pointerId,x:R.clientX,y:R.clientY})}}function L(R){if(S?.id!==R.pointerId)return;R.stopPropagation();let F=S;if(S=null,F.mode==="paint")l.commit()&&k(),M.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(F.known&&o()){let $=s.finish({pointerId:R.pointerId,x:R.clientX,y:R.clientY});$&&($.surface=F.hit,M.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+$.regionLabel,a($))}else s.cancel();e.hasPointerCapture(R.pointerId)&&e.releasePointerCapture(R.pointerId)}function Y(R){S?.id===R.pointerId&&H()}for(let[R,F]of[["pointerdown",B],["pointermove",U],["pointerup",L],["pointercancel",Y]])e.addEventListener(R,F);function O(R){if(!Array.isArray(R)||R.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");H(),l.begin();let F=0;try{for(let $ of R){let K=Ha($.hit);if(!K||!$.hit.alphaVerified||l.has(K)||l.state().count>=3e4)continue;let G={id:$.id,source:"vision-reviewed",confidence:$.confidence,model:String($.model||"").slice(0,128),visible:!0};Lr($.hit,{[K]:G})&&(l.set(K,G),F++)}l.commit()&&k()}catch($){throw l.cancel(),C(),$}return M.textContent=`\u5DF2\u91C7\u7528 ${F} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,F}return C(),{applyReviewed:O,classify:T,state:l.state,dispose(){H(),x=!0,E&&cancelAnimationFrame(E);for(let[R,F]of[["pointerdown",B],["pointermove",U],["pointerup",L],["pointercancel",Y]])e.removeEventListener(R,F)}}}var wt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),Vm=[wt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),wt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),wt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),wt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),wt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),wt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),wt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),wt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),wt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),wt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),wt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),wt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),wt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),wt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),wt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),wt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),wt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),wt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),wt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),wt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),wt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),wt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),wt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),wt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),wt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),wt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),wt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),wt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),wt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Hm=Object.freeze(Object.fromEntries(Vm.map(i=>[i.id,Object.freeze({...i})]))),B1=Object.freeze(Vm.map(i=>i.id));function Gm(i){return Hm[i]&&Hm[i].label||String(i||"\u8EAB\u4F53")}var eM="body-touch/1",tM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function Wm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...tM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(d){a=String(d||"")}function l(d){o=String(d||"screen")}function u(d){return d?(n={pointerId:d.pointerId,x0:Number(d.x)||0,y0:Number(d.y)||0,x:Number(d.x)||0,y:Number(d.y)||0,t0:e(),path:[[Number(d.x)||0,Number(d.y)||0]],region:d.region||null,confidence:Number(d.confidence)||0,source:d.source||o},{...n}):null}function h(d){if(!n||!d)return null;let v=Number(d.x)||0,b=Number(d.y)||0;return n.x=v,n.y=b,n.path.length<t.maxPath&&n.path.push([v,b]),{x:v,y:b,moved:Math.hypot(v-n.x0,b-n.y0)}}function f(){let d=0;for(let v=1;v<n.path.length;v++)d+=Math.hypot(n.path[v][0]-n.path[v-1][0],n.path[v][1]-n.path[v-1][1]);return{length:d,points:n.path.length}}function p(d,v){if(!n)return null;d&&h(d);let b=e(),y=Math.max(0,b-n.t0),M=n.x-n.x0,S=n.y-n.y0,E=Math.hypot(M,S),x=f(),T=v||"";if(!T)if(y>=t.longMinMs&&E<=t.moveTolerancePx)T="long_press";else if(E>=t.strokeMinPx&&y>=t.strokeMinMs&&x.length>=t.strokeMinPx)T="stroke";else if(E<=t.moveTolerancePx&&y<=t.tapMaxMs){let I=n.region&&(n.region.id||n.region)||"body";r&&b-r.at<=t.doubleGapMs&&r.region===I?(T="double_tap",r=null):(T="tap",r={at:b,region:I})}else T="drag";let C=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},N=typeof C=="string"?C:C.id||"body";s.push({at:b,region:N}),s=s.filter(I=>b-I.at<=t.frequencyWindowMs);let k=s.filter(I=>I.region===N).length,H={schema:eM,type:"body_touch",modelId:a,region:N,regionLabel:C.label||Gm(N),side:C.side||"",group:C.group||"",gesture:T,durationMs:Math.round(y),confidence:Number(C.confidence)||0,regionSource:C.source||"fallback",source:n.source||o,frequency:k,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+M.toFixed(1),y:+S.toFixed(1)},distance:+E.toFixed(1),pathLength:+x.length.toFixed(1),at:Math.round(b)};return n=null,H}function g(){n=null}function _(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:p,cancel:g,reset:_,state:m,setModelId:c,setSource:l,config:t}}var Ga=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),Qh=Object.freeze({...Ga,scale:3,x:-.12,y:-.02});function ef(i){return i&&Object.keys(Ga).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function tf(i,e,t,{onEditing:n=()=>{},initialFrame:r=Qh,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0}={}){let l;try{l=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(ef(l)?l:ef(r)?r:Qh);let u=document.createElement("section");u.id=a+"Editor",u.hidden=!0,u.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let h=document.createElement("button");h.id=a==="presentation"?"finishPresentation":"finishModel",h.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",h.hidden=!0,h.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(u,h);let f=!1,p=null,g=0,_=null,m=null,d=new Map,v=new Map,b=document.createElement("select");b.id=a+"DragMode",b.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),b.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let y=document.createElement("div");y.textContent=s,u.append(y,b);let M=(L,Y,O)=>{let R=document.createElement("button");return R.textContent=L,R.id=Y.replace("presentation",a),R.onclick=O,u.append(R),R};function S(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let L=i.frameState();for(let[Y,O]of v)O.value=L[Y]}function x(L){i.setFrame({...i.frameState(),...L}),E()}function T(){g=0,_&&(x(_),_=null)}function C(L){_={..._||{},...L},g||(g=requestAnimationFrame(T))}function N(L){g&&(cancelAnimationFrame(g),T()),!L&&p&&x(p),S(),f=!1,u.hidden=!0,h.hidden=!0,d.clear(),m=null,e.dataset.snowbreakFrameEdit="false",n(!1)}M("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{x(ef(r)?r:Qh),S()}),M("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{x(Ga),S()}),M("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{u.hidden=!0,h.hidden=!1}),M("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>N(!0)),M("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>N(!1)),h.onclick=()=>N(!0);for(let[L,Y,O,R,F]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let $=document.createElement("label");$.textContent=Y;let K=document.createElement("input");K.type="range",K.min=O,K.max=R,K.step=F,K.id=a+"_"+L,K.style.width="100%",K.oninput=()=>C({[L]:Number(K.value)}),K.onchange=()=>{T(),S()},v.set(L,K),$.append(K),u.append($)}let k=L=>({x:L.clientX,y:L.clientY});function H(L){f&&(L.preventDefault(),L.stopImmediatePropagation(),d.set(L.pointerId,k(L)),e.setPointerCapture(L.pointerId),m={frame:i.frameState(),points:[...d.values()]})}function I(L){if(!f||!d.has(L.pointerId)||!m)return;L.preventDefault(),L.stopImmediatePropagation(),d.set(L.pointerId,k(L));let Y=[...d.values()],O=m.points,R=m.frame;if(Y.length>=2&&O.length>=2){let F=$=>Math.hypot($[0].x-$[1].x,$[0].y-$[1].y);C({scale:R.scale*F(Y)/Math.max(5,F(O))})}else if(Y.length===1&&O.length===1){let F=(Y[0].x-O[0].x)/e.clientWidth,$=(Y[0].y-O[0].y)/e.clientHeight;C(b.value==="rotate"?{yaw:R.yaw+F*300,pitch:R.pitch+$*100}:{x:R.x+F,y:R.y+$})}}function B(L){!f||!d.has(L.pointerId)||(L.preventDefault(),L.stopImmediatePropagation(),d.delete(L.pointerId),e.hasPointerCapture(L.pointerId)&&e.releasePointerCapture(L.pointerId),g&&(cancelAnimationFrame(g),T()),S(),m={frame:i.frameState(),points:[...d.values()]})}let U=[["pointerdown",H],["pointermove",I],["pointerup",B],["pointercancel",B]];for(let[L,Y]of U)e.addEventListener(L,Y,!0);return{get active(){return f},toggle(){if(f){N(!0);return}f=!0,p=i.frameState(),E(),u.hidden=!1,h.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{f&&N(!0)},dispose(){f&&N(!0);for(let[L,Y]of U)e.removeEventListener(L,Y,!0);u.remove(),h.remove()},state:()=>i.frameState()}}var Ym=!0,ti=document.querySelector("#stage"),Xm=document.querySelector("#status"),Bi=document.querySelector("#editor"),Nr=null,hc=null,Wa=0,sf="",rf,Je,st,Ur,dc,ei,or,Ya,Rt,fc=0,ni=!1,Xa=!0,Dr=ff(i=>hf(Rt,i.tempo,performance.now())),_i=document.createElement("button");_i.id="finishPaint";_i.hidden=!0;_i.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(_i);function Ws(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),_i.hidden=!0,Bi.classList.remove("open")}_i.onclick=Ws;var Cn=i=>{let e={...i,nonce:sf};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},nf=i=>{Xm.textContent=i,Xm.hidden=!i};function pc(){or?.dispose(),or=null,Dr.close(),Rt=null,_i.hidden=!0,ei?.dispose(),Ya?.dispose(),dc?.dispose(),st?.stop("renderer-close"),Ur?.dispose(),Je?.dispose(),rf?.dispose(),Ya=ei=dc=st=Ur=Je=rf=null,Bi.replaceChildren()}async function qm(i,e,t){let n=++Wa;sf=e,ni=!1,ti.dataset.snowbreakPaused="false",pc(),nf("\u6B63\u5728\u52A0\u8F7D\u6069\u96C5\u548C\u75C5\u623F\u2026");let r,s,a;try{if(t){if(!Nr)throw new Error("\u8BF7\u5148\u5BFC\u5165\u6069\u96C5\u6574\u5408\u5305");r=await Nr.selectVariant(t)}else{Nr=null;let d=await fetch(i);if(!d.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await rd(new Uint8Array(await d.arrayBuffer()))}if(r.manifest.characterId!=="Enya")throw new Error("\u6B64\u5165\u53E3\u5F53\u524D\u53EA\u652F\u6301\u6069\u96C5\u62A4\u58EB\u5305");if(s=await Im(ti,r.runtime),a=r.runtime.getAsset("voiceCatalog")?await Om(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==Wa){s.dispose(),a.dispose(),r.runtime.dispose();return}Nr=r.variants.length?r:null,r.selection&&localStorage.setItem("enya-collection-selection",r.selection.id),rf=r.runtime,Je=s,Ur=a;let o=Je.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,st=Fm(Je,{audioForSample:d=>Ur.getAudio(d)}),Je.sceneInteractions.configure({scene:()=>st.snapshot().sceneId||Je.editingScene,reaction:d=>{st.playSceneReaction(d,{withVoice:Xa})},voice:d=>{if(Xa){let v=Ur.getAudio(d);v&&(v.currentTime=0,v.play().catch(()=>{}))}},event:Cn}),Je.showFaceCandidate(!0),st.enterStandby(),Je.faceViewer(),fc=performance.now();let c=null,l=d=>{if(d){let v=st.snapshot();c=v.sceneId?{id:v.sceneId,time:v.sceneTime}:null,Je.editingScene=c?.id||null,Je.sceneInteractions.cancel(),st.stop("placement-edit"),c&&(Je.selectSample(c.id),Je.seek(c.time%Je.duration)),Ws()}else ni||(c?st.enterScene(c.id,c.time):st.enterStandby(),c=null,Je.editingScene=null)},u=()=>{or?.dispose(),or=tf({setFrame:Je.setModelFrame,frameState:Je.modelFrameState},ti,"model-placement:"+r.selection?.mode+":"+(st.snapshot().sceneId||"main"),{initialFrame:{...Ga,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,onEditing:l})};Je.setupModelEditor=u,u(),ei=tf(Je,ti,"presentation:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId),{initialFrame:Je.presentationDefault,onEditing:l}),Ya=df(Je,"lighting:"+(r.selection?"enya-"+r.selection.mode:r.manifest.skinId));let h="";Je.setFrameHandler(()=>{let d=performance.now();if(ni||st.tick(Math.min(100,Math.max(0,d-fc))),fc=d,!ni&&Rt){let y=Ka(Rt,d),M=Rt.duration,S=Rt.stop===void 0?1:Math.max(0,1-(d-Rt.stop)/300);if(y>=M||S===0)Rt=null;else{let E=Math.max(0,Math.min(1,y/.3,(M-y)/(.3*Rt.rate),S)),x=E*E*(3-2*E);Je.applyLearnedMotion(Rt.id,y,x,{amplitude:Dr.get().amplitude})}}let v=st.snapshot(),b=Rt?"learned:"+Rt.id:v.status;b!==h&&(h=b,Cn({type:"selfState",state:qa()}),Cn({type:"playback",active:!!Rt||["playing","scene-preview","local-arm-preview"].includes(v.status),status:b}))});let f=r.manifest.resources.filter(d=>d.kind==="geometry").map(d=>d.assetId).join("-"),p="surface:"+r.manifest.skinId+":"+f;dc=zm(Je,ti,Bi,{load:()=>JSON.parse(localStorage.getItem(p)||"{}"),save:d=>localStorage.setItem(p,JSON.stringify(d)),tracker:Wm({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!ni,onEvent:async d=>{Cn({type:"touch",region:d.region,label:d.regionLabel,gesture:d.gesture,confidence:d.confidence,source:d.regionSource,durationMs:d.durationMs,frequency:d.frequency,completed:!0}),Ym||await st.dispatchSurfaceTouch(d,{withVoice:Xa})}});let g=document.createElement("button");g.textContent="\u5173\u95ED\u5DE5\u5177",g.onclick=Ws,Bi.prepend(g);let _=Bi.querySelector("#snowSurfaceRegion"),m=Bi.querySelector("#snowSurfaceEdit");m.addEventListener("change",()=>{m.checked&&(Bi.classList.remove("open"),_i.textContent="\u5B8C\u6210"+_.selectedOptions[0].textContent+"\u6807\u6CE8",_i.hidden=!1)}),nf(""),Cn({type:"ready",bodyActions:Je.embodiment.snapshot().available,selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Je.sampleOptions().map(d=>d.id),voices:Ur.snapshot().available,learned:Je.learnedOptions().map(d=>d.id)}),window.__snowbreakMigration={display:Je,adapter:st,editor:dc,presentation:ei,manifest:r.manifest}}catch(o){if(n!==Wa){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}pc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),nf("\u6069\u96C5\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),Cn({type:"error",message:String(o.message||o)})}}async function nM(i){if(i.type==="dispose"){Wa++,pc();return}if(i.type==="load")return qm(i.url,i.nonce);if(i.type==="variant")return Nr?.variants.some(e=>e.id===i.id)?qm(null,sf,i.id):void 0;if(st){if(i.type==="body"){if(ni)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Rt=null,st.snapshot().sceneId||(st.stop("body-command"),st.enterStandby()),Je.embodiment.command(i.id),await new Promise(e=>setTimeout(e,750)),Cn({type:"selfState",state:qa(),requestId:i.requestId});return}if(i.type==="gesture"){if(ni)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Rt=null,st.snapshot().sceneId||(st.stop("ai-gesture"),st.enterStandby()),Je.embodiment.playGesture(i.id,i.plan),Cn({type:"selfState",state:qa()});return}if(i.type==="touchPolicy"){Ym=!!i.aiControlled;return}if(i.type==="danceSettings"){Dr.set(i);return}if(i.type==="danceEdit"){Dr.toggle();return}if(i.type==="speechLevel"){Je.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Je.setGaze(i.x,i.y);return}if(i.type==="pause"){or?.close(),Dr.close(),hc=st.snapshot().sceneId,Je.sceneInteractions.cancel(),Je.embodiment.reset(),Je.resetSenses(),Rt=null,ni=!0,Ya?.close(),ei?.close(),ti.dataset.snowbreakPaused="true",st.stop("background"),Ws();return}if(i.type==="resume"){ni=!1,ti.dataset.snowbreakPaused="false",fc=performance.now(),hc?(st.enterScene(hc),hc=null):st.enterStandby();return}if(i.type==="stop"){if(Je.embodiment.reset(),Rt){Rt.stop=performance.now();return}st.stop(),st.enterStandby();return}if(i.type==="officialTouchPoints"){Je.sceneInteractions.togglePoints()||Cn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){Rt=null,ei.close(),Bi.classList.contains("open")||!_i.hidden?Ws():Bi.classList.add("open");return}if(i.type==="lightingEdit"){ei.close(),Ws(),Ya.toggle();return}if(i.type==="modelEdit"){Rt=null,ei.close(),or.toggle();return}if(i.type==="modelFrame"){Je.setModelFrame(i.frame);return}if(i.type==="frameEdit"){Rt=null,or.close(),ei.toggle();return}if(i.type==="scene")return Je.setSceneVisible(!!i.visible);if(i.type==="room")return Je.setRoomVisible(!!i.visible);if(i.type==="voice"){if(Xa=!!i.enabled,!Xa){let e=st.snapshot().sceneId;st.stop("voice-disabled"),e?st.enterScene(e):st.enterStandby()}return}if(i.type==="sample"&&Je.sampleOptions().some(e=>e.id===i.id)){if(Je.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)){Rt=null,or.close(),Je.embodiment.reset(),st.enterScene(i.id),Je.setupModelEditor(),Cn({type:"selfState",state:qa()});return}if(st.snapshot().sceneId){let t=i.id==="head"?Je.sceneInteractions.headReaction():null;await st.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Je.embodiment.releaseHands(),Rt=null,ei.close(),ni=!1,st.stop(),st.selectSample(i.id),st.setStandbyAfterSample(!0),(i.withVoice&&Ur.getAudio(i.id)?await st.playWithVoice():st.playSample()).accepted||Cn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Je.embodiment.releaseHands();let e=Je.learnedOptions().find(t=>t.id===i.id);if(!e)return;ei.close(),st.stop("learned-motion"),st.enterStandby(),Rt={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Dr.get().tempo:1}}}}function qa(){return Je?{...Je.embodiment.snapshot(),learnedMotion:Rt?{id:Rt.id,time:Ka(Rt,performance.now()),rate:Rt.rate,amplitude:Dr.get().amplitude}:null,interactionScene:st?.snapshot().sceneId||null,outfit:Nr?.selection?.outfit||"unknown",mode:Nr?.selection?.mode||"unknown"}:null}function iM(){if(!Je||ni)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ti.width,ti.height);i.width=Math.round(ti.width*e),i.height=Math.round(ti.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Je.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:qa,portrait:iM,receive:i=>{nM(i).catch(e=>Cn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{Wa++,pc()});Cn({type:"pageReady"});})();
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
