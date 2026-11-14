(()=>{var ag=Object.defineProperty;var og=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var lg=(i,e)=>{for(var t in e)ag(i,t,{get:e[t],enumerable:!0})};var uf={};lg(uf,{AsyncCompress:()=>gg,AsyncDecompress:()=>vg,AsyncDeflate:()=>$d,AsyncGunzip:()=>jd,AsyncGzip:()=>gg,AsyncInflate:()=>Wc,AsyncUnzipInflate:()=>Pg,AsyncUnzlib:()=>ef,AsyncZipDeflate:()=>Tg,AsyncZlib:()=>yg,Compress:()=>Ic,DecodeUTF8:()=>Sg,Decompress:()=>Uc,Deflate:()=>Gn,EncodeUTF8:()=>wg,FlateErrorCode:()=>pg,Gunzip:()=>uo,Gzip:()=>Ic,Inflate:()=>vn,Unzip:()=>Lg,UnzipInflate:()=>Ig,UnzipPassThrough:()=>cf,Unzlib:()=>fo,Zip:()=>Ag,ZipDeflate:()=>Eg,ZipPassThrough:()=>ea,Zlib:()=>Lc,compress:()=>xg,compressSync:()=>Pc,decompress:()=>bg,decompressSync:()=>Mg,deflate:()=>Jd,deflateSync:()=>ra,gunzip:()=>Qd,gunzipSync:()=>ho,gzip:()=>xg,gzipSync:()=>Pc,inflate:()=>Xc,inflateSync:()=>ts,strFromU8:()=>Yc,strToU8:()=>Ki,unzip:()=>Ng,unzipSync:()=>Ug,unzlib:()=>tf,unzlibSync:()=>po,zip:()=>Rg,zipSync:()=>Cg,zlib:()=>_g,zlibSync:()=>Nc});function fr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function Jd(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[jr],function(n){return $i(ra(n.data[0],n.data[1]))},0,t)}function ra(i,e){return dr(i,e||{},0,0)}function Xc(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[Jr],function(n){return $i(ts(n.data[0],Bc(n.data[1])))},1,t)}function ts(i,e){return na(i,{i:2},e&&e.out,e&&e.dictionary)}function xg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[jr,Xd,function(){return[Pc]}],function(n){return $i(Pc(n.data[0],n.data[1]))},2,t)}function Pc(i,e){e||(e={});var t=$r(),n=i.length;t.p(i);var r=dr(i,e,Hc(e),8),s=r.length;return kc(r,e),_t(r,s-8,t.d()),_t(r,s-4,n),r}function Qd(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[Jr,qd,function(){return[ho]}],function(n){return $i(ho(n.data[0],n.data[1]))},3,t)}function ho(i,e){var t=zc(i);return t+8>i.length&&Je(6,"invalid gzip data"),na(i.subarray(t,-8),{i:2},e&&e.out||new ct(Kd(i)),e&&e.dictionary)}function _g(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[jr,Yd,function(){return[Nc]}],function(n){return $i(Nc(n.data[0],n.data[1]))},4,t)}function Nc(i,e){e||(e={});var t=go();t.p(i);var n=dr(i,e,e.dictionary?6:2,4);return Vc(n,e),_t(n,n.length-4,t.d()),n}function tf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Qr(i,e,[Jr,Zd,function(){return[po]}],function(n){return $i(po(n.data[0],Bc(n.data[1])))},5,t)}function po(i,e){return na(i.subarray(Gc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function bg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),i[0]==31&&i[1]==139&&i[2]==8?Qd(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Xc(i,e,t):tf(i,e,t)}function Mg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?ho(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?ts(i,e):po(i,e)}function Ki(i,e){if(e){for(var t=new ct(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Pd)return Pd.encode(i);for(var r=i.length,s=new ct(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new ct(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Vn(s,0,a)}function Yc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Dc)return Dc.decode(i);var r=rf(i),s=r.s,t=r.r;return t.length&&Je(8),s}}function Rg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Je(7);var n={};qc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},d=function(m,f){mo(function(){t(m,f)})};mo(function(){d=t});var p=function(){var m=new ct(o+22),f=a,M=o-a;o=0;for(var _=0;_<c;++_){var y=l[_];try{var w=y.c.length;qr(m,o,y,y.f,y.u,w);var b=30+y.f.length+Zi(y.extra),E=o+b;m.set(y.c,E),qr(m,a,y,y.f,y.u,w,o,y.m),a+=16+b+(y.m?y.m.length:0),o=E+w}catch(x){return d(x,null)}}Zc(m,a,l.length,M,f),d(null,m)};s||p();for(var g=function(m){var f=r[m],M=n[f],_=M[0],y=M[1],w=$r(),b=_.length;w.p(_);var E=Ki(f),x=E.length,T=y.comment,C=T&&Ki(T),L=C&&C.length,O=Zi(y.extra),H=y.level==0?0:8,I=function(V,P){if(V)h(),d(V,null);else{var N=P.length;l[m]=ia(y,{size:b,crc:w.d(),c:P,f:E,m:C,u:x!=f.length||C&&T.length!=L,compression:H}),a+=30+x+O+N,o+=76+2*(x+O)+(L||0)+N,--s||p()}};if(x>65535&&I(Je(11,0,1),null),!H)I(null,_);else if(b<16e4)try{I(null,ra(_,y))}catch(V){I(V,null)}else u.push(Jd(_,y,I))},v=0;v<c;++v)g(v);return h}function Cg(i,e){e||(e={});var t={},n=[];qc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=Ki(a),d=h.length,p=l.comment,g=p&&Ki(p),v=g&&g.length,m=Zi(l.extra);d>65535&&Je(11);var f=u?ra(c,l):c,M=f.length,_=$r();_.p(c),n.push(ia(l,{size:c.length,crc:_.d(),c:f,f:h,m:g,u:d!=a.length||g&&p.length!=v,o:r,compression:u})),r+=30+d+m+M,s+=76+2*(d+m)+(v||0)+M}for(var y=new ct(s+22),w=r,b=s-r,E=0;E<n.length;++E){var h=n[E];qr(y,h.o,h,h.f,h.u,h.c.length);var x=30+h.f.length+Zi(h.extra);y.set(h.c,h.o+x),qr(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+x+(h.m?h.m.length:0)}return Zc(y,r,n.length,b,w),y}function Ng(i,e,t){t||(t=e,e={}),typeof t!="function"&&Je(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,f){mo(function(){t(m,f)})};mo(function(){a=t});for(var o=i.length-22;Bt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(Je(13,0,1),null),r;var c=un(i,o+8);if(c){var l=c,u=Bt(i,o+16),h=u==4294967295||l==65535;if(h){var d=Bt(i,o-12);h=Bt(i,d)==101075792,h&&(l=c=Bt(i,d+32),u=Bt(i,d+48))}for(var p=e&&e.filter,g=function(m){var f=of(i,u,h),M=f[0],_=f[1],y=f[2],w=f[3],b=f[4],E=f[5],x=af(i,E);u=b;var T=function(L,O){L?(r(),a(L,null)):(O&&(s[w]=O),--c||a(null,s))};if(!p||p({name:w,size:_,originalSize:y,compression:M}))if(!M)T(null,Vn(i,x,x+_));else if(M==8){var C=i.subarray(x,x+_);if(y<524288||_>.8*y)try{T(null,ts(C,{out:new ct(y)}))}catch(L){T(L,null)}else n.push(Xc(C,{size:y},T))}else T(Je(14,"unknown compression type "+M,1),null);else T(null,null)},v=0;v<l;++v)g(v)}else a(null,{});return r}function Ug(i,e){for(var t={},n=i.length-22;Bt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Je(13);var r=un(i,n+8);if(!r)return{};var s=Bt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Bt(i,n-12);a=Bt(i,o)==101075792,a&&(r=Bt(i,o+32),s=Bt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=of(i,s,a),h=u[0],d=u[1],p=u[2],g=u[3],v=u[4],m=u[5],f=af(i,m);s=v,(!c||c({name:g,size:d,originalSize:p,compression:h}))&&(h?h==8?t[g]=ts(i.subarray(f,f+d),{out:new ct(p)}):Je(14,"unknown compression type "+h):t[g]=Vn(i,f,f+d))}return t}var Cd,fg,ct,hn,ta,Yr,Zr,js,Ld,Nd,Fc,lo,Ud,Dd,Ac,Qs,Ei,vt,Hn,Ti,vt,vt,vt,vt,Xr,vt,Fd,Od,Bd,kd,so,zn,ao,Kr,Vn,pg,zd,Je,na,li,Gr,oo,co,Rc,Wr,Oc,Cc,Hd,Yi,Vd,Gd,$r,go,dr,ia,Id,ro,mg,Wd,Jr,jr,Xd,qd,Yd,Zd,$i,Bc,Qr,Wn,es,un,Bt,Tc,_t,kc,zc,Kd,Hc,Vc,Gc,Gn,$d,vn,Wc,Ic,gg,uo,jd,Lc,yg,fo,ef,Uc,vg,qc,Pd,Dc,nf,rf,Sg,wg,sf,af,of,lf,Zi,qr,Zc,ea,Eg,Tg,Ag,cf,Ig,Pg,Lg,mo,hf=og(()=>{Cd={},fg=(function(i,e,t,n,r){var s=new Worker(Cd[e]||(Cd[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),ct=Uint8Array,hn=Uint16Array,ta=Int32Array,Yr=new ct([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zr=new ct([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),js=new ct([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ld=function(i,e){for(var t=new hn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ta(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Nd=Ld(Yr,2),Fc=Nd.b,lo=Nd.r;Fc[28]=258,lo[258]=28;Ud=Ld(Zr,0),Dd=Ud.b,Ac=Ud.r,Qs=new hn(32768);for(vt=0;vt<32768;++vt)Ei=(vt&43690)>>1|(vt&21845)<<1,Ei=(Ei&52428)>>2|(Ei&13107)<<2,Ei=(Ei&61680)>>4|(Ei&3855)<<4,Qs[vt]=((Ei&65280)>>8|(Ei&255)<<8)>>1;Hn=(function(i,e,t){for(var n=i.length,r=0,s=new hn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new hn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new hn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Qs[h]>>c]=l}else for(o=new hn(n),r=0;r<n;++r)i[r]&&(o[r]=Qs[a[i[r]-1]++]>>15-i[r]);return o}),Ti=new ct(288);for(vt=0;vt<144;++vt)Ti[vt]=8;for(vt=144;vt<256;++vt)Ti[vt]=9;for(vt=256;vt<280;++vt)Ti[vt]=7;for(vt=280;vt<288;++vt)Ti[vt]=8;Xr=new ct(32);for(vt=0;vt<32;++vt)Xr[vt]=5;Fd=Hn(Ti,9,0),Od=Hn(Ti,9,1),Bd=Hn(Xr,5,0),kd=Hn(Xr,5,1),so=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},zn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ao=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Kr=function(i){return(i+7)/8|0},Vn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ct(i.subarray(e,t))},pg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},zd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Je=function(i,e,t){var n=new Error(e||zd[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Je),!t)throw n;return n},na=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ct(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new ct(r*3));var l=function(ue){var Me=t.length;if(ue>Me){var Re=new ct(Math.max(Me*2,ue));Re.set(t),t=Re}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,f=r*8;do{if(!p){u=zn(i,h,1);var M=zn(i,h+1,3);if(h+=3,M)if(M==1)p=Od,g=kd,v=9,m=5;else if(M==2){var b=zn(i,h,31)+257,E=zn(i,h+10,15)+4,x=b+zn(i,h+5,31)+1;h+=14;for(var T=new ct(x),C=new ct(19),L=0;L<E;++L)C[js[L]]=zn(i,h+L*3,7);h+=E*3;for(var O=so(C),H=(1<<O)-1,I=Hn(C,O,1),L=0;L<x;){var V=I[zn(i,h,H)];h+=V&15;var _=V>>4;if(_<16)T[L++]=_;else{var P=0,N=0;for(_==16?(N=3+zn(i,h,3),h+=2,P=T[L-1]):_==17?(N=3+zn(i,h,7),h+=3):_==18&&(N=11+zn(i,h,127),h+=7);N--;)T[L++]=P}}var Y=T.subarray(0,b),F=T.subarray(b);v=so(Y),m=so(F),p=Hn(Y,v,1),g=Hn(F,m,1)}else Je(1);else{var _=Kr(h)+4,y=i[_-4]|i[_-3]<<8,w=_+y;if(w>r){c&&Je(0);break}o&&l(d+y),t.set(i.subarray(_,w),d),e.b=d+=y,e.p=h=w*8,e.f=u;continue}if(h>f){c&&Je(0);break}}o&&l(d+131072);for(var U=(1<<v)-1,G=(1<<m)-1,le=h;;le=h){var P=p[ao(i,h)&U],fe=P>>4;if(h+=P&15,h>f){c&&Je(0);break}if(P||Je(2),fe<256)t[d++]=fe;else if(fe==256){le=h,p=null;break}else{var pe=fe-254;if(fe>264){var L=fe-257,Z=Yr[L];pe=zn(i,h,(1<<Z)-1)+Fc[L],h+=Z}var ce=g[ao(i,h)&G],z=ce>>4;ce||Je(3),h+=ce&15;var F=Dd[z];if(z>3){var Z=Zr[z];F+=ao(i,h)&(1<<Z)-1,h+=Z}if(h>f){c&&Je(0);break}o&&l(d+131072);var K=d+pe;if(d<F){var ae=s-F,de=Math.min(F,K);for(ae+d<0&&Je(3);d<de;++d)t[d]=n[ae+d]}for(;d<K;++d)t[d]=t[d-F]}}e.l=p,e.p=le,e.b=d,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=m)}while(!u);return d!=t.length&&a?Vn(t,0,d):t.subarray(0,d)},li=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Gr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},oo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Yi,l:0};if(r==1){var a=new ct(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(w,b){return w.f-b.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=s[0].s,n=1;n<r;++n)s[n].s>d&&(d=s[n].s);var p=new hn(d+1),g=co(t[u-1],p,0);if(g>e){var n=0,v=0,m=g-e,f=1<<m;for(s.sort(function(b,E){return p[E.s]-p[b.s]||b.f-E.f});n<r;++n){var M=s[n].s;if(p[M]>e)v+=f-(1<<g-p[M]),p[M]=e;else break}for(v>>=m;v>0;){var _=s[n].s;p[_]<e?v-=1<<e-p[_]++-1:++n}for(;n>=0&&v;--n){var y=s[n].s;p[y]==e&&(--p[y],++v)}g=e}return{t:new ct(p),l:g}},co=function(i,e,t){return i.s==-1?Math.max(co(i.l,e,t+1),co(i.r,e,t+1)):e[i.s]=t},Rc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new hn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Wr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Oc=function(i,e,t){var n=t.length,r=Kr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Cc=function(i,e,t,n,r,s,a,o,c,l,u){li(e,u++,t),++r[256];for(var h=oo(r,15),d=h.t,p=h.l,g=oo(s,15),v=g.t,m=g.l,f=Rc(d),M=f.c,_=f.n,y=Rc(v),w=y.c,b=y.n,E=new hn(19),x=0;x<M.length;++x)++E[M[x]&31];for(var x=0;x<w.length;++x)++E[w[x]&31];for(var T=oo(E,7),C=T.t,L=T.l,O=19;O>4&&!C[js[O-1]];--O);var H=l+5<<3,I=Wr(r,Ti)+Wr(s,Xr)+a,V=Wr(r,d)+Wr(s,v)+a+14+3*O+Wr(E,C)+2*E[16]+3*E[17]+7*E[18];if(c>=0&&H<=I&&H<=V)return Oc(e,u,i.subarray(c,c+l));var P,N,Y,F;if(li(e,u,1+(V<I)),u+=2,V<I){P=Hn(d,p,0),N=d,Y=Hn(v,m,0),F=v;var U=Hn(C,L,0);li(e,u,_-257),li(e,u+5,b-1),li(e,u+10,O-4),u+=14;for(var x=0;x<O;++x)li(e,u+3*x,C[js[x]]);u+=3*O;for(var G=[M,w],le=0;le<2;++le)for(var fe=G[le],x=0;x<fe.length;++x){var pe=fe[x]&31;li(e,u,U[pe]),u+=C[pe],pe>15&&(li(e,u,fe[x]>>5&127),u+=fe[x]>>12)}}else P=Fd,N=Ti,Y=Bd,F=Xr;for(var x=0;x<o;++x){var Z=n[x];if(Z>255){var pe=Z>>18&31;Gr(e,u,P[pe+257]),u+=N[pe+257],pe>7&&(li(e,u,Z>>23&31),u+=Yr[pe]);var ce=Z&31;Gr(e,u,Y[ce]),u+=F[ce],ce>3&&(Gr(e,u,Z>>5&8191),u+=Zr[ce])}else Gr(e,u,P[Z]),u+=N[Z]}return Gr(e,u,P[256]),u+N[256]},Hd=new ta([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yi=new ct(0),Vd=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ct(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=Hd[e-1],d=h>>13,p=h&8191,g=(1<<t)-1,v=s.p||new hn(32768),m=s.h||new hn(g+1),f=Math.ceil(t/3),M=2*f,_=function(_e){return(i[_e]^i[_e+1]<<f^i[_e+2]<<M)&g},y=new ta(25e3),w=new hn(288),b=new hn(32),E=0,x=0,T=s.i||0,C=0,L=s.w||0,O=0;T+2<a;++T){var H=_(T),I=T&32767,V=m[H];if(v[I]=V,m[H]=I,L<=T){var P=a-T;if((E>7e3||C>24576)&&(P>423||!l)){u=Cc(i,c,0,y,w,b,x,C,O,T-O,u),C=E=x=0,O=T;for(var N=0;N<286;++N)w[N]=0;for(var N=0;N<30;++N)b[N]=0}var Y=2,F=0,U=p,G=I-V&32767;if(P>2&&H==_(T-G))for(var le=Math.min(d,P)-1,fe=Math.min(32767,T),pe=Math.min(258,P);G<=fe&&--U&&I!=V;){if(i[T+Y]==i[T+Y-G]){for(var Z=0;Z<pe&&i[T+Z]==i[T+Z-G];++Z);if(Z>Y){if(Y=Z,F=G,Z>le)break;for(var ce=Math.min(G,Z-2),z=0,N=0;N<ce;++N){var K=T-G+N&32767,ae=v[K],de=K-ae&32767;de>z&&(z=de,V=K)}}}I=V,V=v[I],G+=I-V&32767}if(F){y[C++]=268435456|lo[Y]<<18|Ac[F];var ue=lo[Y]&31,Me=Ac[F]&31;x+=Yr[ue]+Zr[Me],++w[257+ue],++b[Me],L=T+Y,++E}else y[C++]=i[T],++w[i[T]]}}for(T=Math.max(T,L);T<a;++T)y[C++]=i[T],++w[i[T]];u=Cc(i,c,l,y,w,b,x,C,O,T-O,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=T,s.w=L)}else{for(var T=s.w||0;T<a+l;T+=65535){var Re=T+65535;Re>=a&&(c[u/8|0]=l,Re=a),u=Oc(c,u+1,i.subarray(T,Re))}s.i=a}return Vn(o,0,n+Kr(u)+r)},Gd=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),$r=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Gd[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},go=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},dr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ct(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Vd(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},ia=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Id=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var h in o.prototype)e+=";"+c+".prototype."+h+"="+o.prototype[h].toString()}else e+=l}else t[c]=o}return e},ro=[],mg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Wd=function(i,e,t,n){if(!ro[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Id(i[o],r,s);ro[t]={c:Id(i[a],r,s),e:s}}var c=ia({},ro[t].e);return fg(ro[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,mg(c),n)},Jr=function(){return[ct,hn,ta,Yr,Zr,js,Fc,Dd,Od,kd,Qs,zd,Hn,so,zn,ao,Kr,Vn,Je,na,ts,$i,Bc]},jr=function(){return[ct,hn,ta,Yr,Zr,js,lo,Ac,Fd,Ti,Bd,Xr,Qs,Hd,Yi,Hn,li,Gr,oo,co,Rc,Wr,Oc,Cc,Kr,Vn,Vd,dr,ra,$i]},Xd=function(){return[kc,Hc,_t,$r,Gd]},qd=function(){return[zc,Kd]},Yd=function(){return[Vc,_t,go]},Zd=function(){return[Gc]},$i=function(i){return postMessage(i,[i.buffer])},Bc=function(i){return i&&{out:i.size&&new ct(i.size),dictionary:i.dictionary}},Qr=function(i,e,t,n,r,s){var a=Wd(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Wn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},es=function(i,e,t,n,r,s,a){var o,c=Wd(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||Je(5),o&&e.ondata(Je(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},un=function(i,e){return i[e]|i[e+1]<<8},Bt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Tc=function(i,e){return Bt(i,e)+Bt(i,e+4)*4294967296},_t=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},kc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&_t(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},zc=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Je(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Kd=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Hc=function(i){return 10+(i.filename?i.filename.length+1:0)},Vc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=go();r.p(e.dictionary),_t(i,2,r.d())}},Gc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Je(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Je(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Gn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ct(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(dr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||Je(5),this.s.l&&Je(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ct(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||Je(5),this.s.l&&Je(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),$d=(function(){function i(e,t){es([jr,function(){return[Wn,Gn]}],this,fr.call(this,e,t),function(n){var r=new Gn(n.data);onmessage=Wn(r)},6,1)}return i})();vn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ct(32768),this.p=new ct(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||Je(5),this.d&&Je(4),!this.p.length)this.p=e;else if(e.length){var t=new ct(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=na(this.p,this.s,this.o);this.ondata(Vn(n,t,this.s.b),this.d),this.o=Vn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Vn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Wc=(function(){function i(e,t){es([Jr,function(){return[Wn,vn]}],this,fr.call(this,e,t),function(n){var r=new vn(n.data);onmessage=Wn(r)},7,0)}return i})();Ic=(function(){function i(e,t){this.c=$r(),this.l=0,this.v=1,Gn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Gn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=dr(e,this.o,this.v&&Hc(this.o),t&&8,this.s);this.v&&(kc(n,this.o),this.v=0),t&&(_t(n,n.length-8,this.c.d()),_t(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Gn.prototype.flush.call(this)},i})(),gg=(function(){function i(e,t){es([jr,Xd,function(){return[Wn,Gn,Ic]}],this,fr.call(this,e,t),function(n){var r=new Ic(n.data);onmessage=Wn(r)},8,1)}return i})();uo=(function(){function i(e,t){this.v=1,this.r=0,vn.call(this,e,t)}return i.prototype.push=function(e,t){if(vn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?zc(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}vn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Kr(this.s.p)+9,this.s={i:0},this.o=new ct(0),this.push(new ct(0),t))},i})(),jd=(function(){function i(e,t){var n=this;es([Jr,qd,function(){return[Wn,vn,uo]}],this,fr.call(this,e,t),function(r){var s=new uo(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Wn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Lc=(function(){function i(e,t){this.c=go(),this.v=1,Gn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Gn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=dr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Vc(n,this.o),this.v=0),t&&_t(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Gn.prototype.flush.call(this)},i})(),yg=(function(){function i(e,t){es([jr,Yd,function(){return[Wn,Gn,Lc]}],this,fr.call(this,e,t),function(n){var r=new Lc(n.data);onmessage=Wn(r)},10,1)}return i})();fo=(function(){function i(e,t){vn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(vn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Gc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&Je(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),vn.prototype.c.call(this,t)},i})(),ef=(function(){function i(e,t){es([Jr,Zd,function(){return[Wn,vn,fo]}],this,fr.call(this,e,t),function(n){var r=new fo(n.data);onmessage=Wn(r)},11,0)}return i})();Uc=(function(){function i(e,t){this.o=fr.call(this,e,t)||{},this.G=uo,this.I=vn,this.Z=fo}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||Je(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),vg=(function(){function i(e,t){Uc.call(this,e,t),this.queuedSize=0,this.G=jd,this.I=Wc,this.Z=ef}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,Uc.prototype.push.call(this,e,t)},i})();qc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=ia(n,s[1]),s=s[0]),s instanceof ct?t[a]=[s,o]:(t[a+="/"]=[new ct(0),o],qc(s,a,t,n))}},Pd=typeof TextEncoder<"u"&&new TextEncoder,Dc=typeof TextDecoder<"u"&&new TextDecoder,nf=0;try{Dc.decode(Yi,{stream:!0}),nf=1}catch{}rf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Vn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Sg=(function(){function i(e){this.ondata=e,nf?this.t=new TextDecoder:this.p=Yi}return i.prototype.push=function(e,t){if(this.ondata||Je(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&Je(8),this.t=null);return}this.p||Je(4);var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=rf(n),s=r.s,a=r.r;t?(a.length&&Je(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),wg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||Je(5),this.d&&Je(4),this.ondata(Ki(e),this.d=t||!1)},i})();sf=function(i){return i==1?3:i<6?2:i==9?1:0},af=function(i,e){return e+30+un(i,e+26)+un(i,e+28)},of=function(i,e,t){var n=un(i,e+28),r=Yc(i.subarray(e+46,e+46+n),!(un(i,e+8)&2048)),s=e+46+n,a=Bt(i,e+20),o=t&&a==4294967295?lf(i,s):[a,Bt(i,e+24),Bt(i,e+42)],c=o[0],l=o[1],u=o[2];return[un(i,e+10),c,l,r,s+un(i,e+30)+un(i,e+32),u]},lf=function(i,e){for(;un(i,e)!=1;e+=4+un(i,e+2));return[Tc(i,e+12),Tc(i,e+4),Tc(i,e+20)]},Zi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Je(9),e+=n+4}return e},qr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=Zi(l);_t(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&Je(10),_t(i,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,s!=-1&&(_t(i,e,t.crc),_t(i,e+4,s<0?-s-2:s),_t(i,e+8,t.size)),_t(i,e+12,c),_t(i,e+14,h),e+=16,a!=null&&(_t(i,e,u),_t(i,e+6,t.attrs),_t(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var g in l){var v=l[g],m=v.length;_t(i,e,+g),_t(i,e+2,m),i.set(v,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},Zc=function(i,e,t,n,r){_t(i,e,101010256),_t(i,e+8,t),_t(i,e+10,t),_t(i,e+12,n),_t(i,e+16,r)},ea=(function(){function i(e){this.filename=e,this.c=$r(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||Je(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),Eg=(function(){function i(e,t){var n=this;t||(t={}),ea.call(this,e),this.d=new Gn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=sf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ea.prototype.push.call(this,e,t)},i})(),Tg=(function(){function i(e,t){var n=this;t||(t={}),ea.call(this,e),this.d=new $d(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=sf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ea.prototype.push.call(this,e,t)},i})(),Ag=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||Je(5),this.d&2)this.ondata(Je(4+(this.d&1)*8,0,1),null,!1);else{var n=Ki(e.filename),r=n.length,s=e.comment,a=s&&Ki(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Zi(e.extra)+30;r>65535&&this.ondata(Je(11,0,1),null,!1);var l=new ct(c);qr(l,0,e,n,o,-1);var u=[l],h=function(){for(var m=0,f=u;m<f.length;m++){var M=f[m];t.ondata(null,M,!1)}u=[]},d=this.d;this.d=0;var p=this.u.length,g=ia(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),d){var m=t.u[p+1];m?m.r():t.d=1}d=1}}),v=0;e.ondata=function(m,f,M){if(m)t.ondata(m,f,M),t.terminate();else if(v+=f.length,u.push(f),M){var _=new ct(16);_t(_,0,134695760),_t(_,4,e.crc),_t(_,8,v),_t(_,12,e.size),u.push(_),g.c=v,g.b=c+v+16,g.crc=e.crc,g.size=e.size,d&&g.r(),d=1}else d&&h()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Je(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Zi(a.extra)+(a.o?a.o.length:0)}for(var o=new ct(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];qr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Zi(a.extra)+(a.o?a.o.length:0),t+=a.b}Zc(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();cf=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Ig=(function(){function i(){var e=this;this.i=new vn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Pg=(function(){function i(e,t){var n=this;t<32e4?this.i=new vn(function(r,s){n.ondata(null,r,s)}):(this.i=new Wc(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Vn(e,0)),this.i.push(e,t)},i.compression=8,i})(),Lg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:cf},this.p=Yi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||Je(5),this.p||Je(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ct(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,h=this.c,d=h&&this.d,p=function(){var f,M=Bt(l,o);if(M==67324752){a=1,c=o,g.d=null,g.c=0;var _=un(l,o+6),y=un(l,o+8),w=_&2048,b=_&8,E=un(l,o+26),x=un(l,o+28);if(u>o+30+E+x){var T=[];g.k.unshift(T),a=2;var C=Bt(l,o+18),L=Bt(l,o+22),O=Yc(l.subarray(o+30,o+=30+E),!w);C==4294967295?(f=b?[-2]:lf(l,o),C=f[0],L=f[1]):b&&(C=-1),o+=x,g.c=C;var H,I={name:O,compression:y,start:function(){if(I.ondata||Je(5),!C)I.ondata(null,Yi,!0);else{var V=n.o[y];V||I.ondata(Je(14,"unknown compression type "+y,1),null,!1),H=C<0?new V(O):new V(O,C,L),H.ondata=function(F,U,G){I.ondata(F,U,G)};for(var P=0,N=T;P<N.length;P++){var Y=N[P];H.push(Y,!1)}n.k[0]==T&&n.c?n.d=H:H.push(Yi,!0)}},terminate:function(){H&&H.terminate&&H.terminate()}};C>=0&&(I.size=C,I.originalSize=L),g.onfile(I)}return"break"}else if(h){if(M==134695760)return c=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(M==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var v=p();if(v==="break")break}if(this.p=Yi,h<0){var m=a?l.subarray(0,c-12-(h==-2&&8)-(Bt(l,c-16)==134695760&&4)):l.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&Je(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),mo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function no(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function yd(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=no(i,t),i.start=t,i.rate=e)}function _d(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,h,d){return Number.isFinite(l)?Math.max(u,Math.min(h,l)):d}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let h of Object.keys(r))r[h].input.value=t[h],r[h].output.textContent=t[h].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[h,d,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let v=document.createElement("label"),m=document.createElement("span"),f=document.createElement("output"),M=document.createElement("input");m.textContent=d+" ",f.textContent=t[h].toFixed(2)+"\xD7",M.type="range",M.min=p,M.max=g,M.step=.05,M.value=t[h],M.style.cssText="display:block;width:100%;margin:14px 0",M.setAttribute("aria-label",d),M.oninput=()=>a({...t,[h]:Number(M.value)}),v.append(m,f,M),n.append(v),r[h]={input:M,output:f}}for(let[h,d]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=h,p.onclick=d,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function vd(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function c(){let f=i.lightingState();for(let[M,_]of r)_.value=f[M];a&&(a.checked=f.shadows),o&&(o.value=f.shadowSize)}function l(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),c()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,M,_,y]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let w=document.createElement("label");w.textContent=M;let b=document.createElement("input");b.id="lighting_"+f,b.type="range",b.min=_,b.max=y,b.step=".01",b.style.width="100%",b.oninput=()=>l({[f]:Number(b.value)}),r.set(f,b),w.append(b),t.append(w)}for(let[f,M]of[["\u6062\u590D\u67D4\u5149",()=>l(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let _=document.createElement("button");_.textContent=f,_.onclick=M,t.append(_)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>l({shadows:a.checked}),u.append(a),t.append(u);let h=document.createElement("label");h.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let d=document.createElement("select");d.id="lighting_resolution",d.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),d.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),d.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",d.onchange=()=>localStorage.setItem("snowTextureLimit",d.value),h.append(d),t.append(h),o=document.createElement("select"),o.id="lighting_shadowSize";for(let f of[512,1024,2048])o.add(new Option(f+" \xB7 \u9634\u5F71",String(f)));o.value=i.lightingState().shadowSize,o.onchange=()=>l({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[f,M]of[["adaptive","\u81EA\u52A8\u5E73\u8861\u753B\u8D28\u4E0E\u6D41\u7545\u5EA6"],["quality","\u4F18\u5148\u6E05\u6670\u5EA6"],["battery","\u8282\u80FD \xB7 30\u5E27"]])p.add(new Option(M,f));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let v=()=>{let f=i.performanceState();g.textContent=`GPU \u6E32\u67D3 / \u8499\u76AE \xB7 ${f.fps}\u5E27\uFF08\u76EE\u6807${f.targetFPS}\uFF09
\u7F13\u51B2 ${f.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${f.pixelRatio.toFixed(2)}
\u7ED8\u5236 ${f.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${f.triangles}
\u70ED\u72B6\u6001 ${f.thermal} \xB7 ${f.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}
\u5E27\u95F4\u9694 ${f.meanFrameMs}ms\uFF08\u4E0D\u662F GPU \u8BA1\u65F6\uFF09`},m=setInterval(()=>{t.hidden||v()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),c(),{toggle(){t.hidden=!t.hidden,v()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function bd(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var cg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),oi=(i,e)=>i>>>e|i<<32-e;function ug(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let f=t[m-15],M=t[m-2];t[m]=(oi(f,7)^oi(f,18)^f>>>3)+t[m-16]+(oi(M,17)^oi(M,19)^M>>>10)+t[m-7]}let[o,c,l,u,h,d,p,g]=e;for(let m=0;m<64;m++){let f=g+(oi(h,6)^oi(h,11)^oi(h,25))+(h&d^~h&p)+cg[m]+t[m]>>>0,M=(oi(o,2)^oi(o,13)^oi(o,22))+(o&c^o&l^c&l)>>>0;g=p,p=d,d=h,h=u+f>>>0,u=l,l=c,c=o,o=f+M>>>0}let v=[o,c,l,u,h,d,p,g];for(let m=0;m<8;m++)e[m]+=v[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function wc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):ug(i)}var Vr={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},Md=new TextDecoder("utf-8",{fatal:!0});function Sd(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Vr.archive,n=Vr.total){if(![Vr.total,192*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Vr.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let d=i.length-22;d>=Math.max(0,i.length-65557);d--)if(r.getUint32(d,!0)===101010256&&d+22+r.getUint16(d+20,!0)===i.length){s=d;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>Vr.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=o,h=0;for(let d=0;d<a;d++){if(u+46>s||r.getUint32(u,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let p=r.getUint16(u+8,!0),g=r.getUint16(u+10,!0),v=r.getUint16(u+28,!0),m=r.getUint16(u+30,!0),f=r.getUint16(u+32,!0),M=r.getUint32(u+24,!0);if(u+46+v+m+f>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let _=Md.decode(i.subarray(u+46,u+46+v));if(!bd(_)||l.has(_)||!e.test(_))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(_),h+=M;let y=r.getUint32(u+38,!0)>>>16;if(p&1||![0,8].includes(g)||(y&61440)===40960||M>Vr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(_==="manifest.json"&&M>1024*1024)throw new Error("manifest \u8FC7\u5927");let w=r.getUint32(u+42,!0);if(w+30>o||r.getUint32(w,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let b=r.getUint16(w+26,!0),E=r.getUint16(w+28,!0),x=r.getUint32(u+20,!0);if(w+30+b+E+x>o||Md.decode(i.subarray(w+30,w+30+b))!==_)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u+=46+v+m+f}if(u!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h}}var Ec=/^[a-zA-Z0-9_-]{1,96}$/,hg=/^[a-f0-9]{64}$/,dg=new Set(["geometry","animation","texture","audio","config"]);function io(i){if(i?.schema!=="snowbreak-skin/1"||!Ec.test(i.characterId)||!Ec.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Ec.test(n.role)||e.has(n.role)||!hg.test(n.assetId)||!dg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function wd({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:d,descriptor:p})=>Promise.resolve().then(()=>e(d,p))));for(let d of h)if(d.status==="rejected")try{t(d.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let h=io(u),d=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(h.resources.map(M=>Promise.resolve().then(()=>i(M,{signal:p.signal})))),v=g.flatMap((M,_)=>M.status==="fulfilled"?[{asset:M.value,descriptor:h.resources[_]}]:[]),m=g.find(M=>M.status==="rejected");if(d!==n||a||m){if(await o(v),d===n&&(s=null),d!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let f=r;return r={manifest:h,resources:v},s=null,f&&await o(f.resources),d!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Ed(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=d=>i[d]|i[d+1]<<8|i[d+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Td(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Ad={geometry:20,animation:32,texture:16,audio:8,config:2};function Rd(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Ad,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Ad[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await wc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Ed(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Td(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function df(i){let e=Sd(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728,201326592),{unzipSync:t}=await Promise.resolve().then(()=>(hf(),uf)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(!["Enya","Fenny"].includes(r.characterId)||!Array.isArray(r.variants)||!(r.characterId==="Fenny"?[2,4]:[4]).includes(r.variants.length))throw new Error("Invalid character collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!(r.characterId==="Fenny"?["normal","underwear"]:["normal","nude"]).includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:io(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!==r.characterId))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[io(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function c(u){let h=s?.find(g=>g.id===u);if(s&&!h)throw new Error("Variant unavailable");let d=h?.manifest||a[0],p=wd(Rd(async g=>n["assets/"+g]));return await p.load(d),{runtime:p,manifest:d,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:g,mode:v,outfit:m})=>({id:g,mode:v,outfit:m}))||[],selectVariant:c}}let l;try{l=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return c(s?.some(u=>u.id===l)?l:r.defaultVariant)}function ff(i,e,t=4096){let n=t===2048?2048:4096,r=(e.current.characterId==="Fenny"?256:320)*(n===2048?.5:1)*1024**2,s=new Map;for(let l of i?.materials||[])for(let[u,h]of[["diffuseAssetId",!1],["normalAssetId",!0]]){let d=l[u];if(!d)continue;let p=(h?"normal:":"")+d,g=e.getAsset("texture_"+d)?.data;if(!g||![g.width,g.height].every(_=>Number.isInteger(_)&&_>0&&_<=4096))throw new Error("Missing texture dimensions");let v=/^(ma_|house_)/i.test(l.name),m=h?10:v?5:/head|face|eye/i.test(l.name)?1e3:/hair/i.test(l.name)?80:50,f=Math.min(n,h||v?1024:4096),M=s.get(p);if(M){M.priority=Math.max(M.priority,m),M.cap=Math.max(M.cap,f);continue}s.set(p,{key:p,id:d,normal:h,width:g.width,height:g.height,cap:f,priority:m})}function a(l){let u=Math.min(1,l.cap/Math.max(l.width,l.height));return[Math.max(1,Math.round(l.width*u)),Math.max(1,Math.round(l.height*u))]}let o=l=>{let[u,h]=a(l);return u*h*4*4/3},c=()=>[...s.values()].reduce((l,u)=>l+o(u),0);for(;c()>r;){let l=[...s.values()].filter(u=>u.cap>512&&Math.max(u.width,u.height)>512).map(u=>({e:u,saving:o(u)-o({...u,cap:u.cap/2})})).filter(u=>u.saving>0).sort((u,h)=>u.e.priority/u.saving-h.e.priority/h.saving);if(!l.length)throw new Error("Texture memory budget exceeded");l[0].e.cap/=2}return{limitFor:(l,u=!1)=>s.get((u?"normal:":"")+l)?.cap||1024,snapshot:()=>({requestedLimit:n,budgetMiB:r/1024**2,estimatedMiB:Math.round(c()/1024**2*10)/10,textures:[...s.values()].map(l=>({id:l.id,normal:l.normal,source:[l.width,l.height],size:a(l)}))})}}function pf({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,c=0,l=0,u=0,h=0,d=0,p=0,g=()=>t==="critical"?20:n||t==="serious"?30:60;function v(_,y,w){return Math.max(.5,Math.min(w||1,3,Math.sqrt((t==="critical"?1e6:t==="serious"?16e5:e==="quality"?4e6:e==="battery"?14e5:3e6)/Math.max(1,_*y)))*r)}function m(_={}){return _.mode&&["adaptive","quality","battery"].includes(_.mode)&&(e=_.mode),_.thermal&&["nominal","fair","serious","critical"].includes(_.thermal)&&(t=_.thermal),typeof _.lowPower=="boolean"&&(n=_.lowPower),s=0,a=0,o=0,h=d=0,M()}function f(_=i()){let y=1e3/(e==="battery"?Math.min(30,g()):g());return s&&_-s<y-.75?!1:(s&&_-s<1e3&&(c+=_-s,l++),s=_,o++,a||(a=_),_-a>=2e3&&(u=o*1e3/(_-a),e==="adaptive"&&(h=u<g()*.78?h+1:0,d=u>g()*.94?d+1:0,h>=2&&r>.65?(r=Math.max(.65,r-.1),h=0,p++):d>=4&&r<1&&(r=Math.min(1,r+.05),d=0,p++)),a=_,o=0),!0)}function M(){return{mode:e,thermal:t,lowPower:n,targetFPS:e==="battery"?Math.min(30,g()):g(),fps:Math.round(u*10)/10,meanFrameMs:l?Math.round(c/l*10)/10:0,scale:r,changes:p}}return{begin:f,configure:m,ratio:v,snapshot:M,resetClock(){s=0,a=0,o=0}}}var ep=0,Lu=1,tp=2;var Ua=1,xl=2,Fs=3,En=0,mn=1,en=2,xi=0,Os=1,Nu=2,Uu=3,Du=4,np=5;var Rr=100,ip=101,rp=102,sp=103,ap=104,op=200,lp=201,cp=202,up=203,Fu=204,Ou=205,hp=206,dp=207,fp=208,pp=209,mp=210,gp=211,xp=212,yp=213,_p=214,Xo=0,qo=1,Yo=2,xs=3,Zo=4,Ko=5,$o=6,Jo=7,Bu=0,vp=1,bp=2,ei=0,ku=1,zu=2,Hu=3,Da=4,Vu=5,Gu=6,Wu=7,_u="attached",Mp="detached",Xu=300,lr=301,Cr=302,yl=303,_l=304,Fa=306,ir=1e3,qn=1001,ys=1002,zt=1003,vl=1004;var Ir=1005;var Ht=1006,Bs=1007;var ti=1008;var Tn=1009,qu=1010,Yu=1011,ks=1012,bl=1013,ni=1014,Nn=1015,ii=1016,Ml=1017,Sl=1018,zs=1020,Zu=35902,Ku=35899,$u=1021,Ju=1022,Un=1023,di=1026,cr=1027,wl=1028,El=1029,ur=1030,Tl=1031;var Al=1033,Oa=33776,Ba=33777,ka=33778,za=33779,Rl=35840,Cl=35841,Il=35842,Pl=35843,Ll=36196,Nl=37492,Ul=37496,Dl=37488,Fl=37489,Ha=37490,Ol=37491,Bl=37808,kl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,Kl=37819,$l=37820,Jl=37821,jl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,Va=36285,ic=36286;var _r=2300,vr=2301,Vo=2302,vu=2303,bu=2400,Mu=2401,Su=2402,Sp=2500;var ju=0,Ga=1,Hs=2,wp=3200;var rc=0,Ep=1,ri="",Dt="srgb",pn="srgb-linear",ma="linear",St="srgb";var Go=7680;var Tp=519,Ap=512,Rp=513,Cp=514,sc=515,Ip=516,Pp=517,ac=518,Lp=519,Qu=35044,eh=35048;var th="300 es",jn=2e3,_s=2001;function Dg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Np(){let i=vs("canvas");return i.style.display="block",i}var mf={},bs=null;function ga(...i){let e="THREE."+i.shift();bs?bs("log",e,...i):console.log(e,...i)}function Up(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Up(i);let e="THREE."+i.shift();if(bs)bs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=Up(i);let e="THREE."+i.shift();if(bs)bs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yr(...i){let e=i.join(" ");e in mf||(mf[e]=!0,je(...i))}function Dp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Fp={[Xo]:qo,[Yo]:$o,[Zo]:Jo,[xs]:Ko,[qo]:Xo,[$o]:Yo,[Jo]:Zo,[Ko]:xs},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,fa=Math.PI/180,br=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function Og(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Bg(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function zg(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function Hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wg(i,e){return i+Math.random()*(e-i)}function Xg(i){return i*(.5-Math.random())}function qg(i){i!==void 0&&(gf=i);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yg(i){return i*fa}function Zg(i){return i*br}function Kg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Te={DEG2RAD:fa,RAD2DEG:br,generateUUID:Qn,clamp:mt,euclideanModulo:nh,mapLinear:Og,inverseLerp:Bg,lerp:pa,damp:kg,pingpong:zg,smoothstep:Hg,smootherstep:Vg,randInt:Gg,randFloat:Wg,randFloatSpread:Xg,seededRandom:qg,degToRad:Yg,radToDeg:Zg,isPowerOfTwo:Kg,ceilPowerOfTwo:$g,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:jg,normalize:wt,denormalize:Jn},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var lt=oh,ke=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+h*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){let M=Math.acos(m),_=Math.sin(M);f=Math.sin(f*M)/_,o=Math.sin(o*M)/_,c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+v*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+v*o;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var D=lh,Kc=new D,xf=new ke,ch=class ch{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],M=r[1],_=r[4],y=r[7],w=r[2],b=r[5],E=r[8];return s[0]=a*v+o*M+c*w,s[3]=a*m+o*_+c*b,s[6]=a*f+o*y+c*E,s[1]=l*v+u*M+h*w,s[4]=l*m+u*_+h*b,s[7]=l*f+u*y+h*E,s[2]=d*v+p*M+g*w,s[5]=d*m+p*_+g*b,s[8]=d*f+p*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var ot=ch,$c=new ot,yf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qg(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=gs(r.r),r.g=gs(r.g),r.b=gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:yf,fromXYZ:_f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:yf,fromXYZ:_f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var dt=Qg();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=vs("canvas")),ns.width=e.width,ns.height=e.height;let r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e0=0,Ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var t0=0,jc=new D,jt=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=qn,r=qn,s=Ht,a=ti,o=Un,c=Tn,l=i.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Qn(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Xu;jt.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(p+1)/2,w=(f+1)/2,b=(u+d)/4,E=(h+v)/4,x=(g+m)/4;return _>y&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=b/n,s=E/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=x/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=E/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Et=uh,Qo=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new jt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ms(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gl=class gl{constructor(e,t,n,r,s,a,o,c,l,u,h,d,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,p,g,v,m)}set(e,t,n,r,s,a,o,c,l,u,h,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ji.crossVectors(n,Cn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ji.crossVectors(n,Cn)),Ji.normalize(),xo.crossVectors(Cn,Ji),r[0]=Ji.x,r[4]=xo.x,r[8]=Cn.x,r[1]=Ji.y,r[5]=xo.y,r[9]=Cn.y,r[2]=Ji.z,r[6]=xo.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],M=n[3],_=n[7],y=n[11],w=n[15],b=r[0],E=r[4],x=r[8],T=r[12],C=r[1],L=r[5],O=r[9],H=r[13],I=r[2],V=r[6],P=r[10],N=r[14],Y=r[3],F=r[7],U=r[11],G=r[15];return s[0]=a*b+o*C+c*I+l*Y,s[4]=a*E+o*L+c*V+l*F,s[8]=a*x+o*O+c*P+l*U,s[12]=a*T+o*H+c*N+l*G,s[1]=u*b+h*C+d*I+p*Y,s[5]=u*E+h*L+d*V+p*F,s[9]=u*x+h*O+d*P+p*U,s[13]=u*T+h*H+d*N+p*G,s[2]=g*b+v*C+m*I+f*Y,s[6]=g*E+v*L+m*V+f*F,s[10]=g*x+v*O+m*P+f*U,s[14]=g*T+v*H+m*N+f*G,s[3]=M*b+_*C+y*I+w*Y,s[7]=M*E+_*L+y*V+w*F,s[11]=M*x+_*O+y*P+w*U,s[15]=M*T+_*H+y*N+w*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],M=c*p-l*d,_=o*p-l*h,y=o*d-c*h,w=a*p-l*u,b=a*d-c*u,E=a*h-o*u;return t*(v*M-m*_+f*y)-n*(g*M-m*w+f*b)+r*(g*_-v*w+f*E)-s*(g*y-v*b+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=t*o-n*a,_=t*c-r*a,y=t*l-s*a,w=n*c-r*o,b=n*l-s*o,E=r*l-s*c,x=u*v-h*g,T=u*m-d*g,C=u*f-p*g,L=h*m-d*v,O=h*f-p*v,H=d*f-p*m,I=M*H-_*O+y*L+w*C-b*T+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(o*H-c*O+l*L)*V,e[1]=(r*O-n*H-s*L)*V,e[2]=(v*E-m*b+f*w)*V,e[3]=(d*b-h*E-p*w)*V,e[4]=(c*C-a*H-l*T)*V,e[5]=(t*H-r*C+s*T)*V,e[6]=(m*y-g*E-f*_)*V,e[7]=(u*E-d*y+p*_)*V,e[8]=(a*O-o*C+l*x)*V,e[9]=(n*C-t*O-s*x)*V,e[10]=(g*b-v*y+f*M)*V,e[11]=(h*y-u*b-p*M)*V,e[12]=(o*T-a*L-c*x)*V,e[13]=(t*L-n*T+r*x)*V,e[14]=(v*_-g*w-m*M)*V,e[15]=(u*w-h*_+d*M)*V,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,g=s*h,v=a*u,m=a*h,f=o*h,M=c*l,_=c*u,y=c*h,w=n.x,b=n.y,E=n.z;return r[0]=(1-(v+f))*w,r[1]=(p+y)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(d+f))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(g+_)*E,r[9]=(m-M)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=is.set(r[0],r[1],r[2]).length(),o=is.set(r[4],r[5],r[6]).length(),c=is.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);let l=1/a,u=1/o,h=1/c;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=jn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===jn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===_s)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=jn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===jn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===_s)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gl.prototype.isMatrix4=!0;var Ye=gl,is=new D,Zn=new Ye,n0=new D(0,0,0),i0=new D(1,1,1),Ji=new D,xo=new D,Cn=new D,vf=new Ye,bf=new ke,Ui=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,Mf=new D,rs=new ke,Ai=new Ye,yo=new D,sa=new D,s0=new D,a0=new ke,Sf=new D(1,0,0),wf=new D(0,1,0),Ef=new D(0,0,1),Tf={type:"added"},o0={type:"removed"},ss={type:"childadded",child:null},Qc={type:"childremoved",child:null},Ut=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ui,n=new ke,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ot}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(sa,yo,this.up):Ai.lookAt(yo,sa,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(Ai),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),ss.child=e,this.dispatchEvent(ss),ss.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},l0={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},_o={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=nh(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return dt.workingToColorSpace(rn.copy(this),e),Math.round(mt(rn.r*255,0,255))*65536+Math.round(mt(rn.g*255,0,255))*256+Math.round(mt(rn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,s=rn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Dt){dt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(_o);let n=pa(ji.h,_o.h,t),r=pa(ji.s,_o.s,t),s=pa(ji.l,_o.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new tt;tt.NAMES=Op;var Mr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new D,Ri=new D,tu=new D,Ci=new D,as=new D,os=new D,Af=new D,nu=new D,iu=new D,ru=new D,su=new Et,au=new Et,ou=new Et,ui=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kn.subVectors(r,t),Ri.subVectors(n,t),tu.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Ri),c=Kn.dot(tu),l=Ri.dot(Ri),u=Ri.dot(tu),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),Ri.subVectors(e,t),Kn.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;as.subVectors(r,n),os.subVectors(s,n),nu.subVectors(e,n);let c=as.dot(nu),l=os.dot(nu);if(c<=0&&l<=0)return t.copy(n);iu.subVectors(e,r);let u=as.dot(iu),h=os.dot(iu);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(as,a);ru.subVectors(e,s);let p=as.dot(ru),g=os.dot(ru);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(os,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Af.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Af,o);let f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),bo.subVectors(this.max,aa),ls.subVectors(e.a,aa),cs.subVectors(e.b,aa),us.subVectors(e.c,aa),Qi.subVectors(cs,ls),er.subVectors(us,cs),pr.subVectors(ls,us);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-pr.z,pr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,pr.z,0,-pr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-pr.y,pr.x,0];return!lu(t,ls,cs,us,bo)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,ls,cs,us,bo))?!1:(Mo.crossVectors(Qi,er),t=[Mo.x,Mo.y,Mo.z],lu(t,ls,cs,us,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new D,new D,new D,new D,new D,new D,new D,new D],$n=new D,vo=new Zt,ls=new D,cs=new D,us=new D,Qi=new D,er=new D,pr=new D,aa=new D,bo=new D,Mo=new D,mr=new D;function lu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mr.fromArray(i,s);let o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var qt=new D,So=new lt,c0=0,Ft=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var fn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},u0=new Zt,oa=new D,cu=new D,Mn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(cu)),this.expandByPoint(oa.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},h0=0,Xn=new Ye,uu=new Ut,hs=new D,In=new Zt,la=new Zt,Jt=new D,Qt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dg(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(In.min,la.min),In.expandByPoint(Jt),Jt.addVectors(In.max,la.max),In.expandByPoint(Jt)):(In.expandByPoint(la.min),In.expandByPoint(la.max))}In.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(hs.fromBufferAttribute(e,l),Jt.add(hs)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,u=new D,h=new D,d=new lt,p=new lt,g=new lt,v=new D,m=new D;function f(x,T,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(v),o[T].add(v),o[C].add(v),c[x].add(m),c[T].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let C=M[x],L=C.start,O=C.count;for(let H=L,I=L+O;H<I;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new D,y=new D,w=new D,b=new D;function E(x){w.fromBufferAttribute(r,x),b.copy(w);let T=o[x];_.copy(T),_.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(b,T);let L=y.dot(c[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,L)}for(let x=0,T=M.length;x<T;++x){let C=M[x],L=C.start,O=C.count;for(let H=L,I=L+O;H<I;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ft(d,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new D,Ts=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hu=new D,d0=new D,f0=new ot,Pn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hu.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f0.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},p0=0,Sn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Os,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pi=new D,du=new D,wo=new D,Eo=new D,rr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){du.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(du);let s=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=Eo.dot(this.direction),c=-Eo.dot(wo),l=Eo.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(du).addScaledVector(wo,d),p}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,f=n.x-a.x,M=n.y-a.y,_=n.z-a.z,y=Math.abs(c),w=Math.abs(l),b=Math.abs(u),E,x,T,C,L,O,H,I,V,P,N,Y;if(y>=w&&y>=b?(T=c,O=h,V=g,Y=f,c>=0?(E=l,x=u,C=d,L=p,H=v,I=m,P=M,N=_):(E=u,x=l,C=p,L=d,H=m,I=v,P=_,N=M)):w>=b?(T=l,O=d,V=v,Y=M,l>=0?(E=u,x=c,C=p,L=h,H=m,I=g,P=_,N=f):(E=c,x=u,C=h,L=p,H=g,I=m,P=f,N=_)):(T=u,O=p,V=m,Y=_,u>=0?(E=c,x=l,C=h,L=d,H=g,I=v,P=f,N=M):(E=l,x=c,C=d,L=h,H=v,I=g,P=M,N=f)),T===0)return null;let F=E/T,U=x/T,G=1/T,le=C-F*O,fe=L-U*O,pe=H-F*V,Z=I-U*V,ce=P-F*Y,z=N-U*Y,K=ce*Z-z*pe,ae=le*z-fe*ce,de=pe*fe-Z*le;if(r){if(K<0||ae<0||de<0)return null}else if((K<0||ae<0||de<0)&&(K>0||ae>0||de>0))return null;let ue=K+ae+de;if(ue===0)return null;let Me=G*(K*O+ae*V+de*Y);return(ue>0?Me<0:Me>0)?null:this.at(Me/ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rf=new Ye,gr=new rr,To=new Mn,Cf=new D,Ao=new D,Ro=new D,Co=new D,fu=new D,Io=new D,If=new D,Po=new D,Vt=class extends Ut{constructor(e=new Qt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(fu.fromBufferAttribute(h,e),a?Io.addScaledVector(fu,u):Io.addScaledVector(fu.sub(t),u))}t.add(Io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(To.containsPoint(gr.origin)===!1&&(gr.intersectSphere(To,Cf)===null||gr.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Rf.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Rf),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=_;y<w;y+=3){let b=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);r=Lo(this,f,e,n,l,u,h,b,E,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);r=Lo(this,a,e,n,l,u,h,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,w=_;y<w;y+=3){let b=y,E=y+1,x=y+2;r=Lo(this,f,e,n,l,u,h,b,E,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=m,_=m+1,y=m+2;r=Lo(this,a,e,n,l,u,h,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function m0(i,e,t,n,r,s,a,o){let c;if(e.side===mn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===En,o),c===null)return null;Po.copy(o),Po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:i}}function Lo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ao),i.getVertexPosition(c,Ro),i.getVertexPosition(l,Co);let u=m0(i,e,t,n,Ao,Ro,Co,If);if(u){let h=new D;ui.getBarycoord(If,Ao,Ro,Co,h),r&&(u.uv=ui.getInterpolatedAttribute(r,o,c,l,h,new lt)),s&&(u.uv1=ui.getInterpolatedAttribute(s,o,c,l,h,new lt)),a&&(u.normal=ui.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};ui.getNormal(Ao,Ro,Co,d.normal),u.face=d,u.barycoord=h}return u}var ca=new Et,Pf=new Et,Lf=new Et,g0=new Et,Nf=new Ye,No=new D,pu=new Mn,Uf=new Ye,mu=new rr,va=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_u,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pu.copy(this.boundingSphere),pu.applyMatrix4(r),e.ray.intersectsSphere(pu)!==!1&&(Uf.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Uf),!(this.boundingBox!==null&&mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Pf.fromBufferAttribute(r.attributes.skinIndex,e),Lf.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ca.copy(t),t.set(0,0,0,0)):(ca.set(...t,1),t.set(0,0,0)),ca.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Lf.getComponent(s);if(a!==0){let o=Pf.getComponent(s);Nf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(g0.copy(ca).applyMatrix4(Nf),a)}}return t.isVector4&&(t.w=ca.w),t.applyMatrix4(this.bindMatrixInverse)}},As=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rs=class extends jt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=zt,u=zt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Df=new Ye,x0=new Ye,ba=class i{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:x0;Df.multiplyMatrices(o,t[s]),Df.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rs(t,e,e,Un,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(je("Skeleton: No bone found with UUID:",s),a=new As),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Di=class extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ds=new Ye,Ff=new Ye,Uo=[],Of=new Zt,y0=new Ye,ua=new Vt,ha=new Mn,Ma=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,y0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Of.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Of)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),ha.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),Ff.multiplyMatrices(n,ds),ua.matrixWorld=Ff,ua.raycast(e,Uo);for(let a=0,o=Uo.length;a<o;a++){let c=Uo[a];c.instanceId=s,c.object=this,t.push(c)}Uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(r*this.count),r,this.count,wl,Nn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xr=new Mn,_0=new lt(.5,.5),Do=new D,Cs=class{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],M=s[12],_=s[13],y=s[14],w=s[15];if(r[0].setComponents(l-a,p-u,f-g,w-M).normalize(),r[1].setComponents(l+a,p+u,f+g,w+M).normalize(),r[2].setComponents(l+o,p+h,f+v,w+_).normalize(),r[3].setComponents(l-o,p-h,f-v,w-_).normalize(),n)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,p-d,f-m,w-y).normalize();else if(r[4].setComponents(l-c,p-d,f-m,w-y).normalize(),t===jn)r[5].setComponents(l+c,p+d,f+m,w+y).normalize();else if(t===_s)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);let t=_0.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Is=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new D,nl=new D,Bf=new Ye,da=new rr,Fo=new Mn,gu=new D,kf=new D,Sr=class extends Ut{constructor(e=new Qt,t=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)tl.fromBufferAttribute(t,r-1),nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new fn(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;Bf.copy(r).invert(),da.copy(e.ray).applyMatrix4(Bf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=u.getX(v),M=u.getX(v+1),_=Oo(this,e,da,c,f,M,v);_&&t.push(_)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),f=Oo(this,e,da,c,v,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=Oo(this,e,da,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=Oo(this,e,da,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Oo(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(tl.fromBufferAttribute(o,r),nl.fromBufferAttribute(o,s),t.distanceSqToSegment(tl,nl,gu,kf)>n)return;gu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gu);if(!(l<e.near||l>e.far))return{distance:l,point:kf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zf=new D,Hf=new D,Sa=class extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)zf.fromBufferAttribute(t,r),Hf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zf.distanceTo(Hf);e.setAttribute("lineDistance",new fn(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends Sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ps=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vf=new Ye,wu=new rr,Bo=new Mn,ko=new D,Ea=class extends Ut{constructor(e=new Qt,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;Vf.copy(r).invert(),wu.copy(e.ray).applyMatrix4(Vf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,v=p;g<v;g++){let m=l.getX(g);ko.fromBufferAttribute(h,m),Gf(ko,m,c,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)ko.fromBufferAttribute(h,g),Gf(ko,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Gf(i,e,t,n,r,s,a){let o=wu.distanceSqToPoint(i);if(o<t){let c=new D;wu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ta=class extends jt{constructor(e=[],t=lr,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var sr=class extends jt{constructor(e,t,n=ni,r,s,a,o=zt,c=zt,l,u=di,h=1){if(u!==di&&u!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},il=class extends sr{constructor(e,t=ni,n=lr,r,s,a=zt,o=zt,c,l=di){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ls=class i extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new fn(l,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function g(v,m,f,M,_,y,w,b,E,x,T){let C=y/E,L=w/x,O=y/2,H=w/2,I=b/2,V=E+1,P=x+1,N=0,Y=0,F=new D;for(let U=0;U<P;U++){let G=U*L-H;for(let le=0;le<V;le++){let fe=le*C-O;F[v]=fe*M,F[m]=G*_,F[f]=I,l.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[f]=b>0?1:-1,u.push(F.x,F.y,F.z),h.push(le/E),h.push(1-U/x),N+=1}}for(let U=0;U<x;U++)for(let G=0;G<E;G++){let le=d+G+V*U,fe=d+G+V*(U+1),pe=d+(G+1)+V*(U+1),Z=d+(G+1)+V*U;c.push(le,fe,Z),c.push(fe,pe,Z),Y+=6}o.addGroup(p,Y,T),p+=Y,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class i extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let M=f*d-a;for(let _=0;_<l;_++){let y=_*h-s;g.push(y,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let _=M+l*f,y=M+l*(f+1),w=M+1+l*(f+1),b=M+1+l*f;p.push(_,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Wf(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Wf(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Pr(i[t]);for(let r in n)e[r]=n[r]}return e}function Wf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function v0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Bp={clone:Pr,merge:on},b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rl=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Er=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends Er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sl=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function S0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Xf(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function w0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var pi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends pi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mu:s=e,o=2*t-n;break;case Su:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mu:a=e,c=2*n-t;break;case Su:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let w=0;w!==o;++w)s[w]=f*a[u+w]+M*a[l+w]+_*a[c+w]+y*a[h+w];return s}},ll=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}},cl=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends pi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(r-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*v+a[c+m]*g;return s}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],f=p*d+g*2,M=h[f],_=h[f+1],y=e*d+g*2,w=u[y],b=u[y+1],E=T0(n,t,M,w,r);s[g]=kp(E,v,_,b,m)}return s}};function kp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function E0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function T0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=kp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=E0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var wn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Wo(e.settings)&&(n.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break;case vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Wo(this.settings)&&(qf(this.settings.inTangents,e),qf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){rt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){rt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Fg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Wo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function qf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=vr;var Fi=class extends wn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=_r;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName="color";var Oi=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Oi.prototype.ValueTypeName="number";var hl=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)ke.slerpFlat(s,0,a,l-o,a,l,c);return s}},mi=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName="quaternion";mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends wn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=_r;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};ki.prototype.ValueTypeName="vector";var Ns=class{constructor(e="",t=-1,n=[],r=Sp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(R0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=S0(c);c=Xf(c,1,u),l=Xf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Oi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function A0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return Ra;case"quaternion":return mi;case"bool":case"boolean":return Fi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function R0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=A0(i.type);if(i.times===void 0){let n=[],r=[];w0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Wo(i.settings)&&(t.settings={inTangents:nr(i.settings.inTangents,Float32Array),outTangents:nr(i.settings.outTangents,Float32Array)}),t}var hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zp=new dl,gi=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},Us=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=hi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:r});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Li[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){M();function M(){h.read().then(({done:_,value:y})=>{if(_)f.close();else{v+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,E=u.length;b<E;b++){let x=u[b];x.onProgress&&x.onProgress(w)}f.enqueue(y),M()}},_=>{f.error(_)})}}});return new Response(m)}else throw new Eu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{hi.add(`file:${e}`,l);let u=Li[e];delete Li[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Li[e];if(u===void 0)throw this.manager.itemError(e),l;delete Li[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fs=new WeakMap,fl=class extends gi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=fs.get(a);h===void 0&&(h=[],fs.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=vs("img");function c(){u(),t&&t(this);let h=fs.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),hi.remove(`image:${e}`);let d=fs.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ar=class extends gi{constructor(e){super(e)}load(e,t,n,r){let s=new jt,a=new fl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Tr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ca=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xu=new Ye,Zf=new D,Kf=new D,Ds=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zf),Kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===_s||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zo=new D,Ho=new ke,ci=new D,Ia=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,Ho,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zo,Ho,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new D,$f=new lt,Jf=new lt,Yt=class extends Ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,$f,Jf),t.subVectors(Jf,$f)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends Ds{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=br*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Pa=class extends Tr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Au=class extends Ds{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends Tr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},or=class extends Ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends Ds{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yu=new WeakMap,Na=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{yu.has(a)===!0?(r&&r(yu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),yu.set(c,l),hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ps=-90,ms=1,pl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(ps,ms,e,t);r.layers=this.layers,this.add(r);let s=new Yt(ps,ms,e,t);s.layers=this.layers,this.add(s);let a=new Yt(ps,ms,e,t);a.layers=this.layers,this.add(a);let o=new Yt(ps,ms,e,t);o.layers=this.layers,this.add(o);let c=new Yt(ps,ms,e,t);c.layers=this.layers,this.add(c);let l=new Yt(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ml=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",C0=new RegExp("["+rh+"]","g"),sh="[^"+rh+"]",I0="[^"+rh.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",sh),L0=/(WCOD+)?/.source.replace("WCOD",I0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),D0=new RegExp("^"+P0+L0+N0+U0+"$"),F0=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(e){let t=D0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);F0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Cu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FM=new Float32Array(1);var jf=new Ye,Ar=class{constructor(e,t,n=0,r=1/0){this.ray=new rr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jf),this}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(Qf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Iu(e[r],this,n,t);return n.sort(Qf),n}};function Qf(i,e){return i.distance-e.distance}function Iu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Iu(s[a],e,t,!0)}}var hh=class hh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};hh.prototype.isMatrix2=!0;var Pu=hh;function ah(i,e,t,n){let r=O0(n);switch(t){case $u:return i*e;case wl:return i*e/r.components*r.byteLength;case El:return i*e/r.components*r.byteLength;case ur:return i*e*2/r.components*r.byteLength;case Tl:return i*e*2/r.components*r.byteLength;case Ju:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case Al:return i*e*4/r.components*r.byteLength;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Pl:return Math.max(i,16)*Math.max(e,8)/4;case Rl:case Il:return Math.max(i,8)*Math.max(e,8)/2;case Ll:case Nl:case Dl:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Ha:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jl:case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Va:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O0(i){switch(i){case Tn:case qu:return{byteLength:1,components:1};case ks:case Yu:case ii:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case ni:case bl:case Nn:return{byteLength:4,components:1};case Zu:case Ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function H0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tx=`#ifdef USE_IRIDESCENCE
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
#endif`,nx=`#ifdef USE_BUMPMAP
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hx=`#define PI 3.141592653589793
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
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fx=`vec3 transformedNormal = objectNormal;
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
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
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
#endif`,zx=`uniform sampler2D dfgLUT;
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
}`,Hx=`
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jx=`#if defined( USE_POINTS_UV )
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
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,$y=`#define DISTANCE
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
}`,Jy=`#define DISTANCE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,s_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,c_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,h_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
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
}`,g_=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:K0,batching_pars_vertex:$0,batching_vertex:J0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:sx,clipping_planes_vertex:ax,color_fragment:ox,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:ux,common:hx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:fx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:xx,colorspace_fragment:yx,colorspace_pars_fragment:_x,envmap_fragment:vx,envmap_common_pars_fragment:bx,envmap_pars_fragment:Mx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Ux,envmap_vertex:wx,fog_vertex:Ex,fog_pars_vertex:Tx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Px,lights_lambert_pars_fragment:Lx,lights_pars_begin:Nx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Bx,lights_physical_fragment:kx,lights_physical_pars_fragment:zx,lights_fragment_begin:Hx,lights_fragment_maps:Vx,lights_fragment_end:Gx,lightprobes_pars_fragment:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Zx,map_fragment:Kx,map_pars_fragment:$x,map_particle_fragment:Jx,map_particle_pars_fragment:jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:ay,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:_y,dithering_fragment:vy,dithering_pars_fragment:by,roughnessmap_fragment:My,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ey,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ay,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:Iy,skinnormal_vertex:Py,specularmap_fragment:Ly,specularmap_pars_fragment:Ny,tonemapping_fragment:Uy,tonemapping_pars_fragment:Dy,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:Hy,background_vert:Vy,background_frag:Gy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:qy,cube_frag:Yy,depth_vert:Zy,depth_frag:Ky,distance_vert:$y,distance_frag:Jy,equirect_vert:jy,equirect_frag:Qy,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:r_,meshlambert_frag:s_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:u_,meshphong_frag:h_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:x_,shadow_vert:y_,shadow_frag:__,sprite_vert:v_,sprite_frag:b_},Le={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:on([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:on([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:on([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:on([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:on([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:on([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:on([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:on([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:on([Le.common,Le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:on([Le.lights,Le.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};_i.physical={uniforms:on([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var oc={r:0,b:0,g:0},M_=new Ye,cm=new ot;cm.set(-1,0,0,0,1,0,0,0,1);function S_(i,e,t,n,r,s){let a=new tt(0),o=r===!0?0:1,c,l,u=null,h=0,d=null;function p(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let y=M.backgroundBlurriness>0;_=e.get(_,y)}return _}function g(M){let _=!1,y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,_){let y=p(_);y&&(y.isCubeTexture||y.mapping===Fa)?(l===void 0&&(l=new Vt(new Ls(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Pr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cm),l.material.toneMapped=dt.getTransfer(y.colorSpace)!==St,(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vt(new wr(2,2),new Ln({name:"BackgroundMaterial",uniforms:Pr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(oc,ih(i)),t.buffers.color.setClear(oc.r,oc.g,oc.b,_,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:f}}function w_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,a=!1;function o(L,O,H,I,V){let P=!1,N=h(L,I,H,O);s!==N&&(s=N,l(s.object)),P=p(L,I,H,V),P&&g(L,I,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,y(L,O,H,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,O,H,I){let V=I.wireframe===!0,P=n[O.id];P===void 0&&(P={},n[O.id]=P);let N=L.isInstancedMesh===!0?L.id:0,Y=P[N];Y===void 0&&(Y={},P[N]=Y);let F=Y[H.id];F===void 0&&(F={},Y[H.id]=F);let U=F[V];return U===void 0&&(U=d(c()),F[V]=U),U}function d(L){let O=[],H=[],I=[];for(let V=0;V<t;V++)O[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,O,H,I){let V=s.attributes,P=O.attributes,N=0,Y=H.getAttributes();for(let F in Y)if(Y[F].location>=0){let G=V[F],le=P[F];if(le===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),G===void 0||G.attribute!==le||le&&G.data!==le.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(L,O,H,I){let V={},P=O.attributes,N=0,Y=H.getAttributes();for(let F in Y)if(Y[F].location>=0){let G=P[F];G===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));let le={};le.attribute=G,G&&G.data&&(le.data=G.data),V[F]=le,N++}s.attributes=V,s.attributesNum=N,s.index=I}function v(){let L=s.newAttributes;for(let O=0,H=L.length;O<H;O++)L[O]=0}function m(L){f(L,0)}function f(L,O){let H=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;H[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),V[L]!==O&&(i.vertexAttribDivisor(L,O),V[L]=O)}function M(){let L=s.newAttributes,O=s.enabledAttributes;for(let H=0,I=O.length;H<I;H++)O[H]!==L[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function _(L,O,H,I,V,P,N){N===!0?i.vertexAttribIPointer(L,O,H,V,P):i.vertexAttribPointer(L,O,H,I,V,P)}function y(L,O,H,I){v();let V=I.attributes,P=H.getAttributes(),N=O.defaultAttributeValues;for(let Y in P){let F=P[Y];if(F.location>=0){let U=V[Y];if(U===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){let G=U.normalized,le=U.itemSize,fe=e.get(U);if(fe===void 0)continue;let pe=fe.buffer,Z=fe.type,ce=fe.bytesPerElement,z=Z===i.INT||Z===i.UNSIGNED_INT||U.gpuType===bl;if(U.isInterleavedBufferAttribute){let K=U.data,ae=K.stride,de=U.offset;if(K.isInstancedInterleavedBuffer){for(let ue=0;ue<F.locationSize;ue++)f(F.location+ue,K.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<F.locationSize;ue++)m(F.location+ue);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ue=0;ue<F.locationSize;ue++)_(F.location+ue,le/F.locationSize,Z,G,ae*ce,(de+le/F.locationSize*ue)*ce,z)}else{if(U.isInstancedBufferAttribute){for(let K=0;K<F.locationSize;K++)f(F.location+K,U.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let K=0;K<F.locationSize;K++)m(F.location+K);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let K=0;K<F.locationSize;K++)_(F.location+K,le/F.locationSize,Z,G,le*ce,le/F.locationSize*K*ce,z)}}else if(N!==void 0){let G=N[Y];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(F.location,G);break;case 3:i.vertexAttrib3fv(F.location,G);break;case 4:i.vertexAttrib4fv(F.location,G);break;default:i.vertexAttrib1fv(F.location,G)}}}}M()}function w(){T();for(let L in n){let O=n[L];for(let H in O){let I=O[H];for(let V in I){let P=I[V];for(let N in P)u(P[N].object),delete P[N];delete I[V]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let H in O){let I=O[H];for(let V in I){let P=I[V];for(let N in P)u(P[N].object),delete P[N];delete I[V]}}delete n[L.id]}function E(L){for(let O in n){let H=n[O];for(let I in H){let V=H[I];if(V[L.id]===void 0)continue;let P=V[L.id];for(let N in P)u(P[N].object),delete P[N];delete V[L.id]}}}function x(L){for(let O in n){let H=n[O],I=L.isInstancedMesh===!0?L.id:0,V=H[I];if(V!==void 0){for(let P in V){let N=V[P];for(let Y in N)u(N[Y].object),delete N[Y];delete V[P]}delete H[I],Object.keys(H).length===0&&delete n[O]}}}function T(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function E_(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function T_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Tn&&E!==Nn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,maxSamples:w,samples:b}}function A_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Pn,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:n,_=M*4,y=f.clippingState||null;c.value=y,y=u(g,d,_,p);for(let w=0;w!==_;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==v;++_,y+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Gs=4,R_=6,C_=20,I_=256,Wa=new or,Hp=new tt,dh=null,fh=0,ph=0,mh=!1,P_=new D,Lr=new D,Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=P_}=s;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ii,format:Un,colorSpace:pn,depthBuffer:!1},r=Vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L_(s)),this._blurMaterial=U_(s,e,t),this._ggxMaterial=N_(s,e,t)}return r}_compileMaterial(e){let t=new Vt(new Qt,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r,s){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Hp),h.toneMapping=ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Ls,new sn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Hp),f=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));let w=this._cubeSize;Vs(r,y*w,_>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,p=h*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Gs?n-g+Gs:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Vs(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Wa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Vs(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Wa)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Gs?r-this._lodMax+Gs:0),d=4*(this._cubeSize-u);Vs(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Wa)}};function L_(i){let e=[],t=[],n=i,r=i-Gs+1+R_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,p=3,g=new Float32Array(p*d*h),v=new Float32Array(p*d*h);for(let f=0;f<h;f++){let M=f%3*2/3-1,_=f>2?0:-1,y=[M,_,0,M+2/3,_,0,M+2/3,_+1,0,M,_,0,M+2/3,_+1,0,M,_+1,0];g.set(y,p*d*f);for(let w=0;w<d;w++){let b=u[w*2]*2-1,E=u[w*2+1]*2-1;f===0?Lr.set(1,E,b):f===1?Lr.set(-b,1,-E):f===2?Lr.set(-b,E,1):f===3?Lr.set(-1,E,-b):f===4?Lr.set(-b,-1,E):Lr.set(b,E,-1),Lr.toArray(v,(f*d+w)*p)}}let m=new Qt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(v,p)),t.push(new Vt(m,null)),n>Gs&&n--}return{lodMeshes:t,sizeLods:e}}function Vp(i,e,t){let n=new bn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function N_(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function U_(i,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:C_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Gp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Wp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cc=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ls(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:xi});s.uniforms.tEquirect.value=t;let a=new Vt(r,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Ht),new pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function D_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===yl||p===_l)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new cc(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===yl||p===_l,v=p===lr||p===Cr;if(g||v){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Xs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Xs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===yl?d.mapping=lr:p===_l&&(d.mapping=Cr),d}function c(d){let p=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function l(d){let p=d.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function F_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&yr("WebGLRenderer: "+n+" extension not supported."),r}}}function O_(i,e,t,n){let r={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(g===void 0)return;if(p!==null){let M=p.array;v=p.version;for(let _=0,y=M.length;_<y;_+=3){let w=M[_+0],b=M[_+1],E=M[_+2];d.push(w,b,b,E,E,w)}}else{let M=g.array;v=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let w=_+0,b=_+1,E=_+2;d.push(w,b,b,E,E,w)}}let m=new(g.count>=65535?_a:ya)(d,1);m.version=v;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function B_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*a,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let v=0;for(let m=0;m<p;m++)v+=d[m];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function k_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function z_(i,e,t){let n=new WeakMap,r=new Et;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=o.attributes.position.count*_,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*w*4*h),E=new xa(b,y,w,h);E.type=Nn,E.needsUpdate=!0;let x=_*4;for(let C=0;C<h;C++){let L=m[C],O=f[C],H=M[C],I=y*w*4*C;for(let V=0;V<L.count;V++){let P=V*x;p===!0&&(r.fromBufferAttribute(L,V),b[I+P+0]=r.x,b[I+P+1]=r.y,b[I+P+2]=r.z,b[I+P+3]=0),g===!0&&(r.fromBufferAttribute(O,V),b[I+P+4]=r.x,b[I+P+5]=r.y,b[I+P+6]=r.z,b[I+P+7]=0),v===!0&&(r.fromBufferAttribute(H,V),b[I+P+8]=r.x,b[I+P+9]=r.y,b[I+P+10]=r.z,b[I+P+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:E,size:new lt(y,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function H_(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var V_={[ku]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function G_(i,e,t,n,r,s){let a=new bn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qt;l.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fn([0,2,0,0,2,0],2));let u=new rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vt(l,u),d=new or(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,M=[],_=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let b=0;b<M.length;b++){let E=M[b];E.setSize&&E.setSize(y,w)}},this.setEffects=function(y){M=y,_=M.length>0&&M[0].isRenderPass===!0;let w=a.width,b=a.height;M.length>0&&o===null&&(o=new bn(w,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new bn(w,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let x=M[E];x.setSize&&x.setSize(w,b)}},this.begin=function(y,w){if(v||y.toneMapping===ei&&M.length===0)return!1;if(f=w,w!==null){let b=w.width,E=w.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return _===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=ei,!0},this.hasRenderPass=function(){return _},this.end=function(y,w){y.toneMapping=m,v=!0;let b=a,E=o;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(y,E,b,w),T.needsSwap!==!1&&(b=E,E=E===o?c:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},dt.getTransfer(p)===St&&(u.defines.SRGB_TRANSFER="");let x=V_[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(h,d),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var um=new jt,yh=new sr(1,1),hm=new xa,dm=new el,fm=new Ta,Xp=[],qp=[],Yp=new Float32Array(16),Zp=new Float32Array(9),Kp=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Xp[r];if(s===void 0&&(s=new Float32Array(r),Xp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dc(i,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Kp.set(n),i.uniformMatrix2fv(this.addr,!1,Kp),$t(t,n)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Zp.set(n),i.uniformMatrix3fv(this.addr,!1,Zp),$t(t,n)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Yp.set(n),i.uniformMatrix4fv(this.addr,!1,Yp),$t(t,n)}}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function sv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=t.isReversedDepthBuffer()?ac:sc,s=yh):s=um,t.setTexture2D(e||s,r)}function av(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dm,r)}function ov(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fm,r)}function lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hm,r)}function cv(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return Z_;case 35675:return K_;case 35676:return $_;case 5124:case 35670:return J_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function fv(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function pv(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mv(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gv(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xv(i,e){i.uniform1iv(this.addr,e)}function yv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function vv(i,e){i.uniform4iv(this.addr,e)}function bv(i,e){i.uniform1uiv(this.addr,e)}function Mv(i,e){i.uniform2uiv(this.addr,e)}function Sv(i,e){i.uniform3uiv(this.addr,e)}function wv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=yh:a=um;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Tv(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dm,s[a])}function Av(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fm,s[a])}function Rv(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hm,s[a])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return yv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return bv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}var _h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function $p(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){let n=i.name,r=n.length;for(gh.lastIndex=0;;){let s=gh.exec(n),a=gh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){$p(t,l===void 0?new _h(o,i,e):new vh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new bh(o),$p(t,h)),t=h}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Iv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Jp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pv=37297,Lv=0;function Nv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jp=new ot;function Uv(i){dt._getMatrix(jp,dt.workingColorSpace,i);let e=`mat3( ${jp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ma:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Nv(i.getShaderSource(e),o)}else return s}function Dv(i,e){let t=Uv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fv={[ku]:"Linear",[zu]:"Reinhard",[Hu]:"Cineon",[Da]:"ACESFilmic",[Gu]:"AgX",[Wu]:"Neutral",[Vu]:"Custom"};function Ov(i,e){let t=Fv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new D;function Bv(){dt.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qa(i){return i!==""}function em(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(Vv,Wv)}var Gv=new Map;function Wv(i,e){let t=ht[e];if(t===void 0){let n=Gv.get(e);if(n!==void 0)t=ht[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(t)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(i){return i.replace(Xv,qv)}function qv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function im(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Yv={[Ua]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Zv(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kv={[lr]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function $v(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jv={[Cr]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Bu]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function eb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function tb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nb(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Zv(t),l=$v(t),u=jv(t),h=eb(t),d=tb(t),p=kv(t),g=zv(s),v=r.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),f.length>0&&(f+=`
`)):(m=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),f=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ht.tonemapping_pars_fragment:"",t.toneMapping!==ei?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=Mh(a),a=em(a,t),a=tm(a,t),o=Mh(o),o=em(o,t),o=tm(o,t),a=nm(a),o=nm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=M+m+a,y=M+f+o,w=Jp(r,r.VERTEX_SHADER,_),b=Jp(r,r.FRAGMENT_SHADER,y);r.attachShader(v,w),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(L){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(w)||"",I=r.getShaderInfoLog(b)||"",V=O.trim(),P=H.trim(),N=I.trim(),Y=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,w,b);else{let U=Qp(r,w,"vertex"),G=Qp(r,b,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+U+`
`+G)}else V!==""?je("WebGLProgram: Program Info Log:",V):(P===""||N==="")&&(F=!1);F&&(L.diagnostics={runnable:Y,programLog:V,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:f}})}r.deleteShader(w),r.deleteShader(b),x=new Ws(r,v),T=Hv(r,v)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(v,Pv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}var ib=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}};function rb(i){return i===ur||i===Ha||i===Va}function sb(i,e,t,n,r,s){let a=new Ss,o=new Sh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,C,L,O,H){let I=L.fog,V=O.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||P,N),F=Y&&Y.mapping===Fa?Y.image.height:null,U=p[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=G!==void 0?G.length:0,fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let pe,Z,ce,z;if(U){let bt=_i[U];pe=bt.vertexShader,Z=bt.fragmentShader}else{pe=x.vertexShader,Z=x.fragmentShader;let bt=o.getVertexShaderStage(x),gt=o.getFragmentShaderStage(x);o.update(x,bt,gt),ce=bt.id,z=gt.id}let K=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),de=O.isInstancedMesh===!0,ue=O.isBatchedMesh===!0,Me=!!x.map,Re=!!x.matcap,_e=!!Y,Ue=!!x.aoMap,te=!!x.lightMap,j=!!x.bumpMap&&x.wireframe===!1,ie=!!x.normalMap,me=!!x.displacementMap,Se=!!x.emissiveMap,We=!!x.metalnessMap,Qe=!!x.roughnessMap,W=x.anisotropy>0,ze=x.clearcoat>0,ge=x.dispersion>0,A=x.retroreflectivity>0,S=x.iridescence>0,B=x.sheen>0,k=x.transmission>0,$=W&&!!x.anisotropyMap,oe=ze&&!!x.clearcoatMap,xe=ze&&!!x.clearcoatNormalMap,ne=ze&&!!x.clearcoatRoughnessMap,re=S&&!!x.iridescenceMap,ve=S&&!!x.iridescenceThicknessMap,He=B&&!!x.sheenColorMap,Ce=B&&!!x.sheenRoughnessMap,we=!!x.specularMap,Ve=!!x.specularColorMap,Pe=!!x.specularIntensityMap,it=k&&!!x.transmissionMap,X=k&&!!x.thicknessMap,Ie=!!x.gradientMap,he=!!x.alphaMap,Ee=x.alphaTest>0,Ae=!!x.alphaHash,ye=!!x.extensions,Ke=ei;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Ge={shaderID:U,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:Z,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ue,batchingColor:ue&&O._colorsTexture!==null,instancing:de,instancingColor:de&&O.instanceColor!==null,instancingMorph:de&&O.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:Re,envMap:_e,envMapMode:_e&&Y.mapping,envMapCubeUVHeight:F,aoMap:Ue,lightMap:te,bumpMap:j,normalMap:ie,displacementMap:me,emissiveMap:Se,normalMapObjectSpace:ie&&x.normalMapType===Ep,normalMapTangentSpace:ie&&x.normalMapType===rc,packedNormalMap:ie&&x.normalMapType===rc&&rb(x.normalMap.format),metalnessMap:We,roughnessMap:Qe,anisotropy:W,anisotropyMap:$,clearcoat:ze,clearcoatMap:oe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ne,dispersion:ge,retroreflection:A,iridescence:S,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:B,sheenColorMap:He,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Ve,specularIntensityMap:Pe,transmission:k,transmissionMap:it,thicknessMap:X,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:Ae,combine:x.combine,mapUv:Me&&g(x.map.channel),aoMapUv:Ue&&g(x.aoMap.channel),lightMapUv:te&&g(x.lightMap.channel),bumpMapUv:j&&g(x.bumpMap.channel),normalMapUv:ie&&g(x.normalMap.channel),displacementMapUv:me&&g(x.displacementMap.channel),emissiveMapUv:Se&&g(x.emissiveMap.channel),metalnessMapUv:We&&g(x.metalnessMap.channel),roughnessMapUv:Qe&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(x.sheenRoughnessMap.channel),specularMapUv:we&&g(x.specularMap.channel),specularColorMapUv:Ve&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:it&&g(x.transmissionMap.channel),thicknessMapUv:X&&g(x.thicknessMap.channel),alphaMapUv:he&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||W),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Me||he),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:fe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:Se&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let T=p[x.type],C;if(T){let L=_i[T];C=Bp.clone(L.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new nb(i,T,x,r),l.push(C),u.set(T,C)),C}function w(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:E}}function ab(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ob(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,v,m,f){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:f},i[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=f),e++,M}function c(d,p,g,v,m,f,M){M.reversedDepth===!0&&(m=-m);let _=o(d,p,g,v,m,f);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):t.push(_)}function l(d,p,g,v,m,f){let M=o(d,p,g,v,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(d,p){t.length>1&&t.sort(d||ob),n.length>1&&n.sort(p||rm),r.length>1&&r.sort(p||rm)}function h(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function lb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new sm,i.set(n,[a])):r>=s.length?(a=new sm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ub(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hb=0;function db(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fb(i){let e=new cb,t=ub(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Ye,a=new Ye;function o(l){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,M=0,_=0,y=0,w=0,b=0,E=0,x=0,T=0,C=0;l.sort(db);for(let O=0,H=l.length;O<H;O++){let I=l[O],V=I.color,P=I.intensity,N=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ur?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*P,h+=V.g*P,d+=V.b*P;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],P);C++}else if(I.isSunLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,G=t.get(I);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=Y;let le=U.getViewportCount();for(let fe=0;fe<le;fe++)n.sunShadowMatrix[v+fe]=U.getMatrix(fe),n.sunShadowCascade[v+fe]=U._cascadeData[fe];v+=le,g++}n.sun[p]=F,p++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,G=t.get(I);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=F,m++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(V).multiplyScalar(P),F.distance=N,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[M]=F;let U=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,U.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=U.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=Y,E++}M++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(V).multiplyScalar(P),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=F,_++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let U=I.shadow,G=t.get(I);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,n.pointShadow[f]=G,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=I.shadow.matrix,b++}n.point[f]=F,f++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(P),F.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[y]=F,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==_||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=f,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=_,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=x,L.numLightProbes=C,n.version=hb++)}function c(l,u){let h=0,d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=l.length;M<_;M++){let y=l[M];if(y.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),h++}else if(y.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function am(i){let e=new fb(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function pb(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new am(i),e.set(r,[o])):s>=a.length?(o=new am(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`,xb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],yb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],om=new Ye,Xa=new D,xh=new D;function _b(i,e,t){let n=new Cs,r=new lt,s=new lt,a=new Et,o=new sl,c=new al,l={},u=t.maxTextureSize,h={[En]:mn,[mn]:En,[en]:en},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let f=this.type;this.render=function(b,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===xl&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(xi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==this.type;H&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=b.length;I<V;I++){let P=b[I],N=P.shadow;if(N===void 0){je("WebGLShadowMap:",P,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let Y=N.getFrameExtents();r.multiply(Y),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=F,N.map===null||H===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fs){if(P.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new bn(r.x,r.y,{format:ur,type:ii,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),N.map.texture.name=P.name+".shadowMap",N.map.depthTexture=new sr(r.x,r.y,Nn),N.map.depthTexture.name=P.name+".shadowMapDepth",N.map.depthTexture.format=di,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt}else P.isPointLight?(N.map=new cc(r.x),N.map.depthTexture=new il(r.x,ni)):(N.map=new bn(r.x,r.y),N.map.depthTexture=new sr(r.x,r.y,ni)),N.map.depthTexture.name=P.name+".shadowMap",N.map.depthTexture.format=di,this.type===Ua?(N.map.depthTexture.compareFunction=F?ac:sc,N.map.depthTexture.minFilter=Ht,N.map.depthTexture.magFilter=Ht):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let U=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();P.isPointLight!==!0&&N.updateMatrices(P,x);for(let G=0;G<U;G++){let le=N.getCamera(G);if(P.isPointLight){let fe=N.camera,pe=N.matrix,Z=P.distance||fe.far;Z!==fe.far&&(fe.far=Z,fe.updateProjectionMatrix()),Xa.setFromMatrixPosition(P.matrixWorld),fe.position.copy(Xa),xh.copy(fe.position),xh.add(xb[G]),fe.up.copy(yb[G]),fe.lookAt(xh),fe.updateMatrixWorld(),pe.makeTranslation(-Xa.x,-Xa.y,-Xa.z),om.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(om,fe.coordinateSystem,fe.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,G),i.clear();else{G===0&&(i.setRenderTarget(N.map),i.clear());let fe=N.getViewport(G);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(a)}n=N.getFrustum(G),y(E,x,le,P,this.type)}N.isPointLightShadow!==!0&&this.type===Fs&&M(N,x),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,L)};function M(b,E){let x=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new bn(r.x,r.y,{format:ur,type:ii}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,x,d,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,x,p,v,null)}function _(b,E,x,T){let C=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let O=C.uuid,H=E.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let V=I[H];V===void 0&&(V=C.clone(),I[H]=V,E.addEventListener("dispose",w)),C=V}if(C.visible=E.visible,C.wireframe=E.wireframe,T===Fs?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:h[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=x}return C}function y(b,E,x,T,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let H=e.update(b),I=b.material;if(Array.isArray(I)){let V=H.groups;for(let P=0,N=V.length;P<N;P++){let Y=V[P],F=I[Y.materialIndex];if(F&&F.visible){let U=_(b,F,T,C);b.onBeforeShadow(i,b,E,x,H,U,Y),i.renderBufferDirect(x,null,H,U,b,Y),b.onAfterShadow(i,b,E,x,H,U,Y)}}}else if(I.visible){let V=_(b,I,T,C);b.onBeforeShadow(i,b,E,x,H,V,null),i.renderBufferDirect(x,null,H,V,b,null),b.onAfterShadow(i,b,E,x,H,V,null)}}let O=b.children;for(let H=0,I=O.length;H<I;H++)y(O[H],E,x,T,C)}function w(b){b.target.removeEventListener("dispose",w);for(let x in l){let T=l[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function vb(i,e){function t(){let X=!1,Ie=new Et,he=null,Ee=new Et(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!X&&(i.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,ye,Ke,Ge,bt){bt===!0&&(Ae*=Ge,ye*=Ge,Ke*=Ge),Ie.set(Ae,ye,Ke,Ge),Ee.equals(Ie)===!1&&(i.clearColor(Ae,ye,Ke,Ge),Ee.copy(Ie))},reset:function(){X=!1,he=null,Ee.set(-1,0,0,0)}}}function n(){let X=!1,Ie=!1,he=null,Ee=null,Ae=null;return{setReversed:function(ye){if(Ie!==ye){let Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ie=ye;let Ge=Ae;Ae=null,this.setClear(Ge)}},getReversed:function(){return Ie},setTest:function(ye){ye?K(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ye){he!==ye&&!X&&(i.depthMask(ye),he=ye)},setFunc:function(ye){if(Ie&&(ye=Fp[ye]),Ee!==ye){switch(ye){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ye}},setLocked:function(ye){X=ye},setClear:function(ye){Ae!==ye&&(Ae=ye,Ie&&(ye=1-ye),i.clearDepth(ye))},reset:function(){X=!1,he=null,Ee=null,Ae=null,Ie=!1}}}function r(){let X=!1,Ie=null,he=null,Ee=null,Ae=null,ye=null,Ke=null,Ge=null,bt=null;return{setTest:function(gt){X||(gt?K(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(gt){Ie!==gt&&!X&&(i.stencilMask(gt),Ie=gt)},setFunc:function(gt,gn,Bn){(he!==gt||Ee!==gn||Ae!==Bn)&&(i.stencilFunc(gt,gn,Bn),he=gt,Ee=gn,Ae=Bn)},setOp:function(gt,gn,Bn){(ye!==gt||Ke!==gn||Ge!==Bn)&&(i.stencilOp(gt,gn,Bn),ye=gt,Ke=gn,Ge=Bn)},setLocked:function(gt){X=gt},setClear:function(gt){bt!==gt&&(i.clearStencil(gt),bt=gt)},reset:function(){X=!1,Ie=null,he=null,Ee=null,Ae=null,ye=null,Ke=null,Ge=null,bt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},d={},p=new WeakMap,g=[],v=null,m=!1,f=null,M=null,_=null,y=null,w=null,b=null,E=null,x=new tt(0,0,0),T=0,C=!1,L=null,O=null,H=null,I=null,V=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Y=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=Y>=2);let U=null,G={},le=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),pe=new Et().fromArray(le),Z=new Et().fromArray(fe);function ce(X,Ie,he,Ee){let Ae=new Uint8Array(4),ye=i.createTexture();i.bindTexture(X,ye),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<he;Ke++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Ie+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return ye}let z={};z[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(xs),j(!1),ie(Lu),K(i.CULL_FACE),Ue(xi);function K(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function ae(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function de(X,Ie){return d[X]!==Ie?(i.bindFramebuffer(X,Ie),d[X]=Ie,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ie),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ue(X,Ie){let he=g,Ee=!1;if(X){he=p.get(Ie),he===void 0&&(he=[],p.set(Ie,he));let Ae=X.textures;if(he.length!==Ae.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ke=Ae.length;ye<Ke;ye++)he[ye]=i.COLOR_ATTACHMENT0+ye;he.length=Ae.length,Ee=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(he)}function Me(X){return v!==X?(i.useProgram(X),v=X,!0):!1}let Re={[Rr]:i.FUNC_ADD,[ip]:i.FUNC_SUBTRACT,[rp]:i.FUNC_REVERSE_SUBTRACT};Re[sp]=i.MIN,Re[ap]=i.MAX;let _e={[op]:i.ZERO,[lp]:i.ONE,[cp]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[mp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[pp]:i.ONE_MINUS_DST_COLOR,[dp]:i.ONE_MINUS_DST_ALPHA,[gp]:i.CONSTANT_COLOR,[xp]:i.ONE_MINUS_CONSTANT_COLOR,[yp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(X,Ie,he,Ee,Ae,ye,Ke,Ge,bt,gt){if(X===xi){m===!0&&(ae(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),X!==np){if(X!==f||gt!==C){if((M!==Rr||w!==Rr)&&(i.blendEquation(i.FUNC_ADD),M=Rr,w=Rr),gt)switch(X){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",X);break}_=null,y=null,b=null,E=null,x.set(0,0,0),T=0,f=X,C=gt}return}Ae=Ae||Ie,ye=ye||he,Ke=Ke||Ee,(Ie!==M||Ae!==w)&&(i.blendEquationSeparate(Re[Ie],Re[Ae]),M=Ie,w=Ae),(he!==_||Ee!==y||ye!==b||Ke!==E)&&(i.blendFuncSeparate(_e[he],_e[Ee],_e[ye],_e[Ke]),_=he,y=Ee,b=ye,E=Ke),(Ge.equals(x)===!1||bt!==T)&&(i.blendColor(Ge.r,Ge.g,Ge.b,bt),x.copy(Ge),T=bt),f=X,C=!1}function te(X,Ie){X.side===en?ae(i.CULL_FACE):K(i.CULL_FACE);let he=X.side===mn;Ie&&(he=!he),j(he),X.blending===Os&&X.transparent===!1?Ue(xi):Ue(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);let Ee=X.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Se(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(X){L!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),L=X)}function ie(X){X!==ep?(K(i.CULL_FACE),X!==O&&(X===Lu?i.cullFace(i.BACK):X===tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),O=X}function me(X){X!==H&&(N&&i.lineWidth(X),H=X)}function Se(X,Ie,he){X?(K(i.POLYGON_OFFSET_FILL),(I!==Ie||V!==he)&&(I=Ie,V=he,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,he))):ae(i.POLYGON_OFFSET_FILL)}function We(X){X?K(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Qe(X){X===void 0&&(X=i.TEXTURE0+P-1),U!==X&&(i.activeTexture(X),U=X)}function W(X,Ie,he){he===void 0&&(U===null?he=i.TEXTURE0+P-1:he=U);let Ee=G[he];Ee===void 0&&(Ee={type:void 0,texture:void 0},G[he]=Ee),(Ee.type!==X||Ee.texture!==Ie)&&(U!==he&&(i.activeTexture(he),U=he),i.bindTexture(X,Ie||z[X]),Ee.type=X,Ee.texture=Ie)}function ze(){let X=G[U];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function S(){try{i.texSubImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function B(){try{i.texSubImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function oe(){try{i.texStorage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function xe(){try{i.texStorage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function ne(){try{i.texImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function re(){try{i.texImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function ve(X){return h[X]!==void 0?h[X]:i.getParameter(X)}function He(X,Ie){h[X]!==Ie&&(i.pixelStorei(X,Ie),h[X]=Ie)}function Ce(X){pe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function we(X){Z.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function Ve(X,Ie){let he=l.get(Ie);he===void 0&&(he=new WeakMap,l.set(Ie,he));let Ee=he.get(X);Ee===void 0&&(Ee=i.getUniformBlockIndex(Ie,X.name),he.set(X,Ee))}function Pe(X,Ie){let Ee=l.get(Ie).get(X);c.get(Ie)!==Ee&&(i.uniformBlockBinding(Ie,Ee,X.__bindingPointIndex),c.set(Ie,Ee))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,G={},d={},p=new WeakMap,g=[],v=null,m=!1,f=null,M=null,_=null,y=null,w=null,b=null,E=null,x=new tt(0,0,0),T=0,C=!1,L=null,O=null,H=null,I=null,V=null,pe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ae,bindFramebuffer:de,drawBuffers:ue,useProgram:Me,setBlending:Ue,setMaterial:te,setFlipSided:j,setCullFace:ie,setLineWidth:me,setPolygonOffset:Se,setScissorTest:We,activeTexture:Qe,bindTexture:W,unbindTexture:ze,compressedTexImage2D:ge,compressedTexImage3D:A,texImage2D:ne,texImage3D:re,pixelStorei:He,getParameter:ve,updateUBOMapping:Ve,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:xe,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:$,scissor:Ce,viewport:we,reset:it}}function bb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap,h=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return g?new OffscreenCanvas(A,S):vs("canvas")}function m(A,S,B){let k=1,$=ge(A);if(($.width>B||$.height>B)&&(k=B/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let oe=Math.floor(k*$.width),xe=Math.floor(k*$.height);d===void 0&&(d=v(oe,xe));let ne=S?v(oe,xe):d;return ne.width=oe,ne.height=xe,ne.getContext("2d").drawImage(A,0,0,oe,xe),je("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+xe+")."),ne}else return"data"in A&&je("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function f(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,S,B,k,$,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;k&&(xe=e.get("EXT_texture_norm16"),xe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===i.RED&&(B===i.FLOAT&&(ne=i.R32F),B===i.HALF_FLOAT&&(ne=i.R16F),B===i.UNSIGNED_BYTE&&(ne=i.R8),B===i.UNSIGNED_SHORT&&xe&&(ne=xe.R16_EXT),B===i.SHORT&&xe&&(ne=xe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ne=i.R8UI),B===i.UNSIGNED_SHORT&&(ne=i.R16UI),B===i.UNSIGNED_INT&&(ne=i.R32UI),B===i.BYTE&&(ne=i.R8I),B===i.SHORT&&(ne=i.R16I),B===i.INT&&(ne=i.R32I)),S===i.RG&&(B===i.FLOAT&&(ne=i.RG32F),B===i.HALF_FLOAT&&(ne=i.RG16F),B===i.UNSIGNED_BYTE&&(ne=i.RG8),B===i.UNSIGNED_SHORT&&xe&&(ne=xe.RG16_EXT),B===i.SHORT&&xe&&(ne=xe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ne=i.RG8UI),B===i.UNSIGNED_SHORT&&(ne=i.RG16UI),B===i.UNSIGNED_INT&&(ne=i.RG32UI),B===i.BYTE&&(ne=i.RG8I),B===i.SHORT&&(ne=i.RG16I),B===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),B===i.UNSIGNED_INT&&(ne=i.RGB32UI),B===i.BYTE&&(ne=i.RGB8I),B===i.SHORT&&(ne=i.RGB16I),B===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),B===i.UNSIGNED_INT&&(ne=i.RGBA32UI),B===i.BYTE&&(ne=i.RGBA8I),B===i.SHORT&&(ne=i.RGBA16I),B===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGB16_EXT),B===i.SHORT&&xe&&(ne=xe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){let re=oe?ma:dt.getTransfer($);B===i.FLOAT&&(ne=i.RGBA32F),B===i.HALF_FLOAT&&(ne=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ne=re===St?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGBA16_EXT),B===i.SHORT&&xe&&(ne=xe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(A,S){let B;return A?S===null||S===ni||S===zs?B=i.DEPTH24_STENCIL8:S===Nn?B=i.DEPTH32F_STENCIL8:S===ks&&(B=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ni||S===zs?B=i.DEPTH_COMPONENT24:S===Nn?B=i.DEPTH_COMPONENT32F:S===ks&&(B=i.DEPTH_COMPONENT16),B}function b(A,S){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){let S=A.target;S.removeEventListener("dispose",E),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function x(A){let S=A.target;S.removeEventListener("dispose",x),L(S)}function T(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,k=p.get(B);if(k){let $=k[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(A),Object.keys(k).length===0&&p.delete(B)}n.remove(A)}function C(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,k=p.get(B);delete k[S.__cacheKey],a.memory.textures--}function L(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let $=0;$<S.__webglFramebuffer[k].length;$++)i.deleteFramebuffer(S.__webglFramebuffer[k][$]);else i.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)i.deleteFramebuffer(S.__webglFramebuffer[k]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let k=0,$=B.length;k<$;k++){let oe=n.get(B[k]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(B[k])}n.remove(A)}let O=0;function H(){O=0}function I(){return O}function V(A){O=A}function P(){let A=O;return A>=r.maxTextures&&je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){let B=n.get(A);if(A.isVideoTexture&&W(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let k=A.image;if(k===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function F(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ae(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function U(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ae(B,A,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function G(A,S){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){de(B,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let le={[ir]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},fe={[zt]:i.NEAREST,[vl]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Bs]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},pe={[Ap]:i.NEVER,[Lp]:i.ALWAYS,[Rp]:i.LESS,[sc]:i.LEQUAL,[Cp]:i.EQUAL,[ac]:i.GEQUAL,[Ip]:i.GREATER,[Pp]:i.NOTEQUAL};function Z(A,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===Bs||S.magFilter===Ir||S.magFilter===ti||S.minFilter===Ht||S.minFilter===Bs||S.minFilter===Ir||S.minFilter===ti)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,le[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==Ir&&S.minFilter!==ti||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ce(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let k=S.source,$=p.get(k);$===void 0&&($={},p.set(k,$));let oe=N(S);if(oe!==A.__cacheKey){$[oe]===void 0&&($[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[oe].usedTimes++;let xe=$[A.__cacheKey];xe!==void 0&&($[A.__cacheKey].usedTimes--,xe.usedTimes===0&&C(S)),A.__cacheKey=oe,A.__webglTexture=$[oe].texture}return B}function z(A,S,B){return Math.floor(Math.floor(A/B)/S)}function K(A,S,B,k){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,k,S.data);else{oe.sort((He,Ce)=>He.start-Ce.start);let xe=0;for(let He=1;He<oe.length;He++){let Ce=oe[xe],we=oe[He],Ve=Ce.start+Ce.count,Pe=z(we.start,S.width,4),it=z(Ce.start,S.width,4);we.start<=Ve+1&&Pe===it&&z(we.start+we.count-1,S.width,4)===Pe?Ce.count=Math.max(Ce.count,we.start+we.count-Ce.start):(++xe,oe[xe]=we)}oe.length=xe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let He=0,Ce=oe.length;He<Ce;He++){let we=oe[He],Ve=Math.floor(we.start/4),Pe=Math.ceil(we.count/4),it=Ve%S.width,X=Math.floor(Ve/S.width),Ie=Pe,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,it,X,Ie,he,B,k,S.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ae(A,S,B){let k=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=i.TEXTURE_3D);let $=ce(A,S),oe=S.source;t.bindTexture(k,A.__webglTexture,i.TEXTURE0+B);let xe=n.get(oe);if(oe.version!==xe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let he=dt.getPrimaries(dt.workingColorSpace),Ee=S.colorSpace===ri?null:dt.getPrimaries(S.colorSpace),Ae=S.colorSpace===ri||he===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=m(S.image,!1,r.maxTextureSize);re=ze(S,re);let ve=s.convert(S.format,S.colorSpace),He=s.convert(S.type),Ce=y(S.internalFormat,ve,He,S.normalized,S.colorSpace,S.isVideoTexture);Z(k,S);let we,Ve=S.mipmaps,Pe=S.isVideoTexture!==!0,it=xe.__version===void 0||$===!0,X=oe.dataReady,Ie=b(S,re);if(S.isDepthTexture)Ce=w(S.format===cr,S.type),it&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,ve,He,null));else if(S.isDataTexture)if(Ve.length>0){Pe&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,Ve[0].width,Ve[0].height);for(let he=0,Ee=Ve.length;he<Ee;he++)we=Ve[he],Pe?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,ve,He,we.data):t.texImage2D(i.TEXTURE_2D,he,Ce,we.width,we.height,0,ve,He,we.data);S.generateMipmaps=!1}else Pe?(it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,re.width,re.height),X&&K(S,re,ve,He)):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,ve,He,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ce,Ve[0].width,Ve[0].height,re.depth);for(let he=0,Ee=Ve.length;he<Ee;he++)if(we=Ve[he],S.format!==Un)if(ve!==null)if(Pe){if(X)if(S.layerUpdates.size>0){let Ae=ah(we.width,we.height,S.format,S.type);for(let ye of S.layerUpdates){let Ke=we.data.subarray(ye*Ae/we.data.BYTES_PER_ELEMENT,(ye+1)*Ae/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ye,we.width,we.height,1,ve,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,re.depth,ve,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Ce,we.width,we.height,re.depth,0,we.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,re.depth,ve,He,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Ce,we.width,we.height,re.depth,0,ve,He,we.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Pe&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,Ve[0].width,Ve[0].height);for(let he=0,Ee=Ve.length;he<Ee;he++)we=Ve[he],S.format!==Un?ve!==null?Pe?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Ce,we.width,we.height,0,we.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,ve,He,we.data):t.texImage2D(i.TEXTURE_2D,he,Ce,we.width,we.height,0,ve,He,we.data)}else if(S.isDataArrayTexture)if(Pe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ce,re.width,re.height,re.depth),X)if(S.layerUpdates.size>0){let he=ah(re.width,re.height,S.format,S.type);for(let Ee of S.layerUpdates){let Ae=re.data.subarray(Ee*he/re.data.BYTES_PER_ELEMENT,(Ee+1)*he/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,re.width,re.height,1,ve,He,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,He,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,ve,He,re.data);else if(S.isData3DTexture)Pe?(it&&t.texStorage3D(i.TEXTURE_3D,Ie,Ce,re.width,re.height,re.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,He,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,ve,He,re.data);else if(S.isFramebufferTexture){if(it)if(Pe)t.texStorage2D(i.TEXTURE_2D,Ie,Ce,re.width,re.height);else{let he=re.width,Ee=re.height;for(let Ae=0;Ae<Ie;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ce,he,Ee,0,ve,He,null),he>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),re.parentNode!==he){he.appendChild(re),h.add(S),he.onpaint=Ee=>{let Ae=Ee.changedElements;for(let ye of h)Ae.includes(ye.image)&&(ye.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Ae=i.RGBA,ye=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,ye,Ke,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Pe&&it){let he=ge(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ce,he.width,he.height)}for(let he=0,Ee=Ve.length;he<Ee;he++)we=Ve[he],Pe?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ve,He,we):t.texImage2D(i.TEXTURE_2D,he,Ce,ve,He,we);S.generateMipmaps=!1}else if(Pe){if(it){let he=ge(re);t.texStorage2D(i.TEXTURE_2D,Ie,Ce,he.width,he.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,He,re)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ve,He,re);f(S)&&M(k),xe.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,B){if(S.image.length!==6)return;let k=ce(A,S),$=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let oe=n.get($);if($.version!==oe.__version||k===!0){t.activeTexture(i.TEXTURE0+B);let xe=dt.getPrimaries(dt.workingColorSpace),ne=S.colorSpace===ri?null:dt.getPrimaries(S.colorSpace),re=S.colorSpace===ri||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let ye=0;ye<6;ye++)!ve&&!He?Ce[ye]=m(S.image[ye],!0,r.maxCubemapSize):Ce[ye]=He?S.image[ye].image:S.image[ye],Ce[ye]=ze(S,Ce[ye]);let we=Ce[0],Ve=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),it=y(S.internalFormat,Ve,Pe,S.normalized,S.colorSpace),X=S.isVideoTexture!==!0,Ie=oe.__version===void 0||k===!0,he=$.dataReady,Ee=b(S,we);Z(i.TEXTURE_CUBE_MAP,S);let Ae;if(ve){X&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,it,we.width,we.height);for(let ye=0;ye<6;ye++){Ae=Ce[ye].mipmaps;for(let Ke=0;Ke<Ae.length;Ke++){let Ge=Ae[Ke];S.format!==Un?Ve!==null?X?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ge.width,Ge.height,Ve,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,it,Ge.width,Ge.height,0,Ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ge.width,Ge.height,Ve,Pe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,it,Ge.width,Ge.height,0,Ve,Pe,Ge.data)}}}else{if(Ae=S.mipmaps,X&&Ie){Ae.length>0&&Ee++;let ye=ge(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,it,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(He){X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ce[ye].width,Ce[ye].height,Ve,Pe,Ce[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ce[ye].width,Ce[ye].height,0,Ve,Pe,Ce[ye].data);for(let Ke=0;Ke<Ae.length;Ke++){let bt=Ae[Ke].image[ye].image;X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,bt.width,bt.height,Ve,Pe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,it,bt.width,bt.height,0,Ve,Pe,bt.data)}}else{X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ve,Pe,Ce[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ve,Pe,Ce[ye]);for(let Ke=0;Ke<Ae.length;Ke++){let Ge=Ae[Ke];X?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,Ve,Pe,Ge.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,it,Ve,Pe,Ge.image[ye])}}}f(S)&&M(i.TEXTURE_CUBE_MAP),oe.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,B,k,$,oe){let xe=s.convert(B.format,B.colorSpace),ne=s.convert(B.type),re=y(B.internalFormat,xe,ne,B.normalized,B.colorSpace),ve=n.get(S),He=n.get(B);if(He.__renderTarget=S,!ve.__hasExternalTextures){let Ce=Math.max(1,S.width>>oe),we=Math.max(1,S.height>>oe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,oe,re,Ce,we,S.depth,0,xe,ne,null):t.texImage2D($,oe,re,Ce,we,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,$,He.__webglTexture,0,We(S)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,$,He.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let k=S.depthTexture,$=k&&k.isDepthTexture?k.type:null,oe=w(S.stencilBuffer,$),xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(S),oe,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(S),oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,A)}else{let k=S.textures;for(let $=0;$<k.length;$++){let oe=k[$],xe=s.convert(oe.format,oe.colorSpace),ne=s.convert(oe.type),re=y(oe.internalFormat,xe,ne,oe.normalized,oe.colorSpace);Qe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(S),re,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(A,S,B){let k=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Z(i.TEXTURE_CUBE_MAP,S.depthTexture);let ve=s.convert(S.depthTexture.format),He=s.convert(S.depthTexture.type),Ce;S.depthTexture.format===di?Ce=i.DEPTH_COMPONENT24:S.depthTexture.format===cr&&(Ce=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ce,S.width,S.height,0,ve,He,null)}}else Y(S.depthTexture,0);let oe=$.__webglTexture,xe=We(S),ne=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,re=S.depthTexture.format===cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===di)Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,oe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,oe,0);else if(S.depthTexture.format===cr)Qe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,oe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=k}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Re(S.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?Re(S.__webglFramebuffer[0],A,0):Re(S.__webglFramebuffer,A,0)}else if(B){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[k],A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,S,B){let k=n.get(A);S!==void 0&&ue(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_e(A)}function te(A){let S=A.texture,B=n.get(A),k=n.get(S);A.addEventListener("dispose",x);let $=A.textures,oe=A.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=S.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ne]=[];for(let re=0;re<S.mipmaps.length;re++)B.__webglFramebuffer[ne][re]=i.createFramebuffer()}else B.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)B.__webglFramebuffer[ne]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,re=$.length;ne<re;ne++){let ve=n.get($[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Qe(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){let re=$[ne];B.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ne]);let ve=s.convert(re.format,re.colorSpace),He=s.convert(re.type),Ce=y(re.internalFormat,ve,He,re.normalized,re.colorSpace,A.isXRRenderTarget===!0),we=We(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,B.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Z(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)ue(B.__webglFramebuffer[ne][re],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else ue(B.__webglFramebuffer[ne],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);f(S)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,re=$.length;ne<re;ne++){let ve=$[ne],He=n.get(ve),Ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,He.__webglTexture),Z(Ce,ve),ue(B.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+ne,Ce,0),f(ve)&&M(Ce)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,k.__webglTexture),Z(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)ue(B.__webglFramebuffer[re],A,S,i.COLOR_ATTACHMENT0,ne,re);else ue(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ne,0);f(S)&&M(ne),t.unbindTexture()}A.depthBuffer&&_e(A)}function j(A){let S=A.textures;for(let B=0,k=S.length;B<k;B++){let $=S[B];if(f($)){let oe=_(A),xe=n.get($).__webglTexture;t.bindTexture(oe,xe),M(oe),t.unbindTexture()}}}let ie=[],me=[];function Se(A){if(A.samples>0){if(Qe(A)===!1){let S=A.textures,B=A.width,k=A.height,$=i.COLOR_BUFFER_BIT,oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(A),ne=S.length>1;if(ne)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let re=A.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let He=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,B,k,0,0,B,k,$,i.NEAREST),c===!0&&(ie.length=0,me.length=0,ie.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ie.push(oe),me.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let He=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function We(A){return Math.min(r.maxSamples,A.samples)}function Qe(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function W(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ze(A,S){let B=A.colorSpace,k=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==pn&&B!==ri&&(dt.getTransfer(B)===St?(k!==Un||$!==Tn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",B)),S}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=te,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mb(i,e){function t(n,r=ri){let s,a=dt.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return i.BYTE;if(n===Yu)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===Ju)return i.RGB;if(n===Un)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===El)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===ka||n===za)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Il||n===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Nl||n===Ul||n===Dl||n===Fl||n===Ha||n===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ll||n===Nl)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return s.COMPRESSED_R11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return s.COMPRESSED_RG11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l||n===Jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Ql||n===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jl)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===nc||n===Va||n===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:Sb,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Eh,f={},M=t.getContextAttributes(),_=null,y=null,w=[],b=[],E=new lt,x=null,T=null,C=new Yt;C.viewport=new Et;let L=new Yt;L.viewport=new Et;let O=[C,L],H=new ml,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=w[z];return K===void 0&&(K=new ws,w[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=w[z];return K===void 0&&(K=new ws,w[z]=K),K.getGripSpace()},this.getHand=function(z){let K=w[z];return K===void 0&&(K=new ws,w[z]=K),K.getHandSpace()};function P(z){let K=b.indexOf(z.inputSource);if(K===-1)return;let ae=w[K];ae!==void 0&&(ae.update(z.inputSource,z.frame,l||a),ae.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Y);for(let z=0;z<w.length;z++){let K=b[z];K!==null&&(b[z]=null,w[z].disconnect(K))}I=null,V=null,m.reset();for(let z in f)delete f[z];if(e.setRenderTarget(_),p=null,d=null,h=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),T!==null){let z=T.camera;z.fov=T.fov,z.zoom=T.zoom,z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,de=null,ue=null;M.depth&&(ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?cr:di,de=M.stencil?zs:ni);let Me={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new bn(d.textureWidth,d.textureHeight,{format:Un,type:Tn,depthTexture:new sr(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(z){for(let K=0;K<z.removed.length;K++){let ae=z.removed[K],de=b.indexOf(ae);de>=0&&(b[de]=null,w[de].disconnect(ae))}for(let K=0;K<z.added.length;K++){let ae=z.added[K],de=b.indexOf(ae);if(de===-1){for(let Me=0;Me<w.length;Me++)if(Me>=b.length){b.push(ae),de=Me;break}else if(b[Me]===null){b[Me]=ae,de=Me;break}if(de===-1)break}let ue=w[de];ue&&ue.connect(ae)}}let F=new D,U=new D;function G(z,K,ae){F.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(ae.matrixWorld);let de=F.distanceTo(U),ue=K.projectionMatrix.elements,Me=ae.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),_e=ue[14]/(ue[10]+1),Ue=(ue[9]+1)/ue[5],te=(ue[9]-1)/ue[5],j=(ue[8]-1)/ue[0],ie=(Me[8]+1)/Me[0],me=Re*j,Se=Re*ie,We=de/(-j+ie),Qe=We*-j;if(K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qe),z.translateZ(We),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ue[10]===-1)z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let W=Re+We,ze=_e+We,ge=me-Qe,A=Se+(de-Qe),S=Ue*_e/ze*W,B=te*_e/ze*W;z.projectionMatrix.makePerspective(ge,A,S,B,W,ze),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function le(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let K=z.near,ae=z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),H.near=L.near=C.near=K,H.far=L.far=C.far=ae,(I!==H.near||V!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=z.layers.mask|6,C.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let de=z.parent,ue=H.cameras;le(H,de);for(let Me=0;Me<ue.length;Me++)le(ue[Me],de);ue.length===2?G(H,C,L):H.projectionMatrix.copy(C.projectionMatrix),T===null&&z.isPerspectiveCamera&&(T={camera:z,fov:z.fov,zoom:z.zoom}),fe(z,H,de)};function fe(z,K,ae){ae===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ae.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=br*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(z){return f[z]};let pe=null;function Z(z,K){if(u=K.getViewerPose(l||a),g=K,u!==null){let ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let de=!1;ae.length!==H.cameras.length&&(H.cameras.length=0,de=!0);for(let _e=0;_e<ae.length;_e++){let Ue=ae[_e],te=null;if(p!==null)te=p.getViewport(Ue);else{let ie=h.getViewSubImage(d,Ue);te=ie.viewport,_e===0&&(e.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(y))}let j=O[_e];j===void 0&&(j=new Yt,j.layers.enable(_e),j.viewport=new Et,O[_e]=j),j.matrix.fromArray(Ue.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ue.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(te.x,te.y,te.width,te.height),_e===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),de===!0&&H.cameras.push(j)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let _e=h.getDepthInformation(ae[0]);_e&&_e.isValid&&_e.texture&&m.init(_e,r.renderState)}if(ue&&ue.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let _e=0;_e<ae.length;_e++){let Ue=ae[_e].camera;if(Ue){let te=f[Ue];te||(te=new Aa,f[Ue]=te);let j=h.getCameraImage(Ue);te.sourceTexture=j}}}}for(let ae=0;ae<w.length;ae++){let de=b[ae],ue=w[ae];de!==null&&ue!==void 0&&ue.update(de,K,l||a)}pe&&pe(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ce=new lm;ce.setAnimationLoop(Z),this.setAnimationLoop=function(z){pe=z},this.dispose=function(){}}},Eb=new Ye,pm=new ot;pm.set(-1,0,0,0,1,0,0,0,1);function Tb(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ih(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,_,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ab(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let b=w.program;n.uniformBlockBinding(y,b)}function l(y,w){let b=r[y.id];b===void 0&&(m(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",M));let E=w.program;n.updateUBOMapping(y,E);let x=e.render.frame;s[y.id]!==x&&(d(y),s[y.id]=x)}function u(y){let w=h();y.__bindingPointIndex=w;let b=i.createBuffer(),E=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=r[y.id],b=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=b.length;x<T;x++){let C=b[x];if(Array.isArray(C))for(let L=0,O=C.length;L<O;L++)p(C[L],x,L,E);else p(C,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,w,b,E){if(v(y,w,b,E)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){let O=T[L],H=f(O);g(O,y.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function v(y,w,b,E){let x=y.value,T=w+"_"+b;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let C=E[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let w=y.uniforms,b=0,E=16;for(let T=0,C=w.length;T<C;T++){let L=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,H=L.length;O<H;O++){let I=L[O],V=Array.isArray(I.value)?I.value:[I.value];for(let P=0,N=V.length;P<N;P++){let Y=V[P],F=f(Y),U=b%E,G=U%F.boundary,le=U+G;b+=G,le!==0&&E-le<F.storage&&(b+=E-le),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=F.storage}}}let x=b%E;return x>0&&(b+=E-x),y.__size=b,y.__cache={},this}function f(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function _(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}var Rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function Cb(){return yi===null&&(yi=new Rs(Rb,16,16,ur,ii),yi.name="DFG_LUT",yi.minFilter=Ht,yi.magFilter=Ht,yi.wrapS=qn,yi.wrapT=qn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var uc=class{constructor(e={}){let{canvas:t=Np(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,m=new Set([Al,Tl,El]),f=new Set([Tn,ni,ks,zs,Ml,Sl]),M=new Uint32Array(4),_=new Int32Array(4),y=new D,w=null,b=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,O=null,H=null,I=null,V=null;this._outputColorSpace=Dt;let P=0,N=0,Y=null,F=-1,U=null,G=new Et,le=new Et,fe=null,pe=new tt(0),Z=0,ce=t.width,z=t.height,K=1,ae=null,de=null,ue=new Et(0,0,ce,z),Me=new Et(0,0,ce,z),Re=!1,_e=new Cs,Ue=!1,te=!1,j=new Ye,ie=new D,me=new Et,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Qe(){return Y===null?K:1}let W=n;function ze(R,q){return t.getContext(R,q)}let ge,A,S,B,k,$,oe,xe,ne,re,ve,He,Ce,we,Ve,Pe,it,X,Ie,he,Ee,Ae,ye;try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),W===null){let q="webgl2";if(W=ze(q,R),W===null)throw ze(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(R){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),rt("WebGLRenderer: "+R.message),R}function Ke(){ge=new F_(W),ge.init(),Ee=new Mb(W,ge),A=new T_(W,ge,e,Ee),S=new vb(W,ge),A.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),H=W.createFramebuffer(),I=W.createFramebuffer(),V=W.createFramebuffer(),B=new k_(W),k=new ab,$=new bb(W,ge,S,k,A,Ee,B),oe=new D_(C),xe=new H0(W),Ae=new w_(W,xe),ne=new O_(W,xe,B,Ae),re=new H_(W,ne,xe,Ae,B),X=new z_(W,A,$),Ve=new A_(k),ve=new sb(C,oe,ge,A,Ae,Ve),He=new Tb(C,k),Ce=new lb,we=new pb(ge),it=new S_(C,oe,S,re,g,c),Pe=new _b(C,re,A),ye=new Ab(W,B,A,S),Ie=new E_(W,ge,B),he=new B_(W,ge,B),B.programs=ve.programs,C.capabilities=A,C.extensions=ge,C.properties=k,C.renderLists=Ce,C.shadowMap=Pe,C.state=S,C.info=B}v!==Tn&&(T=new G_(v,t.width,t.height,o,r,s));let Ge=new Th(C,W);this.xr=Ge,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(ce,z,!1))},this.getSize=function(R){return R.set(ce,z)},this.setSize=function(R,q,se=!0){if(Ge.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,z=q,t.width=Math.floor(R*K),t.height=Math.floor(q*K),se===!0&&(t.style.width=R+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ce*K,z*K).floor()},this.setDrawingBufferSize=function(R,q,se){ce=R,z=q,K=se,t.width=Math.floor(R*se),t.height=Math.floor(q*se),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(v===Tn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,q,se,Q){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,q,se,Q),S.viewport(G.copy(ue).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,q,se,Q){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,q,se,Q),S.scissor(le.copy(Me).multiplyScalar(K).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){S.setScissorTest(Re=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){de=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,se=!0){let Q=0;if(R){let ee=!1;if(Y!==null){let Fe=Y.texture.format;ee=m.has(Fe)}if(ee){let Fe=Y.texture.type,Be=f.has(Fe),De=it.getClearColor(),Xe=it.getClearAlpha(),Ze=De.r,ut=De.g,pt=De.b;Be?(M[0]=Ze,M[1]=ut,M[2]=pt,M[3]=Xe,W.clearBufferuiv(W.COLOR,0,M)):(_[0]=Ze,_[1]=ut,_[2]=pt,_[3]=Xe,W.clearBufferiv(W.COLOR,0,_))}else Q|=W.COLOR_BUFFER_BIT}q&&(Q|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),O=R},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),it.dispose(),Ce.dispose(),we.dispose(),k.dispose(),oe.dispose(),re.dispose(),Ae.dispose(),ye.dispose(),ve.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",to),Ge.removeEventListener("sessionend",kr),wi.stop()};function bt(R){R.preventDefault(),ga("WebGLRenderer: Context Lost."),L=!0}function gt(){ga("WebGLRenderer: Context Restored."),L=!1;let R=B.autoReset,q=Pe.enabled,se=Pe.autoUpdate,Q=Pe.needsUpdate,ee=Pe.type;Ke(),B.autoReset=R,Pe.enabled=q,Pe.autoUpdate=se,Pe.needsUpdate=Q,Pe.type=ee}function gn(R){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){let q=R.target;q.removeEventListener("dispose",Bn),Mc(q)}function Mc(R){Qa(R),k.remove(R)}function Qa(R){let q=k.get(R).programs;q!==void 0&&(q.forEach(function(se){ve.releaseProgram(se)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,se,Q,ee,Fe){q===null&&(q=Se);let Be=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,De=Wt(R,q,se,Q,ee);S.setMaterial(Q,Be);let Xe=se.index,Ze=1;if(Q.wireframe===!0){if(Xe=ne.getWireframeAttribute(se),Xe===void 0)return;Ze=2}let ut=se.drawRange,pt=se.attributes.position,qe=ut.start*Ze,Mt=(ut.start+ut.count)*Ze;Fe!==null&&(qe=Math.max(qe,Fe.start*Ze),Mt=Math.min(Mt,(Fe.start+Fe.count)*Ze)),Xe!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,Xe.count)):pt!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,pt.count));let Xt=Mt-qe;if(Xt<0||Xt===1/0)return;Ae.setup(ee,Q,De,se,Xe);let Nt,It=Ie;if(Xe!==null&&(Nt=xe.get(Xe),It=he,It.setIndex(Nt)),ee.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*Qe()),It.setMode(W.LINES)):It.setMode(W.TRIANGLES);else if(ee.isLine){let tn=Q.linewidth;tn===void 0&&(tn=1),S.setLineWidth(tn*Qe()),ee.isLineSegments?It.setMode(W.LINES):ee.isLineLoop?It.setMode(W.LINE_LOOP):It.setMode(W.LINE_STRIP)}else ee.isPoints?It.setMode(W.POINTS):ee.isSprite&&It.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))It.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let tn=ee._multiDrawStarts,Oe=ee._multiDrawCounts,cn=ee._multiDrawCount,xt=Xe?xe.get(Xe).bytesPerElement:1,kn=k.get(Q).currentProgram.getUniforms();for(let ai=0;ai<cn;ai++)kn.setValue(W,"_gl_DrawID",ai),It.render(tn[ai]/xt,Oe[ai])}else if(ee.isInstancedMesh)It.renderInstances(qe,Xt,ee.count);else if(se.isInstancedBufferGeometry){let tn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Oe=Math.min(se.instanceCount,tn);It.renderInstances(qe,Xt,Oe)}else It.render(qe,Xt)};function eo(R,q,se,Q){O!==null&&R.isNodeMaterial&&O.setObject(Q,R),Ue===!0&&Ve.setState(R,se,!1),R.transparent===!0&&R.side===en&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,nt(R,q,Q),R.side=En,R.needsUpdate=!0,nt(R,q,Q),R.side=en):nt(R,q,Q)}this.compile=function(R,q,se=null){se===null&&(se=R),O!==null&&O.renderStart(R,q,se),b=we.get(se),b.init(q),x.push(b),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),R!==se&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),te=this.localClippingEnabled,Ue=Ve.init(this.clippingPlanes,te),Ue===!0&&Ve.setGlobalState(this.clippingPlanes,q),O!==null&&Pe.render(b.state.shadowsArray,se,q);let Q=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let Be=0;Be<Fe.length;Be++){let De=Fe[Be];eo(De,se,q,ee),Q.add(De)}else eo(Fe,se,q,ee),Q.add(Fe)}),b=x.pop(),O!==null&&O.renderEnd(),Q},this.compileAsync=function(R,q,se=null){let Q=this.compile(R,q,se);return new Promise(ee=>{function Fe(){if(Q.forEach(function(Be){let Xe=k.get(Be).currentProgram;(Xe===void 0||Xe.isReady())&&Q.delete(Be)}),Q.size===0){ee(R);return}setTimeout(Fe,10)}ge.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Js=null;function Sc(R){Js&&Js(R)}function to(){wi.stop()}function kr(){wi.start()}let wi=new lm;wi.setAnimationLoop(Sc),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Js=R,Ge.setAnimationLoop(R),R===null?wi.stop():wi.start()},Ge.addEventListener("sessionstart",to),Ge.addEventListener("sessionend",kr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(R,q);let se=Ge.enabled===!0&&Ge.isPresenting===!0,Q=T!==null&&(Y===null||se)&&T.begin(C,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(q),q=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,Y),b=we.get(R,x.length),b.init(q),b.state.textureUnits=$.getTextureUnits(),x.push(b),j.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_e.setFromProjectionMatrix(j,jn,q.reversedDepth),te=this.localClippingEnabled,Ue=Ve.init(this.clippingPlanes,te),w=Ce.get(R,E.length),w.init(),E.push(w),Ge.enabled===!0&&Ge.isPresenting===!0){let Be=C.xr.getDepthSensingMesh();Be!==null&&be(Be,q,-1/0,C.sortObjects)}be(R,q,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(ae,de),We=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,We&&it.addToRenderList(w,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ue===!0&&Ve.beginShadows();let ee=b.state.shadowsArray;if(Pe.render(ee,R,q),Ue===!0&&Ve.endShadows(),(Q&&T.hasRenderPass())===!1){let Be=w.opaque,De=w.transmissive;if(b.setupLights(),q.isArrayCamera){let Xe=q.cameras;if(De.length>0)for(let Ze=0,ut=Xe.length;Ze<ut;Ze++){let pt=Xe[Ze];$e(Be,De,R,pt)}We&&it.render(R);for(let Ze=0,ut=Xe.length;Ze<ut;Ze++){let pt=Xe[Ze];J(w,R,pt,pt.viewport)}}else De.length>0&&$e(Be,De,R,q),We&&it.render(R),J(w,R,q)}Y!==null&&N===0&&($.updateMultisampleRenderTarget(Y),$.updateRenderTargetMipmap(Y)),Q&&T.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Ae.resetDefaultState(),F=-1,U=null,x.pop(),x.length>0?(b=x[x.length-1],$.setTextureUnits(b.state.textureUnits),Ue===!0&&Ve.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,O!==null&&O.renderEnd()};function be(R,q,se,Q){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(_e)){Q&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);let Be=re.update(R),De=R.material;De.visible&&w.push(R,Be,De,se,me.z,null,q)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(_e))){let Be=re.update(R),De=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),me.copy(Be.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(De)){let Xe=Be.groups;for(let Ze=0,ut=Xe.length;Ze<ut;Ze++){let pt=Xe[Ze],qe=De[pt.materialIndex];qe&&qe.visible&&w.push(R,Be,qe,se,me.z,pt,q)}}else De.visible&&w.push(R,Be,De,se,me.z,null,q)}}let Fe=R.children;for(let Be=0,De=Fe.length;Be<De;Be++)be(Fe[Be],q,se,Q)}function J(R,q,se,Q){let{opaque:ee,transmissive:Fe,transparent:Be}=R;b.setupLightsView(se),Ue===!0&&Ve.setGlobalState(C.clippingPlanes,se),Q&&S.viewport(G.copy(Q)),ee.length>0&&at(ee,q,se),Fe.length>0&&at(Fe,q,se),Be.length>0&&at(Be,q,se),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function $e(R,q,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){let qe=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new bn(1,1,{generateMipmaps:!0,type:qe?ii:Tn,minFilter:ti,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Fe=b.state.transmissionRenderTarget[Q.id],Be=Q.viewport||G;Fe.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);let De=C.getRenderTarget(),Xe=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Fe),C.getClearColor(pe),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear(),We&&it.render(se);let ut=C.toneMapping;C.toneMapping=ei;let pt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),Ue===!0&&Ve.setGlobalState(C.clippingPlanes,Q),at(R,se,Q),$.updateMultisampleRenderTarget(Fe),$.updateRenderTargetMipmap(Fe),ge.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Mt=0,Xt=q.length;Mt<Xt;Mt++){let Nt=q[Mt],{object:It,geometry:tn,material:Oe,group:cn}=Nt;if(Oe.side===en&&It.layers.test(Q.layers)){let xt=Oe.side;Oe.side=mn,Oe.needsUpdate=!0,et(It,se,Q,tn,Oe,cn),Oe.side=xt,Oe.needsUpdate=!0,qe=!0}}qe===!0&&($.updateMultisampleRenderTarget(Fe),$.updateRenderTargetMipmap(Fe))}C.setRenderTarget(De,Xe,Ze),C.setClearColor(pe,Z),pt!==void 0&&(Q.viewport=pt),C.toneMapping=ut}function at(R,q,se){let Q=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Fe=R.length;ee<Fe;ee++){let Be=R[ee],{object:De,geometry:Xe,group:Ze}=Be,ut=Be.material;ut.allowOverride===!0&&Q!==null&&(ut=Q),De.layers.test(se.layers)&&et(De,q,se,Xe,ut,Ze)}}function et(R,q,se,Q,ee,Fe){O!==null&&ee.isNodeMaterial&&O.setObject(R,ee),R.onBeforeRender(C,q,se,Q,ee,Fe),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(C,q,se,Q,R,Fe),ee.transparent===!0&&ee.side===en&&ee.forceSinglePass===!1?(ee.side=mn,ee.needsUpdate=!0,C.renderBufferDirect(se,q,Q,ee,R,Fe),ee.side=En,ee.needsUpdate=!0,C.renderBufferDirect(se,q,Q,ee,R,Fe),ee.side=en):C.renderBufferDirect(se,q,Q,ee,R,Fe),R.onAfterRender(C,q,se,Q,ee,Fe)}function nt(R,q,se){q.isScene!==!0&&(q=Se);let Q=k.get(R),ee=b.state.lights,Fe=b.state.shadowsArray,Be=ee.state.version,De=ve.getParameters(R,ee.state,Fe,q,se,b.state.lightProbeGridArray),Xe=ve.getProgramCacheKey(De),Ze=Q.programs;Q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;let ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Q.envMap=oe.get(R.envMap||Q.environment,ut),Q.envMapRotation=Q.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Bn),Ze=new Map,Q.programs=Ze);let pt=Ze.get(Xe);if(pt!==void 0){if(Q.currentProgram===pt&&Q.lightsStateVersion===Be)return Rt(R,De),pt}else De.uniforms=ve.getUniforms(R),O!==null&&R.isNodeMaterial&&O.build(R,se,De),R.onBeforeCompile(De,C),pt=ve.acquireProgram(De,Xe),Ze.set(Xe,pt),Q.uniforms=De.uniforms;let qe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Ve.uniform),Rt(R,De),Q.needsLights=_n(R),Q.lightsStateVersion=Be,Q.needsLights&&(qe.ambientLightColor.value=ee.state.ambient,qe.lightProbe.value=ee.state.probe,qe.sunLights.value=ee.state.sun,qe.sunLightShadows.value=ee.state.sunShadow,qe.directionalLights.value=ee.state.directional,qe.directionalLightShadows.value=ee.state.directionalShadow,qe.spotLights.value=ee.state.spot,qe.spotLightShadows.value=ee.state.spotShadow,qe.rectAreaLights.value=ee.state.rectArea,qe.ltc_1.value=ee.state.rectAreaLTC1,qe.ltc_2.value=ee.state.rectAreaLTC2,qe.pointLights.value=ee.state.point,qe.pointLightShadows.value=ee.state.pointShadow,qe.hemisphereLights.value=ee.state.hemi,qe.sunShadowMatrix.value=ee.state.sunShadowMatrix,qe.sunShadowCascade.value=ee.state.sunShadowCascade,qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,qe.spotLightMatrix.value=ee.state.spotLightMatrix,qe.spotLightMap.value=ee.state.spotLightMap,qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=b.state.lightProbeGridArray.length>0,Q.currentProgram=pt,Q.uniformsList=null,pt}function yt(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Ws.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Rt(R,q){let se=k.get(R);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function xn(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let se=0,Q=R.length;se<Q;se++){let ee=R[se];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Wt(R,q,se,Q,ee){q.isScene!==!0&&(q=Se),$.resetTextureUnits();let Fe=q.fog,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?q.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:dt.workingColorSpace,Xe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ze=oe.get(Q.envMap||Be,Xe),ut=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pt=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qe=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,Xt=!!se.morphAttributes.color,Nt=ei;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,tn=It!==void 0?It.length:0,Oe=k.get(Q),cn=b.state.lights;if(Ue===!0&&(te===!0||R!==U)){let Lt=R===U&&Q.id===F;Ve.setState(Q,R,Lt)}let xt=!1;Q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==cn.state.version||Oe.outputColorSpace!==De||ee.isBatchedMesh&&Oe.batching===!1||!ee.isBatchedMesh&&Oe.batching===!0||ee.isBatchedMesh&&Oe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Oe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||ee.isInstancedMesh&&Oe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Oe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Oe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Oe.instancingMorph===!1&&ee.morphTexture!==null||Oe.envMap!==Ze||Q.fog===!0&&Oe.fog!==Fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ve.numPlanes||Oe.numIntersection!==Ve.numIntersection)||Oe.vertexAlphas!==ut||Oe.vertexTangents!==pt||Oe.morphTargets!==qe||Oe.morphNormals!==Mt||Oe.morphColors!==Xt||Oe.toneMapping!==Nt||Oe.morphTargetsCount!==tn||!!Oe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Oe.__version=Q.version);let kn=Oe.currentProgram;xt===!0&&(kn=nt(Q,q,ee),O&&Q.isNodeMaterial&&O.onUpdateProgram(Q,kn,Oe));let ai=!1,Wi=!1,zr=!1,Ct=kn.getUniforms(),Ot=Oe.uniforms;if(S.useProgram(kn.program)&&(ai=!0,Wi=!0,zr=!0),Q.id!==F&&(F=Q.id,Wi=!0),Oe.needsLights){let Lt=xn(b.state.lightProbeGridArray,ee);Oe.lightProbeGrid!==Lt&&(Oe.lightProbeGrid=Lt,Wi=!0)}if(ai||U!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(W,"projectionMatrix",R.projectionMatrix),Ct.setValue(W,"viewMatrix",R.matrixWorldInverse);let qi=Ct.map.cameraPosition;qi!==void 0&&qi.setValue(W,ie.setFromMatrixPosition(R.matrixWorld)),A.logarithmicDepthBuffer&&Ct.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,Wi=!0,zr=!0)}if(Oe.needsLights&&(cn.state.sunShadowMap.length>0&&Ct.setValue(W,"sunShadowMap",cn.state.sunShadowMap,$),cn.state.directionalShadowMap.length>0&&Ct.setValue(W,"directionalShadowMap",cn.state.directionalShadowMap,$),cn.state.spotShadowMap.length>0&&Ct.setValue(W,"spotShadowMap",cn.state.spotShadowMap,$),cn.state.pointShadowMap.length>0&&Ct.setValue(W,"pointShadowMap",cn.state.pointShadowMap,$)),ee.isSkinnedMesh){Ct.setOptional(W,ee,"bindMatrix"),Ct.setOptional(W,ee,"bindMatrixInverse");let Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue(W,"boneTexture",Lt.boneTexture,$))}ee.isBatchedMesh&&(Ct.setOptional(W,ee,"batchingTexture"),Ct.setValue(W,"batchingTexture",ee._matricesTexture,$),Ct.setOptional(W,ee,"batchingIdTexture"),Ct.setValue(W,"batchingIdTexture",ee._indirectTexture,$),Ct.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ct.setValue(W,"batchingColorTexture",ee._colorsTexture,$));let Xi=se.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&X.update(ee,se,kn),(Wi||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,Ct.setValue(W,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&q.environment!==null&&(Ot.envMapIntensity.value=q.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Cb()),Wi){if(Ct.setValue(W,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&yn(Ot,zr),Fe&&Q.fog===!0&&He.refreshFogUniforms(Ot,Fe),He.refreshMaterialUniforms(Ot,Q,K,z,b.state.transmissionRenderTarget[R.id]),Oe.needsLights&&Oe.lightProbeGrid){let Lt=Oe.lightProbeGrid;Ot.probesSH.value=Lt.texture,Ot.probesMin.value.copy(Lt.boundingBox.min),Ot.probesMax.value.copy(Lt.boundingBox.max),Ot.probesResolution.value.copy(Lt.resolution)}Ws.upload(W,yt(Oe),Ot,$)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ws.upload(W,yt(Oe),Ot,$),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(W,"center",ee.center),Ct.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Ct.setValue(W,"normalMatrix",ee.normalMatrix),Ct.setValue(W,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Lt=Q.uniformsGroups;for(let qi=0,Hr=Lt.length;qi<Hr;qi++){let xd=Lt[qi];ye.update(xd,kn),ye.bind(xd,kn)}}return kn}function yn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.sunLights.needsUpdate=q,R.sunLightShadows.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function _n(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,q,se){let Q=k.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),k.get(R.texture).__webglTexture=q,k.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let se=k.get(R);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,se=0){Y=R,P=q,N=se;let Q=null,ee=!1,Fe=!1;if(R){let De=k.get(R);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),G.copy(R.viewport),le.copy(R.scissor),fe=R.scissorTest,S.viewport(G),S.scissor(le),S.setScissorTest(fe),F=-1;return}else if(De.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(De.__hasExternalTextures)$.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ut=R.depthTexture;if(De.__boundDepthTexture!==ut){if(ut!==null&&k.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);let Ze=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?Q=Ze[q][se]:Q=Ze[q],ee=!0):R.samples>0&&$.useMultisampledRTT(R)===!1?Q=k.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[se]:Q=Ze,G.copy(R.viewport),le.copy(R.scissor),fe=R.scissorTest}else G.copy(ue).multiplyScalar(K).floor(),le.copy(Me).multiplyScalar(K).floor(),fe=Re;if(se!==0&&(Q=H),S.bindFramebuffer(W.FRAMEBUFFER,Q)&&S.drawBuffers(R,Q),S.viewport(G),S.scissor(le),S.setScissorTest(fe),ee){let De=k.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,se)}else if(Fe){let De=q;for(let Xe=0;Xe<R.textures.length;Xe++){let Ze=k.get(R.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,se,De)}}else if(R!==null&&se!==0){let De=k.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,se)}F=-1};function Rn(R){let q=k.get(R);return(q.__readFormat!==R.format||q.__readType!==R.type)&&(q.__readFormat=R.format,q.__readType=R.type,q.__formatReadable=A.textureFormatReadable(R.format),q.__typeReadable=A.textureTypeReadable(R.type)),q}this.readRenderTargetPixels=function(R,q,se,Q,ee,Fe,Be,De=0){if(!(R&&R.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){S.bindFramebuffer(W.FRAMEBUFFER,Xe);try{let Ze=R.textures[De],ut=Ze.format,pt=Ze.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let qe=Rn(Ze);if(qe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Q&&se>=0&&se<=R.height-ee&&W.readPixels(q,se,Q,ee,Ee.convert(ut),Ee.convert(pt),Fe)}finally{let Ze=Y!==null?k.get(Y).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,se,Q,ee,Fe,Be,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(q>=0&&q<=R.width-Q&&se>=0&&se<=R.height-ee){S.bindFramebuffer(W.FRAMEBUFFER,Xe);let Ze=R.textures[De],ut=Ze.format,pt=Ze.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let qe=Rn(Ze);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(q,se,Q,ee,Ee.convert(ut),Ee.convert(pt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Xt=Y!==null?k.get(Y).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,Xt);let Nt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Dp(W,Nt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Mt),W.deleteSync(Nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,se=0){let Q=Math.pow(2,-se),ee=Math.floor(R.image.width*Q),Fe=Math.floor(R.image.height*Q),Be=q!==null?q.x:0,De=q!==null?q.y:0;$.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,Be,De,ee,Fe),S.unbindTexture()},this.copyTextureToTexture=function(R,q,se=null,Q=null,ee=0,Fe=0){let Be,De,Xe,Ze,ut,pt,qe,Mt,Xt,Nt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(se!==null)Be=se.max.x-se.min.x,De=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,ut=se.min.y,pt=se.isBox3?se.min.z:0;else{let Ot=Math.pow(2,-ee);Be=Math.floor(Nt.width*Ot),De=Math.floor(Nt.height*Ot),R.isDataArrayTexture?Xe=Nt.depth:R.isData3DTexture?Xe=Math.floor(Nt.depth*Ot):Xe=1,Ze=0,ut=0,pt=0}Q!==null?(qe=Q.x,Mt=Q.y,Xt=Q.z):(qe=0,Mt=0,Xt=0);let It=Ee.convert(q.format),tn=Ee.convert(q.type),Oe;q.isData3DTexture?($.setTexture3D(q,0),Oe=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?($.setTexture2DArray(q,0),Oe=W.TEXTURE_2D_ARRAY):($.setTexture2D(q,0),Oe=W.TEXTURE_2D),S.activeTexture(W.TEXTURE0),S.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);let cn=S.getParameter(W.UNPACK_ROW_LENGTH),xt=S.getParameter(W.UNPACK_IMAGE_HEIGHT),kn=S.getParameter(W.UNPACK_SKIP_PIXELS),ai=S.getParameter(W.UNPACK_SKIP_ROWS),Wi=S.getParameter(W.UNPACK_SKIP_IMAGES);S.pixelStorei(W.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(W.UNPACK_SKIP_PIXELS,Ze),S.pixelStorei(W.UNPACK_SKIP_ROWS,ut),S.pixelStorei(W.UNPACK_SKIP_IMAGES,pt);let zr=R.isDataArrayTexture||R.isData3DTexture,Ct=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let Ot=k.get(R),Xi=k.get(q),Lt=k.get(Ot.__renderTarget),qi=k.get(Xi.__renderTarget);S.bindFramebuffer(W.READ_FRAMEBUFFER,Lt.__webglFramebuffer),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Hr=0;Hr<Xe;Hr++)zr&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,k.get(R).__webglTexture,ee,pt+Hr),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,k.get(q).__webglTexture,Fe,Xt+Hr)),W.blitFramebuffer(Ze,ut,Be,De,qe,Mt,Be,De,W.DEPTH_BUFFER_BIT,W.NEAREST);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||k.has(R)){let Ot=k.get(R),Xi=k.get(q);S.bindFramebuffer(W.READ_FRAMEBUFFER,I),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,V);for(let Lt=0;Lt<Xe;Lt++)zr?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.__webglTexture,ee,pt+Lt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ot.__webglTexture,ee),Ct?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xi.__webglTexture,Fe,Xt+Lt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Xi.__webglTexture,Fe),ee!==0?W.blitFramebuffer(Ze,ut,Be,De,qe,Mt,Be,De,W.COLOR_BUFFER_BIT,W.NEAREST):Ct?W.copyTexSubImage3D(Oe,Fe,qe,Mt,Xt+Lt,Ze,ut,Be,De):W.copyTexSubImage2D(Oe,Fe,qe,Mt,Ze,ut,Be,De);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Oe,Fe,qe,Mt,Xt,Be,De,Xe,It,tn,Nt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Oe,Fe,qe,Mt,Xt,Be,De,Xe,It,Nt.data):W.texSubImage3D(Oe,Fe,qe,Mt,Xt,Be,De,Xe,It,tn,Nt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,qe,Mt,Be,De,It,tn,Nt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,qe,Mt,Nt.width,Nt.height,It,Nt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,qe,Mt,Be,De,It,tn,Nt);S.pixelStorei(W.UNPACK_ROW_LENGTH,cn),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(W.UNPACK_SKIP_PIXELS,kn),S.pixelStorei(W.UNPACK_SKIP_ROWS,ai),S.pixelStorei(W.UNPACK_SKIP_IMAGES,Wi),Fe===0&&q.generateMipmaps&&W.generateMipmap(Oe),S.unbindTexture()},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){P=0,N=0,Y=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function mm(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:c=0,iterations:l=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=N=>N.getWorldPosition(new D),h=[i,e,t].map(N=>N.quaternion.clone());i.updateWorldMatrix(!0,!0);let d=u(i),p=u(e),g=u(t),v=d.distanceTo(p)+p.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),v].every(Number.isFinite)||v<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,v*s));let f=g.clone().add(m),M=p.clone().sub(d).cross(g.clone().sub(p));if(M.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};M.normalize();function _(N,Y){let F=u(N);return N.worldToLocal(F.clone().add(Y)).sub(N.worldToLocal(F)).normalize()}let y=_(i,M),w=_(e,M),b=p.clone().sub(d).normalize(),E=_(i,new D().crossVectors(M,b).normalize()),x=Math.PI-d.clone().sub(p).angleTo(g.clone().sub(p)),T=c?[0,0,0,0]:[0,0,0],C=[Te.degToRad(a[0]),Te.degToRad(a[1]),...c?[Te.degToRad(c)]:[],Te.degToRad(o)],L=_(i,b);function O(N){return i.quaternion.copy(h[0]).multiply(new ke().setFromAxisAngle(y,N[0])).multiply(new ke().setFromAxisAngle(E,N[1])),c&&i.quaternion.multiply(new ke().setFromAxisAngle(L,N[2])),e.quaternion.copy(h[1]).multiply(new ke().setFromAxisAngle(w,N[N.length-1])),t.quaternion.copy(h[2]),i.updateWorldMatrix(!0,!0),u(t)}function H(){let N=u(i),Y=u(e),F=u(t),U=Y.clone().sub(N).cross(F.clone().sub(Y)),G=Math.PI-N.clone().sub(Y).angleTo(F.clone().sub(Y));return U.dot(M)>0&&G>=Math.min(x,Te.degToRad(5))-.001&&G<=Math.max(x,Te.degToRad(150))+.001}let I=T.slice(),V=g.distanceToSquared(f),P=.001;for(let N=0;N<l;N++){let Y=O(T),F=f.clone().sub(Y);if(F.length()<8e-4)break;let U=T.map((Z,ce)=>{let z=T.slice();return z[ce]+=P,O(z).sub(Y).multiplyScalar(1/P)});O(T);let G=new ot().set(...[0,1,2].flatMap(Z=>[0,1,2].map(ce=>U.reduce((z,K)=>z+K.getComponent(Z)*K.getComponent(ce),0)+(Z===ce?5e-4:0)))),le=F.clone().applyMatrix3(G.invert()),fe=U.map(Z=>Z.dot(le)),pe=!1;for(let Z of[1,.5,.25,.125]){let ce=T.map((K,ae)=>Te.clamp(K+Te.clamp(fe[ae],-.15,.15)*Z,-C[ae],C[ae]));if(O(ce),!H())continue;let z=u(t).distanceToSquared(f);if(!(z>=V)){I=ce.slice(),V=z,T.splice(0,T.length,...ce),pe=!0;break}}if(!pe)break}return O(I),{accepted:!0,angles:I,offset:m.length(),error:Math.sqrt(V),nativeFlex:x,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(M)}}function gm(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let c=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(c)||c.length>16||new Set(c.map(te=>te.id)).size!==c.length)throw new Error("Invalid scene profiles");if(o)for(let te of c){if(typeof te.id!="string"||!Array.isArray(te.contacts)||te.contacts.length>16)throw new Error("Invalid source contacts");for(let j of te.contacts){if(typeof j.bone!="string"||!["ik","unsupported"].includes(j.kind))throw new Error("Unknown source contact");if(j.kind==="ik"&&(!i.getObjectByName(j.ikBone)||!j.drag||!j.sizeCm||![j.sizeCm.X,j.sizeCm.Y,j.sizeCm.Z,...Object.values(j.drag.ScreenPercentToWorld||{}),...Object.values(j.drag.WorldSpaceLimit||{}),...Object.values(j.drag.WorldSpaceLmitLeftUp||{}),j.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let l={},u=[],h=null,d=!1,p=null,g=[],v=null,m={},f="",M=new Map,_=new Map,y=new Map,w=new Map,b=new Map,E=te=>te.getWorldPosition(new D),x=()=>c.find(te=>te.id===(l.scene?.()||"main")),T=()=>a==="Enya"&&["show_04","show_05"].includes(x()?.id),C=()=>(x()?.contacts||[]).filter(te=>te.kind==="ik"),L=document.createElement("div");L.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(L);let O=document.createElement("div");L.append(O);let H=document.createElement("button");H.textContent="\u8FD8\u539F\u817F\u90E8",H.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",H.onclick=()=>K("lower_legs"),L.append(H);function I(){for(let te of u)te.bone.quaternion.copy(te.base);u=[]}function V(){return(x()?.contacts||[]).map(te=>{let j=i.getObjectByName(te.bone);if(!j)return null;let ie=E(j).project(e),me=t.getBoundingClientRect();return{id:te.id,label:/Foot/.test(te.bone)?te.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(te.bone)?"\u624B\u90E8":"\u5934\u90E8",x:me.left+(ie.x+1)*me.width/2,y:me.top+(1-ie.y)*me.height/2,supportedIK:te.kind==="ik"}}).filter(Boolean)}function P(te){let j=i.getObjectByName(te.ikBone),ie=j?.parent,me=ie?.parent;if(!me?.isBone||!ie?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:te,foot:j,calf:ie,thigh:me,base:[me,ie,j].map(Se=>Se.quaternion.clone()),anchor:i.worldToLocal(E(j)),offset:new D,dx:0,dy:0}}function N(te){if(!te?.alphaVerified)return null;for(let j of C()){let ie=i.getObjectByName(j.ikBone),me=ie?.worldToLocal(new D().fromArray(te.point)),Se=j.sizeCm;if(me&&Math.abs(me.x)<Se.X*.01&&Math.abs(me.y)<Se.Z*.01&&Math.abs(me.z)<Se.Y*.01)return j}for(let j of C()){let ie=j.ikBone.includes("-L-")?"L":"R";if((te.skinBones||[]).some(me=>me?.startsWith("Bip001-"+ie+"-")&&/Thigh|Calf|Foot/.test(me)))return j}return null}function Y(te,j){if(!j||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[We,Qe]of M)Qe.contact.ikBone===j.ikBone&&U(We,!0);te.preventDefault(),te.stopImmediatePropagation(),l.beforeDrag?.();let ie=_.get(j.ikBone),me=ie?i.worldToLocal(E(ie.foot)):null;I();let Se=P(j);ie&&(Se.base=ie.base,Se.anchor=me),y.delete(j.ikBone),Object.assign(Se,{pointerId:te.pointerId,x:te.clientX,y:te.clientY,dragging:!1,triggered:!1}),M.set(te.pointerId,Se),t.setPointerCapture(te.pointerId),p={contact:j.id,handle:te.target?.dataset?.legHandle||null},j.voiceId&&l.voice?.(j.voiceId)}function F(te){Y(te,N(n(te.clientX,te.clientY)))}function U(te,j=!1){let ie=M.get(te);ie&&(M.delete(te),t.hasPointerCapture(te)&&t.releasePointerCapture(te),ie.dragging&&(!j&&T()?(_.set(ie.contact.ikBone,ie),f="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u53EF\u9009\u62E9\u8FD8\u539F\u817F\u90E8\u6216\u8981\u6C42\u653E\u4E0B\u817F\u3002"):_.has(ie.contact.ikBone)||y.set(ie.contact.ikBone,{...ie,releasedAt:performance.now()})),j||l.event?.({type:"touch",region:"leg",label:ie.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:ie.dragging?"drag":"tap",source:"bounded-leg-control",confidence:1,completed:!0}))}function G(te,j,ie){return ie?.endsWith("::Less")?te<j:ie?.endsWith("::Greater")?te>j:null}function le(te){let j=M.get(te.pointerId);if(!j||(te.stopImmediatePropagation(),!j.dragging&&Math.hypot(te.clientX-j.x,te.clientY-j.y)<5))return;j.dragging=!0;let ie=t.getBoundingClientRect(),me=j.contact.drag,Se=T()?55:0,We=(te.clientX-j.x)/Math.max(1,ie.width)*(T()?100:me.ScreenPercentToWorld?.X||0),Qe=(te.clientY-j.y)/Math.max(1,ie.height)*(T()?100:me.ScreenPercentToWorld?.Y||0);j.dx=Te.clamp(We,-Math.max(Se,me.WorldSpaceLmitLeftUp?.X||0),Math.max(Se,me.WorldSpaceLimit?.X||0)),j.dy=Te.clamp(Qe,-Math.max(Se,me.WorldSpaceLmitLeftUp?.Y||0),Math.max(Se,me.WorldSpaceLimit?.Y||0));let W=new D().setFromMatrixColumn(e.matrixWorld,0),ze=new D().setFromMatrixColumn(e.matrixWorld,1),ge=W.multiplyScalar(j.dx*.01).addScaledVector(ze,-j.dy*.01);if(j.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(ge))),!T())for(let A of j.contact.thresholds||[]){let S=[G(j.dx,A.limit.X,A.xCompare),G(j.dy,A.limit.Y,A.yCompare)].filter(B=>B!==null);if(!j.triggered&&S.length&&S.every(Boolean)){j.triggered=!0,h={sampleId:A.sampleId,dx:j.dx,dy:j.dy,source:"serialized-drag-threshold"},U(te.pointerId),l.reaction?.(A.sampleId);break}}}function fe(te){M.has(te.pointerId)&&(te.stopImmediatePropagation(),U(te.pointerId))}function pe(te){U(te.pointerId,!0)}function Z(){for(let te of[...M.keys()])U(te,!0);I()}function ce(){Z(),_.clear(),y.clear(),b.clear(),f=""}function z(){let te=C().map(j=>j.ikBone.includes("-L-")?"left":"right");return[...new Set(te.map(j=>"raise_"+j+"_leg")),...te.includes("left")&&te.includes("right")?["spread_legs"]:[],...te.length?["lower_legs"]:[]]}function K(te){if(!z().includes(te))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(Z(),te==="lower_legs"){for(let[me,Se]of _)y.set(me,{...Se,releasedAt:performance.now()});_.clear(),f="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}I();let j=C(),ie=j.filter(me=>te==="spread_legs"||te.includes(me.ikBone.includes("-L-")?"left":"right"));for(let me of ie){let Se=P(me),We=i.getObjectByName(me.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),Qe=E(Se.thigh).sub(E(We||Se.thigh.parent));if(Qe.lengthSq()<1e-8)continue;Qe.normalize();let W=new D(0,1,0).transformDirection(i.matrixWorld),ze=E(Se.thigh).distanceTo(E(Se.calf))+E(Se.calf).distanceTo(E(Se.foot)),ge=te==="spread_legs"?Qe.multiplyScalar(ze*(T()?.48:.18)).addScaledVector(W,ze*.08):W.multiplyScalar(ze*(T()?.36:.18)).addScaledVector(E(Se.thigh).sub(E(Se.foot)).normalize(),ze*(T()?.2:0));Se.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(ge))),Se.startedAt=performance.now(),_.set(me.ikBone,Se),y.delete(me.ikBone)}f=te==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":te.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let ae=new Map;function de(te,j=!1){if(!ae.has(te.name)){let me=[];i.traverse(Se=>{if(!Se.isSkinnedMesh)return;let We=Se.geometry.getAttribute("skinIndex"),Qe=Se.geometry.getAttribute("skinWeight");if(!We||!Qe)return;let W=new Set(Se.skeleton.bones.map((ge,A)=>ge.name===te.name||ge.name===te.name.replace("-Foot","-Toe0")?A:-1).filter(ge=>ge>=0)),ze=[];for(let ge=0;ge<We.count;ge++){let A=0;for(let S=0;S<4;S++)W.has(We.getComponent(ge,S))&&(A+=Qe.getComponent(ge,S));A>.45&&ze.push(ge)}if(ze.length){let ge=Se.geometry.getAttribute("position"),A=new Set;for(let S of[-1,0,1])for(let B of[-1,0,1])for(let k of[-1,0,1]){if(S===0&&B===0&&k===0)continue;let $=-1/0,oe=ze[0];for(let xe of ze){let ne=ge.getX(xe)*S+ge.getY(xe)*B+ge.getZ(xe)*k;ne>$&&($=ne,oe=xe)}A.add(oe)}me.push({mesh:Se,vertices:ze,probes:[...A]})}}),ae.set(te.name,me)}let ie=[];for(let{mesh:me,vertices:Se,probes:We}of ae.get(te.name))for(let Qe of j?Se:We)ie.push(me.getVertexPosition(Qe,new D).applyMatrix4(me.matrixWorld));return ie}function ue(te,j){let ie=E(te).dot(j);return Te.clamp(Math.max(.04,...de(te).map(me=>ie-me.dot(j)))+.015,.055,.16)}function Me(){let te=C(),j=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[ie,me]of w)te.some(Se=>Se.id===ie)||(me.remove(),w.delete(ie));for(let ie of te){let me=i.getObjectByName(ie.ikBone);if(!me)continue;let Se=w.get(ie.id);Se||(Se=document.createElement("button"),Se.dataset.legHandle=String(ie.id),Se.textContent=ie.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",Se.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",Se.addEventListener("pointerdown",W=>Y(W,ie)),w.set(ie.id,Se),L.append(Se));let We=t.getBoundingClientRect(),Qe=E(me).lerp(E(me.parent),.5).project(e);Se.hidden=!!j,Se.style.left=Te.clamp(We.left+(Qe.x+1)*We.width/2,55,We.right-55)+"px",Se.style.top=Te.clamp(We.top+(1-Qe.y)*We.height/2,100,We.bottom-150)+"px"}H.hidden=j||!_.size}function Re(){let te=performance.now();for(let[ie]of M)t.hasPointerCapture(ie)||U(ie,!0);if(Me(),d){O.replaceChildren();for(let ie of V()){let me=document.createElement("span");me.textContent=ie.label,me.style.cssText=`position:absolute;left:${ie.x}px;top:${ie.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,O.append(me)}}let j=new Map(_);for(let ie of M.values())ie.dragging&&j.set(ie.contact.ikBone,ie);for(let[ie,me]of y)me.weight=Math.max(0,1-(te-me.releasedAt)/(1e3*Math.max(.15,me.contact.drag.DragRecoverTime||.35))),me.weight===0?y.delete(ie):j.has(ie)||j.set(ie,me);if(T()){for(let ie of C())if(!j.has(ie.ikBone)){let me=P(ie);me.passive=!0,j.set(ie.ikBone,me)}}g=[],m={};for(let ie of j.values()){let me=[ie.thigh,ie.calf,ie.foot],Se=me.map(k=>k.quaternion.clone()),We=ie.weight??(ie.startedAt?Te.smoothstep(Math.min(1,(te-ie.startedAt)/450),0,1):1);me.forEach((k,$)=>k.quaternion.copy(ie.base[$])),i.updateWorldMatrix(!0,!0);let Qe=E(ie.calf),W=E(ie.foot),ze=i.localToWorld(ie.anchor.clone().add(ie.offset)),ge=0,A=.055,S=[...ie.thigh.parent.matrixWorld.elements,...ie.base.flatMap(k=>k.toArray()),...ze.toArray(),...me.flatMap(k=>[...k.position.toArray(),...k.scale.toArray()])],B=b.get(ie.contact.ikBone);if(B&&B.key.length===S.length&&S.every((k,$)=>Math.abs(k-B.key[$])<1e-4)){me.forEach((k,$)=>{k.quaternion.copy(Se[$]).slerp(B.quaternions[$],We).normalize(),u.push({bone:k,base:Se[$],applied:k.quaternion.clone()})}),v={...B.report,cached:!0},m[ie.contact.ikBone]=v;continue}if(T()&&s){let k=s(W);if(k&&k.clearance>-.5&&k.clearance<.5){A=ue(ie.foot,k.normal);for(let $=0;$<3;$++){let oe=0,xe=k.normal;for(let ne of[.7,.85,1]){let re=s(Qe.clone().lerp(ze,ne));re&&(oe=Math.max(oe,(A-re.clearance)/ne),xe=re.normal)}if(oe=Te.clamp(oe,0,.65-ge),oe<5e-4)break;ze.addScaledVector(xe,oe),ge+=oe}}}ge>0&&g.push({bone:ie.foot.name,correction:ge,radius:A});try{let k=T()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let $=0;$<4&&(me.forEach((ne,re)=>ne.quaternion.copy(ie.base[re])),v=mm(ie.thigh,ie.calf,ie.foot,ze,k),i.updateWorldMatrix(!0,!0),!(!T()||!s));$++){let oe=1/0,xe=new D(0,1,0);for(let ne of de(ie.foot)){let re=s(ne);re&&re.clearance<oe&&(oe=re.clearance,xe=re.normal)}if(v.footClearance=Number.isFinite(oe)?oe:null,oe>=.012)break;ze.addScaledVector(xe,Math.min(.2,.018-oe))}b.set(ie.contact.ikBone,{key:S,quaternions:me.map($=>$.quaternion.clone()),report:{...v}}),m[ie.contact.ikBone]={...v,target:ze.toArray(),actual:E(ie.foot).toArray()},me.forEach(($,oe)=>{let xe=$.quaternion.clone();$.quaternion.copy(Se[oe]).slerp(xe,We).normalize(),u.push({bone:$,base:Se[oe],applied:$.quaternion.clone()})})}catch(k){me.forEach(($,oe)=>$.quaternion.copy(Se[oe])),f="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+k.message}}if(j.size){i.updateWorldMatrix(!0,!0);let ie=new Set;i.traverse(me=>{me.isSkinnedMesh&&!ie.has(me.skeleton)&&(me.skeleton.update(),ie.add(me.skeleton))})}}let _e=[["pointerdown",F],["pointermove",le],["pointerup",fe],["pointercancel",pe],["lostpointercapture",pe]];for(let[te,j]of _e)t.addEventListener(te,j);let Ue=()=>Z();return window.addEventListener("blur",Ue),{configure:te=>l=te,hitTest:(te,j)=>N(n(te,j))?.id,restore:I,tick:Re,cancel:ce,suspend:Z,command:K,available:z,profile:x,points:V,togglePoints(){return d=!d,d||O.replaceChildren(),V().length},headReaction:()=>x()?.contacts.find(te=>/hari|Head/.test(te.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:_.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[..._.keys()].map(te=>te.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):y.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:f,available:z()}),footMeshContacts:()=>Object.fromEntries(C().map(te=>{let j=i.getObjectByName(te.ikBone),ie=j?de(j,!0).map(me=>s?.(me)?.clearance).filter(Number.isFinite):[];return[te.ikBone,{samples:ie.length,minClearance:ie.length?Math.min(...ie):null}]})),snapshot:()=>({scene:x()?.id,legSolve:v,solves:m,bedCorrections:g,lastPick:p,active:M.size>0,offset:M.size?[M.values().next().value.dx,M.values().next().value.dy]:null,recovering:y.size>0,held:[..._.keys()],lastEvent:h}),dispose(){ce(),L.remove();for(let[te,j]of _e)t.removeEventListener(te,j);window.removeEventListener("blur",Ue)}}}var xm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},fc=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=xm[e]||xm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function ym(i,e,t){let n=new lt,r=new lt,s=0,a=0,o=!1,c=0,l=0,u=!1,h=!0,d=!1,p=0,g=[],v=new Map,m={value:Array.from({length:4},()=>new D)},f={value:Array.from({length:4},()=>new D)},M={value:[.05,.05,.05,.05]},_=new D,y=null;i.traverse(P=>{P.isMesh&&P.userData.snowbreakSurfaceKey&&v.set(P.userData.snowbreakSurfaceKey,P)});function w(P){let N=P.hit,Y=v.get(N.mesh);if(!Y||!N.barycentric)return new D().fromArray(N.point);let F=Y.geometry.index,U=new D;for(let G=0;G<3;G++){let le=F?F.getX(N.triangle*3+G):N.triangle*3+G;U.addScaledVector(Y.getVertexPosition(le,new D),N.barycentric[G])}return Y.localToWorld(U)}let b=[],E=new Map,x=new Set;i.traverse(P=>{if(P.isSkinnedMesh&&x.add(P.skeleton),P.isBone&&/^EyeJoint_[LR]$/.test(P.name)&&b.push(P),!P.isSkinnedMesh||!["skin","cloth-or-room"].includes(P.material?.userData.profile))return;let N=P.material,Y=N.onBeforeCompile,F=N.customProgramCacheKey.bind(N);N.onBeforeCompile=U=>{Y(U),Object.assign(U.uniforms,{senseCenters:m,senseOffsets:f,senseRadii:M}),U.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},N.customProgramCacheKey=()=>F()+"-surface-spring-v2",N.needsUpdate=!0});function T(P,N,Y="camera"){Y==="camera"&&(d||performance.now()<p)||!Number.isFinite(P)||!Number.isFinite(N)||(n.set(Te.clamp(P,-1,1),Te.clamp(N,-1,1)),s=performance.now()+1600)}function C(P){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let N=t.getBoundingClientRect();p=performance.now()+1600,T((P.clientX-N.left)/N.width*2-1,1-(P.clientY-N.top)/N.height*2,"touch")}function L(P,N){if(!h||!P?.alphaVerified||!Array.isArray(P.point)||!v.has(P.mesh))return!1;y?.spring.release();let Y=N?.id||P.anatomy?.id||"body",F=g.find(U=>!U.spring.pressed&&U.region===Y&&w(U).distanceTo(new D().fromArray(P.point))<.04);return F?(y=F,y.hit=P):(g.length===4&&g.shift(),y={hit:P,region:Y,spring:new fc(Y),direction:e.getWorldDirection(new D)},g.push(y)),y.spring.press(),o=u=!0,!0}let O=P=>{d=!0,C(P)},H=()=>{o=!1,d=!1,y?.spring.release(),y=null,p=performance.now()+1e3};t.addEventListener("pointerdown",O),t.addEventListener("pointermove",C),t.addEventListener("pointerup",H),t.addEventListener("pointercancel",H),t.addEventListener("lostpointercapture",H);function I(P=performance.now()){let N=Math.min(.04,Math.max(0,(P-a)/1e3));a=P,P>s&&n.set(0,0),r.lerp(n,1-Math.exp(-N*12));let Y=new D().setFromMatrixColumn(e.matrixWorld,1),F=new D().setFromMatrixColumn(e.matrixWorld,0);for(let U of b){let G=U.quaternion.clone(),le=new Ye().extractRotation(U.parent.matrixWorld),fe=new Ye().makeRotationFromQuaternion(new ke().setFromAxisAngle(Y,r.x*.07).multiply(new ke().setFromAxisAngle(F,-r.y*.05))),pe=le.clone().invert().multiply(fe).multiply(le);U.quaternion.premultiply(new ke().setFromRotationMatrix(pe)).normalize(),U.updateWorldMatrix(!1,!0),E.set(U,{base:G,applied:U.quaternion.clone()})}for(let U=g.length-1;U>=0;U--)g[U].spring.step(N),g[U].spring.active||g.splice(U,1);l=0,c=0,u=g.length>0;for(let U=0;U<4;U++){let G=g[U];f.value[U].set(0,0,0),G&&(m.value[U].copy(w(G)),M.value[U]=G.spring.profile.radius,f.value[U].copy(G.direction).multiplyScalar(G.spring.offset),Math.abs(G.spring.offset)>Math.abs(l)&&(l=G.spring.offset),c+=Math.abs(G.spring.velocity))}if(b.length)for(let U of x)U.update()}function V(){for(let[P,N]of E)P.quaternion.angleTo(N.applied)<1e-6&&P.quaternion.copy(N.base);E.clear()}return{gaze:T,touch:L,tick:I,restore:V,reset(){V(),o=u=d=!1,p=0,l=c=0,g.length=0,y=null;for(let P of f.value)P.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:b.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(P=>({region:P.region,offset:P.spring.offset,velocity:P.spring.velocity,pressed:P.spring.pressed,center:w(P).toArray()}))}),dispose(){for(let[P,N]of[["pointerdown",O],["pointermove",C],["pointerup",H],["pointercancel",H],["lostpointercapture",H]])t.removeEventListener(P,N)}}}function Ah(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=b=>b.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let b of[i,e,t]){let E=b.getWorldScale(new D);if(Math.min(E.x,E.y,E.z)<=0||Math.max(E.x,E.y,E.z)-Math.min(E.x,E.y,E.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),h=c.distanceTo(l),d=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,d].every(Number.isFinite)||Math.min(h,d)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(c),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let v=b=>Math.sqrt(Math.max(0,h*h+d*d+2*h*d*Math.cos(Te.degToRad(b)))),m=Te.clamp(g,Math.max(Math.abs(h-d)+1e-6,v(a)),Math.min(h+d-1e-6,v(s))),f=r.clone().sub(c).addScaledVector(p,-r.clone().sub(c).dot(p));if(f.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");f.normalize();let M=(h*h-d*d+m*m)/(2*m),_=c.clone().addScaledVector(p,M).addScaledVector(f,Math.sqrt(Math.max(0,h*h-M*M))),y=c.clone().addScaledVector(p,m);function w(b,E,x){let T=o(b),C=o(E).sub(T).normalize(),L=x.clone().sub(T).normalize(),O=b.getWorldQuaternion(new ke);O.premultiply(new ke().setFromUnitVectors(C,L)),b.quaternion.copy(b.parent.getWorldQuaternion(new ke).invert().multiply(O)).normalize(),b.updateWorldMatrix(!0,!0)}return w(i,e,_),w(e,t,y),{requested:n.toArray(),reachable:y.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(y),elbowFlex:Te.radToDeg(Math.acos(Te.clamp((m*m-h*h-d*d)/(2*h*d),-1,1)))}}var Nr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Rh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new D);function h(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function d(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),v=u(r),m=u(s),f=u(a),M=g.distanceTo(v)+v.distanceTo(m),_=g.clone().sub(f);if(_.y=0,_.length()<1e-5)throw new Error("Ambiguous shoulder direction");_.normalize();let y=f.clone().addScaledVector(_,M*.55);y.y+=M*.15;let w=g.clone().addScaledVector(_,M);w.y-=M*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new ke),start:m,target:y,pole:w},l=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let v=Te.clamp(g,0,1),m=v<.3?v/.3:v>.7?(1-v)/.3:1,f=m*m*(3-2*m);if(f<1e-6)return;l=Ah(n,r,s,c.target,c.pole,Nr);let M={},_=[];function y(w,b,E,x,T){let C=w.quaternion.clone(),L=b.angleTo(C),O=Te.degToRad(E);L>O&&_.push(T),w.quaternion.copy(b).slerp(C,x*Math.min(1,O/Math.max(L,1e-10))).normalize(),M[T]=Te.radToDeg(b.angleTo(w.quaternion))}y(n,c.upper,Nr.upper,f,"upper"),y(r,c.lower,Nr.lower,f,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new ke).invert().multiply(c.wristWorld)),y(s,c.wrist,Nr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:M,limited:_,weight:f}}return{begin:d,apply:p,restore:h,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Nr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function _m(i,e,t=()=>0){let n={};for(let[P,N]of[["left","L"],["right","R"]]){let Y=i.getObjectByName(`Bip001-${N}-UpperArm`),F=i.getObjectByName(`Bip001-${N}-Forearm`),U=i.getObjectByName(`Bip001-${N}-Hand`);Y?.isBone&&F?.parent===Y&&U?.parent===F&&(n[P]={upper:Y,lower:F,hand:U})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(P=>{P.isSkinnedMesh&&a.add(P.skeleton)}),i.traverse(P=>{if(P.isMesh&&P.morphTargetInfluences)for(let N of["L_Eye_close","R_Eye_close"]){let Y=P.morphTargetDictionary?.[N]??P.morphTargetDictionary?.[N.replace("_Eye_","_eye_")];Number.isInteger(Y)&&s.push({mesh:P,index:Y,name:N})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(P=>P.name==="L_Eye_close")&&s.some(P=>P.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,h=0,d=[],p=[];i.traverse(P=>{if(P.isMesh&&P.morphTargetDictionary&&P.morphTargetInfluences){let N=P.morphTargetDictionary.Viseme_A;Number.isInteger(N)&&p.push({mesh:P,index:N})}});function g(P,N){if(!o.includes(P)||!P.startsWith("gesture_")||!Number.isFinite(N?.duration)||N.duration<1||N.duration>8||!Array.isArray(N.poses)||N.poses.length<2||N.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let Y=-1;for(let F of N.poses){if(F.smile!==void 0&&(!Number.isFinite(F.smile)||F.smile<0||F.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(F.time)||F.time<=Y||F.time<0||F.time>N.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");Y=F.time;for(let[U,G]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(F[U]&&(!Array.isArray(F[U])||F[U].length!==3||F[U].some((le,fe)=>!Number.isFinite(le)||Math.abs(le)>G[fe])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(N.poses[0].time!==0||Y!==N.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:P,plan:N,start:performance.now()},w="\u6B63\u5728\u6267\u884C\uFF1A"+P}function v(P){if(!l)return null;let{plan:N}=l,Y=(P-l.start)/1e3;if(Y>=N.duration)return w="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let F=Math.max(0,N.poses.findIndex(Z=>Z.time>=Y)-1),U=N.poses[F],G=N.poses[F+1],le=Te.clamp((Y-U.time)/(G.time-U.time),0,1),fe=le*le*(3-2*le),pe={};for(let Z of["head","torso","leftHand","rightHand"])(U[Z]||G[Z])&&(pe[Z]=[0,1,2].map(ce=>(U[Z]?.[ce]||0)+((G[Z]?.[ce]||0)-(U[Z]?.[ce]||0))*fe));return pe.smile=(U.smile||0)+((G.smile||0)-(U.smile||0))*fe,pe}let m=new Set,f=!1,M=0,_=0,y=performance.now(),w="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",b={left:0,right:0},E=0,x=[],T=[],C={left:!1,right:!1};function L(){for(let P of x)P.bone.quaternion.angleTo(P.applied)<1e-6&&P.bone.quaternion.copy(P.base);x.length=0;for(let P of[...T,...d])Math.abs(P.mesh.morphTargetInfluences[P.index]-P.applied)<1e-6&&(P.mesh.morphTargetInfluences[P.index]=P.base);T.length=d.length=0}function O(P){if(!o.includes(P))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,P==="raise_left_hand"&&m.add("left"),P==="raise_right_hand"&&m.add("right"),P==="raise_both_hands"&&(m=new Set(["left","right"])),P==="lower_hands"&&m.clear(),P==="close_eyes"&&(f=!0),P==="open_eyes"&&(f=!1),P==="turn_left"&&(_+=90),P==="turn_right"&&(_-=90),P==="turn_back"&&(_=180-t()),P==="face_front"&&(_=-t()),w="\u5DF2\u63A5\u6536\uFF1A"+P,I()}function H(){let P=performance.now(),N=Math.min(.25,(P-y)/1e3);y=P;let Y=1-Math.exp(-9*N),F=v(P);if(F){i.updateWorldMatrix(!0,!0);let pe=ue=>ue.getWorldPosition(new D),Z=i.getObjectByName("Bip001-Pelvis"),ce=r&&Z?pe(r).sub(pe(Z)).normalize():new D(0,1,0),z=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new ke)),K=i.getObjectByName("EyeJoint_L"),ae=i.getObjectByName("EyeJoint_R");if(r&&K&&ae){let ue=pe(K).add(pe(ae)).multiplyScalar(.5).sub(pe(r));ue.addScaledVector(ce,-ue.dot(ce)),ue.length()>1e-5&&(z=ue.normalize())}let de=new D().crossVectors(ce,z).normalize();z.crossVectors(de,ce).normalize();for(let[ue,Me]of[[r,F.head],[c,F.torso]])if(ue&&Me){let Re=ue.quaternion.clone(),_e=ue.parent.getWorldQuaternion(new ke),Ue=new ke().setFromAxisAngle(ce,Te.degToRad(-Me[0])).multiply(new ke().setFromAxisAngle(de,Te.degToRad(Me[1]))).multiply(new ke().setFromAxisAngle(z,Te.degToRad(Me[2])));ue.quaternion.premultiply(_e.clone().invert().multiply(Ue).multiply(_e)).normalize(),x.push({bone:ue,base:Re,applied:ue.quaternion.clone()}),ue.updateWorldMatrix(!1,!0)}}M+=(_-M)*Y,e(M),C={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let U=new D(0,1,0),G=i.getObjectByName("EyeJoint_L"),le=i.getObjectByName("EyeJoint_R"),fe=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new ke));r&&G&&le&&(fe.copy(G.getWorldPosition(new D).add(le.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),fe.y=0,fe.length()<1e-5&&fe.set(0,0,1),fe.normalize());for(let pe of["left","right"]){b[pe]+=((m.has(pe)?1:0)-b[pe])*Y;let Z=F?.[pe+"Hand"],ce=Z?Te.smoothstep(Math.hypot(...Z),0,.25):b[pe],z=n[pe];if(!z||!r||ce<.001)continue;let K=j=>j.getWorldPosition(new D),ae=K(r),de=K(z.upper),ue=de.distanceTo(K(z.lower))+K(z.lower).distanceTo(K(z.hand)),Me=de.clone().sub(ae);if(Me.y=0,Me.length()<1e-6)continue;Me.normalize();let Re=ae.clone().addScaledVector(Me,ue*.45);Re.y+=ue*.18,Z&&(Re.copy(K(z.hand)).addScaledVector(Me,Math.abs(Z[0])*ue),Re.y+=Z[1]*ue,Re.addScaledVector(fe,Z[2]*ue));let _e=de.clone().addScaledVector(fe,ue*.7).addScaledVector(Me,ue*.2).addScaledVector(U,-ue*.2),Ue=z.hand.getWorldQuaternion(new ke),te=[z.upper,z.lower,z.hand].map(j=>({bone:j,base:j.quaternion.clone()}));try{Ah(z.upper,z.lower,z.hand,Re,_e,Nr);for(let[ze,ge]of[z.upper,z.lower].entries()){let A=te[ze].base,S=ge.quaternion.clone(),B=A.angleTo(S),k=Te.degToRad([100,140][ze]);ge.quaternion.copy(A).slerp(S,ce*Math.min(1,k/Math.max(B,1e-8))).normalize(),ge.updateWorldMatrix(!1,!0)}let j=Ue.clone(),ie=ze=>i.getObjectByName(`Bip001-${pe==="left"?"L":"R"}-Finger${ze}`),me=ie(1),Se=ie(2),We=ie(4);if(me&&Se&&We){let ze=K(me).sub(K(We)).normalize(),ge=K(Se).sub(K(z.hand));ge.addScaledVector(ze,-ge.dot(ze)).normalize();let A=new Ye().makeBasis(ze,ge,new D().crossVectors(ze,ge).normalize()),S=l?.id==="gesture_open_arms"?Me.clone():U.clone(),B=fe.clone().multiplyScalar(pe==="left"?1:-1),k=new D().crossVectors(S,B).normalize();S.crossVectors(B,k).normalize();let $=new Ye().makeBasis(k,S,new D().crossVectors(k,S).normalize());j=new ke().setFromRotationMatrix($.multiply(A.invert())).multiply(z.hand.getWorldQuaternion(new ke));let oe=j.clone().multiply(z.hand.getWorldQuaternion(new ke).invert()),xe=K(z.hand).sub(K(z.lower)).normalize(),ne=new D(oe.x,oe.y,oe.z).dot(xe),re=Te.clamp(2*Math.atan2(ne,oe.w),-Math.PI/2,Math.PI/2)*.6*ce;z.lower.quaternion.multiply(new ke().setFromAxisAngle(z.hand.position.clone().normalize(),re)).normalize(),z.lower.updateWorldMatrix(!1,!0)}let Qe=z.hand.parent.getWorldQuaternion(new ke).invert().multiply(j),W=te[2].base.angleTo(Qe);z.hand.quaternion.copy(te[2].base).slerp(Qe,ce*Math.min(1,Te.degToRad(90)/Math.max(W,1e-8))).normalize(),z.hand.updateWorldMatrix(!1,!0);for(let ze of te)x.push({...ze,applied:ze.bone.quaternion.clone()});C[pe]=K(z.hand).y>de.y+ue*.25}catch(j){for(let ie of te)ie.bone.quaternion.copy(ie.base);w="\u4E3E\u624B\u5931\u8D25\uFF1A"+j.message,m.delete(pe)}}E+=((f?1:0)-E)*Y;for(let pe of s){let Z=pe.mesh.morphTargetInfluences[pe.index]||0,ce=Te.lerp(Z,f?1:0,E);T.push({...pe,base:Z,applied:ce}),pe.mesh.morphTargetInfluences[pe.index]=ce}F?.smile&&i.traverse(pe=>{if(!(!pe.isMesh||!pe.morphTargetInfluences))for(let Z of["L_Eye_smile","R_Eye_smile"]){let ce=pe.morphTargetDictionary?.[Z]??pe.morphTargetDictionary?.[Z.replace("_Eye_","_eye_")];if(!Number.isInteger(ce))continue;let z=pe.morphTargetInfluences[ce]||0,K=Math.max(z,Math.min(.5,F.smile));d.push({mesh:pe,index:ce,base:z,applied:K}),pe.morphTargetInfluences[ce]=K}}),h+=(u-h)*(1-Math.exp(-N*(u>h?24:16)));for(let pe of p){let Z=pe.mesh.morphTargetInfluences[pe.index]||0,ce=Math.max(Z,h*.85);d.push({...pe,base:Z,applied:ce}),pe.mesh.morphTargetInfluences[pe.index]=ce}i.updateWorldMatrix(!0,!0);for(let pe of a)pe.update()}function I(){i.updateWorldMatrix(!0,!0);for(let Y of["left","right"]){let F=n[Y];if(!F)continue;let U=F.upper.getWorldPosition(new D),G=F.lower.getWorldPosition(new D),le=F.hand.getWorldPosition(new D);C[Y]=le.y>U.y+(U.distanceTo(G)+G.distanceTo(le))*.25}let P=s.length?s.reduce((Y,F)=>Y+(F.mesh.morphTargetInfluences[F.index]||0),0)/s.length:0,N=M+t();return{available:[...o],eyes:s.length?P>.95?"\u5DF2\u95ED\u5408":P<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...C},hands:C.left&&C.right?"\u53CC\u624B\u62AC\u8D77":C.left?"\u5DE6\u624B\u62AC\u8D77":C.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(M-_)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((N%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(N%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(N)}\u5EA6`,yaw:N,lastResult:w}}function V(){L(),u=h=0,l=null,m.clear(),f=!1,b.left=b.right=E=0,M=_=0,e(0),w="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:O,playGesture:g,tick:H,restore:L,snapshot:I,reset:V,setSpeechLevel:P=>{u=Number.isFinite(P)?Te.clamp(P,0,1):0},speechState:()=>({level:h,targets:p.length,weights:p.map(P=>P.mesh.morphTargetInfluences[P.index])}),releaseHands:()=>{m.clear(),l=null}}}function vm(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:Ch(i)}function Ch(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let d=0;d<3;d++)u[d]=n[d]+(.2*o[d]+.6*c[d]+.2*l[d]-n[d])*t;let h=new ke().fromArray(o,3).slerp(new ke().fromArray(c,3),.75).slerp(new ke().fromArray(l,3),.2);return new ke().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function bm(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i);if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let c={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?En:en},l;return r?l=new sn(c):(l=new an({...c,normalMap:t||null,normalScale:new lt(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},l.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(l.polygonOffset=!0,l.polygonOffsetFactor=-.5,l.polygonOffsetUnits=-.5),l.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",l}function Mm(i,e){e.outputColorSpace=Dt,e.toneMapping=Da,e.toneMappingExposure=1.05;let t=new Ca(16774379,10596036,1.4);i.add(t);let n=new zi(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=xl;let r=new zi(14674687,1);r.position.set(3,2,4),i.add(r);let s=new zi(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new Mr;a.background=new tt(.18,.18,.2);let o=new wr(1,1),c=[];for(let[m,f,M,_]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let y=new sn({color:M,side:en});y.color.multiplyScalar(_),c.push(y);let w=new Vt(o,y);w.position.fromArray(m),w.scale.set(f[0],f[1],1),w.lookAt(0,1,0),a.add(w)}let l=new Xs(e),u=l.fromScene(a,.08,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let h=2048;function d(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9};function g(m){let f={...p,...m};if(![f.exposure,f.warmth,f.reflection].every(Number.isFinite)||typeof f.shadows!="boolean"||f.exposure<.65||f.exposure>1.45||f.warmth<0||f.warmth>1||f.reflection<0||f.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(f.shadowSize)||![f.key,f.fill,f.rim].every(M=>Number.isFinite(M)&&M>=0&&M<=3))throw new Error("Invalid light quality");return d(Math.min(f.shadowSize,h)),p={exposure:f.exposure,warmth:f.warmth,reflection:f.reflection,shadows:f.shadows,shadowSize:f.shadowSize,key:f.key,fill:f.fill,rim:f.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new tt(16770247),p.warmth),i.environmentIntensity=p.reflection,{...p}}function v(m){let f=m.getCenter(new D),M=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(f),n.position.copy(f).add(new D(-2,4,5).normalize().multiplyScalar(M*3)),Object.assign(n.shadow.camera,{left:-M,right:M,top:M,bottom:-M,near:.1,far:M*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:v,setBudget(m){h=m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048,d(Math.min(p.shadowSize,h))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}function Sm(i,e,t,n){if(!t)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};if(!["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(t.schema)||t.sourceCharacter!=="Yuki"||t.targetCharacter!=="Enya"||!Array.isArray(t.clips)||t.clips.length>8)throw new Error("Invalid learned motion catalog");let r=t.schema.endsWith("/3")&&t.stance==="standing";if(t.schema.endsWith("/3")&&(!r||n!=="standing"))throw new Error("Standing motion requires standing source");let s=E=>{let x=[];if(i.traverse(T=>{T.isBone&&T.name===E&&x.push(T)}),x.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+E);return x[0]},a=s("Bip001-Head"),o=s("Bip001-Spine3"),c={};for(let[E,x]of[["left","L"],["right","R"]]){let T=s(`Bip001-${x}-UpperArm`),C=s(`Bip001-${x}-Forearm`),L=s(`Bip001-${x}-Hand`);if(C.parent!==T||L.parent!==C)throw new Error("Learned arm binding mismatch");c[E]={upper:T,lower:C,hand:L}}let l=E=>E.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let u=1,h=l(c.right.upper).sub(l(c.left.upper)).normalize(),d=l(a).sub(l(o)).normalize();new D().crossVectors(h,d).dot(e.position.clone().sub(l(o)))<0&&(u=-1);let p=new Map;for(let E of t.clips){if(!["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(E.id)||p.has(E.id)||!Number.isInteger(E.frames)||E.frames<2||E.frames>1800||!Number.isFinite(E.fps)||E.fps<=0||E.fps>60)throw new Error("Invalid learned clip");let x={};for(let[O,H]of Object.entries(E.channels||{})){let I=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(O)?1:["headDelta","chestDelta",...r?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(O)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...r?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(O)||/^(left|right)Finger[0-4]_[0-2]$/.test(O)?3:0;if(!I||typeof H!="string")throw new Error("Invalid learned channel");let V=Uint8Array.from(atob(H),N=>N.charCodeAt(0));if(V.byteLength!==E.frames*I*4)throw new Error("Learned channel truncated");let P=new Float32Array(V.buffer);if(!P.every(Number.isFinite))throw new Error("Non-finite learned pose");if(I===1&&P.some(N=>N<-.31||N>1.11))throw new Error("Invalid learned finger angle");for(let N=0;I>1&&N<E.frames;N++){let Y=0;for(let F=0;F<I;F++)Y+=P[N*I+F]**2;if(Math.abs(Y-1)>.01)throw new Error("Invalid learned direction/quaternion")}x[O]={values:P,width:I}}if(!x.headDelta)throw new Error("Missing learned head reference");let T=E.id.includes("dance"),C=T?r?"standing-dance":"seated-dance":E.id==="yuki_Peace_hand"?"peace":E.id==="yuki_hello"?"greeting":"head",L=T?["left","right"]:C==="head"?[]:["right"];if(!t.schema.endsWith("/1")&&(E.motionKind!==C||JSON.stringify(E.arms)!==JSON.stringify(L)))throw new Error("Invalid learned action capability");if(!(T&&!r)){if(T&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(O=>!x[O]))throw new Error("Missing standing body channels");p.set(E.id,{...E,kind:C,arms:L,channels:x,duration:(E.frames-1)/E.fps})}}let g=Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,Array.from({length:5},(T,C)=>[s(`Bip001-${x}-Finger${C}`),s(`Bip001-${x}-Finger${C}1`),s(`Bip001-${x}-Finger${C}2`)])])),v=r?s("Bip001-Pelvis"):null,m=r?Object.fromEntries([["left","L"],["right","R"]].map(([E,x])=>[E,{thigh:s(`Bip001-${x}-Thigh`),calf:s(`Bip001-${x}-Calf`),foot:s(`Bip001-${x}-Foot`),toe:s(`Bip001-${x}-Toe0`)}])):{},f={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function M(){let E=l(c.right.upper).sub(l(c.left.upper)).normalize(),x=l(a).sub(l(o));x.addScaledVector(E,-x.dot(E)).normalize();let T=new D().crossVectors(E,x).multiplyScalar(u).normalize();return{right:E,up:x,front:T,vector:C=>E.clone().multiplyScalar(C[0]).addScaledVector(x,C[1]).addScaledVector(T,C[2])}}let _=new Map,y=null,w=-1;function b(E,x,T,C={}){let L=p.get(E);if(!L||T<=0)return;let O=L.kind==="standing-dance",H=O&&Number.isFinite(C.amplitude)?Te.clamp(C.amplitude,.5,1.2):1;f.fingerWrites=0,f.armWrites=0,f.chestWrites=0,f.workspaceAdjusted=0,(E!==y||x<=w||x-w>.2)&&_.clear(),y=E,w=x,i.updateWorldMatrix(!0,!0);let I=M(),V=Te.clamp(x*L.fps,0,L.frames-1),P=Math.floor(V),N=Math.min(P+1,L.frames-1),Y=V-P;function F(ae){let de=L.channels[ae];if(!de)return null;if(O&&de.width===1)return[Te.lerp(de.values[P],de.values[N],Y)];if(O&&de.width===3)return new D().fromArray(de.values,P*3).lerp(new D().fromArray(de.values,N*3),Y).normalize().toArray();if(de.width===1){let Me=0;for(let Re of[-2,-1,0,1,2]){let _e=Te.clamp(V+Re,0,L.frames-1),Ue=Math.floor(_e),te=Math.min(Ue+1,L.frames-1);Me+=(de.values[Ue]+(de.values[te]-de.values[Ue])*(_e-Ue))*(Re===0?.4:Math.abs(Re)===1?.2:.1)}return[Me]}if(de.width===4)return new ke().fromArray(de.values,P*4).slerp(new ke().fromArray(de.values,N*4),Y).normalize().toArray();let ue=new D;for(let Me of[-2,-1,0,1,2]){let Re=Te.clamp(V+Me,0,L.frames-1),_e=Math.floor(Re),Ue=Math.min(_e+1,L.frames-1);ue.add(new D().fromArray(de.values,_e*3).lerp(new D().fromArray(de.values,Ue*3),Re-_e).multiplyScalar(Me===0?.4:Math.abs(Me)===1?.2:.1))}return ue.normalize().toArray()}function U(ae,de,ue,Me,Re=T){let _e=de.angleTo(ue),Ue=Te.degToRad(Me);_e>Ue&&f.limited++,ae.quaternion.copy(de).slerp(ue,Re*Math.min(H,Ue/Math.max(_e,1e-8))).normalize()}function G(ae,de,ue,Me,Re=T){ae.parent.updateWorldMatrix(!0,!1);let _e=ae.quaternion.clone(),Ue=_e.clone(),te=(de?de.position.clone():new D(1,0,0)).multiply(ae.scale).applyQuaternion(Ue).normalize(),j=ue.clone().transformDirection(ae.parent.matrixWorld.clone().invert()),ie=new ke().setFromUnitVectors(te,j).multiply(Ue).normalize();_.set(ae,ie.clone()),U(ae,_e,ie,Me,Re),ae.updateWorldMatrix(!1,!0)}function le(ae,de,ue,Me){let Re=new Ye().makeBasis(I.right,I.up,I.front),_e=new Ye().makeRotationFromQuaternion(new ke(...de)),Ue=Re.clone().multiply(_e).multiply(Re.clone().invert());ae.parent.updateWorldMatrix(!0,!1);let te=new Ye().extractRotation(ae.parent.matrixWorld),j=te.clone().invert().multiply(Ue).multiply(te),ie=ae.quaternion.clone(),me=new ke().setFromRotationMatrix(j).multiply(ie).normalize();U(ae,ie,me,ue,Me),ae.updateWorldMatrix(!1,!0)}let fe=new D(0,1,0).transformDirection(i.parent.matrixWorld),pe=O?Math.min(...Object.values(m).map(ae=>l(ae.foot).dot(fe))):0;f.legWrites=0,f.groundCorrection=0,f.sourceTime=x,f.sourceFrame=V,f.sourceFPS=L.fps,f.amplitude=H,f.sourceBPM=O?E.includes("90bpm")?90:E.includes("120bpm")?120:60:null,O&&(le(v,F("pelvisDelta"),30,T),I=M());let Z=F("chestDelta");if(Z&&(le(o,Z,O?35:10,T*(O?1:.35)),I=M(),f.chestWrites=1),O){for(let[Re,_e]of Object.entries(m)){if(_e.calf.parent!==_e.thigh||_e.foot.parent!==_e.calf)throw new Error("Standing leg hierarchy mismatch");G(_e.thigh,_e.calf,I.vector(F(Re+"Thigh")),110,T),G(_e.calf,_e.foot,I.vector(F(Re+"Calf")),150,T),le(_e.foot,F(Re+"FootDelta"),45,T),f.legWrites+=3}let ae=Te.clamp(pe-Math.min(...Object.values(m).map(Re=>l(Re.foot).dot(fe))),-.18,.18),de=l(v),ue=v.parent.matrixWorld.clone().invert(),Me=de.clone().addScaledVector(fe,ae).applyMatrix4(ue).sub(de.clone().applyMatrix4(ue));v.position.add(Me),v.updateWorldMatrix(!1,!0),f.groundCorrection=ae}function ce(ae,de,ue,Me){let Re=l(ae.upper),_e=l(ae.lower).distanceTo(Re),Ue=l(ae.hand).distanceTo(l(ae.lower)),te=Re.clone().addScaledVector(I.vector(de),_e),j=te.clone().addScaledVector(I.vector(ue),Ue),ie=l(o),me=j.clone().sub(ie),Se=me.dot(I.right),We=me.dot(I.up),Qe=me.dot(I.front),W=[Se,We,Qe];We=Te.clamp(We,-.16,.6);let ze=(1-Te.smoothstep(Math.abs(Se),.16,.28))*Te.smoothstep(We,-.42,-.32)*(1-Te.smoothstep(We,.18,.32));Qe+=Math.max(0,.23-Qe)*ze,j.copy(ie).addScaledVector(I.right,Se).addScaledVector(I.up,We).addScaledVector(I.front,Qe);let ge=j.clone().sub(l(a));ge.length()<.14&&j.copy(l(a)).add(ge.length()>.001?ge.setLength(.14):I.front.clone().multiplyScalar(.14)),(W[1]!==We||W[2]!==Qe)&&f.workspaceAdjusted++;let A=j.clone().sub(Re),S=Te.clamp(A.length(),Math.abs(_e-Ue)+.015,(_e+Ue)*.98);A.normalize(),j.copy(Re).addScaledVector(A,S);let B=I.right.clone().multiplyScalar(Me==="right"?1:-1),k=B.clone().addScaledVector(I.front,.3).addScaledVector(I.up,.2);k.addScaledVector(A,-k.dot(A)),k.length()<1e-4&&k.copy(I.front).addScaledVector(A,-I.front.dot(A)),k.normalize();let $=(_e*_e-Ue*Ue+S*S)/(2*S),oe=Math.sqrt(Math.max(0,_e*_e-$*$)),xe=Re.clone().addScaledVector(A,$).addScaledVector(k,oe);return{upper:xe.clone().sub(Re).normalize(),lower:j.sub(xe).normalize()}}for(let ae of L.arms){let ie=function(){let B=l(ue[1][0]).sub(l(ue[4][0])).normalize(),k=l(ue[2][0]).sub(l(de.hand));return k.addScaledVector(B,-k.dot(B)).normalize(),new Ye().makeBasis(B,k,new D().crossVectors(B,k).normalize())},de=c[ae],ue=g[ae],Me=F(ae+"Upper"),Re=F(ae+"Lower");if(!Me||!Re)continue;let _e=["greeting","peace"].includes(L.kind)?T*Te.smoothstep(Re[1],-1,1):T*(O?1:.72),Ue=L.kind==="seated-dance"?ce(de,Me,Re,ae):{upper:I.vector(Me),lower:I.vector(Re)};G(de.upper,de.lower,Ue.upper,120,_e),G(de.lower,de.hand,Ue.lower,170,_e),f.armWrites+=2;let te=F(ae+"HandWidth"),j=F(ae+"HandForward");if(!te||!j)continue;i.updateWorldMatrix(!0,!0);let me=I.vector(te).normalize(),Se=I.vector(j);Se.addScaledVector(me,-Se.dot(me)).normalize();let We=new Ye().makeBasis(me,Se,new D().crossVectors(me,Se).normalize()),Qe=We.multiply(ie().invert()),W=de.hand,ze=new Ye().extractRotation(W.parent.matrixWorld),ge=ze.clone().invert().multiply(Qe).multiply(ze),A=W.quaternion.clone(),S=new ke().setFromRotationMatrix(ge).multiply(A).normalize();U(W,A,S,L.kind==="greeting"?110:L.kind==="seated-dance"?75:110,_e*(L.kind==="seated-dance"?.7:1)),W.updateWorldMatrix(!1,!0);for(let B=0;B<5;B++)for(let k=0;k<3;k++){let $=F(`${ae}Finger${B}_${k}`);if(!$)continue;let oe=new D(...$).normalize(),xe=k?new D(...F(`${ae}Finger${B}_${k-1}`)).normalize():new D(0,1,0),ne=Te.clamp(Math.atan2(-oe.z,Math.max(.1,oe.y))-Math.atan2(-xe.z,Math.max(.1,xe.y)),-.15,B===0?.45:1.1),re=k===0&&B!==0?Te.clamp(Math.atan2(oe.x,oe.y),-.3,.3):0,ve=F(`${ae}Curl${B}_${k}`),He=F(`${ae}Spread${B}`);ve&&(ne=ve[0]),k===0&&B!==0&&He&&(re=He[0]),L.kind==="peace"&&(ne=B===1||B===2?.02:B===0?.4:.95,k===0&&(re=B===1?.14:B===2?-.08:0));let Ce=ae==="left"?-1:1,we=ue[B][k],Ve=we.quaternion.clone(),it=new ke().fromArray(we.userData.bindLocalQuaternion||Ve.toArray()).multiply(new ke().setFromAxisAngle(new D(0,0,1),re*Ce)).multiply(new ke().setFromAxisAngle(new D(0,1,0),ne*Ce));we.quaternion.copy(Ve).slerp(it,T).normalize(),f.fingerWrites++}}let z=F("headDelta");if(z){let ae=new Ye().makeBasis(I.right,I.up,I.front),de=new Ye().makeRotationFromQuaternion(new ke(...z)),ue=ae.clone().multiply(de).multiply(ae.clone().invert());a.parent.updateWorldMatrix(!0,!1);let Me=new Ye().extractRotation(a.parent.matrixWorld),Re=Me.clone().invert().multiply(ue).multiply(Me),_e=a.quaternion.clone(),Ue=new ke().setFromRotationMatrix(Re).multiply(_e).normalize();U(a,_e,Ue,40)}i.updateWorldMatrix(!0,!0);let K=new Set;i.traverse(ae=>{ae.isSkinnedMesh&&!K.has(ae.skeleton)&&(ae.skeleton.update(),K.add(ae.skeleton))})}return{available:()=>[...p.values()].map(E=>({id:E.id,label:E.label,duration:E.duration,arms:[...E.arms],kind:E.kind})),apply:b,snapshot:()=>{i.updateWorldMatrix(!0,!0);let E=M(),x=c.right;return{...f,parentDeterminant:x.upper.parent.matrixWorld.determinant(),rightUpper:l(x.lower).sub(l(x.upper)).normalize().toArray(),rightLower:l(x.hand).sub(l(x.lower)).normalize().toArray(),handHeight:l(x.hand).sub(l(x.lower)).dot(E.up)}}}}function Ih(i,e){if(e===ju)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Hs||e===Ga){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Hs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function wm(i){let e=new Map,t=new Map,n=i.clone();return Em(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Em(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Em(i.children[n],e.children[n],t)}var Dr=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new pc(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pc(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $h(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Hi.extractUrlBase(e);a=Hi.resolveURL(l,this.path)}else a=Hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Us(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Im){try{a[ft.KHR_BINARY_GLTF]=new Jh(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new rd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new Dh;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new jh(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new Qh;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new ed;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Ib(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new tt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],pn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new La(u),l.distance=h;break;case"spot":l=new Pa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Dh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let r=[];e.color=new tt(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Oh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(s,s)}return Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(s[0],s[1],s[2],pn),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(s[0],s[1],s[2],pn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Zh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Kh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}},$h=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Yn.TRIANGLES&&l.mode!==Yn.TRIANGLE_STRIP&&l.mode!==Yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(let g of h){let v=new Ye,m=new D,f=new ke,M=new D(1,1,1),_=new Ma(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,w),c.SCALE&&M.fromBufferAttribute(c.SCALE,w),_.setMatrixAt(w,v.compose(m,f,M));let y=null;for(let w in c)if(w==="_COLOR_0"){let b=c[w];_.instanceColor=new Di(b.array,b.itemSize,b.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let E=_.geometry;y=new Qt,y.name=E.name;for(let x in E.attributes)y.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)y.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)y.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),_.geometry=y}let b=c[w];y.setAttribute(w,new Di(b.array,b.itemSize,b.normalized))}Ut.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Im="glTF",Ya=12,Tm={JSON:1313821514,BIN:5130562},Jh=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ya,s=new DataView(e,Ya),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Tm.JSON){let l=new Uint8Array(e,Ya+a,o);this.content=n.decode(l)}else if(c===Tm.BIN){let l=Ya+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},jh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=nd[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=nd[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],p=Ys[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(p)},o,l,pn,d)})})}},Qh=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ed=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},mc=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,v=g-l,m=-2*p+3*d,f=p-d,M=1-m,_=f-d+h;for(let y=0;y!==o;y++){let w=a[v+y+o],b=a[v+y+c]*u,E=a[g+y+o],x=a[g+y]*u;s[y]=M*w+_*b+m*E+f*x}return s}},Pb=new ke,td=class extends mc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Pb.fromArray(s).normalize().toArray(s),s}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Am={9728:zt,9729:Ht,9984:vl,9985:Bs,9986:Ir,9987:ti},Rm={33071:qn,33648:ys,10497:ir},Ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lb={CUBICSPLINE:void 0,LINEAR:vr,STEP:_r},Lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),i.DefaultMaterial}function Ur(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ub(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Db(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fb(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nh(t.attributes):e=i.indices+":"+Nh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Nh(i.targets[n]);return e}function Nh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function id(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ob(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Bb=new Ye,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new ar(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Ur(s,o,r),vi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Hi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Ph[r.type],o=Ys[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ft(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Ph[r.type],l=Ys[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,v,m;if(p&&p!==h){let f=Math.floor(d/p),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,_=t.cache.get(M);_||(v=new l(o,f*p,r.count*p/u),_=new Es(v,p/u),t.cache.add(M,_)),m=new Ts(_,c,d%p/u,g)}else o===null?v=new l(r.count*c):v=new l(o,d,r.count*c),m=new Ft(v,c,g);if(r.sparse!==void 0){let f=Ph.SCALAR,M=Ys[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,w=new M(a[1],_,r.sparse.count*f),b=new l(a[2],y,r.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,x=w.length;E<x;E++){let T=w[E];if(m.setX(T,b[E*c]),c>=2&&m.setY(T,b[E*c+1]),c>=3&&m.setZ(T,b[E*c+2]),c>=4&&m.setW(T,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Am[d.magFilter]||Ht,u.minFilter=Am[d.minFilter]||ti,u.wrapS=Rm[d.wrapS]||ir,u.wrapT=Rm[d.wrapT]||ir,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Ht,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new jt(v);m.needsUpdate=!0,d(m)}),t.load(Hi.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),vi(h,a),h.userData.mimeType=a.mimeType||Ob(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ps,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Is,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Er}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=r[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],pn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);let u=s.alphaMode||Lh.OPAQUE;if(u===Lh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Lh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==sn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==sn){let h=s.emissiveFactor;o.emissive=new tt().setRGB(h[0],h[1],h[2],pn)}return s.emissiveTexture!==void 0&&a!==sn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),vi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ur(r,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Fb(l),h=r[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Cm(new Qt,l,t),l.mode===Yn.TRIANGLE_STRIP?d=d.then(p=>Ih(p,Ga)):l.mode===Yn.TRIANGLE_FAN&&(d=d.then(p=>Ih(p,Hs))),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Nb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],f,M=l[p];if(m.mode===Yn.TRIANGLES||m.mode===Yn.TRIANGLE_STRIP||m.mode===Yn.TRIANGLE_FAN||m.mode===void 0){let _=s.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=_&&y?new va(v,M):new Vt(v,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Yn.LINES)f=new Sa(v,M);else if(m.mode===Yn.LINE_STRIP)f=new Sr(v,M);else if(m.mode===Yn.LINE_LOOP)f=new wa(v,M);else if(m.mode===Yn.POINTS)f=new Ea(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Db(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),vi(f,s),m.extensions&&Ur(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Ur(r,h[0],s),h[0];let d=new kt;s.extensions&&Ur(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Te.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new or(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Ye;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ba(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){let p=r.channels[h],g=r.samplers[p.sampler],v=p.target,m=v.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],g=h[2],v=h[3],m=h[4],f=[];for(let _=0,y=d.length;_<y;_++){let w=d[_],b=p[_],E=g[_],x=v[_],T=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,b,E,x,T);if(C)for(let L=0;L<C.length;L++)f.push(C[L])}let M=new Ns(s,void 0,f);return vi(M,r),M})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Bb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new As:l.length>1?u=new kt:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),vi(u,s),s.extensions&&Ur(n,u,s),s.matrix!==void 0){let h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),vi(s,n),n.extensions&&Ur(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?s.add(wm(d)):s.add(d)}let l=u=>{let h=new Map;for(let[d,p]of r.associations)(d instanceof Sn||d instanceof jt)&&h.set(d,p);return u.traverse(d=>{let p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}hr[s.path]===hr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(hr[s.path]){case hr.weights:u=Oi;break;case hr.rotation:u=mi;break;case hr.translation:case hr.scale:u=ki;break;default:n.itemSize===1?u=Oi:u=ki;break}let h=r.interpolation!==void 0?Lb[r.interpolation]:vr,d=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let v=new u(c[p]+"."+hr[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=id(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof mi?td:mc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kb(i,e,t){let n=e.attributes,r=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=id(Ys[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let v=id(Ys[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Mn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Cm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=nd[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return dt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),vi(i,e),kb(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ub(i,e.targets,t):i})}function Pm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,h=-l*r*o-c*s*a,d=l*s*a-c*r*o,p=l*s*o+c*r*a;return[-u,-d,-h,p]}function Lm(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((d,p)=>[d.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new D().crossVectors(c,o).normalize(),u=new D;for(let d of["L","R"]){let p=e.get("Bip001-"+d+"-Foot"),g=e.get("Bip001-"+d+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(l)<0&&l.negate();let h=i.geometry.getAttribute("position");return(d,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let v=new D;for(let w=0;w<3;w++)v.addScaledVector(new D().fromBufferAttribute(h,d[w]),p.getComponent(w));let m=v.sub(t),f=Math.abs(m.dot(c))/a,M=m.dot(o)/a,_=m.dot(l)/a;if(f>.72)return null;let y=null;return M>-.38&&M<-.04&&f<.23&&_>.025?y="pelvis_front":M>-.35&&M<.18&&_<-.025?y="hips":M>.43&&M<1.02&&_>.025&&f<.67?y="chest":M>.1&&M<=.43&&_>.025?y=f>.48?"waist":"abdomen":M>.16&&M<1.02&&_<-.025&&(y="back"),y?{id:y,confidence:.85,source:"bind-pose-surface",coordinates:[f,M,_]}:null}}function zb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function Nm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=zb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Um(i,e,t,n=null){let r=new Ar,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function h(g,v){if(!["torso","leg"].includes(g?.id))return g;let m=U=>i.getObjectByName(U),f=U=>m(U)?.getWorldPosition(new D),M=f("Bip001-Pelvis"),_=f("Bip001-Neck"),y=f("Bip001-L-UpperArm"),w=f("Bip001-R-UpperArm"),b=f("Bip001-Head"),E=f("EyeJoint_L"),x=f("EyeJoint_R");if(!M||!_||!y||!w||!b||!E||!x)return g;let T=_.distanceTo(M);if(T<1e-5)return g;let C=_.clone().sub(M).normalize(),L=w.clone().sub(y).normalize(),O=new D().crossVectors(L,C).normalize(),I=E.add(x).multiplyScalar(.5).sub(b).dot(O);if(Math.abs(I)<T*.002)return g;I<0&&O.negate();let V=v.clone().sub(M),P=V.dot(C)/T,N=V.dot(O)/T;if(Math.abs(V.dot(L))/T>.7)return g;let F=null;return P>-.4&&P<.16&&N<-.025?F="hips":g.id==="torso"&&(P>.45&&P<.95&&N>.06?F="chest":P>.05&&P<.46&&N>.06?F="abdomen":P>.16&&P<.95&&N<-.06&&(F="back")),F?{id:F,confidence:.75,source:"rig-surface-estimate"}:g}function d(g){for(let v=g;v;v=v.parent)if(!v.visible)return!1;return!0}function p(g,v){if(!g||!v)return 1;try{let m=g.image,f=m.width,M=m.height;if(!f||!M||!u)return null;let _=v.clone();g.transformUv(_);let y=Math.min(f-1,Math.max(0,Math.floor(_.x*f))),w=Math.min(M-1,Math.max(0,Math.floor(_.y*M))),b=Math.floor(y/32)*32,E=Math.floor(w/32)*32;s.has(g)||s.set(g,++c);let x=s.get(g)+":"+b+":"+E,T=a.get(x);if(T)a.delete(x),a.set(x,T);else{u.clearRect(0,0,32,32),u.drawImage(m,b,E,Math.min(32,f-b),Math.min(32,M-E),0,0,Math.min(32,f-b),Math.min(32,M-E));let C=u.getImageData(0,0,32,32).data;T=new Uint8Array(1024);for(let L=0;L<1024;L++)T[L]=C[L*4+3];a.set(x,T),a.size>128&&a.delete(a.keys().next().value)}return T[(w-E)*32+y-b]/255}catch{return null}}return(g,v)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(v)||!m.width||!m.height||g<m.left||g>m.right||v<m.top||v>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let f=[];i.traverse(_=>{_.isMesh&&d(_)&&(_.isSkinnedMesh&&(_.skeleton.update(),_.computeBoundingSphere(),_.computeBoundingBox()),f.push(_))});let M=new Set;n?.traverse(_=>{_.isMesh&&d(_)&&(f.push(_),M.add(_))}),r.setFromCamera(new lt((g-m.left)/m.width*2-1,-(v-m.top)/m.height*2+1),e);for(let _ of r.intersectObjects(f,!1)){let y=_.object,w=y.material,b=p(y.userData.previewMap,_.uv),E=w.alphaTest||(w.transparent?.1:0);if(w.clippingPlanes?.some(N=>N.distanceToPoint(_.point)<0)||b!==null&&b<E)continue;if(M.has(y))return null;let x=[_.face.a,_.face.b,_.face.c],T=x.map(N=>y.getVertexPosition(N,new D)),C=y.worldToLocal(_.point.clone()),L=ui.getBarycoord(C,...T,new D),O=[],H=y.geometry.getAttribute("skinIndex"),I=y.geometry.getAttribute("skinWeight");if(y.isSkinnedMesh&&H&&I&&L)for(let N=0;N<3;N++)for(let Y=0;Y<4;Y++)O.push({name:y.skeleton.bones[H.getComponent(x[N],Y)]?.name,weight:I.getComponent(x[N],Y)*L.getComponent(N)});o.has(y)||o.set(y,Lm(y));let V=Nm(O),P=o.get(y)(x,L,V)||h(V,_.point);return{skinBones:O.filter(N=>N.weight>.05).map(N=>N.name),mesh:y.userData.snowbreakSurfaceKey,triangle:_.faceIndex,barycentric:L?.toArray(),anatomy:P,uv:_.uv?.toArray()||null,point:_.point.toArray(),distance:_.distance,alphaVerified:b!==null,material:y.userData.snowbreakMaterialName}}return null}}var Vi={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Za(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Fr(i,e){let t=Za(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(Vi,i.anatomy.id))return{...i.anatomy,label:Vi[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(Vi,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:Vi[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:Vi[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var sd={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function Dm(i,e,t){let n=new kt;n.visible=!1,e.add(n);let r=new Map;i.traverse(f=>{f.isMesh&&f.userData.snowbreakSurfaceKey&&r.set(f.userData.snowbreakSurfaceKey,f)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function h(){for(let f of c)f.overlay.geometry.dispose(),f.overlay.material.dispose(),f.overlay.removeFromParent();c=[],l=0}function d(){h(),u=!1;let f=new Map;for(let[M,_]of Object.entries(s)){let y=/^(surface_\d+):(\d+)$/.exec(M);if(!y)continue;let w=r.get(y[1]),b=Number(y[2]);if(!w)continue;let E=w.geometry,x=E.getAttribute("position"),T=E.index,C=E.getAttribute("uv"),L=Fr({mesh:y[1],triangle:b,alphaVerified:!0},{[M]:_});if(!L||b*3+2>=(T?T.count:x.count)||w.userData.previewMap&&!C)continue;if(l>=5e3){u=!0;continue}l++;let O=y[1]+":"+L.id,H=f.get(O);H||(H={source:w,region:L.id,vertices:[],keys:[]},f.set(O,H)),H.keys.push(M);for(let I=0;I<3;I++)H.vertices.push(T?T.getX(b*3+I):b*3+I)}for(let M of f.values()){let _=new Qt;_.setAttribute("position",new Ft(new Float32Array(M.vertices.length*3),3).setUsage(eh));let y=M.source.geometry.getAttribute("uv");if(y){let x=new Float32Array(M.vertices.length*2);M.vertices.forEach((T,C)=>{x[C*2]=y.getX(T),x[C*2+1]=y.getY(T)}),_.setAttribute("uv",new Ft(x,2))}let w=M.source.material,b=new sn({color:sd[M.region],map:M.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(w.alphaTest||(w.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:w.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),E=new Vt(_,b);E.frustumCulled=!1,E.renderOrder=100,n.add(E),c.push({...M,overlay:E})}o=!1}function p(f){for(let M=f;M;M=M.parent)if(!M.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&d(),i.updateWorldMatrix(!0,!0);let f=new D,M=new Map;for(let _ of c){let{source:y,overlay:w}=_;if(w.visible=p(y),!w.visible)continue;y.updateMatrixWorld(!0),y.isSkinnedMesh&&y.skeleton.update();let b=M.get(y);b||(b=new Map,M.set(y,b));let E=w.geometry.getAttribute("position");_.vertices.forEach((x,T)=>{let C=b.get(x);C||(y.getVertexPosition(x,f).applyMatrix4(y.matrixWorld),C=f.toArray(),b.set(x,C)),E.setXYZ(T,...C)}),E.needsUpdate=!0}}function v(){let f=c.find(_=>_.overlay.visible),M=f?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:f&&M?{key:f.keys[0],vertices:[0,1,2].map(_=>new D().fromBufferAttribute(M,_).toArray()),screen:[0,1,2].map(_=>new D().fromBufferAttribute(M,_).project(t).toArray())}:null}}function m(f){let M=n.visible;n.visible=!1;try{return f()}finally{n.visible=M}}return{set(f,M=a){return s=f,a=!!M,o=!0,a||h(),g(),v()},update:g,snapshot:v,hideForCapture:m,dispose(){h(),n.removeFromParent()}}}function gc(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Ye().compose(new D(...i.position),new ke(...i.quaternion).normalize(),new D(...i.scale))}async function Fm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=gc(n.characterWorld).invert(),s=new kt,a=new kt,o=new Set,c=[],l=[],u=[],h=new Map,d=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let b of n.anchors){if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(b.id)||h.has(b.id)||!Number.isFinite(b.viewYawDegrees)||Math.abs(b.viewYawDegrees)>180)throw new Error("Invalid scene anchor");h.set(b.id,{inverse:gc(b.characterWorld).invert(),viewYawDegrees:b.viewYawDegrees})}if(!h.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Pn,g=!0;for(let b of n.objects){let E=i.getAsset(b.assetRole);if(typeof b.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(b.id)||o.has(b.id)||E?.kind!=="geometry")throw new Error("Invalid scene object");if(b.group!==void 0&&!["room","furniture"].includes(b.group)||b.cutaway!==void 0&&typeof b.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(b.id);let x=r.clone().multiply(gc(b.world)),T=(await new Dr().parseAsync(E.bytes.slice().buffer,"")).scene,C=0;T.traverse(O=>{if(O.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");O.isMesh&&(C+=(O.geometry.index?.count||O.geometry.attributes.position.count)/3)});let L=new kt;L.name=b.id,L.matrixAutoUpdate=!1,L.matrix.copy(x),L.add(T),(b.group==="room"?a:s).add(L),t(T),T.traverse(O=>{O.isMesh&&(b.group==="room"&&(O.material.side=En),b.cutaway&&(O.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&b.group==="furniture"&&(O.material.side=en),l.push(O.material)),(b.group==="room"||b.cutaway)&&(O.material.needsUpdate=!0))}),b.group!=="room"&&T.traverse(O=>{O.isMesh&&u.push(O)}),c.push({id:b.id,assetRole:b.assetRole,group:b.group||"furniture",cutaway:!!b.cutaway,triangles:C,matrix:x.toArray(),holder:L,world:gc(b.world)})}e.add(s),s.updateMatrixWorld(!0);function v(b,E){if(!l.length)return;let x=b.position.clone().sub(E),T=x.length();if(T<.001)return;x.divideScalar(T);let C=E.clone().addScaledVector(x,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,T*.5));p.setFromNormalAndCoplanarPoint(x.negate(),C)}function m(b){let E=!!b;if(E!==g){g=E;for(let x of l)x.clippingPlanes=g?[p]:null,x.needsUpdate=!0}}let f=new Map,M=new Ar,_=new D(0,1,0);function y(b){if(!h.size)return null;let E=h.get(b);if(!E)throw new Error("Unknown source scene anchor");if(d!==b){d=b;for(let x of c)x.holder.matrix.copy(E.inverse).multiply(x.world),x.matrix=x.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),f.clear()}return E.viewYawDegrees}h.size&&y(n.defaultAnchorId);function w(b){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let E=s.worldToLocal(b.clone()),x=Math.round(E.x/.015)+":"+Math.round(E.z/.015),T=f.get(x);if(T===void 0){let C=new Zt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),L=s.localToWorld(new D(E.x,C.max.y+.3,E.z)),O=_.clone().transformDirection(s.matrixWorld).negate();M.set(L,O),T=null;for(let H of M.intersectObjects(u,!1)){let I=H.face?.normal.clone().transformDirection(H.object.matrixWorld);if(I&&Math.abs(I.dot(O))>.65){T=s.worldToLocal(H.point.clone()).y;break}}f.set(x,T),f.size>512&&f.delete(f.keys().next().value)}return T===null?null:{clearance:E.y-T,normal:_.clone().transformDirection(s.matrixWorld),height:T}}return{root:s,contactSurface:w,setAnchor:y,hasCutaway:l.length>0,updateView:v,setRoomVisible:b=>{a.visible=!!b},setCutaway:m,setVisible:b=>{s.visible=!!b},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:d,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:c.map(({holder:b,world:E,...x})=>({...x,matrix:[...x.matrix]})),originalSceneVerified:!1})}}var Hb=new Set(["head","left_hand","right_hand"]),Vb=new Set(["tap","double_tap","long_press","stroke"]);function Om(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Hb.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Vb.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Bm(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function Gb(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function km(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let d of i.clips){let p=e.getAsset(d.animationRole),g=e.current.resources.find(f=>f.role===d.animationRole);if(p?.kind!=="animation"||d.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(d.sourceSha256)||d.frames!==p.data.frames||d.fps!==p.data.fps||!Array.isArray(d.curves)||d.curves.length>64)throw new Error("Morph curve animation mismatch");let v=n.get(d.sourceSha256);if(v){if(v.frames!==d.frames||v.fps!==d.fps||JSON.stringify(v.curves)!==JSON.stringify(d.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,d.sourceSha256);continue}let m=new Set;for(let f of d.curves){if(typeof f.name!="string"||!f.name.length||f.name.length>128||m.has(f.name)||!Array.isArray(f.keys)||!f.keys.length||f.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(f.name),s.add(f.name);let M=-1/0;for(let _ of f.keys){if(!Array.isArray(_)||_.length!==5||!_.every(Number.isFinite)||_[0]<-120||_[0]>120||_[0]<=M||Math.abs(_[1])>4||Math.abs(_[2])>1e6||Math.abs(_[3])>1e6||![0,1,2].includes(_[4]))throw new Error("Invalid morph curve key");if(M=_[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(d.sourceSha256,d),r.set(p.data,d.sourceSha256)}let o=[];if(t.traverse(d=>{if(!d.isMesh||!d.morphTargetDictionary||!d.morphTargetInfluences)return;let p=new Map;for(let g of s){let v=d.morphTargetDictionary[g];if(v!==void 0){if(!Number.isInteger(v)||v<0||v>=d.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,v)}}p.size&&o.push({mesh:d,indices:p})}),[...s].some(d=>!o.some(p=>p.indices.has(d))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function h(d,p){l=p,c=d&&r.get(d)||null,u={};let g=n.get(c);for(let v of g?.curves||[])u[v.name]=Gb(v.keys,p);for(let{mesh:v,indices:m}of o)for(let[f,M]of m)v.morphTargetInfluences[M]=u[f]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:d,indices:p})=>Object.fromEntries([...p].map(([g,v])=>[g,d.morphTargetInfluences[v]]))),originalExpressionFidelity:!1})}}function ad(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(c=>!c.targets?.length)){let{targetNames:c,...l}=r;n.extras=l;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function zm(i,e,{isCurrent:t=()=>!0}={}){let n=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};n();let r=e.getAsset("viewOrientation")?.data;if(r&&(r.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(r.yawDegrees)||Math.abs(r.yawDegrees)>180))throw new Error("Invalid view orientation");let s=-Math.PI/2+Te.degToRad(r?.yawDegrees||0),a=new uc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),o=new Mr,c=new kt,l=new kt,u=new Yt(32,1,.01,100);c.rotation.y=s,o.add(c),c.add(l);let h=Mm(o,a),d=pf();d.configure({mode:localStorage.getItem("snowRenderMode")||"adaptive"});let p=0;function g(ge){return d.configure(ge),h.setBudget(d.snapshot()),p=0,ze(),v()}function v(){return{...d.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:a.getPixelRatio(),drawCalls:a.info.render.calls,triangles:a.info.render.triangles,gpuResources:{textures:a.info.memory.textures,geometries:a.info.memory.geometries},gpuTimingAvailable:!1}}let m=null,f,M,_,y,w,b,E=null,x=null,T=null,C=null,L=!1,O=null,H=0,I=[],V=new Set,P=new Set,N=new Set,Y=new Map,F=new Map,U=new Map,G=new Set,le=new Map,fe=e.getAsset("rootMotionPolicy")?.data,pe=0,Z=0,ce=0,z=0,K=null,ae=null,de={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},ue=0,Me=0,Re=null;function _e(){c.rotation.set(Te.degToRad(de.pitch),s+ue+Te.degToRad(de.yaw),Te.degToRad(de.roll)),l.rotation.set(Te.degToRad(Ue.pitch),Te.degToRad(Ue.yaw+Me),Te.degToRad(Ue.roll)),c.updateMatrixWorld(!0)}let Ue={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function te(ge){let A={...Ue,...ge};if(Object.values(A).some(k=>!Number.isFinite(k)))throw new Error("Invalid character placement");for(let k of["x","y","depth"])A[k]=Te.clamp(A[k],-1.5,1.5);A.scale=Te.clamp(A.scale,.3,4),A.yaw=Te.clamp(A.yaw,-180,180),A.pitch=Te.clamp(A.pitch,-65,65),A.roll=Te.clamp(A.roll,-45,45),A.stretchX=A.stretchY=1,Ue=A,c.updateWorldMatrix(!0,!1),u.updateMatrixWorld();let S=new D(A.x,A.y,A.depth).applyQuaternion(u.quaternion),B=c.matrixWorld.clone().invert();return l.position.copy(S.transformDirection(B).multiplyScalar(Math.hypot(A.x,A.y,A.depth))),l.scale.setScalar(A.scale),_e(),{...Ue}}function j(ge){let A={...de,...ge};for(let S of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(A[S]))throw new Error("Invalid framing");return de={scale:Te.clamp(A.scale,.3,4),x:Te.clamp(A.x,-1.5,1.5),y:Te.clamp(A.y,-1.5,1.5),yaw:((A.yaw+180)%360+360)%360-180,pitch:Te.clamp(A.pitch,-65,65),roll:Te.clamp(A.roll,-45,45),stretchX:Te.clamp(A.stretchX,.65,1.5),stretchY:Te.clamp(A.stretchY,.65,1.5)},_e(),ze(),{...de}}function ie(){if(!Re)return;c.rotation.y=s,c.updateMatrixWorld(!0);let ge=Re.bone.getWorldQuaternion(new ke),A=Re.axis.clone().applyQuaternion(ge);Math.hypot(A.x,A.z)>.1&&(ue=Re.heading-Math.atan2(A.x,A.z)),_e()}function me(){return de.yaw=0,ie(),ze(),{...de}}function Se(ge){ge.traverse(A=>{if(A.isBone&&(A.userData.bindLocalQuaternion=A.quaternion.toArray()),!A.isMesh)return;V.add(A.geometry);for(let $ of Array.isArray(A.material)?A.material:[A.material]){P.add($);for(let oe of Object.values($))oe?.isTexture&&N.add(oe)}let S=A.material.name,B=Y.get(S)||null,k=U.get(S)||{};if(A.userData.snowbreakSurfaceKey="surface_"+Z++,A.userData.snowbreakMaterialName=S,A.userData.previewMap=B,k.transparent!==void 0&&typeof k.transparent!="boolean")throw new Error("Invalid transparent override");if(k.renderOrder!==void 0&&(!Number.isInteger(k.renderOrder)||Math.abs(k.renderOrder)>100))throw new Error("Invalid material sorting");A.renderOrder=k.renderOrder||0,A.material=bm(S,B,F.get(S),k),P.add(A.material),A.castShadow=A.isSkinnedMesh&&!k.transparent,A.receiveShadow=A.material.userData.profile==="cloth-or-room"})}function We(ge,A){if(!A)return;let S=new Map(A.tracks.map(B=>[B.bone,B]));ge.traverse(B=>{if(!B.isBone)return;let k=S.get(B.name)?.keys?.[0];if(!k||k.length!==10||!k.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");B.position.fromArray(k),B.quaternion.fromArray(k,3),B.scale.fromArray(k,7)})}function Qe(ge,A,S=I,B=!1){if(!A)return;let k=new Map(A.tracks.map($=>[$.bone,$]));if(k.size!==A.tracks.length)throw new Error("Duplicate animation bones");ge.traverse($=>{if(!$.isBone||ge===_&&!G.has($)||B&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test($.name))return;let oe=k.get($.name);if(!(B&&!oe)){if(!oe||oe.keys.length!==A.frames||oe.keys.some(xe=>xe.length!==10||!xe.every(Number.isFinite)||Math.abs(xe.slice(3,7).reduce((ne,re)=>ne+re*re,0)-1)>.05))throw new Error("Invalid bone animation");S.push({bone:$,track:oe,clip:A})}})}function W(){if(!L){L=!0,removeEventListener("resize",ze),a.setAnimationLoop(null),b?.dispose(),f?.dispose(),M?.dispose(),h.dispose();for(let ge of V)ge.dispose();for(let ge of P)ge.dispose();for(let ge of N){ge.dispose();let A=ge.image;A?.close?A.close():A?.tagName==="CANVAS"?A.width=A.height=0:A?.tagName==="IMG"&&(A.src=""),ge.image=null}Y.clear(),F.clear(),U.clear(),N.clear(),P.clear(),V.clear(),I.length=0,_?.removeFromParent(),w?.root?.removeFromParent(),a.dispose()}}function ze(){if(L||!_)return;z++;let ge=i.clientWidth||innerWidth,A=i.clientHeight||innerHeight,S=d.ratio(ge,A,devicePixelRatio||1);(!K||K.w!==ge||K.h!==A||K.ratio!==S)&&(a.setPixelRatio(S),a.setSize(ge,A,!1),K={w:ge,h:A,ratio:S},ce++),u.aspect=ge/A,c.updateMatrixWorld(!0),!E&&!ae&&(_.traverse(re=>{re.isSkinnedMesh&&(re.skeleton.update(),re.computeBoundingBox())}),ae=new Zt().setFromObject(_).applyMatrix4(c.matrixWorld.clone().invert()));let B=(x||E||ae).clone().applyMatrix4(c.matrixWorld),k=B.getSize(new D),$=B.getCenter(new D);h.frame(B);let oe=Math.tan(Te.degToRad(16)),xe=Math.max(k.y/(2*oe),k.x/(2*oe*u.aspect))*1.25+k.z;if(E){xe=0;for(let re of[B.min.x,B.max.x])for(let ve of[B.min.y,B.max.y])for(let He of[B.min.z,B.max.z])xe=Math.max(xe,He-$.z+Math.max(Math.abs(re-$.x)/(oe*u.aspect),Math.abs(ve-$.y)/oe)*1.12)}let ne=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2";u.position.copy($).add(new D(0,0,xe)),u.lookAt($),u.zoom=x&&!ne?1.05:de.scale,u.setViewOffset(ge,A,x&&!ne?0:-de.x*ge,x&&!ne?0:-de.y*A,ge,A),u.updateProjectionMatrix(),u.projectionMatrix.elements[0]*=de.stretchX,u.projectionMatrix.elements[5]*=de.stretchY,u.projectionMatrixInverse.copy(u.projectionMatrix).invert(),w?.updateView(u,$)}try{let Ke=function(be){let J=Ee.get(be);if(!J)throw new Error("Unknown sample");he=J.overlay?we==="sample"&&he?he:{bindings:we==="standby"?Ve:it,duration:we==="standby"?ve:X,time:H,envelope:x}:null,Ie=be,it=J.bindings,X=J.duration;let $e=Ee.get(J.sceneOf)||J,at=J.overlay?he.envelope:$e.sceneFraming?le.get($e.sourceSha256):null;if(J.sceneFraming&&!at)throw new Error("Scene framing envelope missing");let et=w.setAnchor?.($e.id??be),nt=x!==at;if(et!=null){let yt=-Math.PI/2+Te.degToRad(et);nt||=Math.abs(s-yt)>1e-8,s=yt,ue=0,_e()}return x=at,Ge(0),nt&&ze(),{id:be,label:J.label,duration:J.duration}},Ge=function(be,J=it,$e=X){if(L||!Number.isFinite(be))return;let at=he&&J===it?he:null;at&&at.duration>0&&Ge((at.time+be)%at.duration,at.bindings,at.duration);let et=we;C=J[0]?.clip?.generatorMetadata?.sourceSha256||null,we=J===Ve&&ve>0?"standby":"sample",H=Math.max(0,Math.min($e,be));for(let{bone:nt,track:yt,clip:Rt}of J){let xn=H*Rt.fps,Wt=Math.min(Math.floor(xn),Rt.frames-1),yn=Math.min(Wt+1,Rt.frames-1),_n=xn-Wt,Rn=yt.keys[Wt],R=yt.keys[yn];(!at||!G.has(nt))&&nt.position.set(Te.lerp(Rn[0],R[0],_n),Te.lerp(Rn[1],R[1],_n),Te.lerp(Rn[2],R[2],_n)),nt.quaternion.copy(ne.fromArray(Rn,3).slerp(re.fromArray(R,3),_n)),(!at||!G.has(nt))&&nt.scale.set(Te.lerp(Rn[7],R[7],_n),Te.lerp(Rn[8],R[8],_n),Te.lerp(Rn[9],R[9],_n))}if($.apply(J.find(nt=>!G.has(nt.bone))?.clip,H),fe){_.position.x=_.position.z=0,c.updateMatrixWorld(!0);let nt=_.getObjectByName(fe.bone).getWorldPosition(new D).applyMatrix4(_.matrixWorld.clone().invert());_.position.x=fe.reference[0]-nt.x,_.position.z=fe.reference[1]-nt.z}c.updateMatrixWorld(!0),pe=oe.length;for(let nt of oe)nt.update()},wi=function(){let be=[];return _.updateWorldMatrix(!0,!0),_.traverse(J=>{J.userData.sourceAttachment&&J.traverse($e=>{if(!$e.isSkinnedMesh)return;$e.skeleton.update();let at=new D,et=$e.geometry.attributes.position.count;for(let nt=0;nt<et;nt++)at.add($e.getVertexPosition(nt,new D).applyMatrix4($e.matrixWorld));be.push({kind:J.userData.sourceAttachment,vertices:et,center:at.divideScalar(et).toArray(),sharedBones:$e.skeleton.bones.every(nt=>_.getObjectByName(nt.name)===nt)})})}),be};if(fe&&(fe.schema!=="snowbreak-home-root-lock/1"||fe.bone!=="Bip001"||!Array.isArray(fe.reference)||fe.reference.length!==2||!fe.reference.every(be=>Number.isFinite(be)&&Math.abs(be)<10)))throw new Error("Invalid home root motion policy");let ge=e.getAsset("materials")?.data;if(ge){if(ge.schema!=="snowbreak-material-preview/1"||ge.originalShaderVerified!==!1||!Array.isArray(ge.materials)||ge.materials.length>64)throw new Error("Invalid material preview");m=ff(ge,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096);let be=new Map;for(let J of ge.materials){if(n(),typeof J.name!="string"||J.name.length>256||U.has(J.name))throw new Error("Invalid material identity");let $e=J.renderState||{};if($e.alphaCutoff!==void 0&&(!Number.isFinite($e.alphaCutoff)||$e.alphaCutoff<0||$e.alphaCutoff>1))throw new Error("Invalid material alpha");if($e.doubleSided!==void 0&&typeof $e.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(U.set(J.name,$e),!J.diffuseAssetId)continue;let at=e.getAsset("texture_"+J.diffuseAssetId);if(at?.kind!=="texture")throw new Error("Missing local diffuse texture");let et=be.get(J.diffuseAssetId);if(!et){let nt=URL.createObjectURL(new Blob([at.bytes],{type:at.data?.mime||"image/png"}));try{et=await new ar().loadAsync(nt)}finally{URL.revokeObjectURL(nt)}let yt=m.limitFor(J.diffuseAssetId);if(et.image.width>yt||et.image.height>yt){let Rt=document.createElement("canvas"),xn=Math.min(yt/et.image.width,yt/et.image.height);Rt.width=Math.round(et.image.width*xn),Rt.height=Math.round(et.image.height*xn),Rt.getContext("2d").drawImage(et.image,0,0,Rt.width,Rt.height);let Wt=et.image;et.image=Rt,Wt.src="",et.needsUpdate=!0}et.colorSpace=Dt,et.anisotropy=a.capabilities.getMaxAnisotropy(),et.flipY=!1,be.set(J.diffuseAssetId,et),N.add(et)}if(Y.set(J.name,et),J.normalAssetId){if(!/^[a-f0-9]{64}$/.test(J.normalAssetId)||ge.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let nt=e.getAsset("texture_"+J.normalAssetId);if(nt?.kind!=="texture")throw new Error("Missing original normal texture");let yt=be.get("normal:"+J.normalAssetId);if(!yt){let Rt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/png"}));try{yt=await new ar().loadAsync(Rt)}finally{URL.revokeObjectURL(Rt)}let xn=m.limitFor(J.normalAssetId,!0);if(yt.image.width>xn||yt.image.height>xn){let Wt=yt.image,yn=document.createElement("canvas"),_n=xn/Math.max(Wt.width,Wt.height);yn.width=Math.round(Wt.width*_n),yn.height=Math.round(Wt.height*_n),yn.getContext("2d").drawImage(Wt,0,0,yn.width,yn.height),yt.image=yn,Wt.src="",yt.needsUpdate=!0}yt.flipY=!1,yt.colorSpace=ri,yt.anisotropy=a.capabilities.getMaxAnisotropy(),be.set("normal:"+J.normalAssetId,yt),N.add(yt)}F.set(J.name,yt)}}}let A=e.getAsset("body");if(!A)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let S=e.getAsset("framingBounds")?.data;if(S){let be=J=>Array.isArray(J)&&J.length===3&&J.every($e=>Number.isFinite($e)&&Math.abs($e)<=100);if(S.schema!=="snowbreak-framing-bounds/1"||S.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||S.bodySha256!==e.current.resources.find(J=>J.role==="body")?.assetId||!be(S.min)||!be(S.max)||S.min.some((J,$e)=>J>=S.max[$e])||!Number.isInteger(S.evaluatedFrames)||S.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(E=new Zt(new D(...S.min),new D(...S.max)),T=S,S.clips){if(!Array.isArray(S.clips)||S.clips.length>16)throw new Error("Invalid clip envelopes");for(let J of S.clips){if(!/^[a-f0-9]{64}$/.test(J.sourceSha256)||le.has(J.sourceSha256)||!be(J.min)||!be(J.max)||J.min.some(($e,at)=>$e>=J.max[at]))throw new Error("Invalid clip envelope");le.set(J.sourceSha256,new Zt(new D(...J.min),new D(...J.max)))}}}_=(await new Dr().register(ad).parseAsync(A.bytes.slice().buffer,"")).scene,l.add(_),n(),Se(_),_.traverse(be=>{be.isBone&&G.add(be)});let B=e.getAsset("bodyAnimation")?.data;C=B?.generatorMetadata?.sourceSha256||null,We(_,B),Qe(_,B);let k=e.getAsset("faceAttachment")?.data;if(k){if(k.schema!=="snowbreak-face-attachment/1"||k.candidateOnly!==!0||k.originalAssemblyVerified!==!1||k.boneName!=="Bip001-Head"||k.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let be=_.getObjectByName(k.boneName),J=k.relativeLocationCm;if(!be?.isBone||!J||![J.X,J.Y,J.Z].every(nt=>Number.isFinite(nt)&&Math.abs(nt)<100))throw new Error("Invalid socket parent or position");let $e=e.getAsset("face");if(!$e)throw new Error("Missing face geometry");y=(await new Dr().register(ad).parseAsync($e.bytes.slice().buffer,"")).scene,n(),Se(y),We(y,e.getAsset("faceAnimation")?.data);let at=e.getAsset("faceAnimation")?.data;if(!at||!B||at.frames!==B.frames||at.fps!==B.fps)throw new Error("Face/body sample timing mismatch");Qe(y,at);let et=new kt;if(et.position.set(J.X*.01,J.Z*.01,J.Y*.01),et.quaternion.fromArray(Pm(k.relativeRotationDegrees)),be.add(et),et.add(y),k.defaultVisible!==void 0&&typeof k.defaultVisible!="boolean")throw new Error("Invalid face visibility");y.visible=k.defaultVisible===!0}w=await Fm(e,c,Se),n(),a.localClippingEnabled=!!w.hasCutaway;let $=km(e.getAsset("morphCurves")?.data,e,y),oe=[];_.traverse(be=>{be.isSkinnedMesh&&!oe.includes(be.skeleton)&&oe.push(be.skeleton),be.isSkinnedMesh&&(be.frustumCulled=!1)});let xe=B?(B.frames-1)/B.fps:0,ne=new ke,re=new ke,ve=0,He="D\u5F85\u673A",Ce=!1,we="sample",Ve=[],Pe=e.getAsset("stateTransition")?.data;if(Pe){let be=Pe.schema==="snowbreak-state-preview/1"&&Pe.show==="Sc01_Hand_A_D"&&Pe.fromState==="A"&&Pe.toState==="D",J=Pe.schema==="snowbreak-standby-preview/1"&&Pe.characterId===e.current.characterId&&Number.isInteger(Pe.standbyConfigId)&&Pe.standbyConfigId>0&&Number.isInteger(Pe.sourceSkinId)&&/^[a-f0-9]{64}$/.test(Pe.sourceTableSha256)&&typeof Pe.label=="string"&&Pe.label.length<=40&&typeof Pe.startAsStandby=="boolean",$e=Pe.schema==="snowbreak-standby-preview/2"&&Pe.stance==="standing"&&Pe.characterId===e.current.characterId&&Pe.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&Pe.startAsStandby===!0;if(!be&&!J&&!$e||Pe.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(J||$e)&&(He=Pe.label,Ce=Pe.startAsStandby);let at=e.getAsset("standbyBody")?.data,et=e.getAsset("standbyFace")?.data;if(!at||!et||at.frames!==et.frames||at.fps!==et.fps)throw new Error("Standby clip timing mismatch");let nt=new Map(at.tracks.map(Rt=>[Rt.bone,Rt])),yt=new Map(et.tracks.map(Rt=>[Rt.bone,Rt]));Ve=I.map(Rt=>{let xn=Rt.clip===B?at:et,Wt=(Rt.clip===B?nt:yt).get(Rt.bone.name);if(!Wt||Wt.keys.length!==xn.frames||Wt.keys.some(yn=>yn.length!==10||!yn.every(Number.isFinite)||Math.abs(yn.slice(3,7).reduce((_n,Rn)=>_n+Rn*Rn,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:Rt.bone,track:G.has(Rt.bone)?Ch(Wt):Wt,clip:xn}}),ve=(at.frames-1)/at.fps}let it=I,X=xe,Ie="default",he=null,Ee=new Map([["default",{bindings:I,duration:xe,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),Ae=e.getAsset("sampleCatalog")?.data;if(Ae){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(Ae.schema)||Ae.characterId!==e.current.characterId||Ae.originalInteractionVerified!==!1||!Array.isArray(Ae.samples)||!Ae.samples.length||Ae.samples.length>24||!/^[a-f0-9]{64}$/.test(Ae.sourceTableSha256))throw new Error("Invalid sample catalog");Ee.clear();for(let J of Ae.samples){if(typeof J.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(J.id)||Ee.has(J.id)||typeof J.label!="string"||J.label.length>64||Ae.schema.endsWith("/1")&&(!Number.isInteger(J.sourceShowElementId)||J.sourceShowElementId<1))throw new Error("Invalid sample identity");let $e=e.getAsset(J.bodyRole),at=e.getAsset(J.faceRole);if($e?.kind!=="animation"||at?.kind!=="animation"||($e.data.frames!==at.data.frames||$e.data.fps!==at.data.fps)&&!(J.independentFaceTiming===!0&&Number.isInteger(J.sourceShowElementId)&&J.sourceShowElementId>0))throw new Error("Sample body/face mismatch");if(Ae.schema.endsWith("/2")&&J.sourceBodySha256!==($e.data.generatorMetadata?.sourceSha256||e.current.resources.find(nt=>nt.role===J.bodyRole)?.assetId))throw new Error("Sample source mismatch");let et=I;if(J.bodyRole!=="bodyAnimation"||J.faceRole!=="faceAnimation"){if(et=[],Qe(_,$e.data,et,J.overlay==="upper-body"),!y)throw new Error("Sample requires face");Qe(y,at.data,et)}if(J.persistentState===!0&&e.current.characterId==="Fenny")for(let nt=0;nt<et.length;nt++)G.has(et[nt].bone)&&(et[nt]={...et[nt],track:vm(et[nt].track)});if(J.persistentState!==void 0&&typeof J.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(J.endPolicy!==void 0&&!["hold","loop"].includes(J.endPolicy))throw new Error("Invalid scene end policy");Ee.set(J.id,{id:J.id,bindings:et,duration:Math.max(($e.data.frames-1)/$e.data.fps,(at.data.frames-1)/at.data.fps),overlay:J.overlay==="upper-body",label:J.label,sourceShowElementId:J.sourceShowElementId,sceneFraming:J.sceneFraming===!0,sourceSha256:$e.data.generatorMetadata?.sourceSha256,sceneOf:J.sceneOf,persistentState:J.persistentState===!0,endPolicy:J.endPolicy,afterScene:J.afterScene})}let be=Ee.get(Ae.defaultId);if(!be||be.bindings!==I)throw new Error("Default sample must reference primary clip");Ie=Ae.defaultId;for(let J of Ee.values()){if(J.sceneOf!==void 0&&(typeof J.sceneOf!="string"||!Ee.has(J.sceneOf)))throw new Error("Missing reaction scene");if(J.afterScene!==void 0&&(typeof J.afterScene!="string"||!Ee.get(J.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let ye=Om(Ae);c.updateMatrixWorld(!0);let bt=_.getObjectByName("Bip001-Pelvis")||_.getObjectByName("Bip001");if(bt){let be=bt.getWorldQuaternion(new ke),J=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((at,et)=>{let nt=at.clone().applyQuaternion(be),yt=et.clone().applyQuaternion(be);return Math.hypot(yt.x,yt.z)-Math.hypot(nt.x,nt.z)})[0],$e=J.clone().applyQuaternion(be);Re={bone:bt,axis:J,heading:Math.atan2($e.x,$e.z)}}b=Dm(_,o,u);let gt=_m(_,be=>{Me=be,_e()},()=>de.yaw+Ue.yaw),gn=Um(_,u,i,w.root);M=gm(_,u,i,gn,e.getAsset("sceneInteractions")?.data,w.contactSurface,e.current.characterId),f=ym(_,u,i),ze(),await a.compileAsync(o,u),n(),addEventListener("resize",ze),a.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){d.resetClock();return}if(!d.begin())return;let be=d.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(be-p)>.02&&(p=be,ze()),gt.restore(),M.restore(),f.restore(),O?.(),gt.tick(),M.tick(),f.tick(),b.update(),a.render(o,u)});let Bn=()=>{let be=[];return _.traverse(J=>{J.isMesh&&be.push({name:J.userData.snowbreakMaterialName,textured:!!J.userData.previewMap,normalMapped:!!J.material.normalMap,diffuseSize:J.material.map?[J.material.map.image.width,J.material.map.image.height]:null,normalSize:J.material.normalMap?[J.material.normalMap.image.width,J.material.normalMap.image.height]:null,anisotropy:J.material.map?.anisotropy||0,profile:J.material.userData.profile,alphaTest:J.material.alphaTest})}),be},Mc=be=>_.traverse(J=>{J.isMesh&&(J.material.map=be?J.userData.previewMap:null,J.material.color.set(J.material.map?16777215:13289411),J.material.needsUpdate=!0)}),Qa=()=>({available:!!y,visible:!!y?.visible,originalAssemblyVerified:!1}),eo=be=>(y&&(y.visible=!!be,ze()),Qa()),Js=(be,J,$e)=>{if(L)throw new Error("Renderer disposed");b.hideForCapture(()=>{a.render(o,u),be.drawImage(i,0,0,J,$e)})},Sc=Rh(_),to=Rh(_,{side:"left"}),kr=Sm(_,u,e.getAsset("learnedMotions")?.data,Pe?.stance);return{textureBudgetState:()=>m?.snapshot(),attachmentState:wi,performanceState:v,setRenderBudget:g,projectedBone:be=>{let J=_.getObjectByName(be)?.getWorldPosition(new D).project(u),$e=i.getBoundingClientRect();return J?[$e.left+(J.x+1)*$e.width/2,$e.top+(1-J.y)*$e.height/2]:null},modelDragScale:()=>{let be=Math.max(.05,_.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(u.position).dot(u.getWorldDirection(new D))),J=2*be*Math.tan(Te.degToRad(u.fov/2))/u.zoom;return{x:J*u.aspect/de.stretchX,y:J/de.stretchY}},furnitureContacts:be=>Object.fromEntries(be.map(J=>{let $e=_.getObjectByName(J);return[J,$e?w.contactSurface?.($e.getWorldPosition(new D)):null]})),setModelFrame:te,modelFrameState:()=>({...Ue}),placementState:()=>({model:l.matrixWorld.toArray(),room:w.root?.matrixWorld.toArray(),camera:u.matrixWorld.toArray()}),embodiment:gt,sceneInteractions:M,sensesState:f.snapshot,setGaze:f.gaze,senseTouch:f.touch,resetSenses:f.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(be=>[be,_.getObjectByName(be)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:h.snapshot,setLighting:h.set,boneWorldPoints:be=>Object.fromEntries(be.slice(0,32).map(J=>[J,_.getObjectByName(J)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let be=[];return _.traverse(J=>{J.isBone&&be.push({name:J.name,position:J.position.toArray(),quaternion:J.quaternion.toArray(),scale:J.scale.toArray()})}),be},cameraState:()=>({position:u.position.toArray(),projection:u.projectionMatrix.toArray()}),learnedOptions:kr.available,applyLearnedMotion:kr.apply,learnedDiagnostics:kr.snapshot,presentationDiagnostics:()=>({resizeCount:ce,fitCount:z}),touchBindings:()=>ye.map(be=>({...be,gestures:[...be.gestures]})),setRoomVisible:w.setRoomVisible,setSceneCutaway:w.setCutaway,sceneState:w.snapshot,setSceneVisible:w.setVisible,morphState:$.snapshot,framingEnvelopeState:()=>({precomputed:!!E,evaluatedFrames:T?.evaluatedFrames||0,perClip:le.size,activeSource:C}),resourceState:()=>({sourceTextures:N.size,drawCalls:a.info.render.calls,triangles:a.info.render.triangles,geometries:a.info.memory.geometries,textures:a.info.memory.textures}),setSurfaceLabels:b.set,surfaceOverlayState:b.snapshot,armPreview:Sc,leftArmPreview:to,dispose:W,pickSurface:gn,drawSnapshot:Js,faceViewer:me,setFrame:j,frameState:()=>({...de}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:Bn,setTexturePreview:Mc,faceCandidateState:Qa,showFaceCandidate:eo,selectSample:Ke,sampleOptions:()=>[...Ee].map(([be,J])=>({id:be,label:J.label,duration:J.duration,sourceShowElementId:J.sourceShowElementId,persistentState:J.persistentState,endPolicy:J.endPolicy,afterScene:J.afterScene})),get duration(){return X},seek:Ge,standbyDuration:ve,standbyLabel:He,startAsStandby:Ce,seekStandby:be=>{x&&(x=null,ze());let J=w.setAnchor?.(Ae?.defaultId);J!=null&&(s=-Math.PI/2+Te.degToRad(J),ue=0,_e()),ve>0&&Ge(be%ve,Ve,ve)},setFrameHandler:be=>O=be,sampleState:()=>({lastSkeletonUpdates:pe,sampleId:Ie,time:H,poseMode:we,standbyDuration:ve,nativeInitializationVerified:!1,viewYaw:c.rotation.y,autoYaw:ue,bodyBones:I.filter(be=>be.clip===B).length,faceBones:I.filter(be=>be.clip!==B).length,hand:_.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(ge){throw W(),ge}}var Wb="action-plan/1",Xb=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],qb={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},Yb={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},Zb=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,Kb={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},$b={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},Hm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},xc=(i,e,t)=>Math.max(e,Math.min(t,i));function Jb(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function jb(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function Qb(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function od(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:xc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var Wm=i=>!!i&&Zb.test(i);function eM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=Yb[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||Wm(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Vm(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=Wm(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function Gm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of Hm[s]||[])r.push(a);for(let s of Hm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function tM(i,e){let t=e&&e.channels||{},n=Kb[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function nM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*xc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,h=xc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:h,curve:[[0,l],[.18,h],[.75,h],[1,l]]})}return s}function iM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Ka(i,e,t={}){let n=od(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:Wb,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||$b[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+Jb(Qb(n)+"||"+(a?jb(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!Xb.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Vm(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=iM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=eM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(h)&&l.push(...h),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Vm(n,a,c.motion)}else{let l=qb[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let d=tM(n,a);if(d.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=nM(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...d),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=Gm(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=Gm(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:xc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var yc=(i,e,t)=>Math.max(e,Math.min(t,i));function rM(i){return i*i*(3-2*i)}function sM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*rM(yc(o,0,1))}}return i[i.length-1][1]}function Xm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(_,y,w){a.push({at:e(),kind:_,planId:y.planId,type:y.action.type,...w||{}}),a.length>40&&a.shift()}function l(_,y,...w){if(typeof y=="function")try{y(...w)}catch{}}function u(_,y){let w={plan:_,t0:y,done:!1};r.push(w),c("start",_);for(let b of _.tracks)b.ch==="motion"?l("motion",t.onMotion,b.group,b.index,_):b.ch==="pose"?l("pose",t.onPose,b.name,_):b.ch==="expression"?l("expression",t.onExpression,b,_):b.ch==="speech"&&l("speech",t.onSpeech,b.text,_);return w}function h(_,y,w){if(_.done)return;_.done=!0;let b=r.indexOf(_);b>=0&&r.splice(b,1),c("end",_.plan,{reason:w}),l("end",t.onEnd,_.plan,w)}function d(_,y,w){let b=e(),E=w||Ka(_,y);if(!E||E.stopped||!E.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:E&&E.planId};let x=Number.isFinite(E.action.priority)?E.action.priority:50,T=r[0];if(T){let C=Number.isFinite(T.plan.action.priority)?T.plan.action.priority:50;if(x<C)return s.length>=n&&s.shift(),s.push({plan:E,at:b}),c("queued",E,{behind:T.plan.planId}),{accepted:!0,queued:!0,planId:E.planId};h(T,b,"preempted")}return u(E,b),{accepted:!0,queued:!1,planId:E.planId,plan:E}}function p(_,y){let w=Math.max(1,_.duration),b=Math.max(0,Math.min(_.fadeIn||0,w*.5)),E=Math.max(0,Math.min(_.fadeOut||0,w*.5)),x=y*w,T=w-E,C=1;return b>0&&x<b&&(C=x/b),E>0&&x>T&&(C=Math.min(C,(w-x)/E)),yc(C,0,1)}function g(_,y,w,b){for(let E of y.tracks){if(!E.curve||!E.id)continue;let T=sM(E.curve,w)*(E.weight===void 0?1:E.weight)*b,C=_[E.id];E.blend==="set"?(!C||b>=C.weight)&&(_[E.id]={id:E.id,value:T,blend:"set",weight:b,ch:E.ch}):C&&C.blend==="set"?C.value+=T:_[E.id]={id:E.id,value:(C?C.value:0)+T,blend:"add",weight:Math.max(C?C.weight:0,b),ch:E.ch}}}function v(_){let y=e(),w={t:y,channels:{},actions:[],finished:[]};for(let b of r.slice()){let E=yc((y-b.t0)/Math.max(1,b.plan.duration),0,1),x=p(b.plan,E);x>0&&g(w.channels,b.plan,E,x),w.actions.push({planId:b.plan.planId,type:b.plan.action.type,progress:E,weight:x}),E>=1&&(w.finished.push(b.plan.planId),h(b,y,"done"))}if(!r.length&&s.length){let b=s.shift();u(b.plan,y),c("dequeued",b.plan)}return o=w,w}function m(_,y){let w=r.find(b=>b.plan.planId===_);return w?(h(w,e(),y||"interrupt"),!0):!1}function f(_){for(let y of r.slice())h(y,e(),_||"clear");s.length=0}function M(){return{active:r.map(_=>({planId:_.plan.planId,type:_.plan.action.type,progress:yc((e()-_.t0)/Math.max(1,_.plan.duration),0,1)})),queue:s.map(_=>({planId:_.plan.planId,type:_.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:d,tick:v,interrupt:m,clear:f,snapshot:M,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var aM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function ld(i,e={}){let t=aM[i]||i;return od({type:t,...e})}function qm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,h="stopped",d=0,p=!1,g=!1,v=null,m=null,f=null,M=i.touchBindings?.()||[],_=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(_())||_()<=0)throw new Error("Audio metadata unavailable");let y=()=>p?t.ended?t.duration>=i.duration?_()*1e3:(v||(v={at:e(),time:t.duration*1e3}),Math.min(_()*1e3,v.time+Math.max(0,e()-v.at))):t.currentTime*1e3:e(),w={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(Z=>(Z==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},b=i.sampleOptions?.()||[],E=b.find(Z=>Z.persistentState)?.id||null;w.localActions.surface_reaction={enabled:M.length>0,bindings:Object.fromEntries(M.map(Z=>{let ce=b.find(K=>K.id===Z.sampleId),z=n?.(Z.sampleId);return[Z.region,{sampleId:Z.sampleId,animationDuration:(ce?.duration||0)*1e3,voiceDuration:(z?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function x(Z,ce,z="",K=!1){f={schema:"local-surface-reaction/1",id:ce.id,kind:Z,sampleId:ce.sampleId,region:ce.touch.region,touch:ce.touch,withOriginalVoice:ce.withVoice,recovered:K,reason:z,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(f)}catch{}}let T=Xm({now:y,handlers:{onMotion:Z=>h=Z==="local-arm-preview"?"local-arm-preview":Z==="standby-D"||Z==="standby-local"?"standby-preview":"playing",onPose:(Z,ce)=>{if(Z!=="snowbreak-raise-hand")return;let z=ce.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),z.begin(),o=z,h="local-arm-preview"}catch{z?.restore(),h="arm-failed"}},onEnd:(Z,ce)=>{if(d++,Z.action.type==="surface_reaction"&&m?.id===Z.planId){let z=m;if(m=null,p&&(t.pause(),ce!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),ce==="done"){let K=!1;try{K=!!I().accepted&&h==="standby-preview"}catch{T.clear("restore-failed"),h="restore-failed"}x(K?"completed":"failed",z,K?"local-standby-restored":"local-standby-failed",K)}else x(ce.startsWith("audio-")?"failed":"cancelled",z,ce);return}if(Z.action.type==="snowbreak_standby"&&ce==="done"){I();return}if(Z.action.type==="snowbreak_arm_preview"||Z.action.type==="raise_hand"){o?.restore(),o=null,h="stopped",i.seek(0),ce==="done"&&i.startAsStandby&&I();return}if(p&&(t.pause(),ce!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),ce==="done"&&l){let z=l;l=null,L(z.id,z.time);return}h=ce==="done"?"sample-ended":"stopped",i.seek(ce==="done"?i.duration:0),ce==="done"&&(Z.action.type==="snowbreak_standby"||g)&&I()}}});function C(){if(h==="standby-preview"&&V(),T.activeCount)return{accepted:!1,reason:"sample-busy"};let Z={type:"snowbreak_sample",source:"manual-preview",priority:80};return T.dispatch(Z,w,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:Z,duration:(p?_():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function L(Z,ce=0){return b.find(z=>z.id===Z)?.persistentState&&(E=Z),V(),i.selectSample(Z),c={id:Z,time:ce},h="scene-preview",i.seek(Math.min(ce,i.duration)),{accepted:!0}}async function O(Z,{withVoice:ce=!0}={}){let z=c||l;if(!z)return{accepted:!1};V(),i.selectSample(z.id),i.seek(z.time%i.duration),i.selectSample(Z),pe(n?.(Z));let K=i.sampleOptions?.().find(ae=>ae.id===Z)?.afterScene;return l=K?{id:K,time:0}:z,g=!1,ce&&t?G():C()}function H(Z){if(c&&h==="scene-preview")return c.time+=Math.max(0,Math.min(100,Z))/1e3,i.seek(c.id==="show_03"||i.sampleOptions?.().find(K=>K.id===c.id)?.endPolicy==="hold"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let ce=p?y()/1e3:null,z=T.tick(Z);if(h==="arm-failed")return V(),h="arm-failed",z;if(z.actions.length){let K=z.actions[0];if(K.type==="snowbreak_arm_preview"||K.type==="raise_hand"){if(h==="local-arm-preview")try{o.apply(K.progress)}catch{V(),h="arm-failed"}return z}K.type==="snowbreak_standby"&&h==="standby-preview"?i.seekStandby(K.progress*i.standbyDuration):h!=="standby-preview"&&i.seek(ce===null?K.progress*i.duration:Math.min(i.duration,ce))}return z}function I(){if(E)return L(E);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};T.clear("standby-switch");let Z={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),T.dispatch(Z,w,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:Z,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function V(Z="sample-stop"){c=null,l=null,o?.restore(),o=null,d++,T.clear(Z),t&&(t.pause(),t.currentTime=0),p=!1,v=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),h="stopped"}function P(Z="right"){if(!["left","right"].includes(Z))return{accepted:!1,reason:"invalid-arm-side"};let ce=Z==="left"?i.leftArmPreview:i.armPreview;if(!ce?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(h==="standby-preview"&&V(),T.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{ce.begin(),o=ce}catch{return ce.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let z={type:"snowbreak_arm_preview",side:Z,source:"manual-preview",priority:80};return T.dispatch(z,w,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:z,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function N(Z){w.localActions.raise_hand.enabled=!!Z,!Z&&o&&V()}function Y(Z,ce={}){let z=ld(Z,ce);if(z.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let K=Ka(z,w);if(K.stopped||!K.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:K};if(h==="standby-preview"&&V(),T.activeCount)return{accepted:!1,reason:"sample-busy",plan:K};let ae=T.dispatch(z,w,K);return h==="arm-failed"?(V(),h="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:K}):ae}async function F(Z,{withVoice:ce=!0}={}){if(!M.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(T.activeCount&&h!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let z=Bm(Z,M);if(!z)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(Z.frequency)||Z.frequency<1||Z.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let K=n?.(z.sampleId)||null;if(ce&&!K)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let ae=ld("surface_reaction",{target:z.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!ce}),de=Ka(ae,w,{planId:"surface-reaction-"+ ++u});if(de.stopped||!de.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};V();try{i.selectSample(z.sampleId),pe(K)}catch{try{I()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let ue={id:de.planId,sampleId:z.sampleId,touch:Z,withVoice:!!ce},Me=++d;m=ue,v=null,p=!!ce,ce&&(r(),t.currentTime=0,s(!0));let Re=T.dispatch(ae,w,de);if(!Re.accepted)return m=null,p=!1,s(!1),{...Re,handled:!1};if(x("started",ue),!ce)return{...Re,handled:!0};try{return await t.play(),Me!==d?{accepted:!1,handled:!0,reason:"superseded"}:{...Re,handled:!0}}catch{return Me===d&&(V("audio-play-failed"),h="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function U(Z){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};V();try{let ce=i.selectSample(Z);return n&&pe(n(Z)),i.startAsStandby&&I(),{accepted:!0,...ce}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function G(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(h==="standby-preview"&&V(),T.activeCount||p)return{accepted:!1,reason:"sample-busy"};let Z=++d;r(),t.currentTime=0,v=null,p=!0,s(!0);let ce=C();try{return await t.play(),Z!==d?{accepted:!1,reason:"superseded"}:ce}catch{return Z===d&&(V("audio-play-failed"),h="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let le=()=>{p&&H(0)},fe=()=>{p&&(V("audio-error"),h="audio-failed")};function pe(Z){if(Z&&(!Number.isFinite(Z.duration)||Z.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",le),t?.removeEventListener("error",fe),t=Z||null,v=null,t?.addEventListener("ended",le),t?.addEventListener("error",fe)}return pe(t),{bus:T,capability:w,enterScene:L,playSceneReaction:O,dispatchSurfaceTouch:F,selectSample:U,setLocalActionsEnabled:N,dispatchSemantic:Y,playArmPreview:P,playSample:C,playWithVoice:G,tick:H,stop:V,enterStandby:I,setStandbyAfterSample:Z=>g=!!Z,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:f?{...f,touch:void 0}:null,sampleDuration:i.duration,status:h,active:T.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!v,originalInteractionVerified:!1})}}async function Ym(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Zm(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return oM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(h=>h.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>Ym(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}async function oM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,v]of[[e.samples,!0],[e.events,!1]])for(let m of g){let f=t.samples.find(b=>b.id===m.id),M=i.getAsset(m.assetRole),_=i.current.resources.find(b=>b.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||M?.kind!=="audio"||!_||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||v&&(!f||!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||f.sourceShowElementId!==m.sourceShowElementId))throw new Error("Bilingual voice identity mismatch");let y=m.language+":"+m.id+":"+m.eventId;if(r.has(y))throw new Error("Duplicate bilingual voice choice");r.add(y);let w=m.language+":"+m.id;n.has(w)||n.set(w,[]),n.get(w).push({hash:_.assetId,weight:m.weight,eventId:m.eventId}),s.set(_.assetId,M)}if(!r.size)throw new Error("Empty bilingual voice catalog");let c=[...s],l=0;await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;l<c.length;){let[g,v]=c[l++];try{a.set(g,await Ym(v))}catch{o.push(g)}}}));let u="Chinese",h=!1;function d(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(h)return null;let v=(n.get(u+":"+g)||[]).filter(M=>a.has(M.hash)),m=v.reduce((M,_)=>M+_.weight,0);if(!v.length||!Number.isFinite(m)||m<=0)return null;let f=Math.random()*m;for(let M of v)if(f-=M.weight,f<0)return a.get(M.hash).audio;return a.get(v.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:d,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(d(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,v])=>g.startsWith(u+":")&&v.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){h=!0;for(let g of a.values())g.dispose();a.clear()}}}var Km=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function $m(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let v=/^(surface_\d+):(\d+)$/.exec(p);return!!v&&!!Fr({mesh:v[1],triangle:Number(v[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let v=t.get(p);if(Km(v,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:v,after:g});let m=s.get(p);return Km(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function d(p,g,v){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let f of m)o(f.key,f[v]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:h,undo:()=>d(n,r,"before"),redo:()=>d(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function Jm(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=$m(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),d=document.createElement("input");d.type="checkbox",d.id="snowSurfaceEdit",h.append(d,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[U,G]of Object.entries(Vi))p.add(new Option(G,U));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),v=document.createElement("input");v.type="checkbox",v.id="snowSurfaceShow",g.append(v,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[U,G]of Object.entries(Vi)){let le=document.createElement("span");le.textContent="\u25A0 "+G+" ",le.style.color="#"+sd[U].toString(16).padStart(6,"0"),m.appendChild(le)}t.appendChild(m);let f=document.createElement("button"),M=document.createElement("button");f.id="snowSurfaceUndo",M.id="snowSurfaceRedo",f.textContent="\u64A4\u9500\u6807\u6CE8",M.textContent="\u91CD\u505A\u6807\u6CE8",t.append(f,M);let _=document.createElement("p");_.id="snowSurfaceOverlayInfo",t.appendChild(_);let y=document.createElement("button");y.id="snowSurfaceReset",y.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(y);let w=document.createElement("p");w.id="snowSurfaceStatus",w.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(w);let b=null,E=0,x=!1,T=U=>{let G=Za(U);return Fr(U,G?{[G]:l.get(G)}:{})};function C(){if(x)return;let U=l.state();f.disabled=!U.undo,M.disabled=!U.redo;let G=i.setSurfaceLabels?.(l.snapshot(),v.checked);_.textContent=v.checked?`\u5DF2\u663E\u793A ${G?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${G?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function L(){E||(E=requestAnimationFrame(()=>{E=0,C()}))}function O(){r(l.snapshot()),C()}function H(){if(!b)return;b.mode==="paint"&&l.cancel(),s.cancel();let U=b.id;b=null,e.hasPointerCapture(U)&&e.releasePointerCapture(U),C()}d.onchange=()=>{H(),d.checked&&(v.checked=!0),C()},p.onchange=H,v.onchange=C,f.onclick=()=>{H(),l.undo()&&(O(),w.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},M.onclick=()=>{H(),l.redo()&&(O(),w.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},y.onclick=()=>{H(),l.begin();for(let U of Object.keys(l.snapshot()))l.set(U,void 0);l.commit()&&O(),w.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function I(U){let G=Za(U);!G||!U.alphaVerified||(l.set(G,b.region||void 0),L(),w.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${Vi[b.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function V(U){if(b||e.dataset.snowbreakFrameEdit==="true"||!d.checked&&!o())return;U.stopPropagation();let G=i.pickSurface(U.clientX,U.clientY);if(b={id:U.pointerId,mode:d.checked?"paint":"touch",region:p.value},e.setPointerCapture(U.pointerId),b.mode==="paint"){l.begin();try{I(G)}catch(le){w.textContent=le.message}}else{let le=T(G);i.senseTouch?.(G,le),le?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:le,source:"skinned-surface"}),b.known=!0,b.hit=G):G?.alphaVerified?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),b.known=!0,b.hit=G):w.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function P(U){if(b?.id===U.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){H();return}if(U.stopPropagation(),b.mode==="paint")try{I(i.pickSurface(U.clientX,U.clientY))}catch(G){w.textContent=G.message}else b.known&&s.move({pointerId:U.pointerId,x:U.clientX,y:U.clientY})}}function N(U){if(b?.id!==U.pointerId)return;U.stopPropagation();let G=b;if(b=null,G.mode==="paint")l.commit()&&O(),w.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(G.known&&o()){let le=s.finish({pointerId:U.pointerId,x:U.clientX,y:U.clientY});le&&(le.surface=G.hit,w.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+le.regionLabel,a(le))}else s.cancel();e.hasPointerCapture(U.pointerId)&&e.releasePointerCapture(U.pointerId)}function Y(U){b?.id===U.pointerId&&H()}for(let[U,G]of[["pointerdown",V],["pointermove",P],["pointerup",N],["pointercancel",Y],["lostpointercapture",Y]])e.addEventListener(U,G);function F(U){if(!Array.isArray(U)||U.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");H(),l.begin();let G=0;try{for(let le of U){let fe=Za(le.hit);if(!fe||!le.hit.alphaVerified||l.has(fe)||l.state().count>=3e4)continue;let pe={id:le.id,source:"vision-reviewed",confidence:le.confidence,model:String(le.model||"").slice(0,128),visible:!0};Fr(le.hit,{[fe]:pe})&&(l.set(fe,pe),G++)}l.commit()&&O()}catch(le){throw l.cancel(),C(),le}return w.textContent=`\u5DF2\u91C7\u7528 ${G} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,G}return C(),{applyReviewed:F,classify:T,state:l.state,dispose(){H(),x=!0,E&&cancelAnimationFrame(E);for(let[U,G]of[["pointerdown",V],["pointermove",P],["pointerup",N],["pointercancel",Y],["lostpointercapture",Y]])e.removeEventListener(U,G)}}}var Tt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),Qm=[Tt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Tt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Tt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Tt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Tt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Tt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Tt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Tt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Tt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Tt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Tt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Tt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Tt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Tt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Tt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Tt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Tt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Tt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Tt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Tt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Tt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Tt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Tt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Tt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Tt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Tt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Tt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Tt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Tt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],jm=Object.freeze(Object.fromEntries(Qm.map(i=>[i.id,Object.freeze({...i})]))),Q1=Object.freeze(Qm.map(i=>i.id));function eg(i){return jm[i]&&jm[i].label||String(i||"\u8EAB\u4F53")}var lM="body-touch/1",cM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function tg(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...cM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(f){a=String(f||"")}function l(f){o=String(f||"screen")}function u(f){return f?(n={pointerId:f.pointerId,x0:Number(f.x)||0,y0:Number(f.y)||0,x:Number(f.x)||0,y:Number(f.y)||0,t0:e(),path:[[Number(f.x)||0,Number(f.y)||0]],region:f.region||null,confidence:Number(f.confidence)||0,source:f.source||o},{...n}):null}function h(f){if(!n||!f)return null;let M=Number(f.x)||0,_=Number(f.y)||0;return n.x=M,n.y=_,n.path.length<t.maxPath&&n.path.push([M,_]),{x:M,y:_,moved:Math.hypot(M-n.x0,_-n.y0)}}function d(){let f=0;for(let M=1;M<n.path.length;M++)f+=Math.hypot(n.path[M][0]-n.path[M-1][0],n.path[M][1]-n.path[M-1][1]);return{length:f,points:n.path.length}}function p(f,M){if(!n)return null;f&&h(f);let _=e(),y=Math.max(0,_-n.t0),w=n.x-n.x0,b=n.y-n.y0,E=Math.hypot(w,b),x=d(),T=M||"";if(!T)if(y>=t.longMinMs&&E<=t.moveTolerancePx)T="long_press";else if(E>=t.strokeMinPx&&y>=t.strokeMinMs&&x.length>=t.strokeMinPx)T="stroke";else if(E<=t.moveTolerancePx&&y<=t.tapMaxMs){let I=n.region&&(n.region.id||n.region)||"body";r&&_-r.at<=t.doubleGapMs&&r.region===I?(T="double_tap",r=null):(T="tap",r={at:_,region:I})}else T="drag";let C=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},L=typeof C=="string"?C:C.id||"body";s.push({at:_,region:L}),s=s.filter(I=>_-I.at<=t.frequencyWindowMs);let O=s.filter(I=>I.region===L).length,H={schema:lM,type:"body_touch",modelId:a,region:L,regionLabel:C.label||eg(L),side:C.side||"",group:C.group||"",gesture:T,durationMs:Math.round(y),confidence:Number(C.confidence)||0,regionSource:C.source||"fallback",source:n.source||o,frequency:O,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+w.toFixed(1),y:+b.toFixed(1)},distance:+E.toFixed(1),pathLength:+x.length.toFixed(1),at:Math.round(_)};return n=null,H}function g(){n=null}function v(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:p,cancel:g,reset:v,state:m,setModelId:c,setSource:l,config:t}}var $a=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),cd=Object.freeze({...$a,scale:3,x:-.12,y:-.02});function ud(i){return i&&Object.keys($a).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function hd(i,e,t,{onEditing:n=()=>{},initialFrame:r=cd,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0,verticalSign:l=1,dragScale:u=()=>({x:1,y:1})}={}){let h;try{h=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(ud(h)&&(!o||Number.isFinite(h.depth)&&Math.abs(h.depth)<=1.5)?h:ud(r)?r:cd);let d=document.createElement("section");d.id=a+"Editor",d.hidden=!0,d.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(d,p);let g=!1,v=null,m=0,f=null,M=null,_=new Map,y=new Map,w=document.createElement("select");w.id=a+"DragMode",w.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),w.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let b=document.createElement("div");b.textContent=s,d.append(b,w);let E=(F,U,G)=>{let le=document.createElement("button");return le.textContent=F,le.id=U.replace("presentation",a),le.onclick=G,d.append(le),le};function x(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function T(){let F=i.frameState();for(let[U,G]of y)G.value=F[U]}function C(F){i.setFrame({...i.frameState(),...F}),T()}function L(){m=0,f&&(C(f),f=null)}function O(F){f={...f||{},...F},m||(m=requestAnimationFrame(L))}function H(F){m&&(cancelAnimationFrame(m),L()),!F&&v&&C(v),x(),g=!1,d.hidden=!0,p.hidden=!0;for(let U of _.keys())e.hasPointerCapture(U)&&e.releasePointerCapture(U);_.clear(),M=null,e.dataset.snowbreakFrameEdit="false",n(!1)}E("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{C(ud(r)?r:cd),x()}),E("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{C($a),x()}),E("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{d.hidden=!0,p.hidden=!1}),E("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>H(!0)),E("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>H(!1)),p.onclick=()=>H(!0);for(let[F,U,G,le,fe]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let pe=document.createElement("label");pe.textContent=U;let Z=document.createElement("input");Z.type="range",Z.min=G,Z.max=le,Z.step=fe,Z.id=a+"_"+F,Z.style.width="100%",Z.oninput=()=>O({[F]:Number(Z.value)}),Z.onchange=()=>{L(),x()},y.set(F,Z),pe.append(Z),d.append(pe)}let I=F=>({x:F.clientX,y:F.clientY});function V(F){g&&(F.preventDefault(),F.stopImmediatePropagation(),_.set(F.pointerId,I(F)),e.setPointerCapture(F.pointerId),M={frame:i.frameState(),points:[..._.values()]})}function P(F){if(!g||!_.has(F.pointerId)||!M)return;F.preventDefault(),F.stopImmediatePropagation(),_.set(F.pointerId,I(F));let U=[..._.values()],G=M.points,le=M.frame;if(U.length>=2&&G.length>=2){let fe=pe=>Math.hypot(pe[0].x-pe[1].x,pe[0].y-pe[1].y);O({scale:le.scale*fe(U)/Math.max(5,fe(G))})}else if(U.length===1&&G.length===1){let fe=(U[0].x-G[0].x)/e.clientWidth,pe=(U[0].y-G[0].y)/e.clientHeight;O(w.value==="rotate"?{yaw:le.yaw+fe*300,pitch:le.pitch+pe*100}:{x:le.x+fe*u().x,y:le.y+pe*l*u().y})}}function N(F){!g||!_.has(F.pointerId)||(F.preventDefault(),F.stopImmediatePropagation(),_.delete(F.pointerId),e.hasPointerCapture(F.pointerId)&&e.releasePointerCapture(F.pointerId),m&&(cancelAnimationFrame(m),L()),x(),M={frame:i.frameState(),points:[..._.values()]})}let Y=[["pointerdown",V],["pointermove",P],["pointerup",N],["pointercancel",N]];for(let[F,U]of Y)e.addEventListener(F,U,!0);return{get active(){return g},toggle(){if(g){H(!0);return}g=!0,v=i.frameState(),T(),d.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&H(!0)},dispose(){g&&H(!0);for(let[F,U]of Y)e.removeEventListener(F,U,!0);d.remove(),p.remove()},state:()=>i.frameState()}}var sg=!0,si=document.querySelector("#stage"),ng=document.querySelector("#status"),Gi=document.querySelector("#editor"),Or=null,Zs=null,ig=Promise.resolve(),fd={},pd="Chinese",Mi=0,gd="",md,Ne,st,On,vc,Fn,bi,ja,At,_c=0,An=!1,Ja=!0,Br=_d(i=>yd(At,i.tempo,performance.now())),Si=document.createElement("button");Si.id="finishPaint";Si.hidden=!0;Si.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(Si);function $s(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),Si.hidden=!0,Gi.classList.remove("open")}Si.onclick=$s;var ln=i=>{let e={...i,nonce:gd};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},dd=i=>{ng.textContent=i,ng.hidden=!i};function bc(){window.__snowbreakMigration=null,Zs=null,bi?.dispose(),bi=null,Br.close(),At=null,Si.hidden=!0,Fn?.dispose(),ja?.dispose(),vc?.dispose(),st?.stop("renderer-close"),On?.dispose(),Ne?.dispose(),md?.dispose(),ja=Fn=vc=st=On=Ne=md=null,Gi.replaceChildren()}function rg(i,e,t){let n=++Mi,r=ig.catch(()=>{}).then(()=>n===Mi?uM(i,e,t,n):void 0);return ig=r,r}async function uM(i,e,t,n){gd=e,An=!1,si.dataset.snowbreakPaused="false",bc(),dd("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026");let r,s,a;try{if(t){if(!Or)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Or.selectVariant(t)}else{Or=null;let y=await fetch(i);if(!y.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await df(new Uint8Array(await y.arrayBuffer()))}if(!["Enya","Fenny"].includes(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await zm(si,r.runtime,{isCurrent:()=>n===Mi}),a=r.runtime.getAsset("voiceCatalog")?await Zm(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==Mi){s.dispose(),a.dispose(),r.runtime.dispose();return}Or=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),md=r.runtime,Ne=s,On=a,Ne.setRenderBudget(fd),On.setLanguage?.(pd);let o=Ne.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,st=qm(Ne,{audioForSample:y=>On.getAudio(y)}),Ne.sceneInteractions.configure({beforeDrag:()=>{At=null,Ne.embodiment.releaseHands(),Ne.resetSenses()},scene:()=>st.snapshot().sceneId||Ne.editingScene,reaction:y=>{st.playSceneReaction(y,{withVoice:Ja})},voice:y=>{if(Ja){let w=On.getAudio(y);w&&(w.currentTime=0,w.play().catch(()=>{}))}},event:ln}),Ne.showFaceCandidate(!0);let c=Ne.sampleOptions().find(y=>y.id===Ne.sampleState().sampleId),l="resting-scene:"+r.manifest.characterId+":"+r.selection?.mode,u=localStorage.getItem(l);c?.persistentState?st.enterScene(Ne.sampleOptions().some(y=>y.id===u&&y.persistentState)?u:c.id):st.enterStandby(),Ne.sceneSelectionKey=l,Ne.faceViewer(),_c=performance.now();let h=null,d=y=>{if(ln({type:"editing",active:y}),y){let w=st.snapshot();h=w.sceneId?{id:w.sceneId,time:w.sceneTime}:null,Ne.editingScene=h?.id||null,Ne.sceneInteractions.cancel(),st.stop("placement-edit"),h&&(Ne.selectSample(h.id),Ne.seek(h.time%Ne.duration)),$s()}else An||(h?st.enterScene(h.id,h.time):st.enterStandby(),h=null,Ne.editingScene=null)},p=()=>{bi?.dispose();let y=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";bi=hd({setFrame:Ne.setModelFrame,frameState:Ne.modelFrameState},si,"model-placement:"+y+r.selection?.mode+":"+(st.snapshot().sceneId||"main"),{initialFrame:{...$a,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Ne.modelDragScale,onEditing:d})};Ne.setupModelEditor=p,p(),Fn=hd(Ne,si,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:Ne.presentationDefault,onEditing:d}),ja=vd(Ne,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let g="";Ne.setFrameHandler(()=>{let y=performance.now();if(An||st.tick(Math.min(100,Math.max(0,y-_c))),_c=y,!An&&At){let x=no(At,y),T=At.duration,C=At.stop===void 0?1:Math.max(0,1-(y-At.stop)/300);if(x>=T||C===0)At=null;else{let L=Math.max(0,Math.min(1,x/.3,(T-x)/(.3*At.rate),C)),O=L*L*(3-2*L);Ne.applyLearnedMotion(At.id,x,O,{amplitude:Br.get().amplitude})}}let w=st.snapshot(),b=At?"learned:"+At.id:w.status,E=b+":"+(w.sceneId||"")+":"+Ne.sampleState().sampleId;E!==g&&(g=E,ln({type:"selfState",state:Ks()}),ln({type:"playback",active:!!At||["playing","scene-preview","local-arm-preview"].includes(w.status),status:b,label:Ne.sampleOptions().find(x=>x.id===Ne.sampleState().sampleId)?.label}))});let v=r.manifest.resources.filter(y=>y.kind==="geometry").map(y=>y.assetId).join("-"),m="surface:"+r.manifest.skinId+":"+v;vc=Jm(Ne,si,Gi,{load:()=>JSON.parse(localStorage.getItem(m)||"{}"),save:y=>localStorage.setItem(m,JSON.stringify(y)),tracker:tg({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!An,onEvent:async y=>{n!==Mi||An||(ln({type:"touch",region:y.region,label:y.regionLabel,gesture:y.gesture,confidence:y.confidence,source:y.regionSource,durationMs:y.durationMs,frequency:y.frequency,completed:!0}),sg||await st.dispatchSurfaceTouch(y,{withVoice:Ja}))}});let f=document.createElement("button");f.textContent="\u5173\u95ED\u5DE5\u5177",f.onclick=$s,Gi.prepend(f);let M=Gi.querySelector("#snowSurfaceRegion"),_=Gi.querySelector("#snowSurfaceEdit");_.addEventListener("change",()=>{_.checked&&(Gi.classList.remove("open"),Si.textContent="\u5B8C\u6210"+M.selectedOptions[0].textContent+"\u6807\u6CE8",Si.hidden=!1)}),dd(""),ln({type:"ready",bodyActions:[...Ne.embodiment.snapshot().available,...Ne.sceneInteractions.available()],selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Ne.sampleOptions().map(y=>y.id),voices:On.snapshot().available,learned:Ne.learnedOptions().map(y=>y.id)}),window.__snowbreakMigration={display:Ne,adapter:st,voices:On,editor:vc,presentation:Fn,manifest:r.manifest}}catch(o){if(n!==Mi){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}bc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),dd("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),ln({type:"error",message:String(o.message||o)})}}async function hM(i){if(i.type==="hardwareBudget"){fd={thermal:i.thermal,lowPower:i.lowPower},Ne?.setRenderBudget(fd);return}if(i.type==="dispose"){Mi++,bc();return}if(i.type==="load")return rg(i.url,i.nonce);if(i.type==="variant")return Or?.variants.some(e=>e.id===i.id)?rg(null,gd,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(pd=i.language==="ja"?"Japanese":"Chinese",st){let e=st.snapshot();st.stop("voice-language-change"),On?.setLanguage?.(pd),e.sceneId?st.enterScene(e.sceneId,e.sceneTime):st.enterStandby()}return}if(st){if(["body","gesture","sample","learned","stop"].includes(i.type)){On?.stop?.();let e=Ne.sceneInteractions.snapshot();if(i.automatic&&(bi?.active||Fn?.active||e.active||e.recovering)){ln({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}bi?.close(),Fn?.close()}if(i.type==="body"){if(An)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Ne.sceneInteractions.available().includes(i.id)){Ne.sceneInteractions.command(i.id),ln({type:"selfState",state:Ks(),requestId:i.requestId});return}let e=Mi;if(At=null,st.snapshot().sceneId||(st.stop("body-command"),st.enterStandby()),Ne.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==Mi)return;ln({type:"selfState",state:Ks(),requestId:i.requestId});return}if(i.type==="gesture"){if(An)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");At=null,st.snapshot().sceneId||(st.stop("ai-gesture"),st.enterStandby()),Ne.embodiment.playGesture(i.id,i.plan),ln({type:"selfState",state:Ks()});return}if(i.type==="touchPolicy"){sg=!!i.aiControlled;return}if(i.type==="danceSettings"){Br.set(i);return}if(i.type==="danceEdit"){Br.toggle();return}if(i.type==="speechLevel"){Ne.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Ne.setGaze(i.x,i.y);return}if(i.type==="pause"){if(An)return;On?.stop?.(),bi?.close(),Br.close();let e=st.snapshot();Zs=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Ne.sceneInteractions.suspend(),Ne.embodiment.reset(),Ne.resetSenses(),At=null,An=!0,ja?.close(),Fn?.close(),si.dataset.snowbreakPaused="true",st.stop("background"),$s();return}if(i.type==="resume"){if(!An)return;An=!1,si.dataset.snowbreakPaused="false",_c=performance.now(),Zs?(st.enterScene(Zs.id,Zs.time),Zs=null):st.enterStandby();return}if(i.type==="stop"){if(Ne.embodiment.reset(),At){At.stop=performance.now();return}st.stop(),st.enterStandby();return}if(i.type==="officialTouchPoints"){Ne.sceneInteractions.togglePoints()||ln({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){At=null,Fn.close(),Gi.classList.contains("open")||!Si.hidden?$s():Gi.classList.add("open");return}if(i.type==="lightingEdit"){Fn.close(),$s(),ja.toggle();return}if(i.type==="modelEdit"){At=null,Fn.close(),bi.toggle();return}if(i.type==="modelFrame"){Ne.setModelFrame(i.frame);return}if(i.type==="frameEdit"){At=null,bi.close(),Fn.toggle();return}if(i.type==="scene")return Ne.setSceneVisible(!!i.visible);if(i.type==="room")return Ne.setRoomVisible(!!i.visible);if(i.type==="voice"){if(Ja=!!i.enabled,!Ja){On?.stop?.();let e=st.snapshot().sceneId;st.stop("voice-disabled"),e?st.enterScene(e):st.enterStandby()}return}if(i.type==="sample"&&Ne.sampleOptions().some(e=>e.id===i.id)){if(Ne.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Ne.sampleOptions().find(t=>t.id===i.id)?.persistentState){At=null,bi.close(),Ne.embodiment.reset(),st.enterScene(i.id),Ne.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Ne.sceneSelectionKey,i.id),Ne.setupModelEditor(),ln({type:"selfState",state:Ks()});return}if(st.snapshot().sceneId){let t=i.id==="head"?Ne.sceneInteractions.headReaction():null;await st.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Ne.embodiment.releaseHands(),At=null,Fn.close(),An=!1,st.stop(),st.selectSample(i.id),st.setStandbyAfterSample(!0),(i.withVoice&&On.getAudio(i.id)?await st.playWithVoice():st.playSample()).accepted||ln({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Ne.embodiment.releaseHands();let e=Ne.learnedOptions().find(t=>t.id===i.id);if(!e)return;Fn.close(),st.stop("learned-motion"),st.enterStandby(),At={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Br.get().tempo:1}}}}function Ks(){if(!Ne)return null;let i=Ne.embodiment.snapshot(),e=st?.snapshot(),t=Ne.sampleOptions().find(r=>r.id===Ne.sampleState().sampleId),n=Ne.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:At?{id:At.id,time:no(At,performance.now()),rate:At.rate,amplitude:Br.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Or?.selection?.outfit||"unknown",mode:Or?.selection?.mode||"unknown"}}function dM(){if(!Ne||An)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(si.width,si.height);i.width=Math.round(si.width*e),i.height=Math.round(si.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Ne.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:Ks,portrait:dM,performance:()=>Ne?.performanceState(),receive:i=>{hM(i).catch(e=>ln({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{Mi++,bc()});ln({type:"pageReady"});})();
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
