(()=>{var og=Object.defineProperty;var lg=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var cg=(i,e)=>{for(var t in e)og(i,t,{get:e[t],enumerable:!0})};var df={};cg(df,{AsyncCompress:()=>xg,AsyncDecompress:()=>bg,AsyncDeflate:()=>jd,AsyncGunzip:()=>ef,AsyncGzip:()=>xg,AsyncInflate:()=>Wc,AsyncUnzipInflate:()=>Lg,AsyncUnzlib:()=>nf,AsyncZipDeflate:()=>Ag,AsyncZlib:()=>_g,Compress:()=>Ic,DecodeUTF8:()=>wg,Decompress:()=>Uc,Deflate:()=>Vn,EncodeUTF8:()=>Eg,FlateErrorCode:()=>mg,Gunzip:()=>co,Gzip:()=>Ic,Inflate:()=>_n,Unzip:()=>Ng,UnzipInflate:()=>Pg,UnzipPassThrough:()=>hf,Unzlib:()=>ho,Zip:()=>Rg,ZipDeflate:()=>Tg,ZipPassThrough:()=>Qs,Zlib:()=>Lc,compress:()=>yg,compressSync:()=>Pc,decompress:()=>Mg,decompressSync:()=>Sg,deflate:()=>Qd,deflateSync:()=>ia,gunzip:()=>tf,gunzipSync:()=>uo,gzip:()=>yg,gzipSync:()=>Pc,inflate:()=>Xc,inflateSync:()=>jr,strFromU8:()=>Yc,strToU8:()=>Yi,unzip:()=>Ug,unzipSync:()=>Dg,unzlib:()=>rf,unzlibSync:()=>fo,zip:()=>Cg,zipSync:()=>Ig,zlib:()=>vg,zlibSync:()=>Nc});function hr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function Qd(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Kr],function(n){return Zi(ia(n.data[0],n.data[1]))},0,t)}function ia(i,e){return ur(i,e||{},0,0)}function Xc(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Zr],function(n){return Zi(jr(n.data[0],Bc(n.data[1])))},1,t)}function jr(i,e){return ta(i,{i:2},e&&e.out,e&&e.dictionary)}function yg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Kr,Yd,function(){return[Pc]}],function(n){return Zi(Pc(n.data[0],n.data[1]))},2,t)}function Pc(i,e){e||(e={});var t=Yr(),n=i.length;t.p(i);var r=ur(i,e,Hc(e),8),s=r.length;return kc(r,e),vt(r,s-8,t.d()),vt(r,s-4,n),r}function tf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Zr,Zd,function(){return[uo]}],function(n){return Zi(uo(n.data[0],n.data[1]))},3,t)}function uo(i,e){var t=zc(i);return t+8>i.length&&je(6,"invalid gzip data"),ta(i.subarray(t,-8),{i:2},e&&e.out||new ct(Jd(i)),e&&e.dictionary)}function vg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Kr,Kd,function(){return[Nc]}],function(n){return Zi(Nc(n.data[0],n.data[1]))},4,t)}function Nc(i,e){e||(e={});var t=mo();t.p(i);var n=ur(i,e,e.dictionary?6:2,4);return Vc(n,e),vt(n,n.length-4,t.d()),n}function rf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),$r(i,e,[Zr,$d,function(){return[fo]}],function(n){return Zi(fo(n.data[0],Bc(n.data[1])))},5,t)}function fo(i,e){return ta(i.subarray(Gc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Mg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),i[0]==31&&i[1]==139&&i[2]==8?tf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Xc(i,e,t):rf(i,e,t)}function Sg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?uo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?jr(i,e):fo(i,e)}function Yi(i,e){if(e){for(var t=new ct(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Nd)return Nd.encode(i);for(var r=i.length,s=new ct(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new ct(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Hn(s,0,a)}function Yc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Dc)return Dc.decode(i);var r=af(i),s=r.s,t=r.r;return t.length&&je(8),s}}function Cg(i,e,t){t||(t=e,e={}),typeof t!="function"&&je(7);var n={};qc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},d=function(m,f){po(function(){t(m,f)})};po(function(){d=t});var p=function(){var m=new ct(o+22),f=a,b=o-a;o=0;for(var S=0;S<c;++S){var x=l[S];try{var w=x.c.length;Gr(m,o,x,x.f,x.u,w);var v=30+x.f.length+qi(x.extra),T=o+v;m.set(x.c,T),Gr(m,a,x,x.f,x.u,w,o,x.m),a+=16+v+(x.m?x.m.length:0),o=T+w}catch(_){return d(_,null)}}Zc(m,a,l.length,b,f),d(null,m)};s||p();for(var g=function(m){var f=r[m],b=n[f],S=b[0],x=b[1],w=Yr(),v=S.length;w.p(S);var T=Yi(f),_=T.length,E=x.comment,R=E&&Yi(E),I=R&&R.length,F=qi(x.extra),B=x.level==0?0:8,N=function(z,L){if(z)h(),d(z,null);else{var P=L.length;l[m]=na(x,{size:v,crc:w.d(),c:L,f:T,m:R,u:_!=f.length||R&&E.length!=I,compression:B}),a+=30+_+F+P,o+=76+2*(_+F)+(I||0)+P,--s||p()}};if(_>65535&&N(je(11,0,1),null),!B)N(null,S);else if(v<16e4)try{N(null,ia(S,x))}catch(z){N(z,null)}else u.push(Qd(S,x,N))},M=0;M<c;++M)g(M);return h}function Ig(i,e){e||(e={});var t={},n=[];qc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=Yi(a),d=h.length,p=l.comment,g=p&&Yi(p),M=g&&g.length,m=qi(l.extra);d>65535&&je(11);var f=u?ia(c,l):c,b=f.length,S=Yr();S.p(c),n.push(na(l,{size:c.length,crc:S.d(),c:f,f:h,m:g,u:d!=a.length||g&&p.length!=M,o:r,compression:u})),r+=30+d+m+b,s+=76+2*(d+m)+(M||0)+b}for(var x=new ct(s+22),w=r,v=s-r,T=0;T<n.length;++T){var h=n[T];Gr(x,h.o,h,h.f,h.u,h.c.length);var _=30+h.f.length+qi(h.extra);x.set(h.c,h.o+_),Gr(x,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+_+(h.m?h.m.length:0)}return Zc(x,r,n.length,v,w),x}function Ug(i,e,t){t||(t=e,e={}),typeof t!="function"&&je(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,f){po(function(){t(m,f)})};po(function(){a=t});for(var o=i.length-22;Bt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(je(13,0,1),null),r;var c=dn(i,o+8);if(c){var l=c,u=Bt(i,o+16),h=u==4294967295||l==65535;if(h){var d=Bt(i,o-12);h=Bt(i,d)==101075792,h&&(l=c=Bt(i,d+32),u=Bt(i,d+48))}for(var p=e&&e.filter,g=function(m){var f=cf(i,u,h),b=f[0],S=f[1],x=f[2],w=f[3],v=f[4],T=f[5],_=lf(i,T);u=v;var E=function(I,F){I?(r(),a(I,null)):(F&&(s[w]=F),--c||a(null,s))};if(!p||p({name:w,size:S,originalSize:x,compression:b}))if(!b)E(null,Hn(i,_,_+S));else if(b==8){var R=i.subarray(_,_+S);if(x<524288||S>.8*x)try{E(null,jr(R,{out:new ct(x)}))}catch(I){E(I,null)}else n.push(Xc(R,{size:x},E))}else E(je(14,"unknown compression type "+b,1),null);else E(null,null)},M=0;M<l;++M)g(M)}else a(null,{});return r}function Dg(i,e){for(var t={},n=i.length-22;Bt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&je(13);var r=dn(i,n+8);if(!r)return{};var s=Bt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Bt(i,n-12);a=Bt(i,o)==101075792,a&&(r=Bt(i,o+32),s=Bt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=cf(i,s,a),h=u[0],d=u[1],p=u[2],g=u[3],M=u[4],m=u[5],f=lf(i,m);s=M,(!c||c({name:g,size:d,originalSize:p,compression:h}))&&(h?h==8?t[g]=jr(i.subarray(f,f+d),{out:new ct(p)}):je(14,"unknown compression type "+h):t[g]=Hn(i,f,f+d))}return t}var Pd,pg,ct,fn,ea,Wr,Xr,Js,Ud,Dd,Fc,oo,Fd,Od,Ac,js,Si,bt,zn,wi,bt,bt,bt,bt,Vr,bt,Bd,kd,zd,Hd,ro,kn,so,qr,Hn,mg,Vd,je,ta,oi,zr,ao,lo,Rc,Hr,Oc,Cc,Gd,Xi,Wd,Xd,Yr,mo,ur,na,Ld,io,gg,qd,Zr,Kr,Yd,Zd,Kd,$d,Zi,Bc,$r,Gn,Jr,dn,Bt,Tc,vt,kc,zc,Jd,Hc,Vc,Gc,Vn,jd,_n,Wc,Ic,xg,co,ef,Lc,_g,ho,nf,Uc,bg,qc,Nd,Dc,sf,af,wg,Eg,of,lf,cf,uf,qi,Gr,Zc,Qs,Tg,Ag,Rg,hf,Pg,Lg,Ng,po,ff=lg(()=>{Pd={},pg=(function(i,e,t,n,r){var s=new Worker(Pd[e]||(Pd[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),ct=Uint8Array,fn=Uint16Array,ea=Int32Array,Wr=new ct([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xr=new ct([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Js=new ct([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ud=function(i,e){for(var t=new fn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ea(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Dd=Ud(Wr,2),Fc=Dd.b,oo=Dd.r;Fc[28]=258,oo[258]=28;Fd=Ud(Xr,0),Od=Fd.b,Ac=Fd.r,js=new fn(32768);for(bt=0;bt<32768;++bt)Si=(bt&43690)>>1|(bt&21845)<<1,Si=(Si&52428)>>2|(Si&13107)<<2,Si=(Si&61680)>>4|(Si&3855)<<4,js[bt]=((Si&65280)>>8|(Si&255)<<8)>>1;zn=(function(i,e,t){for(var n=i.length,r=0,s=new fn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new fn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new fn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[js[h]>>c]=l}else for(o=new fn(n),r=0;r<n;++r)i[r]&&(o[r]=js[a[i[r]-1]++]>>15-i[r]);return o}),wi=new ct(288);for(bt=0;bt<144;++bt)wi[bt]=8;for(bt=144;bt<256;++bt)wi[bt]=9;for(bt=256;bt<280;++bt)wi[bt]=7;for(bt=280;bt<288;++bt)wi[bt]=8;Vr=new ct(32);for(bt=0;bt<32;++bt)Vr[bt]=5;Bd=zn(wi,9,0),kd=zn(wi,9,1),zd=zn(Vr,5,0),Hd=zn(Vr,5,1),ro=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},kn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},so=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},qr=function(i){return(i+7)/8|0},Hn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ct(i.subarray(e,t))},mg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Vd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],je=function(i,e,t){var n=new Error(e||Vd[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,je),!t)throw n;return n},ta=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ct(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new ct(r*3));var l=function(fe){var me=t.length;if(fe>me){var Me=new ct(Math.max(me*2,fe));Me.set(t),t=Me}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,g=e.d,M=e.m,m=e.n,f=r*8;do{if(!p){u=kn(i,h,1);var b=kn(i,h+1,3);if(h+=3,b)if(b==1)p=kd,g=Hd,M=9,m=5;else if(b==2){var v=kn(i,h,31)+257,T=kn(i,h+10,15)+4,_=v+kn(i,h+5,31)+1;h+=14;for(var E=new ct(_),R=new ct(19),I=0;I<T;++I)R[Js[I]]=kn(i,h+I*3,7);h+=T*3;for(var F=ro(R),B=(1<<F)-1,N=zn(R,F,1),I=0;I<_;){var z=N[kn(i,h,B)];h+=z&15;var S=z>>4;if(S<16)E[I++]=S;else{var L=0,P=0;for(S==16?(P=3+kn(i,h,3),h+=2,L=E[I-1]):S==17?(P=3+kn(i,h,7),h+=3):S==18&&(P=11+kn(i,h,127),h+=7);P--;)E[I++]=L}}var Y=E.subarray(0,v),O=E.subarray(v);M=ro(Y),m=ro(O),p=zn(Y,M,1),g=zn(O,m,1)}else je(1);else{var S=qr(h)+4,x=i[S-4]|i[S-3]<<8,w=S+x;if(w>r){c&&je(0);break}o&&l(d+x),t.set(i.subarray(S,w),d),e.b=d+=x,e.p=h=w*8,e.f=u;continue}if(h>f){c&&je(0);break}}o&&l(d+131072);for(var U=(1<<M)-1,G=(1<<m)-1,ae=h;;ae=h){var L=p[so(i,h)&U],de=L>>4;if(h+=L&15,h>f){c&&je(0);break}if(L||je(2),de<256)t[d++]=de;else if(de==256){ae=h,p=null;break}else{var ue=de-254;if(de>264){var I=de-257,K=Wr[I];ue=kn(i,h,(1<<K)-1)+Fc[I],h+=K}var le=g[so(i,h)&G],H=le>>4;le||je(3),h+=le&15;var O=Od[H];if(H>3){var K=Xr[H];O+=so(i,h)&(1<<K)-1,h+=K}if(h>f){c&&je(0);break}o&&l(d+131072);var $=d+ue;if(d<O){var xe=s-O,Ne=Math.min(O,$);for(xe+d<0&&je(3);d<Ne;++d)t[d]=n[xe+d]}for(;d<$;++d)t[d]=t[d-O]}}e.l=p,e.p=ae,e.b=d,e.f=u,p&&(u=1,e.m=M,e.d=g,e.n=m)}while(!u);return d!=t.length&&a?Hn(t,0,d):t.subarray(0,d)},oi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},zr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},ao=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Xi,l:0};if(r==1){var a=new ct(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(w,v){return w.f-v.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=s[0].s,n=1;n<r;++n)s[n].s>d&&(d=s[n].s);var p=new fn(d+1),g=lo(t[u-1],p,0);if(g>e){var n=0,M=0,m=g-e,f=1<<m;for(s.sort(function(v,T){return p[T.s]-p[v.s]||v.f-T.f});n<r;++n){var b=s[n].s;if(p[b]>e)M+=f-(1<<g-p[b]),p[b]=e;else break}for(M>>=m;M>0;){var S=s[n].s;p[S]<e?M-=1<<e-p[S]++-1:++n}for(;n>=0&&M;--n){var x=s[n].s;p[x]==e&&(--p[x],++M)}g=e}return{t:new ct(p),l:g}},lo=function(i,e,t){return i.s==-1?Math.max(lo(i.l,e,t+1),lo(i.r,e,t+1)):e[i.s]=t},Rc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new fn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Hr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Oc=function(i,e,t){var n=t.length,r=qr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Cc=function(i,e,t,n,r,s,a,o,c,l,u){oi(e,u++,t),++r[256];for(var h=ao(r,15),d=h.t,p=h.l,g=ao(s,15),M=g.t,m=g.l,f=Rc(d),b=f.c,S=f.n,x=Rc(M),w=x.c,v=x.n,T=new fn(19),_=0;_<b.length;++_)++T[b[_]&31];for(var _=0;_<w.length;++_)++T[w[_]&31];for(var E=ao(T,7),R=E.t,I=E.l,F=19;F>4&&!R[Js[F-1]];--F);var B=l+5<<3,N=Hr(r,wi)+Hr(s,Vr)+a,z=Hr(r,d)+Hr(s,M)+a+14+3*F+Hr(T,R)+2*T[16]+3*T[17]+7*T[18];if(c>=0&&B<=N&&B<=z)return Oc(e,u,i.subarray(c,c+l));var L,P,Y,O;if(oi(e,u,1+(z<N)),u+=2,z<N){L=zn(d,p,0),P=d,Y=zn(M,m,0),O=M;var U=zn(R,I,0);oi(e,u,S-257),oi(e,u+5,v-1),oi(e,u+10,F-4),u+=14;for(var _=0;_<F;++_)oi(e,u+3*_,R[Js[_]]);u+=3*F;for(var G=[b,w],ae=0;ae<2;++ae)for(var de=G[ae],_=0;_<de.length;++_){var ue=de[_]&31;oi(e,u,U[ue]),u+=R[ue],ue>15&&(oi(e,u,de[_]>>5&127),u+=de[_]>>12)}}else L=Bd,P=wi,Y=zd,O=Vr;for(var _=0;_<o;++_){var K=n[_];if(K>255){var ue=K>>18&31;zr(e,u,L[ue+257]),u+=P[ue+257],ue>7&&(oi(e,u,K>>23&31),u+=Wr[ue]);var le=K&31;zr(e,u,Y[le]),u+=O[le],le>3&&(zr(e,u,K>>5&8191),u+=Xr[le])}else zr(e,u,L[K]),u+=P[K]}return zr(e,u,L[256]),u+P[256]},Gd=new ea([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Xi=new ct(0),Wd=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ct(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=Gd[e-1],d=h>>13,p=h&8191,g=(1<<t)-1,M=s.p||new fn(32768),m=s.h||new fn(g+1),f=Math.ceil(t/3),b=2*f,S=function(Ie){return(i[Ie]^i[Ie+1]<<f^i[Ie+2]<<b)&g},x=new ea(25e3),w=new fn(288),v=new fn(32),T=0,_=0,E=s.i||0,R=0,I=s.w||0,F=0;E+2<a;++E){var B=S(E),N=E&32767,z=m[B];if(M[N]=z,m[B]=N,I<=E){var L=a-E;if((T>7e3||R>24576)&&(L>423||!l)){u=Cc(i,c,0,x,w,v,_,R,F,E-F,u),R=T=_=0,F=E;for(var P=0;P<286;++P)w[P]=0;for(var P=0;P<30;++P)v[P]=0}var Y=2,O=0,U=p,G=N-z&32767;if(L>2&&B==S(E-G))for(var ae=Math.min(d,L)-1,de=Math.min(32767,E),ue=Math.min(258,L);G<=de&&--U&&N!=z;){if(i[E+Y]==i[E+Y-G]){for(var K=0;K<ue&&i[E+K]==i[E+K-G];++K);if(K>Y){if(Y=K,O=G,K>ae)break;for(var le=Math.min(G,K-2),H=0,P=0;P<le;++P){var $=E-G+P&32767,xe=M[$],Ne=$-xe&32767;Ne>H&&(H=Ne,z=$)}}}N=z,z=M[N],G+=N-z&32767}if(O){x[R++]=268435456|oo[Y]<<18|Ac[O];var fe=oo[Y]&31,me=Ac[O]&31;_+=Wr[fe]+Xr[me],++w[257+fe],++v[me],I=E+Y,++T}else x[R++]=i[E],++w[i[E]]}}for(E=Math.max(E,I);E<a;++E)x[R++]=i[E],++w[i[E]];u=Cc(i,c,l,x,w,v,_,R,F,E-F,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=M,s.i=E,s.w=I)}else{for(var E=s.w||0;E<a+l;E+=65535){var Me=E+65535;Me>=a&&(c[u/8|0]=l,Me=a),u=Oc(c,u+1,i.subarray(E,Me))}s.i=a}return Hn(o,0,n+qr(u)+r)},Xd=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Yr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Xd[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},mo=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},ur=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ct(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Wd(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},na=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Ld=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var h in o.prototype)e+=";"+c+".prototype."+h+"="+o.prototype[h].toString()}else e+=l}else t[c]=o}return e},io=[],gg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},qd=function(i,e,t,n){if(!io[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Ld(i[o],r,s);io[t]={c:Ld(i[a],r,s),e:s}}var c=na({},io[t].e);return pg(io[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,gg(c),n)},Zr=function(){return[ct,fn,ea,Wr,Xr,Js,Fc,Od,kd,Hd,js,Vd,zn,ro,kn,so,qr,Hn,je,ta,jr,Zi,Bc]},Kr=function(){return[ct,fn,ea,Wr,Xr,Js,oo,Ac,Bd,wi,zd,Vr,js,Gd,Xi,zn,oi,zr,ao,lo,Rc,Hr,Oc,Cc,qr,Hn,Wd,ur,ia,Zi]},Yd=function(){return[kc,Hc,vt,Yr,Xd]},Zd=function(){return[zc,Jd]},Kd=function(){return[Vc,vt,mo]},$d=function(){return[Gc]},Zi=function(i){return postMessage(i,[i.buffer])},Bc=function(i){return i&&{out:i.size&&new ct(i.size),dictionary:i.dictionary}},$r=function(i,e,t,n,r,s){var a=qd(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Gn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},Jr=function(i,e,t,n,r,s,a){var o,c=qd(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||je(5),o&&e.ondata(je(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},dn=function(i,e){return i[e]|i[e+1]<<8},Bt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Tc=function(i,e){return Bt(i,e)+Bt(i,e+4)*4294967296},vt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},kc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&vt(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},zc=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&je(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Jd=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Hc=function(i){return 10+(i.filename?i.filename.length+1:0)},Vc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=mo();r.p(e.dictionary),vt(i,2,r.d())}},Gc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&je(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&je(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Vn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ct(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(ur(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||je(5),this.s.l&&je(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ct(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||je(5),this.s.l&&je(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),jd=(function(){function i(e,t){Jr([Kr,function(){return[Gn,Vn]}],this,hr.call(this,e,t),function(n){var r=new Vn(n.data);onmessage=Gn(r)},6,1)}return i})();_n=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ct(32768),this.p=new ct(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||je(5),this.d&&je(4),!this.p.length)this.p=e;else if(e.length){var t=new ct(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=ta(this.p,this.s,this.o);this.ondata(Hn(n,t,this.s.b),this.d),this.o=Hn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Hn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Wc=(function(){function i(e,t){Jr([Zr,function(){return[Gn,_n]}],this,hr.call(this,e,t),function(n){var r=new _n(n.data);onmessage=Gn(r)},7,0)}return i})();Ic=(function(){function i(e,t){this.c=Yr(),this.l=0,this.v=1,Vn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Vn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ur(e,this.o,this.v&&Hc(this.o),t&&8,this.s);this.v&&(kc(n,this.o),this.v=0),t&&(vt(n,n.length-8,this.c.d()),vt(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Vn.prototype.flush.call(this)},i})(),xg=(function(){function i(e,t){Jr([Kr,Yd,function(){return[Gn,Vn,Ic]}],this,hr.call(this,e,t),function(n){var r=new Ic(n.data);onmessage=Gn(r)},8,1)}return i})();co=(function(){function i(e,t){this.v=1,this.r=0,_n.call(this,e,t)}return i.prototype.push=function(e,t){if(_n.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?zc(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}_n.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=qr(this.s.p)+9,this.s={i:0},this.o=new ct(0),this.push(new ct(0),t))},i})(),ef=(function(){function i(e,t){var n=this;Jr([Zr,Zd,function(){return[Gn,_n,co]}],this,hr.call(this,e,t),function(r){var s=new co(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Gn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Lc=(function(){function i(e,t){this.c=mo(),this.v=1,Vn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Vn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ur(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Vc(n,this.o),this.v=0),t&&vt(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Vn.prototype.flush.call(this)},i})(),_g=(function(){function i(e,t){Jr([Kr,Kd,function(){return[Gn,Vn,Lc]}],this,hr.call(this,e,t),function(n){var r=new Lc(n.data);onmessage=Gn(r)},10,1)}return i})();ho=(function(){function i(e,t){_n.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(_n.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Gc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&je(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),_n.prototype.c.call(this,t)},i})(),nf=(function(){function i(e,t){Jr([Zr,$d,function(){return[Gn,_n,ho]}],this,hr.call(this,e,t),function(n){var r=new ho(n.data);onmessage=Gn(r)},11,0)}return i})();Uc=(function(){function i(e,t){this.o=hr.call(this,e,t)||{},this.G=co,this.I=_n,this.Z=ho}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||je(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),bg=(function(){function i(e,t){Uc.call(this,e,t),this.queuedSize=0,this.G=ef,this.I=Wc,this.Z=nf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,Uc.prototype.push.call(this,e,t)},i})();qc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=na(n,s[1]),s=s[0]),s instanceof ct?t[a]=[s,o]:(t[a+="/"]=[new ct(0),o],qc(s,a,t,n))}},Nd=typeof TextEncoder<"u"&&new TextEncoder,Dc=typeof TextDecoder<"u"&&new TextDecoder,sf=0;try{Dc.decode(Xi,{stream:!0}),sf=1}catch{}af=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Hn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},wg=(function(){function i(e){this.ondata=e,sf?this.t=new TextDecoder:this.p=Xi}return i.prototype.push=function(e,t){if(this.ondata||je(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&je(8),this.t=null);return}this.p||je(4);var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=af(n),s=r.s,a=r.r;t?(a.length&&je(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),Eg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||je(5),this.d&&je(4),this.ondata(Yi(e),this.d=t||!1)},i})();of=function(i){return i==1?3:i<6?2:i==9?1:0},lf=function(i,e){return e+30+dn(i,e+26)+dn(i,e+28)},cf=function(i,e,t){var n=dn(i,e+28),r=Yc(i.subarray(e+46,e+46+n),!(dn(i,e+8)&2048)),s=e+46+n,a=Bt(i,e+20),o=t&&a==4294967295?uf(i,s):[a,Bt(i,e+24),Bt(i,e+42)],c=o[0],l=o[1],u=o[2];return[dn(i,e+10),c,l,r,s+dn(i,e+30)+dn(i,e+32),u]},uf=function(i,e){for(;dn(i,e)!=1;e+=4+dn(i,e+2));return[Tc(i,e+12),Tc(i,e+4),Tc(i,e+20)]},qi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&je(9),e+=n+4}return e},Gr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=qi(l);vt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&je(10),vt(i,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,s!=-1&&(vt(i,e,t.crc),vt(i,e+4,s<0?-s-2:s),vt(i,e+8,t.size)),vt(i,e+12,c),vt(i,e+14,h),e+=16,a!=null&&(vt(i,e,u),vt(i,e+6,t.attrs),vt(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var g in l){var M=l[g],m=M.length;vt(i,e,+g),vt(i,e+2,m),i.set(M,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},Zc=function(i,e,t,n,r){vt(i,e,101010256),vt(i,e+8,t),vt(i,e+10,t),vt(i,e+12,n),vt(i,e+16,r)},Qs=(function(){function i(e){this.filename=e,this.c=Yr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||je(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),Tg=(function(){function i(e,t){var n=this;t||(t={}),Qs.call(this,e),this.d=new Vn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=of(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){Qs.prototype.push.call(this,e,t)},i})(),Ag=(function(){function i(e,t){var n=this;t||(t={}),Qs.call(this,e),this.d=new jd(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=of(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){Qs.prototype.push.call(this,e,t)},i})(),Rg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||je(5),this.d&2)this.ondata(je(4+(this.d&1)*8,0,1),null,!1);else{var n=Yi(e.filename),r=n.length,s=e.comment,a=s&&Yi(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+qi(e.extra)+30;r>65535&&this.ondata(je(11,0,1),null,!1);var l=new ct(c);Gr(l,0,e,n,o,-1);var u=[l],h=function(){for(var m=0,f=u;m<f.length;m++){var b=f[m];t.ondata(null,b,!1)}u=[]},d=this.d;this.d=0;var p=this.u.length,g=na(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),d){var m=t.u[p+1];m?m.r():t.d=1}d=1}}),M=0;e.ondata=function(m,f,b){if(m)t.ondata(m,f,b),t.terminate();else if(M+=f.length,u.push(f),b){var S=new ct(16);vt(S,0,134695760),vt(S,4,e.crc),vt(S,8,M),vt(S,12,e.size),u.push(S),g.c=M,g.b=c+M+16,g.crc=e.crc,g.size=e.size,d&&g.r(),d=1}else d&&h()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(je(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+qi(a.extra)+(a.o?a.o.length:0)}for(var o=new ct(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Gr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+qi(a.extra)+(a.o?a.o.length:0),t+=a.b}Zc(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();hf=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Pg=(function(){function i(){var e=this;this.i=new _n(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Lg=(function(){function i(e,t){var n=this;t<32e4?this.i=new _n(function(r,s){n.ondata(null,r,s)}):(this.i=new Wc(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Hn(e,0)),this.i.push(e,t)},i.compression=8,i})(),Ng=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:hf},this.p=Xi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||je(5),this.p||je(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ct(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,h=this.c,d=h&&this.d,p=function(){var f,b=Bt(l,o);if(b==67324752){a=1,c=o,g.d=null,g.c=0;var S=dn(l,o+6),x=dn(l,o+8),w=S&2048,v=S&8,T=dn(l,o+26),_=dn(l,o+28);if(u>o+30+T+_){var E=[];g.k.unshift(E),a=2;var R=Bt(l,o+18),I=Bt(l,o+22),F=Yc(l.subarray(o+30,o+=30+T),!w);R==4294967295?(f=v?[-2]:uf(l,o),R=f[0],I=f[1]):v&&(R=-1),o+=_,g.c=R;var B,N={name:F,compression:x,start:function(){if(N.ondata||je(5),!R)N.ondata(null,Xi,!0);else{var z=n.o[x];z||N.ondata(je(14,"unknown compression type "+x,1),null,!1),B=R<0?new z(F):new z(F,R,I),B.ondata=function(O,U,G){N.ondata(O,U,G)};for(var L=0,P=E;L<P.length;L++){var Y=P[L];B.push(Y,!1)}n.k[0]==E&&n.c?n.d=B:B.push(Xi,!0)}},terminate:function(){B&&B.terminate&&B.terminate()}};R>=0&&(N.size=R,N.originalSize=I),g.onfile(N)}return"break"}else if(h){if(b==134695760)return c=o+=12+(h==-2&&8),a=3,g.c=0,"break";if(b==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var M=p();if(M==="break")break}if(this.p=Xi,h<0){var m=a?l.subarray(0,c-12-(h==-2&&8)-(Bt(l,c-16)==134695760&&4)):l.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&je(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),po=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function to(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function vd(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=to(i,t),i.start=t,i.rate=e)}function bd(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,h,d){return Number.isFinite(l)?Math.max(u,Math.min(h,l)):d}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let h of Object.keys(r))r[h].input.value=t[h],r[h].output.textContent=t[h].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[h,d,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let M=document.createElement("label"),m=document.createElement("span"),f=document.createElement("output"),b=document.createElement("input");m.textContent=d+" ",f.textContent=t[h].toFixed(2)+"\xD7",b.type="range",b.min=p,b.max=g,b.step=.05,b.value=t[h],b.style.cssText="display:block;width:100%;margin:14px 0",b.setAttribute("aria-label",d),b.oninput=()=>a({...t,[h]:Number(b.value)}),M.append(m,f,b),n.append(M),r[h]={input:b,output:f}}for(let[h,d]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=h,p.onclick=d,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function Md(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function c(){let f=i.lightingState();for(let[b,S]of r)S.value=f[b];a&&(a.checked=f.shadows),o&&(o.value=f.shadowSize)}function l(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),c()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,b,S,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let w=document.createElement("label");w.textContent=b;let v=document.createElement("input");v.id="lighting_"+f,v.type="range",v.min=S,v.max=x,v.step=".01",v.style.width="100%",v.oninput=()=>l({[f]:Number(v.value)}),r.set(f,v),w.append(v),t.append(w)}for(let[f,b]of[["\u6062\u590D\u67D4\u5149",()=>l(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let S=document.createElement("button");S.textContent=f,S.onclick=b,t.append(S)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>l({shadows:a.checked}),u.append(a),t.append(u);let h=document.createElement("label");h.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let d=document.createElement("select");d.id="lighting_resolution",d.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),d.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),d.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",d.onchange=()=>localStorage.setItem("snowTextureLimit",d.value),h.append(d),t.append(h),o=document.createElement("select"),o.id="lighting_shadowSize";for(let f of[512,1024,2048])o.add(new Option(f+" \xB7 \u9634\u5F71",String(f)));o.value=i.lightingState().shadowSize,o.onchange=()=>l({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[f,b]of[["adaptive","\u81EA\u52A8\u5E73\u8861\u753B\u8D28\u4E0E\u6D41\u7545\u5EA6"],["quality","\u4F18\u5148\u6E05\u6670\u5EA6"],["battery","\u8282\u80FD \xB7 30\u5E27"]])p.add(new Option(b,f));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let M=()=>{let f=i.performanceState();g.textContent=`GPU \u6E32\u67D3 / \u8499\u76AE \xB7 ${f.fps}\u5E27\uFF08\u76EE\u6807${f.targetFPS}\uFF09
\u7F13\u51B2 ${f.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${f.pixelRatio.toFixed(2)}
\u7ED8\u5236 ${f.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${f.triangles}
\u70ED\u72B6\u6001 ${f.thermal} \xB7 ${f.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}
\u5E27\u95F4\u9694 ${f.meanFrameMs}ms\uFF08\u4E0D\u662F GPU \u8BA1\u65F6\uFF09`},m=setInterval(()=>{t.hidden||M()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),c(),{toggle(){t.hidden=!t.hidden,M()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function Sd(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var ug=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ai=(i,e)=>i>>>e|i<<32-e;function hg(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let f=t[m-15],b=t[m-2];t[m]=(ai(f,7)^ai(f,18)^f>>>3)+t[m-16]+(ai(b,17)^ai(b,19)^b>>>10)+t[m-7]}let[o,c,l,u,h,d,p,g]=e;for(let m=0;m<64;m++){let f=g+(ai(h,6)^ai(h,11)^ai(h,25))+(h&d^~h&p)+ug[m]+t[m]>>>0,b=(ai(o,2)^ai(o,13)^ai(o,22))+(o&c^o&l^c&l)>>>0;g=p,p=d,d=h,h=u+f>>>0,u=l,l=c,c=o,o=f+b>>>0}let M=[o,c,l,u,h,d,p,g];for(let m=0;m<8;m++)e[m]+=M[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function wc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):hg(i)}var kr={entries:256,file:32*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},wd=new TextDecoder("utf-8",{fatal:!0});function Ed(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=kr.archive,n=kr.total){if(![kr.total,192*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![kr.archive,128*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let d=i.length-22;d>=Math.max(0,i.length-65557);d--)if(r.getUint32(d,!0)===101010256&&d+22+r.getUint16(d+20,!0)===i.length){s=d;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>kr.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=o,h=0;for(let d=0;d<a;d++){if(u+46>s||r.getUint32(u,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let p=r.getUint16(u+8,!0),g=r.getUint16(u+10,!0),M=r.getUint16(u+28,!0),m=r.getUint16(u+30,!0),f=r.getUint16(u+32,!0),b=r.getUint32(u+24,!0);if(u+46+M+m+f>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let S=wd.decode(i.subarray(u+46,u+46+M));if(!Sd(S)||l.has(S)||!e.test(S))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(S),h+=b;let x=r.getUint32(u+38,!0)>>>16;if(p&1||![0,8].includes(g)||(x&61440)===40960||b>kr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(S==="manifest.json"&&b>1024*1024)throw new Error("manifest \u8FC7\u5927");let w=r.getUint32(u+42,!0);if(w+30>o||r.getUint32(w,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let v=r.getUint16(w+26,!0),T=r.getUint16(w+28,!0),_=r.getUint32(u+20,!0);if(w+30+v+T+_>o||wd.decode(i.subarray(w+30,w+30+v))!==S)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u+=46+M+m+f}if(u!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h}}var Ec=/^[a-zA-Z0-9_-]{1,96}$/,dg=/^[a-f0-9]{64}$/,fg=new Set(["geometry","animation","texture","audio","config"]);function no(i){if(i?.schema!=="snowbreak-skin/1"||!Ec.test(i.characterId)||!Ec.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Ec.test(n.role)||e.has(n.role)||!dg.test(n.assetId)||!fg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function Td({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let h=await Promise.allSettled(u.map(({asset:d,descriptor:p})=>Promise.resolve().then(()=>e(d,p))));for(let d of h)if(d.status==="rejected")try{t(d.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let h=no(u),d=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(h.resources.map(b=>Promise.resolve().then(()=>i(b,{signal:p.signal})))),M=g.flatMap((b,S)=>b.status==="fulfilled"?[{asset:b.value,descriptor:h.resources[S]}]:[]),m=g.find(b=>b.status==="rejected");if(d!==n||a||m){if(await o(M),d===n&&(s=null),d!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let f=r;return r={manifest:h,resources:M},s=null,f&&await o(f.resources),d!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:h.characterId,skinId:h.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(h=>h.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Ad(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let h=d=>i[d]|i[d+1]<<8|i[d+2]<<16;a=[h(u+4)+1,h(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let h=e.getUint32(u+1,!0);if(h>>>29)throw new Error("Unknown WebP version");s=[(h&16383)+1,(h>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Rd(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Cd={geometry:20,animation:32,texture:16,audio:8,config:2};function Id(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Cd,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Cd[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await wc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Ad(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Rd(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}async function pf(i){let e=Ed(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,134217728,201326592),{unzipSync:t}=await Promise.resolve().then(()=>(ff(),df)),n=t(i);if(Object.values(n).reduce((u,h)=>u+h.length,0)!==e.total)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n["manifest.json"])),s=null;if(r.schema==="snowbreak-collection/1"){if(!["Enya","Fenny"].includes(r.characterId)||!Array.isArray(r.variants)||!(r.characterId==="Fenny"?[2,4]:[4]).includes(r.variants.length))throw new Error("Invalid character collection");let u=new Set;if(s=r.variants.map(h=>{if(!["standing","interaction"].includes(h.mode)||!(r.characterId==="Fenny"?["normal","underwear"]:["normal","nude"]).includes(h.outfit)||h.id!==h.mode+"_"+h.outfit||u.has(h.id))throw new Error("Invalid collection variant");return u.add(h.id),{...h,manifest:no(h.manifest)}}),!u.has(r.defaultVariant)||s.some(h=>h.manifest.characterId!==r.characterId))throw new Error("Invalid collection default")}let a=s?s.map(u=>u.manifest):[no(r)],o=new Set(["manifest.json",...a.flatMap(u=>u.resources.map(h=>"assets/"+h.assetId))]);if(o.size!==e.names.size||[...o].some(u=>!e.names.has(u)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");async function c(u){let h=s?.find(g=>g.id===u);if(s&&!h)throw new Error("Variant unavailable");let d=h?.manifest||a[0],p=Td(Id(async g=>n["assets/"+g]));return await p.load(d),{runtime:p,manifest:d,selection:h?{id:h.id,mode:h.mode,outfit:h.outfit}:null,variants:s?.map(({id:g,mode:M,outfit:m})=>({id:g,mode:M,outfit:m}))||[],selectVariant:c}}let l;try{l=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return c(s?.some(u=>u.id===l)?l:r.defaultVariant)}function mf(i,e,t=4096){let n=t===2048?2048:4096,r=(e.current.characterId==="Fenny"?256:320)*(n===2048?.5:1)*1024**2,s=new Map;for(let l of i?.materials||[])for(let[u,h]of[["diffuseAssetId",!1],["normalAssetId",!0]]){let d=l[u];if(!d)continue;let p=(h?"normal:":"")+d,g=e.getAsset("texture_"+d)?.data;if(!g||![g.width,g.height].every(S=>Number.isInteger(S)&&S>0&&S<=4096))throw new Error("Missing texture dimensions");let M=/^(ma_|house_)/i.test(l.name),m=h?10:M?5:/head|face|eye/i.test(l.name)?1e3:/hair/i.test(l.name)?80:50,f=Math.min(n,h||M?1024:4096),b=s.get(p);if(b){b.priority=Math.max(b.priority,m),b.cap=Math.max(b.cap,f);continue}s.set(p,{key:p,id:d,normal:h,width:g.width,height:g.height,cap:f,priority:m})}function a(l){let u=Math.min(1,l.cap/Math.max(l.width,l.height));return[Math.max(1,Math.round(l.width*u)),Math.max(1,Math.round(l.height*u))]}let o=l=>{let[u,h]=a(l);return u*h*4*4/3},c=()=>[...s.values()].reduce((l,u)=>l+o(u),0);for(;c()>r;){let l=[...s.values()].filter(u=>u.cap>512&&Math.max(u.width,u.height)>512).map(u=>({e:u,saving:o(u)-o({...u,cap:u.cap/2})})).filter(u=>u.saving>0).sort((u,h)=>u.e.priority/u.saving-h.e.priority/h.saving);if(!l.length)throw new Error("Texture memory budget exceeded");l[0].e.cap/=2}return{limitFor:(l,u=!1)=>s.get((u?"normal:":"")+l)?.cap||1024,snapshot:()=>({requestedLimit:n,budgetMiB:r/1024**2,estimatedMiB:Math.round(c()/1024**2*10)/10,textures:[...s.values()].map(l=>({id:l.id,normal:l.normal,source:[l.width,l.height],size:a(l)}))})}}function gf({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,c=0,l=0,u=0,h=0,d=0,p=0,g=()=>t==="critical"?20:n||t==="serious"?30:60;function M(S,x,w){return Math.max(.5,Math.min(w||1,3,Math.sqrt((t==="critical"?1e6:t==="serious"?16e5:e==="quality"?4e6:e==="battery"?14e5:3e6)/Math.max(1,S*x)))*r)}function m(S={}){return S.mode&&["adaptive","quality","battery"].includes(S.mode)&&(e=S.mode),S.thermal&&["nominal","fair","serious","critical"].includes(S.thermal)&&(t=S.thermal),typeof S.lowPower=="boolean"&&(n=S.lowPower),s=0,a=0,o=0,h=d=0,b()}function f(S=i()){let x=1e3/(e==="battery"?Math.min(30,g()):g());return s&&S-s<x-.75?!1:(s&&S-s<1e3&&(c+=S-s,l++),s=S,o++,a||(a=S),S-a>=2e3&&(u=o*1e3/(S-a),e==="adaptive"&&(h=u<g()*.78?h+1:0,d=u>g()*.94?d+1:0,h>=2&&r>.65?(r=Math.max(.65,r-.1),h=0,p++):d>=4&&r<1&&(r=Math.min(1,r+.05),d=0,p++)),a=S,o=0),!0)}function b(){return{mode:e,thermal:t,lowPower:n,targetFPS:e==="battery"?Math.min(30,g()):g(),fps:Math.round(u*10)/10,meanFrameMs:l?Math.round(c/l*10)/10:0,scale:r,changes:p}}return{begin:f,configure:m,ratio:M,snapshot:b,resetClock(){s=0,a=0,o=0}}}var np=0,Lu=1,ip=2;var Na=1,gl=2,Ns=3,wn=0,xn=1,en=2,gi=0,Us=1,Nu=2,Uu=3,Du=4,rp=5;var Tr=100,sp=101,ap=102,op=103,lp=104,cp=200,up=201,hp=202,dp=203,Fu=204,Ou=205,fp=206,pp=207,mp=208,gp=209,xp=210,yp=211,_p=212,vp=213,bp=214,Wo=0,Xo=1,qo=2,ps=3,Yo=4,Zo=5,Ko=6,$o=7,Bu=0,Mp=1,Sp=2,Qn=0,ku=1,zu=2,Hu=3,Ua=4,Vu=5,Gu=6,Wu=7,_u="attached",wp="detached",Xu=300,ar=301,Ar=302,xl=303,yl=304,Da=306,tr=1e3,Xn=1001,ms=1002,zt=1003,_l=1004;var Rr=1005;var Ht=1006,Ds=1007;var ei=1008;var En=1009,qu=1010,Yu=1011,Fs=1012,vl=1013,ti=1014,Nn=1015,ni=1016,bl=1017,Ml=1018,Os=1020,Zu=35902,Ku=35899,$u=1021,Ju=1022,Un=1023,hi=1026,or=1027,Sl=1028,wl=1029,lr=1030,El=1031;var Tl=1033,Fa=33776,Oa=33777,Ba=33778,ka=33779,Al=35840,Rl=35841,Cl=35842,Il=35843,Pl=36196,Ll=37492,Nl=37496,Ul=37488,Dl=37489,za=37490,Fl=37491,Ol=37808,Bl=37809,kl=37810,zl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Zl=37819,Kl=37820,$l=37821,Jl=36492,jl=36494,Ql=36495,ec=36283,tc=36284,Ha=36285,nc=36286;var xr=2300,yr=2301,Ho=2302,vu=2303,bu=2400,Mu=2401,Su=2402,Ep=2500;var ju=0,Va=1,Bs=2,Tp=3200;var ic=0,Ap=1,ii="",Dt="srgb",gn="srgb-linear",pa="linear",wt="srgb";var Vo=7680;var Rp=519,Cp=512,Ip=513,Pp=514,rc=515,Lp=516,Np=517,sc=518,Up=519,Qu=35044,eh=35048;var th="300 es",Jn=2e3,gs=2001;function Fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){let i=xs("canvas");return i.style.display="block",i}var xf={},ys=null;function ma(...i){let e="THREE."+i.shift();ys?ys("log",e,...i):console.log(e,...i)}function Fp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Fp(i);let e="THREE."+i.shift();if(ys)ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Fp(i);let e="THREE."+i.shift();if(ys)ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gr(...i){let e=i.join(" ");e in xf||(xf[e]=!0,Qe(...i))}function Op(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Bp={[Wo]:Xo,[qo]:Ko,[Yo]:$o,[ps]:Zo,[Xo]:Wo,[Ko]:qo,[$o]:Yo,[Zo]:ps},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=1234567,da=Math.PI/180,_r=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function Bg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function kg(i,e,t){return i!==e?(t-i)/(e-i):0}function fa(i,e,t){return(1-t)*i+t*e}function zg(i,e,t,n){return fa(i,e,1-Math.exp(-t*n))}function Hg(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xg(i,e){return i+Math.random()*(e-i)}function qg(i){return i*(.5-Math.random())}function Yg(i){i!==void 0&&(yf=i);let e=yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zg(i){return i*da}function Kg(i){return i*_r}function $g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Jg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var be={DEG2RAD:da,RAD2DEG:_r,generateUUID:jn,clamp:mt,euclideanModulo:nh,mapLinear:Bg,inverseLerp:kg,lerp:fa,damp:zg,pingpong:Hg,smoothstep:Vg,smootherstep:Gg,randInt:Wg,randFloat:Xg,randFloatSpread:qg,seededRandom:Yg,degToRad:Zg,radToDeg:Kg,isPowerOfTwo:$g,ceilPowerOfTwo:Jg,floorPowerOfTwo:jg,setQuaternionFromProperEuler:Qg,normalize:Et,denormalize:$n},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var lt=oh,He=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],p=s[a+1],g=s[a+2],M=s[a+3];if(h!==M||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+h*M;m<0&&(d=-d,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);f=Math.sin(f*b)/S,o=Math.sin(o*b)/S,c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+M*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+M*o;let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var D=lh,Kc=new D,_f=new He,ch=class ch{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],M=r[0],m=r[3],f=r[6],b=r[1],S=r[4],x=r[7],w=r[2],v=r[5],T=r[8];return s[0]=a*M+o*b+c*w,s[3]=a*m+o*S+c*v,s[6]=a*f+o*x+c*T,s[1]=l*M+u*b+h*w,s[4]=l*m+u*S+h*v,s[7]=l*f+u*x+h*T,s[2]=d*M+p*b+g*w,s[5]=d*m+p*S+g*v,s[8]=d*f+p*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=h*M,e[1]=(r*l-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var ot=ch,$c=new ot,vf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){let i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var dt=e0();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,Jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=xs("canvas")),Qr.width=e.width,Qr.height=e.height;let r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t0=0,_s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var n0=0,jc=new D,jt=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,r=Xn,s=Ht,a=ei,o=Un,c=En,l=i.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=jn(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Xu;jt.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(p+1)/2,w=(f+1)/2,v=(u+d)/4,T=(h+M)/4,_=(g+m)/4;return S>x&&S>w?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=v/n,s=T/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=v/r,s=_/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=_/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-M)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Tt=uh,jo=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new jt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ml=class ml{constructor(e,t,n,r,s,a,o,c,l,u,h,d,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,p,g,M,m)}set(e,t,n,r,s,a,o,c,l,u,h,d,p,g,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,p=a*h,g=o*u,M=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,g=l*u,M=l*h;t[0]=d+M*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,g=l*u,M=l*h;t[0]=d-M*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,p=a*h,g=o*u,M=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+M,t[1]=c*h,t[5]=M*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=M-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-M*h}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+M,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,r0)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ki.crossVectors(n,Cn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ki.crossVectors(n,Cn)),Ki.normalize(),go.crossVectors(Cn,Ki),r[0]=Ki.x,r[4]=go.x,r[8]=Cn.x,r[1]=Ki.y,r[5]=go.y,r[9]=Cn.y,r[2]=Ki.z,r[6]=go.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],b=n[3],S=n[7],x=n[11],w=n[15],v=r[0],T=r[4],_=r[8],E=r[12],R=r[1],I=r[5],F=r[9],B=r[13],N=r[2],z=r[6],L=r[10],P=r[14],Y=r[3],O=r[7],U=r[11],G=r[15];return s[0]=a*v+o*R+c*N+l*Y,s[4]=a*T+o*I+c*z+l*O,s[8]=a*_+o*F+c*L+l*U,s[12]=a*E+o*B+c*P+l*G,s[1]=u*v+h*R+d*N+p*Y,s[5]=u*T+h*I+d*z+p*O,s[9]=u*_+h*F+d*L+p*U,s[13]=u*E+h*B+d*P+p*G,s[2]=g*v+M*R+m*N+f*Y,s[6]=g*T+M*I+m*z+f*O,s[10]=g*_+M*F+m*L+f*U,s[14]=g*E+M*B+m*P+f*G,s[3]=b*v+S*R+x*N+w*Y,s[7]=b*T+S*I+x*z+w*O,s[11]=b*_+S*F+x*L+w*U,s[15]=b*E+S*B+x*P+w*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15],b=c*p-l*d,S=o*p-l*h,x=o*d-c*h,w=a*p-l*u,v=a*d-c*u,T=a*h-o*u;return t*(M*b-m*S+f*x)-n*(g*b-m*w+f*v)+r*(g*S-M*w+f*T)-s*(g*x-M*v+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],b=t*o-n*a,S=t*c-r*a,x=t*l-s*a,w=n*c-r*o,v=n*l-s*o,T=r*l-s*c,_=u*M-h*g,E=u*m-d*g,R=u*f-p*g,I=h*m-d*M,F=h*f-p*M,B=d*f-p*m,N=b*B-S*F+x*I+w*R-v*E+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(o*B-c*F+l*I)*z,e[1]=(r*F-n*B-s*I)*z,e[2]=(M*T-m*v+f*w)*z,e[3]=(d*v-h*T-p*w)*z,e[4]=(c*R-a*B-l*E)*z,e[5]=(t*B-r*R+s*E)*z,e[6]=(m*x-g*T-f*S)*z,e[7]=(u*T-d*x+p*S)*z,e[8]=(a*F-o*R+l*_)*z,e[9]=(n*R-t*F-s*_)*z,e[10]=(g*v-M*x+f*b)*z,e[11]=(h*x-u*v-p*b)*z,e[12]=(o*E-a*I-c*_)*z,e[13]=(t*I-n*E+r*_)*z,e[14]=(M*S-g*w-m*b)*z,e[15]=(u*w-h*S+d*b)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,g=s*h,M=a*u,m=a*h,f=o*h,b=c*l,S=c*u,x=c*h,w=n.x,v=n.y,T=n.z;return r[0]=(1-(M+f))*w,r[1]=(p+x)*w,r[2]=(g-S)*w,r[3]=0,r[4]=(p-x)*v,r[5]=(1-(d+f))*v,r[6]=(m+b)*v,r[7]=0,r[8]=(g+S)*T,r[9]=(m-b)*T,r[10]=(1-(d+M))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=es.set(r[0],r[1],r[2]).length(),o=es.set(r[4],r[5],r[6]).length(),c=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);let l=1/a,u=1/o,h=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Jn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g,M;if(c)g=s/(a-s),M=a*s/(a-s);else if(o===Jn)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===gs)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Jn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),g,M;if(c)g=1/(a-s),M=a/(a-s);else if(o===Jn)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===gs)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ml.prototype.isMatrix4=!0;var Ye=ml,es=new D,Yn=new Ye,i0=new D(0,0,0),r0=new D(1,1,1),Ki=new D,go=new D,Cn=new D,Mf=new Ye,Sf=new He,Li=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},s0=0,wf=new D,ts=new He,Ei=new Ye,xo=new D,ra=new D,a0=new D,o0=new He,Ef=new D(1,0,0),Tf=new D(0,1,0),Af=new D(0,0,1),Rf={type:"added"},l0={type:"removed"},ns={type:"childadded",child:null},Qc={type:"childremoved",child:null},Ut=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Li,n=new He,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ot}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return wf.copy(e).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ra,xo,this.up):Ei.lookAt(xo,ra,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Ei),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rf),ns.child=e,this.dispatchEvent(ns),ns.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rf),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},c0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},yo={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=nh(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return dt.workingToColorSpace(sn.copy(this),e),Math.round(mt(sn.r*255,0,255))*65536+Math.round(mt(sn.g*255,0,255))*256+Math.round(mt(sn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(sn.copy(this),t);let n=sn.r,r=sn.g,s=sn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Dt){dt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,r=sn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(yo);let n=fa($i.h,yo.h,t),r=fa($i.s,yo.s,t),s=fa($i.l,yo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new nt;nt.NAMES=kp;var vr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new D,Ti=new D,tu=new D,Ai=new D,is=new D,rs=new D,Cf=new D,nu=new D,iu=new D,ru=new D,su=new Tt,au=new Tt,ou=new Tt,ci=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ti.subVectors(n,t),tu.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Ti),c=Zn.dot(tu),l=Ti.dot(Ti),u=Ti.dot(tu),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(o,Ai.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ti.subVectors(e,t),Zn.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;is.subVectors(r,n),rs.subVectors(s,n),nu.subVectors(e,n);let c=is.dot(nu),l=rs.dot(nu);if(c<=0&&l<=0)return t.copy(n);iu.subVectors(e,r);let u=is.dot(iu),h=rs.dot(iu);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(is,a);ru.subVectors(e,s);let p=is.dot(ru),g=rs.dot(ru);if(g>=0&&p<=g)return t.copy(s);let M=p*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(rs,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Cf.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Cf,o);let f=1/(m+M+d);return a=M*f,o=d*f,t.copy(n).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),vo.subVectors(this.max,sa),ss.subVectors(e.a,sa),as.subVectors(e.b,sa),os.subVectors(e.c,sa),Ji.subVectors(as,ss),ji.subVectors(os,as),dr.subVectors(ss,os);let t=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-dr.z,dr.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,dr.z,0,-dr.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-dr.y,dr.x,0];return!lu(t,ss,as,os,vo)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,ss,as,os,vo))?!1:(bo.crossVectors(Ji,ji),t=[bo.x,bo.y,bo.z],lu(t,ss,as,os,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,_o=new Zt,ss=new D,as=new D,os=new D,Ji=new D,ji=new D,dr=new D,sa=new D,vo=new D,bo=new D,fr=new D;function lu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fr.fromArray(i,s);let o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),c=e.dot(fr),l=t.dot(fr),u=n.dot(fr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var qt=new D,Mo=new lt,u0=0,Ft=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xa=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ya=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},h0=new Zt,aa=new D,cu=new D,bn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(aa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(cu)),this.expandByPoint(aa.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,Wn=new Ye,uu=new Ut,ls=new D,In=new Zt,oa=new Zt,Jt=new D,Qt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?ya:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(In.min,oa.min),In.expandByPoint(Jt),Jt.addVectors(In.max,oa.max),In.expandByPoint(Jt)):(In.expandByPoint(oa.min),In.expandByPoint(oa.max))}In.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(ls.fromBufferAttribute(e,l),Jt.add(ls)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new D,c[_]=new D;let l=new D,u=new D,h=new D,d=new lt,p=new lt,g=new lt,M=new D,m=new D;function f(_,E,R){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[_].add(M),o[E].add(M),o[R].add(M),c[_].add(m),c[E].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,E=b.length;_<E;++_){let R=b[_],I=R.start,F=R.count;for(let B=I,N=I+F;B<N;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new D,x=new D,w=new D,v=new D;function T(_){w.fromBufferAttribute(r,_),v.copy(w);let E=o[_];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(v,E);let I=x.dot(c[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,E=b.length;_<E;++_){let R=b[_],I=R.start,F=R.count;for(let B=I,N=I+F;B<N;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ft(d,u,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pn=new D,Ss=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hu=new D,f0=new D,p0=new ot,Pn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hu.subVectors(n,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p0.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m0=0,Mn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Us,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new D,du=new D,So=new D,wo=new D,nr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){du.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),wo.copy(this.origin).sub(du);let s=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=wo.dot(this.direction),c=-wo.dot(So),l=wo.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let M=1/u;h*=M,d*=M,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(du).addScaledVector(So,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,b=n.y-a.y,S=n.z-a.z,x=Math.abs(c),w=Math.abs(l),v=Math.abs(u),T,_,E,R,I,F,B,N,z,L,P,Y;if(x>=w&&x>=v?(E=c,F=h,z=g,Y=f,c>=0?(T=l,_=u,R=d,I=p,B=M,N=m,L=b,P=S):(T=u,_=l,R=p,I=d,B=m,N=M,L=S,P=b)):w>=v?(E=l,F=d,z=M,Y=b,l>=0?(T=u,_=c,R=p,I=h,B=m,N=g,L=S,P=f):(T=c,_=u,R=h,I=p,B=g,N=m,L=f,P=S)):(E=u,F=p,z=m,Y=S,u>=0?(T=c,_=l,R=h,I=d,B=g,N=M,L=f,P=b):(T=l,_=c,R=d,I=h,B=M,N=g,L=b,P=f)),E===0)return null;let O=T/E,U=_/E,G=1/E,ae=R-O*F,de=I-U*F,ue=B-O*z,K=N-U*z,le=L-O*Y,H=P-U*Y,$=le*K-H*ue,xe=ae*H-de*le,Ne=ue*de-K*ae;if(r){if($<0||xe<0||Ne<0)return null}else if(($<0||xe<0||Ne<0)&&($>0||xe>0||Ne>0))return null;let fe=$+xe+Ne;if(fe===0)return null;let me=G*($*F+xe*z+Ne*Y);return(fe>0?me<0:me>0)?null:this.at(me/fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},If=new Ye,pr=new nr,Eo=new bn,Pf=new D,To=new D,Ao=new D,Ro=new D,fu=new D,Co=new D,Lf=new D,Io=new D,Vt=class extends Ut{constructor(e=new Qt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(fu.fromBufferAttribute(h,e),a?Co.addScaledVector(fu,u):Co.addScaledVector(fu.sub(t),u))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Eo.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Eo,Pf)===null||pr.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(If.copy(s).invert(),pr.copy(e.ray).applyMatrix4(If),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,w=S;x<w;x+=3){let v=o.getX(x),T=o.getX(x+1),_=o.getX(x+2);r=Po(this,f,e,n,l,u,h,v,T,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);r=Po(this,a,e,n,l,u,h,b,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,w=S;x<w;x+=3){let v=x,T=x+1,_=x+2;r=Po(this,f,e,n,l,u,h,v,T,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=m,S=m+1,x=m+2;r=Po(this,a,e,n,l,u,h,b,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function g0(i,e,t,n,r,s,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===wn,o),c===null)return null;Io.copy(o),Io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Io);return l<t.near||l>t.far?null:{distance:l,point:Io.clone(),object:i}}function Po(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,To),i.getVertexPosition(c,Ao),i.getVertexPosition(l,Ro);let u=g0(i,e,t,n,To,Ao,Ro,Lf);if(u){let h=new D;ci.getBarycoord(Lf,To,Ao,Ro,h),r&&(u.uv=ci.getInterpolatedAttribute(r,o,c,l,h,new lt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,o,c,l,h,new lt)),a&&(u.normal=ci.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};ci.getNormal(To,Ao,Ro,d.normal),u.face=d,u.barycoord=h}return u}var la=new Tt,Nf=new Tt,Uf=new Tt,x0=new Tt,Df=new Ye,Lo=new D,pu=new bn,Ff=new Ye,mu=new nr,_a=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_u,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingBox.expandByPoint(Lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingSphere.expandByPoint(Lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pu.copy(this.boundingSphere),pu.applyMatrix4(r),e.ray.intersectsSphere(pu)!==!1&&(Ff.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Ff),!(this.boundingBox!==null&&mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Nf.fromBufferAttribute(r.attributes.skinIndex,e),Uf.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Uf.getComponent(s);if(a!==0){let o=Nf.getComponent(s);Df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(x0.copy(la).applyMatrix4(Df),a)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},ws=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Es=class extends jt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=zt,u=zt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Of=new Ye,y0=new Ye,va=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:y0;Of.multiplyMatrices(o,t[s]),Of.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Es(t,e,e,Un,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Qe("Skeleton: No bone found with UUID:",s),a=new ws),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ni=class extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cs=new Ye,Bf=new Ye,No=[],kf=new Zt,_0=new Ye,ca=new Vt,ua=new bn,ba=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,_0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),kf.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),ua.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cs),Bf.multiplyMatrices(n,cs),ca.matrixWorld=Bf,ca.raycast(e,No);for(let a=0,o=No.length;a<o;a++){let c=No[a];c.instanceId=s,c.object=this,t.push(c)}No.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(r*this.count),r,this.count,Sl,Nn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mr=new bn,v0=new lt(.5,.5),Uo=new D,Ts=class{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],M=s[9],m=s[10],f=s[11],b=s[12],S=s[13],x=s[14],w=s[15];if(r[0].setComponents(l-a,p-u,f-g,w-b).normalize(),r[1].setComponents(l+a,p+u,f+g,w+b).normalize(),r[2].setComponents(l+o,p+h,f+M,w+S).normalize(),r[3].setComponents(l-o,p-h,f-M,w-S).normalize(),n)r[4].setComponents(c,d,m,x).normalize(),r[5].setComponents(l-c,p-d,f-m,w-x).normalize();else if(r[4].setComponents(l-c,p-d,f-m,w-x).normalize(),t===Jn)r[5].setComponents(l+c,p+d,f+m,w+x).normalize();else if(t===gs)r[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);let t=v0.distanceTo(e.center);return mr.radius=.7071067811865476+t,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Uo.x=r.normal.x>0?e.max.x:e.min.x,Uo.y=r.normal.y>0?e.max.y:e.min.y,Uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},el=new D,tl=new D,zf=new Ye,ha=new nr,Do=new bn,gu=new D,Hf=new D,br=class extends Ut{constructor(e=new Qt,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)el.fromBufferAttribute(t,r-1),tl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=el.distanceTo(tl);e.setAttribute("lineDistance",new mn(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;zf.copy(r).invert(),ha.copy(e.ray).applyMatrix4(zf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=l){let f=u.getX(M),b=u.getX(M+1),S=Fo(this,e,ha,c,f,b,M);S&&t.push(S)}if(this.isLineLoop){let M=u.getX(g-1),m=u.getX(p),f=Fo(this,e,ha,c,M,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=l){let f=Fo(this,e,ha,c,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Fo(this,e,ha,c,g-1,p,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Fo(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(el.fromBufferAttribute(o,r),tl.fromBufferAttribute(o,s),t.distanceSqToSegment(el,tl,gu,Hf)>n)return;gu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gu);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vf=new D,Gf=new D,Ma=class extends br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vf.fromBufferAttribute(t,r),Gf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vf.distanceTo(Gf);e.setAttribute("lineDistance",new mn(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sa=class extends br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rs=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wf=new Ye,wu=new nr,Oo=new bn,Bo=new D,wa=class extends Ut{constructor(e=new Qt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Wf.copy(r).invert(),wu.copy(e.ray).applyMatrix4(Wf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,M=p;g<M;g++){let m=l.getX(g);Bo.fromBufferAttribute(h,m),Xf(Bo,m,c,r,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,M=p;g<M;g++)Bo.fromBufferAttribute(h,g),Xf(Bo,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Xf(i,e,t,n,r,s,a){let o=wu.distanceSqToPoint(i);if(o<t){let c=new D;wu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends jt{constructor(e=[],t=ar,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ir=class extends jt{constructor(e,t,n=ti,r,s,a,o=zt,c=zt,l,u=hi,h=1){if(u!==hi&&u!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends ir{constructor(e,t=ti,n=ar,r,s,a=zt,o=zt,c,l=hi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cs=class i extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(h,2));function g(M,m,f,b,S,x,w,v,T,_,E){let R=x/T,I=w/_,F=x/2,B=w/2,N=v/2,z=T+1,L=_+1,P=0,Y=0,O=new D;for(let U=0;U<L;U++){let G=U*I-B;for(let ae=0;ae<z;ae++){let de=ae*R-F;O[M]=de*b,O[m]=G*S,O[f]=N,l.push(O.x,O.y,O.z),O[M]=0,O[m]=0,O[f]=v>0?1:-1,u.push(O.x,O.y,O.z),h.push(ae/T),h.push(1-U/_),P+=1}}for(let U=0;U<_;U++)for(let G=0;G<T;G++){let ae=d+G+z*U,de=d+G+z*(U+1),ue=d+(G+1)+z*(U+1),K=d+(G+1)+z*U;c.push(ae,de,K),c.push(de,ue,K),Y+=6}o.addGroup(p,Y,E),p+=Y,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mr=class i extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],M=[],m=[];for(let f=0;f<u;f++){let b=f*d-a;for(let S=0;S<l;S++){let x=S*h-s;g.push(x,-b,0),M.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let S=b+l*f,x=b+l*(f+1),w=b+1+l*(f+1),v=b+1+l*f;p.push(S,x,v),p.push(x,w,v)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(M,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(qf(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(qf(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Cr(i[t]);for(let r in n)e[r]=n[r]}return e}function qf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function b0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var zp={clone:Cr,merge:ln},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(r.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},il=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sr=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rl=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Go(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function w0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Yf(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function E0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var fi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends fi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mu:s=e,o=2*t-n;break;case Su:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mu:a=e,c=2*n-t;break;case Su:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),M=g*g,m=M*g,f=-d*m+2*d*M-d*g,b=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*M+.5*g,x=p*m-p*M;for(let w=0;w!==o;++w)s[w]=f*a[u+w]+b*a[l+w]+S*a[c+w]+x*a[h+w];return s}},ol=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}},ll=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends fi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(r-t),M=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*M+a[c+m]*g;return s}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let M=a[l+g],m=a[c+g],f=p*d+g*2,b=h[f],S=h[f+1],x=e*d+g*2,w=u[x],v=u[x+1],T=A0(n,t,b,w,r);s[g]=Hp(T,M,S,v,m)}return s}};function Hp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function T0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function A0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Hp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=T0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Go(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Go(this.settings)&&(Zf(this.settings.inTangents,e),Zf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){st("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){st("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Og(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){st("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let M=t[h+g];if(M!==t[d+g]||M!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Go(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Zf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=yr;var Ui=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=xr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName="color";var Di=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Di.prototype.ValueTypeName="number";var ul=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)He.slerpFlat(s,0,a,l-o,a,l,c);return s}},pi=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=xr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Oi.prototype.ValueTypeName="vector";var Is=class{constructor(e="",t=-1,n=[],r=Ep){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(C0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Sn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=w0(c);c=Yf(c,1,u),l=Yf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function R0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return Aa;case"quaternion":return pi;case"bool":case"boolean":return Ui;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function C0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=R0(i.type);if(i.times===void 0){let n=[],r=[];E0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Go(i.settings)&&(t.settings={inTangents:er(i.settings.inTangents,Float32Array),outTangents:er(i.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vp=new hl,mi=class{constructor(e){this.manager=e!==void 0?e:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},Ps=class extends mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ui.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ii[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,M=0,m=new ReadableStream({start(f){b();function b(){h.read().then(({done:S,value:x})=>{if(S)f.close();else{M+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:p});for(let v=0,T=u.length;v<T;v++){let _=u[v];_.onProgress&&_.onProgress(w)}f.enqueue(x),b()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Eu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ui.add(`file:${e}`,l);let u=Ii[e];delete Ii[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var us=new WeakMap,dl=class extends mi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ui.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=us.get(a);h===void 0&&(h=[],us.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=xs("img");function c(){u(),t&&t(this);let h=us.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}us.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),ui.remove(`image:${e}`);let d=us.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var rr=class extends mi{constructor(e){super(e)}load(e,t,n,r){let s=new jt,a=new dl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},wr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ra=class extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xu=new Ye,$f=new D,Jf=new D,Ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ko=new D,zo=new He,li=new D,Ca=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,zo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ko,zo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new D,jf=new lt,Qf=new lt,Yt=class extends Ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Qf),t.subVectors(Qf,jf)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends Ls{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ia=class extends wr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Au=class extends Ls{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},Pa=class extends wr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},sr=class extends Ca{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends Ls{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yu=new WeakMap,La=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ui.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{yu.has(a)===!0?(r&&r(yu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ui.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),yu.set(c,l),ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=-90,ds=1,fl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(hs,ds,e,t);r.layers=this.layers,this.add(r);let s=new Yt(hs,ds,e,t);s.layers=this.layers,this.add(s);let a=new Yt(hs,ds,e,t);a.layers=this.layers,this.add(a);let o=new Yt(hs,ds,e,t);o.layers=this.layers,this.add(o);let c=new Yt(hs,ds,e,t);c.layers=this.layers,this.add(c);let l=new Yt(hs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},pl=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",I0=new RegExp("["+rh+"]","g"),sh="[^"+rh+"]",P0="[^"+rh.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",sh),N0=/(WCOD+)?/.source.replace("WCOD",P0),U0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),F0=new RegExp("^"+L0+N0+U0+D0+"$"),O0=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(e){let t=F0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);O0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;st("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Cu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OM=new Float32Array(1);var ep=new Ye,Er=class{constructor(e,t,n=0,r=1/0){this.ray=new nr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(tp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Iu(e[r],this,n,t);return n.sort(tp),n}};function tp(i,e){return i.distance-e.distance}function Iu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Iu(s[a],e,t,!0)}}var hh=class hh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};hh.prototype.isMatrix2=!0;var Pu=hh;function ah(i,e,t,n){let r=B0(n);switch(t){case $u:return i*e;case Sl:return i*e/r.components*r.byteLength;case wl:return i*e/r.components*r.byteLength;case lr:return i*e*2/r.components*r.byteLength;case El:return i*e*2/r.components*r.byteLength;case Ju:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case Tl:return i*e*4/r.components*r.byteLength;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Ll:case Ul:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nl:case za:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(i){switch(i){case En:case qu:return{byteLength:1,components:1};case Fs:case Yu:case ni:return{byteLength:2,components:1};case bl:case Ml:return{byteLength:2,components:4};case ti:case vl:case Nn:return{byteLength:4,components:1};case Zu:case Ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function um(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function V0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let M=h[p];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nx=`#ifdef USE_IRIDESCENCE
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
#endif`,ix=`#ifdef USE_BUMPMAP
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dx=`#define PI 3.141592653589793
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
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,px=`vec3 transformedNormal = objectNormal;
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
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,Hx=`uniform sampler2D dfgLUT;
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
}`,Vx=`
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qx=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
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
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
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
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ry=`float getShadowMask() {
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
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,$y=`#if DEPTH_PACKING == 3200
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
}`,Jy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:K0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:j0,begin_vertex:Q0,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:_x,colorspace_pars_fragment:vx,envmap_fragment:bx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Sx,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Dx,envmap_vertex:Ex,fog_vertex:Tx,fog_pars_vertex:Ax,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Px,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Nx,lights_pars_begin:Ux,lights_toon_fragment:Fx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Bx,lights_phong_pars_fragment:kx,lights_physical_fragment:zx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,lightprobes_pars_fragment:Xx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Kx,map_fragment:$x,map_pars_fragment:Jx,map_particle_fragment:jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:ay,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:xy,packing:yy,premultiplied_alpha_fragment:_y,project_vertex:vy,dithering_fragment:by,dithering_pars_fragment:My,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:wy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:Ry,skinbase_vertex:Cy,skinning_pars_vertex:Iy,skinning_vertex:Py,skinnormal_vertex:Ly,specularmap_fragment:Ny,specularmap_pars_fragment:Uy,tonemapping_fragment:Dy,tonemapping_pars_fragment:Fy,transmission_fragment:Oy,transmission_pars_fragment:By,uv_pars_fragment:ky,uv_pars_vertex:zy,uv_vertex:Hy,worldpos_vertex:Vy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:Zy,depth_vert:Ky,depth_frag:$y,distance_vert:Jy,distance_frag:jy,equirect_vert:Qy,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:x_,points_frag:y_,shadow_vert:__,shadow_frag:v_,sprite_vert:b_,sprite_frag:M_},Pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ln([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ln([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ln([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ln([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ln([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ln([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:ln([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:ln([Pe.lights,Pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};yi.physical={uniforms:ln([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ac={r:0,b:0,g:0},S_=new Ye,hm=new ot;hm.set(-1,0,0,0,1,0,0,0,1);function w_(i,e,t,n,r,s){let a=new nt(0),o=r===!0?0:1,c,l,u=null,h=0,d=null;function p(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let x=b.backgroundBlurriness>0;S=e.get(S,x)}return S}function g(b){let S=!1,x=p(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,S){let x=p(S);x&&(x.isCubeTexture||x.mapping===Da)?(l===void 0&&(l=new Vt(new Cs(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Cr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hm),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==wt,(u!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vt(new Mr(2,2),new Ln({name:"BackgroundMaterial",uniforms:Cr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(ac,ih(i)),t.buffers.color.setClear(ac.r,ac.g,ac.b,S,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:f}}function E_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,a=!1;function o(I,F,B,N,z){let L=!1,P=h(I,N,B,F);s!==P&&(s=P,l(s.object)),L=p(I,N,B,z),L&&g(I,N,B,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(I,F,B,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,F,B,N){let z=N.wireframe===!0,L=n[F.id];L===void 0&&(L={},n[F.id]=L);let P=I.isInstancedMesh===!0?I.id:0,Y=L[P];Y===void 0&&(Y={},L[P]=Y);let O=Y[B.id];O===void 0&&(O={},Y[B.id]=O);let U=O[z];return U===void 0&&(U=d(c()),O[z]=U),U}function d(I){let F=[],B=[],N=[];for(let z=0;z<t;z++)F[z]=0,B[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,F,B,N){let z=s.attributes,L=F.attributes,P=0,Y=B.getAttributes();for(let O in Y)if(Y[O].location>=0){let G=z[O],ae=L[O];if(ae===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),G===void 0||G.attribute!==ae||ae&&G.data!==ae.data)return!0;P++}return s.attributesNum!==P||s.index!==N}function g(I,F,B,N){let z={},L=F.attributes,P=0,Y=B.getAttributes();for(let O in Y)if(Y[O].location>=0){let G=L[O];G===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let ae={};ae.attribute=G,G&&G.data&&(ae.data=G.data),z[O]=ae,P++}s.attributes=z,s.attributesNum=P,s.index=N}function M(){let I=s.newAttributes;for(let F=0,B=I.length;F<B;F++)I[F]=0}function m(I){f(I,0)}function f(I,F){let B=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;B[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),z[I]!==F&&(i.vertexAttribDivisor(I,F),z[I]=F)}function b(){let I=s.newAttributes,F=s.enabledAttributes;for(let B=0,N=F.length;B<N;B++)F[B]!==I[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function S(I,F,B,N,z,L,P){P===!0?i.vertexAttribIPointer(I,F,B,z,L):i.vertexAttribPointer(I,F,B,N,z,L)}function x(I,F,B,N){M();let z=N.attributes,L=B.getAttributes(),P=F.defaultAttributeValues;for(let Y in L){let O=L[Y];if(O.location>=0){let U=z[Y];if(U===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){let G=U.normalized,ae=U.itemSize,de=e.get(U);if(de===void 0)continue;let ue=de.buffer,K=de.type,le=de.bytesPerElement,H=K===i.INT||K===i.UNSIGNED_INT||U.gpuType===vl;if(U.isInterleavedBufferAttribute){let $=U.data,xe=$.stride,Ne=U.offset;if($.isInstancedInterleavedBuffer){for(let fe=0;fe<O.locationSize;fe++)f(O.location+fe,$.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<O.locationSize;fe++)m(O.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let fe=0;fe<O.locationSize;fe++)S(O.location+fe,ae/O.locationSize,K,G,xe*le,(Ne+ae/O.locationSize*fe)*le,H)}else{if(U.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)f(O.location+$,U.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let $=0;$<O.locationSize;$++)m(O.location+$);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let $=0;$<O.locationSize;$++)S(O.location+$,ae/O.locationSize,K,G,ae*le,ae/O.locationSize*$*le,H)}}else if(P!==void 0){let G=P[Y];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(O.location,G);break;case 3:i.vertexAttrib3fv(O.location,G);break;case 4:i.vertexAttrib4fv(O.location,G);break;default:i.vertexAttrib1fv(O.location,G)}}}}b()}function w(){E();for(let I in n){let F=n[I];for(let B in F){let N=F[B];for(let z in N){let L=N[z];for(let P in L)u(L[P].object),delete L[P];delete N[z]}}delete n[I]}}function v(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let B in F){let N=F[B];for(let z in N){let L=N[z];for(let P in L)u(L[P].object),delete L[P];delete N[z]}}delete n[I.id]}function T(I){for(let F in n){let B=n[F];for(let N in B){let z=B[N];if(z[I.id]===void 0)continue;let L=z[I.id];for(let P in L)u(L[P].object),delete L[P];delete z[I.id]}}}function _(I){for(let F in n){let B=n[F],N=I.isInstancedMesh===!0?I.id:0,z=B[N];if(z!==void 0){for(let L in z){let P=z[L];for(let Y in P)u(P[Y].object),delete P[Y];delete z[L]}delete B[N],Object.keys(B).length===0&&delete n[F]}}}function E(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function T_(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function A_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==En&&T!==Nn&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,maxSamples:w,samples:v}}function R_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Pn,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:n,S=b*4,x=f.clippingState||null;c.value=x,x=u(g,d,S,p);for(let w=0;w!==S;++w)x[w]=t[w];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=c.value,g!==!0||m===null){let f=p+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==M;++S,x+=4)a.copy(h[S]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var zs=4,C_=6,I_=20,P_=256,Ga=new sr,Gp=new nt,dh=null,fh=0,ph=0,mh=!1,L_=new D,Ir=new D,Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=L_}=s;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ni,format:Un,colorSpace:gn,depthBuffer:!1},r=Wp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N_(s)),this._blurMaterial=D_(s,e,t),this._ggxMaterial=U_(s,e,t)}return r}_compileMaterial(e){let t=new Vt(new Qt,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,r,s){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Gp),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Cs,new an({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,f=!0):(m.color.copy(Gp),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));let w=this._cubeSize;ks(r,x*w,S>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(M,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ar||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ks(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,p=h*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-zs?n-g+zs:0),f=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,ks(s,m,f,3*M,2*M),r.setRenderTarget(s),r.render(o,Ga),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ks(e,m,f,3*M,2*M),r.setRenderTarget(e),r.render(o,Ga)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-zs?r-this._lodMax+zs:0),d=4*(this._cubeSize-u);ks(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Ga)}};function N_(i){let e=[],t=[],n=i,r=i-zs+1+C_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,p=3,g=new Float32Array(p*d*h),M=new Float32Array(p*d*h);for(let f=0;f<h;f++){let b=f%3*2/3-1,S=f>2?0:-1,x=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];g.set(x,p*d*f);for(let w=0;w<d;w++){let v=u[w*2]*2-1,T=u[w*2+1]*2-1;f===0?Ir.set(1,T,v):f===1?Ir.set(-v,1,-T):f===2?Ir.set(-v,T,1):f===3?Ir.set(-1,T,-v):f===4?Ir.set(-v,-1,T):Ir.set(v,T,-1),Ir.toArray(M,(f*d+w)*p)}}let m=new Qt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(M,p)),t.push(new Vt(m,null)),n>zs&&n--}return{lodMeshes:t,sizeLods:e}}function Wp(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function U_(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function D_(i,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Xp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function qp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ea(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:gi});s.uniforms.tEquirect.value=t;let a=new Vt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Ht),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function F_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===xl||p===yl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new lc(g.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===xl||p===yl,M=p===ar||p===Ar;if(g||M){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Vs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new Vs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===xl?d.mapping=ar:p===yl&&(d.mapping=Ar),d}function c(d){let p=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&p++;return p===g}function l(d){let p=d.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function O_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&gr("WebGLRenderer: "+n+" extension not supported."),r}}}function B_(i,e,t,n){let r={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,M=0;if(g===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let S=0,x=b.length;S<x;S+=3){let w=b[S+0],v=b[S+1],T=b[S+2];d.push(w,v,v,T,T,w)}}else{let b=g.array;M=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let w=S+0,v=S+1,T=S+2;d.push(w,v,v,T,T,w)}}let m=new(g.count>=65535?ya:xa)(d,1);m.version=M;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function k_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*a,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let M=0;for(let m=0;m<p;m++)M+=d[m];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function H_(i,e,t){let n=new WeakMap,r=new Tt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let x=o.attributes.position.count*S,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let v=new Float32Array(x*w*4*h),T=new ga(v,x,w,h);T.type=Nn,T.needsUpdate=!0;let _=S*4;for(let R=0;R<h;R++){let I=m[R],F=f[R],B=b[R],N=x*w*4*R;for(let z=0;z<I.count;z++){let L=z*_;p===!0&&(r.fromBufferAttribute(I,z),v[N+L+0]=r.x,v[N+L+1]=r.y,v[N+L+2]=r.z,v[N+L+3]=0),g===!0&&(r.fromBufferAttribute(F,z),v[N+L+4]=r.x,v[N+L+5]=r.y,v[N+L+6]=r.z,v[N+L+7]=0),M===!0&&(r.fromBufferAttribute(B,z),v[N+L+8]=r.x,v[N+L+9]=r.y,v[N+L+10]=r.z,v[N+L+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:T,size:new lt(x,w)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function V_(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var G_={[ku]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Ua]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function W_(i,e,t,n,r,s){let a=new vn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qt;l.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mn([0,2,0,0,2,0],2));let u=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vt(l,u),d=new sr(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,b=[],S=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),c!==null&&c.setSize(x,w);for(let v=0;v<b.length;v++){let T=b[v];T.setSize&&T.setSize(x,w)}},this.setEffects=function(x){b=x,S=b.length>0&&b[0].isRenderPass===!0;let w=a.width,v=a.height;b.length>0&&o===null&&(o=new vn(w,v,{type:ni,depthBuffer:!1,stencilBuffer:!1}),c=new vn(w,v,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let _=b[T];_.setSize&&_.setSize(w,v)}},this.begin=function(x,w){if(M||x.toneMapping===Qn&&b.length===0)return!1;if(f=w,w!==null){let v=w.width,T=w.height;(a.width!==v||a.height!==T)&&this.setSize(v,T)}return S===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return S},this.end=function(x,w){x.toneMapping=m,M=!0;let v=a,T=o;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(x,T,v,w),E.needsSwap!==!1&&(v=T,T=T===o?c:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,u.defines={},dt.getTransfer(p)===wt&&(u.defines.SRGB_TRANSFER="");let _=G_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(f),x.render(h,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var dm=new jt,yh=new ir(1,1),fm=new ga,pm=new Qo,mm=new Ea,Yp=[],Zp=[],Kp=new Float32Array(16),$p=new Float32Array(9),Jp=new Float32Array(4);function Gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Yp[r];if(s===void 0&&(s=new Float32Array(r),Yp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hc(i,e){let t=Zp[e];t===void 0&&(t=new Int32Array(e),Zp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function X_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Jp.set(n),i.uniformMatrix2fv(this.addr,!1,Jp),$t(t,n)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;$p.set(n),i.uniformMatrix3fv(this.addr,!1,$p),$t(t,n)}}function J_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Kp.set(n),i.uniformMatrix4fv(this.addr,!1,Kp),$t(t,n)}}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function av(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=t.isReversedDepthBuffer()?sc:rc,s=yh):s=dm,t.setTexture2D(e||s,r)}function ov(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pm,r)}function lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mm,r)}function cv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fm,r)}function uv(i){switch(i){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return K_;case 35675:return $_;case 35676:return J_;case 5124:case 35670:return j_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(i,e){i.uniform1fv(this.addr,e)}function dv(i,e){let t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){let t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){let t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){let t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){let t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xv(i,e){let t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function vv(i,e){i.uniform3iv(this.addr,e)}function bv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function wv(i,e){i.uniform3uiv(this.addr,e)}function Ev(i,e){i.uniform4uiv(this.addr,e)}function Tv(i,e,t){let n=this.cache,r=e.length,s=hc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=yh:a=dm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Av(i,e,t){let n=this.cache,r=e.length,s=hc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pm,s[a])}function Rv(i,e,t){let n=this.cache,r=e.length,s=hc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mm,s[a])}function Cv(i,e,t){let n=this.cache,r=e.length,s=hc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fm,s[a])}function Iv(i){switch(i){case 5126:return hv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return _v;case 35668:case 35672:return vv;case 35669:case 35673:return bv;case 5125:return Mv;case 36294:return Sv;case 36295:return wv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var _h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iv(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function jp(i,e){i.seq.push(e),i.map[e.id]=e}function Pv(i,e,t){let n=i.name,r=n.length;for(gh.lastIndex=0;;){let s=gh.exec(n),a=gh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jp(t,l===void 0?new _h(o,i,e):new vh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new bh(o),jp(t,h)),t=h}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Pv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Qp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Lv=37297,Nv=0;function Uv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var em=new ot;function Dv(i){dt._getMatrix(em,dt.workingColorSpace,i);let e=`mat3( ${em.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case pa:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Uv(i.getShaderSource(e),o)}else return s}function Fv(i,e){let t=Dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[ku]:"Linear",[zu]:"Reinhard",[Hu]:"Cineon",[Ua]:"ACESFilmic",[Gu]:"AgX",[Wu]:"Neutral",[Vu]:"Custom"};function Bv(i,e){let t=Ov[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new D;function kv(){dt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Hv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xa(i){return i!==""}function nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(Gv,Xv)}var Wv=new Map;function Xv(i,e){let t=ht[e];if(t===void 0){let n=Wv.get(e);if(n!==void 0)t=ht[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(t)}var qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(i){return i.replace(qv,Yv)}function Yv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Zv={[Na]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function Kv(i){return Zv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $v={[ar]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function Jv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$v[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jv={[Ar]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eb={[Bu]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function tb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eb[i.combine]||"ENVMAP_BLENDING_NONE"}function nb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ib(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Kv(t),l=Jv(t),u=Qv(t),h=tb(t),d=nb(t),p=zv(t),g=Hv(s),M=r.createProgram(),m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),f.length>0&&(f+=`
`)):(m=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),f=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ht.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Fv("linearToOutputTexel",t.outputColorSpace),kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),a=Mh(a),a=nm(a,t),a=im(a,t),o=Mh(o),o=nm(o,t),o=im(o,t),a=rm(a),o=rm(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=b+m+a,x=b+f+o,w=Qp(r,r.VERTEX_SHADER,S),v=Qp(r,r.FRAGMENT_SHADER,x);r.attachShader(M,w),r.attachShader(M,v),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function T(I){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(M)||"",B=r.getShaderInfoLog(w)||"",N=r.getShaderInfoLog(v)||"",z=F.trim(),L=B.trim(),P=N.trim(),Y=!0,O=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,w,v);else{let U=tm(r,w,"vertex"),G=tm(r,v,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+U+`
`+G)}else z!==""?Qe("WebGLProgram: Program Info Log:",z):(L===""||P==="")&&(O=!1);O&&(I.diagnostics={runnable:Y,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:P,prefix:f}})}r.deleteShader(w),r.deleteShader(v),_=new Hs(r,M),E=Vv(r,M)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(M,Lv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=v,this}var rb=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=rb++,this.code=e,this.usedTimes=0}};function sb(i){return i===lr||i===za||i===Ha}function ab(i,e,t,n,r,s){let a=new vs,o=new Sh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,E,R,I,F,B){let N=I.fog,z=F.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||L,P),O=Y&&Y.mapping===Da?Y.image.height:null,U=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=G!==void 0?G.length:0,de=0;z.morphAttributes.position!==void 0&&(de=1),z.morphAttributes.normal!==void 0&&(de=2),z.morphAttributes.color!==void 0&&(de=3);let ue,K,le,H;if(U){let yt=yi[U];ue=yt.vertexShader,K=yt.fragmentShader}else{ue=_.vertexShader,K=_.fragmentShader;let yt=o.getVertexShaderStage(_),gt=o.getFragmentShaderStage(_);o.update(_,yt,gt),le=yt.id,H=gt.id}let $=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,fe=F.isBatchedMesh===!0,me=!!_.map,Me=!!_.matcap,Ie=!!Y,Oe=!!_.aoMap,J=!!_.lightMap,j=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,ge=!!_.displacementMap,_e=!!_.emissiveMap,Ve=!!_.metalnessMap,et=!!_.roughnessMap,W=_.anisotropy>0,Ge=_.clearcoat>0,Re=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,V=_.sheen>0,k=_.transmission>0,q=W&&!!_.anisotropyMap,ie=Ge&&!!_.clearcoatMap,ce=Ge&&!!_.clearcoatNormalMap,re=Ge&&!!_.clearcoatRoughnessMap,oe=y&&!!_.iridescenceMap,ye=y&&!!_.iridescenceThicknessMap,De=V&&!!_.sheenColorMap,Se=V&&!!_.sheenRoughnessMap,Ee=!!_.specularMap,Be=!!_.specularColorMap,Ze=!!_.specularIntensityMap,Fe=k&&!!_.transmissionMap,Z=k&&!!_.thicknessMap,Te=!!_.gradientMap,he=!!_.alphaMap,we=_.alphaTest>0,Ae=!!_.alphaHash,pe=!!_.extensions,$e=Qn;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=i.toneMapping);let We={shaderID:U,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:K,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:fe,batchingColor:fe&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:me,matcap:Me,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:O,aoMap:Oe,lightMap:J,bumpMap:j,normalMap:ee,displacementMap:ge,emissiveMap:_e,normalMapObjectSpace:ee&&_.normalMapType===Ap,normalMapTangentSpace:ee&&_.normalMapType===ic,packedNormalMap:ee&&_.normalMapType===ic&&sb(_.normalMap.format),metalnessMap:Ve,roughnessMap:et,anisotropy:W,anisotropyMap:q,clearcoat:Ge,clearcoatMap:ie,clearcoatNormalMap:ce,clearcoatRoughnessMap:re,dispersion:Re,retroreflection:C,iridescence:y,iridescenceMap:oe,iridescenceThicknessMap:ye,sheen:V,sheenColorMap:De,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:Be,specularIntensityMap:Ze,transmission:k,transmissionMap:Fe,thicknessMap:Z,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:we,alphaHash:Ae,combine:_.combine,mapUv:me&&g(_.map.channel),aoMapUv:Oe&&g(_.aoMap.channel),lightMapUv:J&&g(_.lightMap.channel),bumpMapUv:j&&g(_.bumpMap.channel),normalMapUv:ee&&g(_.normalMap.channel),displacementMapUv:ge&&g(_.displacementMap.channel),emissiveMapUv:_e&&g(_.emissiveMap.channel),metalnessMapUv:Ve&&g(_.metalnessMap.channel),roughnessMapUv:et&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(_.sheenRoughnessMap.channel),specularMapUv:Ee&&g(_.specularMap.channel),specularColorMapUv:Be&&g(_.specularColorMap.channel),specularIntensityMapUv:Ze&&g(_.specularIntensityMap.channel),transmissionMapUv:Fe&&g(_.transmissionMap.channel),thicknessMapUv:Z&&g(_.thicknessMap.channel),alphaMapUv:he&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ee||W),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(me||he),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:me&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:_e&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let E=p[_.type],R;if(E){let I=yi[E];R=zp.clone(I.uniforms)}else R=_.uniforms;return R}function x(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new ib(i,E,_,r),l.push(R),u.set(E,R)),R}function w(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function T(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:w,releaseShaderCache:v,programs:l,dispose:T}}function ob(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function lb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function om(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,M,m,f){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[e]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=g,b.materialVariant=a(d),b.groupOrder=M,b.renderOrder=d.renderOrder,b.z=m,b.group=f),e++,b}function c(d,p,g,M,m,f,b){b.reversedDepth===!0&&(m=-m);let S=o(d,p,g,M,m,f);g.transmission>0?n.push(S):g.transparent===!0?r.push(S):t.push(S)}function l(d,p,g,M,m,f){let b=o(d,p,g,M,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(d,p){t.length>1&&t.sort(d||lb),n.length>1&&n.sort(p||am),r.length>1&&r.sort(p||am)}function h(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function cb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new om,i.set(n,[a])):r>=s.length?(a=new om,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ub(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new nt};break;case"SpotLight":t={position:new D,direction:new D,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function hb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var db=0;function fb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pb(i){let e=new ub,t=hb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Ye,a=new Ye;function o(l){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,b=0,S=0,x=0,w=0,v=0,T=0,_=0,E=0,R=0;l.sort(fb);for(let F=0,B=l.length;F<B;F++){let N=l[F],z=N.color,L=N.intensity,P=N.distance,Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===lr?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*L,h+=z.g*L,d+=z.b*L;else if(N.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(N.sh.coefficients[O],L);R++}else if(N.isSunLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=Y;let ae=U.getViewportCount();for(let de=0;de<ae;de++)n.sunShadowMatrix[M+de]=U.getMatrix(de),n.sunShadowCascade[M+de]=U._cascadeData[de];M+=ae,g++}n.sun[p]=O,p++}else if(N.isDirectionalLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=O,m++}else if(N.isSpotLight){let O=e.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(z).multiplyScalar(L),O.distance=P,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,n.spot[b]=O;let U=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,U.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=U.matrix,N.castShadow){let G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=Y,T++}b++}else if(N.isRectAreaLight){let O=e.get(N);O.color.copy(z).multiplyScalar(L),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=O,S++}else if(N.isPointLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,n.pointShadow[f]=G,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=N.shadow.matrix,v++}n.point[f]=O,f++}else if(N.isHemisphereLight){let O=e.get(N);O.skyColor.copy(N.color).multiplyScalar(L),O.groundColor.copy(N.groundColor).multiplyScalar(L),n.hemi[x]=O,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==b||I.rectAreaLength!==S||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==v||I.numSpotShadows!==T||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=S,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=b,I.rectAreaLength=S,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=v,I.numSpotShadows=T,I.numSpotMaps=_,I.numLightProbes=R,n.version=db++)}function c(l,u){let h=0,d=0,p=0,g=0,M=0,m=0,f=u.matrixWorldInverse;for(let b=0,S=l.length;b<S;b++){let x=l[b];if(x.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),h++}else if(x.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(x.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function lm(i){let e=new pb(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function mb(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new lm(i),e.set(r,[o])):s>=a.length?(o=new lm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`,yb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],_b=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],cm=new Ye,Wa=new D,xh=new D;function vb(i,e,t){let n=new Ts,r=new lt,s=new lt,a=new Tt,o=new rl,c=new sl,l={},u=t.maxTextureSize,h={[wn]:xn,[xn]:wn,[en]:en},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:gb,fragmentShader:xb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let f=this.type;this.render=function(v,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===gl&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Na);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=f!==this.type;B&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=v.length;N<z;N++){let L=v[N],P=L.shadow;if(P===void 0){Qe("WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let Y=P.getFrameExtents();r.multiply(Y),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,P.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=O,P.map===null||B===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Ns){if(L.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new vn(r.x,r.y,{format:lr,type:ni,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),P.map.texture.name=L.name+".shadowMap",P.map.depthTexture=new ir(r.x,r.y,Nn),P.map.depthTexture.name=L.name+".shadowMapDepth",P.map.depthTexture.format=hi,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=zt,P.map.depthTexture.magFilter=zt}else L.isPointLight?(P.map=new lc(r.x),P.map.depthTexture=new nl(r.x,ti)):(P.map=new vn(r.x,r.y),P.map.depthTexture=new ir(r.x,r.y,ti)),P.map.depthTexture.name=L.name+".shadowMap",P.map.depthTexture.format=hi,this.type===Na?(P.map.depthTexture.compareFunction=O?sc:rc,P.map.depthTexture.minFilter=Ht,P.map.depthTexture.magFilter=Ht):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=zt,P.map.depthTexture.magFilter=zt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==r.x||P.map.height!==r.y)&&P.map.setSize(r.x,r.y);let U=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();L.isPointLight!==!0&&P.updateMatrices(L,_);for(let G=0;G<U;G++){let ae=P.getCamera(G);if(L.isPointLight){let de=P.camera,ue=P.matrix,K=L.distance||de.far;K!==de.far&&(de.far=K,de.updateProjectionMatrix()),Wa.setFromMatrixPosition(L.matrixWorld),de.position.copy(Wa),xh.copy(de.position),xh.add(yb[G]),de.up.copy(_b[G]),de.lookAt(xh),de.updateMatrixWorld(),ue.makeTranslation(-Wa.x,-Wa.y,-Wa.z),cm.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),P._frustum.setFromProjectionMatrix(cm,de.coordinateSystem,de.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,G),i.clear();else{G===0&&(i.setRenderTarget(P.map),i.clear());let de=P.getViewport(G);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(a)}n=P.getFrustum(G),x(T,_,ae,L,this.type)}P.isPointLightShadow!==!0&&this.type===Ns&&b(P,_),P.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,I)};function b(v,T){let _=e.update(M);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new vn(r.x,r.y,{format:lr,type:ni}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,_,d,M,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,_,p,M,null)}function S(v,T,_,E){let R=null,I=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=R.uuid,B=T.uuid,N=l[F];N===void 0&&(N={},l[F]=N);let z=N[B];z===void 0&&(z=R.clone(),N[B]=z,T.addEventListener("dispose",w)),R=z}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Ns?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=_}return R}function x(v,T,_,E,R){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Ns)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let B=e.update(v),N=v.material;if(Array.isArray(N)){let z=B.groups;for(let L=0,P=z.length;L<P;L++){let Y=z[L],O=N[Y.materialIndex];if(O&&O.visible){let U=S(v,O,E,R);v.onBeforeShadow(i,v,T,_,B,U,Y),i.renderBufferDirect(_,null,B,U,v,Y),v.onAfterShadow(i,v,T,_,B,U,Y)}}}else if(N.visible){let z=S(v,N,E,R);v.onBeforeShadow(i,v,T,_,B,z,null),i.renderBufferDirect(_,null,B,z,v,null),v.onAfterShadow(i,v,T,_,B,z,null)}}let F=v.children;for(let B=0,N=F.length;B<N;B++)x(F[B],T,_,E,R)}function w(v){v.target.removeEventListener("dispose",w);for(let _ in l){let E=l[_],R=v.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function bb(i,e){function t(){let Z=!1,Te=new Tt,he=null,we=new Tt(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!Z&&(i.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){Z=Ae},setClear:function(Ae,pe,$e,We,yt){yt===!0&&(Ae*=We,pe*=We,$e*=We),Te.set(Ae,pe,$e,We),we.equals(Te)===!1&&(i.clearColor(Ae,pe,$e,We),we.copy(Te))},reset:function(){Z=!1,he=null,we.set(-1,0,0,0)}}}function n(){let Z=!1,Te=!1,he=null,we=null,Ae=null;return{setReversed:function(pe){if(Te!==pe){let $e=e.get("EXT_clip_control");pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;let We=Ae;Ae=null,this.setClear(We)}},getReversed:function(){return Te},setTest:function(pe){pe?$(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(pe){he!==pe&&!Z&&(i.depthMask(pe),he=pe)},setFunc:function(pe){if(Te&&(pe=Bp[pe]),we!==pe){switch(pe){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=pe}},setLocked:function(pe){Z=pe},setClear:function(pe){Ae!==pe&&(Ae=pe,Te&&(pe=1-pe),i.clearDepth(pe))},reset:function(){Z=!1,he=null,we=null,Ae=null,Te=!1}}}function r(){let Z=!1,Te=null,he=null,we=null,Ae=null,pe=null,$e=null,We=null,yt=null;return{setTest:function(gt){Z||(gt?$(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(gt){Te!==gt&&!Z&&(i.stencilMask(gt),Te=gt)},setFunc:function(gt,cn,An){(he!==gt||we!==cn||Ae!==An)&&(i.stencilFunc(gt,cn,An),he=gt,we=cn,Ae=An)},setOp:function(gt,cn,An){(pe!==gt||$e!==cn||We!==An)&&(i.stencilOp(gt,cn,An),pe=gt,$e=cn,We=An)},setLocked:function(gt){Z=gt},setClear:function(gt){yt!==gt&&(i.clearStencil(gt),yt=gt)},reset:function(){Z=!1,Te=null,he=null,we=null,Ae=null,pe=null,$e=null,We=null,yt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,S=null,x=null,w=null,v=null,T=null,_=new nt(0,0,0),E=0,R=!1,I=null,F=null,B=null,N=null,z=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,Y=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),P=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),P=Y>=2);let U=null,G={},ae=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),ue=new Tt().fromArray(ae),K=new Tt().fromArray(de);function le(Z,Te,he,we){let Ae=new Uint8Array(4),pe=i.createTexture();i.bindTexture(Z,pe),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<he;$e++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Te+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return pe}let H={};H[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ps),j(!1),ee(Lu),$(i.CULL_FACE),Oe(gi);function $(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function xe(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function Ne(Z,Te){return d[Z]!==Te?(i.bindFramebuffer(Z,Te),d[Z]=Te,Z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),Z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function fe(Z,Te){let he=g,we=!1;if(Z){he=p.get(Te),he===void 0&&(he=[],p.set(Te,he));let Ae=Z.textures;if(he.length!==Ae.length||he[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,$e=Ae.length;pe<$e;pe++)he[pe]=i.COLOR_ATTACHMENT0+pe;he.length=Ae.length,we=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,we=!0);we&&i.drawBuffers(he)}function me(Z){return M!==Z?(i.useProgram(Z),M=Z,!0):!1}let Me={[Tr]:i.FUNC_ADD,[sp]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};Me[op]=i.MIN,Me[lp]=i.MAX;let Ie={[cp]:i.ZERO,[up]:i.ONE,[hp]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[xp]:i.SRC_ALPHA_SATURATE,[mp]:i.DST_COLOR,[fp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[_p]:i.ONE_MINUS_CONSTANT_COLOR,[vp]:i.CONSTANT_ALPHA,[bp]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(Z,Te,he,we,Ae,pe,$e,We,yt,gt){if(Z===gi){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),Z!==rp){if(Z!==f||gt!==R){if((b!==Tr||w!==Tr)&&(i.blendEquation(i.FUNC_ADD),b=Tr,w=Tr),gt)switch(Z){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",Z);break}S=null,x=null,v=null,T=null,_.set(0,0,0),E=0,f=Z,R=gt}return}Ae=Ae||Te,pe=pe||he,$e=$e||we,(Te!==b||Ae!==w)&&(i.blendEquationSeparate(Me[Te],Me[Ae]),b=Te,w=Ae),(he!==S||we!==x||pe!==v||$e!==T)&&(i.blendFuncSeparate(Ie[he],Ie[we],Ie[pe],Ie[$e]),S=he,x=we,v=pe,T=$e),(We.equals(_)===!1||yt!==E)&&(i.blendColor(We.r,We.g,We.b,yt),_.copy(We),E=yt),f=Z,R=!1}function J(Z,Te){Z.side===en?xe(i.CULL_FACE):$(i.CULL_FACE);let he=Z.side===xn;Te&&(he=!he),j(he),Z.blending===Us&&Z.transparent===!1?Oe(gi):Oe(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),s.setMask(Z.colorWrite);let we=Z.stencilWrite;o.setTest(we),we&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),_e(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(Z){I!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),I=Z)}function ee(Z){Z!==np?($(i.CULL_FACE),Z!==F&&(Z===Lu?i.cullFace(i.BACK):Z===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=Z}function ge(Z){Z!==B&&(P&&i.lineWidth(Z),B=Z)}function _e(Z,Te,he){Z?($(i.POLYGON_OFFSET_FILL),(N!==Te||z!==he)&&(N=Te,z=he,a.getReversed()&&(Te=-Te),i.polygonOffset(Te,he))):xe(i.POLYGON_OFFSET_FILL)}function Ve(Z){Z?$(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function et(Z){Z===void 0&&(Z=i.TEXTURE0+L-1),U!==Z&&(i.activeTexture(Z),U=Z)}function W(Z,Te,he){he===void 0&&(U===null?he=i.TEXTURE0+L-1:he=U);let we=G[he];we===void 0&&(we={type:void 0,texture:void 0},G[he]=we),(we.type!==Z||we.texture!==Te)&&(U!==he&&(i.activeTexture(he),U=he),i.bindTexture(Z,Te||H[Z]),we.type=Z,we.texture=Te)}function Ge(){let Z=G[U];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Re(){try{i.compressedTexImage2D(...arguments)}catch(Z){st("WebGLState:",Z)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(Z){st("WebGLState:",Z)}}function y(){try{i.texSubImage2D(...arguments)}catch(Z){st("WebGLState:",Z)}}function V(){try{i.texSubImage3D(...arguments)}catch(Z){st("WebGLState:",Z)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){st("WebGLState:",Z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){st("WebGLState:",Z)}}function ie(){try{i.texStorage2D(...arguments)}catch(Z){st("WebGLState:",Z)}}function ce(){try{i.texStorage3D(...arguments)}catch(Z){st("WebGLState:",Z)}}function re(){try{i.texImage2D(...arguments)}catch(Z){st("WebGLState:",Z)}}function oe(){try{i.texImage3D(...arguments)}catch(Z){st("WebGLState:",Z)}}function ye(Z){return h[Z]!==void 0?h[Z]:i.getParameter(Z)}function De(Z,Te){h[Z]!==Te&&(i.pixelStorei(Z,Te),h[Z]=Te)}function Se(Z){ue.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),ue.copy(Z))}function Ee(Z){K.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),K.copy(Z))}function Be(Z,Te){let he=l.get(Te);he===void 0&&(he=new WeakMap,l.set(Te,he));let we=he.get(Z);we===void 0&&(we=i.getUniformBlockIndex(Te,Z.name),he.set(Z,we))}function Ze(Z,Te){let we=l.get(Te).get(Z);c.get(Te)!==we&&(i.uniformBlockBinding(Te,we,Z.__bindingPointIndex),c.set(Te,we))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,G={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,S=null,x=null,w=null,v=null,T=null,_=new nt(0,0,0),E=0,R=!1,I=null,F=null,B=null,N=null,z=null,ue.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:xe,bindFramebuffer:Ne,drawBuffers:fe,useProgram:me,setBlending:Oe,setMaterial:J,setFlipSided:j,setCullFace:ee,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:Ve,activeTexture:et,bindTexture:W,unbindTexture:Ge,compressedTexImage2D:Re,compressedTexImage3D:C,texImage2D:re,texImage3D:oe,pixelStorei:De,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:Ze,texStorage2D:ie,texStorage3D:ce,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:k,compressedTexSubImage3D:q,scissor:Se,viewport:Ee,reset:Fe}}function Mb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap,h=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return g?new OffscreenCanvas(C,y):xs("canvas")}function m(C,y,V){let k=1,q=Re(C);if((q.width>V||q.height>V)&&(k=V/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ie=Math.floor(k*q.width),ce=Math.floor(k*q.height);d===void 0&&(d=M(ie,ce));let re=y?M(ie,ce):d;return re.width=ie,re.height=ce,re.getContext("2d").drawImage(C,0,0,ie,ce),Qe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+ce+")."),re}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function f(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,y,V,k,q,ie=!1){if(C!==null){if(i[C]!==void 0)return i[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;k&&(ce=e.get("EXT_texture_norm16"),ce||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=y;if(y===i.RED&&(V===i.FLOAT&&(re=i.R32F),V===i.HALF_FLOAT&&(re=i.R16F),V===i.UNSIGNED_BYTE&&(re=i.R8),V===i.UNSIGNED_SHORT&&ce&&(re=ce.R16_EXT),V===i.SHORT&&ce&&(re=ce.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.R8UI),V===i.UNSIGNED_SHORT&&(re=i.R16UI),V===i.UNSIGNED_INT&&(re=i.R32UI),V===i.BYTE&&(re=i.R8I),V===i.SHORT&&(re=i.R16I),V===i.INT&&(re=i.R32I)),y===i.RG&&(V===i.FLOAT&&(re=i.RG32F),V===i.HALF_FLOAT&&(re=i.RG16F),V===i.UNSIGNED_BYTE&&(re=i.RG8),V===i.UNSIGNED_SHORT&&ce&&(re=ce.RG16_EXT),V===i.SHORT&&ce&&(re=ce.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RG8UI),V===i.UNSIGNED_SHORT&&(re=i.RG16UI),V===i.UNSIGNED_INT&&(re=i.RG32UI),V===i.BYTE&&(re=i.RG8I),V===i.SHORT&&(re=i.RG16I),V===i.INT&&(re=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGB8UI),V===i.UNSIGNED_SHORT&&(re=i.RGB16UI),V===i.UNSIGNED_INT&&(re=i.RGB32UI),V===i.BYTE&&(re=i.RGB8I),V===i.SHORT&&(re=i.RGB16I),V===i.INT&&(re=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),V===i.UNSIGNED_INT&&(re=i.RGBA32UI),V===i.BYTE&&(re=i.RGBA8I),V===i.SHORT&&(re=i.RGBA16I),V===i.INT&&(re=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&ce&&(re=ce.RGB16_EXT),V===i.SHORT&&ce&&(re=ce.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),y===i.RGBA){let oe=ie?pa:dt.getTransfer(q);V===i.FLOAT&&(re=i.RGBA32F),V===i.HALF_FLOAT&&(re=i.RGBA16F),V===i.UNSIGNED_BYTE&&(re=oe===wt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ce&&(re=ce.RGBA16_EXT),V===i.SHORT&&ce&&(re=ce.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(C,y){let V;return C?y===null||y===ti||y===Os?V=i.DEPTH24_STENCIL8:y===Nn?V=i.DEPTH32F_STENCIL8:y===Fs&&(V=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===Os?V=i.DEPTH_COMPONENT24:y===Nn?V=i.DEPTH_COMPONENT32F:y===Fs&&(V=i.DEPTH_COMPONENT16),V}function v(C,y){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){let y=C.target;y.removeEventListener("dispose",T),E(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),I(y)}function E(C){let y=n.get(C);if(y.__webglInit===void 0)return;let V=C.source,k=p.get(V);if(k){let q=k[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(k).length===0&&p.delete(V)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let V=C.source,k=p.get(V);delete k[y.__cacheKey],a.memory.textures--}function I(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let q=0;q<y.__webglFramebuffer[k].length;q++)i.deleteFramebuffer(y.__webglFramebuffer[k][q]);else i.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)i.deleteFramebuffer(y.__webglFramebuffer[k]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=C.textures;for(let k=0,q=V.length;k<q;k++){let ie=n.get(V[k]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(V[k])}n.remove(C)}let F=0;function B(){F=0}function N(){return F}function z(C){F=C}function L(){let C=F;return C>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function P(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){let V=n.get(C);if(C.isVideoTexture&&W(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let k=C.image;if(k===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function O(C,y){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){xe(V,C,y);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function U(C,y){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){xe(V,C,y);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function G(C,y){let V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Ne(V,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let ae={[tr]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[ms]:i.MIRRORED_REPEAT},de={[zt]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ue={[Cp]:i.NEVER,[Up]:i.ALWAYS,[Ip]:i.LESS,[rc]:i.LEQUAL,[Pp]:i.EQUAL,[sc]:i.GEQUAL,[Lp]:i.GREATER,[Np]:i.NOTEQUAL};function K(C,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ht||y.magFilter===Ds||y.magFilter===Rr||y.magFilter===ei||y.minFilter===Ht||y.minFilter===Ds||y.minFilter===Rr||y.minFilter===ei)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ae[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ae[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ae[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==Rr&&y.minFilter!==ei||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function le(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));let k=y.source,q=p.get(k);q===void 0&&(q={},p.set(k,q));let ie=P(y);if(ie!==C.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),q[ie].usedTimes++;let ce=q[C.__cacheKey];ce!==void 0&&(q[C.__cacheKey].usedTimes--,ce.usedTimes===0&&R(y)),C.__cacheKey=ie,C.__webglTexture=q[ie].texture}return V}function H(C,y,V){return Math.floor(Math.floor(C/V)/y)}function $(C,y,V,k){let ie=C.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,k,y.data);else{ie.sort((De,Se)=>De.start-Se.start);let ce=0;for(let De=1;De<ie.length;De++){let Se=ie[ce],Ee=ie[De],Be=Se.start+Se.count,Ze=H(Ee.start,y.width,4),Fe=H(Se.start,y.width,4);Ee.start<=Be+1&&Ze===Fe&&H(Ee.start+Ee.count-1,y.width,4)===Ze?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++ce,ie[ce]=Ee)}ie.length=ce+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let De=0,Se=ie.length;De<Se;De++){let Ee=ie[De],Be=Math.floor(Ee.start/4),Ze=Math.ceil(Ee.count/4),Fe=Be%y.width,Z=Math.floor(Be/y.width),Te=Ze,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,Fe,Z,Te,he,V,k,y.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function xe(C,y,V){let k=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=i.TEXTURE_3D);let q=le(C,y),ie=y.source;t.bindTexture(k,C.__webglTexture,i.TEXTURE0+V);let ce=n.get(ie);if(ie.version!==ce.__version||q===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let he=dt.getPrimaries(dt.workingColorSpace),we=y.colorSpace===ii?null:dt.getPrimaries(y.colorSpace),Ae=y.colorSpace===ii||he===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=m(y.image,!1,r.maxTextureSize);oe=Ge(y,oe);let ye=s.convert(y.format,y.colorSpace),De=s.convert(y.type),Se=x(y.internalFormat,ye,De,y.normalized,y.colorSpace,y.isVideoTexture);K(k,y);let Ee,Be=y.mipmaps,Ze=y.isVideoTexture!==!0,Fe=ce.__version===void 0||q===!0,Z=ie.dataReady,Te=v(y,oe);if(y.isDepthTexture)Se=w(y.format===or,y.type),Fe&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Se,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Se,oe.width,oe.height,0,ye,De,null));else if(y.isDataTexture)if(Be.length>0){Ze&&Fe&&t.texStorage2D(i.TEXTURE_2D,Te,Se,Be[0].width,Be[0].height);for(let he=0,we=Be.length;he<we;he++)Ee=Be[he],Ze?Z&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,ye,De,Ee.data):t.texImage2D(i.TEXTURE_2D,he,Se,Ee.width,Ee.height,0,ye,De,Ee.data);y.generateMipmaps=!1}else Ze?(Fe&&t.texStorage2D(i.TEXTURE_2D,Te,Se,oe.width,oe.height),Z&&$(y,oe,ye,De)):t.texImage2D(i.TEXTURE_2D,0,Se,oe.width,oe.height,0,ye,De,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Se,Be[0].width,Be[0].height,oe.depth);for(let he=0,we=Be.length;he<we;he++)if(Ee=Be[he],y.format!==Un)if(ye!==null)if(Ze){if(Z)if(y.layerUpdates.size>0){let Ae=ah(Ee.width,Ee.height,y.format,y.type);for(let pe of y.layerUpdates){let $e=Ee.data.subarray(pe*Ae/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Ae/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,pe,Ee.width,Ee.height,1,ye,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,oe.depth,ye,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Se,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,oe.depth,ye,De,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Se,Ee.width,Ee.height,oe.depth,0,ye,De,Ee.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ze&&Fe&&t.texStorage2D(i.TEXTURE_2D,Te,Se,Be[0].width,Be[0].height);for(let he=0,we=Be.length;he<we;he++)Ee=Be[he],y.format!==Un?ye!==null?Ze?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Se,Ee.width,Ee.height,0,Ee.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?Z&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,ye,De,Ee.data):t.texImage2D(i.TEXTURE_2D,he,Se,Ee.width,Ee.height,0,ye,De,Ee.data)}else if(y.isDataArrayTexture)if(Ze){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Se,oe.width,oe.height,oe.depth),Z)if(y.layerUpdates.size>0){let he=ah(oe.width,oe.height,y.format,y.type);for(let we of y.layerUpdates){let Ae=oe.data.subarray(we*he/oe.data.BYTES_PER_ELEMENT,(we+1)*he/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,oe.width,oe.height,1,ye,De,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,De,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,ye,De,oe.data);else if(y.isData3DTexture)Ze?(Fe&&t.texStorage3D(i.TEXTURE_3D,Te,Se,oe.width,oe.height,oe.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,De,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,ye,De,oe.data);else if(y.isFramebufferTexture){if(Fe)if(Ze)t.texStorage2D(i.TEXTURE_2D,Te,Se,oe.width,oe.height);else{let he=oe.width,we=oe.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Se,he,we,0,ye,De,null),he>>=1,we>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),oe.parentNode!==he){he.appendChild(oe),h.add(y),he.onpaint=we=>{let Ae=we.changedElements;for(let pe of h)Ae.includes(pe.image)&&(pe.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Ae=i.RGBA,pe=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,pe,$e,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ze&&Fe){let he=Re(Be[0]);t.texStorage2D(i.TEXTURE_2D,Te,Se,he.width,he.height)}for(let he=0,we=Be.length;he<we;he++)Ee=Be[he],Ze?Z&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye,De,Ee):t.texImage2D(i.TEXTURE_2D,he,Se,ye,De,Ee);y.generateMipmaps=!1}else if(Ze){if(Fe){let he=Re(oe);t.texStorage2D(i.TEXTURE_2D,Te,Se,he.width,he.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,De,oe)}else t.texImage2D(i.TEXTURE_2D,0,Se,ye,De,oe);f(y)&&b(k),ce.__version=ie.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ne(C,y,V){if(y.image.length!==6)return;let k=le(C,y),q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let ie=n.get(q);if(q.version!==ie.__version||k===!0){t.activeTexture(i.TEXTURE0+V);let ce=dt.getPrimaries(dt.workingColorSpace),re=y.colorSpace===ii?null:dt.getPrimaries(y.colorSpace),oe=y.colorSpace===ii||ce===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!ye&&!De?Se[pe]=m(y.image[pe],!0,r.maxCubemapSize):Se[pe]=De?y.image[pe].image:y.image[pe],Se[pe]=Ge(y,Se[pe]);let Ee=Se[0],Be=s.convert(y.format,y.colorSpace),Ze=s.convert(y.type),Fe=x(y.internalFormat,Be,Ze,y.normalized,y.colorSpace),Z=y.isVideoTexture!==!0,Te=ie.__version===void 0||k===!0,he=q.dataReady,we=v(y,Ee);K(i.TEXTURE_CUBE_MAP,y);let Ae;if(ye){Z&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Fe,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){Ae=Se[pe].mipmaps;for(let $e=0;$e<Ae.length;$e++){let We=Ae[$e];y.format!==Un?Be!==null?Z?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,0,0,We.width,We.height,Be,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,Fe,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,0,0,We.width,We.height,Be,Ze,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,Fe,We.width,We.height,0,Be,Ze,We.data)}}}else{if(Ae=y.mipmaps,Z&&Te){Ae.length>0&&we++;let pe=Re(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Fe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(De){Z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Be,Ze,Se[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Fe,Se[pe].width,Se[pe].height,0,Be,Ze,Se[pe].data);for(let $e=0;$e<Ae.length;$e++){let yt=Ae[$e].image[pe].image;Z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,0,0,yt.width,yt.height,Be,Ze,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,Fe,yt.width,yt.height,0,Be,Ze,yt.data)}}else{Z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,Ze,Se[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Fe,Be,Ze,Se[pe]);for(let $e=0;$e<Ae.length;$e++){let We=Ae[$e];Z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,0,0,Be,Ze,We.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,Fe,Be,Ze,We.image[pe])}}}f(y)&&b(i.TEXTURE_CUBE_MAP),ie.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function fe(C,y,V,k,q,ie){let ce=s.convert(V.format,V.colorSpace),re=s.convert(V.type),oe=x(V.internalFormat,ce,re,V.normalized,V.colorSpace),ye=n.get(y),De=n.get(V);if(De.__renderTarget=y,!ye.__hasExternalTextures){let Se=Math.max(1,y.width>>ie),Ee=Math.max(1,y.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,oe,Se,Ee,y.depth,0,ce,re,null):t.texImage2D(q,ie,oe,Se,Ee,0,ce,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,q,De.__webglTexture,0,Ve(y)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,q,De.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let k=y.depthTexture,q=k&&k.isDepthTexture?k.type:null,ie=w(y.stencilBuffer,q),ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(y),ie,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,C)}else{let k=y.textures;for(let q=0;q<k.length;q++){let ie=k[q],ce=s.convert(ie.format,ie.colorSpace),re=s.convert(ie.type),oe=x(ie.internalFormat,ce,re,ie.normalized,ie.colorSpace);et(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(y),oe,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(y),oe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,oe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(C,y,V){let k=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),K(i.TEXTURE_CUBE_MAP,y.depthTexture);let ye=s.convert(y.depthTexture.format),De=s.convert(y.depthTexture.type),Se;y.depthTexture.format===hi?Se=i.DEPTH_COMPONENT24:y.depthTexture.format===or&&(Se=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,y.width,y.height,0,ye,De,null)}}else Y(y.depthTexture,0);let ie=q.__webglTexture,ce=Ve(y),re=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,oe=y.depthTexture.format===or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,ie,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,ie,0);else if(y.depthTexture.format===or)et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,ie,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(C){let y=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=k}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let k=0;k<6;k++)Me(y.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?Me(y.__webglFramebuffer[0],C,0):Me(y.__webglFramebuffer,C,0)}else if(V){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=i.createRenderbuffer(),me(y.__webglDepthbuffer[k],C,!1);else{let q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),me(y.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,y,V){let k=n.get(C);y!==void 0&&fe(k.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ie(C)}function J(C){let y=C.texture,V=n.get(C),k=n.get(y);C.addEventListener("dispose",_);let q=C.textures,ie=C.isWebGLCubeRenderTarget===!0,ce=q.length>1;if(ce||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=y.version,a.memory.textures++),ie){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let oe=0;oe<y.mipmaps.length;oe++)V.__webglFramebuffer[re][oe]=i.createFramebuffer()}else V.__webglFramebuffer[re]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)V.__webglFramebuffer[re]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ce)for(let re=0,oe=q.length;re<oe;re++){let ye=n.get(q[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&et(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<q.length;re++){let oe=q[re];V.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[re]);let ye=s.convert(oe.format,oe.colorSpace),De=s.convert(oe.type),Se=x(oe.internalFormat,ye,De,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),Ee=Ve(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,V.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),me(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),K(i.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)fe(V.__webglFramebuffer[re][oe],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else fe(V.__webglFramebuffer[re],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let re=0,oe=q.length;re<oe;re++){let ye=q[re],De=n.get(ye),Se=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,De.__webglTexture),K(Se,ye),fe(V.__webglFramebuffer,C,ye,i.COLOR_ATTACHMENT0+re,Se,0),f(ye)&&b(Se)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,k.__webglTexture),K(re,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)fe(V.__webglFramebuffer[oe],C,y,i.COLOR_ATTACHMENT0,re,oe);else fe(V.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,re,0);f(y)&&b(re),t.unbindTexture()}C.depthBuffer&&Ie(C)}function j(C){let y=C.textures;for(let V=0,k=y.length;V<k;V++){let q=y[V];if(f(q)){let ie=S(C),ce=n.get(q).__webglTexture;t.bindTexture(ie,ce),b(ie),t.unbindTexture()}}}let ee=[],ge=[];function _e(C){if(C.samples>0){if(et(C)===!1){let y=C.textures,V=C.width,k=C.height,q=i.COLOR_BUFFER_BIT,ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(C),re=y.length>1;if(re)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let oe=C.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);let De=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,V,k,0,0,V,k,q,i.NEAREST),c===!0&&(ee.length=0,ge.length=0,ee.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ee.push(ie),ge.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);let De=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function et(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function W(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ge(C,y){let V=C.colorSpace,k=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==gn&&V!==ii&&(dt.getTransfer(V)===wt?(k!==Un||q!==En)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",V)),y}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sb(i,e){function t(n,r=ii){let s,a=dt.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return i.BYTE;if(n===Yu)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===Ju)return i.RGB;if(n===Un)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===Sl)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===ka)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Nl||n===Ul||n===Dl||n===za||n===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Ll)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return s.COMPRESSED_R11_EAC;if(n===Dl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===za)return s.COMPRESSED_RG11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ol)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===jl||n===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jl)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===Ha||n===nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:wb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends di{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Eh,f={},b=t.getContextAttributes(),S=null,x=null,w=[],v=[],T=new lt,_=null,E=null,R=new Yt;R.viewport=new Tt;let I=new Yt;I.viewport=new Tt;let F=[R,I],B=new pl,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=w[H];return $===void 0&&($=new bs,w[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=w[H];return $===void 0&&($=new bs,w[H]=$),$.getGripSpace()},this.getHand=function(H){let $=w[H];return $===void 0&&($=new bs,w[H]=$),$.getHandSpace()};function L(H){let $=v.indexOf(H.inputSource);if($===-1)return;let xe=w[$];xe!==void 0&&(xe.update(H.inputSource,H.frame,l||a),xe.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",Y);for(let H=0;H<w.length;H++){let $=v[H];$!==null&&(v[H]=null,w[H].disconnect($))}N=null,z=null,m.reset();for(let H in f)delete f[H];if(e.setRenderTarget(S),p=null,d=null,h=null,r=null,x=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let H=E.camera;H.fov=E.fov,H.zoom=E.zoom,H.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",P),r.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ne=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?or:hi,Ne=b.stencil?Os:ti);let me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new vn(d.textureWidth,d.textureHeight,{format:Un,type:En,depthTexture:new ir(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new vn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:En,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(H){for(let $=0;$<H.removed.length;$++){let xe=H.removed[$],Ne=v.indexOf(xe);Ne>=0&&(v[Ne]=null,w[Ne].disconnect(xe))}for(let $=0;$<H.added.length;$++){let xe=H.added[$],Ne=v.indexOf(xe);if(Ne===-1){for(let me=0;me<w.length;me++)if(me>=v.length){v.push(xe),Ne=me;break}else if(v[me]===null){v[me]=xe,Ne=me;break}if(Ne===-1)break}let fe=w[Ne];fe&&fe.connect(xe)}}let O=new D,U=new D;function G(H,$,xe){O.setFromMatrixPosition($.matrixWorld),U.setFromMatrixPosition(xe.matrixWorld);let Ne=O.distanceTo(U),fe=$.projectionMatrix.elements,me=xe.projectionMatrix.elements,Me=fe[14]/(fe[10]-1),Ie=fe[14]/(fe[10]+1),Oe=(fe[9]+1)/fe[5],J=(fe[9]-1)/fe[5],j=(fe[8]-1)/fe[0],ee=(me[8]+1)/me[0],ge=Me*j,_e=Me*ee,Ve=Ne/(-j+ee),et=Ve*-j;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(et),H.translateZ(Ve),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),fe[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let W=Me+Ve,Ge=Ie+Ve,Re=ge-et,C=_e+(Ne-et),y=Oe*Ie/Ge*W,V=J*Ie/Ge*W;H.projectionMatrix.makePerspective(Re,C,y,V,W,Ge),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ae(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let $=H.near,xe=H.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=I.near=R.near=$,B.far=I.far=R.far=xe,(N!==B.near||z!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,z=B.far),B.layers.mask=H.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Ne=H.parent,fe=B.cameras;ae(B,Ne);for(let me=0;me<fe.length;me++)ae(fe[me],Ne);fe.length===2?G(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),E===null&&H.isPerspectiveCamera&&(E={camera:H,fov:H.fov,zoom:H.zoom}),de(H,B,Ne)};function de(H,$,xe){xe===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(xe.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_r*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(H){return f[H]};let ue=null;function K(H,$){if(u=$.getViewerPose(l||a),g=$,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ne=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let Ie=0;Ie<xe.length;Ie++){let Oe=xe[Ie],J=null;if(p!==null)J=p.getViewport(Oe);else{let ee=h.getViewSubImage(d,Oe);J=ee.viewport,Ie===0&&(e.setRenderTargetTextures(x,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(x))}let j=F[Ie];j===void 0&&(j=new Yt,j.layers.enable(Ie),j.viewport=new Tt,F[Ie]=j),j.matrix.fromArray(Oe.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Oe.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(J.x,J.y,J.width,J.height),Ie===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(j)}let fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let Ie=h.getDepthInformation(xe[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,r.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let Ie=0;Ie<xe.length;Ie++){let Oe=xe[Ie].camera;if(Oe){let J=f[Oe];J||(J=new Ta,f[Oe]=J);let j=h.getCameraImage(Oe);J.sourceTexture=j}}}}for(let xe=0;xe<w.length;xe++){let Ne=v[xe],fe=w[xe];Ne!==null&&fe!==void 0&&fe.update(Ne,$,l||a)}ue&&ue(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let le=new um;le.setAnimationLoop(K),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}},Tb=new Ye,gm=new ot;gm.set(-1,0,0,0,1,0,0,0,1);function Ab(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ih(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,S,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=e.get(f),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rb(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){let v=w.program;n.uniformBlockBinding(x,v)}function l(x,w){let v=r[x.id];v===void 0&&(m(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",b));let T=w.program;n.updateUBOMapping(x,T);let _=e.render.frame;s[x.id]!==_&&(d(x),s[x.id]=_)}function u(x){let w=h();x.__bindingPointIndex=w;let v=i.createBuffer(),T=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let w=r[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,E=v.length;_<E;_++){let R=v[_];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)p(R[I],_,I,T);else p(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,w,v,T){if(M(x,w,v,T)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let F=E[I],B=f(F);g(F,x.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,w,v){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,v)}function M(x,w,v,T){let _=x.value,E=w+"_"+v;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let R=T[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){let w=x.uniforms,v=0,T=16;for(let E=0,R=w.length;E<R;E++){let I=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,B=I.length;F<B;F++){let N=I[F],z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,P=z.length;L<P;L++){let Y=z[L],O=f(Y),U=v%T,G=U%O.boundary,ae=U+G;v+=G,ae!==0&&T-ae<O.storage&&(v+=T-ae),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=O.storage}}}let _=v%T;return _>0&&(v+=T-_),x.__size=v,x.__cache={},this}function f(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",x),w}function b(x){let w=x.target;w.removeEventListener("dispose",b);let v=a.indexOf(w.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function S(){for(let x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:S}}var Cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Ib(){return xi===null&&(xi=new Es(Cb,16,16,lr,ni),xi.name="DFG_LUT",xi.minFilter=Ht,xi.magFilter=Ht,xi.wrapS=Xn,xi.wrapT=Xn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var cc=class{constructor(e={}){let{canvas:t=Dp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([Tl,El,wl]),f=new Set([En,ti,Fs,Os,bl,Ml]),b=new Uint32Array(4),S=new Int32Array(4),x=new D,w=null,v=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,B=null,N=null,z=null;this._outputColorSpace=Dt;let L=0,P=0,Y=null,O=-1,U=null,G=new Tt,ae=new Tt,de=null,ue=new nt(0),K=0,le=t.width,H=t.height,$=1,xe=null,Ne=null,fe=new Tt(0,0,le,H),me=new Tt(0,0,le,H),Me=!1,Ie=new Ts,Oe=!1,J=!1,j=new Ye,ee=new D,ge=new Tt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function et(){return Y===null?$:1}let W=n;function Ge(A,X){return t.getContext(A,X)}let Re,C,y,V,k,q,ie,ce,re,oe,ye,De,Se,Ee,Be,Ze,Fe,Z,Te,he,we,Ae,pe;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",cn,!1),W===null){let X="webgl2";if(W=Ge(X,A),W===null)throw Ge(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(A){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),st("WebGLRenderer: "+A.message),A}function $e(){Re=new O_(W),Re.init(),we=new Sb(W,Re),C=new A_(W,Re,e,we),y=new bb(W,Re),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),B=W.createFramebuffer(),N=W.createFramebuffer(),z=W.createFramebuffer(),V=new z_(W),k=new ob,q=new Mb(W,Re,y,k,C,we,V),ie=new F_(R),ce=new V0(W),Ae=new E_(W,ce),re=new B_(W,ce,V,Ae),oe=new V_(W,re,ce,Ae,V),Z=new H_(W,C,q),Be=new R_(k),ye=new ab(R,ie,Re,C,Ae,Be),De=new Ab(R,k),Se=new cb,Ee=new mb(Re),Fe=new w_(R,ie,y,oe,g,c),Ze=new vb(R,oe,C),pe=new Rb(W,V,C,y),Te=new T_(W,Re,V),he=new k_(W,Re,V),V.programs=ye.programs,R.capabilities=C,R.extensions=Re,R.properties=k,R.renderLists=Se,R.shadowMap=Ze,R.state=y,R.info=V}M!==En&&(E=new W_(M,t.width,t.height,o,r,s));let We=new Th(R,W);this.xr=We,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(le,H,!1))},this.getSize=function(A){return A.set(le,H)},this.setSize=function(A,X,se=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,H=X,t.width=Math.floor(A*$),t.height=Math.floor(X*$),se===!0&&(t.style.width=A+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*$,H*$).floor()},this.setDrawingBufferSize=function(A,X,se){le=A,H=X,$=se,t.width=Math.floor(A*se),t.height=Math.floor(X*se),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(M===En){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,X,se,te){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,X,se,te),y.viewport(G.copy(fe).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,X,se,te){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,X,se,te),y.scissor(ae.copy(me).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){y.setScissorTest(Me=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Ne=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,se=!0){let te=0;if(A){let ne=!1;if(Y!==null){let Ue=Y.texture.format;ne=m.has(Ue)}if(ne){let Ue=Y.texture.type,ze=f.has(Ue),Le=Fe.getClearColor(),Xe=Fe.getClearAlpha(),Ke=Le.r,ut=Le.g,pt=Le.b;ze?(b[0]=Ke,b[1]=ut,b[2]=pt,b[3]=Xe,W.clearBufferuiv(W.COLOR,0,b)):(S[0]=Ke,S[1]=ut,S[2]=pt,S[3]=Xe,W.clearBufferiv(W.COLOR,0,S))}else te|=W.COLOR_BUFFER_BIT}X&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Fe.dispose(),Se.dispose(),Ee.dispose(),k.dispose(),ie.dispose(),oe.dispose(),Ae.dispose(),pe.dispose(),ye.dispose(),We.dispose(),We.removeEventListener("sessionstart",ja),We.removeEventListener("sessionend",Qa),Rn.stop()};function yt(A){A.preventDefault(),ma("WebGLRenderer: Context Lost."),I=!0}function gt(){ma("WebGLRenderer: Context Restored."),I=!1;let A=V.autoReset,X=Ze.enabled,se=Ze.autoUpdate,te=Ze.needsUpdate,ne=Ze.type;$e(),V.autoReset=A,Ze.enabled=X,Ze.autoUpdate=se,Ze.needsUpdate=te,Ze.type=ne}function cn(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function An(A){let X=A.target;X.removeEventListener("dispose",An),bc(X)}function bc(A){Mc(A),k.remove(A)}function Mc(A){let X=k.get(A).programs;X!==void 0&&(X.forEach(function(se){ye.releaseProgram(se)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,se,te,ne,Ue){X===null&&(X=_e);let ze=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Le=Ct(A,X,se,te,ne);y.setMaterial(te,ze);let Xe=se.index,Ke=1;if(te.wireframe===!0){if(Xe=re.getWireframeAttribute(se),Xe===void 0)return;Ke=2}let ut=se.drawRange,pt=se.attributes.position,qe=ut.start*Ke,St=(ut.start+ut.count)*Ke;Ue!==null&&(qe=Math.max(qe,Ue.start*Ke),St=Math.min(St,(Ue.start+Ue.count)*Ke)),Xe!==null?(qe=Math.max(qe,0),St=Math.min(St,Xe.count)):pt!=null&&(qe=Math.max(qe,0),St=Math.min(St,pt.count));let Xt=St-qe;if(Xt<0||Xt===1/0)return;Ae.setup(ne,te,Le,se,Xe);let Nt,It=Te;if(Xe!==null&&(Nt=ce.get(Xe),It=he,It.setIndex(Nt)),ne.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*et()),It.setMode(W.LINES)):It.setMode(W.TRIANGLES);else if(ne.isLine){let nn=te.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*et()),ne.isLineSegments?It.setMode(W.LINES):ne.isLineLoop?It.setMode(W.LINE_LOOP):It.setMode(W.LINE_STRIP)}else ne.isPoints?It.setMode(W.POINTS):ne.isSprite&&It.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let nn=ne._multiDrawStarts,ke=ne._multiDrawCounts,hn=ne._multiDrawCount,xt=Xe?ce.get(Xe).bytesPerElement:1,Bn=k.get(te).currentProgram.getUniforms();for(let si=0;si<hn;si++)Bn.setValue(W,"_gl_DrawID",si),It.render(nn[si]/xt,ke[si])}else if(ne.isInstancedMesh)It.renderInstances(qe,Xt,ne.count);else if(se.isInstancedBufferGeometry){let nn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,nn);It.renderInstances(qe,Xt,ke)}else It.render(qe,Xt)};function Zs(A,X,se,te){F!==null&&A.isNodeMaterial&&F.setObject(te,A),Oe===!0&&Be.setState(A,se,!1),A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,it(A,X,te),A.side=wn,A.needsUpdate=!0,it(A,X,te),A.side=en):it(A,X,te)}this.compile=function(A,X,se=null){se===null&&(se=A),F!==null&&F.renderStart(A,X,se),v=Ee.get(se),v.init(X),_.push(v),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),A!==se&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),v.setupLights(),F!==null&&F.updateLights(v.state.lightsArray),J=this.localClippingEnabled,Oe=Be.init(this.clippingPlanes,J),Oe===!0&&Be.setGlobalState(this.clippingPlanes,X),F!==null&&Ze.render(v.state.shadowsArray,se,X);let te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ue=ne.material;if(Ue)if(Array.isArray(Ue))for(let ze=0;ze<Ue.length;ze++){let Le=Ue[ze];Zs(Le,se,X,ne),te.add(Le)}else Zs(Ue,se,X,ne),te.add(Ue)}),v=_.pop(),F!==null&&F.renderEnd(),te},this.compileAsync=function(A,X,se=null){let te=this.compile(A,X,se);return new Promise(ne=>{function Ue(){if(te.forEach(function(ze){let Xe=k.get(ze).currentProgram;(Xe===void 0||Xe.isReady())&&te.delete(ze)}),te.size===0){ne(A);return}setTimeout(Ue,10)}Re.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ks=null;function Sc(A){Ks&&Ks(A)}function ja(){Rn.stop()}function Qa(){Rn.start()}let Rn=new um;Rn.setAnimationLoop(Sc),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(A){Ks=A,We.setAnimationLoop(A),A===null?Rn.stop():Rn.start()},We.addEventListener("sessionstart",ja),We.addEventListener("sessionend",Qa),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(A,X);let se=We.enabled===!0&&We.isPresenting===!0,te=E!==null&&(Y===null||se)&&E.begin(R,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(X),X=We.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,Y),v=Ee.get(A,_.length),v.init(X),v.state.textureUnits=q.getTextureUnits(),_.push(v),j.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ie.setFromProjectionMatrix(j,Jn,X.reversedDepth),J=this.localClippingEnabled,Oe=Be.init(this.clippingPlanes,J),w=Se.get(A,T.length),w.init(),T.push(w),We.enabled===!0&&We.isPresenting===!0){let ze=R.xr.getDepthSensingMesh();ze!==null&&$s(ze,X,-1/0,R.sortObjects)}$s(A,X,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(v.state.lightsArray),R.sortObjects===!0&&w.sort(xe,Ne),Ve=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ve&&Fe.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Be.beginShadows();let ne=v.state.shadowsArray;if(Ze.render(ne,A,X),Oe===!0&&Be.endShadows(),(te&&E.hasRenderPass())===!1){let ze=w.opaque,Le=w.transmissive;if(v.setupLights(),X.isArrayCamera){let Xe=X.cameras;if(Le.length>0)for(let Ke=0,ut=Xe.length;Ke<ut;Ke++){let pt=Xe[Ke];ve(ze,Le,A,pt)}Ve&&Fe.render(A);for(let Ke=0,ut=Xe.length;Ke<ut;Ke++){let pt=Xe[Ke];eo(w,A,pt,pt.viewport)}}else Le.length>0&&ve(ze,Le,A,X),Ve&&Fe.render(A),eo(w,A,X)}Y!==null&&P===0&&(q.updateMultisampleRenderTarget(Y),q.updateRenderTargetMipmap(Y)),te&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,X),Ae.resetDefaultState(),O=-1,U=null,_.pop(),_.length>0?(v=_[_.length-1],q.setTextureUnits(v.state.textureUnits),Oe===!0&&Be.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,F!==null&&F.renderEnd()};function $s(A,X,se,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ie)){te&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);let ze=oe.update(A),Le=A.material;Le.visible&&w.push(A,ze,Le,se,ge.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ie))){let ze=oe.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ge.copy(ze.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(Le)){let Xe=ze.groups;for(let Ke=0,ut=Xe.length;Ke<ut;Ke++){let pt=Xe[Ke],qe=Le[pt.materialIndex];qe&&qe.visible&&w.push(A,ze,qe,se,ge.z,pt,X)}}else Le.visible&&w.push(A,ze,Le,se,ge.z,null,X)}}let Ue=A.children;for(let ze=0,Le=Ue.length;ze<Le;ze++)$s(Ue[ze],X,se,te)}function eo(A,X,se,te){let{opaque:ne,transmissive:Ue,transparent:ze}=A;v.setupLightsView(se),Oe===!0&&Be.setGlobalState(R.clippingPlanes,se),te&&y.viewport(G.copy(te)),ne.length>0&&Q(ne,X,se),Ue.length>0&&Q(Ue,X,se),ze.length>0&&Q(ze,X,se),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ve(A,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[te.id]===void 0){let qe=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[te.id]=new vn(1,1,{generateMipmaps:!0,type:qe?ni:En,minFilter:ei,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ue=v.state.transmissionRenderTarget[te.id],ze=te.viewport||G;Ue.setSize(ze.z*R.transmissionResolutionScale,ze.w*R.transmissionResolutionScale);let Le=R.getRenderTarget(),Xe=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(Ue),R.getClearColor(ue),K=R.getClearAlpha(),K<1&&R.setClearColor(16777215,.5),R.clear(),Ve&&Fe.render(se);let ut=R.toneMapping;R.toneMapping=Qn;let pt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),Oe===!0&&Be.setGlobalState(R.clippingPlanes,te),Q(A,se,te),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let St=0,Xt=X.length;St<Xt;St++){let Nt=X[St],{object:It,geometry:nn,material:ke,group:hn}=Nt;if(ke.side===en&&It.layers.test(te.layers)){let xt=ke.side;ke.side=xn,ke.needsUpdate=!0,Je(It,se,te,nn,ke,hn),ke.side=xt,ke.needsUpdate=!0,qe=!0}}qe===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}R.setRenderTarget(Le,Xe,Ke),R.setClearColor(ue,K),pt!==void 0&&(te.viewport=pt),R.toneMapping=ut}function Q(A,X,se){let te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Ue=A.length;ne<Ue;ne++){let ze=A[ne],{object:Le,geometry:Xe,group:Ke}=ze,ut=ze.material;ut.allowOverride===!0&&te!==null&&(ut=te),Le.layers.test(se.layers)&&Je(Le,X,se,Xe,ut,Ke)}}function Je(A,X,se,te,ne,Ue){F!==null&&ne.isNodeMaterial&&F.setObject(A,ne),A.onBeforeRender(R,X,se,te,ne,Ue),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(R,X,se,te,A,Ue),ne.transparent===!0&&ne.side===en&&ne.forceSinglePass===!1?(ne.side=xn,ne.needsUpdate=!0,R.renderBufferDirect(se,X,te,ne,A,Ue),ne.side=wn,ne.needsUpdate=!0,R.renderBufferDirect(se,X,te,ne,A,Ue),ne.side=en):R.renderBufferDirect(se,X,te,ne,A,Ue),A.onAfterRender(R,X,se,te,ne,Ue)}function it(A,X,se){X.isScene!==!0&&(X=_e);let te=k.get(A),ne=v.state.lights,Ue=v.state.shadowsArray,ze=ne.state.version,Le=ye.getParameters(A,ne.state,Ue,X,se,v.state.lightProbeGridArray),Xe=ye.getProgramCacheKey(Le),Ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;let ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=ie.get(A.envMap||te.environment,ut),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",An),Ke=new Map,te.programs=Ke);let pt=Ke.get(Xe);if(pt!==void 0){if(te.currentProgram===pt&&te.lightsStateVersion===ze)return rt(A,Le),pt}else Le.uniforms=ye.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,se,Le),A.onBeforeCompile(Le,R),pt=ye.acquireProgram(Le,Xe),Ke.set(Xe,pt),te.uniforms=Le.uniforms;let qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Be.uniform),rt(A,Le),te.needsLights=Wt(A),te.lightsStateVersion=ze,te.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.sunLights.value=ne.state.sun,qe.sunLightShadows.value=ne.state.sunShadow,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.sunShadowMatrix.value=ne.state.sunShadowMatrix,qe.sunShadowCascade.value=ne.state.sunShadowCascade,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=v.state.lightProbeGridArray.length>0,te.currentProgram=pt,te.uniformsList=null,pt}function tt(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Hs.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function rt(A,X){let se=k.get(A);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function _t(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let se=0,te=A.length;se<te;se++){let ne=A[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(x))return ne}return null}function Ct(A,X,se,te,ne){X.isScene!==!0&&(X=_e),q.resetTextureUnits();let Ue=X.fog,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Le=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:dt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=ie.get(te.envMap||ze,Xe),ut=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!se.morphAttributes.position,St=!!se.morphAttributes.normal,Xt=!!se.morphAttributes.color,Nt=Qn;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,nn=It!==void 0?It.length:0,ke=k.get(te),hn=v.state.lights;if(Oe===!0&&(J===!0||A!==U)){let Lt=A===U&&te.id===O;Be.setState(te,A,Lt)}let xt=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==hn.state.version||ke.outputColorSpace!==Le||ne.isBatchedMesh&&ke.batching===!1||!ne.isBatchedMesh&&ke.batching===!0||ne.isBatchedMesh&&ke.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&ke.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&ke.instancing===!1||!ne.isInstancedMesh&&ke.instancing===!0||ne.isSkinnedMesh&&ke.skinning===!1||!ne.isSkinnedMesh&&ke.skinning===!0||ne.isInstancedMesh&&ke.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ke.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ke.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ke.instancingMorph===!1&&ne.morphTexture!==null||ke.envMap!==Ke||te.fog===!0&&ke.fog!==Ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==ut||ke.vertexTangents!==pt||ke.morphTargets!==qe||ke.morphNormals!==St||ke.morphColors!==Xt||ke.toneMapping!==Nt||ke.morphTargetsCount!==nn||!!ke.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=te.version);let Bn=ke.currentProgram;xt===!0&&(Bn=it(te,X,ne),F&&te.isNodeMaterial&&F.onUpdateProgram(te,Bn,ke));let si=!1,Vi=!1,Or=!1,Rt=Bn.getUniforms(),Ot=ke.uniforms;if(y.useProgram(Bn.program)&&(si=!0,Vi=!0,Or=!0),te.id!==O&&(O=te.id,Vi=!0),ke.needsLights){let Lt=_t(v.state.lightProbeGridArray,ne);ke.lightProbeGrid!==Lt&&(ke.lightProbeGrid=Lt,Vi=!0)}if(si||U!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(W,"projectionMatrix",A.projectionMatrix),Rt.setValue(W,"viewMatrix",A.matrixWorldInverse);let Wi=Rt.map.cameraPosition;Wi!==void 0&&Wi.setValue(W,ee.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Vi=!0,Or=!0)}if(ke.needsLights&&(hn.state.sunShadowMap.length>0&&Rt.setValue(W,"sunShadowMap",hn.state.sunShadowMap,q),hn.state.directionalShadowMap.length>0&&Rt.setValue(W,"directionalShadowMap",hn.state.directionalShadowMap,q),hn.state.spotShadowMap.length>0&&Rt.setValue(W,"spotShadowMap",hn.state.spotShadowMap,q),hn.state.pointShadowMap.length>0&&Rt.setValue(W,"pointShadowMap",hn.state.pointShadowMap,q)),ne.isSkinnedMesh){Rt.setOptional(W,ne,"bindMatrix"),Rt.setOptional(W,ne,"bindMatrixInverse");let Lt=ne.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Lt.boneTexture,q))}ne.isBatchedMesh&&(Rt.setOptional(W,ne,"batchingTexture"),Rt.setValue(W,"batchingTexture",ne._matricesTexture,q),Rt.setOptional(W,ne,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",ne._indirectTexture,q),Rt.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",ne._colorsTexture,q));let Gi=se.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Z.update(ne,se,Bn),(Vi||ke.receiveShadow!==ne.receiveShadow)&&(ke.receiveShadow=ne.receiveShadow,Rt.setValue(W,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Ot.envMapIntensity.value=X.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Ib()),Vi){if(Rt.setValue(W,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&yn(Ot,Or),Ue&&te.fog===!0&&De.refreshFogUniforms(Ot,Ue),De.refreshMaterialUniforms(Ot,te,$,H,v.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){let Lt=ke.lightProbeGrid;Ot.probesSH.value=Lt.texture,Ot.probesMin.value.copy(Lt.boundingBox.min),Ot.probesMax.value.copy(Lt.boundingBox.max),Ot.probesResolution.value.copy(Lt.resolution)}Hs.upload(W,tt(ke),Ot,q)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hs.upload(W,tt(ke),Ot,q),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(W,"center",ne.center),Rt.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(W,"normalMatrix",ne.normalMatrix),Rt.setValue(W,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Lt=te.uniformsGroups;for(let Wi=0,Br=Lt.length;Wi<Br;Wi++){let _d=Lt[Wi];pe.update(_d,Bn),pe.bind(_d,Bn)}}return Bn}function yn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Wt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,se){let te=k.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=X,k.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let se=k.get(A);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,se=0){Y=A,L=X,P=se;let te=null,ne=!1,Ue=!1;if(A){let Le=k.get(A);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(W.FRAMEBUFFER,Le.__webglFramebuffer),G.copy(A.viewport),ae.copy(A.scissor),de=A.scissorTest,y.viewport(G),y.scissor(ae),y.setScissorTest(de),O=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Le.__hasExternalTextures)q.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ut=A.depthTexture;if(Le.__boundDepthTexture!==ut){if(ut!==null&&k.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}let Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);let Ke=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?te=Ke[X][se]:te=Ke[X],ne=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?te=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[se]:te=Ke,G.copy(A.viewport),ae.copy(A.scissor),de=A.scissorTest}else G.copy(fe).multiplyScalar($).floor(),ae.copy(me).multiplyScalar($).floor(),de=Me;if(se!==0&&(te=B),y.bindFramebuffer(W.FRAMEBUFFER,te)&&y.drawBuffers(A,te),y.viewport(G),y.scissor(ae),y.setScissorTest(de),ne){let Le=k.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,se)}else if(Ue){let Le=X;for(let Xe=0;Xe<A.textures.length;Xe++){let Ke=k.get(A.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,se,Le)}}else if(A!==null&&se!==0){let Le=k.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Le.__webglTexture,se)}O=-1};function un(A){let X=k.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=C.textureFormatReadable(A.format),X.__typeReadable=C.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,se,te,ne,Ue,ze,Le=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){y.bindFramebuffer(W.FRAMEBUFFER,Xe);try{let Ke=A.textures[Le],ut=Ke.format,pt=Ke.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);let qe=un(Ke);if(qe.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&se>=0&&se<=A.height-ne&&W.readPixels(X,se,te,ne,we.convert(ut),we.convert(pt),Ue)}finally{let Ke=Y!==null?k.get(Y).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,se,te,ne,Ue,ze,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if(X>=0&&X<=A.width-te&&se>=0&&se<=A.height-ne){y.bindFramebuffer(W.FRAMEBUFFER,Xe);let Ke=A.textures[Le],ut=Ke.format,pt=Ke.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);let qe=un(Ke);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,St),W.bufferData(W.PIXEL_PACK_BUFFER,Ue.byteLength,W.STREAM_READ),W.readPixels(X,se,te,ne,we.convert(ut),we.convert(pt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Xt=Y!==null?k.get(Y).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,Xt);let Nt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Op(W,Nt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,St),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ue),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(St),W.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,se=0){let te=Math.pow(2,-se),ne=Math.floor(A.image.width*te),Ue=Math.floor(A.image.height*te),ze=X!==null?X.x:0,Le=X!==null?X.y:0;q.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,ze,Le,ne,Ue),y.unbindTexture()},this.copyTextureToTexture=function(A,X,se=null,te=null,ne=0,Ue=0){let ze,Le,Xe,Ke,ut,pt,qe,St,Xt,Nt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(se!==null)ze=se.max.x-se.min.x,Le=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,Ke=se.min.x,ut=se.min.y,pt=se.isBox3?se.min.z:0;else{let Ot=Math.pow(2,-ne);ze=Math.floor(Nt.width*Ot),Le=Math.floor(Nt.height*Ot),A.isDataArrayTexture?Xe=Nt.depth:A.isData3DTexture?Xe=Math.floor(Nt.depth*Ot):Xe=1,Ke=0,ut=0,pt=0}te!==null?(qe=te.x,St=te.y,Xt=te.z):(qe=0,St=0,Xt=0);let It=we.convert(X.format),nn=we.convert(X.type),ke;X.isData3DTexture?(q.setTexture3D(X,0),ke=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),ke=W.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),ke=W.TEXTURE_2D),y.activeTexture(W.TEXTURE0),y.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),y.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),y.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);let hn=y.getParameter(W.UNPACK_ROW_LENGTH),xt=y.getParameter(W.UNPACK_IMAGE_HEIGHT),Bn=y.getParameter(W.UNPACK_SKIP_PIXELS),si=y.getParameter(W.UNPACK_SKIP_ROWS),Vi=y.getParameter(W.UNPACK_SKIP_IMAGES);y.pixelStorei(W.UNPACK_ROW_LENGTH,Nt.width),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Nt.height),y.pixelStorei(W.UNPACK_SKIP_PIXELS,Ke),y.pixelStorei(W.UNPACK_SKIP_ROWS,ut),y.pixelStorei(W.UNPACK_SKIP_IMAGES,pt);let Or=A.isDataArrayTexture||A.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let Ot=k.get(A),Gi=k.get(X),Lt=k.get(Ot.__renderTarget),Wi=k.get(Gi.__renderTarget);y.bindFramebuffer(W.READ_FRAMEBUFFER,Lt.__webglFramebuffer),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Br=0;Br<Xe;Br++)Or&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,k.get(A).__webglTexture,ne,pt+Br),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,k.get(X).__webglTexture,Ue,Xt+Br)),W.blitFramebuffer(Ke,ut,ze,Le,qe,St,ze,Le,W.DEPTH_BUFFER_BIT,W.NEAREST);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||k.has(A)){let Ot=k.get(A),Gi=k.get(X);y.bindFramebuffer(W.READ_FRAMEBUFFER,N),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,z);for(let Lt=0;Lt<Xe;Lt++)Or?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,pt+Lt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ot.__webglTexture,ne),Rt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Gi.__webglTexture,Ue,Xt+Lt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Gi.__webglTexture,Ue),ne!==0?W.blitFramebuffer(Ke,ut,ze,Le,qe,St,ze,Le,W.COLOR_BUFFER_BIT,W.NEAREST):Rt?W.copyTexSubImage3D(ke,Ue,qe,St,Xt+Lt,Ke,ut,ze,Le):W.copyTexSubImage2D(ke,Ue,qe,St,Ke,ut,ze,Le);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(ke,Ue,qe,St,Xt,ze,Le,Xe,It,nn,Nt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,Ue,qe,St,Xt,ze,Le,Xe,It,Nt.data):W.texSubImage3D(ke,Ue,qe,St,Xt,ze,Le,Xe,It,nn,Nt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ue,qe,St,ze,Le,It,nn,Nt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ue,qe,St,Nt.width,Nt.height,It,Nt.data):W.texSubImage2D(W.TEXTURE_2D,Ue,qe,St,ze,Le,It,nn,Nt);y.pixelStorei(W.UNPACK_ROW_LENGTH,hn),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),y.pixelStorei(W.UNPACK_SKIP_PIXELS,Bn),y.pixelStorei(W.UNPACK_SKIP_ROWS,si),y.pixelStorei(W.UNPACK_SKIP_IMAGES,Vi),Ue===0&&X.generateMipmaps&&W.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){L=0,P=0,Y=null,y.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function xm(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:c=0,iterations:l=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=P=>P.getWorldPosition(new D),h=[i,e,t].map(P=>P.quaternion.clone());i.updateWorldMatrix(!0,!0);let d=u(i),p=u(e),g=u(t),M=d.distanceTo(p)+p.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),M].every(Number.isFinite)||M<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,M*s));let f=g.clone().add(m),b=p.clone().sub(d).cross(g.clone().sub(p));if(b.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};b.normalize();function S(P,Y){let O=u(P);return P.worldToLocal(O.clone().add(Y)).sub(P.worldToLocal(O)).normalize()}let x=S(i,b),w=S(e,b),v=p.clone().sub(d).normalize(),T=S(i,new D().crossVectors(b,v).normalize()),_=Math.PI-d.clone().sub(p).angleTo(g.clone().sub(p)),E=c?[0,0,0,0]:[0,0,0],R=[be.degToRad(a[0]),be.degToRad(a[1]),...c?[be.degToRad(c)]:[],be.degToRad(o)],I=S(i,v);function F(P){return i.quaternion.copy(h[0]).multiply(new He().setFromAxisAngle(x,P[0])).multiply(new He().setFromAxisAngle(T,P[1])),c&&i.quaternion.multiply(new He().setFromAxisAngle(I,P[2])),e.quaternion.copy(h[1]).multiply(new He().setFromAxisAngle(w,P[P.length-1])),t.quaternion.copy(h[2]),i.updateWorldMatrix(!0,!0),u(t)}function B(){let P=u(i),Y=u(e),O=u(t),U=Y.clone().sub(P).cross(O.clone().sub(Y)),G=Math.PI-P.clone().sub(Y).angleTo(O.clone().sub(Y));return U.dot(b)>0&&G>=Math.min(_,be.degToRad(5))-.001&&G<=Math.max(_,be.degToRad(150))+.001}let N=E.slice(),z=g.distanceToSquared(f),L=.001;for(let P=0;P<l;P++){let Y=F(E),O=f.clone().sub(Y);if(O.length()<8e-4)break;let U=E.map((K,le)=>{let H=E.slice();return H[le]+=L,F(H).sub(Y).multiplyScalar(1/L)});F(E);let G=new ot().set(...[0,1,2].flatMap(K=>[0,1,2].map(le=>U.reduce((H,$)=>H+$.getComponent(K)*$.getComponent(le),0)+(K===le?5e-4:0)))),ae=O.clone().applyMatrix3(G.invert()),de=U.map(K=>K.dot(ae)),ue=!1;for(let K of[1,.5,.25,.125]){let le=E.map(($,xe)=>be.clamp($+be.clamp(de[xe],-.15,.15)*K,-R[xe],R[xe]));if(F(le),!B())continue;let H=u(t).distanceToSquared(f);if(!(H>=z)){N=le.slice(),z=H,E.splice(0,E.length,...le),ue=!0;break}}if(!ue)break}return F(N),{accepted:!0,angles:N,offset:m.length(),error:Math.sqrt(z),nativeFlex:_,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(b)}}function ym(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let c=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(c)||c.length>16||new Set(c.map(J=>J.id)).size!==c.length)throw new Error("Invalid scene profiles");if(o)for(let J of c){if(typeof J.id!="string"||!Array.isArray(J.contacts)||J.contacts.length>16)throw new Error("Invalid source contacts");for(let j of J.contacts){if(typeof j.bone!="string"||!["ik","unsupported"].includes(j.kind))throw new Error("Unknown source contact");if(j.kind==="ik"&&(!i.getObjectByName(j.ikBone)||!j.drag||!j.sizeCm||![j.sizeCm.X,j.sizeCm.Y,j.sizeCm.Z,...Object.values(j.drag.ScreenPercentToWorld||{}),...Object.values(j.drag.WorldSpaceLimit||{}),...Object.values(j.drag.WorldSpaceLmitLeftUp||{}),j.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let l={},u=[],h=null,d=!1,p=null,g=[],M=null,m={},f="",b=new Map,S=new Map,x=new Map,w=new Map,v=new Map,T=J=>J.getWorldPosition(new D),_=()=>c.find(J=>J.id===(l.scene?.()||"main")),E=()=>a==="Enya"&&["show_04","show_05"].includes(_()?.id),R=()=>(_()?.contacts||[]).filter(J=>J.kind==="ik"),I=document.createElement("div");I.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(I);let F=document.createElement("div");I.append(F);let B=document.createElement("button");B.textContent="\u8FD8\u539F\u817F\u90E8",B.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",B.onclick=()=>$("lower_legs"),I.append(B);function N(){for(let J of u)J.bone.quaternion.copy(J.base);u=[]}function z(){return(_()?.contacts||[]).map(J=>{let j=i.getObjectByName(J.bone);if(!j)return null;let ee=T(j).project(e),ge=t.getBoundingClientRect();return{id:J.id,label:/Foot/.test(J.bone)?J.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(J.bone)?"\u624B\u90E8":"\u5934\u90E8",x:ge.left+(ee.x+1)*ge.width/2,y:ge.top+(1-ee.y)*ge.height/2,supportedIK:J.kind==="ik"}}).filter(Boolean)}function L(J){let j=i.getObjectByName(J.ikBone),ee=j?.parent,ge=ee?.parent;if(!ge?.isBone||!ee?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:J,foot:j,calf:ee,thigh:ge,base:[ge,ee,j].map(_e=>_e.quaternion.clone()),anchor:i.worldToLocal(T(j)),offset:new D,dx:0,dy:0}}function P(J){if(!J?.alphaVerified)return null;for(let j of R()){let ee=i.getObjectByName(j.ikBone),ge=ee?.worldToLocal(new D().fromArray(J.point)),_e=j.sizeCm;if(ge&&Math.abs(ge.x)<_e.X*.01&&Math.abs(ge.y)<_e.Z*.01&&Math.abs(ge.z)<_e.Y*.01)return j}for(let j of R()){let ee=j.ikBone.includes("-L-")?"L":"R";if((J.skinBones||[]).some(ge=>ge?.startsWith("Bip001-"+ee+"-")&&/Thigh|Calf|Foot/.test(ge)))return j}return null}function Y(J,j){if(!j||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[Ve,et]of b)et.contact.ikBone===j.ikBone&&U(Ve,!0);J.preventDefault(),J.stopImmediatePropagation(),l.beforeDrag?.();let ee=S.get(j.ikBone),ge=ee?i.worldToLocal(T(ee.foot)):null;N();let _e=L(j);ee&&(_e.base=ee.base,_e.anchor=ge),x.delete(j.ikBone),Object.assign(_e,{pointerId:J.pointerId,x:J.clientX,y:J.clientY,dragging:!1,triggered:!1}),b.set(J.pointerId,_e),t.setPointerCapture(J.pointerId),p={contact:j.id,handle:J.target?.dataset?.legHandle||null},j.voiceId&&l.voice?.(j.voiceId)}function O(J){Y(J,P(n(J.clientX,J.clientY)))}function U(J,j=!1){let ee=b.get(J);ee&&(b.delete(J),t.hasPointerCapture(J)&&t.releasePointerCapture(J),ee.dragging&&(!j&&E()?(S.set(ee.contact.ikBone,ee),f="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u53EF\u9009\u62E9\u8FD8\u539F\u817F\u90E8\u6216\u8981\u6C42\u653E\u4E0B\u817F\u3002"):S.has(ee.contact.ikBone)||x.set(ee.contact.ikBone,{...ee,releasedAt:performance.now()})),j||l.event?.({type:"touch",region:"leg",label:ee.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:ee.dragging?"drag":"tap",source:"bounded-leg-control",confidence:1,completed:!0}))}function G(J,j,ee){return ee?.endsWith("::Less")?J<j:ee?.endsWith("::Greater")?J>j:null}function ae(J){let j=b.get(J.pointerId);if(!j||(J.stopImmediatePropagation(),!j.dragging&&Math.hypot(J.clientX-j.x,J.clientY-j.y)<5))return;j.dragging=!0;let ee=t.getBoundingClientRect(),ge=j.contact.drag,_e=E()?55:0,Ve=(J.clientX-j.x)/Math.max(1,ee.width)*(E()?100:ge.ScreenPercentToWorld?.X||0),et=(J.clientY-j.y)/Math.max(1,ee.height)*(E()?100:ge.ScreenPercentToWorld?.Y||0);j.dx=be.clamp(Ve,-Math.max(_e,ge.WorldSpaceLmitLeftUp?.X||0),Math.max(_e,ge.WorldSpaceLimit?.X||0)),j.dy=be.clamp(et,-Math.max(_e,ge.WorldSpaceLmitLeftUp?.Y||0),Math.max(_e,ge.WorldSpaceLimit?.Y||0));let W=new D().setFromMatrixColumn(e.matrixWorld,0),Ge=new D().setFromMatrixColumn(e.matrixWorld,1),Re=W.multiplyScalar(j.dx*.01).addScaledVector(Ge,-j.dy*.01);if(j.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Re))),!E())for(let C of j.contact.thresholds||[]){let y=[G(j.dx,C.limit.X,C.xCompare),G(j.dy,C.limit.Y,C.yCompare)].filter(V=>V!==null);if(!j.triggered&&y.length&&y.every(Boolean)){j.triggered=!0,h={sampleId:C.sampleId,dx:j.dx,dy:j.dy,source:"serialized-drag-threshold"},U(J.pointerId),l.reaction?.(C.sampleId);break}}}function de(J){b.has(J.pointerId)&&(J.stopImmediatePropagation(),U(J.pointerId))}function ue(J){U(J.pointerId,!0)}function K(){for(let J of[...b.keys()])U(J,!0);N()}function le(){K(),S.clear(),x.clear(),v.clear(),f=""}function H(){let J=R().map(j=>j.ikBone.includes("-L-")?"left":"right");return[...new Set(J.map(j=>"raise_"+j+"_leg")),...J.includes("left")&&J.includes("right")?["spread_legs"]:[],...J.length?["lower_legs"]:[]]}function $(J){if(!H().includes(J))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(K(),J==="lower_legs"){for(let[ge,_e]of S)x.set(ge,{..._e,releasedAt:performance.now()});S.clear(),f="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}N();let j=R(),ee=j.filter(ge=>J==="spread_legs"||J.includes(ge.ikBone.includes("-L-")?"left":"right"));for(let ge of ee){let _e=L(ge),Ve=i.getObjectByName(ge.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),et=T(_e.thigh).sub(T(Ve||_e.thigh.parent));if(et.lengthSq()<1e-8)continue;et.normalize();let W=new D(0,1,0).transformDirection(i.matrixWorld),Ge=T(_e.thigh).distanceTo(T(_e.calf))+T(_e.calf).distanceTo(T(_e.foot)),Re=J==="spread_legs"?et.multiplyScalar(Ge*(E()?.48:.18)).addScaledVector(W,Ge*.08):W.multiplyScalar(Ge*(E()?.36:.18)).addScaledVector(T(_e.thigh).sub(T(_e.foot)).normalize(),Ge*(E()?.2:0));_e.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Re))),_e.startedAt=performance.now(),S.set(ge.ikBone,_e),x.delete(ge.ikBone)}f=J==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":J.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let xe=new Map;function Ne(J,j=!1){if(!xe.has(J.name)){let ge=[];i.traverse(_e=>{if(!_e.isSkinnedMesh)return;let Ve=_e.geometry.getAttribute("skinIndex"),et=_e.geometry.getAttribute("skinWeight");if(!Ve||!et)return;let W=new Set(_e.skeleton.bones.map((Re,C)=>Re.name===J.name||Re.name===J.name.replace("-Foot","-Toe0")?C:-1).filter(Re=>Re>=0)),Ge=[];for(let Re=0;Re<Ve.count;Re++){let C=0;for(let y=0;y<4;y++)W.has(Ve.getComponent(Re,y))&&(C+=et.getComponent(Re,y));C>.45&&Ge.push(Re)}if(Ge.length){let Re=_e.geometry.getAttribute("position"),C=new Set;for(let y of[-1,0,1])for(let V of[-1,0,1])for(let k of[-1,0,1]){if(y===0&&V===0&&k===0)continue;let q=-1/0,ie=Ge[0];for(let ce of Ge){let re=Re.getX(ce)*y+Re.getY(ce)*V+Re.getZ(ce)*k;re>q&&(q=re,ie=ce)}C.add(ie)}ge.push({mesh:_e,vertices:Ge,probes:[...C]})}}),xe.set(J.name,ge)}let ee=[];for(let{mesh:ge,vertices:_e,probes:Ve}of xe.get(J.name))for(let et of j?_e:Ve)ee.push(ge.getVertexPosition(et,new D).applyMatrix4(ge.matrixWorld));return ee}function fe(J,j){let ee=T(J).dot(j);return be.clamp(Math.max(.04,...Ne(J).map(ge=>ee-ge.dot(j)))+.015,.055,.16)}function me(){let J=R(),j=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[ee,ge]of w)J.some(_e=>_e.id===ee)||(ge.remove(),w.delete(ee));for(let ee of J){let ge=i.getObjectByName(ee.ikBone);if(!ge)continue;let _e=w.get(ee.id);_e||(_e=document.createElement("button"),_e.dataset.legHandle=String(ee.id),_e.textContent=ee.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",_e.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",_e.addEventListener("pointerdown",W=>Y(W,ee)),w.set(ee.id,_e),I.append(_e));let Ve=t.getBoundingClientRect(),et=T(ge).lerp(T(ge.parent),.5).project(e);_e.hidden=!!j,_e.style.left=be.clamp(Ve.left+(et.x+1)*Ve.width/2,55,Ve.right-55)+"px",_e.style.top=be.clamp(Ve.top+(1-et.y)*Ve.height/2,100,Ve.bottom-150)+"px"}B.hidden=j||!S.size}function Me(){let J=performance.now();for(let[ee]of b)t.hasPointerCapture(ee)||U(ee,!0);if(me(),d){F.replaceChildren();for(let ee of z()){let ge=document.createElement("span");ge.textContent=ee.label,ge.style.cssText=`position:absolute;left:${ee.x}px;top:${ee.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,F.append(ge)}}let j=new Map(S);for(let ee of b.values())ee.dragging&&j.set(ee.contact.ikBone,ee);for(let[ee,ge]of x)ge.weight=Math.max(0,1-(J-ge.releasedAt)/(1e3*Math.max(.15,ge.contact.drag.DragRecoverTime||.35))),ge.weight===0?x.delete(ee):j.has(ee)||j.set(ee,ge);if(E()){for(let ee of R())if(!j.has(ee.ikBone)){let ge=L(ee);ge.passive=!0,j.set(ee.ikBone,ge)}}g=[],m={};for(let ee of j.values()){let ge=[ee.thigh,ee.calf,ee.foot],_e=ge.map(k=>k.quaternion.clone()),Ve=ee.weight??(ee.startedAt?be.smoothstep(Math.min(1,(J-ee.startedAt)/450),0,1):1);ge.forEach((k,q)=>k.quaternion.copy(ee.base[q])),i.updateWorldMatrix(!0,!0);let et=T(ee.calf),W=T(ee.foot),Ge=i.localToWorld(ee.anchor.clone().add(ee.offset)),Re=0,C=.055,y=[...ee.thigh.parent.matrixWorld.elements,...ee.base.flatMap(k=>k.toArray()),...Ge.toArray(),...ge.flatMap(k=>[...k.position.toArray(),...k.scale.toArray()])],V=v.get(ee.contact.ikBone);if(V&&V.key.length===y.length&&y.every((k,q)=>Math.abs(k-V.key[q])<1e-4)){ge.forEach((k,q)=>{k.quaternion.copy(_e[q]).slerp(V.quaternions[q],Ve).normalize(),u.push({bone:k,base:_e[q],applied:k.quaternion.clone()})}),M={...V.report,cached:!0},m[ee.contact.ikBone]=M;continue}if(E()&&s){let k=s(W);if(k&&k.clearance>-.5&&k.clearance<.5){C=fe(ee.foot,k.normal);for(let q=0;q<3;q++){let ie=0,ce=k.normal;for(let re of[.7,.85,1]){let oe=s(et.clone().lerp(Ge,re));oe&&(ie=Math.max(ie,(C-oe.clearance)/re),ce=oe.normal)}if(ie=be.clamp(ie,0,.65-Re),ie<5e-4)break;Ge.addScaledVector(ce,ie),Re+=ie}}}Re>0&&g.push({bone:ee.foot.name,correction:Re,radius:C});try{let k=E()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let q=0;q<4&&(ge.forEach((re,oe)=>re.quaternion.copy(ee.base[oe])),M=xm(ee.thigh,ee.calf,ee.foot,Ge,k),i.updateWorldMatrix(!0,!0),!(!E()||!s));q++){let ie=1/0,ce=new D(0,1,0);for(let re of Ne(ee.foot)){let oe=s(re);oe&&oe.clearance<ie&&(ie=oe.clearance,ce=oe.normal)}if(M.footClearance=Number.isFinite(ie)?ie:null,ie>=.012)break;Ge.addScaledVector(ce,Math.min(.2,.018-ie))}v.set(ee.contact.ikBone,{key:y,quaternions:ge.map(q=>q.quaternion.clone()),report:{...M}}),m[ee.contact.ikBone]={...M,target:Ge.toArray(),actual:T(ee.foot).toArray()},ge.forEach((q,ie)=>{let ce=q.quaternion.clone();q.quaternion.copy(_e[ie]).slerp(ce,Ve).normalize(),u.push({bone:q,base:_e[ie],applied:q.quaternion.clone()})})}catch(k){ge.forEach((q,ie)=>q.quaternion.copy(_e[ie])),f="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+k.message}}if(j.size){i.updateWorldMatrix(!0,!0);let ee=new Set;i.traverse(ge=>{ge.isSkinnedMesh&&!ee.has(ge.skeleton)&&(ge.skeleton.update(),ee.add(ge.skeleton))})}}let Ie=[["pointerdown",O],["pointermove",ae],["pointerup",de],["pointercancel",ue],["lostpointercapture",ue]];for(let[J,j]of Ie)t.addEventListener(J,j);let Oe=()=>K();return window.addEventListener("blur",Oe),{configure:J=>l=J,hitTest:(J,j)=>P(n(J,j))?.id,restore:N,tick:Me,cancel:le,suspend:K,command:$,available:H,profile:_,points:z,togglePoints(){return d=!d,d||F.replaceChildren(),z().length},headReaction:()=>_()?.contacts.find(J=>/hari|Head/.test(J.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:S.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[...S.keys()].map(J=>J.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):x.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:f,available:H()}),footMeshContacts:()=>Object.fromEntries(R().map(J=>{let j=i.getObjectByName(J.ikBone),ee=j?Ne(j,!0).map(ge=>s?.(ge)?.clearance).filter(Number.isFinite):[];return[J.ikBone,{samples:ee.length,minClearance:ee.length?Math.min(...ee):null}]})),snapshot:()=>({scene:_()?.id,legSolve:M,solves:m,bedCorrections:g,lastPick:p,active:b.size>0,offset:b.size?[b.values().next().value.dx,b.values().next().value.dy]:null,recovering:x.size>0,held:[...S.keys()],lastEvent:h}),dispose(){le(),I.remove();for(let[J,j]of Ie)t.removeEventListener(J,j);window.removeEventListener("blur",Oe)}}}var _m={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},dc=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=_m[e]||_m.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function vm(i,e,t){let n=new lt,r=new lt,s=0,a=0,o=!1,c=0,l=0,u=!1,h=!0,d=!1,p=0,g=[],M=new Map,m={value:Array.from({length:4},()=>new D)},f={value:Array.from({length:4},()=>new D)},b={value:[.05,.05,.05,.05]},S=new D,x=null;i.traverse(L=>{L.isMesh&&L.userData.snowbreakSurfaceKey&&M.set(L.userData.snowbreakSurfaceKey,L)});function w(L){let P=L.hit,Y=M.get(P.mesh);if(!Y||!P.barycentric)return new D().fromArray(P.point);let O=Y.geometry.index,U=new D;for(let G=0;G<3;G++){let ae=O?O.getX(P.triangle*3+G):P.triangle*3+G;U.addScaledVector(Y.getVertexPosition(ae,new D),P.barycentric[G])}return Y.localToWorld(U)}let v=[],T=new Map,_=new Set;i.traverse(L=>{if(L.isSkinnedMesh&&_.add(L.skeleton),L.isBone&&/^EyeJoint_[LR]$/.test(L.name)&&v.push(L),!L.isSkinnedMesh||!["skin","cloth-or-room"].includes(L.material?.userData.profile))return;let P=L.material,Y=P.onBeforeCompile,O=P.customProgramCacheKey.bind(P);P.onBeforeCompile=U=>{Y(U),Object.assign(U.uniforms,{senseCenters:m,senseOffsets:f,senseRadii:b}),U.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},P.customProgramCacheKey=()=>O()+"-surface-spring-v2",P.needsUpdate=!0});function E(L,P,Y="camera"){Y==="camera"&&(d||performance.now()<p)||!Number.isFinite(L)||!Number.isFinite(P)||(n.set(be.clamp(L,-1,1),be.clamp(P,-1,1)),s=performance.now()+1600)}function R(L){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let P=t.getBoundingClientRect();p=performance.now()+1600,E((L.clientX-P.left)/P.width*2-1,1-(L.clientY-P.top)/P.height*2,"touch")}function I(L,P){if(!h||!L?.alphaVerified||!Array.isArray(L.point)||!M.has(L.mesh))return!1;x?.spring.release();let Y=P?.id||L.anatomy?.id||"body",O=g.find(U=>!U.spring.pressed&&U.region===Y&&w(U).distanceTo(new D().fromArray(L.point))<.04);return O?(x=O,x.hit=L):(g.length===4&&g.shift(),x={hit:L,region:Y,spring:new dc(Y),direction:e.getWorldDirection(new D)},g.push(x)),x.spring.press(),o=u=!0,!0}let F=L=>{d=!0,R(L)},B=()=>{o=!1,d=!1,x?.spring.release(),x=null,p=performance.now()+1e3};t.addEventListener("pointerdown",F),t.addEventListener("pointermove",R),t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B),t.addEventListener("lostpointercapture",B);function N(L=performance.now()){let P=Math.min(.04,Math.max(0,(L-a)/1e3));a=L,L>s&&n.set(0,0),r.lerp(n,1-Math.exp(-P*12));let Y=new D().setFromMatrixColumn(e.matrixWorld,1),O=new D().setFromMatrixColumn(e.matrixWorld,0);for(let U of v){let G=U.quaternion.clone(),ae=new Ye().extractRotation(U.parent.matrixWorld),de=new Ye().makeRotationFromQuaternion(new He().setFromAxisAngle(Y,r.x*.07).multiply(new He().setFromAxisAngle(O,-r.y*.05))),ue=ae.clone().invert().multiply(de).multiply(ae);U.quaternion.premultiply(new He().setFromRotationMatrix(ue)).normalize(),U.updateWorldMatrix(!1,!0),T.set(U,{base:G,applied:U.quaternion.clone()})}for(let U=g.length-1;U>=0;U--)g[U].spring.step(P),g[U].spring.active||g.splice(U,1);l=0,c=0,u=g.length>0;for(let U=0;U<4;U++){let G=g[U];f.value[U].set(0,0,0),G&&(m.value[U].copy(w(G)),b.value[U]=G.spring.profile.radius,f.value[U].copy(G.direction).multiplyScalar(G.spring.offset),Math.abs(G.spring.offset)>Math.abs(l)&&(l=G.spring.offset),c+=Math.abs(G.spring.velocity))}if(v.length)for(let U of _)U.update()}function z(){for(let[L,P]of T)L.quaternion.angleTo(P.applied)<1e-6&&L.quaternion.copy(P.base);T.clear()}return{gaze:E,touch:I,tick:N,restore:z,reset(){z(),o=u=d=!1,p=0,l=c=0,g.length=0,x=null;for(let L of f.value)L.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:v.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(L=>({region:L.region,offset:L.spring.offset,velocity:L.spring.velocity,pressed:L.spring.pressed,center:w(L).toArray()}))}),dispose(){for(let[L,P]of[["pointerdown",F],["pointermove",R],["pointerup",B],["pointercancel",B],["lostpointercapture",B]])t.removeEventListener(L,P)}}}function Ah(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=v=>v.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let v of[i,e,t]){let T=v.getWorldScale(new D);if(Math.min(T.x,T.y,T.z)<=0||Math.max(T.x,T.y,T.z)-Math.min(T.x,T.y,T.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),h=c.distanceTo(l),d=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),h,d].every(Number.isFinite)||Math.min(h,d)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(c),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let M=v=>Math.sqrt(Math.max(0,h*h+d*d+2*h*d*Math.cos(be.degToRad(v)))),m=be.clamp(g,Math.max(Math.abs(h-d)+1e-6,M(a)),Math.min(h+d-1e-6,M(s))),f=r.clone().sub(c).addScaledVector(p,-r.clone().sub(c).dot(p));if(f.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");f.normalize();let b=(h*h-d*d+m*m)/(2*m),S=c.clone().addScaledVector(p,b).addScaledVector(f,Math.sqrt(Math.max(0,h*h-b*b))),x=c.clone().addScaledVector(p,m);function w(v,T,_){let E=o(v),R=o(T).sub(E).normalize(),I=_.clone().sub(E).normalize(),F=v.getWorldQuaternion(new He);F.premultiply(new He().setFromUnitVectors(R,I)),v.quaternion.copy(v.parent.getWorldQuaternion(new He).invert().multiply(F)).normalize(),v.updateWorldMatrix(!0,!0)}return w(i,e,S),w(e,t,x),{requested:n.toArray(),reachable:x.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(x),elbowFlex:be.radToDeg(Math.acos(be.clamp((m*m-h*h-d*d)/(2*h*d),-1,1)))}}var Pr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Rh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new D);function h(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function d(){if(h(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),M=u(r),m=u(s),f=u(a),b=g.distanceTo(M)+M.distanceTo(m),S=g.clone().sub(f);if(S.y=0,S.length()<1e-5)throw new Error("Ambiguous shoulder direction");S.normalize();let x=f.clone().addScaledVector(S,b*.55);x.y+=b*.15;let w=g.clone().addScaledVector(S,b);w.y-=b*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new He),start:m,target:x,pole:w},l=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let M=be.clamp(g,0,1),m=M<.3?M/.3:M>.7?(1-M)/.3:1,f=m*m*(3-2*m);if(f<1e-6)return;l=Ah(n,r,s,c.target,c.pole,Pr);let b={},S=[];function x(w,v,T,_,E){let R=w.quaternion.clone(),I=v.angleTo(R),F=be.degToRad(T);I>F&&S.push(E),w.quaternion.copy(v).slerp(R,_*Math.min(1,F/Math.max(I,1e-10))).normalize(),b[E]=be.radToDeg(v.angleTo(w.quaternion))}x(n,c.upper,Pr.upper,f,"upper"),x(r,c.lower,Pr.lower,f,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new He).invert().multiply(c.wristWorld)),x(s,c.wrist,Pr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:b,limited:S,weight:f}}return{begin:d,apply:p,restore:h,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Pr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function bm(i,e,t=()=>0){let n={};for(let[L,P]of[["left","L"],["right","R"]]){let Y=i.getObjectByName(`Bip001-${P}-UpperArm`),O=i.getObjectByName(`Bip001-${P}-Forearm`),U=i.getObjectByName(`Bip001-${P}-Hand`);Y?.isBone&&O?.parent===Y&&U?.parent===O&&(n[L]={upper:Y,lower:O,hand:U})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(L=>{L.isSkinnedMesh&&a.add(L.skeleton)}),i.traverse(L=>{if(L.isMesh&&L.morphTargetInfluences)for(let P of["L_Eye_close","R_Eye_close"]){let Y=L.morphTargetDictionary?.[P]??L.morphTargetDictionary?.[P.replace("_Eye_","_eye_")];Number.isInteger(Y)&&s.push({mesh:L,index:Y,name:P})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(L=>L.name==="L_Eye_close")&&s.some(L=>L.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,h=0,d=[],p=[];i.traverse(L=>{if(L.isMesh&&L.morphTargetDictionary&&L.morphTargetInfluences){let P=L.morphTargetDictionary.Viseme_A;Number.isInteger(P)&&p.push({mesh:L,index:P})}});function g(L,P){if(!o.includes(L)||!L.startsWith("gesture_")||!Number.isFinite(P?.duration)||P.duration<1||P.duration>8||!Array.isArray(P.poses)||P.poses.length<2||P.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let Y=-1;for(let O of P.poses){if(O.smile!==void 0&&(!Number.isFinite(O.smile)||O.smile<0||O.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(O.time)||O.time<=Y||O.time<0||O.time>P.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");Y=O.time;for(let[U,G]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(O[U]&&(!Array.isArray(O[U])||O[U].length!==3||O[U].some((ae,de)=>!Number.isFinite(ae)||Math.abs(ae)>G[de])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(P.poses[0].time!==0||Y!==P.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:L,plan:P,start:performance.now()},w="\u6B63\u5728\u6267\u884C\uFF1A"+L}function M(L){if(!l)return null;let{plan:P}=l,Y=(L-l.start)/1e3;if(Y>=P.duration)return w="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let O=Math.max(0,P.poses.findIndex(K=>K.time>=Y)-1),U=P.poses[O],G=P.poses[O+1],ae=be.clamp((Y-U.time)/(G.time-U.time),0,1),de=ae*ae*(3-2*ae),ue={};for(let K of["head","torso","leftHand","rightHand"])(U[K]||G[K])&&(ue[K]=[0,1,2].map(le=>(U[K]?.[le]||0)+((G[K]?.[le]||0)-(U[K]?.[le]||0))*de));return ue.smile=(U.smile||0)+((G.smile||0)-(U.smile||0))*de,ue}let m=new Set,f=!1,b=0,S=0,x=performance.now(),w="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",v={left:0,right:0},T=0,_=[],E=[],R={left:!1,right:!1};function I(){for(let L of _)L.bone.quaternion.angleTo(L.applied)<1e-6&&L.bone.quaternion.copy(L.base);_.length=0;for(let L of[...E,...d])Math.abs(L.mesh.morphTargetInfluences[L.index]-L.applied)<1e-6&&(L.mesh.morphTargetInfluences[L.index]=L.base);E.length=d.length=0}function F(L){if(!o.includes(L))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,L==="raise_left_hand"&&m.add("left"),L==="raise_right_hand"&&m.add("right"),L==="raise_both_hands"&&(m=new Set(["left","right"])),L==="lower_hands"&&m.clear(),L==="close_eyes"&&(f=!0),L==="open_eyes"&&(f=!1),L==="turn_left"&&(S+=90),L==="turn_right"&&(S-=90),L==="turn_back"&&(S=180-t()),L==="face_front"&&(S=-t()),w="\u5DF2\u63A5\u6536\uFF1A"+L,N()}function B(){let L=performance.now(),P=Math.min(.25,(L-x)/1e3);x=L;let Y=1-Math.exp(-9*P),O=M(L);if(O){i.updateWorldMatrix(!0,!0);let ue=fe=>fe.getWorldPosition(new D),K=i.getObjectByName("Bip001-Pelvis"),le=r&&K?ue(r).sub(ue(K)).normalize():new D(0,1,0),H=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He)),$=i.getObjectByName("EyeJoint_L"),xe=i.getObjectByName("EyeJoint_R");if(r&&$&&xe){let fe=ue($).add(ue(xe)).multiplyScalar(.5).sub(ue(r));fe.addScaledVector(le,-fe.dot(le)),fe.length()>1e-5&&(H=fe.normalize())}let Ne=new D().crossVectors(le,H).normalize();H.crossVectors(Ne,le).normalize();for(let[fe,me]of[[r,O.head],[c,O.torso]])if(fe&&me){let Me=fe.quaternion.clone(),Ie=fe.parent.getWorldQuaternion(new He),Oe=new He().setFromAxisAngle(le,be.degToRad(-me[0])).multiply(new He().setFromAxisAngle(Ne,be.degToRad(me[1]))).multiply(new He().setFromAxisAngle(H,be.degToRad(me[2])));fe.quaternion.premultiply(Ie.clone().invert().multiply(Oe).multiply(Ie)).normalize(),_.push({bone:fe,base:Me,applied:fe.quaternion.clone()}),fe.updateWorldMatrix(!1,!0)}}b+=(S-b)*Y,e(b),R={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let U=new D(0,1,0),G=i.getObjectByName("EyeJoint_L"),ae=i.getObjectByName("EyeJoint_R"),de=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He));r&&G&&ae&&(de.copy(G.getWorldPosition(new D).add(ae.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),de.y=0,de.length()<1e-5&&de.set(0,0,1),de.normalize());for(let ue of["left","right"]){v[ue]+=((m.has(ue)?1:0)-v[ue])*Y;let K=O?.[ue+"Hand"],le=K?be.smoothstep(Math.hypot(...K),0,.25):v[ue],H=n[ue];if(!H||!r||le<.001)continue;let $=j=>j.getWorldPosition(new D),xe=$(r),Ne=$(H.upper),fe=Ne.distanceTo($(H.lower))+$(H.lower).distanceTo($(H.hand)),me=Ne.clone().sub(xe);if(me.y=0,me.length()<1e-6)continue;me.normalize();let Me=xe.clone().addScaledVector(me,fe*.45);Me.y+=fe*.18,K&&(Me.copy($(H.hand)).addScaledVector(me,Math.abs(K[0])*fe),Me.y+=K[1]*fe,Me.addScaledVector(de,K[2]*fe));let Ie=Ne.clone().addScaledVector(de,fe*.7).addScaledVector(me,fe*.2).addScaledVector(U,-fe*.2),Oe=H.hand.getWorldQuaternion(new He),J=[H.upper,H.lower,H.hand].map(j=>({bone:j,base:j.quaternion.clone()}));try{Ah(H.upper,H.lower,H.hand,Me,Ie,Pr);for(let[Ge,Re]of[H.upper,H.lower].entries()){let C=J[Ge].base,y=Re.quaternion.clone(),V=C.angleTo(y),k=be.degToRad([100,140][Ge]);Re.quaternion.copy(C).slerp(y,le*Math.min(1,k/Math.max(V,1e-8))).normalize(),Re.updateWorldMatrix(!1,!0)}let j=Oe.clone(),ee=Ge=>i.getObjectByName(`Bip001-${ue==="left"?"L":"R"}-Finger${Ge}`),ge=ee(1),_e=ee(2),Ve=ee(4);if(ge&&_e&&Ve){let Ge=$(ge).sub($(Ve)).normalize(),Re=$(_e).sub($(H.hand));Re.addScaledVector(Ge,-Re.dot(Ge)).normalize();let C=new Ye().makeBasis(Ge,Re,new D().crossVectors(Ge,Re).normalize()),y=l?.id==="gesture_open_arms"?me.clone():U.clone(),V=de.clone().multiplyScalar(ue==="left"?1:-1),k=new D().crossVectors(y,V).normalize();y.crossVectors(V,k).normalize();let q=new Ye().makeBasis(k,y,new D().crossVectors(k,y).normalize());j=new He().setFromRotationMatrix(q.multiply(C.invert())).multiply(H.hand.getWorldQuaternion(new He));let ie=j.clone().multiply(H.hand.getWorldQuaternion(new He).invert()),ce=$(H.hand).sub($(H.lower)).normalize(),re=new D(ie.x,ie.y,ie.z).dot(ce),oe=be.clamp(2*Math.atan2(re,ie.w),-Math.PI/2,Math.PI/2)*.6*le;H.lower.quaternion.multiply(new He().setFromAxisAngle(H.hand.position.clone().normalize(),oe)).normalize(),H.lower.updateWorldMatrix(!1,!0)}let et=H.hand.parent.getWorldQuaternion(new He).invert().multiply(j),W=J[2].base.angleTo(et);H.hand.quaternion.copy(J[2].base).slerp(et,le*Math.min(1,be.degToRad(90)/Math.max(W,1e-8))).normalize(),H.hand.updateWorldMatrix(!1,!0);for(let Ge of J)_.push({...Ge,applied:Ge.bone.quaternion.clone()});R[ue]=$(H.hand).y>Ne.y+fe*.25}catch(j){for(let ee of J)ee.bone.quaternion.copy(ee.base);w="\u4E3E\u624B\u5931\u8D25\uFF1A"+j.message,m.delete(ue)}}T+=((f?1:0)-T)*Y;for(let ue of s){let K=ue.mesh.morphTargetInfluences[ue.index]||0,le=be.lerp(K,f?1:0,T);E.push({...ue,base:K,applied:le}),ue.mesh.morphTargetInfluences[ue.index]=le}O?.smile&&i.traverse(ue=>{if(!(!ue.isMesh||!ue.morphTargetInfluences))for(let K of["L_Eye_smile","R_Eye_smile"]){let le=ue.morphTargetDictionary?.[K]??ue.morphTargetDictionary?.[K.replace("_Eye_","_eye_")];if(!Number.isInteger(le))continue;let H=ue.morphTargetInfluences[le]||0,$=Math.max(H,Math.min(.5,O.smile));d.push({mesh:ue,index:le,base:H,applied:$}),ue.morphTargetInfluences[le]=$}}),h+=(u-h)*(1-Math.exp(-P*(u>h?24:16)));for(let ue of p){let K=ue.mesh.morphTargetInfluences[ue.index]||0,le=Math.max(K,h*.85);d.push({...ue,base:K,applied:le}),ue.mesh.morphTargetInfluences[ue.index]=le}i.updateWorldMatrix(!0,!0);for(let ue of a)ue.update()}function N(){i.updateWorldMatrix(!0,!0);for(let Y of["left","right"]){let O=n[Y];if(!O)continue;let U=O.upper.getWorldPosition(new D),G=O.lower.getWorldPosition(new D),ae=O.hand.getWorldPosition(new D);R[Y]=ae.y>U.y+(U.distanceTo(G)+G.distanceTo(ae))*.25}let L=s.length?s.reduce((Y,O)=>Y+(O.mesh.morphTargetInfluences[O.index]||0),0)/s.length:0,P=b+t();return{available:[...o],eyes:s.length?L>.95?"\u5DF2\u95ED\u5408":L<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...R},hands:R.left&&R.right?"\u53CC\u624B\u62AC\u8D77":R.left?"\u5DE6\u624B\u62AC\u8D77":R.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(b-S)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((P%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(P%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(P)}\u5EA6`,yaw:P,lastResult:w}}function z(){I(),u=h=0,l=null,m.clear(),f=!1,v.left=v.right=T=0,b=S=0,e(0),w="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:F,playGesture:g,tick:B,restore:I,snapshot:N,reset:z,setSpeechLevel:L=>{u=Number.isFinite(L)?be.clamp(L,0,1):0},speechState:()=>({level:h,targets:p.length,weights:p.map(L=>L.mesh.morphTargetInfluences[L.index])}),releaseHands:()=>{m.clear(),l=null}}}function Mm(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:Ch(i)}function Ch(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let d=0;d<3;d++)u[d]=n[d]+(.2*o[d]+.6*c[d]+.2*l[d]-n[d])*t;let h=new He().fromArray(o,3).slerp(new He().fromArray(c,3),.75).slerp(new He().fromArray(l,3),.2);return new He().fromArray(n,3).slerp(h,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function Sm(i,e,t,n){let r=/eye01/.test(i),s=/face01/.test(i),a=/hair01/.test(i),o=/body00(?:_ma)?_inst|face01/.test(i);if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let c={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?wn:en},l;return r?l=new an(c):(l=new on({...c,normalMap:t||null,normalScale:new lt(s?.22:.48,s?-.22:-.48),roughness:a?.42:o?.68:.6,metalness:0,clearcoat:a?.22:0,clearcoatRoughness:.48,envMapIntensity:a?.6:o?.25:.35}),(s||o)&&(l.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${s?"0.72":"0.18"}));`)},l.customProgramCacheKey=()=>s?"enya-soft-face-v1":"enya-soft-skin-v1")),n.transparent&&(l.polygonOffset=!0,l.polygonOffsetFactor=-.5,l.polygonOffsetUnits=-.5),l.userData.profile=r?"eye":s?"soft-face":a?"hair":o?"skin":"cloth-or-room",l}function wm(i,e){e.outputColorSpace=Dt,e.toneMapping=Ua,e.toneMappingExposure=1.05;let t=new Ra(16774379,10596036,1.4);i.add(t);let n=new Bi(16773862,1.9);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=gl;let r=new Bi(14674687,1);r.position.set(3,2,4),i.add(r);let s=new Bi(15656447,.9);s.position.set(1,3,-4),i.add(s);let a=new vr;a.background=new nt(.18,.18,.2);let o=new Mr(1,1),c=[];for(let[m,f,b,S]of[[[-4,4,5],[5,7],16772833,3],[[5,2,3],[4,6],14937599,2],[[0,5,-4],[6,3],16771312,2]]){let x=new an({color:b,side:en});x.color.multiplyScalar(S),c.push(x);let w=new Vt(o,x);w.position.fromArray(m),w.scale.set(f[0],f[1],1),w.lookAt(0,1,0),a.add(w)}let l=new Vs(e),u=l.fromScene(a,.08,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let h=2048;function d(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9};function g(m){let f={...p,...m};if(![f.exposure,f.warmth,f.reflection].every(Number.isFinite)||typeof f.shadows!="boolean"||f.exposure<.65||f.exposure>1.45||f.warmth<0||f.warmth>1||f.reflection<0||f.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(f.shadowSize)||![f.key,f.fill,f.rim].every(b=>Number.isFinite(b)&&b>=0&&b<=3))throw new Error("Invalid light quality");return d(Math.min(f.shadowSize,h)),p={exposure:f.exposure,warmth:f.warmth,reflection:f.reflection,shadows:f.shadows,shadowSize:f.shadowSize,key:f.key,fill:f.fill,rim:f.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new nt(16770247),p.warmth),i.environmentIntensity=p.reflection,{...p}}function M(m){let f=m.getCenter(new D),b=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(f),n.position.copy(f).add(new D(-2,4,5).normalize().multiplyScalar(b*3)),Object.assign(n.shadow.camera,{left:-b,right:b,top:b,bottom:-b,near:.1,far:b*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:M,setBudget(m){h=m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048,d(Math.min(p.shadowSize,h))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}function Ih(i,e,t,n,r=null){let s=[t,r].filter(Boolean);if(!s.length)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let a=R=>["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(R.schema)&&["Yuki","UniversalMMD"].includes(R.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(R.targetCharacter)&&Array.isArray(R.clips)&&R.clips.length<=24;for(let R of s){if(!a(R))throw new Error("Invalid learned motion catalog");if(R.schema.endsWith("/3")&&R.targetCharacter!=="Universal"&&(R.stance!=="standing"||n!=="standing"))throw new Error("Standing motion requires standing source")}let o=n==="standing",c=R=>{let I=[];if(i.traverse(F=>{F.isBone&&F.name===R&&I.push(F)}),I.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+R);return I[0]},l=c("Bip001-Head"),u=i.getObjectByName("Bip001-Spine3")||i.getObjectByName("Bip001-Spine2")||c("Bip001-Spine"),h={};for(let[R,I]of[["left","L"],["right","R"]]){let F=c(`Bip001-${I}-UpperArm`),B=c(`Bip001-${I}-Forearm`),N=c(`Bip001-${I}-Hand`);if(B.parent!==F||N.parent!==B)throw new Error("Learned arm binding mismatch");h[R]={upper:F,lower:B,hand:N}}let d=R=>R.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let p=1,g=d(h.right.upper).sub(d(h.left.upper)).normalize(),M=d(l).sub(d(u)).normalize();new D().crossVectors(g,M).dot(e.position.clone().sub(d(u)))<0&&(p=-1);let m=new Map;for(let R of s){let I=R.schema.endsWith("/3")&&R.stance==="standing",F=R.targetCharacter==="Universal";for(let B of R.clips){if(!(["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(B.id)||/^mmd_[a-zA-Z0-9_-]{1,48}$/.test(B.id))||m.has(B.id)||!Number.isInteger(B.frames)||B.frames<2||B.frames>1800||!Number.isFinite(B.fps)||B.fps<=0||B.fps>60)throw new Error("Invalid learned clip");let z={};for(let[G,ae]of Object.entries(B.channels||{})){let de=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(G)?1:["headDelta","chestDelta",...I?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(G)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...I?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(G)||/^(left|right)Finger[0-4]_[0-2]$/.test(G)?3:0;if(!de||typeof ae!="string")throw new Error("Invalid learned channel");let ue=Uint8Array.from(atob(ae),le=>le.charCodeAt(0));if(ue.byteLength!==B.frames*de*4)throw new Error("Learned channel truncated");let K=new Float32Array(ue.buffer);if(!K.every(Number.isFinite))throw new Error("Non-finite learned pose");if(de===1&&K.some(le=>le<-.31||le>1.11))throw new Error("Invalid learned finger angle");for(let le=0;de>1&&le<B.frames;le++){let H=0;for(let $=0;$<de;$++)H+=K[le*de+$]**2;if(Math.abs(H-1)>.01)throw new Error("Invalid learned direction/quaternion")}z[G]={values:K,width:de}}if(!z.headDelta)throw new Error("Missing learned head reference");let L=B.id.startsWith("mmd_"),P=B.id.includes("dance")||L,Y=P?I?"standing-dance":"seated-dance":B.id==="yuki_Peace_hand"?"peace":B.id==="yuki_hello"?"greeting":"head",O=P?["left","right"]:Y==="head"?[]:["right"];if(!R.schema.endsWith("/1")&&(B.motionKind!==Y||JSON.stringify(B.arms)!==JSON.stringify(O)))throw new Error("Invalid learned action capability");if(P&&!o&&!F)continue;let U=P?o&&I?"standing-dance":"seated-dance":Y;if(U==="standing-dance"&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(G=>!z[G]))throw new Error("Missing standing body channels");m.set(B.id,{...B,kind:U,arms:O,channels:z,duration:(B.frames-1)/B.fps})}}let f=Object.fromEntries([["left","L"],["right","R"]].map(([R,I])=>[R,Array.from({length:5},(F,B)=>[c(`Bip001-${I}-Finger${B}`),c(`Bip001-${I}-Finger${B}1`),c(`Bip001-${I}-Finger${B}2`)])])),b=o?c("Bip001-Pelvis"):null,S=o?Object.fromEntries([["left","L"],["right","R"]].map(([R,I])=>[R,{thigh:c(`Bip001-${I}-Thigh`),calf:c(`Bip001-${I}-Calf`),foot:c(`Bip001-${I}-Foot`),toe:c(`Bip001-${I}-Toe0`)}])):{},x={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function w(){let R=d(h.right.upper).sub(d(h.left.upper)).normalize(),I=d(l).sub(d(u));I.addScaledVector(R,-I.dot(R)).normalize();let F=new D().crossVectors(R,I).multiplyScalar(p).normalize();return{right:R,up:I,front:F,vector:B=>R.clone().multiplyScalar(B[0]).addScaledVector(I,B[1]).addScaledVector(F,B[2])}}let v=new Map,T=null,_=-1;function E(R,I,F,B={}){let N=m.get(R);if(!N||F<=0)return;let z=N.kind==="standing-dance",L=z&&Number.isFinite(B.amplitude)?be.clamp(B.amplitude,.5,1.2):1;x.fingerWrites=0,x.armWrites=0,x.chestWrites=0,x.workspaceAdjusted=0,(R!==T||I<=_||I-_>.2)&&v.clear(),T=R,_=I,i.updateWorldMatrix(!0,!0);let P=w(),Y=be.clamp(I*N.fps,0,N.frames-1),O=Math.floor(Y),U=Math.min(O+1,N.frames-1),G=Y-O;function ae(me){let Me=N.channels[me];if(!Me)return null;if(z&&Me.width===1)return[be.lerp(Me.values[O],Me.values[U],G)];if(z&&Me.width===3)return new D().fromArray(Me.values,O*3).lerp(new D().fromArray(Me.values,U*3),G).normalize().toArray();if(Me.width===1){let Oe=0;for(let J of[-2,-1,0,1,2]){let j=be.clamp(Y+J,0,N.frames-1),ee=Math.floor(j),ge=Math.min(ee+1,N.frames-1);Oe+=(Me.values[ee]+(Me.values[ge]-Me.values[ee])*(j-ee))*(J===0?.4:Math.abs(J)===1?.2:.1)}return[Oe]}if(Me.width===4)return new He().fromArray(Me.values,O*4).slerp(new He().fromArray(Me.values,U*4),G).normalize().toArray();let Ie=new D;for(let Oe of[-2,-1,0,1,2]){let J=be.clamp(Y+Oe,0,N.frames-1),j=Math.floor(J),ee=Math.min(j+1,N.frames-1);Ie.add(new D().fromArray(Me.values,j*3).lerp(new D().fromArray(Me.values,ee*3),J-j).multiplyScalar(Oe===0?.4:Math.abs(Oe)===1?.2:.1))}return Ie.normalize().toArray()}function de(me,Me,Ie,Oe,J=F){let j=Me.angleTo(Ie),ee=be.degToRad(Oe);j>ee&&x.limited++,me.quaternion.copy(Me).slerp(Ie,J*Math.min(L,ee/Math.max(j,1e-8))).normalize()}function ue(me,Me,Ie,Oe,J=F){me.parent.updateWorldMatrix(!0,!1);let j=me.quaternion.clone(),ee=j.clone(),ge=(Me?Me.position.clone():new D(1,0,0)).multiply(me.scale).applyQuaternion(ee).normalize(),_e=Ie.clone().transformDirection(me.parent.matrixWorld.clone().invert()),Ve=new He().setFromUnitVectors(ge,_e).multiply(ee).normalize();v.set(me,Ve.clone()),de(me,j,Ve,Oe,J),me.updateWorldMatrix(!1,!0)}function K(me,Me,Ie,Oe){let J=new Ye().makeBasis(P.right,P.up,P.front),j=new Ye().makeRotationFromQuaternion(new He(...Me)),ee=J.clone().multiply(j).multiply(J.clone().invert());me.parent.updateWorldMatrix(!0,!1);let ge=new Ye().extractRotation(me.parent.matrixWorld),_e=ge.clone().invert().multiply(ee).multiply(ge),Ve=me.quaternion.clone(),et=new He().setFromRotationMatrix(_e).multiply(Ve).normalize();de(me,Ve,et,Ie,Oe),me.updateWorldMatrix(!1,!0)}let le=new D(0,1,0).transformDirection(i.parent.matrixWorld),H=z?Math.min(...Object.values(S).map(me=>d(me.foot).dot(le))):0;x.legWrites=0,x.groundCorrection=0,x.sourceTime=I,x.sourceFrame=Y,x.sourceFPS=N.fps,x.amplitude=L,x.sourceBPM=z?R.includes("90bpm")?90:R.includes("120bpm")?120:60:null,z&&(K(b,ae("pelvisDelta"),30,F),P=w());let $=ae("chestDelta");if($&&(K(u,$,z?35:10,F*(z?1:.35)),P=w(),x.chestWrites=1),z){for(let[J,j]of Object.entries(S)){if(j.calf.parent!==j.thigh||j.foot.parent!==j.calf)throw new Error("Standing leg hierarchy mismatch");ue(j.thigh,j.calf,P.vector(ae(J+"Thigh")),110,F),ue(j.calf,j.foot,P.vector(ae(J+"Calf")),150,F),K(j.foot,ae(J+"FootDelta"),45,F),x.legWrites+=3}let me=be.clamp(H-Math.min(...Object.values(S).map(J=>d(J.foot).dot(le))),-.18,.18),Me=d(b),Ie=b.parent.matrixWorld.clone().invert(),Oe=Me.clone().addScaledVector(le,me).applyMatrix4(Ie).sub(Me.clone().applyMatrix4(Ie));b.position.add(Oe),b.updateWorldMatrix(!1,!0),x.groundCorrection=me}function xe(me,Me,Ie,Oe){let J=d(me.upper),j=d(me.lower).distanceTo(J),ee=d(me.hand).distanceTo(d(me.lower)),ge=J.clone().addScaledVector(P.vector(Me),j),_e=ge.clone().addScaledVector(P.vector(Ie),ee),Ve=d(u),et=_e.clone().sub(Ve),W=et.dot(P.right),Ge=et.dot(P.up),Re=et.dot(P.front),C=[W,Ge,Re];Ge=be.clamp(Ge,-.16,.6);let y=(1-be.smoothstep(Math.abs(W),.16,.28))*be.smoothstep(Ge,-.42,-.32)*(1-be.smoothstep(Ge,.18,.32));Re+=Math.max(0,.23-Re)*y,_e.copy(Ve).addScaledVector(P.right,W).addScaledVector(P.up,Ge).addScaledVector(P.front,Re);let V=_e.clone().sub(d(l));V.length()<.14&&_e.copy(d(l)).add(V.length()>.001?V.setLength(.14):P.front.clone().multiplyScalar(.14)),(C[1]!==Ge||C[2]!==Re)&&x.workspaceAdjusted++;let k=_e.clone().sub(J),q=be.clamp(k.length(),Math.abs(j-ee)+.015,(j+ee)*.98);k.normalize(),_e.copy(J).addScaledVector(k,q);let ie=P.right.clone().multiplyScalar(Oe==="right"?1:-1),ce=ie.clone().addScaledVector(P.front,.3).addScaledVector(P.up,.2);ce.addScaledVector(k,-ce.dot(k)),ce.length()<1e-4&&ce.copy(P.front).addScaledVector(k,-P.front.dot(k)),ce.normalize();let re=(j*j-ee*ee+q*q)/(2*q),oe=Math.sqrt(Math.max(0,j*j-re*re)),ye=J.clone().addScaledVector(k,re).addScaledVector(ce,oe);return{upper:ye.clone().sub(J).normalize(),lower:_e.sub(ye).normalize()}}for(let me of N.arms){let Ve=function(){let ie=d(Ie[1][0]).sub(d(Ie[4][0])).normalize(),ce=d(Ie[2][0]).sub(d(Me.hand));return ce.addScaledVector(ie,-ce.dot(ie)).normalize(),new Ye().makeBasis(ie,ce,new D().crossVectors(ie,ce).normalize())},Me=h[me],Ie=f[me],Oe=ae(me+"Upper"),J=ae(me+"Lower");if(!Oe||!J)continue;let j=["greeting","peace"].includes(N.kind)?F*be.smoothstep(J[1],-1,1):F*(z?1:.72),ee=N.kind==="seated-dance"?xe(Me,Oe,J,me):{upper:P.vector(Oe),lower:P.vector(J)};ue(Me.upper,Me.lower,ee.upper,120,j),ue(Me.lower,Me.hand,ee.lower,170,j),x.armWrites+=2;let ge=ae(me+"HandWidth"),_e=ae(me+"HandForward");if(!ge||!_e)continue;i.updateWorldMatrix(!0,!0);let et=P.vector(ge).normalize(),W=P.vector(_e);W.addScaledVector(et,-W.dot(et)).normalize();let Ge=new Ye().makeBasis(et,W,new D().crossVectors(et,W).normalize()),Re=Ge.multiply(Ve().invert()),C=Me.hand,y=new Ye().extractRotation(C.parent.matrixWorld),V=y.clone().invert().multiply(Re).multiply(y),k=C.quaternion.clone(),q=new He().setFromRotationMatrix(V).multiply(k).normalize();de(C,k,q,N.kind==="greeting"?110:N.kind==="seated-dance"?75:110,j*(N.kind==="seated-dance"?.7:1)),C.updateWorldMatrix(!1,!0);for(let ie=0;ie<5;ie++)for(let ce=0;ce<3;ce++){let re=ae(`${me}Finger${ie}_${ce}`);if(!re)continue;let oe=new D(...re).normalize(),ye=ce?new D(...ae(`${me}Finger${ie}_${ce-1}`)).normalize():new D(0,1,0),De=be.clamp(Math.atan2(-oe.z,Math.max(.1,oe.y))-Math.atan2(-ye.z,Math.max(.1,ye.y)),-.15,ie===0?.45:1.1),Se=ce===0&&ie!==0?be.clamp(Math.atan2(oe.x,oe.y),-.3,.3):0,Ee=ae(`${me}Curl${ie}_${ce}`),Be=ae(`${me}Spread${ie}`);Ee&&(De=Ee[0]),ce===0&&ie!==0&&Be&&(Se=Be[0]),N.kind==="peace"&&(De=ie===1||ie===2?.02:ie===0?.4:.95,ce===0&&(Se=ie===1?.14:ie===2?-.08:0));let Ze=me==="left"?-1:1,Fe=Ie[ie][ce],Z=Fe.quaternion.clone(),he=new He().fromArray(Fe.userData.bindLocalQuaternion||Z.toArray()).multiply(new He().setFromAxisAngle(new D(0,0,1),Se*Ze)).multiply(new He().setFromAxisAngle(new D(0,1,0),De*Ze));Fe.quaternion.copy(Z).slerp(he,F).normalize(),x.fingerWrites++}}let Ne=ae("headDelta");if(Ne){let me=new Ye().makeBasis(P.right,P.up,P.front),Me=new Ye().makeRotationFromQuaternion(new He(...Ne)),Ie=me.clone().multiply(Me).multiply(me.clone().invert());l.parent.updateWorldMatrix(!0,!1);let Oe=new Ye().extractRotation(l.parent.matrixWorld),J=Oe.clone().invert().multiply(Ie).multiply(Oe),j=l.quaternion.clone(),ee=new He().setFromRotationMatrix(J).multiply(j).normalize();de(l,j,ee,40)}i.updateWorldMatrix(!0,!0);let fe=new Set;i.traverse(me=>{me.isSkinnedMesh&&!fe.has(me.skeleton)&&(me.skeleton.update(),fe.add(me.skeleton))})}return{available:()=>[...m.values()].map(R=>({id:R.id,label:R.label,duration:R.duration,arms:[...R.arms],kind:R.kind})),apply:E,snapshot:()=>{i.updateWorldMatrix(!0,!0);let R=w(),I=h.right;return{...x,parentDeterminant:I.upper.parent.matrixWorld.determinant(),rightUpper:d(I.lower).sub(d(I.upper)).normalize().toArray(),rightLower:d(I.hand).sub(d(I.lower)).normalize().toArray(),handHeight:d(I.hand).sub(d(I.lower)).dot(R.up)}}}}function Ph(i,e){if(e===ju)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bs||e===Va){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Bs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Em(i){let e=new Map,t=new Map,n=i.clone();return Tm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Tm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Tm(i.children[n],e.children[n],t)}var Nr=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new fc(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new fc(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jh(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ki.extractUrlBase(e);a=ki.resolveURL(l,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ps(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pm){try{a[ft.KHR_BINARY_GLTF]=new jh(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new sd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new Fh;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new Qh(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new ed;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new td;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Pb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new nt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Bi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Pa(u),l.distance=h;break;case"spot":l=new Ia(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),_i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Fh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let r=[];e.color=new nt(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(s,s)}return Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},zh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(s[0],s[1],s[2],gn),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(s[0],s[1],s[2],gn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Kh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},$h=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},fc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}},Jh=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(let g of h){let M=new Ye,m=new D,f=new He,b=new D(1,1,1),S=new ba(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,w),c.SCALE&&b.fromBufferAttribute(c.SCALE,w),S.setMatrixAt(w,M.compose(m,f,b));let x=null;for(let w in c)if(w==="_COLOR_0"){let v=c[w];S.instanceColor=new Ni(v.array,v.itemSize,v.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(x===null){let T=S.geometry;x=new Qt,x.name=T.name;for(let _ in T.attributes)x.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)x.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&x.setIndex(T.index),x.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)x.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(x.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(x.boundingSphere=T.boundingSphere.clone()),x.drawRange.start=T.drawRange.start,x.drawRange.count=T.drawRange.count,x.userData=Object.assign({},T.userData),S.geometry=x}let v=c[w];x.setAttribute(w,new Ni(v.array,v.itemSize,v.normalized))}Ut.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Pm="glTF",qa=12,Am={JSON:1313821514,BIN:5130562},jh=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-qa,s=new DataView(e,qa),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Am.JSON){let l=new Uint8Array(e,qa+a,o);this.content=n.decode(l)}else if(c===Am.BIN){let l=qa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=id[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=id[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],p=Ws[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let M=p.attributes[g],m=c[g];m!==void 0&&(M.normalized=m)}h(p)},o,l,gn,d)})})}},ed=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},td=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},pc=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,M=g-l,m=-2*p+3*d,f=p-d,b=1-m,S=f-d+h;for(let x=0;x!==o;x++){let w=a[M+x+o],v=a[M+x+c]*u,T=a[g+x+o],_=a[g+x]*u;s[x]=b*w+S*v+m*T+f*_}return s}},Lb=new He,nd=class extends pc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Lb.fromArray(s).normalize().toArray(s),s}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rm={9728:zt,9729:Ht,9984:_l,9985:Ds,9986:Rr,9987:ei},Cm={33071:Xn,33648:ms,10497:tr},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nb={CUBICSPLINE:void 0,LINEAR:yr,STEP:xr},Nh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ub(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),i.DefaultMaterial}function Lr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Db(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Fb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ob(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uh(t.attributes):e=i.indices+":"+Uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Uh(i.targets[n]);return e}function Uh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kb=new Ye,sd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new rr(this.options.manager):this.textureLoader=new La(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Lr(s,o,r),_i(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(ki.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Lh[r.type],o=Ws[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ft(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Lh[r.type],l=Ws[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,M,m;if(p&&p!==h){let f=Math.floor(d/p),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,S=t.cache.get(b);S||(M=new l(o,f*p,r.count*p/u),S=new Ms(M,p/u),t.cache.add(b,S)),m=new Ss(S,c,d%p/u,g)}else o===null?M=new l(r.count*c):M=new l(o,d,r.count*c),m=new Ft(M,c,g);if(r.sparse!==void 0){let f=Lh.SCALAR,b=Ws[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new b(a[1],S,r.sparse.count*f),v=new l(a[2],x,r.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,_=w.length;T<_;T++){let E=w[T];if(m.setX(E,v[T*c]),c>=2&&m.setY(E,v[T*c+1]),c>=3&&m.setZ(E,v[T*c+2]),c>=4&&m.setW(E,v[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Rm[d.magFilter]||Ht,u.minFilter=Rm[d.minFilter]||ei,u.wrapS=Cm[d.wrapS]||tr,u.wrapT=Cm[d.wrapT]||tr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Ht,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(M){let m=new jt(M);m.needsUpdate=!0,d(m)}),t.load(ki.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),_i(h,a),h.userData.mimeType=a.mimeType||Bb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Rs,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new As,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Sr}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=r[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new nt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],gn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);let u=s.alphaMode||Nh.OPAQUE;if(u===Nh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Nh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==an){let h=s.emissiveFactor;o.emissive=new nt().setRGB(h[0],h[1],h[2],gn)}return s.emissiveTexture!==void 0&&a!==an&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),_i(h,s),t.associations.set(h,{materials:e}),s.extensions&&Lr(r,h,s),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Im(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Ob(l),h=r[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Im(new Qt,l,t),l.mode===qn.TRIANGLE_STRIP?d=d.then(p=>Ph(p,Va)):l.mode===qn.TRIANGLE_FAN&&(d=d.then(p=>Ph(p,Bs))),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Ub(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let M=u[p],m=a[p],f,b=l[p];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0){let S=s.isSkinnedMesh===!0,x=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=S&&x?new _a(M,b):new Vt(M,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===qn.LINES)f=new Ma(M,b);else if(m.mode===qn.LINE_STRIP)f=new br(M,b);else if(m.mode===qn.LINE_LOOP)f=new Sa(M,b);else if(m.mode===qn.POINTS)f=new wa(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Fb(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),_i(f,s),m.extensions&&Lr(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Lr(r,h[0],s),h[0];let d=new kt;s.extensions&&Lr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(be.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new sr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Ye;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new va(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){let p=r.channels[h],g=r.samplers[p.sampler],M=p.target,m=M.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;M.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],g=h[2],M=h[3],m=h[4],f=[];for(let S=0,x=d.length;S<x;S++){let w=d[S],v=p[S],T=g[S],_=M[S],E=m[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,v,T,_,E);if(R)for(let I=0;I<R.length;I++)f.push(R[I])}let b=new Is(s,void 0,f);return _i(b,r),b})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,kb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new ws:l.length>1?u=new kt:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),_i(u,s),s.extensions&&Lr(n,u,s),s.matrix!==void 0){let h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&Lr(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?s.add(Em(d)):s.add(d)}let l=u=>{let h=new Map;for(let[d,p]of r.associations)(d instanceof Mn||d instanceof jt)&&h.set(d,p);return u.traverse(d=>{let p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}cr[s.path]===cr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(cr[s.path]){case cr.weights:u=Di;break;case cr.rotation:u=pi;break;case cr.translation:case cr.scale:u=Oi;break;default:n.itemSize===1?u=Di:u=Oi;break}let h=r.interpolation!==void 0?Nb[r.interpolation]:yr,d=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let M=new u(c[p]+"."+cr[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rd(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof pi?nd:pc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zb(i,e,t){let n=e.attributes,r=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=rd(Ws[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let M=rd(Ws[d.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new bn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Im(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=id[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return dt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),_i(i,e),zb(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Db(i,e.targets,t):i})}function Lm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,h=-l*r*o-c*s*a,d=l*s*a-c*r*o,p=l*s*o+c*r*a;return[-u,-d,-h,p]}function Nm(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((d,p)=>[d.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new D().crossVectors(c,o).normalize(),u=new D;for(let d of["L","R"]){let p=e.get("Bip001-"+d+"-Foot"),g=e.get("Bip001-"+d+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(l)<0&&l.negate();let h=i.geometry.getAttribute("position");return(d,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let M=new D;for(let w=0;w<3;w++)M.addScaledVector(new D().fromBufferAttribute(h,d[w]),p.getComponent(w));let m=M.sub(t),f=Math.abs(m.dot(c))/a,b=m.dot(o)/a,S=m.dot(l)/a;if(f>.72)return null;let x=null;return b>-.38&&b<-.04&&f<.23&&S>.025?x="pelvis_front":b>-.35&&b<.18&&S<-.025?x="hips":b>.43&&b<1.02&&S>.025&&f<.67?x="chest":b>.1&&b<=.43&&S>.025?x=f>.48?"waist":"abdomen":b>.16&&b<1.02&&S<-.025&&(x="back"),x?{id:x,confidence:.85,source:"bind-pose-surface",coordinates:[f,b,S]}:null}}function Hb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function Um(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=Hb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Dm(i,e,t,n=null){let r=new Er,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function h(g,M){if(!["torso","leg"].includes(g?.id))return g;let m=U=>i.getObjectByName(U),f=U=>m(U)?.getWorldPosition(new D),b=f("Bip001-Pelvis"),S=f("Bip001-Neck"),x=f("Bip001-L-UpperArm"),w=f("Bip001-R-UpperArm"),v=f("Bip001-Head"),T=f("EyeJoint_L"),_=f("EyeJoint_R");if(!b||!S||!x||!w||!v||!T||!_)return g;let E=S.distanceTo(b);if(E<1e-5)return g;let R=S.clone().sub(b).normalize(),I=w.clone().sub(x).normalize(),F=new D().crossVectors(I,R).normalize(),N=T.add(_).multiplyScalar(.5).sub(v).dot(F);if(Math.abs(N)<E*.002)return g;N<0&&F.negate();let z=M.clone().sub(b),L=z.dot(R)/E,P=z.dot(F)/E;if(Math.abs(z.dot(I))/E>.7)return g;let O=null;return L>-.4&&L<.16&&P<-.025?O="hips":g.id==="torso"&&(L>.45&&L<.95&&P>.06?O="chest":L>.05&&L<.46&&P>.06?O="abdomen":L>.16&&L<.95&&P<-.06&&(O="back")),O?{id:O,confidence:.75,source:"rig-surface-estimate"}:g}function d(g){for(let M=g;M;M=M.parent)if(!M.visible)return!1;return!0}function p(g,M){if(!g||!M)return 1;try{let m=g.image,f=m.width,b=m.height;if(!f||!b||!u)return null;let S=M.clone();g.transformUv(S);let x=Math.min(f-1,Math.max(0,Math.floor(S.x*f))),w=Math.min(b-1,Math.max(0,Math.floor(S.y*b))),v=Math.floor(x/32)*32,T=Math.floor(w/32)*32;s.has(g)||s.set(g,++c);let _=s.get(g)+":"+v+":"+T,E=a.get(_);if(E)a.delete(_),a.set(_,E);else{u.clearRect(0,0,32,32),u.drawImage(m,v,T,Math.min(32,f-v),Math.min(32,b-T),0,0,Math.min(32,f-v),Math.min(32,b-T));let R=u.getImageData(0,0,32,32).data;E=new Uint8Array(1024);for(let I=0;I<1024;I++)E[I]=R[I*4+3];a.set(_,E),a.size>128&&a.delete(a.keys().next().value)}return E[(w-T)*32+x-v]/255}catch{return null}}return(g,M)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(M)||!m.width||!m.height||g<m.left||g>m.right||M<m.top||M>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let f=[];i.traverse(S=>{S.isMesh&&d(S)&&(S.isSkinnedMesh&&(S.skeleton.update(),S.computeBoundingSphere(),S.computeBoundingBox()),f.push(S))});let b=new Set;n?.traverse(S=>{S.isMesh&&d(S)&&(f.push(S),b.add(S))}),r.setFromCamera(new lt((g-m.left)/m.width*2-1,-(M-m.top)/m.height*2+1),e);for(let S of r.intersectObjects(f,!1)){let x=S.object,w=x.material,v=p(x.userData.previewMap,S.uv),T=w.alphaTest||(w.transparent?.1:0);if(w.clippingPlanes?.some(P=>P.distanceToPoint(S.point)<0)||v!==null&&v<T)continue;if(b.has(x))return null;let _=[S.face.a,S.face.b,S.face.c],E=_.map(P=>x.getVertexPosition(P,new D)),R=x.worldToLocal(S.point.clone()),I=ci.getBarycoord(R,...E,new D),F=[],B=x.geometry.getAttribute("skinIndex"),N=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&B&&N&&I)for(let P=0;P<3;P++)for(let Y=0;Y<4;Y++)F.push({name:x.skeleton.bones[B.getComponent(_[P],Y)]?.name,weight:N.getComponent(_[P],Y)*I.getComponent(P)});o.has(x)||o.set(x,Nm(x));let z=Um(F),L=o.get(x)(_,I,z)||h(z,S.point);return{skinBones:F.filter(P=>P.weight>.05).map(P=>P.name),mesh:x.userData.snowbreakSurfaceKey,triangle:S.faceIndex,barycentric:I?.toArray(),anatomy:L,uv:S.uv?.toArray()||null,point:S.point.toArray(),distance:S.distance,alphaVerified:v!==null,material:x.userData.snowbreakMaterialName}}return null}}var zi={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Ya(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Ur(i,e){let t=Ya(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(zi,i.anatomy.id))return{...i.anatomy,label:zi[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(zi,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:zi[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:zi[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var ad={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function Fm(i,e,t){let n=new kt;n.visible=!1,e.add(n);let r=new Map;i.traverse(f=>{f.isMesh&&f.userData.snowbreakSurfaceKey&&r.set(f.userData.snowbreakSurfaceKey,f)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function h(){for(let f of c)f.overlay.geometry.dispose(),f.overlay.material.dispose(),f.overlay.removeFromParent();c=[],l=0}function d(){h(),u=!1;let f=new Map;for(let[b,S]of Object.entries(s)){let x=/^(surface_\d+):(\d+)$/.exec(b);if(!x)continue;let w=r.get(x[1]),v=Number(x[2]);if(!w)continue;let T=w.geometry,_=T.getAttribute("position"),E=T.index,R=T.getAttribute("uv"),I=Ur({mesh:x[1],triangle:v,alphaVerified:!0},{[b]:S});if(!I||v*3+2>=(E?E.count:_.count)||w.userData.previewMap&&!R)continue;if(l>=5e3){u=!0;continue}l++;let F=x[1]+":"+I.id,B=f.get(F);B||(B={source:w,region:I.id,vertices:[],keys:[]},f.set(F,B)),B.keys.push(b);for(let N=0;N<3;N++)B.vertices.push(E?E.getX(v*3+N):v*3+N)}for(let b of f.values()){let S=new Qt;S.setAttribute("position",new Ft(new Float32Array(b.vertices.length*3),3).setUsage(eh));let x=b.source.geometry.getAttribute("uv");if(x){let _=new Float32Array(b.vertices.length*2);b.vertices.forEach((E,R)=>{_[R*2]=x.getX(E),_[R*2+1]=x.getY(E)}),S.setAttribute("uv",new Ft(_,2))}let w=b.source.material,v=new an({color:ad[b.region],map:b.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(w.alphaTest||(w.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:w.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),T=new Vt(S,v);T.frustumCulled=!1,T.renderOrder=100,n.add(T),c.push({...b,overlay:T})}o=!1}function p(f){for(let b=f;b;b=b.parent)if(!b.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&d(),i.updateWorldMatrix(!0,!0);let f=new D,b=new Map;for(let S of c){let{source:x,overlay:w}=S;if(w.visible=p(x),!w.visible)continue;x.updateMatrixWorld(!0),x.isSkinnedMesh&&x.skeleton.update();let v=b.get(x);v||(v=new Map,b.set(x,v));let T=w.geometry.getAttribute("position");S.vertices.forEach((_,E)=>{let R=v.get(_);R||(x.getVertexPosition(_,f).applyMatrix4(x.matrixWorld),R=f.toArray(),v.set(_,R)),T.setXYZ(E,...R)}),T.needsUpdate=!0}}function M(){let f=c.find(S=>S.overlay.visible),b=f?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:f&&b?{key:f.keys[0],vertices:[0,1,2].map(S=>new D().fromBufferAttribute(b,S).toArray()),screen:[0,1,2].map(S=>new D().fromBufferAttribute(b,S).project(t).toArray())}:null}}function m(f){let b=n.visible;n.visible=!1;try{return f()}finally{n.visible=b}}return{set(f,b=a){return s=f,a=!!b,o=!0,a||h(),g(),M()},update:g,snapshot:M,hideForCapture:m,dispose(){h(),n.removeFromParent()}}}function mc(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Ye().compose(new D(...i.position),new He(...i.quaternion).normalize(),new D(...i.scale))}async function Om(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=mc(n.characterWorld).invert(),s=new kt,a=new kt,o=new Set,c=[],l=[],u=[],h=new Map,d=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let v of n.anchors){if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(v.id)||h.has(v.id)||!Number.isFinite(v.viewYawDegrees)||Math.abs(v.viewYawDegrees)>180)throw new Error("Invalid scene anchor");h.set(v.id,{inverse:mc(v.characterWorld).invert(),viewYawDegrees:v.viewYawDegrees})}if(!h.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Pn,g=!0;for(let v of n.objects){let T=i.getAsset(v.assetRole);if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(v.id)||o.has(v.id)||T?.kind!=="geometry")throw new Error("Invalid scene object");if(v.group!==void 0&&!["room","furniture"].includes(v.group)||v.cutaway!==void 0&&typeof v.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(v.id);let _=r.clone().multiply(mc(v.world)),E=(await new Nr().parseAsync(T.bytes.slice().buffer,"")).scene,R=0;E.traverse(F=>{if(F.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");F.isMesh&&(R+=(F.geometry.index?.count||F.geometry.attributes.position.count)/3)});let I=new kt;I.name=v.id,I.matrixAutoUpdate=!1,I.matrix.copy(_),I.add(E),(v.group==="room"?a:s).add(I),t(E),E.traverse(F=>{F.isMesh&&(v.group==="room"&&(F.material.side=wn),v.cutaway&&(F.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&v.group==="furniture"&&(F.material.side=en),l.push(F.material)),(v.group==="room"||v.cutaway)&&(F.material.needsUpdate=!0))}),v.group!=="room"&&E.traverse(F=>{F.isMesh&&u.push(F)}),c.push({id:v.id,assetRole:v.assetRole,group:v.group||"furniture",cutaway:!!v.cutaway,triangles:R,matrix:_.toArray(),holder:I,world:mc(v.world)})}e.add(s),s.updateMatrixWorld(!0);function M(v,T){if(!l.length)return;let _=v.position.clone().sub(T),E=_.length();if(E<.001)return;_.divideScalar(E);let R=T.clone().addScaledVector(_,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,E*.5));p.setFromNormalAndCoplanarPoint(_.negate(),R)}function m(v){let T=!!v;if(T!==g){g=T;for(let _ of l)_.clippingPlanes=g?[p]:null,_.needsUpdate=!0}}let f=new Map,b=new Er,S=new D(0,1,0);function x(v){if(!h.size)return null;let T=h.get(v);if(!T)throw new Error("Unknown source scene anchor");if(d!==v){d=v;for(let _ of c)_.holder.matrix.copy(T.inverse).multiply(_.world),_.matrix=_.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),f.clear()}return T.viewYawDegrees}h.size&&x(n.defaultAnchorId);function w(v){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let T=s.worldToLocal(v.clone()),_=Math.round(T.x/.015)+":"+Math.round(T.z/.015),E=f.get(_);if(E===void 0){let R=new Zt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),I=s.localToWorld(new D(T.x,R.max.y+.3,T.z)),F=S.clone().transformDirection(s.matrixWorld).negate();b.set(I,F),E=null;for(let B of b.intersectObjects(u,!1)){let N=B.face?.normal.clone().transformDirection(B.object.matrixWorld);if(N&&Math.abs(N.dot(F))>.65){E=s.worldToLocal(B.point.clone()).y;break}}f.set(_,E),f.size>512&&f.delete(f.keys().next().value)}return E===null?null:{clearance:T.y-E,normal:S.clone().transformDirection(s.matrixWorld),height:E}}return{root:s,contactSurface:w,setAnchor:x,hasCutaway:l.length>0,updateView:M,setRoomVisible:v=>{a.visible=!!v},setCutaway:m,setVisible:v=>{s.visible=!!v},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:d,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:c.map(({holder:v,world:T,..._})=>({..._,matrix:[..._.matrix]})),originalSceneVerified:!1})}}var Vb=new Set(["head","left_hand","right_hand"]),Gb=new Set(["tap","double_tap","long_press","stroke"]);function Bm(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Vb.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Gb.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function km(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function Wb(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function zm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let d of i.clips){let p=e.getAsset(d.animationRole),g=e.current.resources.find(f=>f.role===d.animationRole);if(p?.kind!=="animation"||d.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(d.sourceSha256)||d.frames!==p.data.frames||d.fps!==p.data.fps||!Array.isArray(d.curves)||d.curves.length>64)throw new Error("Morph curve animation mismatch");let M=n.get(d.sourceSha256);if(M){if(M.frames!==d.frames||M.fps!==d.fps||JSON.stringify(M.curves)!==JSON.stringify(d.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,d.sourceSha256);continue}let m=new Set;for(let f of d.curves){if(typeof f.name!="string"||!f.name.length||f.name.length>128||m.has(f.name)||!Array.isArray(f.keys)||!f.keys.length||f.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(f.name),s.add(f.name);let b=-1/0;for(let S of f.keys){if(!Array.isArray(S)||S.length!==5||!S.every(Number.isFinite)||S[0]<-120||S[0]>120||S[0]<=b||Math.abs(S[1])>4||Math.abs(S[2])>1e6||Math.abs(S[3])>1e6||![0,1,2].includes(S[4]))throw new Error("Invalid morph curve key");if(b=S[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(d.sourceSha256,d),r.set(p.data,d.sourceSha256)}let o=[];if(t.traverse(d=>{if(!d.isMesh||!d.morphTargetDictionary||!d.morphTargetInfluences)return;let p=new Map;for(let g of s){let M=d.morphTargetDictionary[g];if(M!==void 0){if(!Number.isInteger(M)||M<0||M>=d.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,M)}}p.size&&o.push({mesh:d,indices:p})}),[...s].some(d=>!o.some(p=>p.indices.has(d))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function h(d,p){l=p,c=d&&r.get(d)||null,u={};let g=n.get(c);for(let M of g?.curves||[])u[M.name]=Wb(M.keys,p);for(let{mesh:M,indices:m}of o)for(let[f,b]of m)M.morphTargetInfluences[b]=u[f]??0}return{apply:h,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:d,indices:p})=>Object.fromEntries([...p].map(([g,M])=>[g,d.morphTargetInfluences[M]]))),originalExpressionFidelity:!1})}}function od(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(c=>!c.targets?.length)){let{targetNames:c,...l}=r;n.extras=l;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function Hm(i,e,{isCurrent:t=()=>!0,universalMotions:n=null}={}){let r=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};r();let s=e.getAsset("viewOrientation")?.data;if(s&&(s.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(s.yawDegrees)||Math.abs(s.yawDegrees)>180))throw new Error("Invalid view orientation");let a=-Math.PI/2+be.degToRad(s?.yawDegrees||0),o=new cc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),c=new vr,l=new kt,u=new kt,h=new Yt(32,1,.01,100);l.rotation.y=a,c.add(l),l.add(u);let d=wm(c,o),p=gf();p.configure({mode:localStorage.getItem("snowRenderMode")||"adaptive"});let g=0;function M(C){return p.configure(C),d.setBudget(p.snapshot()),g=0,Re(),m()}function m(){return{...p.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:o.getPixelRatio(),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,gpuResources:{textures:o.info.memory.textures,geometries:o.info.memory.geometries},gpuTimingAvailable:!1}}let f=null,b,S,x,w,v,T,_=null,E=null,R=null,I=null,F=!1,B=null,N=0,z=[],L=new Set,P=new Set,Y=new Set,O=new Map,U=new Map,G=new Map,ae=new Set,de=new Map,ue=e.getAsset("rootMotionPolicy")?.data,K=0,le=0,H=0,$=0,xe=null,Ne=null,fe={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},me=0,Me=0,Ie=null;function Oe(){l.rotation.set(be.degToRad(fe.pitch),a+me+be.degToRad(fe.yaw),be.degToRad(fe.roll)),u.rotation.set(be.degToRad(J.pitch),be.degToRad(J.yaw+Me),be.degToRad(J.roll)),l.updateMatrixWorld(!0)}let J={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function j(C){let y={...J,...C};if(Object.values(y).some(q=>!Number.isFinite(q)))throw new Error("Invalid character placement");for(let q of["x","y","depth"])y[q]=be.clamp(y[q],-1.5,1.5);y.scale=be.clamp(y.scale,.3,4),y.yaw=be.clamp(y.yaw,-180,180),y.pitch=be.clamp(y.pitch,-65,65),y.roll=be.clamp(y.roll,-45,45),y.stretchX=y.stretchY=1,J=y,l.updateWorldMatrix(!0,!1),h.updateMatrixWorld();let V=new D(y.x,y.y,y.depth).applyQuaternion(h.quaternion),k=l.matrixWorld.clone().invert();return u.position.copy(V.transformDirection(k).multiplyScalar(Math.hypot(y.x,y.y,y.depth))),u.scale.setScalar(y.scale),Oe(),{...J}}function ee(C){let y={...fe,...C};for(let V of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(y[V]))throw new Error("Invalid framing");return fe={scale:be.clamp(y.scale,.3,4),x:be.clamp(y.x,-1.5,1.5),y:be.clamp(y.y,-1.5,1.5),yaw:((y.yaw+180)%360+360)%360-180,pitch:be.clamp(y.pitch,-65,65),roll:be.clamp(y.roll,-45,45),stretchX:be.clamp(y.stretchX,.65,1.5),stretchY:be.clamp(y.stretchY,.65,1.5)},Oe(),Re(),{...fe}}function ge(){if(!Ie)return;l.rotation.y=a,l.updateMatrixWorld(!0);let C=Ie.bone.getWorldQuaternion(new He),y=Ie.axis.clone().applyQuaternion(C);Math.hypot(y.x,y.z)>.1&&(me=Ie.heading-Math.atan2(y.x,y.z)),Oe()}function _e(){return fe.yaw=0,ge(),Re(),{...fe}}function Ve(C){C.traverse(y=>{if(y.isBone&&(y.userData.bindLocalQuaternion=y.quaternion.toArray()),!y.isMesh)return;L.add(y.geometry);for(let ie of Array.isArray(y.material)?y.material:[y.material]){P.add(ie);for(let ce of Object.values(ie))ce?.isTexture&&Y.add(ce)}let V=y.material.name,k=O.get(V)||null,q=G.get(V)||{};if(y.userData.snowbreakSurfaceKey="surface_"+le++,y.userData.snowbreakMaterialName=V,y.userData.previewMap=k,q.transparent!==void 0&&typeof q.transparent!="boolean")throw new Error("Invalid transparent override");if(q.renderOrder!==void 0&&(!Number.isInteger(q.renderOrder)||Math.abs(q.renderOrder)>100))throw new Error("Invalid material sorting");y.renderOrder=q.renderOrder||0,y.material=Sm(V,k,U.get(V),q),P.add(y.material),y.castShadow=y.isSkinnedMesh&&!q.transparent,y.receiveShadow=y.material.userData.profile==="cloth-or-room"})}function et(C,y){if(!y)return;let V=new Map(y.tracks.map(k=>[k.bone,k]));C.traverse(k=>{if(!k.isBone)return;let q=V.get(k.name)?.keys?.[0];if(!q||q.length!==10||!q.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");k.position.fromArray(q),k.quaternion.fromArray(q,3),k.scale.fromArray(q,7)})}function W(C,y,V=z,k=!1){if(!y)return;let q=new Map(y.tracks.map(ie=>[ie.bone,ie]));if(q.size!==y.tracks.length)throw new Error("Duplicate animation bones");C.traverse(ie=>{if(!ie.isBone||C===x&&!ae.has(ie)||k&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(ie.name))return;let ce=q.get(ie.name);if(!(k&&!ce)){if(!ce||ce.keys.length!==y.frames||ce.keys.some(re=>re.length!==10||!re.every(Number.isFinite)||Math.abs(re.slice(3,7).reduce((oe,ye)=>oe+ye*ye,0)-1)>.05))throw new Error("Invalid bone animation");V.push({bone:ie,track:ce,clip:y})}})}function Ge(){if(!F){F=!0,removeEventListener("resize",Re),o.setAnimationLoop(null),T?.dispose(),b?.dispose(),S?.dispose(),d.dispose();for(let C of L)C.dispose();for(let C of P)C.dispose();for(let C of Y){C.dispose();let y=C.image;y?.close?y.close():y?.tagName==="CANVAS"?y.width=y.height=0:y?.tagName==="IMG"&&(y.src=""),C.image=null}O.clear(),U.clear(),G.clear(),Y.clear(),P.clear(),L.clear(),z.length=0,x?.removeFromParent(),v?.root?.removeFromParent(),o.dispose()}}function Re(){if(F||!x)return;$++;let C=i.clientWidth||innerWidth,y=i.clientHeight||innerHeight,V=p.ratio(C,y,devicePixelRatio||1);(!xe||xe.w!==C||xe.h!==y||xe.ratio!==V)&&(o.setPixelRatio(V),o.setSize(C,y,!1),xe={w:C,h:y,ratio:V},H++),h.aspect=C/y,l.updateMatrixWorld(!0),!_&&!Ne&&(x.traverse(ye=>{ye.isSkinnedMesh&&(ye.skeleton.update(),ye.computeBoundingBox())}),Ne=new Zt().setFromObject(x).applyMatrix4(l.matrixWorld.clone().invert()));let k=(E||_||Ne).clone().applyMatrix4(l.matrixWorld),q=k.getSize(new D),ie=k.getCenter(new D);d.frame(k);let ce=Math.tan(be.degToRad(16)),re=Math.max(q.y/(2*ce),q.x/(2*ce*h.aspect))*1.25+q.z;if(_){re=0;for(let ye of[k.min.x,k.max.x])for(let De of[k.min.y,k.max.y])for(let Se of[k.min.z,k.max.z])re=Math.max(re,Se-ie.z+Math.max(Math.abs(ye-ie.x)/(ce*h.aspect),Math.abs(De-ie.y)/ce)*1.12)}let oe=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2";h.position.copy(ie).add(new D(0,0,re)),h.lookAt(ie),h.zoom=E&&!oe?1.05:fe.scale,h.setViewOffset(C,y,E&&!oe?0:-fe.x*C,E&&!oe?0:-fe.y*y,C,y),h.updateProjectionMatrix(),h.projectionMatrix.elements[0]*=fe.stretchX,h.projectionMatrix.elements[5]*=fe.stretchY,h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),v?.updateView(h,ie)}try{let We=function(ve){let Q=Ae.get(ve);if(!Q)throw new Error("Unknown sample");we=Q.overlay?Be==="sample"&&we?we:{bindings:Be==="standby"?Ze:Z,duration:Be==="standby"?De:Te,time:N,envelope:E}:null,he=ve,Z=Q.bindings,Te=Q.duration;let Je=Ae.get(Q.sceneOf)||Q,it=Q.overlay?we.envelope:Je.sceneFraming?de.get(Je.sourceSha256):null;if(Q.sceneFraming&&!it)throw new Error("Scene framing envelope missing");let tt=v.setAnchor?.(Je.id??ve),rt=E!==it;if(tt!=null){let _t=-Math.PI/2+be.degToRad(tt);rt||=Math.abs(a-_t)>1e-8,a=_t,me=0,Oe()}return E=it,yt(0),rt&&Re(),{id:ve,label:Q.label,duration:Q.duration}},yt=function(ve,Q=Z,Je=Te){if(F||!Number.isFinite(ve))return;let it=we&&Q===Z?we:null;it&&it.duration>0&&yt((it.time+ve)%it.duration,it.bindings,it.duration);let tt=Be;I=Q[0]?.clip?.generatorMetadata?.sourceSha256||null,Be=Q===Ze&&De>0?"standby":"sample",N=Math.max(0,Math.min(Je,ve));for(let{bone:rt,track:_t,clip:Ct}of Q){let yn=N*Ct.fps,Wt=Math.min(Math.floor(yn),Ct.frames-1),un=Math.min(Wt+1,Ct.frames-1),A=yn-Wt,X=_t.keys[Wt],se=_t.keys[un];(!it||!ae.has(rt))&&rt.position.set(be.lerp(X[0],se[0],A),be.lerp(X[1],se[1],A),be.lerp(X[2],se[2],A)),rt.quaternion.copy(oe.fromArray(X,3).slerp(ye.fromArray(se,3),A)),(!it||!ae.has(rt))&&rt.scale.set(be.lerp(X[7],se[7],A),be.lerp(X[8],se[8],A),be.lerp(X[9],se[9],A))}if(ie.apply((Q.find(rt=>!ae.has(rt.bone))||Q[0])?.clip,N),ue){x.position.x=x.position.z=0,l.updateMatrixWorld(!0);let rt=x.getObjectByName(ue.bone).getWorldPosition(new D).applyMatrix4(x.matrixWorld.clone().invert());x.position.x=ue.reference[0]-rt.x,x.position.z=ue.reference[1]-rt.z}l.updateMatrixWorld(!0),K=ce.length;for(let rt of ce)rt.update()},$s=function(ve){return Rn=Ih(x,h,e.getAsset("learnedMotions")?.data,Fe?.stance,ve),Rn.available()},eo=function(){let ve=[];return x.updateWorldMatrix(!0,!0),x.traverse(Q=>{Q.userData.sourceAttachment&&Q.traverse(Je=>{if(!Je.isSkinnedMesh)return;Je.skeleton.update();let it=new D,tt=Je.geometry.attributes.position.count;for(let rt=0;rt<tt;rt++)it.add(Je.getVertexPosition(rt,new D).applyMatrix4(Je.matrixWorld));ve.push({kind:Q.userData.sourceAttachment,vertices:tt,center:it.divideScalar(tt).toArray(),sharedBones:Je.skeleton.bones.every(rt=>x.getObjectByName(rt.name)===rt)})})}),ve};if(ue&&(ue.schema!=="snowbreak-home-root-lock/1"||ue.bone!=="Bip001"||!Array.isArray(ue.reference)||ue.reference.length!==2||!ue.reference.every(ve=>Number.isFinite(ve)&&Math.abs(ve)<10)))throw new Error("Invalid home root motion policy");let C=e.getAsset("materials")?.data;if(C){if(C.schema!=="snowbreak-material-preview/1"||C.originalShaderVerified!==!1||!Array.isArray(C.materials)||C.materials.length>64)throw new Error("Invalid material preview");f=mf(C,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096);let ve=new Map;for(let Q of C.materials){if(r(),typeof Q.name!="string"||Q.name.length>256||G.has(Q.name))throw new Error("Invalid material identity");let Je=Q.renderState||{};if(Je.alphaCutoff!==void 0&&(!Number.isFinite(Je.alphaCutoff)||Je.alphaCutoff<0||Je.alphaCutoff>1))throw new Error("Invalid material alpha");if(Je.doubleSided!==void 0&&typeof Je.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(G.set(Q.name,Je),!Q.diffuseAssetId)continue;let it=e.getAsset("texture_"+Q.diffuseAssetId);if(it?.kind!=="texture")throw new Error("Missing local diffuse texture");let tt=ve.get(Q.diffuseAssetId);if(!tt){let rt=URL.createObjectURL(new Blob([it.bytes],{type:it.data?.mime||"image/png"}));try{tt=await new rr().loadAsync(rt)}finally{URL.revokeObjectURL(rt)}let _t=f.limitFor(Q.diffuseAssetId);if(tt.image.width>_t||tt.image.height>_t){let Ct=document.createElement("canvas"),yn=Math.min(_t/tt.image.width,_t/tt.image.height);Ct.width=Math.round(tt.image.width*yn),Ct.height=Math.round(tt.image.height*yn),Ct.getContext("2d").drawImage(tt.image,0,0,Ct.width,Ct.height);let Wt=tt.image;tt.image=Ct,Wt.src="",tt.needsUpdate=!0}tt.colorSpace=Dt,tt.anisotropy=o.capabilities.getMaxAnisotropy(),tt.flipY=!1,ve.set(Q.diffuseAssetId,tt),Y.add(tt)}if(O.set(Q.name,tt),Q.normalAssetId){if(!/^[a-f0-9]{64}$/.test(Q.normalAssetId)||C.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let rt=e.getAsset("texture_"+Q.normalAssetId);if(rt?.kind!=="texture")throw new Error("Missing original normal texture");let _t=ve.get("normal:"+Q.normalAssetId);if(!_t){let Ct=URL.createObjectURL(new Blob([rt.bytes],{type:rt.data?.mime||"image/png"}));try{_t=await new rr().loadAsync(Ct)}finally{URL.revokeObjectURL(Ct)}let yn=f.limitFor(Q.normalAssetId,!0);if(_t.image.width>yn||_t.image.height>yn){let Wt=_t.image,un=document.createElement("canvas"),A=yn/Math.max(Wt.width,Wt.height);un.width=Math.round(Wt.width*A),un.height=Math.round(Wt.height*A),un.getContext("2d").drawImage(Wt,0,0,un.width,un.height),_t.image=un,Wt.src="",_t.needsUpdate=!0}_t.flipY=!1,_t.colorSpace=ii,_t.anisotropy=o.capabilities.getMaxAnisotropy(),ve.set("normal:"+Q.normalAssetId,_t),Y.add(_t)}U.set(Q.name,_t)}}}let y=e.getAsset("body");if(!y)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let V=e.getAsset("framingBounds")?.data;if(V){let ve=Q=>Array.isArray(Q)&&Q.length===3&&Q.every(Je=>Number.isFinite(Je)&&Math.abs(Je)<=100);if(V.schema!=="snowbreak-framing-bounds/1"||V.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||V.bodySha256!==e.current.resources.find(Q=>Q.role==="body")?.assetId||!ve(V.min)||!ve(V.max)||V.min.some((Q,Je)=>Q>=V.max[Je])||!Number.isInteger(V.evaluatedFrames)||V.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(_=new Zt(new D(...V.min),new D(...V.max)),R=V,V.clips){if(!Array.isArray(V.clips)||V.clips.length>16)throw new Error("Invalid clip envelopes");for(let Q of V.clips){if(!/^[a-f0-9]{64}$/.test(Q.sourceSha256)||de.has(Q.sourceSha256)||!ve(Q.min)||!ve(Q.max)||Q.min.some((Je,it)=>Je>=Q.max[it]))throw new Error("Invalid clip envelope");de.set(Q.sourceSha256,new Zt(new D(...Q.min),new D(...Q.max)))}}}x=(await new Nr().register(od).parseAsync(y.bytes.slice().buffer,"")).scene,u.add(x),r(),Ve(x),x.traverse(ve=>{ve.isBone&&ae.add(ve)});let k=e.getAsset("bodyAnimation")?.data;I=k?.generatorMetadata?.sourceSha256||null,et(x,k),W(x,k);let q=e.getAsset("faceAttachment")?.data;if(q){if(q.schema!=="snowbreak-face-attachment/1"||q.candidateOnly!==!0||q.originalAssemblyVerified!==!1||q.boneName!=="Bip001-Head"||q.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let ve=x.getObjectByName(q.boneName),Q=q.relativeLocationCm;if(!ve?.isBone||!Q||![Q.X,Q.Y,Q.Z].every(rt=>Number.isFinite(rt)&&Math.abs(rt)<100))throw new Error("Invalid socket parent or position");let Je=e.getAsset("face");if(!Je)throw new Error("Missing face geometry");w=(await new Nr().register(od).parseAsync(Je.bytes.slice().buffer,"")).scene,r(),Ve(w),et(w,e.getAsset("faceAnimation")?.data);let it=e.getAsset("faceAnimation")?.data;if(!it||!k||it.frames!==k.frames||it.fps!==k.fps)throw new Error("Face/body sample timing mismatch");W(w,it);let tt=new kt;if(tt.position.set(Q.X*.01,Q.Z*.01,Q.Y*.01),tt.quaternion.fromArray(Lm(q.relativeRotationDegrees)),ve.add(tt),tt.add(w),q.defaultVisible!==void 0&&typeof q.defaultVisible!="boolean")throw new Error("Invalid face visibility");w.visible=q.defaultVisible===!0}v=await Om(e,l,Ve),r(),o.localClippingEnabled=!!v.hasCutaway;let ie=zm(e.getAsset("morphCurves")?.data,e,w||x),ce=[];x.traverse(ve=>{ve.isSkinnedMesh&&!ce.includes(ve.skeleton)&&ce.push(ve.skeleton),ve.isSkinnedMesh&&(ve.frustumCulled=!1)});let re=k?(k.frames-1)/k.fps:0,oe=new He,ye=new He,De=0,Se="D\u5F85\u673A",Ee=!1,Be="sample",Ze=[],Fe=e.getAsset("stateTransition")?.data;if(Fe){let ve=Fe.schema==="snowbreak-state-preview/1"&&Fe.show==="Sc01_Hand_A_D"&&Fe.fromState==="A"&&Fe.toState==="D",Q=Fe.schema==="snowbreak-standby-preview/1"&&Fe.characterId===e.current.characterId&&Number.isInteger(Fe.standbyConfigId)&&Fe.standbyConfigId>0&&Number.isInteger(Fe.sourceSkinId)&&/^[a-f0-9]{64}$/.test(Fe.sourceTableSha256)&&typeof Fe.label=="string"&&Fe.label.length<=40&&typeof Fe.startAsStandby=="boolean",Je=Fe.schema==="snowbreak-standby-preview/2"&&Fe.stance==="standing"&&Fe.characterId===e.current.characterId&&Fe.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&Fe.startAsStandby===!0;if(!ve&&!Q&&!Je||Fe.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(Q||Je)&&(Se=Fe.label,Ee=Fe.startAsStandby);let it=e.getAsset("standbyBody")?.data,tt=w?e.getAsset("standbyFace")?.data:null;if(!it||w&&(!tt||it.frames!==tt.frames||it.fps!==tt.fps))throw new Error("Standby clip timing mismatch");let rt=new Map(it.tracks.map(Ct=>[Ct.bone,Ct])),_t=tt?new Map(tt.tracks.map(Ct=>[Ct.bone,Ct])):new Map;Ze=z.map(Ct=>{let yn=Ct.clip===k?it:tt,Wt=(Ct.clip===k?rt:_t).get(Ct.bone.name);if(!Wt||Wt.keys.length!==yn.frames||Wt.keys.some(un=>un.length!==10||!un.every(Number.isFinite)||Math.abs(un.slice(3,7).reduce((A,X)=>A+X*X,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:Ct.bone,track:ae.has(Ct.bone)?Ch(Wt):Wt,clip:yn}}),De=(it.frames-1)/it.fps}let Z=z,Te=re,he="default",we=null,Ae=new Map([["default",{bindings:z,duration:re,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),pe=e.getAsset("sampleCatalog")?.data;if(pe){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(pe.schema)||pe.characterId!==e.current.characterId||pe.originalInteractionVerified!==!1||!Array.isArray(pe.samples)||!pe.samples.length||pe.samples.length>24||!/^[a-f0-9]{64}$/.test(pe.sourceTableSha256))throw new Error("Invalid sample catalog");Ae.clear();for(let Q of pe.samples){if(typeof Q.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(Q.id)||Ae.has(Q.id)||typeof Q.label!="string"||Q.label.length>64||pe.schema.endsWith("/1")&&(!Number.isInteger(Q.sourceShowElementId)||Q.sourceShowElementId<1))throw new Error("Invalid sample identity");let Je=e.getAsset(Q.bodyRole),it=Q.faceRole?e.getAsset(Q.faceRole):null;if(Je?.kind!=="animation"||w&&(it?.kind!=="animation"||(Je.data.frames!==it.data.frames||Je.data.fps!==it.data.fps)&&!(Q.independentFaceTiming===!0&&Number.isInteger(Q.sourceShowElementId)&&Q.sourceShowElementId>0)))throw new Error("Sample body/face mismatch");if(pe.schema.endsWith("/2")&&Q.sourceBodySha256!==(Je.data.generatorMetadata?.sourceSha256||e.current.resources.find(rt=>rt.role===Q.bodyRole)?.assetId))throw new Error("Sample source mismatch");let tt=z;if((Q.bodyRole!=="bodyAnimation"||w&&Q.faceRole!=="faceAnimation")&&(tt=[],W(x,Je.data,tt,Q.overlay==="upper-body"),w)){if(!it)throw new Error("Sample requires face");W(w,it.data,tt)}if(Q.persistentState===!0&&e.current.characterId==="Fenny")for(let rt=0;rt<tt.length;rt++)ae.has(tt[rt].bone)&&(tt[rt]={...tt[rt],track:Mm(tt[rt].track)});if(Q.persistentState!==void 0&&typeof Q.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(Q.endPolicy!==void 0&&!["hold","loop"].includes(Q.endPolicy))throw new Error("Invalid scene end policy");Ae.set(Q.id,{id:Q.id,bindings:tt,duration:Math.max((Je.data.frames-1)/Je.data.fps,it?(it.data.frames-1)/it.data.fps:0),overlay:Q.overlay==="upper-body",label:Q.label,sourceShowElementId:Q.sourceShowElementId,sceneFraming:Q.sceneFraming===!0,sourceSha256:Je.data.generatorMetadata?.sourceSha256,sceneOf:Q.sceneOf,persistentState:Q.persistentState===!0,endPolicy:Q.endPolicy,afterScene:Q.afterScene})}let ve=Ae.get(pe.defaultId);if(!ve||ve.bindings!==z)throw new Error("Default sample must reference primary clip");he=pe.defaultId;for(let Q of Ae.values()){if(Q.sceneOf!==void 0&&(typeof Q.sceneOf!="string"||!Ae.has(Q.sceneOf)))throw new Error("Missing reaction scene");if(Q.afterScene!==void 0&&(typeof Q.afterScene!="string"||!Ae.get(Q.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let $e=Bm(pe);l.updateMatrixWorld(!0);let gt=x.getObjectByName("Bip001-Pelvis")||x.getObjectByName("Bip001");if(gt){let ve=gt.getWorldQuaternion(new He),Q=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((it,tt)=>{let rt=it.clone().applyQuaternion(ve),_t=tt.clone().applyQuaternion(ve);return Math.hypot(_t.x,_t.z)-Math.hypot(rt.x,rt.z)})[0],Je=Q.clone().applyQuaternion(ve);Ie={bone:gt,axis:Q,heading:Math.atan2(Je.x,Je.z)}}T=Fm(x,c,h);let cn=bm(x,ve=>{Me=ve,Oe()},()=>fe.yaw+J.yaw),An=Dm(x,h,i,v.root);S=ym(x,h,i,An,e.getAsset("sceneInteractions")?.data,v.contactSurface,e.current.characterId),b=vm(x,h,i),Re(),await o.compileAsync(c,h),r(),addEventListener("resize",Re),o.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){p.resetClock();return}if(!p.begin())return;let ve=p.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(ve-g)>.02&&(g=ve,Re()),cn.restore(),S.restore(),b.restore(),B?.(),cn.tick(),S.tick(),b.tick(),T.update(),o.render(c,h)});let bc=()=>{let ve=[];return x.traverse(Q=>{Q.isMesh&&ve.push({name:Q.userData.snowbreakMaterialName,textured:!!Q.userData.previewMap,normalMapped:!!Q.material.normalMap,diffuseSize:Q.material.map?[Q.material.map.image.width,Q.material.map.image.height]:null,normalSize:Q.material.normalMap?[Q.material.normalMap.image.width,Q.material.normalMap.image.height]:null,anisotropy:Q.material.map?.anisotropy||0,profile:Q.material.userData.profile,alphaTest:Q.material.alphaTest})}),ve},Mc=ve=>x.traverse(Q=>{Q.isMesh&&(Q.material.map=ve?Q.userData.previewMap:null,Q.material.color.set(Q.material.map?16777215:13289411),Q.material.needsUpdate=!0)}),Zs=()=>({available:!!w,visible:!!w?.visible,originalAssemblyVerified:!1}),Ks=ve=>(w&&(w.visible=!!ve,Re()),Zs()),Sc=(ve,Q,Je)=>{if(F)throw new Error("Renderer disposed");T.hideForCapture(()=>{o.render(c,h),ve.drawImage(i,0,0,Q,Je)})},ja=Rh(x),Qa=Rh(x,{side:"left"}),Rn=Ih(x,h,e.getAsset("learnedMotions")?.data,Fe?.stance,n);return{textureBudgetState:()=>f?.snapshot(),attachmentState:eo,performanceState:m,setRenderBudget:M,setUniversalMotions:$s,projectedBone:ve=>{let Q=x.getObjectByName(ve)?.getWorldPosition(new D).project(h),Je=i.getBoundingClientRect();return Q?[Je.left+(Q.x+1)*Je.width/2,Je.top+(1-Q.y)*Je.height/2]:null},modelDragScale:()=>{let ve=Math.max(.05,x.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(h.position).dot(h.getWorldDirection(new D))),Q=2*ve*Math.tan(be.degToRad(h.fov/2))/h.zoom;return{x:Q*h.aspect/fe.stretchX,y:Q/fe.stretchY}},furnitureContacts:ve=>Object.fromEntries(ve.map(Q=>{let Je=x.getObjectByName(Q);return[Q,Je?v.contactSurface?.(Je.getWorldPosition(new D)):null]})),setModelFrame:j,modelFrameState:()=>({...J}),placementState:()=>({model:u.matrixWorld.toArray(),room:v.root?.matrixWorld.toArray(),camera:h.matrixWorld.toArray()}),embodiment:cn,sceneInteractions:S,sensesState:b.snapshot,setGaze:b.gaze,senseTouch:b.touch,resetSenses:b.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(ve=>[ve,x.getObjectByName(ve)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:d.snapshot,setLighting:d.set,boneWorldPoints:ve=>Object.fromEntries(ve.slice(0,32).map(Q=>[Q,x.getObjectByName(Q)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let ve=[];return x.traverse(Q=>{Q.isBone&&ve.push({name:Q.name,position:Q.position.toArray(),quaternion:Q.quaternion.toArray(),scale:Q.scale.toArray()})}),ve},cameraState:()=>({position:h.position.toArray(),projection:h.projectionMatrix.toArray()}),learnedOptions:()=>Rn.available(),applyLearnedMotion:(...ve)=>Rn.apply(...ve),learnedDiagnostics:()=>Rn.snapshot(),presentationDiagnostics:()=>({resizeCount:H,fitCount:$}),touchBindings:()=>$e.map(ve=>({...ve,gestures:[...ve.gestures]})),setRoomVisible:v.setRoomVisible,setSceneCutaway:v.setCutaway,sceneState:v.snapshot,setSceneVisible:v.setVisible,morphState:ie.snapshot,framingEnvelopeState:()=>({precomputed:!!_,evaluatedFrames:R?.evaluatedFrames||0,perClip:de.size,activeSource:I}),resourceState:()=>({sourceTextures:Y.size,drawCalls:o.info.render.calls,triangles:o.info.render.triangles,geometries:o.info.memory.geometries,textures:o.info.memory.textures}),setSurfaceLabels:T.set,surfaceOverlayState:T.snapshot,armPreview:ja,leftArmPreview:Qa,dispose:Ge,pickSurface:An,drawSnapshot:Sc,faceViewer:_e,setFrame:ee,frameState:()=>({...fe}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:bc,setTexturePreview:Mc,faceCandidateState:Zs,showFaceCandidate:Ks,selectSample:We,sampleOptions:()=>[...Ae].map(([ve,Q])=>({id:ve,label:Q.label,duration:Q.duration,sourceShowElementId:Q.sourceShowElementId,persistentState:Q.persistentState,endPolicy:Q.endPolicy,afterScene:Q.afterScene})),get duration(){return Te},seek:yt,standbyDuration:De,standbyLabel:Se,startAsStandby:Ee,seekStandby:ve=>{E&&(E=null,Re());let Q=v.setAnchor?.(pe?.defaultId);Q!=null&&(a=-Math.PI/2+be.degToRad(Q),me=0,Oe()),De>0&&yt(ve%De,Ze,De)},setFrameHandler:ve=>B=ve,sampleState:()=>({lastSkeletonUpdates:K,sampleId:he,time:N,poseMode:Be,standbyDuration:De,nativeInitializationVerified:!1,viewYaw:l.rotation.y,autoYaw:me,bodyBones:z.filter(ve=>ve.clip===k).length,faceBones:z.filter(ve=>ve.clip!==k).length,hand:x.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(C){throw Ge(),C}}var Xb="action-plan/1",qb=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],Yb={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},Zb={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},Kb=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,$b={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},Jb={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},Vm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},gc=(i,e,t)=>Math.max(e,Math.min(t,i));function jb(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function Qb(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function eM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function ld(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:gc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var Xm=i=>!!i&&Kb.test(i);function tM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=Zb[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||Xm(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Gm(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=Xm(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function Wm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of Vm[s]||[])r.push(a);for(let s of Vm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function nM(i,e){let t=e&&e.channels||{},n=$b[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function iM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*gc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,h=gc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:h,curve:[[0,l],[.18,h],[.75,h],[1,l]]})}return s}function rM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Za(i,e,t={}){let n=ld(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:Xb,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||Jb[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+jb(eM(n)+"||"+(a?Qb(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!qb.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Gm(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=rM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=tM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,h=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(h)&&l.push(...h),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Gm(n,a,c.motion)}else{let l=Yb[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let d=nM(n,a);if(d.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=iM(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...d),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=Wm(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=Wm(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:gc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var xc=(i,e,t)=>Math.max(e,Math.min(t,i));function sM(i){return i*i*(3-2*i)}function aM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*sM(xc(o,0,1))}}return i[i.length-1][1]}function qm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(S,x,w){a.push({at:e(),kind:S,planId:x.planId,type:x.action.type,...w||{}}),a.length>40&&a.shift()}function l(S,x,...w){if(typeof x=="function")try{x(...w)}catch{}}function u(S,x){let w={plan:S,t0:x,done:!1};r.push(w),c("start",S);for(let v of S.tracks)v.ch==="motion"?l("motion",t.onMotion,v.group,v.index,S):v.ch==="pose"?l("pose",t.onPose,v.name,S):v.ch==="expression"?l("expression",t.onExpression,v,S):v.ch==="speech"&&l("speech",t.onSpeech,v.text,S);return w}function h(S,x,w){if(S.done)return;S.done=!0;let v=r.indexOf(S);v>=0&&r.splice(v,1),c("end",S.plan,{reason:w}),l("end",t.onEnd,S.plan,w)}function d(S,x,w){let v=e(),T=w||Za(S,x);if(!T||T.stopped||!T.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:T&&T.planId};let _=Number.isFinite(T.action.priority)?T.action.priority:50,E=r[0];if(E){let R=Number.isFinite(E.plan.action.priority)?E.plan.action.priority:50;if(_<R)return s.length>=n&&s.shift(),s.push({plan:T,at:v}),c("queued",T,{behind:E.plan.planId}),{accepted:!0,queued:!0,planId:T.planId};h(E,v,"preempted")}return u(T,v),{accepted:!0,queued:!1,planId:T.planId,plan:T}}function p(S,x){let w=Math.max(1,S.duration),v=Math.max(0,Math.min(S.fadeIn||0,w*.5)),T=Math.max(0,Math.min(S.fadeOut||0,w*.5)),_=x*w,E=w-T,R=1;return v>0&&_<v&&(R=_/v),T>0&&_>E&&(R=Math.min(R,(w-_)/T)),xc(R,0,1)}function g(S,x,w,v){for(let T of x.tracks){if(!T.curve||!T.id)continue;let E=aM(T.curve,w)*(T.weight===void 0?1:T.weight)*v,R=S[T.id];T.blend==="set"?(!R||v>=R.weight)&&(S[T.id]={id:T.id,value:E,blend:"set",weight:v,ch:T.ch}):R&&R.blend==="set"?R.value+=E:S[T.id]={id:T.id,value:(R?R.value:0)+E,blend:"add",weight:Math.max(R?R.weight:0,v),ch:T.ch}}}function M(S){let x=e(),w={t:x,channels:{},actions:[],finished:[]};for(let v of r.slice()){let T=xc((x-v.t0)/Math.max(1,v.plan.duration),0,1),_=p(v.plan,T);_>0&&g(w.channels,v.plan,T,_),w.actions.push({planId:v.plan.planId,type:v.plan.action.type,progress:T,weight:_}),T>=1&&(w.finished.push(v.plan.planId),h(v,x,"done"))}if(!r.length&&s.length){let v=s.shift();u(v.plan,x),c("dequeued",v.plan)}return o=w,w}function m(S,x){let w=r.find(v=>v.plan.planId===S);return w?(h(w,e(),x||"interrupt"),!0):!1}function f(S){for(let x of r.slice())h(x,e(),S||"clear");s.length=0}function b(){return{active:r.map(S=>({planId:S.plan.planId,type:S.plan.action.type,progress:xc((e()-S.t0)/Math.max(1,S.plan.duration),0,1)})),queue:s.map(S=>({planId:S.plan.planId,type:S.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:d,tick:M,interrupt:m,clear:f,snapshot:b,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var oM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function cd(i,e={}){let t=oM[i]||i;return ld({type:t,...e})}function Ym(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,h="stopped",d=0,p=!1,g=!1,M=null,m=null,f=null,b=i.touchBindings?.()||[],S=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(S())||S()<=0)throw new Error("Audio metadata unavailable");let x=()=>p?t.ended?t.duration>=i.duration?S()*1e3:(M||(M={at:e(),time:t.duration*1e3}),Math.min(S()*1e3,M.time+Math.max(0,e()-M.at))):t.currentTime*1e3:e(),w={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(K=>(K==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},v=i.sampleOptions?.()||[],T=v.find(K=>K.persistentState)?.id||null;w.localActions.surface_reaction={enabled:b.length>0,bindings:Object.fromEntries(b.map(K=>{let le=v.find($=>$.id===K.sampleId),H=n?.(K.sampleId);return[K.region,{sampleId:K.sampleId,animationDuration:(le?.duration||0)*1e3,voiceDuration:(H?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function _(K,le,H="",$=!1){f={schema:"local-surface-reaction/1",id:le.id,kind:K,sampleId:le.sampleId,region:le.touch.region,touch:le.touch,withOriginalVoice:le.withVoice,recovered:$,reason:H,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(f)}catch{}}let E=qm({now:x,handlers:{onMotion:K=>h=K==="local-arm-preview"?"local-arm-preview":K==="standby-D"||K==="standby-local"?"standby-preview":"playing",onPose:(K,le)=>{if(K!=="snowbreak-raise-hand")return;let H=le.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),H.begin(),o=H,h="local-arm-preview"}catch{H?.restore(),h="arm-failed"}},onEnd:(K,le)=>{if(d++,K.action.type==="surface_reaction"&&m?.id===K.planId){let H=m;if(m=null,p&&(t.pause(),le!=="done"&&(t.currentTime=0),p=!1,M=null,s(!1)),le==="done"){let $=!1;try{$=!!N().accepted&&h==="standby-preview"}catch{E.clear("restore-failed"),h="restore-failed"}_($?"completed":"failed",H,$?"local-standby-restored":"local-standby-failed",$)}else _(le.startsWith("audio-")?"failed":"cancelled",H,le);return}if(K.action.type==="snowbreak_standby"&&le==="done"){N();return}if(K.action.type==="snowbreak_arm_preview"||K.action.type==="raise_hand"){o?.restore(),o=null,h="stopped",i.seek(0),le==="done"&&i.startAsStandby&&N();return}if(p&&(t.pause(),le!=="done"&&(t.currentTime=0),p=!1,M=null,s(!1)),le==="done"&&l){let H=l;l=null,I(H.id,H.time);return}h=le==="done"?"sample-ended":"stopped",i.seek(le==="done"?i.duration:0),le==="done"&&(K.action.type==="snowbreak_standby"||g)&&N()}}});function R(){if(h==="standby-preview"&&z(),E.activeCount)return{accepted:!1,reason:"sample-busy"};let K={type:"snowbreak_sample",source:"manual-preview",priority:80};return E.dispatch(K,w,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:K,duration:(p?S():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function I(K,le=0){return v.find(H=>H.id===K)?.persistentState&&(T=K),z(),i.selectSample(K),c={id:K,time:le},h="scene-preview",i.seek(Math.min(le,i.duration)),{accepted:!0}}async function F(K,{withVoice:le=!0}={}){let H=c||l;if(!H)return{accepted:!1};z(),i.selectSample(H.id),i.seek(H.time%i.duration),i.selectSample(K),ue(n?.(K));let $=i.sampleOptions?.().find(xe=>xe.id===K)?.afterScene;return l=$?{id:$,time:0}:H,g=!1,le&&t?G():R()}function B(K){if(c&&h==="scene-preview")return c.time+=Math.max(0,Math.min(100,K))/1e3,i.seek(c.id==="show_03"||i.sampleOptions?.().find($=>$.id===c.id)?.endPolicy==="hold"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let le=p?x()/1e3:null,H=E.tick(K);if(h==="arm-failed")return z(),h="arm-failed",H;if(H.actions.length){let $=H.actions[0];if($.type==="snowbreak_arm_preview"||$.type==="raise_hand"){if(h==="local-arm-preview")try{o.apply($.progress)}catch{z(),h="arm-failed"}return H}$.type==="snowbreak_standby"&&h==="standby-preview"?i.seekStandby($.progress*i.standbyDuration):h!=="standby-preview"&&i.seek(le===null?$.progress*i.duration:Math.min(i.duration,le))}return H}function N(){if(T)return I(T);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};E.clear("standby-switch");let K={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),E.dispatch(K,w,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:K,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function z(K="sample-stop"){c=null,l=null,o?.restore(),o=null,d++,E.clear(K),t&&(t.pause(),t.currentTime=0),p=!1,M=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),h="stopped"}function L(K="right"){if(!["left","right"].includes(K))return{accepted:!1,reason:"invalid-arm-side"};let le=K==="left"?i.leftArmPreview:i.armPreview;if(!le?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(h==="standby-preview"&&z(),E.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{le.begin(),o=le}catch{return le.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let H={type:"snowbreak_arm_preview",side:K,source:"manual-preview",priority:80};return E.dispatch(H,w,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:H,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function P(K){w.localActions.raise_hand.enabled=!!K,!K&&o&&z()}function Y(K,le={}){let H=cd(K,le);if(H.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let $=Za(H,w);if($.stopped||!$.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:$};if(h==="standby-preview"&&z(),E.activeCount)return{accepted:!1,reason:"sample-busy",plan:$};let xe=E.dispatch(H,w,$);return h==="arm-failed"?(z(),h="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:$}):xe}async function O(K,{withVoice:le=!0}={}){if(!b.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(E.activeCount&&h!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let H=km(K,b);if(!H)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(K.frequency)||K.frequency<1||K.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let $=n?.(H.sampleId)||null;if(le&&!$)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let xe=cd("surface_reaction",{target:H.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!le}),Ne=Za(xe,w,{planId:"surface-reaction-"+ ++u});if(Ne.stopped||!Ne.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};z();try{i.selectSample(H.sampleId),ue($)}catch{try{N()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let fe={id:Ne.planId,sampleId:H.sampleId,touch:K,withVoice:!!le},me=++d;m=fe,M=null,p=!!le,le&&(r(),t.currentTime=0,s(!0));let Me=E.dispatch(xe,w,Ne);if(!Me.accepted)return m=null,p=!1,s(!1),{...Me,handled:!1};if(_("started",fe),!le)return{...Me,handled:!0};try{return await t.play(),me!==d?{accepted:!1,handled:!0,reason:"superseded"}:{...Me,handled:!0}}catch{return me===d&&(z("audio-play-failed"),h="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function U(K){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};z();try{let le=i.selectSample(K);return n&&ue(n(K)),i.startAsStandby&&N(),{accepted:!0,...le}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function G(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(h==="standby-preview"&&z(),E.activeCount||p)return{accepted:!1,reason:"sample-busy"};let K=++d;r(),t.currentTime=0,M=null,p=!0,s(!0);let le=R();try{return await t.play(),K!==d?{accepted:!1,reason:"superseded"}:le}catch{return K===d&&(z("audio-play-failed"),h="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let ae=()=>{p&&B(0)},de=()=>{p&&(z("audio-error"),h="audio-failed")};function ue(K){if(K&&(!Number.isFinite(K.duration)||K.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",ae),t?.removeEventListener("error",de),t=K||null,M=null,t?.addEventListener("ended",ae),t?.addEventListener("error",de)}return ue(t),{bus:E,capability:w,enterScene:I,playSceneReaction:F,dispatchSurfaceTouch:O,selectSample:U,setLocalActionsEnabled:P,dispatchSemantic:Y,playArmPreview:L,playSample:R,playWithVoice:G,tick:B,stop:z,enterStandby:N,setStandbyAfterSample:K=>g=!!K,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:f?{...f,touch:void 0}:null,sampleDuration:i.duration,status:h,active:E.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!M,originalInteractionVerified:!1})}}async function Zm(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Km(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return lM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(h=>h.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>Zm(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}async function lM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,M]of[[e.samples,!0],[e.events,!1]])for(let m of g){let f=t.samples.find(v=>v.id===m.id),b=i.getAsset(m.assetRole),S=i.current.resources.find(v=>v.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||b?.kind!=="audio"||!S||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||M&&(!f||!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||f.sourceShowElementId!==m.sourceShowElementId))throw new Error("Bilingual voice identity mismatch");let x=m.language+":"+m.id+":"+m.eventId;if(r.has(x))throw new Error("Duplicate bilingual voice choice");r.add(x);let w=m.language+":"+m.id;n.has(w)||n.set(w,[]),n.get(w).push({hash:S.assetId,weight:m.weight,eventId:m.eventId}),s.set(S.assetId,b)}if(!r.size)throw new Error("Empty bilingual voice catalog");let c=[...s],l=0;await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;l<c.length;){let[g,M]=c[l++];try{a.set(g,await Zm(M))}catch{o.push(g)}}}));let u="Chinese",h=!1;function d(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(h)return null;let M=(n.get(u+":"+g)||[]).filter(b=>a.has(b.hash)),m=M.reduce((b,S)=>b+S.weight,0);if(!M.length||!Number.isFinite(m)||m<=0)return null;let f=Math.random()*m;for(let b of M)if(f-=b.weight,f<0)return a.get(b.hash).audio;return a.get(M.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:d,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(d(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,M])=>g.startsWith(u+":")&&M.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){h=!0;for(let g of a.values())g.dispose();a.clear()}}}var $m=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function Jm(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let M=/^(surface_\d+):(\d+)$/.exec(p);return!!M&&!!Ur({mesh:M[1],triangle:Number(M[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let M=t.get(p);if($m(M,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:M,after:g});let m=s.get(p);return $m(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function h(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function d(p,g,M){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let f of m)o(f.key,f[M]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:h,undo:()=>d(n,r,"before"),redo:()=>d(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function jm(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=Jm(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let h=document.createElement("label"),d=document.createElement("input");d.type="checkbox",d.id="snowSurfaceEdit",h.append(d,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(h);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[U,G]of Object.entries(zi))p.add(new Option(G,U));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),M=document.createElement("input");M.type="checkbox",M.id="snowSurfaceShow",g.append(M,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[U,G]of Object.entries(zi)){let ae=document.createElement("span");ae.textContent="\u25A0 "+G+" ",ae.style.color="#"+ad[U].toString(16).padStart(6,"0"),m.appendChild(ae)}t.appendChild(m);let f=document.createElement("button"),b=document.createElement("button");f.id="snowSurfaceUndo",b.id="snowSurfaceRedo",f.textContent="\u64A4\u9500\u6807\u6CE8",b.textContent="\u91CD\u505A\u6807\u6CE8",t.append(f,b);let S=document.createElement("p");S.id="snowSurfaceOverlayInfo",t.appendChild(S);let x=document.createElement("button");x.id="snowSurfaceReset",x.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(x);let w=document.createElement("p");w.id="snowSurfaceStatus",w.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(w);let v=null,T=0,_=!1,E=U=>{let G=Ya(U);return Ur(U,G?{[G]:l.get(G)}:{})};function R(){if(_)return;let U=l.state();f.disabled=!U.undo,b.disabled=!U.redo;let G=i.setSurfaceLabels?.(l.snapshot(),M.checked);S.textContent=M.checked?`\u5DF2\u663E\u793A ${G?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${G?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function I(){T||(T=requestAnimationFrame(()=>{T=0,R()}))}function F(){r(l.snapshot()),R()}function B(){if(!v)return;v.mode==="paint"&&l.cancel(),s.cancel();let U=v.id;v=null,e.hasPointerCapture(U)&&e.releasePointerCapture(U),R()}d.onchange=()=>{B(),d.checked&&(M.checked=!0),R()},p.onchange=B,M.onchange=R,f.onclick=()=>{B(),l.undo()&&(F(),w.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},b.onclick=()=>{B(),l.redo()&&(F(),w.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},x.onclick=()=>{B(),l.begin();for(let U of Object.keys(l.snapshot()))l.set(U,void 0);l.commit()&&F(),w.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function N(U){let G=Ya(U);!G||!U.alphaVerified||(l.set(G,v.region||void 0),I(),w.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${zi[v.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function z(U){if(v||e.dataset.snowbreakFrameEdit==="true"||!d.checked&&!o())return;U.stopPropagation();let G=i.pickSurface(U.clientX,U.clientY);if(v={id:U.pointerId,mode:d.checked?"paint":"touch",region:p.value},e.setPointerCapture(U.pointerId),v.mode==="paint"){l.begin();try{N(G)}catch(ae){w.textContent=ae.message}}else{let ae=E(G);i.senseTouch?.(G,ae),ae?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:ae,source:"skinned-surface"}),v.known=!0,v.hit=G):G?.alphaVerified?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),v.known=!0,v.hit=G):w.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function L(U){if(v?.id===U.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){B();return}if(U.stopPropagation(),v.mode==="paint")try{N(i.pickSurface(U.clientX,U.clientY))}catch(G){w.textContent=G.message}else v.known&&s.move({pointerId:U.pointerId,x:U.clientX,y:U.clientY})}}function P(U){if(v?.id!==U.pointerId)return;U.stopPropagation();let G=v;if(v=null,G.mode==="paint")l.commit()&&F(),w.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(G.known&&o()){let ae=s.finish({pointerId:U.pointerId,x:U.clientX,y:U.clientY});ae&&(ae.surface=G.hit,w.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+ae.regionLabel,a(ae))}else s.cancel();e.hasPointerCapture(U.pointerId)&&e.releasePointerCapture(U.pointerId)}function Y(U){v?.id===U.pointerId&&B()}for(let[U,G]of[["pointerdown",z],["pointermove",L],["pointerup",P],["pointercancel",Y],["lostpointercapture",Y]])e.addEventListener(U,G);function O(U){if(!Array.isArray(U)||U.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");B(),l.begin();let G=0;try{for(let ae of U){let de=Ya(ae.hit);if(!de||!ae.hit.alphaVerified||l.has(de)||l.state().count>=3e4)continue;let ue={id:ae.id,source:"vision-reviewed",confidence:ae.confidence,model:String(ae.model||"").slice(0,128),visible:!0};Ur(ae.hit,{[de]:ue})&&(l.set(de,ue),G++)}l.commit()&&F()}catch(ae){throw l.cancel(),R(),ae}return w.textContent=`\u5DF2\u91C7\u7528 ${G} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,G}return R(),{applyReviewed:O,classify:E,state:l.state,dispose(){B(),_=!0,T&&cancelAnimationFrame(T);for(let[U,G]of[["pointerdown",z],["pointermove",L],["pointerup",P],["pointercancel",Y],["lostpointercapture",Y]])e.removeEventListener(U,G)}}}var At=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),eg=[At("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),At("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),At("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),At("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),At("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),At("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),At("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),At("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),At("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),At("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),At("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),At("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),At("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),At("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),At("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),At("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),At("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),At("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),At("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),At("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),At("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),At("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),At("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),At("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),At("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),At("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),At("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),At("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),At("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],Qm=Object.freeze(Object.fromEntries(eg.map(i=>[i.id,Object.freeze({...i})]))),eT=Object.freeze(eg.map(i=>i.id));function tg(i){return Qm[i]&&Qm[i].label||String(i||"\u8EAB\u4F53")}var cM="body-touch/1",uM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function ng(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...uM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(f){a=String(f||"")}function l(f){o=String(f||"screen")}function u(f){return f?(n={pointerId:f.pointerId,x0:Number(f.x)||0,y0:Number(f.y)||0,x:Number(f.x)||0,y:Number(f.y)||0,t0:e(),path:[[Number(f.x)||0,Number(f.y)||0]],region:f.region||null,confidence:Number(f.confidence)||0,source:f.source||o},{...n}):null}function h(f){if(!n||!f)return null;let b=Number(f.x)||0,S=Number(f.y)||0;return n.x=b,n.y=S,n.path.length<t.maxPath&&n.path.push([b,S]),{x:b,y:S,moved:Math.hypot(b-n.x0,S-n.y0)}}function d(){let f=0;for(let b=1;b<n.path.length;b++)f+=Math.hypot(n.path[b][0]-n.path[b-1][0],n.path[b][1]-n.path[b-1][1]);return{length:f,points:n.path.length}}function p(f,b){if(!n)return null;f&&h(f);let S=e(),x=Math.max(0,S-n.t0),w=n.x-n.x0,v=n.y-n.y0,T=Math.hypot(w,v),_=d(),E=b||"";if(!E)if(x>=t.longMinMs&&T<=t.moveTolerancePx)E="long_press";else if(T>=t.strokeMinPx&&x>=t.strokeMinMs&&_.length>=t.strokeMinPx)E="stroke";else if(T<=t.moveTolerancePx&&x<=t.tapMaxMs){let N=n.region&&(n.region.id||n.region)||"body";r&&S-r.at<=t.doubleGapMs&&r.region===N?(E="double_tap",r=null):(E="tap",r={at:S,region:N})}else E="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},I=typeof R=="string"?R:R.id||"body";s.push({at:S,region:I}),s=s.filter(N=>S-N.at<=t.frequencyWindowMs);let F=s.filter(N=>N.region===I).length,B={schema:cM,type:"body_touch",modelId:a,region:I,regionLabel:R.label||tg(I),side:R.side||"",group:R.group||"",gesture:E,durationMs:Math.round(x),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:F,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+w.toFixed(1),y:+v.toFixed(1)},distance:+T.toFixed(1),pathLength:+_.length.toFixed(1),at:Math.round(S)};return n=null,B}function g(){n=null}function M(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:h,finish:p,cancel:g,reset:M,state:m,setModelId:c,setSource:l,config:t}}var Ka=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),ud=Object.freeze({...Ka,scale:3,x:-.12,y:-.02});function hd(i){return i&&Object.keys(Ka).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function dd(i,e,t,{onEditing:n=()=>{},initialFrame:r=ud,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0,verticalSign:l=1,dragScale:u=()=>({x:1,y:1})}={}){let h;try{h=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(hd(h)&&(!o||Number.isFinite(h.depth)&&Math.abs(h.depth)<=1.5)?h:hd(r)?r:ud);let d=document.createElement("section");d.id=a+"Editor",d.hidden=!0,d.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(d,p);let g=!1,M=null,m=0,f=null,b=null,S=new Map,x=new Map,w=document.createElement("select");w.id=a+"DragMode",w.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),w.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let v=document.createElement("div");v.textContent=s,d.append(v,w);let T=(O,U,G)=>{let ae=document.createElement("button");return ae.textContent=O,ae.id=U.replace("presentation",a),ae.onclick=G,d.append(ae),ae};function _(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let O=i.frameState();for(let[U,G]of x)G.value=O[U]}function R(O){i.setFrame({...i.frameState(),...O}),E()}function I(){m=0,f&&(R(f),f=null)}function F(O){f={...f||{},...O},m||(m=requestAnimationFrame(I))}function B(O){m&&(cancelAnimationFrame(m),I()),!O&&M&&R(M),_(),g=!1,d.hidden=!0,p.hidden=!0;for(let U of S.keys())e.hasPointerCapture(U)&&e.releasePointerCapture(U);S.clear(),b=null,e.dataset.snowbreakFrameEdit="false",n(!1)}T("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{R(hd(r)?r:ud),_()}),T("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{R(Ka),_()}),T("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{d.hidden=!0,p.hidden=!1}),T("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>B(!0)),T("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>B(!1)),p.onclick=()=>B(!0);for(let[O,U,G,ae,de]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let ue=document.createElement("label");ue.textContent=U;let K=document.createElement("input");K.type="range",K.min=G,K.max=ae,K.step=de,K.id=a+"_"+O,K.style.width="100%",K.oninput=()=>F({[O]:Number(K.value)}),K.onchange=()=>{I(),_()},x.set(O,K),ue.append(K),d.append(ue)}let N=O=>({x:O.clientX,y:O.clientY});function z(O){g&&(O.preventDefault(),O.stopImmediatePropagation(),S.set(O.pointerId,N(O)),e.setPointerCapture(O.pointerId),b={frame:i.frameState(),points:[...S.values()]})}function L(O){if(!g||!S.has(O.pointerId)||!b)return;O.preventDefault(),O.stopImmediatePropagation(),S.set(O.pointerId,N(O));let U=[...S.values()],G=b.points,ae=b.frame;if(U.length>=2&&G.length>=2){let de=ue=>Math.hypot(ue[0].x-ue[1].x,ue[0].y-ue[1].y);F({scale:ae.scale*de(U)/Math.max(5,de(G))})}else if(U.length===1&&G.length===1){let de=(U[0].x-G[0].x)/e.clientWidth,ue=(U[0].y-G[0].y)/e.clientHeight;F(w.value==="rotate"?{yaw:ae.yaw+de*300,pitch:ae.pitch+ue*100}:{x:ae.x+de*u().x,y:ae.y+ue*l*u().y})}}function P(O){!g||!S.has(O.pointerId)||(O.preventDefault(),O.stopImmediatePropagation(),S.delete(O.pointerId),e.hasPointerCapture(O.pointerId)&&e.releasePointerCapture(O.pointerId),m&&(cancelAnimationFrame(m),I()),_(),b={frame:i.frameState(),points:[...S.values()]})}let Y=[["pointerdown",z],["pointermove",L],["pointerup",P],["pointercancel",P]];for(let[O,U]of Y)e.addEventListener(O,U,!0);return{get active(){return g},toggle(){if(g){B(!0);return}g=!0,M=i.frameState(),E(),d.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&B(!0)},dispose(){g&&B(!0);for(let[O,U]of Y)e.removeEventListener(O,U,!0);d.remove(),p.remove()},state:()=>i.frameState()}}var ag=!0,ri=document.querySelector("#stage"),ig=document.querySelector("#status"),Hi=document.querySelector("#editor"),Dr=null,Xs=null,rg=Promise.resolve(),pd={},md="Chinese",gd=null,bi=0,yd="",xd,Ce,at,On,_c,Fn,vi,Ja,Mt,yc=0,Tn=!1,$a=!0,Fr=bd(i=>vd(Mt,i.tempo,performance.now())),Mi=document.createElement("button");Mi.id="finishPaint";Mi.hidden=!0;Mi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(Mi);function Ys(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),Mi.hidden=!0,Hi.classList.remove("open")}Mi.onclick=Ys;var tn=i=>{let e={...i,nonce:yd};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},fd=i=>{ig.textContent=i,ig.hidden=!i};function vc(){window.__snowbreakMigration=null,Xs=null,vi?.dispose(),vi=null,Fr.close(),Mt=null,Mi.hidden=!0,Fn?.dispose(),Ja?.dispose(),_c?.dispose(),at?.stop("renderer-close"),On?.dispose(),Ce?.dispose(),xd?.dispose(),Ja=Fn=_c=at=On=Ce=xd=null,Hi.replaceChildren()}function sg(i,e,t){let n=++bi,r=rg.catch(()=>{}).then(()=>n===bi?hM(i,e,t,n):void 0);return rg=r,r}async function hM(i,e,t,n){yd=e,Tn=!1,ri.dataset.snowbreakPaused="false",vc(),fd("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026");let r,s,a;try{if(t){if(!Dr)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Dr.selectVariant(t)}else{Dr=null;let x=await fetch(i);if(!x.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await pf(new Uint8Array(await x.arrayBuffer()))}if(!["Enya","Fenny","Augusta","Qingxiao"].includes(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await Hm(ri,r.runtime,{isCurrent:()=>n===bi,universalMotions:gd}),a=r.runtime.getAsset("voiceCatalog")?await Km(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==bi){s.dispose(),a.dispose(),r.runtime.dispose();return}Dr=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),xd=r.runtime,Ce=s,On=a,Ce.setRenderBudget(pd),On.setLanguage?.(md);let o=Ce.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,at=Ym(Ce,{audioForSample:x=>On.getAudio(x)}),Ce.sceneInteractions.configure({beforeDrag:()=>{Mt=null,Ce.embodiment.releaseHands(),Ce.resetSenses()},scene:()=>at.snapshot().sceneId||Ce.editingScene,reaction:x=>{at.playSceneReaction(x,{withVoice:$a})},voice:x=>{if($a){let w=On.getAudio(x);w&&(w.currentTime=0,w.play().catch(()=>{}))}},event:tn}),Ce.showFaceCandidate(!0);let c=Ce.sampleOptions().find(x=>x.id===Ce.sampleState().sampleId),l="resting-scene:"+r.manifest.characterId+":"+r.selection?.mode,u=localStorage.getItem(l);c?.persistentState?at.enterScene(Ce.sampleOptions().some(x=>x.id===u&&x.persistentState)?u:c.id):at.enterStandby(),Ce.sceneSelectionKey=l,Ce.faceViewer(),yc=performance.now();let h=null,d=x=>{if(tn({type:"editing",active:x}),x){let w=at.snapshot();h=w.sceneId?{id:w.sceneId,time:w.sceneTime}:null,Ce.editingScene=h?.id||null,Ce.sceneInteractions.cancel(),at.stop("placement-edit"),h&&(Ce.selectSample(h.id),Ce.seek(h.time%Ce.duration)),Ys()}else Tn||(h?at.enterScene(h.id,h.time):at.enterStandby(),h=null,Ce.editingScene=null)},p=()=>{vi?.dispose();let x=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";vi=dd({setFrame:Ce.setModelFrame,frameState:Ce.modelFrameState},ri,"model-placement:"+x+r.selection?.mode+":"+(at.snapshot().sceneId||"main"),{initialFrame:{...Ka,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Ce.modelDragScale,onEditing:d})};Ce.setupModelEditor=p,p(),Fn=dd(Ce,ri,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:Ce.presentationDefault,onEditing:d}),Ja=Md(Ce,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let g="";Ce.setFrameHandler(()=>{let x=performance.now();if(Tn||at.tick(Math.min(100,Math.max(0,x-yc))),yc=x,!Tn&&Mt){let _=to(Mt,x),E=Mt.duration,R=Mt.stop===void 0?1:Math.max(0,1-(x-Mt.stop)/300);if(_>=E||R===0)Mt=null;else{let I=Math.max(0,Math.min(1,_/.3,(E-_)/(.3*Mt.rate),R)),F=I*I*(3-2*I);Ce.applyLearnedMotion(Mt.id,_,F,{amplitude:Fr.get().amplitude})}}let w=at.snapshot(),v=Mt?"learned:"+Mt.id:w.status,T=v+":"+(w.sceneId||"")+":"+Ce.sampleState().sampleId;T!==g&&(g=T,tn({type:"selfState",state:qs()}),tn({type:"playback",active:!!Mt||["playing","scene-preview","local-arm-preview"].includes(w.status),status:v,label:Mt?Ce.learnedOptions().find(_=>_.id===Mt.id)?.label:Ce.sampleOptions().find(_=>_.id===Ce.sampleState().sampleId)?.label}))});let M=r.manifest.resources.filter(x=>x.kind==="geometry").map(x=>x.assetId).join("-"),m="surface:"+r.manifest.skinId+":"+M;_c=jm(Ce,ri,Hi,{load:()=>JSON.parse(localStorage.getItem(m)||"{}"),save:x=>localStorage.setItem(m,JSON.stringify(x)),tracker:ng({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!Tn,onEvent:async x=>{n!==bi||Tn||(tn({type:"touch",region:x.region,label:x.regionLabel,gesture:x.gesture,confidence:x.confidence,source:x.regionSource,durationMs:x.durationMs,frequency:x.frequency,completed:!0}),ag||await at.dispatchSurfaceTouch(x,{withVoice:$a}))}});let f=document.createElement("button");f.textContent="\u5173\u95ED\u5DE5\u5177",f.onclick=Ys,Hi.prepend(f);let b=Hi.querySelector("#snowSurfaceRegion"),S=Hi.querySelector("#snowSurfaceEdit");S.addEventListener("change",()=>{S.checked&&(Hi.classList.remove("open"),Mi.textContent="\u5B8C\u6210"+b.selectedOptions[0].textContent+"\u6807\u6CE8",Mi.hidden=!1)}),fd(""),tn({type:"ready",bodyActions:[...Ce.embodiment.snapshot().available,...Ce.sceneInteractions.available()],selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Ce.sampleOptions().map(x=>x.id),voices:On.snapshot().available,learned:Ce.learnedOptions().map(x=>x.id)}),window.__snowbreakMigration={display:Ce,adapter:at,voices:On,editor:_c,presentation:Fn,manifest:r.manifest}}catch(o){if(n!==bi){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}vc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),fd("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),tn({type:"error",message:String(o.message||o)})}}async function dM(i){if(i.type==="hardwareBudget"){pd={thermal:i.thermal,lowPower:i.lowPower},Ce?.setRenderBudget(pd);return}if(i.type==="universalMotions"){if(gd=i.catalog||null,Ce){let e=Ce.setUniversalMotions(gd);tn({type:"universalReady",learned:e.map(t=>t.id)})}return}if(i.type==="dispose"){bi++,vc();return}if(i.type==="load")return sg(i.url,i.nonce);if(i.type==="variant")return Dr?.variants.some(e=>e.id===i.id)?sg(null,yd,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(md=i.language==="ja"?"Japanese":"Chinese",at){let e=at.snapshot();at.stop("voice-language-change"),On?.setLanguage?.(md),e.sceneId?at.enterScene(e.sceneId,e.sceneTime):at.enterStandby()}return}if(at){if(["body","gesture","sample","learned","stop"].includes(i.type)){On?.stop?.();let e=Ce.sceneInteractions.snapshot();if(i.automatic&&(vi?.active||Fn?.active||e.active||e.recovering)){tn({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}vi?.close(),Fn?.close()}if(i.type==="body"){if(Tn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Ce.sceneInteractions.available().includes(i.id)){Ce.sceneInteractions.command(i.id),tn({type:"selfState",state:qs(),requestId:i.requestId});return}let e=bi;if(Mt=null,at.snapshot().sceneId||(at.stop("body-command"),at.enterStandby()),Ce.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==bi)return;tn({type:"selfState",state:qs(),requestId:i.requestId});return}if(i.type==="gesture"){if(Tn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");Mt=null,at.snapshot().sceneId||(at.stop("ai-gesture"),at.enterStandby()),Ce.embodiment.playGesture(i.id,i.plan),tn({type:"selfState",state:qs()});return}if(i.type==="touchPolicy"){ag=!!i.aiControlled;return}if(i.type==="danceSettings"){Fr.set(i);return}if(i.type==="danceEdit"){Fr.toggle();return}if(i.type==="speechLevel"){Ce.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Ce.setGaze(i.x,i.y);return}if(i.type==="pause"){if(Tn)return;On?.stop?.(),vi?.close(),Fr.close();let e=at.snapshot();Xs=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Ce.sceneInteractions.suspend(),Ce.embodiment.reset(),Ce.resetSenses(),Mt=null,Tn=!0,Ja?.close(),Fn?.close(),ri.dataset.snowbreakPaused="true",at.stop("background"),Ys();return}if(i.type==="resume"){if(!Tn)return;Tn=!1,ri.dataset.snowbreakPaused="false",yc=performance.now(),Xs?(at.enterScene(Xs.id,Xs.time),Xs=null):at.enterStandby();return}if(i.type==="stop"){if(Ce.embodiment.reset(),Mt){Mt.stop=performance.now();return}at.stop(),at.enterStandby();return}if(i.type==="officialTouchPoints"){Ce.sceneInteractions.togglePoints()||tn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){Mt=null,Fn.close(),Hi.classList.contains("open")||!Mi.hidden?Ys():Hi.classList.add("open");return}if(i.type==="lightingEdit"){Fn.close(),Ys(),Ja.toggle();return}if(i.type==="modelEdit"){Mt=null,Fn.close(),vi.toggle();return}if(i.type==="modelFrame"){Ce.setModelFrame(i.frame);return}if(i.type==="frameEdit"){Mt=null,vi.close(),Fn.toggle();return}if(i.type==="scene")return Ce.setSceneVisible(!!i.visible);if(i.type==="room")return Ce.setRoomVisible(!!i.visible);if(i.type==="voice"){if($a=!!i.enabled,!$a){On?.stop?.();let e=at.snapshot().sceneId;at.stop("voice-disabled"),e?at.enterScene(e):at.enterStandby()}return}if(i.type==="sample"&&Ce.sampleOptions().some(e=>e.id===i.id)){if(Ce.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Ce.sampleOptions().find(t=>t.id===i.id)?.persistentState){Mt=null,vi.close(),Ce.embodiment.reset(),at.enterScene(i.id),Ce.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Ce.sceneSelectionKey,i.id),Ce.setupModelEditor(),tn({type:"selfState",state:qs()});return}if(at.snapshot().sceneId){let t=i.id==="head"?Ce.sceneInteractions.headReaction():null;await at.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Ce.embodiment.releaseHands(),Mt=null,Fn.close(),Tn=!1,at.stop(),at.selectSample(i.id),at.setStandbyAfterSample(!0),(i.withVoice&&On.getAudio(i.id)?await at.playWithVoice():at.playSample()).accepted||tn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Ce.embodiment.releaseHands();let e=Ce.learnedOptions().find(t=>t.id===i.id);if(!e)return;Fn.close(),at.stop("learned-motion"),at.enterStandby(),Mt={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Fr.get().tempo:1}}}}function qs(){if(!Ce)return null;let i=Ce.embodiment.snapshot(),e=at?.snapshot(),t=Ce.sampleOptions().find(r=>r.id===Ce.sampleState().sampleId),n=Ce.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:Mt?{id:Mt.id,time:to(Mt,performance.now()),rate:Mt.rate,amplitude:Fr.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Dr?.selection?.outfit||"unknown",mode:Dr?.selection?.mode||"unknown"}}function fM(){if(!Ce||Tn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ri.width,ri.height);i.width=Math.round(ri.width*e),i.height=Math.round(ri.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Ce.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:qs,portrait:fM,performance:()=>Ce?.performanceState(),receive:i=>{dM(i).catch(e=>tn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{bi++,vc()});tn({type:"pageReady"});})();
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
