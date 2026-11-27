(()=>{var fg=Object.defineProperty;var dg=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var pg=(i,e)=>{for(var t in e)fg(i,t,{get:e[t],enumerable:!0})};var md={};pg(md,{AsyncCompress:()=>Mg,AsyncDecompress:()=>Tg,AsyncDeflate:()=>nd,AsyncGunzip:()=>rd,AsyncGzip:()=>Mg,AsyncInflate:()=>$c,AsyncUnzipInflate:()=>Og,AsyncUnzlib:()=>ad,AsyncZipDeflate:()=>Lg,AsyncZlib:()=>wg,Compress:()=>Fc,DecodeUTF8:()=>Cg,Decompress:()=>zc,Deflate:()=>Hn,EncodeUTF8:()=>Ig,FlateErrorCode:()=>vg,Gunzip:()=>go,Gzip:()=>Fc,Inflate:()=>yn,Unzip:()=>Bg,UnzipInflate:()=>Fg,UnzipPassThrough:()=>pd,Unzlib:()=>yo,Zip:()=>Ng,ZipDeflate:()=>Pg,ZipPassThrough:()=>ea,Zlib:()=>Bc,compress:()=>Sg,compressSync:()=>Oc,decompress:()=>Ag,decompressSync:()=>Rg,deflate:()=>id,deflateSync:()=>ra,gunzip:()=>sd,gunzipSync:()=>xo,gzip:()=>Sg,gzipSync:()=>Oc,inflate:()=>jc,inflateSync:()=>es,strFromU8:()=>Qc,strToU8:()=>Ki,unzip:()=>kg,unzipSync:()=>zg,unzlib:()=>od,unzlibSync:()=>_o,zip:()=>Ug,zipSync:()=>Dg,zlib:()=>Eg,zlibSync:()=>kc});function hr(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function id(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[jr],function(n){return $i(ra(n.data[0],n.data[1]))},0,t)}function ra(i,e){return ur(i,e||{},0,0)}function jc(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[$r],function(n){return $i(es(n.data[0],Wc(n.data[1])))},1,t)}function es(i,e){return na(i,{i:2},e&&e.out,e&&e.dictionary)}function Sg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[jr,jf,function(){return[Oc]}],function(n){return $i(Oc(n.data[0],n.data[1]))},2,t)}function Oc(i,e){e||(e={});var t=Kr(),n=i.length;t.p(i);var r=ur(i,e,Yc(e),8),s=r.length;return Xc(r,e),_t(r,s-8,t.d()),_t(r,s-4,n),r}function sd(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[$r,Jf,function(){return[xo]}],function(n){return $i(xo(n.data[0],n.data[1]))},3,t)}function xo(i,e){var t=qc(i);return t+8>i.length&&Je(6,"invalid gzip data"),na(i.subarray(t,-8),{i:2},e&&e.out||new ct(td(i)),e&&e.dictionary)}function Eg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[jr,Qf,function(){return[kc]}],function(n){return $i(kc(n.data[0],n.data[1]))},4,t)}function kc(i,e){e||(e={});var t=bo();t.p(i);var n=ur(i,e,e.dictionary?6:2,4);return Zc(n,e),_t(n,n.length-4,t.d()),n}function od(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),Jr(i,e,[$r,ed,function(){return[_o]}],function(n){return $i(_o(n.data[0],Wc(n.data[1])))},5,t)}function _o(i,e){return na(i.subarray(Kc(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Ag(i,e,t){return t||(t=e,e={}),typeof t!="function"&&Je(7),i[0]==31&&i[1]==139&&i[2]==8?sd(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?jc(i,e,t):od(i,e,t)}function Rg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?xo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?es(i,e):_o(i,e)}function Ki(i,e){if(e){for(var t=new ct(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Of)return Of.encode(i);for(var r=i.length,s=new ct(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var c=new ct(a+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return zn(s,0,a)}function Qc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Hc)return Hc.decode(i);var r=cd(i),s=r.s,t=r.r;return t.length&&Je(8),s}}function Ug(i,e,t){t||(t=e,e={}),typeof t!="function"&&Je(7);var n={};Jc(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,c=s,l=new Array(s),u=[],f=function(){for(var m=0;m<u.length;++m)u[m]()},h=function(m,d){vo(function(){t(m,d)})};vo(function(){h=t});var p=function(){var m=new ct(o+22),d=a,b=o-a;o=0;for(var M=0;M<c;++M){var x=l[M];try{var S=x.c.length;Xr(m,o,x,x.f,x.u,S);var v=30+x.f.length+Zi(x.extra),w=o+v;m.set(x.c,w),Xr(m,a,x,x.f,x.u,S,o,x.m),a+=16+v+(x.m?x.m.length:0),o=w+S}catch(y){return h(y,null)}}eu(m,a,l.length,b,d),h(null,m)};s||p();for(var g=function(m){var d=r[m],b=n[d],M=b[0],x=b[1],S=Kr(),v=M.length;S.p(M);var w=Ki(d),y=w.length,E=x.comment,R=E&&Ki(E),C=R&&R.length,O=Zi(x.extra),k=x.level==0?0:8,N=function(H,L){if(H)f(),h(H,null);else{var I=L.length;l[m]=ia(x,{size:v,crc:S.d(),c:L,f:w,m:R,u:y!=d.length||R&&E.length!=C,compression:k}),a+=30+y+O+I,o+=76+2*(y+O)+(C||0)+I,--s||p()}};if(y>65535&&N(Je(11,0,1),null),!k)N(null,M);else if(v<16e4)try{N(null,ra(M,x))}catch(H){N(H,null)}else u.push(id(M,x,N))},_=0;_<c;++_)g(_);return f}function Dg(i,e){e||(e={});var t={},n=[];Jc(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,f=Ki(a),h=f.length,p=l.comment,g=p&&Ki(p),_=g&&g.length,m=Zi(l.extra);h>65535&&Je(11);var d=u?ra(c,l):c,b=d.length,M=Kr();M.p(c),n.push(ia(l,{size:c.length,crc:M.d(),c:d,f,m:g,u:h!=a.length||g&&p.length!=_,o:r,compression:u})),r+=30+h+m+b,s+=76+2*(h+m)+(_||0)+b}for(var x=new ct(s+22),S=r,v=s-r,w=0;w<n.length;++w){var f=n[w];Xr(x,f.o,f,f.f,f.u,f.c.length);var y=30+f.f.length+Zi(f.extra);x.set(f.c,f.o+y),Xr(x,r,f,f.f,f.u,f.c.length,f.o,f.m),r+=16+y+(f.m?f.m.length:0)}return eu(x,r,n.length,v,S),x}function kg(i,e,t){t||(t=e,e={}),typeof t!="function"&&Je(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,d){vo(function(){t(m,d)})};vo(function(){a=t});for(var o=i.length-22;kt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(Je(13,0,1),null),r;var c=fn(i,o+8);if(c){var l=c,u=kt(i,o+16),f=u==4294967295||l==65535;if(f){var h=kt(i,o-12);f=kt(i,h)==101075792,f&&(l=c=kt(i,h+32),u=kt(i,h+48))}for(var p=e&&e.filter,g=function(m){var d=fd(i,u,f),b=d[0],M=d[1],x=d[2],S=d[3],v=d[4],w=d[5],y=hd(i,w);u=v;var E=function(C,O){C?(r(),a(C,null)):(O&&(s[S]=O),--c||a(null,s))};if(!p||p({name:S,size:M,originalSize:x,compression:b}))if(!b)E(null,zn(i,y,y+M));else if(b==8){var R=i.subarray(y,y+M);if(x<524288||M>.8*x)try{E(null,es(R,{out:new ct(x)}))}catch(C){E(C,null)}else n.push(jc(R,{size:x},E))}else E(Je(14,"unknown compression type "+b,1),null);else E(null,null)},_=0;_<l;++_)g(_)}else a(null,{});return r}function zg(i,e){for(var t={},n=i.length-22;kt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Je(13);var r=fn(i,n+8);if(!r)return{};var s=kt(i,n+16),a=s==4294967295||r==65535;if(a){var o=kt(i,n-12);a=kt(i,o)==101075792,a&&(r=kt(i,o+32),s=kt(i,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var u=fd(i,s,a),f=u[0],h=u[1],p=u[2],g=u[3],_=u[4],m=u[5],d=hd(i,m);s=_,(!c||c({name:g,size:h,originalSize:p,compression:f}))&&(f?f==8?t[g]=es(i.subarray(d,d+h),{out:new ct(p)}):Je(14,"unknown compression type "+f):t[g]=zn(i,d,d+h))}return t}var Df,_g,ct,dn,ta,qr,Yr,Js,Bf,kf,Vc,po,zf,Hf,Nc,Qs,Mi,vt,kn,Si,vt,vt,vt,vt,Wr,vt,Vf,Gf,Wf,Xf,uo,Bn,ho,Zr,zn,vg,qf,Je,na,si,Vr,fo,mo,Uc,Gr,Gc,Dc,Yf,Yi,Zf,Kf,Kr,bo,ur,ia,Ff,co,bg,$f,$r,jr,jf,Jf,Qf,ed,$i,Wc,Jr,Vn,Qr,fn,kt,Lc,_t,Xc,qc,td,Yc,Zc,Kc,Hn,nd,yn,$c,Fc,Mg,go,rd,Bc,wg,yo,ad,zc,Tg,Jc,Of,Hc,ld,cd,Cg,Ig,ud,hd,fd,dd,Zi,Xr,eu,ea,Pg,Lg,Ng,pd,Fg,Og,Bg,vo,gd=dg(()=>{Df={},_g=(function(i,e,t,n,r){var s=new Worker(Df[e]||(Df[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,n),s}),ct=Uint8Array,dn=Uint16Array,ta=Int32Array,qr=new ct([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yr=new ct([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Js=new ct([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bf=function(i,e){for(var t=new dn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ta(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},kf=Bf(qr,2),Vc=kf.b,po=kf.r;Vc[28]=258,po[258]=28;zf=Bf(Yr,0),Hf=zf.b,Nc=zf.r,Qs=new dn(32768);for(vt=0;vt<32768;++vt)Mi=(vt&43690)>>1|(vt&21845)<<1,Mi=(Mi&52428)>>2|(Mi&13107)<<2,Mi=(Mi&61680)>>4|(Mi&3855)<<4,Qs[vt]=((Mi&65280)>>8|(Mi&255)<<8)>>1;kn=(function(i,e,t){for(var n=i.length,r=0,s=new dn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new dn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new dn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],f=a[i[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Qs[f]>>c]=l}else for(o=new dn(n),r=0;r<n;++r)i[r]&&(o[r]=Qs[a[i[r]-1]++]>>15-i[r]);return o}),Si=new ct(288);for(vt=0;vt<144;++vt)Si[vt]=8;for(vt=144;vt<256;++vt)Si[vt]=9;for(vt=256;vt<280;++vt)Si[vt]=7;for(vt=280;vt<288;++vt)Si[vt]=8;Wr=new ct(32);for(vt=0;vt<32;++vt)Wr[vt]=5;Vf=kn(Si,9,0),Gf=kn(Si,9,1),Wf=kn(Wr,5,0),Xf=kn(Wr,5,1),uo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Bn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ho=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Zr=function(i){return(i+7)/8|0},zn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ct(i.subarray(e,t))},vg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},qf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Je=function(i,e,t){var n=new Error(e||qf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Je),!t)throw n;return n},na=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ct(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new ct(r*3));var l=function(xe){var me=t.length;if(xe>me){var Ae=new ct(Math.max(me*2,xe));Ae.set(t),t=Ae}},u=e.f||0,f=e.p||0,h=e.b||0,p=e.l,g=e.d,_=e.m,m=e.n,d=r*8;do{if(!p){u=Bn(i,f,1);var b=Bn(i,f+1,3);if(f+=3,b)if(b==1)p=Gf,g=Xf,_=9,m=5;else if(b==2){var v=Bn(i,f,31)+257,w=Bn(i,f+10,15)+4,y=v+Bn(i,f+5,31)+1;f+=14;for(var E=new ct(y),R=new ct(19),C=0;C<w;++C)R[Js[C]]=Bn(i,f+C*3,7);f+=w*3;for(var O=uo(R),k=(1<<O)-1,N=kn(R,O,1),C=0;C<y;){var H=N[Bn(i,f,k)];f+=H&15;var M=H>>4;if(M<16)E[C++]=M;else{var L=0,I=0;for(M==16?(I=3+Bn(i,f,3),f+=2,L=E[C-1]):M==17?(I=3+Bn(i,f,7),f+=3):M==18&&(I=11+Bn(i,f,127),f+=7);I--;)E[C++]=L}}var W=E.subarray(0,v),F=E.subarray(v);_=uo(W),m=uo(F),p=kn(W,_,1),g=kn(F,m,1)}else Je(1);else{var M=Zr(f)+4,x=i[M-4]|i[M-3]<<8,S=M+x;if(S>r){c&&Je(0);break}o&&l(h+x),t.set(i.subarray(M,S),h),e.b=h+=x,e.p=f=S*8,e.f=u;continue}if(f>d){c&&Je(0);break}}o&&l(h+131072);for(var U=(1<<_)-1,V=(1<<m)-1,le=f;;le=f){var L=p[ho(i,f)&U],fe=L>>4;if(f+=L&15,f>d){c&&Je(0);break}if(L||Je(2),fe<256)t[h++]=fe;else if(fe==256){le=f,p=null;break}else{var de=fe-254;if(fe>264){var C=fe-257,Y=qr[C];de=Bn(i,f,(1<<Y)-1)+Vc[C],f+=Y}var ce=g[ho(i,f)&V],z=ce>>4;ce||Je(3),f+=ce&15;var F=Hf[z];if(z>3){var Y=Yr[z];F+=ho(i,f)&(1<<Y)-1,f+=Y}if(f>d){c&&Je(0);break}o&&l(h+131072);var j=h+de;if(h<F){var ye=s-F,De=Math.min(F,j);for(ye+h<0&&Je(3);h<De;++h)t[h]=n[ye+h]}for(;h<j;++h)t[h]=t[h-F]}}e.l=p,e.p=le,e.b=h,e.f=u,p&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return h!=t.length&&a?zn(t,0,h):t.subarray(0,h)},si=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Vr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},fo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Yi,l:0};if(r==1){var a=new ct(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,v){return S.f-v.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,f=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=r-1;)o=t[t[l].f<t[f].f?l++:f++],c=t[l!=u&&t[l].f<t[f].f?l++:f++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var p=new dn(h+1),g=mo(t[u-1],p,0);if(g>e){var n=0,_=0,m=g-e,d=1<<m;for(s.sort(function(v,w){return p[w.s]-p[v.s]||v.f-w.f});n<r;++n){var b=s[n].s;if(p[b]>e)_+=d-(1<<g-p[b]),p[b]=e;else break}for(_>>=m;_>0;){var M=s[n].s;p[M]<e?_-=1<<e-p[M]++-1:++n}for(;n>=0&&_;--n){var x=s[n].s;p[x]==e&&(--p[x],++_)}g=e}return{t:new ct(p),l:g}},mo=function(i,e,t){return i.s==-1?Math.max(mo(i.l,e,t+1),mo(i.r,e,t+1)):e[i.s]=t},Uc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new dn(++e),n=0,r=i[0],s=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Gr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Gc=function(i,e,t){var n=t.length,r=Zr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Dc=function(i,e,t,n,r,s,a,o,c,l,u){si(e,u++,t),++r[256];for(var f=fo(r,15),h=f.t,p=f.l,g=fo(s,15),_=g.t,m=g.l,d=Uc(h),b=d.c,M=d.n,x=Uc(_),S=x.c,v=x.n,w=new dn(19),y=0;y<b.length;++y)++w[b[y]&31];for(var y=0;y<S.length;++y)++w[S[y]&31];for(var E=fo(w,7),R=E.t,C=E.l,O=19;O>4&&!R[Js[O-1]];--O);var k=l+5<<3,N=Gr(r,Si)+Gr(s,Wr)+a,H=Gr(r,h)+Gr(s,_)+a+14+3*O+Gr(w,R)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&k<=N&&k<=H)return Gc(e,u,i.subarray(c,c+l));var L,I,W,F;if(si(e,u,1+(H<N)),u+=2,H<N){L=kn(h,p,0),I=h,W=kn(_,m,0),F=_;var U=kn(R,C,0);si(e,u,M-257),si(e,u+5,v-1),si(e,u+10,O-4),u+=14;for(var y=0;y<O;++y)si(e,u+3*y,R[Js[y]]);u+=3*O;for(var V=[b,S],le=0;le<2;++le)for(var fe=V[le],y=0;y<fe.length;++y){var de=fe[y]&31;si(e,u,U[de]),u+=R[de],de>15&&(si(e,u,fe[y]>>5&127),u+=fe[y]>>12)}}else L=Vf,I=Si,W=Wf,F=Wr;for(var y=0;y<o;++y){var Y=n[y];if(Y>255){var de=Y>>18&31;Vr(e,u,L[de+257]),u+=I[de+257],de>7&&(si(e,u,Y>>23&31),u+=qr[de]);var ce=Y&31;Vr(e,u,W[ce]),u+=F[ce],ce>3&&(Vr(e,u,Y>>5&8191),u+=Yr[ce])}else Vr(e,u,L[Y]),u+=I[Y]}return Vr(e,u,L[256]),u+I[256]},Yf=new ta([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yi=new ct(0),Zf=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ct(n+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(n,o.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var f=Yf[e-1],h=f>>13,p=f&8191,g=(1<<t)-1,_=s.p||new dn(32768),m=s.h||new dn(g+1),d=Math.ceil(t/3),b=2*d,M=function(Ne){return(i[Ne]^i[Ne+1]<<d^i[Ne+2]<<b)&g},x=new ta(25e3),S=new dn(288),v=new dn(32),w=0,y=0,E=s.i||0,R=0,C=s.w||0,O=0;E+2<a;++E){var k=M(E),N=E&32767,H=m[k];if(_[N]=H,m[k]=N,C<=E){var L=a-E;if((w>7e3||R>24576)&&(L>423||!l)){u=Dc(i,c,0,x,S,v,y,R,O,E-O,u),R=w=y=0,O=E;for(var I=0;I<286;++I)S[I]=0;for(var I=0;I<30;++I)v[I]=0}var W=2,F=0,U=p,V=N-H&32767;if(L>2&&k==M(E-V))for(var le=Math.min(h,L)-1,fe=Math.min(32767,E),de=Math.min(258,L);V<=fe&&--U&&N!=H;){if(i[E+W]==i[E+W-V]){for(var Y=0;Y<de&&i[E+Y]==i[E+Y-V];++Y);if(Y>W){if(W=Y,F=V,Y>le)break;for(var ce=Math.min(V,Y-2),z=0,I=0;I<ce;++I){var j=E-V+I&32767,ye=_[j],De=j-ye&32767;De>z&&(z=De,H=j)}}}N=H,H=_[N],V+=N-H&32767}if(F){x[R++]=268435456|po[W]<<18|Nc[F];var xe=po[W]&31,me=Nc[F]&31;y+=qr[xe]+Yr[me],++S[257+xe],++v[me],C=E+W,++w}else x[R++]=i[E],++S[i[E]]}}for(E=Math.max(E,C);E<a;++E)x[R++]=i[E],++S[i[E]];u=Dc(i,c,l,x,S,v,y,R,O,E-O,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=_,s.i=E,s.w=C)}else{for(var E=s.w||0;E<a+l;E+=65535){var Ae=E+65535;Ae>=a&&(c[u/8|0]=l,Ae=a),u=Gc(c,u+1,i.subarray(E,Ae))}s.i=a}return zn(o,0,n+Zr(u)+r)},Kf=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Kr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Kf[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},bo=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},ur=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ct(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Zf(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},ia=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Ff=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var f in o.prototype)e+=";"+c+".prototype."+f+"="+o.prototype[f].toString()}else e+=l}else t[c]=o}return e},co=[],bg=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},$f=function(i,e,t,n){if(!co[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Ff(i[o],r,s);co[t]={c:Ff(i[a],r,s),e:s}}var c=ia({},co[t].e);return _g(co[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,bg(c),n)},$r=function(){return[ct,dn,ta,qr,Yr,Js,Vc,Hf,Gf,Xf,Qs,qf,kn,uo,Bn,ho,Zr,zn,Je,na,es,$i,Wc]},jr=function(){return[ct,dn,ta,qr,Yr,Js,po,Nc,Vf,Si,Wf,Wr,Qs,Yf,Yi,kn,si,Vr,fo,mo,Uc,Gr,Gc,Dc,Zr,zn,Zf,ur,ra,$i]},jf=function(){return[Xc,Yc,_t,Kr,Kf]},Jf=function(){return[qc,td]},Qf=function(){return[Zc,_t,bo]},ed=function(){return[Kc]},$i=function(i){return postMessage(i,[i.buffer])},Wc=function(i){return i&&{out:i.size&&new ct(i.size),dictionary:i.dictionary}},Jr=function(i,e,t,n,r,s){var a=$f(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Vn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},Qr=function(i,e,t,n,r,s,a){var o,c=$f(i,n,r,function(l,u){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&c.terminate(),e.ondata.call(e,l,u[0],u[1])):a(u)});c.postMessage(t),e.queuedSize=0,e.push=function(l,u){e.ondata||Je(5),o&&e.ondata(Je(4,0,1),null,!!u),e.queuedSize+=l.length,c.postMessage([l,o=u],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},fn=function(i,e){return i[e]|i[e+1]<<8},kt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Lc=function(i,e){return kt(i,e)+kt(i,e+4)*4294967296},_t=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Xc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&_t(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},qc=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Je(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},td=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Yc=function(i){return 10+(i.filename?i.filename.length+1:0)},Zc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=bo();r.p(e.dictionary),_t(i,2,r.d())}},Kc=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Je(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Je(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};Hn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ct(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(ur(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||Je(5),this.s.l&&Je(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ct(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||Je(5),this.s.l&&Je(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),nd=(function(){function i(e,t){Qr([jr,function(){return[Vn,Hn]}],this,hr.call(this,e,t),function(n){var r=new Hn(n.data);onmessage=Vn(r)},6,1)}return i})();yn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ct(32768),this.p=new ct(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||Je(5),this.d&&Je(4),!this.p.length)this.p=e;else if(e.length){var t=new ct(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=na(this.p,this.s,this.o);this.ondata(zn(n,t,this.s.b),this.d),this.o=zn(n,this.s.b-32768),this.s.b=this.o.length,this.p=zn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),$c=(function(){function i(e,t){Qr([$r,function(){return[Vn,yn]}],this,hr.call(this,e,t),function(n){var r=new yn(n.data);onmessage=Vn(r)},7,0)}return i})();Fc=(function(){function i(e,t){this.c=Kr(),this.l=0,this.v=1,Hn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,Hn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ur(e,this.o,this.v&&Yc(this.o),t&&8,this.s);this.v&&(Xc(n,this.o),this.v=0),t&&(_t(n,n.length-8,this.c.d()),_t(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){Hn.prototype.flush.call(this)},i})(),Mg=(function(){function i(e,t){Qr([jr,jf,function(){return[Vn,Hn,Fc]}],this,hr.call(this,e,t),function(n){var r=new Fc(n.data);onmessage=Vn(r)},8,1)}return i})();go=(function(){function i(e,t){this.v=1,this.r=0,yn.call(this,e,t)}return i.prototype.push=function(e,t){if(yn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?qc(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}yn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Zr(this.s.p)+9,this.s={i:0},this.o=new ct(0),this.push(new ct(0),t))},i})(),rd=(function(){function i(e,t){var n=this;Qr([$r,Jf,function(){return[Vn,yn,go]}],this,hr.call(this,e,t),function(r){var s=new go(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Vn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Bc=(function(){function i(e,t){this.c=bo(),this.v=1,Hn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),Hn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=ur(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Zc(n,this.o),this.v=0),t&&_t(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){Hn.prototype.flush.call(this)},i})(),wg=(function(){function i(e,t){Qr([jr,Qf,function(){return[Vn,Hn,Bc]}],this,hr.call(this,e,t),function(n){var r=new Bc(n.data);onmessage=Vn(r)},10,1)}return i})();yo=(function(){function i(e,t){yn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(yn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Kc(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&Je(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),yn.prototype.c.call(this,t)},i})(),ad=(function(){function i(e,t){Qr([$r,ed,function(){return[Vn,yn,yo]}],this,hr.call(this,e,t),function(n){var r=new yo(n.data);onmessage=Vn(r)},11,0)}return i})();zc=(function(){function i(e,t){this.o=hr.call(this,e,t)||{},this.G=go,this.I=yn,this.Z=yo}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||Je(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),Tg=(function(){function i(e,t){zc.call(this,e,t),this.queuedSize=0,this.G=rd,this.I=$c,this.Z=ad}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,zc.prototype.push.call(this,e,t)},i})();Jc=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=ia(n,s[1]),s=s[0]),s instanceof ct?t[a]=[s,o]:(t[a+="/"]=[new ct(0),o],Jc(s,a,t,n))}},Of=typeof TextEncoder<"u"&&new TextEncoder,Hc=typeof TextDecoder<"u"&&new TextDecoder,ld=0;try{Hc.decode(Yi,{stream:!0}),ld=1}catch{}cd=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:zn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Cg=(function(){function i(e){this.ondata=e,ld?this.t=new TextDecoder:this.p=Yi}return i.prototype.push=function(e,t){if(this.ondata||Je(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&Je(8),this.t=null);return}this.p||Je(4);var n=new ct(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=cd(n),s=r.s,a=r.r;t?(a.length&&Je(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),Ig=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||Je(5),this.d&&Je(4),this.ondata(Ki(e),this.d=t||!1)},i})();ud=function(i){return i==1?3:i<6?2:i==9?1:0},hd=function(i,e){return e+30+fn(i,e+26)+fn(i,e+28)},fd=function(i,e,t){var n=fn(i,e+28),r=Qc(i.subarray(e+46,e+46+n),!(fn(i,e+8)&2048)),s=e+46+n,a=kt(i,e+20),o=t&&a==4294967295?dd(i,s):[a,kt(i,e+24),kt(i,e+42)],c=o[0],l=o[1],u=o[2];return[fn(i,e+10),c,l,r,s+fn(i,e+30)+fn(i,e+32),u]},dd=function(i,e){for(;fn(i,e)!=1;e+=4+fn(i,e+2));return[Lc(i,e+12),Lc(i,e+4),Lc(i,e+20)]},Zi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Je(9),e+=n+4}return e},Xr=function(i,e,t,n,r,s,a,o){var c=n.length,l=t.extra,u=o&&o.length,f=Zi(l);_t(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),p=h.getFullYear()-1980;if((p<0||p>119)&&Je(10),_t(i,e,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,s!=-1&&(_t(i,e,t.crc),_t(i,e+4,s<0?-s-2:s),_t(i,e+8,t.size)),_t(i,e+12,c),_t(i,e+14,f),e+=16,a!=null&&(_t(i,e,u),_t(i,e+6,t.attrs),_t(i,e+10,a),e+=14),i.set(n,e),e+=c,f)for(var g in l){var _=l[g],m=_.length;_t(i,e,+g),_t(i,e+2,m),i.set(_,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},eu=function(i,e,t,n,r){_t(i,e,101010256),_t(i,e+8,t),_t(i,e+10,t),_t(i,e+12,n),_t(i,e+16,r)},ea=(function(){function i(e){this.filename=e,this.c=Kr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||Je(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),Pg=(function(){function i(e,t){var n=this;t||(t={}),ea.call(this,e),this.d=new Hn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=ud(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ea.prototype.push.call(this,e,t)},i})(),Lg=(function(){function i(e,t){var n=this;t||(t={}),ea.call(this,e),this.d=new nd(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=ud(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ea.prototype.push.call(this,e,t)},i})(),Ng=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||Je(5),this.d&2)this.ondata(Je(4+(this.d&1)*8,0,1),null,!1);else{var n=Ki(e.filename),r=n.length,s=e.comment,a=s&&Ki(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Zi(e.extra)+30;r>65535&&this.ondata(Je(11,0,1),null,!1);var l=new ct(c);Xr(l,0,e,n,o,-1);var u=[l],f=function(){for(var m=0,d=u;m<d.length;m++){var b=d[m];t.ondata(null,b,!1)}u=[]},h=this.d;this.d=0;var p=this.u.length,g=ia(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),h){var m=t.u[p+1];m?m.r():t.d=1}h=1}}),_=0;e.ondata=function(m,d,b){if(m)t.ondata(m,d,b),t.terminate();else if(_+=d.length,u.push(d),b){var M=new ct(16);_t(M,0,134695760),_t(M,4,e.crc),_t(M,8,_),_t(M,12,e.size),u.push(M),g.c=_,g.b=c+_+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&f()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Je(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+Zi(a.extra)+(a.o?a.o.length:0)}for(var o=new ct(n+22),c=0,l=this.u;c<l.length;c++){var a=l[c];Xr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Zi(a.extra)+(a.o?a.o.length:0),t+=a.b}eu(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();pd=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Fg=(function(){function i(){var e=this;this.i=new yn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Og=(function(){function i(e,t){var n=this;t<32e4?this.i=new yn(function(r,s){n.ondata(null,r,s)}):(this.i=new $c(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=zn(e,0)),this.i.push(e,t)},i.compression=8,i})(),Bg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:pd},this.p=Yi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||Je(5),this.p||Je(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ct(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,f=this.c,h=f&&this.d,p=function(){var d,b=kt(l,o);if(b==67324752){a=1,c=o,g.d=null,g.c=0;var M=fn(l,o+6),x=fn(l,o+8),S=M&2048,v=M&8,w=fn(l,o+26),y=fn(l,o+28);if(u>o+30+w+y){var E=[];g.k.unshift(E),a=2;var R=kt(l,o+18),C=kt(l,o+22),O=Qc(l.subarray(o+30,o+=30+w),!S);R==4294967295?(d=v?[-2]:dd(l,o),R=d[0],C=d[1]):v&&(R=-1),o+=y,g.c=R;var k,N={name:O,compression:x,start:function(){if(N.ondata||Je(5),!R)N.ondata(null,Yi,!0);else{var H=n.o[x];H||N.ondata(Je(14,"unknown compression type "+x,1),null,!1),k=R<0?new H(O):new H(O,R,C),k.ondata=function(F,U,V){N.ondata(F,U,V)};for(var L=0,I=E;L<I.length;L++){var W=I[L];k.push(W,!1)}n.k[0]==E&&n.c?n.d=k:k.push(Yi,!0)}},terminate:function(){k&&k.terminate&&k.terminate()}};R>=0&&(N.size=R,N.originalSize=C),g.onfile(N)}return"break"}else if(f){if(b==134695760)return c=o+=12+(f==-2&&8),a=3,g.c=0,"break";if(b==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var _=p();if(_==="break")break}if(this.p=Yi,f<0){var m=a?l.subarray(0,c-12-(f==-2&&8)-(kt(l,c-16)==134695760&&4)):l.subarray(0,o);h?h.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&Je(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),vo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function oo(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function Tf(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=oo(i,t),i.start=t,i.rate=e)}function Af(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(l,u,f,h){return Number.isFinite(l)?Math.max(u,Math.min(f,l)):h}function a(l){let u={tempo:s(l.tempo,.5,1.5,t.tempo),amplitude:s(l.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let f of Object.keys(r))r[f].input.value=t[f],r[f].output.textContent=t[f].toFixed(2)+"\xD7"}try{let l=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(l.tempo,.5,1.5,1),amplitude:s(l.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function c(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let l=document.createElement("h3");l.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(l);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[f,h,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let _=document.createElement("label"),m=document.createElement("span"),d=document.createElement("output"),b=document.createElement("input");m.textContent=h+" ",d.textContent=t[f].toFixed(2)+"\xD7",b.type="range",b.min=p,b.max=g,b.step=.05,b.value=t[f],b.style.cssText="display:block;width:100%;margin:14px 0",b.setAttribute("aria-label",h),b.oninput=()=>a({...t,[f]:Number(b.value)}),_.append(m,d,b),n.append(_),r[f]={input:b,output:d}}for(let[f,h]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=f,p.onclick=h,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:c,close:o}}function Rf(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function c(){let d=i.lightingState();for(let[b,M]of r)M.value=d[b];a&&(a.checked=d.shadows),o&&(o.value=d.shadowSize)}function l(d){i.setLighting(d),localStorage.setItem(e,JSON.stringify(i.lightingState())),c()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[d,b,M,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let S=document.createElement("label");S.textContent=b;let v=document.createElement("input");v.id="lighting_"+d,v.type="range",v.min=M,v.max=x,v.step=".01",v.style.width="100%",v.oninput=()=>l({[d]:Number(v.value)}),r.set(d,v),S.append(v),t.append(S)}for(let[d,b]of[["\u6062\u590D\u67D4\u5149",()=>l(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let M=document.createElement("button");M.textContent=d,M.onclick=b,t.append(M)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>l({shadows:a.checked}),u.append(a),t.append(u);let f=document.createElement("label");f.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");h.id="lighting_resolution",h.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),f.append(h),t.append(f),o=document.createElement("select"),o.id="lighting_shadowSize";for(let d of[512,1024,2048])o.add(new Option(d+" \xB7 \u9634\u5F71",String(d)));o.value=i.lightingState().shadowSize,o.onchange=()=>l({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[d,b]of[["quality","\u6027\u80FD\u6A21\u5F0F \xB7 60\u5E27\u6EE1\u753B\u8D28 / 1G\u663E\u5B58"],["adaptive","\u666E\u901A\u6A21\u5F0F \xB7 \u667A\u80FD\u5E73\u8861 / 512M\u663E\u5B58"],["battery","\u7701\u7535\u6A21\u5F0F \xB7 30\u5E27\u4F4E\u8017 / 192M\u663E\u5B58"]])p.add(new Option(b,d));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let _=()=>{let d=i.performanceState(),b=i.textureBudgetState?.(),M=d.mode==="quality"?"\u6027\u80FD\u6A21\u5F0F":d.mode==="battery"?"\u7701\u7535\u6A21\u5F0F":"\u666E\u901A\u6A21\u5F0F";g.textContent=`GPU \u6E32\u67D3 \xB7 ${M} \xB7 ${d.fps}\u5E27\uFF08\u76EE\u6807${d.targetFPS}\uFF09
\u7F13\u51B2 ${d.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${d.pixelRatio.toFixed(2)}
\u8D34\u56FE\u9884\u7B97 ${b?`${b.estimatedMiB}/${b.budgetMiB} MiB`:"\u2014"} \xB7 \u9634\u5F71 ${i.lightingState().shadowMapSize}px
\u7ED8\u5236 ${d.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${d.triangles}
\u70ED\u72B6\u6001 ${d.thermal} \xB7 ${d.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}`},m=setInterval(()=>{t.hidden||_()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),c(),{toggle(){t.hidden=!t.hidden,_()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function Cf(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var mg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ri=(i,e)=>i>>>e|i<<32-e;function gg(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let d=t[m-15],b=t[m-2];t[m]=(ri(d,7)^ri(d,18)^d>>>3)+t[m-16]+(ri(b,17)^ri(b,19)^b>>>10)+t[m-7]}let[o,c,l,u,f,h,p,g]=e;for(let m=0;m<64;m++){let d=g+(ri(f,6)^ri(f,11)^ri(f,25))+(f&h^~f&p)+mg[m]+t[m]>>>0,b=(ri(o,2)^ri(o,13)^ri(o,22))+(o&c^o&l^c&l)>>>0;g=p,p=h,h=f,f=u+d>>>0,u=l,l=c,c=o,o=d+b>>>0}let _=[o,c,l,u,f,h,p,g];for(let m=0;m<8;m++)e[m]+=_[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function Rc(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):gg(i)}var Hr={entries:1024,file:128*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},If=new TextDecoder("utf-8",{fatal:!0});function Pf(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=Hr.archive,n=Hr.total){if(![Hr.total,192*1024*1024,384*1024*1024,1536*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![Hr.archive,128*1024*1024,256*1024*1024,1024*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let p=i.length-22;p>=Math.max(0,i.length-65557);p--)if(r.getUint32(p,!0)===101010256&&p+22+r.getUint16(p+20,!0)===i.length){s=p;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),c=r.getUint32(s+12,!0);if(!a||a>Hr.entries||o+c!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let l=new Set,u=new Map,f=o,h=0;for(let p=0;p<a;p++){if(f+46>s||r.getUint32(f,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let g=r.getUint16(f+8,!0),_=r.getUint16(f+10,!0),m=r.getUint16(f+28,!0),d=r.getUint16(f+30,!0),b=r.getUint16(f+32,!0),M=r.getUint32(f+24,!0);if(f+46+m+d+b>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let x=If.decode(i.subarray(f+46,f+46+m));if(!Cf(x)||l.has(x)||!e.test(x))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");l.add(x),h+=M;let S=r.getUint32(f+38,!0)>>>16;if(g&1||![0,8].includes(_)||(S&61440)===40960||M>Hr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(x==="manifest.json"&&M>1024*1024)throw new Error("manifest \u8FC7\u5927");let v=r.getUint32(f+42,!0);if(v+30>o||r.getUint32(v,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let w=r.getUint16(v+26,!0),y=r.getUint16(v+28,!0),E=r.getUint32(f+20,!0);if(v+30+w+y+E>o||If.decode(i.subarray(v+30,v+30+w))!==x)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u.set(x,{offset:v+30+w+y,compressed:E,original:M,method:_}),f+=46+m+d+b}if(f!==s||!l.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:l,total:h,entries:u}}var Cc=/^[a-zA-Z0-9_-]{1,96}$/,xg=/^[a-f0-9]{64}$/,yg=new Set(["geometry","animation","texture","audio","config"]);function lo(i){if(i?.schema!=="snowbreak-skin/1"||!Cc.test(i.characterId)||!Cc.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Cc.test(n.role)||e.has(n.role)||!xg.test(n.assetId)||!yg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function Ic({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let f=await Promise.allSettled(u.map(({asset:h,descriptor:p})=>Promise.resolve().then(()=>e(h,p))));for(let h of f)if(h.status==="rejected")try{t(h.reason)}catch{}}async function c(u){if(a)throw new Error("Runtime disposed");let f=lo(u),h=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(f.resources.map(b=>Promise.resolve().then(()=>i(b,{signal:p.signal})))),_=g.flatMap((b,M)=>b.status==="fulfilled"?[{asset:b.value,descriptor:f.resources[M]}]:[]),m=g.find(b=>b.status==="rejected");if(h!==n||a||m){if(await o(_),h===n&&(s=null),h!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let d=r;return r={manifest:f,resources:_},s=null,d&&await o(d.resources),h!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:f.characterId,skinId:f.skinId}}async function l(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:c,clear:l,getAsset:u=>r?.resources.find(f=>f.descriptor.role===u)?.asset,async dispose(){a=!0,await l()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Lf(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let c=e.getUint32(o),l=e.getUint32(o+4,!0),u=o+8;if(u+l>i.length)throw new Error("WebP chunk outside asset");if(c===1095649613||c===1095650630)throw new Error("Animated textures are not supported");if(c===1448097880){if(l!==10||i[u]&2)throw new Error("Invalid WebP canvas");let f=h=>i[h]|i[h+1]<<8|i[h+2]<<16;a=[f(u+4)+1,f(u+7)+1]}if(c===1448097868){if(s||l<5||i[u]!==47)throw new Error("Invalid lossless WebP");let f=e.getUint32(u+1,!0);if(f>>>29)throw new Error("Unknown WebP version");s=[(f&16383)+1,(f>>>14&16383)+1]}o=u+l+(l&1)}if(o!==i.length||!s||a&&a.some((c,l)=>c!==s[l]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Nf(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),l=>l.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let c=new Float32Array(o.buffer);if(!c.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(l,u)=>c.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Uf={geometry:64,animation:64,texture:32,audio:16,config:8};function Pc(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Uf,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Uf[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await Rc(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let c=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||c>s.length-20)throw new Error("Invalid GLB JSON");let l=JSON.parse(new TextDecoder().decode(s.subarray(20,20+c)));if((l.buffers||[]).some(u=>u.uri)||(l.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Lf(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Nf(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}function xd(i,e){let t=null;if(i.schema==="snowbreak-collection/1"){if(!/^[A-Za-z0-9_-]{1,64}$/.test(i.characterId)||!Array.isArray(i.variants)||![1,2,4].includes(i.variants.length))throw new Error("Invalid character collection");let s=new Set;if(t=i.variants.map(a=>{if(!["standing","interaction"].includes(a.mode)||!["normal","nude","underwear","lv2"].includes(a.outfit)||a.id!==a.mode+"_"+a.outfit||s.has(a.id))throw new Error("Invalid collection variant");return s.add(a.id),{...a,manifest:lo(a.manifest)}}),!s.has(i.defaultVariant)||t.some(a=>a.manifest.characterId!==i.characterId))throw new Error("Invalid collection default")}let n=t?t.map(s=>s.manifest):[lo(i)],r=new Set(["manifest.json",...n.flatMap(s=>s.resources.map(a=>"assets/"+a.assetId))]);if(r.size!==e.size||[...r].some(s=>!e.has(s)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");return{variants:t,manifests:n}}async function yd(i){let e=await fetch("companion-snowbreak://local/pkg-index/"+encodeURIComponent(i));if(!e.ok)throw new Error("\u6D41\u5F0F\u89D2\u8272\u5305\u7D22\u5F15\u8BFB\u53D6\u5931\u8D25");let t=await e.json();if(!Array.isArray(t.names)||!t.manifest||typeof t.total!="number"||t.total>1536*1024*1024)throw new Error("\u89D2\u8272\u5305\u7D22\u5F15\u683C\u5F0F\u6216\u5927\u5C0F\u975E\u6CD5");let n=t.manifest,{variants:r,manifests:s}=xd(n,new Set(t.names));async function a(l){let u=await fetch("companion-snowbreak://local/pkg-entry/"+encodeURIComponent(i)+"/"+l);if(!u.ok)throw new Error("\u8D44\u6E90\u8BFB\u53D6\u5931\u8D25\uFF1A"+l.slice(0,12));return new Uint8Array(await u.arrayBuffer())}async function o(l){let u=r?.find(p=>p.id===l);if(r&&!u)throw new Error("Variant unavailable");let f=u?.manifest||s[0],h=Ic(Pc(a));return await h.load(f),{runtime:h,manifest:f,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:r?.map(({id:p,mode:g,outfit:_})=>({id:p,mode:g,outfit:_}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(n.characterId.toLowerCase()+"-collection-selection")}catch{}return o(r?.some(l=>l.id===c)?c:n.defaultVariant)}async function _d(i){let e=Pf(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,1073741824,1610612736),{inflateSync:t}=await Promise.resolve().then(()=>(gd(),md));function n(l){let u=e.entries.get(l);if(!u)throw new Error("\u7F3A\u5C11\u8D44\u6E90\uFF1A"+l);let f=i.subarray(u.offset,u.offset+u.compressed),h=u.method===0?f.slice():t(f);if(h.length!==u.original)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");return h}let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n("manifest.json"))),{variants:s,manifests:a}=xd(r,e.names);async function o(l){let u=s?.find(p=>p.id===l);if(s&&!u)throw new Error("Variant unavailable");let f=u?.manifest||a[0],h=Ic(Pc(async p=>n("assets/"+p)));return await h.load(f),{runtime:h,manifest:f,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:s?.map(({id:p,mode:g,outfit:_})=>({id:p,mode:g,outfit:_}))||[],selectVariant:o}}let c;try{c=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return o(s?.some(l=>l.id===c)?c:r.defaultVariant)}function vd(i,e,t=4096,n=null){let r=n==="quality"||n==="performance",s=n==="battery"||n==="powersave",a=s||t===2048?2048:4096,c=(r?1024:s?192:n==="adaptive"||n==="balanced"?512:e.current.characterId==="Fenny"?256:320)*(a===2048&&!s?.5:1)*1024**2,l=new Map,u=r?4096:s?512:1024,f=r?2048:s?512:1024;for(let _ of i?.materials||[])if(_.renderState?.opacity!==0)for(let[m,d]of[["diffuseAssetId",!1],["normalAssetId",!0],["ormAssetId",!0],["hairHighlightAssetId",!0],["faceShadowAssetId",!0]]){let b=_[m];if(!b)continue;let M=(d?"normal:":"")+b,x=e.getAsset("texture_"+b)?.data;if(!x||![x.width,x.height].every(E=>Number.isInteger(E)&&E>0&&E<=4096))throw new Error("Missing texture dimensions");let S=/^(ma_|house_)/i.test(_.name),v=d?10:S?r?150:5:/head|face|eye/i.test(_.name)?1e3:/body00/i.test(_.name)?500:/body01/i.test(_.name)?400:/hair/i.test(_.name)?120:60,w=Math.min(a,d?u:S?f:4096),y=l.get(M);if(y){y.priority=Math.max(y.priority,v),y.cap=Math.max(y.cap,w);continue}l.set(M,{key:M,id:b,normal:d,width:x.width,height:x.height,cap:w,priority:v})}function h(_){let m=Math.min(1,_.cap/Math.max(_.width,_.height));return[Math.max(1,Math.round(_.width*m)),Math.max(1,Math.round(_.height*m))]}let p=_=>{let[m,d]=h(_);return m*d*4*4/3},g=()=>[...l.values()].reduce((_,m)=>_+p(m),0);for(;g()>c;){let _=[...l.values()].filter(m=>m.cap>512&&Math.max(m.width,m.height)>512).map(m=>({e:m,saving:p(m)-p({...m,cap:m.cap/2})})).filter(m=>m.saving>0).sort((m,d)=>m.e.priority/m.saving-d.e.priority/d.saving);if(!_.length)throw new Error("Texture memory budget exceeded");_[0].e.cap/=2}return{limitFor:(_,m=!1)=>l.get((m?"normal:":"")+_)?.cap||1024,snapshot:()=>({requestedLimit:a,budgetMiB:c/1024**2,estimatedMiB:Math.round(g()/1024**2*10)/10,textures:[...l.values()].map(_=>({id:_.id,normal:_.normal,source:[_.width,_.height],size:h(_)}))})}}var Hg={performance:"quality",balanced:"adaptive",powersave:"battery"};function Vg(i){return Hg[i]||(["adaptive","quality","battery"].includes(i)?i:"adaptive")}function bd({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,c=0,l=0,u=0,f=0,h=0,p=0,g=()=>e==="quality"?t==="critical"?30:60:e==="battery"?t==="critical"?20:30:t==="critical"?20:n||t==="serious"?30:60;function _(M,x,S){let v=e==="quality"?9e6:e==="battery"?14e5:45e5,w=e==="quality"?t==="critical"?3e6:v:t==="critical"?12e5:t==="serious"?22e5:v,y=e==="quality"?1:r;return Math.max(.5,Math.min(S||1,3,Math.sqrt(w/Math.max(1,M*x)))*y)}function m(M={}){return M.mode&&(e=Vg(M.mode),e==="quality"&&(r=1)),M.thermal&&["nominal","fair","serious","critical"].includes(M.thermal)&&(t=M.thermal),typeof M.lowPower=="boolean"&&(n=M.lowPower),s=0,a=0,o=0,f=h=0,b()}function d(M=i()){let x=1e3/g();return s&&M-s<x-.75?!1:(s&&M-s<1e3&&(c+=M-s,l++),s=M,o++,a||(a=M),M-a>=2e3&&(u=o*1e3/(M-a),e==="adaptive"&&(f=u<g()*.78?f+1:0,h=u>g()*.94?h+1:0,f>=2&&r>.65?(r=Math.max(.65,r-.1),f=0,p++):h>=4&&r<1&&(r=Math.min(1,r+.05),h=0,p++)),a=M,o=0),!0)}function b(){return{mode:e,thermal:t,lowPower:n,targetFPS:g(),fps:Math.round(u*10)/10,meanFrameMs:l?Math.round(c/l*10)/10:0,scale:r,changes:p}}return{begin:d,configure:m,ratio:_,snapshot:b,resetClock(){s=0,a=0,o=0}}}var op=0,Bu=1,lp=2;var Ua=1,Ml=2,Ds=3,Mn=0,xn=1,tn=2,gi=0,Fs=1,ku=2,zu=3,Hu=4,cp=5;var wr=100,up=101,hp=102,fp=103,dp=104,pp=200,mp=201,gp=202,xp=203,Vu=204,Gu=205,yp=206,_p=207,vp=208,bp=209,Mp=210,Sp=211,wp=212,Ep=213,Tp=214,$o=0,jo=1,Jo=2,gs=3,Qo=4,el=5,tl=6,nl=7,Wu=0,Ap=1,Rp=2,In=0,Xu=1,qu=2,Yu=3,Da=4,Zu=5,Ku=6,$u=7,Eu="attached",Cp="detached",ju=300,sr=301,Er=302,Sl=303,wl=304,Fa=306,Cn=1e3,Wn=1001,xs=1002,Ht=1003,El=1004;var Tr=1005;var Lt=1006,Os=1007;var Jn=1008;var ln=1009,Ju=1010,Qu=1011,Bs=1012,Tl=1013,Qn=1014,Pn=1015,Ln=1016,Al=1017,Rl=1018,ks=1020,eh=35902,th=35899,nh=1021,ih=1022,cn=1023,ci=1026,ar=1027,Cl=1028,Il=1029,or=1030,Pl=1031;var Ll=1033,Oa=33776,Ba=33777,ka=33778,za=33779,Nl=35840,Ul=35841,Dl=35842,Fl=35843,Ol=36196,Bl=37492,kl=37496,zl=37488,Hl=37489,Ha=37490,Vl=37491,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Zl=37813,Kl=37814,$l=37815,jl=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,rc=36494,sc=36495,ac=36283,oc=36284,Va=36285,lc=36286;var xr=2300,yr=2301,Yo=2302,Tu=2303,Au=2400,Ru=2401,Cu=2402,Ip=2500;var rh=0,Ga=1,zs=2,Pp=3200;var cc=0,Lp=1,Nn="",Dt="srgb",gn="srgb-linear",ma="linear",St="srgb";var Zo=7680;var Np=519,Up=512,Dp=513,Fp=514,uc=515,Op=516,Bp=517,hc=518,kp=519,sh=35044,ah=35048;var oh="300 es",$n=2e3,ys=2001;function Gg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){let i=_s("canvas");return i.style.display="block",i}var Md={},vs=null;function ga(...i){let e="THREE."+i.shift();vs?vs("log",e,...i):console.log(e,...i)}function Hp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Hp(i);let e="THREE."+i.shift();if(vs)vs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Hp(i);let e="THREE."+i.shift();if(vs)vs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gr(...i){let e=i.join(" ");e in Md||(Md[e]=!0,Qe(...i))}function Vp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Gp={[$o]:jo,[Jo]:tl,[Qo]:nl,[gs]:el,[jo]:$o,[tl]:Jo,[nl]:Qo,[el]:gs},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,da=Math.PI/180,_r=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function Xg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function qg(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function Yg(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function Zg(i,e=1){return e-Math.abs(lh(i,e*2)-e)}function Kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jg(i,e){return i+Math.random()*(e-i)}function Qg(i){return i*(.5-Math.random())}function e0(i){i!==void 0&&(Sd=i);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t0(i){return i*da}function n0(i){return i*_r}function i0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function r0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee={DEG2RAD:da,RAD2DEG:_r,generateUUID:jn,clamp:gt,euclideanModulo:lh,mapLinear:Xg,inverseLerp:qg,lerp:pa,damp:Yg,pingpong:Zg,smoothstep:Kg,smootherstep:$g,randInt:jg,randFloat:Jg,randFloatSpread:Qg,seededRandom:e0,degToRad:t0,radToDeg:n0,isPowerOfTwo:i0,ceilPowerOfTwo:r0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:a0,normalize:wt,denormalize:Kn},dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var it=dh,He=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+f*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);d=Math.sin(d*b)/M,o=Math.sin(o*b)/M,c=c*d+h*o,l=l*d+p*o,u=u*d+g*o,f=f*d+_*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+g*o,f=f*d+_*o;let b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-o*p,e[t+2]=l*g+u*p+o*h-c*f,e[t+3]=u*g-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var D=ph,tu=new D,wd=new He,mh=class mh{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],b=r[1],M=r[4],x=r[7],S=r[2],v=r[5],w=r[8];return s[0]=a*_+o*b+c*S,s[3]=a*m+o*M+c*v,s[6]=a*d+o*x+c*w,s[1]=l*_+u*b+f*S,s[4]=l*m+u*M+f*v,s[7]=l*d+u*x+f*w,s[2]=h*_+p*b+g*S,s[5]=h*m+p*M+g*v,s[8]=h*d+p*x+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,t)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var lt=mh,nu=new lt,Ed=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o0(){let i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nn?ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var dt=o0();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=_s("canvas")),ts.width=e.width,ts.height=e.height;let r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},l0=0,bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var c0=0,ru=new D,$t=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,r=Wn,s=Lt,a=Jn,o=cn,c=ln,l=i.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=jn(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ju;$t.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,x=(p+1)/2,S=(d+1)/2,v=(u+h)/4,w=(f+_)/4,y=(g+m)/4;return M>x&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=v/n,s=w/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=v/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=y/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var Et=gh,rl=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new $t(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sl=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bl=class bl{constructor(e,t,n,r,s,a,o,c,l,u,f,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,h,p,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,f,h,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){let h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,h0)}lookAt(e,t,n){let r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ji.crossVectors(n,Tn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ji.crossVectors(n,Tn)),ji.normalize(),Mo.crossVectors(Tn,ji),r[0]=ji.x,r[4]=Mo.x,r[8]=Tn.x,r[1]=ji.y,r[5]=Mo.y,r[9]=Tn.y,r[2]=ji.z,r[6]=Mo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],M=n[7],x=n[11],S=n[15],v=r[0],w=r[4],y=r[8],E=r[12],R=r[1],C=r[5],O=r[9],k=r[13],N=r[2],H=r[6],L=r[10],I=r[14],W=r[3],F=r[7],U=r[11],V=r[15];return s[0]=a*v+o*R+c*N+l*W,s[4]=a*w+o*C+c*H+l*F,s[8]=a*y+o*O+c*L+l*U,s[12]=a*E+o*k+c*I+l*V,s[1]=u*v+f*R+h*N+p*W,s[5]=u*w+f*C+h*H+p*F,s[9]=u*y+f*O+h*L+p*U,s[13]=u*E+f*k+h*I+p*V,s[2]=g*v+_*R+m*N+d*W,s[6]=g*w+_*C+m*H+d*F,s[10]=g*y+_*O+m*L+d*U,s[14]=g*E+_*k+m*I+d*V,s[3]=b*v+M*R+x*N+S*W,s[7]=b*w+M*C+x*H+S*F,s[11]=b*y+M*O+x*L+S*U,s[15]=b*E+M*k+x*I+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],b=c*p-l*h,M=o*p-l*f,x=o*h-c*f,S=a*p-l*u,v=a*h-c*u,w=a*f-o*u;return t*(_*b-m*M+d*x)-n*(g*b-m*S+d*v)+r*(g*M-_*S+d*w)-s*(g*x-_*v+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],b=t*o-n*a,M=t*c-r*a,x=t*l-s*a,S=n*c-r*o,v=n*l-s*o,w=r*l-s*c,y=u*_-f*g,E=u*m-h*g,R=u*d-p*g,C=f*m-h*_,O=f*d-p*_,k=h*d-p*m,N=b*k-M*O+x*C+S*R-v*E+w*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return e[0]=(o*k-c*O+l*C)*H,e[1]=(r*O-n*k-s*C)*H,e[2]=(_*w-m*v+d*S)*H,e[3]=(h*v-f*w-p*S)*H,e[4]=(c*R-a*k-l*E)*H,e[5]=(t*k-r*R+s*E)*H,e[6]=(m*x-g*w-d*M)*H,e[7]=(u*w-h*x+p*M)*H,e[8]=(a*O-o*R+l*y)*H,e[9]=(n*R-t*O-s*y)*H,e[10]=(g*v-_*x+d*b)*H,e[11]=(f*x-u*v-p*b)*H,e[12]=(o*E-a*C-c*y)*H,e[13]=(t*C-n*E+r*y)*H,e[14]=(_*M-g*S-m*b)*H,e[15]=(u*S-f*M+h*b)*H,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,g=s*f,_=a*u,m=a*f,d=o*f,b=c*l,M=c*u,x=c*f,S=n.x,v=n.y,w=n.z;return r[0]=(1-(_+d))*S,r[1]=(p+x)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-x)*v,r[5]=(1-(h+d))*v,r[6]=(m+b)*v,r[7]=0,r[8]=(g+M)*w,r[9]=(m-b)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ns.set(r[0],r[1],r[2]).length(),o=ns.set(r[4],r[5],r[6]).length(),c=ns.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);let l=1/a,u=1/o,f=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=$n,c=!1){let l=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===$n)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ys)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$n,c=!1){let l=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===$n)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ys)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bl.prototype.isMatrix4=!0;var qe=bl,ns=new D,qn=new qe,u0=new D(0,0,0),h0=new D(1,1,1),ji=new D,Mo=new D,Tn=new D,Ad=new qe,Rd=new He,Pi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ad,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f0=0,Cd=new D,is=new He,wi=new qe,So=new D,sa=new D,d0=new D,p0=new He,Id=new D(1,0,0),Pd=new D(0,1,0),Ld=new D(0,0,1),Nd={type:"added"},m0={type:"removed"},rs={type:"childadded",child:null},su={type:"childremoved",child:null},Ut=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Pi,n=new He,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new lt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Ld,e)}translateOnAxis(e,t){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(sa,So,this.up):wi.lookAt(So,sa,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),is.setFromRotationMatrix(wi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),rs.child=e,this.dispatchEvent(rs),rs.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,p0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},wo={h:0,s:0,l:0};function au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=lh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=au(a,s,e+1/3),this.g=au(a,s,e),this.b=au(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return dt.workingToColorSpace(an.copy(this),e),Math.round(gt(an.r*255,0,255))*65536+Math.round(gt(an.g*255,0,255))*256+Math.round(gt(an.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(an.copy(this),t);let n=an.r,r=an.g,s=an.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Dt){dt.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,r=an.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(wo);let n=pa(Ji.h,wo.h,t),r=pa(Ji.s,wo.s,t),s=pa(Ji.l,wo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new et;et.NAMES=Wp;var Li=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yn=new D,Ei=new D,ou=new D,Ti=new D,ss=new D,as=new D,Ud=new D,lu=new D,cu=new D,uu=new D,hu=new Et,fu=new Et,du=new Et,oi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yn.subVectors(e,t),r.cross(Yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yn.subVectors(r,t),Ei.subVectors(n,t),ou.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(Ei),c=Yn.dot(ou),l=Ei.dot(Ei),u=Ei.dot(ou),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return hu.setScalar(0),fu.setScalar(0),du.setScalar(0),hu.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hu,s.x),a.addScaledVector(fu,s.y),a.addScaledVector(du,s.z),a}static isFrontFacing(e,t,n,r){return Yn.subVectors(n,t),Ei.subVectors(e,t),Yn.cross(Ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Yn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ss.subVectors(r,n),as.subVectors(s,n),lu.subVectors(e,n);let c=ss.dot(lu),l=as.dot(lu);if(c<=0&&l<=0)return t.copy(n);cu.subVectors(e,r);let u=ss.dot(cu),f=as.dot(cu);if(u>=0&&f<=u)return t.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ss,a);uu.subVectors(e,s);let p=ss.dot(uu),g=as.dot(uu);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(as,o);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ud.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Ud,o);let d=1/(m+_+h);return a=_*d,o=h*d,t.copy(n).addScaledVector(ss,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),To.subVectors(this.max,aa),os.subVectors(e.a,aa),ls.subVectors(e.b,aa),cs.subVectors(e.c,aa),Qi.subVectors(ls,os),er.subVectors(cs,ls),fr.subVectors(os,cs);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-fr.z,fr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,fr.z,0,-fr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-fr.y,fr.x,0];return!pu(t,os,ls,cs,To)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,os,ls,cs,To))?!1:(Ao.crossVectors(Qi,er),t=[Ao.x,Ao.y,Ao.z],pu(t,os,ls,cs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new D,new D,new D,new D,new D,new D,new D,new D],Zn=new D,Eo=new qt,os=new D,ls=new D,cs=new D,Qi=new D,er=new D,fr=new D,aa=new D,To=new D,Ao=new D,dr=new D;function pu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){dr.fromArray(i,s);let o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),c=e.dot(dr),l=t.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Wt=new D,Ro=new it,x0=0,Ot=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mn=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=new qt,oa=new D,mu=new D,_n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(mu)),this.expandByPoint(oa.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_0=0,Gn=new qe,gu=new Ut,us=new D,An=new qt,la=new qt,Kt=new D,Jt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gg(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(An.min,la.min),An.expandByPoint(Kt),Kt.addVectors(An.max,la.max),An.expandByPoint(Kt)):(An.expandByPoint(la.min),An.expandByPoint(la.max))}An.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Kt.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(e,l),Kt.add(us)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new D,c[y]=new D;let l=new D,u=new D,f=new D,h=new it,p=new it,g=new it,_=new D,m=new D;function d(y,E,R){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),u.sub(l),f.sub(l),p.sub(h),g.sub(h);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[y].add(_),o[E].add(_),o[R].add(_),c[y].add(m),c[E].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,E=b.length;y<E;++y){let R=b[y],C=R.start,O=R.count;for(let k=C,N=C+O;k<N;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new D,x=new D,S=new D,v=new D;function w(y){S.fromBufferAttribute(r,y),v.copy(S);let E=o[y];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(v,E);let C=x.dot(c[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,C)}for(let y=0,E=b.length;y<E;++y){let R=b[y],C=R.start,O=R.count;for(let k=C,N=C+O;k<N;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Ot(h,u,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pn=new D,Es=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xu=new D,v0=new D,b0=new lt,Rn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xu.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||b0.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},M0=0,vn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Fs,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new D,yu=new D,Co=new D,Io=new D,ir=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yu.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),Io.copy(this.origin).sub(yu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Co),o=Io.dot(this.direction),c=-Io.dot(Co),l=Io.lengthSq(),u=Math.abs(1-a*a),f,h,p,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yu).addScaledVector(Co,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,d=n.x-a.x,b=n.y-a.y,M=n.z-a.z,x=Math.abs(c),S=Math.abs(l),v=Math.abs(u),w,y,E,R,C,O,k,N,H,L,I,W;if(x>=S&&x>=v?(E=c,O=f,H=g,W=d,c>=0?(w=l,y=u,R=h,C=p,k=_,N=m,L=b,I=M):(w=u,y=l,R=p,C=h,k=m,N=_,L=M,I=b)):S>=v?(E=l,O=h,H=_,W=b,l>=0?(w=u,y=c,R=p,C=f,k=m,N=g,L=M,I=d):(w=c,y=u,R=f,C=p,k=g,N=m,L=d,I=M)):(E=u,O=p,H=m,W=M,u>=0?(w=c,y=l,R=f,C=h,k=g,N=_,L=d,I=b):(w=l,y=c,R=h,C=f,k=_,N=g,L=b,I=d)),E===0)return null;let F=w/E,U=y/E,V=1/E,le=R-F*O,fe=C-U*O,de=k-F*H,Y=N-U*H,ce=L-F*W,z=I-U*W,j=ce*Y-z*de,ye=le*z-fe*ce,De=de*fe-Y*le;if(r){if(j<0||ye<0||De<0)return null}else if((j<0||ye<0||De<0)&&(j>0||ye>0||De>0))return null;let xe=j+ye+De;if(xe===0)return null;let me=V*(j*O+ye*H+De*W);return(xe>0?me<0:me>0)?null:this.at(me/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dd=new qe,pr=new ir,Po=new _n,Fd=new D,Lo=new D,No=new D,Uo=new D,_u=new D,Do=new D,Od=new D,Fo=new D,Ft=class extends Ut{constructor(e=new Jt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],f=s[c];u!==0&&(_u.fromBufferAttribute(f,e),a?Do.addScaledVector(_u,u):Do.addScaledVector(_u.sub(t),u))}t.add(Do)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Po.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Po,Fd)===null||pr.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Dd.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,S=M;x<S;x+=3){let v=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);r=Oo(this,d,e,n,l,u,f,v,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);r=Oo(this,a,e,n,l,u,f,b,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,S=M;x<S;x+=3){let v=x,w=x+1,y=x+2;r=Oo(this,d,e,n,l,u,f,v,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=m,M=m+1,x=m+2;r=Oo(this,a,e,n,l,u,f,b,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function S0(i,e,t,n,r,s,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Mn,o),c===null)return null;Fo.copy(o),Fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Fo);return l<t.near||l>t.far?null:{distance:l,point:Fo.clone(),object:i}}function Oo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Lo),i.getVertexPosition(c,No),i.getVertexPosition(l,Uo);let u=S0(i,e,t,n,Lo,No,Uo,Od);if(u){let f=new D;oi.getBarycoord(Od,Lo,No,Uo,f),r&&(u.uv=oi.getInterpolatedAttribute(r,o,c,l,f,new it)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,c,l,f,new it)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,c,l,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};oi.getNormal(Lo,No,Uo,h.normal),u.face=h,u.barycoord=f}return u}var ca=new Et,Bd=new Et,kd=new Et,w0=new Et,zd=new qe,Bo=new D,vu=new _n,Hd=new qe,bu=new ir,va=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eu,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(r),e.ray.intersectsSphere(vu)!==!1&&(Hd.copy(r).invert(),bu.copy(e.ray).applyMatrix4(Hd),!(this.boundingBox!==null&&bu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Bd.fromBufferAttribute(r.attributes.skinIndex,e),kd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ca.copy(t),t.set(0,0,0,0)):(ca.set(...t,1),t.set(0,0,0)),ca.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=kd.getComponent(s);if(a!==0){let o=Bd.getComponent(s);zd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(w0.copy(ca).applyMatrix4(zd),a)}}return t.isVector4&&(t.w=ca.w),t.applyMatrix4(this.bindMatrixInverse)}},Ts=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},As=class extends $t{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ht,u=Ht,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vd=new qe,E0=new qe,ba=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:E0;Vd.multiplyMatrices(o,t[s]),Vd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new As(t,e,e,cn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Qe("Skeleton: No bone found with UUID:",s),a=new Ts),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Ni=class extends Ot{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hs=new qe,Gd=new qe,ko=[],Wd=new qt,T0=new qe,ua=new Ft,ha=new _n,Ma=class extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,T0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Wd.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),ha.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),Gd.multiplyMatrices(n,hs),ua.matrixWorld=Gd,ua.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){let c=ko[a];c.instanceId=s,c.object=this,t.push(c)}ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(r*this.count),r,this.count,Cl,Pn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mr=new _n,A0=new it(.5,.5),zo=new D,Rs=class{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],b=s[12],M=s[13],x=s[14],S=s[15];if(r[0].setComponents(l-a,p-u,d-g,S-b).normalize(),r[1].setComponents(l+a,p+u,d+g,S+b).normalize(),r[2].setComponents(l+o,p+f,d+_,S+M).normalize(),r[3].setComponents(l-o,p-f,d-_,S-M).normalize(),n)r[4].setComponents(c,h,m,x).normalize(),r[5].setComponents(l-c,p-h,d-m,S-x).normalize();else if(r[4].setComponents(l-c,p-h,d-m,S-x).normalize(),t===$n)r[5].setComponents(l+c,p+h,d+m,S+x).normalize();else if(t===ys)r[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);let t=A0.distanceTo(e.center);return mr.radius=.7071067811865476+t,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new D,ol=new D,Xd=new qe,fa=new ir,Ho=new _n,Mu=new D,qd=new D,vr=class extends Ut{constructor(e=new Jt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)al.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=al.distanceTo(ol);e.setAttribute("lineDistance",new mn(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;Xd.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Xd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){let d=u.getX(_),b=u.getX(_+1),M=Vo(this,e,fa,c,d,b,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),d=Vo(this,e,fa,c,_,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){let d=Vo(this,e,fa,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=Vo(this,e,fa,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vo(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(al.fromBufferAttribute(o,r),ol.fromBufferAttribute(o,s),t.distanceSqToSegment(al,ol,Mu,qd)>n)return;Mu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:qd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yd=new D,Zd=new D,Sa=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Yd.fromBufferAttribute(t,r),Zd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Yd.distanceTo(Zd);e.setAttribute("lineDistance",new mn(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kd=new qe,Iu=new ir,Go=new _n,Wo=new D,Ea=class extends Ut{constructor(e=new Jt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;Kd.copy(r).invert(),Iu.copy(e.ray).applyMatrix4(Kd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,_=p;g<_;g++){let m=l.getX(g);Wo.fromBufferAttribute(f,m),$d(Wo,m,c,r,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,_=p;g<_;g++)Wo.fromBufferAttribute(f,g),$d(Wo,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $d(i,e,t,n,r,s,a){let o=Iu.distanceSqToPoint(i);if(o<t){let c=new D;Iu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ta=class extends $t{constructor(e=[],t=sr,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var rr=class extends $t{constructor(e,t,n=Qn,r,s,a,o=Ht,c=Ht,l,u=ci,f=1){if(u!==ci&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ll=class extends rr{constructor(e,t=Qn,n=sr,r,s,a=Ht,o=Ht,c,l=ci){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ps=class i extends Jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(f,2));function g(_,m,d,b,M,x,S,v,w,y,E){let R=x/w,C=S/y,O=x/2,k=S/2,N=v/2,H=w+1,L=y+1,I=0,W=0,F=new D;for(let U=0;U<L;U++){let V=U*C-k;for(let le=0;le<H;le++){let fe=le*R-O;F[_]=fe*b,F[m]=V*M,F[d]=N,l.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[d]=v>0?1:-1,u.push(F.x,F.y,F.z),f.push(le/w),f.push(1-U/y),I+=1}}for(let U=0;U<y;U++)for(let V=0;V<w;V++){let le=h+V+H*U,fe=h+V+H*(U+1),de=h+(V+1)+H*(U+1),Y=h+(V+1)+H*U;c.push(le,fe,Y),c.push(fe,de,Y),W+=6}o.addGroup(p,W,E),p+=W,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ui=class i extends Jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let b=d*h-a;for(let M=0;M<l;M++){let x=M*f-s;g.push(x,-b,0),_.push(0,0,1),m.push(M/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){let M=b+l*d,x=b+l*(d+1),S=b+1+l*(d+1),v=b+1+l*d;p.push(M,x,v),p.push(x,S,v)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(_,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(jd(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(jd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let r in n)e[r]=n[r]}return e}function jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ch(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Xp={clone:Ar,merge:un},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(r.value);break;case"v2":this.uniforms[n].value=new it().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cl=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},br=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ul=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hl=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function P0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function L0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ru:s=e,o=2*t-n;break;case Cu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ru:a=e,c=2*n-t;break;case Cu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let S=0;S!==o;++S)s[S]=d*a[u+S]+b*a[l+S]+M*a[c+S]+x*a[f+S];return s}},dl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}},pl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends hi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(r-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*_+a[c+m]*g;return s}let h=o*2,p=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],d=p*h+g*2,b=f[d],M=f[d+1],x=e*h+g*2,S=u[x],v=u[x+1],w=U0(n,t,b,S,r);s[g]=qp(w,_,M,v,m)}return s}};function qp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function N0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function U0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=qp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=N0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var bn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ko(e.settings)&&(n.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ko(this.settings)&&(Qd(this.settings.inTangents,e),Qd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){st("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){st("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Wg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){st("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let f=o*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ko(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Qd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=yr;var Di=class extends bn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=xr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends bn{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName="color";var Fi=class extends bn{constructor(e,t,n,r){super(e,t,n,r)}};Fi.prototype.ValueTypeName="number";var gl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)He.slerpFlat(s,0,a,l-o,a,l,c);return s}},fi=class extends bn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends bn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=xr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends bn{constructor(e,t,n,r){super(e,t,n,r)}};Bi.prototype.ValueTypeName="vector";var Ls=class{constructor(e="",t=-1,n=[],r=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(F0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(bn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=P0(c);c=Jd(c,1,u),l=Jd(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let f=u[1],h=r[f];h||(r[f]=h=[]),h.push(l)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function D0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Ra;case"quaternion":return fi;case"bool":case"boolean":return Di;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function F0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=D0(i.type);if(i.times===void 0){let n=[],r=[];L0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ko(i.settings)&&(t.settings={inTangents:nr(i.settings.inTangents,Float32Array),outTangents:nr(i.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ep(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ep(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ep(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yp=new xl,di=class{constructor(e){this.manager=e!==void 0?e:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={},Pu=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=li.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:r});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ci[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0,_=0,m=new ReadableStream({start(d){b();function b(){f.read().then(({done:M,value:x})=>{if(M)d.close();else{_+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let v=0,w=u.length;v<w;v++){let y=u[v];y.onProgress&&y.onProgress(S)}d.enqueue(x),b()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Pu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{li.add(`file:${e}`,l);let u=Ci[e];delete Ci[e];for(let f=0,h=u.length;f<h;f++){let p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let f=0,h=u.length;f<h;f++){let p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fs=new WeakMap,yl=class extends di{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=fs.get(a);f===void 0&&(f=[],fs.set(a,f)),f.push({onLoad:t,onError:r})}return a}let o=_s("img");function c(){u(),t&&t(this);let f=fs.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),li.remove(`image:${e}`);let h=fs.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(f)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var pi=class extends di{constructor(e){super(e)}load(e,t,n,r){let s=new $t,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Mr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ca=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Su=new qe,tp=new D,np=new D,Us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xo=new D,qo=new He,ai=new D,Ia=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,qo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xo,qo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new D,ip=new it,rp=new it,Xt=class extends Ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,ip,rp),t.subVectors(rp,ip)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lu=class extends Us{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Pa=class extends Mr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nu=class extends Us{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends Mr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},mi=class extends Ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uu=class extends Us{constructor(){super(new mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wu=new WeakMap,Na=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{wu.has(a)===!0?(r&&r(wu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return li.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),wu.set(c,l),li.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=-90,ps=1,_l=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(ds,ps,e,t);r.layers=this.layers,this.add(r);let s=new Xt(ds,ps,e,t);s.layers=this.layers,this.add(s);let a=new Xt(ds,ps,e,t);a.layers=this.layers,this.add(a);let o=new Xt(ds,ps,e,t);o.layers=this.layers,this.add(o);let c=new Xt(ds,ps,e,t);c.layers=this.layers,this.add(c);let l=new Xt(ds,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uh="\\[\\]\\.:\\/",O0=new RegExp("["+uh+"]","g"),hh="[^"+uh+"]",B0="[^"+uh.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",hh),z0=/(WCOD+)?/.source.replace("WCOD",B0),H0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),G0=new RegExp("^"+k0+z0+H0+V0+"$"),W0=["material","materials","bones","map"],Du=class{constructor(e,t,n){let r=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){let t=G0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);W0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;st("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Du;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YM=new Float32Array(1);var sp=new qe,Sr=class{constructor(e,t,n=0,r=1/0){this.ray=new ir(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(ap),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fu(e[r],this,n,t);return n.sort(ap),n}};function ap(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Fu(s[a],e,t,!0)}}var xh=class xh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};xh.prototype.isMatrix2=!0;var Ou=xh;function fh(i,e,t,n){let r=X0(n);switch(t){case nh:return i*e;case Cl:return i*e/r.components*r.byteLength;case Il:return i*e/r.components*r.byteLength;case or:return i*e*2/r.components*r.byteLength;case Pl:return i*e*2/r.components*r.byteLength;case ih:return i*e*3/r.components*r.byteLength;case cn:return i*e*4/r.components*r.byteLength;case Ll:return i*e*4/r.components*r.byteLength;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Nl:case Dl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case Bl:case zl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:case Ha:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ic:case rc:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ac:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Va:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(i){switch(i){case ln:case Ju:return{byteLength:1,components:1};case Bs:case Qu:case Ln:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Qn:case Tl:case Pn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function K0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rx=`#ifdef USE_BATCHING
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,Zx=`uniform sampler2D dfgLUT;
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
}`,Kx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dy=`float getShadowMask() {
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,v_=`#define STANDARD
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
}`,b_=`#define STANDARD
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
}`,M_=`#define TOON
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
}`,S_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:$0,alphahash_pars_fragment:j0,alphamap_fragment:J0,alphamap_pars_fragment:Q0,alphatest_fragment:ex,alphatest_pars_fragment:tx,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:rx,batching_vertex:sx,begin_vertex:ax,beginnormal_vertex:ox,bsdfs:lx,iridescence_fragment:cx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:xx,color_vertex:yx,common:_x,cube_uv_reflection_fragment:vx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:wx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Ix,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Nx,fog_pars_vertex:Ux,fog_fragment:Dx,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:zx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:qx,lights_physical_fragment:Yx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Kx,lights_fragment_maps:$x,lights_fragment_end:jx,lightprobes_pars_fragment:Jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:hy,morphtarget_pars_vertex:fy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:My,iridescence_pars_fragment:Sy,opaque_fragment:wy,packing:Ey,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:Ry,dithering_pars_fragment:Cy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Dy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:Zy,worldpos_vertex:Ky,background_vert:$y,background_frag:jy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distance_vert:r_,distance_frag:s_,equirect_vert:a_,equirect_frag:o_,linedashed_vert:l_,linedashed_frag:c_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:f_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:b_,meshtoon_vert:M_,meshtoon_frag:S_,points_vert:w_,points_frag:E_,shadow_vert:T_,shadow_frag:A_,sprite_vert:R_,sprite_frag:C_},Ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},yi={basic:{uniforms:un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:un([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:un([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:un([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:un([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:un([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:un([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:un([Ue.common,Ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:un([Ue.lights,Ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};yi.physical={uniforms:un([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var fc={r:0,b:0,g:0},I_=new qe,gm=new lt;gm.set(-1,0,0,0,1,0,0,0,1);function P_(i,e,t,n,r,s){let a=new et(0),o=r===!0?0:1,c,l,u=null,f=0,h=null;function p(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let x=b.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(b){let M=!1,x=p(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,M){let x=p(M);x&&(x.isCubeTexture||x.mapping===Fa)?(l===void 0&&(l=new Ft(new Ps(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ar(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gm),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ft(new Ui(2,2),new en({name:"BackgroundMaterial",uniforms:Ar(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(fc,ch(i)),t.buffers.color.setClear(fc.r,fc.g,fc.b,M,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:d}}function L_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(C,O,k,N,H){let L=!1,I=f(C,N,k,O);s!==I&&(s=I,l(s.object)),L=p(C,N,k,H),L&&g(C,N,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(C,O,k,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,O,k,N){let H=N.wireframe===!0,L=n[O.id];L===void 0&&(L={},n[O.id]=L);let I=C.isInstancedMesh===!0?C.id:0,W=L[I];W===void 0&&(W={},L[I]=W);let F=W[k.id];F===void 0&&(F={},W[k.id]=F);let U=F[H];return U===void 0&&(U=h(c()),F[H]=U),U}function h(C){let O=[],k=[],N=[];for(let H=0;H<t;H++)O[H]=0,k[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:N,object:C,attributes:{},index:null}}function p(C,O,k,N){let H=s.attributes,L=O.attributes,I=0,W=k.getAttributes();for(let F in W)if(W[F].location>=0){let V=H[F],le=L[F];if(le===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),V===void 0||V.attribute!==le||le&&V.data!==le.data)return!0;I++}return s.attributesNum!==I||s.index!==N}function g(C,O,k,N){let H={},L=O.attributes,I=0,W=k.getAttributes();for(let F in W)if(W[F].location>=0){let V=L[F];V===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(V=C.instanceColor));let le={};le.attribute=V,V&&V.data&&(le.data=V.data),H[F]=le,I++}s.attributes=H,s.attributesNum=I,s.index=N}function _(){let C=s.newAttributes;for(let O=0,k=C.length;O<k;O++)C[O]=0}function m(C){d(C,0)}function d(C,O){let k=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;k[C]=1,N[C]===0&&(i.enableVertexAttribArray(C),N[C]=1),H[C]!==O&&(i.vertexAttribDivisor(C,O),H[C]=O)}function b(){let C=s.newAttributes,O=s.enabledAttributes;for(let k=0,N=O.length;k<N;k++)O[k]!==C[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function M(C,O,k,N,H,L,I){I===!0?i.vertexAttribIPointer(C,O,k,H,L):i.vertexAttribPointer(C,O,k,N,H,L)}function x(C,O,k,N){_();let H=N.attributes,L=k.getAttributes(),I=O.defaultAttributeValues;for(let W in L){let F=L[W];if(F.location>=0){let U=H[W];if(U===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),U!==void 0){let V=U.normalized,le=U.itemSize,fe=e.get(U);if(fe===void 0)continue;let de=fe.buffer,Y=fe.type,ce=fe.bytesPerElement,z=Y===i.INT||Y===i.UNSIGNED_INT||U.gpuType===Tl;if(U.isInterleavedBufferAttribute){let j=U.data,ye=j.stride,De=U.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<F.locationSize;xe++)d(F.location+xe,j.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<F.locationSize;xe++)m(F.location+xe);i.bindBuffer(i.ARRAY_BUFFER,de);for(let xe=0;xe<F.locationSize;xe++)M(F.location+xe,le/F.locationSize,Y,V,ye*ce,(De+le/F.locationSize*xe)*ce,z)}else{if(U.isInstancedBufferAttribute){for(let j=0;j<F.locationSize;j++)d(F.location+j,U.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let j=0;j<F.locationSize;j++)m(F.location+j);i.bindBuffer(i.ARRAY_BUFFER,de);for(let j=0;j<F.locationSize;j++)M(F.location+j,le/F.locationSize,Y,V,le*ce,le/F.locationSize*j*ce,z)}}else if(I!==void 0){let V=I[W];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(F.location,V);break;case 3:i.vertexAttrib3fv(F.location,V);break;case 4:i.vertexAttrib4fv(F.location,V);break;default:i.vertexAttrib1fv(F.location,V)}}}}b()}function S(){E();for(let C in n){let O=n[C];for(let k in O){let N=O[k];for(let H in N){let L=N[H];for(let I in L)u(L[I].object),delete L[I];delete N[H]}}delete n[C]}}function v(C){if(n[C.id]===void 0)return;let O=n[C.id];for(let k in O){let N=O[k];for(let H in N){let L=N[H];for(let I in L)u(L[I].object),delete L[I];delete N[H]}}delete n[C.id]}function w(C){for(let O in n){let k=n[O];for(let N in k){let H=k[N];if(H[C.id]===void 0)continue;let L=H[C.id];for(let I in L)u(L[I].object),delete L[I];delete H[C.id]}}}function y(C){for(let O in n){let k=n[O],N=C.isInstancedMesh===!0?C.id:0,H=k[N];if(H!==void 0){for(let L in H){let I=H[L];for(let W in I)u(I[W].object),delete I[W];delete H[L]}delete k[N],Object.keys(k).length===0&&delete n[O]}}}function E(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function N_(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function U_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&w!==Pn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:v}}function D_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Rn,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:n,M=b*4,x=d.clippingState||null;c.value=x,x=u(g,h,M,p);for(let S=0;S!==M;++S)x[S]=t[S];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Vs=4,F_=6,O_=20,B_=256,Wa=new mi,Zp=new et,yh=null,_h=0,vh=0,bh=!1,k_=new D,Rr=new D,Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=k_}=s;yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,_h,vh),this._renderer.xr.enabled=bh,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ln,format:cn,colorSpace:gn,depthBuffer:!1},r=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z_(s)),this._blurMaterial=V_(s,e,t),this._ggxMaterial=H_(s,e,t)}return r}_compileMaterial(e){let t=new Ft(new Jt,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r,s){let c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Zp),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Ps,new Qt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(Zp),d=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));let S=this._cubeSize;Hs(r,x*S,M>2?S:0,S,S),f.setRenderTarget(r),d&&f.render(_,c),f.render(e,c)}f.toneMapping=p,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,p=f*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Vs?n-g+Vs:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Hs(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,Wa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Hs(e,m,d,3*_,2*_),r.setRenderTarget(e),r.render(o,Wa)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Vs?r-this._lodMax+Vs:0),h=4*(this._cubeSize-u);Hs(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Wa)}};function z_(i){let e=[],t=[],n=i,r=i-Vs+1+F_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,g=new Float32Array(p*h*f),_=new Float32Array(p*h*f);for(let d=0;d<f;d++){let b=d%3*2/3-1,M=d>2?0:-1,x=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(x,p*h*d);for(let S=0;S<h;S++){let v=u[S*2]*2-1,w=u[S*2+1]*2-1;d===0?Rr.set(1,w,v):d===1?Rr.set(-v,1,-w):d===2?Rr.set(-v,w,1):d===3?Rr.set(-1,w,-v):d===4?Rr.set(-v,-1,w):Rr.set(v,w,-1),Rr.toArray(_,(d*h+S)*p)}}let m=new Jt;m.setAttribute("position",new Ot(g,p)),m.setAttribute("outputDirection",new Ot(_,p)),t.push(new Ft(m,null)),n>Vs&&n--}return{lodMeshes:t,sizeLods:e}}function Kp(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function H_(i,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function V_(i,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function $p(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jp(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:gi});s.uniforms.tEquirect.value=t;let a=new Ft(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Lt),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function G_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Sl||p===wl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new pc(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===Sl||p===wl,_=p===sr||p===Er;if(g||_){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Ws(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Ws(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Sl?h.mapping=sr:p===wl&&(h.mapping=Er),h}function c(h){let p=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function l(h){let p=h.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function W_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&gr("WebGLRenderer: "+n+" extension not supported."),r}}}function X_(i,e,t,n){let r={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(p!==null){let b=p.array;_=p.version;for(let M=0,x=b.length;M<x;M+=3){let S=b[M+0],v=b[M+1],w=b[M+2];h.push(S,v,v,w,w,S)}}else{let b=g.array;_=g.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let S=M+0,v=M+1,w=M+2;h.push(S,v,v,w,w,S)}}let m=new(g.count>=65535?_a:ya)(h,1);m.version=_;let d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function q_(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function l(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Y_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Z_(i,e,t){let n=new WeakMap,r=new Et;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let v=new Float32Array(x*S*4*f),w=new xa(v,x,S,f);w.type=Pn,w.needsUpdate=!0;let y=M*4;for(let R=0;R<f;R++){let C=m[R],O=d[R],k=b[R],N=x*S*4*R;for(let H=0;H<C.count;H++){let L=H*y;p===!0&&(r.fromBufferAttribute(C,H),v[N+L+0]=r.x,v[N+L+1]=r.y,v[N+L+2]=r.z,v[N+L+3]=0),g===!0&&(r.fromBufferAttribute(O,H),v[N+L+4]=r.x,v[N+L+5]=r.y,v[N+L+6]=r.z,v[N+L+7]=0),_===!0&&(r.fromBufferAttribute(k,H),v[N+L+8]=r.x,v[N+L+9]=r.y,v[N+L+10]=r.z,v[N+L+11]=k.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new it(x,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function K_(i,e,t,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var $_={[Xu]:"LINEAR_TONE_MAPPING",[qu]:"REINHARD_TONE_MAPPING",[Yu]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[Ku]:"AGX_TONE_MAPPING",[$u]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function j_(i,e,t,n,r,s){let a=new jt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Jt;l.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mn([0,2,0,0,2,0],2));let u=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ft(l,u),h=new mi(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,d=null,b=[],M=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let v=0;v<b.length;v++){let w=b[v];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){b=x,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,v=a.height;b.length>0&&o===null&&(o=new jt(S,v,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new jt(S,v,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let y=b[w];y.setSize&&y.setSize(S,v)}},this.begin=function(x,S){if(_||x.toneMapping===In&&b.length===0)return!1;if(d=S,S!==null){let v=S.width,w=S.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return M===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=In,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=m,_=!0;let v=a,w=o;for(let y=0;y<b.length;y++){let E=b[y];E.enabled!==!1&&(E.render(x,w,v,S),E.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,u.defines={},dt.getTransfer(p)===St&&(u.defines.SRGB_TRANSFER="");let y=$_[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(d),x.render(f,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var xm=new $t,wh=new rr(1,1),ym=new xa,_m=new sl,vm=new Ta,Jp=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xc(i,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;nm.set(n),i.uniformMatrix2fv(this.addr,!1,nm),Zt(t,n)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;tm.set(n),i.uniformMatrix3fv(this.addr,!1,tm),Zt(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;em.set(n),i.uniformMatrix4fv(this.addr,!1,em),Zt(t,n)}}function sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?hc:uc,s=wh):s=xm,t.setTexture2D(e||s,r)}function pv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_m,r)}function mv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vm,r)}function gv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ym,r)}function xv(i){switch(i){case 5126:return J_;case 35664:return Q_;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function yv(i,e){i.uniform1fv(this.addr,e)}function _v(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function vv(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function bv(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Mv(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sv(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wv(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ev(i,e){i.uniform1iv(this.addr,e)}function Tv(i,e){i.uniform2iv(this.addr,e)}function Av(i,e){i.uniform3iv(this.addr,e)}function Rv(i,e){i.uniform4iv(this.addr,e)}function Cv(i,e){i.uniform1uiv(this.addr,e)}function Iv(i,e){i.uniform2uiv(this.addr,e)}function Pv(i,e){i.uniform3uiv(this.addr,e)}function Lv(i,e){i.uniform4uiv(this.addr,e)}function Nv(i,e,t){let n=this.cache,r=e.length,s=xc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=wh:a=xm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Uv(i,e,t){let n=this.cache,r=e.length,s=xc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_m,s[a])}function Dv(i,e,t){let n=this.cache,r=e.length,s=xc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vm,s[a])}function Fv(i,e,t){let n=this.cache,r=e.length,s=xc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ym,s[a])}function Ov(i){switch(i){case 5126:return yv;case 35664:return _v;case 35665:return vv;case 35666:return bv;case 35674:return Mv;case 35675:return Sv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Fv}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function im(i,e){i.seq.push(e),i.map[e.id]=e}function Bv(i,e,t){let n=i.name,r=n.length;for(Mh.lastIndex=0;;){let s=Mh.exec(n),a=Mh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){im(t,l===void 0?new Eh(o,i,e):new Th(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ah(o),im(t,f)),t=f}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Bv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function rm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kv=37297,zv=0;function Hv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var sm=new lt;function Vv(i){dt._getMatrix(sm,dt.workingColorSpace,i);let e=`mat3( ${sm.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ma:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function am(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hv(i.getShaderSource(e),o)}else return s}function Gv(i,e){let t=Vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Wv={[Xu]:"Linear",[qu]:"Reinhard",[Yu]:"Cineon",[Da]:"ACESFilmic",[Ku]:"AgX",[$u]:"Neutral",[Zu]:"Custom"};function Xv(i,e){let t=Wv[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new D;function qv(){dt.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function Zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qa(i){return i!==""}function om(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace($v,Jv)}var jv=new Map;function Jv(i,e){let t=ft[e];if(t===void 0){let n=jv.get(e);if(n!==void 0)t=ft[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rh(t)}var Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(i){return i.replace(Qv,eb)}function eb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var tb={[Ua]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function nb(i){return tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[sr]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function rb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sb={[Er]:"ENVMAP_MODE_REFRACTION"};function ab(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ob={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Rp]:"ENVMAP_BLENDING_ADD"};function lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ob[i.combine]||"ENVMAP_BLENDING_NONE"}function cb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ub(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=nb(t),l=rb(t),u=ab(t),f=lb(t),h=cb(t),p=Yv(t),g=Zv(s),_=r.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),d.length>0&&(d+=`
`)):(m=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),d=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ft.tonemapping_pars_fragment:"",t.toneMapping!==In?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Gv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=Rh(a),a=om(a,t),a=lm(a,t),o=Rh(o),o=om(o,t),o=lm(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=b+m+a,x=b+d+o,S=rm(r,r.VERTEX_SHADER,M),v=rm(r,r.FRAGMENT_SHADER,x);r.attachShader(_,S),r.attachShader(_,v),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(v)||"",H=O.trim(),L=k.trim(),I=N.trim(),W=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,v);else{let U=am(r,S,"vertex"),V=am(r,v,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+U+`
`+V)}else H!==""?Qe("WebGLProgram: Program Info Log:",H):(L===""||I==="")&&(F=!1);F&&(C.diagnostics={runnable:W,programLog:H,vertexShader:{log:L,prefix:m},fragmentShader:{log:I,prefix:d}})}r.deleteShader(S),r.deleteShader(v),y=new Gs(r,_),E=Kv(r,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,kv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=v,this}var hb=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}};function fb(i){return i===or||i===Ha||i===Va}function db(i,e,t,n,r,s){let a=new Ms,o=new Ch,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,E,R,C,O,k){let N=C.fog,H=O.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,W=e.get(y.envMap||L,I),F=W&&W.mapping===Fa?W.image.height:null,U=p[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=V!==void 0?V.length:0,fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let de,Y,ce,z;if(U){let xt=yi[U];de=xt.vertexShader,Y=xt.fragmentShader}else{de=y.vertexShader,Y=y.fragmentShader;let xt=o.getVertexShaderStage(y),ut=o.getFragmentShaderStage(y);o.update(y,xt,ut),ce=xt.id,z=ut.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,me=!!y.map,Ae=!!y.matcap,Ne=!!W,Be=!!y.aoMap,$=!!y.lightMap,J=!!y.bumpMap&&y.wireframe===!1,oe=!!y.normalMap,pe=!!y.displacementMap,_e=!!y.emissiveMap,Oe=!!y.metalnessMap,nt=!!y.roughnessMap,G=y.anisotropy>0,Ge=y.clearcoat>0,Fe=y.dispersion>0,P=y.retroreflectivity>0,T=y.iridescence>0,K=y.sheen>0,Z=y.transmission>0,se=G&&!!y.anisotropyMap,ie=Ge&&!!y.clearcoatMap,X=Ge&&!!y.clearcoatNormalMap,Q=Ge&&!!y.clearcoatRoughnessMap,te=T&&!!y.iridescenceMap,he=T&&!!y.iridescenceThicknessMap,Te=K&&!!y.sheenColorMap,ve=K&&!!y.sheenRoughnessMap,we=!!y.specularMap,ze=!!y.specularColorMap,Ye=!!y.specularIntensityMap,Ke=Z&&!!y.transmissionMap,q=Z&&!!y.thicknessMap,Re=!!y.gradientMap,ue=!!y.alphaMap,Ie=y.alphaTest>0,Se=!!y.alphaHash,ge=!!y.extensions,Ze=In;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Ve={shaderID:U,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:Y,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:me,matcap:Ae,envMap:Ne,envMapMode:Ne&&W.mapping,envMapCubeUVHeight:F,aoMap:Be,lightMap:$,bumpMap:J,normalMap:oe,displacementMap:pe,emissiveMap:_e,normalMapObjectSpace:oe&&y.normalMapType===Lp,normalMapTangentSpace:oe&&y.normalMapType===cc,packedNormalMap:oe&&y.normalMapType===cc&&fb(y.normalMap.format),metalnessMap:Oe,roughnessMap:nt,anisotropy:G,anisotropyMap:se,clearcoat:Ge,clearcoatMap:ie,clearcoatNormalMap:X,clearcoatRoughnessMap:Q,dispersion:Fe,retroreflection:P,iridescence:T,iridescenceMap:te,iridescenceThicknessMap:he,sheen:K,sheenColorMap:Te,sheenRoughnessMap:ve,specularMap:we,specularColorMap:ze,specularIntensityMap:Ye,transmission:Z,transmissionMap:Ke,thicknessMap:q,gradientMap:Re,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ie,alphaHash:Se,combine:y.combine,mapUv:me&&g(y.map.channel),aoMapUv:Be&&g(y.aoMap.channel),lightMapUv:$&&g(y.lightMap.channel),bumpMapUv:J&&g(y.bumpMap.channel),normalMapUv:oe&&g(y.normalMap.channel),displacementMapUv:pe&&g(y.displacementMap.channel),emissiveMapUv:_e&&g(y.emissiveMap.channel),metalnessMapUv:Oe&&g(y.metalnessMap.channel),roughnessMapUv:nt&&g(y.roughnessMap.channel),anisotropyMapUv:se&&g(y.anisotropyMap.channel),clearcoatMapUv:ie&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:X&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(y.sheenRoughnessMap.channel),specularMapUv:we&&g(y.specularMap.channel),specularColorMapUv:ze&&g(y.specularColorMap.channel),specularIntensityMapUv:Ye&&g(y.specularIntensityMap.channel),transmissionMapUv:Ke&&g(y.transmissionMap.channel),thicknessMapUv:q&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(oe||G),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(me||ue),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&oe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:me&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(d(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function d(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let E=p[y.type],R;if(E){let C=yi[E];R=Xp.clone(C.uniforms)}else R=y.uniforms;return R}function x(y,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new ub(i,E,y,r),l.push(R),u.set(E,R)),R}function S(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function v(y){o.remove(y)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:v,programs:l,dispose:w}}function pb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,_,m,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=g,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=d),e++,b}function c(h,p,g,_,m,d,b){b.reversedDepth===!0&&(m=-m);let M=o(h,p,g,_,m,d);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function l(h,p,g,_,m,d){let b=o(h,p,g,_,m,d);g.transmission>0?n.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(h,p){t.length>1&&t.sort(h||mb),n.length>1&&n.sort(p||hm),r.length>1&&r.sort(p||hm)}function f(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function gb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new fm,i.set(n,[a])):r>=s.length?(a=new fm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new et};break;case"SpotLight":t={position:new D,direction:new D,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function yb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _b=0;function vb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bb(i){let e=new xb,t=yb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new qe,a=new qe;function o(l){let u=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,M=0,x=0,S=0,v=0,w=0,y=0,E=0,R=0;l.sort(vb);for(let O=0,k=l.length;O<k;O++){let N=l[O],H=N.color,L=N.intensity,I=N.distance,W=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===or?W=N.shadow.map.texture:W=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=H.r*L,f+=H.g*L,h+=H.b*L;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],L);R++}else if(N.isSunLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,V=t.get(N);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=W;let le=U.getViewportCount();for(let fe=0;fe<le;fe++)n.sunShadowMatrix[_+fe]=U.getMatrix(fe),n.sunShadowCascade[_+fe]=U._cascadeData[fe];_+=le,g++}n.sun[p]=F,p++}else if(N.isDirectionalLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,V=t.get(N);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=F,m++}else if(N.isSpotLight){let F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(H).multiplyScalar(L),F.distance=I,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[b]=F;let U=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,U.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=U.matrix,N.castShadow){let V=t.get(N);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=W,w++}b++}else if(N.isRectAreaLight){let F=e.get(N);F.color.copy(H).multiplyScalar(L),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=F,M++}else if(N.isPointLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){let U=N.shadow,V=t.get(N);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=W,n.pointShadowMatrix[d]=N.shadow.matrix,v++}n.point[d]=F,d++}else if(N.isHemisphereLight){let F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(L),F.groundColor.copy(N.groundColor).multiplyScalar(L),n.hemi[x]=F,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==d||C.spotLength!==b||C.rectAreaLength!==M||C.hemiLength!==x||C.numSunShadows!==g||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==w||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=M,n.point.length=d,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.sunLength=p,C.directionalLength=m,C.pointLength=d,C.spotLength=b,C.rectAreaLength=M,C.hemiLength=x,C.numSunShadows=g,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=w,C.numSpotMaps=y,C.numLightProbes=R,n.version=_b++)}function c(l,u){let f=0,h=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let b=0,M=l.length;b<M;b++){let x=l[b];if(x.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),f++}else if(x.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),h++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(x.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function dm(i){let e=new bb(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Mb(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new dm(i),e.set(r,[o])):s>=a.length?(o=new dm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Tb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],pm=new qe,Xa=new D,Sh=new D;function Ab(i,e,t){let n=new Rs,r=new it,s=new it,a=new Et,o=new ul,c=new hl,l={},u=t.maxTextureSize,f={[Mn]:xn,[xn]:Mn,[tn]:tn},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Sb,fragmentShader:wb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let d=this.type;this.render=function(v,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ml&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=d!==this.type;k&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=v.length;N<H;N++){let L=v[N],I=L.shadow;if(I===void 0){Qe("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let W=I.getFrameExtents();r.multiply(W),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,I.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=F,I.map===null||k===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Ds){if(L.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new jt(r.x,r.y,{format:or,type:Ln,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new rr(r.x,r.y,Pn),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=ci,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ht,I.map.depthTexture.magFilter=Ht}else L.isPointLight?(I.map=new pc(r.x),I.map.depthTexture=new ll(r.x,Qn)):(I.map=new jt(r.x,r.y),I.map.depthTexture=new rr(r.x,r.y,Qn)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=ci,this.type===Ua?(I.map.depthTexture.compareFunction=F?hc:uc,I.map.depthTexture.minFilter=Lt,I.map.depthTexture.magFilter=Lt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ht,I.map.depthTexture.magFilter=Ht);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let U=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();L.isPointLight!==!0&&I.updateMatrices(L,y);for(let V=0;V<U;V++){let le=I.getCamera(V);if(L.isPointLight){let fe=I.camera,de=I.matrix,Y=L.distance||fe.far;Y!==fe.far&&(fe.far=Y,fe.updateProjectionMatrix()),Xa.setFromMatrixPosition(L.matrixWorld),fe.position.copy(Xa),Sh.copy(fe.position),Sh.add(Eb[V]),fe.up.copy(Tb[V]),fe.lookAt(Sh),fe.updateMatrixWorld(),de.makeTranslation(-Xa.x,-Xa.y,-Xa.z),pm.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),I._frustum.setFromProjectionMatrix(pm,fe.coordinateSystem,fe.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,V),i.clear();else{V===0&&(i.setRenderTarget(I.map),i.clear());let fe=I.getViewport(V);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(a)}n=I.getFrustum(V),x(w,y,le,L,this.type)}I.isPointLightShadow!==!0&&this.type===Ds&&b(I,y),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,C)};function b(v,w){let y=e.update(_);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new jt(r.x,r.y,{format:or,type:Ln}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,y,p,_,null)}function M(v,w,y,E){let R=null,C=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=R.uuid,k=w.uuid,N=l[O];N===void 0&&(N={},l[O]=N);let H=N[k];H===void 0&&(H=R.clone(),N[k]=H,w.addEventListener("dispose",S)),R=H}if(R.visible=w.visible,R.wireframe=w.wireframe,E===Ds?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=y}return R}function x(v,w,y,E,R){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Ds)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let k=e.update(v),N=v.material;if(Array.isArray(N)){let H=k.groups;for(let L=0,I=H.length;L<I;L++){let W=H[L],F=N[W.materialIndex];if(F&&F.visible){let U=M(v,F,E,R);v.onBeforeShadow(i,v,w,y,k,U,W),i.renderBufferDirect(y,null,k,U,v,W),v.onAfterShadow(i,v,w,y,k,U,W)}}}else if(N.visible){let H=M(v,N,E,R);v.onBeforeShadow(i,v,w,y,k,H,null),i.renderBufferDirect(y,null,k,H,v,null),v.onAfterShadow(i,v,w,y,k,H,null)}}let O=v.children;for(let k=0,N=O.length;k<N;k++)x(O[k],w,y,E,R)}function S(v){v.target.removeEventListener("dispose",S);for(let y in l){let E=l[y],R=v.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Rb(i,e){function t(){let q=!1,Re=new Et,ue=null,Ie=new Et(0,0,0,0);return{setMask:function(Se){ue!==Se&&!q&&(i.colorMask(Se,Se,Se,Se),ue=Se)},setLocked:function(Se){q=Se},setClear:function(Se,ge,Ze,Ve,xt){xt===!0&&(Se*=Ve,ge*=Ve,Ze*=Ve),Re.set(Se,ge,Ze,Ve),Ie.equals(Re)===!1&&(i.clearColor(Se,ge,Ze,Ve),Ie.copy(Re))},reset:function(){q=!1,ue=null,Ie.set(-1,0,0,0)}}}function n(){let q=!1,Re=!1,ue=null,Ie=null,Se=null;return{setReversed:function(ge){if(Re!==ge){let Ze=e.get("EXT_clip_control");ge?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Re=ge;let Ve=Se;Se=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(ge){ge?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ge){ue!==ge&&!q&&(i.depthMask(ge),ue=ge)},setFunc:function(ge){if(Re&&(ge=Gp[ge]),Ie!==ge){switch(ge){case $o:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=ge}},setLocked:function(ge){q=ge},setClear:function(ge){Se!==ge&&(Se=ge,Re&&(ge=1-ge),i.clearDepth(ge))},reset:function(){q=!1,ue=null,Ie=null,Se=null,Re=!1}}}function r(){let q=!1,Re=null,ue=null,Ie=null,Se=null,ge=null,Ze=null,Ve=null,xt=null;return{setTest:function(ut){q||(ut?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ut){Re!==ut&&!q&&(i.stencilMask(ut),Re=ut)},setFunc:function(ut,Rt,Fn){(ue!==ut||Ie!==Rt||Se!==Fn)&&(i.stencilFunc(ut,Rt,Fn),ue=ut,Ie=Rt,Se=Fn)},setOp:function(ut,Rt,Fn){(ge!==ut||Ze!==Rt||Ve!==Fn)&&(i.stencilOp(ut,Rt,Fn),ge=ut,Ze=Rt,Ve=Fn)},setLocked:function(ut){q=ut},setClear:function(ut){xt!==ut&&(i.clearStencil(ut),xt=ut)},reset:function(){q=!1,Re=null,ue=null,Ie=null,Se=null,ge=null,Ze=null,Ve=null,xt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,b=null,M=null,x=null,S=null,v=null,w=null,y=new et(0,0,0),E=0,R=!1,C=null,O=null,k=null,N=null,H=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,W=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=W>=2);let U=null,V={},le=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),de=new Et().fromArray(le),Y=new Et().fromArray(fe);function ce(q,Re,ue,Ie){let Se=new Uint8Array(4),ge=i.createTexture();i.bindTexture(q,ge),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ue;Ze++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Re+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ge}let z={};z[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(gs),J(!1),oe(Bu),j(i.CULL_FACE),Be(gi);function j(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function ye(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function De(q,Re){return h[q]!==Re?(i.bindFramebuffer(q,Re),h[q]=Re,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function xe(q,Re){let ue=g,Ie=!1;if(q){ue=p.get(Re),ue===void 0&&(ue=[],p.set(Re,ue));let Se=q.textures;if(ue.length!==Se.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ze=Se.length;ge<Ze;ge++)ue[ge]=i.COLOR_ATTACHMENT0+ge;ue.length=Se.length,Ie=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ue)}function me(q){return _!==q?(i.useProgram(q),_=q,!0):!1}let Ae={[wr]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};Ae[fp]=i.MIN,Ae[dp]=i.MAX;let Ne={[pp]:i.ZERO,[mp]:i.ONE,[gp]:i.SRC_COLOR,[Vu]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[Gu]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[_p]:i.ONE_MINUS_DST_ALPHA,[Sp]:i.CONSTANT_COLOR,[wp]:i.ONE_MINUS_CONSTANT_COLOR,[Ep]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(q,Re,ue,Ie,Se,ge,Ze,Ve,xt,ut){if(q===gi){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),q!==cp){if(q!==d||ut!==R){if((b!==wr||S!==wr)&&(i.blendEquation(i.FUNC_ADD),b=wr,S=wr),ut)switch(q){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",q);break}else switch(q){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",q);break}M=null,x=null,v=null,w=null,y.set(0,0,0),E=0,d=q,R=ut}return}Se=Se||Re,ge=ge||ue,Ze=Ze||Ie,(Re!==b||Se!==S)&&(i.blendEquationSeparate(Ae[Re],Ae[Se]),b=Re,S=Se),(ue!==M||Ie!==x||ge!==v||Ze!==w)&&(i.blendFuncSeparate(Ne[ue],Ne[Ie],Ne[ge],Ne[Ze]),M=ue,x=Ie,v=ge,w=Ze),(Ve.equals(y)===!1||xt!==E)&&(i.blendColor(Ve.r,Ve.g,Ve.b,xt),y.copy(Ve),E=xt),d=q,R=!1}function $(q,Re){q.side===tn?ye(i.CULL_FACE):j(i.CULL_FACE);let ue=q.side===xn;Re&&(ue=!ue),J(ue),q.blending===Fs&&q.transparent===!1?Be(gi):Be(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let Ie=q.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),_e(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(q){C!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),C=q)}function oe(q){q!==op?(j(i.CULL_FACE),q!==O&&(q===Bu?i.cullFace(i.BACK):q===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),O=q}function pe(q){q!==k&&(I&&i.lineWidth(q),k=q)}function _e(q,Re,ue){q?(j(i.POLYGON_OFFSET_FILL),(N!==Re||H!==ue)&&(N=Re,H=ue,a.getReversed()&&(Re=-Re),i.polygonOffset(Re,ue))):ye(i.POLYGON_OFFSET_FILL)}function Oe(q){q?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function nt(q){q===void 0&&(q=i.TEXTURE0+L-1),U!==q&&(i.activeTexture(q),U=q)}function G(q,Re,ue){ue===void 0&&(U===null?ue=i.TEXTURE0+L-1:ue=U);let Ie=V[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},V[ue]=Ie),(Ie.type!==q||Ie.texture!==Re)&&(U!==ue&&(i.activeTexture(ue),U=ue),i.bindTexture(q,Re||z[q]),Ie.type=q,Ie.texture=Re)}function Ge(){let q=V[U];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(q){st("WebGLState:",q)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(q){st("WebGLState:",q)}}function T(){try{i.texSubImage2D(...arguments)}catch(q){st("WebGLState:",q)}}function K(){try{i.texSubImage3D(...arguments)}catch(q){st("WebGLState:",q)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(q){st("WebGLState:",q)}}function se(){try{i.compressedTexSubImage3D(...arguments)}catch(q){st("WebGLState:",q)}}function ie(){try{i.texStorage2D(...arguments)}catch(q){st("WebGLState:",q)}}function X(){try{i.texStorage3D(...arguments)}catch(q){st("WebGLState:",q)}}function Q(){try{i.texImage2D(...arguments)}catch(q){st("WebGLState:",q)}}function te(){try{i.texImage3D(...arguments)}catch(q){st("WebGLState:",q)}}function he(q){return f[q]!==void 0?f[q]:i.getParameter(q)}function Te(q,Re){f[q]!==Re&&(i.pixelStorei(q,Re),f[q]=Re)}function ve(q){de.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),de.copy(q))}function we(q){Y.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Y.copy(q))}function ze(q,Re){let ue=l.get(Re);ue===void 0&&(ue=new WeakMap,l.set(Re,ue));let Ie=ue.get(q);Ie===void 0&&(Ie=i.getUniformBlockIndex(Re,q.name),ue.set(q,Ie))}function Ye(q,Re){let Ie=l.get(Re).get(q);c.get(Re)!==Ie&&(i.uniformBlockBinding(Re,Ie,q.__bindingPointIndex),c.set(Re,Ie))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},U=null,V={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,b=null,M=null,x=null,S=null,v=null,w=null,y=new et(0,0,0),E=0,R=!1,C=null,O=null,k=null,N=null,H=null,de.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ye,bindFramebuffer:De,drawBuffers:xe,useProgram:me,setBlending:Be,setMaterial:$,setFlipSided:J,setCullFace:oe,setLineWidth:pe,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:nt,bindTexture:G,unbindTexture:Ge,compressedTexImage2D:Fe,compressedTexImage3D:P,texImage2D:Q,texImage3D:te,pixelStorei:Te,getParameter:he,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:ie,texStorage3D:X,texSubImage2D:T,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:se,scissor:ve,viewport:we,reset:Ke}}function Cb(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return g?new OffscreenCanvas(P,T):_s("canvas")}function m(P,T,K){let Z=1,se=Fe(P);if((se.width>K||se.height>K)&&(Z=K/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(Z*se.width),X=Math.floor(Z*se.height);h===void 0&&(h=_(ie,X));let Q=T?_(ie,X):h;return Q.width=ie,Q.height=X,Q.getContext("2d").drawImage(P,0,0,ie,X),Qe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+X+")."),Q}else return"data"in P&&Qe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function d(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,T,K,Z,se,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X;Z&&(X=e.get("EXT_texture_norm16"),X||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===i.RED&&(K===i.FLOAT&&(Q=i.R32F),K===i.HALF_FLOAT&&(Q=i.R16F),K===i.UNSIGNED_BYTE&&(Q=i.R8),K===i.UNSIGNED_SHORT&&X&&(Q=X.R16_EXT),K===i.SHORT&&X&&(Q=X.R16_SNORM_EXT)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Q=i.R8UI),K===i.UNSIGNED_SHORT&&(Q=i.R16UI),K===i.UNSIGNED_INT&&(Q=i.R32UI),K===i.BYTE&&(Q=i.R8I),K===i.SHORT&&(Q=i.R16I),K===i.INT&&(Q=i.R32I)),T===i.RG&&(K===i.FLOAT&&(Q=i.RG32F),K===i.HALF_FLOAT&&(Q=i.RG16F),K===i.UNSIGNED_BYTE&&(Q=i.RG8),K===i.UNSIGNED_SHORT&&X&&(Q=X.RG16_EXT),K===i.SHORT&&X&&(Q=X.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(Q=i.RG8UI),K===i.UNSIGNED_SHORT&&(Q=i.RG16UI),K===i.UNSIGNED_INT&&(Q=i.RG32UI),K===i.BYTE&&(Q=i.RG8I),K===i.SHORT&&(Q=i.RG16I),K===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),K===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),K===i.UNSIGNED_INT&&(Q=i.RGB32UI),K===i.BYTE&&(Q=i.RGB8I),K===i.SHORT&&(Q=i.RGB16I),K===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),K===i.UNSIGNED_INT&&(Q=i.RGBA32UI),K===i.BYTE&&(Q=i.RGBA8I),K===i.SHORT&&(Q=i.RGBA16I),K===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(K===i.UNSIGNED_SHORT&&X&&(Q=X.RGB16_EXT),K===i.SHORT&&X&&(Q=X.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){let te=ie?ma:dt.getTransfer(se);K===i.FLOAT&&(Q=i.RGBA32F),K===i.HALF_FLOAT&&(Q=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Q=te===St?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&X&&(Q=X.RGBA16_EXT),K===i.SHORT&&X&&(Q=X.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(P,T){let K;return P?T===null||T===Qn||T===ks?K=i.DEPTH24_STENCIL8:T===Pn?K=i.DEPTH32F_STENCIL8:T===Bs&&(K=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qn||T===ks?K=i.DEPTH_COMPONENT24:T===Pn?K=i.DEPTH_COMPONENT32F:T===Bs&&(K=i.DEPTH_COMPONENT16),K}function v(P,T){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ht&&P.minFilter!==Lt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){let T=P.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&f.delete(T)}function y(P){let T=P.target;T.removeEventListener("dispose",y),C(T)}function E(P){let T=n.get(P);if(T.__webglInit===void 0)return;let K=P.source,Z=p.get(K);if(Z){let se=Z[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(P),Object.keys(Z).length===0&&p.delete(K)}n.remove(P)}function R(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let K=P.source,Z=p.get(K);delete Z[T.__cacheKey],a.memory.textures--}function C(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let se=0;se<T.__webglFramebuffer[Z].length;se++)i.deleteFramebuffer(T.__webglFramebuffer[Z][se]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let K=P.textures;for(let Z=0,se=K.length;Z<se;Z++){let ie=n.get(K[Z]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(K[Z])}n.remove(P)}let O=0;function k(){O=0}function N(){return O}function H(P){O=P}function L(){let P=O;return P>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,P}function I(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function W(P,T){let K=n.get(P);if(P.isVideoTexture&&G(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){let Z=P.image;if(Z===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(K,P,T);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function F(P,T){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ye(K,P,T);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function U(P,T){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ye(K,P,T);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function V(P,T){let K=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){De(K,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}let le={[Cn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},fe={[Ht]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},de={[Up]:i.NEVER,[kp]:i.ALWAYS,[Dp]:i.LESS,[uc]:i.LEQUAL,[Fp]:i.EQUAL,[hc]:i.GEQUAL,[Op]:i.GREATER,[Bp]:i.NOTEQUAL};function Y(P,T){if(T.type===Pn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Lt||T.magFilter===Os||T.magFilter===Tr||T.magFilter===Jn||T.minFilter===Lt||T.minFilter===Os||T.minFilter===Tr||T.minFilter===Jn)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,le[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,le[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,le[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ht||T.minFilter!==Tr&&T.minFilter!==Jn||T.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ce(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",w));let Z=T.source,se=p.get(Z);se===void 0&&(se={},p.set(Z,se));let ie=I(T);if(ie!==P.__cacheKey){se[ie]===void 0&&(se[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),se[ie].usedTimes++;let X=se[P.__cacheKey];X!==void 0&&(se[P.__cacheKey].usedTimes--,X.usedTimes===0&&R(T)),P.__cacheKey=ie,P.__webglTexture=se[ie].texture}return K}function z(P,T,K){return Math.floor(Math.floor(P/K)/T)}function j(P,T,K,Z){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,K,Z,T.data);else{ie.sort((Te,ve)=>Te.start-ve.start);let X=0;for(let Te=1;Te<ie.length;Te++){let ve=ie[X],we=ie[Te],ze=ve.start+ve.count,Ye=z(we.start,T.width,4),Ke=z(ve.start,T.width,4);we.start<=ze+1&&Ye===Ke&&z(we.start+we.count-1,T.width,4)===Ye?ve.count=Math.max(ve.count,we.start+we.count-ve.start):(++X,ie[X]=we)}ie.length=X+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Te=0,ve=ie.length;Te<ve;Te++){let we=ie[Te],ze=Math.floor(we.start/4),Ye=Math.ceil(we.count/4),Ke=ze%T.width,q=Math.floor(ze/T.width),Re=Ye,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Ke,q,Re,ue,K,Z,T.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function ye(P,T,K){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);let se=ce(P,T),ie=T.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+K);let X=n.get(ie);if(ie.version!==X.__version||se===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ue=dt.getPrimaries(dt.workingColorSpace),Ie=T.colorSpace===Nn?null:dt.getPrimaries(T.colorSpace),Se=T.colorSpace===Nn||ue===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let te=m(T.image,!1,r.maxTextureSize);te=Ge(T,te);let he=s.convert(T.format,T.colorSpace),Te=s.convert(T.type),ve=x(T.internalFormat,he,Te,T.normalized,T.colorSpace,T.isVideoTexture);Y(Z,T);let we,ze=T.mipmaps,Ye=T.isVideoTexture!==!0,Ke=X.__version===void 0||se===!0,q=ie.dataReady,Re=v(T,te);if(T.isDepthTexture)ve=S(T.format===ar,T.type),Ke&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,he,Te,null));else if(T.isDataTexture)if(ze.length>0){Ye&&Ke&&t.texStorage2D(i.TEXTURE_2D,Re,ve,ze[0].width,ze[0].height);for(let ue=0,Ie=ze.length;ue<Ie;ue++)we=ze[ue],Ye?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,we.width,we.height,he,Te,we.data):t.texImage2D(i.TEXTURE_2D,ue,ve,we.width,we.height,0,he,Te,we.data);T.generateMipmaps=!1}else Ye?(Ke&&t.texStorage2D(i.TEXTURE_2D,Re,ve,te.width,te.height),q&&j(T,te,he,Te)):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,he,Te,te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ye&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ve,ze[0].width,ze[0].height,te.depth);for(let ue=0,Ie=ze.length;ue<Ie;ue++)if(we=ze[ue],T.format!==cn)if(he!==null)if(Ye){if(q)if(T.layerUpdates.size>0){let Se=fh(we.width,we.height,T.format,T.type);for(let ge of T.layerUpdates){let Ze=we.data.subarray(ge*Se/we.data.BYTES_PER_ELEMENT,(ge+1)*Se/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,ge,we.width,we.height,1,he,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,te.depth,he,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ve,we.width,we.height,te.depth,0,we.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,te.depth,he,Te,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ve,we.width,we.height,te.depth,0,he,Te,we.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ye&&Ke&&t.texStorage2D(i.TEXTURE_2D,Re,ve,ze[0].width,ze[0].height);for(let ue=0,Ie=ze.length;ue<Ie;ue++)we=ze[ue],T.format!==cn?he!==null?Ye?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,we.width,we.height,he,we.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ve,we.width,we.height,0,we.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,we.width,we.height,he,Te,we.data):t.texImage2D(i.TEXTURE_2D,ue,ve,we.width,we.height,0,he,Te,we.data)}else if(T.isDataArrayTexture)if(Ye){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ve,te.width,te.height,te.depth),q)if(T.layerUpdates.size>0){let ue=fh(te.width,te.height,T.format,T.type);for(let Ie of T.layerUpdates){let Se=te.data.subarray(Ie*ue/te.data.BYTES_PER_ELEMENT,(Ie+1)*ue/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,te.width,te.height,1,he,Te,Se)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Te,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,he,Te,te.data);else if(T.isData3DTexture)Ye?(Ke&&t.texStorage3D(i.TEXTURE_3D,Re,ve,te.width,te.height,te.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Te,te.data)):t.texImage3D(i.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,he,Te,te.data);else if(T.isFramebufferTexture){if(Ke)if(Ye)t.texStorage2D(i.TEXTURE_2D,Re,ve,te.width,te.height);else{let ue=te.width,Ie=te.height;for(let Se=0;Se<Re;Se++)t.texImage2D(i.TEXTURE_2D,Se,ve,ue,Ie,0,he,Te,null),ue>>=1,Ie>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),f.add(T),ue.onpaint=Ie=>{let Se=Ie.changedElements;for(let ge of f)Se.includes(ge.image)&&(ge.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Se=i.RGBA,ge=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ge,Ze,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ye&&Ke){let ue=Fe(ze[0]);t.texStorage2D(i.TEXTURE_2D,Re,ve,ue.width,ue.height)}for(let ue=0,Ie=ze.length;ue<Ie;ue++)we=ze[ue],Ye?q&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,he,Te,we):t.texImage2D(i.TEXTURE_2D,ue,ve,he,Te,we);T.generateMipmaps=!1}else if(Ye){if(Ke){let ue=Fe(te);t.texStorage2D(i.TEXTURE_2D,Re,ve,ue.width,ue.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,te)}else t.texImage2D(i.TEXTURE_2D,0,ve,he,Te,te);d(T)&&b(Z),X.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function De(P,T,K){if(T.image.length!==6)return;let Z=ce(P,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);let ie=n.get(se);if(se.version!==ie.__version||Z===!0){t.activeTexture(i.TEXTURE0+K);let X=dt.getPrimaries(dt.workingColorSpace),Q=T.colorSpace===Nn?null:dt.getPrimaries(T.colorSpace),te=T.colorSpace===Nn||X===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let he=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let ge=0;ge<6;ge++)!he&&!Te?ve[ge]=m(T.image[ge],!0,r.maxCubemapSize):ve[ge]=Te?T.image[ge].image:T.image[ge],ve[ge]=Ge(T,ve[ge]);let we=ve[0],ze=s.convert(T.format,T.colorSpace),Ye=s.convert(T.type),Ke=x(T.internalFormat,ze,Ye,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,Re=ie.__version===void 0||Z===!0,ue=se.dataReady,Ie=v(T,we);Y(i.TEXTURE_CUBE_MAP,T);let Se;if(he){q&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ke,we.width,we.height);for(let ge=0;ge<6;ge++){Se=ve[ge].mipmaps;for(let Ze=0;Ze<Se.length;Ze++){let Ve=Se[Ze];T.format!==cn?ze!==null?q?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,Ke,Ve.width,Ve.height,0,Ve.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,Ve.width,Ve.height,ze,Ye,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,Ke,Ve.width,Ve.height,0,ze,Ye,Ve.data)}}}else{if(Se=T.mipmaps,q&&Re){Se.length>0&&Ie++;let ge=Fe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ke,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ve[ge].width,ve[ge].height,ze,Ye,ve[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,ve[ge].width,ve[ge].height,0,ze,Ye,ve[ge].data);for(let Ze=0;Ze<Se.length;Ze++){let xt=Se[Ze].image[ge].image;q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,xt.width,xt.height,ze,Ye,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,Ke,xt.width,xt.height,0,ze,Ye,xt.data)}}else{q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Ye,ve[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,ze,Ye,ve[ge]);for(let Ze=0;Ze<Se.length;Ze++){let Ve=Se[Ze];q?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,ze,Ye,Ve.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,Ke,ze,Ye,Ve.image[ge])}}}d(T)&&b(i.TEXTURE_CUBE_MAP),ie.__version=se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function xe(P,T,K,Z,se,ie){let X=s.convert(K.format,K.colorSpace),Q=s.convert(K.type),te=x(K.internalFormat,X,Q,K.normalized,K.colorSpace),he=n.get(T),Te=n.get(K);if(Te.__renderTarget=T,!he.__hasExternalTextures){let ve=Math.max(1,T.width>>ie),we=Math.max(1,T.height>>ie);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,te,ve,we,T.depth,0,X,Q,null):t.texImage2D(se,ie,te,ve,we,0,X,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),nt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,se,Te.__webglTexture,0,Oe(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,se,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(P,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let Z=T.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,ie=S(T.stencilBuffer,se),X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(T),ie,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(T),ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,P)}else{let Z=T.textures;for(let se=0;se<Z.length;se++){let ie=Z[se],X=s.convert(ie.format,ie.colorSpace),Q=s.convert(ie.type),te=x(ie.internalFormat,X,Q,ie.normalized,ie.colorSpace);nt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(T),te,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(T),te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(P,T,K){let Z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(T.depthTexture);if(se.__renderTarget=T,(!se.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(se.__webglInit===void 0&&(se.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Y(i.TEXTURE_CUBE_MAP,T.depthTexture);let he=s.convert(T.depthTexture.format),Te=s.convert(T.depthTexture.type),ve;T.depthTexture.format===ci?ve=i.DEPTH_COMPONENT24:T.depthTexture.format===ar&&(ve=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,T.width,T.height,0,he,Te,null)}}else W(T.depthTexture,0);let ie=se.__webglTexture,X=Oe(T),Q=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,te=T.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ci)nt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,ie,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,ie,0);else if(T.depthTexture.format===ar)nt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,ie,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(P){let T=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=Z}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let Z=0;Z<6;Z++)Ae(T.__webglFramebuffer[Z],P,Z);else{let Z=P.texture.mipmaps;Z&&Z.length>0?Ae(T.__webglFramebuffer[0],P,0):Ae(T.__webglFramebuffer,P,0)}else if(K){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),me(T.__webglDepthbuffer[Z],P,!1);else{let se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ie)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),me(T.__webglDepthbuffer,P,!1);else{let se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(P,T,K){let Z=n.get(P);T!==void 0&&xe(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ne(P)}function $(P){let T=P.texture,K=n.get(P),Z=n.get(T);P.addEventListener("dispose",y);let se=P.textures,ie=P.isWebGLCubeRenderTarget===!0,X=se.length>1;if(X||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Q]=[];for(let te=0;te<T.mipmaps.length;te++)K.__webglFramebuffer[Q][te]=i.createFramebuffer()}else K.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)K.__webglFramebuffer[Q]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(X)for(let Q=0,te=se.length;Q<te;Q++){let he=n.get(se[Q]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&nt(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Q=0;Q<se.length;Q++){let te=se[Q];K.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Q]);let he=s.convert(te.format,te.colorSpace),Te=s.convert(te.type),ve=x(te.internalFormat,he,Te,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),we=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,K.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),me(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(i.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)xe(K.__webglFramebuffer[Q][te],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else xe(K.__webglFramebuffer[Q],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(T)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){for(let Q=0,te=se.length;Q<te;Q++){let he=se[Q],Te=n.get(he),ve=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Te.__webglTexture),Y(ve,he),xe(K.__webglFramebuffer,P,he,i.COLOR_ATTACHMENT0+Q,ve,0),d(he)&&b(ve)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,Z.__webglTexture),Y(Q,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)xe(K.__webglFramebuffer[te],P,T,i.COLOR_ATTACHMENT0,Q,te);else xe(K.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Q,0);d(T)&&b(Q),t.unbindTexture()}P.depthBuffer&&Ne(P)}function J(P){let T=P.textures;for(let K=0,Z=T.length;K<Z;K++){let se=T[K];if(d(se)){let ie=M(P),X=n.get(se).__webglTexture;t.bindTexture(ie,X),b(ie),t.unbindTexture()}}}let oe=[],pe=[];function _e(P){if(P.samples>0){if(nt(P)===!1){let T=P.textures,K=P.width,Z=P.height,se=i.COLOR_BUFFER_BIT,ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(P),Q=T.length>1;if(Q)for(let he=0;he<T.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);let te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let he=0;he<T.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let Te=n.get(T[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,K,Z,0,0,K,Z,se,i.NEAREST),c===!0&&(oe.length=0,pe.length=0,oe.push(i.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(oe.push(ie),pe.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<T.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let Te=n.get(T[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Oe(P){return Math.min(r.maxSamples,P.samples)}function nt(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(P){let T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Ge(P,T){let K=P.colorSpace,Z=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==gn&&K!==Nn&&(dt.getTransfer(K)===St?(Z!==cn||se!==ln)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",K)),T}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=$,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ib(i,e){function t(n,r=Nn){let s,a=dt.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return i.BYTE;if(n===Qu)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===cn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===or)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===ka||n===za)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Dl||n===Fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Ha||n===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ol||n===Bl)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return s.COMPRESSED_R11_EAC;if(n===Hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return s.COMPRESSED_RG11_EAC;if(n===Vl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l||n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===rc||n===sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ic)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===oc||n===Va||n===lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends ui{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Ph,d={},b=t.getContextAttributes(),M=null,x=null,S=[],v=[],w=new it,y=null,E=null,R=new Xt;R.viewport=new Et;let C=new Xt;C.viewport=new Et;let O=[R,C],k=new vl,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=S[z];return j===void 0&&(j=new Ss,S[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=S[z];return j===void 0&&(j=new Ss,S[z]=j),j.getGripSpace()},this.getHand=function(z){let j=S[z];return j===void 0&&(j=new Ss,S[z]=j),j.getHandSpace()};function L(z){let j=v.indexOf(z.inputSource);if(j===-1)return;let ye=S[j];ye!==void 0&&(ye.update(z.inputSource,z.frame,l||a),ye.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",W);for(let z=0;z<S.length;z++){let j=v[z];j!==null&&(v[z]=null,S[z].disconnect(j))}N=null,H=null,m.reset();for(let z in d)delete d[z];if(e.setRenderTarget(M),p=null,h=null,f=null,r=null,x=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),E!==null){let z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,De=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?ar:ci,De=b.stencil?ks:Qn);let me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new jt(h.textureWidth,h.textureHeight,{format:cn,type:ln,depthTexture:new rr(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new jt(p.framebufferWidth,p.framebufferHeight,{format:cn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(z){for(let j=0;j<z.removed.length;j++){let ye=z.removed[j],De=v.indexOf(ye);De>=0&&(v[De]=null,S[De].disconnect(ye))}for(let j=0;j<z.added.length;j++){let ye=z.added[j],De=v.indexOf(ye);if(De===-1){for(let me=0;me<S.length;me++)if(me>=v.length){v.push(ye),De=me;break}else if(v[me]===null){v[me]=ye,De=me;break}if(De===-1)break}let xe=S[De];xe&&xe.connect(ye)}}let F=new D,U=new D;function V(z,j,ye){F.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(ye.matrixWorld);let De=F.distanceTo(U),xe=j.projectionMatrix.elements,me=ye.projectionMatrix.elements,Ae=xe[14]/(xe[10]-1),Ne=xe[14]/(xe[10]+1),Be=(xe[9]+1)/xe[5],$=(xe[9]-1)/xe[5],J=(xe[8]-1)/xe[0],oe=(me[8]+1)/me[0],pe=Ae*J,_e=Ae*oe,Oe=De/(-J+oe),nt=Oe*-J;if(j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(nt),z.translateZ(Oe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),xe[10]===-1)z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let G=Ae+Oe,Ge=Ne+Oe,Fe=pe-nt,P=_e+(De-nt),T=Be*Ne/Ge*G,K=$*Ne/Ge*G;z.projectionMatrix.makePerspective(Fe,P,T,K,G,Ge),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function le(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let j=z.near,ye=z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=C.near=R.near=j,k.far=C.far=R.far=ye,(N!==k.near||H!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,H=k.far),k.layers.mask=z.layers.mask|6,R.layers.mask=k.layers.mask&-5,C.layers.mask=k.layers.mask&-3;let De=z.parent,xe=k.cameras;le(k,De);for(let me=0;me<xe.length;me++)le(xe[me],De);xe.length===2?V(k,R,C):k.projectionMatrix.copy(R.projectionMatrix),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),fe(z,k,De)};function fe(z,j,ye){ye===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(ye.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=_r*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(z){return d[z]};let de=null;function Y(z,j){if(u=j.getViewerPose(l||a),g=j,u!==null){let ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let Ne=0;Ne<ye.length;Ne++){let Be=ye[Ne],$=null;if(p!==null)$=p.getViewport(Be);else{let oe=f.getViewSubImage(h,Be);$=oe.viewport,Ne===0&&(e.setRenderTargetTextures(x,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(x))}let J=O[Ne];J===void 0&&(J=new Xt,J.layers.enable(Ne),J.viewport=new Et,O[Ne]=J),J.matrix.fromArray(Be.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Be.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),Ne===0&&(k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(J)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Ne=f.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ne=0;Ne<ye.length;Ne++){let Be=ye[Ne].camera;if(Be){let $=d[Be];$||($=new Aa,d[Be]=$);let J=f.getCameraImage(Be);$.sourceTexture=J}}}}for(let ye=0;ye<S.length;ye++){let De=v[ye],xe=S[ye];De!==null&&xe!==void 0&&xe.update(De,j,l||a)}de&&de(z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ce=new mm;ce.setAnimationLoop(Y),this.setAnimationLoop=function(z){de=z},this.dispose=function(){}}},Nb=new qe,bm=new lt;bm.set(-1,0,0,0,1,0,0,0,1);function Ub(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ch(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,M,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,b,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),M=b.envMap,x=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bm),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Db(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let v=S.program;n.uniformBlockBinding(x,v)}function l(x,S){let v=r[x.id];v===void 0&&(m(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",b));let w=S.program;n.updateUBOMapping(x,w);let y=e.render.frame;s[x.id]!==y&&(h(x),s[x.id]=y)}function u(x){let S=f();x.__bindingPointIndex=S;let v=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=r[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,E=v.length;y<E;y++){let R=v[y];if(Array.isArray(R))for(let C=0,O=R.length;C<O;C++)p(R[C],y,C,w);else p(R,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,S,v,w){if(_(x,S,v,w)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let C=0;C<E.length;C++){let O=E[C],k=d(O);g(O,x.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,S,v){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,v)}function _(x,S,v,w){let y=x.value,E=S+"_"+v;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let R=w[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let S=x.uniforms,v=0,w=16;for(let E=0,R=S.length;E<R;E++){let C=Array.isArray(S[E])?S[E]:[S[E]];for(let O=0,k=C.length;O<k;O++){let N=C[O],H=Array.isArray(N.value)?N.value:[N.value];for(let L=0,I=H.length;L<I;L++){let W=H[L],F=d(W),U=v%w,V=U%F.boundary,le=U+V;v+=V,le!==0&&w-le<F.storage&&(v+=w-le),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=F.storage}}}let y=v%w;return y>0&&(v+=w-y),x.__size=v,x.__cache={},this}function d(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){let S=x.target;S.removeEventListener("dispose",b);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(let x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:M}}var Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Ob(){return xi===null&&(xi=new As(Fb,16,16,or,Ln),xi.name="DFG_LUT",xi.minFilter=Lt,xi.magFilter=Lt,xi.wrapS=Wn,xi.wrapT=Wn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var mc=class{constructor(e={}){let{canvas:t=zp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=p,m=new Set([Ll,Pl,Il]),d=new Set([ln,Qn,Bs,ks,Al,Rl]),b=new Uint32Array(4),M=new Int32Array(4),x=new D,S=null,v=null,w=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,O=null,k=null,N=null,H=null;this._outputColorSpace=Dt;let L=0,I=0,W=null,F=-1,U=null,V=new Et,le=new Et,fe=null,de=new et(0),Y=0,ce=t.width,z=t.height,j=1,ye=null,De=null,xe=new Et(0,0,ce,z),me=new Et(0,0,ce,z),Ae=!1,Ne=new Rs,Be=!1,$=!1,J=new qe,oe=new D,pe=new Et,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function nt(){return W===null?j:1}let G=n;function Ge(A,B){return t.getContext(A,B)}let Fe,P,T,K,Z,se,ie,X,Q,te,he,Te,ve,we,ze,Ye,Ke,q,Re,ue,Ie,Se,ge;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),G===null){let B="webgl2";if(G=Ge(B,A),G===null)throw Ge(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(A){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),st("WebGLRenderer: "+A.message),A}function Ze(){Fe=new W_(G),Fe.init(),Ie=new Ib(G,Fe),P=new U_(G,Fe,e,Ie),T=new Rb(G,Fe),P.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),k=G.createFramebuffer(),N=G.createFramebuffer(),H=G.createFramebuffer(),K=new Y_(G),Z=new pb,se=new Cb(G,Fe,T,Z,P,Ie,K),ie=new G_(R),X=new K0(G),Se=new L_(G,X),Q=new X_(G,X,K,Se),te=new K_(G,Q,X,Se,K),q=new Z_(G,P,se),ze=new D_(Z),he=new db(R,ie,Fe,P,Se,ze),Te=new Ub(R,Z),ve=new gb,we=new Mb(Fe),Ke=new P_(R,ie,T,te,g,c),Ye=new Ab(R,te,P),ge=new Db(G,K,P,T),Re=new N_(G,Fe,K),ue=new q_(G,Fe,K),K.programs=he.programs,R.capabilities=P,R.extensions=Fe,R.properties=Z,R.renderLists=ve,R.shadowMap=Ye,R.state=T,R.info=K}_!==ln&&(E=new j_(_,t.width,t.height,o,r,s));let Ve=new Lh(R,G);this.xr=Ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(ce,z,!1))},this.getSize=function(A){return A.set(ce,z)},this.setSize=function(A,B,ae=!0){if(Ve.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,z=B,t.width=Math.floor(A*j),t.height=Math.floor(B*j),ae===!0&&(t.style.width=A+"px",t.style.height=B+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(ce*j,z*j).floor()},this.setDrawingBufferSize=function(A,B,ae){ce=A,z=B,j=ae,t.width=Math.floor(A*ae),t.height=Math.floor(B*ae),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(_===ln){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,B,ae,ne){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,B,ae,ne),T.viewport(V.copy(xe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,B,ae,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,B,ae,ne),T.scissor(le.copy(me).multiplyScalar(j).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){T.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,ae=!0){let ne=0;if(A){let ee=!1;if(W!==null){let Me=W.texture.format;ee=m.has(Me)}if(ee){let Me=W.texture.type,Ce=d.has(Me),Pe=Ke.getClearColor(),We=Ke.getClearAlpha(),je=Pe.r,ht=Pe.g,mt=Pe.b;Ce?(b[0]=je,b[1]=ht,b[2]=mt,b[3]=We,G.clearBufferuiv(G.COLOR,0,b)):(M[0]=je,M[1]=ht,M[2]=mt,M[3]=We,G.clearBufferiv(G.COLOR,0,M))}else ne|=G.COLOR_BUFFER_BIT}B&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),Ke.dispose(),ve.dispose(),we.dispose(),Z.dispose(),ie.dispose(),te.dispose(),Se.dispose(),ge.dispose(),he.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",no),Ve.removeEventListener("sessionend",io),ni.stop()};function xt(A){A.preventDefault(),ga("WebGLRenderer: Context Lost."),C=!0}function ut(){ga("WebGLRenderer: Context Restored."),C=!1;let A=K.autoReset,B=Ye.enabled,ae=Ye.autoUpdate,ne=Ye.needsUpdate,ee=Ye.type;Ze(),K.autoReset=A,Ye.enabled=B,Ye.autoUpdate=ae,Ye.needsUpdate=ne,Ye.type=ee}function Rt(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fn(A){let B=A.target;B.removeEventListener("dispose",Fn),Ac(B)}function Ac(A){Dr(A),Z.remove(A)}function Dr(A){let B=Z.get(A).programs;B!==void 0&&(B.forEach(function(ae){he.releaseProgram(ae)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,ae,ne,ee,Me){B===null&&(B=_e);let Ce=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Pe=$e(A,B,ae,ne,ee);T.setMaterial(ne,Ce);let We=ae.index,je=1;if(ne.wireframe===!0){if(We=Q.getWireframeAttribute(ae),We===void 0)return;je=2}let ht=ae.drawRange,mt=ae.attributes.position,Xe=ht.start*je,Mt=(ht.start+ht.count)*je;Me!==null&&(Xe=Math.max(Xe,Me.start*je),Mt=Math.min(Mt,(Me.start+Me.count)*je)),We!==null?(Xe=Math.max(Xe,0),Mt=Math.min(Mt,We.count)):mt!=null&&(Xe=Math.max(Xe,0),Mt=Math.min(Mt,mt.count));let Gt=Mt-Xe;if(Gt<0||Gt===1/0)return;Se.setup(ee,ne,Pe,ae,We);let Nt,Ct=Re;if(We!==null&&(Nt=X.get(We),Ct=ue,Ct.setIndex(Nt)),ee.isMesh)ne.wireframe===!0?(T.setLineWidth(ne.wireframeLinewidth*nt()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(ee.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),T.setLineWidth(rn*nt()),ee.isLineSegments?Ct.setMode(G.LINES):ee.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else ee.isPoints?Ct.setMode(G.POINTS):ee.isSprite&&Ct.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let rn=ee._multiDrawStarts,ke=ee._multiDrawCounts,hn=ee._multiDrawCount,yt=We?X.get(We).bytesPerElement:1,On=Z.get(ne).currentProgram.getUniforms();for(let ii=0;ii<hn;ii++)On.setValue(G,"_gl_DrawID",ii),Ct.render(rn[ii]/yt,ke[ii])}else if(ee.isInstancedMesh)Ct.renderInstances(Xe,Gt,ee.count);else if(ae.isInstancedBufferGeometry){let rn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,rn);Ct.renderInstances(Xe,Gt,ke)}else Ct.render(Xe,Gt)};function Fr(A,B,ae,ne){O!==null&&A.isNodeMaterial&&O.setObject(ne,A),Be===!0&&ze.setState(A,ae,!1),A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Br(A,B,ne),A.side=Mn,A.needsUpdate=!0,Br(A,B,ne),A.side=tn):Br(A,B,ne)}this.compile=function(A,B,ae=null){ae===null&&(ae=A),O!==null&&O.renderStart(A,B,ae),v=we.get(ae),v.init(B),y.push(v),ae.traverseVisible(function(ee){ee.isLight&&ee.layers.test(B.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),A!==ae&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(B.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),$=this.localClippingEnabled,Be=ze.init(this.clippingPlanes,$),Be===!0&&ze.setGlobalState(this.clippingPlanes,B),O!==null&&Ye.render(v.state.shadowsArray,ae,B);let ne=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Me=ee.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){let Pe=Me[Ce];Fr(Pe,ae,B,ee),ne.add(Pe)}else Fr(Me,ae,B,ee),ne.add(Me)}),v=y.pop(),O!==null&&O.renderEnd(),ne},this.compileAsync=function(A,B,ae=null){let ne=this.compile(A,B,ae);return new Promise(ee=>{function Me(){if(ne.forEach(function(Ce){let We=Z.get(Ce).currentProgram;(We===void 0||We.isReady())&&ne.delete(Ce)}),ne.size===0){ee(A);return}setTimeout(Me,10)}Fe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let cr=null;function to(A){cr&&cr(A)}function no(){ni.stop()}function io(){ni.start()}let ni=new mm;ni.setAnimationLoop(to),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(A){cr=A,Ve.setAnimationLoop(A),A===null?ni.stop():ni.start()},Ve.addEventListener("sessionstart",no),Ve.addEventListener("sessionend",io),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;O!==null&&O.renderStart(A,B);let ae=Ve.enabled===!0&&Ve.isPresenting===!0,ne=E!==null&&(W===null||ae)&&E.begin(R,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,B,W),v=we.get(A,y.length),v.init(B),v.state.textureUnits=se.getTextureUnits(),y.push(v),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ne.setFromProjectionMatrix(J,$n,B.reversedDepth),$=this.localClippingEnabled,Be=ze.init(this.clippingPlanes,$),S=ve.get(A,w.length),S.init(),w.push(S),Ve.enabled===!0&&Ve.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&js(Ce,B,-1/0,R.sortObjects)}js(A,B,0,R.sortObjects),S.finish(),O!==null&&O.updateLights(v.state.lightsArray),R.sortObjects===!0&&S.sort(ye,De),Oe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Oe&&Ke.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&ze.beginShadows();let ee=v.state.shadowsArray;if(Ye.render(ee,A,B),Be===!0&&ze.endShadows(),(ne&&E.hasRenderPass())===!1){let Ce=S.opaque,Pe=S.transmissive;if(v.setupLights(),B.isArrayCamera){let We=B.cameras;if(Pe.length>0)for(let je=0,ht=We.length;je<ht;je++){let mt=We[je];so(Ce,Pe,A,mt)}Oe&&Ke.render(A);for(let je=0,ht=We.length;je<ht;je++){let mt=We[je];ro(S,A,mt,mt.viewport)}}else Pe.length>0&&so(Ce,Pe,A,B),Oe&&Ke.render(A),ro(S,A,B)}W!==null&&I===0&&(se.updateMultisampleRenderTarget(W),se.updateRenderTargetMipmap(W)),ne&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,B),Se.resetDefaultState(),F=-1,U=null,y.pop(),y.length>0?(v=y[y.length-1],se.setTextureUnits(v.state.textureUnits),Be===!0&&ze.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,O!==null&&O.renderEnd()};function js(A,B,ae,ne){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ne)){ne&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);let Ce=te.update(A),Pe=A.material;Pe.visible&&S.push(A,Ce,Pe,ae,pe.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ne))){let Ce=te.update(A),Pe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),pe.copy(Ce.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Pe)){let We=Ce.groups;for(let je=0,ht=We.length;je<ht;je++){let mt=We[je],Xe=Pe[mt.materialIndex];Xe&&Xe.visible&&S.push(A,Ce,Xe,ae,pe.z,mt,B)}}else Pe.visible&&S.push(A,Ce,Pe,ae,pe.z,null,B)}}let Me=A.children;for(let Ce=0,Pe=Me.length;Ce<Pe;Ce++)js(Me[Ce],B,ae,ne)}function ro(A,B,ae,ne){let{opaque:ee,transmissive:Me,transparent:Ce}=A;v.setupLightsView(ae),Be===!0&&ze.setGlobalState(R.clippingPlanes,ae),ne&&T.viewport(V.copy(ne)),ee.length>0&&Or(ee,B,ae),Me.length>0&&Or(Me,B,ae),Ce.length>0&&Or(Ce,B,ae),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function so(A,B,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[ne.id]===void 0){let Xe=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[ne.id]=new jt(1,1,{generateMipmaps:!0,type:Xe?Ln:ln,minFilter:Jn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Me=v.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||V;Me.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let Pe=R.getRenderTarget(),We=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(de),Y=R.getClearAlpha(),Y<1&&R.setClearColor(16777215,.5),R.clear(),Oe&&Ke.render(ae);let ht=R.toneMapping;R.toneMapping=In;let mt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),Be===!0&&ze.setGlobalState(R.clippingPlanes,ne),Or(A,ae,ne),se.updateMultisampleRenderTarget(Me),se.updateRenderTargetMipmap(Me),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Mt=0,Gt=B.length;Mt<Gt;Mt++){let Nt=B[Mt],{object:Ct,geometry:rn,material:ke,group:hn}=Nt;if(ke.side===tn&&Ct.layers.test(ne.layers)){let yt=ke.side;ke.side=xn,ke.needsUpdate=!0,Gi(Ct,ae,ne,rn,ke,hn),ke.side=yt,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(se.updateMultisampleRenderTarget(Me),se.updateRenderTargetMipmap(Me))}R.setRenderTarget(Pe,We,je),R.setClearColor(de,Y),mt!==void 0&&(ne.viewport=mt),R.toneMapping=ht}function Or(A,B,ae){let ne=B.isScene===!0?B.overrideMaterial:null;for(let ee=0,Me=A.length;ee<Me;ee++){let Ce=A[ee],{object:Pe,geometry:We,group:je}=Ce,ht=Ce.material;ht.allowOverride===!0&&ne!==null&&(ht=ne),Pe.layers.test(ae.layers)&&Gi(Pe,B,ae,We,ht,je)}}function Gi(A,B,ae,ne,ee,Me){O!==null&&ee.isNodeMaterial&&O.setObject(A,ee),A.onBeforeRender(R,B,ae,ne,ee,Me),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(R,B,ae,ne,A,Me),ee.transparent===!0&&ee.side===tn&&ee.forceSinglePass===!1?(ee.side=xn,ee.needsUpdate=!0,R.renderBufferDirect(ae,B,ne,ee,A,Me),ee.side=Mn,ee.needsUpdate=!0,R.renderBufferDirect(ae,B,ne,ee,A,Me),ee.side=tn):R.renderBufferDirect(ae,B,ne,ee,A,Me),A.onAfterRender(R,B,ae,ne,ee,Me)}function Br(A,B,ae){B.isScene!==!0&&(B=_e);let ne=Z.get(A),ee=v.state.lights,Me=v.state.shadowsArray,Ce=ee.state.version,Pe=he.getParameters(A,ee.state,Me,B,ae,v.state.lightProbeGridArray),We=he.getProgramCacheKey(Pe),je=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,ne.fog=B.fog;let ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=ie.get(A.envMap||ne.environment,ht),ne.envMapRotation=ne.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Fn),je=new Map,ne.programs=je);let mt=je.get(We);if(mt!==void 0){if(ne.currentProgram===mt&&ne.lightsStateVersion===Ce)return be(A,Pe),mt}else Pe.uniforms=he.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,ae,Pe),A.onBeforeCompile(Pe,R),mt=he.acquireProgram(Pe,We),je.set(We,mt),ne.uniforms=Pe.uniforms;let Xe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ze.uniform),be(A,Pe),ne.needsLights=tt(A),ne.lightsStateVersion=Ce,ne.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.sunLights.value=ee.state.sun,Xe.sunLightShadows.value=ee.state.sunShadow,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.sunShadowMatrix.value=ee.state.sunShadowMatrix,Xe.sunShadowCascade.value=ee.state.sunShadowCascade,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.lightProbeGrid=v.state.lightProbeGridArray.length>0,ne.currentProgram=mt,ne.uniformsList=null,mt}function ao(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function be(A,B){let ae=Z.get(A);ae.outputColorSpace=B.outputColorSpace,ae.batching=B.batching,ae.batchingColor=B.batchingColor,ae.instancing=B.instancing,ae.instancingColor=B.instancingColor,ae.instancingMorph=B.instancingMorph,ae.skinning=B.skinning,ae.morphTargets=B.morphTargets,ae.morphNormals=B.morphNormals,ae.morphColors=B.morphColors,ae.morphTargetsCount=B.morphTargetsCount,ae.numClippingPlanes=B.numClippingPlanes,ae.numIntersection=B.numClipIntersection,ae.vertexAlphas=B.vertexAlphas,ae.vertexTangents=B.vertexTangents,ae.toneMapping=B.toneMapping}function re(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){let ee=A[ae];if(ee.texture!==null&&ee.boundingBox.containsPoint(x))return ee}return null}function $e(A,B,ae,ne,ee){B.isScene!==!0&&(B=_e),se.resetTextureUnits();let Me=B.fog,Ce=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?B.environment:null,Pe=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:dt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,je=ie.get(ne.envMap||Ce,We),ht=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Xe=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,Gt=!!ae.morphAttributes.color,Nt=In;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let Ct=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rn=Ct!==void 0?Ct.length:0,ke=Z.get(ne),hn=v.state.lights;if(Be===!0&&($===!0||A!==U)){let Pt=A===U&&ne.id===F;ze.setState(ne,A,Pt)}let yt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==hn.state.version||ke.outputColorSpace!==Pe||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==je||ne.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ze.numPlanes||ke.numIntersection!==ze.numIntersection)||ke.vertexAlphas!==ht||ke.vertexTangents!==mt||ke.morphTargets!==Xe||ke.morphNormals!==Mt||ke.morphColors!==Gt||ke.toneMapping!==Nt||ke.morphTargetsCount!==rn||!!ke.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=ne.version);let On=ke.currentProgram;yt===!0&&(On=Br(ne,B,ee),O&&ne.isNodeMaterial&&O.onUpdateProgram(ne,On,ke));let ii=!1,Wi=!1,kr=!1,At=On.getUniforms(),Bt=ke.uniforms;if(T.useProgram(On.program)&&(ii=!0,Wi=!0,kr=!0),ne.id!==F&&(F=ne.id,Wi=!0),ke.needsLights){let Pt=re(v.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,Wi=!0)}if(ii||U!==A){T.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",A.projectionMatrix),At.setValue(G,"viewMatrix",A.matrixWorldInverse);let qi=At.map.cameraPosition;qi!==void 0&&qi.setValue(G,oe.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&At.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Wi=!0,kr=!0)}if(ke.needsLights&&(hn.state.sunShadowMap.length>0&&At.setValue(G,"sunShadowMap",hn.state.sunShadowMap,se),hn.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",hn.state.directionalShadowMap,se),hn.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",hn.state.spotShadowMap,se),hn.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",hn.state.pointShadowMap,se)),ee.isSkinnedMesh){At.setOptional(G,ee,"bindMatrix"),At.setOptional(G,ee,"bindMatrixInverse");let Pt=ee.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),At.setValue(G,"boneTexture",Pt.boneTexture,se))}ee.isBatchedMesh&&(At.setOptional(G,ee,"batchingTexture"),At.setValue(G,"batchingTexture",ee._matricesTexture,se),At.setOptional(G,ee,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",ee._indirectTexture,se),At.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",ee._colorsTexture,se));let Xi=ae.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&q.update(ee,ae,On),(Wi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,At.setValue(G,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Ob()),Wi){if(At.setValue(G,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&ot(Bt,kr),Me&&ne.fog===!0&&Te.refreshFogUniforms(Bt,Me),Te.refreshMaterialUniforms(Bt,ne,j,z,v.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){let Pt=ke.lightProbeGrid;Bt.probesSH.value=Pt.texture,Bt.probesMin.value.copy(Pt.boundingBox.min),Bt.probesMax.value.copy(Pt.boundingBox.max),Bt.probesResolution.value.copy(Pt.resolution)}Gs.upload(G,ao(ke),Bt,se)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Gs.upload(G,ao(ke),Bt,se),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&At.setValue(G,"center",ee.center),At.setValue(G,"modelViewMatrix",ee.modelViewMatrix),At.setValue(G,"normalMatrix",ee.normalMatrix),At.setValue(G,"modelMatrix",ee.matrixWorld),ne.uniformsGroups!==void 0){let Pt=ne.uniformsGroups;for(let qi=0,zr=Pt.length;qi<zr;qi++){let Ef=Pt[qi];ge.update(Ef,On),ge.bind(Ef,On)}}return On}function ot(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function tt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,B,ae){let ne=Z.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=B,Z.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let ae=Z.get(A);ae.__webglFramebuffer=B,ae.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,ae=0){W=A,L=B,I=ae;let ne=null,ee=!1,Me=!1;if(A){let Pe=Z.get(A);if(Pe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),V.copy(A.viewport),le.copy(A.scissor),fe=A.scissorTest,T.viewport(V),T.scissor(le),T.setScissorTest(fe),F=-1;return}else if(Pe.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Pe.__hasExternalTextures)se.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ht=A.depthTexture;if(Pe.__boundDepthTexture!==ht){if(ht!==null&&Z.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}let We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Me=!0);let je=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[B])?ne=je[B][ae]:ne=je[B],ee=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?ne=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[ae]:ne=je,V.copy(A.viewport),le.copy(A.scissor),fe=A.scissorTest}else V.copy(xe).multiplyScalar(j).floor(),le.copy(me).multiplyScalar(j).floor(),fe=Ae;if(ae!==0&&(ne=k),T.bindFramebuffer(G.FRAMEBUFFER,ne)&&T.drawBuffers(A,ne),T.viewport(V),T.scissor(le),T.setScissorTest(fe),ee){let Pe=Z.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,ae)}else if(Me){let Pe=B;for(let We=0;We<A.textures.length;We++){let je=Z.get(A.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,je.__webglTexture,ae,Pe)}}else if(A!==null&&ae!==0){let Pe=Z.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,ae)}F=-1};function rt(A){let B=Z.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=P.textureFormatReadable(A.format),B.__typeReadable=P.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,ae,ne,ee,Me,Ce,Pe=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(We=We[Ce]),We){T.bindFramebuffer(G.FRAMEBUFFER,We);try{let je=A.textures[Pe],ht=je.format,mt=je.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);let Xe=rt(je);if(Xe.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-ne&&ae>=0&&ae<=A.height-ee&&G.readPixels(B,ae,ne,ee,Ie.convert(ht),Ie.convert(mt),Me)}finally{let je=W!==null?Z.get(W).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,B,ae,ne,ee,Me,Ce,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(We=We[Ce]),We)if(B>=0&&B<=A.width-ne&&ae>=0&&ae<=A.height-ee){T.bindFramebuffer(G.FRAMEBUFFER,We);let je=A.textures[Pe],ht=je.format,mt=je.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);let Xe=rt(je);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Mt),G.bufferData(G.PIXEL_PACK_BUFFER,Me.byteLength,G.STREAM_READ),G.readPixels(B,ae,ne,ee,Ie.convert(ht),Ie.convert(mt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Gt=W!==null?Z.get(W).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,Gt);let Nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vp(G,Nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Mt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Me),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Mt),G.deleteSync(Nt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,ae=0){let ne=Math.pow(2,-ae),ee=Math.floor(A.image.width*ne),Me=Math.floor(A.image.height*ne),Ce=B!==null?B.x:0,Pe=B!==null?B.y:0;se.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Ce,Pe,ee,Me),T.unbindTexture()},this.copyTextureToTexture=function(A,B,ae=null,ne=null,ee=0,Me=0){let Ce,Pe,We,je,ht,mt,Xe,Mt,Gt,Nt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Pe=ae.max.y-ae.min.y,We=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,ht=ae.min.y,mt=ae.isBox3?ae.min.z:0;else{let Bt=Math.pow(2,-ee);Ce=Math.floor(Nt.width*Bt),Pe=Math.floor(Nt.height*Bt),A.isDataArrayTexture?We=Nt.depth:A.isData3DTexture?We=Math.floor(Nt.depth*Bt):We=1,je=0,ht=0,mt=0}ne!==null?(Xe=ne.x,Mt=ne.y,Gt=ne.z):(Xe=0,Mt=0,Gt=0);let Ct=Ie.convert(B.format),rn=Ie.convert(B.type),ke;B.isData3DTexture?(se.setTexture3D(B,0),ke=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(se.setTexture2DArray(B,0),ke=G.TEXTURE_2D_ARRAY):(se.setTexture2D(B,0),ke=G.TEXTURE_2D),T.activeTexture(G.TEXTURE0),T.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),T.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),T.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let hn=T.getParameter(G.UNPACK_ROW_LENGTH),yt=T.getParameter(G.UNPACK_IMAGE_HEIGHT),On=T.getParameter(G.UNPACK_SKIP_PIXELS),ii=T.getParameter(G.UNPACK_SKIP_ROWS),Wi=T.getParameter(G.UNPACK_SKIP_IMAGES);T.pixelStorei(G.UNPACK_ROW_LENGTH,Nt.width),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nt.height),T.pixelStorei(G.UNPACK_SKIP_PIXELS,je),T.pixelStorei(G.UNPACK_SKIP_ROWS,ht),T.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);let kr=A.isDataArrayTexture||A.isData3DTexture,At=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Bt=Z.get(A),Xi=Z.get(B),Pt=Z.get(Bt.__renderTarget),qi=Z.get(Xi.__renderTarget);T.bindFramebuffer(G.READ_FRAMEBUFFER,Pt.__webglFramebuffer),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let zr=0;zr<We;zr++)kr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,ee,mt+zr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,Me,Gt+zr)),G.blitFramebuffer(je,ht,Ce,Pe,Xe,Mt,Ce,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||Z.has(A)){let Bt=Z.get(A),Xi=Z.get(B);T.bindFramebuffer(G.READ_FRAMEBUFFER,N),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,H);for(let Pt=0;Pt<We;Pt++)kr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,mt+Pt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,ee),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xi.__webglTexture,Me,Gt+Pt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xi.__webglTexture,Me),ee!==0?G.blitFramebuffer(je,ht,Ce,Pe,Xe,Mt,Ce,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(ke,Me,Xe,Mt,Gt+Pt,je,ht,Ce,Pe):G.copyTexSubImage2D(ke,Me,Xe,Mt,je,ht,Ce,Pe);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(ke,Me,Xe,Mt,Gt,Ce,Pe,We,Ct,rn,Nt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,Me,Xe,Mt,Gt,Ce,Pe,We,Ct,Nt.data):G.texSubImage3D(ke,Me,Xe,Mt,Gt,Ce,Pe,We,Ct,rn,Nt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Me,Xe,Mt,Ce,Pe,Ct,rn,Nt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Me,Xe,Mt,Nt.width,Nt.height,Ct,Nt.data):G.texSubImage2D(G.TEXTURE_2D,Me,Xe,Mt,Ce,Pe,Ct,rn,Nt);T.pixelStorei(G.UNPACK_ROW_LENGTH,hn),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),T.pixelStorei(G.UNPACK_SKIP_PIXELS,On),T.pixelStorei(G.UNPACK_SKIP_ROWS,ii),T.pixelStorei(G.UNPACK_SKIP_IMAGES,Wi),Me===0&&B.generateMipmaps&&G.generateMipmap(ke),T.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),T.unbindTexture()},this.resetState=function(){L=0,I=0,W=null,T.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function Mm(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:c=0,iterations:l=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=I=>I.getWorldPosition(new D),f=[i,e,t].map(I=>I.quaternion.clone());i.updateWorldMatrix(!0,!0);let h=u(i),p=u(e),g=u(t),_=h.distanceTo(p)+p.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),_].every(Number.isFinite)||_<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,_*s));let d=g.clone().add(m),b=p.clone().sub(h).cross(g.clone().sub(p));if(b.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};b.normalize();function M(I,W){let F=u(I);return I.worldToLocal(F.clone().add(W)).sub(I.worldToLocal(F)).normalize()}let x=M(i,b),S=M(e,b),v=p.clone().sub(h).normalize(),w=M(i,new D().crossVectors(b,v).normalize()),y=Math.PI-h.clone().sub(p).angleTo(g.clone().sub(p)),E=c?[0,0,0,0]:[0,0,0],R=[Ee.degToRad(a[0]),Ee.degToRad(a[1]),...c?[Ee.degToRad(c)]:[],Ee.degToRad(o)],C=M(i,v);function O(I){return i.quaternion.copy(f[0]).multiply(new He().setFromAxisAngle(x,I[0])).multiply(new He().setFromAxisAngle(w,I[1])),c&&i.quaternion.multiply(new He().setFromAxisAngle(C,I[2])),e.quaternion.copy(f[1]).multiply(new He().setFromAxisAngle(S,I[I.length-1])),t.quaternion.copy(f[2]),i.updateWorldMatrix(!0,!0),u(t)}function k(){let I=u(i),W=u(e),F=u(t),U=W.clone().sub(I).cross(F.clone().sub(W)),V=Math.PI-I.clone().sub(W).angleTo(F.clone().sub(W));return U.dot(b)>0&&V>=Math.min(y,Ee.degToRad(5))-.001&&V<=Math.max(y,Ee.degToRad(150))+.001}let N=E.slice(),H=g.distanceToSquared(d),L=.001;for(let I=0;I<l;I++){let W=O(E),F=d.clone().sub(W);if(F.length()<8e-4)break;let U=E.map((Y,ce)=>{let z=E.slice();return z[ce]+=L,O(z).sub(W).multiplyScalar(1/L)});O(E);let V=new lt().set(...[0,1,2].flatMap(Y=>[0,1,2].map(ce=>U.reduce((z,j)=>z+j.getComponent(Y)*j.getComponent(ce),0)+(Y===ce?5e-4:0)))),le=F.clone().applyMatrix3(V.invert()),fe=U.map(Y=>Y.dot(le)),de=!1;for(let Y of[1,.5,.25,.125]){let ce=E.map((j,ye)=>Ee.clamp(j+Ee.clamp(fe[ye],-.15,.15)*Y,-R[ye],R[ye]));if(O(ce),!k())continue;let z=u(t).distanceToSquared(d);if(!(z>=H)){N=ce.slice(),H=z,E.splice(0,E.length,...ce),de=!0;break}}if(!de)break}return O(N),{accepted:!0,angles:N,offset:m.length(),error:Math.sqrt(H),nativeFlex:y,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(b)}}function Sm(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let c=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(c)||c.length>16||new Set(c.map($=>$.id)).size!==c.length)throw new Error("Invalid scene profiles");if(o)for(let $ of c){if(typeof $.id!="string"||!Array.isArray($.contacts)||$.contacts.length>16)throw new Error("Invalid source contacts");for(let J of $.contacts){if(typeof J.bone!="string"||!["ik","unsupported"].includes(J.kind))throw new Error("Unknown source contact");if(J.kind==="ik"&&(!i.getObjectByName(J.ikBone)||!J.drag||!J.sizeCm||![J.sizeCm.X,J.sizeCm.Y,J.sizeCm.Z,...Object.values(J.drag.ScreenPercentToWorld||{}),...Object.values(J.drag.WorldSpaceLimit||{}),...Object.values(J.drag.WorldSpaceLmitLeftUp||{}),J.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let l={},u=[],f=null,h=!1,p=null,g=[],_=null,m={},d="",b=new Map,M=new Map,x=new Map,S=new Map,v=new Map,w=$=>$.getWorldPosition(new D),y=()=>c.find($=>$.id===(l.scene?.()||"main")),E=()=>a==="Enya"&&["show_04","show_05"].includes(y()?.id),R=()=>(y()?.contacts||[]).filter($=>$.kind==="ik"),C=document.createElement("div");C.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(C);let O=document.createElement("div");C.append(O);let k=document.createElement("button");k.textContent="\u8FD8\u539F\u817F\u90E8",k.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",k.onclick=()=>j("lower_legs"),C.append(k);function N(){for(let $ of u)$.bone.quaternion.copy($.base);u=[]}function H(){return(y()?.contacts||[]).map($=>{let J=i.getObjectByName($.bone);if(!J)return null;let oe=w(J).project(e),pe=t.getBoundingClientRect();return{id:$.id,label:/Foot/.test($.bone)?$.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test($.bone)?"\u624B\u90E8":"\u5934\u90E8",x:pe.left+(oe.x+1)*pe.width/2,y:pe.top+(1-oe.y)*pe.height/2,supportedIK:$.kind==="ik"}}).filter(Boolean)}function L($){let J=i.getObjectByName($.ikBone),oe=J?.parent,pe=oe?.parent;if(!pe?.isBone||!oe?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:$,foot:J,calf:oe,thigh:pe,base:[pe,oe,J].map(_e=>_e.quaternion.clone()),anchor:i.worldToLocal(w(J)),offset:new D,dx:0,dy:0}}function I($){if(!$?.alphaVerified)return null;for(let J of R()){let oe=i.getObjectByName(J.ikBone),pe=oe?.worldToLocal(new D().fromArray($.point)),_e=J.sizeCm;if(pe&&Math.abs(pe.x)<_e.X*.01&&Math.abs(pe.y)<_e.Z*.01&&Math.abs(pe.z)<_e.Y*.01)return J}for(let J of R()){let oe=J.ikBone.includes("-L-")?"L":"R";if(($.skinBones||[]).some(pe=>pe?.startsWith("Bip001-"+oe+"-")&&/Thigh|Calf|Foot/.test(pe)))return J}return null}function W($,J){if(!J||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[Oe,nt]of b)nt.contact.ikBone===J.ikBone&&U(Oe,!0);$.preventDefault(),$.stopImmediatePropagation(),l.beforeDrag?.();let oe=M.get(J.ikBone),pe=oe?i.worldToLocal(w(oe.foot)):null;N();let _e=L(J);oe&&(_e.base=oe.base,_e.anchor=pe),x.delete(J.ikBone),Object.assign(_e,{pointerId:$.pointerId,x:$.clientX,y:$.clientY,dragging:!1,triggered:!1}),b.set($.pointerId,_e),t.setPointerCapture($.pointerId),p={contact:J.id,handle:$.target?.dataset?.legHandle||null},J.voiceId&&l.voice?.(J.voiceId)}function F($){W($,I(n($.clientX,$.clientY)))}function U($,J=!1){let oe=b.get($);oe&&(b.delete($),t.hasPointerCapture($)&&t.releasePointerCapture($),oe.dragging&&(!J&&E()?(M.set(oe.contact.ikBone,oe),d="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u53EF\u9009\u62E9\u8FD8\u539F\u817F\u90E8\u6216\u8981\u6C42\u653E\u4E0B\u817F\u3002"):M.has(oe.contact.ikBone)||x.set(oe.contact.ikBone,{...oe,releasedAt:performance.now()})),J||l.event?.({type:"touch",region:"leg",label:oe.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:oe.dragging?"drag":"tap",source:"bounded-leg-control",confidence:1,completed:!0}))}function V($,J,oe){return oe?.endsWith("::Less")?$<J:oe?.endsWith("::Greater")?$>J:null}function le($){let J=b.get($.pointerId);if(!J||($.stopImmediatePropagation(),!J.dragging&&Math.hypot($.clientX-J.x,$.clientY-J.y)<5))return;J.dragging=!0;let oe=t.getBoundingClientRect(),pe=J.contact.drag,_e=E()?55:0,Oe=($.clientX-J.x)/Math.max(1,oe.width)*(E()?100:pe.ScreenPercentToWorld?.X||0),nt=($.clientY-J.y)/Math.max(1,oe.height)*(E()?100:pe.ScreenPercentToWorld?.Y||0);J.dx=Ee.clamp(Oe,-Math.max(_e,pe.WorldSpaceLmitLeftUp?.X||0),Math.max(_e,pe.WorldSpaceLimit?.X||0)),J.dy=Ee.clamp(nt,-Math.max(_e,pe.WorldSpaceLmitLeftUp?.Y||0),Math.max(_e,pe.WorldSpaceLimit?.Y||0));let G=new D().setFromMatrixColumn(e.matrixWorld,0),Ge=new D().setFromMatrixColumn(e.matrixWorld,1),Fe=G.multiplyScalar(J.dx*.01).addScaledVector(Ge,-J.dy*.01);if(J.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Fe))),!E())for(let P of J.contact.thresholds||[]){let T=[V(J.dx,P.limit.X,P.xCompare),V(J.dy,P.limit.Y,P.yCompare)].filter(K=>K!==null);if(!J.triggered&&T.length&&T.every(Boolean)){J.triggered=!0,f={sampleId:P.sampleId,dx:J.dx,dy:J.dy,source:"serialized-drag-threshold"},U($.pointerId),l.reaction?.(P.sampleId);break}}}function fe($){b.has($.pointerId)&&($.stopImmediatePropagation(),U($.pointerId))}function de($){U($.pointerId,!0)}function Y(){for(let $ of[...b.keys()])U($,!0);N()}function ce(){Y(),M.clear(),x.clear(),v.clear(),d=""}function z(){let $=R().map(J=>J.ikBone.includes("-L-")?"left":"right");return[...new Set($.map(J=>"raise_"+J+"_leg")),...$.includes("left")&&$.includes("right")?["spread_legs"]:[],...$.length?["lower_legs"]:[]]}function j($){if(!z().includes($))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(Y(),$==="lower_legs"){for(let[pe,_e]of M)x.set(pe,{..._e,releasedAt:performance.now()});M.clear(),d="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}N();let J=R(),oe=J.filter(pe=>$==="spread_legs"||$.includes(pe.ikBone.includes("-L-")?"left":"right"));for(let pe of oe){let _e=L(pe),Oe=i.getObjectByName(pe.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),nt=w(_e.thigh).sub(w(Oe||_e.thigh.parent));if(nt.lengthSq()<1e-8)continue;nt.normalize();let G=new D(0,1,0).transformDirection(i.matrixWorld),Ge=w(_e.thigh).distanceTo(w(_e.calf))+w(_e.calf).distanceTo(w(_e.foot)),Fe=$==="spread_legs"?nt.multiplyScalar(Ge*(E()?.48:.18)).addScaledVector(G,Ge*.08):G.multiplyScalar(Ge*(E()?.36:.18)).addScaledVector(w(_e.thigh).sub(w(_e.foot)).normalize(),Ge*(E()?.2:0));_e.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Fe))),_e.startedAt=performance.now(),M.set(pe.ikBone,_e),x.delete(pe.ikBone)}d=$==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":$.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let ye=new Map;function De($,J=!1){if(!ye.has($.name)){let pe=[];i.traverse(_e=>{if(!_e.isSkinnedMesh)return;let Oe=_e.geometry.getAttribute("skinIndex"),nt=_e.geometry.getAttribute("skinWeight");if(!Oe||!nt)return;let G=new Set(_e.skeleton.bones.map((Fe,P)=>Fe.name===$.name||Fe.name===$.name.replace("-Foot","-Toe0")?P:-1).filter(Fe=>Fe>=0)),Ge=[];for(let Fe=0;Fe<Oe.count;Fe++){let P=0;for(let T=0;T<4;T++)G.has(Oe.getComponent(Fe,T))&&(P+=nt.getComponent(Fe,T));P>.45&&Ge.push(Fe)}if(Ge.length){let Fe=_e.geometry.getAttribute("position"),P=new Set;for(let T of[-1,0,1])for(let K of[-1,0,1])for(let Z of[-1,0,1]){if(T===0&&K===0&&Z===0)continue;let se=-1/0,ie=Ge[0];for(let X of Ge){let Q=Fe.getX(X)*T+Fe.getY(X)*K+Fe.getZ(X)*Z;Q>se&&(se=Q,ie=X)}P.add(ie)}pe.push({mesh:_e,vertices:Ge,probes:[...P]})}}),ye.set($.name,pe)}let oe=[];for(let{mesh:pe,vertices:_e,probes:Oe}of ye.get($.name))for(let nt of J?_e:Oe)oe.push(pe.getVertexPosition(nt,new D).applyMatrix4(pe.matrixWorld));return oe}function xe($,J){let oe=w($).dot(J);return Ee.clamp(Math.max(.04,...De($).map(pe=>oe-pe.dot(J)))+.015,.055,.16)}function me(){let $=R(),J=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[oe,pe]of S)$.some(_e=>_e.id===oe)||(pe.remove(),S.delete(oe));for(let oe of $){let pe=i.getObjectByName(oe.ikBone);if(!pe)continue;let _e=S.get(oe.id);_e||(_e=document.createElement("button"),_e.dataset.legHandle=String(oe.id),_e.textContent=oe.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",_e.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",_e.addEventListener("pointerdown",G=>W(G,oe)),S.set(oe.id,_e),C.append(_e));let Oe=t.getBoundingClientRect(),nt=w(pe).lerp(w(pe.parent),.5).project(e);_e.hidden=!!J,_e.style.left=Ee.clamp(Oe.left+(nt.x+1)*Oe.width/2,55,Oe.right-55)+"px",_e.style.top=Ee.clamp(Oe.top+(1-nt.y)*Oe.height/2,100,Oe.bottom-150)+"px"}k.hidden=J||!M.size}function Ae(){let $=performance.now();for(let[oe]of b)t.hasPointerCapture(oe)||U(oe,!0);if(me(),h){O.replaceChildren();for(let oe of H()){let pe=document.createElement("span");pe.textContent=oe.label,pe.style.cssText=`position:absolute;left:${oe.x}px;top:${oe.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,O.append(pe)}}let J=new Map(M);for(let oe of b.values())oe.dragging&&J.set(oe.contact.ikBone,oe);for(let[oe,pe]of x)pe.weight=Math.max(0,1-($-pe.releasedAt)/(1e3*Math.max(.15,pe.contact.drag.DragRecoverTime||.35))),pe.weight===0?x.delete(oe):J.has(oe)||J.set(oe,pe);if(E()){for(let oe of R())if(!J.has(oe.ikBone)){let pe=L(oe);pe.passive=!0,J.set(oe.ikBone,pe)}}g=[],m={};for(let oe of J.values()){let pe=[oe.thigh,oe.calf,oe.foot],_e=pe.map(Z=>Z.quaternion.clone()),Oe=oe.weight??(oe.startedAt?Ee.smoothstep(Math.min(1,($-oe.startedAt)/450),0,1):1);pe.forEach((Z,se)=>Z.quaternion.copy(oe.base[se])),i.updateWorldMatrix(!0,!0);let nt=w(oe.calf),G=w(oe.foot),Ge=i.localToWorld(oe.anchor.clone().add(oe.offset)),Fe=0,P=.055,T=[...oe.thigh.parent.matrixWorld.elements,...oe.base.flatMap(Z=>Z.toArray()),...Ge.toArray(),...pe.flatMap(Z=>[...Z.position.toArray(),...Z.scale.toArray()])],K=v.get(oe.contact.ikBone);if(K&&K.key.length===T.length&&T.every((Z,se)=>Math.abs(Z-K.key[se])<1e-4)){pe.forEach((Z,se)=>{Z.quaternion.copy(_e[se]).slerp(K.quaternions[se],Oe).normalize(),u.push({bone:Z,base:_e[se],applied:Z.quaternion.clone()})}),_={...K.report,cached:!0},m[oe.contact.ikBone]=_;continue}if(E()&&s){let Z=s(G);if(Z&&Z.clearance>-.5&&Z.clearance<.5){P=xe(oe.foot,Z.normal);for(let se=0;se<3;se++){let ie=0,X=Z.normal;for(let Q of[.7,.85,1]){let te=s(nt.clone().lerp(Ge,Q));te&&(ie=Math.max(ie,(P-te.clearance)/Q),X=te.normal)}if(ie=Ee.clamp(ie,0,.65-Fe),ie<5e-4)break;Ge.addScaledVector(X,ie),Fe+=ie}}}Fe>0&&g.push({bone:oe.foot.name,correction:Fe,radius:P});try{let Z=E()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let se=0;se<4&&(pe.forEach((Q,te)=>Q.quaternion.copy(oe.base[te])),_=Mm(oe.thigh,oe.calf,oe.foot,Ge,Z),i.updateWorldMatrix(!0,!0),!(!E()||!s));se++){let ie=1/0,X=new D(0,1,0);for(let Q of De(oe.foot)){let te=s(Q);te&&te.clearance<ie&&(ie=te.clearance,X=te.normal)}if(_.footClearance=Number.isFinite(ie)?ie:null,ie>=.012)break;Ge.addScaledVector(X,Math.min(.2,.018-ie))}v.set(oe.contact.ikBone,{key:T,quaternions:pe.map(se=>se.quaternion.clone()),report:{..._}}),m[oe.contact.ikBone]={..._,target:Ge.toArray(),actual:w(oe.foot).toArray()},pe.forEach((se,ie)=>{let X=se.quaternion.clone();se.quaternion.copy(_e[ie]).slerp(X,Oe).normalize(),u.push({bone:se,base:_e[ie],applied:se.quaternion.clone()})})}catch(Z){pe.forEach((se,ie)=>se.quaternion.copy(_e[ie])),d="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+Z.message}}if(J.size){i.updateWorldMatrix(!0,!0);let oe=new Set;i.traverse(pe=>{pe.isSkinnedMesh&&!oe.has(pe.skeleton)&&(pe.skeleton.update(),oe.add(pe.skeleton))})}}let Ne=[["pointerdown",F],["pointermove",le],["pointerup",fe],["pointercancel",de],["lostpointercapture",de]];for(let[$,J]of Ne)t.addEventListener($,J);let Be=()=>Y();return window.addEventListener("blur",Be),{configure:$=>l=$,hitTest:($,J)=>I(n($,J))?.id,restore:N,tick:Ae,cancel:ce,suspend:Y,command:j,available:z,profile:y,points:H,togglePoints(){return h=!h,h||O.replaceChildren(),H().length},headReaction:()=>y()?.contacts.find($=>/hari|Head/.test($.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:M.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[...M.keys()].map($=>$.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):x.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:d,available:z()}),footMeshContacts:()=>Object.fromEntries(R().map($=>{let J=i.getObjectByName($.ikBone),oe=J?De(J,!0).map(pe=>s?.(pe)?.clearance).filter(Number.isFinite):[];return[$.ikBone,{samples:oe.length,minClearance:oe.length?Math.min(...oe):null}]})),snapshot:()=>({scene:y()?.id,legSolve:_,solves:m,bedCorrections:g,lastPick:p,active:b.size>0,offset:b.size?[b.values().next().value.dx,b.values().next().value.dy]:null,recovering:x.size>0,held:[...M.keys()],lastEvent:f}),dispose(){ce(),C.remove();for(let[$,J]of Ne)t.removeEventListener($,J);window.removeEventListener("blur",Be)}}}var wm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},yc=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=wm[e]||wm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function Em(i,e,t){let n=new it,r=new it,s=0,a=0,o=!1,c=0,l=0,u=!1,f=!0,h=!1,p=0,g=[],_=new Map,m={value:Array.from({length:4},()=>new D)},d={value:Array.from({length:4},()=>new D)},b={value:[.05,.05,.05,.05]},M=new D,x=null;i.traverse(L=>{L.isMesh&&L.userData.snowbreakSurfaceKey&&_.set(L.userData.snowbreakSurfaceKey,L)});function S(L){let I=L.hit,W=_.get(I.mesh);if(!W||!I.barycentric)return new D().fromArray(I.point);let F=W.geometry.index,U=new D;for(let V=0;V<3;V++){let le=F?F.getX(I.triangle*3+V):I.triangle*3+V;U.addScaledVector(W.getVertexPosition(le,new D),I.barycentric[V])}return W.localToWorld(U)}let v=[],w=new Map,y=new Set;i.traverse(L=>{if(L.isSkinnedMesh&&y.add(L.skeleton),L.isBone&&/^EyeJoint_[LR]$/.test(L.name)&&v.push(L),!L.isSkinnedMesh||!["skin","cloth-or-room"].includes(L.material?.userData.profile))return;let I=L.material,W=I.onBeforeCompile,F=I.customProgramCacheKey.bind(I);I.onBeforeCompile=U=>{W(U),Object.assign(U.uniforms,{senseCenters:m,senseOffsets:d,senseRadii:b}),U.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},I.customProgramCacheKey=()=>F()+"-surface-spring-v2",I.needsUpdate=!0});function E(L,I,W="camera"){W==="camera"&&(h||performance.now()<p)||!Number.isFinite(L)||!Number.isFinite(I)||(n.set(Ee.clamp(L,-1,1),Ee.clamp(I,-1,1)),s=performance.now()+1600)}function R(L){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let I=t.getBoundingClientRect();p=performance.now()+1600,E((L.clientX-I.left)/I.width*2-1,1-(L.clientY-I.top)/I.height*2,"touch")}function C(L,I){if(!f||!L?.alphaVerified||!Array.isArray(L.point)||!_.has(L.mesh))return!1;x?.spring.release();let W=I?.id||L.anatomy?.id||"body",F=g.find(U=>!U.spring.pressed&&U.region===W&&S(U).distanceTo(new D().fromArray(L.point))<.04);return F?(x=F,x.hit=L):(g.length===4&&g.shift(),x={hit:L,region:W,spring:new yc(W),direction:e.getWorldDirection(new D)},g.push(x)),x.spring.press(),o=u=!0,!0}let O=L=>{h=!0,R(L)},k=()=>{o=!1,h=!1,x?.spring.release(),x=null,p=performance.now()+1e3};t.addEventListener("pointerdown",O),t.addEventListener("pointermove",R),t.addEventListener("pointerup",k),t.addEventListener("pointercancel",k),t.addEventListener("lostpointercapture",k);function N(L=performance.now()){let I=Math.min(.04,Math.max(0,(L-a)/1e3));a=L,L>s&&n.set(0,0),r.lerp(n,1-Math.exp(-I*12));let W=new D().setFromMatrixColumn(e.matrixWorld,1),F=new D().setFromMatrixColumn(e.matrixWorld,0);for(let U of v){let V=U.quaternion.clone(),le=new qe().extractRotation(U.parent.matrixWorld),fe=new qe().makeRotationFromQuaternion(new He().setFromAxisAngle(W,r.x*.07).multiply(new He().setFromAxisAngle(F,-r.y*.05))),de=le.clone().invert().multiply(fe).multiply(le);U.quaternion.premultiply(new He().setFromRotationMatrix(de)).normalize(),U.updateWorldMatrix(!1,!0),w.set(U,{base:V,applied:U.quaternion.clone()})}for(let U=g.length-1;U>=0;U--)g[U].spring.step(I),g[U].spring.active||g.splice(U,1);l=0,c=0,u=g.length>0;for(let U=0;U<4;U++){let V=g[U];d.value[U].set(0,0,0),V&&(m.value[U].copy(S(V)),b.value[U]=V.spring.profile.radius,d.value[U].copy(V.direction).multiplyScalar(V.spring.offset),Math.abs(V.spring.offset)>Math.abs(l)&&(l=V.spring.offset),c+=Math.abs(V.spring.velocity))}if(v.length)for(let U of y)U.update()}function H(){for(let[L,I]of w)L.quaternion.angleTo(I.applied)<1e-6&&L.quaternion.copy(I.base);w.clear()}return{gaze:E,touch:C,tick:N,restore:H,reset(){H(),o=u=h=!1,p=0,l=c=0,g.length=0,x=null;for(let L of d.value)L.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:v.length,gaze:r.toArray(),offset:l,pressed:o,active:u,contacts:g.map(L=>({region:L.region,offset:L.spring.offset,velocity:L.spring.velocity,pressed:L.spring.pressed,center:S(L).toArray()}))}),dispose(){for(let[L,I]of[["pointerdown",O],["pointermove",R],["pointerup",k],["pointercancel",k],["lostpointercapture",k]])t.removeEventListener(L,I)}}}function Nh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=v=>v.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let v of[i,e,t]){let w=v.getWorldScale(new D);if(Math.min(w.x,w.y,w.z)<=0||Math.max(w.x,w.y,w.z)-Math.min(w.x,w.y,w.z)>1e-5)throw new Error("Unsupported arm scale")}let c=o(i),l=o(e),u=o(t),f=c.distanceTo(l),h=l.distanceTo(u);if(![...n.toArray(),...r.toArray(),f,h].every(Number.isFinite)||Math.min(f,h)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(c),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let _=v=>Math.sqrt(Math.max(0,f*f+h*h+2*f*h*Math.cos(Ee.degToRad(v)))),m=Ee.clamp(g,Math.max(Math.abs(f-h)+1e-6,_(a)),Math.min(f+h-1e-6,_(s))),d=r.clone().sub(c).addScaledVector(p,-r.clone().sub(c).dot(p));if(d.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");d.normalize();let b=(f*f-h*h+m*m)/(2*m),M=c.clone().addScaledVector(p,b).addScaledVector(d,Math.sqrt(Math.max(0,f*f-b*b))),x=c.clone().addScaledVector(p,m);function S(v,w,y){let E=o(v),R=o(w).sub(E).normalize(),C=y.clone().sub(E).normalize(),O=v.getWorldQuaternion(new He);O.premultiply(new He().setFromUnitVectors(R,C)),v.quaternion.copy(v.parent.getWorldQuaternion(new He).invert().multiply(O)).normalize(),v.updateWorldMatrix(!0,!0)}return S(i,e,M),S(e,t,x),{requested:n.toArray(),reachable:x.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(x),elbowFlex:Ee.radToDeg(Math.acos(Ee.clamp((m*m-f*f-h*h)/(2*f*h),-1,1)))}}var Cr=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Uh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),c=null,l=null,u=g=>g.getWorldPosition(new D);function f(){c&&(n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0)),c=null}function h(){if(f(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),_=u(r),m=u(s),d=u(a),b=g.distanceTo(_)+_.distanceTo(m),M=g.clone().sub(d);if(M.y=0,M.length()<1e-5)throw new Error("Ambiguous shoulder direction");M.normalize();let x=d.clone().addScaledVector(M,b*.55);x.y+=b*.15;let S=g.clone().addScaledVector(M,b);S.y-=b*.35,c={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new He),start:m,target:x,pole:S},l=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!c)return;n.quaternion.copy(c.upper),r.quaternion.copy(c.lower),s.quaternion.copy(c.wrist),i.updateWorldMatrix(!0,!0);let _=Ee.clamp(g,0,1),m=_<.3?_/.3:_>.7?(1-_)/.3:1,d=m*m*(3-2*m);if(d<1e-6)return;l=Nh(n,r,s,c.target,c.pole,Cr);let b={},M=[];function x(S,v,w,y,E){let R=S.quaternion.clone(),C=v.angleTo(R),O=Ee.degToRad(w);C>O&&M.push(E),S.quaternion.copy(v).slerp(R,y*Math.min(1,O/Math.max(C,1e-10))).normalize(),b[E]=Ee.radToDeg(v.angleTo(S.quaternion))}x(n,c.upper,Cr.upper,d,"upper"),x(r,c.lower,Cr.lower,d,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new He).invert().multiply(c.wristWorld)),x(s,c.wrist,Cr.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),l={...l,solverError:l.error,hand:u(s).toArray(),error:u(s).distanceTo(c.target),angles:b,limited:M,weight:d}}return{begin:h,apply:p,restore:f,snapshot:()=>({available:o,active:!!c,side:"anatomical-"+e,experimental:!0,limits:Cr,result:l,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function Tm(i,e,t=()=>0){let n={};for(let[L,I]of[["left","L"],["right","R"]]){let W=i.getObjectByName(`Bip001-${I}-UpperArm`),F=i.getObjectByName(`Bip001-${I}-Forearm`),U=i.getObjectByName(`Bip001-${I}-Hand`);W?.isBone&&F?.parent===W&&U?.parent===F&&(n[L]={upper:W,lower:F,hand:U})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(L=>{L.isSkinnedMesh&&a.add(L.skeleton)}),i.traverse(L=>{if(L.isMesh&&L.morphTargetInfluences){let I=L.morphTargetDictionary||{},W=I.L_Eye_close??I.L_eye_close??I.eyecloseL??I.L_Eye_close_Spcl_Ty_neg_1,F=I.R_Eye_close??I.R_eye_close??I.eyecloseR??I.R_Eye_close_Spcl_Ty_neg_1;Number.isInteger(W)&&s.push({mesh:L,index:W,name:"L_Eye_close"}),Number.isInteger(F)&&s.push({mesh:L,index:F,name:"R_Eye_close"})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(L=>L.name==="L_Eye_close")&&s.some(L=>L.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let c=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),l=null,u=0,f=0,h=[],p=[];i.traverse(L=>{if(L.isMesh&&L.morphTargetDictionary&&L.morphTargetInfluences){let I=L.morphTargetDictionary.Viseme_A;if(!Number.isInteger(I))return;let W=0,F=L.geometry?.morphAttributes?.position?.[I];if(F)for(let V=0;V<F.count;V++){let le=Math.hypot(F.getX(V),F.getY(V),F.getZ(V));le>W&&(W=le)}let U=W>.001?Ee.clamp(.0125/W,.85,2.2):.85;p.push({mesh:L,index:I,gain:U})}});function g(L,I){if(!o.includes(L)||!L.startsWith("gesture_")||!Number.isFinite(I?.duration)||I.duration<1||I.duration>8||!Array.isArray(I.poses)||I.poses.length<2||I.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let W=-1;for(let F of I.poses){if(F.smile!==void 0&&(!Number.isFinite(F.smile)||F.smile<0||F.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(F.time)||F.time<=W||F.time<0||F.time>I.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");W=F.time;for(let[U,V]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(F[U]&&(!Array.isArray(F[U])||F[U].length!==3||F[U].some((le,fe)=>!Number.isFinite(le)||Math.abs(le)>V[fe])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(I.poses[0].time!==0||W!==I.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),l={id:L,plan:I,start:performance.now()},S="\u6B63\u5728\u6267\u884C\uFF1A"+L}function _(L){if(!l)return null;let{plan:I}=l,W=(L-l.start)/1e3;if(W>=I.duration)return S="\u5DF2\u5B8C\u6210\uFF1A"+l.id,l=null,null;let F=Math.max(0,I.poses.findIndex(Y=>Y.time>=W)-1),U=I.poses[F],V=I.poses[F+1],le=Ee.clamp((W-U.time)/(V.time-U.time),0,1),fe=le*le*(3-2*le),de={};for(let Y of["head","torso","leftHand","rightHand"])(U[Y]||V[Y])&&(de[Y]=[0,1,2].map(ce=>(U[Y]?.[ce]||0)+((V[Y]?.[ce]||0)-(U[Y]?.[ce]||0))*fe));return de.smile=(U.smile||0)+((V.smile||0)-(U.smile||0))*fe,de}let m=new Set,d=!1,b=0,M=0,x=performance.now(),S="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",v={left:0,right:0},w=0,y=[],E=[],R={left:!1,right:!1};function C(){for(let L of y)L.bone.quaternion.angleTo(L.applied)<1e-6&&L.bone.quaternion.copy(L.base);y.length=0;for(let L of[...E,...h])Math.abs(L.mesh.morphTargetInfluences[L.index]-L.applied)<1e-6&&(L.mesh.morphTargetInfluences[L.index]=L.base);E.length=h.length=0}function O(L){if(!o.includes(L))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return l=null,L==="raise_left_hand"&&m.add("left"),L==="raise_right_hand"&&m.add("right"),L==="raise_both_hands"&&(m=new Set(["left","right"])),L==="lower_hands"&&m.clear(),L==="close_eyes"&&(d=!0),L==="open_eyes"&&(d=!1),L==="turn_left"&&(M+=90),L==="turn_right"&&(M-=90),L==="turn_back"&&(M=180-t()),L==="face_front"&&(M=-t()),S="\u5DF2\u63A5\u6536\uFF1A"+L,N()}function k(){let L=performance.now(),I=Math.min(.25,(L-x)/1e3);x=L;let W=1-Math.exp(-9*I),F=_(L);if(F){i.updateWorldMatrix(!0,!0);let de=xe=>xe.getWorldPosition(new D),Y=i.getObjectByName("Bip001-Pelvis"),ce=r&&Y?de(r).sub(de(Y)).normalize():new D(0,1,0),z=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He)),j=i.getObjectByName("EyeJoint_L"),ye=i.getObjectByName("EyeJoint_R");if(r&&j&&ye){let xe=de(j).add(de(ye)).multiplyScalar(.5).sub(de(r));xe.addScaledVector(ce,-xe.dot(ce)),xe.length()>1e-5&&(z=xe.normalize())}let De=new D().crossVectors(ce,z).normalize();z.crossVectors(De,ce).normalize();for(let[xe,me]of[[r,F.head],[c,F.torso]])if(xe&&me){let Ae=xe.quaternion.clone(),Ne=xe.parent.getWorldQuaternion(new He),Be=new He().setFromAxisAngle(ce,Ee.degToRad(-me[0])).multiply(new He().setFromAxisAngle(De,Ee.degToRad(me[1]))).multiply(new He().setFromAxisAngle(z,Ee.degToRad(me[2])));xe.quaternion.premultiply(Ne.clone().invert().multiply(Be).multiply(Ne)).normalize(),y.push({bone:xe,base:Ae,applied:xe.quaternion.clone()}),xe.updateWorldMatrix(!1,!0)}}b+=(M-b)*W,e(b),R={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let U=new D(0,1,0),V=i.getObjectByName("EyeJoint_L"),le=i.getObjectByName("EyeJoint_R"),fe=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He));r&&V&&le&&(fe.copy(V.getWorldPosition(new D).add(le.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),fe.y=0,fe.length()<1e-5&&fe.set(0,0,1),fe.normalize());for(let de of["left","right"]){v[de]+=((m.has(de)?1:0)-v[de])*W;let Y=F?.[de+"Hand"],ce=Y?Ee.smoothstep(Math.hypot(...Y),0,.25):v[de],z=n[de];if(!z||!r||ce<.001)continue;let j=J=>J.getWorldPosition(new D),ye=j(r),De=j(z.upper),xe=De.distanceTo(j(z.lower))+j(z.lower).distanceTo(j(z.hand)),me=De.clone().sub(ye);if(me.y=0,me.length()<1e-6)continue;me.normalize();let Ae=ye.clone().addScaledVector(me,xe*.45);Ae.y+=xe*.18,Y&&(Ae.copy(j(z.hand)).addScaledVector(me,Math.abs(Y[0])*xe),Ae.y+=Y[1]*xe,Ae.addScaledVector(fe,Y[2]*xe));let Ne=De.clone().addScaledVector(fe,xe*.7).addScaledVector(me,xe*.2).addScaledVector(U,-xe*.2),Be=z.hand.getWorldQuaternion(new He),$=[z.upper,z.lower,z.hand].map(J=>({bone:J,base:J.quaternion.clone()}));try{Nh(z.upper,z.lower,z.hand,Ae,Ne,Cr);for(let[Ge,Fe]of[z.upper,z.lower].entries()){let P=$[Ge].base,T=Fe.quaternion.clone(),K=P.angleTo(T),Z=Ee.degToRad([100,140][Ge]);Fe.quaternion.copy(P).slerp(T,ce*Math.min(1,Z/Math.max(K,1e-8))).normalize(),Fe.updateWorldMatrix(!1,!0)}let J=Be.clone(),oe=Ge=>i.getObjectByName(`Bip001-${de==="left"?"L":"R"}-Finger${Ge}`),pe=oe(1),_e=oe(2),Oe=oe(4);if(pe&&_e&&Oe){let Ge=j(pe).sub(j(Oe)).normalize(),Fe=j(_e).sub(j(z.hand));Fe.addScaledVector(Ge,-Fe.dot(Ge)).normalize();let P=new qe().makeBasis(Ge,Fe,new D().crossVectors(Ge,Fe).normalize()),T=l?.id==="gesture_open_arms"?me.clone():U.clone(),K=fe.clone().multiplyScalar(de==="left"?1:-1),Z=new D().crossVectors(T,K).normalize();T.crossVectors(K,Z).normalize();let se=new qe().makeBasis(Z,T,new D().crossVectors(Z,T).normalize());J=new He().setFromRotationMatrix(se.multiply(P.invert())).multiply(z.hand.getWorldQuaternion(new He));let ie=J.clone().multiply(z.hand.getWorldQuaternion(new He).invert()),X=j(z.hand).sub(j(z.lower)).normalize(),Q=new D(ie.x,ie.y,ie.z).dot(X),te=Ee.clamp(2*Math.atan2(Q,ie.w),-Math.PI/2,Math.PI/2)*.6*ce;z.lower.quaternion.multiply(new He().setFromAxisAngle(z.hand.position.clone().normalize(),te)).normalize(),z.lower.updateWorldMatrix(!1,!0)}let nt=z.hand.parent.getWorldQuaternion(new He).invert().multiply(J),G=$[2].base.angleTo(nt);z.hand.quaternion.copy($[2].base).slerp(nt,ce*Math.min(1,Ee.degToRad(90)/Math.max(G,1e-8))).normalize(),z.hand.updateWorldMatrix(!1,!0);for(let Ge of $)y.push({...Ge,applied:Ge.bone.quaternion.clone()});R[de]=j(z.hand).y>De.y+xe*.25}catch(J){for(let oe of $)oe.bone.quaternion.copy(oe.base);S="\u4E3E\u624B\u5931\u8D25\uFF1A"+J.message,m.delete(de)}}w+=((d?1:0)-w)*W;for(let de of s){let Y=de.mesh.morphTargetInfluences[de.index]||0,ce=Ee.lerp(Y,d?1:0,w);E.push({...de,base:Y,applied:ce}),de.mesh.morphTargetInfluences[de.index]=ce}F?.smile&&i.traverse(de=>{if(!de.isMesh||!de.morphTargetInfluences)return;let Y=de.morphTargetDictionary||{};for(let ce of[Y.L_Eye_smile??Y.L_eye_smile??Y.eyemileL??Y.eyesmileL,Y.R_Eye_smile??Y.R_eye_smile??Y.eyemileR??Y.eyesmileR]){if(!Number.isInteger(ce))continue;let z=de.morphTargetInfluences[ce]||0,j=Math.max(z,Math.min(.5,F.smile));h.push({mesh:de,index:ce,base:z,applied:j}),de.morphTargetInfluences[ce]=j}}),f+=(u-f)*(1-Math.exp(-I*(u>f?24:16)));for(let de of p){let Y=de.mesh.morphTargetInfluences[de.index]||0,ce=Math.max(Y,f*(de.gain||.85));h.push({...de,base:Y,applied:ce}),de.mesh.morphTargetInfluences[de.index]=ce}i.updateWorldMatrix(!0,!0);for(let de of a)de.update()}function N(){i.updateWorldMatrix(!0,!0);for(let W of["left","right"]){let F=n[W];if(!F)continue;let U=F.upper.getWorldPosition(new D),V=F.lower.getWorldPosition(new D),le=F.hand.getWorldPosition(new D);R[W]=le.y>U.y+(U.distanceTo(V)+V.distanceTo(le))*.25}let L=s.length?s.reduce((W,F)=>W+(F.mesh.morphTargetInfluences[F.index]||0),0)/s.length:0,I=b+t();return{available:[...o],eyes:s.length?L>.95?"\u5DF2\u95ED\u5408":L<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...R},hands:R.left&&R.right?"\u53CC\u624B\u62AC\u8D77":R.left?"\u5DE6\u624B\u62AC\u8D77":R.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(b-M)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((I%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(I%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(I)}\u5EA6`,yaw:I,lastResult:S}}function H(){C(),u=f=0,l=null,m.clear(),d=!1,v.left=v.right=w=0,b=M=0,e(0),S="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:O,playGesture:g,tick:k,restore:C,snapshot:N,reset:H,setSpeechLevel:L=>{u=Number.isFinite(L)?Ee.clamp(L,0,1):0},speechState:()=>({level:f,targets:p.length,weights:p.map(L=>L.mesh.morphTargetInfluences[L.index])}),releaseHands:()=>{m.clear(),l=null}}}function Am(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:Dh(i)}function Dh(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],c=i.keys[a%e],l=i.keys[(a+1)%e],u=s.slice();for(let h=0;h<3;h++)u[h]=n[h]+(.2*o[h]+.6*c[h]+.2*l[h]-n[h])*t;let f=new He().fromArray(o,3).slerp(new He().fromArray(c,3),.75).slerp(new He().fromArray(l,3),.2);return new He().fromArray(n,3).slerp(f,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function Rm(i,e,t,n,r=null,s=null){if(n.opacity===0){let b=new Qt({visible:!1,transparent:!0,opacity:0,depthWrite:!1});return b.userData.profile="hidden",b}let a=/eye01/.test(i),o=/eye01_shadow/.test(i),c=/face01_inst_2/.test(i),l=/face01/.test(i),u=/hair01/.test(i),f=/body00(?:_ma)?_inst|face01/.test(i),h=n.surface||"",p=h==="black-stocking",g=h==="white-stocking",_=p||g;if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let m={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?Mn:tn},d;if(a&&!o)d=new Qt(m),d.onBeforeCompile=b=>{b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vEyeNormal;
varying vec3 vEyeViewDir;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vec3 eyeObjNormal=objectNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
vEyeNormal=normalize(normalMatrix*eyeObjNormal);
vEyeViewDir=normalize(-mvPosition.xyz);`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
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
    `)},d.customProgramCacheKey=()=>"snowbreak-wet-eye-v1";else if(o)d=new Qt(m);else{let b=l?.2:f?.28:_?.34:.58,M={...m,normalMap:t||null,normalScale:new it(b,-b)};if(u?Object.assign(M,{roughness:.3,metalness:.05,clearcoat:.52,clearcoatRoughness:.22,sheen:.45,sheenRoughness:.4,sheenColor:new et(16777215),envMapIntensity:1.15}):l?Object.assign(M,{roughness:.48,metalness:0,clearcoat:.16,clearcoatRoughness:.38,sheen:.24,sheenRoughness:.52,sheenColor:new et(16770778),envMapIntensity:.48}):f?Object.assign(M,{roughness:.42,metalness:0,clearcoat:.28,clearcoatRoughness:.34,sheen:.32,sheenRoughness:.44,sheenColor:new et(16769748),envMapIntensity:.68}):p?Object.assign(M,{roughness:r?.9:.34,metalness:r?.3:.04,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.42,clearcoatRoughness:.24,sheen:.75,sheenRoughness:.34,sheenColor:new et(11058400),envMapIntensity:1.15}):g?Object.assign(M,{roughness:r?.9:.32,metalness:r?.18:.02,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.44,clearcoatRoughness:.24,sheen:.78,sheenRoughness:.32,sheenColor:new et(16185599),envMapIntensity:1.15}):r?Object.assign(M,{roughness:.92,metalness:.98,roughnessMap:r,metalnessMap:r,clearcoat:.55,clearcoatRoughnessMap:r,clearcoatRoughness:.52,envMapIntensity:1.55}):Object.assign(M,{roughness:.4,metalness:.12,clearcoat:.32,clearcoatRoughness:.32,envMapIntensity:1.05}),d=new on(M),l||f){let x=!!(l&&s);d.onBeforeCompile=S=>{x&&(S.uniforms.uFaceShadowMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
      }`)},d.customProgramCacheKey=()=>l?x?"sb-face-sss-sdf-v3":"sb-face-sss-v3":"sb-skin-sss-v3"}else if(u){let x=!!s;d.onBeforeCompile=S=>{x&&(S.uniforms.uHairHighlightMap={value:s},S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
     }`)},d.customProgramCacheKey=()=>x?"sb-hair-angelring-hl-v1":"sb-hair-angelring-v1"}else p?(d.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`)},d.customProgramCacheKey=()=>"sb-black-stocking-v2"):g?(d.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
      }`)},d.customProgramCacheKey=()=>"sb-white-stocking-v2"):(d.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
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
     }`)},d.customProgramCacheKey=()=>r?"sb-equip-orm-v2":"sb-equip-v2")}return c?(d.polygonOffset=!0,d.polygonOffsetFactor=-1.5,d.polygonOffsetUnits=-1.5):n.transparent&&!o&&(d.polygonOffset=!0,d.polygonOffsetFactor=-.25,d.polygonOffsetUnits=-.25),d.userData.profile=a?"eye":l?"soft-face":u?"hair":f?"skin":"cloth-or-room",d}function Cm(i,e){e.outputColorSpace=Dt,e.toneMapping=Da,e.toneMappingExposure=1.06;let t=new Ca(16774896,7242408,.94);i.add(t);let n=new ki(16772569,2.25);n.position.set(-2.6,3.8,4.6),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-12e-5,n.shadow.normalBias=.006,n.shadow.radius=2.2,e.shadowMap.enabled=!0,e.shadowMap.type=Ml;let r=new ki(13689599,.84);r.position.set(3.6,1.8,3.8),i.add(r);let s=new ki(16773375,1.55);s.position.set(1.2,3.4,-4.2),i.add(s);let a=new Li;a.background=new et(.07,.08,.11);let o=new Ui(1,1),c=[];for(let[m,d,b,M]of[[[-4.2,4,4.8],[3.8,7.2],16773858,7.5],[[5,2.2,3.4],[3.2,6.2],14084351,4.8],[[0,6.2,1.6],[6,1.8],16777215,5.8],[[-2.8,4.5,-4.6],[3.5,5.5],16770294,5.5],[[3.2,4.2,-4.4],[3.5,5.5],15003391,5.2],[[0,-3.5,2.5],[9,9],16771808,.45]]){let x=new Qt({color:b,side:tn});x.color.multiplyScalar(M),c.push(x);let S=new Ft(o,x);S.position.fromArray(m),S.scale.set(d[0],d[1],1),S.lookAt(0,1,0),a.add(S)}let l=new Ws(e),u=l.fromScene(a,.025,.1,30);l.dispose(),o.dispose();for(let m of c)m.dispose();i.environment=u.texture;let f=2048;function h(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.06,warmth:.5,reflection:1,shadows:!0,shadowSize:2048,key:2.25,fill:.84,rim:1.55};function g(m){let d={...p,...m};if(![d.exposure,d.warmth,d.reflection].every(Number.isFinite)||typeof d.shadows!="boolean"||d.exposure<.65||d.exposure>1.45||d.warmth<0||d.warmth>1||d.reflection<0||d.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(d.shadowSize)||![d.key,d.fill,d.rim].every(b=>Number.isFinite(b)&&b>=0&&b<=3))throw new Error("Invalid light quality");return h(Math.min(d.shadowSize,f)),p={exposure:d.exposure,warmth:d.warmth,reflection:d.reflection,shadows:d.shadows,shadowSize:d.shadowSize,key:d.key,fill:d.fill,rim:d.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new et(16769214),p.warmth),i.environmentIntensity=p.reflection,{...p}}function _(m){let d=m.getCenter(new D),b=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(d),n.position.copy(d).add(new D(-2.6,3.8,4.6).normalize().multiplyScalar(b*3)),Object.assign(n.shadow.camera,{left:-b,right:b,top:b,bottom:-b,near:.1,far:b*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:_,setBudget(m){let d=m.mode==="quality"||m.mode==="performance",b=m.mode==="battery"||m.mode==="powersave";f=d?2048:b||m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048;let M=d?2048:b?512:p.shadowSize;h(Math.min(M,f))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}var Fh=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Bb=`
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
`,kb=`
uniform sampler2D tDiffuse;
uniform vec2 uStep;
varying vec2 vUv;
void main(){
  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.22702703;
  sum += (texture2D(tDiffuse, vUv + uStep * 1.38461538).rgb + texture2D(tDiffuse, vUv - uStep * 1.38461538).rgb) * 0.31621622;
  sum += (texture2D(tDiffuse, vUv + uStep * 3.23076923).rgb + texture2D(tDiffuse, vUv - uStep * 3.23076923).rgb) * 0.07027027;
  gl_FragColor = vec4(sum, 1.0);
}
`,zb=`
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
`;function Im(i){let e=i.getContext(),t=i.capabilities.isWebGL2,n=t&&(!!e.getExtension("EXT_color_buffer_float")||!!e.getExtension("EXT_color_buffer_half_float")),r=n?Ln:ln,s=t?Math.min(4,i.capabilities.maxSamples||0):0,a=n,o=0,c=0,l=null,u=[],f=new Li,h=new mi(-1,1,1,-1,0,1),p=new Ui(2,2),g=new en({vertexShader:Fh,fragmentShader:Bb,uniforms:{tDiffuse:{value:null},uThreshold:{value:1.04},uKnee:{value:.36}},depthTest:!1,depthWrite:!1}),_=new en({vertexShader:Fh,fragmentShader:kb,uniforms:{tDiffuse:{value:null},uStep:{value:new it(1,0)}},depthTest:!1,depthWrite:!1}),m=new en({vertexShader:Fh,fragmentShader:zb,uniforms:{tScene:{value:null},tBloom1:{value:null},tBloom2:{value:null},tBloom3:{value:null},uTexelSize:{value:new it(1/1e3,1/1e3)},uExposure:{value:1.06},uBloomStrength:{value:.24},uVibrance:{value:.08},uSharpness:{value:.85}},depthTest:!1,depthWrite:!1}),d=new Ft(p,m);f.add(d);function b(){l?.dispose(),l=null;for(let S of u)S.a.dispose(),S.b.dispose();u=[]}function M(S,v){if(a&&(S=Math.max(1,Math.round(S)),v=Math.max(1,Math.round(v)),!(l&&o===S&&c===v))){b(),o=S,c=v,l=new jt(S,v,{type:r,format:cn,minFilter:Lt,magFilter:Lt,depthBuffer:!0,stencilBuffer:!1,samples:s});for(let w of[2,4,8]){let y=Math.max(1,Math.round(S/w)),E=Math.max(1,Math.round(v/w)),R={type:r,format:cn,minFilter:Lt,magFilter:Lt,depthBuffer:!1,stencilBuffer:!1};u.push({a:new jt(y,E,R),b:new jt(y,E,R),w:y,h:E})}}}function x(S,v){if(!a){i.render(S,v);return}let w=i.getDrawingBufferSize(new it);M(w.x,w.y);let y=i.toneMapping,E=i.autoClear;i.toneMapping=In,i.setRenderTarget(l),i.clear(!0,!0,!1),i.render(S,v),i.autoClear=!1,d.material=g,g.uniforms.tDiffuse.value=l.texture,i.setRenderTarget(u[0].a),i.clear(!0,!1,!1),i.render(f,h),d.material=_;for(let R=0;R<u.length;R++){let C=R===0?u[0].a.texture:u[R-1].a.texture;_.uniforms.tDiffuse.value=C,_.uniforms.uStep.value.set(1/u[R].w,0),i.setRenderTarget(u[R].b),i.render(f,h),_.uniforms.tDiffuse.value=u[R].b.texture,_.uniforms.uStep.value.set(0,1/u[R].h),i.setRenderTarget(u[R].a),i.render(f,h)}d.material=m,m.uniforms.tScene.value=l.texture,m.uniforms.tBloom1.value=u[0].a.texture,m.uniforms.tBloom2.value=u[1].a.texture,m.uniforms.tBloom3.value=u[2].a.texture,m.uniforms.uTexelSize.value.set(1/o,1/c),m.uniforms.uExposure.value=i.toneMappingExposure,i.setRenderTarget(null),i.clear(!0,!1,!1),i.render(f,h),i.toneMapping=y,i.autoClear=E}return{render:x,setEnabled(S){let v=n&&!!S;a!==v&&(a=v,a||b())},setBloom(S){Number.isFinite(S)&&(m.uniforms.uBloomStrength.value=Ee.clamp(S,0,.8))},snapshot:()=>({enabled:a,hasFloat:n,msaaSamples:a?s:0,bloomStrength:m.uniforms.uBloomStrength.value}),dispose(){b(),p.dispose(),g.dispose(),_.dispose(),m.dispose()}}}function Oh(i,e,t,n,r=null){let s=[t,r].filter(Boolean);if(!s.length)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let a=R=>["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(R.schema)&&["Yuki","UniversalMMD"].includes(R.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(R.targetCharacter)&&Array.isArray(R.clips)&&R.clips.length<=24;for(let R of s){if(!a(R))throw new Error("Invalid learned motion catalog");if(R.schema.endsWith("/3")&&R.targetCharacter!=="Universal"&&(R.stance!=="standing"||n!=="standing"))throw new Error("Standing motion requires standing source")}let o=n==="standing",c=R=>{let C=[];if(i.traverse(O=>{O.isBone&&O.name===R&&C.push(O)}),C.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+R);return C[0]},l=c("Bip001-Head"),u=i.getObjectByName("Bip001-Spine3")||i.getObjectByName("Bip001-Spine2")||c("Bip001-Spine"),f={};for(let[R,C]of[["left","L"],["right","R"]]){let O=c(`Bip001-${C}-UpperArm`),k=c(`Bip001-${C}-Forearm`),N=c(`Bip001-${C}-Hand`);if(k.parent!==O||N.parent!==k)throw new Error("Learned arm binding mismatch");f[R]={upper:O,lower:k,hand:N}}let h=R=>R.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let p=1,g=h(f.right.upper).sub(h(f.left.upper)).normalize(),_=h(l).sub(h(u)).normalize();new D().crossVectors(g,_).dot(e.position.clone().sub(h(u)))<0&&(p=-1);let m=new Map;for(let R of s){let C=R.schema.endsWith("/3")&&R.stance==="standing",O=R.targetCharacter==="Universal";for(let k of R.clips){if(!(["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(k.id)||/^mmd_[a-zA-Z0-9_-]{1,48}$/.test(k.id))||m.has(k.id)||!Number.isInteger(k.frames)||k.frames<2||k.frames>1800||!Number.isFinite(k.fps)||k.fps<=0||k.fps>60)throw new Error("Invalid learned clip");let H={};for(let[V,le]of Object.entries(k.channels||{})){let fe=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(V)?1:["headDelta","chestDelta",...C?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(V)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...C?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(V)||/^(left|right)Finger[0-4]_[0-2]$/.test(V)?3:0;if(!fe||typeof le!="string")throw new Error("Invalid learned channel");let de=Uint8Array.from(atob(le),ce=>ce.charCodeAt(0));if(de.byteLength!==k.frames*fe*4)throw new Error("Learned channel truncated");let Y=new Float32Array(de.buffer);if(!Y.every(Number.isFinite))throw new Error("Non-finite learned pose");if(fe===1&&Y.some(ce=>ce<-.31||ce>1.11))throw new Error("Invalid learned finger angle");for(let ce=0;fe>1&&ce<k.frames;ce++){let z=0;for(let j=0;j<fe;j++)z+=Y[ce*fe+j]**2;if(Math.abs(z-1)>.01)throw new Error("Invalid learned direction/quaternion")}H[V]={values:Y,width:fe}}if(!H.headDelta)throw new Error("Missing learned head reference");let L=k.id.startsWith("mmd_"),I=k.id.includes("dance")||L,W=I?C?"standing-dance":"seated-dance":k.id==="yuki_Peace_hand"?"peace":k.id==="yuki_hello"?"greeting":"head",F=I?["left","right"]:W==="head"?[]:["right"];if(!R.schema.endsWith("/1")&&(k.motionKind!==W||JSON.stringify(k.arms)!==JSON.stringify(F)))throw new Error("Invalid learned action capability");if(I&&!o&&!O)continue;let U=I?o&&C?"standing-dance":"seated-dance":W;if(U==="standing-dance"&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(V=>!H[V]))throw new Error("Missing standing body channels");m.set(k.id,{...k,kind:U,arms:F,channels:H,duration:(k.frames-1)/k.fps})}}let d=Object.fromEntries([["left","L"],["right","R"]].map(([R,C])=>[R,Array.from({length:5},(O,k)=>[c(`Bip001-${C}-Finger${k}`),c(`Bip001-${C}-Finger${k}1`),c(`Bip001-${C}-Finger${k}2`)])])),b=o?c("Bip001-Pelvis"):null,M=o?Object.fromEntries([["left","L"],["right","R"]].map(([R,C])=>[R,{thigh:c(`Bip001-${C}-Thigh`),calf:c(`Bip001-${C}-Calf`),foot:c(`Bip001-${C}-Foot`),toe:c(`Bip001-${C}-Toe0`)}])):{},x={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function S(){let R=h(f.right.upper).sub(h(f.left.upper)).normalize(),C=h(l).sub(h(u));C.addScaledVector(R,-C.dot(R)).normalize();let O=new D().crossVectors(R,C).multiplyScalar(p).normalize();return{right:R,up:C,front:O,vector:k=>R.clone().multiplyScalar(k[0]).addScaledVector(C,k[1]).addScaledVector(O,k[2])}}let v=new Map,w=null,y=-1;function E(R,C,O,k={}){let N=m.get(R);if(!N||O<=0)return;let H=N.kind==="standing-dance",L=H&&Number.isFinite(k.amplitude)?Ee.clamp(k.amplitude,.5,1.2):1;x.fingerWrites=0,x.armWrites=0,x.chestWrites=0,x.workspaceAdjusted=0,(R!==w||C<=y||C-y>.2)&&v.clear(),w=R,y=C,i.updateWorldMatrix(!0,!0);let I=S(),W=Ee.clamp(C*N.fps,0,N.frames-1),F=Math.floor(W),U=Math.min(F+1,N.frames-1),V=W-F;function le(me){let Ae=N.channels[me];if(!Ae)return null;if(H&&Ae.width===1)return[Ee.lerp(Ae.values[F],Ae.values[U],V)];if(H&&Ae.width===3)return new D().fromArray(Ae.values,F*3).lerp(new D().fromArray(Ae.values,U*3),V).normalize().toArray();if(Ae.width===1){let Be=0;for(let $ of[-2,-1,0,1,2]){let J=Ee.clamp(W+$,0,N.frames-1),oe=Math.floor(J),pe=Math.min(oe+1,N.frames-1);Be+=(Ae.values[oe]+(Ae.values[pe]-Ae.values[oe])*(J-oe))*($===0?.4:Math.abs($)===1?.2:.1)}return[Be]}if(Ae.width===4)return new He().fromArray(Ae.values,F*4).slerp(new He().fromArray(Ae.values,U*4),V).normalize().toArray();let Ne=new D;for(let Be of[-2,-1,0,1,2]){let $=Ee.clamp(W+Be,0,N.frames-1),J=Math.floor($),oe=Math.min(J+1,N.frames-1);Ne.add(new D().fromArray(Ae.values,J*3).lerp(new D().fromArray(Ae.values,oe*3),$-J).multiplyScalar(Be===0?.4:Math.abs(Be)===1?.2:.1))}return Ne.normalize().toArray()}function fe(me,Ae,Ne,Be,$=O){let J=Ae.angleTo(Ne),oe=Ee.degToRad(Be);J>oe&&x.limited++,me.quaternion.copy(Ae).slerp(Ne,$*Math.min(L,oe/Math.max(J,1e-8))).normalize()}function de(me,Ae,Ne,Be,$=O){me.parent.updateWorldMatrix(!0,!1);let J=me.quaternion.clone(),oe=J.clone(),pe=(Ae?Ae.position.clone():new D(1,0,0)).multiply(me.scale).applyQuaternion(oe).normalize(),_e=Ne.clone().transformDirection(me.parent.matrixWorld.clone().invert()),Oe=new He().setFromUnitVectors(pe,_e).multiply(oe).normalize();v.set(me,Oe.clone()),fe(me,J,Oe,Be,$),me.updateWorldMatrix(!1,!0)}function Y(me,Ae,Ne,Be){let $=new qe().makeBasis(I.right,I.up,I.front),J=new qe().makeRotationFromQuaternion(new He(...Ae)),oe=$.clone().multiply(J).multiply($.clone().invert());me.parent.updateWorldMatrix(!0,!1);let pe=new qe().extractRotation(me.parent.matrixWorld),_e=pe.clone().invert().multiply(oe).multiply(pe),Oe=me.quaternion.clone(),nt=new He().setFromRotationMatrix(_e).multiply(Oe).normalize();fe(me,Oe,nt,Ne,Be),me.updateWorldMatrix(!1,!0)}let ce=new D(0,1,0).transformDirection(i.parent.matrixWorld),z=H?Math.min(...Object.values(M).map(me=>h(me.foot).dot(ce))):0;x.legWrites=0,x.groundCorrection=0,x.sourceTime=C,x.sourceFrame=W,x.sourceFPS=N.fps,x.amplitude=L,x.sourceBPM=H?R.includes("90bpm")?90:R.includes("120bpm")?120:60:null,H&&(Y(b,le("pelvisDelta"),30,O),I=S());let j=le("chestDelta");if(j&&(Y(u,j,H?35:10,O*(H?1:.35)),I=S(),x.chestWrites=1),H){for(let[$,J]of Object.entries(M)){if(J.calf.parent!==J.thigh||J.foot.parent!==J.calf)throw new Error("Standing leg hierarchy mismatch");de(J.thigh,J.calf,I.vector(le($+"Thigh")),110,O),de(J.calf,J.foot,I.vector(le($+"Calf")),150,O),Y(J.foot,le($+"FootDelta"),45,O),x.legWrites+=3}let me=Ee.clamp(z-Math.min(...Object.values(M).map($=>h($.foot).dot(ce))),-.18,.18),Ae=h(b),Ne=b.parent.matrixWorld.clone().invert(),Be=Ae.clone().addScaledVector(ce,me).applyMatrix4(Ne).sub(Ae.clone().applyMatrix4(Ne));b.position.add(Be),b.updateWorldMatrix(!1,!0),x.groundCorrection=me}function ye(me,Ae,Ne,Be){let $=h(me.upper),J=h(me.lower).distanceTo($),oe=h(me.hand).distanceTo(h(me.lower)),pe=$.clone().addScaledVector(I.vector(Ae),J),_e=pe.clone().addScaledVector(I.vector(Ne),oe),Oe=h(u),nt=_e.clone().sub(Oe),G=nt.dot(I.right),Ge=nt.dot(I.up),Fe=nt.dot(I.front),P=[G,Ge,Fe];Ge=Ee.clamp(Ge,-.16,.6);let T=(1-Ee.smoothstep(Math.abs(G),.16,.28))*Ee.smoothstep(Ge,-.42,-.32)*(1-Ee.smoothstep(Ge,.18,.32));Fe+=Math.max(0,.23-Fe)*T,_e.copy(Oe).addScaledVector(I.right,G).addScaledVector(I.up,Ge).addScaledVector(I.front,Fe);let K=_e.clone().sub(h(l));K.length()<.14&&_e.copy(h(l)).add(K.length()>.001?K.setLength(.14):I.front.clone().multiplyScalar(.14)),(P[1]!==Ge||P[2]!==Fe)&&x.workspaceAdjusted++;let Z=_e.clone().sub($),se=Ee.clamp(Z.length(),Math.abs(J-oe)+.015,(J+oe)*.98);Z.normalize(),_e.copy($).addScaledVector(Z,se);let ie=I.right.clone().multiplyScalar(Be==="right"?1:-1),X=ie.clone().addScaledVector(I.front,.3).addScaledVector(I.up,.2);X.addScaledVector(Z,-X.dot(Z)),X.length()<1e-4&&X.copy(I.front).addScaledVector(Z,-I.front.dot(Z)),X.normalize();let Q=(J*J-oe*oe+se*se)/(2*se),te=Math.sqrt(Math.max(0,J*J-Q*Q)),he=$.clone().addScaledVector(Z,Q).addScaledVector(X,te);return{upper:he.clone().sub($).normalize(),lower:_e.sub(he).normalize()}}for(let me of N.arms){let Oe=function(){let ie=h(Ne[1][0]).sub(h(Ne[4][0])).normalize(),X=h(Ne[2][0]).sub(h(Ae.hand));return X.addScaledVector(ie,-X.dot(ie)).normalize(),new qe().makeBasis(ie,X,new D().crossVectors(ie,X).normalize())},Ae=f[me],Ne=d[me],Be=le(me+"Upper"),$=le(me+"Lower");if(!Be||!$)continue;let J=["greeting","peace"].includes(N.kind)?O*Ee.smoothstep($[1],-1,1):O*(H?1:.72),oe=N.kind==="seated-dance"?ye(Ae,Be,$,me):{upper:I.vector(Be),lower:I.vector($)};de(Ae.upper,Ae.lower,oe.upper,120,J),de(Ae.lower,Ae.hand,oe.lower,170,J),x.armWrites+=2;let pe=le(me+"HandWidth"),_e=le(me+"HandForward");if(!pe||!_e)continue;i.updateWorldMatrix(!0,!0);let nt=I.vector(pe).normalize(),G=I.vector(_e);G.addScaledVector(nt,-G.dot(nt)).normalize();let Ge=new qe().makeBasis(nt,G,new D().crossVectors(nt,G).normalize()),Fe=Ge.multiply(Oe().invert()),P=Ae.hand,T=new qe().extractRotation(P.parent.matrixWorld),K=T.clone().invert().multiply(Fe).multiply(T),Z=P.quaternion.clone(),se=new He().setFromRotationMatrix(K).multiply(Z).normalize();fe(P,Z,se,N.kind==="greeting"?110:N.kind==="seated-dance"?75:110,J*(N.kind==="seated-dance"?.7:1)),P.updateWorldMatrix(!1,!0);for(let ie=0;ie<5;ie++)for(let X=0;X<3;X++){let Q=le(`${me}Finger${ie}_${X}`);if(!Q)continue;let te=new D(...Q).normalize(),he=X?new D(...le(`${me}Finger${ie}_${X-1}`)).normalize():new D(0,1,0),Te=Ee.clamp(Math.atan2(-te.z,Math.max(.1,te.y))-Math.atan2(-he.z,Math.max(.1,he.y)),-.15,ie===0?.45:1.1),ve=X===0&&ie!==0?Ee.clamp(Math.atan2(te.x,te.y),-.3,.3):0,we=le(`${me}Curl${ie}_${X}`),ze=le(`${me}Spread${ie}`);we&&(Te=we[0]),X===0&&ie!==0&&ze&&(ve=ze[0]),N.kind==="peace"&&(Te=ie===1||ie===2?.02:ie===0?.4:.95,X===0&&(ve=ie===1?.14:ie===2?-.08:0));let Ye=me==="left"?-1:1,Ke=Ne[ie][X],q=Ke.quaternion.clone(),ue=new He().fromArray(Ke.userData.bindLocalQuaternion||q.toArray()).multiply(new He().setFromAxisAngle(new D(0,0,1),ve*Ye)).multiply(new He().setFromAxisAngle(new D(0,1,0),Te*Ye));Ke.quaternion.copy(q).slerp(ue,O).normalize(),x.fingerWrites++}}let De=le("headDelta");if(De){let me=new qe().makeBasis(I.right,I.up,I.front),Ae=new qe().makeRotationFromQuaternion(new He(...De)),Ne=me.clone().multiply(Ae).multiply(me.clone().invert());l.parent.updateWorldMatrix(!0,!1);let Be=new qe().extractRotation(l.parent.matrixWorld),$=Be.clone().invert().multiply(Ne).multiply(Be),J=l.quaternion.clone(),oe=new He().setFromRotationMatrix($).multiply(J).normalize();fe(l,J,oe,40)}i.updateWorldMatrix(!0,!0);let xe=new Set;i.traverse(me=>{me.isSkinnedMesh&&!xe.has(me.skeleton)&&(me.skeleton.update(),xe.add(me.skeleton))})}return{available:()=>[...m.values()].map(R=>({id:R.id,label:R.label,duration:R.duration,arms:[...R.arms],kind:R.kind})),apply:E,snapshot:()=>{i.updateWorldMatrix(!0,!0);let R=S(),C=f.right;return{...x,parentDeterminant:C.upper.parent.matrixWorld.determinant(),rightUpper:h(C.lower).sub(h(C.upper)).normalize().toArray(),rightLower:h(C.hand).sub(h(C.lower)).normalize().toArray(),handHeight:h(C.hand).sub(h(C.lower)).dot(R.up)}}}}function Bh(i,e){if(e===rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zs||e===Ga){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===zs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Pm(i){let e=new Map,t=new Map,n=i.clone();return Lm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Lm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Lm(i.children[n],e.children[n],t)}var Pr=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new _c(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _c(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=zi.extractUrlBase(e);a=zi.resolveURL(l,this.path)}else a=zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ns(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Om){try{a[pt.KHR_BINARY_GLTF]=new af(e)}catch(f){r&&r(f);return}s=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new df(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case pt.KHR_MATERIALS_UNLIT:a[f]=new Gh;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[f]=new of(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[f]=new lf;break;case pt.KHR_MESH_QUANTIZATION:a[f]=new cf;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Hb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Vt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vh=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new et(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ki(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new La(u),l.distance=f;break;case"spot":l=new Pa(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),_i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Gh=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let r=[];e.color=new et(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(s,s)}return Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(s[0],s[1],s[2],gn),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(s[0],s[1],s[2],gn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},nf=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},rf=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},_c=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}},sf=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,p=[];for(let g of f){let _=new qe,m=new D,d=new He,b=new D(1,1,1),M=new Ma(g.geometry,g.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,S),c.SCALE&&b.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,_.compose(m,d,b));let x=null;for(let S in c)if(S==="_COLOR_0"){let v=c[S];M.instanceColor=new Ni(v.array,v.itemSize,v.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(x===null){let w=M.geometry;x=new Jt,x.name=w.name;for(let y in w.attributes)x.setAttribute(y,w.attributes[y]);for(let y in w.morphAttributes)x.morphAttributes[y]=w.morphAttributes[y];w.index!==null&&x.setIndex(w.index),x.morphTargetsRelative=w.morphTargetsRelative;for(let y of w.groups)x.addGroup(y.start,y.count,y.materialIndex);w.boundingBox!==null&&(x.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(x.boundingSphere=w.boundingSphere.clone()),x.drawRange.start=w.drawRange.start,x.drawRange.count=w.drawRange.count,x.userData=Object.assign({},w.userData),M.geometry=x}let v=c[S];x.setAttribute(S,new Ni(v.array,v.itemSize,v.normalized))}Ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Om="glTF",Ya=12,Nm={JSON:1313821514,BIN:5130562},af=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ya,s=new DataView(e,Ya),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Nm.JSON){let l=new Uint8Array(e,Ya+a,o);this.content=n.decode(l)}else if(c===Nm.BIN){let l=Ya+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},of=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let f=hf[u]||u.toLowerCase();o[f]=a[u]}for(let u in e.attributes){let f=hf[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],p=qs[h.componentType];l[f]=p.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(p)},o,l,gn,h)})})}},lf=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},cf=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},vc=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,f=(n-t)/u,h=f*f,p=h*f,g=e*l,_=g-l,m=-2*p+3*h,d=p-h,b=1-m,M=d-h+f;for(let x=0;x!==o;x++){let S=a[_+x+o],v=a[_+x+c]*u,w=a[g+x+o],y=a[g+x]*u;s[x]=b*S+M*v+m*w+d*y}return s}},Vb=new He,uf=class extends vc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Vb.fromArray(s).normalize().toArray(s),s}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Um={9728:Ht,9729:Lt,9984:El,9985:Os,9986:Tr,9987:Jn},Dm={33071:Wn,33648:xs,10497:Cn},kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gb={CUBICSPLINE:void 0,LINEAR:yr,STEP:xr},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new br({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),i.DefaultMaterial}function Ir(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xb(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let f=e[l];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(h)}if(r){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(h)}if(s){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],f=l[1],h=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function qb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yb(i){let e,t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hh(t.attributes):e=i.indices+":"+Hh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Hh(i.targets[n]);return e}function Hh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ff(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Kb=new qe,df=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new pi(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Ir(s,o,r),_i(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(zi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=kh[r.type],o=qs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ot(l,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=kh[r.type],l=qs[r.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,m;if(p&&p!==f){let d=Math.floor(h/p),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count,M=t.cache.get(b);M||(_=new l(o,d*p,r.count*p/u),M=new ws(_,p/u),t.cache.add(b,M)),m=new Es(M,c,h%p/u,g)}else o===null?_=new l(r.count*c):_=new l(o,h,r.count*c),m=new Ot(_,c,g);if(r.sparse!==void 0){let d=kh.SCALAR,b=qs[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new b(a[1],M,r.sparse.count*d),v=new l(a[2],x,r.sparse.count*c);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=S.length;w<y;w++){let E=S[w];if(m.setX(E,v[w*c]),c>=2&&m.setY(E,v[w*c+1]),c>=3&&m.setZ(E,v[w*c+2]),c>=4&&m.setW(E,v[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Um[h.magFilter]||Lt,u.minFilter=Um[h.minFilter]||Jn,u.wrapS=Dm[h.wrapS]||Cn,u.wrapT=Dm[h.wrapT]||Cn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==Lt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let h=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){let m=new $t(_);m.needsUpdate=!0,h(m)}),t.load(zi.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),_i(f,a),f.userData.mimeType=a.mimeType||Zb(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Is,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Cs,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return br}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[pt.KHR_MATERIALS_UNLIT]){let f=r[pt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,s,t))}else{let f=s.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],gn),o.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Dt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=tn);let u=s.alphaMode||zh.OPAQUE;if(u===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===zh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qt){let f=s.emissiveFactor;o.emissive=new et().setRGB(f[0],f[1],f[2],gn)}return s.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(l).then(function(){let f=new a(o);return s.name&&(f.name=s.name),_i(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ir(r,f,s),f})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Fm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Yb(l),f=r[u];if(f)a.push(f.promise);else{let h;l.extensions&&l.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Fm(new Jt,l,t),l.mode===Xn.TRIANGLE_STRIP?h=h.then(p=>Bh(p,Ga)):l.mode===Xn.TRIANGLE_FAN&&(h=h.then(p=>Bh(p,zs))),r[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Wb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let p=0,g=u.length;p<g;p++){let _=u[p],m=a[p],d,b=l[p];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,x=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=M&&x?new va(_,b):new Ft(_,b),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(m.mode===Xn.LINES)d=new Sa(_,b);else if(m.mode===Xn.LINE_STRIP)d=new vr(_,b);else if(m.mode===Xn.LINE_LOOP)d=new wa(_,b);else if(m.mode===Xn.POINTS)d=new Ea(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&qb(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),_i(d,s),m.extensions&&Ir(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Ir(r,f[0],s),f[0];let h=new zt;s.extensions&&Ir(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Ee.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new mi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let f=a[l];if(f){o.push(f);let h=new qe;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ba(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){let p=r.channels[f],g=r.samplers[p.sampler],_=p.target,m=_.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){let h=f[0],p=f[1],g=f[2],_=f[3],m=f[4],d=[];for(let M=0,x=h.length;M<x;M++){let S=h[M],v=p[M],w=g[M],y=_[M],E=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,v,w,y,E);if(R)for(let C=0;C<R.length;C++)d.push(R[C])}let b=new Ls(s,void 0,d);return _i(b,r),b})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,Kb)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);if(u.userData.pivot!==void 0&&f.length>0){let p=u.userData.pivot,g=f[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Ts:l.length>1?u=new zt:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=a),_i(u,s),s.extensions&&Ir(n,u,s),s.matrix!==void 0){let f=new qe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let f=r.associations.get(u);r.associations.set(u,{...f})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new zt;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&Ir(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++){let h=c[u];h.parent!==null?s.add(Pm(h)):s.add(h)}let l=u=>{let f=new Map;for(let[h,p]of r.associations)(h instanceof vn||h instanceof $t)&&f.set(h,p);return u.traverse(h=>{let p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}lr[s.path]===lr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(lr[s.path]){case lr.weights:u=Fi;break;case lr.rotation:u=fi;break;case lr.translation:case lr.scale:u=Bi;break;default:n.itemSize===1?u=Fi:u=Bi;break}let f=r.interpolation!==void 0?Gb[r.interpolation]:yr,h=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let _=new u(c[p]+"."+lr[s.path],t.array,h,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ff(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof fi?uf:vc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $b(i,e,t){let n=e.attributes,r=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=ff(qs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let f=s[l];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let _=ff(qs[h.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new _n;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Fm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=hf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return dt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),_i(i,e),$b(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Xb(i,e.targets,t):i})}function Bm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),c=Math.sin(t*n),l=Math.cos(t*n),u=l*r*a-c*s*o,f=-l*r*o-c*s*a,h=l*s*a-c*r*o,p=l*s*o+c*r*a;return[-u,-h,-f,p]}function km(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((h,p)=>[h.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),c=s.clone().sub(r).normalize(),l=new D().crossVectors(c,o).normalize(),u=new D;for(let h of["L","R"]){let p=e.get("Bip001-"+h+"-Foot"),g=e.get("Bip001-"+h+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(l)<0&&l.negate();let f=i.geometry.getAttribute("position");return(h,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let _=new D;for(let S=0;S<3;S++)_.addScaledVector(new D().fromBufferAttribute(f,h[S]),p.getComponent(S));let m=_.sub(t),d=Math.abs(m.dot(c))/a,b=m.dot(o)/a,M=m.dot(l)/a;if(d>.72)return null;let x=null;return b>-.38&&b<-.04&&d<.23&&M>.025?x="pelvis_front":b>-.35&&b<.18&&M<-.025?x="hips":b>.43&&b<1.02&&M>.025&&d<.67?x="chest":b>.1&&b<=.43&&M>.025?x=d>.48?"waist":"abdomen":b>.16&&b<1.02&&M<-.025&&(x="back"),x?{id:x,confidence:.85,source:"bind-pose-surface",coordinates:[d,b,M]}:null}}function jb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function zm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=jb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function Hm(i,e,t,n=null){let r=new Sr,s=new WeakMap,a=new Map,o=new WeakMap,c=0,l=document.createElement("canvas");l.width=l.height=32;let u=l.getContext("2d",{willReadFrequently:!0});function f(g,_){if(!["torso","leg"].includes(g?.id))return g;let m=U=>i.getObjectByName(U),d=U=>m(U)?.getWorldPosition(new D),b=d("Bip001-Pelvis"),M=d("Bip001-Neck"),x=d("Bip001-L-UpperArm"),S=d("Bip001-R-UpperArm"),v=d("Bip001-Head"),w=d("EyeJoint_L"),y=d("EyeJoint_R");if(!b||!M||!x||!S||!v||!w||!y)return g;let E=M.distanceTo(b);if(E<1e-5)return g;let R=M.clone().sub(b).normalize(),C=S.clone().sub(x).normalize(),O=new D().crossVectors(C,R).normalize(),N=w.add(y).multiplyScalar(.5).sub(v).dot(O);if(Math.abs(N)<E*.002)return g;N<0&&O.negate();let H=_.clone().sub(b),L=H.dot(R)/E,I=H.dot(O)/E;if(Math.abs(H.dot(C))/E>.7)return g;let F=null;return L>-.4&&L<.16&&I<-.025?F="hips":g.id==="torso"&&(L>.45&&L<.95&&I>.06?F="chest":L>.05&&L<.46&&I>.06?F="abdomen":L>.16&&L<.95&&I<-.06&&(F="back")),F?{id:F,confidence:.75,source:"rig-surface-estimate"}:g}function h(g){for(let _=g;_;_=_.parent)if(!_.visible)return!1;return!0}function p(g,_){if(!g||!_)return 1;try{let m=g.image,d=m.width,b=m.height;if(!d||!b||!u)return null;let M=_.clone();g.transformUv(M);let x=Math.min(d-1,Math.max(0,Math.floor(M.x*d))),S=Math.min(b-1,Math.max(0,Math.floor(M.y*b))),v=Math.floor(x/32)*32,w=Math.floor(S/32)*32;s.has(g)||s.set(g,++c);let y=s.get(g)+":"+v+":"+w,E=a.get(y);if(E)a.delete(y),a.set(y,E);else{u.clearRect(0,0,32,32),u.drawImage(m,v,w,Math.min(32,d-v),Math.min(32,b-w),0,0,Math.min(32,d-v),Math.min(32,b-w));let R=u.getImageData(0,0,32,32).data;E=new Uint8Array(1024);for(let C=0;C<1024;C++)E[C]=R[C*4+3];a.set(y,E),a.size>128&&a.delete(a.keys().next().value)}return E[(S-w)*32+x-v]/255}catch{return null}}return(g,_)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(_)||!m.width||!m.height||g<m.left||g>m.right||_<m.top||_>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let d=[];i.traverse(M=>{M.isMesh&&h(M)&&(M.isSkinnedMesh&&(M.skeleton.update(),M.computeBoundingSphere(),M.computeBoundingBox()),d.push(M))});let b=new Set;n?.traverse(M=>{M.isMesh&&h(M)&&(d.push(M),b.add(M))}),r.setFromCamera(new it((g-m.left)/m.width*2-1,-(_-m.top)/m.height*2+1),e);for(let M of r.intersectObjects(d,!1)){let x=M.object,S=x.material,v=p(x.userData.previewMap,M.uv),w=S.alphaTest||(S.transparent?.1:0);if(S.clippingPlanes?.some(I=>I.distanceToPoint(M.point)<0)||v!==null&&v<w)continue;if(b.has(x))return null;let y=[M.face.a,M.face.b,M.face.c],E=y.map(I=>x.getVertexPosition(I,new D)),R=x.worldToLocal(M.point.clone()),C=oi.getBarycoord(R,...E,new D),O=[],k=x.geometry.getAttribute("skinIndex"),N=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&k&&N&&C)for(let I=0;I<3;I++)for(let W=0;W<4;W++)O.push({name:x.skeleton.bones[k.getComponent(y[I],W)]?.name,weight:N.getComponent(y[I],W)*C.getComponent(I)});o.has(x)||o.set(x,km(x));let H=zm(O),L=o.get(x)(y,C,H)||f(H,M.point);return{skinBones:O.filter(I=>I.weight>.05).map(I=>I.name),mesh:x.userData.snowbreakSurfaceKey,triangle:M.faceIndex,barycentric:C?.toArray(),anatomy:L,uv:M.uv?.toArray()||null,point:M.point.toArray(),distance:M.distance,alphaVerified:v!==null,material:x.userData.snowbreakMaterialName}}return null}}var Hi={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function Za(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Lr(i,e){let t=Za(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(Hi,i.anatomy.id))return{...i.anatomy,label:Hi[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(Hi,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:Hi[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:Hi[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var pf={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function Vm(i,e,t){let n=new zt;n.visible=!1,e.add(n);let r=new Map;i.traverse(d=>{d.isMesh&&d.userData.snowbreakSurfaceKey&&r.set(d.userData.snowbreakSurfaceKey,d)});let s={},a=!1,o=!0,c=[],l=0,u=!1;function f(){for(let d of c)d.overlay.geometry.dispose(),d.overlay.material.dispose(),d.overlay.removeFromParent();c=[],l=0}function h(){f(),u=!1;let d=new Map;for(let[b,M]of Object.entries(s)){let x=/^(surface_\d+):(\d+)$/.exec(b);if(!x)continue;let S=r.get(x[1]),v=Number(x[2]);if(!S)continue;let w=S.geometry,y=w.getAttribute("position"),E=w.index,R=w.getAttribute("uv"),C=Lr({mesh:x[1],triangle:v,alphaVerified:!0},{[b]:M});if(!C||v*3+2>=(E?E.count:y.count)||S.userData.previewMap&&!R)continue;if(l>=5e3){u=!0;continue}l++;let O=x[1]+":"+C.id,k=d.get(O);k||(k={source:S,region:C.id,vertices:[],keys:[]},d.set(O,k)),k.keys.push(b);for(let N=0;N<3;N++)k.vertices.push(E?E.getX(v*3+N):v*3+N)}for(let b of d.values()){let M=new Jt;M.setAttribute("position",new Ot(new Float32Array(b.vertices.length*3),3).setUsage(ah));let x=b.source.geometry.getAttribute("uv");if(x){let y=new Float32Array(b.vertices.length*2);b.vertices.forEach((E,R)=>{y[R*2]=x.getX(E),y[R*2+1]=x.getY(E)}),M.setAttribute("uv",new Ot(y,2))}let S=b.source.material,v=new Qt({color:pf[b.region],map:b.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),w=new Ft(M,v);w.frustumCulled=!1,w.renderOrder=100,n.add(w),c.push({...b,overlay:w})}o=!1}function p(d){for(let b=d;b;b=b.parent)if(!b.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&h(),i.updateWorldMatrix(!0,!0);let d=new D,b=new Map;for(let M of c){let{source:x,overlay:S}=M;if(S.visible=p(x),!S.visible)continue;x.updateMatrixWorld(!0),x.isSkinnedMesh&&x.skeleton.update();let v=b.get(x);v||(v=new Map,b.set(x,v));let w=S.geometry.getAttribute("position");M.vertices.forEach((y,E)=>{let R=v.get(y);R||(x.getVertexPosition(y,d).applyMatrix4(x.matrixWorld),R=d.toArray(),v.set(y,R)),w.setXYZ(E,...R)}),w.needsUpdate=!0}}function _(){let d=c.find(M=>M.overlay.visible),b=d?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:l,truncated:u,first:d&&b?{key:d.keys[0],vertices:[0,1,2].map(M=>new D().fromBufferAttribute(b,M).toArray()),screen:[0,1,2].map(M=>new D().fromBufferAttribute(b,M).project(t).toArray())}:null}}function m(d){let b=n.visible;n.visible=!1;try{return d()}finally{n.visible=b}}return{set(d,b=a){return s=d,a=!!b,o=!0,a||f(),g(),_()},update:g,snapshot:_,hideForCapture:m,dispose(){f(),n.removeFromParent()}}}function bc(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new qe().compose(new D(...i.position),new He(...i.quaternion).normalize(),new D(...i.scale))}async function Gm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=bc(n.characterWorld).invert(),s=new zt,a=new zt,o=new Set,c=[],l=[],u=[],f=new Map,h=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let v of n.anchors){if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(v.id)||f.has(v.id)||!Number.isFinite(v.viewYawDegrees)||Math.abs(v.viewYawDegrees)>180)throw new Error("Invalid scene anchor");f.set(v.id,{inverse:bc(v.characterWorld).invert(),viewYawDegrees:v.viewYawDegrees})}if(!f.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Rn,g=!0;for(let v of n.objects){let w=i.getAsset(v.assetRole);if(typeof v.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(v.id)||o.has(v.id)||w?.kind!=="geometry")throw new Error("Invalid scene object");if(v.group!==void 0&&!["room","furniture"].includes(v.group)||v.cutaway!==void 0&&typeof v.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(v.id);let y=r.clone().multiply(bc(v.world)),E=(await new Pr().parseAsync(w.bytes.slice().buffer,"")).scene,R=0;E.traverse(O=>{if(O.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");O.isMesh&&(R+=(O.geometry.index?.count||O.geometry.attributes.position.count)/3)});let C=new zt;C.name=v.id,C.matrixAutoUpdate=!1,C.matrix.copy(y),C.add(E),(v.group==="room"?a:s).add(C),t(E),E.traverse(O=>{O.isMesh&&(v.group==="room"&&(O.material.side=Mn),v.cutaway&&(O.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&v.group==="furniture"&&(O.material.side=tn),l.push(O.material)),(v.group==="room"||v.cutaway)&&(O.material.needsUpdate=!0))}),v.group!=="room"&&E.traverse(O=>{O.isMesh&&u.push(O)}),c.push({id:v.id,assetRole:v.assetRole,group:v.group||"furniture",cutaway:!!v.cutaway,triangles:R,matrix:y.toArray(),holder:C,world:bc(v.world)})}e.add(s),s.updateMatrixWorld(!0);function _(v,w){if(!l.length)return;let y=v.position.clone().sub(w),E=y.length();if(E<.001)return;y.divideScalar(E);let R=w.clone().addScaledVector(y,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,E*.5));p.setFromNormalAndCoplanarPoint(y.negate(),R)}function m(v){let w=!!v;if(w!==g){g=w;for(let y of l)y.clippingPlanes=g?[p]:null,y.needsUpdate=!0}}let d=new Map,b=new Sr,M=new D(0,1,0);function x(v){if(!f.size)return null;let w=f.get(v);if(!w)throw new Error("Unknown source scene anchor");if(h!==v){h=v;for(let y of c)y.holder.matrix.copy(w.inverse).multiply(y.world),y.matrix=y.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),d.clear()}return w.viewYawDegrees}f.size&&x(n.defaultAnchorId);function S(v){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let w=s.worldToLocal(v.clone()),y=Math.round(w.x/.015)+":"+Math.round(w.z/.015),E=d.get(y);if(E===void 0){let R=new qt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),C=s.localToWorld(new D(w.x,R.max.y+.3,w.z)),O=M.clone().transformDirection(s.matrixWorld).negate();b.set(C,O),E=null;for(let k of b.intersectObjects(u,!1)){let N=k.face?.normal.clone().transformDirection(k.object.matrixWorld);if(N&&Math.abs(N.dot(O))>.65){E=s.worldToLocal(k.point.clone()).y;break}}d.set(y,E),d.size>512&&d.delete(d.keys().next().value)}return E===null?null:{clearance:w.y-E,normal:M.clone().transformDirection(s.matrixWorld),height:E}}return{root:s,contactSurface:S,setAnchor:x,hasCutaway:l.length>0,updateView:_,setRoomVisible:v=>{a.visible=!!v},setCutaway:m,setVisible:v=>{s.visible=!!v},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:h,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:l.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:c.map(({holder:v,world:w,...y})=>({...y,matrix:[...y.matrix]})),originalSceneVerified:!1})}}var Jb=new Set(["head","left_hand","right_hand"]),Qb=new Set(["tap","double_tap","long_press","stroke"]);function Wm(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Jb.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Qb.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Xm(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function eM(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let c=o*o,l=c*o;return(2*l-3*c+1)*r[1]+(l-2*c+o)*a*r[3]+(-2*l+3*c)*s[1]+(l-c)*a*s[2]}function qm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let h of i.clips){let p=e.getAsset(h.animationRole),g=e.current.resources.find(d=>d.role===h.animationRole);if(p?.kind!=="animation"||h.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(h.sourceSha256)||h.frames!==p.data.frames||h.fps!==p.data.fps||!Array.isArray(h.curves)||h.curves.length>64)throw new Error("Morph curve animation mismatch");let _=n.get(h.sourceSha256);if(_){if(_.frames!==h.frames||_.fps!==h.fps||JSON.stringify(_.curves)!==JSON.stringify(h.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,h.sourceSha256);continue}let m=new Set;for(let d of h.curves){if(typeof d.name!="string"||!d.name.length||d.name.length>128||m.has(d.name)||!Array.isArray(d.keys)||!d.keys.length||d.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(d.name),s.add(d.name);let b=-1/0;for(let M of d.keys){if(!Array.isArray(M)||M.length!==5||!M.every(Number.isFinite)||M[0]<-120||M[0]>120||M[0]<=b||Math.abs(M[1])>4||Math.abs(M[2])>1e6||Math.abs(M[3])>1e6||![0,1,2].includes(M[4]))throw new Error("Invalid morph curve key");if(b=M[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(h.sourceSha256,h),r.set(p.data,h.sourceSha256)}let o=[];if(t.traverse(h=>{if(!h.isMesh||!h.morphTargetDictionary||!h.morphTargetInfluences)return;let p=new Map;for(let g of s){let _=h.morphTargetDictionary[g];if(_!==void 0){if(!Number.isInteger(_)||_<0||_>=h.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,_)}}p.size&&o.push({mesh:h,indices:p})}),[...s].some(h=>!o.some(p=>p.indices.has(h))))throw new Error("Missing exact morph target");let c=null,l=0,u={};function f(h,p){l=p,c=h&&r.get(h)||null,u={};let g=n.get(c);for(let _ of g?.curves||[])u[_.name]=eM(_.keys,p);for(let{mesh:_,indices:m}of o)for(let[d,b]of m)_.morphTargetInfluences[b]=u[d]??0}return{apply:f,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:c,time:l,values:{...u},weights:o.map(({mesh:h,indices:p})=>Object.fromEntries([...p].map(([g,_])=>[g,h.morphTargetInfluences[_]]))),originalExpressionFidelity:!1})}}function mf(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(c=>!c.targets?.length)){let{targetNames:c,...l}=r;n.extras=l;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(c=>typeof c!="string"||!c.length||c.length>128)||!n.primitives?.length||n.primitives.some(c=>(c.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((c,l)=>[c,l]))})}}}async function Ym(i,e,{isCurrent:t=()=>!0,universalMotions:n=null,performanceMode:r=null}={}){let s=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};s();let a=e.getAsset("viewOrientation")?.data;if(a&&(a.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(a.yawDegrees)||Math.abs(a.yawDegrees)>180))throw new Error("Invalid view orientation");let o=-Math.PI/2+Ee.degToRad(a?.yawDegrees||0),c=new mc({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),l=new Li,u=new zt,f=new zt,h=new Xt(32,1,.15,100);u.rotation.y=o,l.add(u),u.add(f);let p=Cm(l,c),g=Im(c),_=bd();_.configure({mode:r||localStorage.getItem("snowRenderMode")||"adaptive"}),g.setEnabled(_.snapshot().mode!=="battery");let m=0;function d(ie){_.configure(ie);let X=_.snapshot();return p.setBudget(X),g.setEnabled(X.mode!=="battery"),m=0,se(),M()}function b(){H||c.renderLists?.dispose?.()}function M(){return{..._.snapshot(),postFx:g.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:c.getPixelRatio(),drawCalls:c.info.render.calls,triangles:c.info.render.triangles,gpuResources:{textures:c.info.memory.textures,geometries:c.info.memory.geometries},gpuTimingAvailable:!1}}let x=null,S,v,w,y,E,R,C=null,O=null,k=null,N=null,H=!1,L=null,I=0,W=[],F=new Set,U=new Set,V=new Set,le=new Map,fe=new Map,de=new Map,Y=new Map,ce=new Map,z=new Set,j=new Map,ye=e.getAsset("rootMotionPolicy")?.data,De=0,xe=0,me=0,Ae=0,Ne=null,Be=null,$={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},J=0,oe=0,pe=null;function _e(){u.rotation.set(Ee.degToRad($.pitch),o+J+Ee.degToRad($.yaw),Ee.degToRad($.roll)),f.rotation.set(Ee.degToRad(Oe.pitch),Ee.degToRad(Oe.yaw+oe),Ee.degToRad(Oe.roll)),u.updateMatrixWorld(!0)}let Oe={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function nt(ie){let X={...Oe,...ie};if(Object.values(X).some(he=>!Number.isFinite(he)))throw new Error("Invalid character placement");for(let he of["x","y","depth"])X[he]=Ee.clamp(X[he],-1.5,1.5);X.scale=Ee.clamp(X.scale,.3,4),X.yaw=Ee.clamp(X.yaw,-180,180),X.pitch=Ee.clamp(X.pitch,-65,65),X.roll=Ee.clamp(X.roll,-45,45),X.stretchX=X.stretchY=1,Oe=X,u.updateWorldMatrix(!0,!1),h.updateMatrixWorld();let Q=new D(X.x,X.y,X.depth).applyQuaternion(h.quaternion),te=u.matrixWorld.clone().invert();return f.position.copy(Q.transformDirection(te).multiplyScalar(Math.hypot(X.x,X.y,X.depth))),f.scale.setScalar(X.scale),_e(),{...Oe}}function G(ie){let X={...$,...ie};for(let Q of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(X[Q]))throw new Error("Invalid framing");return $={scale:Ee.clamp(X.scale,.3,4),x:Ee.clamp(X.x,-1.5,1.5),y:Ee.clamp(X.y,-1.5,1.5),yaw:((X.yaw+180)%360+360)%360-180,pitch:Ee.clamp(X.pitch,-65,65),roll:Ee.clamp(X.roll,-45,45),stretchX:Ee.clamp(X.stretchX,.65,1.5),stretchY:Ee.clamp(X.stretchY,.65,1.5)},_e(),se(),{...$}}function Ge(){if(w){u.rotation.y=o,u.updateMatrixWorld(!0);let Q=w.getObjectByName("Bip001-L-UpperArm"),te=w.getObjectByName("Bip001-R-UpperArm");if(Q&&te){let he=Q.getWorldPosition(new D).sub(te.getWorldPosition(new D)),Te=new D().crossVectors(he,new D(0,1,0));if(Math.hypot(Te.x,Te.z)>.02){J=-Math.atan2(Te.x,Te.z),_e();return}}}if(!pe)return;u.rotation.y=o,u.updateMatrixWorld(!0);let ie=pe.bone.getWorldQuaternion(new He),X=pe.axis.clone().applyQuaternion(ie);Math.hypot(X.x,X.z)>.1&&(J=pe.heading-Math.atan2(X.x,X.z)),_e()}function Fe(){return $.yaw=0,Ge(),se(),{...$}}function P(ie){ie.traverse(X=>{if(X.isBone&&(X.userData.bindLocalQuaternion=X.quaternion.toArray()),!X.isMesh)return;F.add(X.geometry);for(let Te of Array.isArray(X.material)?X.material:[X.material]){U.add(Te);for(let ve of Object.values(Te))ve?.isTexture&&V.add(ve)}let Q=X.material.name,te=le.get(Q)||null,he=ce.get(Q)||{};if(X.userData.snowbreakSurfaceKey="surface_"+xe++,X.userData.snowbreakMaterialName=Q,X.userData.previewMap=te,he.transparent!==void 0&&typeof he.transparent!="boolean")throw new Error("Invalid transparent override");if(he.renderOrder!==void 0&&(!Number.isInteger(he.renderOrder)||Math.abs(he.renderOrder)>100))throw new Error("Invalid material sorting");X.renderOrder=he.renderOrder||0,X.material=Rm(Q,te,fe.get(Q),he,de.get(Q)||null,Y.get(Q)||null),U.add(X.material),X.castShadow=X.isSkinnedMesh&&!he.transparent,X.receiveShadow=X.material.userData.profile==="cloth-or-room"})}function T(ie,X){if(!X)return;let Q=new Map(X.tracks.map(te=>[te.bone,te]));ie.traverse(te=>{if(!te.isBone)return;let he=Q.get(te.name)?.keys?.[0];if(!he||he.length!==10||!he.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");te.position.fromArray(he),te.quaternion.fromArray(he,3),te.scale.fromArray(he,7)})}function K(ie,X,Q=W,te=!1){if(!X)return;let he=new Map(X.tracks.map(Te=>[Te.bone,Te]));if(he.size!==X.tracks.length)throw new Error("Duplicate animation bones");ie.traverse(Te=>{if(!Te.isBone||ie===w&&!z.has(Te)||te&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(Te.name))return;let ve=he.get(Te.name);if(!(te&&!ve)){if(!ve||ve.keys.length!==X.frames||ve.keys.some(we=>we.length!==10||!we.every(Number.isFinite)||Math.abs(we.slice(3,7).reduce((ze,Ye)=>ze+Ye*Ye,0)-1)>.05))throw new Error("Invalid bone animation");Q.push({bone:Te,track:ve,clip:X})}})}function Z(){if(!H){H=!0,removeEventListener("resize",se),c.setAnimationLoop(null),R?.dispose(),S?.dispose(),v?.dispose(),g.dispose(),p.dispose();for(let ie of F)ie.dispose();for(let ie of U)ie.dispose();for(let ie of V){ie.dispose();let X=ie.image;X?.close?X.close():X?.tagName==="CANVAS"?X.width=X.height=0:X?.tagName==="IMG"&&(X.src=""),ie.image=null}le.clear(),fe.clear(),de.clear(),Y.clear(),ce.clear(),V.clear(),U.clear(),F.clear(),W.length=0,w?.removeFromParent(),E?.root?.removeFromParent(),c.renderLists?.dispose?.(),c.dispose()}}function se(){if(H||!w)return;Ae++;let ie=i.clientWidth||innerWidth,X=i.clientHeight||innerHeight,Q=_.ratio(ie,X,devicePixelRatio||1);(!Ne||Ne.w!==ie||Ne.h!==X||Ne.ratio!==Q)&&(c.setPixelRatio(Q),c.setSize(ie,X,!1),Ne={w:ie,h:X,ratio:Q},me++),h.aspect=ie/X,u.updateMatrixWorld(!0),!C&&!Be&&(w.traverse(q=>{q.isSkinnedMesh&&(q.skeleton.update(),q.computeBoundingBox())}),Be=new qt().setFromObject(w).applyMatrix4(u.matrixWorld.clone().invert()));let te=(O||C||Be).clone().applyMatrix4(u.matrixWorld),he=te.getSize(new D),Te=te.getCenter(new D);p.frame(te);let ve=Math.tan(Ee.degToRad(16)),we=Math.max(he.y/(2*ve),he.x/(2*ve*h.aspect))*1.25+he.z;if(C){we=0;for(let q of[te.min.x,te.max.x])for(let Re of[te.min.y,te.max.y])for(let ue of[te.min.z,te.max.z])we=Math.max(we,ue-Te.z+Math.max(Math.abs(q-Te.x)/(ve*h.aspect),Math.abs(Re-Te.y)/ve)*1.12)}let ze=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2",Ye=!!E?.snapshot?.().available,Ke=!!O&&Ye&&!ze;h.position.copy(Te).add(new D(0,0,we)),h.lookAt(Te),h.zoom=Ke?1.05:$.scale,h.setViewOffset(ie,X,Ke?0:-$.x*ie,Ke?0:-$.y*X,ie,X),h.updateProjectionMatrix(),h.projectionMatrix.elements[0]*=$.stretchX,h.projectionMatrix.elements[5]*=$.stretchY,h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),E?.updateView(h,Te)}try{let Ac=function(be){let re=ut.get(be);if(!re)throw new Error("Unknown sample");xt=re.overlay?ue==="sample"&&xt?xt:{bindings:ue==="standby"?Ie:ge,duration:ue==="standby"?Ke:Ze,time:I,envelope:O}:null,Ve=be,ge=re.bindings,Ze=re.duration;let $e=ut.get(re.sceneOf)||re,ot=re.overlay?xt.envelope:$e.sceneFraming?j.get($e.sourceSha256):null;if(re.sceneFraming&&!ot)throw new Error("Scene framing envelope missing");let tt=E.setAnchor?.($e.id??be),rt=O!==ot;if(tt!=null){let A=-Math.PI/2+Ee.degToRad(tt);rt||=Math.abs(o-A)>1e-8,o=A,J=0,_e()}return O=ot,Dr(0),!E.snapshot().available&&$e.sceneFraming&&(Ge(),rt=!0),rt&&se(),{id:be,label:re.label,duration:re.duration}},Dr=function(be,re=ge,$e=Ze){if(H||!Number.isFinite(be))return;let ot=xt&&re===ge?xt:null;ot&&ot.duration>0&&Dr((ot.time+be)%ot.duration,ot.bindings,ot.duration);let tt=ue;N=re[0]?.clip?.generatorMetadata?.sourceSha256||null,ue=re===Ie&&Ke>0?"standby":"sample",I=Math.max(0,Math.min($e,be));for(let{bone:rt,track:A,clip:B}of re){let ae=I*B.fps,ne=Math.min(Math.floor(ae),B.frames-1),ee=Math.min(ne+1,B.frames-1),Me=ae-ne,Ce=A.keys[ne],Pe=A.keys[ee];(!ot||!z.has(rt))&&rt.position.set(Ee.lerp(Ce[0],Pe[0],Me),Ee.lerp(Ce[1],Pe[1],Me),Ee.lerp(Ce[2],Pe[2],Me)),rt.quaternion.copy(ze.fromArray(Ce,3).slerp(Ye.fromArray(Pe,3),Me)),(!ot||!z.has(rt))&&rt.scale.set(Ee.lerp(Ce[7],Pe[7],Me),Ee.lerp(Ce[8],Pe[8],Me),Ee.lerp(Ce[9],Pe[9],Me))}if(Te.apply((re.find(rt=>!z.has(rt.bone))||re[0])?.clip,I),ye){w.position.x=w.position.z=0,u.updateMatrixWorld(!0);let rt=w.getObjectByName(ye.bone).getWorldPosition(new D).applyMatrix4(w.matrixWorld.clone().invert());w.position.x=ye.reference[0]-rt.x,w.position.z=ye.reference[1]-rt.z}u.updateMatrixWorld(!0),De=ve.length;for(let rt of ve)rt.update()},Br=function(be){return Gi=Oh(w,h,e.getAsset("learnedMotions")?.data,Se?.stance,be),Gi.available()},ao=function(){let be=[];return w.updateWorldMatrix(!0,!0),w.traverse(re=>{re.userData.sourceAttachment&&re.traverse($e=>{if(!$e.isSkinnedMesh)return;$e.skeleton.update();let ot=new D,tt=$e.geometry.attributes.position.count;for(let rt=0;rt<tt;rt++)ot.add($e.getVertexPosition(rt,new D).applyMatrix4($e.matrixWorld));be.push({kind:re.userData.sourceAttachment,vertices:tt,center:ot.divideScalar(tt).toArray(),sharedBones:$e.skeleton.bones.every(rt=>w.getObjectByName(rt.name)===rt)})})}),be};if(ye&&(ye.schema!=="snowbreak-home-root-lock/1"||ye.bone!=="Bip001"||!Array.isArray(ye.reference)||ye.reference.length!==2||!ye.reference.every(be=>Number.isFinite(be)&&Math.abs(be)<10)))throw new Error("Invalid home root motion policy");let ie=e.getAsset("materials")?.data;if(ie){if(ie.schema!=="snowbreak-material-preview/1"||ie.originalShaderVerified!==!1||!Array.isArray(ie.materials)||ie.materials.length>64)throw new Error("Invalid material preview");x=vd(ie,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096,_.snapshot().mode);let be=new Map;for(let re of ie.materials){if(s(),typeof re.name!="string"||re.name.length>256||ce.has(re.name))throw new Error("Invalid material identity");let $e=re.renderState||{};if($e.alphaCutoff!==void 0&&(!Number.isFinite($e.alphaCutoff)||$e.alphaCutoff<0||$e.alphaCutoff>1))throw new Error("Invalid material alpha");if($e.doubleSided!==void 0&&typeof $e.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(ce.set(re.name,$e),$e.opacity===0||!re.diffuseAssetId)continue;let ot=e.getAsset("texture_"+re.diffuseAssetId);if(ot?.kind!=="texture")throw new Error("Missing local diffuse texture");let tt=be.get(re.diffuseAssetId);if(!tt){let A=URL.createObjectURL(new Blob([ot.bytes],{type:ot.data?.mime||"image/png"}));try{tt=await new pi().loadAsync(A)}finally{URL.revokeObjectURL(A)}let B=x.limitFor(re.diffuseAssetId);if(tt.image.width>B||tt.image.height>B){let ae=document.createElement("canvas"),ne=Math.min(B/tt.image.width,B/tt.image.height);ae.width=Math.round(tt.image.width*ne),ae.height=Math.round(tt.image.height*ne),ae.getContext("2d").drawImage(tt.image,0,0,ae.width,ae.height);let ee=tt.image;tt.image=ae,ee.src="",tt.needsUpdate=!0}tt.colorSpace=Dt,tt.anisotropy=c.capabilities.getMaxAnisotropy(),tt.wrapS=tt.wrapT=Cn,tt.flipY=!1,be.set(re.diffuseAssetId,tt),V.add(tt)}if(le.set(re.name,tt),re.normalAssetId){if(!/^[a-f0-9]{64}$/.test(re.normalAssetId)||ie.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let A=e.getAsset("texture_"+re.normalAssetId);if(A?.kind!=="texture")throw new Error("Missing original normal texture");let B=be.get("normal:"+re.normalAssetId);if(!B){let ae=URL.createObjectURL(new Blob([A.bytes],{type:A.data?.mime||"image/png"}));try{B=await new pi().loadAsync(ae)}finally{URL.revokeObjectURL(ae)}let ne=x.limitFor(re.normalAssetId,!0);if(B.image.width>ne||B.image.height>ne){let ee=B.image,Me=document.createElement("canvas"),Ce=ne/Math.max(ee.width,ee.height);Me.width=Math.round(ee.width*Ce),Me.height=Math.round(ee.height*Ce),Me.getContext("2d").drawImage(ee,0,0,Me.width,Me.height),B.image=Me,ee.src="",B.needsUpdate=!0}B.flipY=!1,B.wrapS=B.wrapT=Cn,B.colorSpace=Nn,B.anisotropy=c.capabilities.getMaxAnisotropy(),be.set("normal:"+re.normalAssetId,B),V.add(B)}fe.set(re.name,B)}if(re.ormAssetId){if(!/^[a-f0-9]{64}$/.test(re.ormAssetId))throw new Error("Invalid ORM texture declaration");let A=e.getAsset("texture_"+re.ormAssetId);if(A?.kind!=="texture")throw new Error("Missing ORM material texture");let B=be.get("orm:"+re.ormAssetId);if(!B){let ae=URL.createObjectURL(new Blob([A.bytes],{type:A.data?.mime||"image/webp"}));try{B=await new pi().loadAsync(ae)}finally{URL.revokeObjectURL(ae)}let ne=x.limitFor(re.ormAssetId,!0);if(B.image.width>ne||B.image.height>ne){let ee=B.image,Me=document.createElement("canvas"),Ce=ne/Math.max(ee.width,ee.height);Me.width=Math.round(ee.width*Ce),Me.height=Math.round(ee.height*Ce),Me.getContext("2d").drawImage(ee,0,0,Me.width,Me.height),B.image=Me,ee.src="",B.needsUpdate=!0}B.flipY=!1,B.wrapS=B.wrapT=Cn,B.colorSpace=Nn,B.anisotropy=c.capabilities.getMaxAnisotropy(),be.set("orm:"+re.ormAssetId,B),V.add(B)}de.set(re.name,B)}let rt=re.hairHighlightAssetId||re.faceShadowAssetId;if(rt){if(!/^[a-f0-9]{64}$/.test(rt))throw new Error("Invalid auxiliary shader texture declaration");let A=e.getAsset("texture_"+rt);if(A?.kind!=="texture")throw new Error("Missing auxiliary shader texture");let B=be.get("extra:"+rt);if(!B){let ae=URL.createObjectURL(new Blob([A.bytes],{type:A.data?.mime||"image/webp"}));try{B=await new pi().loadAsync(ae)}finally{URL.revokeObjectURL(ae)}B.flipY=!1,B.wrapS=B.wrapT=Cn,B.colorSpace=Nn,B.anisotropy=c.capabilities.getMaxAnisotropy(),be.set("extra:"+rt,B),V.add(B)}Y.set(re.name,B)}}}let X=e.getAsset("body");if(!X)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let Q=e.getAsset("framingBounds")?.data;if(Q){let be=re=>Array.isArray(re)&&re.length===3&&re.every($e=>Number.isFinite($e)&&Math.abs($e)<=100);if(Q.schema!=="snowbreak-framing-bounds/1"||Q.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||Q.bodySha256!==e.current.resources.find(re=>re.role==="body")?.assetId||!be(Q.min)||!be(Q.max)||Q.min.some((re,$e)=>re>=Q.max[$e])||!Number.isInteger(Q.evaluatedFrames)||Q.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(C=new qt(new D(...Q.min),new D(...Q.max)),k=Q,Q.clips){if(!Array.isArray(Q.clips)||Q.clips.length>16)throw new Error("Invalid clip envelopes");for(let re of Q.clips){if(!/^[a-f0-9]{64}$/.test(re.sourceSha256)||j.has(re.sourceSha256)||!be(re.min)||!be(re.max)||re.min.some(($e,ot)=>$e>=re.max[ot]))throw new Error("Invalid clip envelope");j.set(re.sourceSha256,new qt(new D(...re.min),new D(...re.max)))}}}w=(await new Pr().register(mf).parseAsync(X.bytes.slice().buffer,"")).scene,f.add(w),s(),P(w),w.traverse(be=>{be.isBone&&z.add(be)});let te=e.getAsset("bodyAnimation")?.data;N=te?.generatorMetadata?.sourceSha256||null,T(w,te),K(w,te);let he=e.getAsset("faceAttachment")?.data;if(he){if(he.schema!=="snowbreak-face-attachment/1"||he.candidateOnly!==!0||he.originalAssemblyVerified!==!1||he.boneName!=="Bip001-Head"||he.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let be=w.getObjectByName(he.boneName),re=he.relativeLocationCm;if(!be?.isBone||!re||![re.X,re.Y,re.Z].every(rt=>Number.isFinite(rt)&&Math.abs(rt)<100))throw new Error("Invalid socket parent or position");let $e=e.getAsset("face");if(!$e)throw new Error("Missing face geometry");y=(await new Pr().register(mf).parseAsync($e.bytes.slice().buffer,"")).scene,s(),P(y),T(y,e.getAsset("faceAnimation")?.data);let ot=e.getAsset("faceAnimation")?.data;if(!ot||!te||ot.frames!==te.frames||ot.fps!==te.fps)throw new Error("Face/body sample timing mismatch");K(y,ot);let tt=new zt;if(tt.position.set(re.X*.01,re.Z*.01,re.Y*.01),tt.quaternion.fromArray(Bm(he.relativeRotationDegrees)),be.add(tt),tt.add(y),he.defaultVisible!==void 0&&typeof he.defaultVisible!="boolean")throw new Error("Invalid face visibility");y.visible=he.defaultVisible===!0}E=await Gm(e,u,P),s(),c.localClippingEnabled=!!E.hasCutaway;let Te=qm(e.getAsset("morphCurves")?.data,e,y||w),ve=[];w.traverse(be=>{be.isSkinnedMesh&&!ve.includes(be.skeleton)&&ve.push(be.skeleton),be.isSkinnedMesh&&(be.frustumCulled=!1)});let we=te?(te.frames-1)/te.fps:0,ze=new He,Ye=new He,Ke=0,q="D\u5F85\u673A",Re=!1,ue="sample",Ie=[],Se=e.getAsset("stateTransition")?.data;if(Se){let be=Se.schema==="snowbreak-state-preview/1"&&Se.show==="Sc01_Hand_A_D"&&Se.fromState==="A"&&Se.toState==="D",re=Se.schema==="snowbreak-standby-preview/1"&&Se.characterId===e.current.characterId&&Number.isInteger(Se.standbyConfigId)&&Se.standbyConfigId>0&&Number.isInteger(Se.sourceSkinId)&&/^[a-f0-9]{64}$/.test(Se.sourceTableSha256)&&typeof Se.label=="string"&&Se.label.length<=40&&typeof Se.startAsStandby=="boolean",$e=Se.schema==="snowbreak-standby-preview/2"&&Se.stance==="standing"&&Se.characterId===e.current.characterId&&Se.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&Se.startAsStandby===!0;if(!be&&!re&&!$e||Se.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(re||$e)&&(q=Se.label,Re=Se.startAsStandby);let ot=e.getAsset("standbyBody")?.data,tt=y?e.getAsset("standbyFace")?.data:null;if(!ot||y&&(!tt||ot.frames!==tt.frames||ot.fps!==tt.fps))throw new Error("Standby clip timing mismatch");let rt=new Map(ot.tracks.map(B=>[B.bone,B])),A=tt?new Map(tt.tracks.map(B=>[B.bone,B])):new Map;Ie=W.map(B=>{let ae=B.clip===te?ot:tt,ne=(B.clip===te?rt:A).get(B.bone.name);if(!ne||ne.keys.length!==ae.frames||ne.keys.some(ee=>ee.length!==10||!ee.every(Number.isFinite)||Math.abs(ee.slice(3,7).reduce((Me,Ce)=>Me+Ce*Ce,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:B.bone,track:z.has(B.bone)?Dh(ne):ne,clip:ae}}),Ke=(ot.frames-1)/ot.fps}let ge=W,Ze=we,Ve="default",xt=null,ut=new Map([["default",{bindings:W,duration:we,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),Rt=e.getAsset("sampleCatalog")?.data;if(Rt){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(Rt.schema)||Rt.characterId!==e.current.characterId||Rt.originalInteractionVerified!==!1||!Array.isArray(Rt.samples)||!Rt.samples.length||Rt.samples.length>24||!/^[a-f0-9]{64}$/.test(Rt.sourceTableSha256))throw new Error("Invalid sample catalog");ut.clear();for(let re of Rt.samples){if(typeof re.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(re.id)||ut.has(re.id)||typeof re.label!="string"||re.label.length>64||Rt.schema.endsWith("/1")&&(!Number.isInteger(re.sourceShowElementId)||re.sourceShowElementId<1))throw new Error("Invalid sample identity");let $e=e.getAsset(re.bodyRole),ot=re.faceRole?e.getAsset(re.faceRole):null;if($e?.kind!=="animation"||y&&(ot?.kind!=="animation"||($e.data.frames!==ot.data.frames||$e.data.fps!==ot.data.fps)&&!(re.independentFaceTiming===!0&&Number.isInteger(re.sourceShowElementId)&&re.sourceShowElementId>0)))throw new Error("Sample body/face mismatch");if(Rt.schema.endsWith("/2")&&re.sourceBodySha256!==($e.data.generatorMetadata?.sourceSha256||e.current.resources.find(rt=>rt.role===re.bodyRole)?.assetId))throw new Error("Sample source mismatch");let tt=W;if((re.bodyRole!=="bodyAnimation"||y&&re.faceRole!=="faceAnimation")&&(tt=[],K(w,$e.data,tt,re.overlay==="upper-body"),y)){if(!ot)throw new Error("Sample requires face");K(y,ot.data,tt)}if(re.persistentState===!0&&e.current.characterId==="Fenny")for(let rt=0;rt<tt.length;rt++)z.has(tt[rt].bone)&&(tt[rt]={...tt[rt],track:Am(tt[rt].track)});if(re.persistentState!==void 0&&typeof re.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(re.endPolicy!==void 0&&!["hold","loop"].includes(re.endPolicy))throw new Error("Invalid scene end policy");ut.set(re.id,{id:re.id,bindings:tt,duration:Math.max(($e.data.frames-1)/$e.data.fps,ot?(ot.data.frames-1)/ot.data.fps:0),overlay:re.overlay==="upper-body",label:re.label,sourceShowElementId:re.sourceShowElementId,sceneFraming:re.sceneFraming===!0,sourceSha256:$e.data.generatorMetadata?.sourceSha256,sceneOf:re.sceneOf,persistentState:re.persistentState===!0,endPolicy:re.endPolicy,afterScene:re.afterScene})}let be=ut.get(Rt.defaultId);if(!be||be.bindings!==W)throw new Error("Default sample must reference primary clip");Ve=Rt.defaultId;for(let re of ut.values()){if(re.sceneOf!==void 0&&(typeof re.sceneOf!="string"||!ut.has(re.sceneOf)))throw new Error("Missing reaction scene");if(re.afterScene!==void 0&&(typeof re.afterScene!="string"||!ut.get(re.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let Fn=Wm(Rt);u.updateMatrixWorld(!0);let Fr=w.getObjectByName("Bip001-Pelvis")||w.getObjectByName("Bip001");if(Fr){let be=Fr.getWorldQuaternion(new He),re=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((ot,tt)=>{let rt=ot.clone().applyQuaternion(be),A=tt.clone().applyQuaternion(be);return Math.hypot(A.x,A.z)-Math.hypot(rt.x,rt.z)})[0],$e=re.clone().applyQuaternion(be);pe={bone:Fr,axis:re,heading:Math.atan2($e.x,$e.z)}}R=Vm(w,l,h);let cr=Tm(w,be=>{oe=be,_e()},()=>$.yaw+Oe.yaw),to=Hm(w,h,i,E.root);v=Sm(w,h,i,to,e.getAsset("sceneInteractions")?.data,E.contactSurface,e.current.characterId),S=Em(w,h,i),se(),await c.compileAsync(l,h),s(),addEventListener("resize",se),c.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){_.resetClock();return}if(!_.begin())return;let be=_.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(be-m)>.02&&(m=be,se()),cr.restore(),v.restore(),S.restore(),L?.(),cr.tick(),v.tick(),S.tick(),R.update(),g.render(l,h)});let no=()=>{let be=[];return w.traverse(re=>{re.isMesh&&be.push({name:re.userData.snowbreakMaterialName,textured:!!re.userData.previewMap,normalMapped:!!re.material.normalMap,diffuseSize:re.material.map?[re.material.map.image.width,re.material.map.image.height]:null,normalSize:re.material.normalMap?[re.material.normalMap.image.width,re.material.normalMap.image.height]:null,anisotropy:re.material.map?.anisotropy||0,profile:re.material.userData.profile,alphaTest:re.material.alphaTest})}),be},io=be=>w.traverse(re=>{re.isMesh&&(re.material.map=be?re.userData.previewMap:null,re.material.color.set(re.material.map?16777215:13289411),re.material.needsUpdate=!0)}),ni=()=>({available:!!y,visible:!!y?.visible,originalAssemblyVerified:!1}),js=be=>(y&&(y.visible=!!be,se()),ni()),ro=(be,re,$e)=>{if(H)throw new Error("Renderer disposed");R.hideForCapture(()=>{g.render(l,h),be.drawImage(i,0,0,re,$e)})},so=Uh(w),Or=Uh(w,{side:"left"}),Gi=Oh(w,h,e.getAsset("learnedMotions")?.data,Se?.stance,n);return{textureBudgetState:()=>x?.snapshot(),attachmentState:ao,performanceState:M,setRenderBudget:d,releaseCache:b,setUniversalMotions:Br,projectedBone:be=>{let re=w.getObjectByName(be)?.getWorldPosition(new D).project(h),$e=i.getBoundingClientRect();return re?[$e.left+(re.x+1)*$e.width/2,$e.top+(1-re.y)*$e.height/2]:null},modelDragScale:()=>{let be=Math.max(.05,w.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(h.position).dot(h.getWorldDirection(new D))),re=2*be*Math.tan(Ee.degToRad(h.fov/2))/h.zoom;return{x:re*h.aspect/$.stretchX,y:re/$.stretchY}},furnitureContacts:be=>Object.fromEntries(be.map(re=>{let $e=w.getObjectByName(re);return[re,$e?E.contactSurface?.($e.getWorldPosition(new D)):null]})),setModelFrame:nt,modelFrameState:()=>({...Oe}),placementState:()=>({model:f.matrixWorld.toArray(),room:E.root?.matrixWorld.toArray(),camera:h.matrixWorld.toArray()}),embodiment:cr,sceneInteractions:v,sensesState:S.snapshot,setGaze:S.gaze,senseTouch:S.touch,resetSenses:S.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(be=>[be,w.getObjectByName(be)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:p.snapshot,setLighting:p.set,boneWorldPoints:be=>Object.fromEntries(be.slice(0,32).map(re=>[re,w.getObjectByName(re)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let be=[];return w.traverse(re=>{re.isBone&&be.push({name:re.name,position:re.position.toArray(),quaternion:re.quaternion.toArray(),scale:re.scale.toArray()})}),be},cameraState:()=>({position:h.position.toArray(),projection:h.projectionMatrix.toArray()}),learnedOptions:()=>Gi.available(),applyLearnedMotion:(...be)=>Gi.apply(...be),learnedDiagnostics:()=>Gi.snapshot(),presentationDiagnostics:()=>({resizeCount:me,fitCount:Ae}),touchBindings:()=>Fn.map(be=>({...be,gestures:[...be.gestures]})),setRoomVisible:E.setRoomVisible,setSceneCutaway:E.setCutaway,sceneState:E.snapshot,setSceneVisible:E.setVisible,morphState:Te.snapshot,framingEnvelopeState:()=>({precomputed:!!C,evaluatedFrames:k?.evaluatedFrames||0,perClip:j.size,activeSource:N}),resourceState:()=>({sourceTextures:V.size,drawCalls:c.info.render.calls,triangles:c.info.render.triangles,geometries:c.info.memory.geometries,textures:c.info.memory.textures}),setSurfaceLabels:R.set,surfaceOverlayState:R.snapshot,armPreview:so,leftArmPreview:Or,dispose:Z,pickSurface:to,drawSnapshot:ro,faceViewer:Fe,setFrame:G,frameState:()=>({...$}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:no,setTexturePreview:io,faceCandidateState:ni,showFaceCandidate:js,selectSample:Ac,sampleOptions:()=>[...ut].map(([be,re])=>({id:be,label:re.label,duration:re.duration,sourceShowElementId:re.sourceShowElementId,persistentState:re.persistentState,endPolicy:re.endPolicy,afterScene:re.afterScene})),get duration(){return Ze},seek:Dr,standbyDuration:Ke,standbyLabel:q,startAsStandby:Re,seekStandby:be=>{O&&(O=null,se());let re=E.setAnchor?.(Rt?.defaultId);re!=null&&(o=-Math.PI/2+Ee.degToRad(re),J=0,_e()),Ke>0&&Dr(be%Ke,Ie,Ke)},setFrameHandler:be=>L=be,sampleState:()=>({lastSkeletonUpdates:De,sampleId:Ve,time:I,poseMode:ue,standbyDuration:Ke,nativeInitializationVerified:!1,viewYaw:u.rotation.y,autoYaw:J,bodyBones:W.filter(be=>be.clip===te).length,faceBones:W.filter(be=>be.clip!==te).length,hand:w.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(ie){throw Z(),ie}}var tM="action-plan/1",nM=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],iM={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},rM={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},sM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,aM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},oM={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},Zm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},Mc=(i,e,t)=>Math.max(e,Math.min(t,i));function lM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function cM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function uM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function gf(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:Mc(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var jm=i=>!!i&&sM.test(i);function hM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=rM[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||jm(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Km(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=jm(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function $m(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of Zm[s]||[])r.push(a);for(let s of Zm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let c=String(o.name||"").toLowerCase(),l=Array.isArray(o.tags)?o.tags:[];return c.includes(s)||l.includes(s)});if(a)return a}return null}function fM(i,e){let t=e&&e.channels||{},n=aM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,c])=>[o,+(c*i.intensity).toFixed(4)])})}return r}function dM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*Mc(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let c=n[a]||null,l=c&&Number.isFinite(c.default)?c.default:1,u=c&&Number.isFinite(c.min)?c.min:0,f=Mc(u+(l-u)*r,Math.min(l,u),Math.max(l,u));s.push({ch:a,id:o,blend:"set",weight:1,from:l,to:f,curve:[[0,l],[.18,f],[.75,f],[1,l]]})}return s}function pM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,c=a&&Number.isFinite(a.min)?a.min:0,l=c<o?c:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:l,curve:[[0,o],[.12,l],[.88,l],[1,o]]})}return n}function Ka(i,e,t={}){let n=gf(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:tM,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||oM[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+lM(uM(n)+"||"+(a?cM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!nM.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Km(n,a,null),n.type==="surface_reaction"){let l=a.localActions?.surface_reaction,u=l?.bindings?.[n.target];return a.kind!=="snowbreak"||l?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let l=a.localActions?.raise_hand;return a.kind!=="snowbreak"||l?.enabled!==!0||l.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(l.sides)||!l.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let l=pM(a);if(l.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...l),o.owns=l.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let c=hM(n,a);if(c){o.semanticStatus=c.tier,o.confidence=c.confidence,s.push("motion");let l=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,f=u&&u[c.motion.group]&&u[c.motion.group][c.motion.index];Array.isArray(f)&&l.push(...f),o.tracks.push({ch:"motion",group:c.motion.group,index:c.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:c.matchedBy,semanticTier:c.tier}),o.owns=Array.from(new Set(l)),o.candidates=Km(n,a,c.motion)}else{let l=iM[n.type],u=a.poses||{};if(!!l&&(u[l]===!0||Array.isArray(u)&&u.includes(l)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:l,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let h=fM(n,a);if(h.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=dM(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...h),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=$m(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(l=>l.ch==="expression")){let l=$m(n,a);l&&(o.tracks.push({ch:"expression",name:l.name,index:l.index,weight:Mc(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var Sc=(i,e,t)=>Math.max(e,Math.min(t,i));function mM(i){return i*i*(3-2*i)}function gM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*mM(Sc(o,0,1))}}return i[i.length-1][1]}function Jm(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function c(M,x,S){a.push({at:e(),kind:M,planId:x.planId,type:x.action.type,...S||{}}),a.length>40&&a.shift()}function l(M,x,...S){if(typeof x=="function")try{x(...S)}catch{}}function u(M,x){let S={plan:M,t0:x,done:!1};r.push(S),c("start",M);for(let v of M.tracks)v.ch==="motion"?l("motion",t.onMotion,v.group,v.index,M):v.ch==="pose"?l("pose",t.onPose,v.name,M):v.ch==="expression"?l("expression",t.onExpression,v,M):v.ch==="speech"&&l("speech",t.onSpeech,v.text,M);return S}function f(M,x,S){if(M.done)return;M.done=!0;let v=r.indexOf(M);v>=0&&r.splice(v,1),c("end",M.plan,{reason:S}),l("end",t.onEnd,M.plan,S)}function h(M,x,S){let v=e(),w=S||Ka(M,x);if(!w||w.stopped||!w.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:w&&w.planId};let y=Number.isFinite(w.action.priority)?w.action.priority:50,E=r[0];if(E){let R=Number.isFinite(E.plan.action.priority)?E.plan.action.priority:50;if(y<R)return s.length>=n&&s.shift(),s.push({plan:w,at:v}),c("queued",w,{behind:E.plan.planId}),{accepted:!0,queued:!0,planId:w.planId};f(E,v,"preempted")}return u(w,v),{accepted:!0,queued:!1,planId:w.planId,plan:w}}function p(M,x){let S=Math.max(1,M.duration),v=Math.max(0,Math.min(M.fadeIn||0,S*.5)),w=Math.max(0,Math.min(M.fadeOut||0,S*.5)),y=x*S,E=S-w,R=1;return v>0&&y<v&&(R=y/v),w>0&&y>E&&(R=Math.min(R,(S-y)/w)),Sc(R,0,1)}function g(M,x,S,v){for(let w of x.tracks){if(!w.curve||!w.id)continue;let E=gM(w.curve,S)*(w.weight===void 0?1:w.weight)*v,R=M[w.id];w.blend==="set"?(!R||v>=R.weight)&&(M[w.id]={id:w.id,value:E,blend:"set",weight:v,ch:w.ch}):R&&R.blend==="set"?R.value+=E:M[w.id]={id:w.id,value:(R?R.value:0)+E,blend:"add",weight:Math.max(R?R.weight:0,v),ch:w.ch}}}function _(M){let x=e(),S={t:x,channels:{},actions:[],finished:[]};for(let v of r.slice()){let w=Sc((x-v.t0)/Math.max(1,v.plan.duration),0,1),y=p(v.plan,w);y>0&&g(S.channels,v.plan,w,y),S.actions.push({planId:v.plan.planId,type:v.plan.action.type,progress:w,weight:y}),w>=1&&(S.finished.push(v.plan.planId),f(v,x,"done"))}if(!r.length&&s.length){let v=s.shift();u(v.plan,x),c("dequeued",v.plan)}return o=S,S}function m(M,x){let S=r.find(v=>v.plan.planId===M);return S?(f(S,e(),x||"interrupt"),!0):!1}function d(M){for(let x of r.slice())f(x,e(),M||"clear");s.length=0}function b(){return{active:r.map(M=>({planId:M.plan.planId,type:M.plan.action.type,progress:Sc((e()-M.t0)/Math.max(1,M.plan.duration),0,1)})),queue:s.map(M=>({planId:M.plan.planId,type:M.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:h,tick:_,interrupt:m,clear:d,snapshot:b,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var xM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function xf(i,e={}){let t=xM[i]||i;return gf({type:t,...e})}function Qm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,c=null,l=null,u=0,f="stopped",h=0,p=!1,g=!1,_=null,m=null,d=null,b=i.touchBindings?.()||[],M=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(M())||M()<=0)throw new Error("Audio metadata unavailable");let x=()=>p?t.ended?t.duration>=i.duration?M()*1e3:(_||(_={at:e(),time:t.duration*1e3}),Math.min(M()*1e3,_.time+Math.max(0,e()-_.at))):t.currentTime*1e3:e(),S={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(Y=>(Y==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},v=i.sampleOptions?.()||[],w=v.find(Y=>Y.persistentState)?.id||null;S.localActions.surface_reaction={enabled:b.length>0,bindings:Object.fromEntries(b.map(Y=>{let ce=v.find(j=>j.id===Y.sampleId),z=n?.(Y.sampleId);return[Y.region,{sampleId:Y.sampleId,animationDuration:(ce?.duration||0)*1e3,voiceDuration:(z?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function y(Y,ce,z="",j=!1){d={schema:"local-surface-reaction/1",id:ce.id,kind:Y,sampleId:ce.sampleId,region:ce.touch.region,touch:ce.touch,withOriginalVoice:ce.withVoice,recovered:j,reason:z,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(d)}catch{}}let E=Jm({now:x,handlers:{onMotion:Y=>f=Y==="local-arm-preview"?"local-arm-preview":Y==="standby-D"||Y==="standby-local"?"standby-preview":"playing",onPose:(Y,ce)=>{if(Y!=="snowbreak-raise-hand")return;let z=ce.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),z.begin(),o=z,f="local-arm-preview"}catch{z?.restore(),f="arm-failed"}},onEnd:(Y,ce)=>{if(h++,Y.action.type==="surface_reaction"&&m?.id===Y.planId){let z=m;if(m=null,p&&(t.pause(),ce!=="done"&&(t.currentTime=0),p=!1,_=null,s(!1)),ce==="done"){let j=!1;try{j=!!N().accepted&&f==="standby-preview"}catch{E.clear("restore-failed"),f="restore-failed"}y(j?"completed":"failed",z,j?"local-standby-restored":"local-standby-failed",j)}else y(ce.startsWith("audio-")?"failed":"cancelled",z,ce);return}if(Y.action.type==="snowbreak_standby"&&ce==="done"){N();return}if(Y.action.type==="snowbreak_arm_preview"||Y.action.type==="raise_hand"){o?.restore(),o=null,f="stopped",i.seek(0),ce==="done"&&i.startAsStandby&&N();return}if(p&&(t.pause(),ce!=="done"&&(t.currentTime=0),p=!1,_=null,s(!1)),ce==="done"&&l){let z=l;l=null,C(z.id,z.time);return}f=ce==="done"?"sample-ended":"stopped",i.seek(ce==="done"?i.duration:0),ce==="done"&&(Y.action.type==="snowbreak_standby"||g)&&N()}}});function R(){if(f==="standby-preview"&&H(),E.activeCount)return{accepted:!1,reason:"sample-busy"};let Y={type:"snowbreak_sample",source:"manual-preview",priority:80};return E.dispatch(Y,S,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:Y,duration:(p?M():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function C(Y,ce=0){return v.find(z=>z.id===Y)?.persistentState&&(w=Y),H(),i.selectSample(Y),c={id:Y,time:ce},f="scene-preview",i.seek(Math.min(ce,i.duration)),{accepted:!0}}async function O(Y,{withVoice:ce=!0}={}){let z=c||l;if(!z)return{accepted:!1};H(),i.selectSample(z.id),i.seek(z.time%i.duration),i.selectSample(Y),de(n?.(Y));let j=i.sampleOptions?.().find(ye=>ye.id===Y)?.afterScene;return l=j?{id:j,time:0}:z,g=!1,ce&&t?V():R()}function k(Y){if(c&&f==="scene-preview")return c.time+=Math.max(0,Math.min(100,Y))/1e3,i.seek(c.id==="show_03"||i.sampleOptions?.().find(j=>j.id===c.id)?.endPolicy==="hold"?Math.min(c.time,i.duration):c.time%i.duration),{actions:[]};let ce=p?x()/1e3:null,z=E.tick(Y);if(f==="arm-failed")return H(),f="arm-failed",z;if(z.actions.length){let j=z.actions[0];if(j.type==="snowbreak_arm_preview"||j.type==="raise_hand"){if(f==="local-arm-preview")try{o.apply(j.progress)}catch{H(),f="arm-failed"}return z}j.type==="snowbreak_standby"&&f==="standby-preview"?i.seekStandby(j.progress*i.standbyDuration):f!=="standby-preview"&&i.seek(ce===null?j.progress*i.duration:Math.min(i.duration,ce))}return z}function N(){if(w)return C(w);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};E.clear("standby-switch");let Y={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),E.dispatch(Y,S,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:Y,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function H(Y="sample-stop"){c=null,l=null,o?.restore(),o=null,h++,E.clear(Y),t&&(t.pause(),t.currentTime=0),p=!1,_=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),f="stopped"}function L(Y="right"){if(!["left","right"].includes(Y))return{accepted:!1,reason:"invalid-arm-side"};let ce=Y==="left"?i.leftArmPreview:i.armPreview;if(!ce?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(f==="standby-preview"&&H(),E.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{ce.begin(),o=ce}catch{return ce.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let z={type:"snowbreak_arm_preview",side:Y,source:"manual-preview",priority:80};return E.dispatch(z,S,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:z,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function I(Y){S.localActions.raise_hand.enabled=!!Y,!Y&&o&&H()}function W(Y,ce={}){let z=xf(Y,ce);if(z.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let j=Ka(z,S);if(j.stopped||!j.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:j};if(f==="standby-preview"&&H(),E.activeCount)return{accepted:!1,reason:"sample-busy",plan:j};let ye=E.dispatch(z,S,j);return f==="arm-failed"?(H(),f="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:j}):ye}async function F(Y,{withVoice:ce=!0}={}){if(!b.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(E.activeCount&&f!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let z=Xm(Y,b);if(!z)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(Y.frequency)||Y.frequency<1||Y.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let j=n?.(z.sampleId)||null;if(ce&&!j)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let ye=xf("surface_reaction",{target:z.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!ce}),De=Ka(ye,S,{planId:"surface-reaction-"+ ++u});if(De.stopped||!De.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};H();try{i.selectSample(z.sampleId),de(j)}catch{try{N()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let xe={id:De.planId,sampleId:z.sampleId,touch:Y,withVoice:!!ce},me=++h;m=xe,_=null,p=!!ce,ce&&(r(),t.currentTime=0,s(!0));let Ae=E.dispatch(ye,S,De);if(!Ae.accepted)return m=null,p=!1,s(!1),{...Ae,handled:!1};if(y("started",xe),!ce)return{...Ae,handled:!0};try{return await t.play(),me!==h?{accepted:!1,handled:!0,reason:"superseded"}:{...Ae,handled:!0}}catch{return me===h&&(H("audio-play-failed"),f="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function U(Y){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};H();try{let ce=i.selectSample(Y);return n&&de(n(Y)),i.startAsStandby&&N(),{accepted:!0,...ce}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function V(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(f==="standby-preview"&&H(),E.activeCount||p)return{accepted:!1,reason:"sample-busy"};let Y=++h;r(),t.currentTime=0,_=null,p=!0,s(!0);let ce=R();try{return await t.play(),Y!==h?{accepted:!1,reason:"superseded"}:ce}catch{return Y===h&&(H("audio-play-failed"),f="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let le=()=>{p&&k(0)},fe=()=>{p&&(H("audio-error"),f="audio-failed")};function de(Y){if(Y&&(!Number.isFinite(Y.duration)||Y.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",le),t?.removeEventListener("error",fe),t=Y||null,_=null,t?.addEventListener("ended",le),t?.addEventListener("error",fe)}return de(t),{bus:E,capability:S,enterScene:C,playSceneReaction:O,dispatchSurfaceTouch:F,selectSample:U,setLocalActionsEnabled:I,dispatchSemantic:W,playArmPreview:L,playSample:R,playWithVoice:V,tick:k,stop:H,enterStandby:N,setStandbyAfterSample:Y=>g=!!Y,snapshot:()=>({sceneId:c?.id||l?.id||null,sceneTime:c?.time||0,localReaction:d?{...d,touch:void 0}:null,sampleDuration:i.duration,status:f,active:E.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!_,originalInteractionVerified:!1})}}async function eg(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",c)},o=()=>{a(),n()},c=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",c),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function tg(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return yM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let c of e.samples){let l=t.samples.find(f=>f.id===c.id),u=i.getAsset(c.assetRole);if(n.has(c.id)||!l||l.sourceShowElementId!==c.sourceShowElementId||u?.kind!=="audio"||c.language!=="Chinese"||c.originalSyncVerified!==!1||!Number.isInteger(c.eventId)||c.eventId<=0||!Number.isInteger(c.voiceCharacterId)||c.voiceCharacterId<=0||typeof c.voiceId!="string"||c.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(c.id),r.push({id:c.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let c of e.events){let l=i.getAsset(c.assetRole);if(n.has(c.id)||l?.kind!=="audio"||!Number.isInteger(c.eventId)||c.eventId<=0||c.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(c.id),r.push({id:c.id,asset:l})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(c=>eg(c.asset))),a=new Map,o=[];for(let c=0;c<s.length;c++){let l=s[c];l.status==="fulfilled"?a.set(r[c].id,l.value):o.push(r[c].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:c=>a.get(c)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let c of a.values())c.dispose();a.clear()}}}async function yM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,_]of[[e.samples,!0],[e.events,!1]])for(let m of g){let d=t.samples.find(v=>v.id===m.id),b=i.getAsset(m.assetRole),M=i.current.resources.find(v=>v.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||b?.kind!=="audio"||!M||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||_&&(!d||d.sourceShowElementId!==void 0&&(!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||d.sourceShowElementId!==m.sourceShowElementId)))throw new Error("Bilingual voice identity mismatch");let x=m.language+":"+m.id+":"+m.eventId;if(r.has(x))throw new Error("Duplicate bilingual voice choice");r.add(x);let S=m.language+":"+m.id;n.has(S)||n.set(S,[]),n.get(S).push({hash:M.assetId,weight:m.weight,eventId:m.eventId}),s.set(M.assetId,b)}if(!r.size)throw new Error("Empty bilingual voice catalog");let c=[...s],l=0;await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;l<c.length;){let[g,_]=c[l++];try{a.set(g,await eg(_))}catch{o.push(g)}}}));let u="Chinese",f=!1;function h(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(f)return null;let _=(n.get(u+":"+g)||[]).filter(b=>a.has(b.hash)),m=_.reduce((b,M)=>b+M.weight,0);if(!_.length||!Number.isFinite(m)||m<=0)return null;let d=Math.random()*m;for(let b of _)if(d-=b.weight,d<0)return a.get(b.hash).audio;return a.get(_.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:h,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(h(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,_])=>g.startsWith(u+":")&&_.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){f=!0;for(let g of a.values())g.dispose();a.clear()}}}var ng=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function ig(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let _=/^(surface_\d+):(\d+)$/.exec(p);return!!_&&!!Lr({mesh:_[1],triangle:Number(_[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function c(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function l(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let _=t.get(p);if(ng(_,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:_,after:g});let m=s.get(p);return ng(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function f(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function h(p,g,_){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let d of m)o(d.key,d[_]);return g.push(m),!0}return{begin:c,set:l,commit:u,cancel:f,undo:()=>h(n,r,"before"),redo:()=>h(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function rg(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let c={};try{c=n()}catch{}let l=ig(c),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let f=document.createElement("label"),h=document.createElement("input");h.type="checkbox",h.id="snowSurfaceEdit",f.append(h,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(f);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[U,V]of Object.entries(Hi))p.add(new Option(V,U));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),_=document.createElement("input");_.type="checkbox",_.id="snowSurfaceShow",g.append(_,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[U,V]of Object.entries(Hi)){let le=document.createElement("span");le.textContent="\u25A0 "+V+" ",le.style.color="#"+pf[U].toString(16).padStart(6,"0"),m.appendChild(le)}t.appendChild(m);let d=document.createElement("button"),b=document.createElement("button");d.id="snowSurfaceUndo",b.id="snowSurfaceRedo",d.textContent="\u64A4\u9500\u6807\u6CE8",b.textContent="\u91CD\u505A\u6807\u6CE8",t.append(d,b);let M=document.createElement("p");M.id="snowSurfaceOverlayInfo",t.appendChild(M);let x=document.createElement("button");x.id="snowSurfaceReset",x.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(x);let S=document.createElement("p");S.id="snowSurfaceStatus",S.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(S);let v=null,w=0,y=!1,E=U=>{let V=Za(U);return Lr(U,V?{[V]:l.get(V)}:{})};function R(){if(y)return;let U=l.state();d.disabled=!U.undo,b.disabled=!U.redo;let V=i.setSurfaceLabels?.(l.snapshot(),_.checked);M.textContent=_.checked?`\u5DF2\u663E\u793A ${V?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${V?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function C(){w||(w=requestAnimationFrame(()=>{w=0,R()}))}function O(){r(l.snapshot()),R()}function k(){if(!v)return;v.mode==="paint"&&l.cancel(),s.cancel();let U=v.id;v=null,e.hasPointerCapture(U)&&e.releasePointerCapture(U),R()}h.onchange=()=>{k(),h.checked&&(_.checked=!0),R()},p.onchange=k,_.onchange=R,d.onclick=()=>{k(),l.undo()&&(O(),S.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},b.onclick=()=>{k(),l.redo()&&(O(),S.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},x.onclick=()=>{k(),l.begin();for(let U of Object.keys(l.snapshot()))l.set(U,void 0);l.commit()&&O(),S.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function N(U){let V=Za(U);!V||!U.alphaVerified||(l.set(V,v.region||void 0),C(),S.textContent=`\u5F53\u524D\u5171 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${Hi[v.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function H(U){if(v||e.dataset.snowbreakFrameEdit==="true"||!h.checked&&!o())return;U.stopPropagation();let V=i.pickSurface(U.clientX,U.clientY);if(v={id:U.pointerId,mode:h.checked?"paint":"touch",region:p.value},e.setPointerCapture(U.pointerId),v.mode==="paint"){l.begin();try{N(V)}catch(le){S.textContent=le.message}}else{let le=E(V);i.senseTouch?.(V,le),le?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:le,source:"skinned-surface"}),v.known=!0,v.hit=V):V?.alphaVerified?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),v.known=!0,v.hit=V):S.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function L(U){if(v?.id===U.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){k();return}if(U.stopPropagation(),v.mode==="paint")try{N(i.pickSurface(U.clientX,U.clientY))}catch(V){S.textContent=V.message}else v.known&&s.move({pointerId:U.pointerId,x:U.clientX,y:U.clientY})}}function I(U){if(v?.id!==U.pointerId)return;U.stopPropagation();let V=v;if(v=null,V.mode==="paint")l.commit()&&O(),S.textContent=`\u5DF2\u4FDD\u5B58 ${l.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(V.known&&o()){let le=s.finish({pointerId:U.pointerId,x:U.clientX,y:U.clientY});le&&(le.surface=V.hit,S.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+le.regionLabel,a(le))}else s.cancel();e.hasPointerCapture(U.pointerId)&&e.releasePointerCapture(U.pointerId)}function W(U){v?.id===U.pointerId&&k()}for(let[U,V]of[["pointerdown",H],["pointermove",L],["pointerup",I],["pointercancel",W],["lostpointercapture",W]])e.addEventListener(U,V);function F(U){if(!Array.isArray(U)||U.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");k(),l.begin();let V=0;try{for(let le of U){let fe=Za(le.hit);if(!fe||!le.hit.alphaVerified||l.has(fe)||l.state().count>=3e4)continue;let de={id:le.id,source:"vision-reviewed",confidence:le.confidence,model:String(le.model||"").slice(0,128),visible:!0};Lr(le.hit,{[fe]:de})&&(l.set(fe,de),V++)}l.commit()&&O()}catch(le){throw l.cancel(),R(),le}return S.textContent=`\u5DF2\u91C7\u7528 ${V} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,V}return R(),{applyReviewed:F,classify:E,state:l.state,dispose(){k(),y=!0,w&&cancelAnimationFrame(w);for(let[U,V]of[["pointerdown",H],["pointermove",L],["pointerup",I],["pointercancel",W],["lostpointercapture",W]])e.removeEventListener(U,V)}}}var Tt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),ag=[Tt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Tt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Tt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Tt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Tt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Tt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Tt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Tt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Tt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Tt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Tt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Tt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Tt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Tt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Tt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Tt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Tt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Tt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Tt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Tt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Tt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Tt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Tt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Tt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Tt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Tt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Tt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Tt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Tt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],sg=Object.freeze(Object.fromEntries(ag.map(i=>[i.id,Object.freeze({...i})]))),fT=Object.freeze(ag.map(i=>i.id));function og(i){return sg[i]&&sg[i].label||String(i||"\u8EAB\u4F53")}var _M="body-touch/1",vM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function lg(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...vM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function c(d){a=String(d||"")}function l(d){o=String(d||"screen")}function u(d){return d?(n={pointerId:d.pointerId,x0:Number(d.x)||0,y0:Number(d.y)||0,x:Number(d.x)||0,y:Number(d.y)||0,t0:e(),path:[[Number(d.x)||0,Number(d.y)||0]],region:d.region||null,confidence:Number(d.confidence)||0,source:d.source||o},{...n}):null}function f(d){if(!n||!d)return null;let b=Number(d.x)||0,M=Number(d.y)||0;return n.x=b,n.y=M,n.path.length<t.maxPath&&n.path.push([b,M]),{x:b,y:M,moved:Math.hypot(b-n.x0,M-n.y0)}}function h(){let d=0;for(let b=1;b<n.path.length;b++)d+=Math.hypot(n.path[b][0]-n.path[b-1][0],n.path[b][1]-n.path[b-1][1]);return{length:d,points:n.path.length}}function p(d,b){if(!n)return null;d&&f(d);let M=e(),x=Math.max(0,M-n.t0),S=n.x-n.x0,v=n.y-n.y0,w=Math.hypot(S,v),y=h(),E=b||"";if(!E)if(x>=t.longMinMs&&w<=t.moveTolerancePx)E="long_press";else if(w>=t.strokeMinPx&&x>=t.strokeMinMs&&y.length>=t.strokeMinPx)E="stroke";else if(w<=t.moveTolerancePx&&x<=t.tapMaxMs){let N=n.region&&(n.region.id||n.region)||"body";r&&M-r.at<=t.doubleGapMs&&r.region===N?(E="double_tap",r=null):(E="tap",r={at:M,region:N})}else E="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},C=typeof R=="string"?R:R.id||"body";s.push({at:M,region:C}),s=s.filter(N=>M-N.at<=t.frequencyWindowMs);let O=s.filter(N=>N.region===C).length,k={schema:_M,type:"body_touch",modelId:a,region:C,regionLabel:R.label||og(C),side:R.side||"",group:R.group||"",gesture:E,durationMs:Math.round(x),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:O,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+v.toFixed(1)},distance:+w.toFixed(1),pathLength:+y.length.toFixed(1),at:Math.round(M)};return n=null,k}function g(){n=null}function _(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:f,finish:p,cancel:g,reset:_,state:m,setModelId:c,setSource:l,config:t}}var $a=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),yf=Object.freeze({...$a,scale:3,x:-.12,y:-.02});function _f(i){return i&&Object.keys($a).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function vf(i,e,t,{onEditing:n=()=>{},initialFrame:r=yf,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:c=!0,verticalSign:l=1,dragScale:u=()=>({x:1,y:1})}={}){let f;try{f=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(_f(f)&&(!o||Number.isFinite(f.depth)&&Math.abs(f.depth)<=1.5)?f:_f(r)?r:yf);let h=document.createElement("section");h.id=a+"Editor",h.hidden=!0,h.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(h,p);let g=!1,_=null,m=0,d=null,b=null,M=new Map,x=new Map,S=document.createElement("select");S.id=a+"DragMode",S.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),S.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let v=document.createElement("div");v.textContent=s,h.append(v,S);let w=(F,U,V)=>{let le=document.createElement("button");return le.textContent=F,le.id=U.replace("presentation",a),le.onclick=V,h.append(le),le};function y(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let F=i.frameState();for(let[U,V]of x)V.value=F[U]}function R(F){i.setFrame({...i.frameState(),...F}),E()}function C(){m=0,d&&(R(d),d=null)}function O(F){d={...d||{},...F},m||(m=requestAnimationFrame(C))}function k(F){m&&(cancelAnimationFrame(m),C()),!F&&_&&R(_),y(),g=!1,h.hidden=!0,p.hidden=!0;for(let U of M.keys())e.hasPointerCapture(U)&&e.releasePointerCapture(U);M.clear(),b=null,e.dataset.snowbreakFrameEdit="false",n(!1)}w("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{R(_f(r)?r:yf),y()}),w("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{R($a),y()}),w("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{h.hidden=!0,p.hidden=!1}),w("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>k(!0)),w("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>k(!1)),p.onclick=()=>k(!0);for(let[F,U,V,le,fe]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...c?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let de=document.createElement("label");de.textContent=U;let Y=document.createElement("input");Y.type="range",Y.min=V,Y.max=le,Y.step=fe,Y.id=a+"_"+F,Y.style.width="100%",Y.oninput=()=>O({[F]:Number(Y.value)}),Y.onchange=()=>{C(),y()},x.set(F,Y),de.append(Y),h.append(de)}let N=F=>({x:F.clientX,y:F.clientY});function H(F){g&&(F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,N(F)),e.setPointerCapture(F.pointerId),b={frame:i.frameState(),points:[...M.values()]})}function L(F){if(!g||!M.has(F.pointerId)||!b)return;F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,N(F));let U=[...M.values()],V=b.points,le=b.frame;if(U.length>=2&&V.length>=2){let fe=de=>Math.hypot(de[0].x-de[1].x,de[0].y-de[1].y);O({scale:le.scale*fe(U)/Math.max(5,fe(V))})}else if(U.length===1&&V.length===1){let fe=(U[0].x-V[0].x)/e.clientWidth,de=(U[0].y-V[0].y)/e.clientHeight;O(S.value==="rotate"?{yaw:le.yaw+fe*300,pitch:le.pitch+de*100}:{x:le.x+fe*u().x,y:le.y+de*l*u().y})}}function I(F){!g||!M.has(F.pointerId)||(F.preventDefault(),F.stopImmediatePropagation(),M.delete(F.pointerId),e.hasPointerCapture(F.pointerId)&&e.releasePointerCapture(F.pointerId),m&&(cancelAnimationFrame(m),C()),y(),b={frame:i.frameState(),points:[...M.values()]})}let W=[["pointerdown",H],["pointermove",L],["pointerup",I],["pointercancel",I]];for(let[F,U]of W)e.addEventListener(F,U,!0);return{get active(){return g},toggle(){if(g){k(!0);return}g=!0,_=i.frameState(),E(),h.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&k(!0)},dispose(){g&&k(!0);for(let[F,U]of W)e.removeEventListener(F,U,!0);h.remove(),p.remove()},state:()=>i.frameState()}}var hg=!0,ei=document.querySelector("#stage"),cg=document.querySelector("#status"),Vi=document.querySelector("#editor"),Dn=null,ja=null,Zs=null,ug=Promise.resolve(),Ja={},Mf="Chinese",Sf=null,ti=0,Nr="",wf,Le,at,En,Ec,Un,vi,eo,bt,wc=0,wn=!1,Qa=!0,Ur=Af(i=>Tf(bt,i.tempo,performance.now())),bi=document.createElement("button");bi.id="finishPaint";bi.hidden=!0;bi.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(bi);function $s(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),bi.hidden=!0,Vi.classList.remove("open")}bi.onclick=$s;var nn=i=>{let e={...i,nonce:Nr};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},bf=i=>{cg.textContent=i,cg.hidden=!i};function Tc(){window.__snowbreakMigration=null,Zs=null,vi?.dispose(),vi=null,Ur.close(),bt=null,bi.hidden=!0,Un?.dispose(),eo?.dispose(),Ec?.dispose(),at?.stop("renderer-close"),En?.dispose(),Le?.dispose(),wf?.dispose(),eo=Un=Ec=at=En=Le=wf=null,Vi.replaceChildren()}function Ys(i,e,t){let n=++ti,r=ug.catch(()=>{}).then(()=>n===ti?bM(i,e,t,n):void 0);return ug=r,r}async function bM(i,e,t,n){if(Nr=e,wn=!1,ei.dataset.snowbreakPaused="false",t&&Dn?.manifest?.characterId)try{localStorage.setItem(Dn.manifest.characterId.toLowerCase()+"-collection-selection",t)}catch{}if(Tc(),bf("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026"),t&&await new Promise(o=>setTimeout(o,120)),n!==ti)return;let r,s,a;try{if(t){if(!Dn)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Dn.selectVariant(t)}else{Dn=null,ja=i;let x=typeof i=="string"?i.match(/^companion-snowbreak:\/\/local\/package\/([A-Za-z0-9._-]+)$/):null;if(x)r=await yd(x[1]);else{let S=await fetch(i);if(!S.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await _d(new Uint8Array(await S.arrayBuffer()))}}if(!/^[A-Za-z0-9_-]{1,64}$/.test(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await Ym(ei,r.runtime,{isCurrent:()=>n===ti,universalMotions:Sf,performanceMode:Ja.mode||null}),a=r.runtime.getAsset("voiceCatalog")?await tg(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==ti){s.dispose(),a.dispose(),r.runtime.dispose();return}Dn=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),wf=r.runtime,Le=s,En=a,Le.setRenderBudget(Ja),En.setLanguage?.(Mf);let o=Le.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,at=Qm(Le,{audioForSample:x=>En.getAudio(x)}),Le.sceneInteractions.configure({beforeDrag:()=>{bt=null,Le.embodiment.releaseHands(),Le.resetSenses()},scene:()=>at.snapshot().sceneId||Le.editingScene,reaction:x=>{at.playSceneReaction(x,{withVoice:Qa})},voice:x=>{if(Qa){let S=En.getAudio(x);S&&(S.currentTime=0,S.play().catch(()=>{}))}},event:nn}),Le.showFaceCandidate(!0);let c=Le.sampleOptions().find(x=>x.id===Le.sampleState().sampleId),l="resting-scene:"+r.manifest.characterId+":"+r.selection?.mode,u=localStorage.getItem(l);c?.persistentState?at.enterScene(Le.sampleOptions().some(x=>x.id===u&&x.persistentState)?u:c.id):at.enterStandby(),Le.sceneSelectionKey=l,Le.faceViewer(),wc=performance.now();let f=null,h=x=>{if(nn({type:"editing",active:x}),x){let S=at.snapshot();f=S.sceneId?{id:S.sceneId,time:S.sceneTime}:null,Le.editingScene=f?.id||null,Le.sceneInteractions.cancel(),at.stop("placement-edit"),f&&(Le.selectSample(f.id),Le.seek(f.time%Le.duration)),$s()}else wn||(f?at.enterScene(f.id,f.time):at.enterStandby(),f=null,Le.editingScene=null)},p=()=>{vi?.dispose();let x=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";vi=vf({setFrame:Le.setModelFrame,frameState:Le.modelFrameState},ei,"model-placement:"+x+r.selection?.mode+":"+(at.snapshot().sceneId||"main"),{initialFrame:{...$a,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Le.modelDragScale,onEditing:h})};Le.setupModelEditor=p,p(),Un=vf(Le,ei,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:Le.presentationDefault,onEditing:h}),eo=Rf(Le,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let g="";Le.setFrameHandler(()=>{let x=performance.now();if(wn||at.tick(Math.min(100,Math.max(0,x-wc))),wc=x,!wn&&bt){let y=oo(bt,x),E=bt.duration,R=bt.stop===void 0?1:Math.max(0,1-(x-bt.stop)/300);if(y>=E||R===0)bt=null;else{let C=Math.max(0,Math.min(1,y/.3,(E-y)/(.3*bt.rate),R)),O=C*C*(3-2*C);Le.applyLearnedMotion(bt.id,y,O,{amplitude:Ur.get().amplitude})}}let S=at.snapshot(),v=bt?"learned:"+bt.id:S.status,w=v+":"+(S.sceneId||"")+":"+Le.sampleState().sampleId;w!==g&&(g=w,nn({type:"selfState",state:Ks()}),nn({type:"playback",active:!!bt||["playing","scene-preview","local-arm-preview"].includes(S.status),status:v,label:bt?Le.learnedOptions().find(y=>y.id===bt.id)?.label:Le.sampleOptions().find(y=>y.id===Le.sampleState().sampleId)?.label}))});let _=r.manifest.resources.filter(x=>x.kind==="geometry").map(x=>x.assetId).join("-"),m="surface:"+r.manifest.skinId+":"+_;Ec=rg(Le,ei,Vi,{load:()=>JSON.parse(localStorage.getItem(m)||"{}"),save:x=>localStorage.setItem(m,JSON.stringify(x)),tracker:lg({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!wn,onEvent:async x=>{n!==ti||wn||(nn({type:"touch",region:x.region,label:x.regionLabel,gesture:x.gesture,confidence:x.confidence,source:x.regionSource,durationMs:x.durationMs,frequency:x.frequency,completed:!0}),hg||await at.dispatchSurfaceTouch(x,{withVoice:Qa}))}});let d=document.createElement("button");d.textContent="\u5173\u95ED\u5DE5\u5177",d.onclick=$s,Vi.prepend(d);let b=Vi.querySelector("#snowSurfaceRegion"),M=Vi.querySelector("#snowSurfaceEdit");M.addEventListener("change",()=>{M.checked&&(Vi.classList.remove("open"),bi.textContent="\u5B8C\u6210"+b.selectedOptions[0].textContent+"\u6807\u6CE8",bi.hidden=!1)}),bf(""),nn({type:"ready",bodyActions:[...Le.embodiment.snapshot().available,...Le.sceneInteractions.available()],selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Le.sampleOptions().map(x=>x.id),sampleLabels:Object.fromEntries(Le.sampleOptions().map(x=>[x.id,x.label])),voices:En.snapshot().available,learned:Le.learnedOptions().map(x=>x.id)}),window.__snowbreakMigration={display:Le,adapter:at,voices:En,editor:Ec,presentation:Un,manifest:r.manifest}}catch(o){if(n!==ti){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}Tc(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),bf("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),nn({type:"error",message:String(o.message||o)})}}async function MM(i){if(i.type==="hardwareBudget"){let e=Ja.mode;if(Ja={thermal:i.thermal,lowPower:i.lowPower,...i.mode?{mode:i.mode}:{}},i.mode)try{localStorage.setItem("snowRenderMode",i.mode)}catch{}if(Le?.setRenderBudget(Ja),Le&&i.reloadOnTierChange&&e&&i.mode&&e!==i.mode){if(Dn?.selection?.id)return Ys(null,Nr,Dn.selection.id);if(ja)return Ys(ja,Nr)}return}if(i.type==="releaseMemory"){if(En?.stop?.(),Le?.releaseCache?.(),i.reload){if(Dn?.selection?.id)return Ys(null,Nr,Dn.selection.id);if(ja)return Ys(ja,Nr)}return}if(i.type==="universalMotions"){if(Sf=i.catalog||null,Le){let e=Le.setUniversalMotions(Sf);nn({type:"universalReady",learned:e.map(t=>t.id)})}return}if(i.type==="dispose"){ti++,Tc();return}if(i.type==="load")return Ys(i.url,i.nonce);if(i.type==="variant")return Dn?.variants.some(e=>e.id===i.id)?Ys(null,Nr,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(Mf=i.language==="ja"?"Japanese":"Chinese",at){let e=at.snapshot();at.stop("voice-language-change"),En?.setLanguage?.(Mf),e.sceneId?at.enterScene(e.sceneId,e.sceneTime):at.enterStandby()}return}if(at){if(["body","gesture","sample","learned","stop"].includes(i.type)){En?.stop?.();let e=Le.sceneInteractions.snapshot();if(i.automatic&&(vi?.active||Un?.active||e.active||e.recovering)){nn({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}vi?.close(),Un?.close()}if(i.type==="body"){if(wn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Le.sceneInteractions.available().includes(i.id)){Le.sceneInteractions.command(i.id),nn({type:"selfState",state:Ks(),requestId:i.requestId});return}let e=ti;if(bt=null,at.snapshot().sceneId||(at.stop("body-command"),at.enterStandby()),Le.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==ti)return;nn({type:"selfState",state:Ks(),requestId:i.requestId});return}if(i.type==="gesture"){if(wn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");bt=null,at.snapshot().sceneId||(at.stop("ai-gesture"),at.enterStandby()),Le.embodiment.playGesture(i.id,i.plan),nn({type:"selfState",state:Ks()});return}if(i.type==="touchPolicy"){hg=!!i.aiControlled;return}if(i.type==="danceSettings"){Ur.set(i);return}if(i.type==="danceEdit"){Ur.toggle();return}if(i.type==="speechLevel"){Le.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Le.setGaze(i.x,i.y);return}if(i.type==="pause"){if(wn)return;En?.stop?.(),vi?.close(),Ur.close();let e=at.snapshot();Zs=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Le.sceneInteractions.suspend(),Le.embodiment.reset(),Le.resetSenses(),bt=null,wn=!0,eo?.close(),Un?.close(),ei.dataset.snowbreakPaused="true",at.stop("background"),$s();return}if(i.type==="resume"){if(!wn)return;wn=!1,ei.dataset.snowbreakPaused="false",wc=performance.now(),Zs?(at.enterScene(Zs.id,Zs.time),Zs=null):at.enterStandby();return}if(i.type==="stop"){if(Le.embodiment.reset(),bt){bt.stop=performance.now();return}at.stop(),at.enterStandby();return}if(i.type==="officialTouchPoints"){Le.sceneInteractions.togglePoints()||nn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){bt=null,Un.close(),Vi.classList.contains("open")||!bi.hidden?$s():Vi.classList.add("open");return}if(i.type==="lightingEdit"){Un.close(),$s(),eo.toggle();return}if(i.type==="modelEdit"){bt=null,Un.close(),vi.toggle();return}if(i.type==="modelFrame"){Le.setModelFrame(i.frame);return}if(i.type==="frameEdit"){bt=null,vi.close(),Un.toggle();return}if(i.type==="scene")return Le.setSceneVisible(!!i.visible);if(i.type==="room")return Le.setRoomVisible(!!i.visible);if(i.type==="voice"){if(Qa=!!i.enabled,!Qa){En?.stop?.();let e=at.snapshot().sceneId;at.stop("voice-disabled"),e?at.enterScene(e):at.enterStandby()}return}if(i.type==="sample"&&Le.sampleOptions().some(e=>e.id===i.id)){if(Le.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Le.sampleOptions().find(t=>t.id===i.id)?.persistentState){bt=null,vi.close(),Le.embodiment.reset(),at.enterScene(i.id),Le.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Le.sceneSelectionKey,i.id),Le.setupModelEditor(),nn({type:"selfState",state:Ks()});return}if(at.snapshot().sceneId){let t=i.id==="head"?Le.sceneInteractions.headReaction():null;await at.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Le.embodiment.releaseHands(),bt=null,Un.close(),wn=!1,at.stop(),at.selectSample(i.id),at.setStandbyAfterSample(!0),(i.withVoice&&En.getAudio(i.id)?await at.playWithVoice():at.playSample()).accepted||nn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Le.embodiment.releaseHands();let e=Le.learnedOptions().find(t=>t.id===i.id);if(!e)return;Un.close(),at.stop("learned-motion"),at.enterStandby(),bt={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Ur.get().tempo:1}}}}function Ks(){if(!Le)return null;let i=Le.embodiment.snapshot(),e=at?.snapshot(),t=Le.sampleOptions().find(r=>r.id===Le.sampleState().sampleId),n=Le.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:bt?{id:bt.id,time:oo(bt,performance.now()),rate:bt.rate,amplitude:Ur.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Dn?.selection?.outfit||"unknown",mode:Dn?.selection?.mode||"unknown"}}function SM(){if(!Le||wn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ei.width,ei.height);i.width=Math.round(ei.width*e),i.height=Math.round(ei.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Le.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:Ks,portrait:SM,performance:()=>Le?.performanceState(),receive:i=>{MM(i).catch(e=>nn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{ti++,Tc()});nn({type:"pageReady"});})();
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
