(()=>{var ng=Object.defineProperty;var ig=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var rg=(i,e)=>{for(var t in e)ng(i,t,{get:e[t],enumerable:!0})};var cd={};rg(cd,{AsyncCompress:()=>fg,AsyncDecompress:()=>gg,AsyncDeflate:()=>Kf,AsyncGunzip:()=>Jf,AsyncGzip:()=>fg,AsyncInflate:()=>Vl,AsyncUnzipInflate:()=>Ag,AsyncUnzlib:()=>Qf,AsyncZipDeflate:()=>Mg,AsyncZlib:()=>pg,Compress:()=>Rl,DecodeUTF8:()=>_g,Decompress:()=>Ll,Deflate:()=>kn,EncodeUTF8:()=>vg,FlateErrorCode:()=>ug,Gunzip:()=>ao,Gzip:()=>Rl,Inflate:()=>gn,Unzip:()=>Rg,UnzipInflate:()=>Tg,UnzipPassThrough:()=>od,Unzlib:()=>co,Zip:()=>Sg,ZipDeflate:()=>bg,ZipPassThrough:()=>$s,Zlib:()=>Il,compress:()=>dg,compressSync:()=>Cl,decompress:()=>xg,decompressSync:()=>yg,deflate:()=>$f,deflateSync:()=>ea,gunzip:()=>jf,gunzipSync:()=>oo,gzip:()=>dg,gzipSync:()=>Cl,inflate:()=>Gl,inflateSync:()=>es,strFromU8:()=>Xl,strToU8:()=>Zi,unzip:()=>Cg,unzipSync:()=>Ig,unzlib:()=>ed,unzlibSync:()=>lo,zip:()=>wg,zipSync:()=>Eg,zlib:()=>mg,zlibSync:()=>Pl});function dr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function $f(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[Jr],function(n){return Ki(ea(n.data[0],n.data[1]))},0,t)}function ea(i,e){return fr(i,e||{},0,0)}function Gl(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[$r],function(n){return Ki(es(n.data[0],Fl(n.data[1])))},1,t)}function es(i,e){return js(i,{i:2},e&&e.out,e&&e.dictionary)}function dg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[Jr,Wf,function(){return[Cl]}],function(n){return Ki(Cl(n.data[0],n.data[1]))},2,t)}function Cl(i,e){e||(e={});var t=Kr(),n=i.length;t.p(i);var r=fr(i,e,kl(e),8),s=r.length;return Ol(r,e),yt(r,s-8,t.d()),yt(r,s-4,n),r}function jf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[$r,Xf,function(){return[oo]}],function(n){return Ki(oo(n.data[0],n.data[1]))},3,t)}function oo(i,e){var t=Bl(i);return t+8>i.length&&Ze(6,"invalid gzip data"),js(i.subarray(t,-8),{i:2},e&&e.out||new ct(Zf(i)),e&&e.dictionary)}function mg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[Jr,qf,function(){return[Pl]}],function(n){return Ki(Pl(n.data[0],n.data[1]))},4,t)}function Pl(i,e){e||(e={});var t=ho();t.p(i);var n=fr(i,e,e.dictionary?6:2,4);return zl(n,e),yt(n,n.length-4,t.d()),n}function ed(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),jr(i,e,[$r,Yf,function(){return[lo]}],function(n){return Ki(lo(n.data[0],Fl(n.data[1])))},5,t)}function lo(i,e){return js(i.subarray(Hl(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function xg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Ze(7),i[0]==31&&i[1]==139&&i[2]==8?jf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Gl(i,e,t):ed(i,e,t)}function yg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?oo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?es(i,e):lo(i,e)}function Zi(i,e){if(e){for(var t=new ct(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(If)return If.encode(i);for(var r=i.length,s=new ct(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var l=new ct(a+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Bn(s,0,a)}function Xl(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Nl)return Nl.decode(i);var r=nd(i),s=r.s,t=r.r;return t.length&&Ze(8),s}}function wg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Ze(7);var n={};Wl(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,l=s,c=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},f=function(m,d){uo(function(){t(m,d)})};uo(function(){f=t});var p=function(){var m=new ct(o+22),d=a,y=o-a;o=0;for(var M=0;M<l;++M){var _=c[M];try{var S=_.c.length;Xr(m,o,_,_.f,_.u,S);var b=30+_.f.length+Yi(_.extra),E=o+b;m.set(_.c,E),Xr(m,a,_,_.f,_.u,S,o,_.m),a+=16+b+(_.m?_.m.length:0),o=E+S}catch(x){return f(x,null)}}ql(m,a,c.length,y,d),f(null,m)};s||p();for(var g=function(m){var d=r[m],y=n[d],M=y[0],_=y[1],S=Kr(),b=M.length;S.p(M);var E=Zi(d),x=E.length,T=_.comment,R=T&&Zi(T),L=R&&R.length,B=Yi(_.extra),H=_.level==0?0:8,I=function(Y,P){if(Y)h(),f(Y,null);else{var O=P.length;c[m]=Qs(_,{size:b,crc:S.d(),c:P,f:E,m:R,u:x!=d.length||R&&T.length!=L,compression:H}),a+=30+x+B+O,o+=76+2*(x+B)+(L||0)+O,--s||p()}};if(x>65535&&I(Ze(11,0,1),null),!H)I(null,M);else if(b<16e4)try{I(null,ea(M,_))}catch(Y){I(Y,null)}else u.push($f(M,_,I))},v=0;v<l;++v)g(v);return h}function Eg(i,e){e||(e={});var t={},n=[];Wl(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],l=o[0],c=o[1],u=c.level==0?0:8,h=Zi(a),f=h.length,p=c.comment,g=p&&Zi(p),v=g&&g.length,m=Yi(c.extra);f>65535&&Ze(11);var d=u?ea(l,c):l,y=d.length,M=Kr();M.p(l),n.push(Qs(c,{size:l.length,crc:M.d(),c:d,f:h,m:g,u:f!=a.length||g&&p.length!=v,o:r,compression:u})),r+=30+f+m+y,s+=76+2*(f+m)+(v||0)+y}for(var _=new ct(s+22),S=r,b=s-r,E=0;E<n.length;++E){var h=n[E];Xr(_,h.o,h,h.f,h.u,h.c.length);var x=30+h.f.length+Yi(h.extra);_.set(h.c,h.o+x),Xr(_,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+x+(h.m?h.m.length:0)}return ql(_,r,n.length,b,S),_}function Cg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Ze(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,d){uo(function(){t(m,d)})};uo(function(){a=t});for(var o=i.length-22;Bt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(Ze(13,0,1),null),r;var l=cn(i,o+8);if(l){var c=l,u=Bt(i,o+16),h=u==4294967295||c==65535;if(h){var f=Bt(i,o-12);h=Bt(i,f)==101075792,h&&(c=l=Bt(i,f+32),u=Bt(i,f+48))}for(var p=e&&e.filter,g=function(m){var d=sd(i,u,h),y=d[0],M=d[1],_=d[2],S=d[3],b=d[4],E=d[5],x=rd(i,E);u=b;var T=function(L,B){L?(r(),a(L,null)):(B&&(s[S]=B),--l||a(null,s))};if(!p||p({name:S,size:M,originalSize:_,compression:y}))if(!y)T(null,Bn(i,x,x+M));else if(y==8){var R=i.subarray(x,x+M);if(_<524288||M>.8*_)try{T(null,es(R,{out:new ct(_)}))}catch(L){T(L,null)}else n.push(Gl(R,{size:_},T))}else T(Ze(14,"unknown compression type "+y,1),null);else T(null,null)},v=0;v<c;++v)g(v)}else a(null,{});return r}function Ig(i,e){for(var t={},n=i.length-22;Bt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Ze(13);var r=cn(i,n+8);if(!r)return{};var s=Bt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Bt(i,n-12);a=Bt(i,o)==101075792,a&&(r=Bt(i,o+32),s=Bt(i,o+48))}for(var l=e&&e.filter,c=0;c<r;++c){var u=sd(i,s,a),h=u[0],f=u[1],p=u[2],g=u[3],v=u[4],m=u[5],d=rd(i,m);s=v,(!l||l({name:g,size:f,originalSize:p,compression:h}))&&(h?h==8?t[g]=es(i.subarray(d,d+f),{out:new ct(p)}):Ze(14,"unknown compression type "+h):t[g]=Bn(i,d,d+f))}return t}var Rf,lg,ct,ln,Js,qr,Yr,Zs,Pf,Lf,Ul,ro,Nf,Uf,El,Ks,Si,_t,On,wi,_t,_t,_t,_t,Wr,_t,Df,Ff,Of,Bf,to,Fn,no,Zr,Bn,ug,kf,Ze,js,oi,Vr,io,so,Tl,Gr,Dl,Al,zf,qi,Hf,Vf,Kr,ho,fr,Qs,Cf,eo,hg,Gf,$r,Jr,Wf,Xf,qf,Yf,Ki,Fl,jr,zn,Qr,cn,Bt,wl,yt,Ol,Bl,Zf,kl,zl,Hl,kn,Kf,gn,Vl,Rl,fg,ao,Jf,Il,pg,co,Qf,Ll,gg,Wl,If,Nl,td,nd,_g,vg,id,rd,sd,ad,Yi,Xr,ql,$s,bg,Mg,Sg,od,Tg,Ag,Rg,uo,ld=ig(()=>{Rf={},lg=(function(i,e,t,n,r){var s=new Worker(Rf[e]||(Rf[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,l=o.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],r(c,null)}else r(null,o)},s.postMessage(t,n),s}),ct=Uint8Array,ln=Uint16Array,Js=Int32Array,qr=new ct([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yr=new ct([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zs=new ct([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pf=function(i,e){for(var t=new ln(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Js(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Lf=Pf(qr,2),Ul=Lf.b,ro=Lf.r;Ul[28]=258,ro[258]=28;Nf=Pf(Yr,0),Uf=Nf.b,El=Nf.r,Ks=new ln(32768);for(_t=0;_t<32768;++_t)Si=(_t&43690)>>1|(_t&21845)<<1,Si=(Si&52428)>>2|(Si&13107)<<2,Si=(Si&61680)>>4|(Si&3855)<<4,Ks[_t]=((Si&65280)>>8|(Si&255)<<8)>>1;On=(function(i,e,t){for(var n=i.length,r=0,s=new ln(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new ln(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new ln(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Ks[h]>>l]=c}else for(o=new ln(n),r=0;r<n;++r)i[r]&&(o[r]=Ks[a[i[r]-1]++]>>15-i[r]);return o}),wi=new ct(288);for(_t=0;_t<144;++_t)wi[_t]=8;for(_t=144;_t<256;++_t)wi[_t]=9;for(_t=256;_t<280;++_t)wi[_t]=7;for(_t=280;_t<288;++_t)wi[_t]=8;Wr=new ct(32);for(_t=0;_t<32;++_t)Wr[_t]=5;Df=On(wi,9,0),Ff=On(wi,9,1),Of=On(Wr,5,0),Bf=On(Wr,5,1),to=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Fn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},no=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Zr=function(i){return(i+7)/8|0},Bn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ct(i.subarray(e,t))},ug={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},kf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ze=function(i,e,t){var n=new Error(e||kf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ze),!t)throw n;return n},js=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ct(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ct(r*3));var c=function(ie){var he=t.length;if(ie>he){var Me=new ct(Math.max(he*2,ie));Me.set(t),t=Me}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,d=r*8;do{if(!p){u=Fn(i,h,1);var y=Fn(i,h+1,3);if(h+=3,y)if(y==1)p=Ff,g=Bf,v=9,m=5;else if(y==2){var b=Fn(i,h,31)+257,E=Fn(i,h+10,15)+4,x=b+Fn(i,h+5,31)+1;h+=14;for(var T=new ct(x),R=new ct(19),L=0;L<E;++L)R[Zs[L]]=Fn(i,h+L*3,7);h+=E*3;for(var B=to(R),H=(1<<B)-1,I=On(R,B,1),L=0;L<x;){var Y=I[Fn(i,h,H)];h+=Y&15;var M=Y>>4;if(M<16)T[L++]=M;else{var P=0,O=0;for(M==16?(O=3+Fn(i,h,3),h+=2,P=T[L-1]):M==17?(O=3+Fn(i,h,7),h+=3):M==18&&(O=11+Fn(i,h,127),h+=7);O--;)T[L++]=P}}var $=T.subarray(0,b),F=T.subarray(b);v=to($),m=to(F),p=On($,v,1),g=On(F,m,1)}else Ze(1);else{var M=Zr(h)+4,_=i[M-4]|i[M-3]<<8,S=M+_;if(S>r){l&&Ze(0);break}o&&c(f+_),t.set(i.subarray(M,S),f),e.b=f+=_,e.p=h=S*8,e.f=u;continue}if(h>d){l&&Ze(0);break}}o&&c(f+131072);for(var N=(1<<v)-1,X=(1<<m)-1,W=h;;W=h){var P=p[no(i,h)&N],J=P>>4;if(h+=P&15,h>d){l&&Ze(0);break}if(P||Ze(2),J<256)t[f++]=J;else if(J==256){W=h,p=null;break}else{var V=J-254;if(J>264){var L=J-257,z=qr[L];V=Fn(i,h,(1<<z)-1)+Ul[L],h+=z}var ee=g[no(i,h)&X],k=ee>>4;ee||Ze(3),h+=ee&15;var F=Uf[k];if(k>3){var z=Yr[k];F+=no(i,h)&(1<<z)-1,h+=z}if(h>d){l&&Ze(0);break}o&&c(f+131072);var j=f+V;if(f<F){var ae=s-F,ue=Math.min(F,j);for(ae+f<0&&Ze(3);f<ue;++f)t[f]=n[ae+f]}for(;f<j;++f)t[f]=t[f-F]}}e.l=p,e.p=W,e.b=f,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=m)}while(!u);return f!=t.length&&a?Bn(t,0,f):t.subarray(0,f)},oi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Vr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},io=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:qi,l:0};if(r==1){var a=new ct(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,b){return S.f-b.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=r-1;)o=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var p=new ln(f+1),g=so(t[u-1],p,0);if(g>e){var n=0,v=0,m=g-e,d=1<<m;for(s.sort(function(b,E){return p[E.s]-p[b.s]||b.f-E.f});n<r;++n){var y=s[n].s;if(p[y]>e)v+=d-(1<<g-p[y]),p[y]=e;else break}for(v>>=m;v>0;){var M=s[n].s;p[M]<e?v-=1<<e-p[M]++-1:++n}for(;n>=0&&v;--n){var _=s[n].s;p[_]==e&&(--p[_],++v)}g=e}return{t:new ct(p),l:g}},so=function(i,e,t){return i.s==-1?Math.max(so(i.l,e,t+1),so(i.r,e,t+1)):e[i.s]=t},Tl=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new ln(++e),n=0,r=i[0],s=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Gr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Dl=function(i,e,t){var n=t.length,r=Zr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Al=function(i,e,t,n,r,s,a,o,l,c,u){oi(e,u++,t),++r[256];for(var h=io(r,15),f=h.t,p=h.l,g=io(s,15),v=g.t,m=g.l,d=Tl(f),y=d.c,M=d.n,_=Tl(v),S=_.c,b=_.n,E=new ln(19),x=0;x<y.length;++x)++E[y[x]&31];for(var x=0;x<S.length;++x)++E[S[x]&31];for(var T=io(E,7),R=T.t,L=T.l,B=19;B>4&&!R[Zs[B-1]];--B);var H=c+5<<3,I=Gr(r,wi)+Gr(s,Wr)+a,Y=Gr(r,f)+Gr(s,v)+a+14+3*B+Gr(E,R)+2*E[16]+3*E[17]+7*E[18];if(l>=0&&H<=I&&H<=Y)return Dl(e,u,i.subarray(l,l+c));var P,O,$,F;if(oi(e,u,1+(Y<I)),u+=2,Y<I){P=On(f,p,0),O=f,$=On(v,m,0),F=v;var N=On(R,L,0);oi(e,u,M-257),oi(e,u+5,b-1),oi(e,u+10,B-4),u+=14;for(var x=0;x<B;++x)oi(e,u+3*x,R[Zs[x]]);u+=3*B;for(var X=[y,S],W=0;W<2;++W)for(var J=X[W],x=0;x<J.length;++x){var V=J[x]&31;oi(e,u,N[V]),u+=R[V],V>15&&(oi(e,u,J[x]>>5&127),u+=J[x]>>12)}}else P=Df,O=wi,$=Of,F=Wr;for(var x=0;x<o;++x){var z=n[x];if(z>255){var V=z>>18&31;Vr(e,u,P[V+257]),u+=O[V+257],V>7&&(oi(e,u,z>>23&31),u+=qr[V]);var ee=z&31;Vr(e,u,$[ee]),u+=F[ee],ee>3&&(Vr(e,u,z>>5&8191),u+=Yr[ee])}else Vr(e,u,P[z]),u+=O[z]}return Vr(e,u,P[256]),u+O[256]},zf=new Js([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),qi=new ct(0),Hf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ct(n+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(n,o.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=zf[e-1],f=h>>13,p=h&8191,g=(1<<t)-1,v=s.p||new ln(32768),m=s.h||new ln(g+1),d=Math.ceil(t/3),y=2*d,M=function(ge){return(i[ge]^i[ge+1]<<d^i[ge+2]<<y)&g},_=new Js(25e3),S=new ln(288),b=new ln(32),E=0,x=0,T=s.i||0,R=0,L=s.w||0,B=0;T+2<a;++T){var H=M(T),I=T&32767,Y=m[H];if(v[I]=Y,m[H]=I,L<=T){var P=a-T;if((E>7e3||R>24576)&&(P>423||!c)){u=Al(i,l,0,_,S,b,x,R,B,T-B,u),R=E=x=0,B=T;for(var O=0;O<286;++O)S[O]=0;for(var O=0;O<30;++O)b[O]=0}var $=2,F=0,N=p,X=I-Y&32767;if(P>2&&H==M(T-X))for(var W=Math.min(f,P)-1,J=Math.min(32767,T),V=Math.min(258,P);X<=J&&--N&&I!=Y;){if(i[T+$]==i[T+$-X]){for(var z=0;z<V&&i[T+z]==i[T+z-X];++z);if(z>$){if($=z,F=X,z>W)break;for(var ee=Math.min(X,z-2),k=0,O=0;O<ee;++O){var j=T-X+O&32767,ae=v[j],ue=j-ae&32767;ue>k&&(k=ue,Y=j)}}}I=Y,Y=v[I],X+=I-Y&32767}if(F){_[R++]=268435456|ro[$]<<18|El[F];var ie=ro[$]&31,he=El[F]&31;x+=qr[ie]+Yr[he],++S[257+ie],++b[he],L=T+$,++E}else _[R++]=i[T],++S[i[T]]}}for(T=Math.max(T,L);T<a;++T)_[R++]=i[T],++S[i[T]];u=Al(i,l,c,_,S,b,x,R,B,T-B,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=T,s.w=L)}else{for(var T=s.w||0;T<a+c;T+=65535){var Me=T+65535;Me>=a&&(l[u/8|0]=c,Me=a),u=Dl(l,u+1,i.subarray(T,Me))}s.i=a}return Bn(o,0,n+Zr(u)+r)},Vf=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Kr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Vf[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},ho=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},fr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ct(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Hf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},Qs=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Cf=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=s[a];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var h in o.prototype)e+=";"+l+".prototype."+h+"="+o.prototype[h].toString()}else e+=c}else t[l]=o}return e},eo=[],hg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Gf=function(i,e,t,n){if(!eo[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Cf(i[o],r,s);eo[t]={c:Cf(i[a],r,s),e:s}}var l=Qs({},eo[t].e);return lg(eo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,l,hg(l),n)},$r=function(){return[ct,ln,Js,qr,Yr,Zs,Ul,Uf,Ff,Bf,Ks,kf,On,to,Fn,no,Zr,Bn,Ze,js,es,Ki,Fl]},Jr=function(){return[ct,ln,Js,qr,Yr,Zs,ro,El,Df,wi,Of,Wr,Ks,zf,qi,On,oi,Vr,io,so,Tl,Gr,Dl,Al,Zr,Bn,Hf,fr,ea,Ki]},Wf=function(){return[Ol,kl,yt,Kr,Vf]},Xf=function(){return[Bl,Zf]},qf=function(){return[zl,yt,ho]},Yf=function(){return[Hl]},Ki=function(i){return postMessage(i,[i.buffer])},Fl=function(i){return i&&{out:i.size&&new ct(i.size),dictionary:i.dictionary}},jr=function(i,e,t,n,r,s){var a=Gf(t,n,r,function(o,l){a.terminate(),s(o,l)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},zn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},Qr=function(i,e,t,n,r,s,a){var o,l=Gf(i,n,r,function(c,u){c?(l.terminate(),e.ondata.call(e,c)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&l.terminate(),e.ondata.call(e,c,u[0],u[1])):a(u)});l.postMessage(t),e.queuedSize=0,e.push=function(c,u){e.ondata||Ze(5),o&&e.ondata(Ze(4,0,1),null,!!u),e.queuedSize+=c.length,l.postMessage([c,o=u],[c.buffer])},e.terminate=function(){l.terminate()},s&&(e.flush=function(){l.postMessage([])})},cn=function(i,e){return i[e]|i[e+1]<<8},Bt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},wl=function(i,e){return Bt(i,e)+Bt(i,e+4)*4294967296},yt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Ol=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&yt(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Bl=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Ze(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Zf=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},kl=function(i){return 10+(i.filename?i.filename.length+1:0)},zl=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=ho();r.p(e.dictionary),yt(i,2,r.d())}},Hl=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ze(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Ze(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};kn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ct(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(fr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||Ze(5),this.s.l&&Ze(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ct(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||Ze(5),this.s.l&&Ze(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),Kf=(function(){function i(e,t){Qr([Jr,function(){return[zn,kn]}],this,dr.call(this,e,t),function(n){var r=new kn(n.data);onmessage=zn(r)},6,1)}return i})();gn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ct(32768),this.p=new ct(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||Ze(5),this.d&&Ze(4),!this.p.length)this.p=e;else if(e.length){var t=new ct(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=js(this.p,this.s,this.o);this.ondata(Bn(n,t,this.s.b),this.d),this.o=Bn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Bn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Vl=(function(){function i(e,t){Qr([$r,function(){return[zn,gn]}],this,dr.call(this,e,t),function(n){var r=new gn(n.data);onmessage=zn(r)},7,0)}return i})();Rl=(function(){function i(e,t){this.c=Kr(),this.l=0,this.v=1,kn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,kn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=fr(e,this.o,this.v&&kl(this.o),t&&8,this.s);this.v&&(Ol(n,this.o),this.v=0),t&&(yt(n,n.length-8,this.c.d()),yt(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){kn.prototype.flush.call(this)},i})(),fg=(function(){function i(e,t){Qr([Jr,Wf,function(){return[zn,kn,Rl]}],this,dr.call(this,e,t),function(n){var r=new Rl(n.data);onmessage=zn(r)},8,1)}return i})();ao=(function(){function i(e,t){this.v=1,this.r=0,gn.call(this,e,t)}return i.prototype.push=function(e,t){if(gn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?Bl(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}gn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Zr(this.s.p)+9,this.s={i:0},this.o=new ct(0),this.push(new ct(0),t))},i})(),Jf=(function(){function i(e,t){var n=this;Qr([$r,Xf,function(){return[zn,gn,ao]}],this,dr.call(this,e,t),function(r){var s=new ao(r.data);s.onmember=function(a){return postMessage(a)},onmessage=zn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Il=(function(){function i(e,t){this.c=ho(),this.v=1,kn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),kn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=fr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(zl(n,this.o),this.v=0),t&&yt(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){kn.prototype.flush.call(this)},i})(),pg=(function(){function i(e,t){Qr([Jr,qf,function(){return[zn,kn,Il]}],this,dr.call(this,e,t),function(n){var r=new Il(n.data);onmessage=zn(r)},10,1)}return i})();co=(function(){function i(e,t){gn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(gn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Hl(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&Ze(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),gn.prototype.c.call(this,t)},i})(),Qf=(function(){function i(e,t){Qr([$r,Yf,function(){return[zn,gn,co]}],this,dr.call(this,e,t),function(n){var r=new co(n.data);onmessage=zn(r)},11,0)}return i})();Ll=(function(){function i(e,t){this.o=dr.call(this,e,t)||{},this.G=ao,this.I=gn,this.Z=co}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||Ze(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),gg=(function(){function i(e,t){Ll.call(this,e,t),this.queuedSize=0,this.G=Jf,this.I=Vl,this.Z=Qf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,Ll.prototype.push.call(this,e,t)},i})();Wl=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=Qs(n,s[1]),s=s[0]),s instanceof ct?t[a]=[s,o]:(t[a+="/"]=[new ct(0),o],Wl(s,a,t,n))}},If=typeof TextEncoder<"u"&&new TextEncoder,Nl=typeof TextDecoder<"u"&&new TextDecoder,td=0;try{Nl.decode(qi,{stream:!0}),td=1}catch{}nd=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Bn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},_g=(function(){function i(e){this.ondata=e,td?this.t=new TextDecoder:this.p=qi}return i.prototype.push=function(e,t){if(this.ondata||Ze(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&Ze(8),this.t=null);return}this.p||Ze(4);var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=nd(n),s=r.s,a=r.r;t?(a.length&&Ze(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),vg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||Ze(5),this.d&&Ze(4),this.ondata(Zi(e),this.d=t||!1)},i})();id=function(i){return i==1?3:i<6?2:i==9?1:0},rd=function(i,e){return e+30+cn(i,e+26)+cn(i,e+28)},sd=function(i,e,t){var n=cn(i,e+28),r=Xl(i.subarray(e+46,e+46+n),!(cn(i,e+8)&2048)),s=e+46+n,a=Bt(i,e+20),o=t&&a==4294967295?ad(i,s):[a,Bt(i,e+24),Bt(i,e+42)],l=o[0],c=o[1],u=o[2];return[cn(i,e+10),l,c,r,s+cn(i,e+30)+cn(i,e+32),u]},ad=function(i,e){for(;cn(i,e)!=1;e+=4+cn(i,e+2));return[wl(i,e+12),wl(i,e+4),wl(i,e+20)]},Yi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Ze(9),e+=n+4}return e},Xr=function(i,e,t,n,r,s,a,o){var l=n.length,c=t.extra,u=o&&o.length,h=Yi(c);yt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&Ze(10),yt(i,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(yt(i,e,t.crc),yt(i,e+4,s<0?-s-2:s),yt(i,e+8,t.size)),yt(i,e+12,l),yt(i,e+14,h),e+=16,a!=null&&(yt(i,e,u),yt(i,e+6,t.attrs),yt(i,e+10,a),e+=14),i.set(n,e),e+=l,h)for(var g in c){var v=c[g],m=v.length;yt(i,e,+g),yt(i,e+2,m),i.set(v,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},ql=function(i,e,t,n,r){yt(i,e,101010256),yt(i,e+8,t),yt(i,e+10,t),yt(i,e+12,n),yt(i,e+16,r)},$s=(function(){function i(e){this.filename=e,this.c=Kr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||Ze(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),bg=(function(){function i(e,t){var n=this;t||(t={}),$s.call(this,e),this.d=new kn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=id(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){$s.prototype.push.call(this,e,t)},i})(),Mg=(function(){function i(e,t){var n=this;t||(t={}),$s.call(this,e),this.d=new Kf(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=id(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){$s.prototype.push.call(this,e,t)},i})(),Sg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||Ze(5),this.d&2)this.ondata(Ze(4+(this.d&1)*8,0,1),null,!1);else{var n=Zi(e.filename),r=n.length,s=e.comment,a=s&&Zi(s),o=r!=e.filename.length||a&&s.length!=a.length,l=r+Yi(e.extra)+30;r>65535&&this.ondata(Ze(11,0,1),null,!1);var c=new ct(l);Xr(c,0,e,n,o,-1);var u=[c],h=function(){for(var m=0,d=u;m<d.length;m++){var y=d[m];t.ondata(null,y,!1)}u=[]},f=this.d;this.d=0;var p=this.u.length,g=Qs(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var m=t.u[p+1];m?m.r():t.d=1}f=1}}),v=0;e.ondata=function(m,d,y){if(m)t.ondata(m,d,y),t.terminate();else if(v+=d.length,u.push(d),y){var M=new ct(16);yt(M,0,134695760),yt(M,4,e.crc),yt(M,8,v),yt(M,12,e.size),u.push(M),g.c=v,g.b=l+v+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Ze(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Yi(a.extra)+(a.o?a.o.length:0)}for(var o=new ct(n+22),l=0,c=this.u;l<c.length;l++){var a=c[l];Xr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Yi(a.extra)+(a.o?a.o.length:0),t+=a.b}ql(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();od=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Tg=(function(){function i(){var e=this;this.i=new gn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Ag=(function(){function i(e,t){var n=this;t<32e4?this.i=new gn(function(r,s){n.ondata(null,r,s)}):(this.i=new Vl(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Bn(e,0)),this.i.push(e,t)},i.compression=8,i})(),Rg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:od},this.p=qi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||Ze(5),this.p||Ze(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,l=void 0,c=void 0;this.p.length?e.length?(c=new ct(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,h=this.c,f=h&&this.d,p=function(){var d,y=Bt(c,o);if(y==67324752){a=1,l=o,g.d=null,g.c=0;var M=cn(c,o+6),_=cn(c,o+8),S=M&2048,b=M&8,E=cn(c,o+26),x=cn(c,o+28);if(u>o+30+E+x){var T=[];g.k.unshift(T),a=2;var R=Bt(c,o+18),L=Bt(c,o+22),B=Xl(c.subarray(o+30,o+=30+E),!S);R==4294967295?(d=b?[-2]:ad(c,o),R=d[0],L=d[1]):b&&(R=-1),o+=x,g.c=R;var H,I={name:B,compression:_,start:function(){if(I.ondata||Ze(5),!R)I.ondata(null,qi,!0);else{var Y=n.o[_];Y||I.ondata(Ze(14,"unknown compression type "+_,1),null,!1),H=R<0?new Y(B):new Y(B,R,L),H.ondata=function(F,N,X){I.ondata(F,N,X)};for(var P=0,O=T;P<O.length;P++){var $=O[P];H.push($,!1)}n.k[0]==T&&n.c?n.d=H:H.push(qi,!0)}},terminate:function(){H&&H.terminate&&H.terminate()}};R>=0&&(I.size=R,I.originalSize=L),g.onfile(I)}return"break"}else if(h){if(y==134695760)return l=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(y==33639248)return l=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var v=p();if(v==="break")break}if(this.p=qi,h<0){var m=a?c.subarray(0,l-12-(h==-2&&8)-(Bt(c,l-16)==134695760&&4)):c.subarray(0,o);f?f.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&Ze(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),uo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function ja(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function xf(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=ja(i,t),i.start=t,i.rate=e)}function yf(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(c,u,h,f){return Number.isFinite(c)?Math.max(u,Math.min(h,c)):f}function a(c){let u={tempo:s(c.tempo,.5,1.5,t.tempo),amplitude:s(c.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let h of Object.keys(r))r[h].input.value=t[h],r[h].output.textContent=t[h].toFixed(2)+"\xD7"}try{let c=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(c.tempo,.5,1.5,1),amplitude:s(c.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function l(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let c=document.createElement("h3");c.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(c);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[h,f,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let v=document.createElement("label"),m=document.createElement("span"),d=document.createElement("output"),y=document.createElement("input");m.textContent=f+" ",d.textContent=t[h].toFixed(2)+"\xD7",y.type="range",y.min=p,y.max=g,y.step=.05,y.value=t[h],y.style.cssText="display:block;width:100%;margin:14px 0",y.setAttribute("aria-label",f),y.oninput=()=>a({...t,[h]:Number(y.value)}),v.append(m,d,y),n.append(v),r[h]={input:y,output:d}}for(let[h,f]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=h,p.onclick=f,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:l,close:o}}function _f(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function l(){let d=i.lightingState();for(let[y,M]of r)M.value=d[y];a&&(a.checked=d.shadows),o&&(o.value=d.shadowSize)}function c(d){i.setLighting(d),localStorage.setItem(e,JSON.stringify(i.lightingState())),l()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[d,y,M,_]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let S=document.createElement("label");S.textContent=y;let b=document.createElement("input");b.id="lighting_"+d,b.type="range",b.min=M,b.max=_,b.step=".01",b.style.width="100%",b.oninput=()=>c({[d]:Number(b.value)}),r.set(d,b),S.append(b),t.append(S)}for(let[d,y]of[["\u6062\u590D\u67D4\u5149",()=>c(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let M=document.createElement("button");M.textContent=d,M.onclick=y,t.append(M)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>c({shadows:a.checked}),u.append(a),t.append(u);let h=document.createElement("label");h.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let f=document.createElement("select");f.id="lighting_resolution",f.add(new Option("4K \xB7 \u7CBE\u7EC6","4096")),f.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),f.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",f.onchange=()=>localStorage.setItem("snowTextureLimit",f.value),h.append(f),t.append(h),o=document.createElement("select"),o.id="lighting_shadowSize";for(let d of[512,1024,2048])o.add(new Option(d+" \xB7 \u9634\u5F71",String(d)));o.value=i.lightingState().shadowSize,o.onchange=()=>c({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[d,y]of[["adaptive","\u81EA\u52A8\u5E73\u8861\u753B\u8D28\u4E0E\u6D41\u7545\u5EA6"],["quality","\u4F18\u5148\u6E05\u6670\u5EA6"],["battery","\u8282\u80FD \xB7 30\u5E27"]])p.add(new Option(y,d));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let v=()=>{let d=i.performanceState();g.textContent=`GPU \u6E32\u67D3 / \u8499\u76AE \xB7 ${d.fps}\u5E27\uFF08\u76EE\u6807${d.targetFPS}\uFF09
\u7F13\u51B2 ${d.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${d.pixelRatio.toFixed(2)}
\u7ED8\u5236 ${d.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${d.triangles}
\u70ED\u72B6\u6001 ${d.thermal} \xB7 ${d.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}
\u5E27\u95F4\u9694 ${d.meanFrameMs}ms\uFF08\u4E0D\u662F GPU \u8BA1\u65F6\uFF09`},m=setInterval(()=>{t.hidden||v()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),l(),{toggle(){t.hidden=!t.hidden,v()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function vf(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var sg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ai=(i,e)=>i>>>e|i<<32-e;function ag(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let d=t[m-15],y=t[m-2];t[m]=(ai(d,7)^ai(d,18)^d>>>3)+t[m-16]+(ai(y,17)^ai(y,19)^y>>>10)+t[m-7]}let[o,l,c,u,h,f,p,g]=e;for(let m=0;m<64;m++){let d=g+(ai(h,6)^ai(h,11)^ai(h,25))+(h&f^~h&p)+sg[m]+t[m]>>>0,y=(ai(o,2)^ai(o,13)^ai(o,22))+(o&l^o&c^l&c)>>>0;g=p,p=f,f=h,h=u+d>>>0,u=c,c=l,l=o,o=d+y>>>0}let v=[o,l,c,u,h,f,p,g];for(let m=0;m<8;m++)e[m]+=v[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function Ml(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):ag(i)}var Hr={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},bf=new TextDecoder("utf-8",{fatal:!0});function Mf(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Hr.archive,n=Hr.total){if(![Hr.total,192*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Hr.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let f=i.length-22;f>=Math.max(0,i.length-65557);f--)if(r.getUint32(f,!0)===101010256&&f+22+r.getUint16(f+20,!0)===i.length){s=f;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),l=r.getUint32(s+12,!0);if(!a||a>Hr.entries||o+l!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let c=new Set,u=o,h=0;for(let f=0;f<a;f++){if(u+46>s||r.getUint32(u,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let p=r.getUint16(u+8,!0),g=r.getUint16(u+10,!0),v=r.getUint16(u+28,!0),m=r.getUint16(u+30,!0),d=r.getUint16(u+32,!0),y=r.getUint32(u+24,!0);if(u+46+v+m+d>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let M=bf.decode(i.subarray(u+46,u+46+v));if(!vf(M)||c.has(M)||!e.test(M))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");c.add(M),h+=y;let _=r.getUint32(u+38,!0)>>>16;if(p&1||![0,8].includes(g)||(_&61440)===40960||y>Hr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(M==="manifest.json"&&y>1024*1024)throw new Error("manifest \u8FC7\u5927");let S=r.getUint32(u+42,!0);if(S+30>o||r.getUint32(S,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let b=r.getUint16(S+26,!0),E=r.getUint16(S+28,!0),x=r.getUint32(u+20,!0);if(S+30+b+E+x>o||bf.decode(i.subarray(S+30,S+30+b))!==M)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u+=46+v+m+d}if(u!==s||!c.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:c,total:h}}var Sl=/^[a-zA-Z0-9_-]{1,96}$/,og=/^[a-f0-9]{64}$/,cg=new Set(["geometry","animation","texture","audio","config"]);function Qa(i){if(i?.schema!=="snowbreak-skin/1"||!Sl.test(i.characterId)||!Sl.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Sl.test(n.role)||e.has(n.role)||!og.test(n.assetId)||!cg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function Sf({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:f,descriptor:p})=>Promise.resolve().then(()=>e(f,p))));for(let f of h)if(f.status==="rejected")try{t(f.reason)}catch{}}async function l(u){if(a)throw new Error("Runtime disposed");let h=Qa(u),f=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(h.resources.map(y=>Promise.resolve().then(()=>i(y,{signal:p.signal})))),v=g.flatMap((y,M)=>y.status==="fulfilled"?[{asset:y.value,descriptor:h.resources[M]}]:[]),m=g.find(y=>y.status==="rejected");if(f!==n||a||m){if(await o(v),f===n&&(s=null),f!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let d=r;return r={manifest:h,resources:v},s=null,d&&await o(d.resources),f!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function c(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:l,clear:c,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await c()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function wf(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let l=e.getUint32(o),c=e.getUint32(o+4,!0),u=o+8;if(u+c>i.length)throw new Error("WebP chunk outside asset");if(l===1095649613||l===1095650630)throw new Error("Animated textures are not supported");if(l===1448097880){if(c!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=f=>i[f]|i[f+1]<<8|i[f+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(l===1448097868){if(s||c<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+c+(c&1)}if(o!==i.length||!s||a&&a.some((l,c)=>l!==s[c]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Ef(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),c=>c.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let l=new Float32Array(o.buffer);if(!l.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(c,u)=>l.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Tf={geometry:20,animation:32,texture:16,audio:8,config:2};function Af(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Tf,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Tf[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await Ml(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let l=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||l>s.length-20)throw new Error("Invalid GLB JSON");let c=JSON.parse(new TextDecoder().decode(s.subarray(20,20+l)));if((c.buffers||[]).some(u=>u.uri)||(c.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=wf(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Ef(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function ud(i){let e=Mf(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728,201326592),{unzipSync:t}=await Promise.resolve().then(()=>(ld(),cd)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(!["Enya","Fenny"].includes(r.characterId)||!Array.isArray(r.variants)||!(r.characterId==="Fenny"?[2,4]:[4]).includes(r.variants.length))throw new Error("Invalid character collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!(r.characterId==="Fenny"?["normal","underwear"]:["normal","nude"]).includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:Qa(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!==r.characterId))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[Qa(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function l(u){let h=s?.find(g=>g.id===u);if(s&&!h)throw new Error("Variant unavailable");let f=h?.manifest||a[0],p=Sf(Af(async g=>n["assets/"+g]));return await p.load(f),{runtime:p,manifest:f,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:g,mode:v,outfit:m})=>({id:g,mode:v,outfit:m}))||[],selectVariant:l}}let c;try{c=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return l(s?.some(u=>u.id===c)?c:r.defaultVariant)}function hd({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,l=0,c=0,u=0,h=0,f=0,p=0,g=()=>t==="critical"?20:n||t==="serious"?30:60;function v(M,_,S){return Math.max(.5,Math.min(S||1,3,Math.sqrt((t==="critical"?1e6:t==="serious"?16e5:e==="quality"?4e6:e==="battery"?14e5:3e6)/Math.max(1,M*_)))*r)}function m(M={}){return M.mode&&["adaptive","quality","battery"].includes(M.mode)&&(e=M.mode),M.thermal&&["nominal","fair","serious","critical"].includes(M.thermal)&&(t=M.thermal),typeof M.lowPower=="boolean"&&(n=M.lowPower),s=0,a=0,o=0,h=f=0,y()}function d(M=i()){let _=1e3/(e==="battery"?Math.min(30,g()):g());return s&&M-s<_-.75?!1:(s&&M-s<1e3&&(l+=M-s,c++),s=M,o++,a||(a=M),M-a>=2e3&&(u=o*1e3/(M-a),e==="adaptive"&&(h=u<g()*.78?h+1:0,f=u>g()*.94?f+1:0,h>=2&&r>.65?(r=Math.max(.65,r-.1),h=0,p++):f>=4&&r<1&&(r=Math.min(1,r+.05),f=0,p++)),a=M,o=0),!0)}function y(){return{mode:e,thermal:t,lowPower:n,targetFPS:e==="battery"?Math.min(30,g()):g(),fps:Math.round(u*10)/10,meanFrameMs:c?Math.round(l/c*10)/10:0,scale:r,changes:p}}return{begin:d,configure:m,ratio:v,snapshot:y,resetClock(){s=0,a=0,o=0}}}var Jd=0,Iu=1,jd=2;var Ia=1,dc=2,Ds=3,bn=0,dn=1,Qt=2,gi=0,Fs=1,Pu=2,Lu=3,Nu=4,Qd=5;var Rr=100,ep=101,tp=102,np=103,ip=104,rp=200,sp=201,ap=202,op=203,Uu=204,Du=205,cp=206,lp=207,up=208,hp=209,fp=210,dp=211,pp=212,mp=213,gp=214,Ho=0,Vo=1,Go=2,gs=3,Wo=4,Xo=5,qo=6,Yo=7,Fu=0,xp=1,yp=2,jn=0,Ou=1,Bu=2,ku=3,Pa=4,zu=5,Hu=6,Vu=7,xu="attached",_p="detached",Gu=300,or=301,Cr=302,pc=303,mc=304,La=306,nr=1e3,Vn=1001,xs=1002,zt=1003,gc=1004;var Ir=1005;var Ht=1006,Os=1007;var Qn=1008;var Mn=1009,Wu=1010,Xu=1011,Bs=1012,xc=1013,ei=1014,Rn=1015,ti=1016,yc=1017,_c=1018,ks=1020,qu=35902,Yu=35899,Zu=1021,Ku=1022,Cn=1023,hi=1026,cr=1027,vc=1028,bc=1029,lr=1030,Mc=1031;var Sc=1033,Na=33776,Ua=33777,Da=33778,Fa=33779,wc=35840,Ec=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Ic=37496,Pc=37488,Lc=37489,Oa=37490,Nc=37491,Uc=37808,Dc=37809,Fc=37810,Oc=37811,Bc=37812,kc=37813,zc=37814,Hc=37815,Vc=37816,Gc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,Zc=36492,Kc=36494,$c=36495,Jc=36283,jc=36284,Ba=36285,Qc=36286;var _r=2300,vr=2301,Bo=2302,yu=2303,_u=2400,vu=2401,bu=2402,vp=2500;var $u=0,ka=1,zs=2,bp=3200;var el=0,Mp=1,ni="",Dt="srgb",fn="srgb-linear",ha="linear",bt="srgb";var ko=7680;var Sp=519,wp=512,Ep=513,Tp=514,tl=515,Ap=516,Rp=517,nl=518,Cp=519,Ju=35044,ju=35048;var Qu="300 es",$n=2e3,ys=2001;function Pg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){let i=_s("canvas");return i.style.display="block",i}var fd={},vs=null;function fa(...i){let e="THREE."+i.shift();vs?vs("log",e,...i):console.log(e,...i)}function Pp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=Pp(i);let e="THREE."+i.shift();if(vs)vs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Pp(i);let e="THREE."+i.shift();if(vs)vs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yr(...i){let e=i.join(" ");e in fd||(fd[e]=!0,Ke(...i))}function Lp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Np={[Ho]:Vo,[Go]:qo,[Wo]:Yo,[gs]:Xo,[Vo]:Ho,[qo]:Go,[Yo]:Wo,[Xo]:gs},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=1234567,la=Math.PI/180,br=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function Ng(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ug(i,e,t){return i!==e?(t-i)/(e-i):0}function ua(i,e,t){return(1-t)*i+t*e}function Dg(i,e,t,n){return ua(i,e,1-Math.exp(-t*n))}function Fg(i,e=1){return e-Math.abs(eh(i,e*2)-e)}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zg(i,e){return i+Math.random()*(e-i)}function Hg(i){return i*(.5-Math.random())}function Vg(i){i!==void 0&&(dd=i);let e=dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gg(i){return i*la}function Wg(i){return i*br}function Xg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Te={DEG2RAD:la,RAD2DEG:br,generateUUID:Jn,clamp:pt,euclideanModulo:eh,mapLinear:Ng,inverseLerp:Ug,lerp:ua,damp:Dg,pingpong:Fg,smoothstep:Og,smootherstep:Bg,randInt:kg,randFloat:zg,randFloatSpread:Hg,seededRandom:Vg,degToRad:Gg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:qg,floorPowerOfTwo:Yg,setQuaternionFromProperEuler:Zg,normalize:St,denormalize:Kn},sh=class sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;var st=sh,Be=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-o;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);d=Math.sin(d*y)/M,o=Math.sin(o*y)/M,l=l*d+f*o,c=c*d+p*o,u=u*d+g*o,h=h*d+v*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+g*o,h=h*d+v*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var D=ah,Yl=new D,pd=new Be,oh=class oh{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],y=r[1],M=r[4],_=r[7],S=r[2],b=r[5],E=r[8];return s[0]=a*v+o*y+l*S,s[3]=a*m+o*M+l*b,s[6]=a*d+o*_+l*E,s[1]=c*v+u*y+h*S,s[4]=c*m+u*M+h*b,s[7]=c*d+u*_+h*E,s[2]=f*v+p*y+g*S,s[5]=f*m+p*M+g*b,s[8]=f*d+p*_+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;var at=oh,Zl=new at,md=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kg(){let i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:ha,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var ht=Kg();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=_s("canvas")),ts.width=e.width,ts.height=e.height;let r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$g=0,bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kl(r[a].image)):s.push(Kl(r[a]))}else s=Kl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Jg=0,$l=new D,Jt=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,r=Vn,s=Ht,a=Qn,o=Cn,l=Mn,c=i.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Jn(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Gu;Jt.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,S=(d+1)/2,b=(u+f)/4,E=(h+v)/4,x=(g+m)/4;return M>_&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=E/n):_>S?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=b/r,s=x/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=E/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var wt=ch,Ko=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Jt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fc=class fc{constructor(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Qg)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),$i.crossVectors(n,wn),$i.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),$i.crossVectors(n,wn)),$i.normalize(),fo.crossVectors(wn,$i),r[0]=$i.x,r[4]=fo.x,r[8]=wn.x,r[1]=$i.y,r[5]=fo.y,r[9]=wn.y,r[2]=$i.z,r[6]=fo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],M=n[7],_=n[11],S=n[15],b=r[0],E=r[4],x=r[8],T=r[12],R=r[1],L=r[5],B=r[9],H=r[13],I=r[2],Y=r[6],P=r[10],O=r[14],$=r[3],F=r[7],N=r[11],X=r[15];return s[0]=a*b+o*R+l*I+c*$,s[4]=a*E+o*L+l*Y+c*F,s[8]=a*x+o*B+l*P+c*N,s[12]=a*T+o*H+l*O+c*X,s[1]=u*b+h*R+f*I+p*$,s[5]=u*E+h*L+f*Y+p*F,s[9]=u*x+h*B+f*P+p*N,s[13]=u*T+h*H+f*O+p*X,s[2]=g*b+v*R+m*I+d*$,s[6]=g*E+v*L+m*Y+d*F,s[10]=g*x+v*B+m*P+d*N,s[14]=g*T+v*H+m*O+d*X,s[3]=y*b+M*R+_*I+S*$,s[7]=y*E+M*L+_*Y+S*F,s[11]=y*x+M*B+_*P+S*N,s[15]=y*T+M*H+_*O+S*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],y=l*p-c*f,M=o*p-c*h,_=o*f-l*h,S=a*p-c*u,b=a*f-l*u,E=a*h-o*u;return t*(v*y-m*M+d*_)-n*(g*y-m*S+d*b)+r*(g*M-v*S+d*E)-s*(g*_-v*b+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=t*o-n*a,M=t*l-r*a,_=t*c-s*a,S=n*l-r*o,b=n*c-s*o,E=r*c-s*l,x=u*v-h*g,T=u*m-f*g,R=u*d-p*g,L=h*m-f*v,B=h*d-p*v,H=f*d-p*m,I=y*H-M*B+_*L+S*R-b*T+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/I;return e[0]=(o*H-l*B+c*L)*Y,e[1]=(r*B-n*H-s*L)*Y,e[2]=(v*E-m*b+d*S)*Y,e[3]=(f*b-h*E-p*S)*Y,e[4]=(l*R-a*H-c*T)*Y,e[5]=(t*H-r*R+s*T)*Y,e[6]=(m*_-g*E-d*M)*Y,e[7]=(u*E-f*_+p*M)*Y,e[8]=(a*B-o*R+c*x)*Y,e[9]=(n*R-t*B-s*x)*Y,e[10]=(g*b-v*_+d*y)*Y,e[11]=(h*_-u*b-p*y)*Y,e[12]=(o*T-a*L-l*x)*Y,e[13]=(t*L-n*T+r*x)*Y,e[14]=(v*M-g*S-m*y)*Y,e[15]=(u*S-h*M+f*y)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,v=a*u,m=a*h,d=o*h,y=l*c,M=l*u,_=l*h,S=n.x,b=n.y,E=n.z;return r[0]=(1-(v+d))*S,r[1]=(p+_)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-_)*b,r[5]=(1-(f+d))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(g+M)*E,r[9]=(m-y)*E,r[10]=(1-(f+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ns.set(r[0],r[1],r[2]).length(),o=ns.set(r[4],r[5],r[6]).length(),l=ns.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);let c=1/a,u=1/o,h=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=$n,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===$n)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ys)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$n,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===$n)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ys)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fc.prototype.isMatrix4=!0;var Xe=fc,ns=new D,qn=new Xe,jg=new D(0,0,0),Qg=new D(1,1,1),$i=new D,fo=new D,wn=new D,xd=new Xe,yd=new Be,Li=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e0=0,_d=new D,is=new Be,Ei=new Xe,po=new D,ta=new D,t0=new D,n0=new Be,vd=new D(1,0,0),bd=new D(0,1,0),Md=new D(0,0,1),Sd={type:"added"},i0={type:"removed"},rs={type:"childadded",child:null},Jl={type:"childremoved",child:null},Ut=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Li,n=new Be,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new at}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ta,po,this.up):Ei.lookAt(po,ta,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),is.setFromRotationMatrix(Ei),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),rs.child=e,this.dispatchEvent(rs),rs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i0),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},r0={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},mo={h:0,s:0,l:0};function jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=eh(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=jl(a,s,e+1/3),this.g=jl(a,s,e),this.b=jl(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ht.workingToColorSpace(nn.copy(this),e),Math.round(pt(nn.r*255,0,255))*65536+Math.round(pt(nn.g*255,0,255))*256+Math.round(pt(nn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Dt){ht.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(mo);let n=ua(Ji.h,mo.h,t),r=ua(Ji.s,mo.s,t),s=ua(Ji.l,mo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new je;je.NAMES=Up;var Mr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yn=new D,Ti=new D,Ql=new D,Ai=new D,ss=new D,as=new D,wd=new D,eu=new D,tu=new D,nu=new D,iu=new wt,ru=new wt,su=new wt,li=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yn.subVectors(e,t),r.cross(Yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yn.subVectors(r,t),Ti.subVectors(n,t),Ql.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(Ti),l=Yn.dot(Ql),c=Ti.dot(Ti),u=Ti.dot(Ql),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,n),su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(iu,s.x),a.addScaledVector(ru,s.y),a.addScaledVector(su,s.z),a}static isFrontFacing(e,t,n,r){return Yn.subVectors(n,t),Ti.subVectors(e,t),Yn.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ss.subVectors(r,n),as.subVectors(s,n),eu.subVectors(e,n);let l=ss.dot(eu),c=as.dot(eu);if(l<=0&&c<=0)return t.copy(n);tu.subVectors(e,r);let u=ss.dot(tu),h=as.dot(tu);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ss,a);nu.subVectors(e,s);let p=ss.dot(nu),g=as.dot(nu);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(as,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return wd.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(wd,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(ss,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),xo.subVectors(this.max,na),os.subVectors(e.a,na),cs.subVectors(e.b,na),ls.subVectors(e.c,na),ji.subVectors(cs,os),Qi.subVectors(ls,cs),pr.subVectors(os,ls);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-pr.z,pr.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,pr.z,0,-pr.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-pr.y,pr.x,0];return!au(t,os,cs,ls,xo)||(t=[1,0,0,0,1,0,0,0,1],!au(t,os,cs,ls,xo))?!1:(yo.crossVectors(ji,Qi),t=[yo.x,yo.y,yo.z],au(t,os,cs,ls,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new D,new D,new D,new D,new D,new D,new D,new D],Zn=new D,go=new Yt,os=new D,cs=new D,ls=new D,ji=new D,Qi=new D,pr=new D,na=new D,xo=new D,yo=new D,mr=new D;function au(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mr.fromArray(i,s);let o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xt=new D,_o=new st,s0=0,Ft=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ma=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var hn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},a0=new Yt,ia=new D,ou=new D,yn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ia,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ou)),this.expandByPoint(ia.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},o0=0,Hn=new Xe,cu=new Ut,us=new D,En=new Yt,ra=new Yt,$t=new D,jt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(En.min,ra.min),En.expandByPoint($t),$t.addVectors(En.max,ra.max),En.expandByPoint($t)):(En.expandByPoint(ra.min),En.expandByPoint(ra.max))}En.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),$t.add(us)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,u=new D,h=new D,f=new st,p=new st,g=new st,v=new D,m=new D;function d(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,R),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(v),o[T].add(v),o[R].add(v),l[x].add(m),l[T].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let R=y[x],L=R.start,B=R.count;for(let H=L,I=L+B;H<I;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new D,_=new D,S=new D,b=new D;function E(x){S.fromBufferAttribute(r,x),b.copy(S);let T=o[x];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(b,T);let L=_.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,L)}for(let x=0,T=y.length;x<T;++x){let R=y[x],L=R.start,B=R.count;for(let H=L,I=L+B;H<I;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Ft(f,u,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},un=new D,Es=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lu=new D,c0=new D,l0=new at,Tn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=lu.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(lu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||l0.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},u0=0,_n=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Fs,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Du,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new D,uu=new D,vo=new D,bo=new D,ir=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){uu.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),bo.copy(this.origin).sub(uu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=bo.dot(this.direction),l=-bo.dot(vo),c=bo.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(uu).addScaledVector(vo,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,d=n.x-a.x,y=n.y-a.y,M=n.z-a.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(u),E,x,T,R,L,B,H,I,Y,P,O,$;if(_>=S&&_>=b?(T=l,B=h,Y=g,$=d,l>=0?(E=c,x=u,R=f,L=p,H=v,I=m,P=y,O=M):(E=u,x=c,R=p,L=f,H=m,I=v,P=M,O=y)):S>=b?(T=c,B=f,Y=v,$=y,c>=0?(E=u,x=l,R=p,L=h,H=m,I=g,P=M,O=d):(E=l,x=u,R=h,L=p,H=g,I=m,P=d,O=M)):(T=u,B=p,Y=m,$=M,u>=0?(E=l,x=c,R=h,L=f,H=g,I=v,P=d,O=y):(E=c,x=l,R=f,L=h,H=v,I=g,P=y,O=d)),T===0)return null;let F=E/T,N=x/T,X=1/T,W=R-F*B,J=L-N*B,V=H-F*Y,z=I-N*Y,ee=P-F*$,k=O-N*$,j=ee*z-k*V,ae=W*k-J*ee,ue=V*J-z*W;if(r){if(j<0||ae<0||ue<0)return null}else if((j<0||ae<0||ue<0)&&(j>0||ae>0||ue>0))return null;let ie=j+ae+ue;if(ie===0)return null;let he=X*(j*B+ae*Y+ue*$);return(ie>0?he<0:he>0)?null:this.at(he/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ed=new Xe,gr=new ir,Mo=new yn,Td=new D,So=new D,wo=new D,Eo=new D,hu=new D,To=new D,Ad=new D,Ao=new D,Vt=class extends Ut{constructor(e=new jt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(hu.fromBufferAttribute(h,e),a?To.addScaledVector(hu,u):To.addScaledVector(hu.sub(t),u))}t.add(To)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Mo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Mo,Td)===null||gr.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(Ed.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Ed),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,S=M;_<S;_+=3){let b=o.getX(_),E=o.getX(_+1),x=o.getX(_+2);r=Ro(this,d,e,n,c,u,h,b,E,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);r=Ro(this,a,e,n,c,u,h,y,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,S=M;_<S;_+=3){let b=_,E=_+1,x=_+2;r=Ro(this,d,e,n,c,u,h,b,E,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=m,M=m+1,_=m+2;r=Ro(this,a,e,n,c,u,h,y,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function h0(i,e,t,n,r,s,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===bn,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:i}}function Ro(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,So),i.getVertexPosition(l,wo),i.getVertexPosition(c,Eo);let u=h0(i,e,t,n,So,wo,Eo,Ad);if(u){let h=new D;li.getBarycoord(Ad,So,wo,Eo,h),r&&(u.uv=li.getInterpolatedAttribute(r,o,l,c,h,new st)),s&&(u.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new st)),a&&(u.normal=li.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};li.getNormal(So,wo,Eo,f.normal),u.face=f,u.barycoord=h}return u}var sa=new wt,Rd=new wt,Cd=new wt,f0=new wt,Id=new Xe,Co=new D,fu=new yn,Pd=new Xe,du=new ir,ga=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(r),e.ray.intersectsSphere(fu)!==!1&&(Pd.copy(r).invert(),du.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Rd.fromBufferAttribute(r.attributes.skinIndex,e),Cd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(sa.copy(t),t.set(0,0,0,0)):(sa.set(...t,1),t.set(0,0,0)),sa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Cd.getComponent(s);if(a!==0){let o=Rd.getComponent(s);Id.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(f0.copy(sa).applyMatrix4(Id),a)}}return t.isVector4&&(t.w=sa.w),t.applyMatrix4(this.bindMatrixInverse)}},Ts=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},As=class extends Jt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=zt,u=zt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ld=new Xe,d0=new Xe,xa=class i{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:d0;Ld.multiplyMatrices(o,t[s]),Ld.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new As(t,e,e,Cn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ke("Skeleton: No bone found with UUID:",s),a=new Ts),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ni=class extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hs=new Xe,Nd=new Xe,Io=[],Ud=new Yt,p0=new Xe,aa=new Vt,oa=new yn,ya=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,p0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Ud.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),oa.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),Nd.multiplyMatrices(n,hs),aa.matrixWorld=Nd,aa.raycast(e,Io);for(let a=0,o=Io.length;a<o;a++){let l=Io[a];l.instanceId=s,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(r*this.count),r,this.count,vc,Rn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xr=new yn,m0=new st(.5,.5),Po=new D,Rs=class{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],y=s[12],M=s[13],_=s[14],S=s[15];if(r[0].setComponents(c-a,p-u,d-g,S-y).normalize(),r[1].setComponents(c+a,p+u,d+g,S+y).normalize(),r[2].setComponents(c+o,p+h,d+v,S+M).normalize(),r[3].setComponents(c-o,p-h,d-v,S-M).normalize(),n)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,p-f,d-m,S-_).normalize();else if(r[4].setComponents(c-l,p-f,d-m,S-_).normalize(),t===$n)r[5].setComponents(c+l,p+f,d+m,S+_).normalize();else if(t===ys)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);let t=m0.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new D,jo=new D,Dd=new Xe,ca=new ir,Lo=new yn,pu=new D,Fd=new D,Sr=class extends Ut{constructor(e=new jt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Jo.fromBufferAttribute(t,r-1),jo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Jo.distanceTo(jo);e.setAttribute("lineDistance",new hn(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Dd.copy(r).invert(),ca.copy(e.ray).applyMatrix4(Dd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=u.getX(v),y=u.getX(v+1),M=No(this,e,ca,l,d,y,v);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=No(this,e,ca,l,v,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=No(this,e,ca,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=No(this,e,ca,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function No(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Jo.fromBufferAttribute(o,r),jo.fromBufferAttribute(o,s),t.distanceSqToSegment(Jo,jo,pu,Fd)>n)return;pu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:Fd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Od=new D,Bd=new D,_a=class extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Od.fromBufferAttribute(t,r),Bd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Od.distanceTo(Bd);e.setAttribute("lineDistance",new hn(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},va=class extends Sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kd=new Xe,Mu=new ir,Uo=new yn,Do=new D,ba=class extends Ut{constructor(e=new jt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;kd.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(kd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);Do.fromBufferAttribute(h,m),zd(Do,m,l,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Do.fromBufferAttribute(h,g),zd(Do,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function zd(i,e,t,n,r,s,a){let o=Mu.distanceSqToPoint(i);if(o<t){let l=new D;Mu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ma=class extends Jt{constructor(e=[],t=or,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var rr=class extends Jt{constructor(e,t,n=ei,r,s,a,o=zt,l=zt,c,u=hi,h=1){if(u!==hi&&u!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qo=class extends rr{constructor(e,t=ei,n=or,r,s,a=zt,o=zt,l,c=hi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ps=class i extends jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(h,2));function g(v,m,d,y,M,_,S,b,E,x,T){let R=_/E,L=S/x,B=_/2,H=S/2,I=b/2,Y=E+1,P=x+1,O=0,$=0,F=new D;for(let N=0;N<P;N++){let X=N*L-H;for(let W=0;W<Y;W++){let J=W*R-B;F[v]=J*y,F[m]=X*M,F[d]=I,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[d]=b>0?1:-1,u.push(F.x,F.y,F.z),h.push(W/E),h.push(1-N/x),O+=1}}for(let N=0;N<x;N++)for(let X=0;X<E;X++){let W=f+X+Y*N,J=f+X+Y*(N+1),V=f+(X+1)+Y*(N+1),z=f+(X+1)+Y*N;l.push(W,J,z),l.push(J,V,z),$+=6}o.addGroup(p,$,T),p+=$,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class i extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let y=d*f-a;for(let M=0;M<c;M++){let _=M*h-s;g.push(_,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let M=y+c*d,_=y+c*(d+1),S=y+1+c*(d+1),b=y+1+c*d;p.push(M,_,b),p.push(_,S,b)}this.setIndex(p),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Hd(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Hd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=Pr(i[t]);for(let r in n)e[r]=n[r]}return e}function Hd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function g0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Dp={clone:Pr,merge:an},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=g0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(r.value);break;case"v2":this.uniforms[n].value=new st().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new at().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ec=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Er=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tc=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nc=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function _0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Vd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function v0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:s=e,o=2*t-n;break;case bu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,l=2*n-t;break;case bu:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let S=0;S!==o;++S)s[S]=d*a[u+S]+y*a[c+S]+M*a[l+S]+_*a[h+S];return s}},rc=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}},sc=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ac=class extends di{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(r-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*v+a[l+m]*g;return s}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],d=p*f+g*2,y=h[d],M=h[d+1],_=e*f+g*2,S=u[_],b=u[_+1],E=M0(n,t,y,S,r);s[g]=Fp(E,v,M,b,m)}return s}};function Fp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function b0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function M0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Fp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let l=b0(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var vn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tr(t,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tr(e.times,Array),values:tr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),zo(e.settings)&&(n.settings={inTangents:tr(e.settings.inTangents,Array),outTangents:tr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case yu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zo(this.settings)&&(Gd(this.settings.inTangents,e),Gd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Lg(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Bo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Gd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=vr;var Ui=class extends vn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=_r;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName="color";var Di=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};Di.prototype.ValueTypeName="number";var oc=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)Be.slerpFlat(s,0,a,c-o,a,c,l);return s}},pi=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends vn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=_r;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};Oi.prototype.ValueTypeName="vector";var Ls=class{constructor(e="",t=-1,n=[],r=vp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(w0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(vn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=_0(l);l=Vd(l,1,u),c=Vd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function S0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return wa;case"quaternion":return pi;case"bool":case"boolean":return Ui;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function w0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=S0(i.type);if(i.times===void 0){let n=[],r=[];v0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),zo(i.settings)&&(t.settings={inTangents:tr(i.settings.inTangents,Float32Array),outTangents:tr(i.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var cc=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Op=new cc,mi=class{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},Su=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ui.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ii[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:M,value:_})=>{if(M)d.close();else{v+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,E=u.length;b<E;b++){let x=u[b];x.onProgress&&x.onProgress(S)}d.enqueue(_),y()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ui.add(`file:${e}`,c);let u=Ii[e];delete Ii[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fs=new WeakMap,lc=class extends mi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ui.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=fs.get(a);h===void 0&&(h=[],fs.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=_s("img");function l(){u(),t&&t(this);let h=fs.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),ui.remove(`image:${e}`);let f=fs.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var sr=class extends mi{constructor(e){super(e)}load(e,t,n,r){let s=new Jt,a=new lc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Tr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ea=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mu=new Xe,Xd=new D,qd=new D,Us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fo=new D,Oo=new Be,ci=new D,Ta=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Oo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fo,Oo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new D,Yd=new st,Zd=new st,qt=class extends Ta{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,Yd,Zd),t.subVectors(Zd,Yd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wu=class extends Us{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=br*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Aa=class extends Tr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Eu=class extends Us{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Ra=class extends Tr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ar=class extends Ta{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tu=class extends Us{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gu=new WeakMap,Ca=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ui.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{gu.has(a)===!0?(r&&r(gu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),gu.set(l,c),ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=-90,ps=1,uc=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(ds,ps,e,t);r.layers=this.layers,this.add(r);let s=new qt(ds,ps,e,t);s.layers=this.layers,this.add(s);let a=new qt(ds,ps,e,t);a.layers=this.layers,this.add(a);let o=new qt(ds,ps,e,t);o.layers=this.layers,this.add(o);let l=new qt(ds,ps,e,t);l.layers=this.layers,this.add(l);let c=new qt(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nh="\\[\\]\\.:\\/",E0=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",T0="[^"+nh.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",ih),R0=/(WCOD+)?/.source.replace("WCOD",T0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),P0=new RegExp("^"+A0+R0+C0+I0+"$"),L0=["material","materials","bones","map"],Au=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E0,"")}static parseTrackName(e){let t=P0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);L0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Au;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IM=new Float32Array(1);var Kd=new Xe,Ar=class{constructor(e,t,n=0,r=1/0){this.ray=new ir(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kd),this}intersectObject(e,t=!0,n=[]){return Ru(e,this,n,t),n.sort($d),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ru(e[r],this,n,t);return n.sort($d),n}};function $d(i,e){return i.distance-e.distance}function Ru(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Ru(s[a],e,t,!0)}}var lh=class lh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};lh.prototype.isMatrix2=!0;var Cu=lh;function rh(i,e,t,n){let r=N0(n);switch(t){case Zu:return i*e;case vc:return i*e/r.components*r.byteLength;case bc:return i*e/r.components*r.byteLength;case lr:return i*e*2/r.components*r.byteLength;case Mc:return i*e*2/r.components*r.byteLength;case Ku:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case Sc:return i*e*4/r.components*r.byteLength;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Ac:return Math.max(i,16)*Math.max(e,8)/4;case wc:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case Rc:case Cc:case Pc:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Oa:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Kc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N0(i){switch(i){case Mn:case Wu:return{byteLength:1,components:1};case Bs:case Xu:case ti:return{byteLength:2,components:1};case yc:case _c:return{byteLength:2,components:4};case ei:case xc:case Rn:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function sm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function O0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
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
#endif`,Fx=`uniform sampler2D dfgLUT;
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
}`,Ox=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sy=`float getShadowMask() {
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
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
}`,r_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,a_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,c_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,u_=`#define TOON
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
}`,h_=`#define TOON
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
}`,f_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 color;
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
}`,g_=`uniform float rotation;
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
}`,x_=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:B0,alphahash_pars_fragment:k0,alphamap_fragment:z0,alphamap_pars_fragment:H0,alphatest_fragment:V0,alphatest_pars_fragment:G0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:$0,iridescence_fragment:J0,bumpmap_pars_fragment:j0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:cx,defaultnormal_vertex:lx,displacementmap_pars_vertex:ux,displacementmap_vertex:hx,emissivemap_fragment:fx,emissivemap_pars_fragment:dx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:xx,envmap_pars_fragment:yx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Ix,envmap_vertex:vx,fog_vertex:bx,fog_pars_vertex:Mx,fog_fragment:Sx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Tx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Rx,lights_pars_begin:Cx,lights_toon_fragment:Px,lights_toon_pars_fragment:Lx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Dx,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ox,lights_fragment_maps:Bx,lights_fragment_end:kx,lightprobes_pars_fragment:zx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:$x,morphinstance_vertex:Jx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:ay,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:fy,packing:dy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:xy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:by,shadowmap_vertex:My,shadowmask_pars_fragment:Sy,skinbase_vertex:wy,skinning_pars_vertex:Ey,skinning_vertex:Ty,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:Iy,tonemapping_pars_fragment:Py,transmission_fragment:Ly,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Dy,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:ky,backgroundCube_vert:zy,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distance_vert:qy,distance_frag:Yy,equirect_vert:Zy,equirect_frag:Ky,linedashed_vert:$y,linedashed_frag:Jy,meshbasic_vert:jy,meshbasic_frag:Qy,meshlambert_vert:e_,meshlambert_frag:t_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:r_,meshnormal_frag:s_,meshphong_vert:a_,meshphong_frag:o_,meshphysical_vert:c_,meshphysical_frag:l_,meshtoon_vert:u_,meshtoon_frag:h_,points_vert:f_,points_frag:d_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:x_},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},yi={basic:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:an([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:an([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:an([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:an([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:an([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:an([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:an([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:an([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};yi.physical={uniforms:an([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var il={r:0,b:0,g:0},y_=new Xe,am=new at;am.set(-1,0,0,0,1,0,0,0,1);function __(i,e,t,n,r,s){let a=new je(0),o=r===!0?0:1,l,c,u=null,h=0,f=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(y){let M=!1,_=p(y);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,M){let _=p(M);_&&(_.isCubeTexture||_.mapping===La)?(c===void 0&&(c=new Vt(new Ps(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Pr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(am),c.material.toneMapped=ht.getTransfer(_.colorSpace)!==bt,(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Vt(new wr(2,2),new An({name:"BackgroundMaterial",uniforms:Pr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(il,th(i)),t.buffers.color.setClear(il.r,il.g,il.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:d}}function v_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(L,B,H,I,Y){let P=!1,O=h(L,I,H,B);s!==O&&(s=O,c(s.object)),P=p(L,I,H,Y),P&&g(L,I,H,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,_(L,B,H,I),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,B,H,I){let Y=I.wireframe===!0,P=n[B.id];P===void 0&&(P={},n[B.id]=P);let O=L.isInstancedMesh===!0?L.id:0,$=P[O];$===void 0&&($={},P[O]=$);let F=$[H.id];F===void 0&&(F={},$[H.id]=F);let N=F[Y];return N===void 0&&(N=f(l()),F[Y]=N),N}function f(L){let B=[],H=[],I=[];for(let Y=0;Y<t;Y++)B[Y]=0,H[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,B,H,I){let Y=s.attributes,P=B.attributes,O=0,$=H.getAttributes();for(let F in $)if($[F].location>=0){let X=Y[F],W=P[F];if(W===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),X===void 0||X.attribute!==W||W&&X.data!==W.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(L,B,H,I){let Y={},P=B.attributes,O=0,$=H.getAttributes();for(let F in $)if($[F].location>=0){let X=P[F];X===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let W={};W.attribute=X,X&&X.data&&(W.data=X.data),Y[F]=W,O++}s.attributes=Y,s.attributesNum=O,s.index=I}function v(){let L=s.newAttributes;for(let B=0,H=L.length;B<H;B++)L[B]=0}function m(L){d(L,0)}function d(L,B){let H=s.newAttributes,I=s.enabledAttributes,Y=s.attributeDivisors;H[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),Y[L]!==B&&(i.vertexAttribDivisor(L,B),Y[L]=B)}function y(){let L=s.newAttributes,B=s.enabledAttributes;for(let H=0,I=B.length;H<I;H++)B[H]!==L[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function M(L,B,H,I,Y,P,O){O===!0?i.vertexAttribIPointer(L,B,H,Y,P):i.vertexAttribPointer(L,B,H,I,Y,P)}function _(L,B,H,I){v();let Y=I.attributes,P=H.getAttributes(),O=B.defaultAttributeValues;for(let $ in P){let F=P[$];if(F.location>=0){let N=Y[$];if(N===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){let X=N.normalized,W=N.itemSize,J=e.get(N);if(J===void 0)continue;let V=J.buffer,z=J.type,ee=J.bytesPerElement,k=z===i.INT||z===i.UNSIGNED_INT||N.gpuType===xc;if(N.isInterleavedBufferAttribute){let j=N.data,ae=j.stride,ue=N.offset;if(j.isInstancedInterleavedBuffer){for(let ie=0;ie<F.locationSize;ie++)d(F.location+ie,j.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<F.locationSize;ie++)m(F.location+ie);i.bindBuffer(i.ARRAY_BUFFER,V);for(let ie=0;ie<F.locationSize;ie++)M(F.location+ie,W/F.locationSize,z,X,ae*ee,(ue+W/F.locationSize*ie)*ee,k)}else{if(N.isInstancedBufferAttribute){for(let j=0;j<F.locationSize;j++)d(F.location+j,N.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let j=0;j<F.locationSize;j++)m(F.location+j);i.bindBuffer(i.ARRAY_BUFFER,V);for(let j=0;j<F.locationSize;j++)M(F.location+j,W/F.locationSize,z,X,W*ee,W/F.locationSize*j*ee,k)}}else if(O!==void 0){let X=O[$];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(F.location,X);break;case 3:i.vertexAttrib3fv(F.location,X);break;case 4:i.vertexAttrib4fv(F.location,X);break;default:i.vertexAttrib1fv(F.location,X)}}}}y()}function S(){T();for(let L in n){let B=n[L];for(let H in B){let I=B[H];for(let Y in I){let P=I[Y];for(let O in P)u(P[O].object),delete P[O];delete I[Y]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let H in B){let I=B[H];for(let Y in I){let P=I[Y];for(let O in P)u(P[O].object),delete P[O];delete I[Y]}}delete n[L.id]}function E(L){for(let B in n){let H=n[B];for(let I in H){let Y=H[I];if(Y[L.id]===void 0)continue;let P=Y[L.id];for(let O in P)u(P[O].object),delete P[O];delete Y[L.id]}}}function x(L){for(let B in n){let H=n[B],I=L.isInstancedMesh===!0?L.id:0,Y=H[I];if(Y!==void 0){for(let P in Y){let O=Y[P];for(let $ in O)u(O[$].object),delete O[$];delete Y[P]}delete H[I],Object.keys(H).length===0&&delete n[B]}}}function T(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function b_(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function M_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Mn&&E!==Rn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:b}}function S_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Tn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,M=y*4,_=d.clippingState||null;l.value=_,_=u(g,f,M,p);for(let S=0;S!==M;++S)_[S]=t[S];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==v;++M,_+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Vs=4,w_=6,E_=20,T_=256,za=new ar,Bp=new je,uh=null,hh=0,fh=0,dh=!1,A_=new D,Lr=new D,Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=A_}=s;uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,hh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ti,format:Cn,colorSpace:fn,depthBuffer:!1},r=kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=R_(s)),this._blurMaterial=I_(s,e,t),this._ggxMaterial=C_(s,e,t)}return r}_compileMaterial(e){let t=new Vt(new jt,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,r,s){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Bp),h.toneMapping=jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Ps,new rn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Bp),d=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let S=this._cubeSize;Hs(r,_*S,M>2?S:0,S,S),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===or||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Vs?n-g+Vs:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Hs(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(o,za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Hs(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(o,za)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Vs?r-this._lodMax+Vs:0),f=4*(this._cubeSize-u);Hs(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(l,za)}};function R_(i){let e=[],t=[],n=i,r=i-Vs+1+w_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,p=3,g=new Float32Array(p*f*h),v=new Float32Array(p*f*h);for(let d=0;d<h;d++){let y=d%3*2/3-1,M=d>2?0:-1,_=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(_,p*f*d);for(let S=0;S<f;S++){let b=u[S*2]*2-1,E=u[S*2+1]*2-1;d===0?Lr.set(1,E,b):d===1?Lr.set(-b,1,-E):d===2?Lr.set(-b,E,1):d===3?Lr.set(-1,E,-b):d===4?Lr.set(-b,-1,E):Lr.set(b,E,-1),Lr.toArray(v,(d*f+S)*p)}}let m=new jt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(v,p)),t.push(new Vt(m,null)),n>Vs&&n--}return{lodMeshes:t,sizeLods:e}}function kp(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C_(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function I_(i,e,t){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zp(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sl=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ma(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:gi});s.uniforms.tEquirect.value=t;let a=new Vt(r,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Ht),new uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function P_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===pc||p===mc)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new sl(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===pc||p===mc,v=p===or||p===Cr;if(g||v){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ws(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Ws(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===pc?f.mapping=or:p===mc&&(f.mapping=Cr),f}function l(f){let p=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function L_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&yr("WebGLRenderer: "+n+" extension not supported."),r}}}function N_(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(g===void 0)return;if(p!==null){let y=p.array;v=p.version;for(let M=0,_=y.length;M<_;M+=3){let S=y[M+0],b=y[M+1],E=y[M+2];f.push(S,b,b,E,E,S)}}else{let y=g.array;v=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let S=M+0,b=M+1,E=M+2;f.push(S,b,b,E,E,S)}}let m=new(g.count>=65535?ma:pa)(f,1);m.version=v;let d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function U_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function D_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F_(i,e,t){let n=new WeakMap,r=new wt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=o.attributes.position.count*M,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*S*4*h),E=new da(b,_,S,h);E.type=Rn,E.needsUpdate=!0;let x=M*4;for(let R=0;R<h;R++){let L=m[R],B=d[R],H=y[R],I=_*S*4*R;for(let Y=0;Y<L.count;Y++){let P=Y*x;p===!0&&(r.fromBufferAttribute(L,Y),b[I+P+0]=r.x,b[I+P+1]=r.y,b[I+P+2]=r.z,b[I+P+3]=0),g===!0&&(r.fromBufferAttribute(B,Y),b[I+P+4]=r.x,b[I+P+5]=r.y,b[I+P+6]=r.z,b[I+P+7]=0),v===!0&&(r.fromBufferAttribute(H,Y),b[I+P+8]=r.x,b[I+P+9]=r.y,b[I+P+10]=r.z,b[I+P+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new st(_,S)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function O_(i,e,t,n,r){let s=new WeakMap;function a(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var B_={[Ou]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function k_(i,e,t,n,r,s){let a=new xn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new jt;c.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new hn([0,2,0,0,2,0],2));let u=new ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vt(c,u),f=new ar(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,d=null,y=[],M=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let b=0;b<y.length;b++){let E=y[b];E.setSize&&E.setSize(_,S)}},this.setEffects=function(_){y=_,M=y.length>0&&y[0].isRenderPass===!0;let S=a.width,b=a.height;y.length>0&&o===null&&(o=new xn(S,b,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,b,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let x=y[E];x.setSize&&x.setSize(S,b)}},this.begin=function(_,S){if(v||_.toneMapping===jn&&y.length===0)return!1;if(d=S,S!==null){let b=S.width,E=S.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return M===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=jn,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=m,v=!0;let b=a,E=o;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(_,E,b,S),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,u.defines={},ht.getTransfer(p)===bt&&(u.defines.SRGB_TRANSFER="");let x=B_[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(d),_.render(h,f),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var om=new Jt,gh=new rr(1,1),cm=new da,lm=new $o,um=new Ma,Vp=[],Gp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),qp=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cl(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;qp.set(n),i.uniformMatrix2fv(this.addr,!1,qp),Kt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),Kt(t,n)}}function q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Wp.set(n),i.uniformMatrix4fv(this.addr,!1,Wp),Kt(t,n)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function tv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(gh.compareFunction=t.isReversedDepthBuffer()?nl:tl,s=gh):s=om,t.setTexture2D(e||s,r)}function nv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lm,r)}function iv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||um,r)}function rv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cm,r)}function sv(i){switch(i){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return j_;case 36295:return Q_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function av(i,e){i.uniform1fv(this.addr,e)}function ov(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function cv(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function lv(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function uv(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hv(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fv(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dv(i,e){i.uniform1iv(this.addr,e)}function pv(i,e){i.uniform2iv(this.addr,e)}function mv(i,e){i.uniform3iv(this.addr,e)}function gv(i,e){i.uniform4iv(this.addr,e)}function xv(i,e){i.uniform1uiv(this.addr,e)}function yv(i,e){i.uniform2uiv(this.addr,e)}function _v(i,e){i.uniform3uiv(this.addr,e)}function vv(i,e){i.uniform4uiv(this.addr,e)}function bv(i,e,t){let n=this.cache,r=e.length,s=cl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=gh:a=om;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Mv(i,e,t){let n=this.cache,r=e.length,s=cl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lm,s[a])}function Sv(i,e,t){let n=this.cache,r=e.length,s=cl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||um,s[a])}function wv(i,e,t){let n=this.cache,r=e.length,s=cl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cm,s[a])}function Ev(i){switch(i){case 5126:return av;case 35664:return ov;case 35665:return cv;case 35666:return lv;case 35674:return uv;case 35675:return hv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return yv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return wv}}var xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sv(t.type)}},yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function Tv(i,e,t){let n=i.name,r=n.length;for(ph.lastIndex=0;;){let s=ph.exec(n),a=ph.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yp(t,c===void 0?new xh(o,i,e):new yh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new _h(o),Yp(t,h)),t=h}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Tv(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Zp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Av=37297,Rv=0;function Cv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kp=new at;function Iv(i){ht._getMatrix(Kp,ht.workingColorSpace,i);let e=`mat3( ${Kp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cv(i.getShaderSource(e),o)}else return s}function Pv(i,e){let t=Iv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Lv={[Ou]:"Linear",[Bu]:"Reinhard",[ku]:"Cineon",[Pa]:"ACESFilmic",[Hu]:"AgX",[Vu]:"Neutral",[zu]:"Custom"};function Nv(i,e){let t=Lv[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rl=new D;function Uv(){ht.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function Fv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Va(i){return i!==""}function Jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(Bv,zv)}var kv=new Map;function zv(i,e){let t=ut[e];if(t===void 0){let n=kv.get(e);if(n!==void 0)t=ut[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}var Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(Hv,Vv)}function Vv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Gv={[Ia]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Wv(i){return Gv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xv={[or]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function qv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yv={[Cr]:"ENVMAP_MODE_REFRACTION"};function Zv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kv={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[yp]:"ENVMAP_BLENDING_ADD"};function $v(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[i.combine]||"ENVMAP_BLENDING_NONE"}function Jv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Wv(t),c=qv(t),u=Zv(t),h=$v(t),f=Jv(t),p=Dv(t),g=Fv(s),v=r.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),d.length>0&&(d+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),d=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ut.tonemapping_pars_fragment:"",t.toneMapping!==jn?Nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),a=vh(a),a=Jp(a,t),a=jp(a,t),o=vh(o),o=Jp(o,t),o=jp(o,t),a=Qp(a),o=Qp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=y+m+a,_=y+d+o,S=Zp(r,r.VERTEX_SHADER,M),b=Zp(r,r.FRAGMENT_SHADER,_);r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(L){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(S)||"",I=r.getShaderInfoLog(b)||"",Y=B.trim(),P=H.trim(),O=I.trim(),$=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,b);else{let N=$p(r,S,"vertex"),X=$p(r,b,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+N+`
`+X)}else Y!==""?Ke("WebGLProgram: Program Info Log:",Y):(P===""||O==="")&&(F=!1);F&&(L.diagnostics={runnable:$,programLog:Y,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(S),r.deleteShader(b),x=new Gs(r,v),T=Ov(r,v)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,Av)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Qv=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mh(e),t.set(e,n)),n}},Mh=class{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}};function eb(i){return i===lr||i===Oa||i===Ba}function tb(i,e,t,n,r,s){let a=new Ms,o=new bh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,L,B,H){let I=L.fog,Y=B.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||P,O),F=$&&$.mapping===La?$.image.height:null,N=p[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let X=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,W=X!==void 0?X.length:0,J=0;Y.morphAttributes.position!==void 0&&(J=1),Y.morphAttributes.normal!==void 0&&(J=2),Y.morphAttributes.color!==void 0&&(J=3);let V,z,ee,k;if(N){let Tt=yi[N];V=Tt.vertexShader,z=Tt.fragmentShader}else{V=x.vertexShader,z=x.fragmentShader;let Tt=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,Tt,xt),ee=Tt.id,k=xt.id}let j=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ue=B.isInstancedMesh===!0,ie=B.isBatchedMesh===!0,he=!!x.map,Me=!!x.matcap,ge=!!$,Ne=!!x.aoMap,ze=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,Ce=!!x.normalMap,rt=!!x.displacementMap,mt=!!x.emissiveMap,Je=!!x.metalnessMap,Ee=!!x.roughnessMap,U=x.anisotropy>0,Pe=x.clearcoat>0,_e=x.dispersion>0,C=x.retroreflectivity>0,w=x.iridescence>0,G=x.sheen>0,K=x.transmission>0,re=U&&!!x.anisotropyMap,de=Pe&&!!x.clearcoatMap,me=Pe&&!!x.clearcoatNormalMap,oe=Pe&&!!x.clearcoatRoughnessMap,ce=w&&!!x.iridescenceMap,ve=w&&!!x.iridescenceThicknessMap,Fe=G&&!!x.sheenColorMap,pe=G&&!!x.sheenRoughnessMap,be=!!x.specularMap,Oe=!!x.specularColorMap,$e=!!x.specularIntensityMap,Qe=K&&!!x.transmissionMap,q=K&&!!x.thicknessMap,xe=!!x.gradientMap,le=!!x.alphaMap,Se=x.alphaTest>0,Ae=!!x.alphaHash,fe=!!x.extensions,qe=jn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qe=i.toneMapping);let He={shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:z,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ie,batchingColor:ie&&B._colorsTexture!==null,instancing:ue,instancingColor:ue&&B.instanceColor!==null,instancingMorph:ue&&B.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:Me,envMap:ge,envMapMode:ge&&$.mapping,envMapCubeUVHeight:F,aoMap:Ne,lightMap:ze,bumpMap:we,normalMap:Ce,displacementMap:rt,emissiveMap:mt,normalMapObjectSpace:Ce&&x.normalMapType===Mp,normalMapTangentSpace:Ce&&x.normalMapType===el,packedNormalMap:Ce&&x.normalMapType===el&&eb(x.normalMap.format),metalnessMap:Je,roughnessMap:Ee,anisotropy:U,anisotropyMap:re,clearcoat:Pe,clearcoatMap:de,clearcoatNormalMap:me,clearcoatRoughnessMap:oe,dispersion:_e,retroreflection:C,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:ve,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:pe,specularMap:be,specularColorMap:Oe,specularIntensityMap:$e,transmission:K,transmissionMap:Qe,thicknessMap:q,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Se,alphaHash:Ae,combine:x.combine,mapUv:he&&g(x.map.channel),aoMapUv:Ne&&g(x.aoMap.channel),lightMapUv:ze&&g(x.lightMap.channel),bumpMapUv:we&&g(x.bumpMap.channel),normalMapUv:Ce&&g(x.normalMap.channel),displacementMapUv:rt&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:Je&&g(x.metalnessMap.channel),roughnessMapUv:Ee&&g(x.roughnessMap.channel),anisotropyMapUv:re&&g(x.anisotropyMap.channel),clearcoatMapUv:de&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Oe&&g(x.specularColorMap.channel),specularIntensityMapUv:$e&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:q&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ce||U),vertexNormals:!!Y.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(he||le),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Y.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:J,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let T=p[x.type],R;if(T){let L=yi[T];R=Dp.clone(L.uniforms)}else R=x.uniforms;return R}function _(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new jv(i,T,x,r),c.push(R),u.set(T,R)),R}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function nb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ib(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,v,m,d){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},i[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=g,y.materialVariant=a(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=d),e++,y}function l(f,p,g,v,m,d,y){y.reversedDepth===!0&&(m=-m);let M=o(f,p,g,v,m,d);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(f,p,g,v,m,d){let y=o(f,p,g,v,m,d);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,p){t.length>1&&t.sort(f||ib),n.length>1&&n.sort(p||tm),r.length>1&&r.sort(p||tm)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function rb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new nm,i.set(n,[a])):r>=s.length?(a=new nm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ob=0;function cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lb(i){let e=new sb,t=ab(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new Xe,a=new Xe;function o(c){let u=0,h=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,M=0,_=0,S=0,b=0,E=0,x=0,T=0,R=0;c.sort(cb);for(let B=0,H=c.length;B<H;B++){let I=c[B],Y=I.color,P=I.intensity,O=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===lr?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=Y.r*P,h+=Y.g*P,f+=Y.b*P;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],P);R++}else if(I.isSunLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let N=I.shadow,X=t.get(I);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=$;let W=N.getViewportCount();for(let J=0;J<W;J++)n.sunShadowMatrix[v+J]=N.getMatrix(J),n.sunShadowCascade[v+J]=N._cascadeData[J];v+=W,g++}n.sun[p]=F,p++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let N=I.shadow,X=t.get(I);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=F,m++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Y).multiplyScalar(P),F.distance=O,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[y]=F;let N=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,N.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=N.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=$,E++}y++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(Y).multiplyScalar(P),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=F,M++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let N=I.shadow,X=t.get(I);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=$,n.pointShadowMatrix[d]=I.shadow.matrix,b++}n.point[d]=F,d++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(P),F.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[_]=F,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==M||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=d,L.spotLength=y,L.rectAreaLength=M,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=x,L.numLightProbes=R,n.version=ob++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=0,d=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),f++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(_.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function im(i){let e=new lb(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ub(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new im(i),e.set(r,[o])):s>=a.length?(o=new im(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
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
}`,db=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],pb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],rm=new Xe,Ha=new D,mh=new D;function mb(i,e,t){let n=new Rs,r=new st,s=new st,a=new wt,o=new tc,l=new nc,c={},u=t.maxTextureSize,h={[bn]:dn,[dn]:bn,[Qt]:Qt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:hb,fragmentShader:fb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new jt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let d=this.type;this.render=function(b,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===dc&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=d!==this.type;H&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=b.length;I<Y;I++){let P=b[I],O=P.shadow;if(O===void 0){Ke("WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let $=O.getFrameExtents();r.multiply($),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,O.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ds){if(P.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new xn(r.x,r.y,{format:lr,type:ti,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=P.name+".shadowMap",O.map.depthTexture=new rr(r.x,r.y,Rn),O.map.depthTexture.name=P.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else P.isPointLight?(O.map=new sl(r.x),O.map.depthTexture=new Qo(r.x,ei)):(O.map=new xn(r.x,r.y),O.map.depthTexture=new rr(r.x,r.y,ei)),O.map.depthTexture.name=P.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Ia?(O.map.depthTexture.compareFunction=F?nl:tl,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);let N=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();P.isPointLight!==!0&&O.updateMatrices(P,x);for(let X=0;X<N;X++){let W=O.getCamera(X);if(P.isPointLight){let J=O.camera,V=O.matrix,z=P.distance||J.far;z!==J.far&&(J.far=z,J.updateProjectionMatrix()),Ha.setFromMatrixPosition(P.matrixWorld),J.position.copy(Ha),mh.copy(J.position),mh.add(db[X]),J.up.copy(pb[X]),J.lookAt(mh),J.updateMatrixWorld(),V.makeTranslation(-Ha.x,-Ha.y,-Ha.z),rm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(rm,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,X),i.clear();else{X===0&&(i.setRenderTarget(O.map),i.clear());let J=O.getViewport(X);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),B.viewport(a)}n=O.getFrustum(X),_(E,x,W,P,this.type)}O.isPointLightShadow!==!0&&this.type===Ds&&y(O,x),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,L)};function y(b,E){let x=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(r.x,r.y,{format:lr,type:ti}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,x,f,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,x,p,v,null)}function M(b,E,x,T){let R=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let B=R.uuid,H=E.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let Y=I[H];Y===void 0&&(Y=R.clone(),I[H]=Y,E.addEventListener("dispose",S)),R=Y}if(R.visible=E.visible,R.wireframe=E.wireframe,T===Ds?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=i.properties.get(R);B.light=x}return R}function _(b,E,x,T,R){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ds)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let H=e.update(b),I=b.material;if(Array.isArray(I)){let Y=H.groups;for(let P=0,O=Y.length;P<O;P++){let $=Y[P],F=I[$.materialIndex];if(F&&F.visible){let N=M(b,F,T,R);b.onBeforeShadow(i,b,E,x,H,N,$),i.renderBufferDirect(x,null,H,N,b,$),b.onAfterShadow(i,b,E,x,H,N,$)}}}else if(I.visible){let Y=M(b,I,T,R);b.onBeforeShadow(i,b,E,x,H,Y,null),i.renderBufferDirect(x,null,H,Y,b,null),b.onAfterShadow(i,b,E,x,H,Y,null)}}let B=b.children;for(let H=0,I=B.length;H<I;H++)_(B[H],E,x,T,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function gb(i,e){function t(){let q=!1,xe=new wt,le=null,Se=new wt(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!q&&(i.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){q=Ae},setClear:function(Ae,fe,qe,He,Tt){Tt===!0&&(Ae*=He,fe*=He,qe*=He),xe.set(Ae,fe,qe,He),Se.equals(xe)===!1&&(i.clearColor(Ae,fe,qe,He),Se.copy(xe))},reset:function(){q=!1,le=null,Se.set(-1,0,0,0)}}}function n(){let q=!1,xe=!1,le=null,Se=null,Ae=null;return{setReversed:function(fe){if(xe!==fe){let qe=e.get("EXT_clip_control");fe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),xe=fe;let He=Ae;Ae=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(fe){fe?j(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(fe){le!==fe&&!q&&(i.depthMask(fe),le=fe)},setFunc:function(fe){if(xe&&(fe=Np[fe]),Se!==fe){switch(fe){case Ho:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=fe}},setLocked:function(fe){q=fe},setClear:function(fe){Ae!==fe&&(Ae=fe,xe&&(fe=1-fe),i.clearDepth(fe))},reset:function(){q=!1,le=null,Se=null,Ae=null,xe=!1}}}function r(){let q=!1,xe=null,le=null,Se=null,Ae=null,fe=null,qe=null,He=null,Tt=null;return{setTest:function(xt){q||(xt?j(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(xt){xe!==xt&&!q&&(i.stencilMask(xt),xe=xt)},setFunc:function(xt,mn,Ln){(le!==xt||Se!==mn||Ae!==Ln)&&(i.stencilFunc(xt,mn,Ln),le=xt,Se=mn,Ae=Ln)},setOp:function(xt,mn,Ln){(fe!==xt||qe!==mn||He!==Ln)&&(i.stencilOp(xt,mn,Ln),fe=xt,qe=mn,He=Ln)},setLocked:function(xt){q=xt},setClear:function(xt){Tt!==xt&&(i.clearStencil(xt),Tt=xt)},reset:function(){q=!1,xe=null,le=null,Se=null,Ae=null,fe=null,qe=null,He=null,Tt=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],v=null,m=!1,d=null,y=null,M=null,_=null,S=null,b=null,E=null,x=new je(0,0,0),T=0,R=!1,L=null,B=null,H=null,I=null,Y=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=$>=1):F.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=$>=2);let N=null,X={},W=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),V=new wt().fromArray(W),z=new wt().fromArray(J);function ee(q,xe,le,Se){let Ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(q,fe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<le;qe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(xe+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return fe}let k={};k[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(gs),we(!1),Ce(Iu),j(i.CULL_FACE),Ne(gi);function j(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function ae(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function ue(q,xe){return f[q]!==xe?(i.bindFramebuffer(q,xe),f[q]=xe,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ie(q,xe){let le=g,Se=!1;if(q){le=p.get(xe),le===void 0&&(le=[],p.set(xe,le));let Ae=q.textures;if(le.length!==Ae.length||le[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,qe=Ae.length;fe<qe;fe++)le[fe]=i.COLOR_ATTACHMENT0+fe;le.length=Ae.length,Se=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Se=!0);Se&&i.drawBuffers(le)}function he(q){return v!==q?(i.useProgram(q),v=q,!0):!1}let Me={[Rr]:i.FUNC_ADD,[ep]:i.FUNC_SUBTRACT,[tp]:i.FUNC_REVERSE_SUBTRACT};Me[np]=i.MIN,Me[ip]=i.MAX;let ge={[rp]:i.ZERO,[sp]:i.ONE,[ap]:i.SRC_COLOR,[Uu]:i.SRC_ALPHA,[fp]:i.SRC_ALPHA_SATURATE,[up]:i.DST_COLOR,[cp]:i.DST_ALPHA,[op]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[hp]:i.ONE_MINUS_DST_COLOR,[lp]:i.ONE_MINUS_DST_ALPHA,[dp]:i.CONSTANT_COLOR,[pp]:i.ONE_MINUS_CONSTANT_COLOR,[mp]:i.CONSTANT_ALPHA,[gp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ne(q,xe,le,Se,Ae,fe,qe,He,Tt,xt){if(q===gi){m===!0&&(ae(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),q!==Qd){if(q!==d||xt!==R){if((y!==Rr||S!==Rr)&&(i.blendEquation(i.FUNC_ADD),y=Rr,S=Rr),xt)switch(q){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",q);break}else switch(q){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",q);break}M=null,_=null,b=null,E=null,x.set(0,0,0),T=0,d=q,R=xt}return}Ae=Ae||xe,fe=fe||le,qe=qe||Se,(xe!==y||Ae!==S)&&(i.blendEquationSeparate(Me[xe],Me[Ae]),y=xe,S=Ae),(le!==M||Se!==_||fe!==b||qe!==E)&&(i.blendFuncSeparate(ge[le],ge[Se],ge[fe],ge[qe]),M=le,_=Se,b=fe,E=qe),(He.equals(x)===!1||Tt!==T)&&(i.blendColor(He.r,He.g,He.b,Tt),x.copy(He),T=Tt),d=q,R=!1}function ze(q,xe){q.side===Qt?ae(i.CULL_FACE):j(i.CULL_FACE);let le=q.side===dn;xe&&(le=!le),we(le),q.blending===Fs&&q.transparent===!1?Ne(gi):Ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let Se=q.stencilWrite;o.setTest(Se),Se&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),mt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(q){L!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),L=q)}function Ce(q){q!==Jd?(j(i.CULL_FACE),q!==B&&(q===Iu?i.cullFace(i.BACK):q===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),B=q}function rt(q){q!==H&&(O&&i.lineWidth(q),H=q)}function mt(q,xe,le){q?(j(i.POLYGON_OFFSET_FILL),(I!==xe||Y!==le)&&(I=xe,Y=le,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,le))):ae(i.POLYGON_OFFSET_FILL)}function Je(q){q?j(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Ee(q){q===void 0&&(q=i.TEXTURE0+P-1),N!==q&&(i.activeTexture(q),N=q)}function U(q,xe,le){le===void 0&&(N===null?le=i.TEXTURE0+P-1:le=N);let Se=X[le];Se===void 0&&(Se={type:void 0,texture:void 0},X[le]=Se),(Se.type!==q||Se.texture!==xe)&&(N!==le&&(i.activeTexture(le),N=le),i.bindTexture(q,xe||k[q]),Se.type=q,Se.texture=xe)}function Pe(){let q=X[N];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function w(){try{i.texSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function G(){try{i.texSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function de(){try{i.texStorage2D(...arguments)}catch(q){et("WebGLState:",q)}}function me(){try{i.texStorage3D(...arguments)}catch(q){et("WebGLState:",q)}}function oe(){try{i.texImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function ce(){try{i.texImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function ve(q){return h[q]!==void 0?h[q]:i.getParameter(q)}function Fe(q,xe){h[q]!==xe&&(i.pixelStorei(q,xe),h[q]=xe)}function pe(q){V.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),V.copy(q))}function be(q){z.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),z.copy(q))}function Oe(q,xe){let le=c.get(xe);le===void 0&&(le=new WeakMap,c.set(xe,le));let Se=le.get(q);Se===void 0&&(Se=i.getUniformBlockIndex(xe,q.name),le.set(q,Se))}function $e(q,xe){let Se=c.get(xe).get(q);l.get(xe)!==Se&&(i.uniformBlockBinding(xe,Se,q.__bindingPointIndex),l.set(xe,Se))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},N=null,X={},f={},p=new WeakMap,g=[],v=null,m=!1,d=null,y=null,M=null,_=null,S=null,b=null,E=null,x=new je(0,0,0),T=0,R=!1,L=null,B=null,H=null,I=null,Y=null,V.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ae,bindFramebuffer:ue,drawBuffers:ie,useProgram:he,setBlending:Ne,setMaterial:ze,setFlipSided:we,setCullFace:Ce,setLineWidth:rt,setPolygonOffset:mt,setScissorTest:Je,activeTexture:Ee,bindTexture:U,unbindTexture:Pe,compressedTexImage2D:_e,compressedTexImage3D:C,texImage2D:oe,texImage3D:ce,pixelStorei:Fe,getParameter:ve,updateUBOMapping:Oe,uniformBlockBinding:$e,texStorage2D:de,texStorage3D:me,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:K,compressedTexSubImage3D:re,scissor:pe,viewport:be,reset:Qe}}function xb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return g?new OffscreenCanvas(C,w):_s("canvas")}function m(C,w,G){let K=1,re=_e(C);if((re.width>G||re.height>G)&&(K=G/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(K*re.width),me=Math.floor(K*re.height);f===void 0&&(f=v(de,me));let oe=w?v(de,me):f;return oe.width=de,oe.height=me,oe.getContext("2d").drawImage(C,0,0,de,me),Ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+me+")."),oe}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function d(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,w,G,K,re,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;K&&(me=e.get("EXT_texture_norm16"),me||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8),G===i.UNSIGNED_SHORT&&me&&(oe=me.R16_EXT),G===i.SHORT&&me&&(oe=me.R16_SNORM_EXT)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),w===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8),G===i.UNSIGNED_SHORT&&me&&(oe=me.RG16_EXT),G===i.SHORT&&me&&(oe=me.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(oe=me.RGB16_EXT),G===i.SHORT&&me&&(oe=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),w===i.RGBA){let ce=de?ha:ht.getTransfer(re);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=ce===bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(oe=me.RGBA16_EXT),G===i.SHORT&&me&&(oe=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(C,w){let G;return C?w===null||w===ei||w===ks?G=i.DEPTH24_STENCIL8:w===Rn?G=i.DEPTH32F_STENCIL8:w===Bs&&(G=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===ks?G=i.DEPTH_COMPONENT24:w===Rn?G=i.DEPTH_COMPONENT32F:w===Bs&&(G=i.DEPTH_COMPONENT16),G}function b(C,w){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){let w=C.target;w.removeEventListener("dispose",E),T(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function x(C){let w=C.target;w.removeEventListener("dispose",x),L(w)}function T(C){let w=n.get(C);if(w.__webglInit===void 0)return;let G=C.source,K=p.get(G);if(K){let re=K[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(C),Object.keys(K).length===0&&p.delete(G)}n.remove(C)}function R(C){let w=n.get(C);i.deleteTexture(w.__webglTexture);let G=C.source,K=p.get(G);delete K[w.__cacheKey],a.memory.textures--}function L(C){let w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let re=0;re<w.__webglFramebuffer[K].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[K][re]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=C.textures;for(let K=0,re=G.length;K<re;K++){let de=n.get(G[K]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(G[K])}n.remove(C)}let B=0;function H(){B=0}function I(){return B}function Y(C){B=C}function P(){let C=B;return C>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,C}function O(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function $(C,w){let G=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let K=C.image;if(K===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,C,w);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function F(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ae(G,C,w);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function N(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ae(G,C,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function X(C,w){let G=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){ue(G,C,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let W={[nr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},J={[zt]:i.NEAREST,[gc]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},V={[wp]:i.NEVER,[Cp]:i.ALWAYS,[Ep]:i.LESS,[tl]:i.LEQUAL,[Tp]:i.EQUAL,[nl]:i.GEQUAL,[Ap]:i.GREATER,[Rp]:i.NOTEQUAL};function z(C,w){if(w.type===Rn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ht||w.magFilter===Os||w.magFilter===Ir||w.magFilter===Qn||w.minFilter===Ht||w.minFilter===Os||w.minFilter===Ir||w.minFilter===Qn)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zt||w.minFilter!==Ir&&w.minFilter!==Qn||w.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ee(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));let K=w.source,re=p.get(K);re===void 0&&(re={},p.set(K,re));let de=O(w);if(de!==C.__cacheKey){re[de]===void 0&&(re[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[de].usedTimes++;let me=re[C.__cacheKey];me!==void 0&&(re[C.__cacheKey].usedTimes--,me.usedTimes===0&&R(w)),C.__cacheKey=de,C.__webglTexture=re[de].texture}return G}function k(C,w,G){return Math.floor(Math.floor(C/G)/w)}function j(C,w,G,K){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,K,w.data);else{de.sort((Fe,pe)=>Fe.start-pe.start);let me=0;for(let Fe=1;Fe<de.length;Fe++){let pe=de[me],be=de[Fe],Oe=pe.start+pe.count,$e=k(be.start,w.width,4),Qe=k(pe.start,w.width,4);be.start<=Oe+1&&$e===Qe&&k(be.start+be.count-1,w.width,4)===$e?pe.count=Math.max(pe.count,be.start+be.count-pe.start):(++me,de[me]=be)}de.length=me+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Fe=0,pe=de.length;Fe<pe;Fe++){let be=de[Fe],Oe=Math.floor(be.start/4),$e=Math.ceil(be.count/4),Qe=Oe%w.width,q=Math.floor(Oe/w.width),xe=$e,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Qe,q,xe,le,G,K,w.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ae(C,w,G){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);let re=ee(C,w),de=w.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+G);let me=n.get(de);if(de.version!==me.__version||re===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let le=ht.getPrimaries(ht.workingColorSpace),Se=w.colorSpace===ni?null:ht.getPrimaries(w.colorSpace),Ae=w.colorSpace===ni||le===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ce=m(w.image,!1,r.maxTextureSize);ce=Pe(w,ce);let ve=s.convert(w.format,w.colorSpace),Fe=s.convert(w.type),pe=_(w.internalFormat,ve,Fe,w.normalized,w.colorSpace,w.isVideoTexture);z(K,w);let be,Oe=w.mipmaps,$e=w.isVideoTexture!==!0,Qe=me.__version===void 0||re===!0,q=de.dataReady,xe=b(w,ce);if(w.isDepthTexture)pe=S(w.format===cr,w.type),Qe&&($e?t.texStorage2D(i.TEXTURE_2D,1,pe,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,pe,ce.width,ce.height,0,ve,Fe,null));else if(w.isDataTexture)if(Oe.length>0){$e&&Qe&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Oe[0].width,Oe[0].height);for(let le=0,Se=Oe.length;le<Se;le++)be=Oe[le],$e?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,ve,Fe,be.data):t.texImage2D(i.TEXTURE_2D,le,pe,be.width,be.height,0,ve,Fe,be.data);w.generateMipmaps=!1}else $e?(Qe&&t.texStorage2D(i.TEXTURE_2D,xe,pe,ce.width,ce.height),q&&j(w,ce,ve,Fe)):t.texImage2D(i.TEXTURE_2D,0,pe,ce.width,ce.height,0,ve,Fe,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Oe[0].width,Oe[0].height,ce.depth);for(let le=0,Se=Oe.length;le<Se;le++)if(be=Oe[le],w.format!==Cn)if(ve!==null)if($e){if(q)if(w.layerUpdates.size>0){let Ae=rh(be.width,be.height,w.format,w.type);for(let fe of w.layerUpdates){let qe=be.data.subarray(fe*Ae/be.data.BYTES_PER_ELEMENT,(fe+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,fe,be.width,be.height,1,ve,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ce.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,pe,be.width,be.height,ce.depth,0,be.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ce.depth,ve,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,pe,be.width,be.height,ce.depth,0,ve,Fe,be.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{$e&&Qe&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Oe[0].width,Oe[0].height);for(let le=0,Se=Oe.length;le<Se;le++)be=Oe[le],w.format!==Cn?ve!==null?$e?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,le,pe,be.width,be.height,0,be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,ve,Fe,be.data):t.texImage2D(i.TEXTURE_2D,le,pe,be.width,be.height,0,ve,Fe,be.data)}else if(w.isDataArrayTexture)if($e){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,ce.width,ce.height,ce.depth),q)if(w.layerUpdates.size>0){let le=rh(ce.width,ce.height,w.format,w.type);for(let Se of w.layerUpdates){let Ae=ce.data.subarray(Se*le/ce.data.BYTES_PER_ELEMENT,(Se+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ce.width,ce.height,1,ve,Fe,Ae)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Fe,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ce.width,ce.height,ce.depth,0,ve,Fe,ce.data);else if(w.isData3DTexture)$e?(Qe&&t.texStorage3D(i.TEXTURE_3D,xe,pe,ce.width,ce.height,ce.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Fe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ce.width,ce.height,ce.depth,0,ve,Fe,ce.data);else if(w.isFramebufferTexture){if(Qe)if($e)t.texStorage2D(i.TEXTURE_2D,xe,pe,ce.width,ce.height);else{let le=ce.width,Se=ce.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,pe,le,Se,0,ve,Fe,null),le>>=1,Se>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ce.parentNode!==le){le.appendChild(ce),h.add(w),le.onpaint=Se=>{let Ae=Se.changedElements;for(let fe of h)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ae=i.RGBA,fe=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,qe,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if($e&&Qe){let le=_e(Oe[0]);t.texStorage2D(i.TEXTURE_2D,xe,pe,le.width,le.height)}for(let le=0,Se=Oe.length;le<Se;le++)be=Oe[le],$e?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ve,Fe,be):t.texImage2D(i.TEXTURE_2D,le,pe,ve,Fe,be);w.generateMipmaps=!1}else if($e){if(Qe){let le=_e(ce);t.texStorage2D(i.TEXTURE_2D,xe,pe,le.width,le.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Fe,ce)}else t.texImage2D(i.TEXTURE_2D,0,pe,ve,Fe,ce);d(w)&&y(K),me.__version=de.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ue(C,w,G){if(w.image.length!==6)return;let K=ee(C,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let de=n.get(re);if(re.version!==de.__version||K===!0){t.activeTexture(i.TEXTURE0+G);let me=ht.getPrimaries(ht.workingColorSpace),oe=w.colorSpace===ni?null:ht.getPrimaries(w.colorSpace),ce=w.colorSpace===ni||me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ve=w.isCompressedTexture||w.image[0].isCompressedTexture,Fe=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let fe=0;fe<6;fe++)!ve&&!Fe?pe[fe]=m(w.image[fe],!0,r.maxCubemapSize):pe[fe]=Fe?w.image[fe].image:w.image[fe],pe[fe]=Pe(w,pe[fe]);let be=pe[0],Oe=s.convert(w.format,w.colorSpace),$e=s.convert(w.type),Qe=_(w.internalFormat,Oe,$e,w.normalized,w.colorSpace),q=w.isVideoTexture!==!0,xe=de.__version===void 0||K===!0,le=re.dataReady,Se=b(w,be);z(i.TEXTURE_CUBE_MAP,w);let Ae;if(ve){q&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,be.width,be.height);for(let fe=0;fe<6;fe++){Ae=pe[fe].mipmaps;for(let qe=0;qe<Ae.length;qe++){let He=Ae[qe];w.format!==Cn?Oe!==null?q?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,He.width,He.height,Oe,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Qe,He.width,He.height,0,He.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,He.width,He.height,Oe,$e,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Qe,He.width,He.height,0,Oe,$e,He.data)}}}else{if(Ae=w.mipmaps,q&&xe){Ae.length>0&&Se++;let fe=_e(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Fe){q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,pe[fe].width,pe[fe].height,Oe,$e,pe[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,pe[fe].width,pe[fe].height,0,Oe,$e,pe[fe].data);for(let qe=0;qe<Ae.length;qe++){let Tt=Ae[qe].image[fe].image;q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,Tt.width,Tt.height,Oe,$e,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Qe,Tt.width,Tt.height,0,Oe,$e,Tt.data)}}else{q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,$e,pe[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Oe,$e,pe[fe]);for(let qe=0;qe<Ae.length;qe++){let He=Ae[qe];q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,Oe,$e,He.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Qe,Oe,$e,He.image[fe])}}}d(w)&&y(i.TEXTURE_CUBE_MAP),de.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ie(C,w,G,K,re,de){let me=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),ce=_(G.internalFormat,me,oe,G.normalized,G.colorSpace),ve=n.get(w),Fe=n.get(G);if(Fe.__renderTarget=w,!ve.__hasExternalTextures){let pe=Math.max(1,w.width>>de),be=Math.max(1,w.height>>de);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,de,ce,pe,be,w.depth,0,me,oe,null):t.texImage2D(re,de,ce,pe,be,0,me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ee(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,re,Fe.__webglTexture,0,Je(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,re,Fe.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){let K=w.depthTexture,re=K&&K.isDepthTexture?K.type:null,de=S(w.stencilBuffer,re),me=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(w),de,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(w),de,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{let K=w.textures;for(let re=0;re<K.length;re++){let de=K[re],me=s.convert(de.format,de.colorSpace),oe=s.convert(de.type),ce=_(de.internalFormat,me,oe,de.normalized,de.colorSpace);Ee(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(w),ce,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(w),ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(C,w,G){let K=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);if(re.__renderTarget=w,(!re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K){if(re.__webglInit===void 0&&(re.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),z(i.TEXTURE_CUBE_MAP,w.depthTexture);let ve=s.convert(w.depthTexture.format),Fe=s.convert(w.depthTexture.type),pe;w.depthTexture.format===hi?pe=i.DEPTH_COMPONENT24:w.depthTexture.format===cr&&(pe=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,w.width,w.height,0,ve,Fe,null)}}else $(w.depthTexture,0);let de=re.__webglTexture,me=Je(w),oe=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ce=w.depthTexture.format===cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===hi)Ee(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,de,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,de,0);else if(w.depthTexture.format===cr)Ee(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,de,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(C){let w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=K}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let K=0;K<6;K++)Me(w.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?Me(w.__webglFramebuffer[0],C,0):Me(w.__webglFramebuffer,C,0)}else if(G){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),he(w.__webglDepthbuffer[K],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),he(w.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(C,w,G){let K=n.get(C);w!==void 0&&ie(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ge(C)}function ze(C){let w=C.texture,G=n.get(C),K=n.get(w);C.addEventListener("dispose",x);let re=C.textures,de=C.isWebGLCubeRenderTarget===!0,me=re.length>1;if(me||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)G.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let oe=0,ce=re.length;oe<ce;oe++){let ve=n.get(re[oe]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ee(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let ce=re[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let ve=s.convert(ce.format,ce.colorSpace),Fe=s.convert(ce.type),pe=_(ce.internalFormat,ve,Fe,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),be=Je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),he(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),z(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)ie(G.__webglFramebuffer[oe][ce],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ie(G.__webglFramebuffer[oe],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);d(w)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let oe=0,ce=re.length;oe<ce;oe++){let ve=re[oe],Fe=n.get(ve),pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Fe.__webglTexture),z(pe,ve),ie(G.__webglFramebuffer,C,ve,i.COLOR_ATTACHMENT0+oe,pe,0),d(ve)&&y(pe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),z(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)ie(G.__webglFramebuffer[ce],C,w,i.COLOR_ATTACHMENT0,oe,ce);else ie(G.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,oe,0);d(w)&&y(oe),t.unbindTexture()}C.depthBuffer&&ge(C)}function we(C){let w=C.textures;for(let G=0,K=w.length;G<K;G++){let re=w[G];if(d(re)){let de=M(C),me=n.get(re).__webglTexture;t.bindTexture(de,me),y(de),t.unbindTexture()}}}let Ce=[],rt=[];function mt(C){if(C.samples>0){if(Ee(C)===!1){let w=C.textures,G=C.width,K=C.height,re=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),oe=w.length>1;if(oe)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ce=C.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Fe=n.get(w[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,re,i.NEAREST),l===!0&&(Ce.length=0,rt.length=0,Ce.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ce.push(de),rt.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Fe=n.get(w[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Je(C){return Math.min(r.maxSamples,C.samples)}function Ee(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function U(C){let w=a.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Pe(C,w){let G=C.colorSpace,K=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==fn&&G!==ni&&(ht.getTransfer(G)===bt?(K!==Cn||re!==Mn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),w}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yb(i,e){function t(n,r=ni){let s,a=ht.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===xc)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===Ku)return i.RGB;if(n===Cn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Na||n===Ua||n===Da||n===Fa)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ec||n===Tc||n===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Oa||n===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Cc)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return s.COMPRESSED_R11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return s.COMPRESSED_RG11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Dc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Kc||n===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zc)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===jc||n===Ba||n===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:_b,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Sh,d={},y=t.getContextAttributes(),M=null,_=null,S=[],b=[],E=new st,x=null,T=null,R=new qt;R.viewport=new wt;let L=new qt;L.viewport=new wt;let B=[R,L],H=new hc,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=S[k];return j===void 0&&(j=new Ss,S[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=S[k];return j===void 0&&(j=new Ss,S[k]=j),j.getGripSpace()},this.getHand=function(k){let j=S[k];return j===void 0&&(j=new Ss,S[k]=j),j.getHandSpace()};function P(k){let j=b.indexOf(k.inputSource);if(j===-1)return;let ae=S[j];ae!==void 0&&(ae.update(k.inputSource,k.frame,c||a),ae.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",$);for(let k=0;k<S.length;k++){let j=b[k];j!==null&&(b[k]=null,S[k].disconnect(j))}I=null,Y=null,m.reset();for(let k in d)delete d[k];if(e.setRenderTarget(M),p=null,f=null,h=null,r=null,_=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),T!==null){let k=T.camera;k.fov=T.fov,k.zoom=T.zoom,k.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",O),r.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ue=null,ie=null;y.depth&&(ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?cr:hi,ue=y.stencil?ks:ei);let he={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new xn(f.textureWidth,f.textureHeight,{format:Cn,type:Mn,depthTexture:new rr(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new xn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(k){for(let j=0;j<k.removed.length;j++){let ae=k.removed[j],ue=b.indexOf(ae);ue>=0&&(b[ue]=null,S[ue].disconnect(ae))}for(let j=0;j<k.added.length;j++){let ae=k.added[j],ue=b.indexOf(ae);if(ue===-1){for(let he=0;he<S.length;he++)if(he>=b.length){b.push(ae),ue=he;break}else if(b[he]===null){b[he]=ae,ue=he;break}if(ue===-1)break}let ie=S[ue];ie&&ie.connect(ae)}}let F=new D,N=new D;function X(k,j,ae){F.setFromMatrixPosition(j.matrixWorld),N.setFromMatrixPosition(ae.matrixWorld);let ue=F.distanceTo(N),ie=j.projectionMatrix.elements,he=ae.projectionMatrix.elements,Me=ie[14]/(ie[10]-1),ge=ie[14]/(ie[10]+1),Ne=(ie[9]+1)/ie[5],ze=(ie[9]-1)/ie[5],we=(ie[8]-1)/ie[0],Ce=(he[8]+1)/he[0],rt=Me*we,mt=Me*Ce,Je=ue/(-we+Ce),Ee=Je*-we;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ee),k.translateZ(Je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ie[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let U=Me+Je,Pe=ge+Je,_e=rt-Ee,C=mt+(ue-Ee),w=Ne*ge/Pe*U,G=ze*ge/Pe*U;k.projectionMatrix.makePerspective(_e,C,w,G,U,Pe),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function W(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let j=k.near,ae=k.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),H.near=L.near=R.near=j,H.far=L.far=R.far=ae,(I!==H.near||Y!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,Y=H.far),H.layers.mask=k.layers.mask|6,R.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let ue=k.parent,ie=H.cameras;W(H,ue);for(let he=0;he<ie.length;he++)W(ie[he],ue);ie.length===2?X(H,R,L):H.projectionMatrix.copy(R.projectionMatrix),T===null&&k.isPerspectiveCamera&&(T={camera:k,fov:k.fov,zoom:k.zoom}),J(k,H,ue)};function J(k,j,ae){ae===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(ae.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=br*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(k){return d[k]};let V=null;function z(k,j){if(u=j.getViewerPose(c||a),g=j,u!==null){let ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;ae.length!==H.cameras.length&&(H.cameras.length=0,ue=!0);for(let ge=0;ge<ae.length;ge++){let Ne=ae[ge],ze=null;if(p!==null)ze=p.getViewport(Ne);else{let Ce=h.getViewSubImage(f,Ne);ze=Ce.viewport,ge===0&&(e.setRenderTargetTextures(_,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(_))}let we=B[ge];we===void 0&&(we=new qt,we.layers.enable(ge),we.viewport=new wt,B[ge]=we),we.matrix.fromArray(Ne.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ne.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ze.x,ze.y,ze.width,ze.height),ge===0&&(H.matrix.copy(we.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ue===!0&&H.cameras.push(we)}let ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let ge=h.getDepthInformation(ae[0]);ge&&ge.isValid&&ge.texture&&m.init(ge,r.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let ge=0;ge<ae.length;ge++){let Ne=ae[ge].camera;if(Ne){let ze=d[Ne];ze||(ze=new Sa,d[Ne]=ze);let we=h.getCameraImage(Ne);ze.sourceTexture=we}}}}for(let ae=0;ae<S.length;ae++){let ue=b[ae],ie=S[ae];ue!==null&&ie!==void 0&&ie.update(ue,j,c||a)}V&&V(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ee=new sm;ee.setAnimationLoop(z),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}},bb=new Xe,hm=new at;hm.set(-1,0,0,0,1,0,0,0,1);function Mb(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,th(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,M,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hm),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sb(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=r[_.id];b===void 0&&(m(_),b=u(_),r[_.id]=b,_.addEventListener("dispose",y));let E=S.program;n.updateUBOMapping(_,E);let x=e.render.frame;s[_.id]!==x&&(f(_),s[_.id]=x)}function u(_){let S=h();_.__bindingPointIndex=S;let b=i.createBuffer(),E=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let S=r[_.id],b=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=b.length;x<T;x++){let R=b[x];if(Array.isArray(R))for(let L=0,B=R.length;L<B;L++)p(R[L],x,L,E);else p(R,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,S,b,E){if(v(_,S,b,E)===!0){let x=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let B=T[L],H=d(B);g(B,_.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function v(_,S,b,E){let x=_.value,T=S+"_"+b;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let R=E[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(_){let S=_.uniforms,b=0,E=16;for(let T=0,R=S.length;T<R;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let B=0,H=L.length;B<H;B++){let I=L[B],Y=Array.isArray(I.value)?I.value:[I.value];for(let P=0,O=Y.length;P<O;P++){let $=Y[P],F=d($),N=b%E,X=N%F.boundary,W=N+X;b+=X,W!==0&&E-W<F.storage&&(b+=E-W),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=F.storage}}}let x=b%E;return x>0&&(b+=E-x),_.__size=b,_.__cache={},this}function d(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",_),S}function y(_){let S=_.target;S.removeEventListener("dispose",y);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(let _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}var wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Eb(){return xi===null&&(xi=new As(wb,16,16,lr,ti),xi.name="DFG_LUT",xi.minFilter=Ht,xi.magFilter=Ht,xi.wrapS=Vn,xi.wrapT=Vn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var al=class{constructor(e={}){let{canvas:t=Ip(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,m=new Set([Sc,Mc,bc]),d=new Set([Mn,ei,Bs,ks,yc,_c]),y=new Uint32Array(4),M=new Int32Array(4),_=new D,S=null,b=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,B=null,H=null,I=null,Y=null;this._outputColorSpace=Dt;let P=0,O=0,$=null,F=-1,N=null,X=new wt,W=new wt,J=null,V=new je(0),z=0,ee=t.width,k=t.height,j=1,ae=null,ue=null,ie=new wt(0,0,ee,k),he=new wt(0,0,ee,k),Me=!1,ge=new Rs,Ne=!1,ze=!1,we=new Xe,Ce=new D,rt=new wt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Ee(){return $===null?j:1}let U=n;function Pe(A,Z){return t.getContext(A,Z)}let _e,C,w,G,K,re,de,me,oe,ce,ve,Fe,pe,be,Oe,$e,Qe,q,xe,le,Se,Ae,fe;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",mn,!1),U===null){let Z="webgl2";if(U=Pe(Z,A),U===null)throw Pe(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(A){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),et("WebGLRenderer: "+A.message),A}function qe(){_e=new L_(U),_e.init(),Se=new yb(U,_e),C=new M_(U,_e,e,Se),w=new gb(U,_e),C.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),H=U.createFramebuffer(),I=U.createFramebuffer(),Y=U.createFramebuffer(),G=new D_(U),K=new nb,re=new xb(U,_e,w,K,C,Se,G),de=new P_(R),me=new O0(U),Ae=new v_(U,me),oe=new N_(U,me,G,Ae),ce=new O_(U,oe,me,Ae,G),q=new F_(U,C,re),Oe=new S_(K),ve=new tb(R,de,_e,C,Ae,Oe),Fe=new Mb(R,K),pe=new rb,be=new ub(_e),Qe=new __(R,de,w,ce,g,l),$e=new mb(R,ce,C),fe=new Sb(U,G,C,w),xe=new b_(U,_e,G),le=new U_(U,_e,G),G.programs=ve.programs,R.capabilities=C,R.extensions=_e,R.properties=K,R.renderLists=pe,R.shadowMap=$e,R.state=w,R.info=G}v!==Mn&&(T=new k_(v,t.width,t.height,o,r,s));let He=new wh(R,U);this.xr=He,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(ee,k,!1))},this.getSize=function(A){return A.set(ee,k)},this.setSize=function(A,Z,se=!0){if(He.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,k=Z,t.width=Math.floor(A*j),t.height=Math.floor(Z*j),se===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(ee*j,k*j).floor()},this.setDrawingBufferSize=function(A,Z,se){ee=A,k=Z,j=se,t.width=Math.floor(A*se),t.height=Math.floor(Z*se),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(v===Mn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,Z,se,te){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,Z,se,te),w.viewport(X.copy(ie).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,Z,se,te){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,Z,se,te),w.scissor(W.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){w.setScissorTest(Me=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,se=!0){let te=0;if(A){let ne=!1;if($!==null){let Le=$.texture.format;ne=m.has(Le)}if(ne){let Le=$.texture.type,De=d.has(Le),Ie=Qe.getClearColor(),Ge=Qe.getClearAlpha(),Ye=Ie.r,lt=Ie.g,dt=Ie.b;De?(y[0]=Ye,y[1]=lt,y[2]=dt,y[3]=Ge,U.clearBufferuiv(U.COLOR,0,y)):(M[0]=Ye,M[1]=lt,M[2]=dt,M[3]=Ge,U.clearBufferiv(U.COLOR,0,M))}else te|=U.COLOR_BUFFER_BIT}Z&&(te|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&U.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),Qe.dispose(),pe.dispose(),be.dispose(),K.dispose(),de.dispose(),ce.dispose(),Ae.dispose(),fe.dispose(),ve.dispose(),He.dispose(),He.removeEventListener("sessionstart",ye),He.removeEventListener("sessionend",Q),Ve.stop()};function Tt(A){A.preventDefault(),fa("WebGLRenderer: Context Lost."),L=!0}function xt(){fa("WebGLRenderer: Context Restored."),L=!1;let A=G.autoReset,Z=$e.enabled,se=$e.autoUpdate,te=$e.needsUpdate,ne=$e.type;qe(),G.autoReset=A,$e.enabled=Z,$e.autoUpdate=se,$e.needsUpdate=te,$e.type=ne}function mn(A){et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ln(A){let Z=A.target;Z.removeEventListener("dispose",Ln),_l(Z)}function _l(A){vl(A),K.remove(A)}function vl(A){let Z=K.get(A).programs;Z!==void 0&&(Z.forEach(function(se){ve.releaseProgram(se)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,se,te,ne,Le){Z===null&&(Z=mt);let De=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ie=Un(A,Z,se,te,ne);w.setMaterial(te,De);let Ge=se.index,Ye=1;if(te.wireframe===!0){if(Ge=oe.getWireframeAttribute(se),Ge===void 0)return;Ye=2}let lt=se.drawRange,dt=se.attributes.position,We=lt.start*Ye,vt=(lt.start+lt.count)*Ye;Le!==null&&(We=Math.max(We,Le.start*Ye),vt=Math.min(vt,(Le.start+Le.count)*Ye)),Ge!==null?(We=Math.max(We,0),vt=Math.min(vt,Ge.count)):dt!=null&&(We=Math.max(We,0),vt=Math.min(vt,dt.count));let Wt=vt-We;if(Wt<0||Wt===1/0)return;Ae.setup(ne,te,Ie,se,Ge);let Nt,It=xe;if(Ge!==null&&(Nt=me.get(Ge),It=le,It.setIndex(Nt)),ne.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*Ee()),It.setMode(U.LINES)):It.setMode(U.TRIANGLES);else if(ne.isLine){let en=te.linewidth;en===void 0&&(en=1),w.setLineWidth(en*Ee()),ne.isLineSegments?It.setMode(U.LINES):ne.isLineLoop?It.setMode(U.LINE_LOOP):It.setMode(U.LINE_STRIP)}else ne.isPoints?It.setMode(U.POINTS):ne.isSprite&&It.setMode(U.TRIANGLES);if(ne.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let en=ne._multiDrawStarts,Ue=ne._multiDrawCounts,on=ne._multiDrawCount,gt=Ge?me.get(Ge).bytesPerElement:1,Dn=K.get(te).currentProgram.getUniforms();for(let si=0;si<on;si++)Dn.setValue(U,"_gl_DrawID",si),It.render(en[si]/gt,Ue[si])}else if(ne.isInstancedMesh)It.renderInstances(We,Wt,ne.count);else if(se.isInstancedBufferGeometry){let en=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ue=Math.min(se.instanceCount,en);It.renderInstances(We,Wt,Ue)}else It.render(We,Wt)};function Ja(A,Z,se,te){B!==null&&A.isNodeMaterial&&B.setObject(te,A),Ne===!0&&Oe.setState(A,se,!1),A.transparent===!0&&A.side===Qt&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,Sn(A,Z,te),A.side=bn,A.needsUpdate=!0,Sn(A,Z,te),A.side=Qt):Sn(A,Z,te)}this.compile=function(A,Z,se=null){se===null&&(se=A),B!==null&&B.renderStart(A,Z,se),b=be.get(se),b.init(Z),x.push(b),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),A!==se&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ze=this.localClippingEnabled,Ne=Oe.init(this.clippingPlanes,ze),Ne===!0&&Oe.setGlobalState(this.clippingPlanes,Z),B!==null&&$e.render(b.state.shadowsArray,se,Z);let te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Le=ne.material;if(Le)if(Array.isArray(Le))for(let De=0;De<Le.length;De++){let Ie=Le[De];Ja(Ie,se,Z,ne),te.add(Ie)}else Ja(Le,se,Z,ne),te.add(Le)}),b=x.pop(),B!==null&&B.renderEnd(),te},this.compileAsync=function(A,Z,se=null){let te=this.compile(A,Z,se);return new Promise(ne=>{function Le(){if(te.forEach(function(De){let Ge=K.get(De).currentProgram;(Ge===void 0||Ge.isReady())&&te.delete(De)}),te.size===0){ne(A);return}setTimeout(Le,10)}_e.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let hr=null;function bl(A){hr&&hr(A)}function ye(){Ve.stop()}function Q(){Ve.start()}let Ve=new sm;Ve.setAnimationLoop(bl),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){hr=A,He.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},He.addEventListener("sessionstart",ye),He.addEventListener("sessionend",Q),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(A,Z);let se=He.enabled===!0&&He.isPresenting===!0,te=T!==null&&($===null||se)&&T.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(Z),Z=He.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,Z,$),b=be.get(A,x.length),b.init(Z),b.state.textureUnits=re.getTextureUnits(),x.push(b),we.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ge.setFromProjectionMatrix(we,$n,Z.reversedDepth),ze=this.localClippingEnabled,Ne=Oe.init(this.clippingPlanes,ze),S=pe.get(A,E.length),S.init(),E.push(S),He.enabled===!0&&He.isPresenting===!0){let De=R.xr.getDepthSensingMesh();De!==null&&nt(De,Z,-1/0,R.sortObjects)}nt(A,Z,0,R.sortObjects),S.finish(),B!==null&&B.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(ae,ue),Je=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Je&&Qe.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&Oe.beginShadows();let ne=b.state.shadowsArray;if($e.render(ne,A,Z),Ne===!0&&Oe.endShadows(),(te&&T.hasRenderPass())===!1){let De=S.opaque,Ie=S.transmissive;if(b.setupLights(),Z.isArrayCamera){let Ge=Z.cameras;if(Ie.length>0)for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let dt=Ge[Ye];ot(De,Ie,A,dt)}Je&&Qe.render(A);for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let dt=Ge[Ye];it(S,A,dt,dt.viewport)}}else Ie.length>0&&ot(De,Ie,A,Z),Je&&Qe.render(A),it(S,A,Z)}$!==null&&O===0&&(re.updateMultisampleRenderTarget($),re.updateRenderTargetMipmap($)),te&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,Z),Ae.resetDefaultState(),F=-1,N=null,x.pop(),x.length>0?(b=x[x.length-1],re.setTextureUnits(b.state.textureUnits),Ne===!0&&Oe.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,B!==null&&B.renderEnd()};function nt(A,Z,se,te){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ge)){te&&rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);let De=ce.update(A),Ie=A.material;Ie.visible&&S.push(A,De,Ie,se,rt.z,null,Z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ge))){let De=ce.update(A),Ie=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),rt.copy(De.boundingSphere.center)),rt.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){let Ge=De.groups;for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let dt=Ge[Ye],We=Ie[dt.materialIndex];We&&We.visible&&S.push(A,De,We,se,rt.z,dt,Z)}}else Ie.visible&&S.push(A,De,Ie,se,rt.z,null,Z)}}let Le=A.children;for(let De=0,Ie=Le.length;De<Ie;De++)nt(Le[De],Z,se,te)}function it(A,Z,se,te){let{opaque:ne,transmissive:Le,transparent:De}=A;b.setupLightsView(se),Ne===!0&&Oe.setGlobalState(R.clippingPlanes,se),te&&w.viewport(X.copy(te)),ne.length>0&&Mt(ne,Z,se),Le.length>0&&Mt(Le,Z,se),De.length>0&&Mt(De,Z,se),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function ot(A,Z,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[te.id]===void 0){let We=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[te.id]=new xn(1,1,{generateMipmaps:!0,type:We?ti:Mn,minFilter:Qn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Le=b.state.transmissionRenderTarget[te.id],De=te.viewport||X;Le.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);let Ie=R.getRenderTarget(),Ge=R.getActiveCubeFace(),Ye=R.getActiveMipmapLevel();R.setRenderTarget(Le),R.getClearColor(V),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear(),Je&&Qe.render(se);let lt=R.toneMapping;R.toneMapping=jn;let dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),b.setupLightsView(te),Ne===!0&&Oe.setGlobalState(R.clippingPlanes,te),Mt(A,se,te),re.updateMultisampleRenderTarget(Le),re.updateRenderTargetMipmap(Le),_e.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let vt=0,Wt=Z.length;vt<Wt;vt++){let Nt=Z[vt],{object:It,geometry:en,material:Ue,group:on}=Nt;if(Ue.side===Qt&&It.layers.test(te.layers)){let gt=Ue.side;Ue.side=dn,Ue.needsUpdate=!0,At(It,se,te,en,Ue,on),Ue.side=gt,Ue.needsUpdate=!0,We=!0}}We===!0&&(re.updateMultisampleRenderTarget(Le),re.updateRenderTargetMipmap(Le))}R.setRenderTarget(Ie,Ge,Ye),R.setClearColor(V,z),dt!==void 0&&(te.viewport=dt),R.toneMapping=lt}function Mt(A,Z,se){let te=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Le=A.length;ne<Le;ne++){let De=A[ne],{object:Ie,geometry:Ge,group:Ye}=De,lt=De.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ie.layers.test(se.layers)&&At(Ie,Z,se,Ge,lt,Ye)}}function At(A,Z,se,te,ne,Le){B!==null&&ne.isNodeMaterial&&B.setObject(A,ne),A.onBeforeRender(R,Z,se,te,ne,Le),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(R,Z,se,te,A,Le),ne.transparent===!0&&ne.side===Qt&&ne.forceSinglePass===!1?(ne.side=dn,ne.needsUpdate=!0,R.renderBufferDirect(se,Z,te,ne,A,Le),ne.side=bn,ne.needsUpdate=!0,R.renderBufferDirect(se,Z,te,ne,A,Le),ne.side=Qt):R.renderBufferDirect(se,Z,te,ne,A,Le),A.onAfterRender(R,Z,se,te,ne,Le)}function Sn(A,Z,se){Z.isScene!==!0&&(Z=mt);let te=K.get(A),ne=b.state.lights,Le=b.state.shadowsArray,De=ne.state.version,Ie=ve.getParameters(A,ne.state,Le,Z,se,b.state.lightProbeGridArray),Ge=ve.getProgramCacheKey(Ie),Ye=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,te.fog=Z.fog;let lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=de.get(A.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",Ln),Ye=new Map,te.programs=Ye);let dt=Ye.get(Ge);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===De)return Vi(A,Ie),dt}else Ie.uniforms=ve.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,se,Ie),A.onBeforeCompile(Ie,R),dt=ve.acquireProgram(Ie,Ge),Ye.set(Ge,dt),te.uniforms=Ie.uniforms;let We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Oe.uniform),Vi(A,Ie),te.needsLights=tg(A),te.lightsStateVersion=De,te.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.sunLights.value=ne.state.sun,We.sunLightShadows.value=ne.state.sunShadow,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.sunShadowMatrix.value=ne.state.sunShadowMatrix,We.sunShadowCascade.value=ne.state.sunShadowCascade,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=b.state.lightProbeGridArray.length>0,te.currentProgram=dt,te.uniformsList=null,dt}function Nn(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Vi(A,Z){let se=K.get(A);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Xn(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(Z.matrixWorld);for(let se=0,te=A.length;se<te;se++){let ne=A[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(_))return ne}return null}function Un(A,Z,se,te,ne){Z.isScene!==!0&&(Z=mt),re.resetTextureUnits();let Le=Z.fog,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Z.environment:null,Ie=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ht.workingColorSpace,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ye=de.get(te.envMap||De,Ge),lt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,dt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,Wt=!!se.morphAttributes.color,Nt=jn;te.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,en=It!==void 0?It.length:0,Ue=K.get(te),on=b.state.lights;if(Ne===!0&&(ze===!0||A!==N)){let Lt=A===N&&te.id===F;Oe.setState(te,A,Lt)}let gt=!1;te.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==on.state.version||Ue.outputColorSpace!==Ie||ne.isBatchedMesh&&Ue.batching===!1||!ne.isBatchedMesh&&Ue.batching===!0||ne.isBatchedMesh&&Ue.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Ue.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Ue.instancing===!1||!ne.isInstancedMesh&&Ue.instancing===!0||ne.isSkinnedMesh&&Ue.skinning===!1||!ne.isSkinnedMesh&&Ue.skinning===!0||ne.isInstancedMesh&&Ue.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ue.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ue.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ue.instancingMorph===!1&&ne.morphTexture!==null||Ue.envMap!==Ye||te.fog===!0&&Ue.fog!==Le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Oe.numPlanes||Ue.numIntersection!==Oe.numIntersection)||Ue.vertexAlphas!==lt||Ue.vertexTangents!==dt||Ue.morphTargets!==We||Ue.morphNormals!==vt||Ue.morphColors!==Wt||Ue.toneMapping!==Nt||Ue.morphTargetsCount!==en||!!Ue.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ue.__version=te.version);let Dn=Ue.currentProgram;gt===!0&&(Dn=Sn(te,Z,ne),B&&te.isNodeMaterial&&B.onUpdateProgram(te,Dn,Ue));let si=!1,Gi=!1,kr=!1,Rt=Dn.getUniforms(),Ot=Ue.uniforms;if(w.useProgram(Dn.program)&&(si=!0,Gi=!0,kr=!0),te.id!==F&&(F=te.id,Gi=!0),Ue.needsLights){let Lt=Xn(b.state.lightProbeGridArray,ne);Ue.lightProbeGrid!==Lt&&(Ue.lightProbeGrid=Lt,Gi=!0)}if(si||N!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(U,"projectionMatrix",A.projectionMatrix),Rt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Xi=Rt.map.cameraPosition;Xi!==void 0&&Xi.setValue(U,Ce.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Gi=!0,kr=!0)}if(Ue.needsLights&&(on.state.sunShadowMap.length>0&&Rt.setValue(U,"sunShadowMap",on.state.sunShadowMap,re),on.state.directionalShadowMap.length>0&&Rt.setValue(U,"directionalShadowMap",on.state.directionalShadowMap,re),on.state.spotShadowMap.length>0&&Rt.setValue(U,"spotShadowMap",on.state.spotShadowMap,re),on.state.pointShadowMap.length>0&&Rt.setValue(U,"pointShadowMap",on.state.pointShadowMap,re)),ne.isSkinnedMesh){Rt.setOptional(U,ne,"bindMatrix"),Rt.setOptional(U,ne,"bindMatrixInverse");let Lt=ne.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(U,"boneTexture",Lt.boneTexture,re))}ne.isBatchedMesh&&(Rt.setOptional(U,ne,"batchingTexture"),Rt.setValue(U,"batchingTexture",ne._matricesTexture,re),Rt.setOptional(U,ne,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",ne._indirectTexture,re),Rt.setOptional(U,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",ne._colorsTexture,re));let Wi=se.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&q.update(ne,se,Dn),(Gi||Ue.receiveShadow!==ne.receiveShadow)&&(Ue.receiveShadow=ne.receiveShadow,Rt.setValue(U,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Z.environment!==null&&(Ot.envMapIntensity.value=Z.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Eb()),Gi){if(Rt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ue.needsLights&&Mi(Ot,kr),Le&&te.fog===!0&&Fe.refreshFogUniforms(Ot,Le),Fe.refreshMaterialUniforms(Ot,te,j,k,b.state.transmissionRenderTarget[A.id]),Ue.needsLights&&Ue.lightProbeGrid){let Lt=Ue.lightProbeGrid;Ot.probesSH.value=Lt.texture,Ot.probesMin.value.copy(Lt.boundingBox.min),Ot.probesMax.value.copy(Lt.boundingBox.max),Ot.probesResolution.value.copy(Lt.resolution)}Gs.upload(U,Nn(Ue),Ot,re)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Gs.upload(U,Nn(Ue),Ot,re),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(U,"center",ne.center),Rt.setValue(U,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(U,"normalMatrix",ne.normalMatrix),Rt.setValue(U,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Lt=te.uniformsGroups;for(let Xi=0,zr=Lt.length;Xi<zr;Xi++){let gf=Lt[Xi];fe.update(gf,Dn),fe.bind(gf,Dn)}}return Dn}function Mi(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.sunLights.needsUpdate=Z,A.sunLightShadows.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function tg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Z,se){let te=K.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=Z,K.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){let se=K.get(A);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,se=0){$=A,P=Z,O=se;let te=null,ne=!1,Le=!1;if(A){let Ie=K.get(A);if(Ie.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(U.FRAMEBUFFER,Ie.__webglFramebuffer),X.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest,w.viewport(X),w.scissor(W),w.setScissorTest(J),F=-1;return}else if(Ie.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Ie.__hasExternalTextures)re.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let lt=A.depthTexture;if(Ie.__boundDepthTexture!==lt){if(lt!==null&&K.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}let Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);let Ye=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?te=Ye[Z][se]:te=Ye[Z],ne=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?te=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?te=Ye[se]:te=Ye,X.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest}else X.copy(ie).multiplyScalar(j).floor(),W.copy(he).multiplyScalar(j).floor(),J=Me;if(se!==0&&(te=H),w.bindFramebuffer(U.FRAMEBUFFER,te)&&w.drawBuffers(A,te),w.viewport(X),w.scissor(W),w.setScissorTest(J),ne){let Ie=K.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,se)}else if(Le){let Ie=Z;for(let Ge=0;Ge<A.textures.length;Ge++){let Ye=K.get(A.textures[Ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,se,Ie)}}else if(A!==null&&se!==0){let Ie=K.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,se)}F=-1};function mf(A){let Z=K.get(A);return(Z.__readFormat!==A.format||Z.__readType!==A.type)&&(Z.__readFormat=A.format,Z.__readType=A.type,Z.__formatReadable=C.textureFormatReadable(A.format),Z.__typeReadable=C.textureTypeReadable(A.type)),Z}this.readRenderTargetPixels=function(A,Z,se,te,ne,Le,De,Ie=0){if(!(A&&A.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge){w.bindFramebuffer(U.FRAMEBUFFER,Ge);try{let Ye=A.textures[Ie],lt=Ye.format,dt=Ye.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie);let We=mf(Ye);if(We.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-te&&se>=0&&se<=A.height-ne&&U.readPixels(Z,se,te,ne,Se.convert(lt),Se.convert(dt),Le)}finally{let Ye=$!==null?K.get($).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,Z,se,te,ne,Le,De,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge)if(Z>=0&&Z<=A.width-te&&se>=0&&se<=A.height-ne){w.bindFramebuffer(U.FRAMEBUFFER,Ge);let Ye=A.textures[Ie],lt=Ye.format,dt=Ye.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ie);let We=mf(Ye);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,Le.byteLength,U.STREAM_READ),U.readPixels(Z,se,te,ne,Se.convert(lt),Se.convert(dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Wt=$!==null?K.get($).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,Wt);let Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Lp(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Le),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(vt),U.deleteSync(Nt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,se=0){let te=Math.pow(2,-se),ne=Math.floor(A.image.width*te),Le=Math.floor(A.image.height*te),De=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;re.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,se,0,0,De,Ie,ne,Le),w.unbindTexture()},this.copyTextureToTexture=function(A,Z,se=null,te=null,ne=0,Le=0){let De,Ie,Ge,Ye,lt,dt,We,vt,Wt,Nt=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(se!==null)De=se.max.x-se.min.x,Ie=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,lt=se.min.y,dt=se.isBox3?se.min.z:0;else{let Ot=Math.pow(2,-ne);De=Math.floor(Nt.width*Ot),Ie=Math.floor(Nt.height*Ot),A.isDataArrayTexture?Ge=Nt.depth:A.isData3DTexture?Ge=Math.floor(Nt.depth*Ot):Ge=1,Ye=0,lt=0,dt=0}te!==null?(We=te.x,vt=te.y,Wt=te.z):(We=0,vt=0,Wt=0);let It=Se.convert(Z.format),en=Se.convert(Z.type),Ue;Z.isData3DTexture?(re.setTexture3D(Z,0),Ue=U.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(re.setTexture2DArray(Z,0),Ue=U.TEXTURE_2D_ARRAY):(re.setTexture2D(Z,0),Ue=U.TEXTURE_2D),w.activeTexture(U.TEXTURE0),w.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);let on=w.getParameter(U.UNPACK_ROW_LENGTH),gt=w.getParameter(U.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(U.UNPACK_SKIP_PIXELS),si=w.getParameter(U.UNPACK_SKIP_ROWS),Gi=w.getParameter(U.UNPACK_SKIP_IMAGES);w.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),w.pixelStorei(U.UNPACK_SKIP_ROWS,lt),w.pixelStorei(U.UNPACK_SKIP_IMAGES,dt);let kr=A.isDataArrayTexture||A.isData3DTexture,Rt=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){let Ot=K.get(A),Wi=K.get(Z),Lt=K.get(Ot.__renderTarget),Xi=K.get(Wi.__renderTarget);w.bindFramebuffer(U.READ_FRAMEBUFFER,Lt.__webglFramebuffer),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let zr=0;zr<Ge;zr++)kr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(A).__webglTexture,ne,dt+zr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(Z).__webglTexture,Le,Wt+zr)),U.blitFramebuffer(Ye,lt,De,Ie,We,vt,De,Ie,U.DEPTH_BUFFER_BIT,U.NEAREST);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||K.has(A)){let Ot=K.get(A),Wi=K.get(Z);w.bindFramebuffer(U.READ_FRAMEBUFFER,I),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,Y);for(let Lt=0;Lt<Ge;Lt++)kr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,dt+Lt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,ne),Rt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wi.__webglTexture,Le,Wt+Lt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wi.__webglTexture,Le),ne!==0?U.blitFramebuffer(Ye,lt,De,Ie,We,vt,De,Ie,U.COLOR_BUFFER_BIT,U.NEAREST):Rt?U.copyTexSubImage3D(Ue,Le,We,vt,Wt+Lt,Ye,lt,De,Ie):U.copyTexSubImage2D(Ue,Le,We,vt,Ye,lt,De,Ie);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ue,Le,We,vt,Wt,De,Ie,Ge,It,en,Nt.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ue,Le,We,vt,Wt,De,Ie,Ge,It,Nt.data):U.texSubImage3D(Ue,Le,We,vt,Wt,De,Ie,Ge,It,en,Nt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Le,We,vt,De,Ie,It,en,Nt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Le,We,vt,Nt.width,Nt.height,It,Nt.data):U.texSubImage2D(U.TEXTURE_2D,Le,We,vt,De,Ie,It,en,Nt);w.pixelStorei(U.UNPACK_ROW_LENGTH,on),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),w.pixelStorei(U.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(U.UNPACK_SKIP_ROWS,si),w.pixelStorei(U.UNPACK_SKIP_IMAGES,Gi),Le===0&&Z.generateMipmaps&&U.generateMipmap(Ue),w.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){P=0,O=0,$=null,w.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function fm(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let l=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(l)||l.length>16||new Set(l.map(W=>W.id)).size!==l.length)throw new Error("Invalid scene profiles");if(o)for(let W of l){if(typeof W.id!="string"||!Array.isArray(W.contacts)||W.contacts.length>16)throw new Error("Invalid source contacts");for(let J of W.contacts){if(typeof J.bone!="string"||!["ik","unsupported"].includes(J.kind))throw new Error("Unknown source contact");if(J.kind==="ik"&&(!i.getObjectByName(J.ikBone)||!J.drag||!J.sizeCm||![J.sizeCm.X,J.sizeCm.Y,J.sizeCm.Z,...Object.values(J.drag.ScreenPercentToWorld||{}),...Object.values(J.drag.WorldSpaceLimit||{}),...Object.values(J.drag.WorldSpaceLmitLeftUp||{}),J.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let c={},u=null,h=null,f=[],p=performance.now(),g=null,v=!1,m=null,d=[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(y);let M=document.createElement("div");y.append(M);let _=new Map;function S(){return(R()?.contacts||[]).map(W=>{let J=i.getObjectByName(W.bone);if(!J)return null;let V=b(J).project(e),z=t.getBoundingClientRect();return{id:W.id,label:/Foot/.test(W.bone)?W.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(W.bone)?W.bone.includes("-L-")?"\u5DE6\u624B":"\u53F3\u624B":/Pelvis/.test(W.bone)?"\u9AA8\u76C6":"\u5934\u90E8",x:z.left+(V.x+1)*z.width/2,y:z.top+(1-V.y)*z.height/2,supportedIK:W.kind==="ik"}}).filter(Boolean)}let b=W=>W.getWorldPosition(new D),E=new Map;function x(W,J=!1){if(!E.has(W.name)){let z=[];i.traverse(ee=>{if(!ee.isSkinnedMesh)return;let k=ee.geometry.getAttribute("skinIndex"),j=ee.geometry.getAttribute("skinWeight");if(!k||!j)return;let ae=new Set(ee.skeleton.bones.map((ie,he)=>ie.name===W.name||ie.name===W.name.replace("-Foot","-Toe0")?he:-1).filter(ie=>ie>=0)),ue=[];for(let ie=0;ie<k.count;ie++){let he=0;for(let Me=0;Me<4;Me++)ae.has(k.getComponent(ie,Me))&&(he+=j.getComponent(ie,Me));he>.45&&ue.push(ie)}if(ue.length){let ie=ee.geometry.getAttribute("position"),he=new Set;for(let Me of[-1,0,1])for(let ge of[-1,0,1])for(let Ne of[-1,0,1]){if(Me===0&&ge===0&&Ne===0)continue;let ze=-1/0,we=ue[0];for(let Ce of ue){let rt=ie.getX(Ce)*Me+ie.getY(Ce)*ge+ie.getZ(Ce)*Ne;rt>ze&&(ze=rt,we=Ce)}he.add(we)}z.push({mesh:ee,vertices:ue,probes:[...he]})}}),E.set(W.name,z)}let V=[];for(let{mesh:z,vertices:ee,probes:k}of E.get(W.name))for(let j of J?ee:k)V.push(z.getVertexPosition(j,new D).applyMatrix4(z.matrixWorld));return V}function T(W,J){let V=b(W).dot(J);return Te.clamp(Math.max(.04,...x(W).map(z=>V-z.dot(J)))+.015,.055,.16)}let R=()=>l.find(W=>W.id===(c.scene?.()||"main"));function L(){for(let W of f)W.bone.quaternion.angleTo(W.applied)<1e-6&&W.bone.quaternion.copy(W.base);f=[]}function B(W){if(!W?.alphaVerified)return null;for(let V of R()?.contacts||[]){if(V.kind!=="ik")continue;let z=i.getObjectByName(V.ikBone||V.bone);if(!z)continue;let ee=z.worldToLocal(new D().fromArray(W.point)),k=V.sizeCm;if(Math.abs(ee.x)<k.X*.01&&Math.abs(ee.y)<k.Z*.01&&Math.abs(ee.z)<k.Y*.01)return{contact:V,bone:z}}let J=W.skinBones||[];for(let V of R()?.contacts||[]){if(V.kind!=="ik")continue;let z=V.ikBone.includes("-L-")?"L":"R";if(J.some(ee=>ee?.startsWith("Bip001-"+z+"-")&&/Thigh|Calf|Foot/.test(ee)))return{contact:V,bone:i.getObjectByName(V.ikBone)}}return null}function H(W=!1){if(!u)return;let J=u;u=null,h={...J,weight:1,releasedAt:performance.now()},t.hasPointerCapture(J.pointerId)&&t.releasePointerCapture(J.pointerId),W||c.event?.({type:"touch",region:"leg",label:J.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09":"\u53F3\u817F\uFF0F\u811A\uFF08\u539F\u4F5C\u89E6\u70B9\uFF09",gesture:"stroke",source:"original-scene-collision",confidence:1,completed:!0})}function I(W){if(u||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;let J=B(n(W.clientX,W.clientY));Y(W,J)}function Y(W,J){if(t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked||(m={contact:J?.contact.id,handle:W.target?.dataset?.legHandle||null},!J||u))return;let V=J.bone,z=V.parent,ee=z?.parent;m.chain=[V,z,ee].map(k=>({name:k?.name,isBone:k?.isBone})),!(!ee?.isBone||!z?.isBone)&&(W.preventDefault(),W.stopImmediatePropagation(),c.beforeDrag?.(),h=null,u={...J,foot:V,calf:z,thigh:ee,pointerId:W.pointerId,x:W.clientX,y:W.clientY,dx:0,dy:0,offset:new D,triggered:!1},t.setPointerCapture(W.pointerId),J.contact.voiceId&&c.voice?.(J.contact.voiceId))}function P(){let W=(R()?.contacts||[]).filter(V=>V.kind==="ik"),J=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[V,z]of _)W.some(ee=>ee.id===V)||(z.remove(),_.delete(V));for(let V of W){let z=i.getObjectByName(V.ikBone||V.bone);if(!z)continue;let ee=_.get(V.id);ee||(ee=document.createElement("button"),ee.dataset.legHandle=String(V.id),ee.textContent=V.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",ee.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",ee.addEventListener("pointerdown",ae=>{J||Y(ae,{contact:V,bone:z})}),_.set(V.id,ee),y.append(ee));let k=t.getBoundingClientRect(),j=b(z).lerp(b(z.parent),.5).project(e);ee.hidden=!!J,ee.style.left=Te.clamp(k.left+(j.x+1)*k.width/2,55,k.right-55)+"px",ee.style.top=Te.clamp(k.top+(1-j.y)*k.height/2,100,k.bottom-150)+"px"}}function O(W,J,V){return V?.endsWith("::Less")?W<J:V?.endsWith("::Greater")?W>J:null}function $(W){if(u?.pointerId!==W.pointerId)return;W.stopImmediatePropagation();let J=u,V=t.getBoundingClientRect(),z=J.contact.drag,ee=(W.clientX-J.x)/Math.max(1,V.width)*(z.ScreenPercentToWorld?.X||0),k=(W.clientY-J.y)/Math.max(1,V.height)*(z.ScreenPercentToWorld?.Y||0);J.dx=Te.clamp(ee,-(z.WorldSpaceLmitLeftUp?.X||0),z.WorldSpaceLimit?.X||0),J.dy=Te.clamp(k,-(z.WorldSpaceLmitLeftUp?.Y||0),z.WorldSpaceLimit?.Y||0);let j=new D().setFromMatrixColumn(e.matrixWorld,0),ae=new D().setFromMatrixColumn(e.matrixWorld,1);J.offset.copy(j).multiplyScalar(J.dx*.01).addScaledVector(ae,-J.dy*.01);for(let ue of J.contact.thresholds||[]){let ie=[O(J.dx,ue.limit.X,ue.xCompare),O(J.dy,ue.limit.Y,ue.yCompare)].filter(he=>he!==null);if(!J.triggered&&ie.length&&ie.every(Boolean)){J.triggered=!0,g={sampleId:ue.sampleId,dx:J.dx,dy:J.dy,source:"serialized-drag-threshold"},H(),c.reaction?.(ue.sampleId);break}}}function F(W){u?.pointerId===W.pointerId&&(W.stopImmediatePropagation(),H())}function N(){H(!0),h=null,L()}function X(){let W=performance.now(),J=Math.min(.05,(W-p)/1e3);if(p=W,P(),v){M.replaceChildren();for(let z of S()){let ee=document.createElement("span");ee.textContent=z.label+(z.supportedIK?" \u2195":""),ee.style.cssText=`position:absolute;left:${z.x}px;top:${z.y}px;transform:translate(-50%,-50%);border:2px solid ${z.supportedIK?"#5ef0a0":"#ddd"};border-radius:20px;padding:6px;background:#222a;color:white;font-size:11px`,M.append(ee)}}d=[],h&&(h.weight=Math.max(0,1-(W-h.releasedAt)/(1e3*Math.max(.1,h.contact.drag.DragRecoverTime||.25))),h.weight===0&&(h=null));let V=[];for(let z of R()?.contacts||[]){if(z.kind!=="ik")continue;let ee=u?.contact.id===z.id?u:h?.contact.id===z.id?h:null;if(ee)V.push(ee);else if(R()?.id==="show_05"){let k=i.getObjectByName(z.ikBone);k?.parent?.parent?.isBone&&V.push({contact:z,foot:k,calf:k.parent,thigh:k.parent.parent,offset:new D,weight:0,passive:!0})}}for(let z of V){i.updateWorldMatrix(!0,!0);let ee=b(z.thigh),k=b(z.calf),j=b(z.foot),ae=j.clone().sub(ee).normalize();if(k.clone().sub(ee).addScaledVector(ae,-k.clone().sub(ee).dot(ae)).length()<1e-5)return;let ie=j.clone().addScaledVector(z.offset,z===u?1:z.weight),he=0,Me=.055;if(R()?.id==="show_05"&&s){let ze=s(j);if(ze&&ze.clearance>-.2&&ze.clearance<.4){Me=T(z.foot,ze.normal);for(let we=0;we<2;we++){let Ce=0,rt=ze.normal;for(let mt of[.5,.75,1]){let Je=k.clone().lerp(ie,mt),Ee=s(Je);Ee&&(Ce=Math.max(Ce,(Me-Ee.clearance)/mt),rt=Ee.normal)}if(Ce=Te.clamp(Ce,0,.6-he),Ce<5e-4)break;ie.addScaledVector(rt,Ce),he+=Ce}}}if(he>0&&d.push({bone:z.foot.name,correction:he,radius:Me}),z.passive&&he<5e-4)continue;let ge=z.foot.getWorldQuaternion(new Be),Ne=[z.thigh,z.calf,z.foot].map(ze=>({bone:ze,base:ze.quaternion.clone()}));try{let ze=(Ce,rt,mt)=>{let Je=Ce.parent;Je.updateWorldMatrix(!0,!1);let Ee=Ce.position,U=Je.worldToLocal(b(z.foot)).sub(Ee),Pe=Je.worldToLocal(ie.clone()).sub(Ee);if(Math.min(U.length(),Pe.length())<1e-6)return;let _e=Ce.quaternion.clone().premultiply(new Be().setFromUnitVectors(U.normalize(),Pe.normalize())).normalize(),C=rt.angleTo(_e);Ce.quaternion.copy(rt).slerp(_e,Math.min(1,mt/Math.max(C,1e-8))),i.updateWorldMatrix(!0,!0)};for(let Ce=0;Ce<12&&(ze(z.calf,Ne[1].base,Math.PI/3),ze(z.thigh,Ne[0].base,Math.PI/4),!(b(z.foot).distanceTo(ie)<.001));Ce++);z.foot.quaternion.copy(z.foot.parent.getWorldQuaternion(new Be).invert().multiply(ge));for(let Ce of Ne)f.push({...Ce,applied:Ce.bone.quaternion.clone()});i.updateWorldMatrix(!0,!0);let we=new Set;i.traverse(Ce=>{Ce.isSkinnedMesh&&!we.has(Ce.skeleton)&&(Ce.skeleton.update(),we.add(Ce.skeleton))})}catch(ze){m={...m,error:ze.message};for(let we of Ne)we.bone.quaternion.copy(we.base);N()}}}for(let[W,J]of[["pointerdown",I],["pointermove",$],["pointerup",F],["pointercancel",N]])t.addEventListener(W,J);return{footMeshContacts:()=>Object.fromEntries((R()?.contacts||[]).filter(W=>W.kind==="ik").map(W=>{let J=i.getObjectByName(W.ikBone),V=J?x(J,!0).map(z=>s?.(z)?.clearance).filter(Number.isFinite):[];return[W.ikBone,{samples:V.length,minClearance:V.length?Math.min(...V):null}]})),configure:W=>c=W,hitTest:(W,J)=>B(n(W,J))?.contact.id,restore:L,tick:X,cancel:N,profile:R,points:S,togglePoints(){return v=!v,v||M.replaceChildren(),S().length},headReaction:()=>R()?.contacts.find(W=>/hari|Head/.test(W.bone))?.thresholds?.[0]?.sampleId,snapshot:()=>({scene:R()?.id,bedCorrections:d,lastPick:m,active:!!u,offset:u?[u.dx,u.dy]:null,recovering:!!h,lastEvent:g}),dispose(){N(),y.remove();for(let[W,J]of[["pointerdown",I],["pointermove",$],["pointerup",F],["pointercancel",N]])t.removeEventListener(W,J)}}}var dm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},ll=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=dm[e]||dm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function pm(i,e,t){let n=new st,r=new st,s=0,a=0,o=!1,l=0,c=0,u=!1,h=!0,f=!1,p=0,g=[],v=new Map,m={value:Array.from({length:4},()=>new D)},d={value:Array.from({length:4},()=>new D)},y={value:[.05,.05,.05,.05]},M=new D,_=null;i.traverse(P=>{P.isMesh&&P.userData.snowbreakSurfaceKey&&v.set(P.userData.snowbreakSurfaceKey,P)});function S(P){let O=P.hit,$=v.get(O.mesh);if(!$||!O.barycentric)return new D().fromArray(O.point);let F=$.geometry.index,N=new D;for(let X=0;X<3;X++){let W=F?F.getX(O.triangle*3+X):O.triangle*3+X;N.addScaledVector($.getVertexPosition(W,new D),O.barycentric[X])}return $.localToWorld(N)}let b=[],E=new Map,x=new Set;i.traverse(P=>{if(P.isSkinnedMesh&&x.add(P.skeleton),P.isBone&&/^EyeJoint_[LR]$/.test(P.name)&&b.push(P),!P.isSkinnedMesh||!["skin","cloth-or-room"].includes(P.material?.userData.profile))return;let O=P.material,$=O.onBeforeCompile,F=O.customProgramCacheKey.bind(O);O.onBeforeCompile=N=>{$(N),Object.assign(N.uniforms,{senseCenters:m,senseOffsets:d,senseRadii:y}),N.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},O.customProgramCacheKey=()=>F()+"-surface-spring-v2",O.needsUpdate=!0});function T(P,O,$="camera"){$==="camera"&&(f||performance.now()<p)||!Number.isFinite(P)||!Number.isFinite(O)||(n.set(Te.clamp(P,-1,1),Te.clamp(O,-1,1)),s=performance.now()+1600)}function R(P){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let O=t.getBoundingClientRect();p=performance.now()+1600,T((P.clientX-O.left)/O.width*2-1,1-(P.clientY-O.top)/O.height*2,"touch")}function L(P,O){if(!h||!P?.alphaVerified||!Array.isArray(P.point)||!v.has(P.mesh))return!1;_?.spring.release();let $=O?.id||P.anatomy?.id||"body",F=g.find(N=>!N.spring.pressed&&N.region===$&&S(N).distanceTo(new D().fromArray(P.point))<.04);return F?(_=F,_.hit=P):(g.length===4&&g.shift(),_={hit:P,region:$,spring:new ll($),direction:e.getWorldDirection(new D)},g.push(_)),_.spring.press(),o=u=!0,!0}let B=P=>{f=!0,R(P)},H=()=>{o=!1,f=!1,_?.spring.release(),_=null,p=performance.now()+1e3};t.addEventListener("pointerdown",B),t.addEventListener("pointermove",R),t.addEventListener("pointerup",H),t.addEventListener("pointercancel",H);function I(P=performance.now()){let O=Math.min(.04,Math.max(0,(P-a)/1e3));a=P,P>s&&n.set(0,0),r.lerp(n,1-Math.exp(-O*12));let $=new D().setFromMatrixColumn(e.matrixWorld,1),F=new D().setFromMatrixColumn(e.matrixWorld,0);for(let N of b){let X=N.quaternion.clone(),W=new Xe().extractRotation(N.parent.matrixWorld),J=new Xe().makeRotationFromQuaternion(new Be().setFromAxisAngle($,r.x*.07).multiply(new Be().setFromAxisAngle(F,-r.y*.05))),V=W.clone().invert().multiply(J).multiply(W);N.quaternion.premultiply(new Be().setFromRotationMatrix(V)).normalize(),N.updateWorldMatrix(!1,!0),E.set(N,{base:X,applied:N.quaternion.clone()})}for(let N=g.length-1;N>=0;N--)g[N].spring.step(O),g[N].spring.active||g.splice(N,1);c=0,l=0,u=g.length>0;for(let N=0;N<4;N++){let X=g[N];d.value[N].set(0,0,0),X&&(m.value[N].copy(S(X)),y.value[N]=X.spring.profile.radius,d.value[N].copy(X.direction).multiplyScalar(X.spring.offset),Math.abs(X.spring.offset)>Math.abs(c)&&(c=X.spring.offset),l+=Math.abs(X.spring.velocity))}if(b.length)for(let N of x)N.update()}function Y(){for(let[P,O]of E)P.quaternion.angleTo(O.applied)<1e-6&&P.quaternion.copy(O.base);E.clear()}return{gaze:T,touch:L,tick:I,restore:Y,reset(){Y(),o=u=f=!1,p=0,c=l=0,g.length=0,_=null;for(let P of d.value)P.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:b.length,gaze:r.toArray(),offset:c,pressed:o,active:u,contacts:g.map(P=>({region:P.region,offset:P.spring.offset,velocity:P.spring.velocity,pressed:P.spring.pressed,center:S(P).toArray()}))}),dispose(){for(let[P,O]of[["pointerdown",B],["pointermove",R],["pointerup",H],["pointercancel",H]])t.removeEventListener(P,O)}}}function Eh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=b=>b.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let b of[i,e,t]){let E=b.getWorldScale(new D);if(Math.min(E.x,E.y,E.z)<=0||Math.max(E.x,E.y,E.z)-Math.min(E.x,E.y,E.z)>1e-5)throw new Error("Unsupported arm scale")}let l=o(i),c=o(e),u=o(t),h=l.distanceTo(c),f=c.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,f].every(Number.isFinite)||Math.min(h,f)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(l),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let v=b=>Math.sqrt(Math.max(0,h*h+f*f+2*h*f*Math.cos(Te.degToRad(b)))),m=Te.clamp(g,Math.max(Math.abs(h-f)+1e-6,v(a)),Math.min(h+f-1e-6,v(s))),d=r.clone().sub(l).addScaledVector(p,-r.clone().sub(l).dot(p));if(d.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");d.normalize();let y=(h*h-f*f+m*m)/(2*m),M=l.clone().addScaledVector(p,y).addScaledVector(d,Math.sqrt(Math.max(0,h*h-y*y))),_=l.clone().addScaledVector(p,m);function S(b,E,x){let T=o(b),R=o(E).sub(T).normalize(),L=x.clone().sub(T).normalize(),B=b.getWorldQuaternion(new Be);B.premultiply(new Be().setFromUnitVectors(R,L)),b.quaternion.copy(b.parent.getWorldQuaternion(new Be).invert().multiply(B)).normalize(),b.updateWorldMatrix(!0,!0)}return S(i,e,M),S(e,t,_),{requested:n.toArray(),reachable:_.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(_),elbowFlex:Te.radToDeg(Math.acos(Te.clamp((m*m-h*h-f*f)/(2*h*f),-1,1)))}}var Nr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Th(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),l=null,c=null,u=g=>g.getWorldPosition(new D);function h(){l&&(n.quaternion.copy(l.upper),r.quaternion.copy(l.lower),s.quaternion.copy(l.wrist),i.updateWorldMatrix(!0,!0)),l=null}function f(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),v=u(r),m=u(s),d=u(a),y=g.distanceTo(v)+v.distanceTo(m),M=g.clone().sub(d);if(M.y=0,M.length()<1e-5)throw new Error("Ambiguous shoulder direction");M.normalize();let _=d.clone().addScaledVector(M,y*.55);_.y+=y*.15;let S=g.clone().addScaledVector(M,y);S.y-=y*.35,l={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new Be),start:m,target:_,pole:S},c=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!l)return;n.quaternion.copy(l.upper),r.quaternion.copy(l.lower),s.quaternion.copy(l.wrist),i.updateWorldMatrix(!0,!0);let v=Te.clamp(g,0,1),m=v<.3?v/.3:v>.7?(1-v)/.3:1,d=m*m*(3-2*m);if(d<1e-6)return;c=Eh(n,r,s,l.target,l.pole,Nr);let y={},M=[];function _(S,b,E,x,T){let R=S.quaternion.clone(),L=b.angleTo(R),B=Te.degToRad(E);L>B&&M.push(T),S.quaternion.copy(b).slerp(R,x*Math.min(1,B/Math.max(L,1e-10))).normalize(),y[T]=Te.radToDeg(b.angleTo(S.quaternion))}_(n,l.upper,Nr.upper,d,"upper"),_(r,l.lower,Nr.lower,d,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new Be).invert().multiply(l.wristWorld)),_(s,l.wrist,Nr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),c={...c,solverError:c.error,hand:u(s).toArray(),error:u(s).distanceTo(l.target),angles:y,limited:M,weight:d}}return{begin:f,apply:p,restore:h,snapshot:()=>({available:o,active:!!l,side:"anatomical-"+e,experimental:!0,limits:Nr,result:c,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function mm(i,e,t=()=>0){let n={};for(let[P,O]of[["left","L"],["right","R"]]){let $=i.getObjectByName(`Bip001-${O}-UpperArm`),F=i.getObjectByName(`Bip001-${O}-Forearm`),N=i.getObjectByName(`Bip001-${O}-Hand`);$?.isBone&&F?.parent===$&&N?.parent===F&&(n[P]={upper:$,lower:F,hand:N})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(P=>{P.isSkinnedMesh&&a.add(P.skeleton)}),i.traverse(P=>{if(P.isMesh&&P.morphTargetInfluences)for(let O of["L_Eye_close","R_Eye_close"]){let $=P.morphTargetDictionary?.[O]??P.morphTargetDictionary?.[O.replace("_Eye_","_eye_")];Number.isInteger($)&&s.push({mesh:P,index:$,name:O})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(P=>P.name==="L_Eye_close")&&s.some(P=>P.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let l=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),c=null,u=0,h=0,f=[],p=[];i.traverse(P=>{if(P.isMesh&&P.morphTargetDictionary&&P.morphTargetInfluences){let O=P.morphTargetDictionary.Viseme_A;Number.isInteger(O)&&p.push({mesh:P,index:O})}});function g(P,O){if(!o.includes(P)||!P.startsWith("gesture_")||!Number.isFinite(O?.duration)||O.duration<1||O.duration>8||!Array.isArray(O.poses)||O.poses.length<2||O.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let $=-1;for(let F of O.poses){if(F.smile!==void 0&&(!Number.isFinite(F.smile)||F.smile<0||F.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(F.time)||F.time<=$||F.time<0||F.time>O.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");$=F.time;for(let[N,X]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(F[N]&&(!Array.isArray(F[N])||F[N].length!==3||F[N].some((W,J)=>!Number.isFinite(W)||Math.abs(W)>X[J])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(O.poses[0].time!==0||$!==O.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),c={id:P,plan:O,start:performance.now()},S="\u6B63\u5728\u6267\u884C\uFF1A"+P}function v(P){if(!c)return null;let{plan:O}=c,$=(P-c.start)/1e3;if($>=O.duration)return S="\u5DF2\u5B8C\u6210\uFF1A"+c.id,c=null,null;let F=Math.max(0,O.poses.findIndex(z=>z.time>=$)-1),N=O.poses[F],X=O.poses[F+1],W=Te.clamp(($-N.time)/(X.time-N.time),0,1),J=W*W*(3-2*W),V={};for(let z of["head","torso","leftHand","rightHand"])(N[z]||X[z])&&(V[z]=[0,1,2].map(ee=>(N[z]?.[ee]||0)+((X[z]?.[ee]||0)-(N[z]?.[ee]||0))*J));return V.smile=(N.smile||0)+((X.smile||0)-(N.smile||0))*J,V}let m=new Set,d=!1,y=0,M=0,_=performance.now(),S="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",b={left:0,right:0},E=0,x=[],T=[],R={left:!1,right:!1};function L(){for(let P of x)P.bone.quaternion.angleTo(P.applied)<1e-6&&P.bone.quaternion.copy(P.base);x.length=0;for(let P of[...T,...f])Math.abs(P.mesh.morphTargetInfluences[P.index]-P.applied)<1e-6&&(P.mesh.morphTargetInfluences[P.index]=P.base);T.length=f.length=0}function B(P){if(!o.includes(P))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return c=null,P==="raise_left_hand"&&m.add("left"),P==="raise_right_hand"&&m.add("right"),P==="raise_both_hands"&&(m=new Set(["left","right"])),P==="lower_hands"&&m.clear(),P==="close_eyes"&&(d=!0),P==="open_eyes"&&(d=!1),P==="turn_left"&&(M+=90),P==="turn_right"&&(M-=90),P==="turn_back"&&(M=180-t()),P==="face_front"&&(M=-t()),S="\u5DF2\u63A5\u6536\uFF1A"+P,I()}function H(){let P=performance.now(),O=Math.min(.25,(P-_)/1e3);_=P;let $=1-Math.exp(-9*O),F=v(P);if(F){i.updateWorldMatrix(!0,!0);let V=ie=>ie.getWorldPosition(new D),z=i.getObjectByName("Bip001-Pelvis"),ee=r&&z?V(r).sub(V(z)).normalize():new D(0,1,0),k=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new Be)),j=i.getObjectByName("EyeJoint_L"),ae=i.getObjectByName("EyeJoint_R");if(r&&j&&ae){let ie=V(j).add(V(ae)).multiplyScalar(.5).sub(V(r));ie.addScaledVector(ee,-ie.dot(ee)),ie.length()>1e-5&&(k=ie.normalize())}let ue=new D().crossVectors(ee,k).normalize();k.crossVectors(ue,ee).normalize();for(let[ie,he]of[[r,F.head],[l,F.torso]])if(ie&&he){let Me=ie.quaternion.clone(),ge=ie.parent.getWorldQuaternion(new Be),Ne=new Be().setFromAxisAngle(ee,Te.degToRad(-he[0])).multiply(new Be().setFromAxisAngle(ue,Te.degToRad(he[1]))).multiply(new Be().setFromAxisAngle(k,Te.degToRad(he[2])));ie.quaternion.premultiply(ge.clone().invert().multiply(Ne).multiply(ge)).normalize(),x.push({bone:ie,base:Me,applied:ie.quaternion.clone()}),ie.updateWorldMatrix(!1,!0)}}y+=(M-y)*$,e(y),R={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let N=new D(0,1,0),X=i.getObjectByName("EyeJoint_L"),W=i.getObjectByName("EyeJoint_R"),J=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new Be));r&&X&&W&&(J.copy(X.getWorldPosition(new D).add(W.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),J.y=0,J.length()<1e-5&&J.set(0,0,1),J.normalize());for(let V of["left","right"]){b[V]+=((m.has(V)?1:0)-b[V])*$;let z=F?.[V+"Hand"],ee=z?Te.smoothstep(Math.hypot(...z),0,.25):b[V],k=n[V];if(!k||!r||ee<.001)continue;let j=we=>we.getWorldPosition(new D),ae=j(r),ue=j(k.upper),ie=ue.distanceTo(j(k.lower))+j(k.lower).distanceTo(j(k.hand)),he=ue.clone().sub(ae);if(he.y=0,he.length()<1e-6)continue;he.normalize();let Me=ae.clone().addScaledVector(he,ie*.45);Me.y+=ie*.18,z&&(Me.copy(j(k.hand)).addScaledVector(he,Math.abs(z[0])*ie),Me.y+=z[1]*ie,Me.addScaledVector(J,z[2]*ie));let ge=ue.clone().addScaledVector(J,ie*.7).addScaledVector(he,ie*.2).addScaledVector(N,-ie*.2),Ne=k.hand.getWorldQuaternion(new Be),ze=[k.upper,k.lower,k.hand].map(we=>({bone:we,base:we.quaternion.clone()}));try{Eh(k.upper,k.lower,k.hand,Me,ge,Nr);for(let[Pe,_e]of[k.upper,k.lower].entries()){let C=ze[Pe].base,w=_e.quaternion.clone(),G=C.angleTo(w),K=Te.degToRad([100,140][Pe]);_e.quaternion.copy(C).slerp(w,ee*Math.min(1,K/Math.max(G,1e-8))).normalize(),_e.updateWorldMatrix(!1,!0)}let we=Ne.clone(),Ce=Pe=>i.getObjectByName(`Bip001-${V==="left"?"L":"R"}-Finger${Pe}`),rt=Ce(1),mt=Ce(2),Je=Ce(4);if(rt&&mt&&Je){let Pe=j(rt).sub(j(Je)).normalize(),_e=j(mt).sub(j(k.hand));_e.addScaledVector(Pe,-_e.dot(Pe)).normalize();let C=new Xe().makeBasis(Pe,_e,new D().crossVectors(Pe,_e).normalize()),w=c?.id==="gesture_open_arms"?he.clone():N.clone(),G=J.clone().multiplyScalar(V==="left"?1:-1),K=new D().crossVectors(w,G).normalize();w.crossVectors(G,K).normalize();let re=new Xe().makeBasis(K,w,new D().crossVectors(K,w).normalize());we=new Be().setFromRotationMatrix(re.multiply(C.invert())).multiply(k.hand.getWorldQuaternion(new Be));let de=we.clone().multiply(k.hand.getWorldQuaternion(new Be).invert()),me=j(k.hand).sub(j(k.lower)).normalize(),oe=new D(de.x,de.y,de.z).dot(me),ce=Te.clamp(2*Math.atan2(oe,de.w),-Math.PI/2,Math.PI/2)*.6*ee;k.lower.quaternion.multiply(new Be().setFromAxisAngle(k.hand.position.clone().normalize(),ce)).normalize(),k.lower.updateWorldMatrix(!1,!0)}let Ee=k.hand.parent.getWorldQuaternion(new Be).invert().multiply(we),U=ze[2].base.angleTo(Ee);k.hand.quaternion.copy(ze[2].base).slerp(Ee,ee*Math.min(1,Te.degToRad(90)/Math.max(U,1e-8))).normalize(),k.hand.updateWorldMatrix(!1,!0);for(let Pe of ze)x.push({...Pe,applied:Pe.bone.quaternion.clone()});R[V]=j(k.hand).y>ue.y+ie*.25}catch(we){for(let Ce of ze)Ce.bone.quaternion.copy(Ce.base);S="\u4E3E\u624B\u5931\u8D25\uFF1A"+we.message,m.delete(V)}}E+=((d?1:0)-E)*$;for(let V of s){let z=V.mesh.morphTargetInfluences[V.index]||0,ee=Te.lerp(z,d?1:0,E);T.push({...V,base:z,applied:ee}),V.mesh.morphTargetInfluences[V.index]=ee}F?.smile&&i.traverse(V=>{if(!(!V.isMesh||!V.morphTargetInfluences))for(let z of["L_Eye_smile","R_Eye_smile"]){let ee=V.morphTargetDictionary?.[z]??V.morphTargetDictionary?.[z.replace("_Eye_","_eye_")];if(!Number.isInteger(ee))continue;let k=V.morphTargetInfluences[ee]||0,j=Math.max(k,Math.min(.5,F.smile));f.push({mesh:V,index:ee,base:k,applied:j}),V.morphTargetInfluences[ee]=j}}),h+=(u-h)*(1-Math.exp(-O*(u>h?24:16)));for(let V of p){let z=V.mesh.morphTargetInfluences[V.index]||0,ee=Math.max(z,h*.85);f.push({...V,base:z,applied:ee}),V.mesh.morphTargetInfluences[V.index]=ee}i.updateWorldMatrix(!0,!0);for(let V of a)V.update()}function I(){i.updateWorldMatrix(!0,!0);for(let $ of["left","right"]){let F=n[$];if(!F)continue;let N=F.upper.getWorldPosition(new D),X=F.lower.getWorldPosition(new D),W=F.hand.getWorldPosition(new D);R[$]=W.y>N.y+(N.distanceTo(X)+X.distanceTo(W))*.25}let P=s.length?s.reduce(($,F)=>$+(F.mesh.morphTargetInfluences[F.index]||0),0)/s.length:0,O=y+t();return{available:[...o],eyes:s.length?P>.95?"\u5DF2\u95ED\u5408":P<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...R},hands:R.left&&R.right?"\u53CC\u624B\u62AC\u8D77":R.left?"\u5DE6\u624B\u62AC\u8D77":R.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(y-M)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((O%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(O%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(O)}\u5EA6`,yaw:O,lastResult:S}}function Y(){L(),u=h=0,c=null,m.clear(),d=!1,b.left=b.right=E=0,y=M=0,e(0),S="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:B,playGesture:g,tick:H,restore:L,snapshot:I,reset:Y,setSpeechLevel:P=>{u=Number.isFinite(P)?Te.clamp(P,0,1):0},speechState:()=>({level:h,targets:p.length,weights:p.map(P=>P.mesh.morphTargetInfluences[P.index])}),releaseHands:()=>{m.clear(),c=null}}}function gm(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],l=i.keys[a%e],c=i.keys[(a+1)%e],u=s.slice();for(let f=0;f<3;f++)u[f]=n[f]+(.2*o[f]+.6*l[f]+.2*c[f]-n[f])*t;let h=new Be().fromArray(o,3).slerp(new Be().fromArray(l,3),.75).slerp(new Be().fromArray(c,3),.2);return new Be().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function xm(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i);if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let l={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?bn:Qt},c;return r?c=new rn(l):(c=new sn({...l,normalMap:t||null,normalScale:new st(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(c.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},c.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(c.polygonOffset=!0,c.polygonOffsetFactor=-.5,c.polygonOffsetUnits=-.5),c.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",c}function ym(i,e){e.outputColorSpace=Dt,e.toneMapping=Pa,e.toneMappingExposure=1.05;let t=new Ea(16774379,10596036,1.4);i.add(t);let n=new Bi(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=dc;let r=new Bi(14674687,1);r.position.set(3,2,4),i.add(r);let s=new Bi(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new Mr;a.background=new je(.18,.18,.2);let o=new wr(1,1),l=[];for(let[m,d,y,M]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let _=new rn({color:y,side:Qt});_.color.multiplyScalar(M),l.push(_);let S=new Vt(o,_);S.position.fromArray(m),S.scale.set(d[0],d[1],1),S.lookAt(0,1,0),a.add(S)}let c=new Ws(e),u=c.fromScene(a,.08,.1,30);c.dispose(),o.dispose();for(let m of l)m.dispose();i.environment=u.texture;let h=2048;function f(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9};function g(m){let d={...p,...m};if(![d.exposure,d.warmth,d.reflection].every(Number.isFinite)||typeof d.shadows!="boolean"||d.exposure<.65||d.exposure>1.45||d.warmth<0||d.warmth>1||d.reflection<0||d.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(d.shadowSize)||![d.key,d.fill,d.rim].every(y=>Number.isFinite(y)&&y>=0&&y<=3))throw new Error("Invalid light quality");return f(Math.min(d.shadowSize,h)),p={exposure:d.exposure,warmth:d.warmth,reflection:d.reflection,shadows:d.shadows,shadowSize:d.shadowSize,key:d.key,fill:d.fill,rim:d.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new je(16770247),p.warmth),i.environmentIntensity=p.reflection,{...p}}function v(m){let d=m.getCenter(new D),y=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(d),n.position.copy(d).add(new D(-2,4,5).normalize().multiplyScalar(y*3)),Object.assign(n.shadow.camera,{left:-y,right:y,top:y,bottom:-y,near:.1,far:y*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:v,setBudget(m){h=m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048,f(Math.min(p.shadowSize,h))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}function _m(i,e,t,n){if(!t)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};if(!["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(t.schema)||t.sourceCharacter!=="Yuki"||t.targetCharacter!=="Enya"||!Array.isArray(t.clips)||t.clips.length>8)throw new Error("Invalid learned motion catalog");let r=t.schema.endsWith("/3")&&t.stance==="standing";if(t.schema.endsWith("/3")&&(!r||n!=="standing"))throw new Error("Standing motion requires standing source");let s=E=>{let x=[];if(i.traverse(T=>{T.isBone&&T.name===E&&x.push(T)}),x.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+E);return x[0]},a=s("Bip001-Head"),o=s("Bip001-Spine3"),l={};for(let[E,x]of[["left","L"],["right","R"]]){let T=s(`Bip001-${x}-UpperArm`),R=s(`Bip001-${x}-Forearm`),L=s(`Bip001-${x}-Hand`);if(R.parent!==T||L.parent!==R)throw new Error("Learned arm binding mismatch");l[E]={upper:T,lower:R,hand:L}}let c=E=>E.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let u=1,h=c(l.right.upper).sub(c(l.left.upper)).normalize(),f=c(a).sub(c(o)).normalize();new D().crossVectors(h,f).dot(e.position.clone().sub(c(o)))<0&&(u=-1);let p=new Map;for(let E of t.clips){if(!["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(E.id)||p.has(E.id)||!Number.isInteger(E.frames)||E.frames<2||E.frames>1800||!Number.isFinite(E.fps)||E.fps<=0||E.fps>60)throw new Error("Invalid learned clip");let x={};for(let[B,H]of Object.entries(E.channels||{})){let I=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(B)?1:["headDelta","chestDelta",...r?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(B)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...r?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(B)||/^(left|right)Finger[0-4]_[0-2]$/.test(B)?3:0;if(!I||typeof H!="string")throw new Error("Invalid learned channel");let Y=Uint8Array.from(atob(H),O=>O.charCodeAt(0));if(Y.byteLength!==E.frames*I*4)throw new Error("Learned channel truncated");let P=new Float32Array(Y.buffer);if(!P.every(Number.isFinite))throw new Error("Non-finite learned pose");if(I===1&&P.some(O=>O<-.31||O>1.11))throw new Error("Invalid learned finger angle");for(let O=0;I>1&&O<E.frames;O++){let $=0;for(let F=0;F<I;F++)$+=P[O*I+F]**2;if(Math.abs($-1)>.01)throw new Error("Invalid learned direction/quaternion")}x[B]={values:P,width:I}}if(!x.headDelta)throw new Error("Missing learned head reference");let T=E.id.includes("dance"),R=T?r?"standing-dance":"seated-dance":E.id==="yuki_Peace_hand"?"peace":E.id==="yuki_hello"?"greeting":"head",L=T?["left","right"]:R==="head"?[]:["right"];if(!t.schema.endsWith("/1")&&(E.motionKind!==R||JSON.stringify(E.arms)!==JSON.stringify(L)))throw new Error("Invalid learned action capability");if(!(T&&!r)){if(T&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(B=>!x[B]))throw new Error("Missing standing body channels");p.set(E.id,{...E,kind:R,arms:L,channels:x,duration:(E.frames-1)/E.fps})}}let g=Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,Array.from({length:5},(T,R)=>[s(`Bip001-${x}-Finger${R}`),s(`Bip001-${x}-Finger${R}1`),s(`Bip001-${x}-Finger${R}2`)])])),v=r?s("Bip001-Pelvis"):null,m=r?Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,{thigh:s(`Bip001-${x}-Thigh`),calf:s(`Bip001-${x}-Calf`),foot:s(`Bip001-${x}-Foot`),toe:s(`Bip001-${x}-Toe0`)}])):{},d={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function y(){let E=c(l.right.upper).sub(c(l.left.upper)).normalize(),x=c(a).sub(c(o));x.addScaledVector(E,-x.dot(E)).normalize();let T=new D().crossVectors(E,x).multiplyScalar(u).normalize();return{right:E,up:x,front:T,vector:R=>E.clone().multiplyScalar(R[0]).addScaledVector(x,R[1]).addScaledVector(T,R[2])}}let M=new Map,_=null,S=-1;function b(E,x,T,R={}){let L=p.get(E);if(!L||T<=0)return;let B=L.kind==="standing-dance",H=B&&Number.isFinite(R.amplitude)?Te.clamp(R.amplitude,.5,1.2):1;d.fingerWrites=0,d.armWrites=0,d.chestWrites=0,d.workspaceAdjusted=0,(E!==_||x<=S||x-S>.2)&&M.clear(),_=E,S=x,i.updateWorldMatrix(!0,!0);let I=y(),Y=Te.clamp(x*L.fps,0,L.frames-1),P=Math.floor(Y),O=Math.min(P+1,L.frames-1),$=Y-P;function F(ae){let ue=L.channels[ae];if(!ue)return null;if(B&&ue.width===1)return[Te.lerp(ue.values[P],ue.values[O],$)];if(B&&ue.width===3)return new D().fromArray(ue.values,P*3).lerp(new D().fromArray(ue.values,O*3),$).normalize().toArray();if(ue.width===1){let he=0;for(let Me of[-2,-1,0,1,2]){let ge=Te.clamp(Y+Me,0,L.frames-1),Ne=Math.floor(ge),ze=Math.min(Ne+1,L.frames-1);he+=(ue.values[Ne]+(ue.values[ze]-ue.values[Ne])*(ge-Ne))*(Me===0?.4:Math.abs(Me)===1?.2:.1)}return[he]}if(ue.width===4)return new Be().fromArray(ue.values,P*4).slerp(new Be().fromArray(ue.values,O*4),$).normalize().toArray();let ie=new D;for(let he of[-2,-1,0,1,2]){let Me=Te.clamp(Y+he,0,L.frames-1),ge=Math.floor(Me),Ne=Math.min(ge+1,L.frames-1);ie.add(new D().fromArray(ue.values,ge*3).lerp(new D().fromArray(ue.values,Ne*3),Me-ge).multiplyScalar(he===0?.4:Math.abs(he)===1?.2:.1))}return ie.normalize().toArray()}function N(ae,ue,ie,he,Me=T){let ge=ue.angleTo(ie),Ne=Te.degToRad(he);ge>Ne&&d.limited++,ae.quaternion.copy(ue).slerp(ie,Me*Math.min(H,Ne/Math.max(ge,1e-8))).normalize()}function X(ae,ue,ie,he,Me=T){ae.parent.updateWorldMatrix(!0,!1);let ge=ae.quaternion.clone(),Ne=ge.clone(),ze=(ue?ue.position.clone():new D(1,0,0)).multiply(ae.scale).applyQuaternion(Ne).normalize(),we=ie.clone().transformDirection(ae.parent.matrixWorld.clone().invert()),Ce=new Be().setFromUnitVectors(ze,we).multiply(Ne).normalize();M.set(ae,Ce.clone()),N(ae,ge,Ce,he,Me),ae.updateWorldMatrix(!1,!0)}function W(ae,ue,ie,he){let Me=new Xe().makeBasis(I.right,I.up,I.front),ge=new Xe().makeRotationFromQuaternion(new Be(...ue)),Ne=Me.clone().multiply(ge).multiply(Me.clone().invert());ae.parent.updateWorldMatrix(!0,!1);let ze=new Xe().extractRotation(ae.parent.matrixWorld),we=ze.clone().invert().multiply(Ne).multiply(ze),Ce=ae.quaternion.clone(),rt=new Be().setFromRotationMatrix(we).multiply(Ce).normalize();N(ae,Ce,rt,ie,he),ae.updateWorldMatrix(!1,!0)}let J=new D(0,1,0).transformDirection(i.parent.matrixWorld),V=B?Math.min(...Object.values(m).map(ae=>c(ae.foot).dot(J))):0;d.legWrites=0,d.groundCorrection=0,d.sourceTime=x,d.sourceFrame=Y,d.sourceFPS=L.fps,d.amplitude=H,d.sourceBPM=B?E.includes("90bpm")?90:E.includes("120bpm")?120:60:null,B&&(W(v,F("pelvisDelta"),30,T),I=y());let z=F("chestDelta");if(z&&(W(o,z,B?35:10,T*(B?1:.35)),I=y(),d.chestWrites=1),B){for(let[Me,ge]of Object.entries(m)){if(ge.calf.parent!==ge.thigh||ge.foot.parent!==ge.calf)throw new Error("Standing leg hierarchy mismatch");X(ge.thigh,ge.calf,I.vector(F(Me+"Thigh")),110,T),X(ge.calf,ge.foot,I.vector(F(Me+"Calf")),150,T),W(ge.foot,F(Me+"FootDelta"),45,T),d.legWrites+=3}let ae=Te.clamp(V-Math.min(...Object.values(m).map(Me=>c(Me.foot).dot(J))),-.18,.18),ue=c(v),ie=v.parent.matrixWorld.clone().invert(),he=ue.clone().addScaledVector(J,ae).applyMatrix4(ie).sub(ue.clone().applyMatrix4(ie));v.position.add(he),v.updateWorldMatrix(!1,!0),d.groundCorrection=ae}function ee(ae,ue,ie,he){let Me=c(ae.upper),ge=c(ae.lower).distanceTo(Me),Ne=c(ae.hand).distanceTo(c(ae.lower)),ze=Me.clone().addScaledVector(I.vector(ue),ge),we=ze.clone().addScaledVector(I.vector(ie),Ne),Ce=c(o),rt=we.clone().sub(Ce),mt=rt.dot(I.right),Je=rt.dot(I.up),Ee=rt.dot(I.front),U=[mt,Je,Ee];Je=Te.clamp(Je,-.16,.6);let Pe=(1-Te.smoothstep(Math.abs(mt),.16,.28))*Te.smoothstep(Je,-.42,-.32)*(1-Te.smoothstep(Je,.18,.32));Ee+=Math.max(0,.23-Ee)*Pe,we.copy(Ce).addScaledVector(I.right,mt).addScaledVector(I.up,Je).addScaledVector(I.front,Ee);let _e=we.clone().sub(c(a));_e.length()<.14&&we.copy(c(a)).add(_e.length()>.001?_e.setLength(.14):I.front.clone().multiplyScalar(.14)),(U[1]!==Je||U[2]!==Ee)&&d.workspaceAdjusted++;let C=we.clone().sub(Me),w=Te.clamp(C.length(),Math.abs(ge-Ne)+.015,(ge+Ne)*.98);C.normalize(),we.copy(Me).addScaledVector(C,w);let G=I.right.clone().multiplyScalar(he==="right"?1:-1),K=G.clone().addScaledVector(I.front,.3).addScaledVector(I.up,.2);K.addScaledVector(C,-K.dot(C)),K.length()<1e-4&&K.copy(I.front).addScaledVector(C,-I.front.dot(C)),K.normalize();let re=(ge*ge-Ne*Ne+w*w)/(2*w),de=Math.sqrt(Math.max(0,ge*ge-re*re)),me=Me.clone().addScaledVector(C,re).addScaledVector(K,de);return{upper:me.clone().sub(Me).normalize(),lower:we.sub(me).normalize()}}for(let ae of L.arms){let Ce=function(){let G=c(ie[1][0]).sub(c(ie[4][0])).normalize(),K=c(ie[2][0]).sub(c(ue.hand));return K.addScaledVector(G,-K.dot(G)).normalize(),new Xe().makeBasis(G,K,new D().crossVectors(G,K).normalize())},ue=l[ae],ie=g[ae],he=F(ae+"Upper"),Me=F(ae+"Lower");if(!he||!Me)continue;let ge=["greeting","peace"].includes(L.kind)?T*Te.smoothstep(Me[1],-1,1):T*(B?1:.72),Ne=L.kind==="seated-dance"?ee(ue,he,Me,ae):{upper:I.vector(he),lower:I.vector(Me)};X(ue.upper,ue.lower,Ne.upper,120,ge),X(ue.lower,ue.hand,Ne.lower,170,ge),d.armWrites+=2;let ze=F(ae+"HandWidth"),we=F(ae+"HandForward");if(!ze||!we)continue;i.updateWorldMatrix(!0,!0);let rt=I.vector(ze).normalize(),mt=I.vector(we);mt.addScaledVector(rt,-mt.dot(rt)).normalize();let Je=new Xe().makeBasis(rt,mt,new D().crossVectors(rt,mt).normalize()),Ee=Je.multiply(Ce().invert()),U=ue.hand,Pe=new Xe().extractRotation(U.parent.matrixWorld),_e=Pe.clone().invert().multiply(Ee).multiply(Pe),C=U.quaternion.clone(),w=new Be().setFromRotationMatrix(_e).multiply(C).normalize();N(U,C,w,L.kind==="greeting"?110:L.kind==="seated-dance"?75:110,ge*(L.kind==="seated-dance"?.7:1)),U.updateWorldMatrix(!1,!0);for(let G=0;G<5;G++)for(let K=0;K<3;K++){let re=F(`${ae}Finger${G}_${K}`);if(!re)continue;let de=new D(...re).normalize(),me=K?new D(...F(`${ae}Finger${G}_${K-1}`)).normalize():new D(0,1,0),oe=Te.clamp(Math.atan2(-de.z,Math.max(.1,de.y))-Math.atan2(-me.z,Math.max(.1,me.y)),-.15,G===0?.45:1.1),ce=K===0&&G!==0?Te.clamp(Math.atan2(de.x,de.y),-.3,.3):0,ve=F(`${ae}Curl${G}_${K}`),Fe=F(`${ae}Spread${G}`);ve&&(oe=ve[0]),K===0&&G!==0&&Fe&&(ce=Fe[0]),L.kind==="peace"&&(oe=G===1||G===2?.02:G===0?.4:.95,K===0&&(ce=G===1?.14:G===2?-.08:0));let pe=ae==="left"?-1:1,be=ie[G][K],Oe=be.quaternion.clone(),Qe=new Be().fromArray(be.userData.bindLocalQuaternion||Oe.toArray()).multiply(new Be().setFromAxisAngle(new D(0,0,1),ce*pe)).multiply(new Be().setFromAxisAngle(new D(0,1,0),oe*pe));be.quaternion.copy(Oe).slerp(Qe,T).normalize(),d.fingerWrites++}}let k=F("headDelta");if(k){let ae=new Xe().makeBasis(I.right,I.up,I.front),ue=new Xe().makeRotationFromQuaternion(new Be(...k)),ie=ae.clone().multiply(ue).multiply(ae.clone().invert());a.parent.updateWorldMatrix(!0,!1);let he=new Xe().extractRotation(a.parent.matrixWorld),Me=he.clone().invert().multiply(ie).multiply(he),ge=a.quaternion.clone(),Ne=new Be().setFromRotationMatrix(Me).multiply(ge).normalize();N(a,ge,Ne,40)}i.updateWorldMatrix(!0,!0);let j=new Set;i.traverse(ae=>{ae.isSkinnedMesh&&!j.has(ae.skeleton)&&(ae.skeleton.update(),j.add(ae.skeleton))})}return{available:()=>[...p.values()].map(E=>({id:E.id,label:E.label,duration:E.duration,arms:[...E.arms],kind:E.kind})),apply:b,snapshot:()=>{i.updateWorldMatrix(!0,!0);let E=y(),x=l.right;return{...d,parentDeterminant:x.upper.parent.matrixWorld.determinant(),rightUpper:c(x.lower).sub(c(x.upper)).normalize().toArray(),rightLower:c(x.hand).sub(c(x.lower)).normalize().toArray(),handHeight:c(x.hand).sub(c(x.lower)).dot(E.up)}}}}function Ah(i,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zs||e===ka){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===zs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function vm(i){let e=new Map,t=new Map,n=i.clone();return bm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function bm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)bm(i.children[n],e.children[n],t)}var Dr=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new ul(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ul(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yh(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ki.extractUrlBase(e);a=ki.resolveURL(c,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ns(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tm){try{a[ft.KHR_BINARY_GLTF]=new Zh(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new tf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new Lh;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new Kh(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new $h;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new Jh;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Tb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ph=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ra(u),c.distance=h;break;case"spot":c=new Aa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Lh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let r=[];e.color=new je(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(s,s)}return Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(s[0],s[1],s[2],fn),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(s[0],s[1],s[2],fn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Xh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},qh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ul=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}},Yh=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let v=new Xe,m=new D,d=new Be,y=new D(1,1,1),M=new ya(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,v.compose(m,d,y));let _=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];M.instanceColor=new Ni(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(_===null){let E=M.geometry;_=new jt,_.name=E.name;for(let x in E.attributes)_.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)_.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&_.setIndex(E.index),_.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)_.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(_.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(_.boundingSphere=E.boundingSphere.clone()),_.drawRange.start=E.drawRange.start,_.drawRange.count=E.drawRange.count,_.userData=Object.assign({},E.userData),M.geometry=_}let b=l[S];_.setAttribute(S,new Ni(b.array,b.itemSize,b.normalized))}Ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Tm="glTF",Ga=12,Mm={JSON:1313821514,BIN:5130562},Zh=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ga,s=new DataView(e,Ga),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Mm.JSON){let c=new Uint8Array(e,Ga+a,o);this.content=n.decode(c)}else if(l===Mm.BIN){let c=Ga+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Qh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Qh[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=qs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},o,c,fn,f)})})}},$h=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Jh=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},hl=class extends di{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,y=1-m,M=d-f+h;for(let _=0;_!==o;_++){let S=a[v+_+o],b=a[v+_+l]*u,E=a[g+_+o],x=a[g+_]*u;s[_]=y*S+M*b+m*E+d*x}return s}},Ab=new Be,jh=class extends hl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Ab.fromArray(s).normalize().toArray(s),s}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sm={9728:zt,9729:Ht,9984:gc,9985:Os,9986:Ir,9987:Qn},wm={33071:Vn,33648:xs,10497:nr},Rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rb={CUBICSPLINE:void 0,LINEAR:vr,STEP:_r},Ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),i.DefaultMaterial}function Ur(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Pb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lb(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=i.indices+":"+Ih(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Ih(i.targets[n]);return e}function Ih(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ef(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ub=new Xe,tf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new sr(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Ur(s,o,r),_i(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(ki.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Rh[r.type],o=qs[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Ft(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Rh[r.type],c=qs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,v,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count,M=t.cache.get(y);M||(v=new c(o,d*p,r.count*p/u),M=new ws(v,p/u),t.cache.add(y,M)),m=new Es(M,l,f%p/u,g)}else o===null?v=new c(r.count*l):v=new c(o,f,r.count*l),m=new Ft(v,l,g);if(r.sparse!==void 0){let d=Rh.SCALAR,y=qs[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,S=new y(a[1],M,r.sparse.count*d),b=new c(a[2],_,r.sparse.count*l);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,x=S.length;E<x;E++){let T=S[E];if(m.setX(T,b[E*l]),l>=2&&m.setY(T,b[E*l+1]),l>=3&&m.setZ(T,b[E*l+2]),l>=4&&m.setW(T,b[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return u.magFilter=Sm[f.magFilter]||Ht,u.minFilter=Sm[f.minFilter]||Qn,u.wrapS=wm[f.wrapS]||nr,u.wrapT=wm[f.wrapT]||nr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Ht,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let m=new Jt(v);m.needsUpdate=!0,f(m)}),t.load(ki.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),_i(h,a),h.userData.mimeType=a.mimeType||Nb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Is,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Cs,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Er}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){let h=r[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new je(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],fn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Qt);let u=s.alphaMode||Ch.OPAQUE;if(u===Ch.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ch.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new st(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==rn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rn){let h=s.emissiveFactor;o.emissive=new je().setRGB(h[0],h[1],h[2],fn)}return s.emissiveTexture!==void 0&&a!==rn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),_i(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ur(r,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Em(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Lb(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Em(new jt,c,t),c.mode===Wn.TRIANGLE_STRIP?f=f.then(p=>Ah(p,ka)):c.mode===Wn.TRIANGLE_FAN&&(f=f.then(p=>Ah(p,zs))),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Cb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],d,y=c[p];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=M&&_?new ga(v,y):new Vt(v,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(m.mode===Wn.LINES)d=new _a(v,y);else if(m.mode===Wn.LINE_STRIP)d=new Sr(v,y);else if(m.mode===Wn.LINE_LOOP)d=new va(v,y);else if(m.mode===Wn.POINTS)d=new ba(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Pb(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),_i(d,s),m.extensions&&Ur(r,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Ur(r,h[0],s),h[0];let f=new kt;s.extensions&&Ur(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Te.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new ar(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Xe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xa(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],g=r.samplers[p.sampler],v=p.target,m=v.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let M=0,_=f.length;M<_;M++){let S=f[M],b=p[M],E=g[M],x=v[M],T=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,b,E,x,T);if(R)for(let L=0;L<R.length;L++)d.push(R[L])}let y=new Ls(s,void 0,d);return _i(y,r),y})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ub)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Ts:c.length>1?u=new kt:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),_i(u,s),s.extensions&&Ur(n,u,s),s.matrix!==void 0){let h=new Xe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&Ur(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(vm(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof _n||f instanceof Jt)&&h.set(f,p);return u.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}ur[s.path]===ur.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(ur[s.path]){case ur.weights:u=Di;break;case ur.rotation:u=pi;break;case ur.translation:case ur.scale:u=Oi;break;default:n.itemSize===1?u=Di:u=Oi;break}let h=r.interpolation!==void 0?Rb[r.interpolation]:vr,f=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let v=new u(l[p]+"."+ur[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ef(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof pi?jh:hl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Db(i,e,t){let n=e.attributes,r=new Yt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=ef(qs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,l=new D;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let v=ef(qs[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new yn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Qh[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return ht.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),_i(i,e),Db(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ib(i,e.targets,t):i})}function Am({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),l=Math.sin(t*n),c=Math.cos(t*n),u=c*r*a-l*s*o,h=-c*r*o-l*s*a,f=c*s*a-l*r*o,p=c*s*o+l*r*a;return[-u,-f,-h,p]}function Rm(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((f,p)=>[f.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),l=s.clone().sub(r).normalize(),c=new D().crossVectors(l,o).normalize(),u=new D;for(let f of["L","R"]){let p=e.get("Bip001-"+f+"-Foot"),g=e.get("Bip001-"+f+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(c)<0&&c.negate();let h=i.geometry.getAttribute("position");return(f,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let v=new D;for(let S=0;S<3;S++)v.addScaledVector(new D().fromBufferAttribute(h,f[S]),p.getComponent(S));let m=v.sub(t),d=Math.abs(m.dot(l))/a,y=m.dot(o)/a,M=m.dot(c)/a;if(d>.72)return null;let _=null;return y>-.38&&y<-.04&&d<.23&&M>.025?_="pelvis_front":y>-.35&&y<.18&&M<-.025?_="hips":y>.43&&y<1.02&&M>.025&&d<.67?_="chest":y>.1&&y<=.43&&M>.025?_=d>.48?"waist":"abdomen":y>.16&&y<1.02&&M<-.025&&(_="back"),_?{id:_,confidence:.85,source:"bind-pose-surface",coordinates:[d,y,M]}:null}}function Fb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function Cm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=Fb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Im(i,e,t,n=null){let r=new Ar,s=new WeakMap,a=new Map,o=new WeakMap,l=0,c=document.createElement("canvas");c.width=c.height=32;let u=c.getContext("2d",{willReadFrequently:!0});function h(g,v){if(!["torso","leg"].includes(g?.id))return g;let m=N=>i.getObjectByName(N),d=N=>m(N)?.getWorldPosition(new D),y=d("Bip001-Pelvis"),M=d("Bip001-Neck"),_=d("Bip001-L-UpperArm"),S=d("Bip001-R-UpperArm"),b=d("Bip001-Head"),E=d("EyeJoint_L"),x=d("EyeJoint_R");if(!y||!M||!_||!S||!b||!E||!x)return g;let T=M.distanceTo(y);if(T<1e-5)return g;let R=M.clone().sub(y).normalize(),L=S.clone().sub(_).normalize(),B=new D().crossVectors(L,R).normalize(),I=E.add(x).multiplyScalar(.5).sub(b).dot(B);if(Math.abs(I)<T*.002)return g;I<0&&B.negate();let Y=v.clone().sub(y),P=Y.dot(R)/T,O=Y.dot(B)/T;if(Math.abs(Y.dot(L))/T>.7)return g;let F=null;return P>-.4&&P<.16&&O<-.025?F="hips":g.id==="torso"&&(P>.45&&P<.95&&O>.06?F="chest":P>.05&&P<.46&&O>.06?F="abdomen":P>.16&&P<.95&&O<-.06&&(F="back")),F?{id:F,confidence:.75,source:"rig-surface-estimate"}:g}function f(g){for(let v=g;v;v=v.parent)if(!v.visible)return!1;return!0}function p(g,v){if(!g||!v)return 1;try{let m=g.image,d=m.width,y=m.height;if(!d||!y||!u)return null;let M=v.clone();g.transformUv(M);let _=Math.min(d-1,Math.max(0,Math.floor(M.x*d))),S=Math.min(y-1,Math.max(0,Math.floor(M.y*y))),b=Math.floor(_/32)*32,E=Math.floor(S/32)*32;s.has(g)||s.set(g,++l);let x=s.get(g)+":"+b+":"+E,T=a.get(x);if(T)a.delete(x),a.set(x,T);else{u.clearRect(0,0,32,32),u.drawImage(m,b,E,Math.min(32,d-b),Math.min(32,y-E),0,0,Math.min(32,d-b),Math.min(32,y-E));let R=u.getImageData(0,0,32,32).data;T=new Uint8Array(1024);for(let L=0;L<1024;L++)T[L]=R[L*4+3];a.set(x,T),a.size>128&&a.delete(a.keys().next().value)}return T[(S-E)*32+_-b]/255}catch{return null}}return(g,v)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(v)||!m.width||!m.height||g<m.left||g>m.right||v<m.top||v>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let d=[];i.traverse(M=>{M.isMesh&&f(M)&&(M.isSkinnedMesh&&(M.skeleton.update(),M.computeBoundingSphere(),M.computeBoundingBox()),d.push(M))});let y=new Set;n?.traverse(M=>{M.isMesh&&f(M)&&(d.push(M),y.add(M))}),r.setFromCamera(new st((g-m.left)/m.width*2-1,-(v-m.top)/m.height*2+1),e);for(let M of r.intersectObjects(d,!1)){let _=M.object,S=_.material,b=p(_.userData.previewMap,M.uv),E=S.alphaTest||(S.transparent?.1:0);if(S.clippingPlanes?.some(O=>O.distanceToPoint(M.point)<0)||b!==null&&b<E)continue;if(y.has(_))return null;let x=[M.face.a,M.face.b,M.face.c],T=x.map(O=>_.getVertexPosition(O,new D)),R=_.worldToLocal(M.point.clone()),L=li.getBarycoord(R,...T,new D),B=[],H=_.geometry.getAttribute("skinIndex"),I=_.geometry.getAttribute("skinWeight");if(_.isSkinnedMesh&&H&&I&&L)for(let O=0;O<3;O++)for(let $=0;$<4;$++)B.push({name:_.skeleton.bones[H.getComponent(x[O],$)]?.name,weight:I.getComponent(x[O],$)*L.getComponent(O)});o.has(_)||o.set(_,Rm(_));let Y=Cm(B),P=o.get(_)(x,L,Y)||h(Y,M.point);return{skinBones:B.filter(O=>O.weight>.05).map(O=>O.name),mesh:_.userData.snowbreakSurfaceKey,triangle:M.faceIndex,barycentric:L?.toArray(),anatomy:P,uv:M.uv?.toArray()||null,point:M.point.toArray(),distance:M.distance,alphaVerified:b!==null,material:_.userData.snowbreakMaterialName}}return null}}var zi={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Wa(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Fr(i,e){let t=Wa(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(zi,i.anatomy.id))return{...i.anatomy,label:zi[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(zi,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:zi[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:zi[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var nf={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function Pm(i,e,t){let n=new kt;n.visible=!1,e.add(n);let r=new Map;i.traverse(d=>{d.isMesh&&d.userData.snowbreakSurfaceKey&&r.set(d.userData.snowbreakSurfaceKey,d)});let s={},a=!1,o=!0,l=[],c=0,u=!1;function h(){for(let d of l)d.overlay.geometry.dispose(),d.overlay.material.dispose(),d.overlay.removeFromParent();l=[],c=0}function f(){h(),u=!1;let d=new Map;for(let[y,M]of Object.entries(s)){let _=/^(surface_\d+):(\d+)$/.exec(y);if(!_)continue;let S=r.get(_[1]),b=Number(_[2]);if(!S)continue;let E=S.geometry,x=E.getAttribute("position"),T=E.index,R=E.getAttribute("uv"),L=Fr({mesh:_[1],triangle:b,alphaVerified:!0},{[y]:M});if(!L||b*3+2>=(T?T.count:x.count)||S.userData.previewMap&&!R)continue;if(c>=5e3){u=!0;continue}c++;let B=_[1]+":"+L.id,H=d.get(B);H||(H={source:S,region:L.id,vertices:[],keys:[]},d.set(B,H)),H.keys.push(y);for(let I=0;I<3;I++)H.vertices.push(T?T.getX(b*3+I):b*3+I)}for(let y of d.values()){let M=new jt;M.setAttribute("position",new Ft(new Float32Array(y.vertices.length*3),3).setUsage(ju));let _=y.source.geometry.getAttribute("uv");if(_){let x=new Float32Array(y.vertices.length*2);y.vertices.forEach((T,R)=>{x[R*2]=_.getX(T),x[R*2+1]=_.getY(T)}),M.setAttribute("uv",new Ft(x,2))}let S=y.source.material,b=new rn({color:nf[y.region],map:y.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),E=new Vt(M,b);E.frustumCulled=!1,E.renderOrder=100,n.add(E),l.push({...y,overlay:E})}o=!1}function p(d){for(let y=d;y;y=y.parent)if(!y.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&f(),i.updateWorldMatrix(!0,!0);let d=new D,y=new Map;for(let M of l){let{source:_,overlay:S}=M;if(S.visible=p(_),!S.visible)continue;_.updateMatrixWorld(!0),_.isSkinnedMesh&&_.skeleton.update();let b=y.get(_);b||(b=new Map,y.set(_,b));let E=S.geometry.getAttribute("position");M.vertices.forEach((x,T)=>{let R=b.get(x);R||(_.getVertexPosition(x,d).applyMatrix4(_.matrixWorld),R=d.toArray(),b.set(x,R)),E.setXYZ(T,...R)}),E.needsUpdate=!0}}function v(){let d=l.find(M=>M.overlay.visible),y=d?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:c,truncated:u,first:d&&y?{key:d.keys[0],vertices:[0,1,2].map(M=>new D().fromBufferAttribute(y,M).toArray()),screen:[0,1,2].map(M=>new D().fromBufferAttribute(y,M).project(t).toArray())}:null}}function m(d){let y=n.visible;n.visible=!1;try{return d()}finally{n.visible=y}}return{set(d,y=a){return s=d,a=!!y,o=!0,a||h(),g(),v()},update:g,snapshot:v,hideForCapture:m,dispose(){h(),n.removeFromParent()}}}function fl(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Xe().compose(new D(...i.position),new Be(...i.quaternion).normalize(),new D(...i.scale))}async function Lm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=fl(n.characterWorld).invert(),s=new kt,a=new kt,o=new Set,l=[],c=[],u=[],h=new Map,f=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let b of n.anchors){if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(b.id)||h.has(b.id)||!Number.isFinite(b.viewYawDegrees)||Math.abs(b.viewYawDegrees)>180)throw new Error("Invalid scene anchor");h.set(b.id,{inverse:fl(b.characterWorld).invert(),viewYawDegrees:b.viewYawDegrees})}if(!h.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Tn,g=!0;for(let b of n.objects){let E=i.getAsset(b.assetRole);if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(b.id)||o.has(b.id)||E?.kind!=="geometry")throw new Error("Invalid scene object");if(b.group!==void 0&&!["room","furniture"].includes(b.group)||b.cutaway!==void 0&&typeof b.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(b.id);let x=r.clone().multiply(fl(b.world)),T=(await new Dr().parseAsync(E.bytes.slice().buffer,"")).scene,R=0;T.traverse(B=>{if(B.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");B.isMesh&&(R+=(B.geometry.index?.count||B.geometry.attributes.position.count)/3)});let L=new kt;L.name=b.id,L.matrixAutoUpdate=!1,L.matrix.copy(x),L.add(T),(b.group==="room"?a:s).add(L),t(T),T.traverse(B=>{B.isMesh&&(b.group==="room"&&(B.material.side=bn),b.cutaway&&(B.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&b.group==="furniture"&&(B.material.side=Qt),c.push(B.material)),(b.group==="room"||b.cutaway)&&(B.material.needsUpdate=!0))}),b.group!=="room"&&T.traverse(B=>{B.isMesh&&u.push(B)}),l.push({id:b.id,assetRole:b.assetRole,group:b.group||"furniture",cutaway:!!b.cutaway,triangles:R,matrix:x.toArray(),holder:L,world:fl(b.world)})}e.add(s),s.updateMatrixWorld(!0);function v(b,E){if(!c.length)return;let x=b.position.clone().sub(E),T=x.length();if(T<.001)return;x.divideScalar(T);let R=E.clone().addScaledVector(x,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,T*.5));p.setFromNormalAndCoplanarPoint(x.negate(),R)}function m(b){let E=!!b;if(E!==g){g=E;for(let x of c)x.clippingPlanes=g?[p]:null,x.needsUpdate=!0}}let d=new Map,y=new Ar,M=new D(0,1,0);function _(b){if(!h.size)return null;let E=h.get(b);if(!E)throw new Error("Unknown source scene anchor");if(f!==b){f=b;for(let x of l)x.holder.matrix.copy(E.inverse).multiply(x.world),x.matrix=x.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),d.clear()}return E.viewYawDegrees}h.size&&_(n.defaultAnchorId);function S(b){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let E=s.worldToLocal(b.clone()),x=Math.round(E.x/.015)+":"+Math.round(E.z/.015),T=d.get(x);if(T===void 0){let R=new Yt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),L=s.localToWorld(new D(E.x,R.max.y+.3,E.z)),B=M.clone().transformDirection(s.matrixWorld).negate();y.set(L,B),T=null;for(let H of y.intersectObjects(u,!1)){let I=H.face?.normal.clone().transformDirection(H.object.matrixWorld);if(I&&Math.abs(I.dot(B))>.65){T=s.worldToLocal(H.point.clone()).y;break}}d.set(x,T),d.size>512&&d.delete(d.keys().next().value)}return T===null?null:{clearance:E.y-T,normal:M.clone().transformDirection(s.matrixWorld),height:T}}return{root:s,contactSurface:S,setAnchor:_,hasCutaway:c.length>0,updateView:v,setRoomVisible:b=>{a.visible=!!b},setCutaway:m,setVisible:b=>{s.visible=!!b},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:f,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:c.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:l.map(({holder:b,world:E,...x})=>({...x,matrix:[...x.matrix]})),originalSceneVerified:!1})}}var Ob=new Set(["head","left_hand","right_hand"]),Bb=new Set(["tap","double_tap","long_press","stroke"]);function Nm(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Ob.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Bb.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Um(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function kb(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let l=o*o,c=l*o;return(2*c-3*l+1)*r[1]+(c-2*l+o)*a*r[3]+(-2*c+3*l)*s[1]+(c-l)*a*s[2]}function Dm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let f of i.clips){let p=e.getAsset(f.animationRole),g=e.current.resources.find(d=>d.role===f.animationRole);if(p?.kind!=="animation"||f.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(f.sourceSha256)||f.frames!==p.data.frames||f.fps!==p.data.fps||!Array.isArray(f.curves)||f.curves.length>64)throw new Error("Morph curve animation mismatch");let v=n.get(f.sourceSha256);if(v){if(v.frames!==f.frames||v.fps!==f.fps||JSON.stringify(v.curves)!==JSON.stringify(f.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,f.sourceSha256);continue}let m=new Set;for(let d of f.curves){if(typeof d.name!="string"||!d.name.length||d.name.length>128||m.has(d.name)||!Array.isArray(d.keys)||!d.keys.length||d.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(d.name),s.add(d.name);let y=-1/0;for(let M of d.keys){if(!Array.isArray(M)||M.length!==5||!M.every(Number.isFinite)||M[0]<-120||M[0]>120||M[0]<=y||Math.abs(M[1])>4||Math.abs(M[2])>1e6||Math.abs(M[3])>1e6||![0,1,2].includes(M[4]))throw new Error("Invalid morph curve key");if(y=M[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(f.sourceSha256,f),r.set(p.data,f.sourceSha256)}let o=[];if(t.traverse(f=>{if(!f.isMesh||!f.morphTargetDictionary||!f.morphTargetInfluences)return;let p=new Map;for(let g of s){let v=f.morphTargetDictionary[g];if(v!==void 0){if(!Number.isInteger(v)||v<0||v>=f.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,v)}}p.size&&o.push({mesh:f,indices:p})}),[...s].some(f=>!o.some(p=>p.indices.has(f))))throw new Error("Missing exact morph target");let l=null,c=0,u={};function h(f,p){c=p,l=f&&r.get(f)||null,u={};let g=n.get(l);for(let v of g?.curves||[])u[v.name]=kb(v.keys,p);for(let{mesh:v,indices:m}of o)for(let[d,y]of m)v.morphTargetInfluences[y]=u[d]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:l,time:c,values:{...u},weights:o.map(({mesh:f,indices:p})=>Object.fromEntries([...p].map(([g,v])=>[g,f.morphTargetInfluences[v]]))),originalExpressionFidelity:!1})}}function rf(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(l=>!l.targets?.length)){let{targetNames:l,...c}=r;n.extras=c;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(l=>typeof l!="string"||!l.length||l.length>128)||!n.primitives?.length||n.primitives.some(l=>(l.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((l,c)=>[l,c]))})}}}async function Fm(i,e){let t=e.getAsset("viewOrientation")?.data;if(t&&(t.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(t.yawDegrees)||Math.abs(t.yawDegrees)>180))throw new Error("Invalid view orientation");let n=-Math.PI/2+Te.degToRad(t?.yawDegrees||0),r=new al({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),s=new Mr,a=new kt,o=new kt,l=new qt(32,1,.01,100);a.rotation.y=n,s.add(a),a.add(o);let c=ym(s,r),u=hd();u.configure({mode:localStorage.getItem("snowRenderMode")||"adaptive"});let h=0;function f(Ee){return u.configure(Ee),c.setBudget(u.snapshot()),h=0,Je(),p()}function p(){return{...u.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:r.getPixelRatio(),drawCalls:r.info.render.calls,triangles:r.info.render.triangles,gpuResources:{textures:r.info.memory.textures,geometries:r.info.memory.geometries},gpuTimingAvailable:!1}}let g,v,m,d,y,M,_=null,S=null,b=null,E=null,x=!1,T=null,R=0,L=[],B=new Set,H=new Set,I=new Set,Y=new Map,P=new Map,O=new Map,$=new Set,F=new Map,N=e.getAsset("rootMotionPolicy")?.data,X=0,W=0,J=0,V=0,z=null,ee=null,k={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},j=0,ae=0,ue=null;function ie(){a.rotation.set(Te.degToRad(k.pitch),n+j+Te.degToRad(k.yaw),Te.degToRad(k.roll)),o.rotation.set(Te.degToRad(he.pitch),Te.degToRad(he.yaw+ae),Te.degToRad(he.roll)),a.updateMatrixWorld(!0)}let he={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function Me(Ee){let U={...he,...Ee};if(Object.values(U).some(C=>!Number.isFinite(C)))throw new Error("Invalid character placement");for(let C of["x","y","depth"])U[C]=Te.clamp(U[C],-1.5,1.5);U.scale=Te.clamp(U.scale,.3,4),U.yaw=Te.clamp(U.yaw,-180,180),U.pitch=Te.clamp(U.pitch,-65,65),U.roll=Te.clamp(U.roll,-45,45),U.stretchX=U.stretchY=1,he=U,a.updateWorldMatrix(!0,!1),l.updateMatrixWorld();let Pe=new D(U.x,U.y,U.depth).applyQuaternion(l.quaternion),_e=a.matrixWorld.clone().invert();return o.position.copy(Pe.transformDirection(_e).multiplyScalar(Math.hypot(U.x,U.y,U.depth))),o.scale.setScalar(U.scale),ie(),{...he}}function ge(Ee){let U={...k,...Ee};for(let Pe of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(U[Pe]))throw new Error("Invalid framing");return k={scale:Te.clamp(U.scale,.3,4),x:Te.clamp(U.x,-1.5,1.5),y:Te.clamp(U.y,-1.5,1.5),yaw:((U.yaw+180)%360+360)%360-180,pitch:Te.clamp(U.pitch,-65,65),roll:Te.clamp(U.roll,-45,45),stretchX:Te.clamp(U.stretchX,.65,1.5),stretchY:Te.clamp(U.stretchY,.65,1.5)},ie(),Je(),{...k}}function Ne(){if(!ue)return;a.rotation.y=n,a.updateMatrixWorld(!0);let Ee=ue.bone.getWorldQuaternion(new Be),U=ue.axis.clone().applyQuaternion(Ee);Math.hypot(U.x,U.z)>.1&&(j=ue.heading-Math.atan2(U.x,U.z)),ie()}function ze(){return k.yaw=0,Ne(),Je(),{...k}}function we(Ee){Ee.traverse(U=>{if(U.isBone&&(U.userData.bindLocalQuaternion=U.quaternion.toArray()),!U.isMesh)return;B.add(U.geometry);for(let w of Array.isArray(U.material)?U.material:[U.material]){H.add(w);for(let G of Object.values(w))G?.isTexture&&I.add(G)}let Pe=U.material.name,_e=Y.get(Pe)||null,C=O.get(Pe)||{};if(U.userData.snowbreakSurfaceKey="surface_"+W++,U.userData.snowbreakMaterialName=Pe,U.userData.previewMap=_e,C.transparent!==void 0&&typeof C.transparent!="boolean")throw new Error("Invalid transparent override");if(C.renderOrder!==void 0&&(!Number.isInteger(C.renderOrder)||Math.abs(C.renderOrder)>100))throw new Error("Invalid material sorting");U.renderOrder=C.renderOrder||0,U.material=xm(Pe,_e,P.get(Pe),C),H.add(U.material),U.castShadow=U.isSkinnedMesh&&!C.transparent,U.receiveShadow=U.material.userData.profile==="cloth-or-room"})}function Ce(Ee,U){if(!U)return;let Pe=new Map(U.tracks.map(_e=>[_e.bone,_e]));Ee.traverse(_e=>{if(!_e.isBone)return;let C=Pe.get(_e.name)?.keys?.[0];if(!C||C.length!==10||!C.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");_e.position.fromArray(C),_e.quaternion.fromArray(C,3),_e.scale.fromArray(C,7)})}function rt(Ee,U,Pe=L,_e=!1){if(!U)return;let C=new Map(U.tracks.map(w=>[w.bone,w]));if(C.size!==U.tracks.length)throw new Error("Duplicate animation bones");Ee.traverse(w=>{if(!w.isBone||Ee===m&&!$.has(w)||_e&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(w.name))return;let G=C.get(w.name);if(!(_e&&!G)){if(!G||G.keys.length!==U.frames||G.keys.some(K=>K.length!==10||!K.every(Number.isFinite)||Math.abs(K.slice(3,7).reduce((re,de)=>re+de*de,0)-1)>.05))throw new Error("Invalid bone animation");Pe.push({bone:w,track:G,clip:U})}})}function mt(){if(!x){x=!0,removeEventListener("resize",Je),r.setAnimationLoop(null),M?.dispose(),g?.dispose(),v?.dispose(),c.dispose();for(let Ee of B)Ee.dispose();for(let Ee of H)Ee.dispose();for(let Ee of I)Ee.dispose();m?.removeFromParent(),y?.root?.removeFromParent(),r.dispose()}}function Je(){if(x||!m)return;V++;let Ee=i.clientWidth||innerWidth,U=i.clientHeight||innerHeight,Pe=u.ratio(Ee,U,devicePixelRatio||1);(!z||z.w!==Ee||z.h!==U||z.ratio!==Pe)&&(r.setPixelRatio(Pe),r.setSize(Ee,U,!1),z={w:Ee,h:U,ratio:Pe},J++),l.aspect=Ee/U,a.updateMatrixWorld(!0),!_&&!ee&&(m.traverse(de=>{de.isSkinnedMesh&&(de.skeleton.update(),de.computeBoundingBox())}),ee=new Yt().setFromObject(m).applyMatrix4(a.matrixWorld.clone().invert()));let _e=(S||_||ee).clone().applyMatrix4(a.matrixWorld),C=_e.getSize(new D),w=_e.getCenter(new D);c.frame(_e);let G=Math.tan(Te.degToRad(16)),K=Math.max(C.y/(2*G),C.x/(2*G*l.aspect))*1.25+C.z;if(_){K=0;for(let de of[_e.min.x,_e.max.x])for(let me of[_e.min.y,_e.max.y])for(let oe of[_e.min.z,_e.max.z])K=Math.max(K,oe-w.z+Math.max(Math.abs(de-w.x)/(G*l.aspect),Math.abs(me-w.y)/G)*1.12)}let re=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2";l.position.copy(w).add(new D(0,0,K)),l.lookAt(w),l.zoom=S&&!re?1.05:k.scale,l.setViewOffset(Ee,U,S&&!re?0:-k.x*Ee,S&&!re?0:-k.y*U,Ee,U),l.updateProjectionMatrix(),l.projectionMatrix.elements[0]*=k.stretchX,l.projectionMatrix.elements[5]*=k.stretchY,l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),y?.updateView(l,w)}try{let Se=function(ye){let Q=q.get(ye);if(!Q)throw new Error("Unknown sample");Qe=Q.overlay?ve==="sample"&&Qe?Qe:{bindings:ve==="standby"?Fe:be,duration:ve==="standby"?me:Oe,time:R,envelope:S}:null,$e=ye,be=Q.bindings,Oe=Q.duration;let Ve=q.get(Q.sceneOf)||Q,nt=Q.overlay?Qe.envelope:Ve.sceneFraming?F.get(Ve.sourceSha256):null;if(Q.sceneFraming&&!nt)throw new Error("Scene framing envelope missing");let it=y.setAnchor?.(Ve.id??ye),ot=S!==nt;if(it!=null){let Mt=-Math.PI/2+Te.degToRad(it);ot||=Math.abs(n-Mt)>1e-8,n=Mt,j=0,ie()}return S=nt,Ae(0),ot&&Je(),{id:ye,label:Q.label,duration:Q.duration}},Ae=function(ye,Q=be,Ve=Oe){if(x||!Number.isFinite(ye))return;let nt=Qe&&Q===be?Qe:null;nt&&nt.duration>0&&Ae((nt.time+ye)%nt.duration,nt.bindings,nt.duration);let it=ve;E=Q[0]?.clip?.generatorMetadata?.sourceSha256||null,ve=Q===Fe&&me>0?"standby":"sample",R=Math.max(0,Math.min(Ve,ye));for(let{bone:ot,track:Mt,clip:At}of Q){let Sn=R*At.fps,Nn=Math.min(Math.floor(Sn),At.frames-1),Vi=Math.min(Nn+1,At.frames-1),Xn=Sn-Nn,Un=Mt.keys[Nn],Mi=Mt.keys[Vi];(!nt||!$.has(ot))&&ot.position.set(Te.lerp(Un[0],Mi[0],Xn),Te.lerp(Un[1],Mi[1],Xn),Te.lerp(Un[2],Mi[2],Xn)),ot.quaternion.copy(re.fromArray(Un,3).slerp(de.fromArray(Mi,3),Xn)),(!nt||!$.has(ot))&&ot.scale.set(Te.lerp(Un[7],Mi[7],Xn),Te.lerp(Un[8],Mi[8],Xn),Te.lerp(Un[9],Mi[9],Xn))}if(w.apply(Q.find(ot=>!$.has(ot.bone))?.clip,R),N){m.position.x=m.position.z=0,a.updateMatrixWorld(!0);let ot=m.getObjectByName(N.bone).getWorldPosition(new D).applyMatrix4(m.matrixWorld.clone().invert());m.position.x=N.reference[0]-ot.x,m.position.z=N.reference[1]-ot.z}a.updateMatrixWorld(!0),X=G.length;for(let ot of G)ot.update()},bl=function(){let ye=[];return m.updateWorldMatrix(!0,!0),m.traverse(Q=>{Q.userData.sourceAttachment&&Q.traverse(Ve=>{if(!Ve.isSkinnedMesh)return;Ve.skeleton.update();let nt=new D,it=Ve.geometry.attributes.position.count;for(let ot=0;ot<it;ot++)nt.add(Ve.getVertexPosition(ot,new D).applyMatrix4(Ve.matrixWorld));ye.push({kind:Q.userData.sourceAttachment,vertices:it,center:nt.divideScalar(it).toArray(),sharedBones:Ve.skeleton.bones.every(ot=>m.getObjectByName(ot.name)===ot)})})}),ye};if(N&&(N.schema!=="snowbreak-home-root-lock/1"||N.bone!=="Bip001"||!Array.isArray(N.reference)||N.reference.length!==2||!N.reference.every(ye=>Number.isFinite(ye)&&Math.abs(ye)<10)))throw new Error("Invalid home root motion policy");let Ee=e.getAsset("materials")?.data;if(Ee){if(Ee.schema!=="snowbreak-material-preview/1"||Ee.originalShaderVerified!==!1||!Array.isArray(Ee.materials)||Ee.materials.length>64)throw new Error("Invalid material preview");let ye=new Map;for(let Q of Ee.materials){if(typeof Q.name!="string"||Q.name.length>256||O.has(Q.name))throw new Error("Invalid material identity");let Ve=Q.renderState||{};if(Ve.alphaCutoff!==void 0&&(!Number.isFinite(Ve.alphaCutoff)||Ve.alphaCutoff<0||Ve.alphaCutoff>1))throw new Error("Invalid material alpha");if(Ve.doubleSided!==void 0&&typeof Ve.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(O.set(Q.name,Ve),!Q.diffuseAssetId)continue;let nt=e.getAsset("texture_"+Q.diffuseAssetId);if(nt?.kind!=="texture")throw new Error("Missing local diffuse texture");let it=ye.get(Q.diffuseAssetId);if(!it){let ot=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/png"}));try{it=await new sr().loadAsync(ot)}finally{URL.revokeObjectURL(ot)}let Mt=localStorage.getItem("snowTextureLimit")==="2048"?2048:4096;if(it.image.width>Mt||it.image.height>Mt){let At=document.createElement("canvas"),Sn=Math.min(Mt/it.image.width,Mt/it.image.height);At.width=Math.round(it.image.width*Sn),At.height=Math.round(it.image.height*Sn),At.getContext("2d").drawImage(it.image,0,0,At.width,At.height),it.image=At,it.needsUpdate=!0}it.colorSpace=Dt,it.anisotropy=r.capabilities.getMaxAnisotropy(),it.flipY=!1,ye.set(Q.diffuseAssetId,it),I.add(it)}if(Y.set(Q.name,it),Q.normalAssetId){if(!/^[a-f0-9]{64}$/.test(Q.normalAssetId)||Ee.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let ot=e.getAsset("texture_"+Q.normalAssetId);if(ot?.kind!=="texture")throw new Error("Missing original normal texture");let Mt=ye.get("normal:"+Q.normalAssetId);if(!Mt){let At=URL.createObjectURL(new Blob([ot.bytes],{type:ot.data?.mime||"image/png"}));try{Mt=await new sr().loadAsync(At)}finally{URL.revokeObjectURL(At)}Mt.flipY=!1,Mt.colorSpace=ni,Mt.anisotropy=r.capabilities.getMaxAnisotropy(),ye.set("normal:"+Q.normalAssetId,Mt),I.add(Mt)}P.set(Q.name,Mt)}}}let U=e.getAsset("body");if(!U)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let Pe=e.getAsset("framingBounds")?.data;if(Pe){let ye=Q=>Array.isArray(Q)&&Q.length===3&&Q.every(Ve=>Number.isFinite(Ve)&&Math.abs(Ve)<=100);if(Pe.schema!=="snowbreak-framing-bounds/1"||Pe.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||Pe.bodySha256!==e.current.resources.find(Q=>Q.role==="body")?.assetId||!ye(Pe.min)||!ye(Pe.max)||Pe.min.some((Q,Ve)=>Q>=Pe.max[Ve])||!Number.isInteger(Pe.evaluatedFrames)||Pe.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(_=new Yt(new D(...Pe.min),new D(...Pe.max)),b=Pe,Pe.clips){if(!Array.isArray(Pe.clips)||Pe.clips.length>16)throw new Error("Invalid clip envelopes");for(let Q of Pe.clips){if(!/^[a-f0-9]{64}$/.test(Q.sourceSha256)||F.has(Q.sourceSha256)||!ye(Q.min)||!ye(Q.max)||Q.min.some((Ve,nt)=>Ve>=Q.max[nt]))throw new Error("Invalid clip envelope");F.set(Q.sourceSha256,new Yt(new D(...Q.min),new D(...Q.max)))}}}m=(await new Dr().register(rf).parseAsync(U.bytes.slice().buffer,"")).scene,o.add(m),we(m),m.traverse(ye=>{ye.isBone&&$.add(ye)});let _e=e.getAsset("bodyAnimation")?.data;E=_e?.generatorMetadata?.sourceSha256||null,Ce(m,_e),rt(m,_e);let C=e.getAsset("faceAttachment")?.data;if(C){if(C.schema!=="snowbreak-face-attachment/1"||C.candidateOnly!==!0||C.originalAssemblyVerified!==!1||C.boneName!=="Bip001-Head"||C.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let ye=m.getObjectByName(C.boneName),Q=C.relativeLocationCm;if(!ye?.isBone||!Q||![Q.X,Q.Y,Q.Z].every(ot=>Number.isFinite(ot)&&Math.abs(ot)<100))throw new Error("Invalid socket parent or position");let Ve=e.getAsset("face");if(!Ve)throw new Error("Missing face geometry");d=(await new Dr().register(rf).parseAsync(Ve.bytes.slice().buffer,"")).scene,we(d),Ce(d,e.getAsset("faceAnimation")?.data);let nt=e.getAsset("faceAnimation")?.data;if(!nt||!_e||nt.frames!==_e.frames||nt.fps!==_e.fps)throw new Error("Face/body sample timing mismatch");rt(d,nt);let it=new kt;if(it.position.set(Q.X*.01,Q.Z*.01,Q.Y*.01),it.quaternion.fromArray(Am(C.relativeRotationDegrees)),ye.add(it),it.add(d),C.defaultVisible!==void 0&&typeof C.defaultVisible!="boolean")throw new Error("Invalid face visibility");d.visible=C.defaultVisible===!0}y=await Lm(e,a,we),r.localClippingEnabled=!!y.hasCutaway;let w=Dm(e.getAsset("morphCurves")?.data,e,d),G=[];m.traverse(ye=>{ye.isSkinnedMesh&&!G.includes(ye.skeleton)&&G.push(ye.skeleton),ye.isSkinnedMesh&&(ye.frustumCulled=!1)});let K=_e?(_e.frames-1)/_e.fps:0,re=new Be,de=new Be,me=0,oe="D\u5F85\u673A",ce=!1,ve="sample",Fe=[],pe=e.getAsset("stateTransition")?.data;if(pe){let ye=pe.schema==="snowbreak-state-preview/1"&&pe.show==="Sc01_Hand_A_D"&&pe.fromState==="A"&&pe.toState==="D",Q=pe.schema==="snowbreak-standby-preview/1"&&pe.characterId===e.current.characterId&&Number.isInteger(pe.standbyConfigId)&&pe.standbyConfigId>0&&Number.isInteger(pe.sourceSkinId)&&/^[a-f0-9]{64}$/.test(pe.sourceTableSha256)&&typeof pe.label=="string"&&pe.label.length<=40&&typeof pe.startAsStandby=="boolean",Ve=pe.schema==="snowbreak-standby-preview/2"&&pe.stance==="standing"&&pe.characterId===e.current.characterId&&pe.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&pe.startAsStandby===!0;if(!ye&&!Q&&!Ve||pe.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(Q||Ve)&&(oe=pe.label,ce=pe.startAsStandby);let nt=e.getAsset("standbyBody")?.data,it=e.getAsset("standbyFace")?.data;if(!nt||!it||nt.frames!==it.frames||nt.fps!==it.fps)throw new Error("Standby clip timing mismatch");let ot=new Map(nt.tracks.map(At=>[At.bone,At])),Mt=new Map(it.tracks.map(At=>[At.bone,At]));Fe=L.map(At=>{let Sn=At.clip===_e?nt:it,Nn=(At.clip===_e?ot:Mt).get(At.bone.name);if(!Nn||Nn.keys.length!==Sn.frames||Nn.keys.some(Vi=>Vi.length!==10||!Vi.every(Number.isFinite)||Math.abs(Vi.slice(3,7).reduce((Xn,Un)=>Xn+Un*Un,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:At.bone,track:$.has(At.bone)?gm(Nn):Nn,clip:Sn}}),me=(nt.frames-1)/nt.fps}let be=L,Oe=K,$e="default",Qe=null,q=new Map([["default",{bindings:L,duration:K,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),xe=e.getAsset("sampleCatalog")?.data;if(xe){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(xe.schema)||xe.characterId!==e.current.characterId||xe.originalInteractionVerified!==!1||!Array.isArray(xe.samples)||!xe.samples.length||xe.samples.length>24||!/^[a-f0-9]{64}$/.test(xe.sourceTableSha256))throw new Error("Invalid sample catalog");q.clear();for(let Q of xe.samples){if(typeof Q.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(Q.id)||q.has(Q.id)||typeof Q.label!="string"||Q.label.length>64||xe.schema.endsWith("/1")&&(!Number.isInteger(Q.sourceShowElementId)||Q.sourceShowElementId<1))throw new Error("Invalid sample identity");let Ve=e.getAsset(Q.bodyRole),nt=e.getAsset(Q.faceRole);if(Ve?.kind!=="animation"||nt?.kind!=="animation"||(Ve.data.frames!==nt.data.frames||Ve.data.fps!==nt.data.fps)&&!(Q.independentFaceTiming===!0&&Number.isInteger(Q.sourceShowElementId)&&Q.sourceShowElementId>0))throw new Error("Sample body/face mismatch");if(xe.schema.endsWith("/2")&&Q.sourceBodySha256!==(Ve.data.generatorMetadata?.sourceSha256||e.current.resources.find(ot=>ot.role===Q.bodyRole)?.assetId))throw new Error("Sample source mismatch");let it=L;if(Q.bodyRole!=="bodyAnimation"||Q.faceRole!=="faceAnimation"){if(it=[],rt(m,Ve.data,it,Q.overlay==="upper-body"),!d)throw new Error("Sample requires face");rt(d,nt.data,it)}if(Q.persistentState!==void 0&&typeof Q.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(Q.endPolicy!==void 0&&!["hold","loop"].includes(Q.endPolicy))throw new Error("Invalid scene end policy");q.set(Q.id,{id:Q.id,bindings:it,duration:Math.max((Ve.data.frames-1)/Ve.data.fps,(nt.data.frames-1)/nt.data.fps),overlay:Q.overlay==="upper-body",label:Q.label,sourceShowElementId:Q.sourceShowElementId,sceneFraming:Q.sceneFraming===!0,sourceSha256:Ve.data.generatorMetadata?.sourceSha256,sceneOf:Q.sceneOf,persistentState:Q.persistentState===!0,endPolicy:Q.endPolicy,afterScene:Q.afterScene})}let ye=q.get(xe.defaultId);if(!ye||ye.bindings!==L)throw new Error("Default sample must reference primary clip");$e=xe.defaultId;for(let Q of q.values()){if(Q.sceneOf!==void 0&&(typeof Q.sceneOf!="string"||!q.has(Q.sceneOf)))throw new Error("Missing reaction scene");if(Q.afterScene!==void 0&&(typeof Q.afterScene!="string"||!q.get(Q.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let le=Nm(xe);a.updateMatrixWorld(!0);let fe=m.getObjectByName("Bip001-Pelvis")||m.getObjectByName("Bip001");if(fe){let ye=fe.getWorldQuaternion(new Be),Q=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((nt,it)=>{let ot=nt.clone().applyQuaternion(ye),Mt=it.clone().applyQuaternion(ye);return Math.hypot(Mt.x,Mt.z)-Math.hypot(ot.x,ot.z)})[0],Ve=Q.clone().applyQuaternion(ye);ue={bone:fe,axis:Q,heading:Math.atan2(Ve.x,Ve.z)}}M=Pm(m,s,l);let qe=mm(m,ye=>{ae=ye,ie()},()=>k.yaw+he.yaw),He=Im(m,l,i,y.root);v=fm(m,l,i,He,e.getAsset("sceneInteractions")?.data,y.contactSurface,e.current.characterId),g=pm(m,l,i),Je(),await r.compileAsync(s,l),addEventListener("resize",Je),r.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){u.resetClock();return}if(!u.begin())return;let ye=u.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(ye-h)>.02&&(h=ye,Je()),qe.restore(),v.restore(),g.restore(),T?.(),qe.tick(),v.tick(),g.tick(),M.update(),r.render(s,l)});let Tt=()=>{let ye=[];return m.traverse(Q=>{Q.isMesh&&ye.push({name:Q.userData.snowbreakMaterialName,textured:!!Q.userData.previewMap,normalMapped:!!Q.material.normalMap,diffuseSize:Q.material.map?[Q.material.map.image.width,Q.material.map.image.height]:null,normalSize:Q.material.normalMap?[Q.material.normalMap.image.width,Q.material.normalMap.image.height]:null,anisotropy:Q.material.map?.anisotropy||0,profile:Q.material.userData.profile,alphaTest:Q.material.alphaTest})}),ye},xt=ye=>m.traverse(Q=>{Q.isMesh&&(Q.material.map=ye?Q.userData.previewMap:null,Q.material.color.set(Q.material.map?16777215:13289411),Q.material.needsUpdate=!0)}),mn=()=>({available:!!d,visible:!!d?.visible,originalAssemblyVerified:!1}),Ln=ye=>(d&&(d.visible=!!ye,Je()),mn()),_l=(ye,Q,Ve)=>{if(x)throw new Error("Renderer disposed");M.hideForCapture(()=>{r.render(s,l),ye.drawImage(i,0,0,Q,Ve)})},vl=Th(m),Ja=Th(m,{side:"left"}),hr=_m(m,l,e.getAsset("learnedMotions")?.data,pe?.stance);return{attachmentState:bl,performanceState:p,setRenderBudget:f,projectedBone:ye=>{let Q=m.getObjectByName(ye)?.getWorldPosition(new D).project(l),Ve=i.getBoundingClientRect();return Q?[Ve.left+(Q.x+1)*Ve.width/2,Ve.top+(1-Q.y)*Ve.height/2]:null},modelDragScale:()=>{let ye=Math.max(.05,m.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(l.position).dot(l.getWorldDirection(new D))),Q=2*ye*Math.tan(Te.degToRad(l.fov/2))/l.zoom;return{x:Q*l.aspect/k.stretchX,y:Q/k.stretchY}},furnitureContacts:ye=>Object.fromEntries(ye.map(Q=>{let Ve=m.getObjectByName(Q);return[Q,Ve?y.contactSurface?.(Ve.getWorldPosition(new D)):null]})),setModelFrame:Me,modelFrameState:()=>({...he}),placementState:()=>({model:o.matrixWorld.toArray(),room:y.root?.matrixWorld.toArray(),camera:l.matrixWorld.toArray()}),embodiment:qe,sceneInteractions:v,sensesState:g.snapshot,setGaze:g.gaze,senseTouch:g.touch,resetSenses:g.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(ye=>[ye,m.getObjectByName(ye)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:c.snapshot,setLighting:c.set,boneWorldPoints:ye=>Object.fromEntries(ye.slice(0,32).map(Q=>[Q,m.getObjectByName(Q)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let ye=[];return m.traverse(Q=>{Q.isBone&&ye.push({name:Q.name,position:Q.position.toArray(),quaternion:Q.quaternion.toArray(),scale:Q.scale.toArray()})}),ye},cameraState:()=>({position:l.position.toArray(),projection:l.projectionMatrix.toArray()}),learnedOptions:hr.available,applyLearnedMotion:hr.apply,learnedDiagnostics:hr.snapshot,presentationDiagnostics:()=>({resizeCount:J,fitCount:V}),touchBindings:()=>le.map(ye=>({...ye,gestures:[...ye.gestures]})),setRoomVisible:y.setRoomVisible,setSceneCutaway:y.setCutaway,sceneState:y.snapshot,setSceneVisible:y.setVisible,morphState:w.snapshot,framingEnvelopeState:()=>({precomputed:!!_,evaluatedFrames:b?.evaluatedFrames||0,perClip:F.size,activeSource:E}),resourceState:()=>({sourceTextures:I.size,drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries,textures:r.info.memory.textures}),setSurfaceLabels:M.set,surfaceOverlayState:M.snapshot,armPreview:vl,leftArmPreview:Ja,dispose:mt,pickSurface:He,drawSnapshot:_l,faceViewer:ze,setFrame:ge,frameState:()=>({...k}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:Tt,setTexturePreview:xt,faceCandidateState:mn,showFaceCandidate:Ln,selectSample:Se,sampleOptions:()=>[...q].map(([ye,Q])=>({id:ye,label:Q.label,duration:Q.duration,sourceShowElementId:Q.sourceShowElementId,persistentState:Q.persistentState,endPolicy:Q.endPolicy,afterScene:Q.afterScene})),get duration(){return Oe},seek:Ae,standbyDuration:me,standbyLabel:oe,startAsStandby:ce,seekStandby:ye=>{S&&(S=null,Je());let Q=y.setAnchor?.(xe?.defaultId);Q!=null&&(n=-Math.PI/2+Te.degToRad(Q),j=0,ie()),me>0&&Ae(ye%me,Fe,me)},setFrameHandler:ye=>T=ye,sampleState:()=>({lastSkeletonUpdates:X,sampleId:$e,time:R,poseMode:ve,standbyDuration:me,nativeInitializationVerified:!1,viewYaw:a.rotation.y,autoYaw:j,bodyBones:L.filter(ye=>ye.clip===_e).length,faceBones:L.filter(ye=>ye.clip!==_e).length,hand:m.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(Ee){throw mt(),Ee}}var zb="action-plan/1",Hb=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],Vb={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},Gb={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},Wb=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,Xb={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},qb={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},Om={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},dl=(i,e,t)=>Math.max(e,Math.min(t,i));function Yb(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function Zb(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function Kb(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function sf(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:dl(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var zm=i=>!!i&&Wb.test(i);function $b(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=Gb[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||zm(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Bm(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=zm(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function km(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of Om[s]||[])r.push(a);for(let s of Om[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let l=String(o.name||"").toLowerCase(),c=Array.isArray(o.tags)?o.tags:[];return l.includes(s)||c.includes(s)});if(a)return a}return null}function Jb(i,e){let t=e&&e.channels||{},n=Xb[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,l])=>[o,+(l*i.intensity).toFixed(4)])})}return r}function jb(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*dl(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let l=n[a]||null,c=l&&Number.isFinite(l.default)?l.default:1,u=l&&Number.isFinite(l.min)?l.min:0,h=dl(u+(c-u)*r,Math.min(c,u),Math.max(c,u));s.push({ch:a,id:o,blend:"set",weight:1,from:c,to:h,curve:[[0,c],[.18,h],[.75,h],[1,c]]})}return s}function Qb(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,l=a&&Number.isFinite(a.min)?a.min:0,c=l<o?l:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:c,curve:[[0,o],[.12,c],[.88,c],[1,o]]})}return n}function Xa(i,e,t={}){let n=sf(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:zb,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||qb[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+Yb(Kb(n)+"||"+(a?Zb(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!Hb.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Bm(n,a,null),n.type==="surface_reaction"){let c=a.localActions?.surface_reaction,u=c?.bindings?.[n.target];return a.kind!=="snowbreak"||c?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let c=a.localActions?.raise_hand;return a.kind!=="snowbreak"||c?.enabled!==!0||c.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(c.sides)||!c.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let c=Qb(a);if(c.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...c),o.owns=c.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let l=$b(n,a);if(l){o.semanticStatus=l.tier,o.confidence=l.confidence,s.push("motion");let c=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[l.motion.group]&&u[l.motion.group][l.motion.index];Array.isArray(h)&&c.push(...h),o.tracks.push({ch:"motion",group:l.motion.group,index:l.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:l.matchedBy,semanticTier:l.tier}),o.owns=Array.from(new Set(c)),o.candidates=Bm(n,a,l.motion)}else{let c=Vb[n.type],u=a.poses||{};if(!!c&&(u[c]===!0||Array.isArray(u)&&u.includes(c)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:c,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let f=Jb(n,a);if(f.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=jb(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...f),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=km(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(c=>c.ch==="expression")){let c=km(n,a);c&&(o.tracks.push({ch:"expression",name:c.name,index:c.index,weight:dl(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var pl=(i,e,t)=>Math.max(e,Math.min(t,i));function eM(i){return i*i*(3-2*i)}function tM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*eM(pl(o,0,1))}}return i[i.length-1][1]}function Hm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function l(M,_,S){a.push({at:e(),kind:M,planId:_.planId,type:_.action.type,...S||{}}),a.length>40&&a.shift()}function c(M,_,...S){if(typeof _=="function")try{_(...S)}catch{}}function u(M,_){let S={plan:M,t0:_,done:!1};r.push(S),l("start",M);for(let b of M.tracks)b.ch==="motion"?c("motion",t.onMotion,b.group,b.index,M):b.ch==="pose"?c("pose",t.onPose,b.name,M):b.ch==="expression"?c("expression",t.onExpression,b,M):b.ch==="speech"&&c("speech",t.onSpeech,b.text,M);return S}function h(M,_,S){if(M.done)return;M.done=!0;let b=r.indexOf(M);b>=0&&r.splice(b,1),l("end",M.plan,{reason:S}),c("end",t.onEnd,M.plan,S)}function f(M,_,S){let b=e(),E=S||Xa(M,_);if(!E||E.stopped||!E.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:E&&E.planId};let x=Number.isFinite(E.action.priority)?E.action.priority:50,T=r[0];if(T){let R=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(x<R)return s.length>=n&&s.shift(),s.push({plan:E,at:b}),l("queued",E,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:E.planId};h(T,b,"preempted")}return u(E,b),{accepted:!0,queued:!1,planId:E.planId,plan:E}}function p(M,_){let S=Math.max(1,M.duration),b=Math.max(0,Math.min(M.fadeIn||0,S*.5)),E=Math.max(0,Math.min(M.fadeOut||0,S*.5)),x=_*S,T=S-E,R=1;return b>0&&x<b&&(R=x/b),E>0&&x>T&&(R=Math.min(R,(S-x)/E)),pl(R,0,1)}function g(M,_,S,b){for(let E of _.tracks){if(!E.curve||!E.id)continue;let T=tM(E.curve,S)*(E.weight===void 0?1:E.weight)*b,R=M[E.id];E.blend==="set"?(!R||b>=R.weight)&&(M[E.id]={id:E.id,value:T,blend:"set",weight:b,ch:E.ch}):R&&R.blend==="set"?R.value+=T:M[E.id]={id:E.id,value:(R?R.value:0)+T,blend:"add",weight:Math.max(R?R.weight:0,b),ch:E.ch}}}function v(M){let _=e(),S={t:_,channels:{},actions:[],finished:[]};for(let b of r.slice()){let E=pl((_-b.t0)/Math.max(1,b.plan.duration),0,1),x=p(b.plan,E);x>0&&g(S.channels,b.plan,E,x),S.actions.push({planId:b.plan.planId,type:b.plan.action.type,progress:E,weight:x}),E>=1&&(S.finished.push(b.plan.planId),h(b,_,"done"))}if(!r.length&&s.length){let b=s.shift();u(b.plan,_),l("dequeued",b.plan)}return o=S,S}function m(M,_){let S=r.find(b=>b.plan.planId===M);return S?(h(S,e(),_||"interrupt"),!0):!1}function d(M){for(let _ of r.slice())h(_,e(),M||"clear");s.length=0}function y(){return{active:r.map(M=>({planId:M.plan.planId,type:M.plan.action.type,progress:pl((e()-M.t0)/Math.max(1,M.plan.duration),0,1)})),queue:s.map(M=>({planId:M.plan.planId,type:M.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:f,tick:v,interrupt:m,clear:d,snapshot:y,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var nM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function af(i,e={}){let t=nM[i]||i;return sf({type:t,...e})}function Vm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,l=null,c=null,u=0,h="stopped",f=0,p=!1,g=!1,v=null,m=null,d=null,y=i.touchBindings?.()||[],M=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(M())||M()<=0)throw new Error("Audio metadata unavailable");let _=()=>p?t.ended?t.duration>=i.duration?M()*1e3:(v||(v={at:e(),time:t.duration*1e3}),Math.min(M()*1e3,v.time+Math.max(0,e()-v.at))):t.currentTime*1e3:e(),S={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(V=>(V==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},b=i.sampleOptions?.()||[];S.localActions.surface_reaction={enabled:y.length>0,bindings:Object.fromEntries(y.map(V=>{let z=b.find(k=>k.id===V.sampleId),ee=n?.(V.sampleId);return[V.region,{sampleId:V.sampleId,animationDuration:(z?.duration||0)*1e3,voiceDuration:(ee?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function E(V,z,ee="",k=!1){d={schema:"local-surface-reaction/1",id:z.id,kind:V,sampleId:z.sampleId,region:z.touch.region,touch:z.touch,withOriginalVoice:z.withVoice,recovered:k,reason:ee,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(d)}catch{}}let x=Hm({now:_,handlers:{onMotion:V=>h=V==="local-arm-preview"?"local-arm-preview":V==="standby-D"||V==="standby-local"?"standby-preview":"playing",onPose:(V,z)=>{if(V!=="snowbreak-raise-hand")return;let ee=z.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),ee.begin(),o=ee,h="local-arm-preview"}catch{ee?.restore(),h="arm-failed"}},onEnd:(V,z)=>{if(f++,V.action.type==="surface_reaction"&&m?.id===V.planId){let ee=m;if(m=null,p&&(t.pause(),z!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),z==="done"){let k=!1;try{k=!!H().accepted&&h==="standby-preview"}catch{x.clear("restore-failed"),h="restore-failed"}E(k?"completed":"failed",ee,k?"local-standby-restored":"local-standby-failed",k)}else E(z.startsWith("audio-")?"failed":"cancelled",ee,z);return}if(V.action.type==="snowbreak_standby"&&z==="done"){H();return}if(V.action.type==="snowbreak_arm_preview"||V.action.type==="raise_hand"){o?.restore(),o=null,h="stopped",i.seek(0),z==="done"&&i.startAsStandby&&H();return}if(p&&(t.pause(),z!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),z==="done"&&c){let ee=c;c=null,R(ee.id,ee.time);return}h=z==="done"?"sample-ended":"stopped",i.seek(z==="done"?i.duration:0),z==="done"&&(V.action.type==="snowbreak_standby"||g)&&H()}}});function T(){if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};let V={type:"snowbreak_sample",source:"manual-preview",priority:80};return x.dispatch(V,S,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:V,duration:(p?M():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function R(V,z=0){return I(),i.selectSample(V),l={id:V,time:z},h="scene-preview",i.seek(Math.min(z,i.duration)),{accepted:!0}}async function L(V,{withVoice:z=!0}={}){let ee=l||c;if(!ee)return{accepted:!1};I(),i.selectSample(ee.id),i.seek(ee.time%i.duration),i.selectSample(V),J(n?.(V));let k=i.sampleOptions?.().find(j=>j.id===V)?.afterScene;return c=k?{id:k,time:0}:ee,g=!1,z&&t?N():T()}function B(V){if(l&&h==="scene-preview")return l.time+=Math.max(0,Math.min(100,V))/1e3,i.seek(l.id==="show_03"||i.sampleOptions?.().find(k=>k.id===l.id)?.endPolicy==="hold"?Math.min(l.time,i.duration):l.time%i.duration),{actions:[]};let z=p?_()/1e3:null,ee=x.tick(V);if(h==="arm-failed")return I(),h="arm-failed",ee;if(ee.actions.length){let k=ee.actions[0];if(k.type==="snowbreak_arm_preview"||k.type==="raise_hand"){if(h==="local-arm-preview")try{o.apply(k.progress)}catch{I(),h="arm-failed"}return ee}k.type==="snowbreak_standby"&&h==="standby-preview"?i.seekStandby(k.progress*i.standbyDuration):h!=="standby-preview"&&i.seek(z===null?k.progress*i.duration:Math.min(i.duration,z))}return ee}function H(){if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};x.clear("standby-switch");let V={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),x.dispatch(V,S,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:V,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function I(V="sample-stop"){l=null,c=null,o?.restore(),o=null,f++,x.clear(V),t&&(t.pause(),t.currentTime=0),p=!1,v=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),h="stopped"}function Y(V="right"){if(!["left","right"].includes(V))return{accepted:!1,reason:"invalid-arm-side"};let z=V==="left"?i.leftArmPreview:i.armPreview;if(!z?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{z.begin(),o=z}catch{return z.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let ee={type:"snowbreak_arm_preview",side:V,source:"manual-preview",priority:80};return x.dispatch(ee,S,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:ee,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function P(V){S.localActions.raise_hand.enabled=!!V,!V&&o&&I()}function O(V,z={}){let ee=af(V,z);if(ee.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let k=Xa(ee,S);if(k.stopped||!k.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:k};if(h==="standby-preview"&&I(),x.activeCount)return{accepted:!1,reason:"sample-busy",plan:k};let j=x.dispatch(ee,S,k);return h==="arm-failed"?(I(),h="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:k}):j}async function $(V,{withVoice:z=!0}={}){if(!y.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(x.activeCount&&h!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let ee=Um(V,y);if(!ee)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(V.frequency)||V.frequency<1||V.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let k=n?.(ee.sampleId)||null;if(z&&!k)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let j=af("surface_reaction",{target:ee.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!z}),ae=Xa(j,S,{planId:"surface-reaction-"+ ++u});if(ae.stopped||!ae.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};I();try{i.selectSample(ee.sampleId),J(k)}catch{try{H()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let ue={id:ae.planId,sampleId:ee.sampleId,touch:V,withVoice:!!z},ie=++f;m=ue,v=null,p=!!z,z&&(r(),t.currentTime=0,s(!0));let he=x.dispatch(j,S,ae);if(!he.accepted)return m=null,p=!1,s(!1),{...he,handled:!1};if(E("started",ue),!z)return{...he,handled:!0};try{return await t.play(),ie!==f?{accepted:!1,handled:!0,reason:"superseded"}:{...he,handled:!0}}catch{return ie===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function F(V){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};I();try{let z=i.selectSample(V);return n&&J(n(V)),i.startAsStandby&&H(),{accepted:!0,...z}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function N(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(h==="standby-preview"&&I(),x.activeCount||p)return{accepted:!1,reason:"sample-busy"};let V=++f;r(),t.currentTime=0,v=null,p=!0,s(!0);let z=T();try{return await t.play(),V!==f?{accepted:!1,reason:"superseded"}:z}catch{return V===f&&(I("audio-play-failed"),h="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let X=()=>{p&&B(0)},W=()=>{p&&(I("audio-error"),h="audio-failed")};function J(V){if(V&&(!Number.isFinite(V.duration)||V.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",X),t?.removeEventListener("error",W),t=V||null,v=null,t?.addEventListener("ended",X),t?.addEventListener("error",W)}return J(t),{bus:x,capability:S,enterScene:R,playSceneReaction:L,dispatchSurfaceTouch:$,selectSample:F,setLocalActionsEnabled:P,dispatchSemantic:O,playArmPreview:Y,playSample:T,playWithVoice:N,tick:B,stop:I,enterStandby:H,setStandbyAfterSample:V=>g=!!V,snapshot:()=>({sceneId:l?.id||c?.id||null,sceneTime:l?.time||0,localReaction:d?{...d,touch:void 0}:null,sampleDuration:i.duration,status:h,active:x.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!v,originalInteractionVerified:!1})}}async function Gm(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",l)},o=()=>{a(),n()},l=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",l),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Wm(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return iM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let l of e.samples){let c=t.samples.find(h=>h.id===l.id),u=i.getAsset(l.assetRole);if(n.has(l.id)||!c||c.sourceShowElementId!==l.sourceShowElementId||u?.kind!=="audio"||l.language!=="Chinese"||l.originalSyncVerified!==!1||!Number.isInteger(l.eventId)||l.eventId<=0||!Number.isInteger(l.voiceCharacterId)||l.voiceCharacterId<=0||typeof l.voiceId!="string"||l.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(l.id),r.push({id:l.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let l of e.events){let c=i.getAsset(l.assetRole);if(n.has(l.id)||c?.kind!=="audio"||!Number.isInteger(l.eventId)||l.eventId<=0||l.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(l.id),r.push({id:l.id,asset:c})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(l=>Gm(l.asset))),a=new Map,o=[];for(let l=0;l<s.length;l++){let c=s[l];c.status==="fulfilled"?a.set(r[l].id,c.value):o.push(r[l].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:l=>a.get(l)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let l of a.values())l.dispose();a.clear()}}}async function iM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,v]of[[e.samples,!0],[e.events,!1]])for(let m of g){let d=t.samples.find(b=>b.id===m.id),y=i.getAsset(m.assetRole),M=i.current.resources.find(b=>b.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||y?.kind!=="audio"||!M||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||v&&(!d||!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||d.sourceShowElementId!==m.sourceShowElementId))throw new Error("Bilingual voice identity mismatch");let _=m.language+":"+m.id+":"+m.eventId;if(r.has(_))throw new Error("Duplicate bilingual voice choice");r.add(_);let S=m.language+":"+m.id;n.has(S)||n.set(S,[]),n.get(S).push({hash:M.assetId,weight:m.weight,eventId:m.eventId}),s.set(M.assetId,y)}if(!r.size)throw new Error("Empty bilingual voice catalog");let l=[...s],c=0;await Promise.all(Array.from({length:Math.min(4,l.length)},async()=>{for(;c<l.length;){let[g,v]=l[c++];try{a.set(g,await Gm(v))}catch{o.push(g)}}}));let u="Chinese",h=!1;function f(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(h)return null;let v=(n.get(u+":"+g)||[]).filter(y=>a.has(y.hash)),m=v.reduce((y,M)=>y+M.weight,0);if(!v.length||!Number.isFinite(m)||m<=0)return null;let d=Math.random()*m;for(let y of v)if(d-=y.weight,d<0)return a.get(y.hash).audio;return a.get(v.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:f,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(f(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,v])=>g.startsWith(u+":")&&v.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){h=!0;for(let g of a.values())g.dispose();a.clear()}}}var Xm=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function qm(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let v=/^(surface_\d+):(\d+)$/.exec(p);return!!v&&!!Fr({mesh:v[1],triangle:Number(v[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function l(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function c(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let v=t.get(p);if(Xm(v,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:v,after:g});let m=s.get(p);return Xm(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function f(p,g,v){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let d of m)o(d.key,d[v]);return g.push(m),!0}return{begin:l,set:c,commit:u,cancel:h,undo:()=>f(n,r,"before"),redo:()=>f(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function Ym(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let l={};try{l=n()}catch{}let c=qm(l),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),f=document.createElement("input");f.type="checkbox",f.id="snowSurfaceEdit",h.append(f,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[N,X]of Object.entries(zi))p.add(new Option(X,N));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),v=document.createElement("input");v.type="checkbox",v.id="snowSurfaceShow",g.append(v,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[N,X]of Object.entries(zi)){let W=document.createElement("span");W.textContent="\u25A0 "+X+" ",W.style.color="#"+nf[N].toString(16).padStart(6,"0"),m.appendChild(W)}t.appendChild(m);let d=document.createElement("button"),y=document.createElement("button");d.id="snowSurfaceUndo",y.id="snowSurfaceRedo",d.textContent="\u64A4\u9500\u6807\u6CE8",y.textContent="\u91CD\u505A\u6807\u6CE8",t.append(d,y);let M=document.createElement("p");M.id="snowSurfaceOverlayInfo",t.appendChild(M);let _=document.createElement("button");_.id="snowSurfaceReset",_.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(_);let S=document.createElement("p");S.id="snowSurfaceStatus",S.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(S);let b=null,E=0,x=!1,T=N=>{let X=Wa(N);return Fr(N,X?{[X]:c.get(X)}:{})};function R(){if(x)return;let N=c.state();d.disabled=!N.undo,y.disabled=!N.redo;let X=i.setSurfaceLabels?.(c.snapshot(),v.checked);M.textContent=v.checked?`\u5DF2\u663E\u793A ${X?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${X?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function L(){E||(E=requestAnimationFrame(()=>{E=0,R()}))}function B(){r(c.snapshot()),R()}function H(){if(!b)return;b.mode==="paint"&&c.cancel(),s.cancel();let N=b.id;b=null,e.hasPointerCapture(N)&&e.releasePointerCapture(N),R()}f.onchange=()=>{H(),f.checked&&(v.checked=!0),R()},p.onchange=H,v.onchange=R,d.onclick=()=>{H(),c.undo()&&(B(),S.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},y.onclick=()=>{H(),c.redo()&&(B(),S.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},_.onclick=()=>{H(),c.begin();for(let N of Object.keys(c.snapshot()))c.set(N,void 0);c.commit()&&B(),S.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function I(N){let X=Wa(N);!X||!N.alphaVerified||(c.set(X,b.region||void 0),L(),S.textContent=`\u5F53\u524D\u5171 ${c.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${zi[b.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function Y(N){if(b||e.dataset.snowbreakFrameEdit==="true"||!f.checked&&!o())return;N.stopPropagation();let X=i.pickSurface(N.clientX,N.clientY);if(b={id:N.pointerId,mode:f.checked?"paint":"touch",region:p.value},e.setPointerCapture(N.pointerId),b.mode==="paint"){c.begin();try{I(X)}catch(W){S.textContent=W.message}}else{let W=T(X);i.senseTouch?.(X,W),W?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:W,source:"skinned-surface"}),b.known=!0,b.hit=X):X?.alphaVerified?(s.begin({pointerId:N.pointerId,x:N.clientX,y:N.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),b.known=!0,b.hit=X):S.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function P(N){if(b?.id===N.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){H();return}if(N.stopPropagation(),b.mode==="paint")try{I(i.pickSurface(N.clientX,N.clientY))}catch(X){S.textContent=X.message}else b.known&&s.move({pointerId:N.pointerId,x:N.clientX,y:N.clientY})}}function O(N){if(b?.id!==N.pointerId)return;N.stopPropagation();let X=b;if(b=null,X.mode==="paint")c.commit()&&B(),S.textContent=`\u5DF2\u4FDD\u5B58 ${c.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(X.known&&o()){let W=s.finish({pointerId:N.pointerId,x:N.clientX,y:N.clientY});W&&(W.surface=X.hit,S.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+W.regionLabel,a(W))}else s.cancel();e.hasPointerCapture(N.pointerId)&&e.releasePointerCapture(N.pointerId)}function $(N){b?.id===N.pointerId&&H()}for(let[N,X]of[["pointerdown",Y],["pointermove",P],["pointerup",O],["pointercancel",$]])e.addEventListener(N,X);function F(N){if(!Array.isArray(N)||N.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");H(),c.begin();let X=0;try{for(let W of N){let J=Wa(W.hit);if(!J||!W.hit.alphaVerified||c.has(J)||c.state().count>=3e4)continue;let V={id:W.id,source:"vision-reviewed",confidence:W.confidence,model:String(W.model||"").slice(0,128),visible:!0};Fr(W.hit,{[J]:V})&&(c.set(J,V),X++)}c.commit()&&B()}catch(W){throw c.cancel(),R(),W}return S.textContent=`\u5DF2\u91C7\u7528 ${X} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,X}return R(),{applyReviewed:F,classify:T,state:c.state,dispose(){H(),x=!0,E&&cancelAnimationFrame(E);for(let[N,X]of[["pointerdown",Y],["pointermove",P],["pointerup",O],["pointercancel",$]])e.removeEventListener(N,X)}}}var Et=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),Km=[Et("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Et("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Et("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Et("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Et("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Et("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Et("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Et("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Et("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Et("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Et("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Et("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Et("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Et("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Et("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Et("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Et("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Et("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Et("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Et("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Et("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Et("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Et("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Et("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Et("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Et("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Et("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Et("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Et("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Zm=Object.freeze(Object.fromEntries(Km.map(i=>[i.id,Object.freeze({...i})]))),W1=Object.freeze(Km.map(i=>i.id));function $m(i){return Zm[i]&&Zm[i].label||String(i||"\u8EAB\u4F53")}var rM="body-touch/1",sM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function Jm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...sM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function l(d){a=String(d||"")}function c(d){o=String(d||"screen")}function u(d){return d?(n={pointerId:d.pointerId,x0:Number(d.x)||0,y0:Number(d.y)||0,x:Number(d.x)||0,y:Number(d.y)||0,t0:e(),path:[[Number(d.x)||0,Number(d.y)||0]],region:d.region||null,confidence:Number(d.confidence)||0,source:d.source||o},{...n}):null}function h(d){if(!n||!d)return null;let y=Number(d.x)||0,M=Number(d.y)||0;return n.x=y,n.y=M,n.path.length<t.maxPath&&n.path.push([y,M]),{x:y,y:M,moved:Math.hypot(y-n.x0,M-n.y0)}}function f(){let d=0;for(let y=1;y<n.path.length;y++)d+=Math.hypot(n.path[y][0]-n.path[y-1][0],n.path[y][1]-n.path[y-1][1]);return{length:d,points:n.path.length}}function p(d,y){if(!n)return null;d&&h(d);let M=e(),_=Math.max(0,M-n.t0),S=n.x-n.x0,b=n.y-n.y0,E=Math.hypot(S,b),x=f(),T=y||"";if(!T)if(_>=t.longMinMs&&E<=t.moveTolerancePx)T="long_press";else if(E>=t.strokeMinPx&&_>=t.strokeMinMs&&x.length>=t.strokeMinPx)T="stroke";else if(E<=t.moveTolerancePx&&_<=t.tapMaxMs){let I=n.region&&(n.region.id||n.region)||"body";r&&M-r.at<=t.doubleGapMs&&r.region===I?(T="double_tap",r=null):(T="tap",r={at:M,region:I})}else T="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},L=typeof R=="string"?R:R.id||"body";s.push({at:M,region:L}),s=s.filter(I=>M-I.at<=t.frequencyWindowMs);let B=s.filter(I=>I.region===L).length,H={schema:rM,type:"body_touch",modelId:a,region:L,regionLabel:R.label||$m(L),side:R.side||"",group:R.group||"",gesture:T,durationMs:Math.round(_),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:B,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+b.toFixed(1)},distance:+E.toFixed(1),pathLength:+x.length.toFixed(1),at:Math.round(M)};return n=null,H}function g(){n=null}function v(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:p,cancel:g,reset:v,state:m,setModelId:l,setSource:c,config:t}}var qa=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),of=Object.freeze({...qa,scale:3,x:-.12,y:-.02});function cf(i){return i&&Object.keys(qa).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function lf(i,e,t,{onEditing:n=()=>{},initialFrame:r=of,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:l=!0,verticalSign:c=1,dragScale:u=()=>({x:1,y:1})}={}){let h;try{h=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(cf(h)&&(!o||Number.isFinite(h.depth)&&Math.abs(h.depth)<=1.5)?h:cf(r)?r:of);let f=document.createElement("section");f.id=a+"Editor",f.hidden=!0,f.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(f,p);let g=!1,v=null,m=0,d=null,y=null,M=new Map,_=new Map,S=document.createElement("select");S.id=a+"DragMode",S.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),S.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let b=document.createElement("div");b.textContent=s,f.append(b,S);let E=(F,N,X)=>{let W=document.createElement("button");return W.textContent=F,W.id=N.replace("presentation",a),W.onclick=X,f.append(W),W};function x(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function T(){let F=i.frameState();for(let[N,X]of _)X.value=F[N]}function R(F){i.setFrame({...i.frameState(),...F}),T()}function L(){m=0,d&&(R(d),d=null)}function B(F){d={...d||{},...F},m||(m=requestAnimationFrame(L))}function H(F){m&&(cancelAnimationFrame(m),L()),!F&&v&&R(v),x(),g=!1,f.hidden=!0,p.hidden=!0;for(let N of M.keys())e.hasPointerCapture(N)&&e.releasePointerCapture(N);M.clear(),y=null,e.dataset.snowbreakFrameEdit="false",n(!1)}E("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{R(cf(r)?r:of),x()}),E("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{R(qa),x()}),E("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{f.hidden=!0,p.hidden=!1}),E("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>H(!0)),E("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>H(!1)),p.onclick=()=>H(!0);for(let[F,N,X,W,J]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...l?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let V=document.createElement("label");V.textContent=N;let z=document.createElement("input");z.type="range",z.min=X,z.max=W,z.step=J,z.id=a+"_"+F,z.style.width="100%",z.oninput=()=>B({[F]:Number(z.value)}),z.onchange=()=>{L(),x()},_.set(F,z),V.append(z),f.append(V)}let I=F=>({x:F.clientX,y:F.clientY});function Y(F){g&&(F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,I(F)),e.setPointerCapture(F.pointerId),y={frame:i.frameState(),points:[...M.values()]})}function P(F){if(!g||!M.has(F.pointerId)||!y)return;F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,I(F));let N=[...M.values()],X=y.points,W=y.frame;if(N.length>=2&&X.length>=2){let J=V=>Math.hypot(V[0].x-V[1].x,V[0].y-V[1].y);B({scale:W.scale*J(N)/Math.max(5,J(X))})}else if(N.length===1&&X.length===1){let J=(N[0].x-X[0].x)/e.clientWidth,V=(N[0].y-X[0].y)/e.clientHeight;B(S.value==="rotate"?{yaw:W.yaw+J*300,pitch:W.pitch+V*100}:{x:W.x+J*u().x,y:W.y+V*c*u().y})}}function O(F){!g||!M.has(F.pointerId)||(F.preventDefault(),F.stopImmediatePropagation(),M.delete(F.pointerId),e.hasPointerCapture(F.pointerId)&&e.releasePointerCapture(F.pointerId),m&&(cancelAnimationFrame(m),L()),x(),y={frame:i.frameState(),points:[...M.values()]})}let $=[["pointerdown",Y],["pointermove",P],["pointerup",O],["pointercancel",O]];for(let[F,N]of $)e.addEventListener(F,N,!0);return{get active(){return g},toggle(){if(g){H(!0);return}g=!0,v=i.frameState(),T(),f.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&H(!0)},dispose(){g&&H(!0);for(let[F,N]of $)e.removeEventListener(F,N,!0);f.remove(),p.remove()},state:()=>i.frameState()}}var eg=!0,ii=document.querySelector("#stage"),jm=document.querySelector("#status"),Hi=document.querySelector("#editor"),Or=null,ml=null,hf={},ff="Chinese",Ya=0,pf="",df,ke,tt,Pn,xl,In,vi,$a,Ct,gl=0,ri=!1,Za=!0,Br=yf(i=>xf(Ct,i.tempo,performance.now())),bi=document.createElement("button");bi.id="finishPaint";bi.hidden=!0;bi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(bi);function Ys(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),bi.hidden=!0,Hi.classList.remove("open")}bi.onclick=Ys;var pn=i=>{let e={...i,nonce:pf};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},uf=i=>{jm.textContent=i,jm.hidden=!i};function yl(){vi?.dispose(),vi=null,Br.close(),Ct=null,bi.hidden=!0,In?.dispose(),$a?.dispose(),xl?.dispose(),tt?.stop("renderer-close"),Pn?.dispose(),ke?.dispose(),df?.dispose(),$a=In=xl=tt=Pn=ke=df=null,Hi.replaceChildren()}async function Qm(i,e,t){let n=++Ya;pf=e,ri=!1,ii.dataset.snowbreakPaused="false",yl(),uf("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026");let r,s,a;try{if(t){if(!Or)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Or.selectVariant(t)}else{Or=null;let y=await fetch(i);if(!y.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await ud(new Uint8Array(await y.arrayBuffer()))}if(!["Enya","Fenny"].includes(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await Fm(ii,r.runtime),a=r.runtime.getAsset("voiceCatalog")?await Wm(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==Ya){s.dispose(),a.dispose(),r.runtime.dispose();return}Or=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),df=r.runtime,ke=s,Pn=a,ke.setRenderBudget(hf),Pn.setLanguage?.(ff);let o=ke.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,tt=Vm(ke,{audioForSample:y=>Pn.getAudio(y)}),ke.sceneInteractions.configure({scene:()=>tt.snapshot().sceneId||ke.editingScene,reaction:y=>{tt.playSceneReaction(y,{withVoice:Za})},voice:y=>{if(Za){let M=Pn.getAudio(y);M&&(M.currentTime=0,M.play().catch(()=>{}))}},event:pn}),ke.showFaceCandidate(!0);let l=ke.sampleOptions().find(y=>y.id===ke.sampleState().sampleId);l?.persistentState?tt.enterScene(l.id):tt.enterStandby(),ke.faceViewer(),gl=performance.now();let c=null,u=y=>{if(pn({type:"editing",active:y}),y){let M=tt.snapshot();c=M.sceneId?{id:M.sceneId,time:M.sceneTime}:null,ke.editingScene=c?.id||null,ke.sceneInteractions.cancel(),tt.stop("placement-edit"),c&&(ke.selectSample(c.id),ke.seek(c.time%ke.duration)),Ys()}else ri||(c?tt.enterScene(c.id,c.time):tt.enterStandby(),c=null,ke.editingScene=null)},h=()=>{vi?.dispose();let y=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";vi=lf({setFrame:ke.setModelFrame,frameState:ke.modelFrameState},ii,"model-placement:"+y+r.selection?.mode+":"+(tt.snapshot().sceneId||"main"),{initialFrame:{...qa,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:ke.modelDragScale,onEditing:u})};ke.setupModelEditor=h,h(),In=lf(ke,ii,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:ke.presentationDefault,onEditing:u}),$a=_f(ke,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let f="";ke.setFrameHandler(()=>{let y=performance.now();if(ri||tt.tick(Math.min(100,Math.max(0,y-gl))),gl=y,!ri&&Ct){let b=ja(Ct,y),E=Ct.duration,x=Ct.stop===void 0?1:Math.max(0,1-(y-Ct.stop)/300);if(b>=E||x===0)Ct=null;else{let T=Math.max(0,Math.min(1,b/.3,(E-b)/(.3*Ct.rate),x)),R=T*T*(3-2*T);ke.applyLearnedMotion(Ct.id,b,R,{amplitude:Br.get().amplitude})}}let M=tt.snapshot(),_=Ct?"learned:"+Ct.id:M.status,S=_+":"+(M.sceneId||"")+":"+ke.sampleState().sampleId;S!==f&&(f=S,pn({type:"selfState",state:Ka()}),pn({type:"playback",active:!!Ct||["playing","scene-preview","local-arm-preview"].includes(M.status),status:_,label:ke.sampleOptions().find(b=>b.id===ke.sampleState().sampleId)?.label}))});let p=r.manifest.resources.filter(y=>y.kind==="geometry").map(y=>y.assetId).join("-"),g="surface:"+r.manifest.skinId+":"+p;xl=Ym(ke,ii,Hi,{load:()=>JSON.parse(localStorage.getItem(g)||"{}"),save:y=>localStorage.setItem(g,JSON.stringify(y)),tracker:Jm({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!ri,onEvent:async y=>{pn({type:"touch",region:y.region,label:y.regionLabel,gesture:y.gesture,confidence:y.confidence,source:y.regionSource,durationMs:y.durationMs,frequency:y.frequency,completed:!0}),eg||await tt.dispatchSurfaceTouch(y,{withVoice:Za})}});let v=document.createElement("button");v.textContent="\u5173\u95ED\u5DE5\u5177",v.onclick=Ys,Hi.prepend(v);let m=Hi.querySelector("#snowSurfaceRegion"),d=Hi.querySelector("#snowSurfaceEdit");d.addEventListener("change",()=>{d.checked&&(Hi.classList.remove("open"),bi.textContent="\u5B8C\u6210"+m.selectedOptions[0].textContent+"\u6807\u6CE8",bi.hidden=!1)}),uf(""),pn({type:"ready",bodyActions:ke.embodiment.snapshot().available,selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:ke.sampleOptions().map(y=>y.id),voices:Pn.snapshot().available,learned:ke.learnedOptions().map(y=>y.id)}),window.__snowbreakMigration={display:ke,adapter:tt,voices:Pn,editor:xl,presentation:In,manifest:r.manifest}}catch(o){if(n!==Ya){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}yl(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),uf("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),pn({type:"error",message:String(o.message||o)})}}async function aM(i){if(i.type==="hardwareBudget"){hf={thermal:i.thermal,lowPower:i.lowPower},ke?.setRenderBudget(hf);return}if(i.type==="dispose"){Ya++,yl();return}if(i.type==="load")return Qm(i.url,i.nonce);if(i.type==="variant")return Or?.variants.some(e=>e.id===i.id)?Qm(null,pf,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(ff=i.language==="ja"?"Japanese":"Chinese",tt){let e=tt.snapshot();tt.stop("voice-language-change"),Pn?.setLanguage?.(ff),e.sceneId?tt.enterScene(e.sceneId,e.sceneTime):tt.enterStandby()}return}if(tt){if(["body","gesture","sample","learned","stop"].includes(i.type)){if(Pn?.stop?.(),i.automatic&&(vi?.active||In?.active)){pn({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}vi?.close(),In?.close()}if(i.type==="body"){if(ri)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Ct=null,tt.snapshot().sceneId||(tt.stop("body-command"),tt.enterStandby()),ke.embodiment.command(i.id),await new Promise(e=>setTimeout(e,750)),pn({type:"selfState",state:Ka(),requestId:i.requestId});return}if(i.type==="gesture"){if(ri)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Ct=null,tt.snapshot().sceneId||(tt.stop("ai-gesture"),tt.enterStandby()),ke.embodiment.playGesture(i.id,i.plan),pn({type:"selfState",state:Ka()});return}if(i.type==="touchPolicy"){eg=!!i.aiControlled;return}if(i.type==="danceSettings"){Br.set(i);return}if(i.type==="danceEdit"){Br.toggle();return}if(i.type==="speechLevel"){ke.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){ke.setGaze(i.x,i.y);return}if(i.type==="pause"){Pn?.stop?.(),vi?.close(),Br.close(),ml=tt.snapshot().sceneId,ke.sceneInteractions.cancel(),ke.embodiment.reset(),ke.resetSenses(),Ct=null,ri=!0,$a?.close(),In?.close(),ii.dataset.snowbreakPaused="true",tt.stop("background"),Ys();return}if(i.type==="resume"){ri=!1,ii.dataset.snowbreakPaused="false",gl=performance.now(),ml?(tt.enterScene(ml),ml=null):tt.enterStandby();return}if(i.type==="stop"){if(ke.embodiment.reset(),Ct){Ct.stop=performance.now();return}tt.stop(),tt.enterStandby();return}if(i.type==="officialTouchPoints"){ke.sceneInteractions.togglePoints()||pn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){Ct=null,In.close(),Hi.classList.contains("open")||!bi.hidden?Ys():Hi.classList.add("open");return}if(i.type==="lightingEdit"){In.close(),Ys(),$a.toggle();return}if(i.type==="modelEdit"){Ct=null,In.close(),vi.toggle();return}if(i.type==="modelFrame"){ke.setModelFrame(i.frame);return}if(i.type==="frameEdit"){Ct=null,vi.close(),In.toggle();return}if(i.type==="scene")return ke.setSceneVisible(!!i.visible);if(i.type==="room")return ke.setRoomVisible(!!i.visible);if(i.type==="voice"){if(Za=!!i.enabled,!Za){Pn?.stop?.();let e=tt.snapshot().sceneId;tt.stop("voice-disabled"),e?tt.enterScene(e):tt.enterStandby()}return}if(i.type==="sample"&&ke.sampleOptions().some(e=>e.id===i.id)){if(ke.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||ke.sampleOptions().find(t=>t.id===i.id)?.persistentState){Ct=null,vi.close(),ke.embodiment.reset(),tt.enterScene(i.id),ke.setupModelEditor(),pn({type:"selfState",state:Ka()});return}if(tt.snapshot().sceneId){let t=i.id==="head"?ke.sceneInteractions.headReaction():null;await tt.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}ke.embodiment.releaseHands(),Ct=null,In.close(),ri=!1,tt.stop(),tt.selectSample(i.id),tt.setStandbyAfterSample(!0),(i.withVoice&&Pn.getAudio(i.id)?await tt.playWithVoice():tt.playSample()).accepted||pn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){ke.embodiment.releaseHands();let e=ke.learnedOptions().find(t=>t.id===i.id);if(!e)return;In.close(),tt.stop("learned-motion"),tt.enterStandby(),Ct={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Br.get().tempo:1}}}}function Ka(){if(!ke)return null;let i=ke.embodiment.snapshot(),e=tt?.snapshot(),t=ke.sampleOptions().find(n=>n.id===ke.sampleState().sampleId);return{...i,lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:Ct?{id:Ct.id,time:ja(Ct,performance.now()),rate:Ct.rate,amplitude:Br.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Or?.selection?.outfit||"unknown",mode:Or?.selection?.mode||"unknown"}}function oM(){if(!ke||ri)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ii.width,ii.height);i.width=Math.round(ii.width*e),i.height=Math.round(ii.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),ke.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:Ka,portrait:oM,performance:()=>ke?.performanceState(),receive:i=>{aM(i).catch(e=>pn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{Ya++,yl()});pn({type:"pageReady"});})();
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
